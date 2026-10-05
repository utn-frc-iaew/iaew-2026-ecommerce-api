# Clase 07 — Código completo de la actividad

Este anexo reproduce el código y la configuración del laboratorio. Se ejecuta desde `recursos/laboratorio`; no es necesario copiarlo manualmente. El `package-lock.json` está incluido en esa carpeta para instalaciones reproducibles.

La base proviene de `clase-06-inicio` (`de858b0daace87420d1afbbaa732b3133262b797`). Se instrumentan HTTP, publicación, consumo y logs sin cambiar audience, scopes, idempotencia, reintentos ni DLQ.

## Recorrido de la telemetría

1. `telemetry.js` inicia el SDK y exporters antes de cargar aplicación o worker.
2. `observeHttp` inicia un span y devuelve sus identificadores.
3. `publishPedidoConfirmado` inicia un span productor e inyecta headers.
4. `observedMessage` extrae el contexto y crea un span consumidor.
5. `log` envía el registro con el contexto activo; las métricas usan atributos de baja cardinalidad.
6. Grafana relaciona Loki y Tempo; Prometheus recoge recursos con cAdvisor.

## Leer antes de ejecutar

- `.env.example` es una plantilla; no contiene un access token ni credenciales Auth0 reales.
- La variable `AUTH0_ISSUER_BASE_URL` existe para la fixture docente; no se configura en el camino del alumno.
- La dependencia lenta es una espera simulada. No se interpreta como carga de CPU.
- La alerta usa promedio por intento; el p95 del dashboard se estima con buckets explícitos en segundos.
- El código conserva limitaciones de la base: no agrega una transacción distribuida ni un patrón outbox.

## Dockerfile

```dockerfile
FROM node:22.17.0-bookworm-slim
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev --ignore-scripts --no-audit --no-fund
COPY src ./src
COPY scripts ./scripts
COPY validation ./validation
CMD ["npm", "start"]
```

## compose.yaml

```yaml
name: iaew-clase07
x-app: &app
  build: .
  image: iaew-clase07-app:local
  init: true
  environment: &app-env
    MONGODB_URI: mongodb://mongodb:27017/iaew_clase07
    RABBIT_URL: amqp://iaew:iaew-local@rabbitmq:5672
    AUTH0_DOMAIN: ${AUTH0_DOMAIN:-tu-tenant.us.auth0.com}
    AUTH0_AUDIENCE: https://iaew-pedidos-api
    INTERNAL_API_KEY: ${INTERNAL_API_KEY:-iaew-clase07-local}
    OTEL_EXPORTER_OTLP_ENDPOINT: http://lgtm:4318
    OTEL_TRACES_SAMPLER: always_on
    MAX_RETRIES: 3
    RETRY_DELAY_MS: 3000
  depends_on:
    mongodb: {condition: service_healthy}
    rabbitmq: {condition: service_healthy}
    lgtm: {condition: service_healthy}
services:
  mongodb:
    image: mongo:7.0.21
    volumes: [mongo-data:/data/db]
    healthcheck:
      test: [CMD, mongosh, --quiet, --eval, "db.adminCommand('ping').ok"]
      interval: 5s
      timeout: 5s
      retries: 30
  rabbitmq:
    image: rabbitmq:4.2.0-management
    environment:
      RABBITMQ_DEFAULT_USER: iaew
      RABBITMQ_DEFAULT_PASS: iaew-local
      RUNNING_UNDER_SYSTEMD: "true"
    ports: ["127.0.0.1:15677:15672"]
    tmpfs: ["/var/lib/rabbitmq:uid=999,gid=999,mode=0770"]
    healthcheck:
      test: [CMD, rabbitmq-diagnostics, -q, ping]
      interval: 5s
      timeout: 5s
      retries: 30
  lgtm:
    image: grafana/otel-lgtm:0.35.0
    ports: ["127.0.0.1:3007:3000"]
    environment:
      GF_SECURITY_ADMIN_USER: admin
      GF_SECURITY_ADMIN_PASSWORD: admin
      GF_AUTH_ANONYMOUS_ENABLED: "false"
      ENABLE_LOGS_GRAFANA: "true"
    volumes:
      - lgtm-data:/data
      - ./observabilidad/prometheus.yaml:/otel-lgtm/prometheus.yaml:ro
      - ./observabilidad/datasources.yaml:/otel-lgtm/grafana/conf/provisioning/datasources/grafana-datasources.yaml:ro
      - ./observabilidad/dashboard-provider.yaml:/otel-lgtm/grafana/conf/provisioning/dashboards/iaew.yaml:ro
      - ./observabilidad/dashboard.json:/otel-lgtm/grafana/conf/provisioning/dashboards/custom/iaew.json:ro
      - ./observabilidad/alerts.yaml:/otel-lgtm/grafana/conf/provisioning/alerting/iaew.yaml:ro
    healthcheck:
      test: [CMD-SHELL, "curl -fsS http://localhost:3000/api/health && curl -fsS http://localhost:3200/ready && curl -fsS http://localhost:3100/ready && curl -fsS http://localhost:9090/-/ready"]
      interval: 5s
      timeout: 5s
      retries: 60
      start_period: 15s
  cadvisor:
    build: ./observabilidad/cadvisor
    image: iaew-clase07-cadvisor:0.60.6
    privileged: true
    command: [--docker_only=true, --housekeeping_interval=5s, --store_container_labels=true, "--containerd=${CADVISOR_CONTAINERD_SOCKET:-/rootfs/run/containerd/containerd.sock}"]
    volumes:
      - /:/rootfs:ro
      - /var/run:/var/run:ro
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - /sys:/sys:ro
      - /var/lib/docker:/var/lib/docker:ro
    # Linux nativo. En Docker Desktop el host observado es su VM Linux.
  api:
    <<: *app
    ports: ["127.0.0.1:3008:3000"]
    environment:
      <<: *app-env
      PROPAGATE_TRACE_CONTEXT: ${PROPAGATE_TRACE_CONTEXT:-true}
      OTEL_SERVICE_NAME: pedidos-api
      PORT: 3000
    healthcheck:
      test: [CMD, node, -e, "fetch('http://localhost:3000/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"]
      interval: 5s
      timeout: 5s
      retries: 20
  worker:
    <<: *app
    command: [npm, run, worker]
    environment:
      <<: *app-env
      OTEL_SERVICE_NAME: pedidos-worker
      WORKER_DELAY_MS: ${WORKER_DELAY_MS:-0}
      SIMULATE_TRANSIENT_FAILURES: ${SIMULATE_TRANSIENT_FAILURES:-0}
  tools:
    <<: *app
    profiles: [tools]
    environment:
      <<: *app-env
      API_URL: http://api:3000
      ACCESS_TOKEN: ${ACCESS_TOKEN:-}
    volumes: [./evidencias:/app/evidencias]
    command: [node, scripts/scenario.js, normal]
volumes:
  mongo-data:
  lgtm-data:
```

