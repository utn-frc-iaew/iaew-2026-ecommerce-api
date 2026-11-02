# Testing de integración, contratos y compatibilidad

## 1. De infraestructura disponible a negocio comprobado

En Clase 09 trabajamos con una API simplificada, una imagen y recursos de nube. Una respuesta de `/health` permite saber que un proceso atiende; un destino healthy permite al balanceador enviarle tráfico. Ninguna de esas señales prueba que una confirmación descuente el stock correcto, que rechace credenciales inválidas o que el worker procese el evento.

Para esas preguntas retomamos el laboratorio integrado de Clase 07. No asumimos que las reglas de ese backend existan en la API de Cloud. El sistema bajo prueba contiene cliente HTTP, API, MongoDB, RabbitMQ y worker. La identidad proviene de Auth0; el cliente obtiene antes un access token. Las herramientas de observabilidad ayudan a explicar resultados, pero no sustituyen las aserciones.

## 2. Qué hace reproducible una prueba

Una prueba tiene precondiciones, una acción, un resultado esperado y un oráculo: la regla que compara lo observado con lo esperado. Una respuesta 200 puede ser insuficiente si el cuerpo muestra otro pedido o si se duplicó un efecto. La preparación debe crear datos identificables y controlar su estado.

Nuestra colección genera un identificador por corrida, crea un producto con stock 10, crea un pedido de una unidad y confirma. Guarda los IDs devueltos en vez de copiarlos a mano. Una segunda corrida crea otros datos. Esto permite repetir sin depender de una base vacía ni de los pedidos de un compañero. No acredita aislamiento transaccional frente a concurrencia: ese es otro escenario.

## 3. Niveles y alcance

Una prueba unitaria aísla una unidad pequeña, como el cálculo de un total. Una prueba de integración comprueba colaboración real entre componentes, por ejemplo API y MongoDB. Una prueba de contrato compara entradas y salidas con un acuerdo observable. Una prueba de extremo a extremo recorre un flujo definido completo, como confirmación, publicación, consumo y actualización de notificación.

Estas categorías pueden solaparse en una colección: un request puede comprobar estado HTTP y estructura, mientras una secuencia observa DB y worker. Llamar E2E a una prueba requiere definir sus extremos. La colección local no prueba ALB ni Fargate. Una firma JWT validada con un emisor de prueba no acredita configuración real de Auth0. Una ejecución exitosa cubre los escenarios y condiciones de esa ejecución.

## 4. Contrato: estructura y significado

El contrato incluye método y ruta, autenticación, permisos, headers, formatos, tipos, campos obligatorios, códigos de estado, errores y significado. OpenAPI permite describir una parte de ese acuerdo; observar respuestas con aserciones permite detectar divergencias. Escribir unas aserciones sobre campos consumidos no equivale a validar todo el documento OpenAPI.

```javascript
pm.test("Total numérico", () => {
  pm.expect(pm.response.json().total).to.be.a("number");
});
```

`pm.test` registra una prueba; `pm.expect` compara el valor real con una expectativa. Un nombre específico facilita diagnosticar. Comprobar solamente que un campo existe no detecta que cambió de número a cadena. Comparar respuestas enteras sin criterio puede producir fallos ante timestamps o campos nuevos legítimos.

### Del resultado a la aserción

En una confirmación, un extracto ilustrativo del cuerpo es `{ "pedido": { "estado": "confirmado" }, "evento": { "eventId": "..." } }`. El header `Content-Type` identifica el formato. Podemos verificar una condición de negocio y una de transporte:

```javascript
const b = pm.response.json();
pm.test("Pedido confirmado", () => {
  pm.expect(b.pedido.estado).to.eql("confirmado");
});
const tipo = pm.response.headers.get("Content-Type");
pm.test("Respuesta JSON", () => pm.expect(tipo).to.include("application/json"));
```

`.to.eql(valor)` compara igualdad; `.to.be.a("number")` verifica tipo; `.to.include(texto)` comprueba contenido. `pm.collectionVariables.set("nombre", valor)` conserva un dato para otra petición y `get("nombre")` lo recupera. Las respuestas reales completas están en la ejecución; los extractos de las diapositivas son ilustrativos y no resultados medidos.

Si editás en Postman, exportá otra vez la colección v2.1 después de cada modificación o restauración. Newman ejecuta el JSON en disco. Completar la plantilla `recursos/evidencia.example.md` durante la práctica permite reservar los últimos cinco minutos para revisar y empaquetar.

## 5. Compatibilidad y versionado

Un cambio es compatible respecto de un contrato y sus consumidores. Añadir un campo opcional suele ser compatible si los consumidores toleran propiedades adicionales. Eliminar un campo usado, renombrarlo o cambiar su tipo rompe a esos consumidores. Añadir un valor de enum puede romper un cliente que enumera todos los valores posibles.

