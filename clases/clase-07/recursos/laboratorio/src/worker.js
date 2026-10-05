require('dotenv').config();
const mongoose = require('mongoose');
const { connectDb } = require('./db');
const Pedido = require('./models/Pedido');
const EventoProcesado = require('./models/EventoProcesado');
const { retryConfig, integerFromEnv } = require('./lib/config');
const { log, withSpan, messageContext, attempts, workerDuration, SpanKind, SpanStatusCode } = require('./lib/observability');
const { getChannel, QUEUE, publishRetry, publishDlq, closeRabbit } = require('./lib/rabbit');

class PermanentMessageError extends Error {}
class TransientMessageError extends Error {}

function parsePedidoConfirmado(content) {
  let event;
  try { event = JSON.parse(content.toString()); }
  catch { throw new PermanentMessageError('JSON inválido'); }
  if (!event || event.type !== 'pedido.confirmado' || event.version !== 1 ||
      typeof event.eventId !== 'string' || event.eventId.length === 0 ||
      !event.occurredAt || !event.data || typeof event.data.pedidoId !== 'string' ||
      !mongoose.Types.ObjectId.isValid(event.data.pedidoId)) {
    throw new PermanentMessageError('Contrato de pedido.confirmado inválido');
  }
  return event;
}

function retryCountOf(message) {
  const value = Number(message.properties.headers?.['x-retry-count'] ?? 0);
  return Number.isInteger(value) && value >= 0 ? value : 0;
}

async function applyBusinessEffect(event, retryCount, dependencies = {}) {
  const config = dependencies.config || retryConfig();
  const PedidoModel = dependencies.PedidoModel || Pedido;
  const EventoModel = dependencies.EventoModel || EventoProcesado;
  const delay = integerFromEnv('WORKER_DELAY_MS', 0, { max: 10000 });
  if (delay) await withSpan('dependencia.simulada', { 'demo.delay_ms': delay }, () => new Promise(resolve => setTimeout(resolve, delay)));
  if (retryCount < config.simulatedFailures) throw new TransientMessageError(`Falla transitoria simulada ${retryCount + 1}/${config.simulatedFailures}`);

  if (await EventoModel.exists({ eventId: event.eventId })) return { duplicate: true };
  const pedido = await PedidoModel.findById(event.data.pedidoId);
  if (!pedido) throw new PermanentMessageError('Pedido inexistente');

  try {
    await EventoModel.create({ eventId: event.eventId, type: event.type, pedidoId: pedido._id });
  } catch (error) {
    if (error && error.code === 11000) return { duplicate: true };
    throw error;
  }
  try {
    pedido.notificacionEstado = 'procesada';
    pedido.notificadoEn = new Date();
    await pedido.save();
  } catch (error) {
    await EventoModel.deleteOne({ eventId: event.eventId });
    throw new TransientMessageError(`MongoDB no pudo persistir el efecto: ${error.message}`);
  }
  return { duplicate: false, pedidoId: String(pedido._id) };
}

async function processMessage(message, activeChannel, dependencies = {}) {
  const count = retryCountOf(message);
  const config = dependencies.config || retryConfig();
  const retryPublisher = dependencies.publishRetry || publishRetry;
  const dlqPublisher = dependencies.publishDlq || publishDlq;
  try {
    const event = parsePedidoConfirmado(message.content);
    const result = await applyBusinessEffect(event, count, { ...dependencies, config });
    log(result.duplicate ? 'pedido.duplicate' : 'pedido.processed', { pedido_id: event.data.pedidoId, event_id: event.eventId, attempt: count });
    activeChannel.ack(message);
    return result.duplicate ? 'duplicate' : 'processed';
  } catch (error) {
    const activeSpan = require('@opentelemetry/api').trace.getSpan(require('@opentelemetry/api').context.active());
    activeSpan?.recordException(error); activeSpan?.setStatus({ code: SpanStatusCode.ERROR, message: error.message });
    log('pedido.failed', { error_type: error.constructor.name, error_message: error.message, attempt: count }, 'error');
    if (!(error instanceof PermanentMessageError) && count < config.maxRetries) {
      await retryPublisher(activeChannel, message, count + 1, error.message);
      activeChannel.ack(message);
      log('pedido.retry', { attempt: count + 1, error_message: error.message }, 'warn');
      return 'retry';
    }
    const reason = error instanceof PermanentMessageError
      ? `permanente: ${error.message}`
      : `reintentos agotados (${count}/${config.maxRetries}): ${error.message}`;
    await dlqPublisher(activeChannel, message, reason, count);
    activeChannel.ack(message);
    log('pedido.dlq', { attempt: count, reason }, 'error');
    return 'dlq';
  }
}

async function observedMessage(message, channel) {
  const parent = messageContext(message.properties.headers);
  return withSpan('pedido.consumir', { 'messaging.system': 'rabbitmq', 'messaging.destination.name': QUEUE, 'event.id': message.properties.messageId || '', 'retry.count': retryCountOf(message) }, async () => {
    const start = performance.now();
    let result = 'unhandled';
    try { result = await processMessage(message, channel); return result; }
    finally {
      const attrs = { result };
      attempts.add(1, attrs); workerDuration.record((performance.now() - start) / 1000, attrs);
    }
  }, parent, SpanKind.CONSUMER);
}

async function startWorker() {
  await connectDb();
  const channel = await getChannel();
  await channel.prefetch(1);
  await channel.consume(QUEUE, (message) => {
    if (message) observedMessage(message, channel).catch((error) => {
      console.error('No se pudo enrutar el mensaje; queda sin ack para recuperación:', error.message);
    });
  }, { noAck: false });
  console.log(`Worker escuchando ${QUEUE}; MAX_RETRIES=${retryConfig().maxRetries}`);
}

if (require.main === module) {
  startWorker().catch((error) => { console.error('No se pudo iniciar worker:', error.message); process.exit(1); });
  process.on('SIGINT', async () => { await closeRabbit(); process.exit(0); });
}

module.exports = {
  PermanentMessageError, TransientMessageError, parsePedidoConfirmado,
  retryCountOf, applyBusinessEffect, processMessage
};
