---
chapter: "1"
section: "1.5"
questions: ["G5B03", "G5B07", "G5B11", "G5B13", "G5B01", "G5B10", "G9C04", "G9A06", "G5B04", "G5B05", "G5B06", "G5B08", "G5B09", "G5B12", "G5B14"]
---

### Section 1.5: Power and Measurements

Having explored how impedance matching ensures efficient power transfer between components, we now need to understand how to measure and quantify this power. In radio systems, we need precise ways to express power levels, signal strengths, and the relationships between voltage, current, and impedance across different frequencies.

#### Power Fundamentals

At its most basic level, electrical power is the rate at which energy is transferred in a circuit:

$P = I \times E$

Where:
- $P$ is power in watts (W)
- $I$ is current in amperes (A)
- $E$ is voltage (**E**lectromotive force) in volts (V)

Building on Ohm's Law from Section 1.1, we can express power in three equivalent ways:

$$\begin{align*}
P &= I \times E\\
P &= \frac{E^2}{R}\\
P &= I^2 \times R\\
\end{align*}$$

These equations allow us to calculate power in any circuit when we know at least two of the following: voltage, current, or resistance.

Let's look at a basic power calculation example:

If we apply 400 VDC to an 800-ohm load, we can calculate the power: {{< link id="G5B03" >}}

$$\begin{align*}
I &= \frac{E}{R} = \frac{400V}{800\Omega} = 0.5A \\
P &= I \times E = 0.5A \times 400V = 200W
\end{align*}$$

#### AC Power and RMS Measurements

When dealing with alternating current, our power equations face a challenge: the voltage and current constantly change. If we simply used the average voltage in our calculations, we'd get zero since AC swings equally positive and negative. So how do we apply Ohm's Law and power formulas to AC circuits?

The answer is Root Mean Square (RMS) values. RMS is a special mathematical method that gives us an effective value for AC that works in our DC-based equations:

> **Key Information:** *The RMS value of an AC signal produces the same power dissipation in a resistor as a DC voltage of the same value.* {{< link id="G5B07" >}}

Why RMS and not just the average of the absolute values? It's because of how power works in resistive circuits. Power is proportional to voltage squared ($P = \frac{E^2}{R}$), not to voltage directly. The heating effect in a resistor—which is what actually matters in power calculations—depends on this squared relationship.

If we used the average of absolute values (which is about $0.637 \times E_{peak}$ for a sine wave), our power calculations would be incorrect. The RMS calculation precisely accounts for the non-linear relationship between voltage and power by:
1. Taking the square of each instantaneous value (the "Square" in RMS)
2. Finding the average (Mean) of those squared values
3. Taking the square Root of that average

For a sine wave, this works out to:

$E_{RMS} = E_{peak} \cdot \frac{1}{\sqrt{2}} \approx 0.707 \cdot E_{peak}$

This mathematical relationship is why we can use Ohm's Law with AC circuits—when we use RMS values, the power calculations give the true power. When you hear that household electricity is 120 volts, that's the RMS value, not the 170-volt peak.

The following table shows the relationships between different AC voltage measurements:

| Measure        | Relationship to RMS |
|-------------- |---------------------|
| RMS           | $E_{RMS}$  (reference) |
| Peak          | $$ \begin{align*} E_{peak} &= E_{RMS} \times \sqrt{2} \\ &\approx E_{RMS} \times 1.414 \end{align*} $$ |
| Peak-to-Peak  | $$ \begin{align*} E_{p-p} &= 2 \times E_{peak} \\ &= 2 \times E_{RMS} \times \sqrt{2} \\ &\approx E_{RMS} \times 2.828 \end{align*} $$ |

#### RF Power Measurements: PEP

While we're discussing values which change over time, let's look at RF power: When transmitting voice or other complex signals, the power output varies moment by moment, depending on what is being sent! This means we need a standard way to measure power for the purpose of ensuring compliance with rules and not damaging equipment. This is where Peak Envelope Power (PEP) comes in.

PEP is like having your power meter's needle stick at the highest value during transmission. If we graphed the power output of your transmitter over time, PEP would be the highest point on that graph. This makes sense because we need to know the maximum power that components will have to handle—not just the average—to prevent damage and stay within legal limits.

> **Key Information:** *For an unmodulated carrier, the ratio of PEP to average power is 1.00, meaning that the PEP and average power are the same.* {{< link id="G5B11" >}}

For a *continuous carrier with no modulation* (like a test tone or CW signal with the key down), *PEP equals the average power* because the power level remains constant. {{< link id="G5B13" >}} But with voice modulation, especially on SSB, the power output spikes during louder syllables. These momentary peaks might be several times higher than the average power level.

The mathematical relationship between RMS voltage and PEP for a sinusoidal RF waveform across a resistive load is:

$$PEP = \frac{E_{peak}^2}{2R}$$

When working with peak-to-peak voltage measurements, this becomes:

$$PEP = \frac{(\frac{E_{p-p}}{2})^2}{2R} = \frac{E_{p-p}^2}{8R}$$

#### Logarithmic Measurements: Decibels

Radio science frequently uses decibels (dB) because they simplify how we express large changes in power. Instead of saying a signal is "100 times stronger," we can say it's "20 dB stronger." This makes calculations easier and allows us to add gains and losses instead of multiplying and dividing.

