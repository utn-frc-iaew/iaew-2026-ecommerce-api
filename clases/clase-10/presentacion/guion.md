# Guion · Clase 10 · Demo guiada

## 1. La URL responde. ¿El negocio funciona?

El título separa dos preguntas. La clase pasada trabajamos sobre una URL accesible y una infraestructura reproducible. Hoy necesitamos demostrar que una operación respeta el contrato y deja los efectos esperados. Una pantalla verde de infraestructura no responde esa segunda pregunta.

El caso concreto será un producto de cien pesos y un pedido de una unidad. Cuando una petición se repite, queremos distinguir una nueva operación de la consulta del resultado de una operación ya completada. Al final no vamos a confiar en que la pantalla quede verde: vamos a señalar qué aserción compara cada garantía.

## 2. Qué evidencia recuperamos

La tarjeta izquierda reconstruye la secuencia de Cloud. La derecha pide evidencia concreta a los estudiantes. Si alguien no terminó AWS, usamos su respuesta local y registramos ese alcance. Un destino healthy solo muestra que pasó un chequeo de salud; no demuestra confirmación, permisos ni entrega del evento.

Pensemos en una API que devuelve health correcto pero resta dos unidades. El balanceador no conoce esa regla. Una prueba funcional introduce una operación y observa sus consecuencias. Recuperamos Cloud como punto de partida, pero no pedimos desplegar nuevamente ni damos por hecho que todos terminaron el ensayo remoto.

## 3. Un pedido se confirma dos veces

En la primera tarjeta el timeout produce incertidumbre: no sabemos si el servidor procesó el primer intento. La segunda muestra el daño posible. La respuesta esperada es reenviar la misma operación con la misma clave y observar respuesta, evento y stock. Esa hipótesis se convertirá en una prueba reproducible.

El cliente ve un timeout y no puede concluir si el servidor falló antes o después de confirmar. Esta incertidumbre explica la clave estable. Hoy no inyectamos un timeout de red: enviamos otra petición equivalente y comprobamos el comportamiento de replay. Mantener esa diferencia permite defender honestamente el alcance.

## 4. Una prueba necesita un oráculo

Las tarjetas separan preparación y evaluación. Un oráculo no es otra herramienta: es la regla verificable. Para confirmar un pedido, podemos exigir estado confirmado, código 200, evento identificado y un único descuento. Antes de escribir JavaScript necesitamos acordar esas expectativas.

El oráculo surge de una regla de negocio y de precondiciones, no del resultado que nos conviene ver. Si el stock inicial fuera otro o la cantidad fuese dos, esperar nueve sería incorrecto. Esta relación entre preparación y expectativa evita aserciones que pasan por casualidad.

## 5. Cada nivel responde otra pregunta

Leamos cada fila por su pregunta. Una integración puede validar dos componentes reales; una prueba de extremo a extremo atraviesa un flujo completo definido. La misma colección incluye verificaciones de contrato y de integración. No prometemos cobertura total porque una corrida fue verde.

## 6. ¿Qué queremos validar con cada prueba?

Leamos cada fila como una pregunta de calidad. La prueba unitaria verifica una unidad; la integración observa colaboración; el contrato verifica el acuerdo que consumen otros; extremo a extremo recorre el circuito definido. Carga cambia la demanda sobre el sistema para verificar sus objetivos de rendimiento. Las categorías se pueden solapar: no son niveles de una escala única. En la demo preguntamos si estamos cumpliendo lo que necesitamos respecto del tiempo de respuesta, para una operación, carga y entorno concretos. Acordaremos p95 menor de trescientos milisegundos y todas las respuestas 200. Es un ejemplo docente; no es un SLA impuesto al TPI. Si la API devuelve errores muy rápido, no aprobó el objetivo aunque su latencia sea baja. Para tiempos aclaramos la métrica elegida: respuesta HTTP completa observada por el generador, no solamente primer byte.

## 7. La matriz antes del código

La columna central evita probar un conflicto sin haber confirmado antes. El código 409 por sí solo no explica qué ocurrió: verificaremos el código de aplicación. Un token inválido debe producir 401; la falta de scope sería otro caso, 403, que queda como extensión con un segundo token real.

