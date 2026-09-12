const amqp = require('amqplib');

const EXCHANGE = 'pedidos.exchange';
const ROUTING_KEY = 'pedido.confirmado';
const QUEUE = 'notificaciones.pedido-confirmado';
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
  await channel.assertExchange(EXCHANGE, 'direct', { durable: true });
  await channel.assertQueue(QUEUE, { durable: true });
  await channel.bindQueue(QUEUE, EXCHANGE, ROUTING_KEY);
  return channel;
}

async function publishPedidoConfirmado(event) {
  const activeChannel = await getChannel();
  const accepted = activeChannel.publish(EXCHANGE, ROUTING_KEY, Buffer.from(JSON.stringify(event)), {
    contentType: 'application/json',
    persistent: true,
    messageId: event.eventId,
    type: event.type
  });
  if (!accepted) throw new Error('RabbitMQ aplicó back-pressure al publicar el evento');
  await activeChannel.waitForConfirms();
}

async function closeRabbit() {
  if (connection) await connection.close();
}

module.exports = { EXCHANGE, ROUTING_KEY, QUEUE, getChannel, publishPedidoConfirmado, closeRabbit };
