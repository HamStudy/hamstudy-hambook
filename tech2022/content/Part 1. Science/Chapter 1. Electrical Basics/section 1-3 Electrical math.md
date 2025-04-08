---
chapter: "1"
section: "1.3"
questions: [ "T5D03", "T5D01", "T5D02", "T5D12", "T5D06", "T5C08", "T5C09", "T5C10", "T5C11", "T5D04", "T5D05", "T5D07", "T5D08", "T5D09", "T5D10", "T5D11" ]
---

### Section 1.3: Electrical Laws (and Math)

Okay, let's get into some of the basic math and electrical laws you'll use all the time in amateur radio. Don't worry—this isn't rocket science (though many rocket scientists probably use this as well!). We're talking about Ohm's Law and the Power Law, which are like the peanut butter and jelly of electronics. They go together perfectly, and once you get the hang of them, you'll see they're not that hard to digest.

#### But First... Don't Panic About the Math!

A lot of people see math questions and immediately start stressing—but there's **no reason to panic**. At **most**, you'll see **two** math-related questions on your exam: **one from T5C (power formulas) and one from T5D (Ohm's Law).** And guess what? You can **miss up to 9 questions and still pass**!  

So if this section just isn't clicking for you, **don't worry about it**—skip it and focus on the parts that make more sense. But if you take a little time to understand these formulas, you might find that they're **actually pretty simple** and can help you in real-world radio troubleshooting.

![cartoon showing a triangle with ohm's law (E = I * R) wearing a superhero mask and cape](/images/illus/ohmslawhero.svg)
{.img-small .float-right}

#### Ohm's Law

First up is **Ohm's Law**, the bread and butter of everything electrical. It's all about how **voltage, current, and resistance** are related in a circuit. The law itself is simple:

$$E = I \times R$$

![Ohm's Law Circle](/images/form-ohms.svg)
{.float-right .img-small}

Where:
- **$E$** is the *voltage (electromotive force)* in **volts (V)**  
- **$I$** is the *current* in **amperes (A)**  
- **$R$** is the *resistance* in **ohms (Ω)**  

Since it's a simple formula, you can **rearrange it** to solve for any of the three values using the circle diagram on the right! {{< link id="T5D03" >}}{{< link id="T5D01" >}} To use this helper:

1. Cover up the value you want to find
2. The remaining values show you how to calculate it (side by side means multiply, above / below means divide)

   - Cover E: multiply $I \times R$

   - Cover I: divide $\frac{E}{R}$

   - Cover R: divide $\frac{E}{I}$

> Voltage is sometimes written with $V$ (voltage) instead of $E$ (electromotive force or EMF). **Electromotive force is another term for voltage** and is measured in **volts (V)**. Many prefer to use **$E$** because **$V$ is also used for velocity** in many engineering formulas.

<div class="clear"></div>

In plain English, Ohm's Law says:  
*"The voltage across a component is equal to the current flowing through it times its resistance."*  {{< link id="T5D02" >}}

Or, using a water analogy:  
Voltage is like water pressure, **pushing** current (the water flow) through resistance (the pipe size).

##### **Example 1**  
You have a **10-ohm resistor**, and **2 amps of current** are running through it. {{< link id="T5D12" >}} According to Ohm's Law:

$$\begin{align*}
E &= I \times R\\
E &= 2A \times 10\Omega\\
E &= 20V
\end{align*}$$

So, you'd need **20 volts** to push **2 amps** through that **10-ohm resistor**.

##### **Example 2**  
You have a **12-volt battery** hooked up to a circuit with a total **resistance of 4 ohms**. To figure out the current flowing through the circuit:{{< link id="T5D06" >}}

$$\begin{align*}
I &= \frac{E}{R}\\
I &= \frac{12V}{4\Omega}\\
I &= 3A
\end{align*}$$

That's **3 amps** of current flowing through the circuit.

#### The Power Law

Next up is the **Power Law**. This tells you how much **power (in watts)** your circuit is using, based on the **voltage and current**. Power is **how fast your circuit is consuming energy**, and here's the formula:{{< link id="T5C08" >}}

$$P = I \times E$$

![Power Law Circle](/images/form-power.svg)
{.float-right .img-small}

Where:
- **$P$** is the *power* in **watts (W)**  
- **$I$** is the *current* in **amperes (A)**  
- **$E$** is the *voltage* in **volts (V)**  

Easy as PIE! Just like with Ohm's Law, there's a helpful circle diagram for power calculations.

The same principle applies:
1. Cover what you want to calculate
2. The remaining values show you the formula

   - Cover P: multiply $I \times E$

   - Cover I: divide $\frac{P}{E}$

   - Cover E: divide $\frac{P}{I}$

<div class="clear"></div>

*Though you won't need it on the exam*, you can rearrange this formula and even combine it with Ohm's Law to find **any missing value if you have two known values**:

$$\begin{align*}
P &= I^2 \times R\\
P &= \frac{E^2}{R}\\
\end{align*}$$

For example, if you know the **voltage and resistance**, you can find the **current** using Ohm's Law, then plug that into the Power Law to find **power**. This is really useful when figuring out how much power your transmitter or other radio equipment is using.

Let's look at some specific examples that might appear on the exam:

##### **Example 1: Power from voltage and current** 
*How much power is delivered by a voltage of 13.8 volts DC and a current of 10 amperes?* {{< link id="T5C09" >}}

$$\begin{align*}
P &= E \times I\\
P &= 13.8V \times 10A\\
P &= 138 \text{ watts}\\
\end{align*}$$

##### **Example 2: Another power calculation**  
*How much power is delivered by a voltage of 12 volts DC and a current of 2.5 amperes?* {{< link id="T5C10" >}}

$$\begin{align*}
P &= E \times I\\
P &= 12V \times 2.5A\\
P &= 30 \text{ watts}\\
\end{align*}$$

#####  **Example 3: Finding current from power and voltage**  
*How much current is required to deliver 120 watts at a voltage of 12 volts DC?* {{< link id="T5C11" >}}

$$\begin{align*}
I &= \frac{P}{E}\\
I &= \frac{120W}{12V}\\
I &= 10 \text{ amperes}\\
\end{align*}$$

#### Why Does This Matter?

You might be wondering, *"Why should I care about all this?"* Well, whenever you work with electronics, you will use these laws all the time. Whether you're **figuring out how much power your transmitter is using**, **picking the right resistor for a circuit**, or **troubleshooting why something isn't working**, Ohm's Law and the Power Law are your best friends.

- **Voltage Drop**: Remember voltage drop from Section 1.2? Ohm's Law gives us the formula: $\text{Voltage Drop} = I \times R$. This explains why higher voltage systems (like 24V vs 12V) experience less impact from the same drop - the percentage of lost voltage is smaller. This is also why mobile installations use thick, short power cables - to minimize R and therefore minimize the drop.
- **Power Rating**: Every electrical component has a limit on how much power it can handle before it overheats. **The Power Law** helps you make sure your components stay within safe limits.
- **Efficiency**: When setting up **power systems and antennas**, understanding **how voltage, current, and power interact** helps you design more efficient systems.

The more you **practice using these**, the easier they become. Soon enough, you'll be solving electrical problems on the fly!

---

#### **Exam Question Examples**

This is a *complete* summary of all of the questions you could encounter on the exam which use these formulas.
| **Question**                                       | **Equation**                    | **Answer** |
|----------------------------------------------------|--------------------------------|------------|
| **T5C08**: Power formula for a DC circuit          | $P = E \times I$                |            |
| **T5C09**: Power from 13.8 volts and 10 amperes    | $P = 13.8V \times 10A$          | $P = 138W$ |
| **T5C10**: Power from 12 volts and 2.5 amperes     | $P = 12V \times 2.5A$           | $P = 30W$  |
| **T5C11**: Current required for 120 watts at 12V   | $I = \frac{120W}{12V}$         | $I = 10A$  |
| **T5D01**: Formula for current in a circuit        | $I = \frac{E}{R}$              |            |
| **T5D02**: Formula for voltage in a circuit        | $E = I \times R$                |            |
| **T5D03**: Formula for resistance in a circuit     | $R = \frac{E}{I}$              |            |
| **T5D04**: Resistance with 90 volts and 3 amperes  | $R = \frac{90V}{3A}$           | $R = 30\Omega$ {{< link id="T5D04" >}} |
| **T5D05**: Resistance with 12 volts and 1.5 amperes| $R = \frac{12V}{1.5A}$         | $R = 8\Omega$ {{< link id="T5D05" >}} |
| **T5D06**: Resistance with 12 volts and 4 amperes  | $R = \frac{12V}{4A}$           | $R = 3\Omega$  |
| **T5D07**: Current with 120 volts and 80 ohms      | $I = \frac{120V}{80\Omega}$    | $I = 1.5A$ {{< link id="T5D07" >}} |
| **T5D08**: Current with 200 volts and 100 ohms     | $I = \frac{200V}{100\Omega}$   | $I = 2A$ {{< link id="T5D08" >}} |
| **T5D09**: Current with 240 volts and 24 ohms      | $I = \frac{240V}{24\Omega}$    | $I = 10A$ {{< link id="T5D09" >}} |
| **T5D10**: Voltage across 2 ohms and 0.5 amperes   | $E = 0.5A \times 2\Omega$       | $E = 1V$ {{< link id="T5D10" >}} |
| **T5D11**: Voltage across 10 ohms and 1 ampere     | $E = 1A \times 10\Omega$        | $E = 10V$ {{< link id="T5D11" >}} |
| **T5D12**: Voltage across 10 ohms and 2 amperes    | $E = 2A \times 10\Omega$        | $E = 20V$  |

<ohms-law-calculator></ohms-law-calculator>
