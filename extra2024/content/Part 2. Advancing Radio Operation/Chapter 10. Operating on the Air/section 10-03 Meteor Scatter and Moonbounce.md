---
chapter: "10"
section: "10.3"
questions: ["E2D01", "E2D05", "E2D09", "E2D03", "E2E07", "E2D06"]
status: "generated1"
draft: true
---

### Section 10.3: Meteor Scatter and Moonbounce

Section 7.4 introduced two unusual paths. A meteor trail lasts only a moment. The Moon stays in view for hours but returns only a tiny part of the energy sent to it. Each path calls for its own kind of digital mode: one fits a complete message into a fleeting opening, and the other recovers a message from deep noise.

#### Catching a Meteor Burst

A meteor trail may support only part of a normal-length transmission. MSK144 answers that with a message frame just 72 milliseconds long, repeated over and over, so a brief burst has a chance to contain a complete decodable copy. Its name comes from minimum-shift keying (MSK), a smooth form of FSK.

> **Key Information:** MSK144 is designed for meteor scatter communications. {{< link id="E2D01" >}}

Operators agree on the mode, frequency, and transmit periods. You may hear very little for most of a receive period, then a brief burst produces a complete line of decoded text. The exchange progresses when the needed message gets through, not when every repetition does.

#### Recovering a Lunar Echo

On an Earth–Moon–Earth (EME) path, the reflected signal may arrive far below what you can copy by ear. JT65 copes by carrying a compact, error-protected message as a slow sequence of audio tones, which an SSB transmitter translates to RF.

> **Key Information:**
> - JT65 can decode signals with a very low signal-to-noise ratio. {{< link id="E2D05" >}}
> - JT65 uses multitone AFSK. {{< link id="E2D09" >}}

The 65 in the name counts tones: 64 carry data and one provides synchronization. It does not specify bandwidth or baud rate.

One receive period may still contain too little information for a decode. Q65 handles that by combining the evidence from several periods that carry the same message, which can recover a message that no single period reveals. Despite the Q, Q65 does not use quadrature modulation; like JT65, it sends one of 65 FSK tones at a time.

> **Key Information:**
> - Q65 is designed for EME communications. {{< link id="E2D03" >}}
> - Q65 differs from JT65 by averaging multiple receive cycles. {{< link id="E2E07" >}}

WSJT-X can average JT65 messages too. Q65 centers on averaging, though, and adds a newer error-correcting code and better tolerance of fast fading. Averaging combines only copies of the same message, so keep sending it until it gets through.

#### Take Opposite Turns

Two stations transmitting together cannot hear each other's lunar return. FT8's solution works here too, with longer periods.

> **Key Information:** A method of establishing EME contacts is time-synchronous transmissions alternating between stations. {{< link id="E2D06" >}}

Agree on a period length and who transmits first, then let synchronized clocks keep the sequence. For 60-second periods, the plan could be:

| Period starts (UTC) | Station A | Station B |
|---|---|---|
| 02:00:00 | Transmit | Receive |
| 02:01:00 | Receive | Transmit |
| 02:02:00 | Transmit | Receive |
| 02:03:00 | Receive | Transmit |

The software times its signal within each slot. Point the antennas for the lunar path, check the agreed period, and let successful decodes determine when to advance the exchange.
