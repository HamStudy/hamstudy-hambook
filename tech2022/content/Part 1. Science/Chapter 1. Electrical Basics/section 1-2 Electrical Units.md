---
chapter: "1"
section: "1.2"
questions: ["T5A05", "T5A01", "T5A03", "T5A04", "T5A12", "T5A06", "T5A10", "T5A02", "T5B09", "T5B11", "T5B10", "T5A09", "T5A11", "T5C12", "T5C05", "T5C01", "T5C02", "T5C03", "T5C04", "T6D11", "T5C13", "T5C07", "T5B01", "T5B02", "T5B03", "T5B04", "T5B05", "T5B06", "T5B07", "T5B08", "T5B12", "T5B13"]
---

### Section 1.2: Electrical Units and Quantities

To understand how our radios work, we need to familiarize ourselves with some basic electrical quantities. Let's start with the "big three": voltage, current, and resistance.

#### Voltage, Current, and Resistance

![Remake of a classic illustration showing three figures – voltage is pushing current, Resistance is squeezing a pipe to resist current flowing, current is being pushed through the narrow pipe](../../../images/illus/ohmslawpigs.svg)
{.img-pgcap .float-right}

While we often compare electricity to water flowing through pipes, this analogy isn't perfect. Let's look at what's really happening:

**Voltage** ($E$ or $V$) is like electrical "pressure" - *it's the force that causes electron flow in a circuit*, and we measure it in **volts (V)**.  {{< link id="T5A05" >}}
- Voltage is also sometimes called **electromotive force (EMF)**, because it creates the conditions that allow current to flow.
- Voltage is always measured *between two points*. When we say a car battery is 12V, we mean there's a **12-volt difference** between its positive and negative terminals.

**Current** ($I$) is *the flow of electrons in an electric circuit*, measured in **amperes (A)**. {{< link id="T5A01" >}} {{< link id="T5A03" >}} Here's what's interesting:

While individual electrons move quite slowly through a conductor (about half an inch per minute!), the movement of electrical charges is nearly instantaneous - like a long tube filled with marbles. Push one in at one end, and one pops out the other end almost immediately.

In amateur radio, you might deal with:
- **Milliamps (mA)** in low-power circuits
- **A few amps** powering a mobile transceiver
- **15-20 amps** for a high-power HF amplifier

**Resistance** ($R$) is *how much a material opposes current flow by converting electrical energy into heat*, measured in **ohms ($\Omega$)**.  {{< link id="T5A04" >}}
Think of resistance as a fundamental property that affects how electrical energy moves through a circuit:
- *Conductors* like copper wire have *very low resistance*, allowing current to flow easily
- *Insulators* like rubber or glass have *very high resistance*, blocking current flow
- *Resistors* are components with specific, controlled resistance values used to:
  - Limit current in LED circuits to prevent burnout
  - Divide voltage in measurement circuits
  - Convert electrical energy to heat in applications like dummy loads

These three quantities are fundamentally linked as explained by **Ohm's Law**, which we'll cover in **Section 1.3**.

#### Voltage Drop

When current flows through a resistive component or wire, some voltage is "used up" in the process. This decrease in voltage is called **voltage drop**.

It's similar to water pressure decreasing as water flows through a pipe - the longer or narrower the pipe, the more pressure is lost. In electrical terms, when current flows through resistance, voltage decreases along the path.

This concept is important in amateur radio because:
- Long power cables to your radio can result in lower voltage at the radio than at the power source
- Higher current draw (like during transmission) increases voltage drop

This is why most mobile ham installations use thick, short power cables - to minimize voltage drop when operating equipment that draws significant current. This is a direct application of how resistance affects current and voltage in real-world amateur radio setups.

#### Frequency {#12frequency}

Now that we understand these basic DC electrical concepts, let's look at alternating current and frequency.

In amateur radio, we often deal with **alternating current (AC)**, which smoothly changes direction in a sine wave pattern, unlike DC which flows constantly in one direction.

![Diagram showing 2 cycles of 120VAC voltage at 60Hz](../../../images/sine_wave_two_cycles.svg)
{.img-centered .img-full}

