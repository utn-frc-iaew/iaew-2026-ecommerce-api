# Material teórico · Cloud e IaC con AWS Academy

## 1. Nube y responsabilidades

Nube es acceso bajo demanda a recursos de cómputo, red y almacenamiento mediante API. El proveedor administra el hardware; el equipo sigue siendo responsable de la arquitectura, los permisos, la configuración y los costos. Un recurso olvidado se sigue facturando.

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

## 4. Por qué la API es stateless

Una tarea Fargate es efímera: puede reiniciarse o reemplazarse. Una API sin estado local responde igual desde cualquier instancia, por lo que se puede escalar. Los datos viven en servicios externos (base de datos, broker). Hoy se despliega solo la API; MongoDB y RabbitMQ requerirían servicios administrados o almacenamiento persistente.

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
