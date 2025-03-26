---
slug: "section5.1"
questions: ["G8A02", "G8A03", "G8A04", "G8A05", "G8A07", "G8A08", "G8A10", "G8A11", "G7C01", "G7C02", "G7C04"]
---

### Section 3.1: Analog Modulation Methods

As a Technician, you probably focused on FM for local communications. Now with your General class privileges, you'll be using a variety of analog modulation methods—particularly single sideband (SSB)—for your HF contacts. Understanding how these methods work will help you operate more effectively and troubleshoot problems when they arise.

#### The Basics of Modulation

Modulation is the process of adding information to a radio wave. Think of it as "painting" your voice (or other information) onto a carrier wave so it can travel through space to a distant receiver. The three fundamental characteristics of a radio wave that can be modified are:

1. **Amplitude** (height of the wave)
2. **Frequency** (cycles per second)
3. **Phase** (timing of the wave cycle)

Each of these gives us a different modulation method with unique advantages and applications.

#### Amplitude Modulation (AM)

> **Key Information:** *Amplitude modulation varies the instantaneous power level of the RF signal.* {{< link id="G8A05" >}}

<img src="../images/amplitude-modulation.svg" alt="Amplitude Modulation Waveform" style="width: 400px; margin: 10px;">

In AM, the strength (amplitude) of the carrier signal varies in step with the modulating signal. This creates a predictable pattern:

> **Key Information:** *The modulation envelope of an AM signal is the waveform created by connecting the peak values of the modulated signal.* {{< link id="G8A11" >}}

AM was the first voice modulation method used in radio and remains in use for some broadcast applications. However, it's relatively inefficient for two-way communications because:
- The carrier contains no information but uses most of the power
- Both sidebands contain identical information
- It requires more bandwidth than necessary

For these reasons, AM has largely been replaced by more efficient methods in amateur radio, though you might still hear it occasionally on HF.

#### Single Sideband (SSB)

When an AM signal is created, it produces three components: the carrier and two sidebands (upper and lower). Each sideband contains all the information needed for communication. SSB takes advantage of this redundancy:

> **Key Information:** *Single sideband (SSB) is the phone emission that uses the narrowest bandwidth.* {{< link id="G8A07" >}}

<img src="../images/ssb-generation.svg" alt="SSB Generation Process" style="width: 450px; margin: 10px;">

To create an SSB signal:

1. A balanced modulator combines the carrier and audio to produce a double-sideband, suppressed-carrier signal:

> **Key Information:** *A balanced modulator produces double-sideband modulated RF.* {{< link id="G7C02" >}}

2. Then a filter selects one sideband and rejects the other:

> **Key Information:** *A filter is used to select one of the sidebands from a balanced modulator.* {{< link id="G7C01" >}}

For receiving SSB:

> **Key Information:** *A product detector is used in a single sideband receiver to extract the modulated signal.* {{< link id="G7C04" >}}

The product detector combines the incoming SSB signal with a locally generated carrier to reconstruct the original audio.

##### USB vs. LSB: Which Sideband to Use

By convention, we use:
- **Lower Sideband (LSB)** on 160, 80, and 40 meters
- **Upper Sideband (USB)** on 20, 17, 15, 12, and 10 meters (and all VHF/UHF)

LSB and USB are mirror images of each other—if you try to receive an LSB signal with your radio set to USB, the voice will sound inverted and unintelligible.

##### SSB Operating Tips

- Set your microphone gain properly to avoid distortion
- Speak across the microphone rather than directly into it
- Maintain consistent distance from the microphone
- Use speech processing carefully to increase average power without distortion

#### Frequency Modulation (FM)

> **Key Information:** *Frequency modulation changes the instantaneous frequency of an RF wave to convey information.* {{< link id="G8A03" >}}

<img src="../images/frequency-modulation.svg" alt="Frequency Modulation Waveform" style="width: 400px; margin: 10px;">

With FM, the carrier frequency varies above and below its center frequency in proportion to the audio signal. The amplitude remains constant, which gives FM excellent noise rejection—one reason it's popular for VHF/UHF communication.

While you'll mostly use FM on VHF/UHF, it's also available on 10 meters and occasionally on other HF bands with your General privileges.

#### Phase Modulation (PM)

> **Key Information:** *Phase modulation changes the phase angle of an RF signal to convey information.* {{< link id="G8A02" >}}

<img src="../images/phase-modulation.svg" alt="Phase Modulation Diagram" style="width: 400px; margin: 10px;">

Phase modulation is closely related to FM—so closely that the end result sounds the same on the air. The difference is in how the signal is generated:

> **Key Information:** *A reactance modulator connected to a transmitter RF amplifier produces phase modulation.* {{< link id="G8A04" >}}

In practice, phase modulation often serves as an easier way to generate what effectively becomes an FM signal. Your radio likely uses phase modulation internally even when you're operating in "FM mode."

#### Avoiding Modulation Problems

No matter which modulation method you use, proper adjustment prevents problems:

##### Overmodulation

> **Key Information:** *Excessive bandwidth is an effect of overmodulation.* {{< link id="G8A08" >}}

Overmodulation occurs when you drive your transmitter too hard, causing the signal to spread beyond its normal bandwidth. This creates interference on adjacent frequencies and distorts your signal.

##### Flat-Topping in SSB

> **Key Information:** *"Flat-topping" in an AM phone signal refers to signal distortion caused by excessive drive or speech levels.* {{< link id="G8A10" >}}

<img src="../images/flat-topping.svg" alt="Flat-Topping Waveform" style="width: 350px; margin: 10px;">

On an oscilloscope, overdriven SSB looks like the peaks of the waveform have been chopped off flat. This creates splatter (interference to adjacent frequencies) and makes your audio sound distorted.

To avoid flat-topping:
- Set microphone gain properly
- Use speech processing conservatively
- Watch your ALC (Automatic Level Control) meter
- If your station has an oscilloscope, use it to monitor your transmitted waveform

#### Practical Applications in Your Station

As a General class operator, you'll primarily use SSB for HF voice communications. Here's how these modulation concepts apply in everyday operation:

1. **Setting Up for SSB**:
   - Adjust microphone gain so ALC shows activity only on voice peaks
   - Position your microphone for clear, natural audio
   - Use speech processing if needed for difficult conditions, but don't overdo it

2. **Receiving SSB Effectively**:
   - Select the correct sideband (LSB or USB) for the band
   - Fine-tune for natural voice sound
   - Use RF gain and attenuator controls to optimize signal-to-noise ratio

3. **Using FM on 10 Meters**:
   - Set deviation appropriately (2.5 kHz typical for narrow FM)
   - Remember that FM requires more signal strength than SSB to be effective
   - Use repeaters when available for extended coverage

#### From Theory to Practice

Understanding analog modulation methods helps you:
- Select the appropriate mode for different bands and conditions
- Adjust your transmitter for clean, effective signals
- Troubleshoot reception problems
- Know what to expect when listening to different types of signals

These analog modes remain the foundation of amateur voice communications, but they're just the beginning. Next, we'll explore digital modulation techniques that are revolutionizing how we communicate over radio.
