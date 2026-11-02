# Clase 10 · Testing de integración y contratos

Lunes **2 de noviembre de 2026** · 120 minutos · actividad individual.

Una URL saludable no demuestra que una confirmación respete permisos, stock e idempotencia. Hoy retomamos el circuito integrado de Clase 07 para construir evidencia ejecutable. La API simplificada de Cloud de Clase 09 no contiene esas reglas.

1. [Presentación HTML](presentacion/index.html): 25 diapositivas, flechas para navegar, `P` para notas del orador.
2. [Material para estudiar](material-adicional/material-completo.md).
3. [Actividad única paso a paso](actividad-practica.md).
4. [Recursos: colección inicial, entorno y runner](recursos/README.md).

## Antes de clase

Preparar Node.js 20+, Postman, Docker Compose y el [laboratorio integrado](../clase-07/recursos/laboratorio/README.md). API en `http://localhost:3008`, Auth0 con audience `https://iaew-pedidos-api` y scopes `read:pedidos write:pedidos confirm:pedidos`. Tener API y worker activos, token vigente y API key local. `npm ci` se ejecuta antes de los 45 minutos de práctica.

No se usa una nueva rama de aplicación: se retoma un laboratorio autocontenido existente. La carpeta `recursos/` contiene la colección inicial con tres grupos de aserciones por completar.

## Entrega

Colección resuelta, reporte sin secretos y `evidencia.md`. La prueba de carga del TPI se prepara como trabajo grupal según su consigna; repetir iteraciones Newman no acredita concurrencia. No se cambia la fecha de Entrega 2: 16/11. No se asigna actividad para el 09/11.

## Alcance verificado

Colección resuelta comprobada localmente con API, MongoDB, RabbitMQ, worker y emisor JWT de prueba. Auth0 real y AWS no fueron verificados en este ensayo.
