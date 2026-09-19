---
chapter: "8"
section: "8.5"
questions: ["G2E01", "G2E12", "G2E13", "G2E02", "G2E03", "G2E04", "G2E05", "G2E08", "G2E15", "G2E09", "G2E10", "G2E11"]
status: reviewed1
---

### Section 8.5: Digital Mode Operating Procedures

Once the computer and radio are working together, operating a digital mode involves more than pressing Transmit. You need to find suitable activity, use the expected sideband, and follow the exchange or connection procedure for that mode. Section 7.5 covered audio levels, display interpretation, timing, and decoding checks. Here we use that prepared station to make contacts and pass messages.

#### Getting Started with RTTY

RTTY provides a direct keyboard-to-keyboard exchange. Before calling, listen and decode enough of the activity to identify the stations and determine whether a contact is already in progress.

##### RTTY Fundamentals

> **Key Information:** When sending RTTY signals via AFSK with an SSB transmitter, LSB is normally used. {{< link id="G2E01" >}}

![Diagram showing RTTY signal generation via AFSK](../images/rtty-afsk-generation.svg)

The sideband convention works together with the tone settings discussed in Section 7.5. Changing sidebands reverses the relationship between audio frequencies and transmitted RF frequencies, so confirm your configuration before answering. If the display shows a signal but the text is unreadable, use that section's decoding checks rather than guessing at the message.

Once you can copy the station, keep your first exchange clear: identify whom you are calling, give your own call, and leave time for a reply. RTTY can support an ordinary conversation, while a contest exchange may require only a few specified pieces of information. Follow the activity you are joining rather than assuming all digital contacts use the same format.

#### Modern Digital Modes

While RTTY has a long history, newer digital modes offer superior performance for specific purposes:

##### WINLINK: Email via Radio

> **Key Information:** Winlink is a wireless network to send and receive email on the internet, a form of Packet Radio, and a wireless network capable of both VHF and HF band operation. {{< link id="G2E12" >}}

![Diagram showing Winlink system components and operation](../images/winlink-system-overview.svg)

Winlink can let a station without local internet access reach an email gateway over radio. That does not guarantee delivery under every outage: you still need a usable radio path and a gateway or other network arrangement capable of handling the message. Confirm the available path before relying on it.

Winlink has become especially valuable for emergency communications, maritime operation, and remote exploration. The system's flexibility allows access via various digital protocols across multiple bands.

To facilitate messages moving between radio and internet systems:

> **Key Information:** A Winlink Remote Message Server is also called a Gateway. {{< link id="G2E13" >}}

![Illustration of Winlink gateway functioning](../images/winlink-gateway-operation.svg)

Gateway operators are the unsung heroes of digital radio. They maintain 24/7 stations that relay your radio emails to the internet and back. Think of them as digital mode repeater operators—except their repeaters span continents.

##### VARA: Enhanced Digital Protocol

Another valuable digital protocol in the modern amateur's toolkit:

> **Key Information:** VARA is a digital protocol used with Winlink. {{< link id="G2E02" >}}

![Chart comparing VARA with other digital protocols](../images/vara-protocol-features.svg)

VARA is what happens when modern coding theory meets amateur radio. It watches band conditions and adapts—speeding up when signals are strong, slowing down when they're not. Think of it as cruise control for digital modes.

With its advanced features, VARA has become increasingly popular for both emergency communication and routine digital operation.

Like many digital modes, VARA can be affected by interference:

> **Key Information:** Frequent retries or timeouts, long pauses in message transmission, and failure to establish a connection between stations are all symptoms of other signals interfering with a PACTOR or VARA transmission. {{< link id="G2E03" >}}

Digital modes might be robust, but they're not magic. When someone fires up their kilowatt three kilohertz away, even VARA throws in the towel.

##### FT8 and Related Modes: Weak Signal Champions

FT8 uses timed exchanges rather than a free-form typed conversation. With the computer clock checked as described in Section 7.5, watch which transmit period the calling station uses and where signals appear during the opposite period. Your reply must arrive while that station is receiving, and you also need room for it among the other signals:

> **Key Information:** When responding to a station calling CQ using FT8, you should find a clear frequency during the alternate time slot to the calling station. {{< link id="G2E04" >}}

![Illustration of FT8 alternating time slot operation](../images/ft8-alternating-transmission.svg)

FT8's genius: While you transmit, they receive. While they transmit, you receive. It's like a perfectly choreographed conversation where nobody interrupts. Find a clear spot in the opposite time slot and make magic happen.

For all JT-family digital modes and related protocols:

> **Key Information:** The standard sideband used for JT65, JT9, FT4, or FT8 digital signals when using AFSK is USB. {{< link id="G2E05" >}}

Finally, some sanity! JT modes use USB everywhere. No more remembering which sideband for which mode on which band. Set USB and forget it.

##### Finding Digital Activity

Digital modes cluster in specific segments of each band:

> **Key Information:** Most digital mode operations are commonly found between 14.070 MHz and 14.100 MHz on the 20-meter band. {{< link id="G2E08" >}}

![Chart showing digital mode frequency allocations](../images/digital-mode-band-segments.svg)

These are shared operating areas, not exclusive reservations for one mode. Consult current band plans and listen before transmitting; activity changes, and a published calling frequency does not guarantee an empty channel. Within that broader digital segment, one common place to find FT8 is:

> **Key Information:** FT8 is commonly found between approximately 14.074 MHz and 14.077 MHz. {{< link id="G2E15" >}}

FT8 on 14.074 is like the coffee shop of amateur radio—everyone knows where to find it, it's always busy, and you'll meet operators from around the world. Just don't try ordering a latte.

#### Digital Mode Protocol Characteristics

Different digital modes have specific operational characteristics that affect how you interact with them:

##### PACTOR Connections

> **Key Information:** Joining an existing contact between two stations using the PACTOR protocol is not possible, as PACTOR connections are limited to two stations. {{< link id="G2E09" >}}

![Diagram showing PACTOR's point-to-point connection model](../images/pactor-connection-properties.svg)

PACTOR is monogamous—it connects two stations and only two stations. No conference calls, no party lines. Think of it as the dedicated phone line of digital modes. Great for reliability, not so much for group chats.

To establish a connection with a digital messaging system:

> **Key Information:** Transmitting a connect message on the station's published frequency is the way to establish contact with a digital messaging system gateway station. {{< link id="G2E10" >}}

Connecting to a digital gateway is like calling a business—you need the right number (frequency) and the right greeting (connect command). Get it right and doors open. Get it wrong and you're talking to yourself.

##### AREDN: Mesh Networking for Emergencies

Beyond traditional digital modes, advanced networking systems offer powerful emergency communication capabilities:

> **Key Information:** The primary purpose of an Amateur Radio Emergency Data Network (AREDN) mesh network is to provide high-speed data services during an emergency or community event. {{< link id="G2E11" >}}

![Illustration of AREDN mesh network topology](../images/aredn-mesh-network.svg)

AREDN turns amateur radio into amateur internet. When the real internet fails, AREDN creates its own—complete with video streaming, file sharing, and VOIP phones. It's what happens when network engineers get ham licenses and ask "What if we rebuilt the internet with radios?"

These sophisticated systems represent the cutting edge of amateur radio's emergency communication capabilities, combining modern networking technology with amateur radio's independence from commercial infrastructure.

#### Completing the Exchange

The mode determines what a successful contact looks like. A keyboard conversation may continue as long as both operators wish; an FT8 contact follows a short structured sequence. A gateway session has a different goal again: transferring the intended messages. Watch for the reply or acknowledgment that shows the exchange has actually progressed, rather than assuming that pressing Transmit completed it.

Give existing contacts room, leave space for the bandwidth your signal occupies, and avoid repeatedly calling over a station that is answering someone else. If decoding fails or another operator reports distortion, return to the setup checks in Section 7.5 before increasing power. The cause may be a setting or an overdriven audio path, not insufficient signal strength.

These habits become especially useful when the message matters more than the contact itself. The next section applies careful listening, accurate copying, and confirmation to emergency communication, where a voice exchange or a digital message may be the link to needed assistance.
