---
chapter: "10"
section: "10.2"
questions: ["E2E01", "E2E11", "E2E09", "E2E08", "E2E13", "E2E10", "E2E12", "E2E06", "E2E02", "E2E03", "E2E04", "E2E05"]
status: "generated1"
draft: true
---

### Section 10.2: Choosing a Digital Mode

An FT8 contact can finish without either operator typing a word. PSK31 carries a typed conversation, a Winlink session over PACTOR can deliver an email with a photo attached, and WSPR holds no conversation at all. Each mode was built for a particular job, and the job decides what the mode gives up: speed, bandwidth, or the ability to get through noise.

| Intended use | Typical modes |
|---|---|
| Keyboard conversation | RTTY, PSK31, MFSK16 |
| Reliable data and file transfer | PACTOR |
| Short messages in timed periods | FT8, FT4, FST4 |
| Propagation reporting | WSPR |

#### Getting Data into the Transmitter

Most of these HF modes shift among tones, which makes them forms of frequency-shift keying. A radio can produce those shifts through two different signal paths. In one, a keying line from the computer shifts the radio's own oscillator. In the other, the computer's audio interface generates the tones, and the SSB transmitter translates them to RF.

> **Key Information:**
> - FSK is a type of modulation used for data emissions below 30 MHz. {{< link id="E2E01" >}}
> - Direct FSK modulates the transmitter VFO; audio FSK (AFSK) supplies audio tones through the transmitter's audio path. {{< link id="E2E11" >}}

Direct FSK and AFSK describe two ways to generate the signal. They do not, by themselves, guarantee different bandwidths or data rates. With AFSK, the drive-level checks from the previous chapter keep the audio path from adding unwanted products.

#### Text, Files, and Speed

Keyboard modes deal in characters. MFSK16 sends one of 16 tones at a time, with error correction to recover text through noise. PSK31 sends its text in Varicode, which, like Morse code, gives common characters shorter bit patterns. A space is a single bit and a lowercase e is two, while rare characters take up to ten, so ordinary text takes less time to send.

A binary file, such as that attached photo, is different. Every byte must survive, including values that aren't printable characters. PACTOR checks each block and has the receiver request any damaged one again, the ARQ method from Section 4.3. That reliability, rather than convenient character coding, serves the file-transfer job.

> **Key Information:**
> - PSK31 uses variable-length character coding. {{< link id="E2E09" >}}
> - PACTOR can be used to transfer binary files. {{< link id="E2E08" >}}

Speed costs bandwidth. The table compares four modes by bandwidth and by **throughput**, the useful data delivered per second.

| Mode | Approximate bandwidth | Throughput in clear conditions |
|---|---|---|
| FT8 | 50 Hz | about 5 bit/s (77 bits per 15 s) |
| RTTY, 170 Hz shift, 45 baud | 250 Hz | about 30 bit/s |
| MFSK16 | 316 Hz | about 31 bit/s |
| PACTOR IV | 2.4 kHz | up to about 5,500 bit/s |

The RTTY width follows from the formula in Section 4.4: $45+1.2\times170\approx250$ Hz. PACTOR IV fills most of an SSB channel and adapts its modulation, sending more data when conditions allow. FT8 trades the other way, giving up speed for the ability to decode through noise. Its narrow signal also lets dozens of stations share one SSB receiver passband. As conditions worsen, error checks and repeated blocks lower the throughput of ARQ modes such as PACTOR.

> **Key Information:**
> - Of the four modes in the table, PACTOR IV has the highest data throughput under clear communication conditions. {{< link id="E2E13" >}}
> - Of the four modes in the table, FT8 has the narrowest bandwidth. {{< link id="E2E10" >}}

#### Finding a Working Channel

A data link also needs a frequency that both stations can use. On HF, which frequency works changes with the time of day and conditions. Automatic Link Establishment, or ALE, takes over that search.

> **Key Information:** ALE stations establish contact by continually scanning a list of frequencies and activating the radio when the designated call sign is received. {{< link id="E2E12" >}}

#### Short Messages on a Shared Clock

FT8 stations take turns. If station A transmits in the period starting at 12:00:00 UTC, station B replies in the one starting at 12:00:15, and A's next turn starts at 12:00:30. Each period holds about 12.6 seconds of signal, plus time around it for decoding and replying. Each station's software, usually WSJT-X, starts its periods by the computer's clock. A clock that is off can cut off a message or push part of it into the other station's turn.

FT4 works the same way with 7.5-second periods, for faster contest exchanges. Its signal moves among four tones without jumping to a new phase at each change.

> **Key Information:**
> - An FT8 transmission cycle is 15 seconds. {{< link id="E2E06" >}}
> - Synchronizing computer clocks synchronizes WSJT-X transmit/receive timing. {{< link id="E2E02" >}}
> - The “4” in FT4 refers to four-tone continuous-phase frequency-shift keying. {{< link id="E2E03" >}}

On a stable path, allowing more time for each message can make weaker signals usable. FST4 lets operators make that trade: its period choices run from 15 to 1800 seconds, each with its own tone spacing. Longer periods allow slower symbols and closer spacing, trading speed for sensitivity. With 15-second periods, FST4 is about 68 Hz wide; with 1800-second periods, it's less than half a hertz. A Gaussian filter, named for its bell-curve shape, smooths each change of tone to limit unwanted spectral spread. Very narrow settings demand stable frequencies; drifting across several tone spacings defeats their advantage.

> **Key Information:** FST4 uses four-tone Gaussian frequency-shift keying, variable transmit/receive periods, and seven different tone spacings. {{< link id="E2E04" >}}

#### Reports Without a Conversation

Sometimes all you want to know is where your signal reaches. WSPR (pronounced “whisper”), the Weak Signal Propagation Reporter, sends a compact message carrying little more than a call sign, location, and power. Receiving stations decode and report it even without operators attending. The message has no room for typed text, and nobody replies.

> **Key Information:** WSPR does not support keyboard-to-keyboard operation. {{< link id="E2E05" >}}
