#!/usr/bin/env bash
# Uso: ./scripts/limpiar.sh [nombre-stack]
# Elimina el stack y el repositorio ECR; confirmar que no quedan recursos facturables.
set -euo pipefail

STACK="${1:-iaew-clase-09}"
REGION="${AWS_REGION:-us-east-1}"

aws cloudformation delete-stack --stack-name "$STACK" --region "$REGION"
aws cloudformation wait stack-delete-complete --stack-name "$STACK" --region "$REGION"
aws ecr delete-repository --repository-name iaew-api --force --region "$REGION" >/dev/null 2>&1 || true

echo "Stacks restantes:"
aws cloudformation list-stacks --region "$REGION" \
  --stack-status-filter CREATE_COMPLETE UPDATE_COMPLETE ROLLBACK_COMPLETE DELETE_FAILED \
  --query 'StackSummaries[].StackName' --output text
