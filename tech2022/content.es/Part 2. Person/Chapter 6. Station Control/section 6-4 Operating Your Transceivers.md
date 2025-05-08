---
chapter: "6"
section: "6.4"
questions: [ "T4B02", "T7A07", "T4B04", "T2B13", "T4B03", "T4B05", "T2B06", "T2B01", "T4B08", "T4B10", "T4B01", "T4B06", "T4A12" ]
---

### Sección 6.4: Operando Tu Transceptor

Ahora que entiendes qué son los transceptores y cómo funcionan, exploremos cómo operarlos. Comenzaremos con los controles más comunes encontrados en todas las radios y luego introduciremos algunas características especializadas que podrías encontrar si decides explorar modos adicionales más allá de FM.

#### Controles Básicos para Todos los Transceptores

Cada radio, independientemente del tipo, tiene estos controles fundamentales:

- **Encendido/Volumen**: Enciende/apaga la radio y ajusta el nivel de audio
- **Entrada de Frecuencia**: *El teclado o la perilla VFO pueden usarse para ingresar la frecuencia operativa de un transceptor*. {{< link id="T4B02" >}}
  - **Entrada Directa**: Usa el teclado para escribir la frecuencia exacta
  - **Perilla VFO**: Gírala para sintonizar hacia arriba o abajo de la banda
- **PTT (Push-To-Talk)**: Este botón *cambia el transceptor de recepción a transmisión cuando es conectado a tierra (presionado)*. {{< link id="T7A07" >}}

#### Canales de Memoria

> **Información Clave:** Para habilitar un acceso rápido a una frecuencia o canal favorito en tu transceptor, guárdalo en un canal de memoria. {{< link id="T4B04" >}}

En lugar de ingresar frecuencias manualmente cada vez, guárdalas en la memoria de tu radio:
- Programa tus canales de uso frecuente (repetidores, frecuencias simplex)
- Luego simplemente selecciona entre estos canales guardados usando los botones arriba/abajo
- La mayoría de radios almacenan docenas o incluso cientos de canales, cada uno con sus ajustes asociados

#### Control de Silenciador (Squelch)

> **Información Clave:** La función de silenciador *silencia el audio del receptor* cuando no hay una señal presente. {{< link id="T2B13" >}}

El control de silenciador establece un umbral—las señales por debajo de este nivel se silencian:
- Demasiado bajo: Ruido de fondo constante
- Demasiado alto: Podrías perder señales débiles
- Perfecto: Silencio hasta que alguien transmite

*Para escuchar señales FM débiles, ajusta el umbral del silenciador para que la salida de audio del receptor esté activada todo el tiempo*, luego aumenta lentamente hasta que el ruido de fondo desaparezca. {{< link id="T4B03" >}}

#### Función de Escaneo

> **Información Clave:** La función de escaneo *sintoniza a través de un rango de frecuencias para verificar actividad*. {{< link id="T4B05" >}}

Esta característica busca automáticamente canales activos:
- Cuando la radio detecta una señal, hace una pausa para que puedas escuchar
- Una vez que termina la transmisión, el escaneo se reanuda
- Esto es útil para encontrar repetidores activos o monitorear múltiples canales

#### Controles Específicos de FM

##### Controles de Tono

Muchos repetidores requieren tonos específicos para acceso:

- **CTCSS (Sistema de Silenciador Codificado por Tono Continuo)**: Tonos subaudibles enviados junto con tu voz
- **DCS (Silenciador Codificado Digital)**: Alternativa digital al CTCSS

Discutiremos estos con más detalle en la siguiente sección.

> **Información Clave:** *DTMF (Multifrecuencia de Doble Tono) usa pares de tonos de audio* para enviar comandos. Si bien se usan más comúnmente con repetidores, pueden usarse de muchas maneras. {{< link id="T2B06" >}}

- **DTMF**: La misma tecnología que los teléfonos de tonos, utilizada para controlar funciones de repetidores o acceder a sistemas vinculados a internet

##### Controles de Repetidor

> **Información Clave:** La función de inversión VHF/UHF *te permite escuchar en la frecuencia de entrada de un repetidor*. {{< link id="T2B01" >}}

Cuando trabajes a través de repetidores, usarás:

- **Desplazamiento (Offset)**: Establece la diferencia entre las frecuencias de transmisión y recepción para repetidores. Los desplazamientos comunes son más o menos 600 kHz en 2 metros y más o menos 5 MHz en 70 cm.

- **Función de Inversión**: Intercambia temporalmente tus frecuencias de transmisión y recepción para escuchar en la frecuencia de entrada del repetidor.

##### Selección del Nivel de Potencia

La mayoría de los transceptores FM ofrecen niveles de potencia seleccionables:
- Portátiles: Típicamente Bajo (0.5-1W) y Alto (5W)
- Equipos móviles: A menudo Bajo, Medio y Alto (5-50W+)

Siempre usa la potencia mínima necesaria para una comunicación confiable. Menor potencia conserva la vida de la batería en los portátiles y reduce la posibilidad de interferir con otras estaciones. A menudo, mejorar tu sistema de antena producirá mejores resultados que simplemente aumentar la potencia.

