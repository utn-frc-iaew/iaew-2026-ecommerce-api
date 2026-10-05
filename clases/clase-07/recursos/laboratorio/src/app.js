require('dotenv').config();
const express = require('express');
const { connectDb } = require('./db');
const productosRouter = require('./routes/productos');
const pedidosRouter = require('./routes/pedidos');
const { validateAccessToken } = require('./middleware/auth0');
const { sendError } = require('./lib/errors');
const { closeRabbit } = require('./lib/rabbit');

const { observeHttp } = require('./lib/observability');
const app = express();
const port = process.env.PORT || 3000;
app.use(observeHttp);
app.use(express.json());
app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.use('/productos', productosRouter);
app.use('/pedidos', pedidosRouter);
app.get('/token-info', validateAccessToken, (req, res) => res.json({
  issuer: req.auth.payload.iss, audience: req.auth.payload.aud,
  subject: req.auth.payload.sub, scopes: req.auth.payload.scope
}));
app.use((err, req, res, next) => {
  if (err.status === 401) return sendError(res, 401, 'Token ausente, inválido o expirado', 'TOKEN_INVALID', false, 'Obtener y enviar un access token válido');
  if (err.status === 403) return sendError(res, 403, 'Permisos insuficientes', 'SCOPE_REQUIRED', false, 'Solicitar el scope requerido');
  if (err.type === 'entity.parse.failed') return sendError(res, 400, 'JSON inválido', 'INVALID_JSON', false, 'Corregir el cuerpo JSON');
  return next(err);
});
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.error('Error no controlado:', err.message);
  return sendError(res, 500, 'Error interno', 'INTERNAL_ERROR', true, 'Reintentar más tarde');
});

if (require.main === module) {
  connectDb().then(() => app.listen(port, () => console.log(`API escuchando en http://localhost:${port}`)))
    .catch((error) => { console.error('No se pudo conectar a MongoDB:', error.message); process.exit(1); });
  process.on('SIGINT', async () => { await closeRabbit(); process.exit(0); });
}

module.exports = app;
