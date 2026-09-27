const mongoose = require('mongoose');

const eventoProcesadoSchema = new mongoose.Schema({
  eventId: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  pedidoId: { type: mongoose.Schema.Types.ObjectId, required: true },
  procesadoEn: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('EventoProcesado', eventoProcesadoSchema);

