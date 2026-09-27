const mongoose = require('mongoose');

const itemPedidoSchema = new mongoose.Schema({
  productoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
  nombre: { type: String, required: true },
  cantidad: { type: Number, required: true, min: 1 },
  precioUnitario: { type: Number, required: true, min: 0 }
}, { _id: false });

const eventoSchema = new mongoose.Schema({
  eventId: { type: String, required: true },
  type: { type: String, required: true },
  version: { type: Number, required: true },
  occurredAt: { type: String, required: true },
  data: { pedidoId: { type: String, required: true } }
}, { _id: false });

const pedidoSchema = new mongoose.Schema({
  cliente: {
    nombre: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true }
  },
  estado: { type: String, enum: ['pendiente', 'confirmado', 'cancelado'], default: 'pendiente' },
  items: {
    type: [itemPedidoSchema],
    validate: { validator: (items) => items.length > 0, message: 'El pedido debe tener al menos un item' }
  },
  total: { type: Number, required: true, min: 0 },
  confirmadoEn: Date,
  confirmacionIdempotencyKey: { type: String, unique: true, sparse: true },
  confirmacionEvento: eventoSchema,
  notificacionEstado: { type: String, enum: ['pendiente', 'procesada'], default: 'pendiente' },
  notificadoEn: Date
}, { timestamps: true });

module.exports = mongoose.model('Pedido', pedidoSchema);

