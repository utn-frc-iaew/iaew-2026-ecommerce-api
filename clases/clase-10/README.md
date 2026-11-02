# Clase 10 · Testing de integración y contratos

Lunes **2 de noviembre de 2026** · 120 minutos · demo guiada, sin entrega individual.

Una URL saludable no demuestra que una confirmación respete permisos, stock e idempotencia. Hoy retomamos el circuito integrado de Clase 07 para construir evidencia ejecutable. La API simplificada de Cloud de Clase 09 no contiene esas reglas.

1. [Presentación HTML](presentacion/index.html): 28 diapositivas, flechas para navegar, `P` para notas del orador.
2. [Material para estudiar](material-adicional/material-completo.md).
3. [Actividad única paso a paso](actividad-practica.md).
4. [Recursos: colección inicial, entorno y runner](recursos/README.md).

## Preparación docente antes de clase

Preparar Node.js 20+, Postman, Docker Compose y el [laboratorio integrado](../clase-07/recursos/laboratorio/README.md). API en `http://localhost:3008`, Auth0 con audience `https://iaew-pedidos-api` y scopes `read:pedidos write:pedidos confirm:pedidos`. Tener API y worker activos, token vigente y API key local. `npm ci` se ejecuta antes de los 45 minutos de demo guiada.

No se usa una nueva rama de aplicación: se retoma un laboratorio autocontenido existente. La carpeta `recursos/` contiene la colección inicial con tres grupos de aserciones por completar.

## Modalidad y participación

La actividad se desarrolla como demo en la clase. El docente ejecuta; los alumnos anticipan resultados, interpretan fallos y discuten conclusiones. No se solicita presentar colección, informe ni ZIP. Los archivos permiten repetir el recorrido opcionalmente; no hace falta que cada alumno instale el entorno para asistir.

El TPI conserva sus requisitos grupales y fecha 16/11. El 09/11 no se asigna actividad.

## Alcance verificado

Colección resuelta comprobada localmente con API, MongoDB, RabbitMQ, worker y emisor JWT de prueba. Auth0 real y AWS no fueron verificados en este ensayo.

## Demo de rendimiento

[Artillery: escenario y ejecución](recursos/carga/README.md), demo docente de 15 minutos. Objetivo previo: p95 < 300 ms y todas las respuestas 200. Preparar Node.js 22.13+ y dependencias antes de clase. No cambia la consigna TPI ni agrega otra entrega individual.
