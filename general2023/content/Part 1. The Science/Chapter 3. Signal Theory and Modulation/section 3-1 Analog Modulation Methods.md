---
chapter: "3"
section: "3.1"
questions: ["G8A05", "G8A11", "G8A10", "G8A07", "G7C02", "G7C01", "G7C04", "G8A03", "G8A02", "G8A04", "G8A08"]
---

### Section 3.1: Analog Modulation Methods

As a Technician, you probably focused on FM for local communications. Now with your General class privileges, you'll be working with a much wider variety of modulation methods—particularly single sideband (SSB)—for your HF contacts. But why do we need all these different ways to put information on a radio wave? Each method was developed to solve specific problems, and understanding these solutions will help you choose the right mode and operate more effectively.

#### Why Different Modulation Methods Matter

Radio communication started simple: turning a carrier on and off to send Morse code. But as soon as people wanted to send voice, they needed a way to "paint" the constantly changing audio onto a radio wave. The challenge is that radio waves have only three characteristics we can modify:

1. **Amplitude** (strength/height of the wave)
2. **Frequency** (how fast it oscillates)
3. **Phase** (the timing within each cycle)

Each approach to modifying these characteristics creates different trade-offs between bandwidth, power efficiency, noise resistance, and complexity. Let's explore how each method works and why you'd choose one over another.

#### Amplitude Modulation: The Foundation

Amplitude modulation was the first practical way to send voice over radio, and understanding it is crucial because more advanced methods build on these concepts.

The name of the process that varies the instantaneous power level of the RF signal is amplitude modulation. {{< link id="G8A05" >}} As your voice gets louder, the carrier gets stronger; as your voice gets quieter, the carrier gets weaker. The carrier strength follows your voice exactly.

> **Key Information:** Amplitude modulation varies the instantaneous power level of the RF signal.

![Amplitude Modulation Waveform](../images/amplitude-modulation.svg)

Looking at an AM signal on an oscilloscope, you can actually see the shape of the audio signal traced out by the peaks of the RF carrier. The modulation envelope of an AM signal is the waveform created by connecting the peak values of the modulated signal. {{< link id="G8A11" >}} This envelope is a perfect replica of the original audio—which is exactly how AM receivers recover the voice.

> **Key Information:** The modulation envelope of an AM signal is the waveform created by connecting the peak values of the modulated signal.

##### The AM Problem

While AM works well, it has a fundamental inefficiency problem. When you transmit an AM signal, you're actually sending three separate components:
- A carrier wave (contains no information)
- An upper sideband (contains your voice)
- A lower sideband (contains the same voice information)

The carrier uses about 67% of your total power but carries zero information. Each sideband uses about 16.5% of the power, but they contain identical information. You're essentially transmitting the same message three times while wasting most of your power on an empty carrier!

##### When AM Goes Wrong

AM is particularly susceptible to a problem called flat-topping. The term "flat-topping," when referring to an amplitude-modulated phone signal, means signal distortion caused by excessive drive or speech levels. {{< link id="G8A10" >}} When you overdrive an AM transmitter, the peaks of the waveform get clipped off flat, creating a harsh, distorted sound and splatter interference on adjacent frequencies.

> **Key Information:** "Flat-topping" in an AM phone signal refers to signal distortion caused by excessive drive or speech levels.

![Flat-Topping Waveform](../images/flat-topping.svg)

#### Single Sideband: Trading Simplicity for Efficiency

Single sideband was developed to maximize efficiency for point-to-point communications. If both sidebands contain the same information and the carrier contains no information, why not eliminate the redundancy?

The phone emission that uses the narrowest bandwidth is single sideband. {{< link id="G8A07" >}} SSB eliminates the carrier and one sideband, keeping only the sideband that contains your voice. This creates significant efficiency gains:
- Uses half the bandwidth of AM
- Puts all your power into the information-carrying signal
- Provides better range with the same power
- Reduces interference to adjacent frequencies

