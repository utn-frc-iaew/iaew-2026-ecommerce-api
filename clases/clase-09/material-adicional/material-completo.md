# Material teórico · Cloud e IaC con AWS Academy

## 1. Nube y responsabilidades

Nube es acceso bajo demanda a recursos de cómputo, red y almacenamiento mediante API. El proveedor administra el hardware; el equipo sigue siendo responsable de la arquitectura, los permisos, la configuración y los costos. Un recurso olvidado se sigue facturando.

### Modelos de servicio: qué delegamos

IaaS (Infrastructure as a Service) proporciona capacidad de cómputo, red y discos; en una VM seguimos administrando sistema operativo, runtime, aplicación y datos. PaaS (Platform as a Service) ofrece un entorno administrado para desplegar nuestra aplicación. SaaS (Software as a Service) entrega software listo para usar, como correo web: configuramos su uso en lugar de desplegar nuestro backend allí.

Son modelos de responsabilidad, no etapas de migración. ECS con Fargate ejecuta contenedores sin administrar las máquinas subyacentes; conservamos imagen, recursos, red y permisos. No equivale a contratar una aplicación SaaS terminada.

Una región ubica recursos geográficamente y contiene zonas de disponibilidad. Escalar modifica capacidad; la elasticidad ajusta capacidad a demanda. Ninguna de las dos aparece automáticamente por usar nube: debe diseñarse y configurarse. El ejercicio cambia cantidad de tareas manualmente.

### Desde Compose a un administrador de contenedores

El Compose real de Clase 08 contiene API, worker, MongoDB y RabbitMQ. Publica la API en loopback y usa un volumen para MongoDB; el host MCP se inicia aparte. Compose ya aporta una descripción reproducible de los servicios locales. La demanda nueva es preparar un entorno remoto y controlar acceso, operación y costos.

El recorrido de esta clase lleva las imágenes y decisiones de Compose directamente a un administrador de contenedores: Amazon ECS con ejecución Fargate. ECS organiza tareas y servicios, mantiene la cantidad deseada y se integra con el balanceador. Fargate aporta capacidad de ejecución sin administrar las máquinas subyacentes. Adaptamos red, permisos y persistencia al entorno cloud; no convertimos automáticamente el archivo Compose a CloudFormation.

| Necesidad local | Decisión del laboratorio AWS |
|---|---|
| build / imagen | Docker construye; ECR almacena el artefacto |
| command / environment | TaskDefinition declara procesos y configuración (`MONGODB_URI` cambia de `mongodb` a `localhost`) |
| servicio corriendo | Service mantiene tareas ejecutadas con Fargate |
| ports | ALB recibe en 80 y deriva a la API en 8080 |
| red y acceso | VPC, subredes y security groups; 27017 no se publica |
| healthcheck | TargetGroup comprueba /health; Mongo tiene su healthcheck propio y la API espera con DependsOn |
| volumen de datos | Compose usa `mongo-data`; en ECS no hay volumen y los datos se pierden con la tarea |

El camino del artefacto es Docker → ECR → tarea. El camino HTTP es cliente → ALB → tarea: las solicitudes no pasan por ECR. Para migrar la integración completa faltaría resolver base, broker, worker, secretos, identidad, HTTPS y recuperación. La práctica despliega un recorte de solo lectura, con el mismo dominio de pedidos.

## 2. Infraestructura como código (IaC)

Crear recursos manualmente es lento, difícil de auditar y poco reproducible. IaC describe el estado deseado en archivos versionados. Ventajas: repetibilidad, revisión por pares, historial y eliminación completa. CloudFormation implementa esta idea de forma declarativa: se declara **qué** debe existir, no los pasos para crearlo.

### Conceptos de CloudFormation

- **Plantilla:** archivo YAML con `Parameters`, `Resources` y `Outputs`.
- **Stack:** conjunto de recursos creados, actualizados y eliminados como unidad.
- **Change set:** diferencia calculada entre el estado actual y el deseado antes de aplicar.
- **Rollback:** si un recurso falla, se restaura el estado previo.
- **Funciones intrínsecas:** `!Ref` (referencia), `!GetAtt` (atributo) y `!Sub` (sustitución). Definen dependencias y su orden de creación.

