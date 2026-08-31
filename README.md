# iaew-2026-ecommerce-api

Repositorio guía para las actividades prácticas de **Integración de Aplicaciones en Entorno Web - IAEW 2026**.

El caso conductor es una mini plataforma de e-commerce. Cada clase agrega una capacidad nueva al sistema: API REST, persistencia, seguridad, integraciones, eventos, observabilidad, documentación, testing y despliegue.

## Accesos rápidos

| Recurso | Link |
|---|---|
| Sitio público | https://utn-frc-iaew.github.io/iaew-2026-ecommerce-api/ |
| TPI 2026 | https://utn-frc-iaew.github.io/iaew-2026-ecommerce-api/tpi/ |
| Repositorio | https://github.com/utn-frc-iaew/iaew-2026-ecommerce-api |

## Índice de clases

| Clase | Tema | Estado |
|---|---|---|
| Clase 00 | Mapa de cursada y TPI | Pendiente |
| Clase 01 | Integraciones web, cloud y ecosistemas | Pendiente |
| Clase 02 | E-commerce integrado - API REST + MongoDB | [Disponible](clases/clase-02/) |
| Clase 03 | Seguridad aplicada a acciones de negocio | [Disponible](clases/clase-03/) |
| Clase 04 | Cuando REST request-response no alcanza | Pendiente |
| Clase 05 | Resiliencia de integraciones | Pendiente |
| Clase 06 | Observabilidad de integraciones | Pendiente |
| Clase 07 | Autodocumentación e IA para documentar | Pendiente |
| Clase 08 | IA aplicada a integraciones y MCP | Pendiente |
| Clase 09 | Testing de integración y contratos | Pendiente |
| Clase 10 | Cloud e IaC con AWS Academy | Pendiente |
| Clase 11 | Clínica TPI y demo final | Pendiente |

## Trabajo Práctico Integrador

| Recurso | Link |
|---|---|
| Página del TPI | [tpi/](tpi/) |
| Enunciado | [tpi/enunciado.md](tpi/enunciado.md) |
| Dominios | [tpi/dominios.md](tpi/dominios.md) |

## Cómo está organizado

```text
iaew-2026-ecommerce-api/
  README.md
  index.html

  clases/
    clase-02/
      README.md
      actividad-practica.md
      material-adicional/
        material-completo.md
      presentacion/
        index.html
        assets/
    clase-03/
      README.md
      actividad-practica.md
      tpi-consigna.md
      material-adicional/
        material-completo.md
      presentacion/
        index.html
        assets/

  docs/
    caso-ecommerce.md
    dinamica-de-trabajo.md
    entregas.md

  tpi/
    README.md
    index.html
    enunciado.md
    dominios.md
    assets/
```

## Qué mira cada persona

Si sos estudiante:

1. Entrá al índice de la clase.
2. Revisá los prerrequisitos.
3. Seguí el paso a paso.
4. Guardá las evidencias solicitadas.
5. Comprimí el proyecto sin `node_modules/` y subilo a UV/Moodle.

Si sos docente:

1. Usá la presentación HTML como apoyo de clase.
2. Usá el material adicional como apunte ampliado.
3. Usá la actividad práctica como consigna de entrega.
4. Publicá en Moodle los links de la sección "Accesos rápidos".

## Caso de uso

El sistema representa una compra online simplificada:

- catálogo de productos;
- creación de pedidos;
- confirmación de pedidos;
- control básico de estado y stock;
- futuras integraciones con pago, envío, notificaciones y observabilidad.

No buscamos construir un marketplace completo. El objetivo es usar un caso realista para aprender integración de aplicaciones.

## Dinámica de trabajo

En la Clase 02 vamos a crear el proyecto desde cero durante la clase. Este repositorio funciona como guía de trabajo y consigna.

En clases posteriores la cátedra podrá publicar puntos de partida funcionales en ramas de inicio, por ejemplo `clase-03-inicio`, para que nadie quede bloqueado si se atrasó o si su proyecto dejó de funcionar.

Dinámica esperada desde la Clase 03:

```bash
git fetch origin
git checkout clase-03-inicio
git checkout -b trabajo-clase-03
```

Cada actividad debe resolverse usando el punto de partida indicado para esa clase. No corresponde utilizar ramas de inicio publicadas para clases posteriores como entrega de una actividad anterior. Las fechas de publicación y entrega serán consideradas durante la corrección.

## Entrega por UV/Moodle

Al finalizar la actividad, cada estudiante deberá comprimir su proyecto y subirlo a la UV/Moodle.

Antes de comprimir, eliminar la carpeta:

```text
node_modules/
```

El archivo comprimido debe incluir:

- código fuente del proyecto;
- `package.json`;
- `package-lock.json`, si existe;
- `.env.example`;
- archivos de configuración necesarios;
- evidencias solicitadas en la consigna de la clase.

No se debe incluir:

- `node_modules/`;
- archivo `.env` con datos privados;
- archivos temporales;
- capturas o archivos no solicitados;
- credenciales, tokens o claves privadas.

## Verificación mínima antes de entregar

Antes de comprimir el proyecto, verificar que funcione ejecutando:

```bash
npm install
npm run dev
```

La cátedra podrá usar estos mismos comandos para revisar la entrega.
