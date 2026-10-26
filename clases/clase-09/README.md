# Clase 09 — Cloud e IaC con AWS Academy

La clase lleva una API stateless a la nube con infraestructura como código: CloudFormation, ECS Fargate y un Application Load Balancer, usando `LabRole` y respetando los límites del AWS Academy Learner Lab. El despliegue cloud es opcional y suma bono en el TPI; no cambia la consigna.

## Orden de lectura

1. [Presentación](presentacion/index.html) y [notas del orador](presentacion/presenter.html).
2. [Material adicional](material-adicional/material-completo.md): nube, IaC, arquitectura, límites del lab y errores frecuentes.
3. [Actividad práctica individual](actividad-practica.md), de 45 minutos (partes A–E).
4. [Laboratorio](recursos/laboratorio/README.md): API, Dockerfile, plantilla y scripts.

## Antes de clase

- Docker, Node.js 20+, Python 3 (para `cfn-lint`) y AWS CLI v2 instalados.
- Learner Lab iniciado y credenciales temporales cargadas (`aws sts get-caller-identity`). No subirlas a Git.
- Región `us-east-1`.

## Alcance

- Obligatorio: partes A, B y E; C y D si hay Learner Lab.
- Fuera de alcance: despliegue de MongoDB, RabbitMQ y Auth0.
- Es un laboratorio autocontenido: no requiere la rama de inicio de otra clase.