El número 100 y la cadena "100" pueden parecer equivalentes en una pantalla, pero tienen contratos distintos. La cadena puede alterar sumas, serialización o validaciones. `compatibilidad.cjs` muestra un consumidor tolerante a campos adicionales y estricto con tipos. Son fixtures, no respuestas medidas del backend.

Versionar consiste en identificar y gestionar acuerdos distintos. Si una ruptura es necesaria, se documenta una nueva versión, se define convivencia, se ayuda a migrar y se comunica el retiro. Cambiar solo el prefijo de URL no migra los clientes. En la clase justificamos una decisión; no exigimos construir v2.

## 6. Idempotencia y errores de negocio

Idempotencia significa que repetir la misma operación conserva el efecto definido por el contrato. En nuestra confirmación, la clave identifica una operación sobre un pedido. No autentica al cliente y no se debe regenerar por cada reintento del mismo intento lógico.

| Situación | Resultado esperado en este backend |
|---|---|
| Primera confirmación de pendiente con stock | 200, replayed false, evento nuevo |
| Mismo pedido y misma clave después del éxito | 200, replayed true, mismo eventId |
| Pedido confirmado con una clave diferente | 409, IDEMPOTENCY_KEY_MISMATCH |
| Clave usada para otro pedido | 409, IDEMPOTENCY_KEY_REUSED |
| Stock insuficiente | 409, INSUFFICIENT_STOCK |

La práctica ejecuta las tres primeras filas; las dos últimas explican otros conflictos posibles, sin afirmarlos probados. El código de aplicación diferencia causas que comparten HTTP 409. Se comprueba además stock 9 después de confirmar y repetir. No comprobamos dos veces la misma respuesta sin observar el efecto.

Un 503 de publicación es especialmente relevante: el backend didáctico puede haber persistido la confirmación antes de fallar al publicar. Consultar el estado y revisar logs precede a decidir un reintento. Una clave estable no implementa automáticamente outbox ni recuperación de publicación. Tampoco elimina carreras entre actualizaciones multi-documento. Esos límites deben quedar documentados, no ocultos detrás de una corrida verde.

## 7. Identidad y permisos en las pruebas

El alta de productos usa `x-api-key`, tomada de `INTERNAL_API_KEY`. Los pedidos usan Bearer con token de Auth0 y audience `https://iaew-pedidos-api`. Consultar requiere `read:pedidos`, crear `write:pedidos` y confirmar `confirm:pedidos`.

Un token malformado produce 401: falla la autenticación. Un token válido sin permiso puede producir 403: la identidad se reconoce, pero no está autorizada. La actividad comprueba 401 con una petición específica; probar 403 necesita otro token autorizado con un conjunto menor de scopes y queda opcional. Las credenciales no se incluyen en el ZIP ni en Git.

## 8. Asincronía y observación acotada

Confirmar no significa que el worker haya terminado. La API publica el evento y responde; el consumidor procesa después de recibir el evento. El procesamiento y la recepción de la respuesta HTTP por el cliente no tienen un orden relativo garantizado. Exigir inmediatamente `notificacionEstado=procesada` puede generar una prueba frágil. Esperar indefinidamente oculta fallos.

La colección consulta los pedidos hasta encontrar el ID propio con estado procesada, con máximo de 10 consultas y una demora de 500 ms entre requests. Si no ocurre, falla una aserción con nombre explícito. El límite es una elección didáctica del ensayo, no una garantía de nivel de servicio. Una notificación procesada acredita ese efecto visible, no exactamente una entrega física del mensaje ni todas las garantías del broker.

## 9. Ejecución, diagnóstico y evidencia

Postman permite editar scripts en la pestaña Post-response y ejecutar la colección completa con su Runner. Newman ejecuta colecciones v2.1 desde terminal. El paquete de esta clase fija la versión con lockfile. El token se obtiene antes; no se depende del asistente OAuth de la interfaz.

El runner de clase rechaza marcadores pendientes y variables vacías. Devuelve 0 si Newman no informa fallos y 1 si hay error de ejecución o aserciones fallidas. `evidencias/resumen.json` guarda nombres, códigos HTTP y resultados de aserciones; omite cuerpos, headers y variables privadas.

Una caída de conexión exige revisar entorno. Una aserción fallida exige revisar contrato y resultado. Cambiar deliberadamente stock esperado de 9 a 8 comprueba sensibilidad de la prueba; restaurarlo y repetir comprueba la recuperación. Ese fallo artificial no debe presentarse como una regresión de implementación.

## 10. Carga y métricas para el TPI

Ejecutar una colección N veces en secuencia no representa N usuarios concurrentes. La prueba funcional controla un escenario; la prueba de carga declara concurrencia o tasa de llegada, rampa, duración, mezcla de operaciones, datos, entorno y condiciones de corte.

