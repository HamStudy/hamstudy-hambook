---
slug: "section1.1"
questions: ["G5C03", "G5C04", "G5C08", "G5C09", "G5C10", "G5C11", "G5C12", "G5C13", "G5C14"]
---

### Section 1.1: Series and Parallel Circuits

Remember the basic electrical concepts we covered in the Technician HamBook? Now it's time to build on that foundation. As a General class operator, you'll encounter more complex circuits in your radio equipment, and you'll need to understand how components work together in different configurations.

#### Series Circuits vs. Parallel Circuits

The two fundamental ways to connect components in a circuit are in *series* and in *parallel*. Each configuration has unique properties that affect how current flows, how voltage is distributed, and how the overall circuit behaves.

![Series and Parallel Circuits](../images/series-parallel-basics.svg)

**Series Connections** are like a single-lane road with multiple checkpoints:
- Components are connected one after another
- The same current flows through each component
- Voltage divides across components
- Adding more components increases the total opposition to current

**Parallel Connections** are like multiple lanes on a highway:
- Components are connected across the same voltage points
- Current divides among different paths
- Each component experiences the same voltage
- Adding more components creates more paths for current to flow

Let's see how these configurations affect the three most common passive components: resistors, capacitors, and inductors.

#### Resistors in Series and Parallel

When you're setting up a station or building a project, you'll often need to combine resistors to get specific resistance values.

**Resistors in Series**:
When resistors are connected in series, their values simply add together:

$$R_{total} = R_1 + R_2 + R_3 + ... + R_n$$

For example, if you connect a 10-ohm resistor in series with a 20-ohm resistor, the total resistance will be 30 ohms. It's that straightforward!

**Resistors in Parallel**:
Parallel resistor calculations are a bit trickier. When resistors are in parallel, the formula is:

$$\frac{1}{R_{total}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + ... + \frac{1}{R_n}$$

For two resistors, you can use this simplified formula:

$$R_{total} = \frac{R_1 \times R_2}{R_1 + R_2}$$

Let's work through an example: What is the total resistance of a 10-ohm, a 20-ohm, and a 50-ohm resistor connected in parallel? {{< link id="G5C03" >}}

$$\begin{align}
\frac{1}{R_{total}} &= \frac{1}{10} + \frac{1}{20} + \frac{1}{50} \\
&= \frac{5}{50} + \frac{2.5}{50} + \frac{1}{50} \\
&= \frac{8.5}{50} \\
R_{total} &= \frac{50}{8.5} \approx 5.9 \text{ ohms}
\end{align}$$

For a more common example, what is the approximate total resistance of a 100-ohm and a 200-ohm resistor in parallel? {{< link id="G5C04" >}}

$$\begin{align}
R_{total} &= \frac{R_1 \times R_2}{R_1 + R_2} \\
&= \frac{100 \times 200}{100 + 200} \\
&= \frac{20,000}{300} \\
&= 66.7 \text{ ohms} \approx 67 \text{ ohms}
\end{align}$$

> **Key Information:** *When resistors are in series, their values add. When resistors are in parallel, the total resistance is always less than the smallest resistor in the group.*

#### Capacitors in Series and Parallel

Capacitors behave in the opposite way to resistors when combined:

**Capacitors in Parallel**:
When capacitors are connected in parallel, their values add:

$$C_{total} = C_1 + C_2 + C_3 + ... + C_n$$

For example, what is the equivalent capacitance of two 5.0-nanofarad capacitors and one 750-picofarad capacitor connected in parallel? {{< link id="G5C08" >}}

First, let's convert everything to the same unit. Since 750 pF = 0.75 nF:

$$\begin{align}
C_{total} &= 5.0 \text{ nF} + 5.0 \text{ nF} + 0.75 \text{ nF} \\
&= 10.75 \text{ nF} \approx 10.8 \text{ nF}
\end{align}$$

**Capacitors in Series**:
For capacitors in series, we use the following formula:

$$\frac{1}{C_{total}} = \frac{1}{C_1} + \frac{1}{C_2} + \frac{1}{C_3} + ... + \frac{1}{C_n}$$

For two capacitors, a simplified formula is:

$$C_{total} = \frac{C_1 \times C_2}{C_1 + C_2}$$

Let's see an example: What is the capacitance of three 100-microfarad capacitors connected in series? {{< link id="G5C09" >}}

$$\begin{align}
\frac{1}{C_{total}} &= \frac{1}{100} + \frac{1}{100} + \frac{1}{100} \\
&= \frac{3}{100} \\
C_{total} &= \frac{100}{3} = 33.33 \text{ microfarads} \approx 33.3 \text{ microfarads}
\end{align}$$

Another practical example: What is the capacitance of a 20-microfarad capacitor connected in series with a 50-microfarad capacitor? {{< link id="G5C12" >}}

$$\begin{align}
C_{total} &= \frac{C_1 \times C_2}{C_1 + C_2} \\
&= \frac{20 \times 50}{20 + 50} \\
&= \frac{1000}{70} \\
&= 14.3 \text{ microfarads}
\end{align}$$

> **Key Information:** *To increase the total capacitance in a circuit, add a capacitor in parallel.* {{< link id="G5C13" >}}

#### Inductors in Series and Parallel

Inductors behave like resistors when combined:

**Inductors in Series**:
When inductors are connected in series (and are not magnetically coupled), their values add:

$$L_{total} = L_1 + L_2 + L_3 + ... + L_n$$

What is the inductance of a circuit with a 20-millihenry inductor connected in series with a 50-millihenry inductor? {{< link id="G5C11" >}}

$$\begin{align}
L_{total} &= 20 \text{ mH} + 50 \text{ mH} \\
&= 70 \text{ millihenrys}
\end{align}$$

**Inductors in Parallel**:
For inductors in parallel (again, assuming no magnetic coupling), the formula is:

$$\frac{1}{L_{total}} = \frac{1}{L_1} + \frac{1}{L_2} + \frac{1}{L_3} + ... + \frac{1}{L_n}$$

What is the inductance of three 10-millihenry inductors connected in parallel? {{< link id="G5C10" >}}

$$\begin{align}
\frac{1}{L_{total}} &= \frac{1}{10} + \frac{1}{10} + \frac{1}{10} \\
&= \frac{3}{10} \\
L_{total} &= \frac{10}{3} = 3.33 \text{ millihenrys} \approx 3.3 \text{ millihenrys}
\end{align}$$

> **Key Information:** *To increase the total inductance in a circuit, add an inductor in series.* {{< link id="G5C14" >}}

#### Practical Applications in Amateur Radio

Understanding series and parallel configurations is crucial in amateur radio for:

1. **Power Supply Design**: Using capacitors in parallel to increase filtering capacity or resistors in series to create voltage dividers.

2. **Antenna Matching Networks**: Combining inductors and capacitors to match impedances between your radio and antenna.

3. **Filter Circuits**: Creating bandpass, low-pass, or high-pass filters using specific combinations of components.

4. **Dummy Loads**: Using multiple resistors to handle higher power dissipation.

5. **Impedance Matching**: Transforming impedances to ensure maximum power transfer in your radio system.

For example, in a Pi-network antenna tuner, capacitors and inductors are arranged in a specific configuration to match the impedance of your transceiver to your antenna system. The values and connections of these components directly affect how efficiently power is transferred to your antenna.

#### Series and Parallel Applications in Your Station

Understanding how components combine in series and parallel is a fundamental skill that serves many purposes in amateur radio:
- It helps you design simple circuits like filters and matching networks
- It allows you to calculate values when replacing or combining components
- It gives you insight into how your equipment functions internally
- It builds the foundation for more complex circuit analysis

Now that we understand how components combine, let's explore how they respond to the alternating currents that make radio communication possible!