## 3. Infraestructura autocontenida y despliegue en dos etapas

El alumno crea primero una base propia con `infra-base.yaml` y después ejecuta `ecs-fargate-alb.yaml`. Las credenciales y `LabRole` son permisos de la cuenta educativa; no se aprovisionan roles IAM propios. Toda la infraestructura de red y ejecución del ejercicio queda declarada en los archivos.

```text
Stack base: iaew-clase-09-base
  VPC 10.90.0.0/16
    ├─ subred pública A 10.90.1.0/24
    ├─ subred pública B 10.90.2.0/24 (otra zona)
    └─ tabla + ruta 0.0.0.0/0 → Internet Gateway conectado a la VPC
  Security groups + ALB/Listener/TargetGroup + ECR + cluster + logs

Stack de aplicación: iaew-clase-09
  TaskDefinition + Service → tareas Fargate en las subredes de la base
```

### Red y conectividad creadas por el alumno

La VPC es la red virtual propia del ejercicio; las subredes dividen su espacio de direcciones y se ubican en dos zonas. No se usa una VPC por defecto. El Internet Gateway se conecta a la VPC; la ruta `0.0.0.0/0` y las asociaciones de tabla permiten el camino a Internet desde ambas subredes.

Las tareas reciben IP pública para descargar desde ECR y enviar logs sin NAT Gateway. Eso no abre el puerto de aplicación al público: `TaskSecurityGroup` admite 8080 solo desde `AlbSecurityGroup`. El ALB admite HTTP público en 80 y deriva al TargetGroup, que comprueba `/health`.

```text
Artefacto: Docker → ECR → descarga por Fargate
HTTP: cliente → ALB:80 → Listener/TargetGroup → tarea:8080
Logs: stdout de la aplicación → CloudWatch Logs
```

### Inventario de los dos stacks

| Grupo | Recursos base y función |
|---|---|
| Red | Vpc define direcciones; InternetGateway habilita conexión externa; InternetGatewayAttachment lo conecta. |
| Subredes | PublicSubnetA y PublicSubnetB ubican tareas y ALB en dos zonas distintas. |
| Enrutamiento | PublicRouteTable, InternetRoute y dos asociaciones habilitan el camino hacia Internet. |
| Acceso | AlbSecurityGroup filtra entrada pública; TaskSecurityGroup filtra ALB → API. |
| Entrada HTTP | LoadBalancer, Listener y TargetGroup reciben, derivan y comprueban salud. |
| Plataforma | Cluster agrupa tareas, Repository almacena imagen y LogGroup recibe logs. |

Son **17 recursos de base**. La aplicación declara otros **dos**: TaskDefinition describe imagen, CPU/memoria, puerto, logs y permiso de ejecución; Service mantiene DesiredCount y registra tareas en el TargetGroup. Las tareas creadas por ECS no son recursos adicionales escritos en la plantilla.

### Outputs, exports e imports

La base exporta cluster, subredes, grupo de seguridad de tareas, grupo de destinos, logs y URL. La aplicación usa `Fn::ImportValue` para resolver esos valores. Así se ejecuta sobre la infraestructura que construyó el alumno, sin copiar IDs manualmente. Mientras una aplicación importe los exports, CloudFormation impide borrar la base o cambiar esos valores exportados. El orden de eliminación es aplicación → base.

### Permisos de plataforma y código

El execution role permite a ECS descargar imagen y enviar logs; aquí referencia `LabRole` provisto por el Learner Lab. El task role daría al código permisos para llamar servicios AWS, pero esta API no los necesita y no se configura `TaskRoleArn`. Los roles vinculados al servicio de ECS son gestionados por AWS según los permisos de la cuenta: el docente debe comprobar esa habilitación en el ensayo. No se confunden esos permisos con la red que el alumno crea íntegramente.

### Comprobar antes de desplegar contenedores

Con la base en CREATE_COMPLETE, el inventario debe mostrar 17 recursos; el cluster no tiene tareas y el TargetGroup no tiene destinos. ECR existe vacío. El ALB puede devolver 503 porque aún no hay aplicación: no es evidencia de un contenedor defectuoso.

