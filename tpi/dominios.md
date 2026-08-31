# Dominios propuestos - TPI IAEW 2026

Todos los dominios tienen complejidad equivalente. Cada equipo puede ajustar nombres y reglas, pero debe conservar CRUD, flujo multi-paso, asincronía, integración, seguridad y observabilidad.

## 1. Pedidos en restaurante con cocina

**Problema:** registrar pedidos, confirmar disponibilidad, enviar pedidos a cocina y mostrar avance de preparación.

**Entidades sugeridas:** `Pedido`, `Producto`, `Mesa` o `Cliente`, `OrdenCocina`.

**CRUD mínimo:** productos y pedidos.

**Flujo multi-paso:** confirmar pedido validando productos, calculando total, cambiando estado y generando orden de cocina.

**Errores a resolver:** producto inexistente, pedido sin ítems, pedido ya confirmado, estado inválido.

**Asincronía:** evento `pedido.confirmado` consumido por cocina/notificación.

**Integración:** WebSocket para tablero de cocina, Webhook de cambio de estado o gRPC a stock simulado.

**Scopes sugeridos:** `read:pedidos`, `write:pedidos`, `confirm:pedidos`, `admin:productos`, `read:cocina`.

**Observabilidad:** pedidos confirmados, rechazados, tiempo de confirmación y eventos procesados.

## 2. E-commerce simplificado

**Problema:** publicar productos, crear carritos, confirmar compras y coordinar pago/envío.

**Entidades sugeridas:** `Producto`, `Carrito`, `Pedido`, `Pago`.

**CRUD mínimo:** productos y pedidos o carritos.

**Flujo multi-paso:** confirmar compra validando stock, calculando total, registrando pedido y simulando pago.

**Errores a resolver:** stock insuficiente, pago rechazado, confirmación duplicada, carrito vacío.

**Asincronía:** evento de compra confirmada para notificación, envío o actualización diferida de stock.

**Integración:** Webhook de pago, gRPC a stock simulado o WebSocket de estado del pedido.

**Scopes sugeridos:** `read:productos`, `write:productos`, `read:pedidos`, `write:pedidos`, `confirm:compras`.

**Observabilidad:** compras confirmadas, pagos rechazados, latencia de confirmación y errores por stock.

## 3. Reserva de turnos de salud

**Problema:** administrar profesionales, pacientes y turnos evitando solapamientos y enviando recordatorios.

**Entidades sugeridas:** `Paciente`, `Profesional`, `Turno`, `Especialidad`.

**CRUD mínimo:** pacientes y turnos o profesionales.

**Flujo multi-paso:** reservar turno validando disponibilidad, bloqueando horario y confirmando turno.

**Errores a resolver:** turno ocupado, paciente inexistente, profesional no disponible, cancelación inválida.

**Asincronía:** evento `turno.reservado` para recordatorio diferido o notificación.

**Integración:** Webhook de confirmación/cancelación, WebSocket de agenda o integración simulada con historia clínica.

**Scopes sugeridos:** `read:turnos`, `write:turnos`, `cancel:turnos`, `admin:profesionales`, `read:pacientes`.

**Observabilidad:** turnos reservados, cancelaciones, solapamientos rechazados y recordatorios enviados.

## 4. Mesa de ayuda

**Problema:** recibir tickets, asignarlos, escalarlos y controlar tiempos de atención.

**Entidades sugeridas:** `Ticket`, `Usuario`, `Agente`, `Comentario`.

**CRUD mínimo:** tickets y usuarios o agentes.

**Flujo multi-paso:** escalar ticket validando prioridad, estado, responsable asignado y reglas de SLA.

**Errores a resolver:** ticket cerrado, agente inexistente, escalamiento no permitido, SLA mal configurado.

**Asincronía:** evento `ticket.escalado` para notificar responsables o calcular vencimientos.

**Integración:** Webhook hacia canal externo, WebSocket de tablero de soporte o gRPC hacia servicio de usuarios.

