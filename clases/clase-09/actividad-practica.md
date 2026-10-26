# Actividad práctica individual · Clase 09 · De una imagen local a una API en AWS

**Duración en clase:** 45 minutos, con preparación previa. **Modalidad:** individual. **Entrega:** una nota con evidencias en Moodle.

Esta es la única actividad de Clase 09. La carpeta `recursos/laboratorio/` contiene los archivos que vas a usar en estos mismos pasos; no es otro ejercicio. Seguí esta guía de principio a fin.

## 1. Qué vas a levantar en la nube

Vas a publicar una **API Node.js de pedidos ficticios y solo lectura**, ejecutada en un contenedor de ECS Fargate, con entrada HTTP pública por un Application Load Balancer (ALB).

```text
Tu computadora                              AWS · us-east-1
Dockerfile → imagen → publicar-imagen.sh ──→ ECR: repositorio iaew-api
                                                │ descarga de imagen
Cliente → URL pública del ALB:80 ──────────→ tarea Fargate · API:8080
                                                │ stdout de la API
                                                └─→ CloudWatch Logs
```

Al principio habrá **una tarea**; en D cambiarás a **dos tareas de la misma API**. El ALB enviará solicitudes a sus destinos saludables. No vas a crear una VM para instalar Docker ni a ejecutar `docker compose up` en AWS.

| Qué | Cómo aparece en el ambiente |
|---|---|
| Imagen de la API en ECR | `publicar-imagen.sh` crea o reutiliza `iaew-api` y sube la imagen `1.0.0`; queda fuera del stack. |
| Stack `iaew-clase-09` | `desplegar.sh` invoca CloudFormation con `plantillas/ecs-fargate-alb.yaml`. |
| Dos security groups | Uno admite HTTP público al ALB; el otro admite tráfico del ALB al puerto 8080 de las tareas. |
| ALB, Listener y TargetGroup | Reciben HTTP en 80, dirigen al contenedor y comprueban `/health`. |
| Cluster, TaskDefinition y Service | Organizan ECS, definen el contenedor y mantienen la cantidad solicitada de tareas Fargate. |
| LogGroup | Recibe logs de la aplicación; la plantilla configura retención de un día. |
| VPC, subredes y LabRole | Ya deben existir en el Learner Lab. La plantilla los reutiliza; no los crea. |

La plantilla tiene **nueve recursos declarados**. Las tareas son instancias de ejecución que mantiene el servicio ECS, no otro recurso escrito por separado en `Resources`.

La API responde:

| Método y ruta | Resultado esperado |
|---|---|
| `GET /health` | `200`, `{"status":"ok"}`. |
| `GET /version` | `200`, versión `1.0.0` e identificador `instancia`. |
| `GET /pedidos` | `200`, dos pedidos ficticios: `P-1001` y `P-1002`. |
| `GET /pedidos/P-1001` | `200`, pedido confirmado, total `15200`. |
| `GET /pedidos/P-9999` | `404`, `{"error":"pedido_no_encontrado"}`. |

Los datos están fijos en `src/app.js`; no se escriben pedidos ni se migra la información de clases anteriores. **MongoDB, RabbitMQ, worker, Auth0 y el host/MCP no se despliegan hoy.** El recorte permite aprender imagen → infraestructura → acceso público sin resolver todavía todas las dependencias de la integración completa. La API usa HTTP y datos ficticios durante la práctica; no la uses para datos reales.

## 2. Preparación previa · antes de clase

### 2.1. Conseguí los archivos y abrí la terminal correcta

Usá una terminal Bash (Linux, macOS o un entorno Bash con Docker disponible). En Windows, acordá con el docente el entorno antes de clase; los scripts no están escritos para PowerShell.

Si todavía no tenés el repositorio, ejecutá desde una carpeta de trabajo:

```bash
git clone https://github.com/utn-frc-iaew/iaew-2026-ecommerce-api.git
cd iaew-2026-ecommerce-api
```

Si ya lo tenés, abrí una terminal en su raíz y asegurate de disponer de la versión actual de `main`. Conservá cualquier trabajo propio antes de actualizarlo; no necesitás cambiar a una rama `clase-09-inicio`.