## .env.example

```dotenv
AUTH0_DOMAIN=tu-tenant.us.auth0.com
AUTH0_AUDIENCE=https://iaew-pedidos-api
# Solo para crear productos en el laboratorio local; no sustituye OAuth para pedidos.
INTERNAL_API_KEY=iaew-clase07-local
# Access token real con read:pedidos write:pedidos confirm:pedidos. Nunca entregar este archivo.
ACCESS_TOKEN=
WORKER_DELAY_MS=0
SIMULATE_TRANSIENT_FAILURES=0
PROPAGATE_TRACE_CONTEXT=true
# Opcional: otro socket de containerd en Linux. En Desktop se usa el valor del Compose.
# CADVISOR_CONTAINERD_SOCKET=/rootfs/run/docker/containerd/containerd.sock
```

## package.json

```json
{
  "name": "iaew-clase-07-observabilidad",
  "version": "1.0.0",
  "private": true,
  "description": "Laboratorio individual de trazas, logs, métricas y correlación.",
  "main": "src/app.js",
  "scripts": {
    "dev": "nodemon src/app.js",
    "start": "node --require ./src/telemetry.js src/app.js",
    "worker": "node --require ./src/telemetry.js src/worker.js",
    "test": "node --test",
    "check": "node --check src/app.js && node --check src/worker.js && node --check src/routes/pedidos.js"
  },
  "dependencies": {
    "amqplib": "2.0.1",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "express-oauth2-jwt-bearer": "1.10.0",
    "mongoose": "^8.9.5",
    "@opentelemetry/api": "1.9.0",
    "@opentelemetry/api-logs": "0.222.0",
    "@opentelemetry/sdk-node": "0.222.0",
    "@opentelemetry/sdk-logs": "0.222.0",
    "@opentelemetry/sdk-metrics": "2.11.0",
    "@opentelemetry/resources": "2.11.0",
    "@opentelemetry/exporter-trace-otlp-http": "0.222.0",
    "@opentelemetry/exporter-logs-otlp-http": "0.222.0",
    "@opentelemetry/exporter-metrics-otlp-http": "0.222.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.9"
  },
  "engines": {
    "node": ">=20"
  }
}
```

## src/app.js

```javascript
require('dotenv').config();
const express = require('express');
const { connectDb } = require('./db');
const productosRouter = require('./routes/productos');
const pedidosRouter = require('./routes/pedidos');
const { validateAccessToken } = require('./middleware/auth0');
const { sendError } = require('./lib/errors');
const { closeRabbit } = require('./lib/rabbit');

const { observeHttp } = require('./lib/observability');
const app = express();
const port = process.env.PORT || 3000;
app.use(observeHttp);
app.use(express.json());
app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.use('/productos', productosRouter);
app.use('/pedidos', pedidosRouter);
app.get('/token-info', validateAccessToken, (req, res) => res.json({
  issuer: req.auth.payload.iss, audience: req.auth.payload.aud,
  subject: req.auth.payload.sub, scopes: req.auth.payload.scope
}));
app.use((err, req, res, next) => {
  if (err.status === 401) return sendError(res, 401, 'Token ausente, inválido o expirado', 'TOKEN_INVALID', false, 'Obtener y enviar un access token válido');
  if (err.status === 403) return sendError(res, 403, 'Permisos insuficientes', 'SCOPE_REQUIRED', false, 'Solicitar el scope requerido');
  if (err.type === 'entity.parse.failed') return sendError(res, 400, 'JSON inválido', 'INVALID_JSON', false, 'Corregir el cuerpo JSON');
  return next(err);
});
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.error('Error no controlado:', err.message);
  return sendError(res, 500, 'Error interno', 'INTERNAL_ERROR', true, 'Reintentar más tarde');
});

if (require.main === module) {
  connectDb().then(() => app.listen(port, () => console.log(`API escuchando en http://localhost:${port}`)))
    .catch((error) => { console.error('No se pudo conectar a MongoDB:', error.message); process.exit(1); });
  process.on('SIGINT', async () => { await closeRabbit(); process.exit(0); });
}

module.exports = app;
```

## src/db.js

```javascript
const mongoose = require('mongoose');

async function connectDb() {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/iaew_ecommerce';
  await mongoose.connect(uri);
  console.log('Conexión a MongoDB establecida');
}

module.exports = { connectDb };
```

## src/lib/config.js

```javascript
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

## src/lib/errors.js

```javascript
function sendError(res, status, error, code, retryable, action, details) {
  const body = { error, code, retryable, action };
  if (details !== undefined) body.details = details;
  return res.status(status).json(body);
}

module.exports = { sendError };
```

## src/lib/idempotency.js

