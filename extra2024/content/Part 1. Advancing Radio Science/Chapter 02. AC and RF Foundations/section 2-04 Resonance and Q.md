---
chapter: "2"
section: "2.4"
questions: ["E5A08", "E5A03", "E5A04", "E5A06", "E5A07", "E5A01", "E5A02", "E5A10", "E5A09", "E5A11", "E5A12", "E5A05", "E5A13", "E4B08"]
status: generated1
draft: true
---

### Section 2.4: Resonance and Q

A tuning capacitor can select a frequency even though it has no frequency marked on it. The result depends on the inductor working with it. At one frequency, their reactance magnitudes match and their opposite phase effects cancel at the circuit's input. That condition is *resonance*.

Energy still moves between the capacitor's electric field and the inductor's magnetic field. From the source's point of view, however, the pair has no net reactance.

#### Two Resonant Arrangements

In a series RLC circuit, all components carry the same current. *At resonance, $X_L-X_C=0$, leaving resistance as the only opposition to the source.* For a fixed applied voltage, current reaches its maximum.

> **Key Information:** At series resonance, voltage and current are in phase, and the impedance magnitude is approximately equal to circuit resistance. {{< link id="E5A08" >}} {{< link id="E5A03" >}}

A parallel resonant circuit presents the opposite pattern at its input. The inductor and capacitor branch currents oppose each other in phase. Much of the current circulates between those branches instead of coming from the source. *Input current falls to a minimum.*

> **Key Information:** At parallel resonance:
> - The impedance magnitude is approximately equal to the circuit's parallel resistance. {{< link id="E5A04" >}}
> - Circulating current within the LC components is at a maximum. {{< link id="E5A06" >}}
> - Current at the circuit's input is at a minimum. {{< link id="E5A07" >}}

The resistance in this parallel model sits across the LC pair. A high value lets little current escape through that loss path, so the input impedance is high. This is different from the small wire resistance *in series* with a coil. Use the resistance for the arrangement being described.

![Two AC circuit diagrams. On the left, a source, resistor R, inductor L, and capacitor C form one series loop. Three equal arrows show the same clockwise current at the illustrated instant. On the right, a source connects across separate R, L, and C branches. Small input and resistor-current arrows point from the source into R. Equal larger arrows point up through L and down through C. At resonance, the L and C currents cancel in the total drawn from the source, which still supplies the resistor current. These instantaneous arrows reverse as the AC cycle continues.](../../../images/s2-4-resonant-circuits.svg)
{.img-centered .img-xlarge .img-mobile-full caption="Series (left) and parallel (right) RLC circuits. At parallel resonance, opposing LC currents cancel at the input; the source still supplies loss current through R. Arrow sizes are qualitative; directions show one instant of AC operation."}

*The voltages inside a series resonant circuit can be much larger than the source voltage.* Suppose a 10 V source drives 1 A through 10 Ω of resistance. The resistor drops the full 10 V. If the inductor and capacitor each have 100 Ω of reactance, that same current produces **100 V across each one**.

A meter across either component would read ten times the source voltage. Where did the extra voltage come from? Energy keeps passing between the inductor and capacitor. Their voltages are opposite in phase, so they cancel around the complete circuit. The source supplies the energy lost in the resistance.

> **Key Information:** Resonance can make the voltage across individual reactances in a series RLC circuit higher than the voltage applied to the entire circuit. {{< link id="E5A01" >}}

#### Finding the Resonant Frequency

We want the frequency where the two reactances match. The formula comes from setting $X_L=X_C$. For the component values used in these questions, a convenient form uses **inductance $L$ in microhenries** and **capacitance $C$ in picofarads**. It gives resonant frequency $f_0$ **in megahertz**:

$$f_0=\frac{159.2}{\sqrt{LC}}.$$

The number 159.2 includes $2\pi$ and the unit conversions. That lets us use the values on the components without entering a string of tiny decimals.

The question also gives a resistance. It affects loss and the sharpness of resonance, but it does not enter this ideal LC frequency calculation. For 50 µH and 40 pF, work through three operations:

1. **Multiply:** $50\times40=2000$.
2. **Take the square root:** $\sqrt{2000}\approx44.72$.
3. **Divide:** *$159.2/44.72\approx3.56\ \mathrm{MHz}$*.

