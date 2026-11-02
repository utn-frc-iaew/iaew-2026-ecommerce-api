# Recursos de la demo guiada

Seguir [el recorrido de clase](../actividad-practica.md). El docente ejecuta la demostración y el curso discute los resultados. No se solicita entrega individual.

- `coleccion-inicio.json`: base v2.1 con tres bloques para completar en pantalla. Los marcadores TODO_ALUMNO son nombres técnicos conservados del recurso.
- `entorno.example.json`: estructura sin credenciales; el docente prepara su copia privada.
- `ejecutar.cjs`: runner Newman con resumen depurado; rechaza los marcadores pendientes.
- `compatibilidad.cjs`: ejemplo de contrato con fixtures.
- `evidencia.example.md`: apoyo opcional para registrar observaciones; no se entrega.
- [carga/](carga/README.md): escenario y guía Artillery.

Preparación docente: `npm ci`; ejecución sobre la copia exportada: `npm run pruebas -- coleccion-demo.json`. La resolución de respaldo permanece fuera del repositorio público. Los alumnos pueden repetir el recorrido opcionalmente, sin requisito de instalación para asistir a clase.
