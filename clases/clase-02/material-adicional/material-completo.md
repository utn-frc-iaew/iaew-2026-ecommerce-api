# Material adicional - Clase 02

Materia: Integración de Aplicaciones en Entorno Web
Clase efectiva: 2
Duración: 120 minutos
Tema: E-commerce integrado - API REST + MongoDB

## 1. Por qué esta clase importa

En materias anteriores probablemente ya viste APIs REST y persistencia con bases relacionales como MySQL. Esta clase parte de esa base, pero cambia el foco: vamos a mirar una integración web como una pieza de negocio que debe coordinar datos, reglas, errores y futuros consumidores.

El caso de uso es una mini plataforma de e-commerce. Un cliente consulta productos, crea un pedido y el sistema debe confirmar o rechazar la operación de forma consistente.

La actividad se construye desde cero durante la clase. Primero se implementa una API Express con datos mock para validar los endpoints. Después se levanta MongoDB, se configura una cadena de conexión y se reemplazan los mocks por persistencia con Mongoose.

La pregunta de fondo es:

```text
¿Cómo diseño una API que no solo guarda datos, sino que protege reglas de negocio?
```

## 2. Objetivo funcional

Al finalizar la clase debería existir una API con estos endpoints:

| Endpoint | Tipo | Propósito |
|---|---|---|
| MongoDB en Docker | Soporte | Levantar una base MongoDB local sin instalar MongoDB nativo. |
| `GET /health` | Soporte | Verificar que la API está viva. |
| `POST /productos` | CRUD | Crear un producto. |
| `GET /productos` | CRUD | Consultar productos. |
| `POST /pedidos` | CRUD con reglas | Crear un pedido inicial. |
| `POST /pedidos/:id/confirmar` | Operación de negocio | Confirmar un pedido aplicando reglas. |

La evidencia más importante de la clase es que la segunda confirmación de un mismo pedido no se acepte y responda `409 Conflict`.

## 3. Repositorio guía y entrega

Repositorio:

```text
https://github.com/utn-frc-iaew/iaew-2026-ecommerce-api
```

Dinámica de trabajo:

- Crear el proyecto desde cero durante la clase.
- Implementar primero endpoints mock con Express.
- Conectar después MongoDB con `MONGODB_URI` y Mongoose.
- Probar endpoints y conservar evidencias.
- Eliminar `node_modules/` antes de comprimir.
- Subir el `.zip` a UV/Moodle.

No corresponde usar ramas de inicio publicadas para clases posteriores como entrega de actividades anteriores. Las fechas de publicación y entrega serán consideradas durante la corrección.

## 4. MongoDB local con Docker

Para esta clase no vamos a instalar MongoDB como servicio nativo del sistema operativo. Vamos a usar Docker para levantar una instancia local de MongoDB.

La idea no es dar una clase completa de Docker todavía. Docker aparece como una herramienta práctica para resolver un problema concreto:

```text
Necesito una base de datos local, reproducible y fácil de iniciar/detener.
```

Comandos mínimos:

```bash
docker --version
docker pull mongo:7
docker run --name iaew-mongo -p 27017:27017 -d mongo:7
docker ps
docker logs iaew-mongo
```

Si el contenedor ya existe y está detenido:

```bash
docker start iaew-mongo
```

Para detenerlo:

```bash
docker stop iaew-mongo
```

La API se conecta con esta cadena:

```text
mongodb://localhost:27017/iaew_ecommerce
```

En esta clase usamos `docker run`; Docker Compose se introducirá más adelante cuando una práctica necesite levantar varios servicios.

## 4.1. Herramientas de la clase

La clase usa una cadena de herramientas concreta:

| Herramienta | Rol |
|---|---|
| VS Code | Editar el proyecto y revisar archivos. |
| Node.js | Ejecutar JavaScript del lado servidor. |
| npm | Inicializar el proyecto, instalar dependencias y ejecutar scripts. |
| Express | Crear endpoints HTTP. |
| Nodemon | Reiniciar la API automáticamente durante el desarrollo. |
| Docker | Levantar MongoDB sin instalarlo como servicio del sistema. |
| MongoDB | Persistir documentos de productos y pedidos. |
| Mongoose | Definir modelos y consultar MongoDB desde Node.js. |
| MongoDB for VS Code | Revisar bases, colecciones y documentos desde VS Code. |
| Postman, Insomnia o curl | Probar endpoints HTTP. |

La idea no es aprender herramientas sueltas, sino usarlas como flujo de trabajo:

```text
editar -> ejecutar -> probar endpoint -> persistir -> validar datos
```

Prerrequisitos recomendados para llegar a la actividad:

| Recurso | Verificación |
|---|---|
| Node.js LTS | `node --version` |
| npm | `npm --version` |
| Docker Desktop | `docker --version` y `docker ps` |
| VS Code | Abrir la carpeta del proyecto desde el editor. |
| Herramienta HTTP | Postman, Insomnia, Thunder Client, REST Client o `curl`. |

