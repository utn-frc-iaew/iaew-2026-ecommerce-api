# Laboratorio · Clase 09 · API stateless en AWS Academy

API mínima (`GET /health`, `/version`, `/pedidos`, `/pedidos/:id`) y plantilla CloudFormation para publicarla en ECS Fargate detrás de un ALB. Autocontenido: no depende de Auth0, MongoDB ni RabbitMQ.

| Ruta | Contenido |
|---|---|
| `src/app.js`, `test/app.test.js` | API y prueba (`npm test`) |
| `Dockerfile` | Imagen Node 22, escucha en `8080` |
| `plantillas/ecs-fargate-alb.yaml` | Stack: security groups, ALB, cluster, task definition y servicio |
| `scripts/publicar-imagen.sh` | Crea ECR, construye `linux/amd64` y sube la imagen |
| `scripts/desplegar.sh` | Detecta VPC y subredes por defecto y despliega el stack |
| `scripts/limpiar.sh` | Elimina stack y repositorio ECR |

## Uso rápido

```bash
npm test
cfn-lint plantillas/ecs-fargate-alb.yaml
./scripts/publicar-imagen.sh 1.0.0
./scripts/desplegar.sh <ImageUri>
./scripts/limpiar.sh
```

Requiere credenciales del Learner Lab en la terminal y región `us-east-1`. Las consignas están en `../../actividad-practica.md`.

## Seguridad

- No subir credenciales a Git.
- El ALB queda abierto a Internet en el puerto 80 durante la práctica: es una API de datos ficticios; eliminar el stack al terminar.
- Las tareas usan `LabRole` por restricción del Learner Lab; en un entorno real se aplicaría mínimo privilegio.
