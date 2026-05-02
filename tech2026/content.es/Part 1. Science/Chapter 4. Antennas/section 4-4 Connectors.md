---
chapter: "4"
section: "4.4"
questions: [ "T9B07", "T9B06", "T9B01" ]
status: publish1
---

### Sección 4.4: Conectores

¿Alguna vez has intentado conectar el cargador de tu teléfono a un puerto USB-C, solo para darte cuenta de que es micro-USB? Ese es el mundo de los conectores en pocas palabras. En radioafición, lograr la conexión correcta es crucial: es el apretón de manos entre tu radio y tu antena.

Antes de ver los conectores específicos que encontrarás, vale la pena aclarar algunas reglas universales. El género de los conectores es uno de los temas que más confunde no solo a nuevos radioaficionados, sino también a los experimentados, especialmente a cualquiera que planee usar un radio portátil para comunicaciones locales. Un poco de tiempo extra ahora puede ahorrarte mucha confusión después.

#### Entender el género de los conectores

Las reglas para determinar qué conector es de qué género son simples, pero sinceramente contraintuitivas. Tres reglas cubren casi todas las situaciones.

##### Regla 1: El conductor central determina el género

| Centro con **pin** = **macho** | Centro con **receptáculo** = **hembra** |
|:---------:|:-----:|

Olvídate de las roscas. Olvídate de cuál pieza encaja "dentro" de la otra. Lo único que importa para determinar el género es el conductor central:

- Un conector con **pin central** es **macho**.
- Un conector con **receptáculo central** (un agujero donde entra el pin) es **hembra**.

Esta regla importa porque algunos tipos de conectores — veremos SMA en un momento — tienen roscas que *parecen* que deberían determinar el género, pero no lo hacen. La regla de pin central frente a receptáculo siempre es la que cuenta.

##### Regla 2: "Antena SMA-M" significa "tiene SMA-M en ella"

Cuando alguien dice "antena SMA-M", quiere decir que la antena tiene un conector SMA-M *en ella*, no que se conecta a algo con SMA-M. El género en el nombre siempre es lo que físicamente está en el dispositivo, no aquello con lo que se acopla.

Esto importa al comprar. Si ves un anuncio de una "antena SMA-F", esa antena tiene un conector hembra en su base, lo que significa que necesitas un radio (o adaptador) con un conector SMA macho para conectarla.

##### Regla 3: Los conectores que se acoplan siempre tienen géneros opuestos

Dos conectores que se unen siempre son uno macho y uno hembra. No puedes conectar macho con macho, ni hembra con hembra: físicamente no encajan. Esto suena obvio, pero tiene una consecuencia importante para los adaptadores: cuando compras un adaptador para unir dos cosas, cada extremo del adaptador debe ser del género **opuesto** a aquello a lo que se conecta.

Con esas reglas claras, veamos los tipos de conectores más comunes usados por transceptores modernos.

#### Tipos comunes de conectores

##### SMA (SubMiniature version A)

Este pequeño conector es como el smartphone de los conectores de radio: pequeño, elegante y hoy en día está en todas partes. La mayoría de los radios portátiles modernos los usan.

SMA también es el tipo de conector que más desafía la intuición de la gente sobre el género. Un **conector SMA-M (macho)** tiene **roscas internas** (roscas dentro de un collar) y un **pin central**. Un **conector SMA-F (hembra)** tiene **roscas externas** (roscas por fuera) y un **receptáculo central**. A primera vista, el que tiene roscas externas *parece* macho, pero recuerda la Regla 1: pin = macho, receptáculo = hembra.

| SMA macho (pin central) | SMA hembra (receptáculo central) |
|:---------:|:-----:|
| ![Conector SMA macho](../../../images/SMAMale.jpg) | ![Conector SMA hembra](../../../images/SMAFemale.jpg) |
{.connector-table}

Qué género termina en qué lado depende del modelo específico de radio, pero hay algunos patrones generales:

- Las marcas principales como **Icom, Yaesu y Kenwood** normalmente ponen un conector **SMA-F** en el radio, así que necesitas una antena **SMA-M**.
- Muchas marcas más nuevas, especialmente **Baofeng y otras marcas chinas**, suelen hacer lo contrario: **SMA-M** en el radio, así que necesitas una antena **SMA-F**.

