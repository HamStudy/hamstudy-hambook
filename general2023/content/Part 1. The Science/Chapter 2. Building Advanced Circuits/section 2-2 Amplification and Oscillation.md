---
chapter: "2"
section: "2.2"
questions: ["G6A07", "G6A09", "G6A10", "G6A11", "G6A12", "G7B01", "G7B02", "G7B04", "G7B07", "G7B08", "G7B10", "G7B11", "G7C05"]
---

### Section 2.2: Transistors and Amplification

Remember when we talked about semiconductors in your Technician studies? Now it's time to take a deeper dive into these amazing components. As a General class operator, you'll want to understand how transistors and tubes amplify signals to help you communicate over longer distances with clearer signals.

#### Transistors: Versatile Control Elements

Transistors might be small, but they're incredibly versatile! These semiconductor devices serve as both switches and amplifiers in modern electronics, controlling signals with remarkable precision. Let's look at how they work in your radio equipment.

#### Transistors: The Building Blocks of Amplification

Transistors are semiconductor devices that form the foundation of modern electronics. They serve two primary functions in your radio equipment: switching signals on and off, and amplifying weak signals into stronger ones.

##### Bipolar Junction Transistors (BJTs)

Bipolar transistors consist of three semiconductor layers (collector, base, and emitter). A small current through the base controls a much larger current between collector and emitter.

> **Key Information:** *A bipolar transistor used as a switch has two operating points: saturation and cutoff.* {{< link id="G6A07" >}}

When used as a switch:
- In **cutoff**, the transistor blocks current flow (like an open switch)
- In **saturation**, the transistor allows maximum current flow (like a closed switch)

##### Field-Effect Transistors (FETs)

FETs use an electric field, rather than current, to control the flow of current through a semiconductor channel.

> **Key Information:** *In MOSFET construction, the gate is separated from the channel by a thin insulating layer.* {{< link id="G6A09" >}}

This insulating layer creates an extremely high input impedance, as virtually no current flows into the gate. The voltage at the gate creates an electric field that controls current flow between the source and drain.

Both transistor types have important roles in your radio. Bipolar transistors are often used in audio and low-level RF stages, while MOSFETs excel in RF power amplifiers and receiver front ends where their high-frequency performance and high input impedance are advantageous.

#### Vacuum Tubes: Understanding Legacy Technology

Though largely replaced by solid-state devices in modern equipment, vacuum tubes remain important to understand for several reasons: they appear on your exam, they're found in older equipment still in use, and they're still manufactured for specific applications like high-power RF amplifiers. They perform much the same function that we now usually use transistors for, but they can handle much higher voltages and power levels. They are also less "fragile", being more resistant to things like radiation and EMPs.

Vacuum tubes work by controlling a stream of electrons flowing from a heated cathode to a plate (anode) through a vacuum.

> **Key Information:** *The control grid in a vacuum tube regulates the flow of electrons between cathode and plate.* {{< link id="G6A10" >}}

The control grid acts like a gate, varying electron flow based on its voltage. Small voltage changes on the grid cause large changes in plate current, providing amplification.

> **Key Information:** *The primary purpose of a screen grid in a vacuum tube is to reduce grid-to-plate capacitance.* {{< link id="G6A12" >}}

The screen grid sits between the control grid and plate, reducing capacitance between them. This prevents unwanted oscillation in RF amplifiers and was a critical advancement in radio technology.

While most new amateur radio equipment uses solid-state technology (transistors), tubes are still found in:
- Some commercial and amateur high-power amplifiers
- Vintage equipment that many hams still enjoy using
- Specialty audio equipment where some prefer their characteristics

#### Amplifier Classes: Efficiency vs. Fidelity

Amplifier "classes" (`A`, `B`, `AB`, `C`) describe when a transistor or tube conducts current during a signal's waveform cycle. This classification represents the fundamental tradeoff between efficiency and signal fidelity that all amplifiers face.

##### Amplifier Efficiency

> **Key Information:** *The efficiency of an RF power amplifier is determined by dividing the RF output power by the DC input power.* {{< link id="G7B08" >}}
>
> $$\text{Efficiency} = \frac{RF_{output}}{DC_{input}} \cdot 100\%$$

