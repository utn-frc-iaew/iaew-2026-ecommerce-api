# Actividad individual · Probar antes de entregar

**Fecha:** 02/11/2026. **Tiempo de práctica:** 45 minutos dentro de la clase de 120 minutos.

Vas a probar una confirmación completa, su reintento y sus efectos. Entregá una colección que otra persona pueda ejecutar, un reporte y una explicación del alcance. No alcanza con capturas de respuestas HTTP.

## Preparación antes de clase

1. Instalá Node.js 20+ y Postman. Verificá `node --version` y `docker compose version`.
2. Retomá el laboratorio integrado de Clase 07, no el laboratorio Cloud de Clase 09. Desde la raíz del repositorio de actividades:

```bash
cd clases/clase-07/recursos/laboratorio
```

Seguí su README para configurar Auth0 y levantar API, MongoDB, RabbitMQ y worker. La API se publica en `http://localhost:3008`; el sistema de observabilidad conserva su configuración anterior. No hace falta modificarlo. Verificá `docker compose ps` y `curl http://localhost:3008/health`. El JSON debe contener `status: "ok"`; esto todavía no acredita el flujo de negocio.

3. Obtené un access token real con el flujo `client_credentials` ya trabajado. Audience: `https://iaew-pedidos-api`. Scopes: `read:pedidos write:pedidos confirm:pedidos`. Usá las instrucciones Auth0 de las clases anteriores y tu cliente autorizado. No pegues el client secret en la colección. La API key es el valor configurado como `INTERNAL_API_KEY` del laboratorio: solo se usa para crear productos.
4. Descargá o copiá la carpeta `recursos` de esta clase. Desde esa carpeta ejecutá:

```bash
npm ci
cp entorno.example.json entorno.local.json
cp coleccion-inicio.json coleccion-alumno.json
```

`npm ci` instala exactamente las dependencias del lockfile. Las copias son los archivos que vas a editar; conservá los originales. En `entorno.local.json`, completá `accessToken` y `apiKey` sin imprimirlos en terminal; mantené `baseUrl=http://localhost:3008`. Estos archivos privados están excluidos de Git.

Copiá también `evidencia.example.md` como `evidencia.md` y completala durante A–D; reservá E para revisar y empaquetar los resultados.

## A · Reconstruí el escenario (5 min)

Importá `coleccion-alumno.json` y `entorno.local.json` en Postman; seleccioná ese entorno. En el Collection Runner ejecutá la colección completa en orden y elegí 500 ms de demora. Debe fallar en los tres bloques pendientes: eso es intencional en la base inicial. El runner de terminal rechaza esos marcadores antes de enviar tráfico.

| Paso | Petición | Resultado esperado |
|---|---|---|
| 01 | GET /health | 200 y status ok |
| 02 | POST /productos con x-api-key | 201, producto nuevo con stock 10 |
| 03 | POST /pedidos con Bearer | 201, pendiente y total 100 |
| 04 | POST /pedidos/:id/confirmar | 200, confirmado, replayed false |
| 05 | Mismo pedido y misma Idempotency-Key | 200, replayed true, mismo eventId |
| 06 | Mismo pedido y otra clave | 409, IDEMPOTENCY_KEY_MISMATCH |
| 07 | GET /pedidos con token malformado | 401, TOKEN_INVALID |
| 08 | GET /productos | Producto con stock 9 y tipos correctos |
| 09 | POST /pedidos con items vacío | 400, ORDER_ITEMS_REQUIRED |
| 10 | GET /pedidos, hasta 10 consultas | notificacionEstado procesada |

No edites IDs a mano. El paso 01 crea un `runId` nuevo y los pasos 02–04 guardan IDs obtenidos de respuestas. La colección crea datos nuevos en cada corrida; no toca pedidos de otros alumnos.

## B · Completá tres grupos de aserciones (15 min)

Editá **Scripts → Post-response** en estas peticiones, reemplazando el bloque que contiene `TODO_ALUMNO_...`. Usá el ejemplo explicado en la presentación:

```javascript
pm.test("Contrato del campo", () => {
  pm.expect(pm.response.json().campo).to.be.a("number");
});
```

1. **05 Repetir misma clave:** comprobar `idempotencia.replayed === true`; `evento.eventId` igual al guardado en `pm.collectionVariables.get("eventId")`; header `Idempotency-Replayed` igual a la cadena `"true"`.
2. **06 Otra clave mismo pedido:** comprobar `code === "IDEMPOTENCY_KEY_MISMATCH"` y `retryable === false`. Ya existe una aserción HTTP 409: conservala.
3. **08 Contrato y stock:** buscar el producto de esta corrida por `_id` en el array; comprobar que existe, `nombre` es string, `precio` es number y `stock === 9`. Buscar un objeto puede hacerse con `pm.response.json().find(x => x._id === pm.collectionVariables.get("productoId"))`.

Conservá las aserciones existentes, la captura de variables y el polling del worker. Eliminá los tres marcadores TODO y exportá la colección editada como **v2.1**, reemplazando `coleccion-alumno.json`. No exportes el entorno con credenciales.

