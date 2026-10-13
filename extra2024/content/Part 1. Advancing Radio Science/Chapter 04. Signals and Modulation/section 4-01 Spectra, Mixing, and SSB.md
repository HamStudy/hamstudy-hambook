---
chapter: "4"
section: "4.1"
questions: ["E8A01", "E7E08", "E7E07", "E7E10", "E7E04", "E7E11", "E8A06", "E8A07"]
status: generated1
---

### Section 4.1: Spectra, Mixing, and SSB

Many radios and digital-mode programs can draw the band as a spectrum or waterfall display, with frequency running across the screen. Each signal shows up with some width, and an SSB voice is wider than a CW signal. An oscilloscope shows a signal another way, as voltage changing over time. Comparing the two views shows how a waveform's shape decides which frequencies it occupies.

#### Frequencies in a Waveform

A pure sine wave has one frequency. A square wave's flat tops and sharp edges take more: a sine wave at the square wave's own rate, called the fundamental, plus harmonics at higher multiples of that frequency. The sharper the edges, the higher the strong harmonics reach. Fourier analysis breaks any repeating waveform into sine waves this way.

> **Key Information:** Fourier analysis shows that a square wave is made up of a sine wave and its odd harmonics. {{< link id="E8A01" >}}

![Four plots compare sine and square waves at the same fundamental frequency, f zero. The time plots at left show two cycles: a smooth sine wave above and a square wave switching between flat positive and negative levels below. At right, the sine wave has a single frequency component at f zero. The square wave has components at f zero, three f zero, five f zero, and seven f zero, with relative amplitudes one, one third, one fifth, and one seventh. No components appear at even multiples; the odd-harmonic series continues beyond the drawing.](../../../images/s4-1-waveforms-and-spectra.svg)
{.img-centered .img-xlarge .img-mobile-full caption="A sine wave (top) has one frequency; a square wave (bottom) contains odd harmonics. Left: voltage over time. Right: relative component amplitudes, scaled to each fundamental. The odd-harmonic series continues."}

#### Mixing a Message Onto RF

Fourier analysis finds components already present in a waveform. A mixer creates new ones. Feed it 10 MHz and 1 MHz, and its output can contain both inputs plus their sum, 11 MHz, and their difference, 9 MHz. A filter after the mixer picks out the one you want.

A transmitter uses those sums and differences to move a message onto RF. For voice, the message starts as microphone audio, roughly 300 to 3,000 Hz. Mixing that audio with a carrier produces a sum and a difference for each audio frequency. The sums form the upper sideband, and the differences form the lower sideband.

Ordinary AM sends both sidebands and the carrier, with an envelope that follows the audio. An envelope detector recovers that audio by keeping the envelope's slow changes and discarding the fast RF cycles. A diode passes only one polarity of the RF. A resistor-capacitor network then smooths out the carrier cycles but still follows the envelope.

> **Key Information:**
> - The principal frequencies at the output of a mixer are the two input frequencies along with their sum and difference frequencies. {{< link id="E7E08" >}}
> - Baseband is the frequency range occupied by a message signal prior to modulation. {{< link id="E7E07" >}}
> - A diode envelope detector functions by rectification and filtering of RF signals. {{< link id="E7E10" >}}

#### Sending One Sideband

SSB keeps just one copy of the message, removing the carrier and the other sideband. A mixer arranged so that its carrier input cancels at the output is called a **balanced modulator**. What remains is double-sideband suppressed-carrier energy: both sidebands, one more than SSB needs.

At the receiver, an envelope detector finds no strong carrier to follow. Instead, the receiver mixes the incoming sideband with a carrier it generates itself, and the difference frequencies reproduce the audio. Set that local carrier to the wrong frequency and every difference changes, so the voice shifts up or down in pitch: the Donald Duck sound of a mistuned SSB signal.

> **Key Information:**
> - One way to produce a single-sideband phone signal is to use a balanced modulator followed by a filter. {{< link id="E7E04" >}}
> - A product detector is used for demodulating SSB signals. {{< link id="E7E11" >}}

#### Speech Has Peaks and Pauses

With no carrier, an SSB transmitter's output follows the voice, rising on loud syllables and falling to nothing in pauses. Peak envelope power, or PEP, describes the peaks: the power averaged over one RF cycle at the envelope's highest point. An average-power reading over a whole sentence also counts the quieter syllables and pauses, so it comes out lower. Turning up amplifier gain raises the peaks and the average together, until distortion begins, so the gap between them stays the same. Speech processing can narrow that gap, because it reshapes the envelope itself.

> **Key Information:**
> - The approximate ratio of PEP-to-average power in an unprocessed single-sideband phone signal is 2.5 to 1. {{< link id="E8A06" >}}
> - Speech characteristics determine the PEP-to-average power ratio. {{< link id="E8A07" >}}

Using that ratio, a 100-watt PEP signal averages about $100/2.5=40$ watts, which is why an average-reading wattmeter seldom gets anywhere near 100 W while you talk. A whole conversation, with its longer pauses, averages lower still. FCC guidance on RF exposure assumes 20% of PEP for conversational SSB without speech processing.
