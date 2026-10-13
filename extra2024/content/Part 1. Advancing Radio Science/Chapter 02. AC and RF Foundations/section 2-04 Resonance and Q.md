---
chapter: "2"
section: "2.4"
questions: ["E5A08", "E5A03", "E5A01", "E5A04", "E5A06", "E5A07", "E5A02", "E5A10", "E5A09", "E5A13", "E5A11", "E5A12", "E4B08", "E5A05"]
status: generated1
---

### Section 2.4: Resonance and Q

Inductive reactance rises with frequency while capacitive reactance falls, so an inductor and a capacitor have one frequency where their reactances are equal. That is their resonant frequency, the one a tuned circuit picks out. In series, the pair draws its greatest current from the source there; in parallel, it draws its least. Either way, the voltages or currents inside the circuit can be much larger than the source's own.

#### Two Resonant Arrangements

At resonance, energy keeps moving between the electric and magnetic fields, but their opposite phase effects cancel at the input. In a series RLC circuit, the net reactance $X_L-X_C$ is zero, so the phase angle is $\tan^{-1}(0/R)=0^\circ$. With only resistance left to limit it, the current through all the components reaches its maximum for a fixed applied voltage.

That large current flows through the inductor and capacitor too. Suppose a 10 V source drives 1 A through 10 Ω of resistance. The resistor drops the full 10 V. If the inductor and capacitor each have 100 Ω of reactance, that same current produces **100 V across each one**.

Energy passing between the inductor and capacitor sustains those larger voltages. Their voltages are opposite in phase, so they cancel around the complete circuit. The source supplies only the energy lost in the resistance. This is why a small transmitting loop's tuning capacitor can need a rating of several thousand volts, even at modest power.

> **Key Information:**
> - At series resonance, voltage and current are in phase, and the impedance magnitude is approximately equal to circuit resistance. {{< link id="E5A08" >}} {{< link id="E5A03" >}}
> - Resonance can make the voltage across individual reactances in a series RLC circuit higher than the voltage applied to the entire circuit. {{< link id="E5A01" >}}

A parallel resonant circuit presents the opposite pattern at its input. Both branches share the same voltage. Capacitor current leads that voltage by 90°, while inductor current lags it by 90°, so their currents are 180° apart.

Away from resonance, one branch draws more current than the other. Only the smaller current can circulate between them, and the source supplies the difference. At resonance the two are equal, so they cancel completely at the input and all of the branch current circulates between L and C. With little loss, the circulating current can be many times the input current.

The resistance in this parallel model sits across the LC pair. At resonance, the source supplies only the current through that resistance. This resistance is usually large, unlike the small wire resistance in series with a coil. That is why a parallel tuned circuit such as an antenna trap presents a high impedance at resonance. It is high in ohms, but no higher than the parallel resistance itself.

> **Key Information:** At parallel resonance:
> - The impedance magnitude is approximately equal to the circuit's parallel resistance. {{< link id="E5A04" >}}
> - Circulating current within the LC components is at a maximum. {{< link id="E5A06" >}}
> - Current at the circuit's input is at a minimum. {{< link id="E5A07" >}}

![Two AC circuit diagrams. On the left, a source, resistor R, inductor L, and capacitor C form one series loop. Three equal arrows show the same clockwise current at the illustrated instant. On the right, a source connects across separate R, L, and C branches. Small input and resistor-current arrows point from the source into R. Much larger, equal arrows point up through L and down through C, and a curved clockwise arrow between L and C shows that current circulating around the loop they form. At resonance, the L and C currents cancel in the total drawn from the source, which still supplies the resistor current. These instantaneous arrows reverse as the AC cycle continues.](../../../images/s2-4-resonant-circuits.svg)
{.img-centered .img-xlarge .img-mobile-full caption="Series (left) and parallel (right) RLC circuits. At parallel resonance, a large current circulates between L and C, while the source supplies only the small loss current through R. Arrow sizes are qualitative; directions show one instant of AC operation."}

#### Finding the Resonant Frequency

The resonance formula comes from setting $X_L=X_C$. With **inductance $L$ in microhenries** and **capacitance $C$ in picofarads**, a convenient form gives resonant frequency $f_0$ **in megahertz**:

$$f_0=\frac{159.2}{\sqrt{LC}}.$$

The number 159.2 includes $2\pi$ and the unit conversions, so the values marked on the parts go straight in.

Take an RLC circuit with 22 Ω of resistance, 50 µH, and 40 pF. The resistance affects loss and the sharpness of resonance, but it does not enter this ideal LC frequency calculation. Work through three operations:

1. **Multiply:** $50\times40=2000$.
2. **Take the square root:** $\sqrt{2000}\approx44.72$.
3. **Divide:** $159.2/44.72\approx3.56\ \mathrm{MHz}$.

Change the parts to 33 Ω, 50 µH, and 10 pF. The resistance again drops out. The product is 500 and its square root is about 22.36. Dividing 159.2 by 22.36 gives 7.12 MHz. Reducing the capacitance to one quarter has doubled the frequency.

> **Key Information:**
> - With $R=22\ \Omega$, $L=50\ \mu\mathrm{H}$, and $C=40\ \mathrm{pF}$, resonance is at 3.56 MHz. {{< link id="E5A02" >}}
> - With $R=33\ \Omega$, $L=50\ \mu\mathrm{H}$, and $C=10\ \mathrm{pF}$, resonance is at 7.12 MHz. {{< link id="E5A10" >}}

You may also see the formula written as $f_0=1/(2\pi\sqrt{LC})$. That version uses **henries and farads** and gives **hertz**.

#### How Sharply It Resonates

Two circuits can tune to the same frequency yet respond differently on either side of it. The **quality factor**, $Q$, measures that sharpness by comparing energy stored with energy lost. A high-Q circuit loses a smaller fraction of its stored energy each cycle. Like a well-made bell that keeps ringing after one strike, it hangs on to its energy.

Where the resistance sits decides how to calculate Q. Series resistance carries the full circuit current, so less of it wastes less power; a series RLC model uses $Q=X/R$. Parallel resistance sits across the full voltage, so more of it draws less current and wastes less power; a parallel model turns the ratio over, $Q=R/X$. At resonance the two reactances are equal, so either one gives the same Q. In our earlier series example, $Q=100/10=10$, and each reactance had ten times the source voltage.

> **Key Information:**
> - For a parallel RLC resonant circuit, calculate Q by dividing resistance by the reactance of either the inductance or capacitance. {{< link id="E5A09" >}}
> - Increasing Q in a series resonant circuit increases internal voltages. {{< link id="E5A13" >}}

To put a frequency range to that sharpness, measure the **half-power bandwidth** between the response points on either side of resonance. At each point, power is half its resonant value, 3 dB below the peak. Bandwidth spans the whole interval, not the distance from the peak to one side.

![Two normalized resonant power-response curves peak at the same frequency f zero. The solid blue curve for Q of 100 is narrower than the dashed orange curve for Q of 50. A horizontal half-power line crosses the blue curve at f L and f H. A double-headed arrow between those frequencies marks the full bandwidth.](../../../images/s2-4-resonance-bandwidth.svg)
{.img-centered .img-xlarge .img-mobile-full caption="Higher Q gives a narrower response. Measure bandwidth between both half-power points."}

In the tuned-circuit model used here, bandwidth is the resonant frequency divided by Q:

$$\mathrm{BW}=\frac{f_0}{Q}.$$

Try a circuit tuned to 7.1 MHz with a Q of 150. First write the frequency as **7100 kHz**. Dividing $7100/150$ gives a bandwidth of 47.3 kHz. Starting in kilohertz makes the answer come out in kilohertz.

At 3.7 MHz with a Q of 118, use 3700 kHz: $3700/118\approx31.4\ \mathrm{kHz}$.

The same formula runs backward: $Q=f_0/\mathrm{BW}$. Use the same frequency units for both numbers. A response centered on 7100 kHz with a bandwidth of 47.3 kHz gives $7100/47.3\approx150$ for Q.

A sharper response is useful when selecting one frequency, but it also narrows the range a circuit can cover without retuning. An impedance-matching network, such as the one in an antenna tuner, is a tuned circuit too, and its Q sets how far you can change frequency before you lose the match.

> **Key Information:**
> - A circuit resonant at 7.1 MHz with Q of 150 has a half-power bandwidth of 47.3 kHz. {{< link id="E5A11" >}}
> - A circuit resonant at 3.7 MHz with Q of 118 has a half-power bandwidth of 31.4 kHz. {{< link id="E5A12" >}}
> - The bandwidth of a series-tuned circuit's frequency response can be used to determine its Q. {{< link id="E4B08" >}}
> - Increasing the Q of an impedance-matching circuit decreases its matching bandwidth. {{< link id="E5A05" >}}

Once the circuit is connected, its source and load draw energy from it too, lowering its Q and broadening its response.
