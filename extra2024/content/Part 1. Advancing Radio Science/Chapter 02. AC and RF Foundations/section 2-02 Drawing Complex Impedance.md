---
chapter: "2"
section: "2.2"
questions: ["E5C09", "E5C07", "E5C01", "E5C06", "E5C02", "E5C08", "E5C03", "E5C05", "E5C10", "E5C11", "E5C12"]
status: generated1
draft: true
---

### Section 2.2: Drawing Complex Impedance

An antenna analyzer might report $50-j25\ \Omega$ rather than a single impedance value. The extra information lets us distinguish resistance from reactance and tell whether a load is inductive or capacitive. Plotting the reading lets us see those differences and work out their combined effect.

#### Two Directions, One Impedance

Resistance and reactance affect phase differently, so we cannot add them along one line to find impedance $Z$. We draw them in two directions instead, at right angles. A graph that locates each point by how far across and how far up or down it lies uses **rectangular coordinates**. Here both coordinates are in ohms. A pure resistance has no reactance at all.

> **Key Information:**
> - When graphing impedance in rectangular coordinates, the X axis represents the resistive component and the Y axis represents the reactive component. {{< link id="E5C09" >}}
> - The impedance of a pure resistance is plotted on the horizontal axis. {{< link id="E5C07" >}}

Watch the labels here: the graph's “X axis” is horizontal, while the quantity called $X$—reactance—goes vertically. A point such as $(50,-25)$ means “50 across, 25 down.”

Rectangular notation, $Z=R+jX$, holds the same information as that point. The letter $j$ marks the reactance part, drawn at right angles to resistance. Inductive reactance points upward and has a plus sign. Capacitive reactance points downward and has a minus sign, like the $-j25$ in our analyzer's reading.

This two-part value is called a **complex number**. Resistance is its **real** part; reactance is its **imaginary** part. “Imaginary” is a math label—the reactance is quite measurable.

> **Key Information:**
> - Pure capacitive reactance of 100 ohms is $0-j100$ in rectangular notation. {{< link id="E5C01" >}}
> - $50-j25$ ohms represents 50 ohms resistance in series with 25 ohms capacitive reactance. {{< link id="E5C06" >}}

#### A Length and an Angle

To find the total opposition to current and its phase angle, draw an arrow from the **origin**, where both axes read zero, to the impedance point. The arrow's length is the impedance's **magnitude**. Its angle above or below the horizontal axis is the **phase angle**.

A pure inductive reactance has no resistance, so its arrow points straight up the vertical axis. That matches the inductor in the previous section, whose voltage leads its current by 90 degrees. A pure capacitive reactance points straight down, at −90 degrees.

A **phasor** is an arrow that represents the magnitude and phase of a sine-wave voltage or current. We draw impedance arrows the same way. Because reactance changes with frequency, each arrow holds for only one frequency.

> **Key Information:**
> - Polar coordinates describe impedances by magnitude and phase angle, and are often used to display the phase angle of a circuit containing resistance and reactance. {{< link id="E5C02" >}} {{< link id="E5C08" >}}
> - In polar coordinates, a pure inductive reactance has a positive 90-degree phase angle. {{< link id="E5C03" >}}
> - A phasor diagram shows the phase relationship between impedances at a given frequency. {{< link id="E5C05" >}}

Resistance, reactance, and the arrow form a right triangle. The arrow is the diagonal, not the sum of the other two sides.

![An impedance triangle starts at the origin, runs 300 ohms to the right along the resistance axis, and rises 400 ohms along the positive reactance direction. The diagonal from the origin to 300 plus j400 has magnitude 500 ohms. The phase angle phi lies between that diagonal and the positive resistance axis.](../../../images/s2-2-impedance-triangle.svg)
{.img-centered .img-med .img-mobile-full caption="Resistance and reactance make the two legs; impedance magnitude is the diagonal. The angle φ (phi) is the phase angle."}

The Pythagorean theorem finds that diagonal: square each of the two sides, add the results, then take the square root. The formula is $|Z|=\sqrt{R^2+X^2}$, where the vertical bars mean “magnitude.” For $Z=300+j400\ \Omega$:

$$|Z|=\sqrt{300^2+400^2}=\sqrt{250{,}000}=500\ \Omega.$$

