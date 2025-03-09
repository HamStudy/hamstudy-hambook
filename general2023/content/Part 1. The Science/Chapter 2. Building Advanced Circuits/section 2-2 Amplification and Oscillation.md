---
slug: "section2.2"
questions: ["G6A07", "G6A09", "G6A10", "G6A11", "G6A12", "G7B01", "G7B02", "G7B04", "G7B07", "G7B08", "G7B10", "G7B11", "G7C05"]
---

### Section 2.2: Transistors and Amplification

Remember when we talked about semiconductors in your Technician studies? Now it's time to take a deeper dive into these amazing components. As a General class operator, you'll want to understand how transistors and tubes amplify signals to help you communicate over longer distances with clearer signals.

#### Transistors: Tiny Amplification Powerhouses

Transistors might be small, but they pack a punch! These semiconductor devices are the workhorses of modern electronics, serving as both switches and amplifiers. Let's look at how they work in your radio equipment.

##### How Transistors Work

A transistor is like a water valve that uses a small amount of water pressure to control a much larger flow. In electronic terms, a small current or voltage at one terminal controls a much larger current flowing through the other terminals.

> **Key Information:** *The operating points for a bipolar transistor used as a switch are saturation and cutoff.* {{< link id="G6A07" >}}

When used as a switch, transistors operate between two states:
- **Cutoff**: The transistor is "off" and blocks current flow
- **Saturation**: The transistor is fully "on" and allows maximum current flow

This switching action is crucial in digital circuits, keying circuits for CW operation, and T/R (transmit/receive) switching in your transceiver.

##### Types of Transistors

Your radio equipment likely contains several types of transistors, each with special characteristics:

**MOSFETs (Metal-Oxide-Semiconductor Field-Effect Transistors)**:

> **Key Information:** *In MOSFET construction, the gate is separated from the channel by a thin insulating layer.* {{< link id="G6A09" >}}

<img src="../images/mosfet-construction.svg" alt="MOSFET Construction" style="width: 300px; margin: 10px;">

