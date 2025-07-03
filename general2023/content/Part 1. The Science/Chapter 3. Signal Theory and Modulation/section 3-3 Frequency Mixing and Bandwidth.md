---
chapter: "3"
section: "3.3"
questions: ["G8B03", "G8B11", "G8B01", "G8B04", "G8B02", "G8B12", "G8B05", "G8B13", "G8B06", "G8B07", "G8B08", "G8B09", "G8B10"]
status: draft1
---

### Section 3.3: Frequency Mixing and Bandwidth

Ever wonder why your radio can tune to any frequency on the band instantly, yet still provide sharp selectivity and powerful amplification? Or why that strong local FM broadcast station sometimes causes interference to your 2-meter repeater? The answers lie in the fascinating world of frequency mixing—one of the most elegant engineering solutions in radio design.

As a General class operator exploring the crowded HF bands, understanding how signals mix and interact becomes more important than ever. You'll encounter situations where strong signals create unexpected interference, where your radio's design affects what you can and can't hear, and where bandwidth choices dramatically impact your operating success. These concepts explain the "why" behind many everyday amateur radio experiences.

#### The Magic of Heterodyning: Converting Problems into Solutions

Here's a fundamental challenge: How do you build a radio that can tune anywhere from 1.8 to 30 MHz with excellent selectivity? Building sharp filters that work across such a wide frequency range would be extremely difficult and expensive. The solution? Don't try to filter at the original frequency—convert everything to a standard intermediate frequency where excellent filtering is practical.

> **Key Information:** Heterodyning is another term for the mixing of two RF signals. {{< link id="G8B03" >}}

Heterodyning (or mixing) solves this problem elegantly. Instead of trying to filter your 14.230 MHz SSB signal directly, your radio converts it to a standard intermediate frequency (like 9 MHz) where sophisticated crystal filters can provide excellent selectivity. Same great filtering performance across the entire HF spectrum!

The heart of this process is the mixer, which combines your incoming signal with a locally generated frequency:

> **Key Information:** The sum and difference of a mixer's Local Oscillator (LO) and RF input frequencies are found in the output. {{< link id="G8B11" >}}

When you mix two frequencies, you get four output components:
- The original RF signal
- The original local oscillator (LO) signal  
- The sum frequency (RF + LO)
- The difference frequency (RF - LO)

For example, mixing a 14.230 MHz signal with a 5.230 MHz local oscillator produces:
- 14.230 MHz (original RF)
- 5.230 MHz (original LO)
- 19.460 MHz (sum)
- 9.000 MHz (difference)

By filtering out everything except the 9 MHz difference frequency, we've converted our 14.230 MHz signal to a standard 9 MHz intermediate frequency where excellent filtering and amplification are practical.

#### Tuning Your Radio: The Local Oscillator at Work

When you turn your radio's tuning knob (or click the frequency up/down buttons), you're actually adjusting the local oscillator frequency:

> **Key Information:** The local oscillator is the mixer input that is varied or tuned to convert signals of different frequencies to an intermediate frequency (IF). {{< link id="G8B01" >}}

Think about tuning from 14.230 MHz to 14.280 MHz:
- To receive 14.230 MHz: LO = 5.230 MHz (14.230 - 5.230 = 9.000 MHz IF)
- To receive 14.280 MHz: LO = 5.280 MHz (14.280 - 5.280 = 9.000 MHz IF)

The local oscillator tracks with your tuning, maintaining a constant 9 MHz difference frequency. This is why your radio can provide the same excellent selectivity across the entire band—every signal gets converted to the same IF where the best filtering happens.

#### Building Higher Frequencies: Frequency Multiplication

Sometimes we need frequencies that are difficult to generate directly. VHF and UHF transmitters often start with a lower, more stable frequency and multiply it up:

> **Key Information:** A multiplier is the stage in a VHF FM transmitter that generates a harmonic of a lower frequency signal to reach the desired operating frequency. {{< link id="G8B04" >}}

For example, generating a stable 146.520 MHz signal for 2-meter FM might work like this:
1. Start with a precise 12.21 MHz crystal oscillator
2. Multiply by 3 to get 36.63 MHz
3. Multiply by 4 to reach 146.52 MHz

