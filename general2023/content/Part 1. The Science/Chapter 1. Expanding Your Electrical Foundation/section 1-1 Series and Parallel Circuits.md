---
chapter: "1"
section: "1.1"
questions: ["G5C03", "G5C04", "G5C08", "G5C09", "G5C10", "G5C11", "G5C12", "G5C13", "G5C14", "G5B02"]
status: draft1
---

### Section 1.1: Series and Parallel Circuits

Why does your antenna work perfectly on one frequency but need a tuner on another? Why do some modes cause RF feedback in your shack while others don't? As a new General operator, you'll encounter these situations and more as you explore the HF bands. The underlying principles that explain these behaviors start with understanding how components interact in circuits.

As you move beyond the basics of your Technician license, you'll need a solid grasp of how current and voltage behave when components are connected in different arrangements. This knowledge is your foundation for building, troubleshooting, and understanding the wide range of circuits that make effective amateur radio operation possible.

#### Understanding Current and Voltage in Series and Parallel Circuits

Imagine water flowing through pipes. That's a helpful way to visualize how current and voltage are characterized in electrical circuits. The key difference between series and parallel circuits lies in how these "pipes" are arranged, which affects where current flows and how voltages are distributed.

{{< captioned caption="Figure 1 – Series and Parallel Circuit Diagrams" >}}
![figure: Series circuit on the left, parallel circuit on the right. Both show three resistors R1, R2, R3. The series circuit has a single I_total arrow, the parallel circuit has I_total and individual I_1, I_2, and I_3 arrows.](../../../images/s1-1-parallel-series.svg)
{{< /captioned >}}

##### Series Circuits (A Single Pipe):

* **One Path:** In a series circuit, components like resistors are connected one after another, forming a single, continuous loop in which current flows. Think of water flowing through a single pipe – it has to go through each section in turn.
* **Constant Current:** Consequently, the *same amount of current* flows through every component in the series circuit. Just like the water flow is the same throughout the single pipe.
* **Divided Voltage:** The total voltage supplied to the circuit is *divided* among the components. Each component "uses up" a portion of the total voltage. Each component will have an associated voltage drop across its two terminals. All voltage drops around the loop equal the total supply voltage.
* **Applying Ohm's Law:** Since the current is the same throughout, the voltage drop across each component depends on its resistance ($E = I \times R$). Components with higher resistance will have larger voltage drops.
* **Single Point of Failure:** If one component fails by opening (infinite resistance, like a break in the pipe), then current flow will be interrupted and the entire circuit stops working. It is worth noting that a component could also fail by shorting (zero resistance), in which case the circuit may still work, but likely differently because the component would be effectively bypassed, allowing more current to flow.

Remember those old Christmas lights where one bulb burned out and plunged the whole string into darkness—usually at the coldest and darkest moment of decorating outside? That's a classic series circuit problem!

##### Parallel Circuits (Multiple Pipes):

* **Multiple Paths:** In a parallel circuit, components are connected side-by-side, providing *multiple paths* for current flow. Think of water flowing through multiple pipes branching off from a main line.
* **Constant Voltage:** The *voltage across each component is the same* as the voltage supplied to the circuit. Each resistor in the parallel circuit has the full voltage applied across its two terminals.
* **Divided Current:** The total current is *divided* among the different paths. The amount of current flowing through each path depends on the resistance of that path. The sum of the current in each branch equals the total current flowing in the main trunk.

> **Key Information:** In a circuit of parallel resistors, the total current equals the sum of the currents through each branch. {{< link id="G5B02" >}}

One classic example of parallel circuits is the electrical outlets in your house. If one lamp goes out or is unplugged, it doesn't affect your TV or computer. That’s the beauty of parallel circuits—each device operates independently. However, if you plug too many things into one circuit, each device draws current until the total exceeds what your circuit breakers can handle, causing the breaker to trip and shutting everything down.

* **Applying Ohm's Law:** Since the voltage is the same across all components, the current through each component depends on its resistance ($I = \frac{E}{R}$). Components with lower resistance will draw more current.
* **Independent Operation:** If one component fails, the other paths remain unaffected. Current can still flow through the remaining components.

##### Power Distribution
Ohm's Law helps us understand not just current and voltage, but also power distribution in these circuits:

* **Series Circuits:** Power is divided unequally among components based on their resistance. Higher resistance components dissipate more power ($P = I^2 \cdot R$), since current is the same but voltage varies.

