# Clase 07 — Actividad práctica individual

## El problema que vas a investigar

Un cliente confirma un pedido y recibe HTTP `200`, pero el procesamiento posterior tarda demasiado. ¿Falló la API, la cola, el worker o una dependencia? ¿Es un pedido aislado o un problema general?

Vas a relacionar **una traza**, **los logs de esa traza** y **métricas del mismo servicio y período**. Después vas a observar una alerta y comprobar qué ocurre si el contexto deja de viajar entre servicios.

**Duración:** 45 minutos con las imágenes descargadas y el entorno preparado antes de clase. **Modalidad:** individual. El primer armado puede llevar más tiempo y se realiza como preparación. No se modifica la Entrega 1 del TPI ni se agrega una entrega en Moodle.

## Qué está preparado y qué vas a hacer

La carpeta [recursos/laboratorio](recursos/laboratorio/) contiene una base autocontenida de la API y el worker de `clase-06-inicio`, más la instrumentación y la infraestructura de observabilidad. Se conservan Auth0, `Idempotency-Key`, deduplicación, reintentos y DLQ. No hace falta completar clases anteriores para ejecutar este laboratorio.

La API es el productor; el worker procesa la notificación del pedido en MongoDB. «Llegar a cocina» es el escenario de negocio: no se incluye una aplicación de cocina.

| Preparado | Tu trabajo |
|---|---|
| SDK de OpenTelemetry, exportación OTLP, logger JSON y contexto AMQP | Leer el recorrido y comprobar los identificadores. |
| Compose con MongoDB, RabbitMQ, API, worker, LGTM y cAdvisor | Levantar, inspeccionar y detener servicios. |
| Grafana con fuentes, enlaces, dashboard y regla de alerta | Usar señales relacionadas para investigar. |
| Generador de escenarios | Comparar ejecuciones normales, lentas, rechazadas y repetidas. |
| Interruptor didáctico de propagación | Identificar qué se pierde y restaurar la configuración. |

No se exige instalar SigNoz, Elastic, Jaeger, Blackbox Exporter ni configurar notificaciones externas: son alternativas explicadas en la presentación.

## Contrato común

| Elemento | Valor |
|---|---|
| Confirmación | `POST /pedidos/{id}/confirmar` |
| Idempotencia | Header `Idempotency-Key`; repetición devuelve `Idempotency-Replayed: true`. |
| OAuth | Auth0, RS256, audience `https://iaew-pedidos-api`. |
| Scopes para el generador | `read:pedidos write:pedidos confirm:pedidos`. |
| Crear productos | API key local; no sustituye OAuth en `/pedidos`. |
| Evento | `pedido.confirmado`, versión `1`. |
| RabbitMQ | Exchange `pedidos.exchange`; routing key `pedido.confirmado`; cola `notificaciones.pedido-confirmado`. |
| Servicios instrumentados | `pedidos-api`, `pedidos-worker`. |
| Relación exacta log–traza | `trace_id`; `span_id` identifica una etapa. |
| Correlación de aplicación | `correlation_id`, transportado como `x-correlation-id`. |
| Relación con recursos | `compose_service` y ventana temporal; no `trace_id` como etiqueta. |
| Grafana | <http://localhost:3007> — laboratorio local: `admin` / `admin`. |
| API | <http://localhost:3008> |
| RabbitMQ Management | <http://localhost:15677> — `iaew` / `iaew-local`. |

Los puertos diferentes evitan interferir con entornos anteriores. MongoDB, AMQP y los backends de observabilidad quedan en la red interna de Compose.

## Preparación antes de clase

Necesitás Docker con Compose v2, un navegador y un access token real de tu aplicación Auth0. En Windows ejecutá los comandos desde WSL2 con integración Docker habilitada. No se necesita Node.js en el host: los scripts corren en contenedores.

Como referencia inicial, destiná 4 CPU y 6 GB de RAM al motor Docker, con espacio para descargar imágenes. Ajustá según el equipo y cerrá otros laboratorios propios que consuman recursos. Un arranque exitoso no garantiza que cAdvisor identifique los contenedores: esa comprobación está incluida abajo.

Desde el repositorio:

```bash
cd clases/clase-07/recursos/laboratorio
cp .env.example .env
```

En `.env`, completá tu `AUTH0_DOMAIN` y `ACCESS_TOKEN`. Usá el access token de las clases anteriores o pedilo desde la consola de Auth0 para tu aplicación M2M autorizada a la API. Su audience debe ser `https://iaew-pedidos-api` y debe contener los tres scopes de la tabla. No uses un ID token. Si expira, reemplazalo. No pegues el token en capturas, evidencias ni comandos compartidos.

