const express = require('express');
const Producto = require('../models/Producto');
const { requireApiKey } = require('../middleware/apiKey');
const router = express.Router();

router.get('/', async (req, res) => {
  try { res.json(await Producto.find().sort({ createdAt: -1 })); }
  catch { res.status(500).json({ error: 'Error al consultar productos' }); }
});

router.post('/', requireApiKey, async (req, res) => {
  try {
    if (!req.body.nombre || !req.body.categoria) return res.status(400).json({ error: 'Faltan datos obligatorios' });
    res.status(201).json(await Producto.create({
      nombre: req.body.nombre, precio: req.body.precio, categoria: req.body.categoria,
      stock: req.body.stock, activo: req.body.activo ?? true
    }));
  } catch (error) { res.status(400).json({ error: error.message }); }
});

module.exports = router;
