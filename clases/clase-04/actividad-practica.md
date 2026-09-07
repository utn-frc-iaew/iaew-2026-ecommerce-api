# Clase 04 — Actividad práctica individual

## Objetivo

Vas a desacoplar la confirmación de un pedido de su notificación. La API seguirá confirmando el pedido de forma sincrónica y publicará el evento `pedido.confirmado` en RabbitMQ. Un worker separado consumirá el mensaje y registrará la notificación como procesada.

Al terminar, deberás demostrar el flujo con el worker detenido y luego activo. Webhook, WebSocket y gRPC son demostraciones comparativas de la presentación; no tenés que implementarlos.

## Contrato de la actividad

Conservá la seguridad de la Clase 03:

- `GET /health` y `GET /productos`: públicos.
- `POST /productos`: requiere `x-api-key`.
- `GET /pedidos`: requiere `read:pedidos`.
- `POST /pedidos`: requiere `write:pedidos`.
- `POST /pedidos/:id/confirmar`: requiere `confirm:pedidos`.
- `GET /token-info`: requiere un JWT válido.

La integración usa:

| Elemento | Valor |
|---|---|
| Exchange directo | `pedidos.exchange` |
| Routing key | `pedido.confirmado` |
| Cola durable | `notificaciones.pedido-confirmado` |
| Estado inicial de notificación | `pendiente` |
| Estado después del worker | `procesada` |

## A1 — Preparar la base

Guardá cualquier cambio propio antes de cambiar de rama:

```bash
git fetch origin
git switch clase-04-inicio
git switch -c trabajo-clase-04
npm ci
cp .env.example .env
```

Completá `.env` con tu configuración real de Auth0 y una API key local. No subas el archivo ni tokens. Verificá que MongoDB esté disponible:

```bash
docker start iaew-mongo
```

Si no existe:

```bash
docker run --name iaew-mongo -p 27017:27017 -d mongo:7
```

Antes de continuar, `GET /health` debe responder `200`; `/token-info` debe aceptar un token válido; una ruta de pedidos sin token debe responder `401`.

## A2 — Levantar RabbitMQ con Compose

Instalá la biblioteca del broker:

```bash
npm install amqplib@2.0.1
```

Agregá este script a `package.json`:

```json
"worker": "node src/worker.js"
```

Creá `compose.yaml` con un único servicio RabbitMQ:

```yaml
services:
  rabbitmq:
    image: rabbitmq:4.2-management
    container_name: iaew-rabbitmq
    environment:
      RABBITMQ_DEFAULT_USER: ${RABBIT_USER:-iaew}
      RABBITMQ_DEFAULT_PASS: ${RABBIT_PASS:-iaew-local}
    ports:
      - "5672:5672"
      - "15672:15672"
    tmpfs:
      - /var/lib/rabbitmq:uid=999,gid=999,mode=0770
```

El almacenamiento temporal evita problemas de permisos del volumen interno en distintos entornos de Docker y alcanza para este laboratorio. Si se recrea el contenedor, sus colas y mensajes se pierden; no lo uses como configuración de producción.

Agregá a `.env.example`, sin secretos reales:

```text
RABBIT_URL=amqp://iaew:iaew-local@localhost:5672
RABBIT_USER=iaew
RABBIT_PASS=iaew-local
```

Iniciá y revisá el servicio:

```bash
docker compose up -d rabbitmq
docker compose ps
docker compose logs rabbitmq
```

Abrí `http://localhost:15672`. Compose es una herramienta del laboratorio: no vamos a contenerizar la API, el worker ni MongoDB.

## A3 — Publicar `pedido.confirmado`

Creá `src/lib/rabbit.js`. Debe:

1. conectarse usando `RABBIT_URL`;
2. crear un canal de confirmaciones;
3. declarar el exchange, la cola y el binding antes de publicar;
4. publicar mensajes persistentes con `contentType: application/json`;
5. esperar `waitForConfirms()`.

No alcanza con `await channel.publish(...)`: el booleano de `publish()` representa presión del búfer, no la confirmación del broker.

Usá esta implementación base:

