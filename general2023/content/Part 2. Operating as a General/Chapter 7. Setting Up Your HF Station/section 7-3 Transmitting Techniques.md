---
chapter: "7"
section: "7.3"
questions: ["G4D01", "G4D02", "G4D03", "G4D08", "G4D10", "G4D09", "G4D11", "G4A12", "G4A10", "G4A02"]
status: draft2
---

### Section 7.3: Transmitting Techniques

Everything you just learned about receiving has a mirror image. When you transmit, the operator on the other end is the one digging your signal out of the noise, and every choice you make—your audio levels, your frequency, your bandwidth—either helps them or makes their job harder. Transmitting well on SSB starts with a fact that surprises many operators coming from FM: *the amount of power you transmit varies with the loudness of your voice.*

On FM, your transmitter puts out constant power whether you are whispering or shouting. On SSB there is no constant carrier—your voice is the signal—so speaking softly produces low output, and pausing produces almost none at all. The power number you set on the radio is the maximum it can reach on voice peaks (its Peak Envelope Power, or PEP), not a steady output level.

#### Getting the Most from Your Voice

Normal speech is a mix of brief loud peaks and many quieter sounds, so its average power stays well below your transmitter's maximum. Shouting doesn't help; too much microphone gain causes distortion and interference on nearby frequencies.

This is the problem a speech processor solves. It compresses the difference between the loud and quiet parts of your voice, raising the average power without increasing the peaks—much like the compressor used on music recordings. Most modern HF transceivers have one built in; look for a control labeled **PROC**, **COMP**, or something similar.

> **Key Information:**
> - The purpose of a speech processor in a transceiver is to increase the apparent loudness of transmitted voice signals. {{< link id="G4D01" >}}
> - A speech processor increases average power in a single sideband phone signal. {{< link id="G4D02" >}}

To the receiving station, your voice sounds stronger and may be easier to understand through noise. Too much processing, however, can make things worse instead:

> **Key Information:** The effects of an incorrectly adjusted speech processor include distorted speech, excess intermodulation products, and excessive background noise. {{< link id="G4D03" >}}

Start with a modest setting and increase it only as needed—enough processing to strengthen your signal without making your voice distorted or unpleasant to hear.

#### Staying Inside the Lines

Remember that every signal occupies a range of frequencies, not a single point—its bandwidth. A typical SSB voice signal is about 3 kHz wide, and here is the part that catches many new HF operators: *the frequency on your display marks the edge of your signal, not the center.* Which side of the display frequency your signal occupies depends on the sideband:

* **LSB (Lower Sideband):** your signal extends *below* the displayed frequency.
* **USB (Upper Sideband):** your signal extends *above* the displayed frequency.

This matters most near the edges of a band segment. Your display can show a perfectly legal frequency while part of your signal spills outside the segment—out-of-band transmission, even though the number on the screen looks fine.

Suppose you're using LSB near the bottom of a phone segment:

> **Key Information:**
> - A 3 kHz LSB signal when the displayed carrier frequency is set to 7.178 MHz occupies 7.175 MHz to 7.178 MHz. {{< link id="G4D08" >}}
> - Your displayed carrier frequency should be at least 3 kHz above the edge of the segment when using 3 kHz wide LSB. {{< link id="G4D10" >}}

The signal occupies everything from the display frequency down to 3 kHz below it, so the display must sit at least 3 kHz above the segment's lower edge to keep the whole signal legal.

The same logic applies in mirror image with USB near the top of a segment:

> **Key Information:**
> - A 3 kHz USB signal with the displayed carrier frequency set to 14.347 MHz occupies 14.347 MHz to 14.350 MHz. {{< link id="G4D09" >}}
> - Your displayed carrier frequency should be at least 3 kHz below the edge of the band when using 3 kHz wide USB. {{< link id="G4D11" >}}

Keeping your entire signal inside the band is your responsibility. The same awareness applies between stations: leave enough room that your bandwidth and theirs don't overlap.

#### Working Split

Most transceivers have two VFOs—**VFO A** and **VFO B**—each holding its own frequency. Normally you transmit and receive on the same one, but you can also receive on one and transmit on the other: *split operation*.

> **Key Information:** A common use of the dual-VFO feature on a transceiver is to transmit on one frequency and listen on another. {{< link id="G4A12" >}}

One common use for split is managing a crowd. When a station from a rarely heard country or a special event station comes on the air, many operators may call at once—a *pileup*. Taking calls on its own transmit frequency would let the callers cover up the very exchanges everyone needs to hear, so the station might transmit on 14.195 MHz while listening "up 5," near 14.200 MHz—keeping its transmit frequency clear while callers spread out.

Split can also bridge different frequency privileges. A foreign station, following its own country's rules, may legally transmit where a US General class operator cannot—but rather than moving and asking everyone calling to follow, it can simply listen nearby where those operators can transmit. Whatever the reason for the split, confirm both frequencies before transmitting—calling on the station's transmit frequency while everyone else listens is a mistake you only want to make once.

#### Morse Code (CW) Operation

Voice isn't the only mode you'll operate from the front panel. Morse code—CW—remains popular on HF: it cuts through noise that would sink a voice contact, works well at low power, and uses very little bandwidth.

CW (short for Continuous Wave) works by switching a carrier on and off in patterns of dots and dashes that represent letters. The classic instrument is the straight key, a simple spring-loaded switch; many operators now use an electronic keyer with a paddle instead—two levers, one for dots and one for dashes—with the keyer timing each element automatically:

> **Key Information:** The function of an electronic keyer is automatic generation of dots and dashes for CW operation. {{< link id="G4A10" >}}

Because CW is just a carrier switching on and off, it sounds the same on either sideband. That gives you a trick voice operators don't have: switching your receiver to the opposite—"reverse"—sideband changes where nearby signals land in your passband, sometimes moving interference away entirely:

> **Key Information:** One benefit of using the opposite or "reverse" sideband when receiving CW is that it may be possible to reduce or eliminate interference from other signals. {{< link id="G4A02" >}}

#### A Clean Signal Is a Good Neighbor

Whichever mode you use, the fundamentals stay the same: keep your equipment working properly and your signal as clean as you can make it. Overdriven audio, splatter, or a signal hanging over a band edge doesn't just hurt your own chances—it makes the band worse for everyone around you, and it may violate FCC rules.

Even a clean transmission can get into susceptible audio equipment nearby. If your transmissions cause distorted speech or clicking in speakers, recall Section 7.2's distinction between interference entering a receiver and RF entering an audio circuit directly. Check the cause before assuming either that your transmitter is faulty or that the affected equipment needs a receiver filter.

Sometimes, though, even a clean, well-adjusted 100 watts isn't enough to make the contact. Adding power is a legitimate tool when conditions call for it—if you do it right. That's where we go next.
