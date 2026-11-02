// Ejemplo ejecutable sobre fixtures: NO es una prueba contra la API.
const assert = require('node:assert/strict');
const contrato = x => { assert.equal(typeof x._id, 'string'); assert.equal(typeof x.total, 'number'); assert.ok(['pendiente', 'confirmado'].includes(x.estado)); };
const v1 = { _id: 'pedido-ejemplo', total: 100, estado: 'confirmado' };
contrato(v1);
contrato({ ...v1, moneda: 'ARS' });
let detectado = false;
try { contrato({ ...v1, total: '100' }); } catch { detectado = true; }
assert.ok(detectado, 'Debe detectarse el cambio de tipo');
console.log('Campo adicional aceptado; cambio number→string detectado. Evidencia sobre fixtures.');
