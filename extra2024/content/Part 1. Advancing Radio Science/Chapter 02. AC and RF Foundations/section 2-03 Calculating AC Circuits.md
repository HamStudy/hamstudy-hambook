---
chapter: "2"
section: "2.3"
questions: ["E5B07", "E5B08", "E5B11", "E5B12", "E5B06", "E5B02", "E5B05", "E5B03"]
status: generated1
---

### Section 2.3: Calculating AC Circuits

The impedance triangle has given us one number so far: the magnitude. Its angle completes the description, telling how far voltage and current are out of step. One more calculator function finds it, and a little care with signs keeps it pointing the right way once an inductor and a capacitor share a circuit.

#### An Angle from the Triangle

In the impedance triangle, the vertical side divided by the horizontal side, $X/R$, is the **tangent** of the angle. A calculator's **inverse tangent** function works backward: give it that ratio and it finds the angle. Written as a formula for the phase angle $\phi$ (phi),

$$\phi=\tan^{-1}\left(\frac{X}{R}\right).$$

Look for $\tan^{-1}$ or `atan` on your calculator, often through a shift or second-function key. Here the $-1$ means inverse tangent, not “1 divided by tangent.” Set the calculator to **degrees**, the unit used for these angles. As a check, $\tan^{-1}(1)$ should give 45°; a result near 0.785 means it's set to radians, a classic exam-day trap.

The previous section's $300+j400\ \Omega$ triangle gives $\tan^{-1}(400/300)\approx53.1^\circ$. With the 500 Ω magnitude we already found, its polar form is **500 Ω at +53.1°**.

This angle describes **voltage relative to current**. A positive angle means voltage leads; a negative angle means voltage lags. The +53.1° load is inductive, and its voltage leads, just as an inductor's does.

#### Net Reactance Sets the Angle

Put an inductor and a capacitor in series, and their reactances play tug-of-war with the impedance point, one pulling up and one pulling down. Find where that leaves the point before calculating its angle; adding both reactance magnitudes would put it in the wrong place.

A series RLC circuit contains resistance $R$, inductance $L$, and capacitance $C$. Its net reactance is

$$X=X_L-X_C.$$

Positive $X$ means the circuit is inductive overall; negative $X$ means it is capacitive. That net value becomes the vertical side of the triangle.

Take $X_C=500\ \Omega$, $X_L=250\ \Omega$, and $R=1\ \mathrm{k}\Omega$, or 1000 Ω:

1. **Subtract the reactances:** $250-500=-250\ \Omega$
2. **Divide by resistance:** $-250/1000=-0.25$
3. **Find the angle:** $\tan^{-1}(-0.25)\approx-14.0^\circ$

The figure below draws this example on the impedance graph.

![An impedance graph has resistance R along the horizontal axis and reactance along the vertical axis, with plus j X upward and minus j X downward. A blue segment labeled R equals 1000 ohms runs right from the origin along the resistance axis. To the right of its end, a green arrow labeled X sub L equals 250 ohms rises 250 ohms from the axis. From the height of that arrow's tip, a red arrow labeled X sub C equals 500 ohms drops 500 ohms, ending 250 ohms below the axis. A dashed orange line runs straight down from the end of the resistance segment to that same level and is labeled X equals minus 250 ohms, the net reactance. The impedance arrow runs from the origin down to the point labeled 1000 minus j250, below the resistance axis. The angle phi between the resistance axis and the impedance arrow is labeled approximately minus 14 degrees.](../../../images/s2-3-net-reactance.svg)
{.img-centered .img-xlarge .img-mobile-full caption="The reactances partly cancel. Their difference, not their sum, places the impedance point and sets its angle."}

The capacitor has the larger reactance, so we expected a capacitive result: voltage lags, as the minus sign says. You can check the angle's size too. Ignoring signs, a net reactance smaller than the resistance gives an angle under 45°, and a larger one gives an angle over 45°. Both checks catch calculator slips.

Two more circuits use the same steps. With $X_L=100\ \Omega$ and $X_C=300\ \Omega$, net reactance is −200 Ω. Dividing by the 100 Ω resistance gives −2; inverse tangent gives about −63.4 degrees.

With $X_L=75\ \Omega$ and $X_C=25\ \Omega$, net reactance is +50 Ω. The resistance is again 100 Ω, so the ratio is +0.5 and the angle is about +26.6 degrees.

> **Key Information:** In a series RLC circuit:
> - With $X_C=500\ \Omega$, $R=1\ \mathrm{k}\Omega$, and $X_L=250\ \Omega$, the voltage lags the current by 14.0 degrees. {{< link id="E5B07" >}}
> - With $X_C=300\ \Omega$, $R=100\ \Omega$, and $X_L=100\ \Omega$, the voltage lags the current by 63 degrees. {{< link id="E5B08" >}}
> - With $X_C=25\ \Omega$, $R=100\ \Omega$, and $X_L=75\ \Omega$, the voltage leads the current by 27 degrees. {{< link id="E5B11" >}}

#### Turning the Ratio Over

Every part of a series circuit carries the same current. Parallel branches share the same voltage instead, and their currents add. **Admittance** describes how much current flows for each volt applied, so we can combine parallel branches by adding their admittances. Impedance is voltage divided by current; admittance turns that division around. Its unit is the siemens, abbreviated S. For a 50 Ω resistor, divide 1 by 50 to get 0.02 S. Apply 1 V and it passes 0.02 A.

Like impedance, admittance has two perpendicular components. Its real part, $G$, is **conductance**.

> **Key Information:**
> - Admittance is the inverse of impedance: $Y=1/Z$. {{< link id="E5B12" >}}
> - Susceptance is the imaginary part of admittance and is commonly represented by the letter $B$. {{< link id="E5B06" >}} {{< link id="E5B02" >}}

In “inverse of impedance,” inverse means the reciprocal, 1 divided by the impedance, not the inverse-tangent sense used earlier. An impedance given in polar form has both a magnitude and an angle to convert. For an impedance of $100\ \Omega$ at $+30^\circ$:

- Divide 1 by 100: the admittance magnitude is **0.01 S**.
- Reverse the sign of +30°: the admittance angle is **−30°**.

Both changes come from flipping the ratio: the size relationship reverses, and so does which quantity leads.

A pure inductive reactance of $+j100\ \Omega$ has an admittance of $-j0.01\ \mathrm{S}$. The magnitude becomes $1/100$, and the angle changes from $+90^\circ$ to $-90^\circ$. With no resistance, all of that admittance is susceptance. The magnitude is always positive; the sign belongs to the phase angle.

> **Key Information:**
> - Converting the magnitude of pure reactance to susceptance replaces it with its reciprocal. {{< link id="E5B05" >}}
> - To convert polar impedance to admittance, take the reciprocal of the magnitude and change the sign of the angle. {{< link id="E5B03" >}}
