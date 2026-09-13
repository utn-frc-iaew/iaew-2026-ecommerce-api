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
| [Preflight](scripts/preflight.sh) | Diagnóstico automático del entorno antes del taller. |

## Punto de partida

La rama `clase-04-inicio` contiene la actividad de la Clase 03 resuelta:

```bash
git fetch origin
git switch clase-04-inicio
git switch -c trabajo-clase-04
```

Repositorio: <https://github.com/utn-frc-iaew/iaew-2026-ecommerce-api/tree/clase-04-inicio>

## Alcance

La implementación obligatoria usa RabbitMQ, un productor y un worker. El docente muestra primero el recorrido completo y luego cada estudiante lo reproduce mediante cuatro checkpoints. Webhook, WebSocket y gRPC se comparan brevemente; sus microdemostraciones quedan como extensión opcional si el tiempo lo permite. Outbox, retries y DLQ quedan como conceptos o temas de la Clase 05.

La entrega es individual. Durante la clase se exige evidencia de la confirmación `200`, el mensaje pendiente y su procesamiento final. Las regresiones `401`, `403` y `409`, junto con la decisión para el TPI, deben completarse después de la clase para cerrar la entrega. No se debe avanzar con fallas de entorno silenciosas: el preflight y cada checkpoint indican cuándo pedir ayuda.
