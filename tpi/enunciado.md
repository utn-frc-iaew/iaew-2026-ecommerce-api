# Trabajo Práctico Integrador - IAEW 2026

## Objetivo

Construir una solución de software integrada que resuelva un caso de negocio mediante una API REST, persistencia, seguridad con OAuth 2.0/JWT, un flujo asincrónico, una integración adicional, observabilidad, pruebas y documentación reproducible.

El trabajo no se evalúa solo por tener endpoints funcionando. Se evalúa que el equipo pueda diseñar una arquitectura coherente, justificar decisiones técnicas, proteger acciones sensibles, integrar componentes, demostrar evidencias y explicar el sistema en una defensa técnica breve.

## Modalidad

- Trabajo grupal.
- Equipos sugeridos: 3 a 5 integrantes.
- Un repositorio por equipo.
- Cada equipo debe elegir un dominio y registrarlo con la cátedra para evitar que todos trabajen sobre el mismo caso.
- Dos entregas principales.
- Defensa técnica presencial al final de la cursada.
- Documentación obligatoria en el `README.md` del repositorio, complementada por una carpeta `docs/` para diagramas, ADRs, OpenAPI, capturas o reportes.

## Fechas

| Entrega | Fecha | Propósito |
|---|---|---|
| Entrega 1 | Lunes 28/09/2026 | Diseño, arquitectura inicial y esqueleto ejecutable. |
| Entrega 2 | Lunes 16/11/2026 | Implementación final, evidencias, demo y defensa. |

## Alcance mínimo obligatorio

El proyecto final debe incluir:

- API REST sobre HTTP con recursos, métodos y códigos de estado correctos.
- Contrato documentado de la API: OpenAPI 3.1, colección HTTP o documentación equivalente.
- Persistencia en MongoDB, SQL u otra base aprobada por la cátedra.
- Al menos 3 entidades de negocio.
- Al menos 8 endpoints relevantes.
- CRUD de al menos 2 entidades.
- Una transacción o flujo multi-paso de negocio.
- Seguridad con OAuth 2.0/JWT usando Auth0 o un servidor de autorización equivalente.
- Scopes aplicados a operaciones protegidas.
- Un ejemplo mínimo de `api_key` para una integración interna simple.
- Un flujo asincrónico o diferido con efecto visible.
- Una integración adicional: Webhook, gRPC, WebSocket o equivalente aprobado.
- Variables de entorno y `.env.example`.
- Ejecución local reproducible.
- Evidencias de pruebas.
- Evidencias de observabilidad.
- README técnico completo.
- Defensa presencial con demo.

## Seguridad esperada

Cada equipo debe:

- Configurar una API en Auth0 o servicio SaaS equivalente de gestión de identidad.
- Definir scopes de la API según el dominio, por ejemplo `read:pedidos`, `write:pedidos`, `confirm:pedidos`, `admin:productos`.
- Crear una aplicación cliente de tipo Machine to Machine.
- Asignar permisos/scopes a ese cliente.
- Obtener un access token usando el flujo OAuth 2.0 `client_credentials`.
- Validar en la API el JWT recibido en el header `Authorization: Bearer <token>`.
- Verificar issuer, audience, expiración y firma del token.
- Autorizar endpoints según scopes.
- Documentar en el README cómo configurar Auth0, qué scopes existen y cómo probar cada operación protegida.
- Incluir un ejemplo básico de endpoint protegido con `api_key`, usando un header como `x-api-key`.

No se deben subir secretos reales al repositorio. El proyecto debe incluir `.env.example` con nombres de variables y valores de ejemplo.

## Entrega 1 - Diseño y esqueleto integrador

**Fecha:** lunes 28/09/2026.

### Qué entregar

- Nombre del equipo e integrantes.
- Dominio elegido y problema que resuelve.
- Alcance funcional inicial.
- Al menos 3 entidades principales.
- Una operación de negocio que no sea solamente CRUD.
- Tabla inicial de endpoints previstos.
- Matriz inicial de permisos por rol o scope.
- Scopes OAuth 2.0 previstos para el dominio.
- Estrategia de uso de Auth0 o proveedor equivalente.
- Caso mínimo donde se usará `api_key`.
- Diagramas C4 iniciales: Context y Container. Component puede entregarse si el diseño ya está maduro.
- Modelo de datos inicial: SQL o NoSQL.
- Decisiones técnicas en formato ADR breve sobre API, base de datos, seguridad e integración.
- Contrato inicial de API: OpenAPI 3.1, colección HTTP o tabla de endpoints con ejemplos.
- Esqueleto ejecutable con `GET /health`.
- `.env.example` sin secretos reales.
- README inicial con pasos de ejecución local.
- Estrategia de ejecución reproducible: comandos, versiones requeridas y `docker-compose.yml` si el proyecto ya necesita levantar varios servicios.

