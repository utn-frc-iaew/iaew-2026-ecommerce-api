# Laboratorio de observabilidad — Clase 07

Seguí [la actividad completa](../../actividad-practica.md). El entorno usa `compose.yaml`; la fixture `compose.validation.yaml` es exclusiva de validación docente.

## Arranque

```bash
cp .env.example .env
```

Completá dominio y access token real de Auth0. Luego:

```bash
docker compose up -d --build --wait --wait-timeout 300
docker compose run --rm tools node scripts/scenario.js normal
```

Ese único comando construye la aplicación y cAdvisor, descarga las imágenes necesarias y levanta API, MongoDB, worker, RabbitMQ y LGTM (Grafana, Loki, Tempo, Prometheus y OpenTelemetry Collector). Las conexiones usan los nombres de servicio de la red de Compose. No hace falta iniciar procesos ni instalar Node.js fuera de Docker. El servicio `tools` se ejecuta bajo demanda para generar pedidos; Auth0 sigue siendo el proveedor externo de autenticación.

Grafana: http://localhost:3007. API: http://localhost:3008. RabbitMQ Management: http://localhost:15677.

## Archivos

- `src/telemetry.js`: SDK, exporters, intervalos y buckets.
- `src/lib/observability.js`: contexto, spans, logs y métricas.
- `src/lib/rabbit.js` y `src/worker.js`: propagación y consumo.
- `observabilidad/`: fuentes, dashboard, scrape y regla.
- `scripts/scenario.js`: normal, repeticion, rechazo y lento.
- `evidencias/plantilla.md`: explicación individual.
- `validation/`: emisor RS256 local y comprobaciones para el docente; no valida Auth0 real.

Los puertos se publican en loopback. Las credenciales de Grafana y RabbitMQ son exclusivas de este entorno local. No copiar `.env`, tokens ni datos persistidos como parte de la entrega.

## Detener

```bash
docker compose down
```

Los volúmenes conservan datos. `down -v` borra solo los volúmenes del proyecto: usarlo tras conservar evidencia. No ejecutar limpieza global de Docker.