This special construction gives MOSFETs some big advantages in RF circuits:
- High input impedance (they don't load down the driving circuit)
- Good performance at high frequencies
- Lower noise in receiving applications
- High power handling in transmitting circuits

You'll find MOSFETs in modern HF power amplifiers, receivers, and switching power supplies.

#### Vacuum Tubes: Old Technology, New Applications

While solid-state components like transistors dominate modern electronics, vacuum tubes still have an important place in amateur radio, especially in high-power amplifiers. Let's explore these glowing glass marvels!

> **Key Information:** *The control grid in a vacuum tube regulates the flow of electrons between cathode and plate.* {{< link id="G6A10" >}}

<img src="../images/vacuum-tube.svg" alt="Vacuum Tube Elements" style="width: 300px; margin: 10px;">

A vacuum tube works by controlling a stream of electrons flowing from the heated cathode to the plate (also called the anode). The control grid acts like a gate, varying the electron flow based on the voltage applied to it.

In RF power amplifiers, vacuum tubes offer some advantages:
- Better tolerance of high voltages
- More forgiving of mismatched loads
- Often easier to repair (just replace the tube)
- Many hams simply enjoy their warm glow and classic sound!

> **Key Information:** *The primary purpose of a screen grid in a vacuum tube is to reduce grid-to-plate capacitance.* {{< link id="G6A12" >}}

The screen grid is an extra grid placed between the control grid and the plate. By reducing the capacitance between the control grid and plate, it prevents unwanted oscillation in RF amplifiers. This was a major advancement that made stable RF amplification possible.

#### Amplifier Classes: A to Z (Well, A to C, Anyway)

When browsing amplifier specifications, you'll notice terms like "Class A," "Class AB," or "Class C." These designations tell you how the amplifier operates and for what types of signals it's best suited.

##### Class A Amplifiers

> **Key Information:** *In a Class A amplifier, the amplifying device conducts current 100% of the time.* {{< link id="G7B04" >}}

Class A amplifiers:
- Provide the most linear (least distorted) output
- Are less efficient (typically under 30%)
- Generate more heat
- Are great for clear, accurate audio reproduction

You'll find Class A amplification in receiver front ends where signal accuracy is paramount.

##### Class B and AB Amplifiers

Class B amplifiers conduct for approximately 50% of the input cycle, while Class AB (a compromise between A and B) conducts for more than 50% but less than 100% of the cycle.

##### Class C Amplifiers

> **Key Information:** *Class C amplifiers have the highest efficiency of these classes.* {{< link id="G7B02" >}}

Class C amplifiers:
- Only conduct for less than 50% of the input cycle
- Can achieve efficiency up to 80%
- Create significant distortion (not good for preserving waveforms)
- Work well for FM or CW where the information isn't in the amplitude

> **Key Information:** *A Class C power stage is appropriate for amplifying FM signals.* {{< link id="G7B11" >}}

Since FM encodes information in frequency rather than amplitude variations, the distortion introduced by Class C operation doesn't affect the information content of the signal. This makes Class C perfect for FM transmitters where efficiency is more important than preserving the exact shape of the waveform.

#### Linear vs. Non-Linear Amplifiers

For many amateur radio applications, especially SSB voice operation, preserving the exact shape of the waveform is crucial:

> **Key Information:** *A linear amplifier preserves the input waveform in the output.* {{< link id="G7B10" >}}

Linear amplifiers accurately reproduce signal amplitude variations without distortion. This is essential for:
- SSB voice operation
- AM signals
- Digital modes like PSK31, FT8, etc.

Non-linear amplifiers (like Class C) are simpler and more efficient but distort the amplitude of the signal, making them suitable only for constant-amplitude modes like FM and CW.

#### Oscillators: Making Waves

Oscillators are essential circuits that generate the RF signals your radio needs to operate:

> **Key Information:** *The basic components of a sine wave oscillator are a filter and an amplifier operating in a feedback loop.* {{< link id="G7B07" >}}

<img src="../images/oscillator-feedback.svg" alt="Oscillator Feedback Loop" style="width: 350px; margin: 10px;">

An oscillator needs:
1. Amplification to overcome losses
2. Frequency selection (the filter part)
3. Positive feedback that's just right to sustain oscillation

In modern transceivers, you might encounter direct digital synthesis (DDS):

> **Key Information:** *A direct digital synthesizer (DDS) is characterized by variable output frequency with the stability of a crystal oscillator.* {{< link id="G7C05" >}}

DDS systems use digital techniques to generate analog waveforms, combining flexibility with stability. They've revolutionized frequency generation in amateur radio equipment by providing:
- Fast frequency changes
- Fine tuning resolution
- Excellent stability
- Programmable operation

#### Neutralization and Stability

When designing RF amplifiers, preventing unwanted oscillation is critical:

> **Key Information:** *The purpose of neutralizing an amplifier is to eliminate self-oscillations.* {{< link id="G7B01" >}}

Self-oscillation occurs when some of an amplifier's output feeds back to its input in just the right way to create a feedback loop. Neutralization techniques cancel out this unwanted feedback, typically by feeding back an equal but opposite signal through a small capacitor.

Without proper neutralization, an amplifier might:
- Generate spurious signals
- Distort the desired signal
- Damage itself
- Create interference

#### Amplifier Efficiency

Efficiency is a critical consideration in amplifier design, especially for portable or mobile operation:

> **Key Information:** *The efficiency of an RF power amplifier is determined by dividing the RF output power by the DC input power.* {{< link id="G7B08" >}}

$$Efficiency = \frac{RF_{output}}{DC_{input}} \times 100\%$$

For example, if your amplifier draws 200 watts of DC power and produces 100 watts of RF output, its efficiency is 50%.

Different amplifier classes have different typical efficiencies:
- Class A: 25-30%
- Class AB: 40-60%
- Class B: 60-70%
- Class C: 70-80%

This explains why Class C is preferred for modes that don't require linear amplification - you get more RF output for your power input!

#### Inductors in RF Amplifiers

We covered inductors in Section 2.1, but there's an important property of inductors that's particularly relevant to RF amplifiers:

> **Key Information:** *When an inductor is operated above its self-resonant frequency, it becomes capacitive.* {{< link id="G6A11" >}}

Every real-world inductor has some parasitic capacitance between its windings. At a certain frequency (the self-resonant frequency), this capacitance combines with the inductance to create a resonant circuit. Above this frequency, the component behaves more like a capacitor than an inductor.

This property is important to consider when:
- Designing RF circuits
- Selecting inductors for specific frequency bands
- Troubleshooting unexpected behavior in RF stages

#### Putting It All Together: A Practical Example

Let's look at how these concepts apply in a typical SSB transceiver:

1. A **DDS oscillator** (possibly combined with a PLL) generates the carrier frequency
2. Low-level **Class A amplifiers** in the modulator preserve the voice waveform
3. **Class AB linear amplifiers** boost the signal to the desired power level
4. **MOSFETs or tubes** provide the final amplification
5. **Neutralization circuits** prevent unwanted oscillation
6. Circuit design considers inductor **self-resonance** at operating frequencies

Understanding these amplification concepts helps you make informed decisions about:
- Which equipment to purchase
- How to properly operate your amplifiers
- Troubleshooting when problems arise
- Building or modifying your own equipment

#### Amplification in Action

Amplification might seem complex, but the key concepts are straightforward:
- Transistors and tubes control electron flow to amplify signals
- Different amplifier classes offer tradeoffs between linearity and efficiency
- Proper amplifier class selection depends on the mode you're using
- Oscillators generate the RF signals that get amplified
- Stability and efficiency are critical considerations in amplifier design

As you upgrade your station with your new General privileges, this knowledge will help you make the most of your equipment and understand how these components work together to get your signal out to the world!

But even the best amplifiers need a reliable source of power to function. Let's explore how power supplies convert household electricity into the steady DC voltages your radio equipment needs to perform at its best.
