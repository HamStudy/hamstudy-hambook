---
chapter: "1"
section: "1.3"
questions: [ "T5D03", "T5D01", "T5D02", "T5D12", "T5D06", "T5C08", "T5C09", "T5C10", "T5C11", "T5D04", "T5D05", "T5D07", "T5D08", "T5D09", "T5D10", "T5D11" ]
---

### Sección 1.3: Leyes Eléctricas (y Matemáticas)

Bien, vamos a ver algunas de las matemáticas básicas y leyes eléctricas que usarás todo el tiempo en radioafición. No te preocupes—esto no es ciencia espacial (¡aunque muchos científicos espaciales probablemente también usen esto!). Estamos hablando de la Ley de Ohm y la Ley de Potencia, que son principios fundamentales de la electrónica. Funcionan perfectamente juntas, y una vez que les tomes el ritmo, verás que no son tan difíciles de entender.

#### Pero Primero... ¡No Te Asustes con las Matemáticas!

Muchas personas ven preguntas matemáticas e inmediatamente comienzan a estresarse—pero **no hay razón para entrar en pánico**. Como **máximo**, verás **dos** preguntas relacionadas con matemáticas en tu examen: **una de {{< qid >}}T5C{{< /qid >}} (fórmulas de potencia) y una de {{< qid >}}T5D{{< /qid >}} (Ley de Ohm).** ¿Y adivina qué? ¡Puedes **equivocarte en hasta 9 preguntas y aun así aprobar**!

Así que si esta sección simplemente no te está quedando clara, **no te preocupes**—sáltala y concéntrate en las partes que tengan más sentido para ti. Pero si te tomas un poco de tiempo para entender estas fórmulas, podrías descubrir que son **realmente bastante simples** y pueden ayudarte en la resolución de problemas de radio en el mundo real.

![caricatura que muestra un triángulo con la ley de ohm (E = I * R) llevando una máscara y capa de superhéroe](/images/illus/ohmslawhero.svg)
{.img-small .float-right}

#### Ley de Ohm

Primero está la **Ley de Ohm**, el principio fundamental de todo lo eléctrico. Se trata de cómo se relacionan el **voltaje, la corriente y la resistencia** en un circuito. La ley en sí es simple:

$$E = I \times R$$

![Círculo de la Ley de Ohm](/images/form-ohms.svg)
{.float-right .img-small}

Donde:
- **$E$** es el *voltaje (fuerza electromotriz)* en **voltios (V)**
- **$I$** es la *corriente* en **amperios (A)**
- **$R$** es la *resistencia* en **ohmios (Ω)**

Como es una fórmula simple, puedes **reorganizarla** para resolver cualquiera de los tres valores usando el diagrama circular a la derecha. {{< link id="T5D03" >}}{{< link id="T5D01" >}} Para usar esta ayuda:

1. Tapa el valor que quieres encontrar
2. Los valores restantes te muestran cómo calcularlo (lado a lado significa multiplicar, arriba / abajo significa dividir)

   - Tapa E: multiplica $I \times R$

   - Tapa I: divide $\frac{E}{R}$

   - Tapa R: divide $\frac{E}{I}$

> El voltaje a veces se escribe con $V$ (voltaje) en lugar de $E$ (fuerza electromotriz o FEM). **La fuerza electromotriz es otro término para voltaje** y se mide en **voltios (V)**. Muchos prefieren usar **$E$** porque **$V$ también se usa para velocidad** en muchas fórmulas de ingeniería.

<div class="clear"></div>

En términos sencillos, la Ley de Ohm dice:
*"El voltaje a través de un componente es igual a la corriente que fluye a través de él multiplicada por su resistencia."* {{< link id="T5D02" >}}

O, usando una analogía del agua:
El voltaje es como la presión del agua, **empujando** la corriente (el flujo de agua) a través de la resistencia (el tamaño de la tubería).

##### **Ejemplo 1**
Tienes una **resistencia de 10 ohmios**, y **2 amperios de corriente** están pasando a través de ella. {{< link id="T5D12" >}} Según la Ley de Ohm:

$$\begin{align*}
E &= I \times R\\
E &= 2A \times 10\Omega\\
E &= 20V
\end{align*}$$

Entonces, necesitarías **20 voltios** para empujar **2 amperios** a través de esa **resistencia de 10 ohmios**.

