const fs = require('node:fs');
const path = require('node:path');
const newman = require('newman');
const collectionPath = process.argv[2] || 'coleccion-alumno.json';
const environmentPath = process.argv[3] || 'entorno.local.json';
try {
  const raw = fs.readFileSync(collectionPath, 'utf8');
  if (raw.includes('TODO_ALUMNO_')) throw new Error('Completá los tres TODO y eliminá sus marcadores antes de ejecutar.');
  const environment = JSON.parse(fs.readFileSync(environmentPath, 'utf8'));
  for (const key of ['baseUrl', 'accessToken', 'apiKey']) {
    if (!environment.values.some(v => v.key === key && v.enabled !== false && v.value)) throw new Error('Falta completar ' + key + ' en el entorno privado.');
  }
  fs.mkdirSync('evidencias', { recursive: true });
  newman.run({ collection: JSON.parse(raw), environment, reporters: ['cli'], delayRequest: 500,
    timeoutRequest: 10000, timeout: 120000 }, (err, summary) => {
    if (err) { console.error('La colección no pudo ejecutarse. Revisá entorno y formato.'); process.exitCode = 1; return; }
    // Informe deliberadamente limitado: no almacena tokens, headers, cuerpos ni entorno.
    const report = { fecha: new Date().toISOString(), coleccion: path.basename(collectionPath),
      estadisticas: summary.run.stats,
      casos: summary.run.executions.map(e => ({ nombre: e.item.name, http: e.response?.code,
        aserciones: (e.assertions || []).map(a => ({ nombre: a.assertion, ok: !a.error })) })),
      fallos: summary.run.failures.length };
    fs.writeFileSync('evidencias/resumen.json', JSON.stringify(report, null, 2));
    process.exitCode = report.fallos ? 1 : 0;
  });
} catch (e) { console.error(e.message); process.exitCode = 1; }
