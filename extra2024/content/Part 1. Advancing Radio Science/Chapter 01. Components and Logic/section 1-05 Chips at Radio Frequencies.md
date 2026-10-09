---
chapter: "1"
section: "1.5"
questions: ["E6A01", "E6E01", "E6E03", "E6E04", "E6E06", "E6E07", "E6E08", "E6E02", "E6E11", "E6E12", "E6E09", "E6E10"]
status: generated1
draft: true
---

### Section 1.5: Chips at Radio Frequencies

The stray inductance and capacitance that troubled our HF amplifier can also interfere with signals we want. At UHF and microwave frequencies, even the connections to a transistor can limit its performance. A useful amplifier needs both a fast enough device and a package that lets it work.

#### Getting the Leads Out of the Way

Long pins make a chip convenient to handle and plug into a socket. *A dual in-line package, or DIP, has two parallel rows of pins.* *In through-hole construction, those pins pass through holes in the circuit board for soldering.*

> **Key Information:** DIP is a through-hole package with two rows of connecting pins on opposite sides. {{< link id="E6E02" >}} {{< link id="E6E11" >}}

Those connections have an electrical cost. A signal takes time to travel along a lead. At higher frequencies, the same delay occupies more of a cycle, causing a greater *phase shift*. Lead inductance also grows more troublesome as frequency rises. A package that works well in a controller may be a poor home for a microwave amplifier, even if the device inside is fast enough.

> **Key Information:** Excessive lead length is why DIP through-hole integrated circuits are not typically used at UHF and higher frequencies. {{< link id="E6E12" >}}

Surface-mount components avoid those long pins by attaching directly to pads on the board. Short connections reduce both the component's parasitic effects and the distance a signal must travel between parts.

> **Key Information:**
> - Surface-mount packages have the least parasitic effects among the package types listed for frequencies above HF. {{< link id="E6E09" >}}
> - At RF, surface-mount technology offers smaller circuit area, shorter board traces, and less parasitic inductance and capacitance than through-hole construction. {{< link id="E6E10" >}}

A smaller package saves space while helping the physical circuit behave like the circuit the designer intended.

#### Materials That Respond Quickly

Short connections cannot make up for a device that responds too slowly. If a silicon device has too little gain or too much loss at the intended frequency, another semiconductor material may suit the job better.

Gallium arsenide, abbreviated GaAs, offers higher *electron mobility*: electrons move more readily through it under an electric field. That higher mobility can support faster devices.

> **Key Information:** Gallium arsenide is used in microwave circuits; its higher electron mobility makes it useful at UHF and higher frequencies. {{< link id="E6A01" >}} {{< link id="E6E01" >}}

An MMIC (monolithic microwave integrated circuit) keeps connections shorter still by forming RF elements together on one semiconductor chip, rather than assembling separate chips or components into a module.

> **Key Information:** Of the materials listed in the exam question—silicon, silicon nitride, silicon dioxide, and gallium nitride—gallium nitride supports the highest operating frequency when used in MMICs. {{< link id="E6E03" >}}

Gallium nitride, or GaN, is also useful for RF power devices. Material choice is only one part of the design, so use the specific component's rated frequency range when choosing it. The comparison above does not mean that every GaN part works at a higher frequency than every device made from another semiconductor.

#### An Amplifier as a Building Block

Amplifying a weak RF signal also means keeping added noise low. The amplifier needs suitable input and output impedances to connect to the surrounding circuit. A common MMIC amplifier combines these features, with much of the transistor biasing and impedance matching already designed into the chip. You can choose a useful *gain block* without designing an amplifier one transistor at a time.

Along with gain, we need to consider *noise figure*: how much the device degrades signal-to-noise ratio. Lower is better. A suitable module can amplify a weak signal while adding relatively little noise. We will examine that specification in Chapter 5.

> **Key Information:**
> - The most common MMIC input and output impedance is 50 ohms. {{< link id="E6E04" >}}
> - Popular MMIC characteristics include controlled gain, low noise figure, and constant input and output impedance over the specified frequency range. {{< link id="E6E06" >}}

The external connections still need care. To carry RF into and out of the module with a controlled impedance, the circuit board can use *microstrip*: a conducting trace over a ground plane, with insulating board material between them. Trace width, spacing to the plane, and board material help set its impedance.

> **Key Information:** Microstrip is often used for connections to MMICs. {{< link id="E6E07" >}}

The amplifier also needs DC power. *Some common MMIC gain blocks share their output lead between RF output and DC supply current.* *Yes, power goes in through the lead where the signal comes out.* The external circuit must keep RF out of the supply and DC out of the load.

A resistor sets the bias current. An RF choke passes DC to the amplifier while presenting high impedance to RF, limiting signal loss into the supply branch. A coupling capacitor carries the output signal onward while blocking DC from the load.

![A simplified MMIC circuit has RF input at the left and a shared output and bias node at the right. A DC supply reaches that node through a resistor and RF choke. RF leaves the node through a coupling capacitor. The choke impedes RF from entering the supply branch, while the capacitor blocks DC from reaching the RF load. The MMIC also has a ground connection.](../../../images/s1-5-mmic-bias.svg)
{.img-centered .img-xlarge caption="One lead, two paths: DC arrives through the choke; RF leaves through the coupling capacitor. Simplified bias arrangement."}

> **Key Information:** Power is supplied to the common MMIC type in the exam through a resistor and/or RF choke connected to the amplifier output lead. {{< link id="E6E08" >}}

This is a common circuit, not a universal pinout: other MMICs have separate supply pins. The next chapter will put numbers to the frequency-dependent behavior that lets inductors and capacitors direct RF and DC along different paths.
