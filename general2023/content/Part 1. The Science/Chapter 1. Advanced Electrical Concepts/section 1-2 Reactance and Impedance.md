---
slug: "section1.2"
questions: ["G5A01", "G5A02", "G5A03", "G5A04", "G5A05", "G5A06", "G5A07", "G5A08", "G5A09", "G5A11", "G5A12"]
---

### Section 1.2: Reactance and Impedance

If you've been using your Technician privileges, you've likely noticed that radio circuits behave differently than simple DC circuits. In your HF adventures as a General class operator, understanding why these differences occur becomes essential. Let's explore how components respond to alternating current (AC) and radio frequency (RF) signals.

#### Beyond Simple Resistance

In Section 1.1, we looked at how resistors, capacitors, and inductors combine in series and parallel circuits. But there's more to the story when AC signals are involved:

1. **Resistors** behave the same with both DC and AC: they consistently oppose current flow.

2. **Capacitors and inductors**, however, have *frequency-dependent opposition to current flow* called **reactance**.

3. This opposition, combined with resistance, gives us **impedance**—the total opposition to AC current.

Let's dive deeper into these concepts that are crucial for understanding antenna systems, matching networks, filters, and other RF circuits you'll work with as a General class operator.

#### Reactance: Opposition from Capacitors and Inductors

> **Key Information:** *Reactance is opposition to the flow of alternating current caused by capacitance or inductance.* {{< link id="G5A02" >}}

Unlike resistance, which dissipates energy as heat, reactance temporarily stores energy in either electric fields (capacitors) or magnetic fields (inductors) and then returns that energy to the circuit. This storage and release creates a phase shift between voltage and current.

Reactance is measured in ohms (Ω), just like resistance. There are two types of reactance:

1. **Inductive Reactance (X<sub>L</sub>)**: *Opposition to the flow of alternating current in an inductor* {{< link id="G5A03" >}}

2. **Capacitive Reactance (X<sub>C</sub>)**: *Opposition to the flow of alternating current in a capacitor* {{< link id="G5A04" >}}

Reactance is represented by the letter **X**. {{< link id="G5A11" >}}

#### How Frequency Affects Reactance

The way inductors and capacitors respond to AC signals depends on frequency:

**For Inductors:**
> **Key Information:** *As the frequency of the applied AC increases, the reactance of an inductor increases.* {{< link id="G5A05" >}}

