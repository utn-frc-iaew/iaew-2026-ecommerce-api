# Clase 05 — Actividad práctica individual

## Qué vas a construir y por qué

En la Clase 04 la API confirma un pedido y publica un evento en RabbitMQ. El worker lo consume y actualiza el estado en MongoDB. Eso funciona bien en el camino feliz, pero tiene tres problemas reales:

**Problema 1 — El cliente no sabe si puede repetir**
Si la red corta justo después de que el servidor confirmó el pedido, el cliente recibe un timeout. No sabe si el pedido quedó confirmado o no. Si vuelve a llamar sin ningún contrato, el servidor descuenta stock de nuevo y publica otro evento. Eso es un duplicado de negocio.

**Problema 2 — El worker puede recibir el mismo mensaje más de una vez**
RabbitMQ garantiza entrega *al menos una vez*. Si el worker procesa el mensaje pero la conexión cae antes del `ack`, el broker lo reenvía. Sin deduplicación, el efecto se aplica dos veces.

**Problema 3 — Una falla transitoria mata el mensaje para siempre**
Si MongoDB está momentáneamente caído, el worker actual hace `nack` y el mensaje desaparece. No hay reintento, no hay registro de lo que falló.

**Lo que vas a implementar para resolver cada problema:**

| Problema | Solución | Dónde |
|---|---|---|
| Cliente no sabe si puede repetir | `Idempotency-Key` en el endpoint | `routes/pedidos.js` + `models/Pedido.js` |
| Worker recibe el mismo mensaje dos veces | Deduplicación por `eventId` | `models/EventoProcesado.js` + `worker.js` |
| Falla transitoria mata el mensaje | Retry con límite + DLQ | `lib/rabbit.js` + `worker.js` |

---

## Cómo funciona cada mecanismo — antes de tocar código

### Idempotency-Key

El cliente genera una clave única por intención (por ejemplo `confirmar-pedido-abc123`) y la manda en el header `Idempotency-Key`. El servidor la guarda junto al resultado. Si el mismo cliente repite la llamada con la misma clave, el servidor devuelve el resultado guardado sin volver a ejecutar nada.

```
Cliente                          Servidor
  |                                 |
  |-- POST /confirmar               |
  |   Idempotency-Key: key-001 ---> |  primera vez: ejecuta, guarda resultado
  |<-- 200 Replayed: false ---------|
  |                                 |
  |-- POST /confirmar               |
  |   Idempotency-Key: key-001 ---> |  segunda vez: reconoce la clave, devuelve lo guardado
  |<-- 200 Replayed: true ----------|  mismo eventId, stock no se vuelve a descontar
```

**Resultado esperado al probarlo:**
- Primera llamada → `200`, header `Idempotency-Replayed: false`, stock descontado una vez.
- Segunda llamada con misma clave → `200`, header `Idempotency-Replayed: true`, mismo `eventId`, stock sin cambios.
- Segunda llamada con clave distinta en pedido ya confirmado → `409 IDEMPOTENCY_KEY_MISMATCH`.
- Misma clave en otro pedido → `409 IDEMPOTENCY_KEY_REUSED`.

---

### Retry con límite y Dead Letter Queue (DLQ)

En lugar de hacer `nack` cuando algo falla, el worker republica el mensaje en una cola de espera con un contador `x-retry-count`. Después del tiempo de espera (`RETRY_DELAY_MS`), RabbitMQ lo devuelve a la cola principal automáticamente. Si el contador llega al máximo (`MAX_RETRIES`), el mensaje va a la DLQ en lugar de seguir girando.

```
Cola principal
  |
  |-- worker recibe mensaje (count=0), falla transitoria
  +--> retry queue (espera 3s, count=1)
         +--> cola principal
               |-- worker recibe mensaje (count=1), falla transitoria
               +--> retry queue (espera 3s, count=2)
                      +--> cola principal
                            |-- worker recibe mensaje (count=2), falla transitoria
                            +--> retry queue (espera 3s, count=3)
                                   +--> cola principal
                                         |-- worker recibe mensaje (count=3 = MAX_RETRIES)
                                         |   reintentos agotados
                                         +--> DLQ (queda ahí para inspección)
```

**Por qué no usar `nack(..., true)`:** reencola el mensaje de forma inmediata, sin espera ni contador. Si el error persiste, el worker entra en un ciclo infinito que consume CPU y bloquea mensajes sanos.

