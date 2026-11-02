# Recursos de la actividad

Seguí [la actividad](../actividad-practica.md): este directorio no contiene una segunda consigna.

- `coleccion-inicio.json`: Postman Collection v2.1 con setup y tres grupos de aserciones pendientes.
- `entorno.example.json`: estructura sin credenciales; copiar a `entorno.local.json`.
- `ejecutar.cjs`: ejecuta la colección del alumno y escribe un resumen sin cuerpos, headers ni credenciales. Rechaza TODO pendientes y variables vacías.
- `compatibilidad.cjs`: ejemplo de contrato sobre fixtures; no llama a la API.
- `package.json` y `package-lock.json`: instalación reproducible de Newman.

Desde este directorio: `npm ci`, luego `npm run pruebas` con los archivos privados y las aserciones preparados. La guía explica cada paso y cómo interpretar los resultados. Exportá siempre la colección en formato v2.1 para Newman.
