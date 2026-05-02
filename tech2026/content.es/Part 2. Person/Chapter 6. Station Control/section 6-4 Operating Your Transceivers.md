---
chapter: "6"
section: "6.4"
questions: [ "T4B02", "T7A07", "T2B13", "T4B03", "T4B05", "T2B06", "T4B08", "T4B10", "T4B01", "T4B06", "T4A12" ]
status: publish1
---

### Sección 6.4: Operar tu transceptor

Ahora que entiendes qué son los transceptores y cómo funcionan, exploremos cómo operarlos. Comenzaremos con los controles más comunes que se encuentran en todos los radios y luego introduciremos algunas funciones especializadas que podrías encontrar si decides explorar modos adicionales más allá de FM.

#### Controles básicos para todos los transceptores

> **Información clave:**
> - La frecuencia de operación de un transceptor puede ingresarse usando el teclado o la perilla VFO. {{< link id="T4B02" >}}
> - La entrada PTT (Push-To-Talk) cambia el transceptor de recepción a transmisión cuando se conecta a tierra. {{< link id="T7A07" >}}

Todo radio, sin importar el tipo, tiene estos controles fundamentales:

- **Encendido/Volumen**: Enciende y apaga el radio y ajusta el nivel de audio.
- **Entrada de frecuencia**: Usa el teclado para escribir una frecuencia directamente, o gira la perilla VFO para sintonizar hacia arriba o abajo de la banda.
- **PTT (Push-To-Talk)**: El botón del micrófono (o del cuerpo del radio) que te cambia de escuchar a transmitir.

#### Canales de memoria

La mayoría de los radios te permiten guardar frecuencias (junto con sus ajustes asociados: desplazamiento, tonos, nivel de potencia, etc.) en canales de memoria. Una vez programados, puedes saltar a un canal guardado con un par de pulsaciones en lugar de escribir la frecuencia cada vez. Esto es especialmente útil para repetidores y otros canales que usas regularmente, y la mayoría de los radios pueden almacenar docenas o incluso cientos de memorias.

#### Control de silenciador (squelch)

> **Información clave:**
> - La función de silenciador silencia el audio del receptor cuando no hay una señal presente. {{< link id="T2B13" >}}
> - Para escuchar una señal FM débil, ajusta el umbral del silenciador para que la salida de audio del receptor esté encendida todo el tiempo. {{< link id="T4B03" >}}

Un receptor amplifica lo que entra. Cuando no hay señal, esa amplificación convierte el ruido de fondo en un siseo fuerte. El control de silenciador establece un umbral: las señales por debajo del umbral se silencian, y las señales por encima pasan al altavoz:

- Demasiado bajo: ruido de fondo constante.
- Demasiado alto: perderás señales débiles.
- Justo bien: silencio hasta que alguien transmite.

Para captar una señal débil, baja el silenciador hasta que apenas puedas escuchar el piso de ruido.

#### Función de escaneo

> **Información clave:** La función de escaneo sintoniza a través de un rango de frecuencias para verificar actividad. {{< link id="T4B05" >}}

Esta función busca automáticamente canales activos:

- Cuando el radio detecta una señal, hace una pausa para que puedas escuchar.
- Una vez que termina la transmisión, el escaneo continúa.
- Es útil para encontrar repetidores activos o monitorear múltiples canales a la vez.

#### Controles específicos de FM

##### Controles de tono

Muchos repetidores y otros sistemas requieren tonos específicos para acceso:

- **CTCSS (Continuous Tone-Coded Squelch System)**: un tono continuo subaudible enviado junto con tu voz.
- **DCS (Digital-Coded Squelch)**: una alternativa digital a CTCSS.

Discutiremos cómo se usan estos para acceder a repetidores en la siguiente sección.

##### DTMF

> **Información clave:** La señalización DTMF (Dual-Tone Multi-Frequency) usa dos tonos de audio simultáneos. {{< link id="T2B06" >}}

DTMF es la misma tecnología que los teléfonos de tonos: cada “dígito” se envía como dos tonos de audio simultáneos. Aunque se usa más comúnmente con repetidores, DTMF puede usarse de muchas formas: controlar funciones de repetidores, acceder a sistemas enlazados por internet como IRLP, u otros servicios automatizados. A diferencia de CTCSS o DCS, DTMF normalmente no se usa para el acceso básico a repetidores.

##### Selección del nivel de potencia

Muchos transceptores FM ofrecen niveles de potencia seleccionables:

- Portátiles: típicamente Bajo (0.5–1 W) y Alto (5 W).
- Equipos móviles: a menudo Bajo, Medio y Alto (5–50 W y más).

Siempre usa la mínima potencia necesaria para una comunicación confiable. Menor potencia conserva batería en los portátiles y reduce la posibilidad de interferir con otras estaciones. Como se mencionó en la sección anterior, mejorar tu sistema de antena a menudo dará mejores resultados que simplemente aumentar la potencia.

