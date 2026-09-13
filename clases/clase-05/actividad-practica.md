# Clase 05 — Actividad práctica individual

## Objetivo

Vas a convertir la confirmación de pedidos en una operación idempotente y a controlar las fallas del worker mediante retry limitado, deduplicación y una dead letter queue (DLQ).

Al terminar, una repetición con la misma `Idempotency-Key` no debe descontar stock ni publicar otro evento. Un mensaje transitorio podrá reintentarse hasta tres veces; un mensaje inválido o agotado terminará en la DLQ sin crear un ciclo infinito.

## Contrato de la actividad

Se conservan la seguridad, los endpoints y la integración de la Clase 04.

| Elemento | Valor |
|---|---|
| Endpoint | `POST /pedidos/:id/confirmar` |
| Scope | `confirm:pedidos` |
| Header | `Idempotency-Key` |
| Exchange principal | `pedidos.exchange` |
| Routing key | `pedido.confirmado` |
| Cola principal | `notificaciones.pedido-confirmado` |
| Cola retry | `notificaciones.pedido-confirmado.retry` |
| Cola DLQ | `notificaciones.pedido-confirmado.dlq` |
| Intentos máximos | `3` |
| Header del intento | `x-retry-count` |
| Identificador de duplicado | `eventId` |

No buscamos “exactly once”. Buscamos efectos idempotentes bajo una entrega que puede repetirse.

## A1 — Elegir y preparar la base

Elegí **uno** de estos caminos. No necesitás descartar el trabajo que venís realizando.

### Camino A — Continuar con tu código de las clases anteriores

Usalo si tu proyecto ya tiene completa y funcionando la Clase 04: API Express, MongoDB, seguridad, `pedidos.exchange`, routing key `pedido.confirmado`, cola `notificaciones.pedido-confirmado`, publicación del evento y worker con `ack` posterior a la persistencia.

Guardá o confirmá tus cambios y creá una rama nueva desde tu estado actual:

```bash
git status
git switch -c trabajo-clase-05
```

Si esa rama ya existe, usá `git switch trabajo-clase-05`. No ejecutes el camino B después de haber elegido este camino.

### Camino B — Usar la base común `clase-05-inicio`

Usalo si tu actividad anterior está incompleta, no funciona o preferís partir de la solución comprobada de Clase 04. Guardá primero cualquier cambio propio que quieras conservar:

```bash
git fetch origin
git switch clase-05-inicio
git switch -c trabajo-clase-05
```

`clase-05-inicio` contiene la Clase 04 resuelta, pero no anticipa idempotencia, retry ni DLQ.

### Preparación común para ambos caminos

```bash
npm ci
cp .env.example .env
```

Antes de seguir, comprobá:

```bash
git branch --show-current
test -f src/app.js && test -f src/worker.js && \
  test -f src/lib/rabbit.js && test -f compose.yaml && echo "Base lista"
```

El resultado debe mostrar `trabajo-clase-05` y `Base lista`.

Completá `.env` con tu configuración local. No publiques secretos. Agregá:

```text
RETRY_DELAY_MS=3000
MAX_RETRIES=3
SIMULATE_TRANSIENT_FAILURES=0
```

Iniciá MongoDB y RabbitMQ. Si conservás el contenedor anterior, se reutiliza; si no existe, el segundo comando lo crea:

```bash
docker start iaew-mongo 2>/dev/null || \
  docker run --name iaew-mongo -p 27017:27017 -d mongo:7
docker compose up -d rabbitmq
docker compose ps
```

Antes de modificar código, verificá `GET /health`, una ruta protegida sin token (`401`) y la consola RabbitMQ en `http://localhost:15672`.

### Preparar datos y autorización para las pruebas

Necesitás un access token real de Auth0 con `write:pedidos confirm:pedidos read:pedidos`. Reutilizá el cliente M2M de Clase 03 o solicitá al docente un token temporal. No guardes el client secret ni el token en `.env` o en evidencias.