Cualquiera que sea el conector de tu radio, necesitas el *opuesto* en tu antena.

##### BNC (Bayonet Neill-Concelman)

![BNC macho y adaptadores](../../../images/bncadapters.jpg)
{.img-large .float-right}

Piensa en BNC como el artista del cambio rápido de los conectores. En lugar de atornillarse como SMA, tiene un mecanismo de **giro y bloqueo** que hace que conectar y desconectar antenas sea facilísimo. Los verás en algunos radios portátiles, mucho equipo de prueba e incluso algunos accesorios de HF.

En años recientes ha habido un cambio significativo en la comunidad de radios portátiles hacia el uso de conectores BNC. Aunque la mayoría de los portátiles todavía vienen con conectores SMA, un número creciente de operadores — especialmente quienes cambian antenas con regularidad — ahora agrega adaptadores BNC a sus radios.

**¿Por qué tantos radioaficionados están haciendo este cambio?**

- **Cambios rápidos de antena** — giro y bloqueo en lugar de múltiples vueltas con roscas SMA.
- **Menor desgaste en los conectores del radio** — el adaptador absorbe la tensión en lugar del conector integrado del radio.
- **Flexibilidad para distintas situaciones** — cambia entre antena de goma, látigo y antenas móviles en segundos.
- **Menor riesgo de cruzar la rosca** — un problema común con conectores SMA.

Sin embargo, los adaptadores no son para todos. Agregan volumen y una cantidad diminuta de pérdida de señal. Si no cambias antenas con frecuencia, quedarte con lo que encaja directamente en tu radio está perfectamente bien.

##### PL-259/SO-239 (conector UHF)

> **Información clave:** Los conectores PL-259 se utilizan habitualmente en frecuencias HF y VHF. {{< link id="T9B07" >}}

A pesar de su nombre, el "conector UHF" es un poco engañoso. Se usa ampliamente en radios HF y VHF, pero no es la mejor opción para UHF. El nombre se originó en una época en que el espectro UHF se definía como un rango diferente (más bajo) de frecuencias, pero el nombre del conector se quedó.

Encontrarás estos conectores en mucho equipo móvil y de estación base. Son robustos, fáciles de soldar y pueden manejar altos niveles de potencia.

- El **PL-259** es el **PL**ug macho.
- El **SO-239** es el **SO**cket hembra.

| PL-259 (UHF macho) | SO-239 (UHF hembra) |
|:---------:|:-----:|
| ![Conector PL-259 (UHF macho)](../../../images/PL259.jpg) | ![Conector SO-239 (UHF hembra)](../../../images/SO239.jpg) |
{.connector-table}

Estos conectores funcionan bien hasta aproximadamente 150 MHz, pero si trabajas por encima de eso quizá quieras usar conectores Tipo N en su lugar.

##### Tipo N

> **Información clave:** Los conectores Tipo N son el tipo de conector más adecuado para frecuencias superiores a 400 MHz debido a su baja pérdida y excelente blindaje. {{< link id="T9B06" >}}

![Conector Tipo N macho](../../../images/typen.jpg)
{.img-med .float-right}

Conoce al campeón de peso pesado de los conectores RF. Los conectores Tipo N son como tanques blindados del mundo de la radio: fuertes, bien blindados y construidos para altas frecuencias.

Están diseñados para bandas UHF y de microondas, lo que significa que funcionan muy bien para repetidores, comunicaciones satelitales y configuraciones serias de VHF/UHF. Aunque son más grandes que los conectores SMA o BNC, lo compensan con baja pérdida de señal y excelente blindaje.

Si estás trabajando en frecuencias superiores a 400 MHz, Tipo N es tu mejor apuesta para obtener el máximo rendimiento.

#### Impermeabilización de conexiones exteriores

> **Información clave:** Los conectores PL259, BNC, Tipo N y otros deben ser cuidadosamente envueltos con cinta para protegerlos de la intemperie cuando se usan al aire libre. {{< link id="T9B01" >}}

Ningún conector es inmune al clima. La humedad que entra en una conexión exterior corroe el metal, degrada la señal y eventualmente puede avanzar por la cubierta del coaxial: el mismo problema de intrusión de agua del que hablamos en la sección de líneas de alimentación. La solución es sencilla: envuelve las conexiones exteriores con cinta de impermeabilización (masilla selladora para coaxial, cinta de goma autoamalgamante o una combinación de ambas son opciones comunes).

