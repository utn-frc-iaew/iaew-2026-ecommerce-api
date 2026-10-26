# Clase 09 — Cloud e IaC con AWS Academy

La clase lleva una API stateless a la nube con infraestructura como código: CloudFormation, ECS Fargate y un Application Load Balancer, usando `LabRole` y respetando los límites del AWS Academy Learner Lab. La práctica es obligatoria; desplegar el TPI en la nube es opcional, suma bono y no cambia la consigna.

## Orden de lectura

1. [Presentación](presentacion/index.html).
2. [Material adicional](material-adicional/material-completo.md): nube, IaC, arquitectura, límites del lab y errores frecuentes.
3. [Actividad práctica individual: paso a paso](actividad-practica.md), de 45 minutos (A–E), con preparación, recursos, comandos, resultados esperados y una sola entrega.

La carpeta `recursos/laboratorio/` contiene los archivos de esta actividad; no es otro ejercicio. Empezá por la guía, que indica cuándo usar cada archivo.

## Antes de clase

- Docker, Node.js 20+, Python 3 (para `cfn-lint`) y AWS CLI v2 instalados.
- Learner Lab iniciado y credenciales temporales cargadas (`aws sts get-caller-identity`). No subirlas a Git.
- Región `us-east-1`.

## Alcance

- Obligatorio: partes A–E completas con Learner Lab disponible para todos.
- Fuera de alcance: despliegue de MongoDB, RabbitMQ y Auth0.
- Es un laboratorio autocontenido: no requiere la rama de inicio de otra clase.

## Preparación, cierre y validación

Preparar cfn-lint e imagen local antes de clase según la actividad. La API usa datos ficticios y no despliega el sistema previo. Todos completan el despliegue en Learner Lab y verifican el borrado del contenedor local y de los dos stacks, con su red y ECR. La nota admite tabla y evidencias anexas.

El despliegue real en Learner Lab sigue pendiente de ensayo; las pruebas locales no lo acreditan.

## Recorrido de la presentación

32 diapositivas: Compose real de Clase 08 → nube e IaaS/PaaS/SaaS → administración de contenedores con ECS/Fargate → imagen, red, roles y estado → IaC con CloudFormation → actividad A–E. La agenda suma 120 minutos.

## Qué vas a levantar en AWS

Primero, el stack `iaew-clase-09-base`: VPC propia, Internet Gateway, dos subredes públicas, rutas y asociaciones, security groups, ALB/Listener/TargetGroup, ECR, cluster ECS y logs (17 recursos). Después publicás la imagen y creás `iaew-clase-09`: TaskDefinition y Service (2 recursos) que ejecutan la API en 1→2 tareas Fargate. Las plantillas conectan ambas etapas mediante exports/imports. No se usa la VPC por defecto. La cuenta y el permiso LabRole los provee Learner Lab.
