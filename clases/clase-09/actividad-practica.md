# Actividad práctica individual · Clase 09 · De una imagen local a una API en AWS

**Duración en clase:** 45 minutos, con preparación previa. **Modalidad:** individual. **Entrega:** una nota con evidencias en Moodle.

Esta es la única actividad de Clase 09. La carpeta `recursos/laboratorio/` contiene los archivos que vas a usar en estos mismos pasos; no es otro ejercicio. Seguí esta guía de principio a fin.

## 1. Qué vas a construir: infraestructura primero, contenedores después

Vas a crear desde los archivos de esta actividad **toda la infraestructura de red y ejecución del ejercicio**, y después desplegar una **API Node.js de pedidos ficticios y solo lectura**. Todos cuentan con Learner Lab.

```text
Etapa 1 · CloudFormation: iaew-clase-09-base (17 recursos)
VPC propia → Internet Gateway + rutas → 2 subredes públicas en zonas distintas
  ├─ security groups: Internet → ALB:80; ALB → tareas:8080
  ├─ ALB + Listener + TargetGroup (todavía sin destinos)
  └─ ECR vacío + cluster ECS sin tareas + CloudWatch LogGroup

Etapa 2 · publicar imagen y CloudFormation: iaew-clase-09 (2 recursos)
Docker → imagen en el ECR creado en etapa 1
TaskDefinition + Service → 1 tarea Fargate; después 2 tareas
Cliente → ALB:80 → API:8080 → JSON de pedidos ficticios
```

La primera etapa **no ejecuta contenedores**. El balanceador ya existe, pero todavía no tiene destinos: una respuesta `503` antes de desplegar la API es esperable. La segunda plantilla importa las salidas de la primera mediante `Fn::ImportValue`.

| Infraestructura creada por vos | Recursos declarados |
|---|---|
| Red propia | `Vpc`, `InternetGateway`, `InternetGatewayAttachment`. |
| Segmentación y salida a Internet | `PublicSubnetA`, `PublicSubnetB`, `PublicRouteTable`, `InternetRoute`, `SubnetARouteTableAssociation`, `SubnetBRouteTableAssociation`. |
| Reglas de acceso | `AlbSecurityGroup`, `TaskSecurityGroup`. |
| Entrada HTTP | `LoadBalancer`, `TargetGroup`, `Listener`. |
| Plataforma base | `Cluster`, `Repository`, `LogGroup`. |
| Contenedores, en otra plantilla | `TaskDefinition`, `Service`. ECS crea y mantiene las tareas desde esas definiciones. |

No se usa la VPC por defecto, no se buscan subredes preexistentes y no se crea ECR manualmente. La cuenta, las credenciales temporales y el permiso `LabRole` son provistos por el Learner Lab: la actividad no administra la cuenta ni crea roles IAM. `LabRole` se usa como **execution role** para descargar imagen y enviar logs; el código de la API no llama servicios AWS y no recibe un `TaskRoleArn`.

La API responde:

| Método y ruta | Resultado esperado |
|---|---|
| `GET /health` | `200`, `{"status":"ok"}`. |
| `GET /version` | `200`, versión `1.0.0` e identificador `instancia`. |
| `GET /pedidos` | `200`, dos pedidos ficticios: `P-1001` y `P-1002`. |
| `GET /pedidos/P-1001` | `200`, pedido confirmado, total `15200`. |
| `GET /pedidos/P-9999` | `404`, `{"error":"pedido_no_encontrado"}`. |

Los datos están fijos en `src/app.js`. No se migran los datos de clases anteriores ni se despliegan MongoDB, RabbitMQ, worker, Auth0 o MCP. La infraestructura base sí se construye completa para este recorte. La API usa HTTP y datos ficticios; no la uses para datos reales.

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
| `plantillas/infra-base.yaml` | Crear los 17 recursos de red y plataforma base. |
| `plantillas/ecs-fargate-alb.yaml` | Definir tarea y servicio con las salidas de la base. |
| `scripts/crear-infra.sh` | Crear el stack base antes de publicar la imagen. |
| `scripts/publicar-imagen.sh` | Publicar en el ECR que creó el stack base. |
| `scripts/desplegar.sh` | Crear el stack o actualizar cantidad de tareas. |
| `scripts/limpiar.sh` | Borrar primero la aplicación y después la base con toda su red y ECR. |

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

