# Clase 03 - Actividad práctica

## Objetivo

Vas a agregar seguridad básica a la API REST construida en la clase anterior. La meta no es implementar un login real, sino comprender cómo una API protege acciones de negocio usando middlewares, headers, tokens simulados, roles y variables de entorno.

Al finalizar, tu API deberá:

- mantener públicos `GET /health` y `GET /productos`;
- exigir un Bearer token para crear y confirmar pedidos;
- exigir una API key para crear productos;
- distinguir el rol `cliente` del rol `admin`;
- responder códigos HTTP correctos ante errores de seguridad;
- no subir secretos en el archivo `.env`.

## Caso de uso

En un e-commerce no todas las acciones tienen el mismo riesgo:

- consultar productos es una acción pública;
- crear un pedido requiere saber quién lo está generando;
- confirmar un pedido cambia el estado de una compra;
- crear productos modifica el catálogo y debería quedar reservado para administración o integraciones internas.

Regla de la clase:

```text
Una API segura no solo pregunta quién sos. También pregunta qué podés hacer.
```

## Paso 1 - Preparar el proyecto

Usar el punto de partida indicado por la cátedra.

Si hay rama de inicio:

```bash
git fetch origin
git checkout clase-03-inicio
git checkout -b trabajo-clase-03
```

Instalar dependencias:

```bash
npm install
```

Crear `.env` desde `.env.example` si todavía no existe:

```text
PORT=3000
MONGODB_URI=mongodb://localhost:27017/iaew_ecommerce
INTERNAL_API_KEY=clave-interna-demo
```

Actualizar `.env.example`:

```text
PORT=3000
MONGODB_URI=mongodb://localhost:27017/iaew_ecommerce
INTERNAL_API_KEY=colocar-api-key-local
```

Verificar que `.gitignore` incluya:

```text
node_modules/
.env
.DS_Store
```

Ejecutar:

```bash
npm run dev
```

Checkpoint:

- La API inicia sin errores.
- `GET /health` responde `status: ok`.
- MongoDB está conectado.

## Paso 2 - Crear middlewares de seguridad

Crear la carpeta si no existe:

```bash
mkdir middleware
```

Crear `middleware/auth.js`:

```js
const usuariosDemo = {
  'cliente-demo': {
    id: 'usr-1',
    nombre: 'Cliente Demo',
    rol: 'cliente'
  },
  'admin-demo': {
    id: 'usr-2',
    nombre: 'Admin Demo',
    rol: 'admin'
  }
};

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

function requireAuth(req, res, next) {
  const authorization = req.header('authorization');

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token ausente' });
  }

  const token = authorization.replace('Bearer ', '').trim();
  const usuario = usuariosDemo[token];

  if (!usuario) {
    return res.status(401).json({ error: 'Token inválido' });
  }

  req.user = usuario;
  next();
}

function requireRole(rolPermitido) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Usuario no autenticado' });
    }

    if (req.user.rol !== rolPermitido) {
      return res.status(403).json({ error: 'Permisos insuficientes' });
    }

    next();
  };
}

module.exports = {
  requireApiKey,
  requireAuth,
  requireRole
};
```

Checkpoint:

- El archivo exporta tres middlewares.
- No hay tokens reales ni secretos reales en el código.

## Paso 3 - Proteger creación de productos

Modificar `routes/productos.js`.

Importar middlewares:

```js
const { requireApiKey, requireAuth, requireRole } = require('../middleware/auth');
```

Dejar `GET /productos` público y proteger `POST /productos`:

```js
router.post('/', requireApiKey, requireAuth, requireRole('admin'), async (req, res) => {
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

Probar con API key válida y token cliente:

```http
POST http://localhost:3000/productos
Content-Type: application/json
x-api-key: clave-interna-demo
Authorization: Bearer cliente-demo

{
  "nombre": "Teclado mecánico",
  "precio": 69999,
  "categoria": "periféricos",
  "stock": 8
}
```

Respuesta esperada:

```http
403 Forbidden
```

Probar con API key válida y token admin:

```http
POST http://localhost:3000/productos
Content-Type: application/json
x-api-key: clave-interna-demo
Authorization: Bearer admin-demo

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

