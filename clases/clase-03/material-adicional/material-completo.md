# Clase 03 - Seguridad aplicada a acciones de negocio

## 1. Por qué hablar de seguridad en una materia de integración

Integrar aplicaciones significa permitir que sistemas distintos se comuniquen. Esa comunicación abre valor, pero también abre superficie de ataque.

Una API de e-commerce que permite consultar productos, crear pedidos o confirmar compras no expone acciones equivalentes. Algunas acciones solo leen información pública. Otras modifican estado, comprometen stock, disparan pagos, notifican a terceros o generan obligaciones comerciales.

Por eso, en integración web, seguridad no es un agregado final. Es parte del contrato de integración:

```text
Qué acción se puede ejecutar, quién puede ejecutarla, bajo qué condiciones y con qué evidencia.
```

## 2. Autenticación y autorización

Autenticación responde:

```text
¿Quién sos?
```

Autorización responde:

```text
¿Qué podés hacer?
```

Ejemplo:

- Un cliente Machine to Machine obtiene un access token en Auth0.
- El token está emitido para el audience de nuestra API.
- Si trae `write:pedidos`, puede crear pedidos.
- Si no trae `admin:productos`, no puede crear productos.
- Una integración interna puede requerir además una API key.

Un error frecuente es autenticar al usuario y asumir que eso alcanza. En una API real, cada endpoint sensible debería expresar su regla de autorización.

## 3. API keys

Una API key es una clave compartida que identifica una aplicación, servicio o integración.

Usos típicos:

- proteger endpoints internos;
- identificar una aplicación consumidora;
- aplicar límites de uso;
- habilitar integraciones simples servidor a servidor.

Limitaciones:

- si se filtra, cualquiera que la tenga puede usarla;
- no representa por sí sola a una persona;
- debe rotarse y almacenarse como secreto;
- no debería escribirse fija en el código.

En esta clase usamos `x-api-key` para representar una integración interna que administra productos.

## 4. Bearer tokens

Un Bearer token es una credencial enviada normalmente en el header:

```http
Authorization: Bearer eyJhbGciOiJSUzI1NiIs...
```

En esta clase usamos access tokens JWT emitidos por Auth0. La API no genera esos tokens: actúa como Resource Server y valida que el token sea confiable antes de ejecutar la acción.

La validación mínima incluye:

- leer el header `Authorization`;
- validar que el token fue emitido por el issuer esperado;
- validar que el audience corresponde a nuestra API;
- verificar firma y expiración;
- aplicar scopes sobre las rutas protegidas.

La idea importante es que las rutas no deberían duplicar lógica de autenticación. Esa lógica vive mejor como middleware.

## 5. Scopes, roles y permisos

Un scope expresa qué permiso trae un access token para una API determinada. Para el taller usamos:

| Scope | Puede hacer |
|---|---|
| Público | Consultar salud y productos. |
| `write:pedidos` | Crear pedidos. |
| `confirm:pedidos` | Confirmar pedidos. |
| `admin:productos` | Crear productos y modificar catálogo. |

En sistemas reales, los roles pueden convivir con permisos más finos:

- `productos:crear`;
- `pedidos:confirmar`;
- `pedidos:cancelar`;
- `reportes:leer`;
- `pagos:reintentar`.

La decisión depende del dominio, del riesgo y de la cantidad de integraciones.

## 6. Códigos HTTP de seguridad

| Código | Cuándo usarlo |
|---|---|
| `401 Unauthorized` | Falta credencial o la credencial es inválida. |
| `403 Forbidden` | La credencial es válida, pero no tiene permisos suficientes. |
| `409 Conflict` | La acción entra en conflicto con el estado actual del recurso. |
| `500 Internal Server Error` | Falla inesperada o configuración interna faltante. |

Ejemplos:

- Crear pedido sin token: `401`.
- Crear producto con API key válida pero sin scope `admin:productos`: `403`.
- Confirmar dos veces el mismo pedido: `409`.
- API key esperada no configurada en el servidor: `500`.

## 7. Secretos y variables de entorno

Un secreto es un dato que no debe publicarse:

- API keys;
- tokens;
- passwords;
- cadenas de conexión con credenciales;
- claves privadas.

Buenas prácticas mínimas:

- guardar secretos en `.env` durante desarrollo local;
- subir `.env.example` con nombres de variables, no valores reales;
- agregar `.env` a `.gitignore`;
- documentar cómo configurar el proyecto;
- rotar claves si fueron expuestas.

El archivo `.env.example` es parte del contrato operativo del proyecto. Le dice a otra persona qué necesita configurar para ejecutar la API.

## 8. Seguridad como diseño de acciones

Pensar seguridad endpoint por endpoint ayuda, pero no alcanza. Conviene pensar en acciones de negocio:

| Acción | Riesgo | Protección |
|---|---|---|
| Consultar productos | Bajo | Público, con límites si hace falta. |
| Crear pedido | Medio | Usuario autenticado. |
| Confirmar pedido | Medio/alto | Usuario autenticado, estado pendiente, idempotencia o control de conflicto. |
| Crear producto | Alto | Admin o integración interna. |
| Cambiar stock | Alto | Admin, auditoría y validaciones. |
| Reintentar pago | Alto | Permiso específico, idempotencia y trazabilidad. |

Esta mirada se conecta directamente con integración: un endpoint puede ser llamado por un navegador, una app mobile, un servicio backend, un job programado, un Webhook o un agente de IA.

## 9. IA/MCP: la pregunta recurrente

Pregunta guía:

```text
¿Qué pasaría si esta acción la ejecuta un agente de IA?
```

Si un agente puede llamar a una API, la API necesita:

- contratos claros;
- permisos acotados;
- validaciones de negocio;
- límites de alcance;
- auditoría;
- errores interpretables;
- acciones reversibles o confirmables cuando el riesgo sea alto.

No alcanza con confiar en que el agente "entienda" lo que hace. La API debe proteger el dominio aunque el consumidor se equivoque.

## 10. Checklist de seguridad mínima para el TPI

Cada equipo debería poder responder:

- ¿Qué endpoints son públicos?
- ¿Qué endpoints requieren Bearer token?
- ¿Qué scopes requiere cada acción protegida?
- ¿Qué audience e issuer valida la API?
- ¿Cómo se obtiene un token con `client_credentials`?
- ¿Qué secretos usa el proyecto?
- ¿Dónde están documentadas las variables de entorno?
- ¿Qué pasa si falta un token?
- ¿Qué pasa si el token existe pero no tiene permisos?
- ¿Qué acciones deberían quedar auditadas?

## Glosario

| Término | Definición breve |
|---|---|
| Autenticación | Proceso para identificar quién hace el request. |
| Autorización | Proceso para decidir qué puede hacer quien hace el request. |
| API key | Clave compartida para identificar una aplicación o integración. |
| Bearer token | Credencial enviada en `Authorization` que permite acceder a recursos protegidos. |
| Audience | Identificador de la API para la cual fue emitido un access token. |
| Issuer | Servidor de autorización que emitió el token. |
| Scope | Permiso incluido en el access token para limitar qué puede hacer el cliente. |
| Rol | Categoría que agrupa permisos. |
| Middleware | Función intermedia que procesa un request antes del controlador. |
| Secreto | Dato sensible que no debe publicarse. |
| Superficie de ataque | Conjunto de puntos por donde un sistema puede ser abusado o comprometido. |
| Auditoría | Registro de quién hizo qué, cuándo y con qué resultado. |
| Idempotencia | Propiedad de una operación que permite repetirla sin provocar efectos duplicados. |
