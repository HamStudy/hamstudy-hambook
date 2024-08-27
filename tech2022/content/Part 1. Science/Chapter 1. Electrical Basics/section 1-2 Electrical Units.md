---
questions: [
   "T5A12", "T5A01", "T5A03", "T5A02", "T5A06", "T5A10", "T5B01", "T5C12", "T6D11", "T5A05", "T5B02", "T5B03", "T5B04", "T5B05", "T5B06", "T5B07", "T5B08", "T5B09", "T5B10", "T5B11", "T5B12", "T5B13", "T5C01", "T5C02", "T5C03", "T5C04", "T5C05", "T5A04", "T5A09", "T5A11", "T5C13" ]
---


### Section 1.2: Electrical Units and Quantities

To understand how our radios work, we need to familiarize ourselves with some basic electrical quantities. Let's start with the "big three": voltage, current, and resistance.

#### Voltage, Current, and Resistance

Imagine electricity as water flowing through a pipe system. This analogy, while not perfect, can help us visualize these abstract concepts.

**Voltage** is like the water pressure in the pipes. It's the force that pushes electrons through a circuit. We measure voltage in volts (V). In your ham shack, you might encounter various voltages:

- 12V DC from a car battery or power supply
- 120V AC from a wall outlet
- Thousands of volts in a tube amplifier's high voltage supply

Voltage is always measured between two points. When we say a car battery is 12V, we mean there's a 12V difference between its positive and negative terminals.

**Current** is like the amount of water flowing through the pipes. It's the actual flow of electrons through a conductor. We measure current in amperes, or amps (A). In amateur radio, you might deal with:

- Milliamps (mA) in low-power circuits
- A few amps powering a mobile transceiver
- 15-20 amps for a high-power HF amplifier

**Resistance** is like the friction in the pipes that opposes the flow of water. In electrical terms, it's the opposition to the flow of current. We measure resistance in ohms ($\Omega$). Resistance is crucial in radio circuits:

- Low resistance in antenna connections for efficient signal transfer
- High resistance in dummy loads to safely absorb transmitter power
- Specific resistances in filter circuits to shape frequency response

These three quantities are intimately related through Ohm's Law, which is explained in more detail in Section 1.3.

#### Power

Power is the rate at which electrical energy is used or generated in a circuit. In simpler terms, it’s a measure of how much work is being done by the electricity in your circuit. We measure power in watts (W), but if Voltage is the pressure in the pipe and Current is the rate of flow, Power is a measure of the two together – rate of flow at a given pressure, or to remove the metaphor it's current draw at a given voltage.

We'll discuss this more in the next section (Section 1.3) but Power is defined as the product of voltage and current:
$$\text{Power Law}: P = I \times V$$

In amateur radio, power is crucial because it directly influences:

- **Transmission Range**: The more power your transmitter outputs, the further your signal can travel.
- **Heat Generation**: More power means more heat, which needs to be managed to prevent damage to your equipment.
- **Power Supply Requirements**: You need to ensure your power supply can provide enough power to your radio and accessories.

Understanding these four basic quantities will help you make sense of equipment specifications, troubleshoot problems, and ensure you're operating your station safely and efficiently.

##### Decibels

In radio (or audio for that matter), we often use decibels (dB) to express ratios of power. Decibels are logarithmic units, which makes them useful for expressing large ratios in manageable numbers.

Some key decibel values to remember:

- 3 dB represents a doubling or halving of power
- 10 dB is a tenfold increase or decrease in power
- Positive numbers means gain, negative means loss, so:
  - +3dB is a doubling
  - -3dB is a halving

Real-world example: If you upgrade your antenna and get a 3 dB gain, it's equivalent to doubling your transmitter power! This is why many hams say, "If you can't raise your power, raise your antenna."

Understanding these concepts of AC, DC, and power will help you make informed decisions about your station setup, interpret equipment specifications, and troubleshoot issues effectively.

Here are the specific examples you might need to answer you take your exam:

- Power increase from 5 watts to 10 watts: **3 dB**
- Power decrease from 12 watts to 3 watts: **-6 dB**
- Power increase from 20 watts to 200 watts: **10 dB**

#### Metric Prefixes and Electrical Units

In amateur radio and electronics, we often deal with very large or very small quantities. To make these numbers more manageable, we use metric prefixes. Here's a table showing the most common prefixes you'll encounter:

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

Here's how these prefixes apply to common electrical units:

1. **Frequency (Hertz, Hz)**: You'll often see kHz, MHz, and GHz.
   Example: 146.520 MHz = 146,520,000 Hz

2. **Voltage (Volts, V)**: Common prefixes include mV (millivolts) and kV (kilovolts).
   Example: 1 kilovolt = 1000 volts

3. **Current (Amperes, A)**: You'll frequently encounter mA (milliamps) and μA (microamps).
   Example: 100 mA = 0.1 A

4. **Resistance (Ohms, $\Omega$)**: Common prefixes include k$\Omega$ (kilohms) and M$\Omega$ (megohms).
   Example: 4.7 k$\Omega$ = 4,700 $\Omega$

5. **Capacitance (Farads, F)**: Most capacitors are in the pF (picofarad), nF (nanofarad), or μF (microfarad) range.
   Example: 100 pF = 0.0000000001 F

6. **Inductance (Henries, H)**: Common prefixes include μH (microhenries) and mH (millihenries).
   Example: 10 μH = 0.00001 H

7. **Power (Watts, W)**: You might see mW (milliwatts) for very low power, or kW (kilowatts) for high power.
   Example: 5 kW = 5,000 W

Remember, each step between prefixes is a factor of 1,000. To convert between them, you'll move the decimal point 3 places to the right (when going from a smaller to a larger unit) or to the left (when going from a larger to a smaller unit).

For example, to convert 2,500 kHz to MHz:
2,500 kHz = 2.5 MHz (moved decimal point 3 places to the left)

Or to convert 0.5 A to mA:
0.5 A = 500 mA (moved decimal point 3 places to the right)

Practice using these prefixes and conversions - they're essential for understanding specifications and calculations in amateur radio. You will almost certainly see a question about this on the exam, and it will be one of these:

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

In amateur radio, we work with two types of electrical current: Alternating Current (AC) and Direct Current (DC).

**Direct Current (DC)** flows in one direction, from the negative terminal to the positive terminal of a power source. It's like water flowing steadily through a pipe in one direction. In your ham shack, you'll find DC in:

- Batteries
- Solar panels
- Power supplies for most radio equipment

**Alternating Current (AC)** periodically reverses direction. If DC is like a river flowing steadily in one direction, AC is like waves in the ocean, moving back and forth. AC is what you get from your wall outlets at home. In the US, this alternation happens 60 times per second (60 Hz).

While most of our radio equipment runs on DC, we often use AC in amateur radio for:

- Powering linear amplifiers
- Running accessory equipment like antenna rotators
- Supplying power to DC power supplies

Real-world example: When you plug your radio's power supply into the wall, it's receiving 120V AC. The power supply then converts this to 13.8V DC, which is what most modern transceivers use.

Understanding AC and DC is crucial for working with power supplies and ensuring your equipment operates correctly.


#### Inductance and Capacitance

While resistance opposes the flow of current, inductance and capacitance deal with changes in current and voltage, which are crucial in tuning and filtering radio signals.

##### Inductance

Inductance is the property of an electrical circuit that opposes changes in current. It's measured in henries (H), named after the American scientist Joseph Henry.

An inductor is typically a coil of wire. When current flows through the coil, it creates a magnetic field. If the current changes, this magnetic field changes, which in turn induces a voltage that opposes the change in current.

Think of inductance like a water wheel in a stream. When water (current) first hits the wheel, it takes time to get the wheel moving. Once it's spinning, it keeps going smoothly. If you suddenly try to reverse the water flow, the wheel resists changing direction. The faster you try to change the direction, the harder it is for the wheel to keep up. In a circuit, inductance works the same way, resisting changes in current.

