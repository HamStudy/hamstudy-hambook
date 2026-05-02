---
chapter: "2"
section: "2.1"
questions: [ "T5D13", "T5D14", "T6A01", "T6A04", "T6A05", "T6A06", "T6A07", "T6D08", "T6A03", "T6A02", "T6A08", "T6A09" ]
status: publish1
---

### Sección 2.1: Componentes básicos

Cuando miras dentro de un equipo de radio, verás muchas piezas pequeñas organizadas sobre una placa de circuito. Antes de ver las piezas individuales, vale la pena entender las dos formas básicas en que cualquiera de ellas puede conectarse.

#### Configuraciones de circuitos: serie y paralelo

> **Información Clave:**
> - En los circuitos en serie, la corriente es la misma a través de todos los componentes. {{< link id="T5D13" >}}
> - En los circuitos en paralelo, el voltaje es el mismo a través de todos los componentes. {{< link id="T5D14" >}}

Todo circuito conecta componentes en una de dos configuraciones (o en alguna combinación de ambas):

- **Serie** significa que los componentes están cableados de extremo a extremo, de modo que solo hay un camino para que siga la corriente. Como solo hay un camino, la misma corriente fluye por todos los componentes.
- **Paralelo** significa que los componentes están conectados entre los mismos dos puntos, dando a la corriente múltiples caminos posibles. Cada camino ve el mismo voltaje, pero la corriente puede dividirse entre ellos.

Para el examen de Técnico, esos dos datos son todo lo que necesitas. Los detalles más profundos — cómo se comportan específicamente resistencias, capacitores e inductores cuando se combinan en serie o en paralelo — son material de la licencia General, así que aquí lo mantendremos a nivel superficial. Con eso aclarado, conozcamos los componentes.

#### Resistencias

> **Información Clave:** Un resistor se opone al flujo de corriente en cualquier circuito (incluido un circuito de CC). {{< link id="T6A01" >}}

Las *resistencias* son el componente más común en los circuitos electrónicos, y también el más simple: resisten la corriente. Las de orificio pasante que ves en equipos antiguos y proyectos de aficionado son piezas cilíndricas pequeñas con bandas de colores alrededor; esas bandas codifican el valor de resistencia mediante un código de colores estándar. (Puedes aprender a leerlo en otro lugar si te interesa; no lo necesitas para el examen). Los equipos modernos usan con más frecuencia resistencias diminutas de montaje superficial con sus valores impresos como números, pero la función es la misma.

Aplicaciones comunes en radioafición incluyen:

1. Dividir voltajes para proteger componentes delicados.
2. Limitar la corriente hacia partes sensibles.
3. Establecer puntos de operación en circuitos amplificadores.

#### Capacitores e inductores: los gemelos de almacenamiento de energía

![Ilustración con un capacitor e inductor de caricatura, claramente gemelos fraternales](../../../images/illus/inducticap.svg)
{.img-pgcap .float-right}

Una batería almacena energía químicamente. Los capacitores e inductores también almacenan energía, pero lo hacen con campos en lugar de química, y cada uno usa un tipo de campo diferente. Eso es lo más importante que debes saber sobre estos dos componentes, y es la mayor parte de lo que pregunta el examen.

##### Capacitores

> **Información Clave:**
> - Un condensador almacena energía en un campo eléctrico. {{< link id="T6A04" >}}
> - Un condensador consiste en superficies conductoras (generalmente placas metálicas) separadas por un aislante. {{< link id="T6A05" >}}

La estructura física — dos conductores con un aislante entre ellos — es lo que da a un capacitor su capacidad de almacenar carga. Aplica un voltaje entre las placas y se acumula carga en ellas, creando un campo eléctrico entre las placas que almacena energía. Quita el voltaje y la energía almacenada se queda allí hasta que algo le da un lugar a donde ir.

Los capacitores vienen en todo tipo de formas y tamaños, desde pequeños discos cerámicos hasta grandes cilindros metálicos. Su capacidad de almacenamiento se mide en *faradios (F)*, aunque la mayoría de los circuitos de radio del mundo real usan valores mucho más pequeños: microfaradios (µF) o picofaradios (pF).

En radioafición, los capacitores aparecen en muchos roles:

1. Suavizar fluctuaciones en fuentes de alimentación (convirtiendo CA en CC limpia).
2. Bloquear señales o ruido no deseados, incluyendo mantener la RF fuera de circuitos de audio.
3. Ayudar a seleccionar o sintonizar frecuencias específicas en un circuito.

ADVERTENCIA: Los capacitores a menudo retienen carga durante un tiempo después de desconectar la alimentación; veremos esto más en el Capítulo 5, pero manipular capacitores que estuvieron energizados recientemente puede ser bastante peligroso.

##### Inductores

> **Información Clave:**
> - Los inductores almacenan energía en un campo magnético. {{< link id="T6A06" >}}
> - Normalmente están construidos como una bobina de alambre. {{< link id="T6A07" >}}
> - Se usan con condensadores para formar un circuito resonante. {{< link id="T6D08" >}}

Mientras un capacitor almacena energía en un campo eléctrico entre placas, un *inductor* la almacena en un campo magnético que se forma alrededor de una bobina de alambre cuando la corriente fluye por ella. Por eso casi todos los inductores que verás parecen bobinas: la forma de bobina concentra el campo magnético y hace más fuerte el efecto de almacenamiento.

Los inductores cumplen varios papeles importantes en circuitos de radio, incluyendo filtrado de señales, adaptación de impedancia y (junto con capacitores) la formación de *circuitos resonantes* que permiten que una radio seleccione una frecuencia específica entre las muchas que recibe. Esto último es muy importante: así es como tu radio escoge una estación entre el ruido, y volveremos a ello en capítulos posteriores.

En cuanto a retener carga, los inductores se comportan de forma diferente a los capacitores: almacenan energía solo mientras fluye corriente. Sin embargo, si se interrumpe de golpe el camino de la corriente, el campo que colapsa puede producir un breve pico de alto voltaje; por lo general el circuito lo maneja, pero vale la pena saberlo.

#### Potenciómetros

> **Información Clave:** Un potenciómetro se usa para controlar la resistencia {{< link id="T6A03" >}} y a menudo se usa como control de volumen. {{< link id="T6A02" >}}

Un *potenciómetro* es una resistencia que puedes ajustar. Al girar la perilla o deslizar el control, la resistencia cambia, lo que lo hace útil donde quieras un ajuste continuamente variable en lugar de un valor fijo. En radioafición suelen aparecer como:

1. Controles de volumen.
2. Controles de silenciamiento (squelch).
3. Ajustes de potencia de transmisión.

#### Interruptores

> **Información Clave:**
> * Un interruptor SPDT (Single Pole, Double Throw; un polo, doble tiro) permite que un solo circuito se conmute entre uno de dos circuitos. {{< link id="T6A08" >}}
> * También necesitarás reconocer un interruptor SPST (Single Pole, Single Throw; un polo, un tiro) en un diagrama de circuito. {{< link id="T6A09" >}}

![Diagrama de un interruptor SPST](../../../images/s2-1-spst-switch.svg)
{.img-small .float-right .mb-1 .img-bw}
![Diagrama de un interruptor SPDT](../../../images/s2-1-spdt-switch.svg)
{.img-small .float-right .clear .img-bw}

Los interruptores se describen usando dos términos:

- **Polos**: cuántos circuitos separados controla el interruptor.
- **Tiros**: a cuántas posiciones puede conectarse cada circuito.

Así que un interruptor SPST (Single Pole, Single Throw) es el interruptor clásico de encendido/apagado: un circuito, una posición (además de apagado). Un interruptor SPDT (Single Pole, Double Throw) es parecido, pero en lugar de solo encendido/apagado, enruta una entrada entre dos salidas posibles. Piensa en él como un cambio de vía de ferrocarril con una vía entrante (el polo) que puede conectarse a cualquiera de dos vías salientes (los tiros).

En radioafición, los interruptores aparecen para cosas como encender y apagar equipos, seleccionar entre antenas, cambiar bandas o modos en un transceptor y activar funciones como supresores de ruido o atenuadores.

---

Con los componentes en mente, la siguiente pregunta es qué más puede haber dentro de una radio; ahí es donde entran los semiconductores.
