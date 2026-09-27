const { sendError } = require('../lib/errors');

function requireApiKey(req, res, next) {
  const expected = process.env.INTERNAL_API_KEY;
  if (!expected) return sendError(res, 500, 'API key interna no configurada', 'API_KEY_NOT_CONFIGURED', false, 'Configurar INTERNAL_API_KEY en el servidor');
  if (req.header('x-api-key') !== expected) {
    return sendError(res, 401, 'API key inválida o ausente', 'API_KEY_INVALID', false, 'Enviar una x-api-key válida');
  }
  next();
}

module.exports = { requireApiKey };
