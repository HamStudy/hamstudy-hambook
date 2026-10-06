---
chapter: "2"
section: "2.2"
questions: ["G6A09", "G6A10", "G6A12", "G7B08", "G7B10", "G7B04", "G7B02", "G7B11", "G7B07", "G7C05", "G7B01"]
status: draft1
---

### Section 2.2: Transistors and Amplification

A typical transmitter starts with a low-power RF signal. Before that signal reaches the antenna, amplifiers raise it to the desired output power. This happens inside a handheld or HF radio; adding a separate power amplifier gives the signal another boost. Receivers also use amplifiers to strengthen weak signals and produce sound from a speaker.

To do that, an amplifier uses a small input signal to control a larger current from a battery or power supply. Transistors and vacuum tubes provide that control.

#### Transistors: The Building Blocks of Amplification

Transistors are semiconductor devices that can amplify signals or switch current on and off. The two main types are bipolar junction transistors and field-effect transistors. They differ in how they control current.

##### Bipolar Junction Transistors (BJTs)

Bipolar transistors consist of three semiconductor layers (collector, base, and emitter). A small current through the base controls a much larger current between collector and emitter.

Later in this chapter, we'll use that same control for digital switching, where the transistor operates at cutoff and saturation.

##### Field-Effect Transistors (FETs)

FETs use an electric field from a control terminal called the **gate** to control current through a semiconductor channel. One type is the **MOSFET**, or *metal-oxide-semiconductor field-effect transistor*.

> **Key Information:** In MOSFET construction, the gate is separated from the channel by a thin insulating layer. {{< link id="G6A09" >}}

This insulating layer creates an extremely high input impedance, as virtually no steady DC current flows into the gate. Charging and discharging the gate’s capacitance still requires current when its voltage changes. The voltage at the gate creates an electric field that controls current flow between the source and drain.

Both transistor types have important roles in your radio. Bipolar transistors are often used in audio and low-level RF stages, while MOSFETs are common in RF power amplifiers and some receiver front ends.

#### Vacuum Tubes: Understanding Legacy Technology

Though largely replaced by solid-state devices in modern equipment, vacuum tubes remain important to understand. You'll find them on your exam and in older equipment still in use. Manufacturers still make them for specific applications like high-power RF amplifiers. Tubes perform much the same function that we now usually use transistors for, and suitable tube designs can handle high voltages and power levels.

Vacuum tubes work by controlling a stream of electrons flowing from a heated cathode to a plate (anode) through a vacuum.

> **Key Information:**
> - The control grid in a vacuum tube regulates the flow of electrons between cathode and plate. {{< link id="G6A10" >}}
> - The primary purpose of a screen grid in a vacuum tube is to reduce grid-to-plate capacitance. {{< link id="G6A12" >}}

The control grid acts like a gate, varying electron flow based on its voltage. Small voltage changes on the grid cause large changes in plate current, providing amplification.

The screen grid sits between the control grid and plate, reducing capacitance between them. Lower capacitance means less feedback from output to input, helping prevent unwanted oscillation in RF amplifiers.

While most new amateur radio equipment uses solid-state technology (transistors), tubes are still found in:
- Some commercial and amateur high-power amplifiers
- Vintage equipment that many hams still enjoy using
- Specialty audio equipment where some prefer their characteristics

#### Amplifier Classes: Efficiency vs. Fidelity

Amplifier "classes" (`A`, `B`, `AB`, `C`) describe when a transistor or tube conducts current during a signal's waveform cycle. These classes reflect a tradeoff all amplifiers face between efficiency and **signal fidelity**—how faithfully the output reproduces the input signal.

##### Amplifier Efficiency

> **Key Information:** The efficiency of an RF power amplifier is determined by dividing the RF output power by the DC input power. {{< link id="G7B08" >}}
>
> $$\text{Efficiency} = \frac{RF_{output}}{DC_{input}} \cdot 100\%$$

For example, if an amplifier draws 200 watts from your power supply but produces only 100 watts of RF output, its efficiency is ($\frac{100}{200} = 50\%$). The remaining power becomes heat, which explains why some amplifiers need cooling fans.

Efficiency varies with the circuit, signal and output level; a class name does not specify one fixed percentage. The classes below describe how much of each cycle the device conducts.

