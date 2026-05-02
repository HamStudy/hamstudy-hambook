---
chapter: "4"
section: "4.3"
questions: [ "T9B03", "T9B02", "T9B10", "T7C11", "T9B11", "T9B05", "T7C07", "T7C09", "T9B08", "T7C10" ]
status: publish1
---

### Sección 4.3: Líneas de alimentación

¿Alguna vez te has preguntado cómo llegan realmente las ondas de radio desde tu transceptor hasta tu antena? Ahí es donde entran las *líneas de alimentación*. Piensa en ellas como las autopistas de tus señales de radio, llevando potencia desde tu radio hasta tu antena de la manera más eficiente posible. Algunas líneas de alimentación son autopistas suaves y rápidas. Otras son caminos rurales llenos de baches que desperdician tu señal antes de que llegue a donde necesita ir.

#### Cable coaxial: el estándar en radioafición

> **Información clave:** El cable coaxial es la línea de alimentación más común en radioafición porque es fácil de usar y requiere pocas consideraciones especiales de instalación. {{< link id="T9B03" >}}

El cable coaxial — o simplemente *coaxial* — consiste en un conductor central, aislamiento (el dieléctrico), una capa de blindaje y una cubierta protectora. Es la línea de alimentación preferida por los radioaficionados porque no requiere mucho manejo especial y hace un gran trabajo llevando tu señal a donde debe ir, al menos si eliges el tipo correcto.

##### Impedancia: por qué importa

> **Información clave:** La impedancia más común del cable coaxial usado en radioafición es de 50 ohmios. {{< link id="T9B02" >}}

Si alguna vez has mirado detrás de tu televisor, quizá hayas visto coaxial de 75 ohmios para cable o satélite. ¿Puedes usarlo para radioafición? Técnicamente, sí. ¿Deberías? En realidad, no. El equipo de radioafición está diseñado alrededor de coaxial de 50 ohmios, así que eso es lo que quieres usar para que tu estación funcione sin problemas.

##### Tipos de cable coaxial

> **Información clave:** La diferencia eléctrica entre el cable coaxial RG-58 y RG-213 es que, para una frecuencia dada, el cable RG-213 tiene menos pérdidas. {{< link id="T9B10" >}}

Un coaxial más grueso normalmente significa menor pérdida. Estos son algunos tipos comunes que encontrarás:

- **RG-58** — Delgado y flexible. Excelente para tramos cortos o uso portátil, pero tiene mayor pérdida con la distancia.
- **RG-8X** — Un poco mejor que RG-58, todavía flexible pero con menos pérdida de señal.
- **RG-8 / RG-213 / LMR-400** — Coaxial más grueso y de baja pérdida, excelente para tramos más largos y frecuencias más altas.
- **RG-59 / RG-6** — El material de TV de 75 ohmios. *Técnicamente* funciona, pero no es una gran elección para radioafición.
- **Línea rígida / Heliax** — Coaxial de uso pesado y pérdida extremadamente baja, usado para repetidores e instalaciones comerciales donde cada poco de señal importa.

##### Tipos de dieléctrico coaxial

> **Información clave:** El cable coaxial con dieléctrico de espuma tiene menos pérdida por pie que el cable con dieléctrico sólido. {{< link id="T7C11" >}}

El aislamiento entre el conductor central y el blindaje se llama *dieléctrico*. Diferentes materiales dieléctricos afectan qué tan bien se desempeña el cable.

- **Dieléctrico sólido** — Usa plástico sólido (normalmente polietileno) como aislamiento. Es duradero y maneja bien la humedad, pero tiene más pérdida de señal.
- **Dieléctrico de espuma** — Usa plástico espumado con diminutas bolsas de aire. El aire reduce la pérdida, haciéndolo más eficiente, aunque puede ser un poco más susceptible a la humedad si se daña.
- **Línea rígida con aislamiento de aire** — Lleva este concepto más lejos usando principalmente aire con separadores plásticos para mantener el conductor central en su lugar. Por eso la línea rígida tiene tan baja pérdida (más sobre esto abajo), pero requiere técnicas especiales para mantener fuera la humedad, a veces incluso presurizando la línea con aire seco o nitrógeno.

