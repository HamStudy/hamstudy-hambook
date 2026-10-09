---
chapter: "1"
section: "1.4"
questions: ["E6D06", "E6D05", "E6D10", "E6D04", "E6D08", "E6D11", "E6D12", "E6D09"]
status: generated1
draft: true
---

### Section 1.4: Magnetic Components

*An inductor stores energy in a magnetic field* and opposes changes in current. Its inductance measures that effect. Changing the core inside the coil can change its inductance without changing a single turn of wire. The core also affects loss, temperature behavior, and how much current the coil can handle.

#### Material and Shape

Magnetic *flux* describes the magnetic field passing through an area, such as a core's cross section. *Permeability describes how readily a material supports magnetic flux for a given magnetizing field.* *With the same winding and geometry, greater permeability generally gives more inductance.* Ferrite is a magnetic ceramic; powdered-iron cores contain small iron particles separated by insulating material.

> **Key Information:**
> - Permeability is the core-material property that determines an inductor's inductance. {{< link id="E6D06" >}}
> - Ferrite cores generally require fewer turns than powdered-iron cores to produce a given inductance. {{< link id="E6D05" >}}
> - Among the listed core materials, powdered iron has the highest temperature stability of its magnetic characteristics. {{< link id="E6D08" >}}

A ring that fits the winding is not necessarily the right ring. Each core material comes in different formulations. A core intended to absorb unwanted VHF energy may be a poor choice for a low-loss HF tuned circuit, even if it gives the inductance you wanted.

A *toroid* is a ring-shaped core with wire wound around the ring. *It gives the magnetic field a mostly closed path.* A solenoidal winding, such as a coil around a straight rod, has more field outside its core.

> **Key Information:** A primary advantage of a toroidal core is that it confines most of the magnetic field within the core material. {{< link id="E6D10" >}}

That helps when two coils must sit close together: adjusting one is less likely to disturb the other through magnetic coupling. The field is not perfectly confined, so layout still matters.

#### Loss and Limits

A changing magnetic field induces voltage in nearby conductors, including the core itself. In a solid metal core, that voltage can drive circulating *eddy currents*. Those currents heat the metal. *Dividing the core into thin insulated layers interrupts large current paths.*

> **Key Information:** Thin layers in some inductor and transformer cores reduce power loss from eddy currents. {{< link id="E6D04" >}}

A nonmagnetic metal slug can behave differently from an iron or ferrite core. *Eddy currents in a brass slug oppose the coil's changing field, reducing its effective inductance.* Moving the slug provides a way to adjust a coil.

> **Key Information:** Inserting a brass core into a coil decreases its inductance. {{< link id="E6D11" >}}

Magnetic cores also have a limit called *saturation*. As the magnetizing force rises, the material eventually cannot provide its earlier increase in magnetic flux. The winding's effective inductance then falls, and current can rise sharply.

> **Key Information:** Inductor saturation results from operation at excessive magnetic flux. {{< link id="E6D12" >}}

A small-signal inductance measurement can look fine while the same coil struggles under load. Check the current and saturation ratings as well as the number of microhenries. The core must do its job at the current the circuit actually uses.

#### Using Loss on Purpose

In a tuned circuit, core loss wastes wanted energy and lowers Q, a measure that compares stored energy with energy lost. To suppress an unwanted oscillation, loss can be useful. A ferrite bead around a lead adds impedance that depends on frequency. In its intended suppression range, part of that impedance is resistive, so the bead dissipates unwanted RF energy.

> **Key Information:** Ferrite beads are commonly used as VHF and UHF parasitic suppressors at the input and output terminals of a transistor HF amplifier. {{< link id="E6D09" >}}

Even an ordinary lead has some inductance, and nearby conductors have capacitance between them. These unintended properties are called *parasitic effects*. An HF amplifier may amplify an unintended VHF signal through these stray capacitances and lead inductances. A suitable bead damps that higher-frequency path while having less effect on the desired HF signal. Its usefulness comes from choosing the right loss in the right frequency range.