```javascript
const IDEMPOTENCY_KEY_PATTERN = /^[A-Za-z0-9._:-]{8,128}$/;

function validateIdempotencyKey(value) {
  if (typeof value !== 'string' || value.length === 0) {
    return { code: 'IDEMPOTENCY_KEY_REQUIRED', error: 'El encabezado Idempotency-Key es obligatorio' };
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

## src/lib/observability.js

```javascript
const crypto = require('node:crypto');
const { context, trace, metrics, propagation, SpanKind, SpanStatusCode, createContextKey } = require('@opentelemetry/api');
const { logs, SeverityNumber } = require('@opentelemetry/api-logs');
const CORRELATION = createContextKey('iaew.correlation');
const tracer = trace.getTracer('iaew-pedidos');
const meter = metrics.getMeter('iaew-pedidos');
const logger = logs.getLogger('iaew-pedidos');
const attempts = meter.createCounter('iaew_worker_attempts', { description: 'Intentos de consumo por resultado' });
const workerDuration = meter.createHistogram('iaew_worker_duration', { unit: 's', description: 'Duración de un intento del worker' });
const httpRequests = meter.createCounter('iaew_http_requests', { description: 'Respuestas HTTP por ruta y estado' });
const httpDuration = meter.createHistogram('iaew_http_duration', { unit: 's' });
const confirmations = meter.createCounter('iaew_confirmations', { description: 'Confirmaciones, rechazos y repeticiones HTTP' });
function log(event, fields = {}, level = 'info') {
  const sc = trace.getSpan(context.active())?.spanContext();
  const record = { timestamp: new Date().toISOString(), level,
    'service.name': process.env.OTEL_SERVICE_NAME || 'pedidos-api', event,
    correlation_id: context.active().getValue(CORRELATION),
    trace_id: sc?.traceId, span_id: sc?.spanId, ...fields };
  // stdout para Compose y OTLP para Loki: son destinos distintos, no dos ingestiones a Loki.
  console.log(JSON.stringify(record));
  logger.emit({ body: JSON.stringify(record), severityText: level.toUpperCase(),
    severityNumber: level === 'error' ? SeverityNumber.ERROR : level === 'warn' ? SeverityNumber.WARN : SeverityNumber.INFO,
    attributes: { event, ...fields }, context: context.active() });
}
async function withSpan(name, attributes, operation, parent = context.active(), kind = SpanKind.INTERNAL) {
  return tracer.startActiveSpan(name, { attributes, kind }, parent, async (span) => {
    try { return await operation(span); }
    catch (error) { span.recordException(error); span.setStatus({ code: SpanStatusCode.ERROR, message: error.message }); throw error; }
    finally { span.end(); }
  });
}
function messageHeaders(extra = {}) {
  const headers = { ...extra };
  if (process.env.PROPAGATE_TRACE_CONTEXT !== 'false') propagation.inject(context.active(), headers);
  const correlation = context.active().getValue(CORRELATION);
  if (correlation) headers['x-correlation-id'] = correlation;
  return headers;
}
function messageContext(headers = {}) {
  // No heredar accidentalmente el contexto de otra entrega del consumidor.
  const { ROOT_CONTEXT } = require('@opentelemetry/api');
  return propagation.extract(ROOT_CONTEXT, headers).setValue(CORRELATION, headers['x-correlation-id'] || crypto.randomUUID());
}
function observeHttp(req, res, next) {
  if (req.path === '/health') return next();
  const parent = propagation.extract(context.active(), req.headers).setValue(CORRELATION, crypto.randomUUID());
  tracer.startActiveSpan('HTTP request', { kind: SpanKind.SERVER }, parent, (span) => {
    const start = performance.now();
    res.set('X-Trace-Id', span.spanContext().traceId);
    res.set('X-Correlation-Id', context.active().getValue(CORRELATION));
    log('http.started', { method: req.method });
    res.once('finish', () => {
      const route = req.originalUrl.split('?')[0].replace(/[a-f0-9]{24}/gi, ':id');
      const attrs = { route, method: req.method, status: String(res.statusCode) };
      span.updateName(`${req.method} ${route}`);
      span.setAttributes({ 'http.request.method': req.method, 'http.route': route, 'http.response.status_code': res.statusCode });
      if (res.statusCode >= 500) span.setStatus({ code: SpanStatusCode.ERROR });
      httpRequests.add(1, attrs); httpDuration.record((performance.now() - start) / 1000, attrs);
      if (req.method === 'POST' && route === '/pedidos/:id/confirmar') {
        confirmations.add(1, { result: res.statusCode === 200 ? (res.get('Idempotency-Replayed') === 'true' ? 'replayed' : 'confirmed') : res.statusCode < 500 ? 'rejected' : 'error' });
      }
      context.with(trace.setSpan(parent, span), () => log('http.finished', { ...attrs, duration_ms: Math.round(performance.now() - start) }));
      span.end();
    });
    next();
  });
}
module.exports = { CORRELATION, log, withSpan, messageHeaders, messageContext, observeHttp, attempts, workerDuration, SpanKind, SpanStatusCode };
```

## src/lib/rabbit.js

```javascript
const { withSpan, messageHeaders, SpanKind, log } = require('./observability');
const amqp = require('amqplib');
const { retryConfig } = require('./config');

const EXCHANGE = 'pedidos.exchange';
const ROUTING_KEY = 'pedido.confirmado';
const QUEUE = 'notificaciones.pedido-confirmado';
const RETRY_EXCHANGE = 'pedidos.retry.exchange';
const RETRY_QUEUE = 'notificaciones.pedido-confirmado.retry';
const DLX = 'pedidos.dlx';
const DLQ_ROUTING_KEY = 'pedido.confirmado.dlq';
const DLQ = 'notificaciones.pedido-confirmado.dlq';
let connection;
let channel;

function rabbitUrl() {
  if (process.env.RABBIT_URL) return process.env.RABBIT_URL;
  const user = encodeURIComponent(process.env.RABBIT_USER || 'iaew');
  const pass = encodeURIComponent(process.env.RABBIT_PASS || 'iaew-local');
  return `amqp://${user}:${pass}@localhost:5672`;
}

async function getChannel() {
  if (channel) return channel;
  connection = await amqp.connect(rabbitUrl());
  connection.on('error', (error) => console.error('Conexión RabbitMQ falló:', error.message));
  connection.on('close', () => { connection = undefined; channel = undefined; });
  channel = await connection.createConfirmChannel();
  const { retryDelayMs } = retryConfig();

  await channel.assertExchange(EXCHANGE, 'direct', { durable: true });
  await channel.assertExchange(RETRY_EXCHANGE, 'direct', { durable: true });
  await channel.assertExchange(DLX, 'direct', { durable: true });
  await channel.assertQueue(QUEUE, { durable: true });
  await channel.bindQueue(QUEUE, EXCHANGE, ROUTING_KEY);
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
  return channel;
}

async function confirmedPublish(activeChannel, exchange, routingKey, content, options) {
  const accepted = activeChannel.publish(exchange, routingKey, content, options);
  if (!accepted) throw new Error('RabbitMQ aplicó back-pressure al publicar');
  await activeChannel.waitForConfirms();
}

