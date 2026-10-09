---
chapter: "10"
section: "10.6"
questions: ["E2D04", "E2D07", "E2D08", "E2D11", "E2D10", "E2C04", "E2C09", "E8C14", "E8C15"]
status: "generated1"
draft: true
---

### Section 10.6: APRS and Mesh Networks

A balloon's position report may need a relay before your station can hear it. A mesh-network message may likewise need to cross several radio links. Both extend reach, but APRS controls repetition through a packet's path while a mesh discovers neighboring nodes and selects routes between them.

#### Follow an APRS Report

*APRS position reports let receiving stations track a balloon carrying an amateur transmitter in real time.* The balloon can send its changing position without waiting for a request from each station following the track. Position, weather, and short messages share the APRS reporting system.

> **Key Information:** APRS is used for real-time tracking of balloons carrying amateur radio transmitters. {{< link id="E2D04" >}}

To broadcast a report to any suitable receiver within range, *APRS uses an AX.25 Unnumbered Information (UI) frame*. AX.25 supplies framing and addresses; APRS defines the information carried, such as the position. *UI frames require neither a connected exchange nor a numbered sequence of data frames*, so the beacon need not establish a session with each listener.

> **Key Information:**
> - APRS uses the AX.25 digital protocol. {{< link id="E2D07" >}}
> - APRS beacon data uses an Unnumbered Information, or UI, packet frame. {{< link id="E2D08" >}}
> - APRS stations relay data through packet digipeaters. {{< link id="E2D11" >}}

*A digipeater receives a packet and retransmits it according to the packet path and its own configuration.* One possible route is:

**Balloon → digipeater A → digipeater B → receiving station**

The arrows are separate radio transmissions. A receiver might hear the original report, a repeated copy, or both. An internet gateway may also forward received reports for wider viewing, but *the RF relay is the digipeater's job.*

#### Count the Remaining Hops

Repeating every packet indefinitely would fill the channel with old reports. A WIDEn-N path limits the number of relays: *the first number records the requested hop allowance, and the number after the hyphen counts the hops remaining*. Each eligible digipeater reduces that remaining count when it retransmits the packet.

> **Key Information:** WIDE3-1 means that three digipeater hops were requested and one remains. {{< link id="E2D10" >}}

The count begins as WIDE3-3, becomes WIDE3-2 after one hop, and becomes WIDE3-1 after two. *One further eligible relay uses the remaining hop.* *The 3 keeps the original request; the 1 says what is left.* This explains the notation; it is not a recommendation to request three hops everywhere. Extra repeats occupy shared airtime, so use the path recommended for the local network and your purpose.

#### Let Nodes Find Their Neighbors

A mesh must deliver data to a destination through whichever neighboring radio links are usable. *A wireless router running custom firmware commonly provides the node*: the modified device software supports the amateur network's links and routing. *Some usable frequencies are shared with unlicensed wireless data services*.

> **Key Information:**
> - Amateur mesh networks can use frequencies shared with various unlicensed wireless data services. {{< link id="E2C04" >}}
> - A wireless router running custom firmware is commonly used to implement an amateur mesh network. {{< link id="E2C09" >}}

The amateur allocation, device, firmware, and local network plan must all support the chosen channel. A familiar-looking wireless router does not grant permission to use every frequency it can generate.

To route toward a particular destination, *nodes use Internet Protocol (IP) addresses*. *Discovery and link-establishment protocols identify neighboring nodes and form usable connections*, which the routing system can combine into a path.

> **Key Information:**
> - Mesh-network nodes have Internet Protocol, or IP, addresses. {{< link id="E8C14" >}}
> - Individual nodes form a mesh using discovery and link-establishment protocols. {{< link id="E8C15" >}}

For example, a computer's data might follow **node A → node B → node C** when A cannot reach C directly. If another usable path appears, the routing system can select it. “Internet Protocol” names the networking system; it does not mean that the mesh must connect to the public internet. A link from a field station to a nearby camera can stay entirely within the radio network.

APRS digipeater paths and IP mesh routes solve different relay problems. Neither changes the amateur rules for the message carried. Chapter 11 applies those rules to automated forwarding, business traffic, and encryption.