#### Controles de transceptores multimodo

Aunque la mayoría de los operadores Technician empiezan con FM, los transceptores que operan en múltiples modos agregan capacidades como SSB, CW y comunicaciones digitales. Entender estos controles adicionales es útil si decides explorar otros modos disponibles para Technicians, como SSB en 10 metros o modos digitales en varias bandas.

##### Selección de modo

Selecciona el modo apropiado para tu operación usando el control MODE:

- **SSB** (USB — Upper Sideband, y LSB — Lower Sideband).
- **CW** (Continuous Wave para código Morse).
- **AM** (Amplitude Modulation).
- **FM** (Frequency Modulation).
- **Digital** (a veces etiquetado como DATA o RTTY).

Para operación SSB en VHF/UHF, normalmente se usa *upper sideband*.

##### Controles de ancho de banda del receptor

> **Información clave:**
> - Múltiples opciones de ancho de banda de filtros de recepción en un transceptor multimodo permiten reducir ruido o interferencia al seleccionar un ancho de banda que coincida con el modo. {{< link id="T4B08" >}}
> - Para recepción SSB, un ancho de banda de filtro de 2400 Hz proporciona la mejor relación señal-ruido. {{< link id="T4B10" >}}

Los controles de ancho de banda te permiten ajustar qué tan “ancha” es la porción del espectro de radio que procesa tu receptor:

- **SSB**: típicamente 2400 Hz (mejor relación señal-ruido).
- **CW**: típicamente 250–500 Hz.
- **AM**: típicamente 6 kHz.
- **FM**: típicamente 10–15 kHz.
- **Digital**: varía según el modo.

Anchos de banda más estrechos reducen ruido e interferencia, pero podrían recortar partes de una señal más ancha. Anchos de banda más amplios proporcionan mejor fidelidad pero dejan entrar más ruido.

##### Ganancia del micrófono

> **Información clave:** La ganancia excesiva del micrófono en transmisiones SSB causa audio transmitido distorsionado. {{< link id="T4B01" >}}

A diferencia de FM, donde la ganancia del micrófono rara vez necesita ajuste, configurar correctamente la ganancia del micrófono es crítico para SSB:

- Demasiado alta: audio distorsionado difícil de entender.
- Demasiado baja: señal débil que otros tendrán dificultad para escuchar.

Empieza con una configuración moderada y pide reportes al aire para afinarla. El objetivo es audio claro y sin distorsión.

##### RIT/Clarificador

> **Información clave:** Si el tono de voz de una señal SSB parece demasiado alto o bajo, se puede usar el RIT o Clarifier para corregirlo. {{< link id="T4B06" >}}

Al operar SSB, podrías notar que algunas estaciones suenan demasiado agudas o demasiado graves. El control RIT (Receiver Incremental Tuning), a veces llamado Clarifier, ajusta solo tu frecuencia de recepción sin cambiar tu frecuencia de transmisión, lo que te permite “clarificar” la voz sin quedar fuera de frecuencia para la otra estación.

##### Manipuladores electrónicos para CW

> **Información clave:** Un manipulador electrónico es un dispositivo que ayuda en el envío manual de código Morse. {{< link id="T4A12" >}}

Si te interesa el código Morse, los transceptores de todos los modos normalmente incluyen un manipulador electrónico para usar con una llave Morse tipo paleta. Esta función ayuda a generar puntos y rayas con tiempos correctos, haciendo que tus transmisiones CW sean más limpias y consistentes.

##### Funciones de reducción de ruido

Los transceptores de todos los modos a menudo incluyen sistemas de reducción de ruido:

- **Noise Blanker**: ayuda a reducir ruido impulsivo como el ruido de ignición.
- **Reducción digital de ruido**: usa DSP para identificar y reducir ruido aleatorio.
- **Filtro notch**: elimina tonos constantes que pueden dificultar la recepción y puede ayudar a reducir interferencia de una señal adyacente.

Estas funciones mejoran la capacidad de tu receptor para distinguir señales deseadas al filtrar las no deseadas.

#### Aprender tu transceptor

Cada modelo de radio es distinto, así que tómate el tiempo de leer el manual del propietario. Entender el sistema de menús y las funciones de botones de tu radio específico te ahorrará mucha frustración cuando intentes hacer contactos. Comienza con los controles básicos descritos aquí y luego explora gradualmente funciones adicionales a medida que crezcan tus intereses.

---

Muchos de los controles de FM cubiertos aquí —CTCSS, DCS, DTMF— se usan con mayor frecuencia al trabajar a través de repetidores. Los repetidores también son donde entran en juego cosas como el desplazamiento y la función inversa, ambas merecen un tratamiento más completo del que cabía aquí. La siguiente sección trata por completo sobre trabajar con ellos.