```bash
curl --request POST \
  --url "https://TU_AUTH0_DOMAIN/oauth/token" \
  --header 'content-type: application/json' \
  --data '{"client_id":"TU_CLIENT_ID","client_secret":"TU_CLIENT_SECRET","audience":"https://iaew-pedidos-api","grant_type":"client_credentials"}'

export API_URL=http://localhost:3000
export ACCESS_TOKEN='PEGAR_ACCESS_TOKEN'
export INTERNAL_API_KEY='MISMO_VALOR_QUE_EN_ENV'
```

Con la API iniciada, creá un producto y un pedido; conservá los `_id` devueltos:

```bash
curl -sS -X POST "$API_URL/productos" \
  -H "Content-Type: application/json" \
  -H "x-api-key: $INTERNAL_API_KEY" \
  -d '{"nombre":"Teclado laboratorio","precio":25000,"categoria":"perifericos","stock":10}'

export PRODUCTO_ID='PEGAR_ID_DEL_PRODUCTO'

curl -sS -X POST "$API_URL/pedidos" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -d "{\"cliente\":{\"nombre\":\"Estudiante Demo\",\"email\":\"demo@example.test\"},\"items\":[{\"productoId\":\"$PRODUCTO_ID\",\"cantidad\":2}]}"

export PEDIDO_ID='PEGAR_ID_DEL_PEDIDO'
```

Sin tenant o credenciales podés completar código y pruebas unitarias, pero la prueba HTTP autenticada queda pendiente: no la presentes como ejecutada.

## A2 — Persistir la identidad de la confirmación

En `src/models/Pedido.js`, agregá:

```js
confirmacionIdempotencyKey: {
  type: String,
  unique: true,
  sparse: true
},
confirmacionEvento: {
  eventId: String,
  type: String,
  version: Number,
  occurredAt: String,
  data: {
    pedidoId: String
  }
}
```

El índice `unique` evita que una misma clave se asocie a dos pedidos. `sparse` permite que los pedidos todavía no confirmados no tengan la clave.

Creá `src/lib/idempotency.js`:

```js
const IDEMPOTENCY_KEY_PATTERN = /^[A-Za-z0-9._:-]{8,128}$/;

function validateIdempotencyKey(value) {
  if (typeof value !== 'string' || value.length === 0) {
    return {
      code: 'IDEMPOTENCY_KEY_REQUIRED',
      error: 'El header Idempotency-Key es obligatorio'
    };
  }
  if (!IDEMPOTENCY_KEY_PATTERN.test(value)) {
    return {
      code: 'IDEMPOTENCY_KEY_INVALID',
      error: 'Idempotency-Key debe tener entre 8 y 128 caracteres permitidos',
      details: {
        pattern: '[A-Za-z0-9._:-]', minLength: 8, maxLength: 128
      }
    };
  }
  return null;
}

module.exports = { IDEMPOTENCY_KEY_PATTERN, validateIdempotencyKey };
```

Creá `src/lib/errors.js` para mantener respuestas operables:

```js
function sendError(res, status, error, code, retryable, action, details) {
  const body = { error, code, retryable, action };
  if (details) body.details = details;
  return res.status(status).json(body);
}

module.exports = { sendError };
```

En `src/routes/pedidos.js`, importá ambas funciones y validá antes de confirmar:

```js
const { validateIdempotencyKey } = require('../lib/idempotency');
const { sendError } = require('../lib/errors');

const key = req.header('Idempotency-Key');
const invalidKey = validateIdempotencyKey(key);
if (invalidKey) {
  return sendError(
    res, 400, invalidKey.error, invalidKey.code, false,
    'Enviar una clave válida y estable por operación',
    invalidKey.details
  );
}
```

## A3 — Implementar primera ejecución y replay

Después de buscar el pedido y antes de rechazar su estado, resolvé el replay:

```js
if (pedido.estado === 'confirmado' &&
    pedido.confirmacionIdempotencyKey === key &&
    pedido.confirmacionEvento?.eventId) {
  res.set('Idempotency-Replayed', 'true');
  return res.status(200).json({
    pedido,
    evento: pedido.confirmacionEvento,
    idempotencia: { key, replayed: true }
  });
}

if (pedido.estado === 'confirmado') {
  return res.status(409).json({
    error: 'El pedido ya fue confirmado con otra clave',
    code: 'IDEMPOTENCY_KEY_MISMATCH',
    retryable: false,
    action: 'Consultar el pedido y no generar una nueva confirmación'
  });
}
```