async function publishPedidoConfirmado(event) {
  return withSpan('pedido.publicar', { 'messaging.system': 'rabbitmq', 'messaging.destination.name': EXCHANGE, 'pedido.id': event.data.pedidoId, 'event.id': event.eventId }, async () => {
    const activeChannel = await getChannel();
    await confirmedPublish(activeChannel, EXCHANGE, ROUTING_KEY, Buffer.from(JSON.stringify(event)), {
      contentType: 'application/json', persistent: true, messageId: event.eventId,
      type: event.type, headers: messageHeaders({ 'x-retry-count': 0 })
    });
    log('pedido.published', { pedido_id: event.data.pedidoId, event_id: event.eventId });
  }, undefined, SpanKind.PRODUCER);
}

async function publishRetry(activeChannel, message, retryCount, reason) {
  await confirmedPublish(activeChannel, RETRY_EXCHANGE, ROUTING_KEY, message.content, {
    ...message.properties, persistent: true,
    headers: messageHeaders({ ...(message.properties.headers || {}), 'x-retry-count': retryCount, 'x-last-error': reason })
  });
}

async function publishDlq(activeChannel, message, reason, retryCount) {
  await confirmedPublish(activeChannel, DLX, DLQ_ROUTING_KEY, message.content, {
    ...message.properties, persistent: true,
    headers: messageHeaders({ ...(message.properties.headers || {}), 'x-retry-count': retryCount, 'x-dlq-reason': reason })
  });
}

async function closeRabbit() {
  const activeConnection = connection;
  connection = undefined;
  channel = undefined;
  if (!activeConnection) return;
  try {
    await activeConnection.close();
  } catch (error) {
    if (error?.name !== 'IllegalOperationError') throw error;
  }
}

module.exports = {
  EXCHANGE, ROUTING_KEY, QUEUE, RETRY_EXCHANGE, RETRY_QUEUE, DLX, DLQ_ROUTING_KEY, DLQ,
  getChannel, publishPedidoConfirmado, publishRetry, publishDlq, closeRabbit
};
```

## src/middleware/apiKey.js

```javascript
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
```

## src/middleware/auth0.js

```javascript
require('dotenv').config();
const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');

const validateAccessToken = auth({
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL || `https://${process.env.AUTH0_DOMAIN}`,
  audience: process.env.AUTH0_AUDIENCE,
  tokenSigningAlg: 'RS256'
});

function requireScope(scope) {
  return [validateAccessToken, requiredScopes(scope)];
}

module.exports = { validateAccessToken, requireScope };
```

## src/models/EventoProcesado.js

```javascript
const mongoose = require('mongoose');

const eventoProcesadoSchema = new mongoose.Schema({
  eventId: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  pedidoId: { type: mongoose.Schema.Types.ObjectId, required: true },
  procesadoEn: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('EventoProcesado', eventoProcesadoSchema);
```

## src/models/Pedido.js

```javascript
const mongoose = require('mongoose');

const itemPedidoSchema = new mongoose.Schema({
  productoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
  nombre: { type: String, required: true },
  cantidad: { type: Number, required: true, min: 1 },
  precioUnitario: { type: Number, required: true, min: 0 }
}, { _id: false });

const eventoSchema = new mongoose.Schema({
  eventId: { type: String, required: true },
  type: { type: String, required: true },
  version: { type: Number, required: true },
  occurredAt: { type: String, required: true },
  data: { pedidoId: { type: String, required: true } }
}, { _id: false });

const pedidoSchema = new mongoose.Schema({
  cliente: {
    nombre: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true }
  },
  estado: { type: String, enum: ['pendiente', 'confirmado', 'cancelado'], default: 'pendiente' },
  items: {
    type: [itemPedidoSchema],
    validate: { validator: (items) => items.length > 0, message: 'El pedido debe tener al menos un item' }
  },
  total: { type: Number, required: true, min: 0 },
  confirmadoEn: Date,
  confirmacionIdempotencyKey: { type: String, unique: true, sparse: true },
  confirmacionEvento: eventoSchema,
  notificacionEstado: { type: String, enum: ['pendiente', 'procesada'], default: 'pendiente' },
  notificadoEn: Date
}, { timestamps: true });

module.exports = mongoose.model('Pedido', pedidoSchema);
```

## src/models/Producto.js

```javascript
const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true },
  precio: { type: Number, required: true, min: 0 },
  categoria: { type: String, required: true, trim: true },
  stock: { type: Number, required: true, min: 0 },
  activo: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Producto', productoSchema);
```

## src/routes/pedidos.js

```javascript
const crypto = require('crypto');
const express = require('express');
const mongoose = require('mongoose');
const Pedido = require('../models/Pedido');
const Producto = require('../models/Producto');
const { publishPedidoConfirmado } = require('../lib/rabbit');
const { validateIdempotencyKey } = require('../lib/idempotency');
const { sendError } = require('../lib/errors');
const { requireScope } = require('../middleware/auth0');
const router = express.Router();

router.get('/', requireScope('read:pedidos'), async (req, res) => {
  try { res.json(await Pedido.find().sort({ createdAt: -1 })); }
  catch { sendError(res, 500, 'Error al consultar pedidos', 'ORDERS_QUERY_FAILED', true, 'Reintentar más tarde'); }
});

router.post('/', requireScope('write:pedidos'), async (req, res) => {
  try {
    if (!Array.isArray(req.body.items) || req.body.items.length === 0) return sendError(res, 400, 'El pedido debe tener al menos un item', 'ORDER_ITEMS_REQUIRED', false, 'Agregar al menos un item');
    const items = [];
    for (const item of req.body.items) {
      if (!mongoose.Types.ObjectId.isValid(item.productoId)) return sendError(res, 400, 'ID de producto inválido', 'PRODUCT_ID_INVALID', false, 'Corregir productoId');
      const producto = await Producto.findById(item.productoId);
      if (!producto || !producto.activo) return sendError(res, 400, 'Producto inexistente o inactivo', 'PRODUCT_INVALID', false, 'Elegir un producto activo');
      if (!Number.isInteger(item.cantidad) || item.cantidad < 1) return sendError(res, 400, 'Cantidad inválida', 'QUANTITY_INVALID', false, 'Enviar una cantidad entera positiva');
      items.push({ productoId: producto._id, nombre: producto.nombre, cantidad: item.cantidad, precioUnitario: producto.precio });
    }
    const total = items.reduce((sum, item) => sum + item.cantidad * item.precioUnitario, 0);
    res.status(201).json(await Pedido.create({ cliente: req.body.cliente, items, total }));
  } catch (error) { sendError(res, 400, 'Pedido inválido', 'ORDER_DATA_INVALID', false, 'Corregir los datos enviados', { message: error.message }); }
});

