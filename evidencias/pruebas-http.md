# Evidencias de referencia — Clase 03 resuelta

Esta rama contiene la solución técnica que sirve como punto de partida de la Clase 04. Los valores reales de Auth0 dependen del tenant de cada estudiante y no se versionan.

| Caso | Resultado esperado |
|---|---|
| `GET /health` sin token | `200 OK` |
| `GET /productos` sin token | `200 OK` |
| `GET /pedidos` sin token | `401 Unauthorized` |
| `POST /productos` sin API key | `401 Unauthorized` |
| `POST /productos` con `x-api-key` válida | `201 Created` |
| `POST /pedidos` sin token | `401 Unauthorized` |
| `POST /pedidos` con token sin `write:pedidos` | `403 Forbidden` |
| `GET /pedidos` con `read:pedidos` | `200 OK` |
| `POST /pedidos` con `write:pedidos` | `201 Created` |
| `POST /pedidos/:id/confirmar` con `confirm:pedidos` | `200 OK` |
| Repetir la confirmación | `409 Conflict` |
| `GET /token-info` con JWT válido | `200 OK` |

Configuración: audience `https://iaew-pedidos-api`; scopes `read:pedidos`, `write:pedidos`, `confirm:pedidos` y `admin:productos`; flujo `client_credentials`. `POST /productos` conserva el ejemplo separado con `x-api-key`.

Antes de usar esta base en clase, el docente debe ejecutar el recorrido contra su tenant de Auth0. Este archivo no contiene tokens, secretos ni resultados inventados.
