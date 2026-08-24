# Caso guía: mini plataforma de e-commerce integrada

El caso guía de la cursada es una mini plataforma de e-commerce.

El sistema permite trabajar con un flujo conocido por cualquier usuario: consultar productos, crear un pedido, confirmar una compra y preparar integraciones con otros sistemas.

## Actores

- Cliente: consulta productos y genera pedidos.
- API de e-commerce: expone endpoints y protege reglas de negocio.
- Base de datos: persiste productos, pedidos y estados.
- Servicios externos simulados: pago, envío, notificaciones y observabilidad.
- Agente de IA futuro: consulta información o ejecuta acciones controladas a través de APIs.

## Flujo inicial

```text
Cliente -> API REST -> MongoDB
       crear pedido
       confirmar pedido
       preparar futuras integraciones
```

## Por qué este caso sirve para IAEW

El e-commerce permite trabajar progresivamente:

- REST y persistencia;
- autenticación y autorización;
- validación de reglas de negocio;
- idempotencia;
- Webhooks de pago;
- mensajería para stock/envío/notificaciones;
- WebSockets para seguimiento de estado;
- observabilidad de pedidos y errores;
- documentación de APIs;
- testing de integración y contratos;
- despliegue en cloud;
- acciones ejecutadas por agentes de IA con permisos y auditoría.

## Regla recurrente

Una API no solo guarda datos. También protege acciones de negocio.
