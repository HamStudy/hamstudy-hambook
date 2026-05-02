---
chapter: "5"
section: "5.4"
questions: [ "T6A10", "T6A11", "T0A01", "T0A10", "T4A09" ]
status: publish1
---

### Sección 5.4: Baterías

Las baterías son el alma de la radioafición portátil. Ya sea que estés operando desde la cima de una montaña o manteniendo tu estación funcionando durante un apagón, te mantienen al aire. También tienen más potencial para causar problemas que la mayoría de los otros equipos de tu estación, así que vale la pena entender qué hay en tu kit de salida y cómo tratarlo.

#### Tipos de baterías

> **Información clave:**
> - Las químicas de baterías recargables incluyen hidruro metálico de níquel, ion-litio y plomo-ácido. {{< link id="T6A10" >}}
> - Las baterías de carbón-zinc no son recargables. {{< link id="T6A11" >}}

![Ilustración de varios tipos diferentes de baterías sentadas una junto a otra](../../../images/illus/batteries.svg)
{.img-full .img-centered}

Un recorrido rápido por lo que probablemente encontrarás:

1. **Plomo-ácido**: Las viejas confiables. Las encontrarás en autos y como energía de respaldo para tu estación. Son recargables y pueden entregar corrientes altas. Cada celda produce alrededor de 2.1 voltios, así que una batería típica de “12 voltios” mide alrededor de 12.6 voltios completamente cargada, con un rango de trabajo de 12.0–12.8 V.

2. **Ion-litio (Li-ion)**: La estrella de los radios portátiles modernos. Tienen mucha energía en un paquete pequeño, pero pueden ser temperamentales. Son recargables y de alta densidad de energía. Cada celda produce 3.7 voltios, así que una batería de ion-litio de “12 voltios” normalmente usa electrónica para regular el voltaje de salida.

3. **Fosfato de hierro y litio (LiFePO4)**: Una química más nueva, más segura y estable que la ion-litio estándar, con una vida de ciclos excepcionalmente larga. Recargable. Cada celda produce alrededor de 3.2 voltios, así que un paquete de “12 voltios” en realidad es de 12.8 V y se carga hasta alrededor de 14.6 V.

4. **Hidruro metálico de níquel (NiMH)**: A menudo se encuentran en tamaños AA o AAA. La opción ecológica, y extremadamente común antes de que Li-ion tomara el relevo. Recargables, una buena alternativa a las desechables. Cada celda produce 1.2 voltios.

5. **Níquel-cadmio (NiCd)**: La recargable clásica, antes la opción habitual para teléfonos inalámbricos y portátiles antiguos. Cada celda es de 1.2 voltios, igual que NiMH. Debido a preocupaciones ambientales por el cadmio (un metal pesado tóxico), han sido reemplazadas en gran medida por NiMH, pero todavía las verás en equipos antiguos.

6. **Alcalinas**: Las maravillas de un solo uso. Excelentes para emergencias (puedes comprarlas en cualquier lugar), pero una vez que se agotan, se acabaron. Cada celda es de 1.5 voltios, un poco más que las opciones recargables.

7. **Carbón-zinc**: Desechables de la vieja escuela y algunas de las primeras pilas secas. No recargables, 1.5 voltios por celda. Vida útil más corta y menor capacidad que las alcalinas: piensa en ellas como el bisabuelo de las baterías modernas.

Vale la pena notar que las baterías de diferentes químicas pueden tener diferentes voltajes por celda incluso con el mismo tamaño físico. Siempre revisa las especificaciones antes de conectar cosas.

#### Seguridad con baterías

Cada química tiene sus propias peculiaridades, pero algunos peligros se aplican de forma amplia.

> **Información clave:** Cortocircuitar los terminales de una batería de almacenamiento de 12 voltios que carece de circuitería de protección interna puede causar quemaduras, fuego o una explosión. {{< link id="T0A01" >}}

> **Información clave:** Cargar o descargar rápidamente una batería sin protección puede causar sobrecalentamiento o desgasificación. {{< link id="T0A10" >}}

##### Plomo-ácido

- Producen gas hidrógeno, especialmente al cargarse. Siempre cárgalas en áreas bien ventiladas: el hidrógeno es extremadamente inflamable, y una acumulación está pidiendo fuego o una explosión.
- Contienen ácido sulfúrico. Trátalas como tratarías a un gato gruñón: con respeto y equipo de protección.
- Los terminales pueden descargar cientos de amperios en un cortocircuito. Quítate las joyas y usa herramientas aisladas (y no le preguntes al autor principal el punto de fusión de las joyas de plata esterlina; no tiene ningún motivo personal para saberlo. Ninguno en absoluto).

