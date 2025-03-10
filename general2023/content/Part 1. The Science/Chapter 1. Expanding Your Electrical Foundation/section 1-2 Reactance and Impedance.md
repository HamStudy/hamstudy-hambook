---
slug: "section1.2"
questions: ["G5A01", "G5A02", "G5A03", "G5A04", "G5A05", "G5A06", "G5A07", "G5A08", "G5A09", "G5A11", "G5A12"]
---

### Section 1.2: Reactance and Impedance

Radio signals are alternating currents that change direction millions of times per second, making radio circuits behave very differently from DC circuits. While you'll only see one or two exam questions on these concepts (and you can miss 9 questions and still pass the exam!), understanding the basics will help you make sense of antenna behavior and equipment performance across different bands.

In RF circuits, capacitors and inductors store and release energy with each cycle, creating frequency-dependent opposition called reactance. This property explains why antennas work better on some frequencies than others and forms the foundation for filters, tuned circuits, and impedance matching—all essential aspects of your new General class operations.

#### Dynamic Opposition: Reactance in Action

> **Key Information:** *Reactance is opposition to the flow of alternating current caused by capacitance or inductance.* {{< link id="G5A02" >}}

Unlike resistance, which simply opposes current flow and converts energy to heat, reactance temporarily stores energy and then returns it to the circuit. This storage and return creates a critical difference: it shifts the timing between voltage and current, a concept called "phase."

**Understanding Phase:**

Imagine a spinning wheel. As the wheel turns, a point on its edge moves in a circle, completing a full rotation. Each rotation is a "cycle."

![animation: Relationship between a circle and a sine wave, illustrating phase](../../../images/circle_sine_animated.gif)

* **Phase** tells us where that point is in its rotation, or what part of the cycle it's in. We measure this in degrees, with a full circle being 360 degrees.
* If you graph the height of that point as the wheel spins, you get a sine wave. The sine wave is just another way to visualize the circular motion and its phase.
* In AC circuits, voltage and current follow these sine wave patterns.
* If voltage and current rise and fall together, they are "in phase" - like two points on the spinning wheel moving together.
* When current reaches its peak at a different time than voltage, they are "out of phase" - at different points on the spinning wheel.

**Reactance and Phase Shift:**

* **Inductors:** In an inductor, the current lags behind the voltage by 90 degrees. 
  * *Why?* Inductors resist changes in current because of their magnetic fields. The magnetic field must build up first, delaying the current flow. Like pushing a heavy object, maximum movement occurs well after maximum force is applied.

* **Capacitors:** In a capacitor, the current leads the voltage by 90 degrees.
  * *Why?* Capacitors store electrical charge. Current flows immediately to build charge, but voltage increases gradually as charge accumulates. Like compressing a spring, the movement is fastest at the beginning while the stored energy (voltage) builds up more slowly.

This 90-degree phase shift makes reactance fundamentally different from resistance and is why impedance calculations use the "j" operator.

#### Reactance: The Frequency-Dependent Opposition

> **Key Information:** *Reactance is opposition to the flow of alternating current caused by capacitance or inductance.* {{< link id="G5A02" >}}

Unlike resistance, which converts electrical energy to heat, reactance temporarily stores energy in electric or magnetic fields and then returns it to the circuit. This creates a phase shift between voltage and current that's crucial for many radio applications.

Reactance is measured in ohms (Ω) just like resistance and is represented by the letter **X**. {{< link id="G5A11" >}} There are two types, each with distinct phase relationships:

1. **Inductive Reactance ($X_L$)**: *Opposition to alternating current in an inductor* {{< link id="G5A03" >}}
   * Current lags voltage by 90 degrees
   * Energy stored in a magnetic field

2. **Capacitive Reactance ($X_C$)**: *Opposition to alternating current in a capacitor* {{< link id="G5A04" >}}
   * Current leads voltage by 90 degrees
   * Energy stored in an electric field

#### How Frequency Changes Everything

What makes reactance fundamentally different from resistance is how it changes with frequency. This frequency dependence is crucial for creating filters, tuned circuits, and impedance matching networks:

**For Inductors:**
> **Key Information:** *As frequency increases, an inductor's reactance increases.* {{< link id="G5A05" >}}

Think of an inductor as increasingly "stubborn" about changing current flow as frequency rises. This property makes inductors useful as RF chokes that block high frequencies while passing DC and low frequencies. 

Extending our heavy object analogy: At low frequencies, you're pushing long enough to overcome the inertia and move the object. But at very high frequencies, you're rapidly changing direction before the object has a chance to get moving at all—like trying to shake a bowling ball back and forth very quickly. The faster you try to change (higher frequency), the more it resists movement (higher reactance).

The formula for inductive reactance is:

$$X_L = 2\pi fL$$

Where:
- $X_L$ is inductive reactance in ohms (Ω)
- $f$ is frequency in hertz (Hz)
- $L$ is inductance in henrys (H)