En la primera confirmación, generá el evento una sola vez y persistí la clave junto con él:

```js
const evento = {
  eventId: crypto.randomUUID(),
  type: 'pedido.confirmado',
  version: 1,
  occurredAt: pedido.confirmadoEn.toISOString(),
  data: { pedidoId: pedido.id }
};

pedido.confirmacionIdempotencyKey = key;
pedido.confirmacionEvento = evento;
await pedido.save();
```

Después de publicar:

```js
res.set('Idempotency-Replayed', 'false');
res.status(200).json({
  pedido,
  evento,
  idempotencia: { key, replayed: false }
});
```

Si MongoDB informa una clave duplicada (`error.code === 11000`), devolvé `409` con `code: IDEMPOTENCY_KEY_REUSED`.

> Esta solución didáctica evita duplicados secuenciales. No afirmes que resuelve todas las carreras concurrentes ni el hueco entre MongoDB y RabbitMQ.

## A4 — Declarar retry y DLQ

Creá `src/lib/config.js` para validar los enteros del entorno:

```js
function integerFromEnv(name, fallback, { min = 0, max = Number.MAX_SAFE_INTEGER } = {}) {
  const raw = process.env[name];
  if (raw === undefined || raw === '') return fallback;
  const value = Number(raw);
  if (!Number.isInteger(value) || value < min || value > max) {
    throw new Error(`${name} debe ser un entero entre ${min} y ${max}`);
  }
  return value;
}

function retryConfig() {
  return {
    retryDelayMs: integerFromEnv('RETRY_DELAY_MS', 3000, { min: 1, max: 3600000 }),
    maxRetries: integerFromEnv('MAX_RETRIES', 3, { min: 0, max: 20 }),
    simulatedFailures: integerFromEnv('SIMULATE_TRANSIENT_FAILURES', 0, { min: 0, max: 20 })
  };
}

module.exports = { integerFromEnv, retryConfig };
```

En `src/lib/rabbit.js`, conservá la topología existente y agregá:

```js
const RETRY_EXCHANGE = 'pedidos.retry.exchange';
const RETRY_QUEUE = 'notificaciones.pedido-confirmado.retry';
const DLX = 'pedidos.dlx';
const DLQ_ROUTING_KEY = 'pedido.confirmado.dlq';
const DLQ = 'notificaciones.pedido-confirmado.dlq';
```

Al crear el canal:

```js
const { retryConfig } = require('./config');
const { retryDelayMs } = retryConfig();

await channel.assertExchange(RETRY_EXCHANGE, 'direct', { durable: true });
await channel.assertExchange(DLX, 'direct', { durable: true });

await channel.assertQueue(RETRY_QUEUE, {
  durable: true,
  arguments: {
    'x-message-ttl': retryDelayMs,
    'x-dead-letter-exchange': EXCHANGE,
    'x-dead-letter-routing-key': ROUTING_KEY
  }
});
await channel.bindQueue(RETRY_QUEUE, RETRY_EXCHANGE, ROUTING_KEY);

await channel.assertQueue(DLQ, { durable: true });
await channel.bindQueue(DLQ, DLX, DLQ_ROUTING_KEY);
```

Creá un helper y las funciones de republicación. Preservan `messageId`, confirman la nueva publicación antes del `ack` original y trasladan el contador:

```js
async function confirmedPublish(channel, exchange, routingKey, content, options) {
  const accepted = channel.publish(exchange, routingKey, content, options);
  if (!accepted) throw new Error('RabbitMQ aplicó back-pressure al publicar');
  await channel.waitForConfirms();
}

async function publishRetry(channel, message, retryCount, reason) {
  await confirmedPublish(channel, RETRY_EXCHANGE, ROUTING_KEY, message.content, {
    ...message.properties,
    persistent: true,
    headers: {
      ...(message.properties.headers || {}),
      'x-retry-count': retryCount,
      'x-last-error': reason
    }
  });
}

async function publishDlq(channel, message, reason, retryCount) {
  await confirmedPublish(channel, DLX, DLQ_ROUTING_KEY, message.content, {
    ...message.properties,
    persistent: true,
    headers: {
      ...(message.properties.headers || {}),
      'x-retry-count': retryCount,
      'x-dlq-reason': reason
    }
  });
}
```