Valores iniciales:

```dotenv
WORKER_DELAY_MS=0
SIMULATE_TRANSIENT_FAILURES=0
PROPAGATE_TRACE_CONTEXT=true
```

Prepará imágenes y entorno antes de clase:

```bash
docker compose up -d --build --wait --wait-timeout 300
```

Ese único comando construye la aplicación y cAdvisor, descarga las imágenes necesarias y levanta API, MongoDB, worker, RabbitMQ y LGTM (Grafana, Loki, Tempo, Prometheus y OpenTelemetry Collector). Las conexiones usan los nombres de servicio de la red de Compose. No hace falta iniciar procesos ni instalar Node.js fuera de Docker. El servicio `tools` se ejecuta bajo demanda para generar pedidos; Auth0 sigue siendo el proveedor externo de autenticación.

cAdvisor se construye desde el binario oficial `v0.60.6`, con checksum verificado para AMD64/ARM64. Esto evita depender del acceso al registro GHCR. RabbitMQ usa almacenamiento temporal: sus colas se pierden si se recrea el broker; MongoDB y LGTM conservan sus volúmenes. En la actividad recreamos API o worker, no el broker.

No ejecutes `compose.validation.yaml`: es una fixture docente de pruebas y no representa Auth0 real. El camino del alumno usa únicamente `compose.yaml`.

## A1 — Repaso operativo y comprobación del entorno · 5 minutos

```bash
docker compose ps
docker compose logs --tail=30 api worker
docker compose stats --no-stream
```

En el primer ingreso con la contraseña local por defecto, elegí **Skip** en la pantalla de cambio de contraseña del laboratorio.

Abrí Grafana y buscá el dashboard **IAEW · pedidos y contenedores**. También podés abrir <http://localhost:3007/d/iaew-clase07>.

1. Explicá la diferencia entre imagen, contenedor y volumen.
2. Ubicá en `compose.yaml` la red implícita y `RABBIT_URL`: `rabbitmq` es el nombre del servicio; no usamos `localhost` para conectar la API con el broker.
3. Verificá que **Scrape de cAdvisor** valga `1` y que aparezcan memoria y CPU de `api` y `worker`. En Docker Desktop se observa su VM Linux, no directamente el sistema macOS/Windows.

**Antes de seguir:** ubicá los seis servicios permanentes en Compose. LGTM agrupa Collector, Loki, Tempo, Prometheus y Grafana; `tools` corre bajo demanda y Auth0 es externo.

**Liveness y readiness en este entorno:** `/health` solo responde si el servidor HTTP atiende; no comprueba la conectividad actual con MongoDB o RabbitMQ. No implementamos endpoints separados `/live` y `/ready`. El healthcheck de Compose informa salud y `depends_on: service_healthy` ordena el arranque; un estado `unhealthy` no reinicia el contenedor ni retira tráfico automáticamente. El worker no tiene healthcheck: `--wait` comprueba que está en ejecución, no que ya está consumiendo. Verificá su log de inicio y, en A2, el procesamiento del pedido.

**Pregunta:** si MongoDB deja de responder después del arranque y `/health` sigue en `200`, ¿eso demuestra readiness para crear pedidos? No: la operación necesita DB aunque el proceso HTTP siga vivo. Es una pregunta conceptual; no hace falta detener MongoDB.

**Checkpoint:** API disponible, fuentes de Grafana configuradas y recursos de los contenedores visibles. Si faltan recursos, usá la sección de diagnóstico; un scrape en `1` puede coexistir con falta de series de un contenedor.

## A2 — Un pedido, una traza y sus logs · 8 minutos

```bash
docker compose run --rm tools node scripts/scenario.js normal
```

El script crea un producto y un pedido, confirma con una clave nueva y muestra `pedido_id`, `trace_id`, `correlation_id` y estado HTTP. Escribe `evidencias/normal.json` sin el token. Conservá los identificadores de esta ejecución: otro escenario `normal` reemplaza ese archivo.

Esperá aproximadamente 10–20 segundos para exportación e ingestión. En Grafana:

1. Abrí **Explore** y elegí **Tempo**.
2. Elegí **TraceQL**, pegá solamente el `trace_id` (los 32 caracteres hexadecimales) de la confirmación y ejecutá **Run query**. La versión del laboratorio reconoce ese valor como búsqueda directa por ID; otras versiones pueden mostrar una opción **Trace ID**.
3. Identificá `POST /pedidos/:id/confirmar`, `pedido.publicar` y `pedido.consumir`. Los dos primeros pertenecen a `pedidos-api`; el último a `pedidos-worker`.
4. Seleccioná el span consumidor y abrí **Related logs** (en la versión del laboratorio), **Logs for this span** o el enlace de logs del menú de la etapa. La etiqueta exacta puede variar con la versión de Grafana.
5. Verificá `pedido.processed`, el mismo `trace_id` y el `span_id` del consumidor.
6. Anotá quién creó cada ID: el SDK crea `trace_id` y cada `span_id`; la API crea `correlation_id` y lo transporta al worker. API/publicación/consumo tienen spans diferentes dentro de la misma traza.

**Pregunta:** la API respondió `200`, ¿ya terminó el worker? Justificá con la evidencia posterior, no solamente con la respuesta HTTP.

Consulta alternativa en **Loki** si no encontrás el enlace:

```logql
{service_name="pedidos-worker"} | trace_id = "PEGAR_TRACE_ID"
```

Reemplazá solamente `PEGAR_TRACE_ID`. `trace_id` es un campo/metadato de los registros, no una etiqueta indexada que agregamos a cada serie.

La instrumentación del laboratorio es manual: HTTP, publicación, consumo y dependencia simulada. No crea un span separado por cada consulta a MongoDB ni mide la espera en cola como una etapa propia.

Ahora leé [observability.js](recursos/laboratorio/src/lib/observability.js) y [rabbit.js](recursos/laboratorio/src/lib/rabbit.js). Ubicá:

- `messageHeaders`: inyecta contexto activo y correlación en headers AMQP.
- `messageContext`: extrae los headers en el worker.
- `withSpan`: inicia, termina y marca errores de las etapas.
- `log`: emite JSON y un registro OTLP con el contexto activo.

**Checkpoint:** una traza reúne API y worker, y desde ella podés encontrar logs del worker. Un HTTP `200` demuestra la confirmación; el log y el estado persistido permiten verificar el procesamiento posterior.

## A3 — Métricas, rechazo y repetición · 8 minutos

```bash
docker compose run --rm tools node scripts/scenario.js repeticion
docker compose run --rm tools node scripts/scenario.js rechazo
```

Resultados esperados:

- `repeticion`: primera confirmación `200`; segunda `200` con `replayed: "true"`. Conserva el evento y no publica otro: el contador de repeticiones HTTP sube, pero no debe agregarse un consumo por esa repetición.
- `rechazo`: confirmación sin `Idempotency-Key` → `400`. No se publica el evento ni se ejecuta el worker para ese pedido.

En el dashboard, compará contadores de confirmaciones y resultados del worker. No confundas `replayed` HTTP con `duplicate` del worker: este último requiere una entrega repetida del mismo evento, y aquí no la provocamos.

Consultas de apoyo en **Explore → Prometheus**:

```promql
sum by (result) (iaew_confirmations_total)
```

```promql
sum by (result) (iaew_worker_attempts_total)
```

```promql
sum by (compose_service) (
  container_memory_working_set_bytes{compose_service=~"api|worker"}
  and on(id, instance) (container_last_seen > time() - 15)
)
```

```promql
sum by (compose_service) (
  rate(container_cpu_usage_seconds_total{compose_service=~"api|worker"}[1m])
  and on(id, instance) (container_last_seen > time() - 15)
)
```

CPU está expresada en núcleos usados; memoria, en bytes. El filtro `container_last_seen` excluye instancias que dejaron de informar hace más de 15 segundos: al recrear servicios pueden quedar series históricas del contenedor anterior. Prometheus conserva solamente los contenedores de este laboratorio y su proyecto de validación. Las primeras series pueden necesitar dos scrapes para calcular `rate`. Los contadores pueden reiniciarse al recrear un proceso. Una categoría sin eventos puede no tener serie: ausencia no siempre equivale a cero.

Para interpretar p95: si 95 de 100 intentos duran 0,1 s y cinco duran 3 s, la media es 0,245 s y p95 por rango más próximo es 0,1 s. El 5 % más lento puede quedar fuera del p95; en el dashboard el valor se estima desde buckets, no desde una lista exacta de duraciones. Compará promedio y p95 sin tratarlos como equivalentes.

**Checkpoint:** explicá por qué el `400` esperado de negocio no debe contarse automáticamente como fallo técnico del servicio.

## A4 — Demora, reintento y alerta · 12 minutos

Editá `.env`:

```dotenv
WORKER_DELAY_MS=3000
SIMULATE_TRANSIENT_FAILURES=1
PROPAGATE_TRACE_CONTEXT=true
```

Recreá solamente el worker y generá doce pedidos:

```bash
docker compose up -d --no-deps --force-recreate worker
docker compose run --rm tools node scripts/scenario.js lento 12
```

La dependencia es **simulada**: un span de espera de 3 segundos, seguido de una falla transitoria en el primer intento de cada evento. El reintento conserva el contexto y luego procesa el pedido. No representa una dependencia externa ejecutada ni provoca saturación de CPU.

Elegí uno de los `trace_id` de `evidencias/lento.json`:

1. Encontrá `pedido.consumir` y su etapa hija `dependencia.simulada`.
2. Abrí sus logs: `pedido.failed`, `pedido.retry` y, posteriormente, `pedido.processed`.
3. Observá que la traza puede incorporar otro intento después de la petición HTTP. Esperá la actualización y volvé a consultar.
4. Compará la duración con CPU y memoria del worker en el mismo período. Una espera puede aumentar la latencia sin elevar la CPU.
5. En **Alerting → Alert rules**, abrí **Worker lento (promedio de intentos)**.

La regla está preparada con estos parámetros:

| Parámetro | Valor |
|---|---|
| Señal | Promedio de duración por intento del worker. |
| Ventana de cálculo | Últimos 2 minutos. |
| Umbral didáctico | Mayor que 1 segundo. |
| Frecuencia de evaluación | Cada 10 segundos. |
| Persistencia | 30 segundos. |
| Estados a observar | Normal → Pending → Firing/Alerting, cuando la condición persiste. |
| Primer paso de respuesta | Abrir trazas y logs; contrastar recursos y dependencia. |

La regla usa un promedio para que el experimento sea claro con poco tráfico. El dashboard también muestra p95 como estimación a partir del histograma; son medidas distintas. La presentación usa esta misma regla y sus mismos parámetros. Ventana, evaluación y persistencia cumplen funciones diferentes: cada 10 segundos se calcula el promedio de los últimos 2 minutos y se exige superar 1 segundo durante 30 segundos. Si la condición se mantiene: t=0 Pending, t=10 Pending, t=20 Pending, t=30 Firing; es una secuencia ilustrativa, no un horario garantizado.

Dejá procesar los pedidos durante aproximadamente 1–2 minutos y observá el estado. No hay contacto externo configurado: **firing no significa que se envió una notificación**. En producción harían falta una política, un contacto, un responsable y una guía de respuesta.

Restaurá `.env` y recreá el worker:

```dotenv
WORKER_DELAY_MS=0
SIMULATE_TRANSIENT_FAILURES=0
```

```bash
docker compose up -d --no-deps --force-recreate worker
docker compose run --rm tools node scripts/scenario.js normal 5
```

La recuperación depende de la ventana, el tráfico posterior y la evaluación. No esperes que la alerta se apague exactamente al reiniciar: si deja de haber intentos puede aparecer **No Data**. Explicá la diferencia entre normalidad y falta de telemetría.

**Pregunta:** si el intento tarda 3 segundos y la CPU es baja, ¿hay una contradicción? Explicá por qué una espera puede producir esa combinación; contrastá las métricas propias antes de concluir.

**Checkpoint:** una evidencia del intento lento, sus logs, recursos del mismo período y estado de la alerta, con una hipótesis que distinga demora simulada de saturación real.

## A5 — Romper y restaurar la correlación · 7 minutos

En `.env`, cambiá:

```dotenv
PROPAGATE_TRACE_CONTEXT=false
```

Recreá solamente la API y generá un pedido:

```bash
docker compose up -d --no-deps --force-recreate api
docker compose run --rm tools node scripts/scenario.js normal
```

Buscá el `trace_id` que devolvió la API. Esa traza ya no incluye el consumidor. Para encontrar el procesamiento del worker, consultá Loki por el `correlation_id` del resultado:

```logql
{service_name="pedidos-worker"} | json | correlation_id = "PEGAR_CORRELATION_ID"
```

En esos logs, compará el nuevo `trace_id` del worker. Completá dos filas: con propagación y sin propagación; en cada una, anotá trace_id de API, trace_id del worker, sus span_id y correlation_id. Con propagación, trace_id coincide y span_id cambia; sin ella, trace_id cambia y la correlación de aplicación se conserva. El interruptor quitó la propagación de OpenTelemetry, pero conservó intencionalmente `x-correlation-id`: todavía podemos relacionar registros de aplicación, aunque perdimos la continuidad de la traza.

