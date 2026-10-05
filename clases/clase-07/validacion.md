# Validación — Clase 07

## Alcance y alineación

La presentación es la fuente del contrato docente. Guía, código, Compose, README y evidencia usan pedidos, OpenTelemetry, Loki, Tempo, Prometheus, Grafana y recursos de contenedores. Se conservan audience `https://iaew-pedidos-api`, scopes `read:pedidos write:pedidos confirm:pedidos`, `Idempotency-Key`, evento `pedido.confirmado` v1, reintentos y DLQ.

Agenda: 10 + 15 + 25 + 10 + 10 + 45 + 5 = 120 minutos. Práctico: 5 + 8 + 8 + 12 + 7 + 5 = 45 minutos, con descarga de imágenes y configuración Auth0 previas.

Las alternativas SigNoz, Elastic, Jaeger y Blackbox Exporter son conceptos de la presentación, no instalaciones obligatorias. La alerta ejecutable usa duración promedio > 1 s, ventana 2 min, evaluación 10 s y persistencia 30 s; el gráfico de la presentación usa estos mismos parámetros.

## Ejecutado correctamente

- `npm test`: siete pruebas de resiliencia aprobadas.
- `npm run check` y comprobación de sintaxis de todos los archivos JavaScript del laboratorio.
- `docker compose config --quiet`: configuración base y overlay docente válidos.
- Construcción de la aplicación y de cAdvisor 0.60.6 desde binario oficial ARM64 con checksum verificado.
- Arranque real de MongoDB, RabbitMQ, API, worker, LGTM y cAdvisor en proyecto aislado `iaew07-validacion` sobre Docker Desktop ARM64.
- Pedido normal: HTTP 200 y una misma traza con `pedidos-api` y `pedidos-worker`.
- Loki: logs del worker recuperados por el trace_id de la confirmación.
- Métricas de aplicación: confirmaciones, intentos y duración disponibles en Prometheus.
- CPU y memoria de API/worker disponibles desde cAdvisor; el dashboard filtra instancias que dejaron de informar y otros proyectos.
- Repetición: primera confirmación 200; segunda 200 con `Idempotency-Replayed: true`. Rechazo sin clave: 400.
- Doce pedidos con demora y falla transitoria: spans de dependencia simulada, reintentos y procesamiento posterior. Regla observada en Pending y Firing con health ok.
- Propagación desactivada: API y worker tuvieron trace_id distintos y conservaron correlation_id. Restauración comprobada con nuevas trazas compartidas.
- Navegador: login, dashboard, consulta directa por ID en TraceQL y enlace Related logs desde un span, con logs reales de esa traza.
- Versión inicial de presentación: 36 diapositivas y 36 notas; sin invasión del pie tras ajustar la agenda y la aclaración de la regla.
- Enlaces locales, ortografía y términos del contrato revisados.

## Límites de la evidencia

La autenticación de la prueba utilizó una fixture local con firma RS256, JWKS, audience y scopes, verificando el middleware real. **No se ejecutó contra un tenant Auth0 real.** La actividad del alumno usa Auth0 real; no usa el overlay de validación.

La dependencia lenta es una espera simulada, no un servicio externo medido ni una saturación de CPU. No se enviaron notificaciones externas; se comprobó el estado de la regla. AMD64, Linux nativo y WSL2 no fueron ejecutados en esta validación: se incluye binario AMD64 con checksum y diagnóstico para rutas de containerd.

La duración de 45 minutos es una planificación docente, no una medición con alumnos. Los ejemplos de las diapositivas siguen siendo ilustrativos. El registro de ejecución inicial se cerró antes de la publicación en GitHub. No se publicó en Moodle.

## Reproducir la validación docente

Desde `recursos/laboratorio`, sin usar secretos del alumno:

```bash
docker compose -p iaew07-validacion -f compose.yaml -f compose.validation.yaml build api cadvisor
docker compose -p iaew07-validacion -f compose.yaml -f compose.validation.yaml up -d --wait --wait-timeout 300
docker compose -p iaew07-validacion -f compose.yaml -f compose.validation.yaml run --rm tools node validation/scenario-client.js normal
```

Esperar ingestión y ejecutar:

```bash
docker compose -p iaew07-validacion -f compose.yaml -f compose.validation.yaml run --rm tools node validation/check-telemetry.js
```

Para demora y propagación, usar los cambios de configuración de la guía en este mismo proyecto y sustituir el generador por `validation/scenario-client.js`. Con propagación desactivada, `validation/check-broken-context.js` comprueba dos trazas y una misma correlación. Estas comprobaciones usan `evidencias/normal.json` de la última ejecución normal.

Limpiar exclusivamente este proyecto:

```bash
docker compose -p iaew07-validacion -f compose.yaml -f compose.validation.yaml down -v
```

## Revisión de consistencia — 05/10/2026

Presentación, notas, guía, anexo de código, evidencias y README contrastados con el Compose ejecutable. Arranque completo con `docker compose up -d --build --wait --wait-timeout 300`; Auth0 externo y `tools` bajo demanda. Corregidas referencias al práctico futuro y el identificador del README docente. Se explicita el alcance manual de spans y las herramientas conceptuales no instaladas.

Reejecutados: siete pruebas de resiliencia, comprobación de sintaxis y validación de Compose base y docente. Esta revisión no repite ni amplía la evidencia de ejecución real detallada arriba.

## Ajustes didácticos tras feedback del alumno

En esa revisión se mantuvieron 36 diapositivas y 120 minutos; la incorporación posterior de liveness/readiness elevó el total a 37. Añadidos ejemplo numérico de promedio/p95, creación y propagación de IDs, alcance visible de spans manuales, mapa de servicios de Compose, regla única con línea temporal y ejemplo guiado de diagnóstico. Guía y plantilla incorporan las preguntas y el contraste con evidencias propias. El ejemplo guiado no se presenta como captura real.

Comprobación posterior a estos cambios: diapositivas modificadas renderizadas e inspeccionadas en navegador; sintaxis JavaScript y SVG, enlaces locales, anexo de código y copia docente verificados.

## Liveness y readiness — 05/10/2026

Nueva diapositiva 29 y notas: 37 diapositivas y 37 notas. Comparación entre reinicio por liveness y retiro de tráfico por readiness en un orquestador configurado, con ejemplo de MongoDB y alcance del /health actual. No se implementan nuevas sondas ni se presenta Compose como Kubernetes. Se conserva la agenda de 120 minutos dentro del bloque de monitores y alertas. Fuente: [Sondas de Kubernetes](https://kubernetes.io/docs/concepts/workloads/pods/probes/).

## Revisión final de consistencia — 05/10/2026

Estado actual: 37 diapositivas y 37 notas; agenda de 120 minutos y actividad de 45 minutos. Actualizados README y guía con liveness/readiness como conceptos y alcance del healthcheck HTTP existente. El worker no tiene healthcheck: estar running no prueba consumo. No se prometen endpoints /live o /ready ni reinicio o retiro de tráfico automáticos por Compose. Los 27 bloques del anexo coinciden con los archivos; enlaces y copia docente verificados.

## Generación de logs y gauge

Estado actual: 38 diapositivas y 38 notas. Nueva diapositiva 13: llamada real al logger, registro abreviado y rutas stdout/OTLP. Gauge aclarado como valor actual que sube o baja. Se conserva la agenda de 120 minutos dentro del bloque de señales; liveness/readiness pasa a la diapositiva 30.
