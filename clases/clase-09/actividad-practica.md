# Actividad práctica individual · Clase 09 · Cloud e IaC con AWS Academy

**Duración:** 45 minutos · **Modalidad:** individual · **Entrega:** nota breve con evidencias (Moodle).

## Objetivo

Leer, validar y desplegar una plantilla CloudFormation que publique una API stateless detrás de un balanceador, y justificar qué recurso cumple qué función dentro de las restricciones del AWS Academy Learner Lab.

## Prerrequisitos (verificar antes de empezar)

- Docker, Node.js 20+, Python 3 (para `cfn-lint`) y AWS CLI v2 instalados.
- Learner Lab iniciado (**Start Lab**) y credenciales temporales cargadas en la terminal (`aws sts get-caller-identity` responde). **No guardar credenciales en Git.**
- Región `us-east-1`.
- Si el Learner Lab no está disponible, trabajar por la **ruta local** (partes A, B y E, más la explicación escrita de C y D).

Todo el material está en `recursos/laboratorio/`.

## Parte A · Leer la plantilla (obligatoria, 8 min)

Abrir `plantillas/ecs-fargate-alb.yaml` y completar una tabla con estas columnas para **cada** recurso del bloque `Resources`:

| Recurso | Qué hace | Qué pasaría si faltara |
|---|---|---|

Responder además: ¿por qué `TaskSecurityGroup` solo acepta tráfico desde `AlbSecurityGroup`? ¿Por qué se usa `LabRole` y no un rol nuevo?

## Parte B · Validar localmente (obligatoria, 7 min)

```bash
cd recursos/laboratorio
npm test
docker build --platform linux/amd64 -t iaew-api:local .
docker run --rm -p 8080:8080 iaew-api:local   # en otra terminal: curl localhost:8080/health
python3 -m venv .venv && .venv/bin/pip install cfn-lint && .venv/bin/cfn-lint plantillas/ecs-fargate-alb.yaml   # o: pipx install cfn-lint
```

Registrar la salida de los tests, el resultado de `curl` y que `cfn-lint` no informa errores.

## Parte C · Publicar y desplegar (obligatoria si hay Learner Lab, 15 min)

```bash
./scripts/publicar-imagen.sh 1.0.0      # imprime ImageUri=...
./scripts/desplegar.sh <ImageUri>       # crea el stack iaew-clase-09
```

1. Esperar `CREATE_COMPLETE`. Si falla, leer los eventos: `aws cloudformation describe-stack-events --stack-name iaew-clase-09 --max-items 10`. Un stack fallido en su creación inicial hay que eliminarlo antes de reintentar.
2. Con la URL del Output `ApiUrl`: `curl <ApiUrl>/health` y `curl <ApiUrl>/version`.
3. Verificar en el Target Group que el destino esté `healthy`.

Sin Learner Lab: explicar por escrito, en 5 líneas, qué ocurre en cada paso y qué evidencia validaría cada uno.

## Parte D · Cambiar la infraestructura (obligatoria si hay Learner Lab, 7 min)

Volver a ejecutar el despliegue con dos tareas:

```bash
aws cloudformation deploy --stack-name iaew-clase-09 --template-file plantillas/ecs-fargate-alb.yaml \
  --parameter-overrides ImageUri=<ImageUri> VpcId=<vpc> SubnetIds=<subnet1>,<subnet2> DesiredCount=2
```

Llamar varias veces a `/version` y observar el campo `instancia`. Explicar qué indica y por qué esta API puede escalar sin perder datos.

## Parte E · Limpiar y evidenciar (obligatoria, 8 min)

```bash
./scripts/limpiar.sh
```

Confirmar que el stack ya no existe. Armar la nota de entrega.

## Entregable

Nota de máximo una página con:

1. Tabla de la Parte A y las dos respuestas.
2. Evidencia de la Parte B (texto de la salida de test, `curl` y lint).
3. Evidencia de C y D: eventos del stack, URL, respuesta de `/health` y dos valores distintos de `instancia`; o la explicación escrita si no hubo lab.
4. Confirmación de limpieza.
5. **Qué no pudiste ejecutar y por qué.** Distinguí lo observado de lo supuesto.

## Criterios de revisión

- La tabla explica la función de cada recurso, no solo lo nombra.
- Las evidencias provienen de ejecuciones reales y se declara lo no ejecutado.
- Hay justificación de `LabRole`, del grupo de seguridad y del carácter stateless.
- Se eliminó el stack.

## Opcional (no obligatorio)

- Agregar un recurso de alarma o un `Output` adicional y validar con `cfn-lint`.
- Investigar qué cambiaría para desplegar MongoDB y RabbitMQ (servicios administrados, persistencia, costos).

> El despliegue en la nube es **opcional y suma bono** en el TPI; no modifica los requisitos de la consigna.
