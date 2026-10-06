---
chapter: "3"
section: "3.3"
questions: ["G8B03", "G8B11", "G8B01", "G8B04", "G8B02", "G8B12", "G8B05", "G8B13", "G8B06", "G8B07", "G8B08", "G7C08", "G8B10"]
status: draft1
---

### Section 3.3: Frequency Mixing and Bandwidth

Ever wonder why your radio can tune to any frequency on the band instantly, yet still provide sharp selectivity and powerful amplification? Or why that strong local FM broadcast station sometimes causes interference to your 2-meter repeater? Frequency mixing helps explain both.

As you prepare to explore the HF bands with General privileges, understanding how signals mix and interact becomes more important than ever. You'll encounter situations where strong signals create unexpected interference, where your radio's design affects what you can and can't hear, and where bandwidth choices dramatically impact your operating success. These concepts explain the "why" behind many everyday amateur radio experiences.

#### Heterodyning: Shifting Frequency

Here's a fundamental challenge: How do you build a radio that can tune anywhere from 1.8 to 30 MHz with excellent selectivity? Building sharp filters that work across such a wide frequency range would be extremely difficult and expensive. The usual solution is to shift the wanted signal to a frequency where sharp filtering is easier. A superheterodyne receiver does this by converting it to a fixed intermediate frequency (IF).

> **Key Information:**
> - Heterodyning is another term for the mixing of two RF signals. {{< link id="G8B03" >}}
> - The sum and difference of a mixer's Local Oscillator (LO) and RF input frequencies are found in the output. {{< link id="G8B11" >}}

Heterodyning (or mixing) solves this problem elegantly. Instead of trying to filter your 14.230 MHz SSB signal directly, your radio converts it to a standard intermediate frequency (like 9 MHz) where sophisticated crystal filters can provide excellent selectivity. Same great filtering performance across the entire HF spectrum!

The heart of this process is the mixer, which combines your incoming signal with a locally generated frequency. A practical mixer’s output can include these components, along with other unwanted products:

- The original RF signal
- The original local oscillator (LO) signal  
- The sum frequency (RF + LO)
- The difference frequency (the magnitude of RF - LO)

For example, mixing a 14.230 MHz signal with a 5.230 MHz local oscillator can produce:

- 14.230 MHz (original RF)
- 5.230 MHz (original LO)
- 19.460 MHz (sum)
- 9.000 MHz (difference)

By filtering out everything except the 9 MHz difference frequency, we've converted our 14.230 MHz signal to a standard 9 MHz intermediate frequency where excellent filtering and amplification are practical.

#### Tuning Your Radio: The Local Oscillator at Work

In this receiver design, turning the tuning knob (or clicking the frequency up/down buttons) adjusts the local oscillator frequency:

> **Key Information:** The local oscillator is the mixer input that is varied or tuned to convert signals of different frequencies to an intermediate frequency (IF). {{< link id="G8B01" >}}

Think about tuning from 14.230 MHz to 14.280 MHz:

- To receive 14.230 MHz: LO = 5.230 MHz (14.230 - 5.230 = 9.000 MHz IF)
- To receive 14.280 MHz: LO = 5.280 MHz (14.280 - 5.280 = 9.000 MHz IF)

The local oscillator tracks with your tuning, maintaining a constant 9 MHz difference frequency. This is why your radio can provide the same excellent selectivity across the entire band—every signal gets converted to the same IF where the best filtering happens.

Software-defined radios can do the same kind of frequency shifting through digital calculations.

#### Building Higher Frequencies: Frequency Multiplication

Sometimes we need frequencies that are difficult to generate directly. VHF and UHF transmitters often start with a lower, more stable frequency and multiply it up:

> **Key Information:** A multiplier is the stage in a VHF FM transmitter that generates a harmonic of a lower frequency signal to reach the desired operating frequency. {{< link id="G8B04" >}}

A **harmonic** is an integer multiple of a frequency: the second harmonic is twice the frequency, the third is three times, and so on.

For example, generating a stable 146.520 MHz signal for 2-meter FM might work like this:

1. Start with a precise 12.21 MHz crystal oscillator
2. Multiply by 3 to get 36.63 MHz
3. Multiply by 4 to reach 146.52 MHz

This approach derives the higher frequency from a stable reference. Multiplication does not improve that reference’s stability: its absolute frequency error and its FM deviation multiply by the same factor. Its fractional error, such as parts per million, remains the same.

#### The Dark Side of Mixing: Image Response

Here's where heterodyning gets tricky. Since mixing produces both sum and difference frequencies, two different input frequencies can produce the same IF:

> **Key Information:** Image response is interference from a signal at twice the IF frequency from the desired signal. {{< link id="G8B02" >}}

Let's use a concrete example. Say you want to receive 14.230 MHz using a 9 MHz IF. Your local oscillator needs to be either:

- 23.230 MHz (high-side injection: 23.230 - 14.230 = 9 MHz)
- 5.230 MHz (low-side injection: 14.230 - 5.230 = 9 MHz)

For this example, let's use high-side injection: LO = 23.230 MHz.

Here's the problem: while 14.230 MHz produces the desired 9 MHz IF (23.230 - 14.230 = 9), there's another frequency that also produces 9 MHz:

- 32.230 MHz also gives us: 32.230 - 23.230 = 9 MHz

This unwanted frequency (32.230 MHz) is called the "image" because it mirrors the desired frequency on the opposite side of the local oscillator. The image frequency is exactly twice the IF (18 MHz) away from the desired signal.

A strong signal at 32.230 MHz would interfere with reception of your 14.230 MHz signal because both produce the same 9 MHz IF. Your receiver can't tell them apart after mixing!

This is why receivers include preselector filters before the mixer—to block these unwanted image frequencies that would otherwise cause interference.

![Frequency increases from left to right. The wanted signal is at 14.230 megahertz, the local oscillator at 23.230 megahertz, and the unwanted image signal at 32.230 megahertz. The wanted signal and image are each 9 megahertz from the oscillator, on opposite sides. Mixing either with the oscillator can therefore produce the same 9-megahertz intermediate frequency. A filter at that stage cannot separate the wanted signal from the image. The wanted signal and image are 18 megahertz apart, twice the intermediate frequency.](../../../images/s3-3-mixer-image.svg)
{.img-centered caption="Both inputs become the same 9 MHz IF. They are 18 MHz, or twice the IF, apart."}

#### When Mixing Happens Unintentionally: Intermodulation

Mixers aren't just intentional circuits in your radio—they can form accidentally whenever strong signals encounter non-linear junctions:

> **Key Information:** Intermodulation is the process that combines two signals in a non-linear circuit to produce unwanted spurious outputs. {{< link id="G8B12" >}}

This unwanted mixing can happen in:

- Overdriven amplifier stages
- Corroded antenna connections  
- Metal objects near your antenna
- Crystal diodes in unexpected places
- Even rusty fence wire!

##### When Nature Creates Accidental Mixers

Sometimes intermodulation happens in the most unexpected places—out in the environment itself! A loose or corroded metal junction can behave nonlinearly, like a primitive diode. If that junction encounters strong RF signals, it can create intermodulation products just like an overdriven amplifier stage.

This becomes particularly problematic at mountain-top repeater sites where multiple high-power transmitters operate in close proximity. Strong signals from several repeaters can mix in unexpected places—perhaps in a loose guy wire connection or corroded tower joint—creating intermodulation products that fall right on another repeater's input frequency. The result? Phantom signals triggering repeaters or strange interference patterns that seem to come from nowhere.

The solution might be as simple as cleaning and properly connecting a guy wire, or may require better antenna isolation and other measures to reduce RF at the bad junction. Filters can help when unwanted frequencies reach the junction, but they cannot remove a transmitter’s intended in-band signal while passing that same signal to the antenna. Understanding that these natural mixing phenomena can occur helps explain some of the stranger interference problems that occasionally puzzle even experienced engineers.

When two strong signals (F1 and F2) interact in a non-linear device, they create a whole family of new frequencies:

- F1 + F2, F1 - F2 (second-order products)
- 2F1 + F2, 2F1 - F2, F1 + 2F2, F1 - 2F2 (third-order products)
- And many higher-order combinations

The most troublesome are the odd-order products:

> **Key Information:**
> - Odd-order intermodulation products are closest to the original signal frequencies. {{< link id="G8B05" >}}
> - An example of an odd-order intermodulation product of frequencies F1 and F2 is 2F1 - F2. {{< link id="G8B13" >}}

Here's why odd-order products cause the most problems. Consider two strong signals at 14.200 MHz and 14.250 MHz:

- Third-order product: 2(14.200) - 14.250 = 14.150 MHz
- Another third-order product: 2(14.250) - 14.200 = 14.300 MHz

![Frequency increases from left to right. Two original signals are at 14.200 and 14.250 megahertz, 50 kilohertz apart. Unwanted third-order products appear at 14.150 megahertz below them and 14.300 megahertz above them. The lower product equals twice the first frequency minus the second. The upper product equals twice the second frequency minus the first. Each unwanted product is only 50 kilohertz from the nearest original signal, so these mixing products can interfere with nearby stations.](../../../images/s3-3-intermodulation-products.svg)
{.img-centered caption="Third-order products can fall close to the original signals."}

These products (14.150 and 14.300 MHz) fall right in the 20-meter band where they can interfere with other stations! Second-order products would be much farther away and easier to filter out. This is why contest stations work so hard to keep their signals clean—when you're running high power with multiple transmitters, intermodulation products can create interference across the entire band.

