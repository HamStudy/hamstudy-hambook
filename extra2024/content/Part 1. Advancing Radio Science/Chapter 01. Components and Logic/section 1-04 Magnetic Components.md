---
chapter: "1"
section: "1.4"
questions: ["E6D06", "E6D05", "E6D10", "E6D04", "E6D08", "E6D11", "E6D12", "E6D09"]
status: generated1
draft: true
---

### Section 1.4: Magnetic Components

The tuning diode earlier in this chapter changes capacitance to select a frequency. A coil's core gives us another way to adjust a tuned circuit: it changes inductance without changing the winding. That choice also affects loss, temperature behavior, and current handling.

#### Material and Shape

To get more inductance from a given winding, we can use a material that supports a stronger magnetic field. Magnetic *flux* describes the field passing through an area, such as a core's cross section. *Permeability describes how readily a material supports magnetic flux for a given magnetizing field.* *With the same winding and geometry, greater permeability generally gives more inductance.*

Two common choices are ferrite, a magnetic ceramic, and powdered iron, made of small iron particles separated by insulating material.

> **Key Information:**
> - Permeability is the core-material property that determines an inductor's inductance. {{< link id="E6D06" >}}
> - Ferrite cores generally require fewer turns than powdered-iron cores to produce a given inductance. {{< link id="E6D05" >}}
> - Among the listed core materials, powdered iron has the highest temperature stability of its magnetic characteristics. {{< link id="E6D08" >}}

A ring that fits the winding is not necessarily the right ring. Each material comes in different formulations. A core intended to absorb unwanted VHF energy may be a poor choice for a low-loss HF tuned circuit, even if it gives the inductance you wanted.

To keep nearby coils from disturbing each other, toroids help: *their ring-shaped cores give the magnetic field a mostly closed path*. A solenoidal winding, such as a coil around a straight rod, has more field outside its core.

> **Key Information:** A primary advantage of a toroidal core is that it confines most of the magnetic field within the core material. {{< link id="E6D10" >}}

The field is not perfectly confined, so layout still matters.

#### Loss and Limits

A coil can have the right inductance yet waste signal energy by heating its core. A changing magnetic field induces voltage in nearby conductors, including the core itself. In a solid metal core, that voltage drives circulating *eddy currents*, which heat the metal. *Dividing the core into thin insulated layers interrupts large current paths* and reduces this loss.

> **Key Information:** Thin layers in some inductor and transformer cores reduce power loss from eddy currents. {{< link id="E6D04" >}}

The effect of eddy currents can also help us adjust a coil. A movable brass slug provides a way to change inductance without rewinding it. Unlike iron or ferrite, brass is nonmagnetic. *Eddy currents in a brass slug oppose the coil's changing field, reducing its effective inductance.*

> **Key Information:** Inserting a brass core into a coil decreases its inductance. {{< link id="E6D11" >}}

A coil that measures correctly with a small test signal may behave differently under load. As current rises, it creates a stronger magnetizing field. Beyond a certain point, the core adds much less magnetic flux for each increase in current. This limit is called *saturation*. The winding's effective inductance falls, and current can rise sharply.

> **Key Information:** Inductor saturation results from operation at excessive magnetic flux. {{< link id="E6D12" >}}

Check the current and saturation ratings as well as the number of microhenries. The core must do its job at the current the circuit actually uses.

#### Using Loss on Purpose

In a tuned circuit, core loss wastes wanted energy and lowers Q, a measure that compares stored energy with energy lost. When a circuit oscillates at an unwanted frequency, though, some loss can help stop it.

In an HF amplifier, lead inductance and capacitance between nearby conductors can create an unwanted feedback path. Some output can feed back to the input, allowing the amplifier to oscillate at VHF. These unintended properties are called *parasitic effects*. These effects come from the physical wiring even when the schematic shows no coil or capacitor there.

A ferrite bead around a lead can damp that higher-frequency path. It adds impedance that depends on frequency. In its intended suppression range, part of that impedance is resistive, so the bead dissipates unwanted RF energy.

> **Key Information:** Ferrite beads are commonly used as VHF and UHF parasitic suppressors at the input and output terminals of a transistor HF amplifier. {{< link id="E6D09" >}}

A suitable bead has less effect on the desired HF signal: it absorbs energy in the troublesome frequency range while letting the amplifier do its intended job.