* **Parallel Circuits:** Each component draws power independently based on its resistance. Lower resistance components draw more power ($P = \frac{E^2}{R}$), since voltage is the same but current varies.

Understanding these power relationships is especially important when designing amplifier circuits or ensuring components can handle the power they'll receive.

#### How Different Components Combine

Now that we understand the basic principles, let's examine how resistors, capacitors, and inductors combine in different configurations. Each follows specific patterns that might seem confusing at first, but there's a logic to them.

Here's a summary of how components combine:

{{< captioned caption="Table 1 – Summary of governing equations for series and parallel circuits" >}}
| Component | Series Connection | Parallel Connection |
|-----------|------------------|---------------------|
| Resistors | Direct Sum: $$R_{total} = R_1 + R_2 + R_3 + \ldots$$ | Reciprocal Method: $$\frac{1}{R_{total}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \ldots$$|
| Capacitors | Reciprocal Method: $$\frac{1}{C_{total}} = \frac{1}{C_1} + \frac{1}{C_2} + \frac{1}{C_3} + \ldots$$| Direct Sum: $$C_{total} = C_1 + C_2 + C_3 + \ldots$$ |
| Inductors | Direct Sum: $$L_{total} = L_1 + L_2 + L_3 + \ldots$$ | Reciprocal Method: $$\frac{1}{L_{total}} = \frac{1}{L_1} + \frac{1}{L_2} + \frac{1}{L_3} + \ldots$$|
{{< /captioned >}}

Notice the pattern: Resistors and inductors follow the same rules (direct sum in series, reciprocal method in parallel), while capacitors follow the opposite pattern (reciprocal method in series, direct sum in parallel). This relationship makes sense when you consider the physical properties of these components. Let's explore each component type with practical examples.

#### Resistors in Combination

> **Key Information:** *When resistors are in series, their values add. When resistors are in parallel, the total resistance is always less than the smallest resistor in the group.*

##### **Resistors in Series (Direct Sum Method):**
When resistors are connected end-to-end, their values simply add:

$$ R_\text{total} = R_1 + R_2 + R_3 + \ldots $$

This makes intuitive sense—more obstacles in a single path create more total resistance.

##### **Resistors in Parallel (Reciprocal Method):**
When resistors provide multiple paths for current, the calculation is:

For just two resistors, we can simplify to:

$$R_{\text{total}} = \frac{R_1 \cdot R_2}{R_1 + R_2}$$

Let's solve a problem you might encounter on your exam:

What is the total resistance of a 10-ohm, a 20-ohm, and a 50-ohm resistor connected in parallel? {{< link id="G5C03" >}}

$$\begin{align*}
\frac{1}{R_{\text{total}}} &= \frac{1}{10} + \frac{1}{20} + \frac{1}{50} \\[1.25em]
&= \frac{5}{50} + \frac{2.5}{50} + \frac{1}{50} \\[1.25em]
&= \frac{8.5}{50} \\[1.25em]
R_{\text{total}} &= \frac{50}{8.5} \approx 5.9 \text{ ohms}
\end{align*}$$

Notice that the total resistance ($5.9 \Omega$) is lower than the smallest individual resistor ($10 \Omega$). *This is always true for parallel resistors*.

For a more common example:

What is the approximate total resistance of a 100-ohm and a 200-ohm resistor in parallel? {{< link id="G5C04" >}}

$$\begin{align*}
R_{\text{total}} &= \frac{R_1 \cdot R_2}{R_1 + R_2} \\[1.25em]
&= \frac{100 \cdot 200}{100 + 200} \\[1.25em]
&= \frac{20,000}{300} \\[1.25em]
&= 66.7 \text{ ohms} \approx 67 \text{ ohms}
\end{align*}$$

#### Capacitors in Combination

Capacitors store energy in electric fields, typically between two parallel metal plates, and follow combination rules opposite to resistors. The capacitance of the capacitor is proportional to the surface area of the metal plates.

> **Key Information:** *To increase the total capacitance in a circuit, add a capacitor in parallel.* {{< link id="G5C13" >}}

##### **Capacitors in Parallel (Direct Sum Method):**
When capacitors are connected in parallel, their values add:

$$ C_\text{total} = C_1 + C_2 + C_3 + \ldots $$

This makes sense when you visualize capacitors as storage containers—connecting them in parallel creates a larger combined container. When capacitors are connected in parallel, it's equivalent to having parallel plates with more surface area.

##### **Capacitors in Series (Reciprocal Method):**
For capacitors in series, we use:

$$\frac{1}{C_{total}} = \frac{1}{C_1} + \frac{1}{C_2} + \frac{1}{C_3} + \ldots$$

For two capacitors, we can simplify to:

$$C_{\text{total}} = \frac{C_1 \cdot C_2}{C_1 + C_2}$$

What is the equivalent capacitance of two 5.0-nanofarad capacitors and one 750-picofarad capacitor connected in parallel? {{< link id="G5C08" >}}

Since capacitors in parallel add directly, we just need to convert to the same unit (750 pF = 0.75 nF) and add:

$$\begin{align*}
C_{\text{total}} &= 5.0 \text{ nF} + 5.0 \text{ nF} + 0.75 \text{ nF} \\[1.25em]
&= 10.75 \text{ nF}
\end{align*}$$

What is the capacitance of three 100-microfarad capacitors connected in series? {{< link id="G5C09" >}}

$$\begin{align*}
\frac{1}{C_{\text{total}}} &= \frac{1}{100} + \frac{1}{100} + \frac{1}{100} \\[1.25em]
&= \frac{3}{100} \\[1.25em]
C_{\text{total}} &= \frac{100}{3}\\[1.25em]
&\approx 33.33 \text{ μF}
\end{align*}$$

Another common example:

What is the capacitance of a 20-microfarad capacitor connected in series with a 50-microfarad capacitor? {{< link id="G5C12" >}}

$$\begin{align*}
C_{\text{total}} &= \frac{C_1 \cdot C_2}{C_1 + C_2} \\[1.25em]
&= \frac{20 \cdot 50}{20 + 50} \\[1.25em]
&= \frac{1000}{70} \\[1.25em]
&= 14.3 \text{ μF}
\end{align*}$$

#### Inductors in Combination

Inductors store energy in magnetic fields and follow rules similar to resistors.

> **Key Information:** *To increase the total inductance in a circuit, add an inductor in series.* {{< link id="G5C14" >}}

##### **Inductors in Series (Direct Sum Method):**
When inductors are connected in series (and are not magnetically coupled), their values add:

$$ L_\text{total} = L_1 + L_2 + L_3 + \ldots $$

##### **Inductors in Parallel (Reciprocal Method):**
For inductors in parallel (assuming no magnetic coupling), we use:

What is the inductance of a circuit with a 20-mH inductor connected in series with a 50-mH inductor? {{< link id="G5C11" >}}

$$\begin{align*}
L_{\text{total}} &= 20 \text{ mH} + 50 \text{ mH} \\
&= 70 \text{ mH}
\end{align*}$$

What is the inductance of three 10-mH inductors connected in parallel? {{< link id="G5C10" >}}

$$\begin{align*}
\frac{1}{L_{\text{total}}} &= \frac{1}{10} + \frac{1}{10} + \frac{1}{10} \\[1.25em]
&= \frac{3}{10} \\[1.25em]
L_{\text{total}} &= \frac{10}{3} = 3.33 \text{ mH} \approx 3.3 \text{ mH}
\end{align*}$$

#### Connecting to Real Amateur Radio Applications

Understanding series and parallel circuits goes far beyond just solving textbook problems—it's the foundation for understanding circuit design. Here's why these concepts are so crucial:

1. **Resonant Circuits**: The combination of inductors and capacitors forms the core of tuned circuits that select frequencies in your receiver, shape signals in your transmitter, and match your antenna. Without understanding how these components combine, you can't grasp how your radio separates one signal from thousands of others. The discussion and examples above didn't cover combinations of a mixture of capacitors, inductors, and resistors, but we will discuss those more in the next section.

2. **Impedance Matching**: Every effective RF system requires matching impedances for maximum power transfer. The series and parallel relationships we've discussed form the basis for matching networks in antenna tuners, amplifiers, and feed line systems. Matching networks typically consist of series-connected impedances and parallel-connected impedances, which will be covered more in section 1.3.

3. **Filtering**: Whether you're trying to eliminate interference or ensure your transmitted signal is clean, filters use the mathematics of series and parallel circuits to pass some frequencies while blocking others. Filtering is an area of engineering that is very well understood and there are many references that go into great detail on filter design. We will introduce that topic in section 1.3, but you may want to explore it further on your own.

4. **Signal Division and Combination**: The voltage and current division principles we've covered are used when designing circuits that route, split, combine, and isolate signals throughout your station.

#### Moving Forward

With this understanding of series and parallel circuits, you're ready to explore more advanced concepts. In the next section, we'll see how these same components behave differently when AC is applied—introducing the fundamental concepts of reactance and impedance.