#### Controles de Transceptores Multimodo

Mientras que la mayoría de los operadores Technician comienzan con FM, los transceptores que operan en múltiples modos añaden capacidades como SSB, CW y comunicaciones digitales. Entender estos controles adicionales puede ser un conocimiento valioso si decides explorar otros modos disponibles para Technicians, como SSB en 10 metros o modos digitales en varias bandas.

##### Selección de Modo

Simplemente selecciona el modo apropiado para tu operación usando el control MODE:

- **SSB** (USB - Banda Lateral Superior y LSB - Banda Lateral Inferior)
- **CW** (Onda Continua para código Morse)
- **AM** (Modulación de Amplitud)
- **FM** (Modulación de Frecuencia)
- **Digital** (A veces etiquetado como DATA o RTTY)

Para operación SSB en VHF/UHF, *normalmente se usa Banda Lateral Superior (USB)*.

##### Controles de Ancho de Banda del Receptor

> **Información Clave:** Tener múltiples opciones de ancho de banda de recepción en un transceptor multimodo permite la reducción de ruido o interferencia al seleccionar un ancho de banda que coincida con el modo. {{< link id="T4B08" >}} Para recepción SSB, un *filtro con ancho de banda de 2400 Hz* proporciona la mejor relación señal-ruido. {{< link id="T4B10" >}}

Como se explicó en la Sección 6.3, los controles de ancho de banda te permiten ajustar qué tan "amplia" es la porción del espectro de radio que procesa tu receptor:

- **SSB**: Típicamente 2400 Hz (mejor relación señal-ruido)
- **CW**: Típicamente 250-500 Hz
- **AM**: Típicamente 6 kHz
- **FM**: Típicamente 10-15 kHz
- **Digital**: Varía según el modo

Anchos de banda más estrechos reducen el ruido y la interferencia pero pueden afectar la calidad del audio. Anchos de banda más amplios proporcionan mejor fidelidad pero dejan entrar más ruido.

##### Ganancia del Micrófono

> **Información Clave:** La ganancia excesiva del micrófono en transmisiones SSB causa audio transmitido distorsionado. {{< link id="T4B01" >}}

A diferencia de FM, donde la ganancia de tu micrófono rara vez necesita ajuste, el ajuste adecuado de la ganancia del micrófono es crítico para SSB:
- Demasiado alta: Audio distorsionado que es difícil de entender
- Demasiado baja: Señal débil que otros tendrán dificultad para escuchar

Comienza con un ajuste moderado y obtén reportes al aire para ajustarlo adecuadamente. El objetivo es un audio claro y sin distorsión.

##### RIT/Clarificador

> **Información Clave:** El control RIT o Clarificador puede usarse si el tono de voz de una señal de banda lateral única parece demasiado alto o bajo. {{< link id="T4B06" >}}

Al operar en SSB, podrías notar que algunas estaciones suenan demasiado agudas o demasiado graves. El control RIT (Sintonización Incremental del Receptor)—a veces llamado Clarificador—te permite ajustar solo tu frecuencia de recepción sin cambiar tu frecuencia de transmisión, haciendo que la voz suene más natural.

##### Manipuladores Electrónicos para CW

> **Información Clave:** Un manipulador electrónico ayuda en el envío manual de código Morse. {{< link id="T4A12" >}}

Si estás interesado en código Morse, los transceptores multimodo típicamente incluyen un manipulador electrónico para usar con una llave tipo paleta. Esta característica ayuda a generar puntos y rayas cronometrados adecuadamente, haciendo que tus transmisiones CW sean más limpias y consistentes.

##### Características de Reducción de Ruido

Los transceptores multimodo a menudo incluyen sistemas de reducción de ruido:

- **Supresor de Ruido**: Ayuda a reducir el ruido de impulso como el ruido de ignición
- **Reducción de Ruido Digital**: Usa DSP para identificar y reducir el ruido aleatorio
- **Filtro Notch**: Elimina tonos constantes que pueden dificultar la recepción y puede ayudar a reducir la interferencia de una señal adyacente

Estas características mejoran la capacidad de tu receptor para seleccionar señales deseadas al filtrar señales no deseadas y ruido.

#### Aprendiendo Tu Transceptor

Cada modelo de radio es diferente, así que tómate el tiempo para leer el manual del propietario. Entender el sistema de menús y las funciones de los botones específicos de tu radio hará que operar sea mucho más agradable y evitará frustraciones cuando estés tratando de hacer contactos.

Los transceptores multimodo tienen una curva de aprendizaje más pronunciada que las radios solo FM, pero no te intimides. Comienza con los controles básicos que aprendiste para la operación FM, luego explora gradualmente características adicionales a medida que se expanden tus intereses.

El conocimiento que has ganado sobre la operación del transceptor crea una base sólida si luego decides explorar otros modos o bandas de frecuencia. Si eliges continuar tu viaje de radioafición y actualizar tu clase de licencia, ya entenderás muchos de los principios operativos necesarios para comunicarte a través del país y alrededor del mundo. Pero incluso como Technician, este conocimiento te ayudará a aprovechar al máximo tus privilegios operativos actuales.