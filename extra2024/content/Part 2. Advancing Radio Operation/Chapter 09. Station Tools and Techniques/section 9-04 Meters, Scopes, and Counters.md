---
chapter: "9"
section: "9.4"
questions: ["E4B02", "E8A05", "E4A09", "E4A04", "E4A10", "E4A01", "E4A06", "E4A05", "E4B01"]
status: "generated1"
draft: true
---

### Section 9.4: Meters, Scopes, and Counters

A voltage reading that changes with the meter range may reveal instrument loading rather than a faulty part. Input resistance is one source of measurement error; probe behavior and timing accuracy introduce others. We need to separate changes in the circuit from changes caused by the test setup.

#### A Meter Draws Current Too

To estimate how much an analog voltmeter loads a circuit, find its input resistance on the selected range. Its *ohms-per-volt* rating provides the conversion: *multiply the rating by the range's full-scale voltage, not by the needle reading*.

> **Key Information:** A voltmeter's full-scale reading multiplied by its ohms-per-volt rating gives its input impedance. {{< link id="E4B02" >}}

A 20,000 Ω/V meter on its 10 V range presents $20{,}000\times10=200{,}000$ Ω, or 200 kΩ. On the 50 V range, it presents 1 MΩ. The lower range draws more current from the circuit. Across a high-resistance source, that extra load can pull the voltage down enough to change the answer you were trying to measure.

Waveform shape matters too. An average-responding AC meter may be scaled to show the correct RMS value for a sine wave. A distorted waveform breaks that assumption. A true-RMS meter calculates the heating-equivalent value from the waveform itself.

> **Key Information:** A true-RMS calculating meter measures RMS voltage for both sinusoidal and non-sinusoidal signals. {{< link id="E8A05" >}}

Its frequency range and allowed peak levels still apply. “True RMS” does not mean “any signal at any frequency.”

#### Make the Probe Behave

Before trusting a waveform's shape, check that the probe itself is not rounding or exaggerating its transitions. A passive probe's compensation must match the scope input. *Connect it to the square-wave reference and adjust for flat horizontal portions.* Too little compensation rounds the rising edge; too much produces an overshoot before the top settles.

![Three oscilloscope traces show the same square wave with too little, correct, and too much probe compensation. The undercompensated trace curves up slowly, the compensated trace has a flat top, and the overcompensated trace overshoots before settling.](../../../images/s9-4-probe-compensation.svg)
{.img-centered .img-xlarge caption="Probe compensation: the square-wave reference should have flat horizontal portions. Rounded edges and overshoot reveal a probe adjustment error."}

> **Key Information:**
> - Compensate an oscilloscope probe by displaying a square wave and adjusting the probe until the horizontal portions are as nearly flat as possible. {{< link id="E4A04" >}}
> - Minimize the length of the probe's ground connection. {{< link id="E4A09" >}}

A long ground lead adds inductance and forms a pickup loop. It can add ringing that belongs to the probe setup rather than the circuit. An ordinary bench scope's probe ground usually connects to protective earth. It is not a freely floating test lead.

Suppose you are checking the low-voltage output of a linear power supply. AC coupling can make its small ripple easier to see. *For a steady display, synchronize the trace to the repeating cause of that ripple: the AC power line.*

> **Key Information:** Line trigger mode is most effective for measuring a linear power supply's output ripple. {{< link id="E4A10" >}}

#### A Plausible but False Trace

The analog-to-digital converter takes samples at separate instants. *If they are too far apart, a rapidly changing input can appear to change slowly. This is the aliasing introduced in Chapter 5, now showing up as a misleading measurement.*

> **Key Information:**
> - The analog-to-digital converter's sampling rate limits the highest frequency that a digital oscilloscope can display accurately. {{< link id="E4A01" >}}
> - Aliasing can display a false, jittery low-frequency version of the waveform. {{< link id="E4A06" >}}

A trace that changes unexpectedly when you change the time scale deserves suspicion. Check the actual sample rate as well as the scope's analog bandwidth. Capturing the details of a pulse requires sampling its fast edges, not only its repetition rate.

#### Counting Against a Clock

A counter may show many digits and still report the wrong frequency if its clock is inaccurate. It compares input cycles with its *time base*, an internal timing reference. A fast or slow reference shifts the reported frequency, so *time-base accuracy is the chief limit on the counter's accuracy*. More display digits cannot correct that error.

> **Key Information:** Time base accuracy is the factor that most affects a frequency counter's accuracy. {{< link id="E4B01" >}}

The input frequency may also exceed the counter's range. *A prescaler divides the frequency before the counter measures it.* With a divide-by-10 prescaler, a 450 MHz signal reaches the counter as 45 MHz; the final result must include the factor of ten.

> **Key Information:** A prescaler reduces the signal frequency to within a frequency counter's operating range. {{< link id="E4A05" >}}

That extends the frequency range. It does not improve the accuracy of the clock used to count.
