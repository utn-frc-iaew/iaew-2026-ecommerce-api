# Clase 06 — Documentación viva de integraciones

Duración: 120 minutos. Modalidad: individual.

## Punto de partida

La Clase 05 dejó funcionando la confirmación idempotente, RabbitMQ, reintentos, DLQ y deduplicación. Ahora convertimos ese comportamiento en contratos consultables y verificables.

## Alcance de la práctica

El trabajo obligatorio se concentra en cuatro resultados:

1. `docs/openapi.json` con `POST /pedidos/{id}/confirmar`.
2. Swagger UI disponible en `/api-docs/`.
3. `docs/eventos/pedido-confirmado.schema.json`.
4. EventCatalog con `PedidosAPI` → `PedidoConfirmado` → `WorkerNotificaciones`.

Se proporcionan plantillas C4 y ADR listas para adaptar al TPI. La plantilla C4 cubre Container; la Entrega 1 también requiere Context y Component. Backstage es una demostración docente. La revisión con IA es breve y no agrega un entregable.

## Materiales

- [Actividad práctica](./actividad-practica.md)
- [Material adicional](./material-adicional/material-completo.md)
- [Presentación](./presentacion/index.html)
- `recursos/eventcatalog-base`: proyecto preparado.
- `recursos/tpi`: modelos de C4 y ADR.
- `recursos/backstage/catalog-info.yaml`: descriptor para la demostración.

## Entrega individual

Entregá los cuatro resultados y `evidencias/documentacion-clase-06.md`. No incluyas `.env`, tokens, credenciales ni `node_modules`. La fecha se informa por Moodle.

## Relación con el TPI

La Entrega 1 vence el **05/10/2026**. Se entrega mediante ZIP en UV y no requiere defensa oral. La clase aporta OpenAPI y modelos para C4 y ADR; no modifica el enunciado.
