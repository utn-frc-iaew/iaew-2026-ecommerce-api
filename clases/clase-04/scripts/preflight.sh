#!/usr/bin/env bash

set -u

mode="${1:-base}"
errors=0

ok() { printf 'OK   %s\n' "$1"; }
fail() { printf 'FALTA %s\n' "$1"; errors=$((errors + 1)); }

if [ "$mode" != "base" ] && [ "$mode" != "services" ]; then
  printf 'Uso: bash preflight.sh [base|services]\n'
  exit 2
fi

for command_name in git node npm docker; do
  if command -v "$command_name" >/dev/null 2>&1; then
    ok "$command_name disponible"
  else
    fail "$command_name no está disponible"
  fi
done

if command -v docker >/dev/null 2>&1; then
  if docker info >/dev/null 2>&1; then
    ok "Docker está iniciado"
  else
    fail "Docker no responde; abrí Docker Desktop o iniciá el servicio"
  fi
fi

if [ -f .env ]; then
  ok ".env existe"
  for variable_name in MONGODB_URI AUTH0_DOMAIN AUTH0_AUDIENCE INTERNAL_API_KEY; do
    if grep -Eq "^${variable_name}=.+" .env; then
      ok "$variable_name está definida"
    else
      fail "$variable_name no está definida en .env"
    fi
  done
  if grep -Eq '^AUTH0_AUDIENCE=https://iaew-pedidos-api$' .env; then
    ok "AUTH0_AUDIENCE coincide con el contrato de la clase"
  else
    fail "AUTH0_AUDIENCE no coincide con https://iaew-pedidos-api"
  fi
  if grep -Eq '^AUTH0_DOMAIN=[A-Za-z0-9.-]+\.auth0\.com$' .env &&
     ! grep -Eq '^AUTH0_DOMAIN=tu-tenant\.' .env; then
    ok "AUTH0_DOMAIN tiene formato de tenant y no conserva el placeholder"
  else
    fail "AUTH0_DOMAIN conserva el ejemplo o no tiene formato de tenant Auth0"
  fi
  if grep -Eq '^INTERNAL_API_KEY=.+' .env &&
     ! grep -Eq '^INTERNAL_API_KEY=(colocar-api-key-local|changeme|CHANGE_ME)$' .env; then
    ok "INTERNAL_API_KEY no conserva el placeholder"
  else
    fail "INTERNAL_API_KEY conserva el placeholder"
  fi
else
  fail ".env no existe; crealo desde .env.example"
fi

if command -v docker >/dev/null 2>&1 && docker info >/dev/null 2>&1; then
  if docker inspect iaew-mongo >/dev/null 2>&1; then
    if [ "$(docker inspect -f '{{.State.Running}}' iaew-mongo 2>/dev/null)" = "true" ]; then
      ok "iaew-mongo está ejecutándose"
    else
      fail "iaew-mongo existe, pero está detenido"
    fi
  else
    fail "iaew-mongo no existe"
  fi
fi

if [ "$mode" = "services" ] && command -v docker >/dev/null 2>&1; then
  if [ -f compose.yaml ]; then
    if docker compose config --quiet >/dev/null 2>&1; then
      ok "compose.yaml es válido"
    else
      fail "compose.yaml no supera docker compose config"
    fi
  else
    fail "compose.yaml no existe"
  fi

  if docker inspect iaew-rabbitmq >/dev/null 2>&1 &&
     [ "$(docker inspect -f '{{.State.Running}}' iaew-rabbitmq 2>/dev/null)" = "true" ]; then
    ok "iaew-rabbitmq está ejecutándose"
  else
    fail "iaew-rabbitmq no está ejecutándose"
  fi

  if [ -f .env ] && grep -Eq '^RABBIT_URL=amqp://[^[:space:]]+@localhost:5672$' .env; then
    ok "RABBIT_URL está definida para el broker local"
  else
    fail "RABBIT_URL no está definida en .env para localhost:5672"
  fi
fi

if [ "$errors" -gt 0 ]; then
  printf '\nPreflight incompleto: %s condición(es) pendiente(s).\n' "$errors"
  exit 1
fi

printf '\nPreflight correcto para modo %s.\n' "$mode"
