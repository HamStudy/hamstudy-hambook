---
chapter: "10"
section: "10.3"
questions: ["E2D01", "E2D05", "E2D09", "E2D03", "E2E07", "E2D06"]
status: "generated1"
draft: true
---

### Section 10.3: Moonbounce and Meteor Scatter

Meteor scatter may give you only a brief burst of signal. The Moon offers a much longer opportunity, but returns only a tiny part of the transmitted energy. The modes used for these paths solve different problems: fit a useful message into a fleeting opening, or recover one from deep noise.

#### Catching a Meteor Burst

A meteor trail may support only part of a normal-length transmission. *MSK144 is designed for meteor scatter*: it repeats short messages so a brief burst has a chance to contain a complete decodable copy. Waiting for a long, uninterrupted opening would waste many usable trails.

> **Key Information:** MSK144 is designed for meteor scatter communications. {{< link id="E2D01" >}}

Operators agree on the mode, frequency, and transmit periods. You may hear very little for most of a receive period, then a brief burst produces a complete line of decoded text. The exchange progresses when the needed message gets through, not when every repetition does.

#### Recovering a Lunar Echo

On an Earth–Moon–Earth (EME) path, the reflected signal may arrive far below what you can copy by ear. *JT65 can decode at very low signal-to-noise ratios* by carrying a compact, error-protected message. *Its multitone AFSK represents that message with a sequence of audio tones*, which an SSB transmitter translates to RF.

> **Key Information:**
> - JT65 can decode signals with a very low signal-to-noise ratio. {{< link id="E2D05" >}}
> - JT65 uses multitone AFSK. {{< link id="E2D09" >}}

Its name does not mean a 65 Hz bandwidth or a 65-baud symbol rate. JT65 has also been used on terrestrial paths; it is not restricted to moonbounce.

One receive period may still contain too little information for a decode. *Q65, designed for EME, can average multiple receptions of the same message*. Combining their evidence can recover a message that no single period reveals.

> **Key Information:**
> - Q65 is designed for EME communications. {{< link id="E2D03" >}}
> - The exam associates Q65's difference from JT65 with averaging multiple receive cycles. {{< link id="E2E07" >}}

JT65 can average messages in WSJT-X too. The pool is pointing to a useful Q65 feature, but its wording does not fully describe the software. Repeat the needed message while conditions demand it; changing the message changes what the decoder can combine.

#### Take Opposite Turns

Two stations transmitting together cannot hear each other's lunar return. *Agree on a period length and opposite turns, then use synchronized clocks to keep the sequence aligned.*

> **Key Information:** A method of establishing EME contacts is time-synchronous transmissions alternating between stations. {{< link id="E2D06" >}}

For a contact using 60-second periods, the plan could be:

| Period beginning UTC | Station A | Station B |
|---|---|---|
| 02:00:00 | Transmit | Receive |
| 02:01:00 | Receive | Transmit |
| 02:02:00 | Transmit | Receive |
| 02:03:00 | Receive | Transmit |

The clock keeps you from taking your turn while the other station is also talking. These are scheduled slots, not instructions to hold the transmitter on for a full minute. The mode handles the waveform's timing within them. Point the antennas for the lunar path, check the agreed period, and let successful decodes determine when to advance the exchange.
