---
chapter: "2"
section: "2.1"
questions: ["E8A03", "E5B09", "E5B10", "E5B01", "E5B04", "E5D09", "E5D03", "E5D12", "E5D11"]
status: generated1
draft: true
---

### Section 2.1: Phase and Stored Energy

Watch voltage and current on the same screen and you may see two smooth sine waves whose peaks arrive at different times. Neither trace is misbehaving. That timing difference explains much of what capacitors and inductors do in a radio. We need to follow both the size of a signal and where it is in its cycle.

#### A Waveform Is a History

A voltage pushes charge through a circuit; current is the rate at which charge flows. We measure voltage in volts, current in amperes, and resistance in ohms. *On a waveform graph, the horizontal axis usually shows time and the vertical axis shows voltage or current.* A taller trace means a greater amplitude, not a higher frequency. Frequency, measured in hertz, tells us how many complete cycles occur each second.

> **Key Information:** A signal in the time domain shows its amplitude at different times. {{< link id="E8A03" >}}

One complete cycle spans 360 degrees of *phase*. A quarter-cycle spans 90 degrees. If one wave reaches each corresponding peak or zero crossing before another wave, it *leads*; the later wave *lags*. Follow the graph from left to right: the wave that gets to a matching peak first is the one that leads. A taller wave does not win that race.

#### Where the Energy Goes

A resistor turns electrical energy into heat. Its current rises and falls with its voltage. *A capacitor instead stores energy in an electric field between its plates.* Current must move charge onto those plates to change the voltage. With a sine-wave voltage, current is greatest while voltage is changing fastest; current is zero at the voltage peak, where the voltage momentarily stops changing.

*An inductor stores energy in a magnetic field around its winding.* Changing its current requires voltage. The voltage reaches its peak while the current is changing fastest, before the current reaches its own peak.

> **Key Information:**
> - In an ideal capacitor, AC current leads voltage by 90 degrees. {{< link id="E5B09" >}}
> - In an ideal inductor, AC voltage leads current by 90 degrees. {{< link id="E5B10" >}}

The graphs below mark progress through one cycle in degrees. A quarter-cycle is 90 degrees, so compare where the matching peaks occur along each graph.

![Two graphs compare normalized voltage and current over one cycle. In the capacitor graph, the current peak occurs a quarter-cycle before the voltage peak. In the inductor graph, the voltage peak occurs a quarter-cycle before the current peak. Solid blue represents voltage and dashed orange represents current; their drawn heights are normalized, so only timing is compared.](../../../images/s2-1-phase.svg)
{.img-centered .img-xlarge .img-mobile-full caption="Normalized traces: a quarter-cycle is 90°. Compare the timing of matching peaks, not the heights of voltage and current."}

These are steady sine-wave relationships for ideal components. Their opposition to AC through energy storage is called *reactance*, measured in ohms. *Unlike resistance, ideal reactance returns the energy it receives.* Real coils and capacitors also have losses, which we will account for later in this chapter.

#### Charging Takes Time

Connect a capacitor to a DC source through a resistor and it charges quickly at first. As capacitor voltage rises toward the source voltage, less voltage remains across the resistor. That reduces current, so each further increase takes longer. The result is a curved approach to the final voltage.

How long does that take? The resistor and capacitor set the pace together. Multiply resistance by capacitance to find the circuit's *time constant*:

$$\tau=RC$$

The symbol $\tau$ is the Greek letter tau. Here $R$ is resistance in ohms and $C$ is capacitance in farads; the result is seconds. One time constant is a useful checkpoint, not the time needed to finish charging.

> **Key Information:** One time constant is the time needed for a capacitor to charge to 63.2% of the applied voltage, or discharge to 36.8% of its initial voltage. {{< link id="E5B01" >}}

For example, a capacitor charging from zero toward 10 V reaches 6.32 V after one time constant. It still has 3.68 V to go. During the next interval, it gains 63.2% of *that smaller gap*: about 2.33 V, bringing it to 8.65 V. The charging slows as the gap shrinks.

Discharging follows the reverse pattern. A capacitor starting at 10 V falls to 3.68 V after one time constant, then to about 1.35 V after two. *Each interval leaves 36.8% of the voltage present at its start.*

![A blue charging curve rises from zero toward 100 percent, while a dashed orange discharging curve falls from 100 percent toward zero. At one time constant, charging has reached 63.2 percent and discharging has fallen to 36.8 percent. Both curves become less steep as time passes.](../../../images/s2-1-rc-time.svg)
{.img-centered .img-xlarge .img-mobile-full caption="The time constant stays the same; the voltage change during each interval gets smaller."}

The exam's charging-time problem combines two resistors and two capacitors. Before multiplying, treat each parallel pair as one component:

- Two equal resistors in parallel have half the resistance of one: two 1 MΩ resistors give **0.5 MΩ**.
- Parallel capacitors add: two 220 µF capacitors give **440 µF**.

A megohm is a million ohms ($10^6$ Ω), and a microfarad is a millionth of a farad ($10^{-6}$ F). Those factors cancel when we multiply, so we can use the numbers as written:

$$\tau=(0.5\ \mathrm{M}\Omega)(440\ \mu\mathrm{F})=220\ \mathrm{s}.$$

> **Key Information:** Two 220-microfarad capacitors and two 1-megohm resistors, all in parallel, have a time constant of 220 seconds. {{< link id="E5B04" >}}

That's a little under four minutes for one time constant. It describes charging or discharging *through the resistance*. Connecting an ideal voltage source directly across the capacitor would bypass that timing behavior.

#### Real and Reactive Power

Stored energy does not stay stored throughout an AC cycle. The capacitor or inductor returns it to the rest of the circuit. During part of the cycle, energy enters the component; during another part, it leaves. In an ideal component, those amounts balance.

> **Key Information:**
> - In ideal inductors and capacitors, energy is stored in magnetic or electric fields, but power is not dissipated. {{< link id="E5D09" >}}
> - For reactive power, current and voltage are 90 degrees out of phase. {{< link id="E5D03" >}}
> - Reactive power is called wattless, nonproductive power. {{< link id="E5D12" >}}

“Nonproductive” is a rather unflattering name for something a radio depends on. *It means no net energy is consumed by the ideal reactance.* Returning stored energy is exactly what we need for tuning and filtering. Reactive power is measured in volt-amperes reactive, or VAR, while real power is measured in watts.

For AC power calculations, we use *RMS* (root mean square) voltage and current unless told otherwise. An RMS value gives the same heating in a resistor as that value of DC. For a sine wave, divide the peak value by $\sqrt{2}$, or multiply by about 0.707, to get RMS.

Suppose 1 A RMS flows through a 100 Ω resistor and an ideal 100 Ω inductive reactance in series. Both carry the same current, but only the resistor turns energy into heat. To find that power, multiply the current by itself, then by the **resistance**:

$$P=I^2R=(1\ \mathrm{A})^2(100\ \Omega)=100\ \mathrm{W}.$$

> **Key Information:** A 100-ohm resistor in series with 100 ohms of inductive reactance consumes 100 watts of real power when the RMS current is 1 ampere. {{< link id="E5D11" >}}

The inductor still affects how much voltage the source must supply. Finding that voltage requires a way to keep resistance and reactance separate while combining their effects.
