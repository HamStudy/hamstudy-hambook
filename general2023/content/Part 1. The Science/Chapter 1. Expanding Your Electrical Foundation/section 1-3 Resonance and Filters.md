---
chapter: "1"
section: "1.3"
questions: ["G7B09", "G7C12", "G7C14", "G7C07", "G7C13", "G5A10"]
status: draft1
---

### Section 1.3: Resonance and Filters

You've just learned that inductive reactance climbs with frequency while capacitive reactance falls—two opposite behaviors heading in different directions. But here's where it gets fascinating: in a simple ideal series LC circuit, one frequency makes $X_L$ equal $X_C$, and these opposite reactances cancel each other completely, making the $j(X_L - X_C)$ term in your impedance equation become zero. This special frequency transforms ordinary LC circuits into powerful frequency selectors—one foundation for the filters you'll encounter in radio.

As you prepare for General operation, you're about to discover why resonance isn't just another formula to memorize. It's the principle that lets your antenna "ring" at exactly the right frequency, enables your radio to ignore thousands of unwanted signals, and allows that narrow CW filter to slice through interference like a surgeon's scalpel. Master resonance, and you master the art of frequency selection.

#### Why Resonance Matters in Amateur Radio

At resonance in an LC circuit, inductive reactance and capacitive reactance are equal ($X_L = X_C$) and cancel each other. When an LC circuit reaches resonance, its impedance can be much lower or higher than at nearby frequencies, depending on the connection. This selectivity is precisely what we need to:

- Tune into specific stations
- Reject interference
- Generate stable oscillator frequencies
- Define our transmitted signal bandwidth

The resonant frequency of an LC circuit is calculated using:

$$f_r = \frac{1}{2\pi\sqrt{LC}}$$

Where:
- $f_r$ is the resonant frequency in Hz
- $L$ is inductance in henries
- $C$ is capacitance in farads

Note: The example here is to help with understanding; this is not on the test.

**Example:** What's the resonant frequency of a circuit with a 2.5 μH inductor and 100 pF capacitor?

$$f_r = \frac{1}{2\pi\sqrt{2.5 \times 10^{-6} \times 100 \times 10^{-12}}} \approx 10.06 \text{ MHz}$$

This frequency falls near the 30-meter band—typical for amateur radio tuned circuits. If you halved the capacitance to 50 pF, the resonant frequency would increase by $\sqrt{2}$ to about 14.2 MHz (20-meter band).

Let's see how resonance works in practical circuit configurations.

#### Series and Parallel Resonance: Two Critical Circuit Behaviors

There are two fundamental ways to connect inductors and capacitors in resonant circuits, and they behave quite differently:

![Two circuits compare an inductor and capacitor in series and in parallel. In the series circuit, current follows one path through both components. In the parallel circuit, the inductor and capacitor form separate branches between the same two terminals. Under each circuit, a graph shows frequency increasing to the right and impedance increasing upward. The series curve dips to its minimum at resonance, then rises again. The parallel curve peaks at resonance and falls on either side. These are simplified responses; real component losses limit the minimum and maximum.](../../../images/s1-3-resonance-comparison.svg)
{.img-centered caption="Series resonance gives minimum impedance; parallel resonance gives maximum impedance in these simple circuits. Real components limit both responses."}

1. **Series Resonant Circuit**: When L and C are in series, their reactances cancel at resonance, leaving only the resistance to limit current flow. This creates minimum impedance at the resonant frequency, allowing maximum current flow.
   
   *Application*: Series resonant circuits are excellent for creating band-pass filters that select a specific frequency range.

2. **Parallel Resonant Circuit (Tank Circuit)**: When L and C are in parallel, the opposite occurs—impedance is maximum at resonance. The currents through the inductor and capacitor cancel each other out, creating a high-impedance path at the resonant frequency.
   
   Why "tank"? Because energy sloshes back and forth between the inductor's magnetic field and the capacitor's electric field—like water sloshing in a tank—creating an oscillating current. In a real circuit, losses make that oscillation fade unless a source replaces the lost energy.

