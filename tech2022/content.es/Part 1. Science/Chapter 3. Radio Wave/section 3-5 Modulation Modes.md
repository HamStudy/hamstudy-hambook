---
chapter: "3"
section: "3.5"
questions: [ "T8A02", "T8A04", "T8A09", "T8A03", "T8A07", "T8A06", "T8A08", "T8A01", "T8A05", "T8A11", "T8A10" ]
---

### Sección 3.5: Modos de Modulación y Ancho de Banda

Imagina que estás intentando enviar un mensaje a un amigo a través de un campo oscuro usando un puntero láser. Podrías encenderlo y apagarlo, variar su brillo, o cambiar entre diferentes láseres de colores (rojo, verde, azul) para comunicarte. ¡Eso es exactamente lo que hacemos en radio! Las ondas de radio y la luz visible son ambas formas de ondas electromagnéticas (EM)—son primas en la misma familia de energía, solo que a diferentes frecuencias.

El color de un láser está determinado por su frecuencia—el rojo tiene una frecuencia más baja que el verde o el azul. De manera similar, en radio, trabajamos con diferentes frecuencias que no podemos ver. Cuando hablamos de modulación de radio, estamos hablando de cómo manipulamos estas ondas invisibles para transportar nuestra voz o datos. Exploremos estas diferentes formas de manipular las ondas de radio y cuánto espacio del espectro radioeléctrico (ancho de banda) necesita cada método.

### Modulación de Amplitud (AM)

En la Modulación de Amplitud (AM), variamos la intensidad (amplitud) de una onda de radio para transportar información. Piensa en ello como cambiar el brillo del láser, aumentando o disminuyendo rápidamente la potencia de la luz para transmitir información.

Cuando variamos la amplitud (intensidad de la luz) lo suficientemente rápido, ocurre algo interesante: la señal crea frecuencias adicionales (colores) ligeramente por encima y por debajo de la frecuencia principal. Estas se llaman **bandas laterales**, y realmente contienen la información que estás transmitiendo. La onda portadora principal en sí no contiene ninguna información — el color principal de nuestro hipotético puntero láser estaría allí, pero veríamos otros colores por encima y por debajo del color principal, y son esos los que nos darían el mensaje.

Aunque AM no es el modo más común en radioafición, aún lo encontrarás en radio comercial y algunas comunicaciones especializadas. La mayoría de las señales de televisión analógica, incluida la Televisión de Aficionados (ATV), utilizan AM.

#### Modulación de Frecuencia (FM) y Modulación de Fase (PM)

> **Información Clave:**
> - *FM/PM se usan comúnmente para transmisiones de radio por paquetes VHF* {{< link id="T8A02" >}}
> - *FM/PM son los modos principales para repetidores de voz VHF y UHF* {{< link id="T8A04" >}}

En la Modulación de Frecuencia (FM), mantenemos la amplitud (brillo) constante pero variamos la frecuencia (color) de la onda de radio. Es como usar una luz que mantiene el mismo brillo pero cambia entre diferentes colores para enviar tu mensaje—un cambio específico de color representa un sonido específico o pieza de datos.

**La Modulación de Fase (PM)** está estrechamente relacionada con FM, pero en lugar de cambiar directamente la frecuencia, cambia el **tiempo** de la onda. En la práctica, el efecto es tan similar que la mayoría de los operadores de radioafición simplemente agrupan PM y FM juntos como "FM". Las diferencias específicas están más allá del alcance de este libro, pero para el uso de radioafición, solo recuerda que FM y PM resultan en el mismo tipo práctico de señal.  

> **Información Clave:** Una *señal de voz FM típica de repetidor VHF tiene un ancho de banda entre 10 y 15 kHz*. {{< link id="T8A09" >}}

#### Banda Lateral Única (SSB)

Ahora, hablemos de SSB, que es donde la modulación de amplitud recibe una mejora genial. *SSB es el modo preferido para contactos de larga distancia (señal débil) en las bandas VHF y UHF.* {{< link id="T8A03" >}}

> **Información Clave:**
> - *En comparación con FM, las señales SSB tienen un ancho de banda más estrecho* {{< link id="T8A07" >}}
> - *La Banda Lateral Superior (USB)* se *usa normalmente para comunicaciones de banda lateral única en HF de 10 metros, VHF y UHF* {{< link id="T8A06" >}}
> - Una *señal de voz típica de banda lateral única tiene un ancho de banda aproximado de 3 kHz* {{< link id="T8A08" >}}
> - La Banda Lateral Única (SSB) es una forma de modulación de amplitud. {{< link id="T8A01" >}}

