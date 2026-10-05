# Clase 07 — Observabilidad de integraciones

Fecha: lunes 05/10/2026. Duración prevista: 120 minutos.

## Presentación

- [Presentación HTML](presentacion/index.html)

Recorrido: problemática de sistemas distribuidos; propósito de la observabilidad; repaso de Docker y Compose; logs, métricas y trazas; requisitos de instrumentación; correlación y propagación del contexto por RabbitMQ; herramientas; lectura de un incidente; monitores, liveness/readiness y alertas.

La propuesta usa OpenTelemetry y Grafana con Loki, Tempo y Prometheus, empaquetados en `grafana/otel-lgtm` para la demo, más cAdvisor para recursos de contenedores. Los datos de las diapositivas son ilustrativos.

## Actividad individual

- [Guía paso a paso](actividad-practica.md) — 45 minutos con preparación previa.
- [Laboratorio autocontenido](recursos/laboratorio/).
- [Código completo de observabilidad](codigo-observabilidad.md).

La presentación tiene 37 diapositivas. La agenda de presentación y práctica suma 120 minutos. El laboratorio conserva el contrato Auth0 y la resiliencia de la base; la dependencia lenta es simulada. Las alternativas de herramientas de las diapositivas no son requisitos de instalación.

La Entrega 1 grupal del TPI vence el 05/10/2026 y no requiere defensa oral. La presentación no modifica sus requisitos.
