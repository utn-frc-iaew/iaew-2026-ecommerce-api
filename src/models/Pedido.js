const mongoose = require('mongoose');

const itemPedidoSchema = new mongoose.Schema(
  {
    productoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Producto',
      required: true
    },
    nombre: {
      type: String,
      required: true
    },
    cantidad: {
      type: Number,
      required: true,
      min: 1
    },
    precioUnitario: {
      type: Number,
      required: true,
      min: 0
    }
  },
  { _id: false }
);

const pedidoSchema = new mongoose.Schema(
  {
    cliente: {
      nombre: {
        type: String,
        required: true,
        trim: true
      },
      email: {
        type: String,
        required: true,
        trim: true
      }
    },
    estado: {
      type: String,
      enum: ['pendiente', 'confirmado', 'cancelado'],
      default: 'pendiente'
    },
    items: {
      type: [itemPedidoSchema],
      validate: {
        validator: (items) => items.length > 0,
        message: 'El pedido debe tener al menos un item'
      }
    },
    total: {
      type: Number,
      required: true,
      min: 0
    },
    confirmadoEn: {
      type: Date
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Pedido', pedidoSchema);
