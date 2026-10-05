# Evidencia individual — Clase 07

Estudiante:

## Operación y período

- Pedido:
- Traza:
- Correlación:
- Inicio y fin del intervalo observado:

## Recorrido y logs

Insertar capturas de la traza y de sus logs. Identificar servicio, span y evento.

## Métricas

Insertar CPU, memoria y duración del worker en ese intervalo. Indicar unidades y explicar qué demuestran y qué no demuestran.

## Monitor y alerta

Indicar consulta, ventana, umbral, evaluación, persistencia y estado. ¿Qué falta para notificar? ¿Qué significa No Data?

## Propagación

| Configuración | trace_id API | trace_id worker | span_id publicación | span_id consumo | correlation_id |
|---|---|---|---|---|---|
| Propagación activada | | | | | |
| Propagación desactivada | | | | | |

¿Quién crea cada ID? ¿Qué cambió y qué se conservó?

## Diagnóstico

Síntoma → alcance → etapa → hechos → hipótesis → verificación. Distinguir espera simulada de uso de CPU y no afirmar causalidad solo por coincidencia temporal.

## Preguntas de comprensión

- ¿Por qué HTTP 200 no demuestra que el worker terminó?
- ¿Puede una espera larga convivir con CPU baja? Justificar con mis capturas.
- ¿Qué diferencia hay entre promedio y p95?
- ¿Qué diferencia hay entre ventana, evaluación y persistencia?
