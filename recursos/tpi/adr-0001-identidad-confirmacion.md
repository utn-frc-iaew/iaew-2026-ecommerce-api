# ADR 0001 — Identificar cada confirmación para permitir reintentos seguros

- Estado: aceptada
- Fecha: 2026-09-28

## Contexto

El cliente puede perder la respuesta después de que la API confirmó un pedido. Repetir la solicitud sin identidad puede descontar stock o publicar otro evento.

## Decisión

`POST /pedidos/:id/confirmar` exige `Idempotency-Key`. La API persiste la clave y el evento junto al pedido. Una repetición con la misma clave devuelve el resultado guardado y el mismo `eventId`. Una reutilización incompatible responde `409`.

## Consecuencias

- El cliente debe conservar una clave estable por intención.
- La API puede responder repeticiones sin volver a ejecutar efectos.
- La base agrega un índice único y almacenamiento del resultado.
- La decisión no vuelve atómicas MongoDB y RabbitMQ. El patrón outbox queda como evolución.

## Alternativas descartadas

- Reintentar sin identidad: permite efectos duplicados.
- Usar el token como clave: mezcla seguridad con identidad de negocio y expone información sensible.
