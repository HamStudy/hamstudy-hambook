---
chapter: "4"
section: "4.3"
questions: ["E8C02", "E8C11", "E8C01", "E8C13", "E8C10", "E8C09", "E8D10", "E8D11", "E8D06", "E8C08"]
status: generated1
draft: true
---

### Section 4.3: Digital Symbols and Codes

Each tone an RTTY signal sends stands for one bit, because RTTY chooses between only two. FT8 picks from eight, so each of its tones stands for three bits. Counting tones sent and counting bits are different measures, and the gap between them lets a signal carry more data without changing any faster. Codes then turn text into bits and catch noise's mistakes.

#### Counting Symbols

Each of those tones is a symbol, one signal state sent during a fixed time interval. How often the transmitter can send a new one sets the pace of the whole signal.

> **Key Information:**
> - The symbol rate in a digital transmission is the rate at which the waveform changes to convey information. {{< link id="E8C02" >}}
> - Symbol rate and baud are the same: one baud is one symbol per second. {{< link id="E8C11" >}}

A repeated symbol can leave the waveform unchanged, but each scheduled chance to change still counts toward the symbol rate. A two-state system sending 1,000 symbols per second carries 1,000 raw bits per second. A four-state system at the same symbol rate can carry 2,000.

#### The Constellation Diagram

Quadrature phase-shift keying, or QPSK, carries bit pairs in four phase states, 90 degrees apart, at a common amplitude. Adding amplitude changes gives more symbol choices. One way sums two carriers of the same frequency, 90 degrees apart: the in-phase, or I, carrier and the quadrature, or Q, carrier. Varying the two amplitudes separately changes both the amplitude and the phase of their sum.

A constellation diagram plots each possible combination as a dot. Its horizontal axis shows the I carrier's amplitude, and its vertical axis shows the Q carrier's. As on the impedance graph in Section 2.2, each dot also marks the tip of an arrow from the center. The arrow's length is the symbol's amplitude, and its angle is its phase.

> **Key Information:**
> - Quadrature amplitude modulation, or QAM, is the transmission of data by modulating the amplitude of two carriers of the same frequency but 90 degrees out of phase. {{< link id="E8C01" >}}
> - The constellation diagram of a QAM or QPSK signal describes the possible phase and amplitude states for each symbol. {{< link id="E8C13" >}}

![Two constellation plots each have a horizontal in-phase axis, I, and a vertical quadrature axis, Q. In the QPSK plot at left, four points sit on a dashed circle around the origin, so all have the same amplitude. Starting at upper right and going counterclockwise, they are labeled 00, 01, 11, and 10, so neighboring points differ by one bit. A line from the origin to the 00 point is marked A for amplitude, and its angle from the positive I axis is marked phi for phase. The 16-QAM plot at right has sixteen points in a four-by-four square grid, at several distances and angles from the origin.](../../../images/s4-3-constellations.svg)
{.img-centered .img-xlarge caption="Each dot is one possible symbol. QPSK carries two bits per symbol at a fixed amplitude; 16-QAM carries four bits per symbol and also uses different amplitudes. Radius A gives amplitude; angle φ gives phase. The I and Q axes show the amplitudes of the two carriers."}

With 16-QAM's sixteen states, each symbol can carry four bits, twice QPSK's two. Packing more bits into each symbol makes a code more efficient. Bandwidth depends mainly on symbol rate, not on bits per symbol. Each added state, though, crowds the dots closer together. Noise smears each received point into a small cloud, and crowded clouds overlap, so adding states demands a cleaner signal.

The bit labels also matter. Ordinary binary counting from 01 to 10 changes both bits. Labeling the QPSK dots 00, 01, 11, 10 in order around the circle changes just one bit between neighbors. When noise makes the receiver choose a neighboring dot, only one bit comes out wrong.

> **Key Information:**
> - Data rate can be increased without increasing bandwidth by using a more efficient digital code. {{< link id="E8C10" >}}
> - Gray code allows only one bit to change between sequential code values. {{< link id="E8C09" >}}

#### Turning Text into Bits

Every added bit doubles the number of patterns a code can make. RTTY's Baudot code has only $2^5=32$, too few to give every letter, number, punctuation mark, and control function its own. Special shift characters tell the receiver to read the following characters as letters or as figures, so each pattern can do double duty. Miss a shift, and perfectly received bits print as nonsense: a line of letters comes out as digits and punctuation.

ASCII, the American Standard Code for Information Interchange, uses more bits. Its standard form has $2^7=128$ patterns, and extended sets double that. Even 128 covers 26 capital letters, 26 small ones, and all the digits, punctuation marks, and control codes, each with a pattern of its own.

> **Key Information:**
> - Baudot uses 5 data bits per character and ASCII uses 7 or 8; Baudot uses 2 characters as letters/figures shift codes, and ASCII has no letters/figures shift code. {{< link id="E8D10" >}}
> - One advantage of using ASCII code for data communications is that it can transmit both uppercase and lowercase text. {{< link id="E8D11" >}}

#### Detect, Request, or Repair

To check an ASCII character for a damaged bit, the sender can add a **parity bit**. With even parity, the sender chooses the extra bit so the total number of ones is even. If one bit changes in transit, the receiver counts an odd number and knows an error occurred. Two flipped bits can escape this check, and parity alone does not identify which bit is wrong.

Detection alone does not repair the character. On a link where the receiver can talk back, **automatic repeat request**, or ARQ, takes care of that, at the cost of time for the repeat.

> **Key Information:**
> - The advantage of including parity bits in ASCII characters is that some types of errors can be detected. {{< link id="E8D06" >}}
> - ARQ accomplishes error correction by requesting a retransmission if errors are detected. {{< link id="E8C08" >}}

When repeats would be slow or impossible, forward error correction (FEC) sends extra check information along with the data. The receiver can then repair some errors without asking for a repeat.