Checkpoint:

- Sin headers falla.
- Con API key válida y token admin funciona.
- Con API key válida y token cliente debería devolver `403 Forbidden`.

## Paso 4 - Proteger creación y confirmación de pedidos

Modificar `routes/pedidos.js`.

Importar middlewares:

```js
const { requireAuth, requireRole } = require('../middleware/auth');
```

Proteger `POST /pedidos`:

```js
router.post('/', requireAuth, requireRole('cliente'), async (req, res) => {
  // conservar acá el código existente de creación de pedidos
});
```

Proteger `POST /pedidos/:id/confirmar`:

```js
router.post('/:id/confirmar', requireAuth, requireRole('cliente'), async (req, res) => {
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

Probar crear pedido con token cliente:

```http
POST http://localhost:3000/pedidos
Content-Type: application/json
Authorization: Bearer cliente-demo

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

Checkpoint:

- El pedido no se puede crear sin token.
- El pedido se puede crear con `cliente-demo`.
- El pedido no se puede crear con `admin-demo` si el endpoint exige rol `cliente`.

## Paso 5 - Agregar endpoint de identidad

Crear una ruta útil para depurar autenticación.

En `app.js`, importar:

```js
const { requireAuth } = require('./middleware/auth');
```

Agregar:

```js
app.get('/me', requireAuth, (req, res) => {
  res.json({ user: req.user });
});
```

Probar:

```http
GET http://localhost:3000/me
Authorization: Bearer cliente-demo
```

Respuesta esperada:

```json
{
  "user": {
    "id": "usr-1",
    "nombre": "Cliente Demo",
    "rol": "cliente"
  }
}
```

Checkpoint:

- `/me` sirve para verificar si el token fue reconocido.
- La API no devuelve secretos.

## Paso 6 - Guardar evidencias

Crear una carpeta:

```bash
mkdir evidencias
```

Guardar capturas o un archivo `evidencias/pruebas-http.md` con los siguientes casos:

| Caso | Resultado esperado |
|---|---|
| `GET /health` sin token | `200 OK` |
| `GET /productos` sin token | `200 OK` |
| `POST /productos` sin headers | `401 Unauthorized` |
| `POST /productos` con API key válida y token cliente | `403 Forbidden` |
| `POST /productos` con API key y token admin | `201 Created` |
| `POST /pedidos` sin token | `401 Unauthorized` |
| `POST /pedidos` con token cliente | `201 Created` |
| `POST /pedidos/:id/confirmar` repetido | `409 Conflict` |

## Paso 7 - Reflexión breve para entregar

Agregar al final de `evidencias/pruebas-http.md` una respuesta de 5 a 8 líneas:

```text
¿Qué endpoints de mi API podrían ser peligrosos si los ejecuta un agente de IA sin autorización suficiente?
```

La respuesta debe mencionar al menos:

- una acción de lectura;
- una acción de escritura;
- un rol necesario;
- una evidencia de auditoría que convendría registrar.

## Entrega

Subir a UV/Moodle un `.zip` sin `node_modules/` y sin `.env`.

El archivo debe incluir:

- código fuente;
- `.env.example`;
- `package.json`;
- `package-lock.json`, si existe;
- carpeta `evidencias/` con las pruebas solicitadas.

Antes de comprimir, verificar:

```bash
npm install
npm run dev
```

## Criterios de corrección

| Criterio | Esperado |
|---|---|
| Middlewares | Existen y están separados de las rutas. |
| Secretos | La API key está en `.env`, no escrita fija en el código. |
| Autenticación | Los endpoints privados rechazan requests sin token. |
| Autorización | Las acciones sensibles distinguen roles. |
| Códigos HTTP | Usa `401`, `403`, `409` y `500` de manera razonable. |
| Evidencias | Incluye pruebas de casos permitidos y rechazados. |
| Reflexión | Conecta seguridad con acciones de negocio e IA/MCP. |