##### **Ejemplo 2**
Tienes una **batería de 12 voltios** conectada a un circuito con una **resistencia total de 4 ohmios**. Para calcular la corriente que fluye a través del circuito:{{< link id="T5D06" >}}

$$\begin{align*}
I &= \frac{E}{R}\\
I &= \frac{12V}{4\Omega}\\
I &= 3A
\end{align*}$$

Eso son **3 amperios** de corriente fluyendo a través del circuito.

#### La Ley de Potencia

A continuación está la **Ley de Potencia**. Esta te dice cuánta **potencia (en vatios)** está usando tu circuito, basándose en el **voltaje y la corriente**. La potencia es **cuán rápido tu circuito está consumiendo energía**, y aquí está la fórmula:{{< link id="T5C08" >}}

$$P = I \times E$$

![Círculo de la Ley de Potencia](/images/form-power.svg)
{.float-right .img-small}

Donde:
- **$P$** es la *potencia* en **vatios (W)**
- **$I$** es la *corriente* en **amperios (A)**
- **$E$** es el *voltaje* en **voltios (V)**

¡Fácil como PIE (Power = I × E)! Al igual que con la Ley de Ohm, hay un útil diagrama circular para los cálculos de potencia.

El mismo principio se aplica:
1. Tapa lo que quieres calcular
2. Los valores restantes te muestran la fórmula

   - Tapa P: multiplica $I \times E$

   - Tapa I: divide $\frac{P}{E}$

   - Tapa E: divide $\frac{P}{I}$

<div class="clear"></div>

*Aunque no lo necesitarás en el examen*, puedes reorganizar esta fórmula e incluso combinarla con la Ley de Ohm para encontrar **cualquier valor faltante si tienes dos valores conocidos**:

$$\begin{align*}
P &= I^2 \times R\\
P &= \frac{E^2}{R}\\
\end{align*}$$

Por ejemplo, si conoces el **voltaje y la resistencia**, puedes encontrar la **corriente** usando la Ley de Ohm, y luego introducir ese valor en la Ley de Potencia para encontrar la **potencia**. Esto es realmente útil cuando estás calculando cuánta potencia está usando tu transmisor u otro equipo de radio.

Veamos algunos ejemplos específicos que podrían aparecer en el examen:

##### **Ejemplo 1: Potencia a partir del voltaje y la corriente**
*¿Cuánta potencia se entrega con un voltaje de 13,8 voltios CC y una corriente de 10 amperios?* {{< link id="T5C09" >}}

$$\begin{align*}
P &= E \times I\\
P &= 13.8V \times 10A\\
P &= 138 \text{ vatios}\\
\end{align*}$$

##### **Ejemplo 2: Otro cálculo de potencia**
*¿Cuánta potencia se entrega con un voltaje de 12 voltios CC y una corriente de 2,5 amperios?* {{< link id="T5C10" >}}

$$\begin{align*}
P &= E \times I\\
P &= 12V \times 2.5A\\
P &= 30 \text{ vatios}\\
\end{align*}$$

##### **Ejemplo 3: Encontrar la corriente a partir de la potencia y el voltaje**
*¿Cuánta corriente se requiere para entregar 120 vatios a un voltaje de 12 voltios CC?* {{< link id="T5C11" >}}

$$\begin{align*}
I &= \frac{P}{E}\\
I &= \frac{120W}{12V}\\
I &= 10 \text{ amperios}\\
\end{align*}$$

#### ¿Por Qué Importa Esto?

![Ilustración de un niño encogiéndose de hombros con una mirada interrogante, un signo de interrogación flota arriba](../../../images/illus/boyquestion.svg)
{.img-pgcap .float-right}

Quizás te estés preguntando, *"¿Por qué debería importarme todo esto?"* Bueno, siempre que trabajes con electrónica, usarás estas leyes todo el tiempo. Ya sea que estés **calculando cuánta potencia está usando tu transmisor**, **eligiendo la resistencia correcta para un circuito**, o **solucionando por qué algo no está funcionando**, la Ley de Ohm y la Ley de Potencia son tus mejores amigas.