### Resultado mínimo esperado

```text
npm install
npm run dev
GET /health -> 200 OK
```

Si el equipo usa otra tecnología, debe documentar comandos equivalentes.

## Entrega 2 - Implementación final y defensa

**Fecha:** lunes 16/11/2026.

### Qué entregar

- Código de todos los componentes.
- API REST operativa.
- CRUD de al menos 2 entidades.
- Al menos 1 transacción o flujo multi-paso de negocio.
- Validación JWT contra Auth0 o proveedor equivalente.
- Autorización por scopes en endpoints protegidos.
- Flujo OAuth 2.0 `client_credentials` probado desde Postman, Newman, cURL o cliente equivalente.
- Ejemplo mínimo de `api_key` funcionando y documentado.
- Separación entre acciones públicas, acciones protegidas y acciones administrativas.
- Flujo asincrónico productor -> broker -> consumidor, o equivalente aprobado por la cátedra, con efecto visible en la demo.
- Una integración adicional: Webhook, gRPC, WebSocket o equivalente aprobado.
- Persistencia con datos reproducibles: seed, migraciones o script de carga según corresponda.
- Validación de entrada y manejo consistente de errores.
- Contenedores por servicio cuando corresponda.
- `docker-compose.yml` funcional para levantar API, base de datos, broker/worker y visualizadores si se usan.
- Observabilidad mínima: logs JSON, correlation ID y al menos una métrica o vista de negocio.
- Pruebas de integración mediante Postman/Newman, colección HTTP equivalente o suite automatizada.
- README final completo y reproducible.
- Tag o release de entrega y hash de commit documentado en el README.
- Demo y defensa técnica.

## Criterios de evaluación

| Criterio | Puntaje | Qué se observará |
|---|---:|---|
| Funcionalidad end-to-end | 2.5 | CRUD de dos entidades, flujo multi-paso, flujo asincrónico e integración funcionando. |
| Diseño y arquitectura | 2.0 | Diagramas, separación de componentes, modelo de datos, ADRs y coherencia entre diseño y código. |
| API y seguridad | 1.5 | Contrato, recursos, códigos HTTP, Auth0/OAuth 2.0, JWT, scopes y protección de acciones sensibles. |
| Observabilidad y pruebas | 1.5 | Logs correlacionables, métricas o evidencias de diagnóstico, colección/suite ejecutable y casos exitosos/fallidos. |
| README y reproducibilidad | 1.5 | Pasos claros, `.env.example`, seed, comandos, Compose si corresponde, evidencias, tag y commit. |
| Defensa técnica | 1.0 | Demo funcional, explicación clara, participación del equipo y justificación de decisiones. |

**Aprobación:** 6/10 o más, con demo defendible y ejecución reproducible.

## Checklist obligatorio del README

- Proyecto, dominio elegido e integrantes.
- Descripción del problema y alcance.
- Arquitectura en un vistazo: diagrama C4 o link a `docs/`.
- Requisitos previos.
- Variables de entorno y explicación de `.env.example`.
- Configuración de Auth0 o proveedor equivalente: API, audience, issuer, scopes, cliente Machine to Machine y permisos.
- Cómo obtener un token con `client_credentials`.
- Cómo probar endpoints protegidos con Bearer token.
- Cómo probar el ejemplo con `x-api-key`.
- Comandos para levantar localmente.
- Cómo cargar datos iniciales.
- Cómo ejecutar pruebas.
- Cómo disparar el flujo asincrónico y dónde ver el efecto.
- Cómo probar la integración elegida.
- Cómo observar el sistema: logs, correlation ID, dashboard o métricas.
- Endpoints principales y ejemplos de uso.
- Decisiones técnicas principales o links a ADRs.
- Limitaciones conocidas y mejoras futuras.
- Tag/release y hash de commit de la entrega.

## Optativos con bono

- Despliegue en nube usando AWS Academy u otro entorno aprobado.
- BFF o GraphQL además de REST.
- Métricas y trazas con OpenTelemetry exportadas a Jaeger/Grafana.
- CI con ejecución automática de linters, tests o colección Newman.