router.post('/:id/confirmar', requireScope('confirm:pedidos'), async (req, res) => {
  const key = req.header('Idempotency-Key');
  const invalidKey = validateIdempotencyKey(key);
  if (invalidKey) return sendError(res, 400, invalidKey.error, invalidKey.code, false, 'Enviar una clave válida y estable por operación', invalidKey.details);
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) return sendError(res, 400, 'ID de pedido inválido', 'ORDER_ID_INVALID', false, 'Corregir el ID del pedido');

  try {
    const keyOwner = await Pedido.findOne({ confirmacionIdempotencyKey: key }).select('_id');
    if (keyOwner && String(keyOwner._id) !== req.params.id) {
      return sendError(res, 409, 'La clave ya fue usada para otro pedido', 'IDEMPOTENCY_KEY_REUSED', false, 'Generar una nueva clave para esta operación');
    }

    const pedido = await Pedido.findById(req.params.id);
    if (!pedido) return sendError(res, 404, 'Pedido no encontrado', 'ORDER_NOT_FOUND', false, 'Verificar el ID del pedido');
    if (pedido.estado === 'confirmado' && pedido.confirmacionIdempotencyKey === key && pedido.confirmacionEvento) {
      res.set('Idempotency-Replayed', 'true');
      return res.status(200).json({ pedido, evento: pedido.confirmacionEvento, idempotencia: { key, replayed: true } });
    }
    if (pedido.estado !== 'pendiente') {
      return sendError(res, 409, 'El pedido ya fue confirmado con otra clave', 'IDEMPOTENCY_KEY_MISMATCH', false, 'Consultar el pedido sin repetir la confirmación');
    }

    for (const item of pedido.items) {
      const producto = await Producto.findById(item.productoId);
      if (!producto || !producto.activo || producto.stock < item.cantidad) {
        return sendError(res, 409, `No hay stock suficiente para ${item.nombre}`, 'INSUFFICIENT_STOCK', false, 'Revisar el pedido o reponer stock');
      }
    }
    for (const item of pedido.items) await Producto.findByIdAndUpdate(item.productoId, { $inc: { stock: -item.cantidad } });

    pedido.estado = 'confirmado';
    pedido.confirmadoEn = new Date();
    pedido.confirmacionIdempotencyKey = key;
    pedido.notificacionEstado = 'pendiente';
    pedido.confirmacionEvento = {
      eventId: crypto.randomUUID(), type: 'pedido.confirmado', version: 1,
      occurredAt: pedido.confirmadoEn.toISOString(), data: { pedidoId: pedido.id }
    };
    await pedido.save();

    try {
      await publishPedidoConfirmado(pedido.confirmacionEvento.toObject());
      res.set('Idempotency-Replayed', 'false');
      return res.status(200).json({ pedido, evento: pedido.confirmacionEvento, idempotencia: { key, replayed: false } });
    } catch (error) {
      console.error('Pedido confirmado; publicación RabbitMQ fallida:', error.message);
      return sendError(res, 503, 'El pedido quedó confirmado, pero no se pudo publicar el evento', 'EVENT_PUBLISH_FAILED', true, 'Consultar el pedido antes de decidir un reintento', { pedidoId: pedido.id, eventId: pedido.confirmacionEvento.eventId });
    }
  } catch (error) {
    if (error && error.code === 11000) return sendError(res, 409, 'La clave ya fue usada para otro pedido', 'IDEMPOTENCY_KEY_REUSED', false, 'Generar una nueva clave para esta operación');
    console.error('Error al confirmar pedido:', error.message);
    return sendError(res, 500, 'Error al confirmar pedido', 'ORDER_CONFIRMATION_FAILED', true, 'Reintentar con la misma Idempotency-Key');
  }
});

module.exports = router;
```

## src/routes/productos.js

```javascript
const express = require('express');
const Producto = require('../models/Producto');
const { requireApiKey } = require('../middleware/apiKey');
const { sendError } = require('../lib/errors');
const router = express.Router();

router.get('/', async (req, res) => {
  try { res.json(await Producto.find().sort({ createdAt: -1 })); }
  catch { sendError(res, 500, 'Error al consultar productos', 'PRODUCTS_QUERY_FAILED', true, 'Reintentar más tarde'); }
});

router.post('/', requireApiKey, async (req, res) => {
  try {
    if (!req.body.nombre || !req.body.categoria) return sendError(res, 400, 'Faltan datos obligatorios', 'PRODUCT_DATA_INVALID', false, 'Completar nombre y categoria');
    res.status(201).json(await Producto.create({
      nombre: req.body.nombre, precio: req.body.precio, categoria: req.body.categoria,
      stock: req.body.stock, activo: req.body.activo ?? true
    }));
  } catch (error) { sendError(res, 400, 'Producto inválido', 'PRODUCT_DATA_INVALID', false, 'Corregir los datos enviados', { message: error.message }); }
});

module.exports = router;
```

## src/telemetry.js

```javascript
// Precargar antes de app/worker: node --require ./src/telemetry.js ...
require('dotenv').config();
const { NodeSDK } = require('@opentelemetry/sdk-node');
const { resourceFromAttributes } = require('@opentelemetry/resources');
const { BatchLogRecordProcessor } = require('@opentelemetry/sdk-logs');
const { PeriodicExportingMetricReader, AggregationType } = require('@opentelemetry/sdk-metrics');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
const { OTLPLogExporter } = require('@opentelemetry/exporter-logs-otlp-http');
const { OTLPMetricExporter } = require('@opentelemetry/exporter-metrics-otlp-http');
const endpoint = process.env.OTEL_EXPORTER_OTLP_ENDPOINT || 'http://lgtm:4318';
const sdk = new NodeSDK({
  resource: resourceFromAttributes({
    'service.name': process.env.OTEL_SERVICE_NAME || 'pedidos-api',
    'service.namespace': 'iaew', 'service.version': '1.0.0',
    'deployment.environment.name': 'laboratorio'
  }),
  views: ['iaew_worker_duration', 'iaew_http_duration'].map(instrumentName => ({
    instrumentName, aggregation: { type: AggregationType.EXPLICIT_BUCKET_HISTOGRAM,
      options: { boundaries: [0.01, 0.05, 0.1, 0.3, 0.5, 1, 2, 3, 5, 10], recordMinMax: true } }
  })),
  traceExporter: new OTLPTraceExporter({ url: `${endpoint}/v1/traces` }),
  logRecordProcessors: [new BatchLogRecordProcessor({ exporter: new OTLPLogExporter({ url: `${endpoint}/v1/logs` }), scheduledDelayMillis: 1000 })],
  metricReaders: [new PeriodicExportingMetricReader({
    exporter: new OTLPMetricExporter({ url: `${endpoint}/v1/metrics` }), exportIntervalMillis: 5000
  })]
});
sdk.start();
process.once('SIGTERM', async () => { await sdk.shutdown(); process.exit(0); });
module.exports = sdk;
```

## src/worker.js

```javascript
require('dotenv').config();
const mongoose = require('mongoose');
const { connectDb } = require('./db');
const Pedido = require('./models/Pedido');
const EventoProcesado = require('./models/EventoProcesado');
const { retryConfig, integerFromEnv } = require('./lib/config');
const { log, withSpan, messageContext, attempts, workerDuration, SpanKind, SpanStatusCode } = require('./lib/observability');
const { getChannel, QUEUE, publishRetry, publishDlq, closeRabbit } = require('./lib/rabbit');

