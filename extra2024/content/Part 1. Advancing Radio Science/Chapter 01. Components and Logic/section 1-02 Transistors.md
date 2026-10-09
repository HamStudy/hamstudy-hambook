---
chapter: "1"
section: "1.2"
questions: ["E6A06", "E6A07", "E6A08", "E6A05", "E6A09", "E6A10", "E6A11", "E6A12"]
status: generated1
draft: true
---

### Section 1.2: Transistors

A transistor may have plenty of gain at audio frequencies yet too little at the RF frequency you need. Its input can also demand more current than the preceding stage can supply. Gain, bias, and input loading help us choose a device that fits the job.

#### Current Control in a BJT

For a bipolar junction transistor (BJT), the driving stage must supply enough base current to control the required collector current. *Beta, written $\beta$, expresses the change in collector current relative to the change in base current.*

For example, if a 0.1 mA change in base current produces a 10 mA collector-current change, divide 10 by 0.1 to find the current gain: $\beta=100$. The extra output energy comes from the collector supply; beta tells us how effectively the base-current change controls it.

To establish that current, we use the junction behavior from the previous section. In a silicon NPN transistor, the base-emitter junction must be forward biased, with the base positive relative to the emitter.

> **Key Information:**
> - The beta of a BJT is the change in collector current with respect to the change in base current. {{< link id="E6A06" >}}
> - A silicon NPN transistor biased on has a base-to-emitter voltage of approximately 0.6 to 0.7 volts. {{< link id="E6A07" >}}

A transistor must also keep up with the signal. At sufficiently high frequencies, current gain falls because the device cannot move and store charge instantly. A gain measurement at a low frequency therefore doesn't tell us how well the transistor will amplify RF.

Different amplifier arrangements use different terminals as the common connection for input and output. Beta is the common-emitter current gain. *Alpha is the grounded-base, or common-base, current gain.* Its *cutoff frequency* marks a specified drop from the low-frequency gain.

> **Key Information:** The alpha cutoff frequency is the frequency at which grounded-base current gain falls to 0.7 of its value at 1 kHz. {{< link id="E6A08" >}}

If grounded-base gain is 0.98 at 1 kHz, it falls to about $0.7\times0.98=0.686$ at the alpha cutoff frequency. The 0.7 is a *fraction of the earlier gain*, not a gain that every transistor must have. Keep alpha tied to grounded-base gain when comparing the names in the question.

#### Controlling the Channel

When base current would load the preceding stage too heavily, a FET offers another approach. Its gate voltage controls the source-to-drain channel while drawing very little steady input current.

A junction FET, or JFET, uses a reverse-biased junction for this control. A MOSFET uses a gate insulated from the channel by a very thin layer; its name expands to metal-oxide-semiconductor FET. Both have high *DC input impedance*, reducing the current demanded from the driving stage.

> **Key Information:** The DC input impedance at an FET gate is higher than that of a bipolar transistor. {{< link id="E6A05" >}}

A changing signal still has to charge and discharge the gate's capacitance, though. High DC input impedance does not mean the gate places no demand on an RF driver.

When setting up the bias, we also need to know whether the channel conducts before we apply a gate-to-source voltage. *A depletion-mode FET already has a conducting channel at zero gate-to-source voltage.* Gate bias can deplete that channel of carriers and reduce its current. In contrast, an enhancement-mode FET needs suitable gate bias to establish strong conduction.

> **Key Information:** A depletion-mode FET conducts between source and drain when no gate voltage is applied, provided a drain-to-source voltage is present. {{< link id="E6A09" >}}

A drain-to-source voltage must still drive that current. “No gate voltage” does not mean “no power supply.”

#### Recognizing the Symbols

A schematic shows which gate arrangement a circuit uses. A gap between the gate line and channel indicates an insulated gate. Two separately labeled gate connections identify a dual-gate device. Those gates control the same source-to-drain channel, allowing the transistor to accept two separate control signals.

![Official Figure E6-1 shows six FET symbols. Symbol 1 is a P-channel junction FET, with a gate arrow pointing outward from the channel. Symbols 4 and 5 both have two insulated gate terminals labeled G1 and G2, a drain D, and a source S. Symbol 4 has an arrow pointing toward the channel, identifying an N-channel dual-gate MOSFET; symbol 5 has an arrow pointing away, identifying a P-channel device.](../../../hugo/static/figures/E6-1.svg)
{.img-centered .img-xlarge .img-bw caption="Figure E6-1: Gate arrangement and arrow direction identify the FET."}

> **Key Information:**
> - Symbol 4 in Figure E6-1 is an N-channel dual-gate MOSFET. {{< link id="E6A10" >}}
> - Symbol 1 in Figure E6-1 is a P-channel junction FET. {{< link id="E6A11" >}}

*In symbol 1, the gate arrow points outward from the channel, identifying a P-channel JFET.* *Symbols 4 and 5 each have two insulated gates, G1 and G2.* Their arrows distinguish the channel types: *symbol 4 points toward the channel for N-channel; symbol 5 points away for P-channel.*

#### Protecting the Gate

The thin insulation that gives a MOSFET its high input impedance also needs protection. Excessive voltage can puncture it. Even a small static charge may reach a damaging voltage despite carrying little energy.

The Zener diode from the previous section can help here. *It limits the voltage before the gate insulation breaks down*, acting as a voltage clamp.

> **Key Information:** Zener diodes connected between a MOSFET gate and its source or drain protect the gate from static damage. {{< link id="E6A12" >}}

This protection does not make every static discharge harmless, and it does not replace the transistor's normal bias circuit.