> **Key Information:** *A change of approximately 3 dB represents a factor of two increase or decrease in power.* {{< link id="G5B01" >}}

> **Key Information:** *A loss of 1 dB represents a power loss of approximately 20.6 percent.* {{< link id="G5B10" >}}

Positive dB values represent power increases, while negative dB values represent decreases. Here are the most useful dB values to remember:

| dB | Power Ratio | Description |
|:--:|:-----------:|:-----------:|
| 1 dB | 1.26 | 26% increase |
| 2 dB | 1.58 | 58% increase |
| 3 dB | 2    | 2x power |
| -3 dB | 0.5 | $\frac{1}{2}$ power |
| 6 dB | 4    | 4x power |
| 9 dB | 8    | 8x power |
| 10 dB | 10  | 10x power |
| 20 dB | 100 | 100x power |
| 30 dB | 1000 | 1000x power |

**Note:** For power decreases (negative dB), use the reciprocal (1/x) of the ratio. To calculate percentage loss you'd use $(1 - \frac{1}{\text{Power Ratio}})$ For example:
* -3 dB: $(1 - \frac{1}{2}) = (1 - 0.5) = 0.5 = 50\%$
* -1 dB: $(1 - \frac{1}{1.26}) \approx (1 - 0.794) \approx 0.206 = 20.6\%$

#### Decibels in Radio Applications

The decibel's flexibility makes it ideal for several specialized radio measurements:

##### Antenna Gain Measurements
> **Key Information:** *Antenna gain expressed in dBi is 2.15 dB higher than the same gain expressed in dBd.* {{< link id="G9C04" >}}

Two common reference points for antenna gain are:
- **dBi**: Gain compared to an isotropic radiator (theoretical point source)
- **dBd**: Gain compared to a half-wave dipole

##### Feed Line Loss Measurements

Every transmission line has some power loss—energy that doesn't make it from your transmitter to your antenna (or vice versa). This loss occurs because:

1. Conductor resistance converts some energy to heat
2. Dielectric material (insulation) absorbs some energy
3. Some energy radiates from the line itself

These losses increase with frequency, which is why VHF/UHF operation often requires higher quality feed lines than HF.

> **Key Information:** *RF feed line loss is usually expressed in decibels per 100 feet.* {{< link id="G9A06" >}}

This standardized measurement helps you compare different cable types and calculate your system's total loss. For example, if RG-8X has a loss of 3.5 dB per 100 feet at 146 MHz, then a 50-foot run would have 1.75 dB loss—meaning about 33% of your power never reaches the antenna.

Feed line loss relates to the impedance concepts we discussed in Section 1.4. Higher-impedance feed lines typically have lower loss because they use less current for the same power level (recall that loss from conductor resistance increases with current squared). However, there are trade-offs between impedance matching considerations and practical installation factors.

#### Exam Questions

Below is a summary of the power calculation questions you might encounter on your General class exam. Since there will be at most one question on the exam from **G5B**, you will never see more than one of these questions on any given exam.

| **Question**                                             | **Equation**                    | **Answer** |
|----------------------------------------------------------|--------------------------------|------------|
| **G5B01**: dB change for 2x power increase/decrease      | $10 \log_{10}(2) \approx 3$ dB | 3 dB |
| **G5B03**: Power with 400 VDC and 800 ohms              | $P = \frac{E^2}{R}$           | $P = 200W$ |
| **G5B04**: Power with 12V and 0.2 amperes               | $P = I \times E$               | $P = 2.4W$ |
| **G5B05**: Power with 7mA and 1,250 ohms                | $P = I^2 \times R$            | $P = 61mW$ |
| **G5B06**: PEP with 200V peak-to-peak across 50 ohms    | $PEP = \frac{E_{p-p}^2}{8R}$  | $PEP = 100W$ |
| **G5B08**: Peak-to-peak voltage from 120V RMS           | $E_{p-p} = E_{RMS} \times 2.828$ | $E_{p-p} = 339.4V$ |
| **G5B09**: RMS voltage from 17V peak                     | $E_{RMS} = \frac{E_{peak}}{1.414}$ | $E_{RMS} = 12V$ |
| **G5B10**: Power loss from 1 dB                          | $1 - 10^{-0.1} \approx 0.206$ | 20.6% |
| **G5B11**: PEP to average ratio for unmodulated carrier  | $\frac{PEP}{P_{avg}} = 1$ | 1.00 |
| **G5B12**: RMS voltage with 1200W across 50 ohms        | $E_{RMS} = \sqrt{P \times R}$ | $E_{RMS} = 245V$ |
| **G5B13**: PEP of unmodulated carrier with 1060W average | PEP = Average Power (for unmodulated carrier) | $PEP = 1060W$ |
| **G5B14**: PEP with 500V peak-to-peak across 50 ohms    | $PEP = \frac{E_{p-p}^2}{8R}$  | $PEP = 625W$ |

While it is ideal to learn the equations and relationships, there are few enough of these that you can get away with memorizing them if you need to. Just remember to come back to this chapter when you need to understand it better!

#### Moving Forward

With these power and measurement concepts, you now have the tools to quantify and analyze the behavior of radio circuits. These principles will serve as the foundation for evaluating transmitter performance, understanding receiver sensitivity, and optimizing antenna systems as we continue through the book. In the next chapter, we'll build on this knowledge as we explore the components that make up amateur radio circuits.