Desde la raíz del repositorio:

```bash
cd clases/clase-09/recursos/laboratorio
pwd
ls
```

Deberías ver `src`, `test`, `scripts`, `plantillas`, `Dockerfile` y `package.json`. **Todos los comandos siguientes se ejecutan en esta misma carpeta y terminal**, salvo los pasos de consola web. No vuelvas a agregar `cd recursos/laboratorio`.

Archivos que vas a usar:

| Archivo | Para qué lo abrís o ejecutás |
|---|---|
| `src/app.js` | Leer las rutas y los datos ficticios de la API. |
| `Dockerfile` | Ver cómo se empaqueta Node y qué puerto expone. |
| `test/app.test.js` | Comprender las comprobaciones locales. |
| `plantillas/ecs-fargate-alb.yaml` | Relacionar parámetros, nueve recursos y Outputs. |
| `scripts/publicar-imagen.sh` | Construir la imagen y publicarla en ECR. |
| `scripts/desplegar.sh` | Crear el stack o actualizar cantidad de tareas. |
| `scripts/limpiar.sh` | Borrar el stack y el repositorio ECR de esta práctica. |

### 2.2. Prepará herramientas, linter e imagen local

Iniciá Docker Desktop o el servicio Docker. Verificá:

```bash
node --version
npm --version
python3 --version
docker version
```

Necesitás Node.js 20 o superior, Python 3 y un daemon Docker que responda. El proyecto no tiene dependencias externas de Node: no hace falta `npm install`.

```bash
python3 -m venv .venv
.venv/bin/pip install cfn-lint
docker build --platform linux/amd64 -t iaew-api:local .
```

Esperá que la instalación y el build terminen sin errores. Se fuerza `linux/amd64` para coincidir con la arquitectura de las tareas de esta plantilla, también en Apple Silicon. Estas operaciones se preparan **antes** de los 45 minutos. No publiques `.venv`, credenciales ni archivos temporales en Git.

### 2.3. Elegí la ruta según tu Learner Lab

- **Con Learner Lab disponible:** hacé A–E, incluida la publicación en AWS.
- **Sin Learner Lab disponible:** hacé A, B y el cierre local de E; en C y D completá las explicaciones indicadas. No ejecutes comandos AWS ni inventes capturas de recursos.

Para la ruta cloud, verificá AWS CLI v2:

```bash
aws --version
export AWS_REGION=us-east-1
export AWS_DEFAULT_REGION=us-east-1
export AWS_PAGER=""
```

Entrá al curso de AWS Academy, abrí el Learner Lab y presioná **Start Lab**. Cuando esté listo, abrí **AWS Details** o el panel de credenciales temporales que provea tu curso. Copiá a tu terminal los tres valores temporales mediante las instrucciones de ese panel: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` y `AWS_SESSION_TOKEN`. No los pegues en el proyecto, la entrega ni capturas. El token de sesión también es necesario. Si renovás las credenciales, volvé a cargar los tres valores.

```bash
aws sts get-caller-identity
```

Debe responder con la identidad de tu cuenta de laboratorio; si falla, resolvé las credenciales antes de crear recursos. Revisá en la consola que la región sea `us-east-1`, que exista `LabRole` y que el curso permita ECR, ECS/Fargate, ELB y CloudFormation.

Comprobá la red que detectará el script:

```bash
VPC_ID=$(aws ec2 describe-vpcs --filters Name=isDefault,Values=true \
  --query 'Vpcs[0].VpcId' --output text)
printf '%s\n' "$VPC_ID"
aws ec2 describe-subnets --filters "Name=vpc-id,Values=$VPC_ID" Name=default-for-az,Values=true \
  --query 'Subnets[].{Subred:SubnetId,Zona:AvailabilityZone}' --output table