> **Key Information:** The frequency of an LC oscillator is determined by the inductance and capacitance in the tank circuit. {{< link id="G7B09" >}}

**Practical Note:** While many modern transceivers use digital frequency synthesis for tuning, they may still contain tuned circuits. Understanding these resonant circuits remains relevant for antenna tuners, filters, and many homebrew projects.

#### Filters: Controlling the Flow of Signals

Filters are circuits designed to pass some frequencies while rejecting others. As you move into General class operating, you'll encounter several types:

![Four graphs show filter output as frequency increases from left to right; a higher curve means more output. The low-pass curve stays high at low frequencies, then falls at higher frequencies. The high-pass curve does the reverse. The band-pass curve rises for a middle range of frequencies and falls on both sides. The notch curve stays high except for a narrow dip around one frequency. The sloping transitions show that these filters do not change abruptly between passing and rejecting a signal.](../../../images/s1-3-filter-responses.svg)
{.img-centered caption="The curves show which frequencies each filter passes or reduces."}

1. **Low-Pass Filters**: Pass frequencies below a cutoff point
   - *Application*: Reduce harmonics from your transmitter output
   - *Example*: A transmitter low-pass filter that reduces harmonic interference, or a telephone filter that passes voice while rejecting RF

2. **High-Pass Filters**: Pass frequencies above a cutoff point
   - *Application*: Eliminate low-frequency noise
   - *Example*: A suitable high-pass filter at a television antenna input that reduces lower-frequency HF interference

3. **Band-Pass Filters**: Pass a specific range of frequencies
   - *Application*: Select your operating band
   - *Example*: Receiver front-end filters

4. **Band-Stop (Notch) Filters**: Block specific frequencies
   - *Application*: Reduce a narrow interfering signal
   - *Example*: Notch filters in modern transceivers

#### Key Filter Specifications You Should Know

Whether you're evaluating equipment or building your own circuits, understanding these specifications will help you make informed decisions:

##### Cutoff Frequency

> **Key Information:** The cutoff frequency of a low-pass filter is the frequency above which its output power is less than half the input power. {{< link id="G7C12" >}}

This "half-power" point corresponds to a 3 dB reduction in power. When you see filter specifications mentioning "-3 dB points," they're referring to these cutoff frequencies.

##### Filter Bandwidth

> **Key Information:** The bandwidth of a band-pass filter is measured between its upper and lower half-power (-3 dB) points. {{< link id="G7C14" >}}

Typical receiver-filter settings vary by mode and by the signal being received:
- CW: 250-500 Hz
- SSB: 2.4-2.8 kHz
- AM: 6 kHz
- FM: about 10-16 kHz for common voice signals, depending on deviation

**Operating Tip:** Using a wider filter than necessary reduces your signal-to-noise ratio, while using one that's too narrow can distort the received signal. Modern transceivers allow you to select appropriate filter bandwidths for different modes.

##### Q Factor and Selectivity

The sharpness of a resonant circuit's response is described by its Q factor (quality factor). Higher Q means narrower bandwidth and more selective filtering—exactly what you want when trying to pick out a weak signal from interference. Lower Q means broader bandwidth but less selectivity.

In energy terms, Q is $2\pi$ times the energy stored divided by the energy lost per cycle. Lower loss generally gives a higher Q. When you adjust your radio’s filter from "wide" to "narrow," you may be selecting another filter or changing digital calculations, rather than changing an LC circuit’s Q.

##### Insertion Loss

> **Key Information:** Insertion loss specifies a filter's attenuation inside its passband. {{< link id="G7C07" >}}

Ideally, a filter would pass desired frequencies with zero attenuation, but real-world components always introduce some loss. Lower insertion loss preserves more of the wanted signal; bandwidth and rejection still matter too.

For example, a filter with 1 dB insertion loss passes about 80% of the input power within its passband.

