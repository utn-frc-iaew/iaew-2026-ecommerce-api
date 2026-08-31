const express = require('express');
const mongoose = require('mongoose');
const Pedido = require('../models/Pedido');
const Producto = require('../models/Producto');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    if (!Array.isArray(req.body.items) || req.body.items.length === 0) {
      return res.status(400).json({
        error: 'El pedido debe tener al menos un item'
      });
    }

    const items = [];

    for (const item of req.body.items) {
      if (!mongoose.Types.ObjectId.isValid(item.productoId)) {
        return res.status(400).json({ error: 'ID de producto inválido' });
      }

      const producto = await Producto.findById(item.productoId);

      if (!producto || !producto.activo) {
        return res.status(400).json({ error: 'Producto inválido' });
      }

      if (!item.cantidad || item.cantidad < 1) {
        return res.status(400).json({ error: 'Cantidad inválida' });
      }

      items.push({
        productoId: producto._id,
        nombre: producto.nombre,
        cantidad: item.cantidad,
        precioUnitario: producto.precio
      });
    }

    const total = items.reduce((acum, item) => {
      return acum + item.cantidad * item.precioUnitario;
    }, 0);

    const pedido = await Pedido.create({
      cliente: req.body.cliente,
      items,
      total,
      estado: 'pendiente'
    });

    res.status(201).json(pedido);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/:id/confirmar', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: 'ID de pedido inválido' });
    }

    const pedido = await Pedido.findById(req.params.id);

    if (!pedido) {
      return res.status(404).json({ error: 'Pedido no encontrado' });
    }

    if (pedido.estado !== 'pendiente') {
      return res.status(409).json({ error: 'El pedido ya fue confirmado' });
    }

    for (const item of pedido.items) {
      const producto = await Producto.findById(item.productoId);

      if (!producto || !producto.activo || producto.stock < item.cantidad) {
        return res.status(409).json({
          error: `No hay stock suficiente para ${item.nombre}`
        });
      }
    }

    for (const item of pedido.items) {
      await Producto.findByIdAndUpdate(item.productoId, {
        $inc: { stock: -item.cantidad }
      });
    }

    pedido.estado = 'confirmado';
    pedido.confirmadoEn = new Date();
    await pedido.save();

    res.json(pedido);
  } catch (error) {
    res.status(500).json({ error: 'Error al confirmar pedido' });
  }
});

module.exports = router;
