---
chapter: "9"
section: "9.3"
questions: ["G1A06", "G1E04", "G1E10", "G2D01", "G2D02", "G2D03", "G1B11"]
status: draft1
---

### Section 9.3: Spectrum and Interference

An amateur allocation does not always mean that amateurs are the only users of those frequencies. Some bands are shared with government stations or other radio services. You need to follow your own frequency and power limits and know how to share the band.

#### Operating as a Secondary Service

Primary and secondary describe how radio services share a band, not which amateur's contact takes priority:

> **Key Information:** When the amateur service is secondary on a band, amateur stations must not cause harmful interference to primary users and must accept interference from them. {{< link id="G1A06" >}}

On 30 meters, amateurs must protect the fixed services listed in the sharing rules—radio links between fixed locations. If you cause harmful interference to a primary user, you must correct it or stop transmitting, even if you were on the frequency first.

Accepting interference means that a secondary station *cannot demand protection from a primary service’s operation*. The 60-meter channels and continuous segment have secondary status too.

#### Situations Requiring Additional Precautions

Some situations call for extra steps to protect other stations. One involves **spread spectrum**, which deliberately spreads a signal over a wider bandwidth:

> **Key Information:** Specific steps to avoid harmful interference are required when operating within one mile of an FCC monitoring station, on a band where the amateur service is secondary, or with spread spectrum emissions. {{< link id="G1E04" >}}

Near an FCC monitoring station, even a signal that meets other rules may interfere with its work. The FCC may restrict your operation to protect that station. When you use spread spectrum, you must protect signals that use other allowed modulation types and accept interference from them. The next section covers spread spectrum's power limit.

The precautions you need depend on the situation. Lower power, a different frequency, or a change to your antenna setup may help, but you must still follow the rules.

#### Leaving Room for Propagation Beacons

Recognizing an established use before you transmit can help you avoid interference. A network of propagation beacons uses these frequencies:

> **Key Information:** Normally avoid transmitting on 14.100, 18.110, 21.150, 24.930, and 28.200 MHz because a system of propagation beacons operates there. {{< link id="G1E10" >}}

The beacons take turns transmitting their call signs on a repeating schedule. Listening to a beacon from a known location helps you assess that radio path. A gap in the sequence is not necessarily an unused frequency; a beacon may be transmitting that you cannot hear.

Give the beacon frequency and its signal bandwidth room rather than checking only whether your dial displays one of those exact numbers.

#### Investigating an Interference Report

An interference report is a reason to investigate, not proof that either station is at fault. Work together to trace the problem using [Chapter 7]({{% pageref "chpt7" %}})'s measurement and RF-interference checks.

Amateurs also help each other follow the rules through an organized monitoring program:

> **Key Information:**
> - The Volunteer Monitor Program consists of amateur volunteers formally enlisted to monitor the airwaves for rules violations. {{< link id="G2D01" >}}
> - An objective of the Volunteer Monitor Program is to encourage amateur operators to self-regulate and comply with the rules. {{< link id="G2D02" >}}

Volunteer Monitors have a different role from Volunteer Examiners, who give license exams. Monitoring and reporting do not give a volunteer the FCC’s enforcement authority.

#### Locating a Signal Without Assuming Its Cause

Suppose a continuous carrier is keeping a repeater transmitting. Using a directional antenna to find the repeater’s output signal leads you toward the repeater, not necessarily toward the station causing the problem. To investigate the original signal, *listen on the repeater’s input*:

> **Key Information:** Volunteer Monitors can help localize that station by comparing beam headings on the repeater input from their home locations with those of other Volunteer Monitors. {{< link id="G2D03" >}}

Each heading gives a direction from one receiving location. Plotting several directions helps narrow the search to the area where they meet, though reflections and measurement errors can make the location uncertain. Even finding the source doesn't prove deliberate interference; a stuck transmitter may be the cause. Record your observations and follow the reporting process rather than confronting someone.

#### When a Specific Rule Does Not Settle the Question

If Part 97 doesn't cover a situation, it still requires good engineering and good amateur practice:

> **Key Information:** The FCC determines what constitutes good engineering and good amateur practice in matters not specifically covered by Part 97. {{< link id="G1B11" >}}

Established operating methods and technical guidance help you make a sound choice, but a popular custom cannot override a rule. Think about how your choice affects other stations. Check the rules that apply, and ask for guidance if they aren't clear.

Beacons, code practice, and automatically controlled digital stations have specific permissions rather than one general exemption from the rules.

<!-- Editorial sources, checked 2026-09-26: 47 CFR 97.101, 97.13(b), 97.303, 97.307, and 97.311; ARRL Volunteer Monitor Program; NCDXF/IARU International Beacon Project; current questions G2D01–G2D03. -->
