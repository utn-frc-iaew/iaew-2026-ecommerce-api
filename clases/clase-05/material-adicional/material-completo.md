# Clase 05 — Resiliencia de integraciones

Material teórico de apoyo para la Clase 05 de Integración de Aplicaciones en Entorno Web. El caso continúa el e-commerce de Clase 04: una API confirma pedidos, persiste en MongoDB, publica pedido.confirmado en RabbitMQ y un worker procesa la notificación.

## 1. Qué problema resolvemos

Una integración no falla únicamente cuando devuelve un error. También puede completar tarde, completar solo una parte o responder de forma ambigua. Si el cliente vence su timeout después de que el servidor confirmó un pedido, no sabe si debe repetir. Si repite sin un contrato idempotente, puede volver a descontar stock o publicar otro evento.

La resiliencia busca conservar las reglas del negocio ante esas condiciones y hacer visible lo que no pudo resolverse. No consiste en esconder errores ni en reintentar todo.

En esta clase se protegen dos fronteras:

1. En HTTP, Idempotency-Key permite reconocer una misma intención.
2. En mensajería, eventId permite reconocer un mismo hecho.

## 2. Mapa de fallas

- **Tarde:** la operación quizá terminó, pero la respuesta llegó después del timeout.
- **Duplicada:** la misma intención o evento llega más de una vez.
- **Parcial:** MongoDB cambió, pero RabbitMQ no confirmó la publicación.
- **Indisponible:** una dependencia no puede aceptar trabajo temporalmente.
- **Permanente:** el mensaje es inválido o refiere a una entidad que no existe.

Antes de reintentar conviene responder tres preguntas: ¿la falla es transitoria?, ¿la operación es segura de repetir?, ¿cómo se verifica el resultado anterior?

## 3. Idempotencia técnica y de negocio

Una operación idempotente puede ejecutarse varias veces con la misma intención sin producir nuevos efectos observables. No significa ignorar el segundo pedido: el servidor debe reconocerlo y devolver un resultado compatible.

La dimensión técnica identifica la solicitud lógica mediante una clave. La dimensión de negocio protege los efectos: confirmar un pedido debe descontar stock una sola vez y originar un único evento.

El endpoint es POST /pedidos/:id/confirmar y conserva el scope confirm:pedidos. Exige el header Idempotency-Key:

- entre 8 y 128 caracteres;
- solo A–Z, a–z, 0–9, punto, guion bajo, dos puntos y guion;
- no contiene tokens, credenciales ni datos sensibles.

Resultados del contrato:

| Caso | HTTP | code |
|---|---:|---|
| Header ausente | 400 | IDEMPOTENCY_KEY_REQUIRED |
| Formato inválido | 400 | IDEMPOTENCY_KEY_INVALID |
| Primera ejecución | 200 | — |
| Mismo pedido y misma clave | 200 | — |
| Pedido confirmado con otra clave | 409 | IDEMPOTENCY_KEY_MISMATCH |
| Clave usada en otro pedido | 409 | IDEMPOTENCY_KEY_REUSED |

La primera respuesta incluye Idempotency-Replayed: false y el cuerpo contiene pedido, evento e idempotencia. El replay incluye Idempotency-Replayed: true y devuelve el mismo eventId. No vuelve a descontar ni publicar.

El modelo Pedido conserva confirmacionIdempotencyKey con índice único sparse y confirmacionEvento con el evento publicado. La unicidad evita reutilizar la clave en otro pedido. Sparse permite que pedidos todavía no confirmados no colisionen entre sí.

Esta solución reduce duplicados secuenciales y es apropiada para el laboratorio. No resuelve por sí sola toda carrera concurrente ni vuelve atómicas MongoDB y RabbitMQ.

## 4. Errores que permiten decidir

Una respuesta operable tiene esta forma:

    {
      "error": "Descripción legible",
      "code": "CODIGO_ESTABLE",
      "details": { "field": "Idempotency-Key" },
      "retryable": false,
      "action": "Acción sugerida"
    }

error sirve a una persona; code sirve a un programa; details agrega contexto seguro; retryable indica si repetir puede tener sentido; action orienta el siguiente paso. Nunca deben exponerse secretos, stack traces internos ni credenciales.

Una falla transitoria puede desaparecer sin cambiar la solicitud: por ejemplo, una dependencia temporalmente caída. Una falla permanente requiere corregir datos, contrato o configuración: reintentar JSON inválido no lo vuelve válido.

## 5. Timeout, backoff y límite