El TPI exige una prueba de carga con JMeter o Postman y un reporte, además de la colección y la observabilidad. Como diseño ilustrativo, comenzar con una línea base de un usuario y comparar con cinco usuarios durante 60 segundos con rampa de 30 segundos. No es una medición ni una exigencia nueva. Elegir una lectura evita que los datos y las carreras de confirmación confundan la primera medición.

p95 es el percentil bajo el cual queda aproximadamente el 95 % de las duraciones observadas; throughput es operaciones por unidad de tiempo. Error rate necesita un denominador y una definición: rechazos esperados en pruebas negativas se separan de errores inesperados bajo carga. Registrar también recursos y versión de aplicación. Definir umbrales antes de medir evita acomodar el criterio al resultado. Pocos datos o un host compartido limitan las conclusiones.

### Ejemplo numérico ilustrativo

Ordenemos 20 duraciones: 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 140, 150, 160, 180, 200, 220 y 800 ms. Con rango más cercano, p95 ocupa la posición `ceil(0.95 × 20) = 19`: 220 ms. El valor extremo de 800 ms ilustra una cola lenta. Otras herramientas interpolan percentiles; hay que declarar el método y la muestra. No son mediciones del laboratorio.

100 requests completadas en 10 segundos representan 10 requests/s; si dos fallaron de forma inesperada, la tasa de error de esa muestra es 2 %. Estas cifras solo enseñan la lectura de métricas, no constituyen umbrales de aprobación.

### Objetivos según el tipo de prueba

Unitaria: verificar una unidad. Integración: comprobar colaboración de componentes. Contrato: conservar el acuerdo observable de interfaz. Extremo a extremo: observar el resultado del circuito definido. Carga/rendimiento: evaluar objetivos de tiempos y errores bajo demanda declarada. Estas categorías se solapan: una medición rápida no acredita funcionalidad correcta.

### Demo con Artillery: del objetivo a la decisión

El escenario de `recursos/carga/carga.yaml` prueba `GET /productos` con datos estables. Acordamos antes **p95 < 300 ms y todas las peticiones con respuesta 200**. Es un umbral didáctico, no una condición universal ni un SLA añadido al TPI.

Artillery 2.0.27 queda fijado en un proyecto separado compatible con Node.js 22.13+. Sus fases ofrecen nuevas llegadas por segundo: base 10 s a 1/s, rampa 20 s de 1 a 5/s y sostenida 10 s a 5/s. Cada llegada inicia un usuario virtual que ejecuta un GET y termina. No son cinco usuarios concurrentes fijos: la simultaneidad depende de la duración de los escenarios.

`npm run carga` muestra resultados y escribe `reporte-carga.json`. `ensure` evalúa el umbral p95 y la condición de respuestas; un incumplimiento genera salida de error. Conservar el reporte, los códigos, las condiciones del entorno y el dictamen. Un p95 bajo con errores no satisface el objetivo. La evaluación es agregada, no una garantía por fase. El ensayo breve y local no mide capacidad máxima ni certifica producción.

La demo usa Artillery, pero el texto vigente del TPI sigue mencionando JMeter o Postman; otra herramienta debe acordarse con la cátedra. No cambiar la consigna por implicación.

## 11. Relación con agentes y defensa

Un agente que consume la API debe respetar el mismo contrato: permisos, clave estable, errores y consulta de estado ante incertidumbre. La IA puede ayudar a redactar pruebas, pero el equipo debe justificar precondiciones y oráculos. Una prueba débil generada automáticamente produce una falsa sensación de cobertura.

Para el 16/11 el equipo adapta las pruebas a su dominio y explica en el README cómo ejecutarlas, qué versión se usó, qué demuestran y qué queda pendiente. La actividad de clase es individual; no reemplaza todos los requisitos del TPI ni asigna actividad para el 09/11.

## Fuentes técnicas

- [Newman: formato, ejecución y límites](https://learning.postman.com/docs/reference/newman-cli/command-line-integration-with-newman/). La documentación vigente presenta también Postman CLI; conservamos Newman con colección v2.1 por el alcance de esta clase.
- [Scripts y aserciones Postman](https://learning.postman.com/docs/tests-and-scripts/write-scripts/test-scripts/).
- Contrato efectivo: rutas y modelos del laboratorio Clase 07; planificación y consigna TPI locales prevalecen sobre ejemplos genéricos.

Fuentes de la demo: [Artillery: fases](https://www.artillery.io/docs/reference/test-script), [umbrales ensure](https://www.artillery.io/docs/reference/extensions/ensure), [run y reporte](https://www.artillery.io/docs/reference/cli/run).

**Métrica elegida:** `http.total.p95`, habilitada con `http.extendedMetrics: true`, mide hasta recibir la respuesta completa en el generador. `http.response_time.p95` mide TTFB (primer byte) y no se usa para este umbral. Ninguna de las dos mide el renderizado de una pantalla en el navegador.