![Four equal-length bars each represent one complete signal cycle. The shaded part shows when an amplifying device conducts current. Class A conducts for the whole cycle, or 360 degrees. Class B conducts for half the cycle, or 180 degrees. Class AB conducts for more than half but less than the full cycle. Class C conducts for less than half. The unshaded parts show when the device is not conducting; the bars compare conducting time, not output power.](../../../images/s2-2-amplifier-conduction.svg)
{.img-centered caption="The shaded part is the conducting interval. AB lies between half and a full cycle; C is less than half."}

##### Amplifier Linearity

> **Key Information:** A linear amplifier preserves the input waveform in the output. {{< link id="G7B10" >}}

Linearity refers to how faithfully an amplifier reproduces its input signal. In a perfectly linear amplifier, the output is an exact (but larger) copy of the input. This is crucial for modes where the signal's shape contains information, such as SSB voice operation, AM signals, and digital modes such as PSK31.

Now let's look at the main amplifier classes:

##### Class `A` Amplifiers: Maximum Fidelity

> **Key Information:** In a Class `A` amplifier, the amplifying device conducts current 100% of the time. {{< link id="G7B04" >}}

Class `A` amplifiers can provide excellent linearity, but their efficiency is relatively low. The device conducts during the entire waveform cycle and, within its operating limits, can faithfully reproduce the input. You'll find Class A amplification in receiver front ends and low-level stages where signal accuracy is crucial.

##### Class `C` Amplifiers: Maximum Efficiency

> **Key Information:**
> - Class C amplifiers have the highest efficiency of these classes. {{< link id="G7B02" >}}
> - A Class C power stage is appropriate for amplifying FM signals. {{< link id="G7B11" >}}

Class C amplifiers conduct for less than 50% of the waveform cycle, achieving high efficiency but not preserving a changing amplitude envelope. A tuned output circuit turns the device’s current pulses into a sinusoidal RF output.

Since FM encodes information in frequency rather than amplitude, the distortion introduced by Class C doesn't affect the information content, making it ideal for FM transmitters.

##### Class `B` and `AB`: The Middle Ground

Class B (50% conduction) and Class AB (more than 50% but less than 100% conduction) offer a compromise between efficiency and linearity. Most SSB transmitters use Class AB in their final stages to balance reasonable efficiency with acceptable linearity.

#### Oscillators: Signal Generators

An amplifier can also help generate a signal. With the right feedback and frequency selection, it becomes part of an oscillator. Oscillators provide the RF signals used in transmitters and for frequency conversion in receivers:

> **Key Information:** The basic components of a sine wave oscillator are a filter and an amplifier operating in a feedback loop. {{< link id="G7B07" >}}

An oscillator needs three elements:
1. Amplification to overcome losses
2. Frequency selection (filtering)
3. Positive feedback that reinforces the oscillation

![An amplifier sends a signal toward the output. Before the output, a branch takes part of that signal through a frequency-selective network and back to the amplifier’s input, forming a loop. The returning signal reinforces oscillation at the selected frequency, while the amplifier replaces energy lost in the circuit.](../../../images/s2-2-oscillator-feedback.svg)
{.img-centered caption="The amplifier replaces lost energy; feedback reinforces the selected frequency."}

Many oscillators use an LC (inductor-capacitor) tank circuit to select the frequency. As we saw in the previous chapter, its inductance and capacitance determine that frequency.

Modern transceivers often use direct digital synthesis (DDS) for frequency generation. DDS systems use digital techniques to generate analog waveforms, providing fast frequency changes with excellent stability.

> **Key Information:** A direct digital synthesizer (DDS) is characterized by variable output frequency with the stability of a crystal oscillator. {{< link id="G7C05" >}}

A crystal-controlled reference clock times the digital sequence. Changing that sequence selects a different output frequency while retaining the clock’s stable time reference.

#### Amplifier Stability

The feedback that makes an oscillator work can cause trouble in an ordinary amplifier:

> **Key Information:** The purpose of neutralizing an amplifier is to eliminate self-oscillations. {{< link id="G7B01" >}}

Self-oscillation occurs when some of an amplifier's output feeds back to its input in the right phase to create a feedback loop. Neutralization techniques cancel out this unwanted feedback, typically by feeding back an equal but opposite signal.


---

Whether you're selecting a linear amplifier for SSB operation or troubleshooting an oscillation problem, these concepts provide valuable insights.

Next, we'll explore how power supplies convert household electricity into the steady DC voltages your radio equipment requires.
