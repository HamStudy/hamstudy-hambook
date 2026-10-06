---
chapter: "3"
section: "3.1"
questions: ["G8A05", "G8A11", "G8A10", "G8A07", "G7C02", "G7C01", "G7C04", "G8A03", "G8A02", "G8A04", "G8A08"]
status: draft1
---

### Section 3.1: Analog Modulation Methods

As a Technician, you probably focused on FM for local communications. As you prepare for General class privileges, you'll be working with a much wider variety of modulation methods—particularly single sideband (SSB)—for your HF contacts. But why do we need all these different ways to put information on a radio wave? Each method was developed to solve specific problems, and understanding these solutions will help you choose the right mode and operate more effectively.

#### Why Different Modulation Methods Matter

Early radio communication used keyed signals to send Morse code. But as soon as people wanted to send voice, they needed a way to "paint" the constantly changing audio onto a radio wave. We can carry that audio by varying one of three characteristics of a radio wave:

1. **Amplitude** (strength/height of the wave)
2. **Frequency** (how fast it oscillates)
3. **Phase** (the timing within each cycle)

Each approach to modifying these characteristics creates different trade-offs between bandwidth, power efficiency, noise resistance, and complexity. Let's explore how each method works and why you'd choose one over another.

#### Amplitude Modulation: The Foundation

Amplitude modulation provides a direct way to send voice over radio, and understanding it is crucial because more advanced methods build on these concepts.

The RF amplitude follows the instantaneous audio voltage: positive and negative parts of the audio wave make it rise above and fall below its unmodulated level. Louder audio makes those changes larger.

> **Key Information:**
> - Amplitude modulation varies the instantaneous power level of the RF signal. {{< link id="G8A05" >}}
> - The modulation envelope of an AM signal is the waveform created by connecting the peak values of the modulated signal. {{< link id="G8A11" >}}

![An audio sine wave appears above an amplitude-modulated radio-frequency wave. Time runs from left to right in both. Many RF cycles fit within each slow audio cycle. As the audio voltage rises, the RF peaks grow taller; as it falls, they shrink. The RF cycles remain evenly spaced. Dashed lines joining their positive and negative peaks outline the modulation envelope. Its upper boundary follows the shape of the audio wave.](../../../images/s3-1-amplitude-modulation.svg)
{.img-centered}

Looking at an AM signal on an oscilloscope, you can actually see the shape of the audio signal traced out by the peaks of the RF carrier. With proper modulation, the envelope is a scaled version of the audio, offset above zero—which is how an envelope detector recovers the voice.

##### The AM Problem

While AM works well, it has a fundamental inefficiency problem. When you transmit an AM signal, you're actually sending three separate components:
- A carrier wave (contains no information)
- An upper sideband (contains your voice)
- A lower sideband (contains the same voice information)

For 100% modulation by a single sine-wave tone, about two-thirds of the average power is in the carrier and one-sixth in each sideband. Speech does not have a fixed split like that. You’re sending the same audio information in two sidebands while also supplying power to a carrier that carries no changing message!

##### When AM Goes Wrong

AM is particularly susceptible to a problem called flat-topping. Overdriving an AM transmitter clips the peaks of the waveform flat, creating a harsh, distorted sound and splatter interference on adjacent frequencies.

> **Key Information:** "Flat-topping" in an AM phone signal refers to signal distortion caused by excessive drive or speech levels. {{< link id="G8A10" >}}

![A normal AM envelope expands and contracts smoothly, with rounded peaks above and below a center line. In the flat-topped example, the largest peaks reach a limit and stay flat for part of the cycle. Both the upper and lower boundaries are clipped. Those flattened sections replace the rounded peaks, so the envelope no longer follows the audio faithfully. This is the distorted shape caused by excessive drive or speech levels.](../../../images/s3-1-flat-topping.svg)
{.img-centered}

#### Single Sideband: Trading Simplicity for Efficiency

Single sideband was developed to maximize efficiency for point-to-point communications. If both sidebands contain the same information and the carrier contains no information, why not eliminate the redundancy?

