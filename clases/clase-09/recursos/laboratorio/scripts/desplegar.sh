#!/usr/bin/env bash
# Uso: ./scripts/desplegar.sh <ImageUri> [nombre-stack] [cantidad-tareas: 1 o 2]
set -euo pipefail

IMAGE_URI="${1:?Indicar ImageUri (salida de publicar-imagen.sh)}"
STACK="${2:-iaew-clase-09}"
REGION="${AWS_REGION:-us-east-1}"
DESIRED_COUNT="${3:-1}"
case "$DESIRED_COUNT" in
  1|2) ;;
  *) echo "La cantidad de tareas debe ser 1 o 2." >&2; exit 1 ;;
esac

VPC_ID="$(aws ec2 describe-vpcs --filters Name=isDefault,Values=true --query 'Vpcs[0].VpcId' --output text --region "$REGION")"
# Una subred por zona de disponibilidad (el ALB exige al menos dos zonas distintas).
SUBNETS="$(aws ec2 describe-subnets --filters Name=vpc-id,Values="$VPC_ID" Name=default-for-az,Values=true \
  --query 'sort_by(Subnets,&AvailabilityZone)[:2].SubnetId' --output text --region "$REGION" | tr '\t' ',')"

aws cloudformation deploy \
  --stack-name "$STACK" \
  --template-file plantillas/ecs-fargate-alb.yaml \
  --parameter-overrides "ImageUri=${IMAGE_URI}" "VpcId=${VPC_ID}" "SubnetIds=${SUBNETS}" "DesiredCount=${DESIRED_COUNT}" \
  --region "$REGION"

aws cloudformation describe-stacks --stack-name "$STACK" --region "$REGION" \
  --query 'Stacks[0].Outputs' --output table
