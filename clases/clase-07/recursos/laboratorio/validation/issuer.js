// Fixture de validación interna: firma JWT RS256 y publica JWKS. No es Auth0.
const http = require('node:http');
const { generateKeyPairSync, sign } = require('node:crypto');
const { publicKey, privateKey } = generateKeyPairSync('rsa', { modulusLength: 2048 });
const jwk = { ...publicKey.export({ format: 'jwk' }), kid: 'iaew-test', alg: 'RS256', use: 'sig' };
const issuer = 'http://issuer:8080/';
const encode = x => Buffer.from(JSON.stringify(x)).toString('base64url');
http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  if (req.url === '/.well-known/openid-configuration') return res.end(JSON.stringify({ issuer, jwks_uri: issuer + 'jwks' }));
  if (req.url === '/jwks') return res.end(JSON.stringify({ keys: [jwk] }));
  if (req.url === '/token') {
    const input = encode({ alg: 'RS256', kid: 'iaew-test', typ: 'JWT' }) + '.' + encode({ iss: issuer, aud: 'https://iaew-pedidos-api', sub: 'validation', scope: 'read:pedidos write:pedidos confirm:pedidos', iat: Math.floor(Date.now()/1000), exp: Math.floor(Date.now()/1000)+3600 });
    return res.end(JSON.stringify({ access_token: input+'.'+sign('RSA-SHA256',Buffer.from(input),privateKey).toString('base64url') }));
  }
  res.statusCode = 404; res.end('{}');
}).listen(8080);
