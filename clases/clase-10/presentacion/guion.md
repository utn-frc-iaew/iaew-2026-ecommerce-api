# Guion · Clase 10 · Artillery

## 1. La URL responde. ¿El negocio funciona?

El título separa dos preguntas. La clase pasada trabajamos sobre una URL accesible y una infraestructura reproducible. Hoy necesitamos demostrar que una operación respeta el contrato y deja los efectos esperados. Una pantalla verde de infraestructura no responde esa segunda pregunta.

El caso concreto será un producto de cien pesos y un pedido de una unidad. Cuando una petición se repite, queremos distinguir una nueva operación de la consulta del resultado de una operación ya completada. Al final no vamos a confiar en que la pantalla quede verde: vamos a señalar qué aserción compara cada garantía.

## 2. Qué evidencia recuperamos

La tarjeta izquierda reconstruye la secuencia de Cloud. La derecha pide evidencia concreta a los estudiantes. Si alguien no terminó AWS, usamos su respuesta local y registramos ese alcance. Un destino healthy solo muestra que pasó un chequeo de salud; no demuestra confirmación, permisos ni entrega del evento.

Pensemos en una API que devuelve health correcto pero resta dos unidades. El balanceador no conoce esa regla. Una prueba funcional introduce una operación y observa sus consecuencias. Recuperamos Cloud como punto de partida, pero no pedimos desplegar nuevamente ni damos por hecho que todos terminaron el ensayo remoto.

## 3. Un pedido se confirma dos veces

En la primera tarjeta el timeout produce incertidumbre: no sabemos si el servidor procesó el primer intento. La segunda muestra el daño posible. La respuesta esperada es reenviar la misma operación con la misma clave y observar respuesta, evento y stock. Esa hipótesis se convertirá en una prueba reproducible.

El cliente ve un timeout y no puede concluir si el servidor falló antes o después de confirmar. Esta incertidumbre explica la clave estable. Hoy no inyectamos un timeout de red: enviamos otra petición equivalente y comprobamos el comportamiento de replay. Mantener esa diferencia permite defender honestamente el alcance.

## 4. Volvemos al circuito integrado

La secuencia muestra primero al cliente enviando una confirmación con token y clave. La API persiste y publica el evento. Dentro del recuadro punteado separamos el retorno HTTP y el procesamiento del worker: no tienen un orden relativo de finalización garantizado. El último paso es la consulta que observa el estado procesado. Retomamos el laboratorio de Clase 07 porque contiene estas reglas; la API simplificada de Cloud no las implementa.

La lectura HTTP posterior permite observar el efecto sin consultar MongoDB directamente desde Postman. Si el worker está detenido, la API puede responder y sin embargo no se cumple el objetivo extremo a extremo. El polling acotado distingue esas situaciones.

## 5. Qué entregaremos hoy

Las tarjetas definen el producto y el criterio de éxito. Las credenciales y el entorno se preparan antes de clase; los 45 minutos son para probar y completar aserciones. El TPI sigue siendo grupal: cada estudiante aprende la técnica y luego el equipo adapta la evidencia.

Los productos de hoy son individuales. La técnica se transfiere después al TPI grupal. Pedimos poder repetir el escenario con nuevos datos y explicar su resultado; no medimos aprendizaje por el número de peticiones incluidas. El código proporcionado evita dedicar el taller a implementar otra API.

## 6. Una prueba necesita un oráculo

Las tarjetas separan preparación y evaluación. Un oráculo no es otra herramienta: es la regla verificable. Para confirmar un pedido, podemos exigir estado confirmado, código 200, evento identificado y un único descuento. Antes de escribir JavaScript necesitamos acordar esas expectativas.

El oráculo surge de una regla de negocio y de precondiciones, no del resultado que nos conviene ver. Si el stock inicial fuera otro o la cantidad fuese dos, esperar nueve sería incorrecto. Esta relación entre preparación y expectativa evita aserciones que pasan por casualidad.

## 7. Cada nivel responde otra pregunta

Leamos cada fila por su pregunta. Una integración puede validar dos componentes reales; una prueba de extremo a extremo atraviesa un flujo completo definido. La misma colección incluye verificaciones de contrato y de integración. No prometemos cobertura total porque una corrida fue verde.

## 8. ¿Qué queremos validar con cada prueba?

