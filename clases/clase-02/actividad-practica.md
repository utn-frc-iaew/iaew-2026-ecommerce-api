# Clase 02 - E-commerce integrado - API REST + MongoDB

Materia: Integración de Aplicaciones en Entorno Web
Clase efectiva: 2
Duración: 120 minutos
Tema: E-commerce integrado - API REST + MongoDB

## Materiales de esta clase

| Recurso | Link |
|---|---|
| Actividad práctica | Este archivo |
| Presentación HTML | [presentacion/](presentacion/) |
| Material adicional | [material-adicional/material-completo.md](material-adicional/material-completo.md) |

## Objetivo de la actividad

Durante esta clase vas a crear desde cero una API REST con Express para una mini plataforma de e-commerce.

Primero vas a construir endpoints que respondan datos mock, sin base de datos. Después vas a levantar MongoDB con Docker, configurar una cadena de conexión y usar Mongoose para persistir productos y pedidos.

Al finalizar deberías poder entregar un proyecto que:

- responda `GET /health`;
- permita crear y listar productos;
- permita crear pedidos;
- permita confirmar pedidos;
- use MongoDB local;
- responda `409 Conflict` si intentás confirmar dos veces el mismo pedido.

## Caso de uso

El sistema representa una compra online simplificada:

- un cliente consulta productos;
- crea un pedido;
- el sistema calcula el total;
- el pedido queda pendiente;
- luego se confirma la compra;
- si se intenta confirmar otra vez, la API rechaza la operación.

La idea importante de la clase:

```text
Una API no solo guarda datos. También protege reglas de negocio.
```

## Prerrequisitos

Antes de la clase, cada estudiante debería tener instalado y funcionando:

| Recurso | Uso en la actividad |
|---|---|
| Node.js LTS | Ejecutar la API con JavaScript del lado servidor. |
| npm | Inicializar el proyecto, instalar dependencias y ejecutar scripts. |
| Docker Desktop | Levantar MongoDB localmente como contenedor. |
| VS Code | Editar el proyecto y revisar archivos. |
| Postman, Insomnia, Thunder Client, REST Client o curl | Probar los endpoints HTTP. |

Verificar desde una terminal:

```bash
node --version
npm --version
docker --version
docker ps
```

Si `docker --version` responde pero `docker ps` falla, abrir Docker Desktop y esperar a que el servicio termine de iniciar.

Extensiones de VS Code:

| Extensión | Identificador | Uso |
|---|---|---|
| MongoDB for VS Code | `mongodb.mongodb-vscode` | Ver bases, colecciones y documentos desde VS Code. |
| REST Client | `humao.rest-client` | Probar endpoints desde archivos `.http` dentro del proyecto. |
| Docker | `ms-azuretools.vscode-docker` | Ver contenedores, imágenes y logs desde VS Code. |
| ESLint | `dbaeumer.vscode-eslint` | Detectar problemas frecuentes en JavaScript. |
| Prettier | `esbenp.prettier-vscode` | Formatear código de manera consistente. |

Como mínimo, para esta clase conviene tener instaladas `MongoDB for VS Code` y una herramienta para probar HTTP: Postman, Insomnia, Thunder Client, REST Client o `curl`.

Herramientas que vamos a usar durante la clase:

| Herramienta | Para qué la usamos |
|---|---|
| VS Code | Editar el proyecto y revisar archivos. |
| Node.js | Ejecutar JavaScript del lado servidor. |
| npm | Inicializar el proyecto e instalar dependencias. |
| Express | Crear la API HTTP. |
| Nodemon | Reiniciar la API automáticamente durante el desarrollo. |
| Docker | Levantar MongoDB sin instalarlo como servicio del sistema. |
| MongoDB | Persistir productos y pedidos. |
| Mongoose | Conectar Node.js con MongoDB y definir modelos. |
| MongoDB for VS Code | Ver bases, colecciones y documentos desde VS Code. |
| Postman, Insomnia o curl | Probar endpoints HTTP. |

## Paso 1 - Crear el proyecto desde cero

Crear una carpeta para el proyecto:

```bash
mkdir iaew-2026-ecommerce-api
cd iaew-2026-ecommerce-api
```

Inicializar Node.js:

```bash
npm init -y
```

Instalar Express:

```bash
npm install express
```

Instalar Nodemon como dependencia de desarrollo:

```bash
npm install --save-dev nodemon
```

Editar `package.json` y dejar estos scripts:

```json
{
  "scripts": {
    "dev": "nodemon app.js",
    "start": "node app.js"
  }
}
```

Checkpoint:

```bash
npm run dev
```

Todavía puede fallar porque falta `app.js`. Eso está bien; el proyecto ya está inicializado.

