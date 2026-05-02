---
chapter: "8"
section: "8.3"
questions: [ "T1B06", "T1B01", "T1B05", "T1B10", "T1B03", "T1B04", "T1B07", "T1B11", "T1B12", "T1B09" ]
status: publish1
---

### Sección 8.3: Frecuencias Autorizadas

Como Técnico, tienes una amplia gama de frecuencias disponibles: desde una pequeña porción de HF hasta bandas de microondas. Esta sección recorre qué puedes usar y dónde.

La mayor parte de esta sección implica memorización para el examen, pero no necesitas memorizar cada frecuencia. Concéntrate en los puntos específicos que aparecen en las preguntas del examen, y repasa las preguntas de este capítulo para ver qué datos debes fijar. Para la operación cotidiana, la mayoría de los radioaficionados tienen tablas de referencia a mano.

> **Consejo:** Muchas preguntas relacionadas con frecuencias en el examen pueden resolverse usando la ecuación de longitud de onda que presentamos en la Sección 3.1: $\text{Longitud de onda} = \frac{300}{\text{Frecuencia en MHz}}$. ¡A menudo la respuesta correcta es la única opción que cae dentro de la banda especificada!

Un recordatorio rápido de terminología antes de entrar en materia: "CW" (abreviatura de "Continuous Wave") se refiere al código Morse, "Phone" significa transmisiones de voz, y "Data" cubre los modos digitales.

#### Designaciones de Bandas

Las bandas de radioaficionados a menudo se nombran por su longitud de onda aproximada en lugar de por su rango de frecuencias. Recuerda de la Sección 3.1 que la longitud de onda y la frecuencia están relacionadas de forma inversa: a medida que aumenta la frecuencia, disminuye la longitud de onda.

Esta convención de nombres es la razón por la que oirás referencias a la "banda de 2 metros" (144-148 MHz), la "banda de 70 centímetros" (420-450 MHz) o la "banda de 10 metros" (28-29.7 MHz). También ofrece una forma rápida de estimar el tamaño de las antenas necesarias para esas bandas, ya que los elementos de antena suelen diseñarse como fracciones (como 1/4 o 1/2) de la longitud de onda.

#### Resumen de Privilegios Technician

> **Información Clave:**
> - Los operadores de clase Technician tienen privilegios de fonía en la banda de 10 metros únicamente entre todas las bandas HF, específicamente de 28.300 MHz a 28.500 MHz. {{< link id="T1B06" >}} {{< link id="T1B01" >}}
> - Los Técnicos están autorizados a usar modos digitales como FT8 en las bandas de 10 metros, 6 metros y 2 metros. {{< link id="T1B05" >}}
> - La fonía SSB puede usarse en al menos algún segmento de todas las bandas de aficionados por encima de 50 MHz. {{< link id="T1B10" >}}

#### Privilegios en HF (Alta Frecuencia)

1. 80 metros: solo CW en 3.525 - 3.600 MHz
2. 40 metros: solo CW en 7.025 - 7.125 MHz
3. 15 metros: solo CW en 21.025 - 21.200 MHz
4. 10 metros:
   - CW, RTTY y Datos: 28.000 - 28.300 MHz.
   - Fonía (SSB) y CW: 28.300 - 28.500 MHz.

La banda de 10 metros es la única banda HF donde los Técnicos pueden transmitir voz. Por debajo de 30 MHz, en las bandas de 80, 40 y 15 metros, tu única opción es CW (código Morse).

#### VHF y UHF

> **Información Clave:**
> - 52.525 MHz está en la banda de radioaficionados de 6 metros. {{< link id="T1B03" >}}
> - 146.52 MHz está en la banda de radioaficionados de 2 metros. {{< link id="T1B04" >}}
> - 50.0 MHz a 50.1 MHz y 144.0 MHz a 144.1 MHz están limitados solo a CW (telegrafía). {{< link id="T1B07" >}}

Los Técnicos tienen privilegios completos en cuatro bandas a través de VHF y UHF:

1. **6 metros: 50 - 54 MHz**
   - 50.0 - 50.1 MHz: solo CW.
   - 50.1 - 54 MHz: todos los modos incluyendo voz.
2. **2 metros: 144 - 148 MHz**
   - 144.0 - 144.1 MHz: solo CW.
   - 144.1 - 148 MHz: todos los modos incluyendo voz.
