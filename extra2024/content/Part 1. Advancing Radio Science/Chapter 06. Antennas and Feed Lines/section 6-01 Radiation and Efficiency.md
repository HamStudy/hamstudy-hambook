---
chapter: "6"
section: "6.1"
questions: ["E9A09", "E3A04", "E3A05", "E3A10", "E3A14", "E9A04", "E9A05", "E9B08", "E9A01"]
status: generated1
draft: true
---

### Section 6.1: Radiation and Efficiency

A dummy load can show a perfect 1:1 SWR while radiating almost nothing, because it turns the power it accepts into heat. An antenna also turns some power into heat, in its conductors, any loading coils, and the nearby ground. The rest leaves as radio waves. Comparing those two shares shows how well the antenna uses the power it accepts.

#### Radiated Power and Lost Power

You can picture each share as power in a resistance that carries the antenna current. Radiation resistance, $R_r$, stands for the power leaving as radio waves. **Loss resistance**, $R_l$, stands for the power that becomes heat. Efficiency is the radiated fraction:

$$\eta=\frac{R_r}{R_r+R_l}.$$

The Greek letter $\eta$ (eta) represents efficiency as a fraction; multiply by 100 for percent. For $R_r=40\ \Omega$ and $R_l=10\ \Omega$, efficiency is $40/50=0.8$, or 80%. Of 100 watts that antenna accepts, 80 watts radiate and 20 watts become heat, warming wire and soil instead of reaching anyone's receiver.

> **Key Information:** Antenna efficiency is radiation resistance divided by total resistance. {{< link id="E9A09" >}}

#### Fields Crossing Space

The radiated share travels away in changing electric and magnetic fields produced by the antenna current. Some energy near the antenna never leaves. It moves back and forth between electric and magnetic fields close by.

Take a wave that leaves a vertical wire and travels horizontally. Its electric field points up and down, and its magnetic field points sideways across its path. Those are directions in space, not a 90-degree timing difference. Far from the antenna, the two fields rise and fall together.

In free space, the wave moves at the speed of light, $c$. In glass, water, or the plastic inside coax, it moves more slowly: $v=c/n$, where $n$ is the material's index of refraction. The frequency doesn't change, so a slower wave has a shorter wavelength.

> **Key Information:**
> - An electromagnetic wave travels at a right angle to the electric and magnetic fields. {{< link id="E3A04" >}}
> - The component fields of an electromagnetic wave are oriented at right angles. {{< link id="E3A05" >}}
> - The index of refraction determines the speed of electromagnetic waves through a medium. {{< link id="E3A10" >}}

#### The Electric Field's Direction

The electric field's direction sets a wave's polarization, so the example wave above is vertically polarized. Linear polarization keeps that field along one line, such as vertical or horizontal. Now combine a vertical and a horizontal wave of equal strength, timed a quarter cycle apart. As one peaks, the other passes through zero, so the combined electric field points up, then sideways, then down, then to the other side. The magnetic field keeps its right angle to it throughout.

> **Key Information:** Circularly polarized electromagnetic waves are waves with rotating electric and magnetic fields. {{< link id="E3A14" >}}

The wave itself still moves straight ahead. Circular polarization does not mean the signal travels in a circle, and a wire bent into a loop does not automatically produce it.

#### The Antenna's Surroundings

Near the earth, the fields don't travel through empty space alone. They induce currents in the ground and in nearby conductors, and those currents create fields of their own. Some of those fields reach back to the antenna and change the voltage-to-current ratio at its feed point, even though no wire changes length. This is the impedance at the antenna itself; feed-line length can separately change the impedance seen at the radio.

Seen from far away, the ground currents act as a reflection: a second field added to the direct one. Depending on direction, the reflected field reinforces the direct field or weakens it. Where it reinforces, the signal is stronger. The transmitter supplies no extra power; the ground only changes where the power goes.

> **Key Information:**
> - Antenna height affects the feed point impedance of an antenna. {{< link id="E9A04" >}}
> - Ground gain is an increase in signal strength from ground reflections in the environment of the antenna. {{< link id="E9A05" >}}

#### Comparing Patterns

A pattern is measured or calculated far from the antenna. Close to it, the mix of stored and radiated fields changes with distance and reshapes the result. Farther out, the stored fields have faded, leaving only the radiated ones. Their strength still falls with distance, but at the same rate in every direction.

A pattern taken that far out can be compared with a standard one. A real antenna makes a shaky yardstick, because its pattern and losses depend on how it is built and where it stands. Gain is measured instead against an imagined antenna with none of those quirks: the **isotropic radiator**, the "i" in dBi.

> **Key Information:**
> - The far field of an antenna is the region where the shape of the radiation pattern no longer varies with distance. {{< link id="E9B08" >}}
> - An isotropic radiator is a hypothetical, lossless antenna having equal radiation intensity in all directions, used as a reference for antenna gain. {{< link id="E9A01" >}}
