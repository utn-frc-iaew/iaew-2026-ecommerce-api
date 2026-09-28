# Clase 06 — Actividad práctica individual

Duración: 120 minutos. Objetivo: documentar el contrato HTTP y el evento principal de la solución de Clase 05 sin ampliar el código funcional.

## Resultado obligatorio

| Resultado | Comprobación |
|---|---|
| OpenAPI 3.1 | `docs/openapi.json` es válido y contiene `POST /pedidos/{id}/confirmar` |
| Swagger UI | `GET /api-docs/` responde 200 y muestra la operación |
| Contrato de evento | `docs/eventos/pedido-confirmado.schema.json` es JSON Schema válido |
| EventCatalog | conecta `PedidosAPI`, `PedidoConfirmado` 1.0.0 y `WorkerNotificaciones` |

## Distribución del tiempo

| Tramo | Actividad | Minutos |
|---|---|---:|
| Inicio y demostración | Problema, OpenAPI y Swagger UI | 30 |
| A1–A2 | Base, contrato HTTP y publicación | 30 |
| Recurso TPI | Plantillas C4/ADR | 8 |
| A3 | JSON Schema | 12 |
| A4 | EventCatalog con base preparada | 23 |
| Demostración docente | Backstage | 7 |
| Cierre | IA, evidencias y TPI | 10 |
| **Total** |  | **120** |

## A1 — Preparar la base

**Problemática.** Si cada estudiante parte de un estado distinto, un error de la clase puede confundirse con un problema pendiente de la semana anterior. Primero necesitamos una base comprobable. Si no lo hacemos, no sabremos si una falla pertenece a la documentación nueva o al comportamiento previo.

```bash
git fetch origin
git switch clase-06-inicio
git switch -c trabajo-clase-06
npm ci
npm test
npm run check
mkdir -p docs/eventos evidencias
```

También podés continuar con tu solución de Clase 05. Punto de control: las pruebas pasan antes de documentar.

## A2 — Crear y publicar OpenAPI

**Problemática.** Un equipo consumidor pregunta cómo confirmar un pedido. Si debe leer rutas, middleware y pruebas para descubrir la operación, puede usar un encabezado HTTP incorrecto, omitir un permiso o repetir mal una solicitud después de un `503`. OpenAPI busca ofrecer un contrato único que personas y herramientas puedan consultar.

Creá `docs/openapi.json` con OpenAPI 3.1.0. Debe documentar literalmente:

- `POST /pedidos/{id}/confirmar`;
- parámetro `id` y encabezado HTTP obligatorio `Idempotency-Key`;
- OAuth 2.0 con flujo `client_credentials`, audience `https://iaew-pedidos-api` y scope `confirm:pedidos`;
- respuestas `200`, `400`, `401`, `403`, `404`, `409` y `503`;
- ejemplos que coincidan con el comportamiento real.

Contrato completo de referencia. Comparalo con el código antes de conservar cada literal:

```json
{
  "openapi": "3.1.0",
  "info": { "title": "IAEW Pedidos API", "version": "1.0.0", "description": "Contrato del flujo de confirmación idempotente de pedidos." },
  "servers": [{ "url": "http://localhost:3000", "description": "Entorno local" }],
  "tags": [{ "name": "Pedidos", "description": "Operaciones de negocio sobre pedidos" }],
  "paths": {
    "/pedidos/{id}/confirmar": {
      "post": {
        "tags": ["Pedidos"],
        "summary": "Confirmar un pedido una sola vez",
        "description": "Descuenta stock, confirma el pedido y publica pedido.confirmado. Repetir con la misma Idempotency-Key devuelve el resultado persistido.",
        "operationId": "confirmarPedido",
        "security": [{ "oauth2": ["confirm:pedidos"] }],
        "parameters": [
          { "name": "id", "in": "path", "required": true, "description": "Identificador MongoDB del pedido", "schema": { "type": "string", "pattern": "^[a-fA-F0-9]{24}$" }, "example": "507f1f77bcf86cd799439011" },
          { "name": "Idempotency-Key", "in": "header", "required": true, "description": "Identifica de forma estable una intención de confirmación.", "schema": { "type": "string", "minLength": 8, "maxLength": 128, "pattern": "^[A-Za-z0-9._:-]+$" }, "example": "pedido:507f1f77bcf86cd799439011:confirmar:v1" }
        ],
        "responses": {
          "200": { "description": "Pedido confirmado o replay de una confirmación anterior.", "headers": { "Idempotency-Replayed": { "description": "Indica si se devolvió el resultado persistido.", "schema": { "type": "string", "enum": ["true", "false"] } } }, "content": { "application/json": { "schema": { "$ref": "#/components/schemas/ConfirmacionResponse" } } } },
          "400": { "$ref": "#/components/responses/BadRequest" },
          "401": { "$ref": "#/components/responses/Unauthorized" },
          "403": { "$ref": "#/components/responses/Forbidden" },
          "404": { "$ref": "#/components/responses/NotFound" },
          "409": { "$ref": "#/components/responses/Conflict" },
          "503": { "$ref": "#/components/responses/Unavailable" }
        }
      }
    }
  },
  "components": {
    "securitySchemes": { "oauth2": { "type": "oauth2", "flows": { "clientCredentials": { "tokenUrl": "https://TU_AUTH0_DOMAIN/oauth/token", "scopes": { "confirm:pedidos": "Confirmar pedidos" } } }, "x-audience": "https://iaew-pedidos-api" } },
    "schemas": {
      "EventoPedidoConfirmado": { "type": "object", "required": ["eventId", "type", "version", "occurredAt", "data"], "properties": { "eventId": { "type": "string", "format": "uuid" }, "type": { "const": "pedido.confirmado" }, "version": { "const": 1 }, "occurredAt": { "type": "string", "format": "date-time" }, "data": { "type": "object", "required": ["pedidoId"], "properties": { "pedidoId": { "type": "string" } } } } },
      "ConfirmacionResponse": { "type": "object", "required": ["pedido", "evento", "idempotencia"], "properties": { "pedido": { "type": "object", "description": "Pedido confirmado" }, "evento": { "$ref": "#/components/schemas/EventoPedidoConfirmado" }, "idempotencia": { "type": "object", "required": ["key", "replayed"], "properties": { "key": { "type": "string" }, "replayed": { "type": "boolean" } } } } },
      "Error": { "type": "object", "required": ["error", "code", "retryable", "action"], "properties": { "error": { "type": "string" }, "code": { "type": "string" }, "retryable": { "type": "boolean" }, "action": { "type": "string" }, "details": { "type": "object", "additionalProperties": true } } }
    },
    "responses": {
      "BadRequest": { "description": "Solicitud o Idempotency-Key inválida", "content": { "application/json": { "schema": { "$ref": "#/components/schemas/Error" } } } },
      "Unauthorized": { "description": "Token ausente, inválido o expirado", "content": { "application/json": { "schema": { "$ref": "#/components/schemas/Error" } } } },
      "Forbidden": { "description": "Falta el scope confirm:pedidos", "content": { "application/json": { "schema": { "$ref": "#/components/schemas/Error" } } } },
      "NotFound": { "description": "Pedido inexistente", "content": { "application/json": { "schema": { "$ref": "#/components/schemas/Error" } } } },
      "Conflict": { "description": "Estado, stock o clave incompatible", "content": { "application/json": { "schema": { "$ref": "#/components/schemas/Error" } } } },
      "Unavailable": { "description": "No se pudo publicar el evento", "content": { "application/json": { "schema": { "$ref": "#/components/schemas/Error" } } } }
    }
  }
}
```

**Problemática de publicación.** Un archivo correcto pero oculto sigue siendo difícil de encontrar y usar. Swagger UI busca volver navegable el mismo contrato. Si la interfaz mantiene una copia distinta, ambas versiones pueden divergir; por eso debe cargar `docs/openapi.json`.

Publicá el archivo y Swagger UI con `swagger-ui-express` o la solución equivalente. Verificá:

```bash
node -e "JSON.parse(require('fs').readFileSync('docs/openapi.json'))"
curl -i http://localhost:3000/api-docs/
curl -s http://localhost:3000/api-docs/openapi.json
```

## A3 — Documentar `pedido.confirmado`

**Problemática.** El nombre `pedido.confirmado` no informa qué campos existen, cuáles son obligatorios ni qué tipos tienen. Sin un esquema, el productor puede cambiar el mensaje y romper silenciosamente al consumidor. JSON Schema busca hacer explícita y validable esa forma.

Creá `docs/eventos/pedido-confirmado.schema.json`:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://iaew.example.test/schemas/pedido-confirmado-v1.json",
  "title": "pedido.confirmado v1",
  "type": "object",
  "additionalProperties": false,
  "required": ["eventId", "type", "version", "occurredAt", "data"],
  "properties": {
    "eventId": { "type": "string", "format": "uuid" },
    "type": { "const": "pedido.confirmado" },
    "version": { "const": 1 },
    "occurredAt": { "type": "string", "format": "date-time" },
    "data": {
      "type": "object",
      "additionalProperties": false,
      "required": ["pedidoId"],
      "properties": {
        "pedidoId": { "type": "string", "minLength": 1 }
      }
    }
  }
}
```

Comparalo con el evento real. Corregí el contrato si el código usa otro nombre o tipo; no inventes campos.

Creá `evidencias/pedido-confirmado.ejemplo.json` con un evento representativo:

```json
{
  "eventId": "3f5204d4-8952-4a3f-92ea-0a6222151299",
  "type": "pedido.confirmado",
  "version": 1,
  "occurredAt": "2026-09-28T21:00:00.000Z",
  "data": { "pedidoId": "507f1f77bcf86cd799439011" }
}
```

Validá el ejemplo contra el esquema, no solamente la sintaxis JSON:

```bash
npx --yes -p ajv-cli@5 -p ajv-formats ajv validate \
  --spec=draft2020 -c ajv-formats \
  -s docs/eventos/pedido-confirmado.schema.json \
  -d evidencias/pedido-confirmado.ejemplo.json