## Paso 2 - Crear la API Express mínima

Crear el archivo `app.js`:

```js
const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
```

Ejecutar:

```bash
npm run dev
```

Probar:

```http
GET http://localhost:3000/health
```

Respuesta esperada:

```json
{
  "status": "ok"
}
```

Checkpoint:

- La API inicia sin errores.
- `/health` responde `status: ok`.

## Paso 3 - Agregar endpoints mock de productos

Antes de conectar MongoDB, vamos a construir endpoints que respondan con datos en memoria. Esto permite probar el contrato HTTP antes de sumar persistencia.

Crear una carpeta:

```bash
mkdir routes
```

Crear `routes/productos.js`:

```js
const express = require('express');

const router = express.Router();

const productos = [
  {
    id: 'prod-1',
    nombre: 'Auriculares Bluetooth',
    precio: 45999,
    categoria: 'audio',
    stock: 12,
    activo: true
  }
];

router.get('/', (req, res) => {
  res.json(productos);
});

router.post('/', (req, res) => {
  const nuevoProducto = {
    id: `prod-${productos.length + 1}`,
    nombre: req.body.nombre,
    precio: req.body.precio,
    categoria: req.body.categoria,
    stock: req.body.stock,
    activo: true
  };

  productos.push(nuevoProducto);
  res.status(201).json(nuevoProducto);
});

module.exports = router;
```

Modificar `app.js` para usar la ruta:

```js
const express = require('express');
const productosRouter = require('./routes/productos');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/productos', productosRouter);

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
```

Probar:

```http
GET http://localhost:3000/productos
```

Crear producto:

```http
POST http://localhost:3000/productos
Content-Type: application/json
```

Body:

```json
{
  "nombre": "Mouse inalámbrico",
  "precio": 18999,
  "categoria": "periféricos",
  "stock": 20
}
```

Checkpoint:

- `GET /productos` devuelve productos.
- `POST /productos` agrega un producto en memoria.

## Paso 4 - Agregar endpoints mock de pedidos

Crear `routes/pedidos.js`:

```js
const express = require('express');

const router = express.Router();

const pedidos = [];

router.post('/', (req, res) => {
  const nuevoPedido = {
    id: `ped-${pedidos.length + 1}`,
    cliente: req.body.cliente,
    items: req.body.items,
    estado: 'pendiente',
    total: 0
  };

  pedidos.push(nuevoPedido);
  res.status(201).json(nuevoPedido);
});

router.post('/:id/confirmar', (req, res) => {
  const pedido = pedidos.find((item) => item.id === req.params.id);

  if (!pedido) {
    return res.status(404).json({ error: 'Pedido no encontrado' });
  }

  if (pedido.estado !== 'pendiente') {
    return res.status(409).json({ error: 'El pedido ya fue confirmado' });
  }

  pedido.estado = 'confirmado';
  pedido.confirmadoEn = new Date().toISOString();

  res.json(pedido);
});

module.exports = router;
```

Modificar `app.js`:

```js
const express = require('express');
const productosRouter = require('./routes/productos');
const pedidosRouter = require('./routes/pedidos');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/productos', productosRouter);
app.use('/pedidos', pedidosRouter);

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
```

Crear pedido:

```http
POST http://localhost:3000/pedidos
Content-Type: application/json
```

Body:

```json
{
  "cliente": {
    "nombre": "Ana Pérez",
    "email": "ana@example.com"
  },
  "items": [
    {
      "productoId": "prod-1",
      "cantidad": 1
    }
  ]
}
```

Confirmar pedido:

```http
POST http://localhost:3000/pedidos/ped-1/confirmar
```

Volver a confirmar el mismo pedido:

```http
POST http://localhost:3000/pedidos/ped-1/confirmar
```

Respuesta esperada:

```json
{
  "error": "El pedido ya fue confirmado"
}
```

Código esperado:

```http
409 Conflict
```

Checkpoint:

- Ya existe una API funcional con mocks.
- Ya se puede explicar la diferencia entre crear un pedido y confirmar un pedido.

## Paso 5 - Levantar MongoDB con Docker

Ahora vamos a sumar persistencia real.

Docker permite ejecutar aplicaciones empaquetadas en contenedores. En esta clase lo usamos con un objetivo acotado: levantar una base MongoDB local de forma reproducible, sin instalar MongoDB directamente en el sistema operativo.

Idea mínima:

```text
Tu API Express -> localhost:27017 -> MongoDB dentro de un contenedor Docker
```

Descargar la imagen:

```bash
docker pull mongo:7
```

Levantar MongoDB:

```bash
docker run --name iaew-mongo -p 27017:27017 -d mongo:7
```

