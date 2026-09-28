const crypto = require('crypto');
const express = require('express');
const mongoose = require('mongoose');
const Pedido = require('../models/Pedido');
const Producto = require('../models/Producto');
const { publishPedidoConfirmado } = require('../lib/rabbit');
const { validateIdempotencyKey } = require('../lib/idempotency');
const { sendError } = require('../lib/errors');
const { requireScope } = require('../middleware/auth0');
const router = express.Router();

router.get('/', requireScope('read:pedidos'), async (req, res) => {
  try { res.json(await Pedido.find().sort({ createdAt: -1 })); }
  catch { sendError(res, 500, 'Error al consultar pedidos', 'ORDERS_QUERY_FAILED', true, 'Reintentar más tarde'); }
});

router.post('/', requireScope('write:pedidos'), async (req, res) => {
  try {
    if (!Array.isArray(req.body.items) || req.body.items.length === 0) return sendError(res, 400, 'El pedido debe tener al menos un item', 'ORDER_ITEMS_REQUIRED', false, 'Agregar al menos un item');
    const items = [];
    for (const item of req.body.items) {
      if (!mongoose.Types.ObjectId.isValid(item.productoId)) return sendError(res, 400, 'ID de producto inválido', 'PRODUCT_ID_INVALID', false, 'Corregir productoId');
      const producto = await Producto.findById(item.productoId);
      if (!producto || !producto.activo) return sendError(res, 400, 'Producto inexistente o inactivo', 'PRODUCT_INVALID', false, 'Elegir un producto activo');
      if (!Number.isInteger(item.cantidad) || item.cantidad < 1) return sendError(res, 400, 'Cantidad inválida', 'QUANTITY_INVALID', false, 'Enviar una cantidad entera positiva');
      items.push({ productoId: producto._id, nombre: producto.nombre, cantidad: item.cantidad, precioUnitario: producto.precio });
    }
    const total = items.reduce((sum, item) => sum + item.cantidad * item.precioUnitario, 0);
    res.status(201).json(await Pedido.create({ cliente: req.body.cliente, items, total }));
  } catch (error) { sendError(res, 400, 'Pedido inválido', 'ORDER_DATA_INVALID', false, 'Corregir los datos enviados', { message: error.message }); }
});

router.post('/:id/confirmar', requireScope('confirm:pedidos'), async (req, res) => {
  const key = req.header('Idempotency-Key');
  const invalidKey = validateIdempotencyKey(key);
  if (invalidKey) return sendError(res, 400, invalidKey.error, invalidKey.code, false, 'Enviar una clave válida y estable por operación', invalidKey.details);
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) return sendError(res, 400, 'ID de pedido inválido', 'ORDER_ID_INVALID', false, 'Corregir el ID del pedido');

  try {
    const keyOwner = await Pedido.findOne({ confirmacionIdempotencyKey: key }).select('_id');
    if (keyOwner && String(keyOwner._id) !== req.params.id) {
      return sendError(res, 409, 'La clave ya fue usada para otro pedido', 'IDEMPOTENCY_KEY_REUSED', false, 'Generar una nueva clave para esta operación');
    }

    const pedido = await Pedido.findById(req.params.id);
    if (!pedido) return sendError(res, 404, 'Pedido no encontrado', 'ORDER_NOT_FOUND', false, 'Verificar el ID del pedido');
    if (pedido.estado === 'confirmado' && pedido.confirmacionIdempotencyKey === key && pedido.confirmacionEvento) {
      res.set('Idempotency-Replayed', 'true');
      return res.status(200).json({ pedido, evento: pedido.confirmacionEvento, idempotencia: { key, replayed: true } });
    }
    if (pedido.estado !== 'pendiente') {
      return sendError(res, 409, 'El pedido ya fue confirmado con otra clave', 'IDEMPOTENCY_KEY_MISMATCH', false, 'Consultar el pedido sin repetir la confirmación');
    }

    for (const item of pedido.items) {
      const producto = await Producto.findById(item.productoId);
      if (!producto || !producto.activo || producto.stock < item.cantidad) {
        return sendError(res, 409, `No hay stock suficiente para ${item.nombre}`, 'INSUFFICIENT_STOCK', false, 'Revisar el pedido o reponer stock');
      }
    }
    for (const item of pedido.items) await Producto.findByIdAndUpdate(item.productoId, { $inc: { stock: -item.cantidad } });

    pedido.estado = 'confirmado';
    pedido.confirmadoEn = new Date();
    pedido.confirmacionIdempotencyKey = key;
    pedido.notificacionEstado = 'pendiente';
    pedido.confirmacionEvento = {
      eventId: crypto.randomUUID(), type: 'pedido.confirmado', version: 1,
      occurredAt: pedido.confirmadoEn.toISOString(), data: { pedidoId: pedido.id }
    };
    await pedido.save();

    try {
      await publishPedidoConfirmado(pedido.confirmacionEvento.toObject());
      res.set('Idempotency-Replayed', 'false');
      return res.status(200).json({ pedido, evento: pedido.confirmacionEvento, idempotencia: { key, replayed: false } });
    } catch (error) {
      console.error('Pedido confirmado; publicación RabbitMQ fallida:', error.message);
      return sendError(res, 503, 'El pedido quedó confirmado, pero no se pudo publicar el evento', 'EVENT_PUBLISH_FAILED', true, 'Consultar el pedido antes de decidir un reintento', { pedidoId: pedido.id, eventId: pedido.confirmacionEvento.eventId });
    }
  } catch (error) {
    if (error && error.code === 11000) return sendError(res, 409, 'La clave ya fue usada para otro pedido', 'IDEMPOTENCY_KEY_REUSED', false, 'Generar una nueva clave para esta operación');
    console.error('Error al confirmar pedido:', error.message);
    return sendError(res, 500, 'Error al confirmar pedido', 'ORDER_CONFIRMATION_FAILED', true, 'Reintentar con la misma Idempotency-Key');
  }
});

module.exports = router;