The previous section's 100 Ω resistor and 100 Ω inductive reactance work the same way: $|Z|=\sqrt{100^2+100^2}\approx141\ \Omega$. Driving 1 A through that pair takes about 141 V, not 200 V.

Changing $+j400$ to $-j400$ moves the point below the axis but leaves its distance from the origin unchanged. To tell an inductive load from a capacitive one, you also need the angle.

#### From a Component to a Point

Until now, resistance and reactance have arrived already in ohms. Often you'll know a capacitor or inductor value and a frequency instead. To place that circuit on the graph, first calculate its reactance.

The capacitor formula uses frequency $f$ in hertz and capacitance $C$ in farads. It gives the reactance magnitude in ohms:

$$X_C=\frac{1}{2\pi fC}.$$

The examples use these unit conversions:

| Given unit | Value in the formula |
| --- | --- |
| 1 MHz | $10^6$ Hz: one million hertz |
| 1 µH | $10^{-6}$ H: one millionth of a henry |
| 1 pF | $10^{-12}$ F: one trillionth of a farad |

Scientific notation saves typing all those zeros. A calculator's `EE` or `EXP` key usually enters “times ten to the power of,” so 38 pF becomes `38 EE −12` farads. Use the negative-sign key for the exponent. It may display that entry as `3.8E−11`; that is the same value.

For a **400 Ω resistor and 38 pF capacitor in series at 14 MHz**, work through the bottom of the fraction first:

1. Multiply frequency by capacitance: $(14\times10^6)(38\times10^{-12})=0.000532$.
2. Multiply by $2\pi$ (about 6.28): the result is about **0.003343**.
3. Divide 1 by that result: $1/0.003343\approx299\ \Omega$.

Because this is a capacitor, its reactance points downward. With the 400 Ω series resistor, the impedance is approximately $400-j299\ \Omega$: move right to 400, then down to about −300. Resistance is never negative in these circuits, so their points always lie right of the vertical axis.

![Official Figure E5-1 has a horizontal X axis and a vertical Y axis, numbered in steps of 100 from minus 600 to plus 600. For impedance, read horizontal values as resistance and vertical values as reactance, both in ohms. Point 1 is at 300, minus 400; point 2 at 400, plus 300. Point 3 is at 300, plus 400; point 4 at 400, minus 300. Point 5 is at minus 400, minus 300; point 6 at 400, just below zero. Point 7 is at minus 300, minus 400; point 8 at 300, slightly above zero. Positive reactance is inductive; negative reactance is capacitive.](../../../hugo/static/figures/E5-1.svg)
{.img-centered .img-xlarge .img-bw caption="Figure E5-1: Plot resistance horizontally and signed reactance vertically."}

The inductor formula skips the final “1 divided by” step. With frequency in hertz and inductance in henries:

$$X_L=2\pi fL.$$

Frequency sits on top here and on the bottom of the capacitor formula. That is why raising frequency increases an inductor's reactance but decreases a capacitor's.

For a **300 Ω resistor and 18 µH inductor in series at 3.505 MHz**, frequency times inductance is $(3.505\times10^6)(18\times10^{-6})=63.09$. Multiplying by $2\pi$ gives about 396 Ω, plotted upward from the 300 Ω resistance position.

A **300 Ω resistor and 19 pF capacitor in series at 21.200 MHz** takes the capacitor steps again. Frequency times capacitance is 0.0004028. Multiplying by $2\pi$ gives about 0.002531; dividing 1 by that gives about 395 Ω, plotted downward from 300 Ω of resistance.

The graph places these last two reactances at 400 Ω rather than 396 or 395 Ω. The calculator and the graph agree at different levels of precision.

> **Key Information:** In Figure E5-1:
> - A 400-ohm resistor and 38-picofarad capacitor in series at 14 MHz give approximately $400-j299\ \Omega$: point 4. {{< link id="E5C10" >}}
> - A 300-ohm resistor and 18-microhenry inductor in series at 3.505 MHz give approximately $300+j396\ \Omega$: point 3. {{< link id="E5C11" >}}
> - A 300-ohm resistor and 19-picofarad capacitor in series at 21.200 MHz give approximately $300-j395\ \Omega$: point 1. {{< link id="E5C12" >}}

All three magnitudes are close to 500 Ω, yet their phase angles differ.