Verificar:

```bash
docker ps
```

Si el contenedor ya existe y está detenido:

```bash
docker start iaew-mongo
```

Cadena de conexión:

```text
mongodb://localhost:27017/iaew_ecommerce
```

Checkpoint:

- `docker ps` muestra un contenedor llamado `iaew-mongo`.

## Paso 6 - Instalar Mongoose y dotenv

Instalar dependencias:

```bash
npm install mongoose dotenv
```

Crear `.env.example`:

```text
PORT=3000
MONGODB_URI=mongodb://localhost:27017/iaew_ecommerce
```

Crear `.env`:

```text
PORT=3000
MONGODB_URI=mongodb://localhost:27017/iaew_ecommerce
```

Importante:

- `.env.example` sí se entrega.
- `.env` no se entrega porque puede contener datos privados.

Crear `.gitignore`:

```text
node_modules/
.env
.DS_Store
```

## Paso 7 - Configurar la conexión a MongoDB

Crear `db.js`:

```js
const mongoose = require('mongoose');

async function connectDb() {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/iaew_ecommerce';
  await mongoose.connect(uri);
  console.log('Conexión a MongoDB establecida');
}

module.exports = { connectDb };
```

Modificar `app.js` para usar `.env` y conectar la base:

```js
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
```

Ejecutar:

```bash
npm run dev
```

Checkpoint:

- La consola muestra `Conexión a MongoDB establecida`.
- `/health` sigue respondiendo.

## Paso 8 - Crear el modelo Producto

Crear carpeta:

```bash
mkdir models
```

Crear `models/Producto.js`:

```js
const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    precio: {
      type: Number,
      required: true,
      min: 0
    },
    categoria: {
      type: String,
      required: true,
      trim: true
    },
    stock: {
      type: Number,
      required: true,
      min: 0
    },
    activo: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Producto', productoSchema);
```

## Paso 9 - Reemplazar el mock de productos por MongoDB

Modificar `routes/productos.js`:

```js
const express = require('express');
const Producto = require('../models/Producto');

const router = express.Router();

router.get('/', async (req, res) => {
  const productos = await Producto.find().sort({ createdAt: -1 });
  res.json(productos);
});

router.post('/', async (req, res) => {
  try {
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
```

Probar `POST /productos` nuevamente.

Checkpoint:

- MongoDB devuelve `_id`.
- Si reiniciás la API, los productos siguen existiendo.

## Paso 10 - Crear el modelo Pedido

Crear `models/Pedido.js`:

```js
const mongoose = require('mongoose');

const itemPedidoSchema = new mongoose.Schema(
  {
    productoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Producto',
      required: true
    },
    nombre: {
      type: String,
      required: true
    },
    cantidad: {
      type: Number,
      required: true,
      min: 1
    },
    precioUnitario: {
      type: Number,
      required: true,
      min: 0
    }
  },
  { _id: false }
);

const pedidoSchema = new mongoose.Schema(
  {
    cliente: {
      nombre: {
        type: String,
        required: true,
        trim: true
      },
      email: {
        type: String,
        required: true,
        trim: true
      }
    },
    estado: {
      type: String,
      enum: ['pendiente', 'confirmado', 'cancelado'],
      default: 'pendiente'
    },
    items: {
      type: [itemPedidoSchema],
      validate: {
        validator: (items) => items.length > 0,
        message: 'El pedido debe tener al menos un item'
      }
    },
    total: {
      type: Number,
      required: true,
      min: 0
    },
    confirmadoEn: {
      type: Date
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Pedido', pedidoSchema);
```

## Paso 11 - Reemplazar el mock de pedidos por MongoDB

Modificar `routes/pedidos.js`:

```js
const express = require('express');
const Pedido = require('../models/Pedido');
const Producto = require('../models/Producto');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const items = [];

    for (const item of req.body.items) {
      const producto = await Producto.findById(item.productoId);

      if (!producto || !producto.activo) {
        return res.status(400).json({ error: 'Producto inválido' });
      }

      items.push({
        productoId: producto._id,
        nombre: producto.nombre,
        cantidad: item.cantidad,
        precioUnitario: producto.precio
      });
    }

    const total = items.reduce((acum, item) => {
      return acum + item.cantidad * item.precioUnitario;
    }, 0);

    const pedido = await Pedido.create({
      cliente: req.body.cliente,
      items,
      total,
      estado: 'pendiente'
    });

    res.status(201).json(pedido);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/:id/confirmar', async (req, res) => {
  const pedido = await Pedido.findById(req.params.id);

  if (!pedido) {
    return res.status(404).json({ error: 'Pedido no encontrado' });
  }

  if (pedido.estado !== 'pendiente') {
    return res.status(409).json({ error: 'El pedido ya fue confirmado' });
  }

  for (const item of pedido.items) {
    const producto = await Producto.findById(item.productoId);

    if (!producto || !producto.activo || producto.stock < item.cantidad) {
      return res.status(409).json({
        error: `No hay stock suficiente para ${item.nombre}`
      });
    }
  }

  for (const item of pedido.items) {
    await Producto.findByIdAndUpdate(item.productoId, {
      $inc: { stock: -item.cantidad }
    });
  }

  pedido.estado = 'confirmado';
  pedido.confirmadoEn = new Date();
  await pedido.save();

  res.json(pedido);
});

module.exports = router;
```

