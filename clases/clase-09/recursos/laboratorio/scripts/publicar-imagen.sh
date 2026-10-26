#!/usr/bin/env bash
# Uso: ./scripts/publicar-imagen.sh [version]
# Crea el repositorio ECR si no existe, construye para linux/amd64 y sube la imagen.
set -euo pipefail

VERSION="${1:-1.0.0}"
REPO="iaew-api"
REGION="${AWS_REGION:-us-east-1}"
ACCOUNT="$(aws sts get-caller-identity --query Account --output text)"
IMAGE="${ACCOUNT}.dkr.ecr.${REGION}.amazonaws.com/${REPO}:${VERSION}"

aws ecr describe-repositories --repository-names "$REPO" --region "$REGION" >/dev/null 2>&1 \
  || aws ecr create-repository --repository-name "$REPO" --region "$REGION" >/dev/null

aws ecr get-login-password --region "$REGION" \
  | docker login --username AWS --password-stdin "${ACCOUNT}.dkr.ecr.${REGION}.amazonaws.com"

# Fargate usa x86_64 por defecto; en Mac con Apple Silicon hay que forzar la plataforma.
docker build --platform linux/amd64 -t "$IMAGE" .
docker push "$IMAGE"
echo "ImageUri=${IMAGE}"
