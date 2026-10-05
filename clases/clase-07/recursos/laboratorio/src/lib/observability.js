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