For example, if an amplifier draws 200 watts from your power supply but produces only 100 watts of RF output, its efficiency is ($\frac{100}{200} = 50\%$). The remaining power is converted to heat, which explains why some amplifiers need cooling fans.

Different amplifier classes have different typical efficiencies:
- Class `A`: 25-30%
- Class `AB`: 40-60%
- Class `B`: 60-70%
- Class `C`: 70-80%

##### Amplifier Linearity

> **Key Information:** *A linear amplifier preserves the input waveform in the output.* {{< link id="G7B10" >}}

Linearity refers to how faithfully an amplifier reproduces its input signal. In a perfectly linear amplifier, the output is an exact (but larger) copy of the input. This is crucial for modes where the signal's shape contains information, such as:
- SSB voice operation
- AM signals
- Most digital modes

Now let's look at the main amplifier classes:

##### Class `A` Amplifiers: Maximum Fidelity

> **Key Information:** *In a Class `A` amplifier, the amplifying device conducts current 100% of the time.* {{< link id="G7B04" >}}

Class `A` amplifiers provide excellent linearity but low efficiency (typically under 30%). Since the device conducts during the entire waveform cycle, the output faithfully reproduces the input. You'll find Class A amplification in receiver front ends and low-level stages where signal accuracy is crucial.

##### Class `C` Amplifiers: Maximum Efficiency

> **Key Information:** *Class C amplifiers have the highest efficiency of these classes.* {{< link id="G7B02" >}}

Class C amplifiers conduct for less than 50% of the waveform cycle, achieving high efficiency (up to 80%) but significantly distorting the signal's amplitude.

> **Key Information:** *A Class C power stage is appropriate for amplifying FM signals.* {{< link id="G7B11" >}}

Since FM encodes information in frequency rather than amplitude, the distortion introduced by Class C doesn't affect the information content, making it ideal for FM transmitters.

##### Class `B` and `AB`: The Middle Ground

Class B (50% conduction) and Class AB (50-100% conduction) offer a compromise between efficiency and linearity. Most SSB transmitters use Class AB in their final stages to balance reasonable efficiency with acceptable linearity.

#### Oscillators: Signal Generators

Oscillators generate the RF signals that get amplified in transmitters and used for frequency conversion in receivers:

> **Key Information:** *The basic components of a sine wave oscillator are a filter and an amplifier operating in a feedback loop.* {{< link id="G7B07" >}}

An oscillator needs three elements:
1. Amplification to overcome losses
2. Frequency selection (filtering)
3. Positive feedback that reinforces the oscillation

The frequency selection in many oscillators comes from an LC (inductor-capacitor) circuit:

> **Key Information:** As you may remember, *The frequency of an LC oscillator is determined by the inductance and capacitance in the tank circuit.*

Modern transceivers often use direct digital synthesis (DDS) for frequency generation:

> **Key Information:** *A direct digital synthesizer (DDS) is characterized by variable output frequency with the stability of a crystal oscillator.* {{< link id="G7C05" >}}

DDS systems use digital techniques to generate analog waveforms, providing fast frequency changes with excellent stability.

#### Amplifier Stability

Preventing unwanted oscillation is critical in amplifier design:

> **Key Information:** *The purpose of neutralizing an amplifier is to eliminate self-oscillations.* {{< link id="G7B01" >}}

Self-oscillation occurs when some of an amplifier's output feeds back to its input in the right phase to create a feedback loop. Neutralization techniques cancel out this unwanted feedback, typically by feeding back an equal but opposite signal.

#### Inductor Self-Resonance

One last important concept for amplifier design is inductor self-resonance:

> **Key Information:** *When an inductor is operated above its self-resonant frequency, it becomes capacitive.* {{< link id="G6A11" >}}

Every inductor has some parasitic capacitance between its windings. At a certain frequency (the self-resonant frequency), this capacitance resonates with the inductance. Above this frequency, the component behaves more like a capacitor than an inductor—a critical consideration because this unexpected behavior can cause tank circuits to malfunction and amplifiers to become unstable at higher frequencies.

---

These amplification principles help you understand how your equipment processes signals. Whether you're selecting a linear amplifier for SSB operation, troubleshooting an oscillation problem, or simply wondering why your radio performs the way it does, these concepts provide valuable insights.

Next, we'll explore how power supplies convert household electricity into the steady DC voltages your radio equipment requires.
