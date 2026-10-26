const http = require("node:http");

const VERSION = process.env.APP_VERSION || "1.0.0";
const PEDIDOS = [
  { id: "P-1001", estado: "CONFIRMADO", total: 15200 },
  { id: "P-1002", estado: "PENDIENTE", total: 8400 }
];

function send(res, status, body) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(body));
}

function createServer() {
  return http.createServer((req, res) => {
    const { pathname } = new URL(req.url, "http://localhost");

    if (req.method !== "GET") return send(res, 405, { error: "metodo_no_permitido" });
    if (pathname === "/health") return send(res, 200, { status: "ok" });
    if (pathname === "/version") return send(res, 200, { version: VERSION, instancia: process.env.HOSTNAME || "local" });
    if (pathname === "/pedidos") return send(res, 200, PEDIDOS);

    const match = pathname.match(/^\/pedidos\/([A-Za-z0-9-]+)$/);
    if (match) {
      const pedido = PEDIDOS.find((p) => p.id === match[1]);
      return pedido ? send(res, 200, pedido) : send(res, 404, { error: "pedido_no_encontrado" });
    }
    return send(res, 404, { error: "ruta_no_encontrada" });
  });
}

if (require.main === module) {
  const port = Number(process.env.PORT || 8080);
  createServer().listen(port, "0.0.0.0", () => console.log(JSON.stringify({ msg: "api_lista", port, version: VERSION })));
}

module.exports = { createServer };
