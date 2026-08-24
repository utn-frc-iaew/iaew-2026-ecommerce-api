# iaew-2026-ecommerce-api

Repositorio guía para las actividades prácticas de **Integración de Aplicaciones en Entorno Web - IAEW 2026**.

Durante la cursada vamos a trabajar sobre una mini plataforma de e-commerce. Cada clase agrega una capacidad nueva al sistema: API REST, persistencia, seguridad, integraciones, eventos, observabilidad, documentación, testing y despliegue.

Repositorio de materiales de la cátedra:

```text
https://github.com/utn-frc-iaew/IAEW_2026
```

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

## Cómo comenzar una actividad

1. Leer la consigna indicada para la clase.
2. Crear o descargar el proyecto según indique la cátedra.
3. Instalar dependencias:

   ```bash
   npm install
   ```

4. Crear el archivo `.env` a partir de `.env.example`, si la actividad lo requiere.
5. Ejecutar el proyecto:

   ```bash
   npm run dev
   ```

6. Resolver la actividad siguiendo la consigna de la clase.

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

## Clase disponible

- `clases/clase-02/`: E-commerce integrado - API REST + MongoDB.

Links de la Clase 02:

- Material completo: `https://github.com/utn-frc-iaew/IAEW_2026/blob/main/02_Clases_2026/02%20-%20E-commerce%20integrado%20-%20API%20REST%20%2B%20MongoDB/03_material_completo_semana03_ecommerce.md`
- Presentación HTML pública: `https://utn-frc-iaew.github.io/iaew-2026-ecommerce-api/presentaciones/clase-02/`
- Presentación HTML en el repo: `presentaciones/clase-02/index.html`
- Actividad práctica: `https://github.com/utn-frc-iaew/iaew-2026-ecommerce-api/blob/main/clases/clase-02/README.md`

## Documentación

- `docs/caso-ecommerce.md`
- `docs/dinamica-de-trabajo.md`
- `docs/entregas.md`
