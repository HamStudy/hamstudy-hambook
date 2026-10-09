---
chapter: "11"
section: "11.5"
questions: ["E1D01", "E1D04", "E1D12", "E1C05", "E1A08", "E1F07", "E1F08", "E1F09"]
status: "generated1"
draft: true
---

### Section 11.5: Permitted Uses and Messages

“Turn the heater on” is a command. “The temperature is 5 degrees” is a measurement report. The radio link may be the same, but the message's purpose changes which rules apply. Automatic equipment must follow those distinctions too.

#### Reports in One Direction

A balloon can report altitude and battery voltage without waiting for a reply. Those readings are *telemetry: one-way measurements sent from a distant instrument*. A command sent to change the balloon's equipment would instead be telecommand.

> **Key Information:**
> - Telemetry is the one-way transmission of measurements at a distance from the measuring instrument. {{< link id="E1D01" >}}
> - A balloon-borne telemetry station's identification transmissions must include its call sign. {{< link id="E1D04" >}}

*Location, altitude, and power data may be useful, but they do not replace the call sign.* The APRS position report in the previous chapter is a practical place to keep measurement content and station identification straight.

A report or command can serve its purpose without a reply from every listener. The rules permit certain one-way uses according to the station's role. *A beacon, for example, provides a signal for other stations to hear without expecting each one to answer*.

> **Key Information:** Space stations, beacon stations, and telecommand stations may transmit one-way communications. {{< link id="E1D12" >}}

These are permitted categories, not a complete list of every one-way exception in Part 97. Automatic control, by itself, does not authorize any one-way content an operator chooses to send.

#### Forwarding Someone Else's Message

A message-forwarding system may carry someone else's message through several stations without a person handling each relay. That remains third-party traffic. Software does not remove the message restrictions, and automatic forwarding adds a condition on the emission type.

> **Key Information:** A station may transmit third-party communications while automatically controlled only when transmitting RTTY or data emissions. {{< link id="E1C05" >}}

Other conditions still apply. If the message crosses a border, check the third-party arrangement between those countries. *The rule does not let an automatically controlled voice station offer a general message-forwarding service.*

Suppose station A originates a message, and stations B and C forward it. *If B and C forward a prohibited message by mistake, the control operator at station A is primarily accountable.*

> **Key Information:** If a message-forwarding station inadvertently forwards a prohibited message, the control operator of the originating station is primarily accountable. {{< link id="E1A08" >}}

Once forwarding operators learn that a message is prohibited, they must stop forwarding it. The first forwarding station must also verify the source station or accept responsibility for rule violations in the messages it passes into the system. The word “inadvertently” matters: a relay operator cannot keep passing known violations.

#### Purpose, Payment, and Privacy

A business address alone does not tell you whether a message is permitted. The relevant distinction is a financial interest in the communication: a personal message can be addressed to a business without becoming a business use of amateur radio. The contact must also meet the other amateur rules.

> **Key Information:**
> - An amateur station may send a message to a business when neither the amateur nor the amateur's employer has a pecuniary interest in the communication. {{< link id="E1F07" >}}
> - Communications for hire or material compensation are prohibited except where the rules specifically provide otherwise. {{< link id="E1F08" >}}

*Pecuniary* means financial. A small payment is still payment; there is no general exemption for amounts below 25 or 50 dollars. The question is the financial purpose of the message, not whether the amount sounds small. Section 97.113 has specific exceptions, but they do not make amateur radio a substitute for routine business communication.

An email or web application may encrypt traffic automatically. Before carrying it over an amateur mesh, inspect what the program will actually send on the RF link. A permitted personal message does not make the application's encrypted transport permissible.

> **Key Information:** An amateur radio mesh network may not carry messages encoded to obscure their meaning. {{< link id="E1F09" >}}

Ordinary digital encoding tells a suitable receiver how to reconstruct the data. Encryption hides it from receivers that lack the key, even when the encryption method itself is published. Chapter 10 describes a narrow exception for commands to space stations. *That exception does not permit encrypted user traffic on a mesh.* Check how the program sends its data before putting it on the RF network.
