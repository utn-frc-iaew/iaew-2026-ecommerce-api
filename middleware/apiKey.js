function requireApiKey(req, res, next) {
  const expected = process.env.INTERNAL_API_KEY;
  if (!expected) return res.status(500).json({ error: 'API key interna no configurada' });
  if (!req.header('x-api-key') || req.header('x-api-key') !== expected) {
    return res.status(401).json({ error: 'API key inválida o ausente' });
  }
  next();
}
module.exports = { requireApiKey };