3. **1.25 metros**:
   - 219 - 220 MHz: solo reenvío fijo de mensajes digitales.
   - 220 - 222 MHz: no asignado a la radioafición (lo estuvo en el pasado, pero ya no).
   - 222 - 225 MHz: todos los modos incluyendo voz.
4. **70 centímetros: 420 - 450 MHz** — privilegios Technician completos en toda la banda.

Observa el patrón consistente en la parte inferior de las bandas de 6 m y 2 m: los primeros 100 kHz son solo CW.

En la práctica, 2 metros y 70 centímetros son por mucho las bandas más usadas de este grupo: la mayoría de los radios portátiles son modelos de 2m, 70cm o "doble banda" que cubren ambas. Algunos radios "tribanda" agregan 1.25 metros (más a menudo como opción en los EE. UU., ya que 1.25m es una asignación solo estadounidense y el mercado de equipos refleja eso). 6 metros solía ser más popular, pero hoy es más de nicho, en parte porque las antenas son más grandes.

#### Bandas de Microondas

Hay varias bandas por encima de 902 MHz disponibles con privilegios Technician completos. Reciben menos atención en este libro porque requieren equipo especializado y se usan principalmente por radioaficionados interesados en la experimentación con microondas.

#### Límites de Potencia para Operadores de Clase Technician

> **Información Clave:**
> - La potencia pico de la envolvente (PEP) máxima para operadores de clase Technician en sus segmentos de banda HF es de 200 vatios. {{< link id="T1B11" >}}
> - Excepto por algunas restricciones específicas, la potencia pico de la envolvente (PEP) máxima para operadores de clase Technician que usan frecuencias por encima de 30 MHz es de 1500 vatios. {{< link id="T1B12" >}}

Si 200 vatios en HF no parece mucho, considera que la mayoría de los radios HF típicos tienen una potencia máxima de salida de 100 vatios o menos. Y 1500 vatios en VHF/UHF es excesivo para la mayoría de los propósitos: el radio VHF/UHF típico tiene una salida máxima de 50 vatios, y eso normalmente es suficiente.

Algunas cosas para recordar antes de aumentar la potencia:

- Solo porque puedas usar tanta potencia no significa que siempre debas hacerlo. Los buenos operadores usan la potencia mínima necesaria para hacer el contacto.
- Algunos modos, segmentos específicos e incluso áreas geográficas pueden tener límites de potencia más bajos. Siempre revisa el plan de banda y las regulaciones vigentes.
- Mayor potencia significa más potencial de interferencia con la electrónica de los vecinos y más consideraciones de seguridad en tu estación.
- Tu sistema de antena tiene un papel enorme en la efectividad de tu señal. Una buena antena con menor potencia a menudo supera a una antena deficiente con alta potencia. Además, ¡usar demasiada potencia puede dañar la mayoría de las antenas y líneas de alimentación!

Comienza con potencia más baja, aprende buenas prácticas operativas y avanza a medida que ganes experiencia.

#### Privilegios de Escucha

Aunque tu licencia rige dónde puedes **transmitir**, eres libre de **escuchar** en cualquier frecuencia de radioaficionados. Muchos radioaficionados disfrutan sintonizando y escuchando actividad en bandas donde todavía no pueden transmitir.

Ten en cuenta que algunas **frecuencias no de radioaficionados** —como comunicaciones de teléfonos inalámbricos o celulares— pueden ser **ilegales de monitorear**, especialmente si están cifradas o destinadas a ser privadas. En la práctica, la mayoría de esas señales son digitales o cifradas y no pueden decodificarse de todos modos, pero conviene saberlo.

#### Operar Cerca de los Bordes de Banda

> **Información Clave:** No debes ajustar tu frecuencia de transmisión exactamente en el borde de una banda o subbanda de radioaficionado. El error de calibración en la pantalla de frecuencia del transmisor, las bandas laterales de modulación que se extienden más allá del borde de la banda y el corrimiento ("drift") de frecuencia del transmisor podrían empujar parte de tu señal fuera de banda. {{< link id="T1B09" >}}

Es buena práctica quedarse unos kHz dentro de la banda cuando transmites, dándote un margen de seguridad. La mayoría de los radioaficionados experimentados lo hacen sin pensarlo, simplemente para estar del lado seguro. Siempre es mejor pecar de cauteloso y mantener tus señales bien dentro de los límites autorizados.

---

Eso cubre el espectro disponible para ti. La próxima sección se aleja un poco y mira cómo se comparte ese espectro con otros servicios, los planes de banda que organizan su uso y qué hacer cuando dos estaciones terminan en la misma frecuencia.