**Scopes sugeridos:** `read:tickets`, `write:tickets`, `assign:tickets`, `close:tickets`, `admin:sla`.

**Observabilidad:** tickets abiertos, vencidos, escalaciones y tiempo promedio de resolución.

## 5. Biblioteca digital

**Problema:** gestionar títulos digitales, préstamos, devoluciones y listas de espera.

**Entidades sugeridas:** `Usuario`, `Titulo`, `Prestamo`, `Reserva`.

**CRUD mínimo:** títulos y usuarios o préstamos.

**Flujo multi-paso:** prestar e-book validando cupo disponible, usuario habilitado, vencimiento y lista de espera.

**Errores a resolver:** cupo agotado, préstamo duplicado, usuario bloqueado, título inexistente.

**Asincronía:** evento `prestamo.creado` para vencimientos, multas o avisos de devolución.

**Integración:** WebSocket para lista de espera, Webhook a mailing simulado o gRPC a catálogo externo.

**Scopes sugeridos:** `read:titulos`, `write:titulos`, `read:prestamos`, `write:prestamos`, `admin:usuarios`.

**Observabilidad:** préstamos activos, préstamos vencidos, reservas en espera y avisos enviados.

## 6. Eventos y entradas

**Problema:** publicar eventos, vender entradas y validar ingreso.

**Entidades sugeridas:** `Evento`, `Entrada`, `Compra`, `Asistente`.

**CRUD mínimo:** eventos y entradas o compras.

**Flujo multi-paso:** comprar entrada validando disponibilidad, registrando compra, simulando pago y emitiendo entrada.

**Errores a resolver:** evento agotado, pago rechazado, entrada ya usada, compra duplicada.

**Asincronía:** evento `entrada.comprada` para emisión diferida de QR o notificación.

**Integración:** Webhook de pago, WebSocket de control de acceso o gRPC a validador de entradas.

**Scopes sugeridos:** `read:eventos`, `write:eventos`, `buy:entradas`, `validate:entradas`, `admin:eventos`.

**Observabilidad:** entradas vendidas, validaciones exitosas, rechazos de acceso y pagos fallidos.

## 7. Alquiler de vehículos urbanos

**Problema:** administrar vehículos, reservas y confirmaciones evitando solapamientos.

**Entidades sugeridas:** `Vehiculo`, `Reserva`, `Usuario`, `Contrato`.

**CRUD mínimo:** vehículos y reservas.

**Flujo multi-paso:** confirmar reserva validando disponibilidad, bloqueando vehículo, simulando verificación y generando contrato.

**Errores a resolver:** vehículo no disponible, reserva duplicada, verificación rechazada, fechas inválidas.

**Asincronía:** evento `reserva.confirmada` para verificación diferida o notificación.

**Integración:** gRPC a inventario, Webhook de reserva o WebSocket de disponibilidad.

**Scopes sugeridos:** `read:vehiculos`, `write:vehiculos`, `read:reservas`, `write:reservas`, `confirm:reservas`.

**Observabilidad:** reservas confirmadas, rechazos por solapamiento, verificaciones fallidas y vehículos disponibles.

## 8. Reserva de salas de co-working

**Problema:** administrar salas, reservas, capacidad, recursos adicionales y ocupación.

**Entidades sugeridas:** `Sala`, `Reserva`, `Usuario`, `Recurso`.

**CRUD mínimo:** salas y reservas.

**Flujo multi-paso:** programar reserva validando disponibilidad, capacidad, extras y estado de la sala.

**Errores a resolver:** conflicto horario, capacidad insuficiente, sala bloqueada, recurso no disponible.

**Asincronía:** evento `reserva_sala.creada` para recordatorios o liberación por no-show.

**Integración:** Webhook con calendario externo, WebSocket de ocupación en tiempo real o gRPC a servicio de recursos.

**Scopes sugeridos:** `read:salas`, `write:salas`, `read:reservas`, `write:reservas`, `admin:recursos`.

**Observabilidad:** reservas creadas, conflictos rechazados, ocupación por sala y recordatorios enviados.