Después de publicar y desplegar la aplicación, deben aparecer tarea y destino healthy, y la URL debe responder JSON. Estas comprobaciones distinguen infraestructura creada de software ejecutándose. Al escalar manualmente a dos tareas no se vuelve a crear la red.

### Limpieza completa

Primero se elimina el stack de aplicación y después la base. ECR pertenece ahora a la base y usa `EmptyOnDelete: true`, por lo que elimina sus imágenes al borrar el repositorio. También se eliminan VPC, gateway, subredes, rutas, ALB, reglas, cluster y logs. No se usa Retain en estas plantillas. La cuenta y LabRole quedan en el Learner Lab.

## 4. Estado: API sin estado y base de datos

Una tarea Fargate es efímera: puede reiniciarse o reemplazarse. Una API sin estado local responde igual desde cualquier instancia, por lo que se puede escalar; los datos deben vivir en una base. En local, Compose conserva los datos de MongoDB en el volumen `mongo-data`. En ECS, la plantilla corre MongoDB como segundo contenedor de la misma tarea (API y base se hablan por `localhost`), sin volumen ni autenticación: sirve para aprender, pero los datos se pierden cuando se reemplaza la tarea y, al escalar a dos tareas, cada una tiene su propia base y los pedidos creados divergen. En producción se usaría un servicio gestionado (Atlas o DocumentDB) o almacenamiento persistente compartido; RabbitMQ y el resto del sistema quedan fuera de esta actividad.

## 5. Límites del AWS Academy Learner Lab

Estos valores pueden variar por curso; verificar en la consola.

- Sesión limitada (aprox. 4 horas); el entorno puede detenerse y se reinicia con *Start Lab*.
- Crédito acotado: eliminar recursos al terminar.
- Rol `LabRole` preexistente; no se crean roles IAM propios.
- Servicios y regiones restringidos; trabajar en `us-east-1`.
- Credenciales temporales: no versionarlas.

## 6. Niveles de evidencia

| Nivel | Qué demuestra | Qué no demuestra |
|---|---|---|
| `cfn-lint` | Sintaxis y reglas de la plantilla | Que el despliegue funcione |
| Base `CREATE_COMPLETE`, sin tareas | Infraestructura del ejercicio creada | Que la API esté desplegada |
| Aplicación `CREATE_COMPLETE` | Tarea y servicio creados | Que responda correctamente por HTTP |
| Respuesta HTTP de `/health` y `/version` | El servicio atiende por el ALB | Seguridad, carga ni disponibilidad sostenida |

## 7. Errores frecuentes

- Imagen construida para `arm64` desplegada en Fargate `x86_64` (`exec format error`).
- Subredes de una sola zona: el ALB requiere al menos dos.
- Stack en `ROLLBACK_COMPLETE`: debe eliminarse antes de volver a crearlo.
- Credenciales vencidas tras reiniciar el lab.
- Intentar borrar la base antes de la aplicación que importa sus salidas.
- Dejar el ALB, la red o el repositorio activos al terminar.

## 8. Relación con el TPI

El despliegue en nube es opcional y otorga bono. No reemplaza los requisitos de la consigna. Un equipo que lo intente debe documentar qué desplegó, cómo lo verificó y qué quedó fuera (por ejemplo base y broker).

## Para profundizar (opcional)

- Servicios administrados para MongoDB y RabbitMQ y sus costos.
- Escalado automático y alarmas.
- Pipelines de despliegue continuo.

## Fuentes del recorrido

- [AWS: modelos de servicio cloud](https://aws.amazon.com/types-of-cloud-computing/).
- [AWS: ejecución con Fargate](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html).
- [AWS: CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html).

Consultadas el 26/10/2026; las restricciones del Learner Lab se confirman en el curso concreto.

### Fuentes de infraestructura

- [AWS: unión de gateway a VPC](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-ec2-vpcgatewayattachment.html).
- [AWS: red de tareas Fargate](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-task-networking.html).
- [AWS: Fn::ImportValue y dependencias entre stacks](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/intrinsic-function-reference-importvalue.html).
- [AWS: repositorio ECR y EmptyOnDelete](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-ecr-repository.html).
- [AWS: roles de ejecución y tarea](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security-iam-roles.html).
