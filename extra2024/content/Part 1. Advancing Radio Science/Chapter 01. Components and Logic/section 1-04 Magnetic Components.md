---
chapter: "1"
section: "1.4"
questions: ["E6D06", "E6D05", "E6D08", "E6D10", "E6D04", "E6D11", "E6D12", "E6D09"]
status: generated1
draft: true
---

### Section 1.4: Magnetic Components

An inductor stores energy in the magnetic field around its coil. Wind the same wire on a ferrite ring instead of leaving it in air, and the inductance can rise many times over. That is why so many coils in radio equipment have cores. The core's material and shape decide how much it helps, and they bring trade-offs of their own.

#### Material and Shape

A core raises inductance by supporting a stronger magnetic field than air does. Magnetic **flux** is the field passing through an area, such as a core's cross section. The winding's current sets up a magnetizing field. Permeability describes how readily a material supports magnetic flux for a given magnetizing field. Don't confuse permeability with permittivity, which describes a capacitor's insulation.

Two common choices are ferrite and powdered iron. Ferrite is a magnetic ceramic. Powdered iron consists of tiny iron particles held apart by insulation. Ferrite generally has the higher permeability. A tuned circuit needs more than inductance, though. Its inductance must also hold steady as the equipment warms up, or the circuit drifts off frequency.

> **Key Information:**
> - Permeability is the core-material property that determines an inductor's inductance. {{< link id="E6D06" >}}
> - Ferrite cores generally require fewer turns than powdered-iron cores to produce a given inductance. {{< link id="E6D05" >}}
> - Powdered iron has the highest temperature stability of its magnetic characteristics. {{< link id="E6D08" >}}

A core that fits the winding is not necessarily the right core. Each material comes in different formulations. A core intended to absorb unwanted VHF energy may be a poor choice for a low-loss HF tuned circuit, even if it gives the inductance you wanted.

Shape matters too. In a solenoidal winding, such as a coil around a straight rod, much of the field loops outside the core, where it can couple into nearby parts. A toroid's core is a closed ring, with the winding wrapped around it.

> **Key Information:** A primary advantage of a toroidal core is that it confines most of the magnetic field within the core material. {{< link id="E6D10" >}}

With little field outside the ring, a toroid and nearby parts disturb each other less.

#### Loss and Limits

A changing magnetic field induces voltage in nearby conductors, including the core itself. In a solid metal core, that voltage drives circulating **eddy currents**, which heat the metal and waste signal energy. Building the core from thin, insulated layers breaks up those large current paths. Powdered iron's insulated particles do the same job on a finer scale.

Eddy currents can also be useful. A movable brass slug lets you adjust a coil's inductance without rewinding it. Unlike iron or ferrite, brass is nonmagnetic. Eddy currents in a brass slug oppose the coil's changing field.

> **Key Information:**
> - Cores of inductors and transformers are sometimes constructed of thin layers to reduce power loss from eddy currents in the core. {{< link id="E6D04" >}}
> - Brass is a core material that decreases inductance when inserted into a coil. {{< link id="E6D11" >}}

Heavy current brings another problem. As the current rises, so does the magnetizing field. Beyond a certain point, the core adds much less magnetic flux for each increase in current. This limit is called **saturation**. The winding's effective inductance falls, and current can rise sharply.

> **Key Information:** Inductor saturation results from operation at excessive magnetic flux. {{< link id="E6D12" >}}

A coil that measures correctly on a meter can still saturate in use. Check its current or saturation rating as well as its inductance.

#### Using Loss on Purpose

In a tuned circuit, core loss wastes wanted energy and lowers Q, a measure that compares stored energy with energy lost. When a circuit oscillates at an unwanted frequency, though, some loss can help stop it.

In an HF amplifier, lead inductance and capacitance between nearby conductors can create an unwanted feedback path. These unintended properties are called **parasitic effects**. They come from the physical wiring, even where the schematic shows no coil or capacitor. The stray values are small, so they resonate at high frequencies, and the amplifier may oscillate at VHF.

A ferrite bead slipped over a lead adds impedance that depends on frequency. In its intended suppression range, part of that impedance is resistive, so the bead dissipates unwanted RF energy. At the desired HF frequencies, a suitable bead adds little loss.

> **Key Information:** Ferrite beads are commonly used as VHF and UHF parasitic suppressors at the input and output terminals of a transistor HF amplifier. {{< link id="E6D09" >}}