Extensiones sugeridas de VS Code:

| Extensión | Identificador | Uso |
|---|---|---|
| MongoDB for VS Code | `mongodb.mongodb-vscode` | Ver bases, colecciones y documentos desde VS Code. |
| REST Client | `humao.rest-client` | Probar endpoints desde archivos `.http`. |
| Docker | `ms-azuretools.vscode-docker` | Revisar contenedores, imágenes y logs. |
| ESLint | `dbaeumer.vscode-eslint` | Detectar problemas frecuentes en JavaScript. |
| Prettier | `esbenp.prettier-vscode` | Formatear código de manera consistente. |

## 5. REST aplicado al caso

REST no es simplemente usar JSON por HTTP. Una API REST organiza acciones alrededor de recursos y usa convenciones del protocolo HTTP para comunicar resultados.

En este caso, los recursos principales son Producto y Pedido. Ejemplos:

```http
GET /productos
POST /productos
POST /pedidos
```

Pero no todas las acciones importantes del sistema entran cómodamente en CRUD. Confirmar un pedido no es solo modificar un campo. Confirmar implica ejecutar una decisión de negocio: validar estado, controlar stock, calcular o verificar total, cambiar el estado y dejar una respuesta clara.

Por eso usamos:

```http
POST /pedidos/:id/confirmar
```

Esta ruta expresa mejor la intención que un `PATCH /pedidos/:id` genérico cuando la acción tiene reglas propias.

## 6. Códigos HTTP útiles

Una API bien diseñada no responde siempre `200` ni siempre `500`.

| Código | Uso en esta clase |
|---|---|
| `200 OK` | Consulta o acción exitosa. |
| `201 Created` | Recurso creado correctamente. |
| `400 Bad Request` | El cliente envió datos incompletos o inválidos. |
| `404 Not Found` | El recurso no existe. |
| `409 Conflict` | La solicitud es válida, pero entra en conflicto con el estado actual del negocio. |
| `500 Internal Server Error` | Error inesperado del servidor. |

Ejemplo de `409 Conflict`:

```json
{
  "error": "El pedido ya fue confirmado"
}
```

Esto es mejor que un `500` porque no se trata de un error técnico inesperado. Es una regla de negocio actuando correctamente.

## 7. De MySQL a MongoDB

En MySQL pensamos en tablas, filas, claves primarias y relaciones. Un pedido suele separarse en varias tablas:

```text
pedidos
pedido_items
productos
clientes
```

En MongoDB pensamos en colecciones y documentos. Un pedido puede guardar algunos datos embebidos dentro del documento:

```json
{
  "cliente": {
    "nombre": "Ana Pérez",
    "email": "ana@example.com"
  },
  "estado": "pendiente",
  "items": [
    {
      "productoId": "64...",
      "nombre": "Auriculares Bluetooth",
      "cantidad": 1,
      "precioUnitario": 45999
    }
  ],
  "total": 45999
}
```

La decisión no es "MongoDB no tiene relaciones". La decisión real es qué datos conviene consultar juntos y qué información conviene congelar como parte del evento de negocio.

Por ejemplo, si el precio del producto cambia mañana, el pedido histórico no debería cambiar su total. Por eso puede tener sentido guardar `nombre` y `precioUnitario` dentro del item del pedido.

## 8. Documento vs referencia

En MongoDB se puede modelar de dos formas principales:

| Estrategia | Cuándo conviene |
|---|---|
| Embeber datos | Cuando se consultan juntos y forman parte natural del mismo agregado. |
| Referenciar datos | Cuando el dato vive independiente, se reutiliza mucho o crece demasiado. |

Para esta clase:

- `Producto` vive como documento propio.
- `Pedido` guarda items embebidos con una copia de datos relevantes.
- El item conserva también `productoId` para trazabilidad.

## 9. CRUD

CRUD significa Create, Read, Update y Delete.

Ejemplo de CRUD:

```http
POST /productos
```

Se crea un producto con datos simples. Puede haber validaciones, pero la acción principal es persistir un recurso.

Otro ejemplo:

```http
GET /productos
```

Se leen recursos existentes.

CRUD es necesario, pero no alcanza para representar todo el comportamiento de una aplicación.

## 10. Operaciones de negocio

Una operación de negocio coordina reglas. No se limita a guardar un campo.

Ejemplo:

```http
POST /pedidos/:id/confirmar
```

Esta acción puede implicar:

- Buscar el pedido.
- Verificar que existe.
- Verificar que está pendiente.
- Verificar stock suficiente.
- Cambiar estado a confirmado.
- Registrar fecha de confirmación.
- Preparar una integración futura con pago, envío o notificación.

Aunque técnicamente haya una escritura en base de datos, conceptualmente es una acción de negocio.

## 11. Consistencia

La consistencia significa que el sistema no queda en un estado contradictorio.

Estados posibles:

```text
pendiente -> confirmado
pendiente -> cancelado
confirmado -> no debería volver a confirmarse
```