Leamos un ejemplo negativo como una prueba positiva de una regla de rechazo. Enviar un token malformado debe devolver 401: si ocurre, la prueba pasa. Para 409 necesitamos el código de aplicación porque conflictos de stock y de clave no significan lo mismo. El 403 requiere una identidad válida con menos permisos y no integra el mínimo obligatorio.

## 8. Datos aislados y orden explícito

Las flechas indican variables que se obtienen de respuestas reales. No copiamos IDs a mano. La clave pertenece a una operación y se conserva en sus reintentos. La colección es un escenario ordenado: ejecutar solo confirmar, sin preparar sus datos, no constituye el mismo ensayo.

El setup está resuelto, pero hay que entender sus dependencias. La respuesta al alta de producto da el identificador para el pedido; la confirmación devuelve el identificador del evento que se compara después. Si ejecutamos una petición aislada con variables de otra corrida, alteramos las precondiciones del escenario.

## 9. El consumidor depende de más que la URL

En la izquierda enumeramos decisiones que el consumidor necesita conocer. En la derecha el valor parece igual para una persona, pero puede cambiar sumas y validaciones. Tener documentación no demuestra que la implementación la cumpla. Hoy escribimos verificaciones pequeñas sobre los campos consumidos.

Veamos los campos reales que consume la colección. pedido.estado expresa el resultado de negocio, evento.eventId identifica el evento e idempotencia.replayed distingue primera respuesta de recuperación. Un servidor que renombra un campo podría seguir contestando 200 y sin embargo romper al consumidor.

## 10. ¿Este cambio de la API rompe al cliente?

Aquí evolución significa modificar la respuesta de una API que ya tiene clientes funcionando. No son tres etapas sucesivas: son tres cambios alternativos que debemos evaluar antes de publicar. Tomemos un cliente concreto: lee total como número para calcular y muestra el campo estado.

Primera fila: agregamos moneda con el valor ARS sin quitar ni modificar los campos anteriores. Si el cliente ignora los campos nuevos, sigue funcionando. La decisión es agregar el campo y comprobarlo con las pruebas del consumidor; si su validador rechaza campos extra, debemos acordar la adaptación antes de publicar.

Segunda fila: total era el número 100 y ahora es el texto "100". Aunque se vean parecidos, una operación puede concatenar texto en vez de sumar o rechazar el valor. La decisión es conservar el tipo numérico en el contrato actual. Si necesitamos cambiarlo, preparar un contrato nuevo y una migración.

Tercera fila: renombramos estado como status. El cliente sigue buscando estado y no lo encuentra, aunque el servidor responda 200. La decisión es mantener el campo anterior durante la transición y retirarlo solo según la migración acordada.

La pregunta común es: ¿el cliente que ya funciona puede seguir usando esta respuesta sin modificar su código? También debemos conservar el significado: pasar de pesos a centavos rompe los cálculos aunque total siga siendo numérico. Agregar un valor a un enum puede romper un cliente que solo contempla los valores anteriores. La siguiente diapositiva explica cómo mantener una transición cuando la ruptura es necesaria.

## 11. Versionar implica mantener una transición

Las dos tarjetas muestran rutas posibles. Una versión identifica un contrato distinto; no corrige por sí misma a los clientes existentes. En este ejercicio no implementamos una API v2: detectamos una ruptura y escribimos qué transición haríamos. Así evitamos sumar desarrollo ajeno al objetivo de pruebas.

La transición necesita responsables y fechas acordadas, además de endpoints. Podemos probar el consumidor anterior mientras se desarrolla el nuevo. Este ejemplo sirve para explicar una decisión de diseño, no para agregar una implementación v2 a la práctica. Cada equipo propondrá su estrategia con su dominio.

## 12. El contrato se vuelve una aserción

El bloque presenta un extracto ilustrativo de la respuesta y las aserciones que lo consumen. Primero interpretamos el cuerpo con pm.response.json; después comparamos pedido.estado con confirmado usando to.eql. La lectura del header Content-Type permite comprobar que la respuesta anuncia JSON. pm.test registra una prueba con nombre; pm.expect expresa su expectativa. to.be.a sirve para un tipo, to.eql para un valor y to.include para contenido.

