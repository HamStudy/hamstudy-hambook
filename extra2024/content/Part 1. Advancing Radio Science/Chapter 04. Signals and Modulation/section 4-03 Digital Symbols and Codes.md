---
chapter: "4"
section: "4.3"
questions: ["E8C02", "E8C11", "E8C01", "E8C13", "E8C10", "E8C09", "E8D10", "E8D11", "E8D06", "E8C08"]
status: generated1
draft: true
---

### Section 4.3: Digital Symbols and Codes

A receiver decoding digital data makes a series of choices: which state did the transmitter send this time? One signaling choice need not mean one bit. If the receiver can distinguish four possible states, each state can represent two bits: 00, 01, 10, or 11. This is the distinction between a *bit*, one binary digit, and a *symbol*, one signaling choice.

#### Counting Symbols

A digital transmitter divides time into symbol intervals. During each interval it sends the state chosen by the data. Repeated symbols can leave the waveform unchanged, but the scheduled opportunities to send a new symbol still count toward symbol rate.

> **Key Information:**
> - Symbol rate is the rate at which the waveform changes to convey information. {{< link id="E8C02" >}}
> - Symbol rate and baud are the same: one baud is one symbol per second. {{< link id="E8C11" >}}

A two-state system sending 1,000 symbols per second carries 1,000 raw bits per second. A four-state system at the same symbol rate can carry 2,000 raw bits per second. Message overhead and error-control information reduce the rate available for useful text or other data.

#### The Constellation Diagram

Two sine waves can have the same frequency while being a quarter-cycle apart. They are in *quadrature*: 90 degrees out of phase. A modulator can vary each one's amplitude independently and add them. Their sum has a phase and amplitude determined by the two component values.

> **Key Information:** QAM, or quadrature amplitude modulation, carries data by modulating the amplitudes of two carriers at the same frequency and 90 degrees apart in phase. {{< link id="E8C01" >}}

A constellation diagram plots the possible combinations as points. Its horizontal axis represents the in-phase component; its vertical axis represents the quadrature component. *A point's distance from the center gives its amplitude, and its angle gives its phase.* QPSK, quadrature phase-shift keying, uses four phase states at a common amplitude. QAM can use several amplitudes as well as phases.

![Two constellation plots share in-phase I and quadrature Q axes. QPSK has four equally distant points around the origin, labeled 00, 01, 11, and 10 in order so neighboring states differ by one bit. The 16-QAM plot has sixteen points in a square grid at several distances and angles from the origin. A radius to a sample point represents amplitude; its angle from the positive I axis represents phase.](/images/s4-3-constellations.svg)
{.img-centered .img-xlarge caption="Each dot is one possible symbol. QPSK carries two bits per symbol at a fixed amplitude; 16-QAM carries four bits per symbol and also uses different amplitudes. Radius A gives amplitude; angle φ gives phase. The I and Q axes are the two components, not two transmitted messages."}

> **Key Information:**
> - A QAM or QPSK constellation diagram shows the possible phase and amplitude states for each symbol. {{< link id="E8C13" >}}
> - A more efficient digital code can increase data rate without increasing bandwidth. {{< link id="E8C10" >}}

For example, sixteen distinct symbol states can represent four bits each. That moves more bits in each symbol interval. Look at the gaps between the dots, though. Noise can move a received point toward the wrong dot, so adding states demands a cleaner signal. More choices do not come free.

The bit labels also matter. Ordinary binary counting from 01 to 10 changes both bits. *A two-bit Gray-code sequence, 00, 01, 11, 10, changes only one bit at each step.* Assigning nearby constellation points this way limits the bit damage when noise makes the receiver choose a neighboring point.

> **Key Information:** Gray code changes only one bit between sequential code values. {{< link id="E8C09" >}}

#### Turning Text into Bits

A character code assigns bit patterns to letters, numbers, and control functions. *The five-bit code commonly called Baudot in amateur radioteletype has only $2^5=32$ patterns.* *Two special patterns switch the interpretation of the following characters between letters and figures.* The same five-bit value can therefore mean a letter in one state and a number or punctuation mark in the other. Miss a shift code and a run of perfectly received bits can print as the wrong characters. The receiver needs the current shift state as well as the bits.

ASCII has a larger set of patterns. *Standard ASCII uses seven data bits; extended character sets use eight.* *It does not need the letters/figures shifts used by Baudot.*

> **Key Information:**
> - Baudot uses five data bits per character and two letters/figures shift codes. ASCII uses seven or eight data bits and has no letters/figures shift code. {{< link id="E8D10" >}}
> - ASCII can transmit both uppercase and lowercase text. {{< link id="E8D11" >}}

#### Detect, Request, or Repair

A parity bit adds a quick check. With even parity, the sender chooses the extra bit so the total number of ones is even. If one bit changes in transit, the receiver counts an odd number and knows an error occurred. Two flipped bits can escape this check, and parity alone does not identify which bit is wrong.

> **Key Information:** Parity bits allow some types of errors in ASCII characters to be detected. {{< link id="E8D06" >}}

Detection leaves a decision. *Automatic repeat request, or ARQ, asks the other station to send damaged information again.* It needs a return path and time for the repeat.

> **Key Information:** ARQ corrects errors by requesting retransmission when errors are detected. {{< link id="E8C08" >}}

Forward error correction, or FEC, takes another approach. The sender adds structured check information that lets the receiver correct some errors without requesting a repeat. The added bits consume capacity, but can keep a link working when repeats would be slow or impossible. Error detection, ARQ, and FEC do different jobs even when one protocol combines them.
