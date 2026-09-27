# Solución docente — Clase 05: resiliencia de integraciones

Esta solución extiende el e-commerce de la Clase 04 con idempotencia HTTP, retry limitado con TTL, DLQ y deduplicación de eventos. Todo el código ejecutable está en `src/`.

## Qué demuestra

- `POST /pedidos/:id/confirmar` exige `Idempotency-Key` (`8..128`, caracteres `[A-Za-z0-9._:-]`).
- La primera confirmación responde `200`, `Idempotency-Replayed: false` y guarda el evento.
- Repetir el mismo pedido y clave responde `200`, `Idempotency-Replayed: true`, devuelve el mismo `eventId` y no vuelve a descontar stock ni publicar.
- Otra clave para un pedido confirmado produce `409 IDEMPOTENCY_KEY_MISMATCH`; reutilizar la clave en otro pedido produce `409 IDEMPOTENCY_KEY_REUSED`.
- El worker reenvía fallas transitorias a una cola retry con TTL y `x-retry-count`; luego de `MAX_RETRIES=3`, o ante un error permanente, publica en DLQ y hace `ack` del original.
- `EventoProcesado.eventId` es único: una segunda entrega queda reconocida sin repetir el efecto.
- Todos los errores HTTP usan `{ error, code, details?, retryable, action }`.

## Arranque reproducible

Requiere Node.js 20+, Docker y Docker Compose. No coloque credenciales reales en archivos versionados.

```bash
npm ci
cp .env.example .env
docker compose up -d
docker compose ps
npm run dev
```

En otra terminal:

```bash
npm run worker
```

RabbitMQ Management queda en `http://localhost:15672` con las credenciales locales del `.env`; MongoDB queda en `mongodb://127.0.0.1:27017/iaew_ecommerce`. Los datos son efímeros (`tmpfs`) para este laboratorio.

El tenant Auth0 debe tener la audience `https://iaew-pedidos-api` y los scopes `read:pedidos`, `write:pedidos` y `confirm:pedidos`. Las pruebas unitarias no requieren credenciales ni servicios externos.

## Prueba HTTP de idempotencia

Primero cree un producto con `POST /productos` y `x-api-key`, y un pedido con `POST /pedidos` y un token con `write:pedidos`. Luego conserve ID, stock inicial y un token con `confirm:pedidos`:

```bash
export API_URL=http://localhost:3000
export PEDIDO_ID=REEMPLAZAR
export ACCESS_TOKEN=REEMPLAZAR
export IDEMPOTENCY_KEY=confirmacion:pedido-001

curl -i -X POST "$API_URL/pedidos/$PEDIDO_ID/confirmar" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Idempotency-Key: $IDEMPOTENCY_KEY"

curl -i -X POST "$API_URL/pedidos/$PEDIDO_ID/confirmar" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Idempotency-Key: $IDEMPOTENCY_KEY"
```

Compruebe en ambas respuestas el mismo `evento.eventId`, headers `false` y `true`, y que el stock bajó una sola vez. Una clave distinta sobre ese pedido debe devolver `409 IDEMPOTENCY_KEY_MISMATCH`.

## Retry, DLQ y duplicado

1. Defina `SIMULATE_TRANSIENT_FAILURES=2`, reinicie el worker y confirme un pedido nuevo. En logs deben verse retry `1/3`, retry `2/3` y finalmente procesamiento.
2. Defina `SIMULATE_TRANSIENT_FAILURES=4`. El mensaje llega a `notificaciones.pedido-confirmado.dlq` después de `x-retry-count=3`.
3. Para un poison message, publique JSON inválido desde RabbitMQ Management hacia `pedidos.exchange`, routing key `pedido.confirmado`: irá directamente a DLQ.
4. Para probar deduplicación, use RabbitMQ Management y vuelva a publicar el JSON válido conservando el mismo `eventId`: el log muestra `Duplicado reconocido`.

La consola permite observar las colas principal, retry y DLQ. `RETRY_DELAY_MS` se aplica al declarar la cola; si lo cambia, elimine/recree el entorno efímero con `docker compose down` y `docker compose up -d`.

## Verificación automática

```bash
npm test
npm run check
docker compose config --quiet
```

Las pruebas deterministas cubren validación de clave, contrato del evento, incremento de retry, agotamiento hacia DLQ y deduplicación. No sustituyen el recorrido integrado con MongoDB, RabbitMQ ni el tenant Auth0.

## Límites deliberados

La idempotencia embebida en `Pedido` reduce duplicados secuenciales, pero no resuelve por completo carreras concurrentes. Tampoco existe atomicidad entre MongoDB y RabbitMQ: si la persistencia termina y la publicación falla, la API responde `503 EVENT_PUBLISH_FAILED`; un replay devuelve el resultado persistido sin publicar otra vez. Outbox, backoff exponencial, circuit breaker y transacciones distribuidas quedan como conceptos, no como promesas de esta solución.