Este ejemplo prepara las operaciones que completaremos en pantalla durante la demo de replay. Pedimos identificar de dónde viene cada dato antes de escribir la expectativa. Una respuesta 200 no sustituye la comprobación de estado o de contrato. El fixture posterior muestra qué sucede cuando total cambia de número a cadena.

## 13. Postman y Newman ejecutan la misma colección

La interfaz facilita explorar y escribir las aserciones; el runner permite repetirlas. Mantenemos v2.1 por compatibilidad con Newman y con el calendario del curso. Las credenciales se guardan en un entorno local excluido de Git. El entorno privado no se publica.

Mostremos la ubicación de Scripts y distingamos guardar en la interfaz de exportar un archivo. Newman no mira la colección abierta: carga el JSON exportado. Al exportar tenemos que conservar variables, no insertar valores de credenciales. La misma colección puede ejecutarse contra otro entorno configurado.

## 14. Variables que no se mezclan

Cada fila tiene una responsabilidad distinta. El token requiere los scopes read:pedidos, write:pedidos y confirm:pedidos, con audience https://iaew-pedidos-api. La tabla muestra los tres scopes literales, iguales a los usados en la guía. Pedir al curso que identifique qué credencial viaja en cada petición.

Los tres scopes se muestran completos porque sus nombres son parte del contrato. read:pedidos permite consultar, write:pedidos crear y confirm:pedidos confirmar. La API key se usa en otra ruta y con otro mecanismo. Tener un token válido no implica que cualquier operación esté autorizada.

## 15. Reintentar no debe repetir el efecto

El bloque presenta tres caminos sobre el mismo pedido. La clave no es un token de autenticación; identifica la operación. La aserción sobre el evento y la lectura de stock permiten detectar parte de los efectos duplicados. Esta prueba es secuencial y no acredita atomicidad frente a dos confirmaciones concurrentes.

Sigamos la misma clave de izquierda a derecha: el primer intento genera el evento y descuenta, el segundo recupera el resultado. Si regeneramos la clave cambiamos la identidad de la operación y este backend devuelve conflicto. La comprobación es secuencial y no demuestra protección ante dos confirmaciones simultáneas.

## 16. La respuesta no garantiza que el worker terminó

El bloque describe polling: consultar hasta que una condición sea observable o se alcance un límite. Si el worker está detenido, la confirmación puede responder 200 y esta aserción debe fallar. Tener broker disponible no equivale a tener el efecto procesado. La ventana es didáctica, no un SLA de producción.

No convertimos una demora arbitraria en garantía de producción. Consultamos hasta diez veces, con la demora configurada entre requests, y exigimos que aparezca el efecto. Si no aparece, el fallo es evidencia de una observación incumplida en esa ventana. No podemos deducir la causa únicamente del assert.

## 17. Demo: ejecutar y leer el fallo

Mostrar dónde se ve el nombre de cada aserción. Un error de conexión es un fallo de entorno; un 409 inesperado exige revisar datos y claves; una aserción de tipo fallida puede revelar una ruptura. El reporte es acotado para evitar exportar tokens. No usar opciones que oculten el código de salida.

La salida de ejemplo está rotulada como ilustrativa: muestra dónde leer un caso aprobado y uno fallido sin afirmar un incidente real. En la demo real usamos el runner y el informe que acaba de generar. Un proceso con salida uno debe conservarse como fallo aunque otras peticiones hayan aprobado.

## 18. A y B · preparar y construir las pruebas

El entorno ya está instalado y probado antes de clase. En A recorremos precondiciones y datos. En B el docente completa los tres bloques en pantalla y explica cada comparación. Antes de ejecutar pedimos al curso que anticipe el resultado y justifique la expectativa. No se solicita que cada alumno monte el entorno ni resuelva una entrega durante estos minutos.

## 19. C y D · ejecutar, fallar y explicar

El docente ejecuta y conserva reportes distintos para el fallo deliberado y la restauración. Pedimos al curso localizar la aserción fallida y explicar por qué el proceso devuelve uno. Después leemos el fixture de compatibilidad y distinguimos su alcance de una prueba contra HTTP real. No se agrega una tarea escrita individual.

