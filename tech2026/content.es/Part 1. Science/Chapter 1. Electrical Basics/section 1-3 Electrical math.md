---
chapter: "1"
section: "1.3"
questions: [ "T5D03", "T5D01", "T5D02", "T5D12", "T5D06", "T5C08", "T5C09", "T5C10", "T5C11", "T5D04", "T5D05", "T5D07", "T5D08", "T5D09", "T5D10", "T5D11" ]
status: publish1
---

### Sección 1.3: Leyes eléctricas (y matemáticas)

Bien, entremos en algunas de las matemáticas básicas y leyes eléctricas que usarás todo el tiempo en radioafición. No te preocupes: esto no es ciencia espacial (¡aunque muchos científicos de cohetes probablemente también lo usen!). Hablamos de la Ley de Ohm y la Ley de Potencia, que son principios fundamentales de la electrónica. Funcionan perfectamente juntas y, cuando les tomes el ritmo, verás que no son tan difíciles de entender.

#### Pero primero... ¡no te asustes con las matemáticas!

Muchas personas ven preguntas de matemáticas e inmediatamente empiezan a estresarse, pero **no hay razón para entrar en pánico**. Como **máximo**, verás **dos** preguntas relacionadas con matemáticas en tu examen: **una de {{< qid >}}T5C{{< /qid >}} (fórmulas de potencia) y una de {{< qid >}}T5D{{< /qid >}} (Ley de Ohm).** ¿Y sabes qué? ¡Puedes **fallar hasta 9 preguntas y aun así aprobar**!  

Así que, si esta sección simplemente no te está quedando clara, **no te preocupes**: sáltala y concéntrate en las partes que tengan más sentido. Pero si dedicas un poco de tiempo a entender estas fórmulas, quizá descubras que son **realmente bastante simples** y que pueden ayudarte a diagnosticar problemas de radio en el mundo real.

![caricatura que muestra un triángulo con la ley de ohm (E = I * R) llevando máscara y capa de superhéroe](/images/illus/ohmslawhero.svg)
{.img-small .float-right}

#### Ley de Ohm

Primero está la **Ley de Ohm**, el principio fundamental de todo lo eléctrico. Trata de cómo se relacionan **voltaje, corriente y resistencia** en un circuito. La ley en sí es simple:

$$E = I \times R$$

![Círculo de la Ley de Ohm, con E centrada en la mitad superior del círculo. Una línea divide la parte superior de la inferior y otra divide la mitad inferior entre izquierda y derecha, con I a un lado y R al otro.](/images/form-ohms.svg)
{.float-right .img-small}

Donde:
- **$E$** es el *voltaje (fuerza electromotriz)* en **voltios (V)**.
- **$I$** es la *corriente* en **amperios (A)**.
- **$R$** es la *resistencia* en **ohmios (Ω)**.

Como es una fórmula sencilla, puedes **reorganizarla** para resolver cualquiera de los tres valores usando el diagrama circular de la derecha. {{< link id="T5D03" >}}{{< link id="T5D01" >}} Para usar esta ayuda:

1. Tapa el valor que quieres encontrar
2. Los valores restantes te muestran cómo calcularlo (lado a lado significa multiplicar; arriba / abajo significa dividir)

   - Tapa E: multiplica $I \times R$.

   - Tapa I: divide $\frac{E}{R}$.

   - Tapa R: divide $\frac{E}{I}$.

> El voltaje a veces se escribe con $V$ (voltaje) en lugar de $E$ (fuerza electromotriz o FEM). **Fuerza electromotriz es otro término para voltaje** y se mide en **voltios (V)**. Muchos prefieren usar **$E$** porque **$V$ también se usa para velocidad** en muchas fórmulas de ingeniería.

<div class="clear"></div>

En palabras simples, la Ley de Ohm dice:  
*“El voltaje a través de un componente es igual a la corriente que fluye por él multiplicada por su resistencia.”*  {{< link id="T5D02" >}}

O, usando una analogía con agua:  
El voltaje es como la presión del agua, **empujando** la corriente (el flujo de agua) a través de la resistencia (el tamaño de la tubería).

