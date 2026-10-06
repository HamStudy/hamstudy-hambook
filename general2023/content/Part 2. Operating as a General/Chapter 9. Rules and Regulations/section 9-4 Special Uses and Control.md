---
chapter: "9"
section: "9.4"
questions: ["G1B05", "G1B04", "G1B03", "G1B09", "G1B10", "G1B02", "G1E11", "G1E03", "G1C07", "G1E07", "G1E08"]
status: draft1
---

### Section 9.4: Special Uses and Control

The contacts in the previous chapter generally involved stations exchanging information with one another. A code-practice transmission or propagation beacon works differently: it sends something useful without expecting each listener to reply. A digital gateway may answer without an operator taking each turn at the keyboard.

These differences raise two separate questions: is that kind of transmission permitted, and how is the station controlled? Permission for a one-way transmission does not by itself authorize automatic control.

#### Permitted One-Way Transmissions

Amateur radio is not a general broadcasting service, but the rules permit specific kinds of one-way transmission. Morse code practice is one example:

> **Key Information:** One-way transmissions to assist people learning International Morse code are permitted. {{< link id="G1B05" >}}

An operator can send practice text for others to copy without collecting replies from every listener. Identification, frequency privileges, and the other applicable operating requirements still apply.

There is also a limited exception to the general restriction on retransmitting signals from another radio service:

> **Key Information:** All amateur stations may occasionally retransmit weather and propagation forecast information from US government stations. {{< link id="G1B04" >}}

For example, an operator may pass along government propagation information during an amateur net. The permission is for occasional retransmission associated with amateur communication, not an unrestricted license to run a continuous broadcast service.

#### Running a Propagation Beacon

A beacon provides a signal that other operators can use to investigate a radio path:

> **Key Information:** Observation of propagation and reception is a purpose of a beacon station. {{< link id="G1B03" >}}

How the beacon is controlled matters. The **control point** is where the control operator performs that duty. With **local control**, the control operator directly operates the controls. With **remote control**, the operator does so indirectly through a control link. With **automatic control**, devices and procedures keep the station in compliance without the control operator present at a control point. The station still has a responsible licensee and control operator.

For ordinary FCC-authorized HF beacon operation, automatic control is limited to a specific range:

> **Key Information:** Automatically controlled beacon operation on HF is permitted between 28.20 and 28.30 MHz. {{< link id="G1B09" >}}

This does not mean every beacon heard elsewhere is illegal. A beacon may use another authorized form of control, operate under another country’s rules, or have a specific authorization. Do not treat the international beacon network’s frequencies as blanket permission to establish an automatically controlled US beacon there.

Two other beacon limits apply:

> **Key Information:** The maximum beacon-station power is 100 watts PEP output. {{< link id="G1B10" >}}

> **Key Information:** No more than one beacon station may transmit in the same band from the same station location. {{< link id="G1B02" >}}

The location restriction is **per band**. It does not prohibit beacons on different bands at one site, provided each otherwise complies with the rules. As with other stations, use only the power needed for the purpose rather than automatically selecting the maximum.

#### Automatically Controlled Digital Exchanges

The gateway examples in the previous chapter use another form of automatic operation. The rules distinguish exchanges between automatically controlled stations from a gateway responding to an operator-controlled station:

> **Key Information:** Automatically controlled stations may communicate with other automatically controlled stations using RTTY or data on the 6-meter and shorter-wavelength bands, and in specified segments of some HF bands. {{< link id="G1E11" >}}

The stations must still use authorized frequencies and emissions. “Six meters and shorter wavelengths” means the higher-frequency bands, not permission to ignore their other restrictions. On HF, [Section 97.221(b)](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-97/subpart-C/section-97.221) lists the permitted segments; consult that list before configuring an unattended station.

Outside those HF segments, there is a narrower permission for an automatically controlled station to answer:

> **Key Information:** When contacting an automatically controlled digital station outside the automatic-control segments, the station initiating the contact must be under local or remote control. {{< link id="G1E03" >}}

Under Section 97.221(c), the responding automatic station must also occupy no more than **500 Hz**, and that permission excludes the four 60-meter channels specified in Section 97.303(h). The frequency must otherwise permit the emission. A locally controlled caller therefore does not make every gateway mode legal everywhere; a wider automatic response still needs an appropriate authorized segment.

Using software is not, by itself, automatic control. An operator can use a computer to generate signals while remaining responsible for starting, supervising, and stopping the exchange. Configure the station for the actual form of control being used, not merely for the name of its software.

#### Documenting a New Digital Protocol

Control requirements apply even when the signal itself is experimental. Developing a new digital protocol is permitted within the relevant technical rules, but other operators need access to its technical description:

> **Key Information:** Before using a new digital protocol on the air, publicly document its technical characteristics. {{< link id="G1C07" >}}

A useful specification describes the modulation, coding, timing, bandwidth, and any error-correction method well enough to explain how the signal works. Publishing the description does not waive the frequency, bandwidth, identification, or message-content rules. Check the applicable digital-code provisions in Section 97.309 as well.

The radio service matters as well as the protocol. Compatible hardware does not make two radio services interchangeable:

> **Key Information:** An amateur station may not communicate over its amateur radio link with non-licensed Wi-Fi stations anywhere in the 2.4 GHz band. {{< link id="G1E07" >}}

Here the distinction is between an amateur transmission under Part 97 and a Wi-Fi device operating under Part 15. An amateur license held by the laptop’s owner does not automatically turn its ordinary Wi-Fi connection into an amateur station.

This is not a prohibition on connecting an amateur station’s computer to a home network or the internet. Separate network connections can support station control or an amateur data network. The transmissions on the amateur RF link must still meet Part 97, including its identification and message-content requirements. The AREDN services described in the previous chapter need that same separation between network connectivity and permission to transmit particular traffic.

#### Checking the Signal’s Technical Limits

A digital protocol’s name is not enough to determine its power limit. Some use spread spectrum, which deliberately spreads the signal over a wider bandwidth:

> **Key Information:** The maximum PEP output for amateur spread spectrum transmissions is 10 watts. {{< link id="G1E08" >}}

That is a transmitter-output limit, unlike the ERP limits on 60 meters. Spread spectrum is also subject to its own frequency and interference requirements. Do not apply this 10-watt rule to every digital mode, or assume every Wi-Fi-derived system has the same emission type.

Before operating a new system, identify its emission, bandwidth, power, and form of station control. Those determine which permissions apply. You also need to consider the message itself—especially when you transmit information for someone else or send it across an international border.

<!-- Editorial sources, checked 2026-09-26: 47 CFR 97.3, 97.109, 97.111, 97.113, 97.203, 97.221, 97.305, 97.309, 97.311, and 97.313(j); AREDN Home Router Connection documentation. -->
