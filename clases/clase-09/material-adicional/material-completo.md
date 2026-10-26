# Material teórico · Cloud e IaC con AWS Academy

## 1. Nube y responsabilidades

Nube es acceso bajo demanda a recursos de cómputo, red y almacenamiento mediante API. El proveedor administra el hardware; el equipo sigue siendo responsable de la arquitectura, los permisos, la configuración y los costos. Un recurso olvidado se sigue facturando.

### Modelos de servicio: qué delegamos

IaaS (Infrastructure as a Service) proporciona capacidad de cómputo, red y discos; en una VM seguimos administrando sistema operativo, runtime, aplicación y datos. PaaS (Platform as a Service) ofrece un entorno administrado para desplegar nuestra aplicación. SaaS (Software as a Service) entrega software listo para usar, como correo web: configuramos su uso en lugar de desplegar nuestro backend allí.

Son modelos de responsabilidad, no etapas de migración. ECS con Fargate ejecuta contenedores sin administrar las máquinas subyacentes; conservamos imagen, recursos, red y permisos. No equivale a contratar una aplicación SaaS terminada.

Una región ubica recursos geográficamente y contiene zonas de disponibilidad. Escalar modifica capacidad; la elasticidad ajusta capacidad a demanda. Ninguna de las dos aparece automáticamente por usar nube: debe diseñarse y configurarse. El ejercicio cambia cantidad de tareas manualmente.

### Desde Compose: dos caminos posibles

El Compose real de Clase 08 contiene API, worker, MongoDB y RabbitMQ. Publica la API en loopback y usa un volumen para MongoDB; el host MCP se inicia aparte. Compose ya aporta una descripción reproducible de los servicios locales. La demanda nueva es preparar un entorno remoto y controlar acceso, operación y costos.

Un camino es crear una VM, instalar Docker y ejecutar Compose. Conservamos el modelo conocido y administramos el sistema operativo, el runtime y la recuperación. Otro es publicar imágenes y usar ejecución administrada de contenedores, como haremos hoy. Esta elección cambia responsabilidades; no convierte automáticamente el archivo Compose a CloudFormation.

| Necesidad local | Decisión del laboratorio AWS |
|---|---|
| build / imagen | Docker construye; ECR almacena el artefacto |
| command / environment | TaskDefinition declara proceso y configuración |
| servicio corriendo | Service mantiene tareas ejecutadas con Fargate |
| ports | ALB recibe en 80 y deriva a la API en 8080 |
| red y acceso | VPC, subredes y security groups |
| healthcheck | TargetGroup comprueba /health; no es el mismo control que el del contenedor |
| volumen de datos | Persistencia externa por diseñar; la API ficticia de hoy no escribe datos |

El camino del artefacto es Docker → ECR → tarea. El camino HTTP es cliente → ALB → tarea: las solicitudes no pasan por ECR. Para migrar la integración completa faltaría resolver base, broker, worker, secretos, identidad, HTTPS y recuperación. La práctica despliega un recorte de solo lectura, con el mismo dominio de pedidos.

## 2. Infraestructura como código (IaC)

Crear recursos manualmente es lento, difícil de auditar y poco reproducible. IaC describe el estado deseado en archivos versionados. Ventajas: repetibilidad, revisión por pares, historial y eliminación completa. CloudFormation implementa esta idea de forma declarativa: se declara **qué** debe existir, no los pasos para crearlo.

### Conceptos de CloudFormation

- **Plantilla:** archivo YAML con `Parameters`, `Resources` y `Outputs`.
- **Stack:** conjunto de recursos creados, actualizados y eliminados como unidad.
- **Change set:** diferencia calculada entre el estado actual y el deseado antes de aplicar.
- **Rollback:** si un recurso falla, se restaura el estado previo.
- **Funciones intrínsecas:** `!Ref` (referencia), `!GetAtt` (atributo) y `!Sub` (sustitución). Definen dependencias y su orden de creación.

## 3. Arquitectura de la práctica

