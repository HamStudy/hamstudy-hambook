---
chapter: "8"
section: "8.5"
questions: ["G2E01", "G2E05", "G2E15", "G2E04", "G2E12", "G2E13", "G2E02", "G2E09", "G2E10", "G2E03"]
status: draft1
---

### Section 8.5: Digital Mode Operating Procedures

Digital contacts do not all follow the same pattern. RTTY can carry a typed conversation, FT8 exchanges a small set of structured messages, and a messaging system can transfer email through a gateway. Choosing a mode therefore means choosing both a kind of signal and a way of communicating.

Section 7.5 prepared the computer and radio to work together. Here, the task is to find suitable activity, answer without interfering, and recognize when the exchange is complete.

#### Having a Keyboard Conversation with RTTY

RTTY lets two operators exchange text over radio. Before answering, decode enough of the activity to identify the calling station and determine whether it is inviting a new contact or speaking to someone else.

The correct sideband for digital operation depends on the mode, rather than following the voice conventions from Section 8.1:

> **Key Information:** When sending RTTY signals via AFSK with an SSB transmitter, LSB is normally used. {{< link id="G2E01" >}}

Use the radio and software settings together as directed by their instructions. Sideband selection affects which RF frequency represents mark or space; a mismatch may leave a strong signal unreadable. The tone shift, baud rate, and Reverse checks from Section 7.5 help diagnose that problem without guessing at the text.

![RTTY audio tones applied to an SSB transmitter](../images/rtty-afsk-generation.svg)

Once you can copy a CQ, identify the calling station and yourself, then leave time for a reply. “W2XYZ DE W1ABC W1ABC K” is one possible typed response. DE means “from,” as in the CW example, and K invites the other station to transmit.

The contact can continue with reports, names, locations, and ordinary conversation. Preset messages can save typing, but choose ones that fit the exchange. A long equipment description is unnecessary when the other operator has asked only for a missed callsign or a contest number.

#### Making a Structured Contact with FT8

FT8 is designed around brief, structured exchanges rather than free-form conversation. The software handles much of the sequence, but you still choose whom to call and check that each reply is addressed to you.

FT8 and several related modes share a sideband convention:

> **Key Information:** USB is the standard sideband for JT65, JT9, FT4, and FT8 signals when using AFSK. {{< link id="G2E05" >}}

This remains true on bands where SSB voice normally uses LSB. A radio’s data-mode label may differ, so follow the software and radio instructions for the appropriate USB-based configuration.

Within the 20-meter digital area introduced in Section 8.1, FT8 has a common meeting place:

> **Key Information:** FT8 is commonly found between approximately 14.074 MHz and 14.077 MHz. {{< link id="G2E15" >}}

The radio’s USB dial frequency is normally 14.074 MHz. Individual signals occupy different positions above it within the audio passband shown by the waterfall. For example, an audio offset of 1,500 Hz places a transmitted signal near 14.0755 MHz. Choosing another position in that passband is different from changing the radio’s dial frequency.

Timing determines when to use that position:

> **Key Information:** When answering a station calling CQ using FT8, find a clear frequency during the alternate time slot to the calling station. {{< link id="G2E04" >}}

If the station calls in one 15-second period, your reply belongs in the following period, when it is receiving. Watch activity in both periods before choosing your transmit position. A frequency that looks clear during the CQ may already be used by someone transmitting in the opposite period.

![FT8 stations using alternating transmit and receive periods](../images/ft8-alternating-transmission.svg)

Your reply need not use exactly the same audio frequency as the caller, provided it is within the passband the other station is receiving. Check both the selected transmit period and the transmit marker rather than assuming the software’s current settings are appropriate.

A normal exchange establishes the callsigns, passes signal reports, and acknowledges receipt. Let the sequence finish and check the result before logging the contact. Sending your reply does not establish that the other station decoded it. If replies are consistently missing, revisit the timing and signal-level checks in Section 7.5 rather than immediately increasing power.

#### Sending Messages Through Winlink

FT8 exchanges a limited set of information, while RTTY leaves both operators at their keyboards. Winlink provides another option: send a written message through a network for the recipient to collect later, much like ordinary email. It can serve an operator who has a radio connection but no local internet access:

> **Key Information:** Winlink is an amateur radio network for sending and receiving internet email, a form of packet radio, and a wireless network capable of both VHF and HF operation. {{< link id="G2E12" >}}

The messaging network and the radio protocol are different parts of that system. Winlink handles the messages; a compatible radio protocol carries them between your station and another station in the network.

> **Key Information:** A Winlink Remote Message Server is also called a gateway. {{< link id="G2E13" >}}

An internet-connected gateway can transfer your email between the radio link and the wider network. Winlink also supports radio-only arrangements, but usable routes must actually be available. Losing local internet service does not by itself establish that a particular gateway or onward path will work.

![A Winlink station reaching the messaging network through a gateway](../images/winlink-system-overview.svg)

Choose a gateway that supports the band and protocol your station can use. One available protocol is VARA:

> **Key Information:** VARA is a digital protocol used with Winlink. {{< link id="G2E02" >}}

PACTOR is another protocol used for radio messaging. A connected PACTOR session is an exchange between two stations, not an open group conversation:

> **Key Information:** You cannot join an existing PACTOR contact; PACTOR connections are limited to two stations. {{< link id="G2E09" >}}

Wait for the session to finish or select another suitable gateway. Sending your call over an active connection does not add you to it and may disrupt the transfer.

![A PACTOR connection between two stations](../images/pactor-connection-properties.svg)

#### Establishing and Checking the Connection

Before connecting, check the gateway’s current listing for its callsign, supported protocol, frequency, and any operating instructions. Confirm that your equipment settings match and that the channel is not occupied:

> **Key Information:** One way to establish contact with a digital messaging system gateway is to transmit a connect message on the station’s published frequency. {{< link id="G2E10" >}}

The messaging software sends that request using the selected protocol, and the gateway responds automatically. Wait for the software to show whether the radio connection succeeds before expecting a message transfer.

Connected protocols can request that damaged or missing data be sent again. That helps complete a transfer, but interference may prevent progress:

> **Key Information:** Interference to a PACTOR or VARA transmission can cause frequent retries or timeouts, long pauses in message transmission, or failure to establish a connection. {{< link id="G2E03" >}}

Those symptoms suggest a link problem, but do not identify its cause by themselves. Listen for other activity, verify the setup, and try a suitable alternate gateway or frequency when needed. Repeated connect attempts on an occupied channel can make the problem worse.

Watch for the transfer result before disconnecting. A successful upload means the gateway accepted the message; it does not necessarily mean the intended person has read it. When receipt matters, arrange an acknowledgment from the recipient.

#### Match the Procedure to the Purpose

RTTY leaves the conversation largely to the operators. FT8 uses a defined contact sequence. A gateway session aims to transfer messages correctly. Knowing which kind of exchange you are making helps you recognize the proper next step instead of treating every decoded signal as an invitation to transmit.

These distinctions matter beyond routine contacts. In an emergency, the best method is the one that can carry the needed information to the people who can use it, with a way to confirm that it arrived.
