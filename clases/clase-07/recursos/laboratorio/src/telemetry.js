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
