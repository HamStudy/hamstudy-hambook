---
chapter: "2"
section: "2.4"
questions: [ "T6C01", "T6C12", "T6C02", "T6C08", "T6C06", "T6C09", "T6C10", "T6D10", "T6C03", "T6C07", "T6C05", "T6C04", "T6C11" ]
status: publish1
---

### Sección 2.4: Diagramas de circuitos: uniendo todo

A estas alturas ya conoces muchos componentes diferentes: resistencias, capacitores, transistores y más. Has visto sus símbolos repartidos por secciones anteriores y, con suerte, empiezan a resultarte familiares. Ahora es momento de reunir todo en un solo lugar y concentrarnos en cómo se usan esos símbolos en los diagramas de circuitos.

> **Información Clave:** Esquema es un diagrama eléctrico que usa símbolos estándar de componentes. {{< link id="T6C01" >}} Lo más importante que debes recordar es que los esquemáticos muestran con precisión las conexiones entre componentes. {{< link id="T6C12" >}}

Piensa en un esquemático como un mapa para la electrónica. En lugar de usar dibujos de las piezas reales, usa símbolos estándar para mostrar cómo se conectan los componentes. Una vez que sabes leerlos, los diagramas de circuitos son tu clave para entender cualquier dispositivo electrónico, sin importar cuán complicado sea.

#### Componentes esenciales y sus símbolos

Repasemos los componentes clave que encontrarás en los diagramas de circuitos. Presta especial atención a cómo controlan o afectan el flujo de corriente en un circuito.

##### Componentes básicos

Estos son los componentes pasivos que vimos en la Sección 2.1: los que no necesitan su propia fuente de alimentación para hacer su trabajo.

| **Componente** | **Descripción** | **Símbolo**  |
|---------------|------------------|---|
| **Resistor** | Esa conocida línea en zigzag representa un componente que controla el flujo de corriente. Las verás por todas partes en los circuitos. {{< link id="T6C02" >}} | ![Diagrama esquemático de resistencia](../../../images/s2-1-resistor.svg) |
| **Resistencia variable (potenciómetro)** | Como una resistencia normal, pero con una flecha que muestra que puedes ajustar su valor. {{< link id="T6C08" >}} | ![Símbolo esquemático de potenciómetro](../../../images/schem-potentiometer.svg) |
| **Condensador** | Dos líneas paralelas que almacenan energía eléctrica. Verás versiones polarizadas (con una línea recta y una línea curva) y no polarizadas; ambas siguen siendo condensadores. {{< link id="T6C06" >}} | ![Diagrama esquemático de capacitor](../../../images/s2-1-capacitor.svg) |
| **Inductor** | Una bobina de alambre que almacena energía en un campo magnético | ![Símbolo esquemático de inductor](../../../images/s2-1-inductor.svg) |
| **Transformador** | Dos bobinas lado a lado muestran transferencia de energía entre circuitos. {{< link id="T6C09" >}} | ![Símbolo esquemático de transformador](../../../images/schem-transformer.svg) |
| **Inductor variable** | Una bobina con una flecha que muestra que puedes ajustar su valor. {{< link id="T6C10" >}} | ![Símbolo esquemático de inductor variable](../../../images/schem-varinductor.svg) |
{.component-table}

##### Componentes activos

Estos son los semiconductores de la Sección 2.2: los que controlan o amplifican corriente de formas que los componentes pasivos no pueden.

| **Componente** | **Descripción** | **Símbolo** |
|---------------|-----------------|------------|
| **Transistor** | Controla el flujo de corriente y proporciona amplificación. En un BJT como el que se muestra, la flecha en el emisor apunta en la dirección del flujo de corriente convencional. {{< link id="T6D10" >}} | ![Símbolo esquemático de transistor NPN](../../../images/schem-npn.svg) {{< link id="T6C03" >}} |
| **Diodo** | Como vimos en la Sección 2.2, la flecha apunta hacia el cátodo. | ![Diagrama de diodo con ánodo / cátodo etiquetados](../../../images/s2-2-diode.svg) |
| **LED (diodo emisor de luz)** | Como un diodo normal, pero con flechas que muestran que emite luz. | ![Diagrama esquemático de LED con ánodo / cátodo etiquetados](../../../images/s2-2-led.svg) {{< link id="T6C07" >}} |
{.component-table}

##### Alimentación e indicadores

Estos componentes representan fuentes de energía, señales visuales y el punto de conexión donde un circuito se encuentra con el mundo exterior.

| **Componente** | **Descripción** | **Símbolo** |
|---------------|-----------------|------------|
| **Batería** | Las líneas largas y cortas muestran los terminales positivo y negativo. | ![Símbolo esquemático de batería](../../../images/schem-battery.svg) {{< link id="T6C05" >}} |
| **Lámpara** | Un indicador visual. | ![Símbolo esquemático de lámpara](../../../images/schem-lamp.svg) {{< link id="T6C04" >}} |
| **Antena** | Una línea con líneas más pequeñas en ángulo representa una antena, donde las señales entran o salen del circuito. {{< link id="T6C11" >}} | ![Símbolo esquemático de antena](../../../images/schem-antenna.svg) |
{.component-table}

#### Lectura de diagramas de circuitos

Los esquemáticos pueden parecer complicados al principio, pero solo son mapas que muestran cómo se conectan los componentes. Algunas cosas que debes observar al leer uno:

- Empieza en la fuente de alimentación (normalmente una batería) y sigue las conexiones entre componentes.
- Los componentes suelen estar etiquetados (R1, C1, etc.) con sus valores mostrados cerca.
- Donde las líneas se encuentran, los puntos de conexión se muestran con puntos; las líneas que se cruzan sin punto no están conectadas entre sí.

Como operador de Clase Técnica no necesitarás conocer este material en profundidad, pero hay algunas preguntas que podrías ver en el examen que requieren identificar un componente por su símbolo. Asegúrate de revisarlos con cuidado para saber qué buscar.
