# Arquitectura con C4 Model

C4 permite escribir la arquitectura con un vocabulario consistente: personas, sistemas, contenedores, componentes y relaciones. Cada elemento debe tener nombre, responsabilidad y tecnología cuando corresponda. Cada relación debe indicar propósito o protocolo.

## Context

```mermaid
flowchart LR
  cliente[Cliente o servicio externo]
  sistema[Sistema de pedidos]
  auth0[Auth0]

  cliente -->|Confirma pedidos por HTTPS| sistema
  sistema -->|Valida tokens OAuth 2.0| auth0
```

## Container

```mermaid
flowchart LR
  cliente[Cliente o servicio] -->|HTTPS + OAuth 2.0| api[API Pedidos\nNode.js + Express]
  api -->|Lee y persiste| mongo[(MongoDB)]
  api -->|Publica pedido.confirmado| rabbit[[RabbitMQ]]
  rabbit -->|Entrega al menos una vez| worker[Worker de notificaciones\nNode.js]
  worker -->|Actualiza estado| mongo
```

## Component

```mermaid
flowchart LR
  ruta[Confirmar pedido\nExpress Router]
  auth[Validación JWT y scope]
  servicio[Servicio de confirmación]
  repositorio[Repositorio de pedidos]
  publicador[Publicador de eventos]

  ruta -->|Autoriza la operación| auth
  ruta -->|Solicita confirmación| servicio
  servicio -->|Lee y persiste| repositorio
  servicio -->|Publica pedido.confirmado| publicador
```

## Criterios de revisión

- El título declara el nivel y el alcance de la vista.
- Cada caja representa una responsabilidad del nivel elegido.
- Cada flecha explica una relación; no es una línea decorativa.
- Los nombres coinciden con el código, OpenAPI, eventos y README.
- Context no muestra detalles internos; Container no baja a funciones; Component se limita a un contenedor.

## Responsabilidades

- **Cliente o servicio:** envía token e `Idempotency-Key`.
- **API Pedidos:** valida permisos, confirma el pedido y publica el evento.
- **MongoDB:** persiste pedidos, identidad y eventos procesados.
- **RabbitMQ:** desacopla productor y consumidor, reintentos y DLQ.
- **Worker:** consume, deduplica por `eventId` y actualiza el estado.

El diagrama muestra contenedores y relaciones. No intenta describir clases ni líneas de código.
