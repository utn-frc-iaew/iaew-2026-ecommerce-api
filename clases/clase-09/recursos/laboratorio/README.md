# Recursos de la actividad práctica · Clase 09

Estos archivos pertenecen a la [única actividad práctica individual de Clase 09](../../actividad-practica.md). No constituyen otro ejercicio ni otra entrega.

**Empezá por esa guía:** integra preparación del entorno, qué se crea en AWS, mapa de archivos, comandos en orden, resultados esperados, solución de problemas y limpieza. Ejecutá los scripts cuando la guía lo indique, desde esta carpeta.

El nombre interno `recursos/laboratorio/` se conserva para que sigan funcionando los comandos y enlaces existentes.

## Ejecución local rápida

```bash
docker compose up -d --build   # API + MongoDB (imagen mongo:7.0.21)
curl http://localhost:8080/health
docker compose down -v         # limpia contenedores y volumen
```

`compose.yaml` define `mongodb` (con healthcheck y volumen) y `api`. En ECS, `plantillas/ecs-fargate-alb.yaml` declara los mismos dos contenedores en una tarea; cambia solo `MONGODB_URI` (`mongodb` en Compose, `localhost` en la tarea). `npm test` usa un repositorio en memoria y no requiere MongoDB ni AWS.