SSB eliminates the carrier and one sideband, keeping only the sideband that contains your voice. This creates significant efficiency gains:
- Uses half the bandwidth of AM for the same audio range
- Puts all your power into the information-carrying signal
- Can improve weak-signal communication for the same transmitter power

> **Key Information:** Of these conventional analog phone emissions, single sideband uses the narrowest bandwidth. {{< link id="G8A07" >}}

However, SSB comes with trade-offs. It requires more complex equipment, precise tuning, and more skill to operate effectively. AM remains preferred for broadcasting because it's simpler for listeners—any basic AM radio can receive it without needing to reconstruct a suppressed carrier. SSB excels where efficiency and spectrum conservation matter most, particularly in amateur radio and other point-to-point services.

##### Creating SSB: The Two-Step Process

One common way to build an SSB transmitter uses two key circuits working together:

> **Key Information:**
> - A balanced modulator produces double-sideband modulated RF. {{< link id="G7C02" >}}
> - A filter is used to select one of the sidebands from a balanced modulator. {{< link id="G7C01" >}}

**Step 1: The Balanced Modulator**
This special mixer circuit combines your audio with the carrier frequency, but through clever circuit design, it cancels out the carrier itself. The output contains only the upper and lower sidebands—your voice information is now carried in two separate frequency bands above and below where the carrier used to be.

**Step 2: The Sideband Filter**
This filter has a very sharp cutoff that passes one sideband while rejecting the other. The result is a single sideband containing all your voice information.

![Audio and a radio-frequency reference enter a balanced modulator. It produces a lower sideband and an upper sideband while suppressing the carrier between them. The signal then passes through a sideband filter to the single-sideband output. In this example, the filter passes the upper sideband and rejects the lower one. The small frequency plots show both sidebands before filtering and only the upper sideband afterward. Frequency increases from left to right; a dashed mark shows where the suppressed carrier would be.](../../../images/s3-1-ssb-generation.svg)
{.img-centered}

##### Receiving SSB: Putting It Back Together

Since SSB has no carrier, the receiver must supply one to make the signal intelligible. A product detector mixes the incoming SSB signal with a local carrier generated by a beat frequency oscillator, or BFO. When you tune an SSB signal, you align the received signal with that local reference until voices sound natural. Which oscillator changes depends on the receiver design.

> **Key Information:** A product detector is used in a single sideband receiver to extract the modulated signal. {{< link id="G7C04" >}}

This is why SSB signals sound like "Donald Duck" when you're not tuned quite right—the local carrier frequency is slightly off, making voices sound too high or too low.

##### Sideband Selection: USB vs LSB

For SSB voice, amateur radio convention is:
- **Lower Sideband (LSB)**: 160, 80, and 40 meters
- **Upper Sideband (USB)**: 20, 17, 15, 12, and 10 meters (and all VHF/UHF)

Both sidebands contain identical information, but choosing the wrong one makes the received audio sound inverted and unintelligible. These conventions help stations choose compatible settings. Digital modes can use other conventions, and 60 meters has special rules; Section 9.1 covers actual frequency and emission permissions.

#### Frequency and Phase Modulation: Constant-Amplitude Alternatives

While AM varies the signal's strength, frequency and phase modulation keep the amplitude constant and instead vary other characteristics. This approach offers excellent noise immunity because a receiver can limit unwanted amplitude changes before detecting the signal.

##### Frequency Modulation (FM)

The instantaneous audio voltage moves the RF frequency above or below its center value. Louder audio produces greater **deviation**, the maximum frequency change. Higher audio pitch makes those swings repeat faster; it does not simply move the carrier upward.

> **Key Information:** Frequency modulation changes the instantaneous frequency of an RF wave to convey information. {{< link id="G8A03" >}}

![An audio wave rises and falls above a frequency-modulated radio-frequency wave. Time runs from left to right. The RF peaks keep the same height, but the cycles bunch closer together and then spread farther apart as the audio changes. Closely spaced cycles mean a higher instantaneous frequency; widely spaced cycles mean a lower one. The pattern repeats with the audio wave. Here the information changes the spacing of the RF cycles, rather than their height.](../../../images/s3-1-frequency-modulation.svg)
{.img-centered}

