const express = require('express');
const { connectDb } = require('./db');
const productosRouter = require('./routes/productos');
const pedidosRouter = require('./routes/pedidos');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/productos', productosRouter);
app.use('/pedidos', pedidosRouter);

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`API escuchando en http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('No se pudo conectar a MongoDB');
    console.error(error.message);
    process.exit(1);
  });