```

Necesitás una VPC por defecto (`vpc-...`, no `None`) y subredes por defecto en al menos dos zonas distintas. Si faltan, consultá al docente y usá la ruta local; no intentes crear una red distinta siguiendo estos scripts.

Los nombres `iaew-clase-09` e `iaew-api` deben estar reservados para vos en tu cuenta de laboratorio. Si varios alumnos comparten cuenta, consulten al docente antes de ejecutar: los nombres colisionan y la limpieza borra el repositorio con sus imágenes. La actividad presupone cuentas aisladas por estudiante.

**Antes de empezar:** imagen construida, linter instalado y ruta elegida. Si vas a usar AWS, también identidad y red verificadas.

## 3. Parte A · Leer qué se va a crear · 8 minutos

1. Abrí `src/app.js` e identificá de dónde salen los pedidos. Explicá por qué la API no necesita MongoDB en esta actividad.
2. Abrí `plantillas/ecs-fargate-alb.yaml`. Ubicá `Parameters`, `Resources` y `Outputs`.
3. Completá una fila por cada recurso: `AlbSecurityGroup`, `TaskSecurityGroup`, `LogGroup`, `Cluster`, `LoadBalancer`, `TargetGroup`, `Listener`, `TaskDefinition` y `Service`.

| Recurso | Qué hace en el camino cliente → API | Qué pasaría si faltara |
|---|---|---|

4. Respondé: ¿por qué la tarea acepta 8080 solo desde el grupo del ALB? ¿Qué hacen `ExecutionRoleArn` y `TaskRoleArn`, aunque ambos usen `LabRole`? Apoyate en la sección 3 del [material adicional](material-adicional/material-completo.md).

**Checkpoint A:** distinguís recursos nuevos, recursos existentes y servicios que no vas a desplegar.

## 4. Parte B · Probar la misma imagen localmente · 7 minutos

```bash
npm test
docker run --rm -d --name iaew-clase-09-local -p 8080:8080 iaew-api:local
curl -i http://localhost:8080/health
curl -i http://localhost:8080/pedidos/P-1001
.venv/bin/cfn-lint plantillas/ecs-fargate-alb.yaml
```

- `npm test`: una prueba pasa, sin fallas.
- Docker devuelve el ID del contenedor y queda en segundo plano; podés seguir en la misma terminal.
- Los dos `curl` deben responder `200` y los cuerpos indicados en la sección 1.
- `cfn-lint` debe terminar sin errores; puede no imprimir salida cuando todo pasa.

Si el contenedor tarda en iniciar, esperá unos segundos y repetí `curl`. Si no responde, revisá `docker logs iaew-clase-09-local` y `docker ps`. Si 8080 está ocupado o ya existe ese nombre, revisá qué proceso/contenedor es antes de detenerlo; no borres trabajo de otra práctica sin identificarlo.

Guardá salida de tests, respuestas y resultado del lint. **Todavía no hay una API levantada en AWS.**

**Checkpoint B:** la API funciona localmente y la plantilla pasa revisión estática; eso no comprueba permisos ni despliegue cloud.

## 5. Parte C · Publicar, crear infraestructura y verificar · 15 minutos

### C.1. Publicá la imagen

Solo con AWS disponible:

```bash
./scripts/publicar-imagen.sh 1.0.0
```

El script consulta tu cuenta, crea o reutiliza el repositorio ECR `iaew-api`, autentica Docker contra ese registro, construye para `linux/amd64` y sube la imagen. Al terminar imprime `ImageUri=...`.

Copiá **solo la URI que está después de `ImageUri=`** y reemplazá el texto de este comando:

```bash
export IMAGE_URI="PEGAR_AQUI_LA_URI_COMPLETA"
```

La forma esperada es `ID_CUENTA.dkr.ecr.us-east-1.amazonaws.com/iaew-api:1.0.0`. No ejecutes el siguiente paso dejando `PEGAR_AQUI_LA_URI_COMPLETA`. No necesitás editar la plantilla ni el Dockerfile.

**Resultado intermedio:** ECR tiene la imagen, pero todavía no hay una URL sirviendo la API.

### C.2. Creá el stack

```bash
./scripts/desplegar.sh "$IMAGE_URI"
```

El script detecta la VPC y dos subredes por defecto, pasa la imagen a CloudFormation y espera que termine el stack `iaew-clase-09`. El servicio arranca con **una tarea** y el script imprime los Outputs.

Mientras espera, podés abrir la consola web: **CloudFormation → Stacks → iaew-clase-09 → Events / Resources**. Comprobá que son los recursos que leíste en A. Elegí `us-east-1` en la consola. Si preferís consultar eventos por CLI, usá otra terminal con las mismas credenciales y región:

```bash
aws cloudformation describe-stack-events --stack-name iaew-clase-09 --max-items 10
```

Si falla, buscá el primer evento de creación fallida y guardá su causa. Ante creación en `ROLLBACK_COMPLETE`, no repitas deploy sobre ese stack: iniciá el cierre de E y consultá al docente. No hagas reintentos sin límite.

### C.3. Recuperá URL y grupo de destinos

Solo después de que el despliegue termine correctamente, volvé a la terminal original:

```bash
aws cloudformation describe-stacks --stack-name iaew-clase-09 \
  --query 'Stacks[0].StackStatus' --output text