**Resultado esperado al probarlo:**
- Con `SIMULATE_TRANSIENT_FAILURES=2`: el worker falla 2 veces, en el tercer intento procesa correctamente. En los logs se ven `Reintento 1/3` y `Reintento 2/3`.
- Con `SIMULATE_TRANSIENT_FAILURES=4`: el worker falla 4 veces, supera `MAX_RETRIES=3`, el mensaje aparece en la DLQ de RabbitMQ Management.

---

### Deduplicación por `eventId`

Cada evento tiene un `eventId` único (UUID). El worker guarda ese ID en la colección `EventoProcesado` con un índice `unique`. Antes de aplicar cualquier efecto, consulta si ese `eventId` ya existe. Si existe, hace `ack` sin tocar nada.

```
Worker recibe mensaje
  |
  +--> ¿EventoProcesado.exists(eventId)?
        |
        SÍ --> log "Duplicado reconocido" --> ack (sin efecto)
        |
        NO --> crear EventoProcesado (reserva el ID)
               |
               +--> actualizar pedido en MongoDB
                     |
                     OK --> ack
                     FALLA --> borrar EventoProcesado --> TransientMessageError --> retry
```

**Resultado esperado al probarlo:**
- Republicar manualmente el mismo evento desde RabbitMQ Management → el worker loguea `Duplicado reconocido`, el pedido no cambia.

---

## Contrato de la actividad

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
| Intentos máximos | `MAX_RETRIES=3` (3 reintentos después del intento inicial = 4 entregas totales) |
| Header del intento | `x-retry-count` |
| Identificador de duplicado | `eventId` |

No buscamos "exactly once". Buscamos efectos idempotentes bajo una entrega que puede repetirse.


## A1 — Preparar la base

Elegí **uno** de estos caminos:

### Camino A — Continuar con tu código de las clases anteriores

Usalo si tu proyecto ya tiene completa y funcionando la Clase 04.

```bash
git status
git switch -c trabajo-clase-05
```

### Camino B — Usar la base común `clase-05-inicio`

Usalo si tu actividad anterior está incompleta o preferís partir de la solución comprobada de Clase 04.

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

Verificá que estés en la rama correcta y que los archivos base existan:

```bash
git branch --show-current
# debe mostrar: trabajo-clase-05

test -f src/app.js && test -f src/worker.js && \
  test -f src/lib/rabbit.js && test -f compose.yaml && echo "Base lista"
# debe mostrar: Base lista
```

Agregá estas variables al final de tu `.env`:

```text
RETRY_DELAY_MS=3000
MAX_RETRIES=3
SIMULATE_TRANSIENT_FAILURES=0
```

Iniciá los servicios:

```bash
docker start iaew-mongo 2>/dev/null || \
  docker run --name iaew-mongo -p 27017:27017 -d mongo:7
docker compose up -d rabbitmq
docker compose ps
```

Verificá antes de continuar:
- `GET http://localhost:3000/health` → `200`
- `GET http://localhost:3000/pedidos` sin token → `401`
- RabbitMQ Management en `http://localhost:15672` → login con `iaew` / `iaew-local`

### Preparar datos para las pruebas

Necesitás un token de Auth0 con scopes `write:pedidos confirm:pedidos read:pedidos`. Reutilizá el cliente M2M de Clase 03:

```bash
curl --request POST \
  --url "https://TU_AUTH0_DOMAIN/oauth/token" \
  --header 'content-type: application/json' \
  --data '{"client_id":"TU_CLIENT_ID","client_secret":"TU_CLIENT_SECRET","audience":"https://iaew-pedidos-api","grant_type":"client_credentials"}'

export API_URL=http://localhost:3000
export ACCESS_TOKEN='PEGAR_ACCESS_TOKEN'
export INTERNAL_API_KEY='MISMO_VALOR_QUE_EN_ENV'
```

Creá un producto y un pedido de prueba:

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

Sin tenant o credenciales podés completar el código, pero la prueba HTTP autenticada queda pendiente: no la presentes como ejecutada.


## A2 — Persistir la identidad de la confirmación

**Archivo: `src/models/Pedido.js`**

Agregá los dos campos nuevos dentro de `pedidoSchema`, después de `notificacionEstado`:

```js
// src/models/Pedido.js — dentro de pedidoSchema, después de notificacionEstado
confirmacionIdempotencyKey: {
  type: String,
  unique: true,
  sparse: true        // los pedidos pendientes no tienen clave; sparse evita colisión entre ellos
},
confirmacionEvento: {
  type: new mongoose.Schema({
    eventId: String,
    type: String,     // se usa mongoose.Schema para que 'type' no sea interpretado como tipo Mongoose
    version: Number,
    occurredAt: String,
    data: { pedidoId: String }
  }, { _id: false }),
  default: undefined
},
```

**Archivo nuevo: `src/lib/idempotency.js`**

Creá el archivo completo:

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
      details: { pattern: '[A-Za-z0-9._:-]', minLength: 8, maxLength: 128 }
    };
  }
  return null;
}

module.exports = { IDEMPOTENCY_KEY_PATTERN, validateIdempotencyKey };
```

**Archivo nuevo: `src/lib/errors.js`**

Creá el archivo completo:

```js
function sendError(res, status, error, code, retryable, action, details) {
  const body = { error, code, retryable, action };
  if (details) body.details = details;
  return res.status(status).json(body);
}

module.exports = { sendError };
```

---

## A3 — Implementar primera ejecución y replay

**Archivo: `src/routes/pedidos.js`**

Agregá los imports al inicio del archivo, junto a los existentes:

```js
// src/routes/pedidos.js — agregar junto a los otros requires al inicio
const { validateIdempotencyKey } = require('../lib/idempotency');
const { sendError } = require('../lib/errors');
```

Dentro del handler `POST /:id/confirmar`, después de buscar el pedido con `findById` y **antes** de cualquier validación de estado, agregá la validación de la clave y la lógica de replay. El orden importa: el replay debe resolverse antes de tocar stock:

```js
// src/routes/pedidos.js — dentro de POST /:id/confirmar, después de findById

// 1. Validar el header
const key = req.header('Idempotency-Key');
const invalidKey = validateIdempotencyKey(key);
if (invalidKey) {
  return sendError(res, 400, invalidKey.error, invalidKey.code, false,
    'Enviar una clave válida y estable por operación', invalidKey.details);
}

// 2. Replay: misma clave en pedido ya confirmado → devolver resultado guardado
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

// 3. Conflicto: pedido confirmado con otra clave
if (pedido.estado === 'confirmado') {
  return res.status(409).json({
    error: 'El pedido ya fue confirmado con otra clave',
    code: 'IDEMPOTENCY_KEY_MISMATCH',
    retryable: false,
    action: 'Consultar el pedido y no generar una nueva confirmación'
  });
}
```

Más abajo en el mismo handler, reemplazá el bloque donde se genera el evento y se llama a `pedido.save()`. Tiene que guardar la clave y el evento antes de publicar, y manejar la clave duplicada:

```js
// src/routes/pedidos.js — reemplazar el bloque de generación del evento y save

const evento = {
  eventId: crypto.randomUUID(),
  type: 'pedido.confirmado',
  version: 1,
  occurredAt: pedido.confirmadoEn.toISOString(),
  data: { pedidoId: pedido.id }
};
pedido.confirmacionIdempotencyKey = key;
pedido.confirmacionEvento = evento;

try {
  await pedido.save();
} catch (error) {
  if (error?.code === 11000) {
    return sendError(res, 409, 'La clave de idempotencia ya fue usada en otro pedido',
      'IDEMPOTENCY_KEY_REUSED', false, 'Usar una clave distinta por operación');
  }
  throw error;
}

try {
  await publishPedidoConfirmado(evento);
  res.set('Idempotency-Replayed', 'false');
  return res.status(200).json({
    pedido,
    evento,
    idempotencia: { key, replayed: false }
  });
} catch (error) {
  console.error('Pedido confirmado, pero no se pudo publicar el evento:', error.message);
  return res.status(503).json({
    error: 'El pedido quedó confirmado, pero no se pudo publicar la notificación.',
    pedido
  });
}
```


## A4 — Declarar retry y DLQ

**Archivo nuevo: `src/lib/config.js`**

Creá el archivo completo:

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

**Archivo: `src/lib/rabbit.js`**

Agregá los imports y constantes nuevas al inicio, junto a las existentes:

```js
// src/lib/rabbit.js — agregar al inicio junto a los otros requires y constantes
const { retryConfig } = require('./config');
const { retryDelayMs } = retryConfig();