#### Consejos profesionales para usar conectores

1. **Mantén los conectores limpios y secos** — Son puntos de conexión cruciales para tu señal, así que trátalos bien.
2. **Aprieta, pero no demasiado** — Ajustado a mano suele ser lo correcto para portátiles.
3. **Sé delicado con los conectores SMA** — Son resistentes, pero no indestructibles.
4. **Minimiza las cadenas de adaptadores** — Cada adaptador agrega pérdida y un punto potencial de falla. Úsalos cuando los necesites, pero no los apiles.

#### Poniéndolo todo junto: ejemplos de adaptadores

Ahora que conoces las reglas de género y los conectores comunes, trabajemos algunas situaciones reales. El truco es aplicar la Regla 3: cada extremo del adaptador debe ser del género opuesto a lo que se acopla. Una notación que ayuda: escribe la cadena completa de conexión y verifica que cada unión tenga géneros opuestos tocándose.

##### Ejemplo 1: Antena BNC-M en un HT Baofeng

Tu Baofeng tiene un puerto SMA-M en el radio, y quieres usar una antena BNC-M. ¿Qué adaptador necesitas?

Resuélvelo paso a paso:

- Lado del radio: el radio tiene SMA-M, así que el lado del adaptador hacia el radio necesita **SMA-F** (opuesto de macho).
- Lado de la antena: la antena tiene BNC-M, así que el lado del adaptador hacia la antena necesita **BNC-F** (opuesto de macho).

La cadena completa: **(radio) SMA-M → adaptador SMA-F a BNC-F → BNC-M (antena)**

Observa cómo en cada unión de esa cadena un macho se encuentra con una hembra. Eso es lo que estás verificando.

##### Ejemplo 2: Antena SMA-F en un HT Icom

Tu Icom tiene un puerto SMA-F en el radio. Compraste una antena que resulta ser SMA-F también: mismo tipo de conector, mismo género en ambos. No se acoplan directamente. ¿Qué necesitas?

- Lado del radio: SMA-F en el radio → el adaptador necesita **SMA-M**.
- Lado de la antena: SMA-F en la antena → el adaptador necesita **SMA-M**.

Ambos lados deben ser SMA-M. Un adaptador SMA-M a SMA-M (a veces llamado **cambiador de género** o **barril**) es la respuesta:

**(radio) SMA-F → adaptador SMA-M a SMA-M → SMA-F (antena)**

##### Ejemplo 3: Antena móvil PL-259 en un HT Yaesu

Estás en un evento de servicio público y quieres conectar una antena móvil con un PL-259 en el coaxial a tu HT Yaesu, que tiene un puerto SMA-F. Necesitarás cruzar entre *tipos* de conectores (SMA ↔ PL-259) y manejar los géneros.

- Lado del radio: SMA-F en el radio → el adaptador necesita **SMA-M**.
- Lado de la antena: PL-259 es macho → el adaptador necesita **SO-239** (la versión hembra del conector UHF).

**(radio) SMA-F → adaptador SMA-M a SO-239 → PL-259 (antena)**

En la práctica, los conectores PL-259 y Tipo N son lo bastante voluminosos como para que colgar uno directamente del conector de un HT ponga mucho esfuerzo sobre el radio, y atornillarlo y desatornillarlo puede ser molesto. Para una configuración de corto plazo, como una antena móvil en un HT, un **pigtail** — un tramo corto de coaxial con los conectores correctos en cada extremo — suele ser más práctico que un adaptador rígido. Un enfoque aún más común es poner un adaptador SMA a BNC en el lado del radio (ya que BNC se conecta y desconecta rápidamente con giro y bloqueo) y terminar el pigtail con BNC-M, facilitando el intercambio de antenas según sea necesario.

Si sigues la cadena y te aseguras de que se unan géneros opuestos en cada punto, no terminarás con un cajón lleno de adaptadores equivocados.

---

Con antenas, polarización, líneas de alimentación y conectores cubiertos, queda una pieza más del rompecabezas del sistema de antena que vale la pena entender: el grado de adaptación de todo el sistema. Eso es lo que te dice la ROE ("SWR").
