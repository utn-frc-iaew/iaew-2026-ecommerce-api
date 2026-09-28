const IDEMPOTENCY_KEY_PATTERN = /^[A-Za-z0-9._:-]{8,128}$/;

function validateIdempotencyKey(value) {
  if (typeof value !== 'string' || value.length === 0) {
    return { code: 'IDEMPOTENCY_KEY_REQUIRED', error: 'El encabezado Idempotency-Key es obligatorio' };
  }
  if (!IDEMPOTENCY_KEY_PATTERN.test(value)) {
    return {
      code: 'IDEMPOTENCY_KEY_INVALID',
      error: 'Idempotency-Key debe tener entre 8 y 128 caracteres permitidos',
      details: { pattern: '[A-Za-z0-9._:-]', minLength: 8, maxLength: 128 }
    };
  }
  return null;
}

module.exports = { IDEMPOTENCY_KEY_PATTERN, validateIdempotencyKey };
