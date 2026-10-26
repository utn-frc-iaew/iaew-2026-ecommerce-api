const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

// Dobles de CLI: comprueban orden y manejo de errores; no acreditan ejecución AWS.
const driver = `#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const args = process.argv.slice(2);
const cmd = path.basename(process.argv[1]);
const state = JSON.parse(fs.readFileSync(process.env.MOCK_STATE, 'utf8'));
fs.appendFileSync(process.env.MOCK_LOG, JSON.stringify([cmd, ...args]) + '\\n');
const save = () => fs.writeFileSync(process.env.MOCK_STATE, JSON.stringify(state));
const fail = (msg) => { console.error(msg); process.exit(42); };
const value = (flag) => args[args.indexOf(flag) + 1];
if (cmd === 'docker') {
  if (args[0] === 'login') process.stdin.resume();
  if (args[0] === 'push') { if (!state.base) fail('Falta ECR de la base'); state.image = true; save(); }
} else {
  const op = args.slice(0, 2).join(' ');
  const stack = value('--stack-name');
  if (op === 'cloudformation deploy') {
    if (stack.endsWith('-base')) state.base = true;
    else {
      if (!state.base || !state.image) fail('Aplicacion antes de infraestructura o imagen');
      state.app = true;
    }
    save();
  } else if (op === 'cloudformation describe-stacks') {
    if (!state.base) fail('Stack base inexistente');
    const query = value('--query');
    if (query.includes('RepositoryUri')) console.log('123456789012.dkr.ecr.us-east-1.amazonaws.com/iaew-clase-09-base-api');
    else if (query.includes('StackStatus')) console.log(state.status || 'CREATE_COMPLETE');
    else console.log('Outputs de prueba');
  } else if (op === 'ecr get-login-password') console.log('password-ficticia');
  else if (op === 'cloudformation list-stacks') {
    if (process.env.MOCK_MODE === 'list-fail') fail('AccessDenied al consultar stacks');
    console.log([state.app ? 'iaew-clase-09' : '', state.base ? 'iaew-clase-09-base' : ''].filter(Boolean).join('\\t'));
  } else if (op === 'cloudformation delete-stack') {
    if (stack.endsWith('-base')) {
      if (state.app) fail('No se puede borrar base importada');
      if (process.env.MOCK_MODE !== 'retain') state.base = false;
    } else state.app = false;
    save();
  } else if (op !== 'cloudformation wait') fail('Operacion inesperada: ' + op);
}
`;

function fixture(t, initial = {}, mode = '') {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'iaew-infra-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  for (const name of ['aws', 'docker']) fs.writeFileSync(path.join(dir, name), driver, { mode: 0o755 });
  const stateFile = path.join(dir, 'state.json');
  const logFile = path.join(dir, 'log.jsonl');
  fs.writeFileSync(stateFile, JSON.stringify(initial));
  fs.writeFileSync(logFile, '');
  const env = { ...process.env, PATH: dir + path.delimiter + process.env.PATH,
    MOCK_STATE: stateFile, MOCK_LOG: logFile, MOCK_MODE: mode, AWS_REGION: 'us-east-1' };
  delete env.BASE_STACK;
  return {
    run(name, ...args) {
      return spawnSync('bash', [path.resolve(__dirname, '../scripts', name + '.sh'), ...args], {
        cwd: dir, env, encoding: 'utf8', timeout: 15000
      });
    },
    state: () => JSON.parse(fs.readFileSync(stateFile, 'utf8')),
    log: () => fs.readFileSync(logFile, 'utf8').trim().split('\n').filter(Boolean).map(JSON.parse)
  };
}

test('CLI simulada: base antes de imagen/aplicacion y limpieza en orden inverso', (t) => {
  const f = fixture(t);
  for (const [script, ...args] of [
    ['crear-infra'], ['publicar-imagen', '1.0.0'],
    ['desplegar', 'image:test'], ['desplegar', 'image:test', 'iaew-clase-09', '2'], ['limpiar']
  ]) {
    const result = f.run(script, ...args);
    assert.equal(result.status, 0, result.stderr || result.error?.message);
  }
  assert.equal(f.state().base, false);
  assert.equal(f.state().app, false);
  const log = f.log();
  const deletes = log.filter(a => a[1] === 'cloudformation' && a[2] === 'delete-stack');
  assert.deepEqual(deletes.map(a => a[a.indexOf('--stack-name') + 1]), ['iaew-clase-09', 'iaew-clase-09-base']);
  assert.ok(log.some(a => a.includes('DesiredCount=2') && a.includes('BaseStackName=iaew-clase-09-base')));
  assert.ok(!log.some(a => a[1] === 'ec2'), 'No debe consultar la VPC por defecto');
  assert.ok(!log.some(a => a[1] === 'ecr' && a[2] === 'create-repository'), 'ECR lo crea CloudFormation');
});

test('CLI simulada: sin base no se publica imagen ni se crea aplicacion', (t) => {
  const f = fixture(t);
  assert.notEqual(f.run('publicar-imagen').status, 0);
  assert.notEqual(f.run('desplegar', 'image:test').status, 0);
  assert.ok(!f.log().some(a => a[0] === 'docker' || a.includes('deploy')));
});

test('CLI simulada: base incompleta y cantidad invalida impiden desplegar', (t) => {
  const f = fixture(t, { base: true, status: 'ROLLBACK_COMPLETE' });
  assert.notEqual(f.run('desplegar', 'image:test').status, 0);
  assert.notEqual(f.run('desplegar', 'image:test', 'iaew-clase-09', '3').status, 0);
  assert.ok(!f.log().some(a => a.includes('deploy')));
});

test('CLI simulada: un error de consulta no se interpreta como recursos ausentes', (t) => {
  const f = fixture(t, { base: true, app: true }, 'list-fail');
  const result = f.run('limpiar');
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /AccessDenied/);
  assert.ok(!f.log().some(a => a.includes('delete-stack')));
});

test('CLI simulada: recurso retenido impide declarar limpieza exitosa', (t) => {
  const f = fixture(t, { base: true, app: true }, 'retain');
  const result = f.run('limpiar');
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /todav[ií]a existe/);
  assert.doesNotMatch(result.stdout, /Limpieza verificada/);
});