API_URL=$(aws cloudformation describe-stacks --stack-name iaew-clase-09 \
  --query 'Stacks[0].Outputs[?OutputKey==`ApiUrl`].OutputValue | [0]' --output text)
printf '%s\n' "$API_URL"
TARGET_GROUP_ARN=$(aws cloudformation describe-stack-resources --stack-name iaew-clase-09 \
  --logical-resource-id TargetGroup --query 'StackResources[0].PhysicalResourceId' --output text)
aws elbv2 describe-target-health --target-group-arn "$TARGET_GROUP_ARN" \
  --query 'TargetHealthDescriptions[].{IP:Target.Id,Puerto:Target.Port,Estado:TargetHealth.State}' --output table
```

Esperás `CREATE_COMPLETE`, una URL `http://...elb.amazonaws.com` y un destino en `healthy` con puerto `8080`. Si aparece `initial`, esperá y volvé a consultar; si aparece `unhealthy`, revisá la causa con el docente. La misma vista está en **EC2 → Target Groups → el grupo del stack → Targets**. No confundas esta salud con el resultado de los tests locales.

### C.4. Probá lo que realmente se levantó

```bash
curl -i "$API_URL/health"
curl -i "$API_URL/version"
curl -i "$API_URL/pedidos/P-1001"
curl -i "$API_URL/pedidos/P-9999"
```

Esperás `200`, `200`, `200` y `404`, respectivamente, con los cuerpos de la sección 1. Abrí también `$API_URL/pedidos` en el navegador reemplazando la variable por la URL real. Es una respuesta JSON; no desplegaste una interfaz gráfica.

Guardá estado del stack, tabla de destinos y respuestas HTTP. Podés ver el log de inicio en **CloudWatch → Log groups → /ecs/iaew-clase-09**; la API no registra cada solicitud HTTP.

**Checkpoint C:** una imagen en ECR, nueve recursos del stack creados y una tarea que responde desde la URL pública. Los tres son resultados distintos.

**Sin Learner Lab:** explicá qué hace C.1–C.4 y qué evidencia real esperarías en cada paso. Incluí el dibujo cliente → ALB → tarea, con puertos, y separá ECR del camino HTTP. No ejecutes este bloque.

## 6. Parte D · Pasar de una tarea a dos · 7 minutos

Con el stack creado, en la terminal original que conserva `IMAGE_URI`, `API_URL` y `TARGET_GROUP_ARN`:

```bash
./scripts/desplegar.sh "$IMAGE_URI" iaew-clase-09 2
aws cloudformation describe-stacks --stack-name iaew-clase-09 \
  --query 'Stacks[0].StackStatus' --output text
aws elbv2 describe-target-health --target-group-arn "$TARGET_GROUP_ARN" \
  --query 'TargetHealthDescriptions[].{IP:Target.Id,Puerto:Target.Port,Estado:TargetHealth.State}' --output table
for i in 1 2 3 4 5 6 7 8 9 10; do
  curl -sS "$API_URL/version"
  printf '\n'
done
```

Esperás `UPDATE_COMPLETE` y, al estabilizarse, dos destinos `healthy`. Consultá de nuevo si todavía hay tareas en transición. En las respuestas buscá dos valores distintos de `instancia`; no hace falta que alternen en orden. Diez solicitudes no garantizan ver ambos: si no ocurre, guardá lo observado y contrastalo con los destinos saludables, sin inventar resultados.