> **Key Information:** Single sideband is the phone emission that uses the narrowest bandwidth.

However, SSB comes with trade-offs. It requires more complex equipment, precise tuning, and more skill to operate effectively. AM remains preferred for broadcasting because it's simpler for listeners—any basic AM radio can receive it without precise tuning. SSB excels where efficiency and spectrum conservation matter most, particularly in amateur radio and other point-to-point services.

##### Creating SSB: The Two-Step Process

Building an SSB transmitter requires two key circuits working together:

**Step 1: The Balanced Modulator**
A balanced modulator produces double-sideband modulated RF. {{< link id="G7C02" >}} This special mixer circuit combines your audio with the carrier frequency, but through clever circuit design, it cancels out the carrier itself. The output contains only the upper and lower sidebands—your voice information is now carried in two separate frequency bands above and below where the carrier used to be.

> **Key Information:** A balanced modulator produces double-sideband modulated RF.

**Step 2: The Sideband Filter**
A filter is used to select one of the sidebands from a balanced modulator. {{< link id="G7C01" >}} This filter has a very sharp cutoff that passes one sideband while rejecting the other. The result is a single sideband containing all your voice information in the most efficient form possible.

> **Key Information:** A filter is used to select one of the sidebands from a balanced modulator.

![SSB Generation Process](../images/ssb-generation.svg)

##### Receiving SSB: Putting It Back Together

Since SSB has no carrier, the receiver must supply one to make the signal intelligible. A product detector is used in a single sideband receiver to extract the modulated signal. {{< link id="G7C04" >}} This detector mixes the incoming SSB signal with a locally generated carrier (called a Beat Frequency Oscillator or BFO). When you tune an SSB signal, you're actually adjusting this local carrier frequency until voices sound natural.

> **Key Information:** A product detector is used in a single sideband receiver to extract the modulated signal.

This is why SSB signals sound like "Donald Duck" when you're not tuned quite right—the local carrier frequency is slightly off, making voices sound too high or too low.

##### Sideband Selection: USB vs LSB

By amateur radio convention:
- **Lower Sideband (LSB)**: 160, 80, and 40 meters
- **Upper Sideband (USB)**: 20, 17, 15, 12, and 10 meters (and all VHF/UHF)

Both sidebands contain identical information, but choosing the wrong one makes the received audio sound inverted and unintelligible. These conventions ensure everyone uses compatible settings.

#### Frequency and Phase Modulation: Constant-Amplitude Alternatives

While AM varies the signal's strength, frequency and phase modulation keep the amplitude constant and instead vary other characteristics. This approach offers excellent noise immunity because most noise affects amplitude rather than frequency or phase.

##### Frequency Modulation (FM)

The name of the process that changes the instantaneous frequency of an RF wave to convey information is frequency modulation. {{< link id="G8A03" >}} As your voice goes up in pitch, the carrier frequency moves up; as your voice goes down, the carrier frequency moves down. The amount of frequency change (called deviation) determines how loud your voice sounds on the receiving end.

> **Key Information:** Frequency modulation changes the instantaneous frequency of an RF wave to convey information.

![Frequency Modulation Waveform](../images/frequency-modulation.svg)

FM's constant amplitude makes it highly resistant to noise and interference, which is why it's preferred for VHF/UHF communications and broadcasting.

##### Phase Modulation (PM)

Back in Section 1.2, we introduced the concept of phase using a spinning wheel analogy—phase tells us where a point is in its rotation cycle, measured in degrees. We also showed how the position around a circle directly corresponds to the position on a sine wave (remember that helpful animation?). Phase modulation builds directly on these concepts.

The name of the process that changes the phase angle of an RF signal to convey information is phase modulation. {{< link id="G8A02" >}} Instead of keeping the carrier wave's timing constant, phase modulation shifts when each cycle begins relative to a reference timing.

> **Key Information:** Phase modulation changes the phase angle of an RF signal to convey information.

