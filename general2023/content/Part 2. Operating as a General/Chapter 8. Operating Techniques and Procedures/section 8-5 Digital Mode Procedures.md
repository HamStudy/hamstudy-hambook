---
chapter: "8"
section: "8.5"
questions: ["G2E01", "G2E05", "G2E15", "G2E04", "G2E12", "G2E13", "G2E02", "G2E09", "G2E10", "G2E03"]
status: draft1
---

### Section 8.5: Digital Mode Procedures

Digital contacts do not all follow the same pattern. RTTY can carry a typed conversation, FT8 exchanges a small set of structured messages, and a messaging system can transfer email through a gateway. Choosing a mode therefore means choosing both a kind of signal and a way of communicating.

#### Having a Keyboard Conversation with RTTY

RTTY lets two operators exchange text over radio. Before answering, decode enough of the activity to identify the calling station and determine whether it is inviting a new contact or speaking to someone else.

The correct sideband for digital operation depends on the mode, rather than following the voice conventions introduced earlier in this chapter:

> **Key Information:** When sending RTTY signals via AFSK with an SSB transmitter, LSB is normally used. {{< link id="G2E01" >}}

Use the radio and software settings together as directed by their instructions. With AFSK, the SSB transmitter places the audio tones above its dial frequency on USB or below it on LSB. Sideband selection therefore affects which RF frequency represents mark or space; a mismatch may leave a strong signal unreadable. The tone shift, baud rate, and Reverse checks from Section 7.5 help diagnose that problem without guessing at the text.

Once you can copy a CQ, identify the calling station and yourself, then leave time for a reply. The contact can continue with reports, names, locations, and ordinary conversation.

#### Making a Structured Contact with FT8

FT8 is designed around brief, structured exchanges rather than free-form conversation. The software handles much of the sequence, but you still choose whom to call and check that each reply is addressed to you.

FT8 and several related modes share a sideband convention. Within the 20-meter digital area introduced earlier in this chapter, FT8 has a common meeting place:

> **Key Information:**
> - USB is the standard sideband for JT65, JT9, FT4, and FT8 signals when using AFSK. {{< link id="G2E05" >}}
> - FT8 is commonly found between approximately 14.074 MHz and 14.077 MHz. {{< link id="G2E15" >}}

The USB convention remains true on bands where SSB voice normally uses LSB. A radio’s data-mode label may differ, so follow the software and radio instructions for the appropriate USB-based configuration.

The radio’s USB dial frequency is normally 14.074 MHz. Individual signals occupy different positions above it within the audio passband shown by the waterfall. For example, an audio offset of 1,500 Hz places a transmitted signal near 14.0755 MHz. Choosing another position in that passband is different from changing the radio’s dial frequency.

Timing determines when to use that position:

> **Key Information:** When answering a station calling CQ using FT8, find a clear frequency during the alternate time slot to the calling station. {{< link id="G2E04" >}}

If the station calls in one 15-second period, your reply belongs in the following period, when it is receiving. Watch activity in both periods before choosing your transmit position. A frequency that looks clear during the CQ may already be used by someone transmitting in the opposite period.

![Two station rows share a timeline marked at zero, fifteen, and thirty seconds. During the first fifteen-second period, Station A calls CQ while Station B receives. During the next period, Station B replies while Station A receives. Each transmit bar ends before its fifteen-second period ends. The stations use opposite periods, and each must choose a transmit frequency that is clear during its own period.](../../../images/s8-5-ft8-turn-taking.svg)
{.img-full .img-centered}

Your reply can use a different audio frequency from the caller's, as long as it stays within the passband the other station is receiving. Check both the selected transmit period and the marker showing your transmit frequency on the waterfall rather than assuming the software’s current settings are appropriate.

A normal exchange establishes the callsigns, passes signal reports, and acknowledges receipt. Let the sequence finish and check the result before logging the contact. If replies are consistently missing, revisit the timing and signal-level checks in Section 7.5 rather than immediately increasing power.

#### Sending Messages Through Winlink

Winlink provides another option: send a written message through a network for the recipient to collect later, much like ordinary email. It can serve an operator who has a radio connection but no local internet access:

> **Key Information:**
> - Winlink is an amateur radio network for sending and receiving internet email, a form of packet radio, and a wireless network capable of both VHF and HF operation. {{< link id="G2E12" >}}
> - A Winlink Remote Message Server is also called a gateway. {{< link id="G2E13" >}}
> - VARA is a digital protocol used with Winlink. {{< link id="G2E02" >}}

The messaging network and the radio protocol are different parts of that system. Winlink handles the messages; a compatible radio protocol carries them between your station and another station in the network. An internet-connected gateway can transfer your email between the radio link and the wider network. Winlink also supports radio-only arrangements, but usable routes must actually be available. The automatic-station and message rules covered in the next chapter still apply.

![From left to right, a computer and radio represent your station; a radio connected to network equipment represents the gateway, also called an RMS; and an envelope on a computer screen represents the email recipient. A radio-wave symbol identifies the bidirectional radio link, which uses a compatible protocol such as VARA. A globe identifies the bidirectional internet link from the gateway to the recipient. Winlink is the messaging system, not a separate device or another name for VARA. This shows one Winlink route; radio-only routes are also possible when available.](../../../images/s8-5-winlink-message-path.svg)
{.img-full .img-centered caption="One internet-connected Winlink route: your station (left) exchanges messages by radio with a gateway (center), which connects through the internet to an email recipient (right). Arrows show messages traveling both ways."}

Choose a gateway that supports the band and protocol your station can use. One available protocol is VARA. PACTOR is another protocol used for radio messaging.

> **Key Information:** You cannot join an existing PACTOR contact; PACTOR connections are limited to two stations. {{< link id="G2E09" >}}

Wait for the session to finish or select another suitable gateway. Sending your call over an active connection does not add you to it and may disrupt the transfer.

#### Establishing and Checking the Connection

Before connecting, check the gateway’s current listing for its callsign, supported protocol, frequency, and any operating instructions. Confirm that your equipment settings match and that the channel is not occupied:

> **Key Information:** One way to establish contact with a digital messaging system gateway is to transmit a connect message on the station’s published frequency. {{< link id="G2E10" >}}

The messaging software sends that request using the selected protocol, and the gateway responds automatically. Wait for the software to show whether the radio connection succeeds before expecting a message transfer.

Connected protocols can request that damaged or missing data be sent again. That helps complete a transfer, but interference may prevent progress:

> **Key Information:** Interference to a PACTOR or VARA transmission can cause frequent retries or timeouts, long pauses in message transmission, or failure to establish a connection. {{< link id="G2E03" >}}

Listen for other activity, verify the setup, and try a suitable alternate gateway or frequency when needed. Repeated connect attempts on an occupied channel can make the problem worse.

Watch for the transfer result before disconnecting. A successful upload means the gateway accepted the message; it does not necessarily mean the intended person has read it. When receipt matters, arrange an acknowledgment from the recipient.

In an emergency, the best method is the one that can carry the needed information to the people who can use it, with a way to confirm that it arrived.
