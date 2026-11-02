# Guion · Clase 10

## 1. La URL responde. ¿El negocio funciona?

El título separa dos preguntas. La clase pasada trabajamos sobre una URL accesible y una infraestructura reproducible. Hoy necesitamos demostrar que una operación respeta el contrato y deja los efectos esperados. Una pantalla verde de infraestructura no responde esa segunda pregunta.

## 2. Qué evidencia recuperamos

La tarjeta izquierda reconstruye la secuencia de Cloud. La derecha pide evidencia concreta a los estudiantes. Si alguien no terminó AWS, usamos su respuesta local y registramos ese alcance. Un destino healthy solo muestra que pasó un chequeo de salud; no demuestra confirmación, permisos ni entrega del evento.

## 3. Un pedido se confirma dos veces

En la primera tarjeta el timeout produce incertidumbre: no sabemos si el servidor procesó el primer intento. La segunda muestra el daño posible. La respuesta esperada es reenviar la misma operación con la misma clave y observar respuesta, evento y stock. Esa hipótesis se convertirá en una prueba reproducible.

## 4. Volvemos al circuito integrado

Las dos filas muestran HTTP y el efecto diferido. Newman envía las mismas peticiones de una colección Postman desde la terminal. El broker transporta el evento y el worker actualiza la notificación. Retomamos un recurso conocido porque contiene las reglas que queremos probar; no suponemos que la API de Cloud ya las tenía.

## 5. Qué entregaremos hoy

Las tarjetas definen el producto y el criterio de éxito. Las credenciales y el entorno se preparan antes de clase; los 45 minutos son para probar y completar aserciones. El TPI sigue siendo grupal: cada estudiante aprende la técnica y luego el equipo adapta la evidencia.

## 6. Una prueba necesita un oráculo

Las tarjetas separan preparación y evaluación. Un oráculo no es otra herramienta: es la regla verificable. Para confirmar un pedido, podemos exigir estado confirmado, código 200, evento identificado y un único descuento. Antes de escribir JavaScript necesitamos acordar esas expectativas.

## 7. Cada nivel responde otra pregunta

Leamos cada fila por su pregunta. Una integración puede validar dos componentes reales; una prueba de extremo a extremo atraviesa un flujo completo definido. La misma colección incluye verificaciones de contrato y de integración. No prometemos cobertura total porque una corrida fue verde.

## 8. La matriz antes del código

La columna central evita probar un conflicto sin haber confirmado antes. El código 409 por sí solo no explica qué ocurrió: verificaremos el código de aplicación. Un token inválido debe producir 401; la falta de scope sería otro caso, 403, que queda como extensión con un segundo token real.

## 9. Datos aislados y orden explícito

Las flechas indican variables que se obtienen de respuestas reales. No copiamos IDs a mano. La clave pertenece a una operación y se conserva en sus reintentos. La colección es un escenario ordenado: ejecutar solo confirmar, sin preparar sus datos, no constituye el mismo ensayo.

## 10. El consumidor depende de más que la URL

En la izquierda enumeramos decisiones que el consumidor necesita conocer. En la derecha el valor parece igual para una persona, pero puede cambiar sumas y validaciones. Tener documentación no demuestra que la implementación la cumpla. Hoy escribimos verificaciones pequeñas sobre los campos consumidos.

## 11. Tres evoluciones, tres decisiones

La compatibilidad depende del contrato y del consumidor. No afirmamos que todo campo nuevo sea seguro: un cliente que rechaza propiedades adicionales podría fallar. Un enum nuevo puede romper un switch exhaustivo. Justificamos la decisión con el consumidor que realmente tenemos.

## 12. Versionar implica mantener una transición

Las dos tarjetas muestran rutas posibles. Una versión identifica un contrato distinto; no corrige por sí misma a los clientes existentes. En este ejercicio no implementamos una API v2: detectamos una ruptura y escribimos qué transición haríamos. Así evitamos sumar desarrollo ajeno al objetivo de pruebas.

## 13. El contrato se vuelve una aserción