AC occurs naturally when a magnet rotates near a wire. As the magnet's north pole approaches the wire, current flows one way. When the south pole approaches, current flows the opposite way. This continuous rotation creates the smooth sine wave pattern shown in the diagram. This is the basic principle behind generators that produce the electricity powering our homes and the alternating currents in our radio circuits.

The diagram shows two complete **cycles** of AC - each starting at zero, rising to a positive peak, falling through zero to a negative peak, then returning to zero. *The number of these cycles completed per second is called frequency, measured in Hertz (Hz)*. {{< link id="T5A12" >}} {{< link id="T5A06" >}}

Some examples:
- Household power: **60 Hz** (60 cycles per second)
- AM radio stations: around **1000 kHz** (1,000,000 cycles per second)
- FM radio and many ham bands: **MHz range** (millions of cycles per second)

Understanding *frequency* is crucial in amateur radio because it determines *which bands you can use* and *how far your signals can travel*.

#### Power

Power is *the rate at which electrical energy is used or generated in a circuit*. {{< link id="T5A10" >}} It's measured in **watts (W)** {{< link id="T5A02" >}} and is calculated using the **Power Law**, which we'll cover in **Section 1.3**.

In amateur radio, power is important because:

- **More power = Greater transmission range.** A stronger signal reaches farther.
- **More power = More heat.** High-power radios need proper cooling.
- **More power = Higher energy demands.** Your power supply must handle your radio's needs.

#### Decibels

Instead of always talking in watts, hams often use **decibels (dB)** to express power changes. The decibel is a *logarithmic unit* that makes it much easier to express and work with very large or very small ratios. Instead of multiplying power levels, we can simply add or subtract dB values, which is particularly useful in radio systems where signals might be amplified and attenuated multiple times.

Here's what decibels mean in practice:

- **+3 dB** means power *doubles*. {{< link id="T5B09" >}}
- **-3 dB** means power *is cut in half*.
- **-6 dB** means power *is cut in half twice (divided by four)*. 
- **+10 dB** means power *increases by ten times*. {{< link id="T5B11" >}}
- **+20 dB** means power increases by one hundred times.

Some real-world examples:
- A power increase from **5W to 10W** is a **+3 dB gain**.
- A decrease from **12W to 3W** is a **-6 dB loss**. {{< link id="T5B10" >}}
- Going from **20W to 200W**? That's a **+10 dB boost**.

The beauty of the decibel scale is that it compresses large numbers into a more manageable range, making it easier to understand and discuss signal gains and losses throughout a radio system.

#### AC and DC

Electricity comes in two types:

- **Direct Current (DC)** flows *in one direction*, like from a **battery** or power supply. Most radios run on **12V DC**.
- **Alternating Current (AC)** *constantly reverses direction, alternating between positive and negative directions*, like **household power**. {{< link id="T5A09" >}}

Most ham gear runs on **DC power**, but **radio signals themselves are AC**—they alternate at **radio frequencies**. Radio frequency (RF) signals are simply AC signals at very high frequencies used for wireless communication.

*Resistance opposes all types of current flow*, including direct current, alternating current, and RF current. {{< link id="T5A11" >}}

#### Impedance

> **Key Information:** *Impedance is the opposition to AC current flow* {{< link id="T5C12" >}} and, like resistance, it's measured in *ohms ($\Omega$)*. {{< link id="T5C05" >}}

In a **DC circuit**, resistance simply opposes the flow of electricity. But in an **AC circuit**, the story gets more complex.

*Capacitance describes the ability to store energy in an electric field* {{< link id="T5C01" >}} and is measured in *farads (F)*. {{< link id="T5C02" >}}

*Inductance describes the ability to store energy in a magnetic field* {{< link id="T5C03" >}} and is measured in *henrys (H)*. {{< link id="T5C04" >}}

In electrical circuits that include capacitors and/or inductors, the effect these components have on alternating current will vary with frequency. This frequency-dependent opposition to current flow is called **reactance**.

- **Inductive reactance** increases as frequency increases
- **Capacitive reactance** decreases as frequency increases

