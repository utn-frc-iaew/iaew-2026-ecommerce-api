function integerFromEnv(name, fallback, { min = 0, max = Number.MAX_SAFE_INTEGER } = {}) {
  const raw = process.env[name];
  if (raw === undefined || raw === '') return fallback;
  const value = Number(raw);
  if (!Number.isInteger(value) || value < min || value > max) {
    throw new Error(`${name} debe ser un entero entre ${min} y ${max}`);
  }
  return value;
}

function retryConfig() {
  return {
    retryDelayMs: integerFromEnv('RETRY_DELAY_MS', 3000, { min: 1, max: 3600000 }),
    maxRetries: integerFromEnv('MAX_RETRIES', 3, { min: 0, max: 20 }),
    simulatedFailures: integerFromEnv('SIMULATE_TRANSIENT_FAILURES', 0, { min: 0, max: 20 })
  };
}

module.exports = { integerFromEnv, retryConfig };