¿Recuerdas cómo AM crea bandas laterales por encima y por debajo de la frecuencia principal? En SSB, eliminamos la onda portadora y una de las bandas laterales. Usando nuestra analogía del puntero láser, esto sería como mantener las variaciones de color del láser que representan tu voz, pero eliminando el brillo constante de fondo del rayo cuando no estás hablando.

Si pudieras filtrar solo las variaciones de color por encima de la frecuencia principal del puntero láser, los colores que representan tu voz, te quedarías solo con los colores en la banda lateral por debajo del color principal del puntero. Estos colores pueden ser referidos como una "banda lateral única" o SSB. Tu láser solo emitiría luz cuando estés realmente hablando, y usaría exactamente la cantidad mínima de luz necesaria para representar tu voz - sin energía desperdiciada en un haz constante o información redundante de la banda lateral superior.

Si quitaras la frecuencia principal del puntero láser y los colores por debajo (los colores en la banda lateral inferior), te quedarías con la Banda Lateral Superior (USB).

Tanto la Banda Lateral Superior (USB) como la Banda Lateral Inferior (LSB) se conocen como Banda Lateral Única (SSB), porque hemos eliminado una de las bandas laterales. Ambas son una forma de Modulación de Amplitud.

Hay dos tipos de SSB:
- **Banda Lateral Superior (USB)**: Generalmente usada en frecuencias por encima de 10 MHz. Esto incluye las bandas de 30, 20, 17, 15, 12 y 10 metros.
- **Banda Lateral Inferior (LSB)**: Usada por debajo de 10 MHz, cubriendo las bandas de 160, 80 y 40 metros.

Como solo transmitimos la parte esencial de la señal, SSB usa aproximadamente **la mitad del ancho de banda** de AM estándar y requiere mucha menos potencia para el mismo alcance—lo que la convierte en una favorita para comunicaciones de señales débiles y de larga distancia.

#### Comparación de Ancho de Banda

Diferentes modos de modulación ocupan diferentes cantidades de espacio de frecuencia, de manera similar a cómo diferentes colores de luz ocupan diferentes partes del espectro visual:

> **Información Clave:** Anchos de banda aproximados:
> - *CW (Código Morse)*: *El ancho de banda más estrecho, alrededor de 150 Hz* {{< link id="T8A05" >}} {{< link id="T8A11" >}}
> - *Voz SSB*: Alrededor de 3 kHz
> - *Voz FM*: Alrededor de 10-15 kHz
> - *Televisión AM de barrido rápido*: Alrededor de 6 MHz {{< link id="T8A10" >}}

#### Ancho de Banda y Rango de Frecuencia

Un aspecto fascinante de la radioafición es cómo el ancho de banda disponible influye en nuestra elección de modulación. Piensa en las bandas de radio como diferentes secciones del espectro electromagnético:

- **Secciones Estrechas (Ancho de Banda Limitado)**: Modos como CW (código Morse) funcionan brillantemente porque usan una porción increíblemente estrecha del espectro—como usar solo una astilla de un color específico en el arcoíris.

- **Secciones Más Amplias (Más Ancho de Banda)**: Las bandas con más frecuencias disponibles pueden soportar modos "más anchos". Por ejemplo:
  - La banda de 10 metros tiene suficiente espacio tanto para CW estrecho como para SSB más amplio
  - Las bandas de repetidores VHF/UHF pueden manejar voz FM, que necesita más ancho de banda
  - La televisión de barrido rápido requiere un ancho de banda masivo (¡aproximadamente 6 MHz!) Eso es más que el ancho de cualquiera de las bandas de aficionados por debajo de 70 cm, por lo que solo está permitido en 70 cm y superiores.

A medida que los rangos de frecuencia se amplían, puedes usar modos que requieren más ancho de banda. Un contacto de voz en la banda de 2 metros podría usar FM ancho (15kHz) o FM estrecho (5kHz), o incluso SSB más estrecho (3kHz). Hay modos digitales que pueden ser aún más estrechos. Un modo digital, PSK31 (del que hablaremos más tarde), envía caracteres a 31 caracteres por segundo y coincidentemente ¡solo ocupa 31Hz!

Esta flexibilidad es parte de lo que hace que la radioafición sea tan dinámica y emocionante.

#### ¡Estos son solo algunos de los modos!

En la radioafición, siempre hay algo nuevo que aprender. Cada modo tiene sus propias peculiaridades y encantos. A medida que ganes experiencia, desarrollarás preferencias y entenderás cuándo usar cada tipo de modulación. ¡La alegría de la radioafición está en la exploración!

No tengas miedo de escuchar, hacer preguntas y experimentar. Cada modo es una nueva aventura en comunicación.