```js
const amqp = require('amqplib');

const EXCHANGE = 'pedidos.exchange';
const ROUTING_KEY = 'pedido.confirmado';
const QUEUE = 'notificaciones.pedido-confirmado';

async function crearCanal() {
  const connection = await amqp.connect(process.env.RABBIT_URL);
  const channel = await connection.createConfirmChannel();

  await channel.assertExchange(EXCHANGE, 'direct', { durable: true });
  await channel.assertQueue(QUEUE, { durable: true });
  await channel.bindQueue(QUEUE, EXCHANGE, ROUTING_KEY);

  return { connection, channel };
}

async function publicarPedidoConfirmado(evento) {
  const { connection, channel } = await crearCanal();

  try {
    channel.publish(
      EXCHANGE,
      ROUTING_KEY,
      Buffer.from(JSON.stringify(evento)),
      { contentType: 'application/json', persistent: true }
    );
    await channel.waitForConfirms();
  } finally {
    await channel.close();
    await connection.close();
  }
}

module.exports = {
  EXCHANGE,
  QUEUE,
  ROUTING_KEY,
  crearCanal,
  publicarPedidoConfirmado
};
```

En `src/routes/pedidos.js`, agregá estos imports:

```js
const crypto = require('crypto');
const { publicarPedidoConfirmado } = require('../lib/rabbit');
```

En `POST /pedidos/:id/confirmar`, conservá `requireScope('confirm:pedidos')` y las validaciones existentes. Después de descontar stock y guardar el pedido confirmado, construí:

```js
const evento = {
  eventId: crypto.randomUUID(),
  type: 'pedido.confirmado',
  version: 1,
  occurredAt: pedido.confirmadoEn.toISOString(),
  data: { pedidoId: pedido.id }
};
```

Publicalo y respondé `200` con el pedido y el evento:

```js
try {
  await publicarPedidoConfirmado(evento);
} catch (error) {
  return res.status(503).json({
    error: 'Pedido confirmado, pero no se pudo publicar la notificación',
    detalle: 'Consultar el estado del pedido antes de reintentar',
    pedidoId: pedido.id
  });
}

res.json({ pedido, evento });
```

No incluyas el Bearer token, la API key ni datos personales en el mensaje.

Si MongoDB ya guardó la confirmación pero falla RabbitMQ, respondé `503` y explicá que el pedido puede haber quedado confirmado. No hagas rollback ni reintento automático: ese hueco es una limitación deliberada que analizaremos.

## A4 — Crear el worker

En `src/models/Pedido.js`, agregá:

- `notificacionEstado`, con valores `pendiente` y `procesada`, inicialmente `pendiente`;
- `notificadoEn`, de tipo fecha y opcional.

Creá `src/worker.js`. El consumidor debe:

1. conectar MongoDB y RabbitMQ;
2. consumir `notificaciones.pedido-confirmado` con `noAck: false`;
3. validar `type`, `version`, `eventId`, `occurredAt` y `data.pedidoId`;
4. actualizar solamente un pedido confirmado cuya notificación aún no esté procesada;
5. ejecutar `ack` después de persistir.

Ante un mensaje inválido o un error, registrá la causa y usá `nack(message, false, false)`. Hoy no implementamos reintentos ni DLQ; evitá un ciclo infinito. El worker no confirma pedidos ni descuenta stock.

Usá esta implementación base:

```js
require('dotenv').config();

const mongoose = require('mongoose');
const { connectDb } = require('./db');
const Pedido = require('./models/Pedido');
const { crearCanal, QUEUE } = require('./lib/rabbit');

function validarEvento(evento) {
  if (evento.type !== 'pedido.confirmado') return false;
  if (evento.version !== 1) return false;
  if (!evento.eventId || !evento.occurredAt) return false;
  if (!evento.data || !mongoose.Types.ObjectId.isValid(evento.data.pedidoId)) return false;
  return !Number.isNaN(Date.parse(evento.occurredAt));
}

async function procesarMensaje(message, channel) {
  try {
    const evento = JSON.parse(message.content.toString());

    if (!validarEvento(evento)) {
      throw new Error('Evento inválido');
    }

    const pedido = await Pedido.findOneAndUpdate(
      {
        _id: evento.data.pedidoId,
        estado: 'confirmado',
        notificacionEstado: 'pendiente'
      },
      {
        notificacionEstado: 'procesada',
        notificadoEn: new Date()
      },
      { new: true }
    );

    if (!pedido) {
      const existente = await Pedido.findById(evento.data.pedidoId);

      if (existente && existente.notificacionEstado === 'procesada') {
        console.log('Notificación ya procesada', evento.eventId);
        channel.ack(message);
        return;
      }

      throw new Error('Pedido confirmado pendiente no encontrado');
    }

    console.log('Notificación procesada', {
      eventId: evento.eventId,
      pedidoId: pedido.id
    });
    channel.ack(message);
  } catch (error) {
    console.error('No se pudo procesar el mensaje', error.message);
    channel.nack(message, false, false);
  }
}

async function main() {
  await connectDb();
  const { channel } = await crearCanal();

  await channel.consume(
    QUEUE,
    (message) => {
      if (message) procesarMensaje(message, channel);
    },
    { noAck: false }
  );

  console.log('Worker escuchando cola ' + QUEUE);
}

main().catch((error) => {
  console.error('No se pudo iniciar el worker');
  console.error(error.message);
  process.exit(1);
});
```

## A5 — Demostrar el desacople

Ejecutá la API, pero mantené detenido el worker:

```bash
npm run dev
```

Con datos sintéticos y las credenciales correctas:

1. Creá un producto con `x-api-key`.
2. Creá un pedido con `write:pedidos`.
3. Confirmalo con `confirm:pedidos` y guardá la respuesta `200` y el payload.
4. Consultá pedidos con `read:pedidos`: debe figurar `estado=confirmado` y `notificacionEstado=pendiente`.
5. En la consola RabbitMQ, comprobá que la cola tenga un mensaje Ready. Si inspeccionás el payload, elegí reencolarlo.
6. En otra terminal, iniciá `npm run worker`.
7. Consultá otra vez: `notificacionEstado=procesada` y `notificadoEn` debe tener una fecha.

Después verificá que `401`, `403`, una confirmación repetida (`409`) y stock insuficiente (`409`) no generen eventos. Usá un pedido nuevo para cada escenario y compará la cantidad de mensajes con el worker detenido.

## A6 — Explicar el límite

En tus evidencias, respondé en cinco líneas como máximo:

```text
¿Qué puede ocurrir si MongoDB guarda el pedido confirmado y RabbitMQ falla antes de publicar? ¿Por qué no conviene reconfirmar a ciegas?
```

Nombrá el patrón outbox como posible evolución, sin implementarlo. La Clase 05 trabajará retries, duplicados y DLQ.

## A7 — Elegir una integración

Elegí una interacción de tu TPI o de otro dominio y justificá uno de estos mecanismos: REST, mensajería, Webhook, WebSocket o gRPC. Indicá quién inicia, quién recibe, si necesita respuesta inmediata y qué ocurre si el receptor está detenido.

Respondé también: ¿qué scope necesitaría un agente de IA para confirmar un pedido y qué debería consultar antes de reintentar después de un `503`?

## Evidencias y entrega

Creá `evidencias/pruebas-http.md` con:

- identificador del pedido y payload del evento;
- confirmación `200` con worker detenido;
- cola con mensaje Ready;
- log del worker y consulta final;
- pruebas `401`, `403` y `409`, mostrando que no agregan eventos;
- explicación de A6 y elección de A7.

Entregá un `.zip` de hasta 50 MB con código, `package.json`, lockfile, `.env.example`, `compose.yaml` y evidencias. Excluí `.env`, tokens, credenciales reales y `node_modules`.

## Criterios de corrección

| Criterio | Evidencia esperada |
|---|---|
| Seguridad preservada | JWT, scopes y API key siguen en funcionamiento. |
| Contrato | Nombres y payload coinciden con la presentación. |
| Desacople | El mensaje espera con worker detenido y se procesa al iniciarlo. |
| Consumidor | Persiste antes del ack y no repite el efecto de negocio. |
| Errores | Los rechazos no producen eventos; el fallo de publicación se explica. |
| Decisión técnica | La alternativa elegida responde a una necesidad concreta. |
| Secretos y entrega | Evidencia suficiente, sin secretos ni dependencias instaladas. |
