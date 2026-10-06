---
chapter: "7"
section: "7.5"
status: draft3
questions: ["G2E06", "G4A11", "G8C14", "G8C13", "G2E07", "G2E14"]
---

### Section 7.5: Digital Mode Station Setup

A computer can generate and decode digital signals, control the radio, or do both. Software handles much of the exchange, but it still needs the right radio mode, frequency, and audio levels. Some modes also need accurate timing.

#### Getting the Audio Right

In audio-based setups, the computer sends tones to the transmitter in place of microphone audio. On receive, the software decodes the audio coming from the radio. Some radios carry this audio through a built-in USB sound interface; others need an external sound interface and audio cables. Here, USB means the computer connection, not upper sideband.

RTTY sent using AFSK shifts between two audio frequencies called *mark* and *space*. The difference between them is called the *shift*:

> **Key Information:** The most common frequency shift for RTTY emissions in the amateur HF bands is 170 Hz. {{< link id="G2E06" >}}

The receiving software follows the changes between mark and space and converts them into text.

The drive-level lesson from the previous section also applies here: set the audio correctly rather than relying on ALC to reduce an excessive input. The transceiver has its own ALC system, which can act even without an external amplifier:

> **Key Information:** The ALC system should be inactive when transmitting AFSK data signals because the ALC action distorts the signal. {{< link id="G4A11" >}}

Start with low audio drive and follow the radio manufacturer's digital-mode setup procedure. The aim is to prevent distortion by setting the input correctly, not by disabling ALC protection. Recommended ALC meter indications vary between radios.

Turn off speech processing and other voice effects as well. The processing that raises average speech power, discussed earlier in this chapter, can distort data tones.

#### Reading the Waterfall

For many digital modes, a waterfall display helps you find and tune signals within the receiver's audio passband:

> **Key Information:**
> - A waterfall display shows frequency horizontally, signal strength as intensity, and time vertically. {{< link id="G8C14" >}}
> - Vertical lines on either side of a data mode or RTTY signal on a waterfall display indicate overmodulation. {{< link id="G8C13" >}}

Each new row shows the received activity as older rows scroll away. A signal at a steady frequency leaves a vertical trace, with brighter colors usually indicating greater strength. RTTY normally shows activity at its two mark and space frequencies.

If another operator reports extra lines around your signal—or you see them with a separate receiver—reduce audio drive and check that speech processing is off. A display of the computer's outgoing audio cannot show distortion added later by the transmitter.

![Two radio teletype waterfall displays compare a clean signal with a distorted one. Audio frequency increases from left to right. New activity appears at the top, and older activity moves downward. Both examples have two main tone traces, 170 hertz apart. The distorted example also has weaker traces outside that pair, indicating overmodulation. Brighter marks represent stronger signals.](../../../images/s7-5-digital-waterfall.svg)
{.img-full .img-centered}

#### Keeping Accurate Time

FT8 stations take turns transmitting and receiving in 15-second periods timed to UTC; each actual RF transmission is shorter than its period. Their clocks must agree closely enough for one station's transmission to arrive during the other's receive period:

> **Key Information:** FT8 requires computer time accurate to within approximately 1 second. {{< link id="G2E07" >}}

A clock that is too far off can make signals difficult or impossible to decode, even when they are strong. Use a reliable time-synchronization service and verify that the computer clock remains accurate.

#### When It Doesn't Work

An RTTY signal can be strong and appear correctly tuned yet produce unreadable text. The software must agree with the sending station about which tone is mark or space and how fast they change:

> **Key Information:** If you cannot decode an RTTY or other FSK signal even though it is apparently tuned in properly, the mark and space frequencies may be reversed, you may have selected the wrong baud rate, or you may be listening on the wrong sideband. {{< link id="G2E14" >}}

Selecting the wrong receive sideband reverses the relationship between mark and space. Most RTTY software also has a **Reverse** control that swaps its interpretation of those tones. The baud rate must match the sending station's speed; 45.45 baud is common for amateur HF RTTY.

Check the sideband or Reverse setting, then confirm the baud rate and shift. Change one setting at a time so you can identify what corrected the problem.

The radio's meters and the waterfall provide useful checks. Test equipment can show more about the transmitted waveform and antenna system.
