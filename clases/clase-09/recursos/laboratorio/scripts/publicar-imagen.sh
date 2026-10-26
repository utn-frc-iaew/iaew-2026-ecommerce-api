#!/usr/bin/env bash
# Uso: ./scripts/publicar-imagen.sh [version]; requiere la infraestructura base.
set -euo pipefail
VERSION="${1:-1.0.0}"
BASE_STACK="${BASE_STACK:-iaew-clase-09-base}"
REGION="${AWS_REGION:-us-east-1}"
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
REPOSITORY_URI="$(aws cloudformation describe-stacks --stack-name "$BASE_STACK" --region "$REGION" \
  --query 'Stacks[0].Outputs[?OutputKey==`RepositoryUri`].OutputValue | [0]' --output text)"
if [[ -z "$REPOSITORY_URI" || "$REPOSITORY_URI" == "None" ]]; then
  echo "Falta RepositoryUri: crear primero el stack base con crear-infra.sh." >&2; exit 1
fi
IMAGE="${REPOSITORY_URI}:${VERSION}"
REGISTRY="${REPOSITORY_URI%%/*}"
aws ecr get-login-password --region "$REGION" | docker login --username AWS --password-stdin "$REGISTRY"
docker build --platform linux/amd64 -t "$IMAGE" "$SCRIPT_DIR/.."
docker push "$IMAGE"
echo "ImageUri=${IMAGE}"
