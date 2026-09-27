const test = require('node:test');
const assert = require('node:assert/strict');
const { validateIdempotencyKey } = require('../src/lib/idempotency');
const { integerFromEnv } = require('../src/lib/config');
const { parsePedidoConfirmado, processMessage } = require('../src/worker');

const pedidoId = '507f1f77bcf86cd799439011';
const event = { eventId: 'evt-001', type: 'pedido.confirmado', version: 1, occurredAt: '2026-09-12T12:00:00.000Z', data: { pedidoId } };
const message = (body = event, retryCount = 0) => ({
  content: Buffer.from(typeof body === 'string' ? body : JSON.stringify(body)),
  properties: { headers: { 'x-retry-count': retryCount } }
});

test('Idempotency-Key es obligatoria y valida el contrato literal', () => {
  assert.equal(validateIdempotencyKey(undefined).code, 'IDEMPOTENCY_KEY_REQUIRED');
  assert.equal(validateIdempotencyKey('corta').code, 'IDEMPOTENCY_KEY_INVALID');
  assert.equal(validateIdempotencyKey('pedido:001.reintento-1'), null);
});

test('configuración rechaza enteros fuera de rango', () => {
  process.env.TEST_INTEGER = '21';
  assert.throws(() => integerFromEnv('TEST_INTEGER', 3, { min: 0, max: 20 }), /debe ser un entero/);
  delete process.env.TEST_INTEGER;
});

test('evento inválido va a DLQ y se confirma el original', async () => {
  const calls = [];
  const channel = { ack: () => calls.push('ack') };
  const result = await processMessage(message('{'), channel, {
    config: { maxRetries: 3, simulatedFailures: 0 },
    publishDlq: async (ch, msg, reason) => calls.push(`dlq:${reason}`)
  });
  assert.equal(result, 'dlq');
  assert.match(calls[0], /^dlq:permanente: JSON inválido/);
  assert.equal(calls[1], 'ack');
});

test('falla transitoria republica con contador incrementado', async () => {
  const calls = [];
  const channel = { ack: () => calls.push('ack') };
  const result = await processMessage(message(event, 0), channel, {
    config: { maxRetries: 3, simulatedFailures: 1 },
    publishRetry: async (ch, msg, count) => calls.push(`retry:${count}`)
  });
  assert.equal(result, 'retry');
  assert.deepEqual(calls, ['retry:1', 'ack']);
});

test('al alcanzar MAX_RETRIES el mensaje va a DLQ', async () => {
  const calls = [];
  const channel = { ack: () => calls.push('ack') };
  const result = await processMessage(message(event, 3), channel, {
    config: { maxRetries: 3, simulatedFailures: 4 },
    publishDlq: async (ch, msg, reason, count) => calls.push(`dlq:${count}:${reason}`)
  });
  assert.equal(result, 'dlq');
  assert.match(calls[0], /^dlq:3:reintentos agotados/);
  assert.equal(calls[1], 'ack');
});

test('eventId ya registrado se reconoce sin repetir el efecto', async () => {
  const calls = [];
  const channel = { ack: () => calls.push('ack') };
  const result = await processMessage(message(), channel, {
    config: { maxRetries: 3, simulatedFailures: 0 },
    EventoModel: { exists: async () => true }
  });
  assert.equal(result, 'duplicate');
  assert.deepEqual(calls, ['ack']);
});

test('parsePedidoConfirmado acepta el contrato esperado', () => {
  assert.deepEqual(parsePedidoConfirmado(message().content), event);
});