FM's constant amplitude lets receivers reject some amplitude noise, making it useful for local VHF/UHF communication and broadcasting. It still becomes noisy when the signal is weak and can suffer interference.

##### Phase Modulation (PM)

Back in Section 1.2, we introduced the concept of phase using a spinning wheel analogy—phase tells us where a point is in its rotation cycle, measured in degrees. Phase modulation builds directly on these concepts.

Instead of keeping the carrier wave's timing constant, phase modulation shifts when each cycle begins relative to a reference timing.

> **Key Information:** Phase modulation changes the phase angle of an RF signal to convey information. {{< link id="G8A02" >}}

Picture this: if an unmodulated carrier is like a metronome keeping perfect time, phase modulation is like occasionally making the metronome tick slightly early or late based on your voice. When your voice signal is positive, the carrier phase might advance (each cycle starts a bit earlier); when your voice signal is negative, the phase might be delayed (each cycle starts a bit later).

Here's the interesting part: when you change the phase of a signal, you're actually creating small frequency changes. Remember that frequency tells us how many cycles occur per second. If you advance the phase, you're temporarily fitting more cycles into the same time period (higher frequency). If you delay the phase, you're temporarily fitting fewer cycles (lower frequency). While the phase is changing, the instantaneous frequency changes too. A fixed phase offset alone does not cause a continuing frequency change. FM and PM both produce frequency variations, but their response to audio differs; audio shaping can make an indirect-FM system behave as intended.

Many modern transmitters actually use phase modulation to create what effectively becomes an FM signal.

A reactance modulator is a voltage-controlled device that changes its reactance (the X we learned about earlier) in response to the audio signal. Remember that reactance is the opposition to AC current flow caused by inductance or capacitance. In an RF amplifier stage, changing reactance shifts the phase of the signal passing through that stage. In an oscillator’s tuned circuit, the same reactance change shifts the generated frequency and produces FM. The amplifier-versus-oscillator distinction is the key to this exam question.

> **Key Information:** A reactance modulator connected to a transmitter RF amplifier produces phase modulation. {{< link id="G8A04" >}}



#### Preventing Modulation Problems

Regardless of which modulation method you use, proper operation prevents interference and ensures good signal quality.

##### Understanding Overmodulation

One of the most common problems across all modulation types is overmodulation. When you drive your transmitter too hard—whether with voice levels that are too high, microphone gain set too high, or speech processing set too aggressively—the signal spreads beyond its normal bandwidth and creates interference on adjacent frequencies.

> **Key Information:** Excessive bandwidth is an effect of overmodulation. {{< link id="G8A08" >}}

Signs of overmodulation include:
- Distorted audio reports from other stations
- ALC (Automatic Level Control) indications outside the radio manufacturer’s recommended range
- Flat-topped waveforms on an oscilloscope
- Interference complaints from stations on nearby frequencies

##### Proper Station Setup

To avoid modulation problems:

**For SSB Operation:**
- Set microphone gain using the manufacturer’s recommended ALC indication
- Use the microphone distance recommended by its manufacturer (usually about 2 inches from your mouth)
- Speak in a normal, conversational tone
- Use speech processing sparingly—it can help in weak signal conditions but easily causes overmodulation

**For FM Operation:**
- Set deviation to standard levels (typically 2.5 kHz for narrow FM)
- Keep microphone gain moderate—FM doesn't benefit from high audio levels
- Remember that FM becomes much noisier when the received signal falls below the receiver’s useful threshold

**General Guidelines:**
- Monitor your transmitted signal when possible (use a second receiver or ask for audio reports)
- Watch your transmitter’s meters—ALC helps assess drive; SWR checks the load, not modulation quality
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
- You're using an FM repeater
- You want simple, reliable operation

**Use AM when:**
- Operating with vintage equipment or in special events
- You want compatibility with AM broadcast receivers
- Simplicity of operation is the priority

Understanding these analog modulation methods gives you the foundation for effective HF operation and sets the stage for understanding the digital modes we'll explore next.
