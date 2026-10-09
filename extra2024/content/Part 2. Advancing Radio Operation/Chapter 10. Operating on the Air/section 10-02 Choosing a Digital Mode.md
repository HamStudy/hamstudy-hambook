---
chapter: "10"
section: "10.2"
questions: ["E2E01", "E2E11", "E2E09", "E2E08", "E2E13", "E2E12", "E2E03", "E2E06", "E2E02", "E2E10", "E2E04", "E2E05"]
status: "generated1"
draft: true
---

### Section 10.2: Choosing a Digital Mode

Choose a digital mode by what you want to send. A typed conversation, a binary file, a short weak-signal exchange, and a propagation report place different demands on a radio link. If all you need to send is a call sign and a report through noise, raw file-transfer speed is beside the point.

| Intended use | Modes to recognize |
|---|---|
| Keyboard conversation | RTTY, PSK31, MFSK16 |
| *Reliable data and file transfer* | *PACTOR* |
| Short, timed contacts | FT8, FT4, FST4 |
| Propagation reporting | WSPR |

These groups describe common uses, not a full list of each mode's abilities. The coding and bandwidth ideas from Chapter 4 explain the tradeoffs.

#### Getting Data into the Transmitter

Frequency-shift keying, or FSK, carries data by changing frequency. *You can create those changes in the radio itself or send shifting audio tones through an SSB transmitter.* In the latter case, the radio translates the tones into shifting RF frequencies.

> **Key Information:**
> - FSK is a type of modulation used for data emissions below 30 MHz. {{< link id="E2E01" >}}
> - Direct FSK modulates the transmitter VFO; audio FSK supplies audio tones through the transmitter's audio path. {{< link id="E2E11" >}}

Direct FSK and AFSK describe how the signal is generated. They do not, by themselves, guarantee different bandwidths or data rates. With AFSK, the drive-level checks from the previous chapter keep the audio path from adding unwanted products.

PSK31 instead changes the signal's phase. *Its character code assigns shorter patterns to commonly used characters, which saves time during ordinary text conversation.*

> **Key Information:** PSK31 uses variable-length character coding. {{< link id="E2E09" >}}

That does not make it a general-purpose binary file transport. A file needs its sequence of bytes preserved, including values that do not represent printable text. *PACTOR provides a data link suited to that task, using error control so bad blocks can be recovered.*

> **Key Information:**
> - PACTOR can transfer binary files. {{< link id="E2E08" >}}
> - Under clear conditions, PACTOR IV has the highest data throughput among MFSK16, 170 Hz shift 45-baud RTTY, FT8, and PACTOR IV. {{< link id="E2E13" >}}

Throughput means useful data delivered per unit time. It falls when the link must use more protection or repeat damaged data. A speed that looks impressive on a clear path may accomplish less when every other block needs another try.

#### Finding a Working Channel

A data link also needs a frequency that both stations can use at that time. *Automatic Link Establishment, or ALE, lets a waiting station monitor a list of frequencies instead of staying on one channel. When it recognizes a call addressed to it, it stops scanning to establish the link.*

> **Key Information:** ALE stations establish contact by continually scanning a list of frequencies and activating the radio when the designated call sign is received. {{< link id="E2E12" >}}

The call arrives over the radio. An internet page is not required to tell the station where it is being called.

#### Short Messages on a Shared Clock

FT8 and FT4 exchange compact messages such as call signs, locations, and reports. Their computers divide time into agreed transmit and receive periods. A station that starts on the wrong boundary may miss part of a message or transmit during the other station's turn.

> **Key Information:**
> - An FT8 transmission cycle is 15 seconds. {{< link id="E2E06" >}}
> - Synchronizing computer clocks synchronizes WSJT-X transmit/receive timing. {{< link id="E2E02" >}}
> - The “4” in FT4 refers to four-tone continuous-phase frequency-shift keying. {{< link id="E2E03" >}}

*The four tones in FT4 are four possible frequencies used to carry the message.* *The waveform does not jump to a new phase when it changes frequency.* *The “4” counts tones, not transmit periods.*

For an FT8 example, station A takes the period beginning at 12:00:00 UTC. Station B replies in the period beginning at 12:00:15. A's next turn begins at 12:00:30. Each *15-second slot* includes the transmission and the time needed around it; the transmitted waveform does not fill every instant of the slot.

FT4 uses shorter periods for quicker exchanges. FT8 uses a narrower signal, *about 50 Hz wide*, which lets many separate signals fit within an SSB receiver passband.

> **Key Information:** Among MFSK16, 170 Hz shift 45-baud RTTY, FT8, and PACTOR IV, FT8 has the narrowest bandwidth. {{< link id="E2E10" >}}

This comparison is limited to the named modes. WSPR and some FST4 settings can be narrower still.

*FST4 offers a wider choice of period lengths.* Longer periods allow slower symbols and closer tone spacing, trading time for sensitivity on suitably stable paths.

> **Key Information:** FST4 uses four-tone Gaussian frequency-shift keying, variable transmit/receive periods, and seven different tone spacings. {{< link id="E2E04" >}}

Gaussian shaping smooths the transitions between tones to limit unwanted spectral spread. The *seven period choices* run from 15 to 1800 seconds, with *a corresponding tone spacing for each*. Very narrow settings demand stable frequencies; drifting across several tone spacings defeats their advantage.

#### Reports Without a Conversation

WSPR, pronounced “whisper,” means Weak Signal Propagation Reporter. It sends a compact report that other stations can decode to show where signals are reaching. A receiver can report a weak path even when neither operator is present for a conversation. *The transmitted message has a defined job; it is not a place to type a question about the other operator's antenna.*

> **Key Information:** WSPR does not support keyboard-to-keyboard operation. {{< link id="E2E05" >}}

Use a conversational mode when you want to talk, and a reporting mode when you want to sample propagation. Paths involving meteors or the Moon make a further demand: the decoder must cope with the way the path changes the signal.