class PermanentMessageError extends Error {}
class TransientMessageError extends Error {}

function parsePedidoConfirmado(content) {
  let event;
  try { event = JSON.parse(content.toString()); }
  catch { throw new PermanentMessageError('JSON inválido'); }
  if (!event || event.type !== 'pedido.confirmado' || event.version !== 1 ||
      typeof event.eventId !== 'string' || event.eventId.length === 0 ||
      !event.occurredAt || !event.data || typeof event.data.pedidoId !== 'string' ||
      !mongoose.Types.ObjectId.isValid(event.data.pedidoId)) {
    throw new PermanentMessageError('Contrato de pedido.confirmado inválido');
  }
  return event;
}

function retryCountOf(message) {
  const value = Number(message.properties.headers?.['x-retry-count'] ?? 0);
  return Number.isInteger(value) && value >= 0 ? value : 0;
}

async function applyBusinessEffect(event, retryCount, dependencies = {}) {
  const config = dependencies.config || retryConfig();
  const PedidoModel = dependencies.PedidoModel || Pedido;
  const EventoModel = dependencies.EventoModel || EventoProcesado;
  const delay = integerFromEnv('WORKER_DELAY_MS', 0, { max: 10000 });
  if (delay) await withSpan('dependencia.simulada', { 'demo.delay_ms': delay }, () => new Promise(resolve => setTimeout(resolve, delay)));
  if (retryCount < config.simulatedFailures) throw new TransientMessageError(`Falla transitoria simulada ${retryCount + 1}/${config.simulatedFailures}`);

  if (await EventoModel.exists({ eventId: event.eventId })) return { duplicate: true };
  const pedido = await PedidoModel.findById(event.data.pedidoId);
  if (!pedido) throw new PermanentMessageError('Pedido inexistente');

  try {
    await EventoModel.create({ eventId: event.eventId, type: event.type, pedidoId: pedido._id });
  } catch (error) {
    if (error && error.code === 11000) return { duplicate: true };
    throw error;
  }
  try {
    pedido.notificacionEstado = 'procesada';
    pedido.notificadoEn = new Date();
    await pedido.save();
  } catch (error) {
    await EventoModel.deleteOne({ eventId: event.eventId });
    throw new TransientMessageError(`MongoDB no pudo persistir el efecto: ${error.message}`);
  }
  return { duplicate: false, pedidoId: String(pedido._id) };
}

async function processMessage(message, activeChannel, dependencies = {}) {
  const count = retryCountOf(message);
  const config = dependencies.config || retryConfig();
  const retryPublisher = dependencies.publishRetry || publishRetry;
  const dlqPublisher = dependencies.publishDlq || publishDlq;
  try {
    const event = parsePedidoConfirmado(message.content);
    const result = await applyBusinessEffect(event, count, { ...dependencies, config });
    log(result.duplicate ? 'pedido.duplicate' : 'pedido.processed', { pedido_id: event.data.pedidoId, event_id: event.eventId, attempt: count });
    activeChannel.ack(message);
    return result.duplicate ? 'duplicate' : 'processed';
  } catch (error) {
    const activeSpan = require('@opentelemetry/api').trace.getSpan(require('@opentelemetry/api').context.active());
    activeSpan?.recordException(error); activeSpan?.setStatus({ code: SpanStatusCode.ERROR, message: error.message });
    log('pedido.failed', { error_type: error.constructor.name, error_message: error.message, attempt: count }, 'error');
    if (!(error instanceof PermanentMessageError) && count < config.maxRetries) {
      await retryPublisher(activeChannel, message, count + 1, error.message);
      activeChannel.ack(message);
      log('pedido.retry', { attempt: count + 1, error_message: error.message }, 'warn');
      return 'retry';
    }
    const reason = error instanceof PermanentMessageError
      ? `permanente: ${error.message}`
      : `reintentos agotados (${count}/${config.maxRetries}): ${error.message}`;
    await dlqPublisher(activeChannel, message, reason, count);
    activeChannel.ack(message);
    log('pedido.dlq', { attempt: count, reason }, 'error');
    return 'dlq';
  }
}

async function observedMessage(message, channel) {
  const parent = messageContext(message.properties.headers);
  return withSpan('pedido.consumir', { 'messaging.system': 'rabbitmq', 'messaging.destination.name': QUEUE, 'event.id': message.properties.messageId || '', 'retry.count': retryCountOf(message) }, async () => {
    const start = performance.now();
    let result = 'unhandled';
    try { result = await processMessage(message, channel); return result; }
    finally {
      const attrs = { result };
      attempts.add(1, attrs); workerDuration.record((performance.now() - start) / 1000, attrs);
    }
  }, parent, SpanKind.CONSUMER);
}

async function startWorker() {
  await connectDb();
  const channel = await getChannel();
  await channel.prefetch(1);
  await channel.consume(QUEUE, (message) => {
    if (message) observedMessage(message, channel).catch((error) => {
      console.error('No se pudo enrutar el mensaje; queda sin ack para recuperación:', error.message);
    });
  }, { noAck: false });
  console.log(`Worker escuchando ${QUEUE}; MAX_RETRIES=${retryConfig().maxRetries}`);
}