Si un usuario o sistema intenta confirmar dos veces, la API debe responder de forma previsible.

Primera respuesta:

```json
{
  "id": "123",
  "estado": "confirmado"
}
```

Segunda respuesta:

```json
{
  "error": "El pedido ya fue confirmado"
}
```

Código HTTP:

```http
409 Conflict
```

## 12. Idempotencia básica

Una operación idempotente puede repetirse sin cambiar el resultado final más de una vez.

Ejemplo cotidiano:

- Consultar `GET /productos` es idempotente.
- Crear un pedido con `POST /pedidos` normalmente no es idempotente.
- Confirmar un pedido puede diseñarse para que sea segura ante reintentos.

En esta clase usamos una forma simple:

- Si el pedido está pendiente, se confirma.
- Si ya está confirmado, no se confirma otra vez.
- La API informa el conflicto.

En sistemas reales, la idempotencia es clave cuando hay pagos, reservas de stock, envíos, eventos o integraciones con servicios externos.

## 13. Estructura recomendada de la API

Una organización simple:

```text
iaew-2026-ecommerce-api/
  app.js
  db.js
  models/
    Producto.js
    Pedido.js
  routes/
    productos.js
    pedidos.js
```

Una evolución posible:

```text
iaew-2026-ecommerce-api/
  controllers/
  services/
  repositories/
  models/
  routes/
```

Para la clase alcanza una estructura chica, pero conviene hablar desde el inicio de responsabilidades:

- Ruta: recibe la solicitud HTTP.
- Servicio: aplica reglas de negocio.
- Modelo: representa persistencia.

## 14. Ejemplo de Producto

```json
{
  "nombre": "Auriculares Bluetooth",
  "precio": 45999,
  "categoria": "audio",
  "stock": 12,
  "activo": true
}
```

Validaciones esperables:

- `nombre` requerido.
- `precio` mayor que cero.
- `stock` mayor o igual que cero.
- `activo` booleano.

## 15. Ejemplo de Pedido

Solicitud:

```json
{
  "cliente": {
    "nombre": "Ana Pérez",
    "email": "ana@example.com"
  },
  "items": [
    {
      "productoId": "64...",
      "cantidad": 1
    }
  ]
}
```

El servidor debería completar datos:

```json
{
  "cliente": {
    "nombre": "Ana Pérez",
    "email": "ana@example.com"
  },
  "estado": "pendiente",
  "items": [
    {
      "productoId": "64...",
      "nombre": "Auriculares Bluetooth",
      "cantidad": 1,
      "precioUnitario": 45999
    }
  ],
  "total": 45999
}
```

Esto evita confiar en precios enviados por el cliente.

## 16. Seguridad básica de datos de entrada

Aunque la clase no sea de seguridad, hay una regla importante:

```text
No confiar en el cliente.
```

El cliente puede pedir un producto y una cantidad. Pero el precio y el total deberían calcularse del lado del servidor con datos persistidos.

Esto también prepara el terreno para futuras clases sobre autenticación, autorización, roles, scopes y agentes de IA.

## 17. Dónde entra IA/MCP

Una pregunta que vamos a repetir durante la materia:

```text
¿Qué pasaría si esta acción la ejecuta un agente de IA?
```

Si un agente puede confirmar pedidos, necesita:

- Una API clara y documentada.
- Permisos limitados.
- Errores previsibles.
- Trazabilidad de lo que hizo.
- Reglas de negocio del lado del servidor.
- Confirmación humana cuando la acción tenga impacto económico o logístico.

Un agente no debería conectarse directo a MongoDB para modificar documentos. Debería usar una API que controle permisos, reglas, auditoría y errores.

## 18. Checklist final

Antes de cerrar la clase, verificar:

- La API responde `GET /health`.
- MongoDB está levantado con Docker y `docker ps` muestra `iaew-mongo`.
- Hay productos persistidos.
- Se puede crear un pedido.
- Se puede confirmar un pedido.
- Se pueden ver documentos en `iaew_ecommerce` usando MongoDB for VS Code.
- Se puede explicar por qué confirmar no es solo CRUD.
- Se puede mostrar un `409 Conflict`.
- Se entiende cómo entregar por UV/Moodle sin `node_modules/`.
- Se entiende que en la próxima clase habrá más novedades sobre el TPI.

## 19. Glosario corto

API: contrato que permite que sistemas se comuniquen.
Endpoint: URL y método HTTP que expone una capacidad.
CRUD: operaciones básicas sobre recursos.
Operación de negocio: acción con reglas del dominio.
MongoDB: base de datos documental no relacional.
Docker: herramienta para ejecutar dependencias como contenedores.
Documento: unidad de datos JSON-like persistida en MongoDB.
Idempotencia: propiedad de una operación que permite repetirla sin duplicar efectos no deseados.
Conflict: respuesta HTTP que indica incompatibilidad con el estado actual del recurso o negocio.
MCP: protocolo para conectar modelos/agentes con herramientas o contextos externos de forma estructurada.