Leamos cada fila como una pregunta de calidad. La prueba unitaria verifica una unidad; la integración observa colaboración; el contrato verifica el acuerdo que consumen otros; extremo a extremo recorre el circuito definido. Carga cambia la demanda sobre el sistema para verificar sus objetivos de rendimiento. Las categorías se pueden solapar: no son niveles de una escala única. En la demo preguntamos si estamos cumpliendo lo que necesitamos respecto del tiempo de respuesta, para una operación, carga y entorno concretos. Acordaremos p95 menor de trescientos milisegundos y todas las respuestas 200. Es un ejemplo docente; no es un SLA impuesto al TPI. Si la API devuelve errores muy rápido, no aprobó el objetivo aunque su latencia sea baja. Para tiempos aclaramos la métrica elegida: respuesta HTTP completa observada por el generador, no solamente primer byte.

## 9. La matriz antes del código

La columna central evita probar un conflicto sin haber confirmado antes. El código 409 por sí solo no explica qué ocurrió: verificaremos el código de aplicación. Un token inválido debe producir 401; la falta de scope sería otro caso, 403, que queda como extensión con un segundo token real.

Leamos un ejemplo negativo como una prueba positiva de una regla de rechazo. Enviar un token malformado debe devolver 401: si ocurre, la prueba pasa. Para 409 necesitamos el código de aplicación porque conflictos de stock y de clave no significan lo mismo. El 403 requiere una identidad válida con menos permisos y no integra el mínimo obligatorio.

## 10. Datos aislados y orden explícito

Las flechas indican variables que se obtienen de respuestas reales. No copiamos IDs a mano. La clave pertenece a una operación y se conserva en sus reintentos. La colección es un escenario ordenado: ejecutar solo confirmar, sin preparar sus datos, no constituye el mismo ensayo.

El setup está resuelto, pero hay que entender sus dependencias. La respuesta al alta de producto da el identificador para el pedido; la confirmación devuelve el identificador del evento que se compara después. Si ejecutamos una petición aislada con variables de otra corrida, alteramos las precondiciones del escenario.

## 11. El consumidor depende de más que la URL

En la izquierda enumeramos decisiones que el consumidor necesita conocer. En la derecha el valor parece igual para una persona, pero puede cambiar sumas y validaciones. Tener documentación no demuestra que la implementación la cumpla. Hoy escribimos verificaciones pequeñas sobre los campos consumidos.

Veamos los campos reales que consume la colección. pedido.estado expresa el resultado de negocio, evento.eventId identifica el evento e idempotencia.replayed distingue primera respuesta de recuperación. Un servidor que renombra un campo podría seguir contestando 200 y sin embargo romper al consumidor.

## 12. Tres evoluciones, tres decisiones

La compatibilidad depende del contrato y del consumidor. No afirmamos que todo campo nuevo sea seguro: un cliente que rechaza propiedades adicionales podría fallar. Un enum nuevo puede romper un switch exhaustivo. Justificamos la decisión con el consumidor que realmente tenemos.

No respondamos que todo campo adicional es seguro. Nuestro consumidor de ejemplo tolera propiedades nuevas, pero otro podría usar una validación que las rechaza. También importa el significado: mantener el tipo de total pero cambiar de pesos a centavos puede romper la aplicación sin que la aserción de tipo lo detecte.

## 13. Versionar implica mantener una transición

Las dos tarjetas muestran rutas posibles. Una versión identifica un contrato distinto; no corrige por sí misma a los clientes existentes. En este ejercicio no implementamos una API v2: detectamos una ruptura y escribimos qué transición haríamos. Así evitamos sumar desarrollo ajeno al objetivo de pruebas.

La transición necesita responsables y fechas acordadas, además de endpoints. Podemos probar el consumidor anterior mientras se desarrolla el nuevo. Este ejemplo sirve para explicar una decisión de diseño, no para agregar una implementación v2 a la práctica. Cada equipo propondrá su estrategia con su dominio.

## 14. El contrato se vuelve una aserción

El bloque presenta un extracto ilustrativo de la respuesta y las aserciones que lo consumen. Primero interpretamos el cuerpo con pm.response.json; después comparamos pedido.estado con confirmado usando to.eql. La lectura del header Content-Type permite comprobar que la respuesta anuncia JSON. pm.test registra una prueba con nombre; pm.expect expresa su expectativa. to.be.a sirve para un tipo, to.eql para un valor y to.include para contenido.

Esta demostración es análoga al trabajo del alumno sin completar su TODO de replay. Pedimos identificar de dónde viene cada dato antes de escribir la expectativa. Una respuesta 200 no sustituye la comprobación de estado o de contrato. El fixture posterior muestra qué sucede cuando total cambia de número a cadena.