This approach provides better frequency stability than trying to build an oscillator that runs directly at 146 MHz. Crystal oscillators are much more stable at lower frequencies, and the multiplication process preserves that stability.

#### The Dark Side of Mixing: Image Response

Here's where heterodyning gets tricky. Since mixing produces both sum and difference frequencies, two different input frequencies can produce the same IF:

> **Key Information:** Image response is interference from a signal at twice the IF frequency from the desired signal. {{< link id="G8B02" >}}

Let's use a concrete example. Say you want to receive 14.230 MHz using a 9 MHz IF. Your local oscillator needs to be either:
- 23.230 MHz (high-side injection: 23.230 - 14.230 = 9 MHz)
- 5.230 MHz (low-side injection: 14.230 - 5.230 = 9 MHz)

Most receivers use high-side injection, so let's go with LO = 23.230 MHz.

Here's the problem: while 14.230 MHz produces the desired 9 MHz IF (23.230 - 14.230 = 9), there's another frequency that also produces 9 MHz:
- 32.230 MHz also gives us: 32.230 - 23.230 = 9 MHz

This unwanted frequency (32.230 MHz) is called the "image" because it mirrors the desired frequency on the opposite side of the local oscillator. The image frequency is exactly twice the IF (18 MHz) away from the desired signal.

A strong signal at 32.230 MHz would interfere with reception of your 14.230 MHz signal because both produce the same 9 MHz IF. Your receiver can't tell them apart after mixing!

This is why receivers include preselector filters before the mixer—to block these unwanted image frequencies that would otherwise cause interference.

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

Sometimes intermodulation happens in the most unexpected places—out in the environment itself! Any junction between dissimilar metals can act like a primitive diode, and if that junction encounters strong RF signals, it can create intermodulation products just like an overdriven amplifier stage.

Common culprits include:
- **Corroded antenna connections**: Oxidation creates a semiconductor junction
- **Guy wire hardware**: Dissimilar metals in clamps, turnbuckles, and guy anchors
- **Fence wire and posts**: Especially galvanized wire on steel posts with loose connections
- **Tower hardware**: Bolted joints between different metal types
- **Nearby metal structures**: Water tanks, antennas on adjacent towers, even rain gutters

This becomes particularly problematic at mountain-top repeater sites where multiple high-power transmitters operate in close proximity. Strong signals from several repeaters can mix in unexpected places—perhaps in a loose guy wire connection or corroded tower joint—creating intermodulation products that fall right on another repeater's input frequency. The result? Phantom signals triggering repeaters or strange interference patterns that seem to come from nowhere.

These environmental mixing sources can be incredibly difficult to locate. Sometimes the problem only appears under certain weather conditions (when moisture changes the electrical characteristics of corroded connections), or when specific combinations of transmitters are active simultaneously. Troubleshooting often involves systematically turning off transmitters one by one to identify which combination creates the problem, then physically inspecting every metallic junction in the area.

The solution might be as simple as cleaning and properly connecting a guy wire, or as complex as installing band-pass filters on every transmitter to reduce the signal levels that reach the accidental mixing point. Understanding that these natural mixing phenomena can occur helps explain some of the stranger interference problems that occasionally puzzle even experienced engineers.

In one particularly bizarre case, a loose connection on a ham radio repeater created an unexpected mixing product with a local FM broadcast station at 94.9 MHz. The intermodulation product fell in the 330 MHz range—right where garage door openers operate! Neighbors throughout the area found their garage doors randomly opening and closing whenever the repeater was active. The problem was eventually traced to a corroded coaxial connector that was creating just enough of a diode junction to mix the repeater's signal with the strong FM broadcast station. A simple connector cleaning solved the mystery and restored peace to the neighborhood's garages.

When two strong signals (F1 and F2) interact in a non-linear device, they create a whole family of new frequencies:
- F1 + F2, F1 - F2 (second-order products)
- 2F1 + F2, 2F1 - F2, F1 + 2F2, F1 - 2F2 (third-order products)
- And many higher-order combinations

The most troublesome are the odd-order products:

> **Key Information:** Odd-order intermodulation products are closest to the original signal frequencies. {{< link id="G8B05" >}}

Here's why odd-order products cause the most problems. Consider two strong signals at 14.200 MHz and 14.250 MHz:
- Third-order product: 2(14.200) - 14.250 = 14.150 MHz
- Another third-order product: 2(14.250) - 14.200 = 14.300 MHz

These products (14.150 and 14.300 MHz) fall right in the 20-meter band where they can interfere with other stations! Second-order products would be much farther away and easier to filter out.

> **Key Information:** An example of an odd-order intermodulation product of frequencies F1 and F2 is 2F1-F2. {{< link id="G8B13" >}}

This is why contest stations work so hard to keep their signals clean—when you're running high power with multiple transmitters, intermodulation products can create interference across the entire band.

#### Signal Bandwidth: How Much Spectrum Space Do You Need?

Every signal occupies a certain amount of spectrum, and understanding bandwidth helps you operate considerately and effectively.

##### FM Bandwidth Calculations

FM signals require more bandwidth than you might expect:

> **Key Information:** The total bandwidth of an FM phone transmission having 5 kHz deviation and 3 kHz modulating frequency is 16 kHz. {{< link id="G8B06" >}}

This uses Carson's rule—a practical approximation for FM bandwidth:
$BW = 2(\Delta f + f_m)$

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

**High duty cycle modes** (continuous transmission):
- RTTY, PSK31, FT8: Nearly 100% duty cycle
- FM: 100% when transmitting
- These modes may require power reduction to prevent overheating

**Low duty cycle modes** (intermittent transmission):
- SSB voice: ~30% duty cycle (pauses between words)
- CW: Varies with sending speed and spacing
- These modes allow cooling during pauses

Many modern transceivers automatically reduce power for high duty cycle digital modes or provide separate power settings for different mode categories.

##### Optimizing Reception with Proper Bandwidth

Here's a key principle for good reception:

> **Key Information:** Matching receiver bandwidth to the bandwidth of the operating mode results in the best signal-to-noise ratio. {{< link id="G8B09" >}}

Using the right bandwidth filter:
- **Too wide**: Admits unnecessary noise, reducing signal-to-noise ratio
- **Too narrow**: Can distort the signal, making it sound muffled or cutting off parts of the information
- **Just right**: Admits the entire signal while rejecting noise outside the signal bandwidth

Typical filter selections:
- CW: 250-500 Hz
- RTTY: 250-300 Hz  
- PSK31: 500 Hz
- SSB: 2.4-2.8 kHz
- AM: 6 kHz

##### Digital Mode Considerations

For digital communications, there's a fundamental relationship:

> **Key Information:** Higher symbol rates require wider bandwidth. {{< link id="G8B10" >}}

This is why:
- Slow modes like PSK31 (31.25 baud) use narrow bandwidth
- Medium-speed modes like RTTY (45 baud) need more bandwidth  
- High-speed modes like packet radio (1200+ baud) require wide bandwidth

You can't just cram more data into the same bandwidth without consequences—attempting to exceed this fundamental limit results in intersymbol interference and errors.

#### Practical Applications

Understanding frequency mixing and bandwidth helps you:

**Troubleshoot Interference:**
- Identify when strong local signals are creating intermodulation products
- Recognize image responses and take appropriate filtering action
- Track down the sources of mixing-related interference

**Optimize Your Station:**
- Select appropriate antenna filters to reduce image problems
- Choose proper power levels for different duty cycle modes
- Use correct receiver bandwidths for best reception

**Operate Considerately:**
- Keep your transmitted bandwidth within acceptable limits
- Avoid overmodulation that creates splatter on adjacent frequencies
- Understand why your signal bandwidth affects other operators

**Make Better Equipment Choices:**
- Evaluate receiver specifications for image rejection performance
- Select filters appropriate for your operating interests
- Choose transmitters with appropriate duty cycle ratings for your preferred modes

The concepts in this section reveal the elegant engineering that makes modern amateur radio possible. By understanding how frequencies mix and interact, you'll be better equipped to get the most from your General class privileges while being a good neighbor on the increasingly crowded HF bands.
