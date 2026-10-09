---
chapter: "4"
section: "4.1"
questions: ["E8A01", "E7E07", "E7E08", "E7E10", "E7E04", "E7E11", "E8A06", "E8A07"]
status: generated1
draft: true
---

### Section 4.1: Spectra, Mixing, and SSB

To see which frequencies a filter must pass or remove, we need a spectrum as well as a waveform. An oscilloscope plots voltage against time; a spectrum display separates the same signal into frequency components. The two views let us connect a waveform's shape to the frequencies it occupies.

#### Frequencies in a Waveform

*A pure sine wave has one frequency.* *A square wave needs more: a fundamental, which repeats at the square wave's rate, plus odd harmonics at three, five, seven, and higher odd multiples of that frequency.* Their amplitudes and phases combine to form the flat tops and sharp edges.

> **Key Information:** Fourier analysis shows that a square wave consists of a sine wave and its odd harmonics. {{< link id="E8A01" >}}

![Four plots compare sine and square waves at the same fundamental frequency, f zero. The time plots at left show two cycles: a smooth sine wave above and a square wave switching between flat positive and negative levels below. At right, the sine wave has a single frequency component at f zero. The square wave has components at f zero, three f zero, five f zero, and seven f zero, with relative amplitudes one, one third, one fifth, and one seventh. No components appear at even multiples; the odd-harmonic series continues beyond the drawing.](../../../images/s4-1-waveforms-and-spectra.svg)
{.img-centered .img-xlarge .img-mobile-full caption="A sine wave (top) has one frequency; a square wave (bottom) contains odd harmonics. Left: voltage over time. Right: relative component amplitudes, scaled to each fundamental. The odd-harmonic series continues."}

Analysis finds components already present. A mixer does something different: it acts on incoming signals to create new frequency components.

#### Moving a Message Onto RF

*Microphone audio occupies the message's baseband: its frequency range before modulation.* Moving that spectrum onto RF creates the sidebands. The filter after a mixer must select the wanted conversion and reject other output components.

> **Key Information:**
> - Baseband is the frequency range occupied by a message signal before modulation. {{< link id="E7E07" >}}
> - The principal frequencies at a mixer's output are its two input frequencies, their sum, and their difference. {{< link id="E7E08" >}}

Suppose a mixer receives 10 MHz and 1 MHz. Its output can contain 10 MHz, 1 MHz, 11 MHz, and 9 MHz. A following filter selects the wanted result. Balanced mixers suppress some of these components, but the sum-and-difference relationship still explains frequency conversion.

Mixing a carrier with speech produces upper-sideband sums and lower-sideband differences for each audio frequency. Ordinary AM sends both sidebands and the carrier, with an envelope that follows the audio.

To recover that audio, an envelope detector must discard the rapid RF cycles while retaining their slower amplitude changes. *A diode rectifies the RF, then a resistor-capacitor network smooths the carrier cycles while following the envelope.* For a properly formed AM signal, the result reproduces the audio.

> **Key Information:** A diode envelope detector works by rectifying and filtering RF signals. {{< link id="E7E10" >}}

#### Sending One Sideband

To generate SSB, we need to remove the carrier and one of the two sidebands carrying the same message. *A balanced modulator produces double-sideband suppressed-carrier energy, then a filter removes the unwanted sideband.*

At the receiver, there is no strong transmitted carrier for an envelope detector to follow. *A product detector mixes the received sideband with a locally generated carrier.* The difference frequencies reproduce the audio. Tune that local carrier incorrectly and the recovered voice shifts in pitch. As you tune across an SSB voice, listen for that change: the receiver is changing the difference between the incoming sideband and its own carrier.

> **Key Information:**
> - A balanced modulator followed by a filter can produce an SSB phone signal. {{< link id="E7E04" >}}
> - A product detector demodulates SSB signals. {{< link id="E7E11" >}}

#### Speech Has Peaks and Pauses

An SSB transmitter must handle speech peaks even though its average output is lower. PEP measures the RF-cycle average at the envelope's crest; an average-power reading over a whole sentence includes the quieter syllables and pauses. The ratio between those readings depends on the voice.

> **Key Information:**
> - An unprocessed SSB phone signal has an approximate PEP-to-average-power ratio of 2.5 to 1. {{< link id="E8A06" >}}
> - Speech characteristics determine that ratio. {{< link id="E8A07" >}}

Using that approximate ratio, a 100-watt PEP signal averages about $100/2.5=40$ watts during the measurement interval. A power meter that shows less than 100 watts during ordinary speech has not, by itself, found a fault. *Different voices and speaking patterns give different results.* Increasing amplifier gain scales the peaks and average together until distortion begins; it does not make the voice less peaky. Speech processing can change the ratio because it changes the envelope itself.
