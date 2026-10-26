#!/usr/bin/env bash
# Uso: ./scripts/crear-infra.sh [nombre-stack-base]
set -euo pipefail
BASE_STACK="${1:-${BASE_STACK:-iaew-clase-09-base}}"
REGION="${AWS_REGION:-us-east-1}"
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
aws cloudformation deploy --stack-name "$BASE_STACK" \
  --template-file "$SCRIPT_DIR/../plantillas/infra-base.yaml" --region "$REGION" \
  --no-fail-on-empty-changeset
aws cloudformation describe-stacks --stack-name "$BASE_STACK" --region "$REGION" \
  --query 'Stacks[0].Outputs' --output table