if (require.main === module) {
  startWorker().catch((error) => { console.error('No se pudo iniciar worker:', error.message); process.exit(1); });
  process.on('SIGINT', async () => { await closeRabbit(); process.exit(0); });
}

module.exports = {
  PermanentMessageError, TransientMessageError, parsePedidoConfirmado,
  retryCountOf, applyBusinessEffect, processMessage
};
```

## scripts/scenario.js

```javascript
require('dotenv').config();
const crypto = require('node:crypto');
const { writeFileSync, mkdirSync } = require('node:fs');
const base = process.env.API_URL || 'http://api:3000';
const token = process.env.ACCESS_TOKEN;
if (!token) throw new Error('Falta ACCESS_TOKEN: usar un access token real de Auth0.');
const scenario = process.argv[2] || 'normal';
const count = Number(process.argv[3] || (scenario === 'lento' ? 12 : 1));
if (!['normal','lento','rechazo','repeticion'].includes(scenario) || !Number.isInteger(count) || count < 1 || count > 30) throw new Error('Usar normal, lento, rechazo o repeticion y cantidad 1..30.');
async function request(path, body, extra = {}) {
  const r = await fetch(base + path, { method: 'POST', headers: {
    'Content-Type': 'application/json', Authorization: `Bearer ${token}`,
    ...extra }, body: JSON.stringify(body) });
  const data = await r.json();
  return { status: r.status, data, trace_id: r.headers.get('x-trace-id'), correlation_id: r.headers.get('x-correlation-id'), replayed: r.headers.get('idempotency-replayed') };
}
(async () => {
  const product = await request('/productos', { nombre: 'Plato laboratorio', categoria: 'Cocina', precio: 100, stock: 100 }, { 'x-api-key': process.env.INTERNAL_API_KEY || 'iaew-clase07-local' });
  if (product.status !== 201) throw new Error(`No se creó producto: ${JSON.stringify(product.data)}`);
  const results = [];
  for (let i = 0; i < count; i++) {
    const order = await request('/pedidos', { cliente: { nombre: 'Estudiante demo', email: 'demo@example.test' }, items: [{ productoId: product.data._id, cantidad: 1 }] });
    if (order.status !== 201) throw new Error(`No se creó pedido: ${JSON.stringify(order.data)}`);
    const key = crypto.randomUUID();
    const url = `/pedidos/${order.data._id}/confirmar`;
    const result = await request(url, {}, scenario === 'rechazo' ? {} : { 'Idempotency-Key': key });
    const expected = scenario === 'rechazo' ? 400 : 200;
    if (result.status !== expected) throw new Error(`Confirmación esperaba ${expected}, recibió ${result.status}: ${JSON.stringify(result.data)}`);
    results.push({ pedido_id: order.data._id, ...result });
    if (scenario === 'repeticion') {
      const repeated = await request(url, {}, { 'Idempotency-Key': key });
      if (repeated.status !== 200 || repeated.replayed !== 'true') throw new Error('La repetición no devolvió un replay idempotente.');
      results.push({ pedido_id: order.data._id, ...repeated });
    }
    await new Promise(resolve => setTimeout(resolve, 250));
  }
  mkdirSync('/app/evidencias', { recursive: true });
  writeFileSync(`/app/evidencias/${scenario}.json`, JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results.map(({pedido_id,status,trace_id,correlation_id,replayed})=>({pedido_id,status,trace_id,correlation_id,replayed})),null,2));
})().catch(error => { console.error(error.message); process.exitCode = 1; });
```

## observabilidad/alerts.yaml

```yaml
apiVersion: 1
groups:
  - orgId: 1
    name: iaew-worker
    folder: IAEW
    interval: 10s
    rules:
      - uid: iaew-worker-lento
        title: Worker lento (promedio de intentos)
        condition: C
        for: 30s
        noDataState: NoData
        execErrState: Error
        annotations:
          summary: El promedio por intento supera 1 segundo durante 30 segundos.
          description: Revisar trazas del worker, sus logs y recursos. La ventana es de 2 minutos y la evaluación es cada 10 segundos.
          runbook_url: http://localhost:3007/d/iaew-clase07
        labels: {service: pedidos-worker, severity: warning}
        data:
          - refId: A
            datasourceUid: prometheus
            relativeTimeRange: {from: 120, to: 0}
            model:
              datasource: {type: prometheus, uid: prometheus}
              expr: sum(rate(iaew_worker_duration_seconds_sum[2m])) / sum(rate(iaew_worker_duration_seconds_count[2m]))
              instant: true
              range: false
              refId: A
          - refId: C
            datasourceUid: __expr__
            relativeTimeRange: {from: 0, to: 0}
            model:
              datasource: {type: __expr__, uid: __expr__}
              type: threshold
              expression: A
              refId: C
              conditions:
                - evaluator: {type: gt, params: [1]}
                  operator: {type: and}
                  reducer: {type: last, params: []}
                  type: query
# Se observa el estado de la regla. No se provisionan contactos externos.
```

## observabilidad/cadvisor/Dockerfile

```dockerfile
FROM alpine:3.22.1
ARG TARGETARCH
ADD https://github.com/google/cadvisor/releases/download/v0.60.6/cadvisor-v0.60.6-linux-${TARGETARCH} /usr/bin/cadvisor
RUN case "$TARGETARCH" in \
      amd64) checksum=c381c2c911bc43d465d1e0eaff60f96d58c031c409bddf06da0316fdde8a9296 ;; \
      arm64) checksum=d788162d9deea8aa024fd79a0a685df90a987362d8f0e580f822474c1fbef7f9 ;; \
      *) exit 1 ;; \
    esac && echo "$checksum  /usr/bin/cadvisor" | sha256sum -c - && chmod +x /usr/bin/cadvisor
EXPOSE 8080
HEALTHCHECK --interval=5s --timeout=3s CMD wget -q -O /dev/null http://localhost:8080/healthz || exit 1
ENTRYPOINT ["/usr/bin/cadvisor"]
```

## observabilidad/dashboard-provider.yaml

```yaml
apiVersion: 1
providers:
  - name: IAEW
    type: file
    options: {path: /otel-lgtm/grafana/conf/provisioning/dashboards/custom}