El timeout define cuánto espera quien llama. No cancela necesariamente el trabajo remoto. Por eso, después de un timeout, el estado es desconocido hasta consultarlo o repetir con la misma clave.

El backoff separa intentos para no amplificar una caída. Puede crecer entre intentos y sumar jitter, una variación aleatoria que evita que muchos clientes vuelvan al mismo tiempo. Todo retry necesita un máximo y una condición de corte.

En este laboratorio, el consumidor usa MAX_RETRIES=3 y RETRY_DELAY_MS=3000 por defecto. `MAX_RETRIES` cuenta reintentos posteriores a la entrega inicial: puede haber hasta cuatro procesamientos (`count` 0 a 3). Son parámetros didácticos, no valores universales.

## 6. Entrega al menos una vez

RabbitMQ puede volver a entregar un mensaje cuando no recibió el ack. Un caso típico es:

1. el worker aplica el efecto;
2. la conexión cae antes del ack;
3. el broker vuelve a entregar el mensaje.

Esto evita perder trabajo por una caída, pero introduce duplicados posibles. At least once no significa exactly once. El consumidor debe ser idempotente o deduplicar.

El eventId identifica el hecho de negocio, mientras que Idempotency-Key identifica la intención HTTP que lo originó. No son intercambiables.

## 7. Deduplicación por eventId

EventoProcesado registra eventId con índice único y la fecha de procesamiento. El flujo didáctico implementado es:

1. validar el mensaje;
2. consultar si eventId ya fue registrado;
3. si ya existe, registrar “duplicado” y hacer ack;
4. si no existe, reservar eventId mediante el índice único;
5. aplicar y persistir el efecto;
6. si el efecto falla, borrar la reserva y reintentar; si termina, hacer ack.

El reenvío del mismo evento debe reconocerse sin repetir la persistencia. La solución didáctica explica la idea, pero una implementación robusta debe analizar atomicidad entre el efecto y el registro de deduplicación, además de carreras concurrentes.

## 8. Ack, retry y DLQ

El ack comunica que el original ya puede retirarse. Debe ocurrir después de completar una decisión segura.

| Resultado | Acción |
|---|---|
| Procesado | ack |
| Duplicado reconocido | ack |
| Falla transitoria con intentos | publicar en retry, esperar confirmación y hacer ack del original |
| Evento inválido o pedido inexistente | publicar en DLQ con razón, confirmar y hacer ack |
| Intentos agotados | publicar en DLQ con razón, confirmar y hacer ack |

No se usa nack(msg, false, true). El requeue inmediato, sin espera ni contador, puede formar un ciclo infinito.

Republicar y después hacer ack reduce la pérdida deliberada del original, pero ambas acciones tampoco son atómicas. Si la conexión cae entre ellas, puede haber un duplicado; por eso la deduplicación sigue siendo necesaria.

## 9. Topología de retry

La topología conserva pedidos.exchange, la routing key pedido.confirmado y la cola principal notificaciones.pedido-confirmado. Agrega:

- exchange pedidos.retry.exchange;
- cola notificaciones.pedido-confirmado.retry;
- TTL configurado con RETRY_DELAY_MS;
- dead-letter de regreso a pedidos.exchange;
- header propio x-retry-count, inicialmente 0.

Cuando ocurre una falla transitoria, el worker incrementa x-retry-count y publica en retry. El mensaje espera el TTL; al vencer, RabbitMQ lo enruta otra vez al exchange principal. Así la espera no bloquea el consumidor ni ocupa la cola principal con redelivery inmediato.

SIMULATE_TRANSIENT_FAILURES permite demostrar este recorrido. El contador no debe superar MAX_RETRIES.

## 10. Dead-letter queue

Los mensajes inválidos, permanentes o agotados se publican mediante:

- exchange pedidos.dlx;
- routing key pedido.confirmado.dlq;
- cola notificaciones.pedido-confirmado.dlq.

La DLQ aísla el mensaje, evita frenar mensajes sanos y conserva evidencia con una razón legible. No corrige el mensaje, no genera alertas por sí sola y no define quién lo reprocesa. Es necesario acordar monitoreo, responsable, diagnóstico y criterio de replay.

Un poison message es un mensaje que falla de forma permanente para el consumidor actual. Reintentar indefinidamente solo consume capacidad.

## 11. Qué observar en la demostración

La comprobación completa debe mostrar:

1. primera confirmación con Idempotency-Replayed: false;
2. replay con true y el mismo eventId;
3. stock descontado una sola vez;
4. falla transitoria y contador de retry hasta el límite;
5. mensaje inválido o agotado visible en DLQ;
6. reenvío del mismo eventId reconocido como duplicado.