### 2.3. Prepará tu Learner Lab

Todos los estudiantes cuentan con Learner Lab. La actividad completa A–E incluye publicación, despliegue, escalado y limpieza en AWS. Las pruebas locales de B son la validación previa de esa misma actividad.

Verificá AWS CLI v2 y configurá región y paginación:

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

No necesitás buscar IDs de VPC o subredes: vas a crearlos con la plantilla base. Las zonas se seleccionan dentro de la región `us-east-1`.

Los stacks `iaew-clase-09-base` e `iaew-clase-09` deben estar reservados para vos en tu cuenta de laboratorio. La actividad presupone cuentas aisladas por estudiante; antes de comenzar, resolvé con el docente cualquier cuenta compartida para evitar colisiones y borrado de recursos ajenos.

**Antes de empezar:** imagen construida, linter instalado y Learner Lab iniciado, con identidad verificada y permiso LabRole disponible.

## 3. Parte A · Leer las dos etapas · 8 minutos

1. Abrí `src/app.js` e identificá de dónde salen los pedidos.
2. Abrí `plantillas/infra-base.yaml` y `plantillas/ecs-fargate-alb.yaml`. Encontrá qué crea cada una y qué `Outputs` exporta la base.
3. Completá una fila por cada grupo de la tabla de la sección 1: red propia, segmentación/salida, reglas de acceso, entrada HTTP, plataforma base y contenedores.

| Grupo | Recursos incluidos | Qué necesidad resuelve | Cómo verificás que existe |
|---|---|---|---|

4. Respondé: ¿qué conecta la VPC a Internet?, ¿qué ruta usan las tareas para descargar la imagen?, ¿por qué 8080 acepta solo al ALB?, ¿por qué se usa `LabRole` como execution role y no se asigna un task role a la API?
5. Ubicá una pareja `Export` / `Fn::ImportValue`: explicá qué valor conecta ambos stacks y por qué la base se crea primero.

**Checkpoint A:** podés explicar qué existe al finalizar la etapa base aunque todavía no haya contenedores. Apoyate en el [material adicional](material-adicional/material-completo.md).

## 4. Parte B · Probar la misma imagen localmente · 7 minutos

```bash
npm test
docker run --rm -d --name iaew-clase-09-local -p 8080:8080 iaew-api:local
curl -i http://localhost:8080/health
curl -i http://localhost:8080/pedidos/P-1001
.venv/bin/cfn-lint plantillas/infra-base.yaml plantillas/ecs-fargate-alb.yaml
```

- `npm test`: pasan 6 pruebas: una de API y cinco de orquestación con CLI simulada. Estas últimas no ejecutan AWS real.
- Docker devuelve el ID del contenedor y queda en segundo plano; podés seguir en la misma terminal.
- Los dos `curl` deben responder `200` y los cuerpos indicados en la sección 1.
- `cfn-lint` debe terminar sin errores; puede no imprimir salida cuando todo pasa.

Si el contenedor tarda en iniciar, esperá unos segundos y repetí `curl`. Si no responde, revisá `docker logs iaew-clase-09-local` y `docker ps`. Si 8080 está ocupado o ya existe ese nombre, revisá qué proceso/contenedor es antes de detenerlo; no borres trabajo de otra práctica sin identificarlo.

Guardá salida de tests, respuestas y resultado del lint. **Todavía no hay una API levantada en AWS.**

**Checkpoint B:** la API funciona localmente y la plantilla pasa revisión estática; eso no comprueba permisos ni despliegue cloud.

## 5. Parte C · Crear la base y después desplegar la API · 15 minutos

### C.1. Creá toda la infraestructura base

Desde la misma carpeta de trabajo, ejecutá:

```bash
./scripts/crear-infra.sh
```

El script despliega `plantillas/infra-base.yaml` como `iaew-clase-09-base` y espera que termine. Crea una VPC nueva, dos subredes públicas en zonas distintas, gateway y ruta a Internet, asociaciones de rutas, reglas de acceso, ALB/Listener/TargetGroup, ECR, cluster ECS y logs. Al terminar imprime los Outputs.

Comprobá estado e inventario:

```bash
aws cloudformation describe-stacks --stack-name iaew-clase-09-base \
  --query 'Stacks[0].StackStatus' --output text
aws cloudformation describe-stack-resources --stack-name iaew-clase-09-base \
  --query 'StackResources[].{Recurso:LogicalResourceId,Tipo:ResourceType,Estado:ResourceStatus}' --output table
API_URL=$(aws cloudformation describe-stacks --stack-name iaew-clase-09-base \
  --query 'Stacks[0].Outputs[?OutputKey==`ApiUrl`].OutputValue | [0]' --output text)
TARGET_GROUP_ARN=$(aws cloudformation describe-stacks --stack-name iaew-clase-09-base \
  --query 'Stacks[0].Outputs[?OutputKey==`TargetGroupArn`].OutputValue | [0]' --output text)
CLUSTER_ARN=$(aws cloudformation describe-stacks --stack-name iaew-clase-09-base \
  --query 'Stacks[0].Outputs[?OutputKey==`ClusterArn`].OutputValue | [0]' --output text)
aws ecs list-tasks --cluster "$CLUSTER_ARN" --output json
aws elbv2 describe-target-health --target-group-arn "$TARGET_GROUP_ARN" --output json
```

Esperás `CREATE_COMPLETE`, 17 recursos completos, `taskArns: []` y `TargetHealthDescriptions: []`. La consola muestra **CloudFormation → Stacks → iaew-clase-09-base → Resources / Outputs**. En **VPC**, verificá que la VPC del Output `VpcId` y sus subredes pertenecen a esta actividad. No son la red por defecto.

**Checkpoint de infraestructura:** existe red y plataforma, pero no hay tareas ni destinos. La URL del ALB puede responder `503` en este momento; eso no indica que la API haya fallado: aún no está desplegada. Guardá esta evidencia antes de continuar.

### C.2. Publicá la imagen en el ECR que acabás de crear

```bash
./scripts/publicar-imagen.sh 1.0.0
```

El script obtiene `RepositoryUri` del stack base, autentica Docker, construye para `linux/amd64` y sube la imagen. **No crea ECR**. Si falta la base, se detiene.

Copiá solo la URI impresa después de `ImageUri=` y reemplazá el texto:

```bash
export IMAGE_URI="PEGAR_AQUI_LA_URI_COMPLETA"
```

La forma esperada es `ID_CUENTA.dkr.ecr.us-east-1.amazonaws.com/iaew-clase-09-base-api:1.0.0`. No dejes el marcador. Verificá el tag `1.0.0` en **ECR → Private repositories → iaew-clase-09-base-api**. Tener la imagen publicada todavía no significa que se ejecute.

### C.3. Desplegá el contenedor sobre tu infraestructura

```bash
./scripts/desplegar.sh "$IMAGE_URI"
```

El script exige que la base esté completa. Despliega `ecs-fargate-alb.yaml` como `iaew-clase-09`, con dos recursos: `TaskDefinition` y `Service`. La plantilla importa cluster, subredes, security group, TargetGroup y LogGroup de la base. El servicio arranca con **una tarea Fargate**.

```bash
aws cloudformation describe-stacks --stack-name iaew-clase-09 \
  --query 'Stacks[0].StackStatus' --output text
aws elbv2 describe-target-health --target-group-arn "$TARGET_GROUP_ARN" \
  --query 'TargetHealthDescriptions[].{IP:Target.Id,Puerto:Target.Port,Estado:TargetHealth.State}' --output table
curl -i "$API_URL/health"
curl -i "$API_URL/version"
curl -i "$API_URL/pedidos/P-1001"
curl -i "$API_URL/pedidos/P-9999"
```

Esperás `CREATE_COMPLETE`, un destino `healthy` en 8080 y HTTP `200`, `200`, `200`, `404`. Si aparece `initial`, esperá y volvé a consultar. Abrí también la URL real seguida de `/pedidos` en el navegador: devuelve JSON, no una interfaz gráfica.

En la consola, mirá **ECS → el cluster creado → Services → el servicio → Tasks** y **CloudWatch → Log groups → /ecs/iaew-clase-09-base**. La API registra inicio, no cada solicitud HTTP.

**Si un paso falla:** consultá los eventos del stack correspondiente, sin cambiar de región ni omitir la base:

```bash
aws cloudformation describe-stack-events --stack-name iaew-clase-09-base --max-items 10
aws cloudformation describe-stack-events --stack-name iaew-clase-09 --max-items 10
```

