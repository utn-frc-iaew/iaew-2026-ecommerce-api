# Clase 09 — Cloud e IaC con AWS Academy

La clase lleva una API stateless a la nube con infraestructura como código: CloudFormation, ECS Fargate y un Application Load Balancer, usando `LabRole` y respetando los límites del AWS Academy Learner Lab. El despliegue cloud es opcional y suma bono en el TPI; no cambia la consigna.

## Orden de lectura

1. [Presentación](presentacion/index.html).
2. [Material adicional](material-adicional/material-completo.md): nube, IaC, arquitectura, límites del lab y errores frecuentes.
3. [Actividad práctica individual: paso a paso](actividad-practica.md), de 45 minutos (A–E), con preparación, recursos, comandos, resultados esperados y una sola entrega.

La carpeta `recursos/laboratorio/` contiene los archivos de esta actividad; no es otro ejercicio. Empezá por la guía, que indica cuándo usar cada archivo.

## Antes de clase

- Docker, Node.js 20+, Python 3 (para `cfn-lint`) y AWS CLI v2 instalados.
- Solo para la ruta cloud: Learner Lab iniciado y credenciales temporales cargadas (`aws sts get-caller-identity`). No subirlas a Git.
- Región `us-east-1`.

## Alcance

- Obligatorio: partes A, B y E; C y D si hay Learner Lab.
- Fuera de alcance: despliegue de MongoDB, RabbitMQ y Auth0.
- Es un laboratorio autocontenido: no requiere la rama de inicio de otra clase.

## Preparación, cierre y validación

Preparar cfn-lint e imagen local antes de clase según la actividad. La API usa datos ficticios y no despliega el sistema previo. Sin AWS, cerrar el contenedor local y declarar que no se crearon recursos cloud. Con AWS, verificar borrado de stack y ECR. La nota admite tabla y evidencias anexas.

El despliegue real en Learner Lab sigue pendiente de ensayo; las pruebas locales no lo acreditan.

## Recorrido de la presentación

32 diapositivas: Compose real de Clase 08 → nube e IaaS/PaaS/SaaS → administración de contenedores con ECS/Fargate → imagen, red, roles y estado → IaC con CloudFormation → actividad A–E. La agenda suma 120 minutos.

## Qué vas a levantar en AWS

Una API Node.js de pedidos ficticios y solo lectura, ejecutada primero en una tarea Fargate y después en dos, detrás de un ALB público. La imagen se publica en ECR; CloudFormation crea el stack `iaew-clase-09` con dos security groups, ALB, Listener, TargetGroup, Cluster, TaskDefinition, Service y LogGroup. VPC, subredes y LabRole ya deben existir. La API responde JSON; no se despliegan interfaz gráfica, base de datos, broker, worker, Auth0 ni MCP.