Comandos de arranque habituales:

    docker compose up -d rabbitmq
    docker compose ps
    npm run dev
    npm run worker

La consola de RabbitMQ está en http://localhost:15672 cuando Compose expone su puerto habitual. Las credenciales y variables deben coincidir con el entorno del proyecto. AUTH0_AUDIENCE se conserva como https://iaew-pedidos-api y la ruta requiere confirm:pedidos. Sin tenant y credenciales reales solo puede validarse estáticamente el contrato; no debe afirmarse que el recorrido OAuth fue ejecutado.

Variables nuevas:

    RETRY_DELAY_MS=3000
    MAX_RETRIES=3
    SIMULATE_TRANSIENT_FAILURES=0

## 12. Consistencia y outbox

Confirmar en MongoDB y publicar en RabbitMQ son dos escrituras distintas. Puede quedar un pedido confirmado sin evento si la primera termina y la segunda falla. La idempotencia reduce el daño de repetir, pero no elimina esa ventana.

El patrón outbox propone guardar el cambio de negocio y un registro de evento pendiente dentro de una misma transacción de base de datos. Otro proceso publica la outbox y marca el evento. Ese publicador también puede repetir, de modo que eventId y deduplicación continúan siendo relevantes.

Outbox se estudia aquí de forma conceptual. No se implementan outbox, circuit breaker, transacciones distribuidas ni exactly once.

## 13. Circuit breaker y otros límites conceptuales

Un circuit breaker deja de llamar temporalmente a una dependencia que falla repetidamente, para proteger recursos y darle tiempo de recuperación. Sus estados típicos son cerrado, abierto y semiabierto. No sustituye timeout, retry ni idempotencia, y no se implementa en esta clase.

No existe una política universal. Reintentar un pago o una confirmación exige más cuidado que repetir una consulta. La decisión combina semántica del negocio, costo del duplicado, tolerancia a demora y capacidad de reparación.

## 14. Ficha de resiliencia para el TPI

Cada grupo registra una decisión:

| Campo | Pregunta |
|---|---|
| Operación | ¿Qué acción puede repetirse o fallar? |
| Identidad | ¿Qué clave o eventId reconoce la misma intención? |
| Retry | ¿Qué falla es transitoria, cuánto espera y cuál es el máximo? |
| DLQ | ¿Qué se aísla y quién lo revisa? |
| Consistencia | ¿Qué ventana acepta, cómo la detecta y cómo la repara? |

La ficha debe referirse a una integración concreta del TPI, no a resiliencia en abstracto.

## 15. ¿Qué cambia si actúa un agente de IA?

Un agente puede repetir automáticamente ante un error y hacerlo a gran velocidad. Por eso necesita:

- reutilizar la misma clave para la misma intención;
- generar una clave nueva para una operación realmente nueva;
- interpretar code y retryable;
- respetar timeout, backoff y máximo;
- consultar el estado antes de decidir;
- tener el scope mínimo necesario;
- guardar trazabilidad de la decisión.

Sin estas condiciones, automatizar no vuelve resiliente la integración: acelera el duplicado o la sobrecarga.

## 16. Autocomprobación

1. ¿Por qué un timeout no prueba que el servidor no hizo nada?
2. ¿Qué diferencia hay entre Idempotency-Key y eventId?
3. ¿Por qué el replay devuelve el evento anterior?
4. ¿Cuándo corresponde retry y cuándo DLQ inmediata?
5. ¿Qué riesgo evita no usar requeue infinito?
6. ¿Por qué at least once requiere deduplicación?
7. ¿Qué ventana de consistencia queda entre MongoDB y RabbitMQ?
8. ¿Qué aporta outbox y qué problema no elimina?
9. ¿Qué evidencias demuestran que el stock se descontó una sola vez?
10. ¿Qué límites debe respetar un agente de IA antes de repetir?

### Respuestas breves

1. El trabajo remoto puede continuar después del límite de espera.
2. La primera identifica una intención HTTP; el segundo, un hecho.
3. Para conservar el mismo resultado sin publicar ni descontar otra vez.
4. Retry para fallas transitorias; DLQ para permanentes o agotadas.
5. Evita un ciclo inmediato que consume capacidad sin progreso.
6. Un mensaje puede reaparecer si no llegó el ack.
7. Una escritura puede terminar y la otra fallar.
8. Une cambio y evento pendiente en la base; la publicación aún puede repetirse.
9. Respuestas false/true, mismo eventId, stock final y una sola publicación.
10. Identidad estable, clasificación, backoff, máximo, permisos y verificación.
