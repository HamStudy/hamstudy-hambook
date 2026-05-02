---
chapter: "6"
section: "6.3"
questions: [ "T7A01", "T7A04", "T7A05", "T7A11", "T7A03", "T7A08", "T7A02", "T7A06", "T7A10", "T7A09", "T9A07" ]
status: publish1
---

### Sección 6.3: Receptor, transmisor, transceptor

Un radio de aficionado hace dos cosas: capta señales del aire y las convierte en sonido, y toma tu voz y la envía como una señal. La mayoría de los equipos modernos hacen ambas cosas en una sola caja, pero vale la pena entender las dos funciones por separado: son trabajos distintos con partes distintas.

#### ¿Qué es un receptor?

El receptor son los oídos de tu radio. Capta esas ondas invisibles que flotan por el aire y las convierte en algo que puedes oír. Un buen receptor es como alguien experto en escuchar conversaciones en una fiesta: puede distinguir la conversación que quieres escuchar incluso cuando hay mucho ruido alrededor.

> **Información clave:**
> - La capacidad de un receptor para detectar la presencia de una señal es su sensibilidad. {{< link id="T7A01" >}}
> - La capacidad de un receptor para discriminar entre múltiples señales es su selectividad. {{< link id="T7A04" >}}

Un receptor más sensible puede captar señales más débiles, permitiéndote escuchar con más claridad estaciones distantes o de baja potencia. Una buena selectividad te ayuda a enfocarte en la estación que quieres sin interferencia de frecuencias cercanas. Puedes pensar en la sensibilidad como “qué tan suave puede ser un susurro que aún puedes oír” y en la selectividad como “qué tan bien puedes escoger una voz dentro de una multitud”.

Dentro del receptor, un componente clave llamado mezclador combina la señal de radiofrecuencia (RF) entrante con una señal de un oscilador local.

> **Información clave:**
> - Un circuito que genera una señal a una frecuencia específica es un oscilador. {{< link id="T7A05" >}}
> - Un mezclador se usa para convertir una señal de una frecuencia a otra. {{< link id="T7A03" >}}

Cuando la señal del oscilador se mezcla con la señal de RF, la salida contiene frecuencias iguales a la suma y la diferencia de las dos; así es como un receptor sintoniza diferentes frecuencias entrantes bajándolas a una frecuencia intermedia fija que puede filtrar y amplificar de manera eficiente.

El oscilador que en realidad ajustas cuando giras la perilla de sintonía es uno especial llamado oscilador de frecuencia variable (VFO). El nombre viene de los primeros días de la radio, cuando la mayoría de los osciladores usaban cristales fijos a una sola frecuencia: si querías cambiar de frecuencia, tenías que cambiar cristales. El VFO fue el avance que hizo la frecuencia *variable*, y el nombre se quedó aunque los radios modernos lo manejen digitalmente.

> **Información clave:** La función del VFO es ajustar la frecuencia de recepción y transmisión. {{< link id="T7A11" >}}

#### ¿Qué es un transmisor?

Un transmisor es la boca de tu radio. Toma tu voz (o datos) y la combina con una señal portadora de RF para que pueda viajar por el aire como ondas de radio. Ese proceso de combinación tiene un nombre:

> **Información clave:** Combinar voz con una señal portadora de RF se llama modulación. {{< link id="T7A08" >}}

Piensa en ello como envolver tu voz en una onda electromagnética en lugar de una onda sonora, para que tu radio pueda transmitirla lejos y ampliamente.

#### ¿Qué es un transceptor?

La mayoría de los equipos modernos de radioafición combinan el receptor y el transmisor en un paquete ordenado llamado transceptor.

> **Información clave:** Un transceptor es un dispositivo que combina un receptor y un transmisor. {{< link id="T7A02" >}}

Un momento está escuchando y al siguiente está hablando. Activa un interruptor (o presiona un botón) y pasas de recibir a transmitir.