Picture this: if an unmodulated carrier is like a metronome keeping perfect time, phase modulation is like occasionally making the metronome tick slightly early or late based on your voice. When your voice signal is positive, the carrier phase might advance (each cycle starts a bit earlier); when your voice signal is negative, the phase might be delayed (each cycle starts a bit later).

Here's the interesting part: when you change the phase of a signal, you're actually creating small frequency changes. Remember from Section 1.2 that frequency tells us how many cycles occur per second. If you advance the phase, you're temporarily fitting more cycles into the same time period (higher frequency). If you delay the phase, you're temporarily fitting fewer cycles (lower frequency). That's why phase modulation and frequency modulation sound nearly identical on the receiving end—they both result in frequency variations, just achieved through different means.

Many modern transmitters actually use phase modulation to create what effectively becomes an FM signal. A reactance modulator connected to a transmitter RF amplifier stage produces phase modulation. {{< link id="G8A04" >}} 

A reactance modulator is a voltage-controlled device that changes its reactance (the X we learned about in Section 1.2) in response to the audio signal. Remember that reactance is the opposition to AC current flow caused by inductance or capacitance. When connected to an oscillator circuit, this changing reactance causes the oscillator's frequency to shift slightly, which shows up as phase modulation. The modulator literally changes the L or C values in the oscillator's tuned circuit based on your voice, causing the phase to shift. This approach is often easier to implement than direct frequency modulation because it requires less complex circuitry.

> **Key Information:** A reactance modulator connected to a transmitter RF amplifier produces phase modulation.

![Phase Modulation Diagram](../images/phase-modulation.svg)

#### Preventing Modulation Problems

Regardless of which modulation method you use, proper operation prevents interference and ensures good signal quality.

##### Understanding Overmodulation

One of the most common problems across all modulation types is overmodulation. An effect of overmodulation is excessive bandwidth. {{< link id="G8A08" >}} When you drive your transmitter too hard—whether with voice levels that are too high, microphone gain set too high, or speech processing set too aggressively—the signal spreads beyond its normal bandwidth and creates interference on adjacent frequencies.

> **Key Information:** Excessive bandwidth is an effect of overmodulation.

Signs of overmodulation include:
- Distorted audio reports from other stations
- ALC (Automatic Level Control) lights constantly active
- Flat-topped waveforms on an oscilloscope
- Interference complaints from stations on nearby frequencies

##### Proper Station Setup

To avoid modulation problems:

**For SSB Operation:**
- Set microphone gain so ALC activates only on voice peaks
- Position the microphone about 2 inches from your mouth
- Speak in a normal, conversational tone
- Use speech processing sparingly—it can help in weak signal conditions but easily causes overmodulation

**For FM Operation:**
- Set deviation to standard levels (typically 2.5 kHz for narrow FM)
- Keep microphone gain moderate—FM doesn't benefit from high audio levels
- Remember that FM requires stronger signals than SSB to be usable

**General Guidelines:**
- Monitor your transmitted signal when possible (use a second receiver or ask for audio reports)
- Watch your transmitter's meters—especially ALC and SWR
- If you have access to an oscilloscope, use it to check your modulation quality

#### Choosing the Right Modulation Method

Your choice of modulation depends on several factors:

**Use SSB when:**
- Operating HF for long-distance communication
- Power efficiency matters (portable/mobile operation)
- Bandwidth is limited
- You need maximum range from your power

**Use FM when:**
- Operating VHF/UHF for local communication
- Audio quality is more important than efficiency
- You're using repeaters (most require FM)
- You want simple, reliable operation

**Use AM when:**
- Operating with vintage equipment or in special events
- You want compatibility with AM broadcast receivers
- Simplicity of operation is the priority

Understanding these analog modulation methods gives you the foundation for effective HF operation and sets the stage for understanding the digital modes we'll explore next. Each method represents a different solution to the challenge of efficiently conveying information over radio waves, and knowing when and how to use each one will make you a more effective operator.