## Paso 12 - Probar el flujo completo

Crear producto:

```http
POST http://localhost:3000/productos
Content-Type: application/json
```

Body:

```json
{
  "nombre": "Auriculares Bluetooth",
  "precio": 45999,
  "categoria": "audio",
  "stock": 12
}
```

Listar productos:

```http
GET http://localhost:3000/productos
```

Copiar el `_id` del producto creado.

Crear pedido:

```http
POST http://localhost:3000/pedidos
Content-Type: application/json
```

Body:

```json
{
  "cliente": {
    "nombre": "Ana Pérez",
    "email": "ana@example.com"
  },
  "items": [
    {
      "productoId": "PEGAR_ID_DEL_PRODUCTO",
      "cantidad": 1
    }
  ]
}
```

Confirmar pedido:

```http
POST http://localhost:3000/pedidos/PEGAR_ID_DEL_PEDIDO/confirmar
```

Confirmar otra vez el mismo pedido:

```http
POST http://localhost:3000/pedidos/PEGAR_ID_DEL_PEDIDO/confirmar
```

Respuesta esperada:

```json
{
  "error": "El pedido ya fue confirmado"
}
```

Código esperado:

```http
409 Conflict
```

## Paso 13 - Validar datos desde VS Code

Además de probar la API con Postman, Insomnia o `curl`, vamos a verificar que los datos quedaron guardados en MongoDB.

Instalar la extensión de VS Code:

```text
MongoDB for VS Code
```

También puede aparecer como:

```text
MongoDB
```

Publicador:

```text
MongoDB
```

Pasos:

1. Abrir VS Code.
2. Ir a Extensions.
3. Buscar `MongoDB for VS Code`.
4. Instalar la extensión.
5. Abrir el panel de MongoDB desde la barra lateral.
6. Elegir `Add Connection`.
7. Usar esta cadena:

   ```text
   mongodb://localhost:27017
   ```

8. Conectarse.
9. Abrir la base:

   ```text
   iaew_ecommerce
   ```

10. Revisar las colecciones:

   ```text
   productos
   pedidos
   ```

Checkpoint:

- Se ve al menos un documento en `productos`.
- Se ve al menos un documento en `pedidos`.
- El pedido confirmado tiene `estado: "confirmado"`.

Evidencia sugerida:

- Captura de VS Code mostrando la base `iaew_ecommerce`.
- Captura de la colección `productos` o `pedidos` con documentos cargados.

## Paso 14 - Reflexión breve

Responder en un archivo `respuestas.md`:

```md
# Respuestas Clase 02

## 1. ¿Qué endpoint fue CRUD?

Respuesta:

## 2. ¿Qué endpoint fue una operación de negocio?

Respuesta:

## 3. ¿Qué regla de negocio protegimos?

Respuesta:

## 4. ¿Por qué 409 Conflict es más claro que 500?

Respuesta:
```

## Entrega por UV / Moodle

Al finalizar la actividad, comprimir el proyecto y subirlo a UV/Moodle.

Antes de comprimir, eliminar:

```text
node_modules/
```

El `.zip` debe incluir:

- código fuente del proyecto;
- `package.json`;
- `package-lock.json`, si existe;
- `.env.example`;
- `.gitignore`;
- `respuestas.md`;
- evidencias solicitadas en la consigna.

No debe incluir:

- `node_modules/`;
- archivo `.env` con datos privados;
- archivos temporales;
- credenciales, tokens o claves privadas.

Verificación mínima antes de entregar:

```bash
npm install
npm run dev
```

## Evidencia esperada

- Captura o salida de `docker ps` mostrando `iaew-mongo`.
- Captura de `GET /health`.
- Captura de `GET /productos`.
- Captura de `POST /productos`.
- Captura de `POST /pedidos`.
- Captura de `POST /pedidos/:id/confirmar`.
- Captura del error `409 Conflict`.
- Captura de MongoDB for VS Code mostrando datos en `iaew_ecommerce`.
- Archivo `respuestas.md`.