```
Cliente → ALB (:80) → Servicio ECS Fargate (:8080) → contenedor desde ECR
                         └─ logs en CloudWatch Logs
```

| Recurso | Necesidad que cubre |
|---|---|
| ECR | Almacenar la imagen del contenedor |
| ECS Cluster / Task Definition / Service | Ejecutar y mantener el número deseado de tareas |
| Fargate | Ejecutar contenedores sin administrar servidores |
| ALB + Listener + Target Group | Exponer la API, repartir tráfico y comprobar `/health` |
| Security Groups | Solo el ALB recibe tráfico público; las tareas solo aceptan al ALB |
| CloudWatch Log Group | Conservar la salida de la aplicación |
| `LabRole` | Permisos de ejecución y de tarea ya provistos en el Learner Lab |

### Red y permisos de punta a punta

La **VPC** es la red virtual. Las **subredes** son segmentos de esa red; aquí se usan dos subredes públicas por defecto en zonas distintas. El laboratorio necesita esa VPC disponible. El script no crea una red nueva.

```text
Cliente → ALB:80 → Listener → TargetGroup → tarea:8080
          AlbSecurityGroup              TaskSecurityGroup
```

Un security group filtra tráfico. `AlbSecurityGroup` admite HTTP público; `TaskSecurityGroup` admite el puerto 8080 solo desde el grupo del ALB. Aunque las tareas reciben IP pública para acceder al registro y a logs, no se abre su puerto directamente a Internet. La API contiene datos ficticios y se publica por HTTP solo durante la práctica.

Los nueve recursos de la plantilla cumplen funciones distintas:

| Recurso | Función y consecuencia de su ausencia |
|---|---|
| AlbSecurityGroup | Permite entrada HTTP al ALB; sin reglas de entrada el cliente no llega. |
| TaskSecurityGroup | Permite ALB → tarea; sin esa entrada falla el health check. |
| LogGroup | Recibe logs; la configuración de la tarea depende de él. |
| Cluster | Agrupa la ejecución ECS; el servicio lo referencia. |
| LoadBalancer | Da un punto de entrada y distribuye solicitudes. |
| TargetGroup | Registra destinos y comprueba `/health`; el listener lo necesita. |
| Listener | Escucha en 80 y deriva al target group; sin él no hay ruta HTTP. |
| TaskDefinition | Define imagen, recursos, puerto y permisos de cada tarea. |
| Service | Mantiene DesiredCount tareas y las registra en el target group. |

El **execution role** permite al servicio ECS descargar la imagen y enviar logs. El **task role** son las credenciales que recibiría el código de la aplicación para llamar servicios AWS. Aquí ambos referencian `LabRole` por el entorno educativo; la aplicación no necesita llamar APIs AWS. En producción se diseñan permisos separados y mínimos. `LabRole`, VPC y subredes ya existen; ECR lo crea un script fuera del stack y por eso necesita borrado explícito.

## 4. Por qué la API es stateless

Una tarea Fargate es efímera: puede reiniciarse o reemplazarse. Una API sin estado local responde igual desde cualquier instancia, por lo que se puede escalar. Los datos viven en servicios externos (base de datos, broker). Esta API concreta devuelve datos fijos y no guarda cambios: no despliega ni consulta los datos de las clases anteriores. Hoy se despliega solo la API; MongoDB y RabbitMQ requerirían servicios administrados o almacenamiento persistente.

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
| Stack `CREATE_COMPLETE` | Los recursos se crearon | Que la aplicación responda |
| Respuesta HTTP de `/health` y `/version` | El servicio atiende por el ALB | Seguridad, carga ni disponibilidad sostenida |

## 7. Errores frecuentes

- Imagen construida para `arm64` desplegada en Fargate `x86_64` (`exec format error`).
- Subredes de una sola zona: el ALB requiere al menos dos.
- Stack en `ROLLBACK_COMPLETE`: debe eliminarse antes de volver a crearlo.
- Credenciales vencidas tras reiniciar el lab.
- Dejar el ALB activo al terminar.

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