##### **Ejemplo 1**  
Tienes una **resistencia de 10 ohmios** y **2 amperios de corriente** pasan a través de ella. {{< link id="T5D12" >}} Según la Ley de Ohm:

$$\begin{align*}
E &= I \times R\\
E &= 2A \times 10\Omega\\
E &= 20V
\end{align*}$$

Entonces necesitarías **20 voltios** para empujar **2 amperios** a través de esa **resistencia de 10 ohmios**.

##### **Ejemplo 2**  
Tienes un circuito que consume **4 amperios** de una **fuente de 12 voltios**. Para calcular la resistencia del circuito:{{< link id="T5D06" >}}

$$\begin{align*}
R &= \frac{E}{I}\\
R &= \frac{12V}{4A}\\
R &= 3\Omega
\end{align*}$$

Eso significa que la resistencia del circuito es de **3 ohmios**.

#### La Ley de Potencia

Luego viene la **Ley de Potencia**. Esta te dice cuánta **potencia (en vatios)** está usando tu circuito, según el **voltaje y la corriente**. La potencia es **qué tan rápido consume energía tu circuito**, y esta es la fórmula:{{< link id="T5C08" >}}

$$P = I \times E$$

![Círculo de la Ley de Potencia](/images/form-power.svg)
{.float-right .img-small}

Donde:
- **$P$** es la *potencia* en **vatios (W)**.
- **$I$** es la *corriente* en **amperios (A)**.
- **$E$** es el *voltaje* en **voltios (V)**.

¡Fácil como PIE (Power = I × E)! Igual que con la Ley de Ohm, hay un diagrama circular útil para los cálculos de potencia.

Se aplica el mismo principio:
1. Tapa lo que quieres calcular
2. Los valores restantes te muestran la fórmula

   - Tapa P: multiplica $I \times E$.

   - Tapa I: divide $\frac{P}{E}$.

   - Tapa E: divide $\frac{P}{I}$.

<div class="clear"></div>

*Aunque no lo necesitarás en el examen*, puedes reorganizar esta fórmula e incluso combinarla con la Ley de Ohm para encontrar **cualquier valor faltante si tienes dos valores conocidos**:

$$\begin{align*}
P &= I^2 \times R\\
P &= \frac{E^2}{R}\\
\end{align*}$$

Por ejemplo, si conoces el **voltaje y la resistencia**, puedes encontrar la **corriente** usando la Ley de Ohm, y luego introducir ese valor en la Ley de Potencia para encontrar la **potencia**. Esto es muy útil al calcular cuánta potencia está usando tu transmisor u otro equipo de radio.

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

#####  **Ejemplo 3: Encontrar la corriente a partir de potencia y voltaje**  
*¿Cuánta corriente se requiere para entregar 120 vatios a un voltaje de 12 voltios CC?* {{< link id="T5C11" >}}

$$\begin{align*}
I &= \frac{P}{E}\\
I &= \frac{120W}{12V}\\
I &= 10 \text{ amperios}\\
\end{align*}$$

#### ¿Por qué importa esto?

![Ilustración de un niño encogiéndose de hombros con mirada interrogante; un signo de pregunta flota arriba](../../../images/illus/boyquestion.svg)
{.img-pgcap .float-right}

Siempre que trabajes con electrónica, usarás estas leyes todo el tiempo. Ya sea que estés **calculando cuánta potencia usa tu transmisor**, **escogiendo la resistencia correcta para un circuito** o **diagnosticando por qué algo no funciona**, la Ley de Ohm y la Ley de Potencia son tus mejores amigas.