const RETRY_EXCHANGE = 'pedidos.retry.exchange';
const RETRY_QUEUE = 'notificaciones.pedido-confirmado.retry';
const DLX = 'pedidos.dlx';
const DLQ_ROUTING_KEY = 'pedido.confirmado.dlq';
const DLQ = 'notificaciones.pedido-confirmado.dlq';
```

Dentro de `getChannel()`, después de la línea `await channel.bindQueue(QUEUE, EXCHANGE, ROUTING_KEY)`, agregá la declaración de las colas nuevas:

```js
// src/lib/rabbit.js — dentro de getChannel(), después del bindQueue existente

await channel.assertExchange(RETRY_EXCHANGE, 'direct', { durable: true });
await channel.assertExchange(DLX, 'direct', { durable: true });

await channel.assertQueue(RETRY_QUEUE, {
  durable: true,
  arguments: {
    'x-message-ttl': retryDelayMs,
    'x-dead-letter-exchange': EXCHANGE,       // al vencer el TTL, vuelve al exchange principal
    'x-dead-letter-routing-key': ROUTING_KEY
  }
});
await channel.bindQueue(RETRY_QUEUE, RETRY_EXCHANGE, ROUTING_KEY);

await channel.assertQueue(DLQ, { durable: true });
await channel.bindQueue(DLQ, DLX, DLQ_ROUTING_KEY);
```

Agregá las tres funciones nuevas antes del `module.exports`:

```js
// src/lib/rabbit.js — agregar antes de module.exports

async function confirmedPublish(ch, exchange, routingKey, content, options) {
  const accepted = ch.publish(exchange, routingKey, content, options);
  if (!accepted) throw new Error('RabbitMQ aplicó back-pressure al publicar');
  await ch.waitForConfirms();
}

async function publishRetry(ch, message, retryCount, reason) {
  await confirmedPublish(ch, RETRY_EXCHANGE, ROUTING_KEY, message.content, {
    ...message.properties,
    persistent: true,
    headers: {
      ...(message.properties.headers || {}),
      'x-retry-count': retryCount,
      'x-last-error': reason
    }
  });
}