## C · Ejecutá y provocá un fallo controlado (10 min)

Desde `recursos`:

```bash
npm run pruebas
```

El runner ejecuta todas las peticiones con 500 ms de demora y produce `evidencias/resumen.json`. Código de salida 0 significa que no hubo fallos en ese escenario. Repetí la corrida: debe crear datos distintos y volver a pasar.

Si editás desde Postman, después de cada modificación y de la restauración exportá otra vez en formato v2.1, reemplazando `coleccion-alumno.json`: Newman lee ese archivo, no la colección abierta. También podés editar directamente ese JSON con un editor.

Ahora cambiá **solo en la aserción de stock** el valor esperado de 9 a 8, guardá y ejecutá otra vez. Debe fallar esa aserción y el proceso debe terminar con código 1. En zsh/bash podés consultar `echo $?` inmediatamente después. Guardá ese reporte con otro nombre antes de restaurar el 9 y ejecutar la corrida final. No alteres el stock real ni la implementación.

Esta mutación comprueba que tu prueba detecta una diferencia; no es evidencia de una regresión real de la API. Si el proceso termina 0 con el valor incorrecto, revisá que exportaste la colección editada y no eliminaste la aserción.

## D · Evaluá una evolución de contrato (10 min)

```bash
node compatibilidad.cjs
```

Este archivo no envía HTTP: prueba fixtures que representan respuestas. Leé el código. Agregar `moneda` permite conservar el consumidor que tolera campos adicionales; cambiar `total` a string viola su expectativa numérica. El ejemplo termina 0 cuando detecta correctamente esa ruptura.

En `evidencia.md`, proponé un cambio compatible para tu TPI, uno incompatible y una estrategia para migrar consumidores si el segundo fuera necesario. No hace falta implementar una nueva versión de API hoy.

## E · Entregá (5 min)

Entregá un ZIP con:

- `coleccion-alumno.json`, sin TODO ni credenciales incrustadas.
- Reporte final `resumen.json` y reporte del fallo deliberado con otro nombre.
- `evidencia.md`: versión/commit de la API usada, entorno probado, matriz de resultados, fallo deliberado y restauración, decisión de compatibilidad y límites.

No incluyas `entorno.local.json`, tokens, API keys, client secrets ni `node_modules`. La colección usa variables; quien la repita debe configurar sus propias credenciales.

## Si algo falla

| Síntoma | Qué comprobar |
|---|---|
| ECONNREFUSED | Docker, API activa y puerto 3008; no usar el 8080 de Cloud |
| 401 en pasos con token válido | Vigencia, issuer, audience y Bearer; renovar el token |
| 403 | Scopes asignados al cliente y presentes en el token |
| 401 al crear producto | x-api-key y configuración INTERNAL_API_KEY |
| 409 inesperado | Orden de ejecución, runId y uso de la misma clave para el replay |
| 503 al confirmar | La operación puede haber confirmado sin publicar; revisar logs y estado antes de reintentar |
| Worker no llega a procesada | Worker, broker, cola y logs; el límite del polling evita esperar para siempre |
| Runner rechaza TODO | Exportar los scripts completos y eliminar sus marcadores |

Si tu entorno no funciona, trabajá las aserciones con el docente y registrá la ejecución pendiente. Leer o usar un fixture no acredita que tu sistema funcionó.

## Demo compartida · Carga y tiempos de respuesta (15 min, después de A–E)

Observá la ejecución docente y anotá objetivo, carga, p95, códigos y dictamen. Usamos [Artillery, escenario y guía](recursos/carga/README.md) sobre `GET /productos`. Objetivo didáctico previo: **p95 < 300 ms y todas las respuestas 200**. No es un umbral universal.

El docente prepara Node.js 22.13+ y las dependencias antes de clase. Desde `recursos/carga`, ejecuta `npm run carga`. Son 40 segundos de generación: base a 1 llegada/s, rampa 1→5 y sostenida a 5. Llegadas/s no equivale a usuarios simultáneos. La repetición local por alumnos es opcional; no agrega otra entrega ni requiere instalar Artillery dentro de los 45 minutos individuales.

Si pasa, cumple el objetivo en esa corrida. Si falla, registrar y diagnosticar; no aumentar el umbral para presentar éxito. El reporte agregado no acredita cada fase por separado. Artillery se muestra como herramienta; la consigna TPI no cambia automáticamente.

## Vínculo con el TPI

Cada grupo adapta esta técnica a su dominio y agrega evidencia ejecutable al README para la Entrega 2 del 16/11. La prueba de carga con reporte ya exigida por la consigna se diseña con JMeter o Postman; las iteraciones secuenciales de Newman no la sustituyen. Como extensión opcional, probar 403 con un token válido sin scope o investigar carreras concurrentes; no cambiar permisos ni realizar carga sobre sistemas ajenos.

Al terminar, conservá los datos solo si los necesitás como evidencia. En el laboratorio descartable de Clase 07 podés ejecutar `docker compose down` para detener sus servicios; `docker compose down -v` también borra sus volúmenes y solo corresponde si querés eliminar esos datos.
