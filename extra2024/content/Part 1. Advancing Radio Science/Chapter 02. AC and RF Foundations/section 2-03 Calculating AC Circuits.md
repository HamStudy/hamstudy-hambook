---
chapter: "2"
section: "2.3"
questions: ["E5B07", "E5B08", "E5B11", "E5B12", "E5B06", "E5B02", "E5B05", "E5B03"]
status: generated1
draft: true
---

### Section 2.3: Calculating AC Circuits

Put an inductor and a capacitor in series and their reactances pull the impedance point in opposite directions. One moves it up; the other moves it down. Find where that leaves the point before calculating its angle. Adding both reactance magnitudes would send you to the wrong place on the graph.

#### Net Reactance Sets the Angle

For a series RLC circuit, $R$ is resistance, $L$ is inductance, and $C$ is capacitance. Its net reactance is

$$X=X_L-X_C.$$

Positive $X$ means the circuit is inductive overall; negative $X$ means it is capacitive. That tells us whether the impedance arrow points above or below the horizontal axis. To find its angle, compare the vertical distance, $X$, with the horizontal distance, $R$.

The ratio $X/R$ tells us how steeply the arrow slopes. A calculator's *inverse tangent* function turns that ratio into an angle. Written as a formula,

$$\phi=\tan^{-1}\left(\frac{X}{R}\right).$$

The Greek letter $\phi$ (phi) stands for the phase angle. Look for $\tan^{-1}$ or `atan` on your calculator, often through a shift or second-function key. Here the $-1$ means *inverse tangent*, not “1 divided by tangent.” Set the calculator to **degrees** so the answer matches the exam's units.

Let's use the first exam example: $X_C=500\ \Omega$, $X_L=250\ \Omega$, and $R=1\ \mathrm{k}\Omega$, or 1000 Ω.

1. **Subtract the reactances:** $250-500=-250\ \Omega$
2. **Divide by resistance:** $-250/1000=-0.25$
3. **Find the angle:** $\tan^{-1}(-0.25)\approx-14.0^\circ$

This angle describes **voltage relative to current**. A positive angle means voltage leads; a negative angle means voltage lags. *The answer here is that voltage lags current by 14.0 degrees.*

The capacitor has the larger reactance, so we expected a capacitive result: voltage lags. That agrees with the minus sign. This quick check is worth doing before trusting a calculator result—especially after several rounds of minus signs.

The other two exam examples use the same steps. With $X_L=100\ \Omega$ and $X_C=300\ \Omega$, net reactance is −200 Ω. Dividing by the 100 Ω resistance gives −2; inverse tangent gives about −63.4 degrees. *Voltage lags by about 63 degrees.*

With $X_L=75\ \Omega$ and $X_C=25\ \Omega$, net reactance is +50 Ω. The resistance is again 100 Ω, so the ratio is +0.5 and the angle is about +26.6 degrees. *Voltage leads by about 27 degrees.*

> **Key Information:**
> - With $X_C=500\ \Omega$, $R=1\ \mathrm{k}\Omega$, and $X_L=250\ \Omega$, voltage lags current by 14.0 degrees. {{< link id="E5B07" >}}
> - With $X_C=300\ \Omega$, $R=100\ \Omega$, and $X_L=100\ \Omega$, voltage lags current by 63 degrees. {{< link id="E5B08" >}}
> - With $X_C=25\ \Omega$, $R=100\ \Omega$, and $X_L=75\ \Omega$, voltage leads current by 27 degrees. {{< link id="E5B11" >}}

The smaller angle in the first example reflects resistance dominating reactance. In the second, reactance has twice the magnitude of resistance, so the angle lies closer to the purely reactive limit of 90 degrees.

#### Turning the Ratio Over

Impedance tells us how much voltage is needed for a given current: $Z=V/I$. Sometimes we want current for a given voltage instead. *Turning the ratio over gives admittance, $Y=I/V$.*

> **Key Information:** Admittance is the inverse of impedance: $Y=1/Z$. {{< link id="E5B12" >}}

Here, *inverse* means the *reciprocal*: 1 divided by the impedance. Admittance is measured in siemens, abbreviated S. For a 50 Ω resistor, divide 1 by 50 to get 0.02 S. Apply 1 V and it passes 0.02 A; the admittance tells you that directly.

This viewpoint is useful for parallel branches. Each branch has the same voltage, and their currents add, so their admittances add too.

Like impedance, admittance has two perpendicular components. *Its real part is conductance, $G$, and its imaginary part is susceptance, $B$:*

$$Y=G+jB.$$

> **Key Information:** Susceptance is the imaginary part of admittance and is commonly represented by the letter $B$. {{< link id="E5B06" >}} {{< link id="E5B02" >}}

Recall that *polar notation describes an impedance by its magnitude and angle*. *To convert it to admittance, divide 1 by the magnitude and reverse the sign of the angle.* For an impedance of $100\ \Omega$ at $+30^\circ$:

- Divide 1 by 100: the admittance magnitude is **0.01 S**.
- Reverse the sign of +30°: the admittance angle is **−30°**.

Both changes come from turning the voltage-to-current ratio into the current-to-voltage ratio. The size relationship reverses, and so does which quantity leads.

> **Key Information:**
> - Converting the magnitude of pure reactance to susceptance replaces it with its reciprocal. {{< link id="E5B05" >}}
> - To convert polar impedance to admittance, take the reciprocal of the magnitude and change the sign of the angle. {{< link id="E5B03" >}}

For a pure inductive reactance of $+j100\ \Omega$, the admittance is $-j0.01\ \mathrm{S}$. The magnitude becomes $1/100$, and the angle changes from $+90^\circ$ to $-90^\circ$. Keep those two operations separate: taking a reciprocal changes more than the size.
