const express = require('express');
const Producto = require('../models/Producto');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const productos = await Producto.find().sort({ createdAt: -1 });
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al consultar productos' });
  }
});

router.post('/', async (req, res) => {
  try {
    if (!req.body.nombre || !req.body.categoria) {
      return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }

    const producto = await Producto.create({
      nombre: req.body.nombre,
      precio: req.body.precio,
      categoria: req.body.categoria,
      stock: req.body.stock,
      activo: req.body.activo ?? true
    });

    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
