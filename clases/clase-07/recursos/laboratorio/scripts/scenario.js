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
