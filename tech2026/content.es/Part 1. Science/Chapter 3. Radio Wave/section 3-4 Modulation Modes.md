---
chapter: "3"
section: "3.4"
questions: [ "T8A02", "T8A04", "T8A09", "T8A03", "T8A07", "T8A06", "T8A08", "T8A01", "T8A05", "T8A11", "T8A10" ]
status: publish1
---

### Sección 3.4: Modos de modulación y ancho de banda

Supón que estás enviando un mensaje a un amigo al otro lado de un campo oscuro con un puntero láser. Podrías encenderlo y apagarlo, variar su brillo o cambiar entre láseres de distintos colores (rojo, verde, azul) para comunicarte. ¡Eso es exactamente lo que hacemos en radio! Las ondas de radio y la luz visible son formas de ondas electromagnéticas (EM): primas de la misma familia de energía, solo que a diferentes frecuencias.

El color de un láser está determinado por su frecuencia: el rojo tiene una frecuencia más baja que el verde o el azul. De manera similar, en radio trabajamos con diferentes frecuencias que no podemos ver. Cuando hablamos de modulación de radio, hablamos de cómo manipulamos estas ondas invisibles para transportar nuestra voz o nuestros datos. Exploremos estas distintas maneras de manipular ondas de radio y cuánto espacio del espectro radioeléctrico (ancho de banda) necesita cada método.

#### Modulación de amplitud (AM)

En la Modulación de Amplitud (AM), variamos la fuerza (amplitud) de una onda de radio para transportar información. Piensa en ello como cambiar el brillo del láser, aumentando o disminuyendo rápidamente la potencia de la luz para transmitir información.

Cuando variamos la amplitud (intensidad de la luz) con suficiente rapidez, ocurre algo interesante: la señal crea frecuencias adicionales (colores) ligeramente por encima y por debajo de la frecuencia principal. Estas se llaman **bandas laterales**, y son las que realmente contienen la información que transmites. La onda portadora principal en sí no contiene información: el color principal de nuestro puntero láser hipotético estaría presente, pero también veríamos otros colores por encima y por debajo del color principal, y esos son los que nos darían el mensaje.

Aunque AM no es el modo más común en radioafición, todavía lo encontrarás en radiodifusión y en algunas comunicaciones especializadas. La mayoría de las señales de televisión analógica, incluida la Televisión de Aficionados (ATV), usan AM.

#### Modulación de frecuencia (FM) y modulación de fase (PM)

> **Información clave:**
> - FM/PM se usan comúnmente para transmisiones de radio por paquetes en VHF. {{< link id="T8A02" >}}
> - FM/PM son los modos principales para repetidores de voz en VHF y UHF. {{< link id="T8A04" >}}

En la Modulación de Frecuencia (FM), mantenemos constante la amplitud (brillo), pero variamos la frecuencia (color) de la onda de radio. Es como usar una luz que mantiene el mismo brillo pero cambia entre distintos colores para enviar tu mensaje: un cambio de color específico representa un sonido o una porción de datos específica.

**La Modulación de Fase (PM)** está estrechamente relacionada con FM, pero en lugar de cambiar directamente la frecuencia, desplaza el **tiempo** de la onda. En la práctica, el efecto es tan parecido que la mayoría de los operadores de radioafición simplemente agrupan PM y FM como "FM". Las diferencias específicas quedan fuera del alcance de este libro, pero para uso en radioafición recuerda que FM y PM producen el mismo tipo práctico de señal.

> **Información clave:** Una señal de voz FM típica de repetidor VHF tiene un ancho de banda entre 10 y 15 kHz. {{< link id="T8A09" >}}

#### Banda lateral única (SSB)

Ahora hablemos de SSB, que es donde la modulación de amplitud recibe una mejora interesante. SSB es el modo preferido para contactos de larga distancia (señal débil) en las bandas VHF y UHF. {{< link id="T8A03" >}}

> **Información clave:**
> - En comparación con FM, las señales SSB tienen un ancho de banda más estrecho. {{< link id="T8A07" >}}
> - La Banda Lateral Superior (USB) se usa normalmente para comunicaciones de banda lateral única en HF de 10 metros, VHF y UHF. {{< link id="T8A06" >}}
> - Una señal de voz típica de banda lateral única tiene un ancho de banda aproximado de 3 kHz. {{< link id="T8A08" >}}
> - La Banda Lateral Única (SSB) es una forma de modulación de amplitud. {{< link id="T8A01" >}}

