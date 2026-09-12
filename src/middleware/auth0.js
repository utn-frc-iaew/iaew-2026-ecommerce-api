require('dotenv').config();
const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');

const validateAccessToken = auth({
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`,
  audience: process.env.AUTH0_AUDIENCE,
  tokenSigningAlg: 'RS256'
});

function requireScope(scope) {
  return [validateAccessToken, requiredScopes(scope)];
}

module.exports = { validateAccessToken, requireScope };
