---
chapter: "1"
section: "1.5"
questions: ["E6A01", "E6E01", "E6E03", "E6E04", "E6E06", "E6E07", "E6E08", "E6E02", "E6E11", "E6E12", "E6E09", "E6E10"]
status: generated1
draft: true
---

### Section 1.5: Chips at Radio Frequencies

At microwave frequencies, a transistor's material and package are part of its performance. A fast internal device can lose much of its advantage if long leads add unwanted inductance and capacitance. RF integrated circuits address both the device and the connections around it.

#### Materials That Respond Quickly

*Electron mobility* describes how readily electrons move through a material under an electric field. Higher mobility can support faster devices. Gallium arsenide, abbreviated GaAs, is useful where silicon devices may have too little gain or too much loss for a particular design.

> **Key Information:** Gallium arsenide is used in microwave circuits; its higher electron mobility makes it useful at UHF and higher frequencies. {{< link id="E6A01" >}} {{< link id="E6E01" >}}

A *monolithic microwave integrated circuit*, or MMIC, forms RF circuit elements together on one semiconductor chip. “Monolithic” distinguishes that construction from a module assembled from several separate chips or components.

> **Key Information:** Of the materials listed in the exam question—silicon, silicon nitride, silicon dioxide, and gallium nitride—gallium nitride supports the highest operating frequency when used in MMICs. {{< link id="E6E03" >}}

Gallium nitride, or GaN, is also useful for RF power devices. Material choice is only one part of the design; a specific component's rated frequency range still governs its use. The comparison above is not a claim that every GaN part works at a higher frequency than every device made from another semiconductor.

#### An Amplifier as a Building Block

A common MMIC amplifier arrives with much of the transistor biasing and impedance matching already designed into the chip. You still need the right external connections, but you can choose a useful gain block without designing an amplifier one transistor at a time.

> **Key Information:**
> - The most common MMIC input and output impedance is 50 ohms. {{< link id="E6E04" >}}
> - Popular MMIC characteristics include controlled gain, low noise figure, and constant input and output impedance over the specified frequency range. {{< link id="E6E06" >}}

*Gain* is the output-to-input signal ratio. *Noise figure* describes how much a device degrades signal-to-noise ratio; lower is better. We will examine that specification in Chapter 5. Here, the useful point is that a suitable module can amplify a weak signal while adding relatively little noise.

The circuit board must carry RF into and out of the module with a controlled impedance. *Microstrip* is a conducting trace over a ground plane, with insulating board material between them. Trace width, spacing to the plane, and board material help set its impedance.

> **Key Information:** Microstrip is often used for connections to MMICs. {{< link id="E6E07" >}}

*Some common MMIC gain blocks share their output lead between RF output and DC supply current.* *Yes, power goes in through the lead where the signal comes out.* A resistor sets the bias current; an RF choke passes DC while presenting high impedance to RF. A coupling capacitor carries the output signal onward while blocking DC from the load.

![A simplified MMIC circuit has RF input at the left and a shared output and bias node at the right. A DC supply reaches that node through a resistor and RF choke. RF leaves the node through a coupling capacitor. The choke impedes RF from entering the supply branch, while the capacitor blocks DC from reaching the RF load. The MMIC also has a ground connection.](../../../images/s1-5-mmic-bias.svg)
{.img-centered .img-xlarge caption="One lead, two paths: DC arrives through the choke; RF leaves through the coupling capacitor. Simplified bias arrangement."}

> **Key Information:** Power is supplied to the common MMIC type in the exam through a resistor and/or RF choke connected to the amplifier output lead. {{< link id="E6E08" >}}

The next chapter will put numbers to this frequency-dependent behavior of inductors and capacitors. This is a common circuit, not a universal pinout: other MMICs have separate supply pins.

#### Getting the Leads Out of the Way

*A dual in-line package, or DIP, has two parallel rows of pins.* *In through-hole construction, those pins pass through holes in the circuit board for soldering.*

> **Key Information:** DIP is a through-hole package with two rows of connecting pins on opposite sides. {{< link id="E6E02" >}} {{< link id="E6E11" >}}

A DIP is convenient to handle and plug into a socket, but those long connections have an electrical cost. A signal takes time to travel along a lead. At higher frequencies, the same delay occupies more of a cycle, causing a greater *phase shift*. Lead inductance also grows more troublesome as frequency rises. A package that works well in a controller may be a poor home for a microwave amplifier.

> **Key Information:** Excessive lead length is why DIP through-hole integrated circuits are not typically used at UHF and higher frequencies. {{< link id="E6E12" >}}

Surface-mount components attach directly to pads on the board. Short connections reduce both the component's parasitic effects and the distance a signal must travel between parts.

> **Key Information:**
> - Surface-mount packages have the least parasitic effects among the package types listed for frequencies above HF. {{< link id="E6E09" >}}
> - At RF, surface-mount technology offers smaller circuit area, shorter board traces, and less parasitic inductance and capacitance than through-hole construction. {{< link id="E6E10" >}}

A smaller package is therefore more than a space-saving choice. It helps the physical circuit behave like the circuit the designer intended.