Consultá solo los stacks que ya hayas intentado crear. Guardá el primer error y resolvelo con el docente. Un stack en `ROLLBACK_COMPLETE` de creación inicial requiere borrado antes de reintentar. Si la base ya está importada por la aplicación, no puede borrarse primero: el orden correcto está en E.

**Checkpoint C:** primero acreditaste infraestructura sin tareas; después imagen publicada y API funcionando sobre esa misma base. Guardá evidencia de ambos estados.

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


## 7. Parte E · Cerrar el entorno y reunir evidencias · 8 minutos

Guardá primero las evidencias; la URL dejará de servir cuando borres el balanceador.

Detené el contenedor de B si sigue corriendo:

```bash
docker stop iaew-clase-09-local
docker ps -a --filter name=iaew-clase-09-local
```

Como se creó con `--rm`, debe desaparecer después de detenerse. Si todavía aparece durante la eliminación, esperá unos segundos y repetí la consulta. Si ya estaba detenido/eliminado, verificá la ausencia en lugar de repetir `stop`.

Eliminá los recursos de AWS. Este paso también corresponde si el despliegue falló después de publicar la imagen:

```bash
./scripts/limpiar.sh
```

El script elimina primero `iaew-clase-09` (aplicación), espera su borrado y después elimina `iaew-clase-09-base`. La base incluye VPC, gateway, subredes, rutas, ALB, security groups, cluster, ECR y logs. El repositorio tiene `EmptyOnDelete: true`: sus imágenes se borran al eliminar la base. **LabRole y la cuenta pertenecen al Learner Lab y no se eliminan.**

La confirmación esperada es `Limpieza verificada: stacks iaew-clase-09 y iaew-clase-09-base eliminados o ausentes.` Si aparece un error, conservá el mensaje y resolvelo con el docente; no declares limpieza exitosa. Un stack en `DELETE_COMPLETE` puede seguir visible en el historial de CloudFormation: lo importante es el estado eliminado y que los recursos creados ya no estén activos. Cerrar la pestaña de AWS no equivale a borrarlos.


**Ante una demora o error:** guardá el estado real y resolvé la causa con el docente para completar el recorrido en AWS. Si aún hay una operación de creación/actualización en curso, esperá su finalización antes de iniciar el borrado; no abandones recursos suponiendo que se eliminaron. Los últimos 15 minutos de clase permiten verificar el cierre y completar la nota, sin repetir E.

## 8. Una sola entrega

Subí a Moodle una nota de hasta una página de síntesis, con tabla y evidencias anexas. No entregues un segundo informe de infraestructura: es la primera etapa de esta misma actividad. Incluí:

1. **Qué levantaste:** infraestructura base propia y contenedores desplegados después. Diferenciá los dos stacks, la imagen y las tareas.
2. Tabla y respuestas de A.
3. Salidas de B: tests, HTTP local y lint.
4. Inventario y estado de la base sin tareas; después estado/eventos de la aplicación, URL pública, destinos saludables y HTTP de C/D. Registrá la cantidad de tareas y los valores de instancia realmente observados.
5. Respuestas de D, confirmación de limpieza y cualquier pendiente/error.

No entregues credenciales ni un segundo informe de «laboratorio». Las evidencias deben provenir de tus ejecuciones; distinguí siempre resultado observado, resultado esperado y parte no ejecutada.

### Criterios de revisión

- Explicás qué creó cada etapa y qué requisito de permisos pertenece al Learner Lab.
- Relacionás cada recurso con el recorrido de una solicitud.
- Justificás red, roles y estado de la API.
- Aportás evidencia de las ejecuciones local y cloud, distinguiendo lint, creación de recursos y funcionamiento HTTP.
- Cerrás el entorno o informás el error y los recursos pendientes para resolverlos.

Si queda un bloqueo de ejecución, registralo y resolvelo con el docente: una explicación escrita no reemplaza el despliegue requerido. El despliegue cloud del **TPI grupal** sigue siendo opcional con bono y no cambia su consigna.

### Referencias de los comandos

[AWS CLI: recursos de un stack](https://docs.aws.amazon.com/cli/latest/reference/cloudformation/describe-stack-resources.html) y [salud de destinos](https://docs.aws.amazon.com/cli/latest/reference/elbv2/describe-target-health.html). La documentación respalda las consultas; no acredita que el Learner Lab de este curso haya sido probado.
