---
slug: "section1.2"
questions: ["T5A12", "T5A01", "T5A03", "T5A05", "T5A04", "T5A02", "T5A10", "T5B09", "T5B10", "T5B11", "T5B01", "T5B02", "T5B03", "T5B04", "T5B05", "T5B06", "T5B07", "T5B08", "T5B12", "T5B13", "T5C13", "T5A09", "T5A11", "T5C01", "T5C02", "T5C03", "T5C04", "T5C05", "T5C12", "T6D11", "T5A06"]
   
---

### Section 1.2: Electrical Units and Quantities

To understand how our radios work, we need to familiarize ourselves with some basic electrical quantities. Let's start with the "big three": voltage, current, and resistance.

#### Voltage, Current, and Resistance

While we often compare electricity to water flowing through pipes, this analogy isn't perfect. Let's look at what's really happening:

- **Voltage** ($E$ or $V$) is like electrical "pressure" - *it's the force that creates electric fields in a circuit*, and we measure it in **volts (V)**.  
  - Voltage is also sometimes called **electromotive force (EMF)**, because it creates the conditions that allow current to flow.
  - Voltage is always measured *between two points*. When we say a car battery is 12V, we mean there's a **12-volt difference** between its positive and negative terminals.

- **Current** ($I$) is *the rate at which electric charge flows through a circuit*, measured in **amperes (A)**. Here's what's interesting:
  - While individual electrons move quite slowly through a conductor (about half an inch per minute!), the *effect* of current is nearly instantaneous - like a long tube filled with marbles. Push one in at one end, and one pops out the other end almost immediately.
  - In amateur radio, you might deal with:
    - **Milliamps (mA)** in low-power circuits
    - **A few amps** powering a mobile transceiver
    - **15-20 amps** for a high-power HF amplifier

- **Resistance** ($R$) is *how much a material opposes current flow by converting electrical energy into heat*, measured in **ohms ($\Omega$)**.  
  - Think of resistance as a way of controlling how electrical energy is used in a circuit:
    - Low resistance ensures *efficient antenna connections*
    - High resistance in dummy loads *safely converts transmitter power into heat*
    - Specific resistances in filter circuits *shape frequency response*

These three quantities are fundamentally linked as explained by **Ohm's Law**, which we'll cover in **Section 1.3**.

#### Frequency {#12frequency}

In amateur radio, we often deal with **alternating current (AC)**, which constantly changes direction. The number of times AC completes a full cycle per second is called **frequency**, measured in **Hertz (Hz)**.  

- Household power alternates at **60 Hz** (60 cycles per second).
- AM radio stations broadcast around **1000 kHz** (1,000,000 cycles per second).
- FM radio and many ham bands use frequencies in the **MHz range** (millions of cycles per second).

Understanding *frequency* is crucial in amateur radio because it determines *which bands you can use* and *how far your signals can travel*.

#### Power

Power is *the rate at which electrical energy is used or generated in a circuit*. It’s measured in **watts (W)** and is calculated using:

$$P = I \times V$$

In amateur radio, power is important because:

- **More power = Greater transmission range.** A stronger signal reaches farther.
- **More power = More heat.** High-power radios need proper cooling.
- **More power = Higher energy demands.** Your power supply must handle your radio’s needs.

#### Decibels

Instead of always talking in watts, hams often use **decibels (dB)** to express power changes. Decibels make it easy to compare signal strengths:

- **+3 dB** means power *doubles*.
- **-3 dB** means power *is cut in half*.
- **+10 dB** means power *increases by ten times*.

Some real-world examples:
- A power increase from **5W to 10W** is a **+3 dB gain**.
- A decrease from **12W to 3W** is a **-6 dB loss**.
- Going from **20W to 200W**? That’s a **+10 dB boost**.

#### Metric Prefixes and Electrical Units

In amateur radio, we often deal with very large or very small numbers. Instead of writing out all the zeros, we use **metric prefixes**:

| Prefix | Symbol | Multiplier | Example |
|--------|--------|------------|---------|
| pico   | p      | $10^{-12}$ | 1 pF = 0.000000000001 F |
| nano   | n      | $10^{-9}$  | 1 nF = 0.000000001 F |
| micro  | μ      | $10^{-6}$  | 1 μF = 0.000001 F |
| milli  | m      | $10^{-3}$  | 1 mV = 0.001 V |
| (none) | -      | $10^0$     | 1 A = 1 A |
| kilo   | k      | $10^3$     | 1 kHz = 1,000 Hz |
| mega   | M      | $10^6$     | 1 MHz = 1,000,000 Hz |
| giga   | G      | $10^9$     | 1 GHz = 1,000,000,000 Hz |

Here are some common conversions that may appear on the exam:

| Original               | Equivalent             | Question ID |
|------------------------|------------------------|-------------|
| 1.5 amperes            | 1500 milliamperes      | T5B01       |
| 1500 kHz               | 1.5 MHz                | T5B02       |
| 1 kilovolt             | 1000 volts             | T5B03       |
| 1 microvolt            | 0.000001 volts         | T5B04       |
| 500 milliwatts         | 0.5 watts              | T5B05       |
| 3000 milliamperes      | 3 amperes              | T5B06       |
| 3.525 MHz              | 3525 kHz               | T5B07       |
| 1,000,000 picofarads   | 1 microfarad           | T5B08       |
| 28400 kHz              | 28.400 MHz             | T5B12       |
| 2425 MHz               | 2.425 GHz              | T5B13       |

#### AC and DC

Electricity comes in two types:

- **Direct Current (DC)** flows *in one direction*, like from a **battery** or power supply. Most radios run on **12V DC**.
- **Alternating Current (AC)** *constantly reverses direction*, like **household power**.

Most ham gear runs on **DC power**, but **radio signals themselves are AC**—they alternate at **radio frequencies**.

#### Impedance

> **Key Information:** *Impedance is the opposition to AC current flow* and, like resistance, it’s measured in *ohms ($\Omega$)*.

In a **DC circuit**, resistance is simple—it just opposes down the flow of electricity, like friction in a water pipe. But in an **AC circuit**, impedance is more complex because it also includes reactance, which depends on frequency.

- **Inductive reactance** makes it harder for AC to flow as frequency increases, which is why inductors are used in filters and tuning circuits.
- **Capacitive reactance** does the opposite—capacitors allow more AC to flow as frequency increases, making them useful for blocking DC while letting AC through.

Taken together, resistance, capacitive reactance, and inductive reactance determine a circuit's opposition to alternating current. This total opposition is called **impedance**, measured in ohms.

Since **reactance** depends on frequency, impedance changes at different frequencies. This is why antennas and feedlines must be designed for the correct impedance—otherwise, power gets reflected instead of radiating efficiently.

Your radio is designed to work best when connected to a **50-ohm antenna system**. If the impedance doesn’t match:
- Some of your signal gets **reflected back** instead of being transmitted.
- Your signal might not travel as far.
- Your radio could even **reduce power or overheat** to protect itself.

---

### **Wrapping It All Up**

Understanding these electrical quantities will help you make sense of your radio gear and pass the exam. As you continue your ham radio journey, these ideas will come up again and again, so keep this knowledge handy!  
