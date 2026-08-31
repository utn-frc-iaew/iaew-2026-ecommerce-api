# Trabajo Práctico Integrador - IAEW 2026

## Presentación

El Trabajo Práctico Integrador es un proyecto grupal donde cada equipo diseña e implementa una API integrada sobre un caso de negocio. No se evalúa solo que los endpoints funcionen: se evalúa la capacidad de diseñar contratos claros, proteger acciones sensibles, integrar componentes y justificar decisiones técnicas.

El TPI acompaña el resto de la cursada. Cada clase aportará una pieza posible del proyecto: seguridad, eventos, resiliencia, observabilidad, documentación, testing, cloud e integraciones entre servicios.

## Modalidad

- Trabajo grupal.
- Equipos sugeridos: 3 a 5 integrantes.
- Repositorio por equipo.
- Defensa breve al final de la cursada.
- Dos entregas principales: diseño/esqueleto y entrega final con defensa.

## Dominios posibles

Cada equipo puede elegir uno de estos dominios o proponer otro equivalente:

| Dominio | Acciones principales | Integraciones posibles |
|---|---|---|
| Pedidos en restaurante con cocina | Crear pedido, confirmar, enviar a cocina, actualizar estado. | Cocina, pagos, notificaciones, tablero de seguimiento. |
| E-commerce simplificado | Catálogo, carrito, pedido, pago, envío. | Pago, stock, logística, email, observabilidad. |
| Turnos médicos | Alta de paciente, reserva, confirmación, recordatorio. | Agenda, notificaciones, historia clínica simulada. |
| Mesa de ayuda | Crear ticket, asignar, escalar, cerrar. | Notificaciones, SLA, métricas, bot interno. |
| Biblioteca o préstamos | Registrar usuario, prestar, devolver, reservar. | Catálogo, alertas, penalidades, reportes. |
| Eventos y entradas | Publicar evento, comprar entrada, validar ingreso. | Pago, QR, control de acceso, reportes. |

Cada equipo debe registrar el dominio elegido con la cátedra para evitar que todos trabajen sobre el mismo caso.

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