#### Comprender la pérdida en líneas de alimentación

> **Información clave:**
> - De los tipos comunes de línea de alimentación, la línea rígida con aislamiento de aire tiene la menor pérdida. {{< link id="T9B11" >}}
> - A medida que aumenta la frecuencia de una señal en cable coaxial, aumenta la pérdida. {{< link id="T9B05" >}}
> - La potencia perdida en una línea de alimentación se convierte en calor. {{< link id="T7C07" >}}

Ningún coaxial es perfecto: parte de tu potencia siempre se pierde como calor antes de llegar a la antena. Una pérdida de 3 dB significa que estás perdiendo la mitad de tu potencia antes de que llegue a la antena. Cuanto más alta es la frecuencia, peor se vuelve la pérdida, por eso las antenas parabólicas a menudo colocan el transmisor *justo en la antena* en lugar de usar un cable coaxial largo.

#### Problemas potenciales con las líneas de alimentación

> **Información clave:**
> - La contaminación por humedad causa fallas en los cables coaxiales. {{< link id="T7C09" >}}
> - Las fuentes de pérdidas en una línea de alimentación coaxial incluyen entrada de agua en los conectores coaxiales, ROE ("SWR") elevada y múltiples conectores en la línea. {{< link id="T9B08" >}}
> - La cubierta exterior del cable coaxial debe ser resistente a la luz ultravioleta porque la luz ultravioleta puede dañar la cubierta y permitir que el agua entre en el cable. {{< link id="T7C10" >}}

El hilo conductor de esos hechos es el agua: causa fallas, causa pérdida, y es lo que la cubierta resistente a los UV está tratando de evitar. El agua es, con mucho, el mayor enemigo del coaxial, así que siempre impermeabiliza las conexiones exteriores y reemplaza cualquier cable con la cubierta agrietada o dañada antes de que la humedad encuentre la forma de entrar.

Además de los problemas relacionados con el agua, hay algunas otras cosas que vale la pena vigilar:

- **Conexiones deficientes** — Los conectores sueltos o corroídos son como baches en la autopista de tu señal. ¡Mantenlos limpios y ajustados!
- **ROE alta** — Hablaremos más de la ROE en la Sección 4.5, pero si tu ROE es demasiado alta, la potencia que debería radiar desde la antena se pierde en la línea de alimentación.
- **Demasiados conectores** — Cada adaptador o conexión adicional significa más pérdida. ¡Mantenlo simple!

#### Líneas de alimentación alternativas: línea de escalera

![ilustración de coaxial y línea de escalera uno al lado del otro; el coaxial está etiquetado "RG-58/U"](../../../images/illus/feedline.svg)
{.img-xsmall .float-right}

La línea de escalera es como el auto deportivo de las líneas de alimentación: súper eficiente, pero algo exigente. Tiene *muchísima* menos pérdida que el coaxial, especialmente en HF, pero tiene una gran desventaja: debes mantenerla alejada del metal o empieza a captar ruido y a comportarse de manera extraña. Es una opción fantástica si usas una antena balanceada y tienes espacio para enrutarla correctamente.

#### Elegir la línea de alimentación correcta

Considera estos factores al elegir coaxial:

- **¿Qué tan largo es el tramo?** Tramos más largos = más pérdida. Usa coaxial más grueso y de baja pérdida.
- **¿Qué frecuencia estás usando?** Las frecuencias más altas sufren más pérdida.
- **¿Cuánta potencia estás usando?** Algunos coaxiales manejan mejor el calor y la potencia que otros.
- **¿Estará en el exterior?** Si es así, usa coaxial resistente a los UV e impermeable, o protégelo adecuadamente.

---

Las líneas de alimentación no sirven de mucho hasta que proporcionan una conexión entre dos puntos, por supuesto; ¡y eso significa que debemos hablar de conectores!
