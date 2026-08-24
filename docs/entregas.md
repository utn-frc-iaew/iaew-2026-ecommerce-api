# Entregas por UV / Moodle

Las actividades prácticas se entregan por UV / Moodle en formato comprimido.

## Antes de comprimir

Eliminar:

```text
node_modules/
```

No incluir:

- `.env`;
- credenciales;
- tokens;
- claves privadas;
- archivos temporales;
- carpetas generadas que no sean necesarias para ejecutar el proyecto.

## El `.zip` debe incluir

- Código fuente.
- `package.json`.
- `package-lock.json`, si existe.
- `.env.example`.
- Archivos de configuración necesarios.
- Evidencias solicitadas en la consigna.

## Verificación mínima

Antes de entregar, probar:

```bash
npm install
npm run dev
```

La cátedra podrá usar esos mismos comandos para revisar la entrega.
