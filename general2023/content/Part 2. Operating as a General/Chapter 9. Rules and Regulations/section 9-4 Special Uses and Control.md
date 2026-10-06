---
chapter: "9"
section: "9.4"
questions: ["G1B05", "G1B04", "G1B03", "G1B09", "G1B10", "G1B02", "G1E11", "G1E03", "G1C07", "G1E07", "G1E08"]
status: draft1
---

### Section 9.4: Special Uses and Control

The contacts in the previous chapter generally involved stations exchanging information with one another. A code-practice transmission or propagation beacon works differently: it sends something useful without expecting each listener to reply. A digital gateway may answer without an operator taking each turn at the keyboard.

These differences raise two separate questions: do the rules allow that transmission, and how is the station controlled? Even when a one-way transmission is allowed, automatic control needs separate permission.

#### Permitted One-Way Transmissions

Amateur radio is not a general broadcasting service, but the rules permit specific kinds of one-way transmission. *Morse code practice* is one example:

> **Key Information:** One-way transmissions to assist people learning International Morse code are permitted. {{< link id="G1B05" >}}

Amateur stations usually cannot retransmit signals from another radio service, but the rules allow this limited exception:

> **Key Information:** All amateur stations may occasionally retransmit weather and propagation forecast information from US government stations. {{< link id="G1B04" >}}

For example, an operator may pass along government propagation information during an amateur net. This permission covers *occasional retransmission* as part of amateur communication.

#### Running a Propagation Beacon

A beacon provides a signal that other operators can use to *investigate a radio path*:

> **Key Information:** Observation of propagation and reception is a purpose of a beacon station. {{< link id="G1B03" >}}

How the beacon is controlled matters. The **control point** is where the control operator controls the station. With **local control**, the control operator works the controls directly. With **remote control**, the operator works the controls through a control link. With **automatic control**, devices and procedures keep the station within the rules without the control operator present at a control point. The station still has a responsible licensee and control operator.

![Three side-by-side scenes show the same transceiver under different control methods. At left, an operator beside the radio represents local control: the operator adjusts the radio directly. In the center, an operator uses a separate control console; a dashed line connects that console to the radio: remote control. At right, a small controller box marked with a chip symbol operates the radio, with no person shown: automatic control. The distinction is how the station is controlled, not simply whether it uses a computer. All three methods still have a responsible station licensee and control operator. The diagram explains control methods, not permission for any particular transmission.](../../../images/s9-4-station-control.svg)
{.img-full .img-centered caption="Left: local control, with the operator adjusting the radio directly. Center: remote control through a control link. Right: automatic control, with a controller operating the radio without an operator at a control point. Each method still requires a responsible licensee and control operator."}

The FCC normally allows automatic control of HF beacons only within a specific range. Two other beacon limits apply:

> **Key Information:**
> - Automatically controlled beacon operation on HF is permitted between 28.20 and 28.30 MHz. {{< link id="G1B09" >}}
> - The maximum beacon-station power is 100 watts PEP output. {{< link id="G1B10" >}}
> - No more than one beacon station may transmit in the same band from the same station location. {{< link id="G1B02" >}}

An HF beacon heard outside that range may use another authorized form of control, operate under another country’s rules, or have a specific authorization.

The location restriction is **per band**. You can have beacons on different bands at one site, as long as each follows the other rules.

#### Automatically Controlled Digital Exchanges

The gateway examples in the previous chapter use another form of automatic operation. A gateway might exchange signals with another automatically controlled station or answer an operator-controlled station. The rules differ for these two cases:

> **Key Information:**
> - Automatically controlled stations may communicate with other automatically controlled stations using RTTY or data on the 6-meter and shorter-wavelength bands, and in specified segments of some HF bands. {{< link id="G1E11" >}}
> - When contacting an automatically controlled digital station outside the automatic-control segments, the station initiating the contact must be under local or remote control. {{< link id="G1E03" >}}

The stations must still use frequencies and emission types that the rules allow. “Six meters and shorter wavelengths” means the higher-frequency bands. On HF, [Section 97.221(b)](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-97/subpart-C/section-97.221) lists the permitted segments; check that list before setting up an unattended station.

Outside those HF segments, an automatically controlled station can answer only under stricter limits. Section 97.221(c) limits its response to a bandwidth of **500 Hz** or less. This permission does not apply on the four 60-meter channels specified in Section 97.303(h). The rules must also allow that emission type on the chosen frequency. Local control at the calling station does not make every gateway mode legal everywhere. A wider automatic response still needs a segment where the rules allow it.

Using software is not, by itself, automatic control. An operator can use a computer to generate signals while remaining responsible for starting, supervising, and stopping the exchange.

#### Documenting a New Digital Protocol

You can develop a new digital protocol, but it must meet the technical rules. Other operators also need access to its technical description:

> **Key Information:** Before using a new digital protocol on the air, publicly document its technical characteristics. {{< link id="G1C07" >}}

Describe how the signal works, including its modulation, coding, timing, bandwidth, and any error-correction method. Also check the digital-code rules that apply under Section 97.309.

The radio service matters as well as the protocol. Even when two radios can exchange signals, the rules may not allow the contact:

> **Key Information:** An amateur station may not communicate over its amateur radio link with non-licensed Wi-Fi stations anywhere in the 2.4 GHz band. {{< link id="G1E07" >}}

Here, the amateur transmission follows Part 97, while the Wi-Fi device follows Part 15—the FCC rules for unlicensed devices. Holding an amateur license does not automatically turn your laptop’s ordinary Wi-Fi connection into an amateur station.

You may still connect an amateur station’s computer to a home network or the internet. Separate network connections can support station control or an amateur data network.

#### Checking the Signal’s Technical Limits

A digital protocol’s name is not enough to determine its power limit. Some use spread spectrum:

> **Key Information:** The maximum PEP output for amateur spread spectrum transmissions is 10 watts. {{< link id="G1E08" >}}

That is a transmitter-output limit, unlike the ERP limits on 60 meters. Do not apply this 10-watt rule to every digital mode, or assume every Wi-Fi-derived system has the same emission type.

You also need to consider the message itself—especially when you transmit information for someone else or send it across an international border.

<!-- Editorial sources, checked 2026-09-26: 47 CFR 97.3, 97.109, 97.111, 97.113, 97.203, 97.221, 97.305, 97.309, 97.311, and 97.313(j); AREDN Home Router Connection documentation. -->
