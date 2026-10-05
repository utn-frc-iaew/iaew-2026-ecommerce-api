// Solo se ejecuta con compose.validation.yaml: no imprime el token.
(async () => {
  const response = await fetch('http://issuer:8080/token');
  process.env.ACCESS_TOKEN = (await response.json()).access_token;
  require('../scripts/scenario');
})().catch(error => { console.error(error.message); process.exitCode = 1; });
