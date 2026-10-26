#!/usr/bin/env bash
# Uso: ./scripts/limpiar.sh [nombre-stack]
# Reservar iaew-api para esta práctica: se borran el repositorio y sus imágenes.
set -euo pipefail
STACK="${1:-iaew-clase-09}"
REGION="${AWS_REGION:-us-east-1}"
# Consultar primero permite distinguir ausencia de un fallo de permisos o conexión.
STACKS="$(aws cloudformation list-stacks --region "$REGION" --query "StackSummaries[?StackStatus!='DELETE_COMPLETE'].StackName" --output text)"
if printf '%s\n' "$STACKS" | tr '\t' '\n' | grep -Fxq "$STACK"; then
  aws cloudformation delete-stack --stack-name "$STACK" --region "$REGION"
  aws cloudformation wait stack-delete-complete --stack-name "$STACK" --region "$REGION"
fi
REPOS="$(aws ecr describe-repositories --region "$REGION" --query 'repositories[].repositoryName' --output text)"
if printf '%s\n' "$REPOS" | tr '\t' '\n' | grep -Fxq iaew-api; then
  aws ecr delete-repository --repository-name iaew-api --force --region "$REGION"
fi
STACKS="$(aws cloudformation list-stacks --region "$REGION" --query "StackSummaries[?StackStatus!='DELETE_COMPLETE'].StackName" --output text)"
REPOS="$(aws ecr describe-repositories --region "$REGION" --query 'repositories[].repositoryName' --output text)"
if printf '%s\n' "$STACKS" | tr '\t' '\n' | grep -Fxq "$STACK"; then
  echo "Pendiente: el stack $STACK todavía existe." >&2; exit 1
fi
if printf '%s\n' "$REPOS" | tr '\t' '\n' | grep -Fxq iaew-api; then
  echo "Pendiente: el repositorio iaew-api todavía existe." >&2; exit 1
fi
echo "Limpieza verificada: stack $STACK y repositorio iaew-api ausentes."
