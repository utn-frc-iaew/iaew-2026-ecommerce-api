# iaew-2026-ecommerce-api

Repositorio guía para las actividades prácticas de **Integración de Aplicaciones en Entorno Web - IAEW 2026**.

El caso conductor es una mini plataforma de e-commerce. Cada clase agrega una capacidad nueva al sistema: API REST, persistencia, seguridad, integraciones, eventos, observabilidad, documentación, testing y despliegue.

## Accesos rápidos

Clase 02 - E-commerce integrado - API REST + MongoDB:

| Recurso | Link |
|---|---|
| Presentación HTML | https://utn-frc-iaew.github.io/iaew-2026-ecommerce-api/presentaciones/clase-02/ |
| Actividad práctica | https://github.com/utn-frc-iaew/iaew-2026-ecommerce-api/blob/main/clases/clase-02/README.md |
| Material completo | https://github.com/utn-frc-iaew/iaew-2026-ecommerce-api/blob/main/docs/clase-02-material-completo.md |
| Sitio público | https://utn-frc-iaew.github.io/iaew-2026-ecommerce-api/ |

## Cómo está organizado

```text
iaew-2026-ecommerce-api/
  README.md
  index.html

  clases/
    README.md
    clase-02/
      README.md

  docs/
    README.md
    caso-ecommerce.md
    clase-02-material-completo.md
    dinamica-de-trabajo.md
    entregas.md

  presentaciones/
    README.md
    assets/
    clase-02/
      index.html
      README.md
```

## Qué mira cada persona

Si sos estudiante:

1. Entrá a la actividad de la clase.
2. Revisá los prerrequisitos.
3. Seguí el paso a paso.
4. Guardá las evidencias solicitadas.
5. Comprimí el proyecto sin `node_modules/` y subilo a UV/Moodle.

Si sos docente:

1. Usá la presentación HTML como apoyo de clase.
2. Usá el material completo como apunte ampliado.
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

En clases posteriores la cátedra podrá publicar puntos de partida funcionales para que nadie quede bloqueado si se atrasó o si su proyecto dejó de funcionar.

Cada actividad debe resolverse usando el punto de partida indicado para esa clase. No corresponde utilizar código base publicado para clases posteriores como entrega de una actividad anterior. Las fechas de publicación y entrega serán consideradas durante la corrección.

## Entrega por UV / Moodle

Al finalizar la actividad, cada estudiante deberá comprimir su proyecto y subirlo a la UV / Moodle.

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
