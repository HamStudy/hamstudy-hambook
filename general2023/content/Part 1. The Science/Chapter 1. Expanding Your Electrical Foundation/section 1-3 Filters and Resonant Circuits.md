---
slug: "section1.3"
questions: ["G7B09", "G7C12", "G7C14", "G7C13", "G7C07", "G5A10"]
---

### Section 1.3: Resonance and Filters

The HF bands contain numerous signals occupying adjacent frequencies. The science of isolating specific signals relies on resonance and filtering—concepts that allow your radio to select desired frequencies while rejecting others. While modern transceivers handle many of these functions automatically, understanding the underlying principles helps you make better use of your equipment and grasp why certain adjustments affect reception and transmission in specific ways.

#### Resonance: Tuning to a specific frequency

Remember our discussion about how inductors and capacitors react differently to AC? This difference creates a fascinating phenomenon when we combine them in a circuit—resonance.

At a specific frequency—the resonant frequency—the inductive reactance and capacitive reactance become exactly equal in magnitude but opposite in phase. They essentially cancel each other out, leaving only the resistance to determine the circuit's impedance. This unique condition occurs at exactly one frequency for a given combination of inductance and capacitance:

$f_r = \frac{1}{2\pi\sqrt{LC}}$

Where:
- $f_r$ is the resonant frequency in hertz (Hz)
- $L$ is inductance in henrys (H)
- $C$ is capacitance in farads (F)

> **Key Information:** *The frequency of an LC oscillator is determined by the inductance and capacitance in the tank circuit.* {{< link id="G7B09" >}}

But what makes resonance so special? It depends on how the components are connected:

1. **Series Resonant Circuit**: When L and C are in series, at resonance their reactances cancel each other out, leaving only the resistance in the circuit to determine the impedance. This allows the circuit to be designed with precisely the resistance needed to match impedances between stages, facilitating optimal power transfer at the resonant frequency.

