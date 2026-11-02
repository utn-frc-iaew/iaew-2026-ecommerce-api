# Demo de carga · Artillery

**Objetivo:** comprobar si `GET /productos` cumple **p95 < 300 ms y todas las peticiones devuelven 200**, bajo la carga declarada. Es un objetivo didáctico fijado antes de medir; no es un SLA universal ni un nuevo requisito del TPI.

## Preparación docente antes de clase

Node.js **22.13+** (demo fijada en Artillery 2.0.27). Desde este directorio:

```bash
npm ci
```

Si `npm` ejecuta otra instalación de Node, verificá que su runtime cumpla 22.13+. Como alternativa directa, usá `node node_modules/artillery/bin/run run --output reporte-carga.json carga.yaml` desde este directorio.

Es un proyecto separado del runner Newman. La instalación se realiza antes de clase. Usamos la API y MongoDB del laboratorio Clase 07, con productos cargados. Este endpoint es una lectura pública; no necesita token. Mantener una cantidad de datos estable y registrar su tamaño aproximado. No usar `/health`: mide otro camino y no consulta productos.

## Ejecutar (40 s de generación + finalización)

```bash
npm run carga
```

El archivo `carga.yaml` define tres fases: 10 s a 1 llegada/s, 20 s de rampa 1→5 llegadas/s y 10 s a 5 llegadas/s. Cada usuario virtual hace un GET y termina. `arrivalRate` es **usuarios virtuales nuevos por segundo**, no usuarios simultáneos. La concurrencia observada depende de cuánto tarda cada escenario. No afirmar que se prueban cinco usuarios concurrentes.

El destino predeterminado es `http://localhost:3008`. Para otro puerto de un entorno propio:

```bash
npm run carga -- --target http://localhost:13010
```

`ensure` evalúa los umbrales al terminar. El resumen se muestra en terminal y queda en `reporte-carga.json`. Si no se cumple el umbral, el comando debe devolver un código distinto de cero; mirar `echo $?` inmediatamente después. Conservar salida y reporte aunque la prueba falle. No enviar esta carga a un sitio ajeno.

## Interpretar sin sobregeneralizar

- Comprobar primero requests, responses y códigos: una respuesta rápida con error no satisface el objetivo.
- Leer `http.total.p95` y comparar con 300 ms. El criterio es estricto: menor que 300.
- Revisar `http.request_rate` y las muestras por intervalo para describir la carga observada; no confundir tasa ofrecida con capacidad máxima.
- El umbral p95 es agregado de la corrida: no demuestra que cada fase individual cumpla. Para una comparación precisa, separar reportes por fase o revisar sus intervalos.
- Registrar fecha, commit, hardware/entorno, datos, escenario, versión Artillery, carga ofrecida, p95, errores y dictamen. Si el generador y la API comparten máquina, declararlo.
- Si pasa: satisface este objetivo con esta carga, datos y entorno. No prueba que soporte cualquier carga. Si falla: investigar red, API, DB y recursos; aumentar el umbral después de medir no demuestra una mejora.

## Comparación docente opcional, acotada

Para mostrar cómo reacciona la evaluación sin cambiar el servidor, hacer una copia temporal del YAML y cambiar el umbral a un valor menor que el p95 observado. Guardar un reporte distinto. Ese rechazo comprueba sensibilidad del criterio; **no** representa una regresión ni un nuevo benchmark.

Artillery es la herramienta de esta demo. La consigna TPI vigente menciona JMeter o Postman: no se la modifica aquí ni se afirma que esta demo la sustituya automáticamente. Si el grupo quiere entregar Artillery, acordar su aceptación con la cátedra.

Fuentes: [escenario y fases](https://www.artillery.io/docs/reference/test-script), [ensure](https://www.artillery.io/docs/reference/extensions/ensure), [ejecución y reporte](https://www.artillery.io/docs/reference/cli/run).

**Métrica elegida:** `http.total.p95`, habilitada con `http.extendedMetrics: true`, mide hasta recibir la respuesta completa en el generador. `http.response_time.p95` mide TTFB (primer byte) y no se usa para este umbral. Ninguna de las dos mide el renderizado de una pantalla en el navegador.
