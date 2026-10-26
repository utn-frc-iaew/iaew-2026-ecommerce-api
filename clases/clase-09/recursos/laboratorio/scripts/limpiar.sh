#!/usr/bin/env bash
# Uso: ./scripts/limpiar.sh [stack-app]; borra primero aplicación y después base.
set -euo pipefail
STACK="${1:-iaew-clase-09}"
BASE_STACK="${BASE_STACK:-${STACK}-base}"
REGION="${AWS_REGION:-us-east-1}"
stack_exists() {
  local stacks
  # Un fallo de consulta debe detener la limpieza, no interpretarse como ausencia.
  stacks="$(aws cloudformation list-stacks --region "$REGION" \
    --query "StackSummaries[?StackStatus!='DELETE_COMPLETE'].StackName" --output text)" || return 2
  printf '%s\n' "$stacks" | tr '\t' '\n' | grep -Fxq "$1"
}
for name in "$STACK" "$BASE_STACK"; do
  if stack_exists "$name"; then
    aws cloudformation delete-stack --stack-name "$name" --region "$REGION"
    aws cloudformation wait stack-delete-complete --stack-name "$name" --region "$REGION"
  else
    status=$?
    if [[ "$status" != 1 ]]; then echo "No se pudo consultar el stack $name." >&2; exit "$status"; fi
  fi
  if stack_exists "$name"; then
    echo "Pendiente: el stack $name todavía existe." >&2; exit 1
  else
    status=$?
    if [[ "$status" != 1 ]]; then echo "No se pudo verificar el borrado de $name." >&2; exit "$status"; fi
  fi
done
echo "Limpieza verificada: stacks $STACK y $BASE_STACK eliminados o ausentes."
echo "La base incluye VPC, red, ALB, ECR (con sus imágenes), cluster y logs; LabRole pertenece al Learner Lab."
