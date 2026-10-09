---
chapter: "4"
section: "4.1"
questions: ["E8A01", "E7E07", "E7E08", "E7E10", "E7E04", "E7E11", "E8A06", "E8A07"]
status: generated1
draft: true
---

### Section 4.1: Spectra, Mixing, and SSB

An oscilloscope and a spectrum display can show the same signal and appear to disagree. One draws voltage against time; the other shows how much of each frequency is present. Neither has changed the signal. They reveal different parts of its story.

#### Frequencies in a Waveform

*A pure sine wave has one frequency.* *A square wave needs more: a fundamental, which repeats at the square wave's rate, plus odd harmonics at three, five, seven, and higher odd multiples of that frequency.* Their amplitudes and phases combine to form the flat tops and sharp edges.

> **Key Information:** Fourier analysis shows that a square wave consists of a sine wave and its odd harmonics. {{< link id="E8A01" >}}

![Four plots compare sine and square waves at the same fundamental frequency, f zero. The time plots at left show two cycles: a smooth sine wave above and a square wave switching between flat positive and negative levels below. At right, the sine wave has a single frequency component at f zero. The square wave has components at f zero, three f zero, five f zero, and seven f zero, with relative amplitudes one, one third, one fifth, and one seventh. No components appear at even multiples; the odd-harmonic series continues beyond the drawing.](../../../images/s4-1-waveforms-and-spectra.svg)
{.img-centered .img-xlarge .img-mobile-full caption="A sine wave (top) has one frequency; a square wave (bottom) contains odd harmonics. Left: voltage over time. Right: relative component amplitudes, scaled to each fundamental. The odd-harmonic series continues."}

Analysis finds components already present. A mixer does something different: it acts on incoming signals to create new frequency components.

#### Moving a Message Onto RF

Your microphone produces an electrical version of your voice. It contains audio frequencies, not yet a radio channel. *That original message occupies a range called baseband.*

> **Key Information:**
> - Baseband is the frequency range occupied by a message signal before modulation. {{< link id="E7E07" >}}
> - The principal frequencies at a mixer's output are its two input frequencies, their sum, and their difference. {{< link id="E7E08" >}}

Suppose a mixer receives 10 MHz and 1 MHz. Its output can contain 10 MHz, 1 MHz, 11 MHz, and 9 MHz. A following filter selects the wanted result. Balanced mixers suppress some of these components, but the sum-and-difference relationship still explains frequency conversion.

Mixing a carrier with speech produces many sums and differences because speech contains many frequencies. The sums form an upper sideband; the differences form a lower sideband. In ordinary amplitude modulation, or AM, the transmitter sends both sidebands and the carrier. The RF amplitude rises and falls with the audio. The outline of those rapid RF cycles is the *envelope*.

A diode conducts more readily in one direction than the other, so *it rectifies the RF.* *A resistor-capacitor network then smooths the rapid carrier cycles while following the slower envelope.* With a properly formed AM signal, that envelope recovers the audio.

> **Key Information:** A diode envelope detector works by rectifying and filtering RF signals. {{< link id="E7E10" >}}

#### Sending One Sideband

Both AM sidebands carry the same message. Single sideband, or SSB, sends one of them and usually suppresses the carrier as well. *A balanced modulator first produces double-sideband suppressed-carrier energy. A filter removes the unwanted sideband.*

At the receiver, there is no strong transmitted carrier for an envelope detector to follow. *A product detector mixes the received sideband with a locally generated carrier.* The difference frequencies reproduce the audio. Tune that local carrier incorrectly and the recovered voice shifts in pitch. As you tune across an SSB voice, listen for that change: the receiver is changing the difference between the incoming sideband and its own carrier.

> **Key Information:**
> - A balanced modulator followed by a filter can produce an SSB phone signal. {{< link id="E7E04" >}}
> - A product detector demodulates SSB signals. {{< link id="E7E11" >}}

#### Speech Has Peaks and Pauses

An SSB transmitter's power follows the voice. A loud syllable demands much more power than a pause. Peak envelope power, or PEP, measures average RF power over one RF cycle at the crest of the modulation envelope. It is not the average power over a whole sentence.

> **Key Information:**
> - An unprocessed SSB phone signal has an approximate PEP-to-average-power ratio of 2.5 to 1. {{< link id="E8A06" >}}
> - Speech characteristics determine that ratio. {{< link id="E8A07" >}}

Using that approximate ratio, a 100-watt PEP signal averages about $100/2.5=40$ watts during the measurement interval. A power meter that shows less than 100 watts during ordinary speech has not, by itself, found a fault. *Different voices and speaking patterns give different results.* Increasing amplifier gain scales the peaks and average together until distortion begins; it does not make the voice less peaky. Speech processing can change the ratio because it changes the envelope itself.