2. **Parallel Resonant Circuit**: When L and C are in parallel (forming what's called a "tank circuit"), a very different effect occurs at resonance. The circuit impedance rises to a maximum, as the two components essentially form a high-impedance path at the resonant frequency. This high impedance characteristic is valuable for creating selective tuned circuits or for presenting a specific load impedance to another circuit stage.

The term "tank circuit" comes from the circuit's ability to store and transfer energy between the inductor and capacitor, similar to a water tank storing and releasing water. This energy storage property is why tank circuits are fundamental to oscillators.

These properties make resonant circuits perfect for selecting frequencies in filters, oscillators, and tuned circuits.

![Series vs Parallel Resonant Circuits](../images/resonant-circuits.svg)

#### Filters: Controlling the Flow of Signals

Filters are circuits designed to allow certain frequencies to pass while blocking others. They're essential in radio equipment for:

- Selecting the frequency you want to receive
- Rejecting interfering signals
- Preventing your transmitter from emitting unwanted frequencies
- Defining the bandwidth of your transmitted signal

##### Types of Filters

Radio equipment uses several types of filters, each with specific purposes:

1. **Low-Pass Filters**: Allow frequencies below a certain point (the cutoff frequency) to pass while blocking higher frequencies. These are often used at transmitter outputs to prevent harmonic radiation.

2. **High-Pass Filters**: Allow frequencies above the cutoff point to pass while blocking lower frequencies. These can help eliminate low-frequency noise or interference.

3. **Band-Pass Filters**: Allow a specific range of frequencies to pass while blocking frequencies above and below this range. These are used in receiver front ends and for selecting specific bands.

4. **Band-Stop Filters (Notch Filters)**: Block a specific range of frequencies while allowing others to pass. These are great for eliminating specific interference.

The behavior of these filters can be visualized with frequency response curves:

![Filter Response Curves](../images/filter-responses.svg)

#### Understanding Filter Specifications

When evaluating filters, several key specifications tell you how they'll perform:

##### Cutoff Frequency

> **Key Information:** *The cutoff frequency of a low-pass filter is the frequency above which its output power is less than half the input power.* {{< link id="G7C12" >}}

This "half-power" point corresponds to a 3 dB reduction in power (remember our discussion about decibels). For a band-pass filter, there are two cutoff frequencies—one at the lower edge and one at the upper edge of the passband.

##### Filter Bandwidth

> **Key Information:** *The bandwidth of a band-pass filter is measured between its upper and lower half-power (-3 dB) points.* {{< link id="G7C14" >}}

Bandwidth tells you how selective a filter is. A narrow bandwidth is more selective (letting fewer frequencies through) but may distort some signals. A wider bandwidth passes more frequencies but might allow more interference.

For example, typical filter bandwidths for different modes are:
- CW (Morse code): 250-500 Hz
- SSB voice: 2.4-2.8 kHz
- AM voice: 6 kHz
- FM voice: 10-15 kHz

Matching your filter bandwidth to your operating mode gives you the best signal-to-noise ratio.

##### Insertion Loss

> **Key Information:** *Insertion loss specifies a filter's attenuation inside its passband.* {{< link id="G7C07" >}}

Even the frequencies a filter is designed to pass experience some loss—this is insertion loss. It's typically measured in dB, with lower values meaning better performance. For example, a filter with 1 dB insertion loss passes about 80% of the input power within its passband.

##### Ultimate Rejection

> **Key Information:** *Ultimate rejection specifies a filter's maximum ability to reject signals outside its passband.* {{< link id="G7C13" >}}

This tells you how well the filter blocks unwanted frequencies and is also measured in dB. A filter with 60 dB ultimate rejection reduces unwanted signals to one-millionth of their original power. Higher rejection values mean better filtering of unwanted signals.

#### Filter Implementation in Radio Circuits

Radio equipment employs filters throughout the signal chain, each solving specific frequency-selection challenges:

1. **Front-End Band-Pass Filters**: These provide the first stage of frequency selection, passing only the desired band while attenuating out-of-band signals. This prevents strong out-of-band signals from causing intermodulation and overloading sensitive amplifier stages.

2. **IF (Intermediate Frequency) Filters**: After frequency conversion in the mixer stage, these filters define the receiver's overall bandwidth. The fixed-frequency nature of IF stages allows for optimized filter designs with precisely controlled characteristics.

3. **Transmitter Output Filters**: These low-pass filters perform the critical function of suppressing harmonic emissions, ensuring spectral purity of the transmitted signal.

4. **Crystal Filters**: These use the precise mechanical resonant properties of quartz crystals to achieve extremely narrow bandwidths with steep skirts. The high Q-factor of crystals creates naturally selective filter responses.

5. **Ceramic Filters**: These offer good performance at lower cost than crystal filters, using ceramic resonator elements to define filter characteristics.

6. **Cavity Filters**: At VHF/UHF frequencies, these use resonant cavities to achieve high selectivity and power handling capability.

#### Filter Technology

Filter design involves various approaches with different performance characteristics:

**Passive LC Filters**: Combinations of inductors and capacitors provide basic filtering, with performance limited by component quality.

**Crystal Filters**: These leverage quartz crystals' precise resonant properties to achieve narrow bandwidths and steep skirts, especially useful in IF stages.

**Digital Signal Processing (DSP)**: Modern transceivers often implement filtering mathematically rather than with physical components, offering tremendous flexibility in filter characteristics.

#### Impedance Matching with Filters

Besides selecting frequencies, many filter circuits also provide impedance matching:

> **Key Information:** *Transformers, Pi-networks, and lengths of transmission line can all be used for impedance matching at radio frequencies.* {{< link id="G5A10" >}}

Pi-networks (named because their schematic resembles the Greek letter π) and T-networks (shaped like the letter T) are common filter configurations that can also transform impedance while filtering. This dual functionality makes them essential in antenna tuners and amplifier output circuits.

![Pi and T Networks](../images/pi-t-networks.svg)

#### Common Filter Designs

Several basic filter configurations are used in radio circuits:

1. **Pi-Networks**: Named for their resemblance to the Greek letter π in schematic form, these filters consist of a series element between two shunt elements. They're particularly useful for impedance matching while filtering.

2. **T-Networks**: Similar to Pi-networks but with two series elements and one shunt element, creating a "T" shape in the schematic.

The mathematical relationships between filter components determine the frequency response, with different designs offering trade-offs between response flatness and roll-off steepness.

#### Scientific Significance of Resonance and Filtering

Resonant circuits and filters embody fundamental electromagnetic principles that make modern radio communication possible. Their ability to discriminate between frequencies allows:

- Multiple signals to coexist in the same electromagnetic space
- Receivers to extract weak signals from noise and interference
- Transmitters to concentrate energy in desired frequency bands
- Systems to meet regulatory requirements for spectral purity

The relationship between component values and frequency response demonstrates the predictive power of electromagnetic theory. Mathematical models accurately describe how circuits will respond to various frequencies, allowing engineers to design systems with precisely defined characteristics.

In the next section, we'll explore various ways to ensure that the impedance matches between any two parts of your station–particularly between your transceiver and antenna.
