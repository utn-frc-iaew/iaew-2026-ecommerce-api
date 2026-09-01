# Clase 03 - Actividad práctica

## Objetivo

Vas a convertir la API REST construida en la Clase 02 en un **Resource Server** protegido con OAuth 2.0, JWT y scopes usando Auth0 como **Authorization Server**.

La meta de la clase no es implementar login de usuarios finales. Vamos a trabajar el flujo **client_credentials**, típico de integraciones servicio a servicio: un cliente autorizado pide un access token en Auth0 y luego llama a nuestra API con `Authorization: Bearer <token>`.

Al finalizar, tu API deberá:

- mantener públicos `GET /health` y `GET /productos`;
- validar access tokens JWT emitidos por Auth0;
- verificar `issuer`, `audience`, firma y expiración del token;
- exigir scopes para crear productos, crear pedidos y confirmar pedidos;
- incluir un ejemplo mínimo de `api_key` con `x-api-key`;
- responder `401 Unauthorized`, `403 Forbidden` y `409 Conflict` en los casos correctos;
- documentar la configuración usada sin subir secretos reales.

## Caso de uso

En un e-commerce no todas las acciones tienen el mismo riesgo:

- consultar productos puede ser público;
- crear productos modifica el catálogo;
- crear pedidos registra una intención de compra;
- confirmar pedidos cambia estado y descuenta stock.

Regla de la clase:

```text
La API no confía en el cliente: valida quién emitió el token, para qué API fue emitido y qué scopes trae.
```

## Paso 1 - Preparar el proyecto

Usar el punto de partida indicado por la cátedra:

```bash
git fetch origin
git checkout clase-03-inicio
git checkout -b trabajo-clase-03
```

Instalar dependencias:

```bash
npm install
npm install express-oauth2-jwt-bearer
```

Crear `.env` desde `.env.example` si todavía no existe:

```text
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/iaew_ecommerce
AUTH0_DOMAIN=tu-tenant.us.auth0.com
AUTH0_AUDIENCE=https://iaew-ecommerce-api
INTERNAL_API_KEY=clave-interna-demo
```

Actualizar `.env.example` sin secretos reales:

```text
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/iaew_ecommerce
AUTH0_DOMAIN=tu-tenant.us.auth0.com
AUTH0_AUDIENCE=https://iaew-ecommerce-api
INTERNAL_API_KEY=colocar-api-key-local
```

Verificar que `.gitignore` incluya:

```text
node_modules/
.env
.DS_Store
npm-debug.log*
```

Ejecutar MongoDB si no está activo:

```bash
docker start iaew-mongo
```

Si el contenedor no existe:

```bash
docker run --name iaew-mongo -p 27017:27017 -d mongo:7
```

Checkpoint:

- MongoDB está corriendo.
- `npm run dev` inicia la API.
- `GET /health` responde `200 OK`.

## Paso 2 - Configurar Auth0

Entrar al dashboard de Auth0 y crear una API:

| Campo | Valor sugerido |
|---|---|
| Name | `IAEW E-commerce API` |
| Identifier / Audience | `https://iaew-ecommerce-api` |
| Signing Algorithm | `RS256` |

Agregar estos scopes o permisos en la API:

| Scope | Uso en esta actividad |
|---|---|
| `admin:productos` | Crear productos del catálogo. |
| `write:pedidos` | Crear pedidos. |
| `confirm:pedidos` | Confirmar pedidos. |

Crear una aplicación en Auth0:

| Campo | Valor |
|---|---|
| Application type | `Machine to Machine Applications` |
| API autorizada | `IAEW E-commerce API` |
| Permisos asignados | `admin:productos`, `write:pedidos`, `confirm:pedidos` |

Guardar para uso local:

- Auth0 Domain;
- Auth0 Audience;
- Client ID;
- Client Secret.

Importante: `Client ID` y `Client Secret` se usan para obtener tokens, pero **no se suben al repositorio**.

## Paso 3 - Obtener un access token

Usar el endpoint OAuth 2.0 `/oauth/token` de Auth0.

Ejemplo con `curl`:

```bash
curl --request POST \
  --url https://TU_AUTH0_DOMAIN/oauth/token \
  --header 'content-type: application/json' \
  --data '{
    "client_id": "TU_CLIENT_ID",
    "client_secret": "TU_CLIENT_SECRET",
    "audience": "https://iaew-ecommerce-api",
    "grant_type": "client_credentials"
  }'
```

La respuesta debe incluir:

```json
{
  "access_token": "eyJ...",
  "scope": "admin:productos write:pedidos confirm:pedidos",
  "expires_in": 86400,
  "token_type": "Bearer"
}
```

Copiar el `access_token` para probar la API.

Checkpoint:

- El token se obtiene desde Auth0.
- El `audience` pedido coincide con `AUTH0_AUDIENCE`.
- El token incluye los scopes asignados al cliente Machine to Machine.

