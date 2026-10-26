# Actividad práctica individual · Clase 09 · Cloud e IaC con AWS Academy

**Duración:** 45 minutos · **Modalidad:** individual · **Entrega:** nota breve con evidencias (Moodle).

## Objetivo

Leer, validar y desplegar una plantilla CloudFormation que publique una API stateless detrás de un balanceador, y justificar qué recurso cumple qué función dentro de las restricciones del AWS Academy Learner Lab.

## Preparación previa (antes de clase)

- Docker, Node.js 20+, Python 3 (para `cfn-lint`) y AWS CLI v2 instalados.
- Solo para la ruta cloud: Learner Lab iniciado (**Start Lab**) y credenciales temporales cargadas en la terminal (`aws sts get-caller-identity` responde). **No guardar credenciales en Git.**
- Para la ruta cloud, ejecutar en cada terminal: `export AWS_REGION=us-east-1 AWS_DEFAULT_REGION=us-east-1`.
- Si el Learner Lab no está disponible, trabajar por la **ruta local** (partes A, B y E, más la explicación escrita de C y D).

Todo el material está en `recursos/laboratorio/`, dentro de `clases/clase-09/` del repositorio de actividades. Descargar o clonar el repositorio y abrir esa carpeta antes de clase.

Preparar el linter y la imagen antes de los 45 minutos:

```bash
cd recursos/laboratorio
python3 -m venv .venv
.venv/bin/pip install cfn-lint
docker build --platform linux/amd64 -t iaew-api:local .
```

La práctica empieza desde esta misma carpeta. La API usa pedidos ficticios de solo lectura; conserva el dominio anterior, pero no incluye Auth0, MongoDB, RabbitMQ ni MCP. Leer la sección 3 del material adicional antes de completar A.

## Parte A · Leer la plantilla (obligatoria, 8 min)

Abrir `plantillas/ecs-fargate-alb.yaml` y completar una tabla con estas columnas para **cada** recurso del bloque `Resources`:

| Recurso | Qué hace | Qué pasaría si faltara |
|---|---|---|

Responder además: ¿por qué `TaskSecurityGroup` solo acepta tráfico desde `AlbSecurityGroup`? ¿Por qué se usa `LabRole` y no un rol nuevo?

## Parte B · Validar localmente (obligatoria, 7 min)

```bash
npm test
docker run --rm -d --name iaew-clase-09-local -p 8080:8080 iaew-api:local
curl http://localhost:8080/health
.venv/bin/cfn-lint plantillas/ecs-fargate-alb.yaml
```

El contenedor corre en segundo plano; todos los comandos se ejecutan en la misma terminal. Si el puerto 8080 está ocupado, detener el servicio que lo usa o consultar al docente.

Registrar la salida de los tests, el resultado de `curl` y que `cfn-lint` no informa errores.

## Parte C · Publicar y desplegar (obligatoria si hay Learner Lab, 15 min)

```bash
./scripts/publicar-imagen.sh 1.0.0      # imprime ImageUri=...
# Copiar la URI impresa por el paso anterior, sin el prefijo ImageUri=:
export IMAGE_URI="URI_COMPLETA_DE_LA_IMAGEN"
./scripts/desplegar.sh "$IMAGE_URI"       # crea el stack iaew-clase-09
```

1. Esperar `CREATE_COMPLETE`. Si falla, leer los eventos: `aws cloudformation describe-stack-events --stack-name iaew-clase-09 --max-items 10`. Un stack fallido en su creación inicial hay que eliminarlo antes de reintentar.
2. Con la URL del Output `ApiUrl`: `curl <ApiUrl>/health` y `curl <ApiUrl>/version`.
3. Verificar en el Target Group que el destino esté `healthy`.

Sin Learner Lab: explicar por escrito, en 5 líneas, qué ocurre en cada paso y qué evidencia validaría cada uno.

## Parte D · Cambiar la infraestructura (obligatoria si hay Learner Lab, 7 min)

Volver a ejecutar el despliegue con dos tareas:

```bash
./scripts/desplegar.sh "$IMAGE_URI" iaew-clase-09 2
```

El script reutiliza la detección de VPC y subredes y cambia `DesiredCount`. Esperar `UPDATE_COMPLETE` y dos destinos `healthy`.

Llamar varias veces a `/version` y observar el campo `instancia`. Explicar qué indica y por qué esta API puede escalar sin perder datos.

## Parte E · Limpiar y evidenciar (obligatoria, 8 min)

En ambas rutas, detener el contenedor local:

```bash
docker stop iaew-clase-09-local
```

Como se inició con `--rm`, se elimina al detenerse. Comprobar que no aparece en `docker ps -a --filter name=iaew-clase-09-local`.

Solo si se crearon recursos AWS (aunque el despliegue haya fallado):

```bash
./scripts/limpiar.sh
```

El script verifica que no queden el stack ni el repositorio ECR del laboratorio. Si falla, guardar el error y resolverlo con el docente; no declarar limpieza exitosa. El repositorio `iaew-api` debe reservarse para esta práctica, pues se elimina con sus imágenes.

Sin AWS, registrar: «No se crearon recursos cloud; contenedor local detenido y eliminado». Armar la nota de entrega. El bloque final de 15 minutos sirve para verificar el cierre y completar evidencias, sin repetir la Parte E.

Si la creación o actualización supera el tiempo asignado, guardar el estado/evento actual, completar por escrito el resultado esperado y pasar al cierre. No afirmar que se observaron dos instancias si no ocurrió. Reservar siempre tiempo para limpiar; una falla del lab no invalida la entrega si queda documentada.

## Entregable

Nota de hasta una página de síntesis, con tabla y evidencias anexas (sin límite de una página para los anexos):

1. Tabla de la Parte A y las dos respuestas.
2. Evidencia de la Parte B (texto de la salida de test, `curl` y lint).
3. Evidencia de C y D: eventos del stack, URL, respuesta de `/health` y dos valores distintos de `instancia`; o la explicación escrita si no hubo lab.
4. Confirmación de limpieza local y, si corresponde, de stack y ECR; declarar cualquier recurso pendiente.
5. **Qué no pudiste ejecutar y por qué.** Distinguí lo observado de lo supuesto.

## Criterios de revisión

- La tabla explica la función de cada recurso, no solo lo nombra.
- Las evidencias provienen de ejecuciones reales y se declara lo no ejecutado.
- Hay justificación de `LabRole`, del grupo de seguridad y del carácter stateless.
- Se cerró el entorno local y, si se crearon recursos cloud, se verificó el borrado del stack y de ECR o se informó el fallo pendiente.

## Opcional (no obligatorio)

- Agregar un recurso de alarma o un `Output` adicional y validar con `cfn-lint`.
- Investigar qué cambiaría para desplegar MongoDB y RabbitMQ (servicios administrados, persistencia, costos).

> El despliegue en la nube es **opcional y suma bono** en el TPI; no modifica los requisitos de la consigna.