¿Recuerdas cómo AM crea bandas laterales por encima y por debajo de la frecuencia principal? En SSB eliminamos la onda portadora y una de las bandas laterales. Usando nuestra analogía del puntero láser, sería como conservar las variaciones de color del láser que representan tu voz, pero eliminar el brillo de fondo constante del haz cuando no estás hablando.

Si pudieras filtrar las variaciones de color por encima del color principal — las que llevan tu voz — quedarían solo las variaciones por debajo: una sola banda lateral, o SSB. Tu láser solo emitiría luz cuando realmente estés hablando, y usaría exactamente la cantidad mínima de luz necesaria para representar tu voz: sin energía desperdiciada en un haz constante ni información redundante de la banda lateral superior.

Si quitaras la frecuencia principal del puntero láser y los colores de abajo (los colores de la banda lateral inferior), te quedarías con la Banda Lateral Superior (USB).

Tanto la modulación de Banda Lateral Superior (USB) como la de Banda Lateral Inferior (LSB) se conocen como Banda Lateral Única (SSB), porque hemos eliminado una de las bandas laterales. Ambas son una forma de Modulación de Amplitud.

Hay dos sabores de SSB:

- **Banda Lateral Superior (USB)**: Generalmente se usa en frecuencias por encima de 10 MHz — las bandas de 30, 20, 17, 15, 12 y 10 metros — así como en todo el trabajo SSB de VHF y UHF.
- **Banda Lateral Inferior (LSB)**: Se usa por debajo de 10 MHz, cubriendo las bandas de 160, 80 y 40 metros.

Como solo transmitimos la parte esencial de la señal, SSB usa aproximadamente **la mitad del ancho de banda** de la AM estándar y requiere mucha menos potencia para el mismo alcance, lo que la convierte en una favorita para comunicaciones de señal débil y de larga distancia.

#### Comparación de ancho de banda

Los diferentes modos de modulación ocupan distintas cantidades de espacio de frecuencia, de manera muy parecida a cómo distintos colores de luz ocupan diferentes partes del espectro visual:

> **Información clave:** Anchos de banda aproximados:
> - CW (Código Morse): el ancho de banda más estrecho, alrededor de 150 Hz. {{< link id="T8A05" >}} {{< link id="T8A11" >}}
> - Voz SSB: alrededor de 3 kHz.
> - Voz FM: alrededor de 10-15 kHz.
> - Televisión AM de barrido rápido: alrededor de 6 MHz. {{< link id="T8A10" >}}

#### Ancho de banda y rango de frecuencia

Un aspecto fascinante de la radioafición es cómo el ancho de banda disponible influye en nuestra elección de modulación. Piensa en las bandas de radio como secciones de diferentes tamaños del espectro electromagnético:

- **Secciones estrechas (ancho de banda limitado)**: Modos como CW (código Morse) funcionan de maravilla porque usan una porción increíblemente estrecha del espectro, como usar apenas una astilla de un color específico del arcoíris.

- **Secciones más amplias (más ancho de banda)**: Las bandas con más frecuencias disponibles pueden soportar modos "más anchos". Por ejemplo:
  - La banda de 10 metros tiene espacio suficiente tanto para CW estrecho como para SSB más ancho.
  - Las bandas de repetidores VHF/UHF pueden manejar voz FM, que necesita más ancho de banda.
  - La televisión de barrido rápido requiere un ancho de banda enorme (¡alrededor de 6 MHz!). Eso es más ancho que cualquiera de las bandas de aficionados por debajo de 70 cm, así que solo se permite en 70 cm y superiores.

A medida que los rangos de frecuencia se hacen más anchos, puedes usar modos que requieren más ancho de banda. Un contacto de voz en la banda de 2 metros podría usar FM ancho (15 kHz), FM estrecho (5 kHz) o incluso SSB más estrecho (3 kHz). Hay modos digitales que pueden ser aún más estrechos. Un modo digital, PSK31 (que veremos en la siguiente sección), cabe en aproximadamente 60 Hz en uso práctico: más estrecho que una señal CW típica.

Esta flexibilidad es parte de lo que hace que la radioafición sea tan dinámica y emocionante.

---

Con los conceptos básicos de modulación cubiertos, veamos el mundo específico de los modos digitales, donde las computadoras y los radios trabajan juntos para enviar datos, imágenes e incluso video por el aire.
