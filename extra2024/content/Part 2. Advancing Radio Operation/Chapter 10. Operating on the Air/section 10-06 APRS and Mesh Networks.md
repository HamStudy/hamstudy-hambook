---
chapter: "10"
section: "10.6"
questions: ["E2D04", "E2D07", "E2D08", "E2D11", "E2D10", "E2C04", "E2C09", "E8C14", "E8C15"]
status: "generated1"
draft: true
---

### Section 10.6: APRS and Mesh Networks

A balloon report and a mesh-network message may both travel through other amateur stations. The relays work differently. *APRS sends compact reports in packets that digipeaters may repeat.* *A mesh network discovers links between addressed nodes and routes data through them.*

#### Follow an APRS Report

The Automatic Packet Reporting System, or APRS, carries information such as position, weather, and short messages. You do not have to ask a balloon where it is: *its transmitter can report its changing position so receiving stations can follow the track.*

> **Key Information:** APRS is used for real-time tracking of balloons carrying amateur radio transmitters. {{< link id="E2D04" >}}

A position beacon does not first establish a connected session with every listener. It puts the information in a packet that any suitable station within range can receive.

*AX.25 defines the packet's framing and address fields*; APRS defines how to interpret the information inside, such as a position report. *An Unnumbered Information (UI) frame carries that information without opening a connected exchange or numbering a sequence of data frames.*

> **Key Information:**
> - APRS uses the AX.25 digital protocol. {{< link id="E2D07" >}}
> - APRS beacon data uses an Unnumbered Information, or UI, packet frame. {{< link id="E2D08" >}}
> - APRS stations relay data through packet digipeaters. {{< link id="E2D11" >}}

*A digipeater receives a packet and retransmits it according to the packet path and its own configuration.* One possible route is:

**Balloon → digipeater A → digipeater B → receiving station**

The arrows are separate radio transmissions. A receiver might hear the original report, a repeated copy, or both. An internet gateway may also forward received reports for wider viewing, but *the RF relay is the digipeater's job.*

#### Count the Remaining Hops

*In a WIDEn-N path, the first number describes the requested hop allowance and the number after the hyphen counts the remaining hops.* A digipeater reduces the remaining count when it relays the packet.

> **Key Information:** WIDE3-1 means that three digipeater hops were requested and one remains. {{< link id="E2D10" >}}

The count begins as WIDE3-3, becomes WIDE3-2 after one hop, and becomes WIDE3-1 after two. *One further eligible relay uses the remaining hop.* *The 3 keeps the original request; the 1 says what is left.* This explains the notation; it is not a recommendation to request three hops everywhere. Extra repeats occupy shared airtime, so use the path recommended for the local network and your purpose.

#### Let Nodes Find Their Neighbors

A mesh node is a radio and network device that can communicate with neighboring nodes. Amateur mesh networks often adapt equipment developed for wireless data service. *Firmware* is the software that runs the device itself; custom firmware changes the router's capabilities for the intended network.

> **Key Information:**
> - Amateur mesh networks can use frequencies shared with various unlicensed wireless data services. {{< link id="E2C04" >}}
> - A wireless router running custom firmware is commonly used to implement an amateur mesh network. {{< link id="E2C09" >}}

The amateur allocation, device, firmware, and local network plan must all support the chosen channel. A familiar-looking wireless router does not grant permission to use every frequency it can generate.

Each node needs an address so data can be directed to it. *Discovery messages identify neighbors; link-establishment and routing procedures let the network use the available connections.*

> **Key Information:**
> - Mesh-network nodes have Internet Protocol, or IP, addresses. {{< link id="E8C14" >}}
> - Individual nodes form a mesh using discovery and link-establishment protocols. {{< link id="E8C15" >}}

For example, a computer's data might follow **node A → node B → node C** when A cannot reach C directly. If another usable path appears, the routing system can select it. “Internet Protocol” names the networking system; it does not mean that the mesh must connect to the public internet. A link from a field station to a nearby camera can stay entirely within the radio network.

APRS digipeater paths and IP mesh routes solve different relay problems. Neither changes the amateur rules for the message carried. Chapter 11 applies those rules to automated forwarding, business traffic, and encryption.
