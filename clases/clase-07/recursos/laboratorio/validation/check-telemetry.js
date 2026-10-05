const fs = require('node:fs');
const result = JSON.parse(fs.readFileSync('/app/evidencias/normal.json'))[0];
const headers = { Authorization: 'Basic ' + Buffer.from('admin:admin').toString('base64') };
const base = 'http://lgtm:3000';
async function get(path) {
  const r = await fetch(base + path, { headers });
  if (!r.ok) throw new Error(`${r.status}: ${await r.text()}`);
  return r.json();
}
(async () => {
  const trace = await get(`/api/datasources/proxy/uid/tempo/api/traces/${result.trace_id}`);
  const batches = trace.batches || trace.resourceSpans || [];
  const services = batches.map(b => b.resource.attributes.find(a => a.key === 'service.name')?.value?.stringValue);
  if (!services.includes('pedidos-api') || !services.includes('pedidos-worker')) throw new Error('La traza no reúne API y worker: '+services.join(','));
  const query = `{service_name="pedidos-worker"} | trace_id = "${result.trace_id}"`;
  const logs = await get('/api/datasources/proxy/uid/loki/loki/api/v1/query_range?query='+encodeURIComponent(query)+'&limit=100');
  if (!logs.data.result.length) throw new Error('No hay logs del worker para la traza');
  const metricNames = ['iaew_confirmations_total','iaew_worker_attempts_total','iaew_worker_duration_seconds_count'];
  for (const name of metricNames) {
    const data = await get('/api/datasources/proxy/uid/prometheus/api/v1/query?query='+name);
    if (!data.data.result.length) throw new Error('Métrica ausente: '+name);
  }
  const resources = await get('/api/datasources/proxy/uid/prometheus/api/v1/query?query='+encodeURIComponent('container_memory_working_set_bytes{compose_service=~"api|worker"}'));
  if (!resources.data.result.length) throw new Error('Sin recursos de API/worker en cAdvisor');
  console.log(JSON.stringify({ trace_id: result.trace_id, services, logStreams: logs.data.result.length, metrics: metricNames, containers: resources.data.result.map(x=>x.metric.compose_service) },null,2));
})().catch(error => { console.error(error.message); process.exitCode=1; });
