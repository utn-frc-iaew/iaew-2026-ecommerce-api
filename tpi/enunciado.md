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

- API REST sobre HTTP con contrato OpenAPI 3.1: paths, schemas, responses y ejemplos.
- Seguridad con OAuth 2.0 + JWT: emisión/verificación, expiración y scopes o roles básicos.
- Asincronía productor -> broker -> consumidor con RabbitMQ, Kafka, SQS, EventBridge o equivalente aprobado, y caso visible en la demo.
- Una integración adicional: Webhook con callback firmado o secreto, gRPC con proto/stub o WebSocket con stream/suscripción.
- Datos SQL o NoSQL con migraciones/seed, validación de entrada y manejo de errores.
- Docker por servicio y Docker Compose funcional para levantar todo local.
- Observabilidad con logs JSON y dashboard con latencia p95, throughput y error rate.
- Pruebas con Postman collection y una prueba de carga con JMeter o Postman, con reporte.
- README completo y reproducible.
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

1. **Diagramas C4:** Context, Container y Component.
2. **ADRs:** decisiones clave sobre REST/gRPC, tipo de base de datos, seguridad y estilo de API.
3. **Contrato de API:** OpenAPI 3.1 en YAML/JSON con al menos un ejemplo de request/response.
4. **Modelo de datos:** SQL o NoSQL, más estrategia de migraciones o seed.
5. **Esqueleto de ejecución:** `docker-compose.yml` inicial con servicios `hello` o placeholder para API, DB y broker, más README con pasos mínimos de ejecución local.
6. **Evidencia de entrega:** tag de release `v1.0.0`, última commit hash en el README, archivo `.zip` descargado del repositorio y subido a la UV/Moodle.

## Entrega 2 - Implementación final y defensa

**Fecha:** lunes 16/11/2026.

### Qué entregar

1. **Código y API REST operativa:** todos los componentes del sistema, CRUD de 2 entidades y 1 transacción multi-paso funcionando.
2. **Seguridad:** OAuth 2.0 + JWT con expiración/validación y scopes o roles básicos aplicados a endpoints protegidos.
3. **Asincronía:** flujo productor -> broker -> consumidor con RabbitMQ, Kafka, SQS, EventBridge o equivalente aprobado, con un efecto visible como notificación, conciliación o proceso diferido.
4. **Integración adicional:** elegir 1 entre Webhook con firma/secreto compartido, gRPC con proto/stub sobre HTTP/2 o WebSocket con stream/suscripción.
5. **Ejecución local y datos:** Docker por servicio, Docker Compose funcional para levantar API, DB, broker y visualizadores si corresponde; DB SQL o NoSQL con migraciones/seed reproducibles.
6. **Observabilidad y pruebas:** logs estructurados JSON, dashboard con latencia p95, throughput y error rate; Postman collection con variables/ambientes y una prueba de carga con JMeter o Postman, con reporte.
7. **README, release y entrega:** README obligatorio en la raíz del repo, tag de release `v1.0.0`, última commit hash en el README, archivo `.zip` descargado del repositorio y subido a la UV/Moodle. La demo/defensa presencial dura 15 minutos por equipo: 10 minutos de demo y 5 minutos de preguntas.

## Criterios de evaluación

| Criterio | Puntaje | Qué se observará |
|---|---:|---|
| Funcionalidad end-to-end | 2.5 | CRUD de dos entidades, flujo multi-paso, flujo asincrónico e integración funcionando. |
| Diseño y arquitectura | 2.5 | C4 Context/Container/Component, despliegue consistente con el código y ADRs claras para broker, DB, seguridad y estilo de API. |
| API y seguridad | 1.5 | Contrato, recursos, códigos HTTP, Auth0/OAuth 2.0, JWT, scopes y protección de acciones sensibles. |
| Observabilidad y pruebas | 1.5 | Dashboard con latencia p95, throughput y error rate; logs correlacionables; Postman collection ejecutable y prueba de carga con resultados adjuntos. |
| README y reproducibilidad | 2.0 | README exhaustivo, Docker Compose de punta a punta, tag de release y commit hash incluidos. |

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
