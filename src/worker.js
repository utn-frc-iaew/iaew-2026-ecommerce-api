require('dotenv').config();
const { connectDb } = require('./db');
const Pedido = require('./models/Pedido');
const { getChannel, QUEUE, closeRabbit } = require('./lib/rabbit');

function parsePedidoConfirmado(content) {
  const event = JSON.parse(content.toString());
  if (!event || event.type !== 'pedido.confirmado' || event.version !== 1 ||
      !event.eventId || !event.occurredAt || !event.data || typeof event.data.pedidoId !== 'string') {
    throw new Error('Contrato de pedido.confirmado inválido');
  }
  return event;
}

async function processMessage(message, activeChannel) {
  try {
    const event = parsePedidoConfirmado(message.content);
    const pedido = await Pedido.findOneAndUpdate(
      { _id: event.data.pedidoId, notificacionEstado: { $ne: 'procesada' } },
      { $set: { notificacionEstado: 'procesada', notificadoEn: new Date() } },
      { new: true }
    );
    if (pedido) console.log(`Notificación procesada para pedido ${pedido.id}; evento ${event.eventId}`);
    else console.warn(`Evento ${event.eventId} ya procesado o pedido inexistente`);
    activeChannel.ack(message);
  } catch (error) {
    console.error('No se procesó el mensaje:', error.message);
    activeChannel.nack(message, false, false);
  }
}

async function startWorker() {
  await connectDb();
  const channel = await getChannel();
  await channel.prefetch(1);
  await channel.consume(QUEUE, (message) => {
    if (message) processMessage(message, channel);
  }, { noAck: false });
  console.log(`Worker escuchando ${QUEUE}`);
}

if (require.main === module) {
  startWorker().catch((error) => { console.error('No se pudo iniciar worker:', error.message); process.exit(1); });
  process.on('SIGINT', async () => { await closeRabbit(); process.exit(0); });
}

module.exports = { parsePedidoConfirmado, processMessage };