El bloque registra una prueba con nombre y compara el tipo real. pm es la API del entorno de scripts de Postman. pm.test organiza el caso y pm.expect expresa la expectativa. Después ejecutaremos un ejemplo con fixtures que agrega un campo y cambia un tipo; el alcance de ese ejemplo es el contrato, no la red.

## 14. Postman y Newman ejecutan la misma colección

La interfaz facilita explorar y escribir las aserciones; el runner permite repetirlas. Mantenemos v2.1 por compatibilidad con Newman y con el calendario del curso. Las credenciales se guardan en un entorno local excluido de Git. No exportamos el entorno privado como parte de la entrega.

## 15. Variables que no se mezclan

Cada fila tiene una responsabilidad distinta. El token requiere los scopes read:pedidos, write:pedidos y confirm:pedidos, con audience https://iaew-pedidos-api. La tabla usa una abreviación visual de los scopes; la guía los da literales. Pedir al curso que identifique qué credencial viaja en cada petición.

## 16. Reintentar no debe repetir el efecto

El bloque presenta tres caminos sobre el mismo pedido. La clave no es un token de autenticación; identifica la operación. La aserción sobre el evento y la lectura de stock permiten detectar parte de los efectos duplicados. Esta prueba es secuencial y no acredita atomicidad frente a dos confirmaciones concurrentes.

## 17. El worker termina después de la respuesta

El bloque describe polling: consultar hasta que una condición sea observable o se alcance un límite. Si el worker está detenido, la confirmación puede responder 200 y esta aserción debe fallar. Tener broker disponible no equivale a tener el efecto procesado. La ventana es didáctica, no un SLA de producción.

## 18. Demo: ejecutar y leer el fallo

Mostrar dónde se ve el nombre de cada aserción. Un error de conexión es un fallo de entorno; un 409 inesperado exige revisar datos y claves; una aserción de tipo fallida puede revelar una ruptura. El reporte es acotado para evitar exportar tokens. No usar opciones que oculten el código de salida.

## 19. A y B · preparar y completar (20 min)

A presupone laboratorio y herramientas preparados. B concentra el trabajo intelectual en tres conjuntos de aserciones: identidad del evento, conflicto y estructura más stock. La guía indica qué editar y qué observar. El runner impide presentar una colección que todavía conserva marcadores pendientes.

## 20. C y D · comprobar el poder de la prueba

La tarjeta C pide una mutación de la expectativa, no del backend. Debe aparecer el caso de stock como fallido y después recuperarse. D utiliza datos de ejemplo sin servicios externos: hay que etiquetar esa evidencia como fixture. Los dos ejercicios enseñan a interpretar qué demuestra cada prueba.

## 21. E · entregar evidencia útil (5 min)

La evidencia debe permitir a otra persona comprender y repetir el ensayo. El resumen final debe corresponder a la colección restaurada; la evidencia del fallo deliberado se guarda con otro nombre. El estudiante explica qué componentes atravesó y cuáles no, en lugar de escribir simplemente que todo funciona.

## 22. Una colección repetida no es carga concurrente

Las tarjetas distinguen repetición de concurrencia. Para el TPI el equipo define una hipótesis y elige una herramienta admitida. El objetivo no es hacer caer el servicio, sino medir comportamiento con una carga declarada. No presentamos Newman como generador de usuarios simultáneos.

## 23. Un reporte necesita contexto

La tabla es un guion que el grupo debe adaptar, no un benchmark ejecutado. Throughput es la cantidad de operaciones por tiempo. El error rate requiere definir qué cuenta como error: un 401 esperado en una prueba funcional no representa una caída del servicio. El promedio puede ocultar una cola lenta; por eso miramos percentiles.

## 24. ¿Y si confirma un agente de IA?

La respuesta esperada es conservar la clave si reintenta la misma operación y consultar el estado ante incertidumbre. No convertimos esta pregunta en otro laboratorio MCP. Conectamos con Clase 08: un agente también consume contratos y puede amplificar reintentos incorrectos.

## 25. De la prueba individual a la defensa

En la izquierda vinculamos la técnica al TPI sin imponer nuevas tecnologías. En la derecha las respuestas deben mencionar efectos de negocio, conservación de clave y evento, y ruptura de campos o tipos. Cerramos con el calendario vigente y con una evidencia defendible de alcance explícito.