Exportá ambas funciones desde `src/lib/rabbit.js`. La razón debe ser segura: sin tokens, credenciales ni datos personales.

## A5 — Reintentar con límite

En `src/worker.js`, diferenciá:

- falla transitoria: puede ir a retry;
- falla permanente: va directamente a DLQ;
- evento duplicado: se reconoce y se hace `ack`;
- procesamiento exitoso: se persiste y luego se hace `ack`.

Importá las nuevas dependencias y definí los tipos de falla y la lectura segura del contador:

```js
const EventoProcesado = require('./models/EventoProcesado');
const { retryConfig } = require('./lib/config');
const { publishRetry, publishDlq } = require('./lib/rabbit');

class PermanentMessageError extends Error {}
class TransientMessageError extends Error {}

function retryCountOf(message) {
  const value = Number(
    message.properties.headers?.['x-retry-count'] ?? 0
  );
  return Number.isInteger(value) && value >= 0 ? value : 0;
}
```

Dentro de `applyBusinessEffect`, antes de acceder a MongoDB, simulá la falla según el contador recibido:

```js
const config = retryConfig();
if (retryCount < config.simulatedFailures) {
  throw new TransientMessageError(
    `Falla transitoria simulada ${retryCount + 1}/${config.simulatedFailures}`
  );
}
```

Leé el intento actual y la configuración con las funciones explicadas en la presentación:

```js
const count = retryCountOf(message);
const config = retryConfig();
```

Ante una falla transitoria:

```js
if (!(error instanceof PermanentMessageError) &&
    count < config.maxRetries) {
  await publishRetry(
    activeChannel, message, count + 1, error.message
  );
  activeChannel.ack(message);
  return;
}

const reason = error instanceof PermanentMessageError
  ? `permanente: ${error.message}`
  : `reintentos agotados (${count}/${config.maxRetries}): ${error.message}`;
await publishDlq(activeChannel, message, reason, count);
activeChannel.ack(message);
```

No uses `nack(message, false, true)`: devolver el mismo mensaje sin límite puede crear un ciclo infinito.

`MAX_RETRIES=3` significa **tres reintentos después del intento inicial**: como máximo habrá cuatro entregas (`count` 0, 1, 2 y 3). `SIMULATE_TRANSIENT_FAILURES=2` provoca dos fallas y permite que la tercera entrega termine correctamente. Con `SIMULATE_TRANSIENT_FAILURES=4`, la entrega con `count=3` termina en DLQ.

## A6 — Deduplicar por `eventId`

Creá `src/models/EventoProcesado.js`:

```js
const mongoose = require('mongoose');

const eventoProcesadoSchema = new mongoose.Schema({
  eventId: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  pedidoId: { type: mongoose.Schema.Types.ObjectId, required: true },
  procesadoEn: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('EventoProcesado', eventoProcesadoSchema);
```

Antes de repetir el efecto, consultá `eventId`. Luego reservá el identificador creando `EventoProcesado`; si el índice único informa `11000`, tratá el mensaje como duplicado y hacé `ack`. Después persistí el efecto. Si esa persistencia falla, eliminá la reserva y lanzá un error transitorio.

```js
if (await EventoProcesado.exists({ eventId: event.eventId })) {
  return { duplicate: true };
}
const pedido = await Pedido.findById(event.data.pedidoId);
if (!pedido) throw new PermanentMessageError('Pedido inexistente');

try {
  await EventoProcesado.create({
    eventId: event.eventId, type: event.type, pedidoId: pedido._id
  });
} catch (error) {
  if (error?.code === 11000) return { duplicate: true };
  throw error;
}

try {
  pedido.notificacionEstado = 'procesada';
  pedido.notificadoEn = new Date();
  await pedido.save();
} catch (error) {
  await EventoProcesado.deleteOne({ eventId: event.eventId });
  throw new TransientMessageError(
    `MongoDB no pudo persistir el efecto: ${error.message}`
  );
}
```

La secuencia no es una transacción distribuida. Explicá por qué todavía podría existir una ventana de falla y por qué outbox e inbox son evoluciones posibles.

