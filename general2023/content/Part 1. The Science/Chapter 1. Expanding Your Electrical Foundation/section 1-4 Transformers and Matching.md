---
chapter: "1"
section: "1.4"
questions: ["G5C01", "G5C02", "G5C05", "G5C06", "G5C07", "G9C11", "G9C12"]
status: draft1
slug: section-14-impedance-matching-and-transformers
---

### Section 1.4: Transformers and Matching

As we saw in the last section, impedance affects how RF energy flows through your station. When you key up on a new HF band and your radio shows high SWR readings and reduces power, you're experiencing an impedance mismatch—a situation where your transceiver and antenna system aren't properly matched.

In this section, we'll explore transformers and matching networks—practical tools that help transfer power between different parts of your station.

#### The Maximum Power Transfer Theorem

> The Maximum Power Transfer Theorem states that, *to obtain maximum external power from a power source with internal resistance, the resistance of the load must equal the resistance of the source as viewed from its output terminals*.

For the resistive source described by this theorem, equal source and load resistances give maximum load power. When reactance is present, the matching load also needs opposite reactance. In station operation, the practical target is the load specified by the equipment, usually 50 ohms with little reactance. A mismatch can cause reflected waves on the feed line, increase line loss, or make the transmitter reduce power; reflected power is not automatically all lost.

This principle explains why your radio might show high SWR (Standing Wave Ratio) on some bands but not others—the antenna's impedance varies with frequency, creating matches at some frequencies and mismatches at others.

Let's look at the tools that help us create matches between different impedances:

#### Transformers: The Impedance Conversion Tools

Transformers are elegant devices that transfer energy between circuits while changing voltage and current ratios—and consequently, impedance. They work through electromagnetic induction, allowing separately wound circuits to have no direct electrical connection. Autotransformers share an electrical connection, so the name “transformer” alone does not guarantee isolation.

> **Key Information:** Mutual inductance causes a voltage to appear across the secondary winding of a transformer when an AC voltage source is connected across its primary winding. {{< link id="G5C01" >}}

A transformer consists of two or more windings (coils) wrapped around a common core. When alternating current flows through the primary winding, it creates a changing magnetic field that induces voltage across the secondary winding. Current flows when a load completes that circuit. The ratio of turns between these windings determines how voltage, current, and impedance transform.

One of the most commonly known uses for a transformer is to convert between different AC voltages – for example, using a transformer with ten primary turns for every secondary turn and 120VAC on the primary winding you will get ($\frac{1}{10} \cdot 120V$) = 12VAC out, which is the first basic step used in many simple power supply designs! However, since a transformer works on AC signals they can also be used to change voltage *or impedance* of audio or RF signals when designed for that frequency and power!

##### Understanding Turns Ratio

For an ideal transformer, the turns ratio determines how voltage, current, and impedance change:

![A transformer links two separate circuits through a magnetic core. An AC source drives the primary winding on the left; the secondary winding on the right supplies a load. There is no direct wire connection between the windings. The secondary has twice as many turns as the primary. For this ideal transformer, that gives twice the primary voltage across the secondary and half the primary current through its load, with the same power transferred. Arrows identify current in each circuit.](../../../images/s1-4-transformer-ratios.svg)
{.img-centered caption="Twice as many secondary turns doubles voltage and halves load current for the same ideal transferred power."}

* **Turns Ratio**: The ratio of turns on the secondary side to turns on the primary side
  
  $$n = \frac{N_\text{secondary}}{N_\text{primary}}$$

* **Voltage Transformation**: The voltage ratio equals the turns ratio (see above)
  
  $$ V_s = V_p \cdot n = \frac{V_p \cdot N_s}{N_p}$$

* **Current Transformation**: The current ratio equals the inverse of the turns ratio
  
  $$I_s = I_p \cdot \frac{1}{n} = \frac{I_p \cdot N_p}{N_s}$$
  
* **Impedance Transformation**: The impedance ratio equals the square of the turns ratio
  
  $$Z_s = Z_p \cdot n^2 = \frac{Z_p \cdot {N_s}^2}{ {N_p}^2 }$$

For example, a transformer with twice as many turns in the secondary as in the primary (2:1 turns ratio) will:
* Double the voltage
* Halve the current
* Quadruple the impedance (2²)

For example, a 200-ohm load on that secondary appears as 50 ohms at the primary. Keep track of which winding has more turns.

##### Transformer Applications

This impedance transformation capability makes transformers invaluable in amateur radio for:

1. **Antenna Matching**: Converting antenna impedance to match transmitter output
2. **Baluns** (Balanced-to-Unbalanced): Connecting balanced antennas to unbalanced feed lines
3. **Ununs** (Unbalanced-to-Unbalanced): Matching between different unbalanced impedances
4. **Interstage Coupling**: Matching between amplifier stages

##### Reversing Transformer Connections

What happens when you apply a signal to the secondary winding instead of the primary? The transformer still works, but the transformation ratios reverse:

> **Key Information:** When an input signal is applied to the secondary winding of a 4:1 voltage step-down transformer, the output voltage is multiplied by 4. {{< link id="G5C02" >}}

This property is useful when you need the opposite transformation without rewinding the transformer. A step-down transformer becomes a step-up transformer when connections are reversed, provided its voltage, current and frequency ratings are respected.

##### Transformer Construction Considerations

Transformer design involves important practical considerations beyond just turns ratio:

> **Key Information:** The primary winding wire of a voltage step-up transformer is usually larger than the secondary winding wire to accommodate the higher current in the primary. {{< link id="G5C05" >}}

