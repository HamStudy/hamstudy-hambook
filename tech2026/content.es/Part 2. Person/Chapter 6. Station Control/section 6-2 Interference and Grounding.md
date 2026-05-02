---
chapter: "6"
section: "6.2"
questions: [ "T7B03", "T7B02", "T7B05", "T7B07", "T4A11" ]
status: publish1
---

### Sección 6.2: Interferencia y puesta a tierra

La interferencia es cualquier señal o ruido no deseado que se interpone en el camino de la señal que sí quieres. Puede venir de otros equipos —de ellos o tuyos— o de fuentes naturales como rayos y actividad solar. Esta sección cubre qué puedes hacer con las fuentes sobre las que tienes cierto control, junto con las prácticas de puesta a tierra que ayudan a reducir la interferencia en ambas direcciones.

#### ¿Qué causa la interferencia?

> **Información clave:** La interferencia de radiofrecuencia (RFI) puede ser causada por sobrecarga fundamental, armónicos y emisiones espurias. {{< link id="T7B03" >}}

RFI se refiere a energía de radio no deseada que interfiere con tus señales deseadas. Puede venir de varias fuentes, incluidos otros transmisores de radio, dispositivos electrónicos, líneas eléctricas y equipos impulsados por motores.

#### Sobrecarga fundamental

La sobrecarga fundamental ocurre cuando una señal fuerte cercana abruma un receptor, incluso si no está en la frecuencia que intentas recibir. Es como tratar de escuchar un susurro mientras alguien grita cerca.

En receptores no aficionados (como televisores, radios o teléfonos celulares), la sobrecarga fundamental puede ocurrir cuando un transmisor de radioaficionado cercano es tan fuerte que sobrecarga los circuitos de entrada del receptor. Esto puede causar interferencia aunque la señal de radioaficionado no esté en una frecuencia cercana a la que el dispositivo intenta recibir.

> **Información clave:**
> - Una radio comercial AM o FM puede recibir involuntariamente una transmisión de radioaficionado porque el receptor no puede rechazar señales fuertes fuera de la banda AM o FM. {{< link id="T7B02" >}}
> - Para reducir la interferencia de una estación de radioaficionado a un receptor de radio por aire no amateur, bloquea la señal de radioaficionado con un filtro en la entrada de antena del receptor afectado. {{< link id="T7B05" >}}

Para abordar la sobrecarga fundamental:

- Reduce la potencia del transmisor si es posible.
- Aumenta la distancia entre tu antena y los dispositivos afectados.
- Instala un filtro en la entrada del receptor afectado para bloquear las señales problemáticas.
- Usa una antena mejor diseñada que minimice la radiación en direcciones no deseadas.

Que un vecino pueda escuchar tus transmisiones en su dispositivo no necesariamente significa que estés transmitiendo ilegalmente o en la frecuencia equivocada. Podría ser un caso de sobrecarga fundamental, que a menudo es un problema del receptor más que del transmisor.

#### Armónicos y emisiones espurias

Los armónicos son múltiplos de la frecuencia fundamental en la que estás transmitiendo. Por ejemplo, si transmites en 146 MHz, los armónicos podrían aparecer en 292 MHz, 438 MHz, y así sucesivamente.

Las emisiones espurias son salidas de radiofrecuencia no deseadas en frecuencias distintas de la frecuencia fundamental y sus armónicos.

Tanto los armónicos como las emisiones espurias pueden causar interferencia a otros servicios o dispositivos que operan en esas frecuencias. Las causas pueden incluir:

- Amplificadores sobreexcitados.
- Filtrado deficiente en el transmisor.
- Equipo defectuoso o mal diseñado.

Para minimizar armónicos y emisiones espurias:

- Asegúrate de que tu transmisor esté correctamente ajustado y no sobreexcitado.
- Usa filtros pasa bajos apropiados en la salida de tu transmisor.
- Mantén tu equipo y reemplaza cualquier componente defectuoso.

Entender los armónicos y las emisiones espurias es crucial para una operación responsable de radioafición. Estas señales no deseadas pueden causar interferencia muy lejos de tu frecuencia de transmisión prevista, afectando potencialmente una amplia gama de dispositivos y servicios.

#### No seas “ese vecino”

Tu flamante configuración nueva podría estar causando interferencia a los dispositivos electrónicos de tus vecinos sin que siquiera lo sepas. Las señales pueden incluir imágenes distorsionadas en televisores cercanos o tu voz saliendo por el estéreo de alguien (y créeme, probablemente no quieren escuchar tus planes para Field Day).

Para evitar ser una molestia:

- **Usa la mínima potencia necesaria** para hacer tu contacto.
- **Asegúrate de que tu antena esté correctamente ajustada** para evitar emisiones espurias.
- **Considera usar filtros** en la salida de tu transmisor para mantener limpia tu señal.
- **Mantén tu estación bien conectada a tierra** (más sobre eso en un momento).

#### Lidiar con interferencia no deseada

En el lado de recepción, la interferencia puede sonar como zumbidos, clics o ese molesto “brrrap” que ahoga la señal que intentas escuchar. Los culpables comunes incluyen:

- Líneas eléctricas.
- Motores eléctricos (un refrigerador, una unidad de aire acondicionado cercana).
- Luces LED (sí, incluso esas bombillas ecológicas pueden ser poco amigables con la radio).
- Controladores solares de carga mal fabricados.
- Computadoras y otros dispositivos electrónicos.

Rastrearla es trabajo de detective: apaga dispositivos uno por uno hasta que el ruido desaparezca. Las perlas de ferrita o choques en los cables de alimentación a menudo pueden ayudar a domar los ruidosos que no puedes apagar.

#### Filtros

> **Información clave:** La interferencia a un transceptor de la banda de 2 metros causada por una estación comercial de FM cercana puede reducirse instalando un filtro de rechazo de banda. {{< link id="T7B07" >}}

Un filtro de rechazo de banda bloquea un rango específico de frecuencias que causa interferencia, evitando que una señal fuerte cercana llegue a tu receptor.

#### Puesta a tierra: la base de una buena estación

La puesta a tierra es crucial tanto para la seguridad como para reducir la interferencia. Un buen sistema de tierra es como los cimientos de una casa: no lo ves, pero todo depende de él.

##### Conceptos básicos de puesta a tierra de la estación

Para tu estación, quieres un camino de baja impedancia a tierra. Esto significa:

- **Usa alambre grueso o una cinta trenzada de tierra** (cuanto más grueso, mejor).
- **Mantenlo tan corto y recto como sea posible** y evita curvas pronunciadas.
- **Conéctalo a una buena tierra física** (varillas de tierra, tuberías de agua fría, etc.).

Todo tu equipo debe conectarse a tierra en un solo punto. Esto evita “bucles de tierra”, que ocurren cuando equipos a diferentes potenciales de tierra crean un lazo por el que puede fluir corriente, causando zumbido, ruido y otros dolores de cabeza. Si tu estación tiene más de una varilla de tierra o conexión a tierra, recuerda de la Sección 5.5 que deben unirse entre sí con alambre grueso o cinta conductora para que los rayos y las corrientes parásitas no puedan desarrollar una diferencia de voltaje entre ellas.

La puesta a tierra no se trata solo de rendimiento; también es un tema de seguridad. Una buena tierra puede ayudar a proteger tu equipo (y a ti) de acumulación de estática y forma parte de tu sistema de protección contra rayos.

##### Puesta a tierra en instalaciones móviles

La puesta a tierra de un transceptor móvil tiene una sutileza fácil de hacer mal.

> **Información clave:** El retorno negativo de alimentación de un transceptor móvil debe conectarse a la tierra del chasis de la batería de 12 voltios. {{< link id="T4A11" >}}

Es tentador suponer que, como el chasis de un vehículo es una gran pieza de metal unida eléctricamente, cualquier punto metálico es igual de bueno como tierra: simplemente conecta el cable negativo del radio donde sea conveniente. Eso podría parecer que funciona, pero definitivamente no es ideal. La conexión correcta es en el mismo punto donde el terminal negativo de la batería de 12 voltios se une al chasis (o directamente al terminal negativo de la batería). La mayoría de los vehículos tienen un cable de unión de calibre grueso que va del negativo de la batería a un punto específico del chasis, y ese es el lugar.

¿Por qué importa? Un radio transmitiendo puede consumir mucha corriente, y cada conexión y cada pulgada de metal entre tú y el negativo de la batería tiene una pequeña resistencia. Atornillar tu cable negativo a un punto aleatorio del chasis agrega resistencia extra al camino de retorno, lo que causa caída de voltaje bajo carga de transmisión, silbido del alternador y problemas de ruido. La práctica estándar es llevar tanto el cable positivo como el negativo directamente al punto principal de conexión de la batería, con fusibles en ambas líneas: el fusible en el cable de tierra protege el radio en situaciones inusuales donde la corriente podría fluir hacia atrás, como un arranque con cables mal hecho.

---

Incluso una estación bien configurada se beneficia de entender el equipo que la hace funcionar. La siguiente sección mira más de cerca el corazón de cualquier estación —el receptor, el transmisor y el transceptor— y los conceptos detrás de cómo manejan las señales.
