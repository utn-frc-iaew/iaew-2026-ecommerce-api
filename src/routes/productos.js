const express = require('express');
const Producto = require('../models/Producto');
const { requireApiKey } = require('../middleware/apiKey');
const { sendError } = require('../lib/errors');
const router = express.Router();

router.get('/', async (req, res) => {
  try { res.json(await Producto.find().sort({ createdAt: -1 })); }
  catch { sendError(res, 500, 'Error al consultar productos', 'PRODUCTS_QUERY_FAILED', true, 'Reintentar más tarde'); }
});

router.post('/', requireApiKey, async (req, res) => {
  try {
    if (!req.body.nombre || !req.body.categoria) return sendError(res, 400, 'Faltan datos obligatorios', 'PRODUCT_DATA_INVALID', false, 'Completar nombre y categoria');
    res.status(201).json(await Producto.create({
      nombre: req.body.nombre, precio: req.body.precio, categoria: req.body.categoria,
      stock: req.body.stock, activo: req.body.activo ?? true
    }));
  } catch (error) { sendError(res, 400, 'Producto inválido', 'PRODUCT_DATA_INVALID', false, 'Corregir los datos enviados', { message: error.message }); }
});

module.exports = router;
