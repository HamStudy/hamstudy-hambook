---
chapter: "8"
section: "8.7"
questions: [ "T1E11", "T1E03", "T1E07", "T1E04", "T1E01", "T1F01", "T1E06", "T1F10", "T1E05", "T1E10", "T1E09", "T1E08", "T1D07" ]
---

### Section 8.7: Control Operator and Control Types

Let’s take a closer look at control operators and control types—it’s all about who’s responsible for what goes out over the airwaves!  

#### Control Operator

Every amateur station has two key roles: the **station licensee** and the **control operator**. The station licensee is the person who holds the license for that station—usually the owner or the person otherwise responsible for it. The control operator is the amateur operator designated by the licensee to be responsible for the transmissions from that station. These can be the same person, or different people, but any time a station is transmitting both roles exist.

The privileges you can use are determined by the license class of the control operator, not the station's capabilities. Unless documentation specifies otherwise, the FCC assumes the station licensee is the control operator. Even in the case of automatic control such as a repeater where no control operator is present, there must still be a control operator designated (usually the repeater owner or trustee).

> **Key Information:** 
> - A control operator is an amateur operator designated by the licensee of a station to be responsible for transmissions and FCC rules compliance at that station. {{< link id="T1E11" >}}
> - The station control operator must be designated by the station licensee. {{< link id="T1E03" >}}
> - When the control operator is not the station licensee, both the control operator and the station licensee are responsible for the proper operation of the station. {{< link id="T1E07" >}}
> - The class of operator license held by the control operator determines the transmitting frequency privileges of an amateur station. {{< link id="T1E04" >}}
> - An amateur station may never transmit without a control operator. {{< link id="T1E01" >}}
> - The station and its records must be available for FCC inspection at any time upon request by an FCC representative. {{< link id="T1F01" >}}
> - A Technician class licensee may never be the control operator of a station operating in an Amateur Extra Class band segment. {{< link id="T1E06" >}}
> - The control operator of the originating station is accountable if a repeater inadvertently retransmits communications that violate the FCC rules. {{< link id="T1F10" >}}

#### Types of Control

There are three types of control in amateur radio:

##### 1. Local Control

Local control is the most common type—you're physically at the station operating the radio.

> **Key Information:** The control point of an amateur station is the location at which the control operator function is performed. {{< link id="T1E05" >}}

##### 2. Remote Control

With remote control, you operate the station from a different location using internet or dedicated control links.

> **Key Information:** 
> - Operating the station over the internet is an example of remote control as defined in Part 97. {{< link id="T1E10" >}}
> - Any amateur station may be remotely controlled. {{< link id="T1E09" >}}

The control operator must still be at the control point (even if that control point is remote from the station), and a control operator is required at all times.

##### 3. Automatic Control

With automatic control, the station operates without a control operator physically present—though one must still be designated.

> **Key Information:** Repeater operation is an example of automatic control. {{< link id="T1E08" >}}

Automatic control is limited to specific operations like repeaters, beacons, and space stations.

#### Automatic Retransmission

Some types of amateur stations are permitted to automatically retransmit signals from other stations—specifically repeater, auxiliary, and space stations. This is a key aspect of automatic control that has specific rules.

**Repeater Stations** receive signals on one frequency and simultaneously retransmit them on another, extending the range of communications.

**Auxiliary Stations** can automatically retransmit signals as part of a local network of amateur stations. Part 97 defines an Auxiliary station as:
> An amateur station, other than in a message forwarding system, that is transmitting communications point-to-point within a system of cooperating amateur stations.

> **Key Information:** An example of an auxiliary station is one sending one-way transmissions between a remote repeater receiver and the main repeater transmitter. {{< link id="T1D07" >}}

**Space Stations** (satellites and other space-based amateur radio stations) can automatically retransmit signals from Earth stations.

If you're operating someone else's station, remember: you can only operate within the limits of your own license class, even if the station is capable of more. And if a station operating under automatic control causes harmful interference, it must cease operation.