async function publishDlq(ch, message, reason, retryCount) {
  await confirmedPublish(ch, DLX, DLQ_ROUTING_KEY, message.content, {
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

Actualizá el `module.exports` para incluir las funciones nuevas:

```js
// src/lib/rabbit.js — reemplazar module.exports
module.exports = {
  EXCHANGE, ROUTING_KEY, QUEUE,
  getChannel, publishPedidoConfirmado, closeRabbit,
  confirmedPublish, publishRetry, publishDlq
};
```


## A5 — Reintentar con límite

**Archivo: `src/worker.js`**

Agregá los imports nuevos al inicio, junto a los existentes:

```js
// src/worker.js — agregar junto a los otros requires al inicio
const EventoProcesado = require('./models/EventoProcesado');
const { retryConfig } = require('./lib/config');
const { publishRetry, publishDlq } = require('./lib/rabbit');
```

Agregá las clases de error y la función de lectura del contador después de los imports:

```js
// src/worker.js — agregar después de los requires

class PermanentMessageError extends Error {}
class TransientMessageError extends Error {}

function retryCountOf(message) {
  const value = Number(message.properties.headers?.['x-retry-count'] ?? 0);
  return Number.isInteger(value) && value >= 0 ? value : 0;
}
```

Reemplazá la función `processMessage` completa:

```js
// src/worker.js — reemplazar processMessage completa

async function processMessage(message, activeChannel) {
  // count y config se declaran FUERA del try para que el catch también los vea.
  // Si los declarás dentro del try, el catch lanza ReferenceError: count is not defined.
  const count = retryCountOf(message);
  const config = retryConfig();

  try {
    // Falla transitoria simulada para pruebas (controlada por SIMULATE_TRANSIENT_FAILURES)
    if (count < config.simulatedFailures) {
      throw new TransientMessageError(
        `Falla transitoria simulada ${count + 1}/${config.simulatedFailures}`
      );
    }

    const event = parsePedidoConfirmado(message.content);

    // --- lógica de deduplicación: se agrega en A6 ---

    activeChannel.ack(message);
  } catch (error) {
    if (!(error instanceof PermanentMessageError) && count < config.maxRetries) {
      console.warn(`Reintento ${count + 1}/${config.maxRetries}: ${error.message}`);
      await publishRetry(activeChannel, message, count + 1, error.message);
      activeChannel.ack(message);
      return;
    }

    const reason = error instanceof PermanentMessageError
      ? `permanente: ${error.message}`
      : `reintentos agotados (${count}/${config.maxRetries}): ${error.message}`;
    console.error(`Enviando a DLQ — ${reason}`);
    await publishDlq(activeChannel, message, reason, count);
    activeChannel.ack(message);
  }
}
```

---

## A6 — Deduplicar por `eventId`

**Archivo nuevo: `src/models/EventoProcesado.js`**

Creá el archivo completo:

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

**Archivo: `src/worker.js`**

Reemplazá el comentario `// --- lógica de deduplicación: se agrega en A6 ---` dentro del `try` de `processMessage` con este bloque:

```js
// src/worker.js — reemplazar el comentario de deduplicación dentro del try

// 1. Verificar si el evento ya fue procesado
if (await EventoProcesado.exists({ eventId: event.eventId })) {
  console.log(`Duplicado reconocido: evento ${event.eventId}`);
  activeChannel.ack(message);
  return;
}

// 2. Buscar el pedido
const pedido = await Pedido.findById(event.data.pedidoId);
if (!pedido) throw new PermanentMessageError('Pedido inexistente');

// 3. Reservar el eventId antes de aplicar el efecto
try {
  await EventoProcesado.create({
    eventId: event.eventId,
    type: event.type,
    pedidoId: pedido._id
  });
} catch (error) {
  if (error?.code === 11000) {
    console.log(`Duplicado reconocido (race): evento ${event.eventId}`);
    activeChannel.ack(message);
    return;
  }
  throw error;
}

// 4. Aplicar el efecto; si falla, revertir la reserva
try {
  pedido.notificacionEstado = 'procesada';
  pedido.notificadoEn = new Date();
  await pedido.save();
} catch (error) {
  await EventoProcesado.deleteOne({ eventId: event.eventId });
  throw new TransientMessageError(`MongoDB no pudo persistir el efecto: ${error.message}`);
}

console.log(`Notificación procesada para pedido ${pedido.id}; evento ${event.eventId}`);
```

> La secuencia no es una transacción distribuida. Si la conexión cae entre el `create` de `EventoProcesado` y el `save` del pedido, puede quedar una reserva sin efecto. El `deleteOne` del paso 4 intenta revertirla, pero si ese también falla, el mensaje quedará en retry hasta que el worker lo reintente y detecte el duplicado por el índice único. Outbox e inbox son evoluciones posibles para cerrar esa ventana.


## A7 — Ejecutar las pruebas

Iniciá API y worker en terminales separadas:

```bash
# Terminal 1
npm run dev

# Terminal 2
node src/worker.js
```

Usá una clave estable por pedido, por ejemplo `pedido-$PEDIDO_ID-v1`.

### Prueba 1 — Primera confirmación

```bash
curl -sS -X POST "$API_URL/pedidos/$PEDIDO_ID/confirmar" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Idempotency-Key: pedido-$PEDIDO_ID-v1" | jq .
```

Resultado esperado: `200`, header `Idempotency-Replayed: false`, campo `idempotencia.replayed: false` en el body. El worker loguea `Notificación procesada`.

### Prueba 2 — Replay con la misma clave

Repetí exactamente el mismo `curl` anterior.

Resultado esperado: `200`, header `Idempotency-Replayed: true`, mismo `eventId` que la primera respuesta. El worker no loguea nada nuevo. El stock no cambia.

### Prueba 3 — Conflicto con otra clave

```bash
curl -sS -X POST "$API_URL/pedidos/$PEDIDO_ID/confirmar" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Idempotency-Key: pedido-$PEDIDO_ID-v2" | jq .
```

Resultado esperado: `409`, `code: IDEMPOTENCY_KEY_MISMATCH`.

### Prueba 4 — Retry por falla transitoria

En `.env` cambiá `SIMULATE_TRANSIENT_FAILURES=2` y reiniciá el worker (`Ctrl+C` y `node src/worker.js`). Creá un pedido nuevo y confirmalo.

Resultado esperado en los logs del worker:
```
Reintento 1/3: Falla transitoria simulada 1/2
Reintento 2/3: Falla transitoria simulada 2/2
Notificación procesada para pedido <id>; evento <eventId>
```

Volvé a `SIMULATE_TRANSIENT_FAILURES=0` al terminar.

### Prueba 5 — Reintentos agotados → DLQ

En `.env` cambiá `SIMULATE_TRANSIENT_FAILURES=4` y reiniciá el worker. Creá un pedido nuevo y confirmalo.

Resultado esperado en los logs:
```
Reintento 1/3: Falla transitoria simulada 1/4
Reintento 2/3: Falla transitoria simulada 2/4
Reintento 3/3: Falla transitoria simulada 3/4
Enviando a DLQ — reintentos agotados (3/3): Falla transitoria simulada 4/4
```

En RabbitMQ Management (`http://localhost:15672`) → **Queues and Streams** → `notificaciones.pedido-confirmado.dlq` → debe mostrar 1 mensaje en la columna **Ready**.

Volvé a `SIMULATE_TRANSIENT_FAILURES=0` al terminar.

### Prueba 6 — Evento duplicado

Con `SIMULATE_TRANSIENT_FAILURES=0`, confirmá un pedido nuevo y copiá el `eventId` de la respuesta. En RabbitMQ Management → **Exchanges** → `pedidos.exchange` → **Publish message**:
- Routing key: `pedido.confirmado`
- Payload: el objeto `evento` completo de la respuesta (JSON)

Resultado esperado en los logs del worker:
```
Duplicado reconocido: evento <eventId>
```

El pedido no cambia. No hay nuevo registro en `EventoProcesado`.

---

## A8 — Evidencias, TPI y autocorrección

Creá `evidencias/pruebas-resiliencia.md` con capturas o transcripciones de:

- Primera confirmación y replay (responses completas)
- Stock antes y después (una sola bajada)
- Conflictos `409` (MISMATCH y REUSED)
- Logs del worker con retries
- Mensaje visible en DLQ (captura de RabbitMQ Management)
- Log de duplicado reconocido
- Respuesta breve: ¿qué debe consultar un agente de IA antes de reintentar un `503`?
- Decisión para el TPI: operación elegida, clave, fallas transitorias, límite, DLQ, deduplicación e inconsistencia aceptada

Autocorrección:

- [ ] La misma clave devuelve el mismo resultado.
- [ ] El replay no descuenta stock ni publica otro evento.
- [ ] Una reutilización incompatible responde `409`.
- [ ] Los retries tienen límite observable.
- [ ] Un error permanente o agotado llega a DLQ.
- [ ] Un `eventId` duplicado no repite el efecto.
- [ ] Los errores indican `code`, `retryable` y `action`.
- [ ] No hay secretos, `.env` ni `node_modules` en la entrega.

---

## Troubleshooting

| Problema | Revisión |
|---|---|
| La API siempre devuelve `400` | Confirmá que `Idempotency-Key` tenga entre 8 y 128 caracteres válidos. |
| El stock baja dos veces | El replay debe resolverse antes de validar estado y descontar stock. |
| `ReferenceError: count is not defined` | `count` y `config` deben declararse fuera del `try`, no dentro. |
| El mensaje no vuelve de retry | Revisá TTL, dead-letter exchange, routing key y bindings en RabbitMQ Management. |
| El worker gira sin detenerse | No reencoles con `nack(..., true)`; usá contador y retry queue. |
| Nunca aparece la DLQ | Verificá exchange `pedidos.dlx`, binding y que `publishDlq` esté exportado. |
| El duplicado se procesa | Confirmá el índice único de `EventoProcesado` y el orden de persistencia/ack. |
| `Cast to string failed` en confirmacionEvento | Usá `new mongoose.Schema({...})` como tipo del campo para que Mongoose no interprete `type` como tipo de dato. |
| RabbitMQ pierde datos al recrearse | El `tmpfs` es intencional y exclusivo del laboratorio. |

---

## Desafíos opcionales — fuera de los 120 minutos

- Usar una colección de idempotencia con estados `processing`, `completed` y `failed`.
- Aplicar backoff exponencial con varias colas TTL.
- Diseñar un inbox transaccional o un outbox, sin afirmar garantías que no se probaron.
- Agregar métricas de retries, duplicados y DLQ para la Clase 06.

---

## Entrega

Entregá un `.zip` de hasta 50 MB con código, `package.json`, lockfile, `.env.example`, `compose.yaml` y `evidencias/pruebas-resiliencia.md`. Excluí `.env`, tokens, credenciales y `node_modules`.
