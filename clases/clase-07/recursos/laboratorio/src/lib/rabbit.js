const { withSpan, messageHeaders, SpanKind, log } = require('./observability');
const amqp = require('amqplib');
const { retryConfig } = require('./config');

const EXCHANGE = 'pedidos.exchange';
const ROUTING_KEY = 'pedido.confirmado';
const QUEUE = 'notificaciones.pedido-confirmado';
const RETRY_EXCHANGE = 'pedidos.retry.exchange';
const RETRY_QUEUE = 'notificaciones.pedido-confirmado.retry';
const DLX = 'pedidos.dlx';
const DLQ_ROUTING_KEY = 'pedido.confirmado.dlq';
const DLQ = 'notificaciones.pedido-confirmado.dlq';
let connection;
let channel;

function rabbitUrl() {
  if (process.env.RABBIT_URL) return process.env.RABBIT_URL;
  const user = encodeURIComponent(process.env.RABBIT_USER || 'iaew');
  const pass = encodeURIComponent(process.env.RABBIT_PASS || 'iaew-local');
  return `amqp://${user}:${pass}@localhost:5672`;
}

async function getChannel() {
  if (channel) return channel;
  connection = await amqp.connect(rabbitUrl());
  connection.on('error', (error) => console.error('Conexión RabbitMQ falló:', error.message));
  connection.on('close', () => { connection = undefined; channel = undefined; });
  channel = await connection.createConfirmChannel();
  const { retryDelayMs } = retryConfig();

  await channel.assertExchange(EXCHANGE, 'direct', { durable: true });
  await channel.assertExchange(RETRY_EXCHANGE, 'direct', { durable: true });
  await channel.assertExchange(DLX, 'direct', { durable: true });
  await channel.assertQueue(QUEUE, { durable: true });
  await channel.bindQueue(QUEUE, EXCHANGE, ROUTING_KEY);
  await channel.assertQueue(RETRY_QUEUE, {
    durable: true,
    arguments: {
      'x-message-ttl': retryDelayMs,
      'x-dead-letter-exchange': EXCHANGE,
      'x-dead-letter-routing-key': ROUTING_KEY
    }
  });
  await channel.bindQueue(RETRY_QUEUE, RETRY_EXCHANGE, ROUTING_KEY);
  await channel.assertQueue(DLQ, { durable: true });
  await channel.bindQueue(DLQ, DLX, DLQ_ROUTING_KEY);
  return channel;
}

async function confirmedPublish(activeChannel, exchange, routingKey, content, options) {
  const accepted = activeChannel.publish(exchange, routingKey, content, options);
  if (!accepted) throw new Error('RabbitMQ aplicó back-pressure al publicar');
  await activeChannel.waitForConfirms();
}

async function publishPedidoConfirmado(event) {
  return withSpan('pedido.publicar', { 'messaging.system': 'rabbitmq', 'messaging.destination.name': EXCHANGE, 'pedido.id': event.data.pedidoId, 'event.id': event.eventId }, async () => {
    const activeChannel = await getChannel();
    await confirmedPublish(activeChannel, EXCHANGE, ROUTING_KEY, Buffer.from(JSON.stringify(event)), {
      contentType: 'application/json', persistent: true, messageId: event.eventId,
      type: event.type, headers: messageHeaders({ 'x-retry-count': 0 })
    });
    log('pedido.published', { pedido_id: event.data.pedidoId, event_id: event.eventId });
  }, undefined, SpanKind.PRODUCER);
}

async function publishRetry(activeChannel, message, retryCount, reason) {
  await confirmedPublish(activeChannel, RETRY_EXCHANGE, ROUTING_KEY, message.content, {
    ...message.properties, persistent: true,
    headers: messageHeaders({ ...(message.properties.headers || {}), 'x-retry-count': retryCount, 'x-last-error': reason })
  });
}

async function publishDlq(activeChannel, message, reason, retryCount) {
  await confirmedPublish(activeChannel, DLX, DLQ_ROUTING_KEY, message.content, {
    ...message.properties, persistent: true,
    headers: messageHeaders({ ...(message.properties.headers || {}), 'x-retry-count': retryCount, 'x-dlq-reason': reason })
  });
}

async function closeRabbit() {
  const activeConnection = connection;
  connection = undefined;
  channel = undefined;
  if (!activeConnection) return;
  try {
    await activeConnection.close();
  } catch (error) {
    if (error?.name !== 'IllegalOperationError') throw error;
  }
}

module.exports = {
  EXCHANGE, ROUTING_KEY, QUEUE, RETRY_EXCHANGE, RETRY_QUEUE, DLX, DLQ_ROUTING_KEY, DLQ,
  getChannel, publishPedidoConfirmado, publishRetry, publishDlq, closeRabbit
};
