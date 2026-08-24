# Clase 02 - E-commerce integrado - API REST + MongoDB

Materia: Integración de Aplicaciones en Entorno Web
Clase efectiva: 2
Duración: 120 minutos
Tema: E-commerce integrado - API REST + MongoDB

## Materiales de la clase

| Recurso | Ubicación | Uso |
|---|---|---|
| Actividad práctica | [actividad-practica.md](actividad-practica.md) | Guía paso a paso para desarrollar y entregar durante la clase. |
| Presentación | [presentacion/](presentacion/) | Diapositivas HTML navegables para usar en clase. |
| Material adicional | [material-adicional/material-completo.md](material-adicional/material-completo.md) | Apunte ampliado con conceptos, ejemplos y glosario. |

## Estructura de una clase

Cada clase va a concentrar sus recursos en una única carpeta:

```text
clases/
  clase-XX/
    README.md
    actividad-practica.md
    material-adicional/
    presentacion/
```

## Punto de partida

En esta clase el proyecto se crea desde cero. No hay rama de inicio.

Desde la Clase 03, cuando haya una rama de inicio publicada, se indicará explícitamente qué rama usar para comenzar. Ejemplo:

```bash
git fetch origin
git checkout clase-03-inicio
git checkout -b trabajo-clase-03
```

No corresponde usar ramas de inicio de clases posteriores para resolver una entrega anterior.

## Entrega

La entrega se realiza por UV/Moodle como archivo `.zip`, sin `node_modules/`, sin `.env` y con las evidencias indicadas en la actividad práctica.

## Prerrequisitos

- Node.js LTS y npm.
- Docker Desktop funcionando.
- VS Code.
- Extensión `MongoDB for VS Code`.
- Herramienta para probar HTTP: Postman, Insomnia, Thunder Client, REST Client o `curl`.

Verificación rápida:

```bash
node --version
npm --version
docker --version
docker ps
```
