---
chapter: "2"
section: "2.2"
questions: ["E5C07", "E5C09", "E5C01", "E5C06", "E5C02", "E5C03", "E5C08", "E5C05", "E5C10", "E5C11", "E5C12"]
status: generated1
draft: true
---

### Section 2.2: Drawing Complex Impedance

An antenna analyzer might report an impedance such as $50-j25\ \Omega$. The 50 looks familiar; the rest needs explaining. That reading gives us two pieces of information: resistance and reactance. A drawing will help us keep track of both.

#### Two Directions, One Impedance

*Impedance*, written $Z$, describes how a circuit opposes AC, including the phase relationship between voltage and current. Resistance and reactance affect that phase differently, so we draw them in two directions rather than adding them along one line.

*In rectangular coordinates, resistance $R$ runs along the horizontal axis.* *Reactance $X$ runs along the vertical axis.* A point such as $(50,-25)$ means “50 across, 25 down.” Both coordinates are in ohms.

> **Key Information:**
> - On a rectangular impedance graph, the X axis represents resistance and the Y axis represents reactance. {{< link id="E5C09" >}}
> - Pure resistance lies on the horizontal axis. {{< link id="E5C07" >}}

The notation $Z=R+jX$ holds the same information as that point. The letter $j$ marks the reactance part, drawn at right angles to resistance. Inductive reactance points upward and has a plus sign. Capacitive reactance points downward and has a minus sign. *Our analyzer's $50-j25$ reading means 50 Ω of resistance in series with 25 Ω of capacitive reactance.*

This two-part value is called a *complex number*. Resistance is its *real* part; reactance is its *imaginary* part. “Imaginary” is a math label—the reactance is quite measurable. Here, $j$ keeps us from treating resistance and reactance as though they acted in the same direction.

> **Key Information:**
> - Pure capacitive reactance of 100 ohms is $0-j100$ in rectangular notation. {{< link id="E5C01" >}}
> - $50-j25$ ohms represents 50 ohms resistance in series with 25 ohms capacitive reactance. {{< link id="E5C06" >}}

The minus sign describes phase, not a negative amount of resistance or wasted power.

Watch the labels here: *the graph's “X axis” is horizontal, while the quantity called $X$—reactance—goes vertically.* Use the labels $R$ and $jX$ to keep the two jobs straight.

#### A Length and an Angle

Start an arrow at the *origin*, where both axes read zero, and draw it to the impedance point. You can now describe that same point another way: how long is the arrow, and which way does it point? Its length is the impedance's *magnitude*, and its angle above or below the horizontal axis is the *phase angle*. *Describing the arrow by length and angle gives polar coordinates.*

> **Key Information:**
> - Polar coordinates describe impedance by magnitude and phase angle, and are often used to display a circuit's phase angle. {{< link id="E5C02" >}} {{< link id="E5C08" >}}
> - Pure inductive reactance has a positive 90-degree phase angle. {{< link id="E5C03" >}}
> - A phasor diagram shows the phase relationships between impedances at a given frequency. {{< link id="E5C05" >}}

A *phasor* is an arrow that represents the magnitude and phase of a sine-wave quantity. Phasor diagrams can also compare AC voltages or currents, provided they have the same frequency.

Resistance, reactance, and the arrow form a right triangle. The arrow is the diagonal, not the sum of the other two sides. That is why a 100 Ω resistor and 100 Ω of inductive reactance do not combine into 200 Ω of impedance.

![An impedance triangle starts at the origin, runs 300 ohms to the right along the resistance axis, and rises 400 ohms along the positive reactance direction. The diagonal from the origin to 300 plus j400 has magnitude 500 ohms. The phase angle phi lies between that diagonal and the positive resistance axis.](../../../images/s2-2-impedance-triangle.svg)
{.img-centered .img-med .img-mobile-full caption="Resistance and reactance make the two legs; impedance magnitude is the diagonal. The angle φ (phi) is the phase angle."}

