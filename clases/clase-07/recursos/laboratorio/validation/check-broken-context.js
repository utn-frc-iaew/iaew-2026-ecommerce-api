const fs = require('node:fs');
const row = JSON.parse(fs.readFileSync('/app/evidencias/normal.json'))[0];
const base = 'http://lgtm:3000';
const headers = { Authorization: 'Basic '+Buffer.from('admin:admin').toString('base64') };
async function get(path) { const r=await fetch(base+path,{headers});if(!r.ok)throw new Error(`${r.status}: ${await r.text()}`);return r.json(); }
(async()=>{
  const data=await get(`/api/datasources/proxy/uid/tempo/api/traces/${row.trace_id}`);
  const services=(data.batches||data.resourceSpans||[]).map(b=>b.resource.attributes.find(a=>a.key==='service.name')?.value?.stringValue);
  if(services.includes('pedidos-worker'))throw new Error('La traza HTTP todavía incluye el worker');
  const query=`{service_name="pedidos-worker"} | json | correlation_id = "${row.correlation_id}"`;
  const logs=await get('/api/datasources/proxy/uid/loki/loki/api/v1/query_range?limit=100&query='+encodeURIComponent(query));
  const records=logs.data.result.flatMap(r=>r.values.map(v=>JSON.parse(v[1])));
  if(!records.length||records.some(r=>r.trace_id===row.trace_id))throw new Error('No se verificó la separación de trazas');
  console.log(JSON.stringify({api_trace:row.trace_id,worker_traces:[...new Set(records.map(r=>r.trace_id))],correlation_id:row.correlation_id},null,2));
})().catch(error=>{console.error(error.message);process.exitCode=1;});
