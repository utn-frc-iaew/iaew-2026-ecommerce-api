const http = require("node:http");

const VERSION = process.env.APP_VERSION || "1.0.0";

function send(res, status, body) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(body));
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 10_000) { reject(new Error("cuerpo_demasiado_grande")); req.destroy(); }
    });
    req.on("end", () => {
      try { resolve(raw ? JSON.parse(raw) : {}); } catch { reject(new Error("json_invalido")); }
    });
  });
}

// `repo` encapsula la base de datos: listar, buscar, crear y comprobar conexión.
function createServer(repo) {
  return http.createServer(async (req, res) => {
    const { pathname } = new URL(req.url, "http://localhost");
    try {
      if (pathname === "/health" && req.method === "GET") {
        const db = await repo.ping().then(() => "up", () => "down");
        return send(res, db === "up" ? 200 : 503, { status: db === "up" ? "ok" : "sin_base", db });
      }
      if (pathname === "/version" && req.method === "GET") {
        return send(res, 200, { version: VERSION, instancia: process.env.HOSTNAME || "local" });
      }
      if (pathname === "/pedidos" && req.method === "GET") return send(res, 200, await repo.listar());
      if (pathname === "/pedidos" && req.method === "POST") {
        const body = await readJson(req).catch((e) => e);
        if (body instanceof Error) return send(res, 400, { error: body.message });
        if (typeof body.total !== "number" || !(body.total > 0)) return send(res, 400, { error: "total_invalido" });
        return send(res, 201, await repo.crear({ total: body.total }));
      }
      const match = pathname.match(/^\/pedidos\/([A-Za-z0-9-]+)$/);
      if (match && req.method === "GET") {
        const pedido = await repo.buscar(match[1]);
        return pedido ? send(res, 200, pedido) : send(res, 404, { error: "pedido_no_encontrado" });
      }
      if (pathname === "/pedidos" || match || pathname === "/health" || pathname === "/version") {
        return send(res, 405, { error: "metodo_no_permitido" });
      }
      return send(res, 404, { error: "ruta_no_encontrada" });
    } catch (error) {
      console.error(JSON.stringify({ msg: "error_interno", detalle: error.message }));
      return send(res, 503, { error: "base_no_disponible" });
    }
  });
}

if (require.main === module) {
  const { createMongoRepo } = require("./repo-mongo");
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/iaew_clase09";
  const port = Number(process.env.PORT || 8080);
  const repo = createMongoRepo(uri);
  createServer(repo).listen(port, "0.0.0.0", () => {
    console.log(JSON.stringify({ msg: "api_lista", port, version: VERSION }));
  });
  repo.conectar();
}

module.exports = { createServer };
