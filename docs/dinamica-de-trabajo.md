# Dinámica de trabajo

En cada clase vamos a trabajar con una consigna práctica y un punto de partida indicado por la cátedra.

En la Clase 02 el punto de partida es una carpeta vacía: el proyecto se crea desde cero durante la clase.

Desde la Clase 03, la cátedra publica una rama de inicio funcional por clase. Esa rama se construye a partir de la actividad resuelta de la clase anterior, para que todos puedan empezar desde una base común.

Convención:

- `main`: materiales públicos, índice, consignas y documentación general.
- `clase-XX-inicio`: punto de partida para la clase `XX`, construido con la actividad resuelta de la clase anterior.

Ejemplo:

```bash
git fetch origin
git checkout clase-03-inicio
git checkout -b trabajo-clase-03
```

## Durante la clase

1. Leer la consigna de la clase.
2. Crear o descargar el proyecto según indique la cátedra.
3. Instalar dependencias con `npm install`.
4. Crear `.env` desde `.env.example`, si corresponde.
5. Ejecutar el proyecto con `npm run dev`.
6. Implementar la actividad.
7. Probar los endpoints.
8. Guardar evidencias.

## Si venís al día

Podés continuar sobre tu propio proyecto, siempre que sea compatible con la consigna de la clase.

## Si te atrasaste

En la Clase 02, seguí el paso a paso desde cero. En clases posteriores, si la cátedra publica una rama de inicio, podés usar la rama indicada para esa clase y volver a engancharte al trabajo de clase.

## Importante

No corresponde usar ramas de inicio publicadas para clases posteriores como entrega de actividades anteriores. Las fechas de publicación y entrega serán consideradas durante la corrección.
