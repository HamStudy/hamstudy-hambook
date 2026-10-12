---
chapter: "10"
section: "10.6"
questions: ["E2D04", "E2D07", "E2D08", "E2D11", "E2D10", "E2C04", "E2C09", "E8C14", "E8C15"]
status: "generated1"
draft: true
---

### Section 10.6: APRS and Mesh Networks

A balloon's position report may need a relay before your station can hear it. A mesh-network message may likewise need to cross several radio links. Both systems extend reach, but in different ways. The **Automatic Packet Reporting System (APRS)** limits repeats through each packet's path, while a mesh finds its neighboring nodes and chooses routes between them.

#### Follow an APRS Report

A high-altitude balloon carrying a small transmitter sends its changing position on its own schedule, without waiting for anyone to ask. Receiving stations plot each report on a map as it arrives.

> **Key Information:** APRS is used for real-time tracking of balloons carrying amateur radio transmitters. {{< link id="E2D04" >}}

APRS doesn't need a radio protocol of its own. It borrows the standard amateur packet-radio protocol for framing and addresses, and defines only the information carried, such as the position. An ordinary packet connection sets up a session and numbers each frame so the receiver can acknowledge it. A beacon can't do that with every listener in range, so APRS uses the kind of frame that needs no connection or numbering.

To reach farther, a packet needs a relay. A digipeater, or digital repeater, receives a packet and retransmits it according to the packet's path and its own configuration. One possible route runs from the balloon to digipeater A, then to digipeater B, then to the receiving station. Each step is a separate radio transmission. A receiver might hear the original report, a repeated copy, or both. An internet gateway may also forward received reports for wider viewing.

> **Key Information:**
> - APRS uses the AX.25 digital protocol. {{< link id="E2D07" >}}
> - APRS beacon data uses an Unnumbered Information, or UI, packet frame. {{< link id="E2D08" >}}
> - APRS stations relay data through packet digipeaters. {{< link id="E2D11" >}}

#### Count the Remaining Hops

Repeating every packet indefinitely would fill the channel with old reports. A WIDEn-N path limits the number of relays: the first number records the requested hop allowance, and the number after the hyphen counts the hops remaining. Each digipeater configured to answer WIDE paths lowers the remaining count when it retransmits the packet.

The count begins as WIDE3-3, becomes WIDE3-2 after one hop, and becomes WIDE3-1 after two. One more relay uses the last hop.

> **Key Information:** WIDE3-1 means that three digipeater hops were requested and one remains. {{< link id="E2D10" >}}

Three hops isn't a good default, though. Extra repeats occupy shared airtime, so use the path recommended for the local network and your purpose.

#### Let Nodes Find Their Neighbors

A mesh link carries data at network speeds, so it needs a channel several megahertz wide, wider than any whole HF band. Meshes use UHF and microwave bands instead, most often 13 centimeters (2.4 GHz) and 5 centimeters (5.8 GHz). Home Wi-Fi uses those bands too, so a mesh node can start from the same kind of hardware.

> **Key Information:**
> - Amateur mesh networks can use frequencies shared with various unlicensed wireless data services. {{< link id="E2C04" >}}
> - A wireless router running custom firmware is commonly used to implement an amateur mesh network. {{< link id="E2C09" >}}

AREDN (Amateur Radio Emergency Data Network) is one widely used mesh firmware. Its documentation lists only two 13-centimeter channels, both just below the Wi-Fi channels, that amateurs don't share with Wi-Fi users. Owning a router doesn't make every frequency it can tune legal to use. Pick a channel that the amateur band, the firmware, and the local network plan all support.

Over those links, a mesh carries ordinary traffic, such as web pages, video, and voice calls, between devices addressed as they would be on a home network. Each node announces itself, and neighbors that hear it record the link and its quality. The routing system combines those links into paths. Data might go from node A through node B to node C when A can't reach C directly, and if a better path appears, the network can switch to it.

> **Key Information:**
> - Mesh-network nodes have Internet Protocol, or IP, addresses. {{< link id="E8C14" >}}
> - Individual nodes form a mesh using discovery and link-establishment protocols. {{< link id="E8C15" >}}

“Internet Protocol” names the networking system; the mesh need not connect to the public internet. A link from a field station to a nearby camera can stay entirely within the radio network.

Neither APRS nor a mesh changes the amateur rules for the messages it carries. Chapter 11 applies those rules to automated forwarding, business traffic, and encryption.