```

Punto de control: AJV informa `pedido-confirmado.ejemplo.json valid`.

## A4 — Conectar el flujo en EventCatalog

**Problemática.** Tener el esquema en una carpeta no permite responder rápidamente quién lo publica, quién lo consume ni qué versión usa cada servicio. EventCatalog busca conectar esos recursos en un mapa navegable. Sin esa relación, un cambio puede afectar a otro equipo sin que nadie identifique el impacto.

La rama inicial incluye `recursos/eventcatalog-base`. No tenés que configurar EventCatalog desde cero.

Requisito de la base: Node.js 22.19 o posterior. Comprobalo con `node --version` antes de instalar.

```bash
cp -R recursos/eventcatalog-base eventcatalog-clase-06
cd eventcatalog-clase-06
npm ci
```

Creá:

```text
services/PedidosAPI/index.mdx
events/PedidoConfirmado/index.mdx
events/PedidoConfirmado/schema.json
services/WorkerNotificaciones/index.mdx
```

Productor:

```mdx
---
id: PedidosAPI
name: API de Pedidos
version: 1.0.0
sends:
  - id: PedidoConfirmado
    version: 1.0.0
---
Confirma pedidos y publica el evento.
```

Mensaje:

```mdx
---
id: PedidoConfirmado
name: Pedido confirmado
version: 1.0.0
schemaPath: schema.json
---
Confirma que un pedido cambió de estado.
```

Consumidor:

```mdx
---
id: WorkerNotificaciones
name: Worker de notificaciones
version: 1.0.0
receives:
  - id: PedidoConfirmado
    version: 1.0.0
---
Consume el evento de forma idempotente.
```

Copiá el esquema de A3 como `events/PedidoConfirmado/schema.json`. Ejecutá:

```bash
npm run build
npm run dev
```

Punto de control: se puede navegar del productor al mensaje y al consumidor. Si no podés abrir el sitio, la compilación correcta y los cuatro archivos sirven como evidencia.

## Recursos guiados, sin entrega adicional

### C4 y ADR para el TPI

**Problemática.** OpenAPI y JSON Schema describen contratos, pero no muestran dónde vive cada responsabilidad ni por qué se tomó una decisión. Sin una forma consistente de escribir la arquitectura, cada integrante puede dibujar el mismo sistema con significados distintos. C4 Model aporta vocabulario, niveles de zoom y relaciones explícitas; el ADR conserva la razón de una decisión.

Abrí `recursos/tpi/arquitectura-c4.md` y `recursos/tpi/adr-0001-identidad-confirmacion.md`. La plantilla muestra las tres vistas exigidas en la Entrega 1: Context, Container y Component. Leé cada vista como una oración arquitectónica: **elemento A se relaciona con elemento B para cumplir un propósito mediante una tecnología o protocolo**. Identificá qué nombres, responsabilidades y relaciones adaptarías a tu TPI. No desarrolles las vistas completas durante esta práctica.

Para el TPI, guardá los archivos con nombres sin espacios, por ejemplo `docs/c4-context.md`, `docs/c4-container.md` y `docs/c4-component.md`.

### Backstage — demostración docente

**Problemática.** EventCatalog explica el flujo de eventos, pero una organización también necesita descubrir servicios, APIs y responsables. Sin un catálogo general, el conocimiento queda repartido entre repositorios y personas. Backstage busca ofrecer ese inventario común.

El docente muestra `recursos/backstage/catalog-info.yaml`: un `Component` provee una entidad `API` cuyo contrato se incorpora con `$text: ../../docs/openapi.json`. La ruta es relativa a la ubicación del descriptor. No instales Backstage ni importes el descriptor.

### IA — cierre breve

**Problemática.** Una IA puede redactar rápido y, al mismo tiempo, inventar un código HTTP, un permiso o una garantía de entrega. Si publicamos ese borrador sin verificarlo, convertimos una suposición en contrato. La revisión busca rastrear cada afirmación importante hasta código, configuración o pruebas.

Pedile a una herramienta que detecte una posible contradicción entre OpenAPI y el código. Aceptá una corrección solo después de comprobarla en rutas, middleware o pruebas. No se entrega la conversación.

## Evidencia y entrega

Creá `evidencias/documentacion-clase-06.md` con:

1. validación de `docs/openapi.json`;
2. URL o captura de Swagger UI;
3. validación del JSON Schema;
4. captura de EventCatalog o lista de sus cuatro archivos más la compilación correcta.

Incluí la salida final de `npm test` y `npm run check`. No entregues `node_modules`, secretos ni `.env`.

## Problemas frecuentes

| Problema | Revisión |
|---|---|
| Swagger UI no carga el contrato | Comprobar la ruta del JSON y la consola. |
| OpenAPI contradice la API | Comparar ruta, encabezado HTTP, permiso y estados con código y pruebas. |
| EventCatalog no conecta recursos | Igualar `id` y `version` en `sends`, mensaje y `receives`. |
| La compilación falla | Ejecutar `npm ci` y revisar el bloque de metadatos inicial del archivo MDX. |

## Ampliación opcional

Documentá más endpoints, agregá un System a EventCatalog o probá el descriptor en Backstage. Queda fuera de los 120 minutos y no forma parte de la entrega.
