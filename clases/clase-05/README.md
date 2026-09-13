# Clase 05 — Resiliencia de integraciones

En esta clase vas a evitar efectos duplicados al confirmar pedidos y vas a controlar las fallas del worker con retry limitado, deduplicación y una dead letter queue.

## Punto de partida: elegí un camino

Podés continuar con el código que desarrollaste durante las clases anteriores si ya tenés la Clase 04 completa y funcionando. En ese caso, conservá tus cambios y creá una rama de trabajo:

```bash
git status
git switch -c trabajo-clase-05
```

Si tu implementación anterior está incompleta, no funciona o preferís usar la base común comprobada, partí de `clase-05-inicio`:

```bash
git fetch origin
git switch clase-05-inicio
git switch -c trabajo-clase-05
```

En ambos casos, ejecutá después:

```bash
npm ci
cp .env.example .env
```

La rama `clase-05-inicio` contiene la actividad de la Clase 04 resuelta. No contiene la solución de resiliencia de esta clase. Elegí un solo camino y comprobá que tu rama tenga `src/app.js`, `src/worker.js`, `src/lib/rabbit.js` y `compose.yaml` antes de continuar.

## Materiales

- [Presentación](presentacion/index.html)
- [Actividad práctica individual](actividad-practica.md)
- [Material adicional](material-adicional/material-completo.md)

## Resultado observable

- primera confirmación con `Idempotency-Key`;
- replay `200` con el mismo `eventId` y sin nuevo descuento de stock;
- conflicto `409` ante una reutilización incompatible;
- retry con un máximo de tres reintentos después del intento inicial;
- mensaje agotado o inválido visible en DLQ;
- evento duplicado reconocido sin repetir el efecto.

## Entrega

Entregá el proyecto sin `.env`, tokens, credenciales ni `node_modules`, junto con `evidencias/pruebas-resiliencia.md`. Las fechas se informan por Moodle.