**Impedance** combines both resistance and reactance, giving us the total opposition to AC current flow in a circuit.

A *resonant circuit consists of an inductor and a capacitor connected either in series (one after another) or parallel (side by side)*. {{< link id="T6D11" >}} At a specific frequency, the inductive and capacitive reactances are equal in magnitude but opposite in effect, effectively canceling each other out. This creates an electrical balance that allows signals at that frequency to pass easily (in series) or be blocked (in parallel). That frequency is called the **resonant frequency**, and this phenomenon is known as **resonance**.

Amateur radio equipment is typically designed to work with specific impedance values. For example, most transceivers are designed to connect to a **50-ohm** system. When impedances aren't properly matched:

- Power transfer becomes less efficient
- Some energy may be reflected back toward the source
- Equipment may need to reduce power output to protect itself

These principles apply to many parts of your radio system, including antennas, which exhibit properties of resistance, capacitance, and inductance.

#### Metric Prefixes and Electrical Units

In amateur radio, we often deal with very large or very small numbers. Instead of writing out all the zeros, we use **metric prefixes**:

| Prefix | Symbol | Multiplier | Example |
|:------:|:------:|:----------:|:-------:|
| pico   | p      | $10^{-12}$ | 1 pF = 0.000000000001 F |
| nano   | n      | $10^{-9}$  | 1 nF = 0.000000001 F |
| micro  | μ      | $10^{-6}$  | 1 μF = 0.000001 F |
| milli  | m      | $10^{-3}$  | 1 mV = 0.001 V |
| (none) | -      | $10^0$     | 1 A = 1 A |
| kilo   | k      | $10^3$     | 1 kHz = 1,000 Hz |
| mega   | M      | $10^6$     | 1 MHz = 1,000,000 Hz |
| giga   | G      | $10^9$     | 1 GHz = 1,000,000,000 Hz |

> **Key Information:**
> * The abbreviation *kHz* stands for "kilohertz".{{< link id="T5C13" >}}
> * The abbreviation *MHz* stands for "megahertz".{{< link id="T5C07" >}}

Note: The F (farad) and H (henry) units refer to capacitance and inductance as discussed above, which we'll explore in more detail in Section 2.1.

Here are some common conversions that may appear on the exam:

{{< link id="T5B01" >}} {{< link id="T5B02" >}} {{< link id="T5B03" >}} {{< link id="T5B04" >}} {{< link id="T5B05" >}} {{< link id="T5B06" >}} {{< link id="T5B07" >}} {{< link id="T5B08" >}} {{< link id="T5B12" >}} {{< link id="T5B13" >}}

| Original               | Equivalent             | Question ID |
|------------------------|------------------------|:-----------:|
| 1.5 amperes            | 1500 milliamperes      | {{< qid >}}T5B01{{< /qid >}}       |
| 1500 kHz               | 1.5 MHz                | {{< qid >}}T5B02{{< /qid >}}       |
| 1 kilovolt             | 1000 volts             | {{< qid >}}T5B03{{< /qid >}}       |
| 1 microvolt            | 0.000001 volts         | {{< qid >}}T5B04{{< /qid >}}       |
| 500 milliwatts         | 0.5 watts              | {{< qid >}}T5B05{{< /qid >}}       |
| 3000 milliamperes      | 3 amperes              | {{< qid >}}T5B06{{< /qid >}}       |
| 3.525 MHz              | 3525 kHz               | {{< qid >}}T5B07{{< /qid >}}       |
| 1,000,000 picofarads   | 1 microfarad           | {{< qid >}}T5B08{{< /qid >}}       |
| 28400 kHz              | 28.400 MHz             | {{< qid >}}T5B12{{< /qid >}}       |
| 2425 MHz               | 2.425 GHz              | {{< qid >}}T5B13{{< /qid >}}       |
| 

All of the conversions in this table are worth memorizing for the exam!

---

#### **Wrapping It All Up**

Understanding these electrical quantities will help you make sense of your radio gear and pass the exam. As you continue your ham radio journey, these ideas will come up again and again, so keep this knowledge handy!