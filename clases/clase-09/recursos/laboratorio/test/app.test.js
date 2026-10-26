const test = require("node:test");
const assert = require("node:assert");
const { createServer } = require("../src/app");

test("responde health, version y pedidos sin estado propio", async (t) => {
  const server = createServer();
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  t.after(() => { server.closeAllConnections(); server.close(); });
  const base = `http://127.0.0.1:${server.address().port}`;

  const health = await fetch(`${base}/health`);
  assert.strictEqual(health.status, 200);
  assert.deepStrictEqual(await health.json(), { status: "ok" });

  const version = await (await fetch(`${base}/version`)).json();
  assert.ok(version.version);

  const pedido = await fetch(`${base}/pedidos/P-1001`);
  assert.strictEqual(pedido.status, 200);
  assert.strictEqual((await fetch(`${base}/pedidos/P-9999`)).status, 404);
  assert.strictEqual((await fetch(`${base}/pedidos`, { method: "POST" })).status, 405);
});