The Pythagorean theorem finds that diagonal: square each of the two sides, add the results, then take the square root. Squaring means multiplying a number by itself; taking a square root reverses that operation. The formula is $|Z|=\sqrt{R^2+X^2}$, where the vertical bars mean “magnitude.” For $Z=300+j400\ \Omega$:

$$|Z|=\sqrt{300^2+400^2}=\sqrt{250{,}000}=500\ \Omega.$$

Changing $+j400$ to $-j400$ moves the point below the axis but leaves its distance from the origin unchanged. You would still measure a magnitude of 500 Ω. To tell an inductive load from a capacitive one, you also need the angle.

#### From a Component to a Point

So far, we have started with resistance and reactance already in ohms. An exam question may instead give a capacitor or inductor value and a frequency. To place that circuit on the graph, first calculate its reactance.

The capacitor formula uses frequency $f$ in hertz and capacitance $C$ in farads. It gives the reactance magnitude in ohms:

$$X_C=\frac{1}{2\pi fC}.$$

The units need attention before we enter numbers. These are the conversions used in the examples:

| Given unit | Value in the formula |
| --- | --- |
| 1 MHz | $10^6$ Hz: one million hertz |
| 1 µH | $10^{-6}$ H: one millionth of a henry |
| 1 pF | $10^{-12}$ F: one trillionth of a farad |

Scientific notation saves typing all those zeros. A calculator's `EE` or `EXP` key usually enters “times ten to the power of,” so 38 pF becomes `38 EE −12` farads. Use the negative-sign key for the exponent. The labels vary by calculator. It may display that entry as `3.8E−11`; that is the same value.

For a **38 pF capacitor at 14 MHz**, work through the bottom of the fraction first:

1. Multiply frequency by capacitance: $(14\times10^6)(38\times10^{-12})=0.000532$.
2. Multiply by $2\pi$ (about 6.28): the result is about **0.003343**.
3. Divide 1 by that result: $1/0.003343\approx299\ \Omega$.

Because this is a capacitor, its reactance points downward. *With the 400 Ω series resistor, the impedance is approximately $400-j299\ \Omega$*: move right to 400, then down to about −300.

![Official Figure E5-1 is a rectangular impedance graph. Resistance is horizontal and reactance is vertical, both in ohms. Point 4 is approximately 400 minus j300, point 3 is 300 plus j400, and point 1 is 300 minus j400. These are the three points used by the circuit examples.](../../../hugo/static/figures/E5-1.svg)
{.img-centered .img-xlarge .img-bw caption="Figure E5-1: Plot resistance horizontally and signed reactance vertically."}

The inductor formula skips the final “1 divided by” step. With frequency in hertz and inductance in henries:

$$X_L=2\pi fL.$$

For **18 µH at 3.505 MHz**, frequency times inductance is $(3.505\times10^6)(18\times10^{-6})=63.09$. Multiplying by $2\pi$ gives *about 396 Ω*, plotted upward from the 300 Ω resistance position.

For **19 pF at 21.200 MHz**, use the capacitor steps again. Frequency times capacitance is 0.0004028. Multiplying by $2\pi$ gives about 0.002531; dividing 1 by that gives *about 395 Ω*, plotted downward from 300 Ω of resistance.

The graph rounds these values to 400 Ω. The calculator and the graph are agreeing at different levels of precision. Notice how the formulas work: raising frequency increases an inductor's reactance but decreases a capacitor's.

> **Key Information:** In Figure E5-1:
> - A 400-ohm resistor and 38-picofarad capacitor in series at 14 MHz give approximately $400-j299\ \Omega$: point 4. {{< link id="E5C10" >}}
> - A 300-ohm resistor and 18-microhenry inductor in series at 3.505 MHz give approximately $300+j396\ \Omega$: point 3. {{< link id="E5C11" >}}
> - A 300-ohm resistor and 19-picofarad capacitor in series at 21.200 MHz give approximately $300-j395\ \Omega$: point 1. {{< link id="E5C12" >}}

All three magnitudes are close to 500 Ω, yet their phase angles differ. The position of the point preserves information that its distance alone would lose.
