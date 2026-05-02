---
chapter: "2"
section: "2.3"
questions: [ "T6D06", "T6D02", "T6D03" ]
status: publish1
---

### Sección 2.3: Otros componentes

Junto a las resistencias, capacitores y semiconductores, algunos otros componentes aparecen con suficiente frecuencia en los equipos de radio como para que valga la pena conocerlos.

#### Transformadores: los malabaristas del voltaje

> **Información Clave:** Un transformador puede usarse para cambiar energía de 120V CA a un voltaje de CA más bajo para otros usos. {{< link id="T6D06" >}}

![Diagrama esquemático de transformador](../../../images/s2-3-transformer.svg)
{.img-small .float-right .img-bw}

Un transformador consiste en dos o más bobinas de alambre enrolladas alrededor de un núcleo común, generalmente hecho de hierro. Cuando la CA fluye por una bobina, el campo magnético cambiante induce un voltaje en la otra bobina. La relación de vueltas entre las dos bobinas determina si el voltaje de salida será más alto o más bajo que el de entrada; por eso un transformador puede “elevar” o “reducir” voltaje.

Esta es la intuición clave: un transformador intercambia voltaje por corriente mientras mantiene la potencia total aproximadamente igual. Es como una relación de engranes: un engrane pequeño que mueve uno más grande hace que el grande gire despacio pero con más fuerza, y viceversa. Un transformador con más vueltas en el lado de salida te da mayor voltaje pero menos corriente; uno con menos vueltas en la salida te da menor voltaje pero más corriente. La potencia total se mantiene más o menos igual de cualquier manera.

Los transformadores aparecen en radioafición en varios lugares:

1. **Fuentes de alimentación** — reducen el voltaje de la pared (120V CA) a los voltajes más bajos que necesita tu radio.
2. **Adaptación de impedancia** — adaptan etapas de audio entre sí, o adaptan una línea de transmisión a una antena.

Dato curioso: los transformadores más grandes del mundo tienen el tamaño de un edificio de cuatro pisos, pesan más de 900 toneladas y manejan suficiente potencia para varios millones de hogares. Los transformadores de tu estación de radioaficionado son, por suerte, mucho más pequeños.

#### Relés: interruptores electromagnéticos

> **Información Clave:** Un relé es un interruptor controlado eléctricamente. {{< link id="T6D02" >}}

![Diagrama esquemático de relé](../../../images/s2-3-relay.svg)
{.img-small .float-right .img-bw}

Un relé es simplemente un electroimán que controla un interruptor. Cuando fluye corriente por la bobina del electroimán, el campo magnético tira de un par de contactos para abrirlos o cerrarlos, abriendo o cerrando el circuito en el que están esos contactos. Como el electroimán está en un circuito y los contactos en otro, puedes usar una pequeña señal de control para encender o apagar una carga mucho más grande. A menudo incluso puedes escuchar el *clic* cuando conmuta.

En radioafición, los relés aparecen en varias aplicaciones:

1. **Conmutación de antenas** — cambiar rápidamente entre diferentes antenas, o entre transmitir y recibir.
2. **Control de amplificadores** — gestionar la secuencia necesaria al usar amplificadores de alta potencia.
3. **Sintonizadores automáticos de antena** — muchos sintonizadores automáticos usan un banco de relés para conmutar diferentes combinaciones de inductores y capacitores.

Dato sobre los relés: el primer relé práctico fue inventado por Joseph Henry en 1835. Allanó el camino para la telegrafía de larga distancia, el antecesor directo de la radioafición.

#### Tipos de cable

> **Información Clave:** El cable blindado se usa para evitar el acoplamiento de señales no deseadas hacia o desde el cable. {{< link id="T6D03" >}}

Encontrarás varios tipos de cable al montar una estación o construir equipo. Algunos que vale la pena conocer:

- **Cable estándar** — tu conductor básico, generalmente de cobre, en varios calibres (grosores). Un cable más grueso puede transportar más corriente de forma segura, que es el concepto de caída de voltaje del Capítulo 1 apareciendo de nuevo.
- **Cable trenzado** — múltiples hilos delgados torcidos entre sí. Es más flexible que el cable sólido, así que soporta mejor situaciones en las que el cable necesita doblarse repetidamente.
- **Cable blindado** — tiene uno o más conductores internos aislados envueltos en una capa conductora (el blindaje, generalmente malla trenzada o lámina metálica) y luego una cubierta aislante exterior. El blindaje evita que la interferencia electromagnética externa entre en la señal, y también evita que las propias señales del cable se escapen e interfieran con otros equipos. Por eso los cables de audio, cables de micrófono y líneas de alimentación coaxiales usan construcción blindada.
- **Alambre magneto** — alambre delgado con un recubrimiento aislante muy fino, usado para bobinar bobinas e inductores.

Escoger el tipo correcto de cable para cada trabajo importa tanto para el rendimiento como para la seguridad.

---

Ahora que hemos cubierto los componentes principales, la siguiente pregunta es cómo se muestran cuando los ingenieros dibujan un circuito.
