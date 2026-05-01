---
chapter: "8"
section: "8.7"
questions: [ "T1E11", "T1E03", "T1E07", "T1E04", "T1E01", "T1E06", "T1F01", "T1E05", "T1E10", "T1E09", "T1E08", "T1D07", "T1F10" ]
---

### Section 8.7: Control Operator and Control Types

The control operator is the person responsible for what goes out over the airwaves. Every transmitting amateur station has one, and Part 97 has specific things to say about who that person is, what they're allowed to do, and where they have to be.

#### What is a Control Operator?

> **Key Information:**
> - A control operator is an amateur operator designated by the licensee of a station to be responsible for transmissions and FCC rules compliance at that station. {{< link id="T1E11" >}}
> - The station control operator must be designated by the station licensee. {{< link id="T1E03" >}}
> - When the control operator is not the station licensee, both the control operator and the station licensee are responsible for the proper operation of the station. {{< link id="T1E07" >}}

Every amateur station has two key roles: the **station licensee** and the **control operator**. The station licensee is the person who holds the license for that station — usually the owner. The control operator is the amateur designated by the licensee to be responsible for the actual transmissions. These can be the same person, or they can be different people, but both roles always exist while a station is on the air.

When they're different people — say, you let a licensed friend operate your station — both share responsibility. The control operator is responsible for what's transmitted while they're at the controls; the licensee is responsible for the station itself and for designating who gets to operate it.

#### Privileges and the Control Operator

> **Key Information:**
> - The transmitting frequency privileges of an amateur station are determined by the class of operator license held by the control operator. {{< link id="T1E04" >}}
> - An amateur station may never transmit without a control operator. {{< link id="T1E01" >}}

This is an important point: the privileges in use are tied to the *control operator*, not to the station's hardware or to who else happens to be in the room. A General class operator could be the control operator at a station owned by a Technician licensee, and the General's privileges apply. The reverse also works — a Technician acting as control operator at an Extra's station can only operate within Technician privileges.

A station can never transmit without a control operator, even when no one is physically present at the radio. For a remotely controlled station, the control operator is at the control point (more on this below). For an automatically controlled station — like a repeater — a licensed control operator must still be designated, even though they aren't actively monitoring every transmission.

> **Key Information:** Other than during an emergency, a Technician class licensee may never be the control operator of a station operating in an Amateur Extra class band segment. {{< link id="T1E06" >}}

A Technician can transmit on frequencies they're licensed for while a higher-class operator is the control operator (for example, at a club station during a contest), but a Technician is never the control operator on Extra-only segments. The operator class limit is hard.

#### The Control Point

> **Key Information:** The control point of an amateur station is the location at which the control operator function is performed. {{< link id="T1E05" >}}

The control point isn't where the antenna is, where the transmitter is, or where the licensee's mailing address is. It's where the control operator is sitting (or standing, or driving, or wherever they happen to be operating from). For most setups, the control point is the same place as the radio — but it doesn't have to be.

#### Types of Control

There are three types of control in amateur radio, distinguished by where the control operator is relative to the transmitter.

##### Local Control

Local control is the most common type — you're physically at the station, sitting at the radio, operating it directly. The control point and the station are in the same place.

##### Remote Control

> **Key Information:**
> - Operating the station over the internet is an example of remote control as defined in Part 97. {{< link id="T1E10" >}}
> - Any amateur station may be remotely controlled. {{< link id="T1E09" >}}

With remote control, the control operator manipulates the station's controls through some kind of link — most commonly the internet. The control operator must still be at the control point (which is now wherever they're remotely operating from), and a control operator is required at all times. There's no restriction on what kind of station can be remotely controlled — any station can.

##### Automatic Control

> **Key Information:** Repeater operation is an example of automatic control. {{< link id="T1E08" >}}

With automatic control, the station operates without a control operator physically present at the control point — though one must still be designated. Automatic control is limited to specific operations like repeaters, beacons, and space stations.

#### Automatic Retransmission

Some types of amateur stations are permitted to automatically retransmit signals from other stations — specifically repeater, auxiliary, and space stations. This is a key aspect of automatic control that has specific rules.

**Repeater stations** receive signals on one frequency and simultaneously retransmit them on another, extending the range of communications.

> **Key Information:** An example of an auxiliary station is one sending one-way transmissions between a remote repeater receiver and the main repeater transmitter. {{< link id="T1D07" >}}

**Auxiliary stations** can automatically retransmit signals as part of a local network of amateur stations. Part 97 defines an auxiliary station as:
> An amateur station, other than in a message forwarding system, that is transmitting communications point-to-point within a system of cooperating amateur stations.

**Space stations** (satellites and other space-based amateur radio stations) can automatically retransmit signals from Earth stations.

> **Key Information:** When a repeater inadvertently retransmits communications that violate FCC rules, the control operator of the originating station is accountable. {{< link id="T1F10" >}}

This makes practical sense — the repeater's control operator typically isn't monitoring every transmission, but the person who originated the bad transmission knew what they were saying. Note that if a repeater owner becomes aware that someone is regularly violating rules through their repeater and does nothing, the owner can also be held accountable.

A station operating under automatic control that causes harmful interference must cease operation.

#### Station Records and Inspection

> **Key Information:** The station and station records must be available for FCC inspection at any time upon request by an FCC representative. {{< link id="T1F01" >}}

As a federal licensee you're subject to FCC oversight. An FCC representative can request to inspect your station and records without prior written notice and without a warrant. In practice this rarely happens unless there's reason to suspect a violation, but the requirement is there. Keep your license documentation accessible.

---

That's the rules side of things. With the science from Part 1 and the operating practices, safety considerations, and regulations from Part 2, you've got a complete picture of what it takes to be a Technician class amateur radio operator.