```

## observabilidad/dashboard.json

```json
{
  "uid": "iaew-clase07",
  "title": "IAEW · pedidos y contenedores",
  "schemaVersion": 39,
  "version": 1,
  "refresh": "5s",
  "time": {
    "from": "now-15m",
    "to": "now"
  },
  "panels": [
    {
      "id": 1,
      "title": "Confirmaciones HTTP (acumulado)",
      "type": "timeseries",
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "gridPos": {
        "x": 0,
        "y": 0,
        "w": 12,
        "h": 8
      },
      "targets": [
        {
          "refId": "A",
          "expr": "sum by (result) (iaew_confirmations_total)",
          "legendFormat": "{{result}}{{compose_service}}"
        }
      ],
      "fieldConfig": {
        "defaults": {
          "unit": "short"
        },
        "overrides": []
      }
    },
    {
      "id": 2,
      "title": "Intentos del worker por resultado",
      "type": "timeseries",
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "gridPos": {
        "x": 12,
        "y": 0,
        "w": 12,
        "h": 8
      },
      "targets": [
        {
          "refId": "A",
          "expr": "sum by (result) (iaew_worker_attempts_total)",
          "legendFormat": "{{result}}{{compose_service}}"
        }
      ],
      "fieldConfig": {
        "defaults": {
          "unit": "short"
        },
        "overrides": []
      }
    },
    {
      "id": 3,
      "title": "Duración promedio por intento",
      "type": "timeseries",
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "gridPos": {
        "x": 0,
        "y": 8,
        "w": 12,
        "h": 8
      },
      "targets": [
        {
          "refId": "A",
          "expr": "sum(rate(iaew_worker_duration_seconds_sum[2m])) / sum(rate(iaew_worker_duration_seconds_count[2m]))",
          "legendFormat": "{{result}}{{compose_service}}"
        }
      ],
      "fieldConfig": {
        "defaults": {
          "unit": "s"
        },
        "overrides": []
      }
    },
    {
      "id": 4,
      "title": "p95 por intento (estimación)",
      "type": "timeseries",
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "gridPos": {
        "x": 12,
        "y": 8,
        "w": 12,
        "h": 8
      },
      "targets": [
        {
          "refId": "A",
          "expr": "histogram_quantile(0.95, sum by (le) (rate(iaew_worker_duration_seconds_bucket[2m])))",
          "legendFormat": "{{result}}{{compose_service}}"
        }
      ],
      "fieldConfig": {
        "defaults": {
          "unit": "s"
        },
        "overrides": []
      }
    },
    {
      "id": 5,
      "title": "CPU por servicio Compose",
      "type": "timeseries",
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "gridPos": {
        "x": 0,
        "y": 16,
        "w": 12,
        "h": 8
      },
      "targets": [
        {
          "refId": "A",
          "expr": "sum by (compose_service) (rate(container_cpu_usage_seconds_total{compose_service=~\"api|worker|mongodb|rabbitmq\"}[1m]) and on(id, instance) (container_last_seen > time() - 15))",
          "legendFormat": "{{result}}{{compose_service}}"
        }
      ],
      "fieldConfig": {
        "defaults": {
          "unit": "cores"
        },
        "overrides": []
      }
    },
    {
      "id": 6,
      "title": "Memoria working set por servicio",
      "type": "timeseries",
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "gridPos": {
        "x": 12,
        "y": 16,
        "w": 12,
        "h": 8
      },
      "targets": [
        {
          "refId": "A",
          "expr": "sum by (compose_service) (container_memory_working_set_bytes{compose_service=~\"api|worker|mongodb|rabbitmq\"} and on(id, instance) (container_last_seen > time() - 15))",
          "legendFormat": "{{result}}{{compose_service}}"
        }
      ],
      "fieldConfig": {
        "defaults": {
          "unit": "bytes"
        },
        "overrides": []
      }
    },
    {
      "id": 7,
      "title": "Scrape de cAdvisor: 1 = accesible",
      "type": "timeseries",
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "gridPos": {
        "x": 0,
        "y": 24,
        "w": 12,
        "h": 8
      },
      "targets": [
        {
          "refId": "A",
          "expr": "up{job=\"cadvisor\"}",
          "legendFormat": "{{result}}{{compose_service}}"
        }
      ],
      "fieldConfig": {
        "defaults": {
          "unit": "short"
        },
        "overrides": []
      }
    },
    {
      "id": 8,
      "title": "Tasa de errores técnicos HTTP",
      "type": "timeseries",
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "gridPos": {
        "x": 12,
        "y": 24,
        "w": 12,
        "h": 8
      },
      "targets": [
        {
          "refId": "A",
          "expr": "sum(rate(iaew_http_requests_total{status=~\"5..\"}[2m])) / sum(rate(iaew_http_requests_total[2m]))",
          "legendFormat": "{{result}}{{compose_service}}"
        }
      ],
      "fieldConfig": {
        "defaults": {
          "unit": "percentunit"
        },
        "overrides": []
      }
    }
  ]
}
```

## observabilidad/datasources.yaml

```yaml
apiVersion: 1
datasources:
  - name: Prometheus
    type: prometheus
    uid: prometheus
    url: http://localhost:9090
    jsonData: {timeInterval: 5s}
  - name: Tempo
    type: tempo
    uid: tempo
    url: http://localhost:3200
    jsonData:
      tracesToLogsV2:
        datasourceUid: loki
        spanStartTimeShift: '-1m'
        spanEndTimeShift: '1m'
        customQuery: true
        tags: [{key: service.name, value: service_name}]
        query: '{$${__tags}} | trace_id = "$${__trace.traceId}"'
      nodeGraph: {enabled: true}
  - name: Loki
    type: loki
    uid: loki
    url: http://localhost:3100
    jsonData:
      derivedFields:
        - name: trace_id
          matcherType: label
          matcherRegex: trace_id
          url: '$${__value.raw}'
          datasourceUid: tempo
          urlDisplayLabel: Ver traza
```

## observabilidad/prometheus.yaml

```yaml
global:
  scrape_interval: 5s
  evaluation_interval: 5s
  scrape_native_histograms: true
otlp:
  keep_identifying_resource_attributes: true
  promote_resource_attributes: [service.name, service.namespace, service.instance.id]
storage:
  tsdb:
    out_of_order_time_window: 10m
scrape_configs:
  - job_name: cadvisor
    static_configs:
      - targets: [cadvisor:8080]
    metric_relabel_configs:
      - source_labels: [container_label_com_docker_compose_project]
        regex: iaew-clase07|iaew07-validacion
        action: keep
      - source_labels: [container_label_com_docker_compose_service]
        target_label: compose_service
```
