---
chapter: "1"
section: "1.2"
questions: ["E6A06", "E6A07", "E6A08", "E6A05", "E6A09", "E6A10", "E6A11", "E6A12"]
status: generated1
draft: true
---

### Section 1.2: Transistors

A transistor lets a small input control a larger current supplied by the power source. It can preserve a continuously changing signal as an amplifier or move between states as a switch. The way we drive the input depends on which kind of transistor we use.

#### Current Control in a BJT

A *bipolar junction transistor*, or BJT, has an emitter, base, and collector. In normal amplifier operation, a relatively small change in base current controls a larger change in collector current. For an NPN silicon transistor, the base-emitter junction must be forward biased, with the base positive relative to the emitter.

> **Key Information:**
> - The beta of a BJT is the change in collector current with respect to the change in base current. {{< link id="E6A06" >}}
> - A silicon NPN transistor biased on has a base-to-emitter voltage of approximately 0.6 to 0.7 volts. {{< link id="E6A07" >}}

For example, if a 0.1 mA change in base current produces a 10 mA collector-current change, divide 10 by 0.1 to find the current gain: $\beta=100$. Here $\beta$ is beta, and mA means milliamperes, or thousandths of an ampere. The extra output energy comes from the collector supply. Disconnect that supply and the small input cannot deliver the same amplified output. The transistor is controlling power, not manufacturing it.

Frequency counts complete cycles per second: one hertz (Hz) is one cycle per second, and 1 kHz is 1000 Hz. Current gain decreases at sufficiently high frequencies because the device cannot move and store charge instantly. Different gain definitions use different reference terminals. *Alpha* is the grounded-base, or common-base, current gain; it differs from beta, the common-emitter current gain.

> **Key Information:** The alpha cutoff frequency is the frequency at which grounded-base current gain falls to 0.7 of its value at 1 kHz. {{< link id="E6A08" >}}

For example, a grounded-base gain of 0.98 at 1 kHz would fall to about $0.7\times0.98=0.686$ at its alpha cutoff frequency. The 0.7 is a *fraction of the earlier gain*, not a gain that every transistor must have. Keep alpha tied to grounded-base gain when comparing the names in the question.

#### Controlling the Channel

A *field-effect transistor*, or FET, has source, drain, and gate terminals. Gate voltage controls the conductivity of a channel between source and drain. A junction FET, or JFET, uses a reverse-biased junction for this control. A MOSFET uses a gate insulated from the channel by a very thin layer; the name expands to metal-oxide-semiconductor FET.

Input impedance describes the opposition to current at the input. A high DC input impedance means little steady current is needed for a given applied voltage.

> **Key Information:** The DC input impedance at an FET gate is higher than that of a bipolar transistor. {{< link id="E6A05" >}}

Changing gate voltage still requires charging and discharging capacitance. High DC input impedance therefore does not mean the gate has no effect on an RF driver.

*A depletion-mode FET already has a conducting channel when gate-to-source voltage is zero.* Gate bias can deplete the channel of carriers and reduce its current. In contrast, an enhancement-mode FET needs suitable gate bias to establish strong conduction.

> **Key Information:** A depletion-mode FET conducts between source and drain when no gate voltage is applied, provided a drain-to-source voltage is present. {{< link id="E6A09" >}}

*Set the gate to the source's voltage and a depletion-mode channel is already available to carry current.* There still has to be a drain-to-source voltage to make that current flow. “No gate voltage” is not the same thing as “no power supply.”

#### Recognizing the Symbols

The channel and gate arrangement on a schematic reveal the device type. A gap between the gate line and channel indicates an insulated gate. Two separately labeled gate connections identify a dual-gate device.

![Official Figure E6-1 shows six FET symbols. Symbol 1 is a P-channel junction FET, with a gate arrow pointing outward from the channel. Symbols 4 and 5 both have two insulated gate terminals labeled G1 and G2, a drain D, and a source S. Symbol 4 has an arrow pointing toward the channel, identifying an N-channel dual-gate MOSFET; symbol 5 has an arrow pointing away, identifying a P-channel device.](../../../hugo/static/figures/E6-1.svg)
{.img-centered .img-xlarge .img-bw caption="Figure E6-1: Gate arrangement and arrow direction identify the FET."}

> **Key Information:**
> - Symbol 4 in Figure E6-1 is an N-channel dual-gate MOSFET. {{< link id="E6A10" >}}
> - Symbol 1 in Figure E6-1 is a P-channel junction FET. {{< link id="E6A11" >}}

*To recognize symbol 1, follow the gate arrow: it points outward from the channel, marking this as a P-channel JFET.* *Both symbols 4 and 5 have two separate insulated gates, G1 and G2.* The arrow distinguishes their channel types: *in symbol 4 it points toward the channel, identifying N-channel; in symbol 5 it points away, identifying P-channel.* The two gates control the same source-to-drain channel, so the device can accept two separate control signals.

The MOSFET's insulating layer gives it high input impedance, but excessive voltage can puncture that thin layer. A small static charge may have little energy yet reach a damaging voltage. *Zener protection limits that voltage before the insulation breaks down.*

> **Key Information:** Zener diodes connected between a MOSFET gate and its source or drain protect the gate from static damage. {{< link id="E6A12" >}}

The protection is a voltage clamp. It does not make every possible static discharge harmless, and it does not replace the device's normal bias circuit.