## 20. E · interpretar la evidencia de la demo

En estos cinco minutos cerramos el recorrido mostrando la evidencia generada por el docente. La clase explica los resultados oralmente y diferencia demostración, fixture y límites. No hay presentación ni entrega individual. La colección y la plantilla son materiales de consulta, mientras los requisitos del TPI grupal permanecen como indica su consigna.

## 21. Una colección repetida no es carga concurrente

Newman verifica el escenario funcional y Artillery genera usuarios virtuales que ejecutan una lectura. Hoy usamos un modelo de llegadas: especificamos cuántos usuarios nuevos comienzan por segundo. La cantidad simultánea depende de cuánto tarda cada uno. No interpretamos arrivalRate cinco como cinco usuarios concurrentes. Vamos a comprobar p95 y respuestas correctas en un escenario acotado, sin buscar el límite máximo del sistema ni ejecutar escrituras concurrentes sobre el backend didáctico.

## 22. Un reporte necesita contexto

El gráfico muestra veinte latencias ordenadas de una muestra ilustrativa. Diecinueve son menores o iguales a 220 ms y una llega a 800 ms. Con rango más cercano, p95 es la observación diecinueve: 220 ms. El valor extremo representa una cola lenta. No es un resultado medido de nuestra API; otras herramientas pueden interpolar percentiles, por eso se declara método y muestra.

Las dos cajas explican alcance y tasas. Cien requests completadas en diez segundos son diez requests por segundo; dos errores inesperados en cien son dos por ciento. Una respuesta negativa esperada de una prueba funcional no se cuenta automáticamente como fallo de un escenario válido de carga. Para la demo medimos tiempo completo con http.total.p95, no TTFB ni renderizado de interfaz.

## 23. Artillery: objetivo, escenario y carga

El YAML visible es un extracto del archivo completo que también incluye timeout y evaluación de umbrales. La operación elegida consulta productos y MongoDB, en vez de health. No crea pedidos ni toca stock. Primero hacemos una lectura manual para asegurar respuesta 200 y datos. Explicamos duración, tasa inicial y rampTo. Las fases generan tráfico durante cuarenta segundos más el tiempo necesario para completar las peticiones iniciadas. La instalación debe estar terminada antes de la clase.

## 24. Medir y decidir si el tiempo es aceptable

Antes de ejecutar dejamos por escrito el objetivo, en vez de elegir un umbral favorable después. El plugin ensure compara el p95 con trescientos y verifica que las peticiones devuelvan doscientos; ante incumplimiento el proceso devuelve error. Leemos el reporte JSON y la salida de terminal. Si pasa, solo podemos afirmar cumplimiento en esta corrida; si falla, no sabemos todavía si la causa está en API, base, red o generador. El generador comparte máquina con la API durante el ensayo local y eso limita la comparación con producción. La muestra es breve y didáctica, por lo que no pretende certificar un SLA. Medimos http.total.p95 con extendedMetrics habilitado: tiempo hasta completar la descarga de la respuesta en el generador. http.response_time mide primer byte y no se confunde con el tiempo total ni con el renderizado de una página.

## 25. ¿Y si confirma un agente de IA?

La respuesta esperada es conservar la clave si reintenta la misma operación y consultar el estado ante incertidumbre. No convertimos esta pregunta en otro laboratorio MCP. Conectamos con Clase 08: un agente también consume contratos y puede amplificar reintentos incorrectos.

La presencia de un agente no modifica las reglas del servidor. Puede redactar o ejecutar peticiones, pero tiene que distinguir permiso, identidad de operación e incertidumbre sobre el resultado. Preguntemos qué haría después de un timeout: consultar estado y conservar la clave de un eventual reintento de la misma operación.

## 26. De la demostración a la defensa

Cerramos recuperando lo observado en la demostración. Las preguntas se responden oralmente con evidencia: evento y stock para el replay, estado final para el worker y métrica/carga/umbral para rendimiento. La actividad del día no se presenta; la transferencia al TPI respeta los requisitos grupales existentes. No agregamos trabajo para el feriado.