## A7 — Ejecutar las pruebas

Iniciá API y worker en terminales separadas:

```bash
npm run dev
npm run worker
```

Usá una clave estable, por ejemplo:

```text
pedido-<ID>-confirmar-v1
```

Comprobá:

1. Primera confirmación: `200`, `Idempotency-Replayed: false`.
2. Replay: `200`, `Idempotency-Replayed: true`, mismo `eventId`.
3. Stock: solo un descuento.
4. Misma clave en otro pedido: `409`, `IDEMPOTENCY_KEY_REUSED`.
5. Otra clave en el pedido confirmado: `409`, `IDEMPOTENCY_KEY_MISMATCH`.
6. Dos fallas simuladas: configurá `SIMULATE_TRANSIENT_FAILURES=2`, reiniciá el worker y confirmá un pedido nuevo. Deben verse `retry 1/3`, `retry 2/3` y luego procesamiento.
7. Reintentos agotados: configurá `SIMULATE_TRANSIENT_FAILURES=4`, reiniciá el worker y confirmá otro pedido. En RabbitMQ Management, abrí **Queues and Streams** y verificá un mensaje en `notificaciones.pedido-confirmado.dlq` sin usar **Get Message(s)** todavía.
8. Mismo `eventId` republicado: copiá de la primera respuesta el objeto `evento`. En RabbitMQ Management abrí **Exchanges → pedidos.exchange → Publish message**, usá routing key `pedido.confirmado` y pegá ese objeto como payload JSON. El worker debe registrar `Duplicado reconocido` sin modificar otra vez el pedido.

Si inspeccionás un mensaje desde la consola RabbitMQ durante una prueba, reencolalo o documentá que lo retiraste.

## A8 — Evidencias, TPI y autocorrección

Creá `evidencias/pruebas-resiliencia.md` con:

- pedido, clave y `eventId` sintéticos;
- primera respuesta y replay;
- stock antes y después;
- conflictos `409`;
- contador de retries;
- mensaje en DLQ;
- log del evento duplicado;
- respuesta breve: ¿qué debe consultar un agente de IA antes de reintentar un `503`?;
- decisión para el TPI: operación, clave, fallas transitorias, límite, DLQ, deduplicación e inconsistencia aceptada.

Autocorrección:

- [ ] La misma clave devuelve el mismo resultado.
- [ ] El replay no descuenta stock ni publica otro evento.
- [ ] Una reutilización incompatible responde `409`.
- [ ] Los retries tienen límite observable.
- [ ] Un error permanente o agotado llega a DLQ.
- [ ] Un `eventId` duplicado no repite el efecto.
- [ ] Los errores indican `code`, `retryable` y `action`.
- [ ] No hay secretos, `.env` ni `node_modules` en la entrega.

## Troubleshooting

| Problema | Revisión |
|---|---|
| La API siempre devuelve `400` | Confirmá que `Idempotency-Key` tenga entre 8 y 128 caracteres válidos. |
| El stock baja dos veces | El replay debe resolverse antes de validar estado y descontar stock. |
| El mensaje no vuelve de retry | Revisá TTL, dead-letter exchange, routing key y bindings. |
| El worker gira sin detenerse | No reencoles con `nack(..., true)`; usá contador y retry queue. |
| Nunca aparece la DLQ | Verificá exchange `pedidos.dlx`, binding y espera de confirmación. |
| El duplicado se procesa | Confirmá el índice único de `EventoProcesado` y el orden de persistencia/ack. |
| RabbitMQ pierde datos al recrearse | El `tmpfs` es intencional y exclusivo del laboratorio. |

## Desafíos opcionales — fuera de los 120 minutos

- Usar una colección de idempotencia con estados `processing`, `completed` y `failed`.
- Aplicar backoff exponencial con varias colas TTL.
- Diseñar un inbox transaccional o un outbox, sin afirmar garantías que no se probaron.
- Agregar métricas de retries, duplicados y DLQ para la Clase 06.

## Entrega

Entregá un `.zip` de hasta 50 MB con código, `package.json`, lockfile, `.env.example`, `compose.yaml` y `evidencias/pruebas-resiliencia.md`. Excluí `.env`, tokens, credenciales y `node_modules`.