Respondé: ¿qué cambió en infraestructura?, ¿qué identifica `instancia`?, ¿por qué ambas tareas leen los mismos pedidos?, ¿qué fallaría si cada una guardara pedidos nuevos solo en memoria?

**Checkpoint D:** hiciste escalado **manual**, no autoscaling. Los datos siguen siendo constantes del código; no comprobaste persistencia ni recuperación de una base.

**Sin Learner Lab:** explicá el cambio de DesiredCount y dibujá el ALB enviando solicitudes a dos tareas. Indicá qué observarías en destinos y `/version`.

## 7. Parte E · Cerrar el entorno y reunir evidencias · 8 minutos

Guardá primero las evidencias; la URL dejará de servir cuando borres el balanceador.

En ambas rutas, si el contenedor de B sigue corriendo:

```bash
docker stop iaew-clase-09-local
docker ps -a --filter name=iaew-clase-09-local
```

Como se creó con `--rm`, debe desaparecer después de detenerse. Si todavía aparece durante la eliminación, esperá unos segundos y repetí la consulta. Si ya estaba detenido/eliminado, verificá la ausencia en lugar de repetir `stop`.

Si llegaste a publicar imagen o crear recursos cloud, aunque el despliegue haya fallado:

```bash
./scripts/limpiar.sh
```

El script elimina el stack, espera su borrado y elimina `iaew-api` con sus imágenes. Verifica que ambos estén ausentes. **No elimina VPC, subredes ni LabRole porque no son recursos creados por esta actividad.**

La confirmación esperada es `Limpieza verificada: stack iaew-clase-09 y repositorio iaew-api ausentes.` Si aparece un error, conservá el mensaje y resolvelo con el docente; no declares limpieza exitosa. Un stack en `DELETE_COMPLETE` puede seguir visible en el historial de CloudFormation: lo importante es el estado eliminado y que los recursos creados ya no estén activos. Cerrar la pestaña de AWS no equivale a borrarlos.

Sin AWS, registrá: «No se crearon recursos cloud; contenedor local detenido y eliminado».

**Si se agota el tiempo de C/D:** guardá el estado real, escribí qué faltó comprobar y pasá a E. Si aún hay una operación de creación/actualización en curso, pedí al docente que supervise su finalización y el borrado; no abandones recursos suponiendo que terminaron de borrarse. Los últimos 15 minutos de clase permiten verificar el cierre y completar la nota, sin repetir E.

## 8. Una sola entrega

Subí a Moodle una nota de hasta una página de síntesis, con tabla y evidencias anexas. Incluí:

1. **Qué levantaste:** API ficticia, imagen ECR, infraestructura del stack y cantidad de tareas; o qué no ejecutaste si no hubo AWS.
2. Tabla y respuestas de A.
3. Salidas de B: tests, HTTP local y lint.
4. Con AWS: estado/eventos, URL, destinos y HTTP de C/D; dos instancias solo si se observaron. Sin AWS: las explicaciones y diagramas indicados.
5. Respuestas de D, confirmación de limpieza y cualquier pendiente/error.

No entregues credenciales ni un segundo informe de «laboratorio». Las evidencias deben provenir de tus ejecuciones; distinguí siempre resultado observado, resultado esperado y parte no ejecutada.

### Criterios de revisión

- Explicás qué se creó, qué se reutilizó y qué quedó fuera.
- Relacionás cada recurso con el recorrido de una solicitud.
- Justificás red, roles y estado de la API.
- Aportás evidencia consistente con tu ruta, sin presentar lint o un dibujo como despliegue real.
- Cerrás el entorno o informás el error y los recursos pendientes para resolverlos.

Una falla del Learner Lab no invalida la entrega si documentás lo ocurrido y completás la explicación. El despliegue cloud del **TPI grupal** sigue siendo opcional con bono y no cambia su consigna.

### Referencias de los comandos

[AWS CLI: recursos de un stack](https://docs.aws.amazon.com/cli/latest/reference/cloudformation/describe-stack-resources.html) y [salud de destinos](https://docs.aws.amazon.com/cli/latest/reference/elbv2/describe-target-health.html). La documentación respalda las consultas; no acredita que el Learner Lab de este curso haya sido probado.