**For Capacitors:**
> **Key Information:** *As frequency increases, a capacitor's reactance decreases.* {{< link id="G5A06" >}}

Capacitors become more "willing" to pass current as frequency rises. This is why they're excellent as bypass capacitors, offering an easy path for RF signals while blocking DC. 

Continuing our spring analogy: At low frequencies, you push the spring through its full compression cycle, meeting maximum resistance. But at very high frequencies, you're changing direction so quickly that the spring barely begins to compress before you reverse direction—it just vibrates in place with minimal resistance. The faster the frequency, the less time the spring has to compress and build up opposing force (lower reactance).

The formula is:

$$X_C = \frac{1}{2\pi fC}$$

Where:
- $X_C$ is capacitive reactance in ohms (Ω)
- $f$ is frequency in hertz (Hz)
- $C$ is capacitance in farads (F)

#### Impedance: Combining Resistance and Reactance

In real-world radio circuits, we always have both resistance and reactance present. Their combined effect gives us impedance:

> **Key Information:** *Impedance is the ratio of voltage to current in an AC circuit.* {{< link id="G5A08" >}}

Impedance (Z) represents the total opposition to current flow and is measured in ohms (Ω). {{< link id="G5A09" >}} But unlike pure resistance, impedance includes the phase relationship between voltage and current:

$Z = R + jX$

Where:
- $R$ is resistance (the in-phase component)
- $X$ is reactance (the 90° out-of-phase component)
- $j$ is the mathematical way to represent the 90° phase shift

When we measure impedance with an antenna analyzer or other test equipment, we typically see the magnitude:

$|Z| = \sqrt{R^2 + X^2}$

Understanding impedance is crucial because:
- It determines how efficiently power transfers between components
- It explains SWR readings on your antenna system
- It's the basis for matching networks and antenna tuners
- It varies with frequency, creating the band-dependent behavior of antennas

#### Admittance: The Flow Perspective

When working with parallel circuits, engineers often find it more convenient to think about how easily current flows rather than how much it's opposed:

> **Key Information:** *Admittance is the inverse of impedance.* {{< link id="G5A07" >}}

Just as conductance (G) is the inverse of resistance, admittance (Y) is the inverse of impedance:

$Y = \frac{1}{Z}$

Admittance is measured in siemens (S) and particularly useful when analyzing parallel circuits, just as impedance is more convenient for series circuits.

#### Resonance: Where It All Comes Together

The opposite frequency responses of inductors and capacitors create a fascinating phenomenon—resonance:

> **Key Information:** *At resonance in an LC circuit, inductive reactance and capacitive reactance are equal and cancel each other.* {{< link id="G5A12" >}} {{< link id="G5A01" >}}

When $X_L = X_C$, these opposing effects perfectly balance. Since inductive reactance increases with frequency while capacitive reactance decreases, there's always exactly one frequency where they're equal—the resonant frequency:

$f_r = \frac{1}{2\pi\sqrt{LC}}$

Resonance creates dramatically different behaviors depending on whether components are in series or parallel:

* **Series Resonant Circuits**: When L and C are in series, impedance reaches minimum at resonance (current flows easily)
* **Parallel Resonant Circuits**: When L and C are in parallel, impedance reaches maximum at resonance (current flow is blocked)

These properties make resonant circuits the foundation for:
- Tuned antenna systems that work efficiently on specific frequencies
- Filters that select desired signals and reject others
- Oscillators that generate precise frequencies
- Matching networks that transform impedance

#### The Foundation of Radio Circuit Design

The concepts of reactance, impedance, and resonance form the foundation for virtually every aspect of radio system design:

1. **Impedance Matching**: Efficiently transferring power between your transmitter, feed line, and antenna requires managing impedance. Matching networks use carefully calculated combinations of inductors and capacitors to transform impedance for maximum power transfer.

2. **Frequency Selection**: Your radio's ability to select specific signals depends on resonant circuits. The tuned circuits in receivers and transmitters use the resonance properties we've discussed to isolate desired frequencies.

3. **Antenna Systems**: Antennas exhibit impedance that varies with frequency. Understanding this helps you optimize your antenna system for different bands and explains why certain antenna lengths work for specific frequencies.

4. **Feed Line Effects**: Transmission lines can transform impedance depending on their length relative to wavelength. This explains why moving your antenna feed point or changing line length sometimes affects SWR readings.

5. **Signal Filtering**: Every filter in your radio equipment, from the front-end filters to IF filters, relies on the frequency-selective properties of reactive components.

These principles explain many of the behaviors you'll observe as you operate with your General privileges. When your antenna works better on some bands than others, when you adjust your antenna tuner, or when you encounter interference issues, reactance and impedance are working behind the scenes. While you won't need to calculate reactance values for everyday operation, understanding these concepts helps make sense of how your equipment behaves across different frequencies and operating conditions.

In our next section, we'll explore how these principles come together in filters and resonant circuits—showing how specific combinations of components can select desired signals while rejecting unwanted ones.
