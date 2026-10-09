---
chapter: "6"
section: "6.4"
questions: ["E9C08", "E9C07", "E9C05", "E9C09", "E9C10", "E9C12", "E9C04", "E9C06", "E9C13", "E9C14", "E9C11", "E9A11", "E9A10"]
status: generated1
draft: true
---

### Section 6.4: Wire Antennas and Ground

Two builders can start with similar lengths of wire and end up with very different loads for their feed lines. The connection point and nearby conductors change how current divides and where voltage is high. Ground then changes both the pattern and the loss.

#### Variations on the Dipole

A half-wave dipole has a current maximum near its center and high voltage near its ends. *A folded dipole adds a second parallel wire, connected to the first at both ends.* The feed point remains at the center of one wire. This is not a dipole whose tips have been bent downward.

> **Key Information:**
> - A folded dipole is a half-wave dipole with an additional parallel wire connecting its ends. {{< link id="E9C08" >}}
> - A two-wire half-wave folded dipole has an approximate center feed point impedance of 300 ohms. {{< link id="E9C07" >}}

![An ordinary dipole at left and a folded dipole at right each span about half a wavelength. The ordinary dipole has a gap at its center, with a separate feed conductor connected to each side of the gap. The folded dipole has the same center gap and feed connections in its lower wire, plus an unbroken parallel upper wire joined to the lower wire at both ends. The added wire connects the two sides around the ends; the feed still connects across the gap in only one wire. The drawing shows connections, not construction dimensions.](../../../images/s6-4-folded-dipole.svg)
{.img-centered .img-xlarge .img-mobile-full caption="The folded dipole (right) adds a parallel wire joined to both ends. Feed the center of one wire; the other remains continuous. Orange lines mark the feed connections."}

For equal-sized closely spaced wires, current divides between the two conductors in a way that gives roughly four times an ordinary dipole's feed resistance. *Using about 75 ohms for the ordinary dipole gives about 300 ohms for the folded version.* Its actual installed impedance still responds to height and surroundings.

An off-center-fed dipole uses a different connection point. *At suitable locations, the voltage-to-current ratio is similar on several harmonically related bands, making one matching arrangement useful on those bands.*

> **Key Information:** An off-center-fed dipole is fed between its center and an end to create similar feed point impedances on multiple bands. {{< link id="E9C05" >}}

Moving the feed point does not make the antenna resonant at every frequency. It also does not automatically prevent unwanted current on the outside of a coax shield.

#### The Feed Section

*A G5RV combines a center-fed wire with a particular length of open-wire line, followed by a transition to coax.* The open-wire section transforms impedance, so changing it changes the antenna system's behavior. *A balun at the transition connects the balanced line to the unbalanced coax.*

> **Key Information:** A G5RV is a wire antenna center-fed through a specific length of open-wire line connected to a balun and coaxial feed line. {{< link id="E9C09" >}}

Treat that open-wire section as part of the antenna design when you build a G5RV. Cutting it to use up a convenient scrap of line changes the match. An antenna tuner may still be needed on the chosen band.

*A Zepp feeds a half-wave radiator at an end, where impedance is high.* *The extended double Zepp is a different form: a center-fed wire whose total length is 1.25 wavelengths.* Each side is five-eighths of a wavelength.

> **Key Information:**
> - A Zepp is an end-fed half-wavelength dipole. {{< link id="E9C10" >}}
> - An extended double Zepp is a center-fed 1.25-wavelength dipole. {{< link id="E9C12" >}}

Those names alone do not supply a match to 50-ohm coax. Feed systems must handle the impedance of the chosen radiator.

#### More Wire Means More Lobes

A wire many wavelengths long no longer has the broad two-lobed pattern of a half-wave dipole. Different sections carry currents with different phases. Their fields reinforce some directions and cancel in others.

> **Key Information:** As an unterminated long wire becomes longer, additional lobes form and the major lobes move closer to the wire's axis. {{< link id="E9C04" >}}

“Closer to the axis” does not mean directly off the end in every design. *It means the strong lobes increasingly favor directions along the wire rather than broadside to it.*

An open end reflects the traveling wave on a long-wire or rhombic antenna. A suitable terminating resistor absorbs that wave instead. *Removing the reflected contribution makes the pattern favor one direction, though the resistor consumes some power.*

> **Key Information:** Adding a terminating resistor to a rhombic or long-wire antenna changes its pattern from bidirectional to unidirectional. {{< link id="E9C06" >}}

Pattern control and efficiency are separate trades here. A termination can improve directionality while adding loss.

#### Height, Slopes, and Soil

A horizontal antenna sends a direct field and a field that reflects from the ground. Their path difference depends on elevation angle and antenna height. Change the height and you change the angles where they reinforce each other.

> **Key Information:**
> - Raising a horizontally polarized antenna lowers the takeoff angle of its lowest elevation lobe. {{< link id="E9C13" >}}
> - Above a long slope, its main-lobe takeoff angle decreases in the downhill direction compared with flat ground. {{< link id="E9C14" >}}
> - A vertically polarized antenna over seawater has more low-angle radiation than the same antenna over soil. {{< link id="E9C11" >}}

Seawater conducts much better than ordinary soil. *For vertical polarization, the resulting ground reflection favors stronger low-angle radiation.* That is one reason the same vertical can perform differently at the beach and inland.

Height should be compared in wavelengths. A wire 10 meters high is half a wavelength above ground on a 20-meter wavelength, but only one-eighth wavelength high on an 80-meter wavelength. The same supports can therefore produce very different elevation patterns on different bands.

The ground also carries current for a ground-mounted vertical. Ordinary soil is a lossy conductor. *A radial system supplies better conducting paths in the high-current area around the base and reduces the fraction of power spent heating the ground.*

> **Key Information:**
> - Soil conductivity determines ground losses for a ground-mounted HF vertical. {{< link id="E9A11" >}}
> - Installing ground radials improves the efficiency of a ground-mounted quarter-wave vertical. {{< link id="E9A10" >}}

An improved ground system may change the feed resistance and SWR. That change can be evidence of reduced loss, even if a matching adjustment becomes necessary. If adding radials raises the SWR, do not assume you have made the antenna worse. Less ground heating can change the feed resistance; readjust the match and assess the whole system.