Para operadores de clase Technician, lo más probable es que uses un transceptor VHF/UHF. Vienen en dos tipos principales:

- **Transceptores portátiles (HTs)**: Estos pequeños radios prácticos caben en la mano, de ahí su nombre. Como puedes caminar y hablar con ellos, algunas personas los llaman “walkie-talkies”. Son portátiles, funcionan con batería y son perfectos para comunicaciones locales. Excelentes para preparación ante emergencias o para charlar mientras haces senderismo.
- **Transceptores móviles**: Tienen más potencia y están diseñados para instalarse en un vehículo o usarse como estación base en casa. Por lo general tienen más potencia y funciones que los HTs.

Ambos tipos hacen esencialmente el mismo trabajo: reciben y transmiten. Las diferencias principales están en la potencia de salida, las funciones y, por supuesto, el tamaño.

#### Extender tu alcance

Hay dos tipos comunes de dispositivos accesorios mencionados en el examen que los radioaficionados usan para ampliar sus capacidades operativas: **transverters** y **amplificadores**. Resuelven problemas distintos.

##### Transverters

Un transverter desplaza las frecuencias en las que trabaja un transceptor, permitiéndote operar en bandas para las que el radio no fue diseñado.

> **Información clave:** Un dispositivo que convierte la entrada y salida de RF de un transceptor a otra banda es un transverter (convertidor de frecuencia). {{< link id="T7A06" >}}

Por ejemplo, podrías usar un transverter para operar en una banda VHF o UHF usando un transceptor HF, útil para acceder a bandas que tu radio principal no cubre.

##### Amplificadores de potencia

Un amplificador de potencia aumenta la fuerza de la señal que sale de un transceptor, ayudando a que llegue más lejos.

> **Información clave:**
> - Se puede agregar un amplificador de potencia de RF a la salida de un transceptor para aumentar la potencia de salida transmitida. {{< link id="T7A10" >}}
> - El conmutador SSB o CW-FM en un amplificador de potencia VHF configura el amplificador para operar correctamente en el modo seleccionado. {{< link id="T7A09" >}}

Más potencia no suele ser la mejor solución: antes de recurrir a un amplificador, revisa tu antena y línea de alimentación, ya que las mejoras allí casi siempre te darán más rendimiento por tu dinero que la fuerza bruta.

Algunos amplificadores de potencia VHF/UHF tienen un conmutador SSB/CW-FM porque SSB, CW (onda continua, o código Morse) y FM tienen características de señal distintas, y el amplificador debe manejar cada una de forma adecuada.

#### Usar un portátil dentro de un vehículo

> **Información clave:** Una desventaja de usar un transceptor portátil VHF dentro de un vehículo sin antena externa es la reducción de intensidad de señal debido al efecto de apantallamiento del vehículo. {{< link id="T9A07" >}}

La carrocería metálica de un vehículo refleja y absorbe señales VHF y UHF, bloqueando o reduciendo sustancialmente las ondas de radio que la antena flexible del HT intenta enviar o recibir. El resultado es un alcance drásticamente reducido desde dentro del vehículo, y tus reportes de señal sufrirán en consecuencia. Además, dependiendo de la longitud de tu antena, quizá sea realmente difícil usarla sin ponerla de lado, ¡lo que alteraría la polarización de tu señal!

Para mejor rendimiento, considera una o más de estas sugerencias:

- Usa una antena externa, montada en el exterior del vehículo.
- Sostén el radio cerca de una ventana donde las obstrucciones metálicas sean menores.
- Usa un radio móvil instalado correctamente en lugar de un portátil.

> Recordatorio: Cada vez que estés conduciendo, la seguridad va primero: usa opciones manos libres o espera hasta estar detenido para operar tu radio. También conoce las leyes de tu área; ¡puede ser ilegal operar un radio mientras conduces!

---

Saber qué hay dentro de tu radio es una cosa; saber qué hace cada perilla es otra. La siguiente sección recorre los controles que realmente usarás.