For 50 µH and 10 pF, the product is 500 and its square root is about 22.36. Dividing 159.2 by 22.36 gives *7.12 MHz*. Reducing the capacitance to one quarter has doubled the frequency.

> **Key Information:**
> - With $R=22\ \Omega$, $L=50\ \mu\mathrm{H}$, and $C=40\ \mathrm{pF}$, resonance is at 3.56 MHz. {{< link id="E5A02" >}}
> - With $R=33\ \Omega$, $L=50\ \mu\mathrm{H}$, and $C=10\ \mathrm{pF}$, resonance is at 7.12 MHz. {{< link id="E5A10" >}}

You may also see the formula written as $f_0=1/(2\pi\sqrt{LC})$. That version uses **henries and farads** and gives **hertz**. It describes the same relationship; the two forms need different units.

#### How Sharply It Resonates

Two circuits can tune to the same frequency yet respond differently on either side of it. The *quality factor*, $Q$, tells us about that sharpness by comparing energy stored with energy lost. A high-Q circuit loses a smaller fraction of its stored energy each cycle.

*For a parallel RLC model at resonance, divide resistance by reactance: $Q=R/X$.* Use the reactance magnitude of either component; they are equal at resonance.

> **Key Information:** For a parallel RLC resonant circuit, calculate Q by dividing resistance by the reactance of either the inductance or capacitance. {{< link id="E5A09" >}}

For a series RLC model, the ratio goes the other way: $Q=X/R$. Less series resistance reduces loss, but *more* parallel resistance reduces loss. Either change raises Q.

A circuit's *half-power bandwidth* is the frequency interval between the two response points where power is half its resonant value. Find one point below resonance and one above it; bandwidth is the whole interval between them, not the distance from the peak to one side.

![Two normalized resonant power-response curves peak at the same frequency f zero. The solid blue curve for Q of 100 is narrower than the dashed orange curve for Q of 50. A horizontal half-power line crosses the blue curve at f L and f H. A double-headed arrow between those frequencies marks the full bandwidth.](../../../images/s2-4-resonance-bandwidth.svg)
{.img-centered .img-xlarge .img-mobile-full caption="Higher Q gives a narrower response. Measure bandwidth between both half-power points."}

The graph marks both peaks as 1 and half their power as ½. Compare how wide each response is at that half-power line.

For the tuned-circuit model used here, divide the resonant frequency by Q to find bandwidth:

$$\mathrm{BW}=\frac{f_0}{Q}.$$

For a circuit tuned to 7.1 MHz with a Q of 150, first write the frequency as **7100 kHz**. Dividing $7100/150$ gives a bandwidth of *47.3 kHz*. Starting in kilohertz makes the answer come out in kilohertz.

For a circuit at 3.7 MHz with Q of 118, use 3700 kHz: *$3700/118\approx31.4\ \mathrm{kHz}$*.

*You can also work backward from a measured bandwidth: $Q=f_0/\mathrm{BW}$.* Use the same frequency units for both numbers. A response centered on 7100 kHz with a bandwidth of 47.3 kHz gives $7100/47.3\approx150$ for Q.

> **Key Information:**
> - A circuit resonant at 7.1 MHz with Q of 150 has a half-power bandwidth of 47.3 kHz. {{< link id="E5A11" >}}
> - A circuit resonant at 3.7 MHz with Q of 118 has a half-power bandwidth of 31.4 kHz. {{< link id="E5A12" >}}
> - The bandwidth of a series-tuned circuit's frequency response can be used to determine its Q. {{< link id="E4B08" >}}

A sharper response is useful when selecting one frequency, but it also means a smaller usable tuning range. Greater circulating energy can put more stress on components.

> **Key Information:**
> - Increasing the Q of an impedance-matching circuit decreases its matching bandwidth. {{< link id="E5A05" >}}
> - Increasing Q in a series resonant circuit increases internal voltages. {{< link id="E5A13" >}}

An actual circuit's Q includes loading from its source, load, and losses in its components. The response may broaden once you connect the circuit to a radio. The parts themselves add a few complications too.
