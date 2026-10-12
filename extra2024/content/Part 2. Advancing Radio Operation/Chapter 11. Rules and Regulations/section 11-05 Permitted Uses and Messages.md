---
chapter: "11"
section: "11.5"
questions: ["E1D01", "E1D04", "E1D12", "E1C05", "E1A08", "E1F07", "E1F08", "E1F09"]
status: "generated1"
draft: true
---

### Section 11.5: Permitted Uses and Messages

A balloon reporting its altitude sends a measurement. A ground station telling it to drop its payload sends a command. The radio link may be the same, but the message's purpose changes which rules apply. Automatic equipment must follow those distinctions too.

#### Reports in One Direction

The balloon's altitude and battery readings go out on their own schedule, with no reply expected. Those readings are telemetry; the command to drop the payload is telecommand.

> **Key Information:**
> - Telemetry is the one-way transmission of measurements at a distance from the measuring instrument. {{< link id="E1D01" >}}
> - A balloon-borne telemetry station's identification transmissions must include its call sign. {{< link id="E1D04" >}}

An APRS position report from the previous chapter carries both: the sending station's call sign and its readings.

A report or command can serve its purpose without a reply from every listener. The rules permit certain one-way uses according to the station's role. A beacon, for example, gives other stations a signal for observing propagation, and it needs no answers.

> **Key Information:** Space stations, beacon stations, and telecommand stations may transmit one-way communications. {{< link id="E1D12" >}}

#### Forwarding Someone Else's Message

A message-forwarding system can pass messages through several stations without a person handling each relay. Your own message to another amateur isn't third-party traffic. A message you pass along on behalf of someone else is, such as an email from a relative who isn't licensed. Automatic forwarding doesn't change that, and it adds a condition on the emission type.

> **Key Information:** A station may transmit third-party communications while automatically controlled only when transmitting RTTY or data emissions. {{< link id="E1C05" >}}

Crossing a border adds another check. A third-party message may go to a station in another country only if that country has a third-party agreement with the United States. Two kinds of message are exempt. One is emergency or disaster-relief traffic. The other is a message for a third party who is eligible to be the station's control operator, such as another US licensee.

Suppose station A originates a message that breaks the rules, and stations B and C forward it without knowing.

> **Key Information:** If a message-forwarding station inadvertently forwards a prohibited message, the control operator of the originating station is primarily accountable. {{< link id="E1A08" >}}

The word “inadvertently” matters. Once a forwarding operator learns that a message breaks the rules, they must stop passing it along. The first forwarding station has an extra duty. It must confirm which station a message came from, or else accept responsibility for any violation in what it passes into the system.

#### Purpose, Payment, and Privacy

A message to a business isn't always business use of amateur radio. Telling a shop owner that a relative arrived safely is personal, and nobody makes money from it. Ordering supplies for your employer is different. That order serves your employer's business.

> **Key Information:**
> - An amateur station may send a message to a business when neither the amateur nor the amateur's employer has a pecuniary interest in the communication. {{< link id="E1F07" >}}
> - Communications for hire or material compensation are prohibited except where the rules specifically provide otherwise. {{< link id="E1F08" >}}

**Pecuniary** means financial. A small payment is still payment; the rules offer no general exemption for amounts below 25 or 50 dollars. Section 97.113 lists a few specific exceptions, such as pay for a teacher who uses a station in class. None of them make amateur radio a substitute for routine business communication.

Many email and web programs encrypt their traffic automatically; the padlock beside a web address means exactly that. The message inside may be ordinary, but the radio link then carries scrambled data that other stations can't read.

> **Key Information:** Messages encoded to obscure their meaning cannot be transmitted over an amateur radio mesh network. {{< link id="E1F09" >}}

Before running such a program over an amateur mesh, check what it actually sends over the radio link. Ordinary digital encoding tells a suitable receiver how to reconstruct the data. Encryption hides it from receivers that lack the key, even when the encryption method itself is published.