## 15. Postman y Newman ejecutan la misma colección

La interfaz facilita explorar y escribir las aserciones; el runner permite repetirlas. Mantenemos v2.1 por compatibilidad con Newman y con el calendario del curso. Las credenciales se guardan en un entorno local excluido de Git. No exportamos el entorno privado como parte de la entrega.

Mostremos la ubicación de Scripts y distingamos guardar en la interfaz de exportar un archivo. Newman no mira la colección abierta: carga el JSON entregado. Al exportar tenemos que conservar variables, no insertar valores de credenciales. La misma colección puede ejecutarse contra otro entorno configurado.

## 16. Variables que no se mezclan

Cada fila tiene una responsabilidad distinta. El token requiere los scopes read:pedidos, write:pedidos y confirm:pedidos, con audience https://iaew-pedidos-api. La tabla muestra los tres scopes literales, iguales a los usados en la guía. Pedir al curso que identifique qué credencial viaja en cada petición.

Los tres scopes se muestran completos porque sus nombres son parte del contrato. read:pedidos permite consultar, write:pedidos crear y confirm:pedidos confirmar. La API key se usa en otra ruta y con otro mecanismo. Tener un token válido no implica que cualquier operación esté autorizada.

## 17. Reintentar no debe repetir el efecto

El bloque presenta tres caminos sobre el mismo pedido. La clave no es un token de autenticación; identifica la operación. La aserción sobre el evento y la lectura de stock permiten detectar parte de los efectos duplicados. Esta prueba es secuencial y no acredita atomicidad frente a dos confirmaciones concurrentes.

Sigamos la misma clave de izquierda a derecha: el primer intento genera el evento y descuenta, el segundo recupera el resultado. Si regeneramos la clave cambiamos la identidad de la operación y este backend devuelve conflicto. La comprobación es secuencial y no demuestra protección ante dos confirmaciones simultáneas.

## 18. La respuesta no garantiza que el worker terminó

El bloque describe polling: consultar hasta que una condición sea observable o se alcance un límite. Si el worker está detenido, la confirmación puede responder 200 y esta aserción debe fallar. Tener broker disponible no equivale a tener el efecto procesado. La ventana es didáctica, no un SLA de producción.

No convertimos una demora arbitraria en garantía de producción. Consultamos hasta diez veces, con la demora configurada entre requests, y exigimos que aparezca el efecto. Si no aparece, el fallo es evidencia de una observación incumplida en esa ventana. No podemos deducir la causa únicamente del assert.

## 19. Demo: ejecutar y leer el fallo

Mostrar dónde se ve el nombre de cada aserción. Un error de conexión es un fallo de entorno; un 409 inesperado exige revisar datos y claves; una aserción de tipo fallida puede revelar una ruptura. El reporte es acotado para evitar exportar tokens. No usar opciones que oculten el código de salida.

La salida de ejemplo está rotulada como ilustrativa: muestra dónde leer un caso aprobado y uno fallido sin afirmar un incidente real. En la demo real usamos el runner y el informe que acaba de generar. Un proceso con salida uno debe conservarse como fallo aunque otras peticiones hayan aprobado.

## 20. A y B · preparar y completar (20 min)

A presupone laboratorio y herramientas preparados. B concentra el trabajo intelectual en tres conjuntos de aserciones: identidad del evento, conflicto y estructura más stock. La guía indica qué editar y qué observar. El runner impide presentar una colección que todavía conserva marcadores pendientes.

Antes de dar autonomía mostramos un ejemplo análogo que recorre cuerpo, header y variable. El alumno completa las tres familias de expectativas usando esa referencia. No debe eliminar los asserts para lograr un reporte verde; el criterio es que expresen las condiciones de negocio acordadas y detecten una diferencia.

## 21. C y D · comprobar el poder de la prueba

La tarjeta C pide una mutación de la expectativa, no del backend. Debe aparecer el caso de stock como fallido y después recuperarse. D utiliza datos de ejemplo sin servicios externos: hay que etiquetar esa evidencia como fixture. Los dos ejercicios enseñan a interpretar qué demuestra cada prueba.

Al cambiar el valor esperado solo comprobamos sensibilidad de la aserción; no estamos causando un defecto de la implementación. Guardamos el reporte del fallo con otro nombre porque la siguiente corrida reemplaza resumen.json. La restauración completa requiere exportar de nuevo, ejecutar y conservar el reporte limpio.

## 22. E · entregar evidencia útil (5 min)

