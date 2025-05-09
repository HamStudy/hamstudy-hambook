---
chapter: "2"
section: "2.2"
questions: [ "T6B02", "T6B06", "T6B01", "T6B09", "T6D01", "T6B07", "T6D07", "T6B03", "T6B10", "T6B04", "T6B08", "T6B12", "T6B05", "T6B11", "T6D09" ]
illustration_ideas:
- picture of a diode with cathode stripe
---

### Sección 2.2: Semiconductores

Los semiconductores son materiales especiales que hacen posible la electrónica moderna. Son materiales especiales que pueden actuar tanto como conductores (permitiendo que fluya la electricidad) como aislantes (bloqueando la electricidad), dependiendo de cómo se utilicen. Esta propiedad única nos permite crear todo tipo de dispositivos que controlan la electricidad de formas útiles.

#### Diodos: Calles Electrónicas de Un Solo Sentido

> **Información Clave:** 
> - Un diodo permite que la corriente fluya *en una sola dirección* {{< link id="T6B02" >}}
> - El *terminal del cátodo (lado negativo)* a menudo está *marcado con una franja* {{< link id="T6B06" >}}
> - La caída de voltaje directo es menor en algunos tipos de diodos que en otros {{< link id="T6B01" >}}

![Diagrama esquemático de diodo con ánodo / cátodo etiquetados](../../../images/s2-2-diode-es.svg)
{.img-small .float-right .img-bw}

Un diodo tiene dos electrodos:
- *Ánodo*: La conexión positiva
- *Cátodo*: La conexión negativa, marcada con una franja {{< link id="T6B09" >}}

Piensa en un diodo como una calle de un solo sentido—la corriente solo puede fluir en una dirección. Pero incluso cuando fluye en la dirección correcta, un diodo no conduce perfectamente. Se requiere una pequeña cantidad de voltaje solo para que la corriente comience a moverse; esto se llama caída de voltaje directo (puede que recuerdes el concepto de caída de voltaje de la Sección 1.2). Ese voltaje perdido se convierte en calor a medida que la energía eléctrica se convierte en energía térmica. Diferentes tipos de diodos tienen diferentes cantidades de caída—por ejemplo, los diodos Schottky típicamente tienen una caída de voltaje directo menor que los diodos de silicio regulares.

Un uso común de los diodos es en un *rectificador*, que cambia la corriente alterna (CA) en una señal de corriente continua (CC) variable. {{< link id="T6D01" >}}

#### Diodos Emisores de Luz (LED): Diodos que Brillan

> **Información Clave:** Un LED produce luz cuando *la corriente directa* fluye a través de él. {{< link id="T6B07" >}}

![Diagrama esquemático de LED con ánodo / cátodo etiquetados](../../../images/s2-2-led-es.svg)
{.img-small .float-right .img-bw}

Los LEDs son diodos especiales que se iluminan cuando la corriente fluye a través de ellos. Se utilizan comúnmente como luces indicadoras en equipos de radio - ¡esa luz de encendido en tu transceptor es un LED! {{< link id="T6D07" >}}

#### Transistores: El Corazón de la Electrónica Moderna

> **Información Clave:** 
> - Los transistores pueden usarse como interruptores electrónicos {{< link id="T6B03" >}}
> - Los transistores pueden proporcionar ganancia de potencia (la capacidad de amplificar señales) {{< link id="T6B10" >}}
> - Un transistor contiene *tres regiones de material semiconductor* {{< link id="T6B04" >}}
> - FET significa *Transistor de Efecto de Campo (Field Effect Transistor)* {{< link id="T6B08" >}}

Hay dos tipos principales de transistores, y es importante conocer los nombres de sus partes:

1. **Transistor de Unión Bipolar (BJT)**
   - Tres partes: *Emisor, Base y Colector* {{< link id="T6B12" >}}
   - A menudo se usa para amplificar señales

2. **Transistor de Efecto de Campo (FET)**
   - Tres partes: *Compuerta, Drenaje y Fuente* {{< link id="T6B05" >}}
   - A menudo se usa como interruptores controlados por voltaje

**Entendiendo la Ganancia**: Cuando hablamos de que los transistores proporcionan "ganancia", nos referimos a su *capacidad para amplificar una señal* - hacer que una señal pequeña sea más grande. {{< link id="T6B11" >}} Esta es una de sus funciones más importantes en equipos de radio.

#### Circuitos Integrados (CI): Muchos Componentes en Uno

> **Información Clave:** Un circuito integrado combina varios semiconductores y otros componentes en un solo paquete. {{< link id="T6D09" >}}

Piensa en un CI como una pequeña ciudad electrónica, donde muchos componentes (transistores, diodos, resistencias, etc.) trabajan juntos en un solo chip. Esta tecnología hace posible el equipo de radio moderno al empaquetar circuitos complejos en espacios pequeños.

#### Revisión de Semiconductores

Repasemos los componentes semiconductores clave y sus características principales:

1. **Diodos**
   - Flujo de corriente en una sola dirección
   - Cátodo marcado con franja
   - Diferentes tipos tienen diferentes caídas de voltaje

2. **LEDs**
   - Se iluminan con corriente directa
   - Usados como indicadores

3. **Transistores**
   - Tres regiones semiconductoras
   - Dos tipos principales con diferentes nombres de terminales:
     - BJT: Emisor, Base, Colector
     - FET: Compuerta, Drenaje, Fuente
   - Pueden amplificar señales (ganancia)
   - Pueden actuar como interruptores

4. **Circuitos Integrados**
   - Múltiples componentes en un solo paquete
   - Hacen posibles circuitos complejos

Recuerda: Aunque los semiconductores pueden parecer complejos, entender sus funciones básicas y nombres de terminales te ayudará tanto con el examen como en tus actividades de radioafición.