Restaurá `PROPAGATE_TRACE_CONTEXT=true`, recreá la API y repetí un pedido normal:

```bash
docker compose up -d --no-deps --force-recreate api
docker compose run --rm tools node scripts/scenario.js normal
```

**Checkpoint:** explicá qué faltaba en el mensaje y por qué el logger por sí solo no podía reparar la traza.

## A6 — Evidencia y explicación · 5 minutos

Creá `evidencias/observabilidad-clase-07.md` con:

1. `pedido_id`, `trace_id` y período de la ejecución lenta.
2. Captura de la traza con API, publicación y consumo; captura de los logs de esa traza.
3. Captura de métricas del worker en ese período, con unidades e interpretación.
4. Estado y parámetros de la alerta. Explicá qué faltaría para notificar a una persona.
5. Comparación de identificadores con propagación activada y desactivada.
6. Un párrafo de diagnóstico: síntoma, alcance, etapa, hechos, hipótesis y comprobación posterior.

Como modelo de razonamiento: «La traza muestra una espera ~3 s en dependencia.simulada; los logs registran falla, reintento y procesamiento. La duración promedio aumenta. La configuración explica la espera y la falla transitoria; CPU y memoria deben contrastarse con mis capturas para evaluar saturación». Es un ejemplo guiado, no reemplaza tus mediciones.

Usá [la plantilla de evidencia](recursos/laboratorio/evidencias/plantilla.md). No entregues `.env`, access tokens, `node_modules` ni dumps de volúmenes. El resultado es individual; su modalidad de recepción se informa en clase.

## Diagnóstico de problemas

| Síntoma | Comprobación y acción |
|---|---|
| API devuelve `401` | Revisar expiración, issuer, audience y que sea access token. No compartirlo. |
| API devuelve `403` | Autorizar los scopes requeridos en Auth0 y obtener un token nuevo. |
| Contenedor sin arrancar | `docker compose ps` y `docker compose logs --tail=80 SERVICIO`. Reemplazar `SERVICIO`. |
| Grafana abre pero faltan señales | Esperar exportación; comprobar `OTEL_EXPORTER_OTLP_ENDPOINT`, salud de los backends y logs de API/worker. |
| Solo se ve API en la traza | Esperar el consumo y revisar headers, extracción de contexto y `PROPAGATE_TRACE_CONTEXT`. |
| Enlace de logs vacío | Usar la consulta Loki de A2; revisar `service_name`, `trace_id` y período. |
| cAdvisor tiene `up=0` | Revisar arranque, montaje de Docker y acceso del exporter. |
| `up=1`, pero faltan contenedores | Consultar `container_memory_working_set_bytes` sin filtro para ver etiquetas. En Desktop, revisar compatibilidad de cgroups y acceso al Docker de su VM; no dar por cumplido este checkpoint. Si Linux usa otro socket containerd, definir `CADVISOR_CONTAINERD_SOCKET` (por ejemplo `/rootfs/run/docker/containerd/containerd.sock`) y recrear cAdvisor. |
| `rate` o p95 sin datos | Esperar dos muestras y generar tráfico; revisar intervalo. |
| Alerta No Data | Verificar si existen intentos en la ventana. No interpretar ausencia como éxito. |
| Puerto ocupado | Modificar solamente el puerto del host en Compose y la URL usada; conservar puertos internos. |

Si cAdvisor no expone CPU y memoria identificables en el equipo del alumno, usá el entorno docente validado para esa evidencia y registrá la limitación. `docker compose stats` es diagnóstico inmediato, no reemplaza el historial ni permite completar por sí solo la evidencia de Grafana.

## Cierre del entorno

```bash
docker compose down
```

Se conservan los volúmenes nombrados y los archivos de evidencia. Para borrar **solo los datos de este laboratorio**, después de guardar la evidencia:

```bash
docker compose down -v
```

No uses comandos de limpieza global de Docker.

## Código completo y fuentes

- [Código y configuración completos de observabilidad](codigo-observabilidad.md).
- [API y worker de la base](recursos/laboratorio/src/).
- [Grafana LGTM](https://grafana.com/docs/opentelemetry/docker-lgtm/).
- [Propagación OpenTelemetry](https://opentelemetry.io/docs/concepts/context-propagation/).
- [Correlación Tempo–Loki](https://grafana.com/docs/grafana/latest/datasources/tempo/configure-tempo-data-source/configure-trace-to-logs/).
- [Prometheus y cAdvisor](https://prometheus.io/docs/guides/cadvisor/).
- [Evaluación de alertas Grafana](https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/).