- **Caída de Voltaje**: ¿Recuerdas la caída de voltaje de la Sección 1.2? La Ley de Ohm nos da la fórmula: $\text{Caída de Voltaje} = I \times R$. Esto explica por qué los sistemas de voltaje más alto (como 24V vs 12V) experimentan menos impacto de la misma caída - el porcentaje de voltaje perdido es menor. Esta es también la razón por la que las instalaciones móviles utilizan cables de alimentación gruesos y cortos - para minimizar R y, por lo tanto, minimizar la caída.
- **Clasificación de Potencia**: Cada componente eléctrico tiene un límite de cuánta potencia puede manejar antes de sobrecalentarse. **La Ley de Potencia** te ayuda a asegurarte de que tus componentes se mantengan dentro de límites seguros.
- **Eficiencia**: Al configurar **sistemas de potencia y antenas**, entender **cómo interactúan el voltaje, la corriente y la potencia** te ayuda a diseñar sistemas más eficientes.

Cuanto más **practiques usando estas**, más fáciles se vuelven. ¡Muy pronto estarás resolviendo problemas eléctricos sobre la marcha!

---

#### **Ejemplos de Preguntas de Examen**

Este es un resumen *completo* de todas las preguntas que podrías encontrar en el examen que utilizan estas fórmulas.

| **Pregunta**                                       | **Ecuación**                    | **Respuesta** |
|----------------------------------------------------|--------------------------------|------------|
| {{< qid >}}T5C08{{< /qid >}}: Fórmula de potencia para un circuito CC  | $P = E \times I$                |            |
| {{< qid >}}T5C09{{< /qid >}}: Potencia de 13,8 voltios y 10 amperios  | $P = 13.8V \times 10A$          | $P = 138W$ |
| {{< qid >}}T5C10{{< /qid >}}: Potencia de 12 voltios y 2,5 amperios   | $P = 12V \times 2.5A$           | $P = 30W$  |
| {{< qid >}}T5C11{{< /qid >}}: Corriente requerida para 120 vatios a 12V | $I = \frac{120W}{12V}$         | $I = 10A$  |
| {{< qid >}}T5D01{{< /qid >}}: Fórmula para corriente en un circuito    | $I = \frac{E}{R}$              |            |
| {{< qid >}}T5D02{{< /qid >}}: Fórmula para voltaje en un circuito      | $E = I \times R$                |            |
| {{< qid >}}T5D03{{< /qid >}}: Fórmula para resistencia en un circuito  | $R = \frac{E}{I}$              |            |
| {{< qid >}}T5D04{{< /qid >}}: Resistencia con 90 voltios y 3 amperios  | $R = \frac{90V}{3A}$           | $R = 30\Omega$ {{< link id="T5D04" >}} |
| {{< qid >}}T5D05{{< /qid >}}: Resistencia con 12 voltios y 1,5 amperios| $R = \frac{12V}{1.5A}$         | $R = 8\Omega$ {{< link id="T5D05" >}} |
| {{< qid >}}T5D06{{< /qid >}}: Resistencia con 12 voltios y 4 amperios  | $R = \frac{12V}{4A}$           | $R = 3\Omega$  |
| {{< qid >}}T5D07{{< /qid >}}: Corriente con 120 voltios y 80 ohmios    | $I = \frac{120V}{80\Omega}$    | $I = 1.5A$ {{< link id="T5D07" >}} |
| {{< qid >}}T5D08{{< /qid >}}: Corriente con 200 voltios y 100 ohmios   | $I = \frac{200V}{100\Omega}$   | $I = 2A$ {{< link id="T5D08" >}} |
| {{< qid >}}T5D09{{< /qid >}}: Corriente con 240 voltios y 24 ohmios    | $I = \frac{240V}{24\Omega}$    | $I = 10A$ {{< link id="T5D09" >}} |
| {{< qid >}}T5D10{{< /qid >}}: Voltaje a través de 2 ohmios y 0,5 amperios | $E = 0.5A \times 2\Omega$       | $E = 1V$ {{< link id="T5D10" >}} |
| {{< qid >}}T5D11{{< /qid >}}: Voltaje a través de 10 ohmios y 1 amperio   | $E = 1A \times 10\Omega$        | $E = 10V$ {{< link id="T5D11" >}} |
| {{< qid >}}T5D12{{< /qid >}}: Voltaje a través de 10 ohmios y 2 amperios   | $E = 2A \times 10\Omega$        | $E = 20V$  |

<ohms-law-calculator></ohms-law-calculator>
