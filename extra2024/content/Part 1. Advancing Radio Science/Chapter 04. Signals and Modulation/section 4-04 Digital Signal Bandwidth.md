---
chapter: "4"
section: "4.4"
questions: ["E8C12", "E8D04", "E8D05", "E8C03", "E8C04", "E8C05", "E8C06", "E8C07"]
status: generated1
draft: true
---

### Section 4.4: Digital Signal Bandwidth

A CW signal can sound fine on its own frequency yet produce clicks that bother an operator nearby. Keying creates sidebands around the narrow carrier.

#### The Shape of a Dot

Keying speed sets how often the signal changes, and every change spreads some energy away from the carrier. Rise and fall times set how abruptly each change happens. For keying, those times make up the **shape factor**, not to be confused with a filter's shape factor in the previous chapter.

Like the square wave earlier in this chapter, a near-vertical keying edge contains strong components far above the keying rate. After modulation, they become sidebands a few hundred hertz to a few kilohertz from the carrier. They are not RF harmonics at multiples of the carrier frequency, so an output filter for harmonics can't remove them.

![Two rows compare a hard-keyed CW dot with a shaped one. In each row, the left panel shows the RF waveform over time, with dashed lines tracing its envelope. The right panel shows the spectrum: signal level from 0 down to minus 60 decibels, from 300 hertz below the carrier to 300 hertz above. In the top row, hard keying, the RF cycles start and stop abruptly, so the dot has vertical edges. Its spectrum has a narrow central peak with wide skirts that fall off slowly; they are still only about 35 decibels down at 300 hertz from the carrier. Arrows labeled clicks point to these skirts. In the bottom row, shaped keying, the RF amplitude rises and falls smoothly at each end of the dot. Its spectrum has the same central peak, but the skirts drop steeply and reach the bottom of the scale within about 250 hertz of the carrier.](../../../images/s4-4-keying-shapes.svg)
{.img-centered .img-xlarge .img-mobile-full caption="Vertical keying edges spread energy far from the carrier as key clicks. Rounded edges keep the same dot much narrower."}

Shaped keying, in the figure's lower row, rounds each edge, and its skirts drop away within a few hundred hertz. The edges can't stretch without limit, though: too slow, and short dots blur at high speed.

> **Key Information:**
> - Keying speed and shape factor (rise and fall time) affect the bandwidth of a transmitted CW signal. {{< link id="E8C12" >}}
> - The primary effect of extremely short rise or fall time on a CW signal is the generation of key clicks. {{< link id="E8D04" >}}
> - The most common method of reducing key clicks is to increase keying waveform rise and fall times. {{< link id="E8D05" >}}

#### Shaping Phase Changes

PSK31 faces the same problem with phase. An abrupt phase reversal spreads a wide spectrum, just as a hard-keyed edge does. Make the reversal at a zero crossing of the RF, and the voltage need not jump from a large positive value to a large negative one. PSK31 goes further: at each reversal, it fades the carrier to zero along a sine-shaped curve, then brings it back with the opposite phase. These are its **sinusoidal data pulses**. A straight-line ramp would leave sharp corners at its ends; a sine-shaped taper has none.

![Two RF waveforms each show a 180-degree phase reversal at the center, marked reversal below the time axis. At left, an abrupt reversal: the carrier keeps full amplitude, and at the reversal the voltage jumps straight from a positive peak to a negative peak, drawn as a red vertical line labeled jump. At right, PSK31: dashed envelope lines show the carrier's amplitude following a smooth sine-shaped curve down to zero at the reversal and back up again. The RF cycles after the zero point are inverted in phase.](../../../images/s4-4-psk-reversal.svg)
{.img-centered .img-xlarge .img-mobile-full caption="An abrupt phase reversal (left) makes a sudden jump in voltage. PSK31 (right) fades the carrier to zero along a sine-shaped curve and reverses phase there."}

> **Key Information:**
> - The phase of a PSK signal should be changed at the zero crossing of the RF signal to minimize bandwidth. {{< link id="E8C03" >}}
> - The use of sinusoidal data pulses minimizes the bandwidth of a PSK31 signal. {{< link id="E8C04" >}}

#### A Mode's Bandwidth

A rule of thumb for normally shaped CW multiplies the speed in words per minute by four. One WPM is about 0.8 baud, and good keying needs about five times its baud rate. At 13 WPM, that gives $B\approx4\times13=52$ Hz.

FT8 ends up about as narrow. It sends one of eight tones at a time, spaced 6.25 Hz apart, and each tone lasts 0.16 second. The tone centers span seven gaps, $7\times6.25=43.75$ Hz. A tone that brief is itself about 6.25 Hz wide, half of it beyond each end tone: $43.75+6.25=50$ Hz. Smoothly shaped tone changes keep the signal from spreading farther.

> **Key Information:**
> - The approximate bandwidth of a 13-WPM International Morse Code transmission is 52 Hz. {{< link id="E8C05" >}}
> - The bandwidth of an FT8 signal is 50 Hz. {{< link id="E8C06" >}}

A faster frequency-shift-keyed signal, such as 9,600-baud ASCII sent by FM, needs much more room. Here **shift** means the full separation between the two transmitted frequencies, twice the deviation. A common necessary-bandwidth estimate is

$$B_n=R_s+1.2S,$$

where $R_s$ is the symbol rate in baud and $S$ is the shift in hertz. The $1.2S$ term covers the tones' separation, and $R_s$ the keying sidebands around them. For a 4,800 Hz shift,

$$\begin{aligned}
B_n&=9{,}600+1.2(4{,}800)\\
&=9{,}600+5{,}760\\
&=15{,}360\text{ Hz}=15.36\text{ kHz}.
\end{aligned}$$

> **Key Information:** The bandwidth of a 4,800-Hz frequency shift, 9,600-baud ASCII FM transmission is 15.36 kHz. {{< link id="E8C07" >}}
