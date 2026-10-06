---
chapter: "7"
section: "7.3"
questions: ["G4D01", "G4D02", "G4D03", "G4D08", "G4D10", "G4D09", "G4D11", "G4A12", "G4A10", "G4A02"]
status: draft3
---

### Section 7.3: Transmitting Techniques

On SSB, your RF output power changes with the audio level reaching the transmitter. An FM transmitter produces nearly constant power while you speak or pause, but an SSB transmitter produces little power during a pause unless the microphone picks up background sound.

The radio's power setting limits peak envelope power (PEP), not a steady output throughout the transmission. With a 100-watt setting, your voice peaks may reach that level while quieter sounds produce less power. Good audio adjustment makes effective use of the available power without distorting the signal.

#### Setting Microphone Gain and Processing

Normal speech contains brief loud peaks and many quieter sounds, so its average power is well below its peak power. Begin with speech processing off and set microphone gain for a normal speaking voice, following the radio manufacturer's instructions. Shouting or using excessive gain can cause distortion rather than improve readability.

Once microphone gain is set correctly, a speech processor can make the quieter parts of your voice stronger relative to the peaks. This raises average transmitted power without raising peak power. The control may be labeled **PROC**, **COMP**, or something similar:

> **Key Information:**
> - The purpose of a speech processor in a transceiver is to increase the apparent loudness of transmitted voice signals. {{< link id="G4D01" >}}
> - A speech processor increases average power in a single sideband phone signal. {{< link id="G4D02" >}}

That higher average level can help the receiving operator understand you through noise. Excessive processing can also amplify background sounds or distort your voice:

> **Key Information:** The effects of an incorrectly adjusted speech processor include distorted speech, excess intermodulation products, and excessive background noise. {{< link id="G4D03" >}}

Start with a modest processing level. The goal is easier-to-understand speech, not the highest possible average-power reading.

#### Keeping Your Signal Within the Band

Your signal occupies a range of frequencies, not only the number on the display. In SSB mode, that number normally identifies the suppressed carrier frequency. The voice sideband lies above or below it:

* **LSB (Lower Sideband):** The signal extends below the displayed frequency.
* **USB (Upper Sideband):** The signal extends above the displayed frequency.

A signal about 3 kHz wide therefore needs about 3 kHz of room on the appropriate side of the displayed frequency. Near a band or license-privilege boundary, a legal display reading does not guarantee that the entire transmission is within your authorized segment.

With LSB near a segment's lower edge, the signal extends downward:

> **Key Information:**
> - A 3 kHz LSB signal when the displayed carrier frequency is set to 7.178 MHz occupies 7.175 MHz to 7.178 MHz. {{< link id="G4D08" >}}
> - Your displayed carrier frequency should be at least 3 kHz above the edge of the segment when using 3 kHz wide LSB. {{< link id="G4D10" >}}

Subtracting 0.003 MHz from 7.178 MHz gives 7.175 MHz, the lower edge of the General phone segment on 40 meters. Setting the display at that lower edge instead would put the sideband below it.

With USB near the upper edge, allow the same room above the displayed frequency:

> **Key Information:**
> - A 3 kHz USB signal with the displayed carrier frequency set to 14.347 MHz occupies 14.347 MHz to 14.350 MHz. {{< link id="G4D09" >}}
> - Your displayed carrier frequency should be at least 3 kHz below the edge of the band when using 3 kHz wide USB. {{< link id="G4D11" >}}

These examples assume a 3 kHz signal. Leave more room if your transmitter is set for a wider bandwidth, allow a margin for frequency error, and account for nearby stations as well as band edges.

![Two frequency bars increase from left to right. For lower sideband, a dial setting of 7.178 megahertz places the three-kilohertz signal below the dial frequency, down to the segment edge at 7.175 megahertz. For upper sideband, a dial setting of 14.347 megahertz places the signal above the dial frequency, up to the segment edge at 14.350 megahertz. Each whole sideband fits inside the permitted segment; placing an LSB dial at the lower edge, or a USB dial at the upper edge, would push part of the signal outside it.](../../../images/s7-3-ssb-frequency-edges.svg)
{.img-full .img-centered}

#### Working Split

Many HF transceivers provide **VFO A** and **VFO B**, each with its own frequency setting. VFO stands for *variable frequency oscillator*; on the radio, these labels identify the two tuning settings. Normally you use the same frequency for transmit and receive. In *split operation*, the radio receives using one VFO and transmits using the other:

> **Key Information:** A common use of the dual-VFO feature on a transceiver is to transmit on one frequency and listen on another. {{< link id="G4A12" >}}

When many operators call the same station at once—a *pileup*—their transmissions can cover up its replies. Split operation lets callers listen on the station's transmit frequency and answer elsewhere.

For example, a station using USB on 14.250 MHz may announce "up 5." It is listening 5 kHz higher, so you receive on 14.250 MHz and transmit on 14.255 MHz. Both frequency settings are within US General 20-meter phone privileges.

Split can also allow a contact when operators have different transmit privileges. A station may transmit where you are allowed to listen but not transmit, then listen for your reply within a segment you can use. Before calling, check which VFO controls transmit and confirm that your whole signal will be within your privileges.

#### Morse Code (CW) Operation

CW provides another way to send a readable signal when SSB is difficult to copy. It uses much less bandwidth than voice and can be effective at low power. Instead of transmitting speech, the transmitter switches a carrier on and off to form dots and dashes.

A straight key lets you control the length and spacing of every element. With a paddle and electronic keyer, you choose dots or dashes and the keyer generates their timing automatically:

> **Key Information:** The function of an electronic keyer is automatic generation of dots and dashes for CW operation. {{< link id="G4A10" >}}

When sending with a paddle, you still form the characters and leave the spaces between letters and words. The keyer keeps the individual elements consistent at the speed you select.

CW reception also offers another way to handle nearby interference. CW remains readable using either receive sideband. The **CW-R** setting selects the opposite sideband, which can change where nearby interfering signals fall in the receiver's passband:

> **Key Information:** One benefit of using the opposite or "reverse" sideband when receiving CW is that it may be possible to reduce or eliminate interference from other signals. {{< link id="G4A02" >}}

#### Avoiding Unwanted Interference

Overdriven audio can produce splatter on adjacent frequencies, and the bandwidth occupied by your transmission must remain within your authorized band segment.

Interference does not always mean the transmitted signal is faulty. A clean transmission can still be detected by susceptible audio equipment, as described in the previous section. If speakers produce distorted speech or clicks during your transmissions, investigate how RF is entering the equipment rather than assuming that a receiver filter will solve the problem.

More power may help when a clean signal is still too weak at the other station. An amplifier needs its own adjustments and safeguards to increase that power without creating new problems.