⚠️ **Advertencia**: Nunca crees chispas cerca de una batería de plomo-ácido que se está cargando. Por esta razón, muchas personas prefieren mantener las baterías de plomo-ácido fuera de los espacios habitables.

> 🔥 Una historia de advertencia del mundo real: mientras intentaba conectar baterías de plomo-ácido en paralelo para construir un banco de baterías, un operador invirtió el cableado. ¿El resultado? Un cable humeante lo suficientemente caliente como para derretir caucho. Afortunadamente el daño fue limitado, pero es un recordatorio vívido de revisar dos veces tus conexiones y usar fusibles adecuados.
>
> Incluso los operadores experimentados pueden cometer errores como este, incluidos algunos que luego escriben libros sobre el tema.

##### Ion-litio

- La sobrecarga puede provocar sobrecalentamiento o fuego. Usa el cargador que vino con tu radio.
- Si se perforan o dañan, trátalas como una bomba de tiempo. Deséchalas de forma adecuada y rápida.
- No les gustan las temperaturas extremas: ni demasiado calor ni demasiado frío.

> 🔥 Una historia de advertencia más: un joven entusiasta de la radio (de 11 años) estaba una vez experimentando con celdas 18650 de ion-litio —en su cama, nada menos— mientras jugaba con un motor sacado de un scooter.
>
> ![Fotografía de una carcasa de batería de ion-litio 18650 que ya no está intacta](../../../images/18650.jpg)
> {.float-right .img-pgcap}
> Los detalles exactos no están claros, pero de alguna manera las celdas hicieron cortocircuito. Un momento todo estaba bien y al siguiente la carcasa de la batería estaba al otro lado de la habitación, una quemadura del tamaño de una pelota de softball había derretido la colcha, y el aire estaba lleno de un olor químico fuerte.
>
> Afortunadamente, nadie resultó herido y el daño se limitó a algo de ropa de cama, pero es un recordatorio contundente: las baterías de ion-litio pueden fallar violentamente cuando se manejan mal. A pesar de las afirmaciones comunes de que “no explotan”, absolutamente pueden ventear con llama bajo las condiciones adecuadas.

##### Fosfato de hierro y litio (LiFePO4)

- El primo relajado de Li-ion. Más seguro, pero todavía necesita su propio tipo de cargador.
- No le gusta cargarse en frío extremo.
- Sobrecargar o descargar de más una sola celda puede arruinarla; el balanceo adecuado importa.

#### ¿Cuánto durará tu batería?

Cuando estás en el campo o durante un apagón, saber cuánto tiempo puede funcionar tu equipo con una batería es crucial. Esto se reduce a la capacidad en amperios-hora (Ah) de tu batería y al consumo de corriente de tu equipo.

> **Información clave:** Para determinar cuánto tiempo puede funcionar el equipo con una batería, divide la capacidad en amperios-hora de la batería entre el consumo promedio de corriente del equipo. {{< link id="T4A09" >}}

Por ejemplo, si tienes una batería de 12 Ah y tu radio consume un promedio de 2 A:

$$\begin{align*}
\text{Duración de la batería (horas)} &= \frac{12 \text{Ah}}{2 \text{A}}\\
&= 6 \text{ horas}
\end{align*}$$

Esto te da una estimación aproximada: el tiempo real varía con la temperatura, la edad de la batería y qué tan fuerte la estás exigiendo (las de plomo-ácido en particular entregan significativamente menos capacidad total cuando se descargan a tasas altas).

#### Sabiduría general sobre baterías

Además de las advertencias anteriores:

1. Usa el cargador correcto para cada tipo de batería. No es una situación de talla única.
2. Ten cuidado al dejar baterías cargándose sin supervisión: un cargador que falla puede crear una situación peligrosa rápidamente.
3. Guarda las baterías en un lugar fresco y seco. No son vino; no mejoran con la edad ni con el calor.
4. Mantén cubiertos los terminales de las baterías cuando no estén en uso. Los cortocircuitos accidentales no son broma.
5. No mezcles baterías viejas y nuevas. Las nuevas pueden terminar sobrecompensando, lo que puede hacer que se sobrecalienten o goteen.

#### Preparación para emergencias

Para preparación ante emergencias:

- Mantén una reserva de baterías nuevas para tu kit de salida.
- Prueba y cicla regularmente tus recargables. Si nunca las usas, es probable que descubras que no funcionan cuando las necesitas.
- Ten un plan para cargar durante apagones prolongados. Los cargadores solares pueden ser el mejor amigo de un radioaficionado.

---

Las baterías pueden alimentar tu estación dondequiera que vayas; el siguiente conjunto de preocupaciones comienza cuando esa estación sale al exterior. Las antenas y las torres donde viven tienen su propia categoría de peligros, desde caídas al escalar hasta líneas eléctricas cercanas.