#### Signal Bandwidth: How Much Spectrum Space Do You Need?

Every signal occupies a certain amount of spectrum, and understanding bandwidth helps you operate considerately and effectively.

##### FM Bandwidth Calculations

FM signals require more bandwidth than you might expect:

> **Key Information:** The total bandwidth of an FM phone transmission having 5 kHz deviation and 3 kHz modulating frequency is 16 kHz. {{< link id="G8B06" >}}

This uses Carson's rule—a practical approximation for FM bandwidth:
$BW \approx 2(\Delta f + f_m)$

Where:

- $\Delta f$ = deviation (5 kHz)
- $f_m$ = highest modulating frequency (3 kHz)

$$BW = 2(5 + 3) = 16 \text{ kHz}$$

This wide bandwidth is why FM is typically used on VHF/UHF where spectrum space is more plentiful, while HF operation favors the narrower bandwidth of SSB.

##### Frequency Multiplication and Deviation

When building FM transmitters using frequency multiplication, the deviation multiplies along with the frequency:

> **Key Information:** The frequency deviation for a 12.21 MHz reactance modulated oscillator in a 5 kHz deviation, 146.52 MHz FM phone transmitter is 416.7 Hz. {{< link id="G8B07" >}}

The deviation scales proportionally with frequency:

$$\text{Oscillator deviation} = \text{Final deviation} \times \frac{\text{Oscillator frequency}}{\text{Final frequency}}$$

$$\text{Deviation} = 5000 \text{ Hz} \times \frac{12.21 \text{ MHz}}{146.52 \text{ MHz}} = 416.7 \text{ Hz}$$

This proportional relationship means the initial frequency modulation can occur at a manageable level and then be multiplied up with the carrier frequency.

#### Operating Considerations for General Class

##### Power and Duty Cycle Management

Different modes place different demands on your transmitter:

> **Key Information:** It's important to know the duty cycle of your transmitting mode because some modes have high duty cycles that could exceed the transmitter's average power rating. {{< link id="G8B08" >}}

Two factors matter for heating: average RF power while transmitting compared with PEP, and how much time you spend transmitting rather than receiving. They are different parts of what operators often call duty cycle.

**Power while transmitting:**

- RTTY and FM can hold nearly constant output throughout a transmission.
- FT8 also has a nearly constant envelope during its RF burst. PSK31 and other long transmissions can impose substantial heating too.
- SSB voice often has average power well below its peaks; processing and speech patterns affect the ratio.

**Time spent transmitting:**

- An ordinary FT8 transmission lasts about 12.6 seconds. One transmission in a 30-second transmit/receive cycle gives about 42% transmit time, not 100%.
- CW keying, pauses in speech and time spent listening give equipment different opportunities to cool.

Follow the radio, amplifier and power-supply ratings; do not assume the transceiver automatically reduces output enough to protect every device. Section 7.3 applies these limits to transmitter setup. Section 6.5 covers the separate averaging intervals used for RF-exposure evaluation.

##### Receiver Sensitivity

Bandwidth also helps determine how weak a signal your receiver can usefully detect: its *sensitivity*. Noise arrives with the signal, but the receiver's own circuits add noise too. A weak signal must remain distinguishable from that combined noise to be useful.

> **Key Information:** Input amplifier gain, demodulator stage bandwidth, and input amplifier noise figure all affect receiver sensitivity. {{< link id="G7C08" >}}

The input amplifier boosts the signal before later stages process it. Enough gain can keep noise added by those later stages from dominating, but amplification does not separate a signal from noise already mixed with it. The amplifier's *noise figure* measures how much it degrades the signal-to-noise ratio; a lower noise figure means less degradation. Finally, the bandwidth used when recovering the information determines how much noise accompanies it.

Sensitivity depends on the whole receiving chain, not just how much you turn up the gain. Section 7.2 applies these ideas to the controls and interference you encounter while listening.

##### Digital Mode Considerations

For digital communications, there's a fundamental relationship:

> **Key Information:** Higher symbol rates require wider bandwidth. {{< link id="G8B10" >}}

For the same modulation and pulse shape, increasing symbol rate requires more bandwidth. Common modes illustrate the general trend, though their frequency shifts and signal shaping differ too:

- Slow modes like PSK31 (31.25 baud) use narrow bandwidth
- Medium-speed modes like RTTY (45 baud) need more bandwidth  
- High-speed modes like packet radio (1200+ baud) require wide bandwidth

You can put more bits into each symbol without increasing the symbol rate, but then the receiver must distinguish more states. For a fixed signaling arrangement, pushing symbols too fast for the available bandwidth makes them overlap and causes errors.

Mixing can move a wanted signal to a useful frequency, but the receiver still needs to separate it from noise and interference. We've seen how bandwidth affects that job. Next, we'll see how digital signal processing gives a radio flexible ways to filter and recover the signal.
