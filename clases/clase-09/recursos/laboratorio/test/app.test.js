const test = require("node:test");
const assert = require("node:assert");
const { createServer } = require("../src/app");

// Repositorio en memoria: prueba la API sin MongoDB; la base real se prueba con Compose.
function repoEnMemoria({ caida = false } = {}) {
  const datos = [
    { id: "P-1001", estado: "CONFIRMADO", total: 15200 },
    { id: "P-1002", estado: "PENDIENTE", total: 8400 }
  ];
  return {
    ping: async () => { if (caida) throw new Error("sin_conexion"); },
    listar: async () => { if (caida) throw new Error("sin_conexion"); return datos; },
    buscar: async (id) => datos.find((p) => p.id === id) || null,
    crear: async ({ total }) => { const p = { id: `P-${2000 + datos.length}`, estado: "PENDIENTE", total }; datos.push(p); return p; }
  };
}

async function iniciar(t, repo) {
  const server = createServer(repo);
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  t.after(() => { server.closeAllConnections(); server.close(); });
  return `http://127.0.0.1:${server.address().port}`;
}

const post = (base, body) => fetch(`${base}/pedidos`, {
  method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body)
});

test("responde health, version y consulta de pedidos", async (t) => {
  const base = await iniciar(t, repoEnMemoria());
  const health = await fetch(`${base}/health`);
  assert.strictEqual(health.status, 200);
  assert.deepStrictEqual(await health.json(), { status: "ok", db: "up" });
  assert.ok((await (await fetch(`${base}/version`)).json()).version);
  assert.strictEqual((await (await fetch(`${base}/pedidos`)).json()).length, 2);
  assert.strictEqual((await fetch(`${base}/pedidos/P-1001`)).status, 200);
  assert.strictEqual((await fetch(`${base}/pedidos/P-9999`)).status, 404);
});

test("crea un pedido con POST y luego lo consulta", async (t) => {
  const base = await iniciar(t, repoEnMemoria());
  const creado = await post(base, { total: 999 });
  assert.strictEqual(creado.status, 201);
  const pedido = await creado.json();
  assert.strictEqual(pedido.estado, "PENDIENTE");
  assert.strictEqual((await fetch(`${base}/pedidos/${pedido.id}`)).status, 200);
});

test("valida el cuerpo del POST y los métodos", async (t) => {
  const base = await iniciar(t, repoEnMemoria());
  assert.strictEqual((await post(base, { total: -5 })).status, 400);
  assert.strictEqual((await post(base, {})).status, 400);
  const invalido = await fetch(`${base}/pedidos`, { method: "POST", body: "{no es json" });
  assert.strictEqual(invalido.status, 400);
  assert.strictEqual((await fetch(`${base}/pedidos/P-1001`, { method: "DELETE" })).status, 405);
  assert.strictEqual((await fetch(`${base}/otra-ruta`)).status, 404);
});

test("sin base: /health y /pedidos responden 503", async (t) => {
  const base = await iniciar(t, repoEnMemoria({ caida: true }));
  const health = await fetch(`${base}/health`);
  assert.strictEqual(health.status, 503);
  assert.deepStrictEqual(await health.json(), { status: "sin_base", db: "down" });
  assert.strictEqual((await fetch(`${base}/pedidos`)).status, 503);
});
