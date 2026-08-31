# Clase 03 - Seguridad aplicada a acciones de negocio

Materia: Integración de Aplicaciones en Entorno Web
Clase efectiva: 3
Fecha sugerida: lunes 31 de agosto de 2026
Duración: 120 minutos
Tema: Seguridad aplicada a acciones de negocio

## Materiales de la clase

| Recurso | Ubicación | Uso |
|---|---|---|
| Actividad práctica | [actividad-practica.md](actividad-practica.md) | Guía paso a paso para incorporar seguridad básica a la API. |
| Presentación | [presentacion/](presentacion/) | Diapositivas HTML navegables para usar en clase. |
| Material adicional | [material-adicional/material-completo.md](material-adicional/material-completo.md) | Apunte ampliado con conceptos, ejemplos y glosario. |
| Consigna TPI | [tpi-consigna.md](tpi-consigna.md) | Presentación formal del Trabajo Práctico Integrador. |

## Objetivo de la clase

Que cada estudiante transforme la API de e-commerce de la clase anterior en una API que empiece a proteger acciones de negocio:

- distinguir endpoints públicos y privados;
- usar variables de entorno para secretos;
- validar una API key para integraciones internas;
- validar un Bearer token simulado para acciones de usuario;
- aplicar roles simples para operaciones sensibles;
- conservar evidencias de pruebas HTTP;
- conectar estas decisiones con el TPI.

## Agenda de 120 minutos

| Minutos | Bloque | Actividad |
|---:|---|---|
| 0-10 | Apertura | Recuperar lo construido en Clase 02 y nombrar qué acciones necesitan protección. |
| 10-30 | Conceptos | Autenticación, autorización, secretos, tokens, roles y superficie de ataque. |
| 30-45 | Diseño guiado | Mapa de endpoints públicos, privados y administrativos. |
| 45-90 | Taller | Implementar middlewares de API key, Bearer token simulado y roles. |
| 90-105 | Evidencias | Probar casos permitidos y rechazados con herramienta HTTP. |
| 105-115 | TPI | Presentar dominios, entregas, fechas tentativas y criterios. |
| 115-120 | Cierre | Recapitulación y pregunta IA/MCP: ¿qué pasaría si esta acción la ejecuta un agente de IA? |

## Punto de partida

La Clase 03 debería comenzar desde una rama de inicio publicada por la cátedra. Esa rama se construye con la actividad resuelta de la Clase 02.

```bash
git fetch origin
git checkout clase-03-inicio
git checkout -b trabajo-clase-03
```

Si venís al día, podés continuar sobre tu proyecto de Clase 02 siempre que tenga:

- API Express funcionando;
- MongoDB local funcionando;
- modelos de `Producto` y `Pedido`;
- endpoints `GET /health`, `GET /productos`, `POST /productos`, `POST /pedidos` y `POST /pedidos/:id/confirmar`.

## Entrega individual de la clase

La entrega se realiza por UV/Moodle como archivo `.zip`, sin `node_modules/`, sin `.env` y con las evidencias indicadas en la actividad práctica.

El `.zip` debe incluir:

- código fuente actualizado;
- `package.json` y `package-lock.json`, si existe;
- `.env.example`;
- archivo de evidencias HTTP o capturas solicitadas;
- breve `README.md` del proyecto si el estudiante agregó notas propias.

## Resultado esperado

Al finalizar la clase, la API debería tener al menos estos comportamientos:

| Endpoint | Protección esperada |
|---|---|
| `GET /health` | Público. |
| `GET /productos` | Público. |
| `POST /pedidos` | Requiere `Authorization: Bearer cliente-demo`. |
| `POST /pedidos/:id/confirmar` | Requiere usuario autenticado con rol `cliente`. |
| `POST /productos` | Requiere `x-api-key` válida y rol `admin`. |

No buscamos seguridad productiva completa todavía. Buscamos entender dónde se ubican las decisiones de seguridad en una API y cómo afectan a una integración.