## Paso 4 - Decodificar el JWT

Abrir `https://jwt.io/` o una herramienta equivalente y revisar el access token.

Verificar estos claims:

| Claim | Qué validar |
|---|---|
| `iss` | Debe corresponder al tenant de Auth0. |
| `aud` | Debe incluir `https://iaew-ecommerce-api`. |
| `scope` | Debe incluir los permisos asignados. |
| `exp` | Debe tener una fecha de expiración. |
| `sub` | Debe identificar al cliente Machine to Machine. |

No pegues tokens reales en capturas públicas ni en repositorios.

## Paso 5 - Crear middleware de Auth0

Crear la carpeta si no existe:

```bash
mkdir middleware
```

Crear `middleware/auth0.js`:

```js
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

module.exports = {
  validateAccessToken,
  requireScope
};
```

Qué hace este middleware:

- lee la metadata pública de Auth0;
- obtiene las claves públicas necesarias para validar la firma;
- valida `iss`, `aud` y expiración;
- deja disponible la información del token en `req.auth`;
- permite exigir scopes con `requiredScopes`.

Checkpoint:

- No hay secretos hardcodeados.
- La API usa `AUTH0_DOMAIN` y `AUTH0_AUDIENCE` desde variables de entorno.

## Paso 6 - Crear middleware de API key

Crear `middleware/apiKey.js`:

```js
function requireApiKey(req, res, next) {
  const apiKey = req.header('x-api-key');
  const expectedApiKey = process.env.INTERNAL_API_KEY;

  if (!expectedApiKey) {
    return res.status(500).json({ error: 'API key interna no configurada' });
  }

  if (!apiKey || apiKey !== expectedApiKey) {
    return res.status(401).json({ error: 'API key inválida o ausente' });
  }

  next();
}

module.exports = { requireApiKey };
```

Este ejemplo sirve para comparar mecanismos:

- `api_key`: simple, útil para integraciones internas o demos acotadas;
- OAuth 2.0 + JWT: permite expiración, issuer, audience, firma y scopes.

## Paso 7 - Proteger creación de productos

Modificar `routes/productos.js`.

Importar middlewares:

```js
const { requireScope } = require('../middleware/auth0');
const { requireApiKey } = require('../middleware/apiKey');
```

Dejar `GET /productos` público y proteger `POST /productos`:

```js
router.post(
  '/',
  requireApiKey,
  requireScope('admin:productos'),
  async (req, res) => {
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
  }
);
```

Probar sin headers:

```http
POST http://localhost:3000/productos
Content-Type: application/json

{
  "nombre": "Teclado mecánico",
  "precio": 69999,
  "categoria": "periféricos",
  "stock": 8
}
```

Respuesta esperada:

```http
401 Unauthorized
```

Probar con API key pero sin token:

```http
POST http://localhost:3000/productos
Content-Type: application/json
x-api-key: clave-interna-demo

{
  "nombre": "Teclado mecánico",
  "precio": 69999,
  "categoria": "periféricos",
  "stock": 8
}
```

Respuesta esperada:

```http
401 Unauthorized
```

Probar con API key y token válido:

```http
POST http://localhost:3000/productos
Content-Type: application/json
x-api-key: clave-interna-demo
Authorization: Bearer PEGAR_ACCESS_TOKEN

{
  "nombre": "Teclado mecánico",
  "precio": 69999,
  "categoria": "periféricos",
  "stock": 8
}
```

Respuesta esperada:

```http
201 Created
```

## Paso 8 - Proteger pedidos con scopes

Modificar `routes/pedidos.js`.

Importar:

```js
const { requireScope } = require('../middleware/auth0');
```

Proteger creación de pedidos:

```js
router.post('/', requireScope('write:pedidos'), async (req, res) => {
  // conservar acá el código existente de creación de pedidos
});
```

Proteger confirmación de pedidos:

```js
router.post('/:id/confirmar', requireScope('confirm:pedidos'), async (req, res) => {
  // conservar acá el código existente de confirmación
});
```

No hace falta reescribir la lógica interna si ya funcionaba. La idea es insertar los middlewares antes del controlador.

Probar crear pedido sin token:

```http
POST http://localhost:3000/pedidos
Content-Type: application/json

{
  "cliente": {
    "nombre": "Ana Pérez",
    "email": "ana@example.com"
  },
  "items": [
    {
      "productoId": "REEMPLAZAR_POR_ID_REAL",
      "cantidad": 1
    }
  ]
}
```

Respuesta esperada:

```http
401 Unauthorized
```

Probar crear pedido con token válido:

```http
POST http://localhost:3000/pedidos
Content-Type: application/json
Authorization: Bearer PEGAR_ACCESS_TOKEN

{
  "cliente": {
    "nombre": "Ana Pérez",
    "email": "ana@example.com"
  },
  "items": [
    {
      "productoId": "REEMPLAZAR_POR_ID_REAL",
      "cantidad": 1
    }
  ]
}
```

