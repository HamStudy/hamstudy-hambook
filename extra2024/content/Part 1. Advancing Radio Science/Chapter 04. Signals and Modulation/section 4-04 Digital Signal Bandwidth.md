---
chapter: "4"
section: "4.4"
questions: ["E8C12", "E8C05", "E8D04", "E8D05", "E8C03", "E8C04", "E8C06", "E8C07"]
status: generated1
draft: true
---

### Section 4.4: Digital Signal Bandwidth

A continuous, unchanging carrier can be extremely narrow. Turn it on and off to send Morse, and sidebands appear. The information lies in those changes, so a usable signal needs enough bandwidth to preserve them.

#### The Shape of a Dot

*Keying speed controls how often changes occur.* *Rise and fall times control how abruptly they occur.* *Fast keying and sharp edges both spread energy farther from the carrier.* In this context, the keying *shape factor* describes the envelope's shape, including those rise and fall times.

> **Key Information:**
> - CW bandwidth depends on keying speed and shape factor, including rise and fall time. {{< link id="E8C12" >}}
> - A 13-word-per-minute International Morse transmission has an approximate bandwidth of 52 Hz. {{< link id="E8C05" >}}

For the exam estimate, multiply speed in words per minute by four:

$$B\approx4\times13=52\text{ Hz}.$$

This is a rule of thumb for a normally shaped signal, not a promise that every 13-WPM transmitter occupies exactly 52 Hz. A near-vertical keying edge contains many high-frequency components. *After modulation, those components extend the transmitted spectrum and cause clicks heard away from the intended channel.*

> **Key Information:**
> - Extremely short CW rise or fall times generate key clicks. {{< link id="E8D04" >}}
> - The usual cure is to increase keying-waveform rise and fall times. {{< link id="E8D05" >}}

Those clicks are an annoyance for the operator trying to hear a weak signal nearby. *Rounding the keying edge reduces the unwanted sidebands at their source.* An RF output filter intended to remove harmonics may not remove clicks close to the carrier. Rise and fall times also cannot grow without limit: overly slow edges can blur short dots at high speed.

#### Shaping Phase Changes

An abrupt phase reversal can produce the same sort of wide spectrum. Arrange a reversal at a zero crossing and the instantaneous RF voltage need not jump from a large positive value to a large negative one. Then shape the transition over time to limit the remaining unwanted energy.

> **Key Information:**
> - Changing a PSK signal's phase at an RF zero crossing minimizes bandwidth. {{< link id="E8C03" >}}
> - PSK31 uses sinusoidal data pulses to minimize bandwidth. {{< link id="E8C04" >}}

The pulse shape matters as much as the symbol labels. Smoothly reducing the envelope through a phase reversal avoids the hard switch that would otherwise spray energy across neighboring frequencies.

#### A Mode's Bandwidth

A mode specification combines symbol rate, frequency or phase states, and pulse shaping. FT8 makes those choices to fit a weak-signal exchange into a narrow channel.

> **Key Information:** An FT8 signal occupies 50 Hz. {{< link id="E8C06" >}}

A faster frequency-shift-keyed signal needs much more space. Here *shift* means the full separation between the two transmitted frequencies; deviation is half that separation. For the exam's 9,600-baud ASCII FM example, use the necessary-bandwidth estimate

$$B_n=R_s+1.2S,$$

where $R_s$ is symbol rate in baud and $S$ is the full frequency shift in hertz. The factor 1.2 accounts for the signal shaping assumed by this bandwidth estimate.

For a 4,800 Hz shift,

$$\begin{aligned}
B_n&=9{,}600+1.2(4{,}800)\\
&=15{,}360\text{ Hz}=15.36\text{ kHz}.
\end{aligned}$$

> **Key Information:** A 4,800 Hz frequency-shift, 9,600-baud ASCII FM transmission has an estimated bandwidth of 15.36 kHz. {{< link id="E8C07" >}}

When comparing modes, check both the symbol rate and the waveform. Two signals at the same baud rate can need quite different amounts of room on the band.
