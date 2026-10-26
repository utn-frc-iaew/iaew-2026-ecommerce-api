#!/usr/bin/env bash
# Uso: ./scripts/desplegar.sh <ImageUri> [stack-app] [cantidad: 1 o 2]
set -euo pipefail
IMAGE_URI="${1:?Indicar ImageUri (salida de publicar-imagen.sh)}"
STACK="${2:-iaew-clase-09}"
BASE_STACK="${BASE_STACK:-${STACK}-base}"
REGION="${AWS_REGION:-us-east-1}"
DESIRED_COUNT="${3:-1}"
case "$DESIRED_COUNT" in
  1|2) ;;
  *) echo "La cantidad de tareas debe ser 1 o 2." >&2; exit 1 ;;
esac
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
BASE_STATUS="$(aws cloudformation describe-stacks --stack-name "$BASE_STACK" --region "$REGION" \
  --query 'Stacks[0].StackStatus' --output text)"
case "$BASE_STATUS" in
  CREATE_COMPLETE|UPDATE_COMPLETE) ;;
  *) echo "La infraestructura base debe estar completa antes de desplegar: $BASE_STATUS" >&2; exit 1 ;;
esac
aws cloudformation deploy --stack-name "$STACK" \
  --template-file "$SCRIPT_DIR/../plantillas/ecs-fargate-alb.yaml" \
  --parameter-overrides "BaseStackName=${BASE_STACK}" "ImageUri=${IMAGE_URI}" "DesiredCount=${DESIRED_COUNT}" \
  --region "$REGION" --no-fail-on-empty-changeset
aws cloudformation describe-stacks --stack-name "$STACK" --region "$REGION" \
  --query 'Stacks[0].Outputs' --output table
