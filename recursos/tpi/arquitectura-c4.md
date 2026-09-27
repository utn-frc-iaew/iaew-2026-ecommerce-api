# Arquitectura — vista C4 de contenedores

```mermaid
flowchart LR
  cliente[Cliente o servicio] -->|HTTPS + OAuth 2.0| api[API Pedidos\nNode.js + Express]
  api -->|Lee y persiste| mongo[(MongoDB)]
  api -->|Publica pedido.confirmado| rabbit[[RabbitMQ]]
  rabbit -->|Entrega at least once| worker[Worker de notificaciones\nNode.js]
  worker -->|Actualiza estado| mongo
```

## Responsabilidades

- **Cliente o servicio:** envía token e `Idempotency-Key`.
- **API Pedidos:** valida permisos, confirma el pedido y publica el evento.
- **MongoDB:** persiste pedidos, identidad y eventos procesados.
- **RabbitMQ:** desacopla productor y consumidor, retry y DLQ.
- **Worker:** consume, deduplica por `eventId` y actualiza el estado.

El diagrama muestra contenedores y relaciones. No intenta describir clases ni líneas de código.