La evidencia debe permitir a otra persona comprender y repetir el ensayo. El resumen final debe corresponder a la colección restaurada; la evidencia del fallo deliberado se guarda con otro nombre. El estudiante explica qué componentes atravesó y cuáles no, en lugar de escribir simplemente que todo funciona.

La plantilla permite registrar cada decisión cuando ocurre, en vez de reconstruir todo en los cinco minutos finales. Revisamos que la colección exportada no contenga credenciales, que el reporte final corresponda a la restauración y que el ZIP incluya también la explicación del fallo deliberado.

## 23. Una colección repetida no es carga concurrente

Newman verifica el escenario funcional y Artillery genera usuarios virtuales que ejecutan una lectura. Hoy usamos un modelo de llegadas: especificamos cuántos usuarios nuevos comienzan por segundo. La cantidad simultánea depende de cuánto tarda cada uno. No interpretamos arrivalRate cinco como cinco usuarios concurrentes. Vamos a comprobar p95 y respuestas correctas en un escenario acotado, sin buscar el límite máximo del sistema ni ejecutar escrituras concurrentes sobre el backend didáctico.

## 24. Un reporte necesita contexto

El gráfico muestra veinte latencias ordenadas de una muestra ilustrativa. Diecinueve son menores o iguales a 220 ms y una llega a 800 ms. Con rango más cercano, p95 es la observación diecinueve: 220 ms. El valor extremo representa una cola lenta. No es un resultado medido de nuestra API; otras herramientas pueden interpolar percentiles, por eso se declara método y muestra.

Las dos cajas explican alcance y tasas. Cien requests completadas en diez segundos son diez requests por segundo; dos errores inesperados en cien son dos por ciento. Una respuesta negativa esperada de una prueba funcional no se cuenta automáticamente como fallo de un escenario válido de carga. Para la demo medimos tiempo completo con http.total.p95, no TTFB ni renderizado de interfaz.

## 25. Artillery: objetivo, escenario y carga

El YAML visible es un extracto del archivo completo que también incluye timeout y evaluación de umbrales. La operación elegida consulta productos y MongoDB, en vez de health. No crea pedidos ni toca stock. Primero hacemos una lectura manual para asegurar respuesta 200 y datos. Explicamos duración, tasa inicial y rampTo. Las fases generan tráfico durante cuarenta segundos más el tiempo necesario para completar las peticiones iniciadas. La instalación debe estar terminada antes de la clase.

## 26. Medir y decidir si el tiempo es aceptable

Antes de ejecutar dejamos por escrito el objetivo, en vez de elegir un umbral favorable después. El plugin ensure compara el p95 con trescientos y verifica que las peticiones devuelvan doscientos; ante incumplimiento el proceso devuelve error. Leemos el reporte JSON y la salida de terminal. Si pasa, solo podemos afirmar cumplimiento en esta corrida; si falla, no sabemos todavía si la causa está en API, base, red o generador. El generador comparte máquina con la API durante el ensayo local y eso limita la comparación con producción. La muestra es breve y didáctica, por lo que no pretende certificar un SLA. Medimos http.total.p95 con extendedMetrics habilitado: tiempo hasta completar la descarga de la respuesta en el generador. http.response_time mide primer byte y no se confunde con el tiempo total ni con el renderizado de una página.

## 27. ¿Y si confirma un agente de IA?

La respuesta esperada es conservar la clave si reintenta la misma operación y consultar el estado ante incertidumbre. No convertimos esta pregunta en otro laboratorio MCP. Conectamos con Clase 08: un agente también consume contratos y puede amplificar reintentos incorrectos.

La presencia de un agente no modifica las reglas del servidor. Puede redactar o ejecutar peticiones, pero tiene que distinguir permiso, identidad de operación e incertidumbre sobre el resultado. Preguntemos qué haría después de un timeout: consultar estado y conservar la clave de un eventual reintento de la misma operación.

## 28. De la prueba individual a la defensa

En la izquierda vinculamos la técnica al TPI sin imponer nuevas tecnologías. En la derecha las respuestas deben mencionar efectos de negocio, conservación de clave y evento, y ruptura de campos o tipos. Cerramos con el calendario vigente y con una evidencia defendible de alcance explícito.

Pidamos una respuesta breve a cada pregunta de salida apoyada en una evidencia. El valor de la colección está en que otra persona pueda repetirla, interpretar el fallo y reconocer su alcance. Si una dependencia externa no se probó, esa limitación debe figurar en la defensa junto con los resultados observados.