Since power ($P = I \cdot E$) remains approximately constant (minus losses), a step-up transformer that increases voltage must decrease current proportionally. Therefore:

* The primary winding handles higher current and needs thicker wire
* The secondary winding carries less current and can use thinner wire

##### Calculating Transformer Voltage

Let's work through a practical example that might appear on your exam:

What is the voltage output of a transformer with a 500-turn primary and a 1500-turn secondary when 120 VAC is applied to the primary? {{< link id="G5C06" >}}

Using the voltage transformation formula:

$$V_s = V_p \cdot \frac{N_s}{N_p}$$

$$
\begin{align*}
V_s &= 120V \cdot \frac{1500}{500}\\[1.25em]
&= 120V \cdot 3\\[1.25em]
&= 360V
\end{align*}
$$

This 3:1 turns ratio transformer triples the voltage from 120V to 360V.

##### Calculating Turns Ratio for Impedance Matching

Sometimes we need to determine the correct turns ratio to match specific impedances. For example:

What transformer turns ratio matches an antenna's 600-ohm feed point impedance to a 50-ohm coaxial cable? {{< link id="G5C07" >}}

Using the impedance transformation formula:

$$\frac{Z_s}{Z_p} = n^2$$

Rearranging to solve for n:

$$
\begin{align*}
n &= \sqrt{\frac{Z_s}{Z_p}} \\[1.25em]
&= \sqrt{\frac{600 \Omega}{50 \Omega}} \\[1.25em]
&= \sqrt{12} \\[1.25em]
&\approx 3.46
\end{align*}
$$

Therefore, a turns ratio of approximately 3.5:1 will match a 600-ohm antenna to 50-ohm coax, with more turns on the 600-ohm side.

#### Practical Matching Systems for Antennas

Transformers are just one approach to impedance matching. For antenna systems, several specialized matching methods have evolved. A **Yagi** is a directional antenna with several parallel elements on a supporting **boom**. Its **driven element** connects to the feed line. Chapter 4 explains how the elements produce directionality; here we need their feed-point arrangements:

##### Beta Match (Hairpin Match)

> **Key Information:** A beta or hairpin match is a shorted transmission line stub placed at the feed point of a Yagi antenna to provide impedance matching. {{< link id="G9C11" >}}

The beta match uses a shorted section of transmission line (the "hairpin") placed in parallel with the feed point of an antenna element. With a suitably shortened driven element, the hairpin’s inductive reactance works with the element’s capacitive reactance to transform the feed-point impedance.

This matching system is popular for Yagi antennas because:
* It's relatively simple to construct
* It can be adjusted by changing the length or shape of the hairpin
* It provides a good match across a reasonable bandwidth

##### Gamma Match

The gamma match is another common approach for directive antennas:

> **Key Information:** A gamma match with a Yagi antenna does not require the driven element to be insulated from the boom. {{< link id="G9C12" >}}

The gamma match offers several advantages:
* Allows direct connection of the boom to the driven element without insulation
* Provides adjustable impedance matching; a separate common-mode choke may still be useful
* Can be adjusted via the gamma rod length and capacitor setting

![Two schematic feed arrangements show different ways to match a Yagi’s driven element. The hairpin, or beta, match uses an element split at its center. The feed-line wires connect to the two halves, and a short U-shaped conductor bridges the gap as a shorted stub. The gamma match uses a continuous driven element attached at its center to the boom. A gamma rod runs beside part of that element and connects to it away from the center. The coax feed connects through a series capacitor to the rod, with its other conductor connected at the element’s center.](../../../images/s1-4-yagi-matching-basics.svg)
{.img-centered caption="A hairpin bridges a split feed point. A gamma match can use a continuous driven element attached to the boom. These are schematic views, not construction drawings."}

#### Specialized RF Transformers

In RF systems, the balun (Balanced-to-Unbalanced) is particularly important. It solves a fundamental problem in antenna systems:

* **Balanced Line**: Two conductors with equal relationships to their surroundings, as in ladder line or window line. The desired signal uses equal and opposite currents.

* **Unbalanced Line**: One conductor serves as the signal reference and surrounds the other, as in coax. The desired current travels on the center conductor and returns along the inside of the shield.

Connecting coax to a balanced antenna can also allow unwanted common-mode current on the shield’s outside, which can distort the pattern or bring RF into the station. A suitable current balun opposes that current. A 1:1 balun can do this without changing the impedance ratio.

#### LC Matching Networks

Besides transformers, simple combinations of inductors and capacitors (LC networks) can also match impedances. These appear in various configurations (L, Pi, or T networks) in antenna tuners and amplifier output circuits. While the specific designs vary, they all perform the essential function of transforming impedance to present the load required by your radio components. A good input match does not remove feed-line loss or make an inefficient antenna efficient.

#### Application to General Class Operations

Understanding impedance matching has practical benefits as you prepare to use General privileges:

* **In Your Station**: Antenna tuners use matching networks to ensure your transmitter sees its expected 50-ohm load, while SWR meters help you detect mismatches.

* **Real-World Considerations**: Perfect matching isn't always necessary—equipment limits vary, so check your radio’s specified SWR and power limits, and sometimes improving an antenna is better than matching a poor one.

* **Why It Matters**: With General privileges, you can operate across multiple HF bands with a single antenna and potentially use higher power levels where mismatches become more significant. Understanding matching helps you make better equipment choices and get more of your transmitter's power to actually radiate from your antenna.

Now that we understand how transformers and impedance matching affect power flow in our radio systems, let's explore how to measure and quantify that power. In the next section, we'll examine power calculations, decibels, and other measurement concepts that will help you evaluate your station's performance.