- **Caída de voltaje**: ¿Recuerdas la caída de voltaje de la Sección 1.2? La Ley de Ohm nos da la fórmula directamente: $\text{Caída de voltaje} = I \times R$. Por eso las instalaciones móviles usan cables de alimentación gruesos y cortos: un cable de mayor calibre tiene menor R, y cables más cortos significan menos resistencia total, lo que minimiza la caída. También es por eso que los sistemas de distribución eléctrica usan voltajes altos: para la misma potencia entregada ($P = I \times E$), un voltaje mayor significa menos corriente, y menos corriente por el mismo cable significa menos caída de voltaje y menos potencia desperdiciada como calor.
- **Potencia nominal**: Cada componente eléctrico tiene un límite de cuánta potencia puede manejar antes de sobrecalentarse. **La Ley de Potencia** te ayuda a asegurarte de que tus componentes se mantengan dentro de límites seguros.
- **Eficiencia**: Al configurar **sistemas de alimentación y antenas**, entender **cómo interactúan voltaje, corriente y potencia** te ayuda a diseñar sistemas más eficientes.

---

#### **Ejemplos de preguntas de examen**

Este es un resumen *completo* de todas las preguntas que podrías encontrar en el examen que usan estas fórmulas.
| **Pregunta**                                       | **Ecuación**                    | **Respuesta** |
|----------------------------------------------------|--------------------------------|------------|
| {{< qid >}}T5C08{{< /qid >}}: Fórmula de potencia para un circuito CC          | $P = E \times I$                |            |
| {{< qid >}}T5C09{{< /qid >}}: Potencia de 13,8 voltios y 10 amperios    | $P = 13.8V \times 10A$          | $P = 138W$ |
| {{< qid >}}T5C10{{< /qid >}}: Potencia de 12 voltios y 2,5 amperios     | $P = 12V \times 2.5A$           | $P = 30W$  |
| {{< qid >}}T5C11{{< /qid >}}: Corriente requerida para 120 vatios a 12V   | $I = \frac{120W}{12V}$         | $I = 10A$  |
| {{< qid >}}T5D01{{< /qid >}}: Fórmula para corriente en un circuito        | $I = \frac{E}{R}$              |            |
| {{< qid >}}T5D02{{< /qid >}}: Fórmula para voltaje en un circuito        | $E = I \times R$                |            |
| {{< qid >}}T5D03{{< /qid >}}: Fórmula para resistencia en un circuito     | $R = \frac{E}{I}$              |            |
| {{< qid >}}T5D04{{< /qid >}}: Resistencia con 90 voltios y 3 amperios  | $R = \frac{90V}{3A}$           | $R = 30\Omega$ {{< link id="T5D04" >}} |
| {{< qid >}}T5D05{{< /qid >}}: Resistencia con 12 voltios y 1,5 amperios| $R = \frac{12V}{1.5A}$         | $R = 8\Omega$ {{< link id="T5D05" >}} |
| {{< qid >}}T5D06{{< /qid >}}: Resistencia con 12 voltios y 4 amperios  | $R = \frac{12V}{4A}$           | $R = 3\Omega$  |
| {{< qid >}}T5D07{{< /qid >}}: Corriente con 120 voltios y 80 ohmios      | $I = \frac{120V}{80\Omega}$    | $I = 1.5A$ {{< link id="T5D07" >}} |
| {{< qid >}}T5D08{{< /qid >}}: Corriente con 200 voltios y 100 ohmios     | $I = \frac{200V}{100\Omega}$   | $I = 2A$ {{< link id="T5D08" >}} |
| {{< qid >}}T5D09{{< /qid >}}: Corriente con 240 voltios y 24 ohmios      | $I = \frac{240V}{24\Omega}$    | $I = 10A$ {{< link id="T5D09" >}} |
| {{< qid >}}T5D10{{< /qid >}}: Voltaje a través de 2 ohmios y 0,5 amperios   | $E = 0.5A \times 2\Omega$       | $E = 1V$ {{< link id="T5D10" >}} |
| {{< qid >}}T5D11{{< /qid >}}: Voltaje a través de 10 ohmios y 1 amperio     | $E = 1A \times 10\Omega$        | $E = 10V$ {{< link id="T5D11" >}} |
| {{< qid >}}T5D12{{< /qid >}}: Voltaje a través de 10 ohmios y 2 amperios    | $E = 2A \times 10\Omega$        | $E = 20V$  |

<ohms-law-calculator></ohms-law-calculator>
