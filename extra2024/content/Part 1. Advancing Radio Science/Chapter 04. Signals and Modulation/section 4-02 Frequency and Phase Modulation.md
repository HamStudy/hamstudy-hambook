---
chapter: "4"
section: "4.2"
questions: ["E7E01", "E7E02", "E7E03", "E7E05", "E7E06", "E8B01", "E8B03", "E8B04", "E8B02", "E8B09", "E8B05", "E8B06", "E4C03"]
status: generated1
draft: true
---

### Section 4.2: Frequency and Phase Modulation

Direct FM and phase modulation can both carry speech to an FM receiver, but their response to audio pitch differs. The transmitter and receiver must account for that difference to reproduce balanced speech. We also need to compare the frequency swing with the audio frequency when describing the modulation.

#### Frequency and Phase Changes

To make an oscillator follow the audio, *a reactance modulator varies an effective capacitance in its resonant circuit*. The changing resonant frequency produces FM.

> **Key Information:**
> - Reactance modulation of a local oscillator can generate FM phone signals. {{< link id="E7E01" >}}
> - A reactance modulator produces PM or FM by varying a capacitance. {{< link id="E7E02" >}}

With phase modulation, or PM, the same audio instead advances or delays the carrier's phase. Changing phase temporarily changes the rate at which cycles advance, so it changes frequency too. With the same audio amplitude, PM produces more frequency deviation at higher audio frequencies. Direct FM instead makes deviation follow audio amplitude without that inherent increase with audio frequency.

The receiver needs to turn frequency changes back into voltage changes. *A frequency discriminator does that, yielding audio whose voltage follows the carrier's departures from center frequency.*

> **Key Information:** A frequency discriminator is a circuit for detecting FM signals. {{< link id="E7E03" >}}

#### Keeping Speech Balanced

Reducing higher audio frequencies after detection can also reduce high-frequency noise added along the way. To preserve the voice's intended response, *a pre-emphasis network boosts those frequencies before transmission*. A matching de-emphasis network reduces them after detection, undoing the boost while reducing the added noise.

The rising frequency response associated with PM is part of this relationship. *An FM receiver with the appropriate de-emphasis can recover speech from a transmitter using phase modulation without making the high audio frequencies too prominent.*

> **Key Information:**
> - A pre-emphasis network boosts the higher audio frequencies in an FM speech channel. {{< link id="E7E05" >}}
> - De-emphasis provides compatibility with transmitters using phase modulation. {{< link id="E7E06" >}}

#### Two Ratios, One Useful Division

To compare the size of a frequency swing with how quickly it repeats, we use modulation index. Frequency deviation, $\Delta f$, is the maximum departure on *one side* of the carrier. A signal swinging from 3 kHz below center to 3 kHz above center has 3 kHz deviation, not 6 kHz. For a sinusoidal modulating tone of frequency $f_m$, the FM modulation index is

$$\beta=\frac{\Delta f}{f_m}.$$

The Greek letter $\beta$ (beta) names the index. Both frequencies must use the same units. If both are given in kilohertz, leave them that way; converting both to hertz only adds zeros. The units cancel, leaving a ratio with no unit.

> **Key Information:**
> - FM modulation index is frequency deviation divided by modulating-signal frequency. {{< link id="E8B01" >}}
> - Deviation of 3,000 Hz with a 1,000 Hz modulating frequency gives $\beta=3$. {{< link id="E8B03" >}}
> - Deviation of 6 kHz with a 2 kHz modulating frequency also gives $\beta=3$. {{< link id="E8B04" >}}
> - The modulation index of a phase-modulated emission does not depend on the RF carrier frequency. {{< link id="E8B02" >}}

*For the first example, divide $3{,}000\text{ Hz}/1{,}000\text{ Hz}=3$. For the second, $6\text{ kHz}/2\text{ kHz}=3$.* The carrier might be on 29 MHz or 146 MHz; that number does not enter either calculation. PM's index expresses the amount of phase swing, so *it likewise does not require the carrier frequency.*

For a whole speech channel, we need its operating limits rather than the index of one tone. *Deviation ratio divides the maximum allowed deviation by the highest audio modulating frequency.*

> **Key Information:**
> - Deviation ratio is maximum carrier frequency deviation divided by the highest audio modulating frequency. {{< link id="E8B09" >}}
> - For $\pm5$ kHz deviation and 3 kHz highest audio, the ratio is $5/3\approx1.67$. {{< link id="E8B05" >}}
> - For $\pm7.5$ kHz deviation and 3.5 kHz highest audio, the ratio is $7.5/3.5\approx2.14$. {{< link id="E8B06" >}}

#### FM Capture

On SSB, two stations on the same frequency often remain audible together. An FM receiver behaves differently. *Once one signal is sufficiently stronger, the receiver tends to follow it and suppress the weaker one.* The amount of strength difference needed depends on the receiver.

> **Key Information:** Capture effect is the suppression of one FM signal by a stronger signal on the same frequency. {{< link id="E4C03" >}}

That explains an abrupt change of voice during a shared-channel collision. It does not mean the weaker station stopped transmitting.
