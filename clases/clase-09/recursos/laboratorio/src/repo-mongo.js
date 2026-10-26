const { MongoClient } = require("mongodb");

const SEMILLA = [
  { id: "P-1001", estado: "CONFIRMADO", total: 15200 },
  { id: "P-1002", estado: "PENDIENTE", total: 8400 }
];

// Reintenta la conexión: en Compose y en ECS la base puede arrancar después que la API.
function createMongoRepo(uri) {
  const client = new MongoClient(uri, { serverSelectionTimeoutMS: 2000 });
  let pedidos = null;

  async function conectar() {
    for (let intento = 1; !pedidos; intento++) {
      try {
        await client.connect();
        const coleccion = client.db().collection("pedidos");
        await coleccion.createIndex({ id: 1 }, { unique: true });
        for (const pedido of SEMILLA) {
          await coleccion.updateOne({ id: pedido.id }, { $setOnInsert: pedido }, { upsert: true });
        }
        pedidos = coleccion;
        console.log(JSON.stringify({ msg: "mongodb_conectado", intento }));
      } catch (error) {
        console.error(JSON.stringify({ msg: "mongodb_reintento", intento, detalle: error.message }));
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    }
  }

  const lista = () => { if (!pedidos) throw new Error("sin_conexion"); return pedidos; };
  const limpio = { projection: { _id: 0 } };

  return {
    conectar,
    ping: async () => { lista(); await client.db().command({ ping: 1 }); },
    listar: () => lista().find({}, limpio).sort({ id: 1 }).toArray(),
    buscar: (id) => lista().findOne({ id }, limpio),
    crear: async ({ total }) => {
      const pedido = { id: `P-${Date.now().toString(36).toUpperCase()}`, estado: "PENDIENTE", total };
      await lista().insertOne({ ...pedido });
      return pedido;
    }
  };
}

module.exports = { createMongoRepo };
