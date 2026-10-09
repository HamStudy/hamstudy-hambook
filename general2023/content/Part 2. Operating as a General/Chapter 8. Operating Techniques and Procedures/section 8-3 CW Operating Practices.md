---
chapter: "8"
section: "8.3"
questions: ["G2B04", "G2C04", "G2C06", "G2C05", "G2C02", "G2C03", "G2C07", "G2C10", "G2C09", "G2C01"]
status: draft1
---

### Section 8.3: CW Operating Practices

A CW contact may contain only a few lines of information: callsigns, a report, names, and locations. Short codes show when to reply, ask for a slower speed, or confirm what you received. Learning those signals alongside the code helps you follow the contact as a conversation.

CW’s narrow bandwidth makes it useful when signals are weak or the band is crowded. It also offers the chance to send and copy a signal directly by ear and hand. You do not need to operate at high speed to use it; the useful speed is one both operators can follow.

#### Finding and Tuning a Signal

Separate CW contacts need much less frequency spacing than SSB conversations:

> **Key Information:** When selecting a CW transmitting frequency, a minimum separation of 150 to 500 Hz from other stations should be used to minimize interference on adjacent frequencies. {{< link id="G2B04" >}}

The appropriate spacing depends on signal strength, sending speed, and receiver filtering. Listen before choosing a frequency, and allow more room when nearby signals still interfere.

The frequency-use check introduced in the previous section has a short CW form:

> **Key Information:** The Q signal “QRL?” means “Are you busy?” or “Is this frequency in use?” {{< link id="G2C04" >}}

Q-signals are three-letter groups used for common statements and questions; they save time without requiring the operators to spell out each request.

Spacing separates independent contacts. When answering a station that expects a reply on its own frequency, you instead want your transmitter to match it:

> **Key Information:** In CW operation, “zero beat” means matching the transmit frequency to the frequency of a received signal. {{< link id="G2C06" >}}

Two signals at the same frequency have a difference, or beat frequency, of zero. A modern transceiver uses a CW pitch offset so you can still hear the matched signal. Follow its procedure for matching the received pitch to a spot tone or using a CW tuning indicator. For example, with a 600 Hz spot tone, you tune the received signal to that pitch—not toward silence. Check that split or other frequency offsets are not unintentionally separating transmit and receive.

#### Choosing a Speed Both Stations Can Copy

The speed of a CQ helps you judge how to answer:

> **Key Information:**
> - The best speed when answering a CQ in Morse code is the fastest speed at which you are comfortable copying, but no faster than the CQ. {{< link id="G2C05" >}}
> - The Q signal “QRS” asks the other station to send slower. {{< link id="G2C02" >}}

If the station calls at 15 words per minute and you copy comfortably at 12, reply at 12. If you can copy 25, still answer no faster than 15. Sending faster than you can receive may invite a reply you cannot follow.

You can ask the other operator to slow down during the contact. For the exam, recognize the request to send slower even though the pool writes it as “QRS?” Formally, QRS means “Send more slowly,” while QRS? asks “Shall I send more slowly?” Good spacing between letters and words matters as well; slowing the individual elements while running the words together does not make an exchange easy to copy.

#### Taking Turns and Giving Reports

CW operators use *prosigns*, or procedural signals, to manage an exchange. A prosign combines its written letters into one continuous Morse pattern, without the normal gap between letters. Q-signals such as QRS, by contrast, are sent as separate letters.

At the end of a general call, K invites a reply. When you are speaking to a particular station, KN makes the intended handoff more specific:

> **Key Information:** When a CW operator sends “KN” at the end of a transmission, they are listening only for a specific station or stations. {{< link id="G2C03" >}}

SK marks the end of a contact. These signals organize the exchange; they do not replace your call sign.

The signal report adds one item to the voice report from the previous section. RST reports readability, strength, and tone. Tone runs from 1 to 9, with 9 describing a pure tone. A 579 report therefore means perfectly readable, strength 7, and pure tone.

> **Key Information:** A “C” added to a CW RST report indicates a chirpy or unstable signal. {{< link id="G2C07" >}}

A chirp is a change in the signal’s frequency during a Morse element; you hear the pitch change. Reporting it gives the transmitting station a reason to check its equipment.

You can also describe a problem at your end:

> **Key Information:** The Q signal “QRN” means “I am troubled by static.” {{< link id="G2C10" >}}

That tells the sender why you may need a repeat even if their signal is otherwise good. After receiving and understanding the information, acknowledge it:

> **Key Information:** The Q signal “QSL” means “I have received and understood.” {{< link id="G2C09" >}}

If you missed part of the transmission, ask for it again before acknowledging.

#### A Short CW Exchange

Here is one possible opening. DE means “from,” NAME introduces the operator’s name, and QTH introduces the location. The letters shown for KN are sent together as a prosign.

> **W1ABC calls:** CQ CQ DE W1ABC W1ABC K
>
> **W2XYZ answers:** W1ABC DE W2XYZ W2XYZ K
>
> **W1ABC replies:** W2XYZ DE W1ABC RST 579 NAME ALEX QTH DENVER KN

The last line addresses W2XYZ, identifies W1ABC, and gives the report, name, and location before inviting W2XYZ to reply. W2XYZ can acknowledge with QSL and return the same kinds of information.

At the close, identify your station and use SK to mark the end of the contact. You may also hear 73, meaning “best regards.” A short contact at a manageable speed is enough to practice the complete sequence.

#### Listening Between Elements

Normally, an operator waits for the other station to finish before replying. Full break-in adds a way for the receiving station to get the sender’s attention sooner:

> **Key Information:** Full break-in CW operation, or QSK, allows transmitting stations to receive between code characters and elements. {{< link id="G2C01" >}}

The radio returns to receive during the brief gaps between transmitted elements. During those gaps, the sender can hear a reply from the other station, prompting them to stop and listen. This is rapid switching between transmit and receive, not simultaneous full-duplex operation.

![A timeline runs from left to right. The transmit row shows a dot, a longer dash, and another dot. In the receive row, blocks fill the gaps between those elements and follow the final dot. Full break-in lets the operator hear a reply during these gaps. Transmission and reception alternate; they do not happen at the same time. Switching intervals are simplified.](../../../images/s8-3-cw-break-in-timing.svg)
{.img-centered caption="Full break-in lets you listen between Morse elements. Switching intervals are simplified."}

Before enabling QSK with an amplifier, confirm that the whole transmitting system supports the required switching, using the precautions from [Section 7.4]({{% pageref "7.4" %}}).
