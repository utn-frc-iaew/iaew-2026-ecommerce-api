# Demo guiada · Probar antes de entregar el TPI

**Fecha:** 02/11/2026. **Modalidad:** demostración durante la clase, sin entrega individual. El docente ejecuta; el curso anticipa resultados, observa y discute. No se solicita presentar colección, informe ni ZIP.

La clase dura 120 minutos. El recorrido central ocupa 45 minutos y la demo Artillery otros 15; preparación e instalación se realizan antes de clase por el docente. Los recursos quedan para consulta y repetición opcional.

## Preparación docente previa

Usar el laboratorio integrado de Clase 07: API `http://localhost:3008`, MongoDB, RabbitMQ y worker activos. No usar la API simplificada de Cloud. Preparar token Auth0 real con audience `https://iaew-pedidos-api` y scopes `read:pedidos write:pedidos confirm:pedidos`; API key para alta de productos. No mostrar ni publicar credenciales.

Desde `recursos`, preparar dependencias y copias locales:

```bash
npm ci
cp entorno.example.json entorno.local.json
cp coleccion-inicio.json coleccion-demo.json
```

Completar el entorno privado, importar las copias en Postman y seleccionar el entorno. El docente conserva su resolución de respaldo fuera del repositorio público. La base tiene tres bloques pendientes para desarrollar en pantalla. Node.js 20+ para Newman; Node.js 22.13+ y dependencias separadas para Artillery.

## A · Plantear precondiciones y expectativas (5 min)

Mostrar cómo se genera un runId y se capturan productoId, pedidoId y eventId. Producto con stock 10, pedido de una unidad. Preguntar qué resultados espera el curso antes de ejecutar.

| Caso | Resultado que vamos a observar |
|---|---|
| Health | 200, acredita disponibilidad |
| Crear producto y pedido | 201, IDs nuevos y pedido pendiente |
| Confirmar | 200, confirmado, replayed false |
| Repetir misma clave | 200, replayed true y mismo evento |
| Otra clave en pedido confirmado | 409, IDEMPOTENCY_KEY_MISMATCH |
| Token inválido | 401, TOKEN_INVALID |
| Leer producto | Stock 9 y tipos correctos |
| Pedido sin items | 400, ORDER_ITEMS_REQUIRED |
| Consultar efecto del worker | notificacionEstado procesada, con límite de consultas |

## B · Construir las aserciones en pantalla (15 min)

En Scripts → Post-response, el docente reemplaza los tres bloques `TODO_ALUMNO_...` de la base: son identificadores técnicos del recurso, no una tarea individual.

- Replay: comparar replayed, eventId y header Idempotency-Replayed.
- Conflicto: comprobar código de aplicación y retryable false, además del 409.
- Contrato y stock: localizar el producto propio, comprobar existencia, tipos y stock 9.

Explicar `.to.eql`, `.to.be.a`, variables y lectura de headers usando el ejemplo de la presentación. Pedir al curso que justifique cada expectativa. Conservar setup, captura de datos y polling. Exportar como v2.1 a `coleccion-demo.json`; no exportar credenciales.

## C · Ejecutar, provocar un fallo y restaurar (10 min)

```bash
npm run pruebas -- coleccion-demo.json
```

Mostrar dos corridas con datos nuevos. El runner guarda `evidencias/resumen.json`, sin cuerpos, headers ni credenciales. Salida 0: sin fallos del escenario; salida 1: error o aserción incumplida.

Cambiar solo stock esperado 9→8, volver a exportar v2.1 y ejecutar. Identificar el fallo y guardar su reporte con otro nombre. Restaurar 9, exportar y volver a ejecutar. Este cambio prueba sensibilidad de la aserción; no es una regresión del backend. Preguntar qué pasaría si se edita Postman pero no se vuelve a exportar.

## D · Interpretar compatibilidad (10 min)

```bash
node compatibilidad.cjs
```

Leer el ejemplo: campo adicional aceptado por este consumidor; cambio de total numérico a string detectado. Es un fixture, no una petición real. Discutir un cambio compatible, una ruptura y una estrategia de migración en un dominio del TPI, sin exigir producción escrita individual.

## E · Revisar la evidencia (5 min)

El docente muestra reporte final, fallo deliberado y matriz observada. El curso explica qué se probó y qué queda fuera: concurrencia de confirmaciones, atomicidad multi-documento, outbox, AWS y configuración real de Auth0 si no se usó. La plantilla de evidencia es solo un apoyo opcional; no se entrega.

## Demo Artillery · ¿Cumplimos el tiempo objetivo? (15 min)

Seguir [el escenario y la guía](recursos/carga/README.md). El docente ejecuta desde `recursos/carga`:

```bash
npm run carga
```

Objetivo didáctico previo: `http.total.p95 < 300 ms` y todas las respuestas 200. Son 40 s de generación: base a 1 llegada/s, rampa 1→5 y sostenida a 5. Cada llegada realiza GET /productos. Llegadas/s no equivale a usuarios concurrentes. El tiempo total no es TTFB ni renderizado de interfaz.

Leer objetivo, carga, p95, códigos y dictamen con el curso. Si pasa, cumple en esta corrida y entorno; si falla, conservar el reporte e investigar. El resultado agregado no garantiza cada fase por separado ni capacidad máxima.

## Si falla el entorno durante la demo

- Sin conexión: comprobar Docker, API y puerto 3008.
- 401: comprobar token vigente/issuer/audience o API key según la ruta.
- 403: comprobar scopes.
- 503 al confirmar: revisar estado y logs antes de reintentar; puede haber confirmación persistida sin publicación.
- Worker sin efecto: revisar worker/broker/cola; el polling termina con fallo en vez de esperar indefinidamente.

Usar la evidencia docente previamente comprobada como respaldo, nombrándola como tal. Un fixture o una captura anterior no demuestra que el entorno actual funcionó.

## Relación con el TPI y cierre

La actividad del día es una demo y no se presenta. El TPI mantiene sus entregables grupales y fecha 16/11; su consigna menciona carga con JMeter o Postman. Mostrar Artillery no modifica automáticamente esa consigna. El 09/11 no se asigna actividad.

Al terminar, el docente detiene el entorno descartable con `docker compose down`. `down -v` borra los volúmenes: usarlo solo después de conservar la evidencia necesaria.
