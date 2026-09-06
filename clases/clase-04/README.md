# Clase 04 — Cuando REST request-response no alcanza

Materia: Integración de Aplicaciones en Entorno Web  
Fecha prevista: lunes 7 de septiembre de 2026  
Duración: 120 minutos

## Resultado de la clase

Confirmar un pedido protegido por Auth0, publicar `pedido.confirmado` en RabbitMQ y procesarlo con un worker que registra la notificación como procesada.

## Materiales

| Recurso | Uso |
|---|---|
| [Presentación](presentacion/index.html) | Caso, conceptos, pasos y checkpoints del taller. |
| [Actividad práctica](actividad-practica.md) | Guía individual paso a paso y entrega. |
| [Material adicional](material-adicional/material-completo.md) | Desarrollo teórico y referencias. |

## Punto de partida

La rama `clase-04-inicio` contiene la actividad de la Clase 03 resuelta:

```bash
git fetch origin
git switch clase-04-inicio
git switch -c trabajo-clase-04
```

Repositorio: <https://github.com/utn-frc-iaew/iaew-2026-ecommerce-api/tree/clase-04-inicio>

## Alcance

La implementación obligatoria usa RabbitMQ, un productor y un worker. Webhook, WebSocket y gRPC se comparan mediante microdemostraciones docentes. Outbox, retries y DLQ quedan como conceptos o temas de la Clase 05.

La entrega es individual. Cada estudiante conserva evidencia del mensaje pendiente, su procesamiento y los controles de seguridad. Para el TPI grupal, propone y justifica una integración adecuada a su dominio.
