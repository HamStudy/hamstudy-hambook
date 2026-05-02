---
chapter: "2"
section: "2.2"
questions: [ "T6B02", "T6B06", "T6B01", "T6B09", "T6D01", "T6B07", "T6D07", "T6B03", "T6B04", "T6B08", "T6B12", "T6B05", "T6B10", "T6B11", "T6D09" ]
status: publish1
---

### Sección 2.2: Semiconductores

Los semiconductores son materiales que pueden actuar como conductores o como aislantes, dependiendo de cómo se usen. Ese comportamiento intermedio es lo que hace posible la electrónica moderna, y aparece en un puñado de componentes que verás constantemente: diodos, LED, transistores y circuitos integrados.

#### Diodos: calles electrónicas de un solo sentido

> **Información Clave:** 
> - Un diodo permite que la corriente fluya en una sola dirección. {{< link id="T6B02" >}}
> - El terminal del cátodo a menudo está marcado con una raya. {{< link id="T6B06" >}}
> - La caída de voltaje directo es menor en algunos tipos de diodos que en otros. {{< link id="T6B01" >}}

Los diodos probablemente son el tipo más simple de semiconductor y por lo general se imaginan como compuertas de un solo sentido para la corriente, aunque eso no es del todo exacto porque hay tipos de diodos que pueden usarse intencionalmente al revés (lo que se llama *polarización inversa*).

![Diagrama esquemático de diodo con ánodo / cátodo etiquetados](../../../images/s2-2-diode.svg)
{.img-small .float-right .img-bw}

Un diodo tiene dos electrodos: el *ánodo* y el *cátodo* {{< link id="T6B09" >}}, y la corriente solo puede fluir en una dirección: entrando por el ánodo y saliendo por el cátodo. Puedes pensar en el ánodo como el lado “positivo” y el cátodo como el lado “negativo” cuando el diodo está conduciendo, y esa intuición generalmente te servirá bien, aunque técnicamente las etiquetas describen la dirección del flujo de corriente más que el voltaje en sí.

Incluso cuando la corriente fluye en la dirección correcta, un diodo no conduce perfectamente. Se necesita una pequeña cantidad de voltaje solo para que la corriente empiece a moverse; esto se llama caída de voltaje directo (quizá recuerdes el concepto de caída de voltaje de la Sección 1.2). Ese voltaje perdido se convierte en calor cuando la energía eléctrica se transforma en energía térmica. Diferentes tipos de diodos tienen diferentes caídas; por ejemplo, los diodos Schottky suelen tener una caída de voltaje directo menor que los diodos de silicio comunes.

Un uso común de los diodos es en un *rectificador*, que cambia la corriente alterna (CA) en una señal de corriente continua (CC) variable. {{< link id="T6D01" >}} La parte “variable” es importante: la salida de un rectificador simple solo es positiva, pero pulsa en lugar de mantenerse constante. Suavizar esos pulsos para convertirlos en CC limpia es uno de los trabajos que hacen los capacitores en una fuente de alimentación, que es donde estos dos componentes suelen trabajar juntos.

#### Diodos emisores de luz (LED): diodos que brillan

> **Información Clave:** Un LED produce luz cuando fluye Corriente de polarización directa a través de él. {{< link id="T6B07" >}}

![Diagrama esquemático de LED con ánodo / cátodo etiquetados](../../../images/s2-2-led.svg)
{.img-small .float-right .img-bw}

Los LED son diodos especiales que se iluminan cuando fluye corriente a través de ellos. Se usan comúnmente como luces indicadoras en equipos de radio: ¡esa luz de encendido de tu transceptor es un LED! {{< link id="T6D07" >}}

#### Transistores: el corazón de la electrónica moderna

> **Información Clave:** 
> - Los transistores pueden usarse como interruptores electrónicos. {{< link id="T6B03" >}}
> - Un transistor contiene tres regiones de material semiconductor. {{< link id="T6B04" >}}
> - FET significa Transistor de efecto de campo. {{< link id="T6B08" >}}

Hay dos tipos principales de transistores, y necesitarás conocer los nombres de los tres electrodos de cada uno:

1. **Transistor de unión bipolar (BJT)**
- Tres partes: *emisor, base y colector*. {{< link id="T6B12" >}}
- A menudo se usa para amplificar señales.
2. **Transistor de efecto de campo (FET)**
- Tres partes: *puerta ("gate"), drenador ("drain") y fuente ("source")*. {{< link id="T6B05" >}}
- A menudo se usa como interruptor controlado por voltaje.

En cualquiera de los dos tipos, la idea es la misma: una señal pequeña en uno de los tres electrodos controla una corriente mucho mayor entre los otros dos. Eso es lo que permite que un transistor amplifique — convirtiendo una señal de entrada pequeña en una salida grande — o conmute, usando una señal pequeña de control para encender o apagar una corriente grande.

##### Transistores como amplificadores

La capacidad de amplificar señales es lo que hace que los transistores sean tan importantes en los equipos de radio. Antes de los transistores, los tubos de vacío (válvulas) cumplían esta función, y todavía encontrarás amplificadores de tubos en uso hoy, especialmente en estaciones de HF de alta potencia. Pero la mayoría de los equipos modernos de radioafición dependen de transistores para la amplificación, desde el pequeño preamplificador que aumenta señales débiles en tu receptor hasta el amplificador de potencia en tu transceptor portátil o móvil.

> **Información Clave:** 
> - Los transistores pueden proporcionar ganancia de potencia: la capacidad de amplificar señales. {{< link id="T6B10" >}}
> - La ganancia en amplificadores puede referirse a la razón entre salida y entrada de voltaje, corriente o potencia; todas son formas válidas de medir cuánto se amplifica una señal. {{< link id="T6B11" >}}

#### Circuitos integrados (CI): muchos componentes en uno

> **Información Clave:** Un circuito integrado combina varios semiconductores y otros componentes en un solo paquete. {{< link id="T6D09" >}}

Un CI es un solo chip que contiene muchos componentes — transistores, diodos, resistencias y demás — fabricados juntos y trabajando como una unidad. También podrías oírlos llamar *microchips* o simplemente chips. Esta es la tecnología que hace posible el equipo de radio moderno, empaquetando circuitos que hace cincuenta años habrían llenado una habitación en algo más pequeño que una uña.

---

Los semiconductores nos llevan casi hasta una radio funcional, pero hay algunos componentes más que aparecen con suficiente frecuencia como para merecer su propia mención.