Respuesta esperada:

```http
201 Created
```

Probar confirmar pedido con token válido:

```http
POST http://localhost:3000/pedidos/REEMPLAZAR_POR_ID_PEDIDO/confirmar
Authorization: Bearer PEGAR_ACCESS_TOKEN
```

Respuesta esperada:

```http
200 OK
```

Volver a confirmar el mismo pedido:

```http
POST http://localhost:3000/pedidos/REEMPLAZAR_POR_ID_PEDIDO/confirmar
Authorization: Bearer PEGAR_ACCESS_TOKEN
```

Respuesta esperada:

```http
409 Conflict
```

## Paso 9 - Agregar endpoint de diagnóstico del token

En `app.js`, importar:

```js
const { validateAccessToken } = require('./middleware/auth0');
```

Agregar antes del `app.listen`:

```js
app.get('/token-info', validateAccessToken, (req, res) => {
  res.json({
    issuer: req.auth.payload.iss,
    audience: req.auth.payload.aud,
    subject: req.auth.payload.sub,
    scopes: req.auth.payload.scope
  });
});
```

Probar:

```http
GET http://localhost:3000/token-info
Authorization: Bearer PEGAR_ACCESS_TOKEN
```

Este endpoint ayuda a ver qué está recibiendo la API. No debería exponer secretos.

## Paso 10 - Manejar errores de autorización

Agregar al final de `app.js`, después de las rutas y antes de conectar la base:

```js
app.use((err, req, res, next) => {
  if (err.status === 401) {
    return res.status(401).json({
      error: 'Token ausente, inválido o expirado'
    });
  }

  if (err.status === 403) {
    return res.status(403).json({
      error: 'Permisos insuficientes para ejecutar la acción'
    });
  }

  next(err);
});
```

Casos típicos:

| Caso | Código esperado |
|---|---:|
| No enviar `Authorization` en endpoint protegido | 401 |
| Enviar token vencido o de otro audience | 401 |
| Enviar token válido sin el scope requerido | 403 |
| Confirmar dos veces el mismo pedido | 409 |

## Paso 11 - Guardar evidencias

Crear una carpeta:

```bash
mkdir evidencias
```

Crear `evidencias/pruebas-http.md` con:

| Caso | Resultado esperado |
|---|---|
| `GET /health` sin token | `200 OK` |
| `GET /productos` sin token | `200 OK` |
| `POST /productos` sin headers | `401 Unauthorized` |
| `POST /productos` con `x-api-key` pero sin Bearer token | `401 Unauthorized` |
| `POST /productos` con `x-api-key` y scope `admin:productos` | `201 Created` |
| `POST /pedidos` sin token | `401 Unauthorized` |
| `POST /pedidos` con scope `write:pedidos` | `201 Created` |
| `POST /pedidos/:id/confirmar` con scope `confirm:pedidos` | `200 OK` |
| `POST /pedidos/:id/confirmar` repetido | `409 Conflict` |
| `GET /token-info` con token válido | `200 OK` |

Además, documentar:

- Auth0 Domain usado, sin secretos;
- Audience configurado;
- scopes creados;
- nombre del cliente Machine to Machine;
- comandos o capturas de las pruebas.

## Paso 12 - Checklist antes de entregar

Verificar:

- `.env` no está versionado;
- `.env.example` existe y no tiene secretos reales;
- la API valida JWT contra Auth0;
- las rutas protegidas exigen scopes;
- el access token se obtiene con `client_credentials`;
- se entiende qué valor de `audience` configuraron en Auth0 y en el código;
- las evidencias muestran casos permitidos y rechazados.

## Entrega

Subir a UV/Moodle un `.zip` sin `node_modules/` y sin `.env`.

El archivo debe incluir:

- código fuente;
- `.env.example`;
- `package.json`;
- `package-lock.json`, si existe;
- carpeta `middleware/`;
- carpeta `evidencias/` con pruebas o capturas;
- breve nota en `README.md` o `evidencias/pruebas-http.md` explicando la configuración de Auth0 usada.

Antes de comprimir, verificar:

```bash
npm install
npm run dev
```

## Criterios de corrección

| Criterio | Esperado |
|---|---|
| Configuración Auth0 | API, audience, scopes y cliente Machine to Machine creados correctamente. |
| Validación JWT | La API valida issuer, audience, firma y expiración usando `express-oauth2-jwt-bearer`. |
| Autorización | Los endpoints protegidos exigen scopes adecuados. |
| API key | Existe un ejemplo mínimo con `x-api-key`, sin secretos hardcodeados. |
| Códigos HTTP | Usa `401`, `403`, `409` y `500` de manera razonable. |
| Evidencias | Incluye pruebas de casos permitidos y rechazados. |
| Secretos | No se suben `.env`, client secret, tokens reales ni claves privadas. |
