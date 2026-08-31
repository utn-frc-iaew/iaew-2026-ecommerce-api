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

Recomendación de la cátedra: **Pedidos en restaurante con cocina**. Es un caso rico para CRUD, estados, eventos, WebSockets, Webhooks, observabilidad y seguridad aplicada a integraciones.

## Alcance mínimo

El proyecto final debe incluir:

- API REST con Node.js y Express o tecnología equivalente aprobada por la cátedra.
- Persistencia en MongoDB u otra base aprobada.
- Al menos 3 entidades de negocio.
- Al menos 8 endpoints relevantes.
- Seguridad con OAuth 2.0/JWT usando Auth0 o proveedor equivalente.
- Scopes aplicados a operaciones protegidas.
- Ejemplo mínimo de `api_key` para una integración interna simple.
- Separación entre acciones públicas, privadas y administrativas.
- Al menos una integración asincrónica o simulación documentada de integración.
- Documentación de API mediante OpenAPI, colección HTTP o equivalente.
- Evidencias de pruebas de integración.
- Variables de entorno y `.env.example`.
- README técnico para ejecutar el proyecto.

## Entrega 1 - Diseño y esqueleto

Fecha: lunes 28 de septiembre de 2026.

Contenido esperado:

- Nombre del equipo e integrantes.
- Dominio elegido y problema que resuelve.
- Diagrama simple de contexto o componentes.
- Lista de entidades principales.
- Tabla de endpoints prevista.
- Matriz inicial de permisos por rol o scope.
- Scopes OAuth 2.0 previstos para el dominio.
- Estrategia de uso de Auth0 o proveedor equivalente.
- Esqueleto ejecutable con `GET /health`.
- `.env.example`.
- README con instrucciones de ejecución.
- Al menos 2 decisiones técnicas justificadas en formato ADR breve.

Resultado mínimo:

```text
npm install
npm run dev
GET /health -> 200 OK
```

## Entrega 2 - Implementación final y defensa

Fecha: lunes 16 de noviembre de 2026.

Contenido esperado:

- API funcionando.
- Persistencia funcionando.
- Seguridad aplicada a acciones de negocio con OAuth 2.0/JWT.
- Validación JWT contra Auth0 o proveedor equivalente.
- Autorización por scopes en endpoints protegidos.
- Flujo OAuth 2.0 `client_credentials` probado desde Postman, Newman, cURL o cliente equivalente.
- Ejemplo mínimo de `api_key` funcionando y documentado.
- Integración asincrónica, Webhook, WebSocket, cola, worker o simulación sólida.
- Documentación de endpoints.
- Evidencias de pruebas.
- Evidencias de observabilidad mínima: logs estructurados, correlation ID o métricas básicas.
- README final.
- Tag o release de entrega y hash de commit documentado en el README.
- Defensa oral breve con demo.

## Criterios de evaluación

| Criterio | Qué se observará |
|---|---|
| Diseño de API | Claridad de recursos, verbos HTTP, códigos de estado y contratos. |
| Integración | Capacidad de conectar componentes o simular integraciones con sentido técnico. |
| Seguridad | Protección de acciones sensibles, Auth0/OAuth 2.0, JWT, scopes, secretos y manejo de errores. |
| Persistencia | Modelo de datos razonable y operaciones consistentes. |
| Documentación | README, endpoints, variables y decisiones entendibles por otro equipo. |
| Testing/evidencia | Pruebas reproducibles y casos exitosos/fallidos. |
| Observabilidad | Capacidad de entender qué pasó cuando algo falla. |
| Defensa | Explicación clara, demo funcional y justificación de decisiones. |
