---
chapter: "1"
section: "1.2"
questions: ["E6A07", "E6A06", "E6A08", "E6A05", "E6A09", "E6A10", "E6A11", "E6A12"]
status: generated1
draft: true
---

### Section 1.2: Transistors

Whether a transistor's control signal is a current or a voltage depends on its type. In a bipolar junction transistor (BJT), a small base current controls a larger current between collector and emitter. In a field-effect transistor (FET), the gate voltage controls current through a channel between source and drain. Both use the same doped semiconductor as a diode, and much of their behavior follows from the junctions the previous section described.

#### Current Control in a BJT

A BJT's base and emitter meet at a PN junction, and base current flows only when that junction is forward biased. In an NPN transistor, the base is the P-type layer, so forward bias means making the base positive relative to the emitter. As in a silicon diode, current rises sharply once the voltage nears the forward threshold.

That base current controls a much larger collector current. The transistor's current gain, called **beta** and written $\beta$, measures that control. The higher the beta, the less base current the driving stage must supply for a given change in collector current.

For example, if a 0.1 mA change in base current produces a 10 mA collector-current change, divide 10 by 0.1 to find the current gain: $\beta=100$. The extra output energy comes from the collector supply.

> **Key Information:**
> - A silicon NPN transistor biased on has a base-to-emitter voltage of approximately 0.6 to 0.7 volts. {{< link id="E6A07" >}}
> - The beta of a BJT is the change in collector current with respect to the change in base current. {{< link id="E6A06" >}}

#### Gain at Higher Frequencies

That gain doesn't hold at every frequency. At high enough frequencies, current gain falls because the device cannot move and store charge instantly.

A **cutoff frequency** marks where gain has fallen by a set amount, and which gain you measure depends on which terminal the input and output share. With the input at the base and the output at the collector, the two share the emitter, so beta is the common-emitter gain. Alpha compares collector current with emitter current. The base is then the shared, or grounded, terminal, so alpha is the grounded-base, or common-base, current gain. Because emitter current is collector current plus base current, alpha is slightly below 1. Beta has a cutoff frequency of its own, measured on common-emitter gain.

> **Key Information:** The alpha cutoff frequency is the frequency at which the grounded-base current gain of a bipolar junction transistor has decreased to 0.7 of the gain obtainable at 1 kHz. {{< link id="E6A08" >}}

#### Controlling the Channel

When base current would load the driving stage too heavily, an FET offers another approach. Its gate draws almost no steady current.

A junction FET, or JFET, controls the channel through a reverse-biased junction, which passes only a tiny leakage current. A MOSFET uses a gate insulated from the channel by a very thin layer; its name expands to metal-oxide-semiconductor FET.

> **Key Information:** The DC input impedance at an FET gate is higher than that of a bipolar transistor. {{< link id="E6A05" >}}

That holds for DC. A changing signal still draws current to charge and discharge the gate's capacitance.

Before biasing an FET, you need to know whether its channel conducts with no gate voltage. Some FETs come with the channel already in place. Gate bias can deplete that channel of carriers and reduce its current, which gives this type its name.

> **Key Information:** A depletion-mode FET is an FET that exhibits a current flow between source and drain when no gate voltage is applied. {{< link id="E6A09" >}}

An enhancement-mode FET works the other way: its channel needs suitable gate bias to conduct strongly.

#### Recognizing the Symbols

An FET symbol shows how its gate is built. A gap between the gate line and the channel indicates an insulated gate; a gate line that touches the channel marks a JFET. Two separately labeled gates identify a dual-gate device, which accepts two control signals on the same channel. The arrow shows the channel type. As in a diode symbol, it points from P toward N: into an N-channel device, out of a P-channel one.

![Official Figure E6-1 shows six FET symbols, with D marking the drain, S the source, and G the gate. Symbols 1 and 6 have a gate line connected directly to the channel. In 1 the gate arrow points outward, identifying a P-channel JFET; in 6 it points inward, identifying an N-channel JFET. Symbols 2 and 3 have one gate separated from the channel by a gap, indicating insulation. Their channel arrows point inward and outward, respectively. Symbols 4 and 5 have two insulated gates, G1 and G2. Symbol 4 has an inward arrow and is the N-channel dual-gate MOSFET; 5 has an outward arrow and is P-channel.](../../../hugo/static/figures/E6-1.svg)
{.img-centered .img-xlarge .img-bw caption="Figure E6-1: Gate arrangement and arrow direction identify the FET."}

In symbol 1, the gate touches the channel and the arrow points out. Symbol 4 has two insulated gates and an arrow pointing in.

> **Key Information:**
> - Symbol 4 in Figure E6-1 is an N-channel dual-gate MOSFET. {{< link id="E6A10" >}}
> - Symbol 1 in Figure E6-1 is a P-channel junction FET. {{< link id="E6A11" >}}

#### Protecting the Gate

The thin insulation that gives a MOSFET its high input impedance is also easy to damage. Excessive voltage can puncture it. Because the gate's capacitance is small, even a little static charge can raise its voltage that far despite carrying little energy.

The Zener diode can help here. Its breakdown voltage sits above the normal gate voltage but below the level that would harm the insulation, so it doesn't conduct during normal operation. If static pushes the gate voltage higher, the Zener conducts and limits the voltage before the insulation breaks down.

> **Key Information:** Zener diodes connected between a MOSFET gate and its source or drain protect the gate from static damage. {{< link id="E6A12" >}}

Static precautions are still worth taking when you handle MOSFETs.