In ham radio, inductors are used to:
- Tune antennas to match different frequencies.
- Filter out unwanted signals, so you only hear what you want.
- Create oscillators that generate radio signals.

##### Capacitance

Capacitance is the ability of a component to store an electric charge. It's measured in farads (F), named after the English physicist Michael Faraday.

A capacitor typically consists of two conductive plates separated by an insulator (dielectric). When a voltage is applied, opposite charges accumulate on the plates, storing energy in the electric field between them.

Imagine capacitance as a stretchy balloon filling with water. At first, the water flows in easily (low resistance), but as the balloon fills up, it stretches and becomes harder to fill (higher resistance). If you try to empty it quickly, the water flows out easily again. The faster you try to fill and empty the balloon, the less it resists because it doesn’t have time to stretch fully. Similarly, capacitance resists changes in voltage.

In ham radio, capacitors are used to:
- Smooth out fluctuations in power supplies.
- Tune circuits to specific frequencies, helping you lock onto the signal you want.
- Block DC currents while allowing AC signals to pass through.

#### Understanding Impedance

Impedance is like the overall difficulty of moving water through a system, whether it's filling a balloon (capacitor) or turning a water wheel (inductor). In an AC (alternating current) circuit, impedance determines how easily current flows at different frequencies.

1. **Definition**: Impedance is the total opposition a circuit presents to alternating current (AC). It's measured in ohms (Ω), just like resistance.

2. **Components**: Impedance consists of two parts:
   - Resistance (R): This is the same as DC resistance.
   - Reactance (X): This is the opposition to AC due to inductors and capacitors.

3. **Formula**: Impedance (Z) is calculated using the formula:

   $Z = \sqrt{R^2 + X^2}$

   Where R is resistance and X is reactance.

4. **Behavior in Circuits**:
   - Resistors have the same impedance for all frequencies.
   - Capacitors have lower impedance at higher frequencies (easier for high-frequency AC to pass).
   - Inductors have higher impedance at higher frequencies (harder for high-frequency AC to pass).

5. **Why It Matters in Radio**:
   - Antenna Matching: Your antenna's impedance should match your radio's output impedance (usually 50Ω) for maximum power transfer.
   - Feedlines: The characteristic impedance of coaxial cable (often 50Ω or 75Ω) is crucial for efficient signal transmission.
   - Filters: Many filter circuits rely on the frequency-dependent impedance of capacitors and inductors.

6. **Real-World Example**: 
   Imagine you're connecting your 50Ω antenna to your 50Ω radio. If everything is matched, your signal flows smoothly. But if there's a mismatch (say, your antenna is actually 75Ω), some of your signal will be reflected back, reducing your transmission efficiency. This is why we use antenna tuners - to match impedances and ensure maximum power transfer.

Remember, in the world of radio, managing impedance is key to efficient operation. Whether you're designing an antenna, choosing a feedline, or troubleshooting a mismatch, understanding impedance will help you make the right decisions.

#### Resonant Circuits

When an inductor and capacitor are combined in a circuit, they can form a resonant circuit. At a specific frequency (the resonant frequency), the inductive and capacitive reactances cancel out, resulting in minimum impedance for a parallel circuit or maximum impedance for a series circuit.

This principle is fundamental to many aspects of radio, including:
- Tuning circuits in receivers and transmitters
- Antenna design
- Filter construction

Amateur radio example: A typical crystal filter in an SSB transceiver uses multiple resonant circuits to achieve sharp selectivity, allowing the desired signal to pass while rejecting nearby interfering signals.

Understanding inductance and capacitance is crucial for grasping how radio circuits work and for troubleshooting issues in your equipment. As you progress in your amateur radio journey, you'll encounter these concepts frequently, from adjusting antenna tuners to understanding how different components in your radio function.

By mastering these electrical quantities - voltage, current, resistance, power, inductance, and capacitance - you'll have a solid foundation for understanding the principles behind amateur radio operation. Whether you're analyzing a circuit diagram, choosing components for a homebrew project, or troubleshooting an issue with your antenna system, these concepts will serve you well throughout your ham radio journey.