##### Ultimate Rejection

> **Key Information:** Ultimate rejection specifies a filter's maximum ability to reject signals outside its passband. {{< link id="G7C13" >}}

This tells you how well the filter blocks unwanted signals. A higher value (measured in dB) means better filtering of interference.

A filter with 60 dB ultimate rejection reduces unwanted signals to one-millionth of their original power. The response curve shows where that rejection applies; it need not hold at every frequency outside the passband.

#### Impedance Matching with Filters

Many filter circuits serve double duty—they not only select frequencies but also match impedances between different parts of your station:

> **Key Information:** Transformers, Pi-networks, and lengths of transmission line can all be used for impedance matching at radio frequencies. {{< link id="G5A10" >}}

A matching network changes the voltage-to-current relationship seen at its input, so a different load can look like the impedance the equipment needs. Common examples include:

- **Transformers**: Change voltage and current in opposite ratios; the next section follows this in detail.

- **Pi-networks**: Named for their resemblance to the Greek letter π in schematic form (capacitor-inductor-capacitor), these are often found in antenna tuners and amplifier output circuits.

- **L-networks**: Simpler than Pi-networks, using just two components (one series and one parallel), these are common in antenna matching applications.

- **Quarter-wave transformers**: Special sections of transmission line that transform impedance based on their characteristic impedance.

#### Filter Technologies in Your Radio

Modern amateur radio equipment employs various filter technologies:

1. **LC Filters**: Traditional combinations of inductors and capacitors
   - *Advantages*: Simple and passive; suitable components can handle high power
   - *Limitations*: Can be larger; tuning range and losses depend on the components

2. **Crystal Filters**: Use quartz crystals for precise, narrow filtering
   - *Advantages*: Excellent selectivity, high stability
   - *Limitations*: Fixed frequency, relatively expensive

3. **Mechanical Filters**: Use mechanical resonant elements
   - *Advantages*: Exceptional shape factor, good for SSB/CW
   - *Limitations*: Found mostly in older equipment

4. **Digital Signal Processing (DSP) Filters**: Implement filtering mathematically
   - *Advantages*: Adjustable characteristics, can be updated
   - *Limitations*: Require digital processing power

**Looking Forward:** As you grow in amateur radio, you may encounter specialized filter applications like roofing filters that limit signals reaching later receiver stages, commonly at the first intermediate frequency, or crystal ladder filters in homebrew projects. The principles covered here will help you understand how they all work.

#### Practical Applications in Your General Class Operations

How will you use this knowledge of resonance and filters in your everyday operating?

1. **Selecting Filter Bandwidths**: Choose appropriate filter settings in your transceiver for different modes and band conditions.

2. **Reducing Interference**: Add external band-pass or notch filters when facing stubborn interference problems.

3. **Building Projects**: Design simple resonant circuits for antenna tuners or QRP (low power) equipment.

4. **Troubleshooting**: Recognize when filter-related issues might be affecting your station's performance.

5. **Equipment Selection**: Make informed choices when evaluating transceivers based on their filter specifications.

#### Your Filter Toolkit Is Ready

You now understand how resonance transforms simple LC circuits into powerful frequency selectors. That roofing filter in your receiver? It limits the signals reaching later stages, and may use crystal resonators rather than an LC tank. The notch filter that reduces an annoying carrier? It could be an analog circuit or digital processing. Your antenna tuner? A matching network that changes the impedance your transmitter sees.

When you turn your radio’s filter knob from "wide" to "narrow," you’re choosing a smaller frequency range. A 500 Hz CW filter can reject noise and interference outside that range while passing the signal you want. Even your antenna acts as a resonant filter, naturally favoring the frequencies it's cut for.

But filtering and resonance are only part of the power transfer puzzle. Next, we'll explore how transformers work their magic—moving energy between circuits while offering impedance matching, possible electrical isolation, and the ability to step voltages up or down. It's the technology that makes everything from QRP rigs to legal-limit amplifiers possible.
