---
chapter: "4"
section: "4.2"
questions: ["E7E01", "E7E02", "E7E03", "E7E05", "E7E06", "E8B01", "E8B03", "E8B04", "E8B02", "E8B09", "E8B05", "E8B06", "E4C03"]
status: generated1
---

### Section 4.2: Frequency and Phase Modulation

FM is the everyday voice mode of VHF and UHF repeaters, usually set for about 5 kHz of deviation. That swing can come from changing an oscillator's frequency directly or from shifting the carrier's phase, which is phase modulation, or PM. The two methods treat high and low pitches differently.

#### Frequency and Phase Changes

Direct FM starts at the oscillator, whose resonant circuit includes a capacitance that changes with the audio voltage, such as a varactor diode (Section 1.1). As that capacitance changes, so does the frequency. In an RF amplifier stage instead, the same changing reactance shifts the phase of the passing signal.

> **Key Information:**
> - Reactance modulation of a local oscillator can be used to generate FM phone signals. {{< link id="E7E01" >}}
> - The function of a reactance modulator is to produce PM or FM signals by varying a capacitance. {{< link id="E7E02" >}}

With PM, the audio advances or delays the carrier's phase. Like a runner pulling ahead of a steady pace, the carrier gets ahead by briefly speeding up: its frequency rises. A higher-pitched tone demands the same lead in less time, so the burst of speed, the frequency shift, is larger. With the same audio amplitude, PM produces more deviation at higher audio frequencies. Direct FM's deviation follows audio amplitude alone.

At the receiver, frequency changes must become voltage changes again, as in the previous chapter's phase-locked loop.

> **Key Information:** A frequency discriminator is a circuit for detecting FM signals. {{< link id="E7E03" >}}

#### Keeping Speech Balanced

Through a discriminator, a PM signal's high tones come out louder, since they arrived with more deviation. In effect, a PM transmitter boosts the treble. Direct FM transmitters usually add that boost on purpose, to lift the high tones above the hiss that FM reception adds mostly at high frequencies.

A receiver network cuts them back down by the same amount, restoring the voice's balance and lowering the hiss. A PM transmitter's built-in boost has the same shape, so the cut evens that out too.

![A graph plots relative level in decibels against audio frequency from 300 hertz to 3 kilohertz, on a logarithmic frequency scale. A flat blue line at 0 decibels is labeled direct FM: at equal audio amplitude, its deviation is the same at every pitch. An orange dashed line labeled PM or pre-emphasis rises steadily from about minus 10 decibels at 300 hertz to about plus 10 decibels at 3 kilohertz. A green dotted line labeled de-emphasis, in the receiver, falls at the same rate, from about plus 10 decibels to about minus 10 decibels. All three lines meet at 1 kilohertz. The rising and falling lines mirror each other around the flat line, so together they add to a flat response.](../../../images/s4-2-emphasis.svg)
{.img-centered .img-large .img-mobile-full caption="PM's deviation rises with audio frequency, just as pre-emphasis does. Receiver de-emphasis falls at the same rate, so the recovered audio comes out flat."}

> **Key Information:**
> - A pre-emphasis network is added to an FM speech channel to boost the higher audio frequencies. {{< link id="E7E05" >}}
> - De-emphasis is used in FM communications receivers for compatibility with transmitters using phase modulation. {{< link id="E7E06" >}}

#### Modulation Index and Deviation Ratio

An FM signal's bandwidth depends on how far its frequency swings and how fast; 5 kHz of deviation with 3 kHz audio takes about 16 kHz. The **modulation index**, $\beta$ (beta), combines the two. A small index gives a signal not much wider than AM; a larger one spreads energy across more sidebands.

Frequency deviation, $\Delta f$, is the maximum departure on one side of the carrier. A signal swinging from 3 kHz below center to 3 kHz above has 3 kHz deviation, not 6 kHz. For a modulating tone of frequency $f_m$, the FM modulation index is

$$\beta=\frac{\Delta f}{f_m}.$$

Use the same units for both; they cancel, leaving a plain number. For 3,000 Hz deviation and a 1,000 Hz modulating tone, $\beta=3{,}000/1{,}000=3$. For $\pm6$ kHz and 2 kHz, $\beta=6/2=3$. The carrier frequency never enters the calculation. For a PM signal, the index is the peak phase swing, in radians.

A speech channel carries many tones, so two limits describe it: its largest swing and its highest audio frequency. At those limits, the modulation index goes by a second name. For $\pm5$ kHz and 3 kHz audio, it is $5/3\approx1.67$. For $\pm7.5$ kHz and 3.5 kHz, it is $7.5/3.5\approx2.14$.

> **Key Information:**
> - The modulation index of an FM signal is the ratio of frequency deviation to modulating signal frequency. {{< link id="E8B01" >}}
> - With 3,000 Hz deviation either side of the carrier and a 1,000 Hz highest modulating frequency, the modulation index is 3. {{< link id="E8B03" >}}
> - With ±6 kHz deviation and a 2 kHz highest modulating frequency, the modulation index is also 3. {{< link id="E8B04" >}}
> - The modulation index of a phase-modulated emission does not depend on the RF carrier frequency. {{< link id="E8B02" >}}
> - Deviation ratio is the ratio of the maximum carrier frequency deviation to the highest audio modulating frequency. {{< link id="E8B09" >}}
> - With a ±5 kHz maximum frequency swing and a 3 kHz highest modulation frequency, the deviation ratio is 1.67. {{< link id="E8B05" >}}
> - With a ±7.5 kHz swing and a 3.5 kHz highest modulation frequency, the deviation ratio is 2.14. {{< link id="E8B06" >}}

#### FM Capture

On SSB, you can often hear two stations on one frequency at once. On FM, one voice usually wins, and the audio may jump to the other as their strengths change. Once one signal is clearly stronger, the weaker one barely affects the output, though it is still on the air.

> **Key Information:** Capture effect is the suppression in an FM receiver of one signal by another stronger signal on the same frequency. {{< link id="E4C03" >}}