This happens because a changing magnetic field in an inductor induces a voltage that opposes the change in current (Lenz's Law). The faster the change (higher frequency), the stronger the opposition.

The formula for inductive reactance is:

$$X_L = 2\pi fL$$

Where:
- $X_L$ is inductive reactance in ohms (Ω)
- $f$ is frequency in hertz (Hz)
- $L$ is inductance in henrys (H)

**For Capacitors:**
> **Key Information:** *As the frequency of the applied AC increases, the reactance of a capacitor decreases.* {{< link id="G5A06" >}}

This occurs because a capacitor takes time to charge and discharge. At higher frequencies, there's less time for the capacitor to fully charge before the voltage reverses, resulting in less opposition to current flow.

The formula for capacitive reactance is:

$$X_C = \frac{1}{2\pi fC}$$

Where:
- $X_C$ is capacitive reactance in ohms (Ω)
- $f$ is frequency in hertz (Hz)
- $C$ is capacitance in farads (F)

![Reactance vs Frequency Graph](../images/reactance-frequency.svg)

#### Impedance: The Complete Picture

> **Key Information:** *Impedance is the ratio of voltage to current in an AC circuit.* {{< link id="G5A08" >}}

Impedance combines both resistance and reactance, giving us the total opposition to current flow in an AC circuit. It's represented by the letter Z and measured in ohms (Ω). {{< link id="G5A09" >}}

Mathematically, impedance is a complex number:

$$Z = R + jX$$

Where:
- $Z$ is impedance in ohms (Ω)
- $R$ is resistance in ohms (Ω)
- $X$ is reactance in ohms (Ω)
- $j$ is the imaginary unit, indicating that reactance is 90° out of phase with resistance

In most practical radio applications, we often work with the magnitude of impedance:

$$|Z| = \sqrt{R^2 + X^2}$$

The phase angle between voltage and current is:

$$\theta = \tan^{-1}\left(\frac{X}{R}\right)$$

#### Admittance: The Inverse of Impedance

> **Key Information:** *Admittance is the inverse of impedance.* {{< link id="G5A07" >}}

Just as conductance (G) is the inverse of resistance (R), admittance (Y) is the inverse of impedance (Z):

$$Y = \frac{1}{Z}$$

Admittance is measured in siemens (S) and tells us how easily current flows in an AC circuit.

#### Resonance: When Reactances Cancel

One of the most important concepts in radio circuits is resonance:

> **Key Information:** *In an LC circuit at resonance, inductive reactance and capacitive reactance cancel.* {{< link id="G5A12" >}}

This happens when $X_L = X_C$, meaning the reactances are equal in magnitude but opposite in effect. {{< link id="G5A01" >}}

The resonant frequency of an LC circuit is:

$$f_r = \frac{1}{2\pi\sqrt{LC}}$$

Where:
- $f_r$ is the resonant frequency in hertz (Hz)
- $L$ is inductance in henrys (H)
- $C$ is capacitance in farads (F)

At resonance, several important things happen:
- Current is at maximum in a series resonant circuit
- Impedance is at minimum in a series resonant circuit (limited only by resistance)
- Impedance is at maximum in a parallel resonant circuit
- The circuit appears purely resistive (no phase shift between voltage and current)

![Series vs Parallel Resonance](../images/series-parallel-resonance.svg)

#### Practical Applications in Ham Radio

Understanding reactance and impedance is essential for:

1. **Antenna Systems**: Every antenna has an impedance that varies with frequency. Matching this impedance to your transmission line and radio is crucial for efficient power transfer.

2. **Impedance Matching Networks**: These circuits transform impedances to ensure maximum power transfer from your transmitter to your antenna.

3. **Filters**: Band-pass, low-pass, and high-pass filters use reactance properties to select or reject specific frequencies.

4. **Tuned Circuits**: Resonant circuits provide frequency selection in receivers and transmitters.

5. **Transmission Lines**: Understanding impedance is critical when working with coaxial cables, ladder line, and other feed lines.

Let's look at some examples:

##### Example 1: Antenna Resonance

A dipole antenna cut for 7.1 MHz will have equal capacitive and inductive reactances at that frequency, making it resonant. The impedance at the feed point will be purely resistive (typically around 73 ohms for a half-wave dipole in free space).

##### Example 2: Impedance Matching

If your antenna system presents a 100-ohm impedance but your transmitter is designed for 50 ohms, you might use a matching network with inductors and capacitors to transform the impedance and ensure efficient power transfer.

#### Reactance and Impedance in Practice

As a General class operator, you'll encounter these concepts when:

- Using an antenna analyzer to measure impedance and SWR
- Adjusting an antenna tuner to match impedances
- Building filters to eliminate interference
- Designing matching networks for antennas
- Understanding why certain antennas work better on some frequencies than others

The behavior of reactance with frequency explains why an antenna cut for one band doesn't work well on others—its reactance changes with frequency, causing the impedance to shift away from the ideal value for your transmitter.

#### Impedance Transformation

One critical application of impedance concepts is in matching different impedances throughout your station. In amateur radio, we typically work with 50-ohm systems, but antennas, amplifiers, and other components may have different impedances.

Several methods can transform impedance:

1. **Transformers**: Using turns ratio to transform impedance
2. **LC Networks**: Pi networks, T networks, and L networks
3. **Quarter-wave Transformers**: Transmission line sections that transform impedance
4. **Baluns**: Transforming between balanced and unbalanced systems while also potentially changing impedance

We'll cover specific impedance matching techniques in greater detail in upcoming sections.

#### Impedance: The Bridge to Efficient Radio

As you work with antennas, tuners, and other RF equipment, you'll develop an intuitive understanding of these principles. Your new General class privileges will give you plenty of opportunities to apply this knowledge on the HF bands!

But how do we select specific frequencies and reject others in our radio circuits? That's where our next topic comes in—filters and resonant circuits will show us how combinations of capacitors and inductors can perform this essential radio function.
