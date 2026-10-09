---
chapter: "6"
section: "6.7"
questions: ["E9E06", "E9E03", "E9E02", "E9E04", "E9E09", "E9E01", "E9E05", "E9E08"]
status: generated1
draft: true
---

### Section 6.7: Antenna Matching Methods

An antenna's best radiating shape need not give a 50-ohm feed point. A matching system transforms that impedance into a load the feed line can carry efficiently. It can use lumped components, transmission-line sections, or a carefully placed connection to the radiator.

#### A Quarter-Wave Transformer

A lossless quarter-wave line transforms a resistive load $R_L$ according to

$$R_{\text{in}}=\frac{Z_t^2}{R_L},$$

where $Z_t$ is the matching section's characteristic impedance. To connect a 100-ohm antenna to 50-ohm line, solve for the matching section:

$$Z_t=\sqrt{R_{\text{in}}R_L}=\sqrt{50\times100}\approx70.7\ \Omega.$$

*The length must be one-quarter electrical wavelength at the operating frequency, including velocity factor.* This arrangement is called a Q-section or quarter-wave transformer.

> **Key Information:** A 75-ohm quarter-wave Q-section is a suitable choice for matching a 100-ohm feed point to 50-ohm line. {{< link id="E9E06" >}}

Why 75 rather than 70.7? It is the closest offered standard line impedance. A 75-ohm section transforms 100 ohms to $75^2/100=56.25\ \Omega$, which is a close match to 50 ohms. You would not get an exact 50-ohm result, but the closest available cable still gives a useful match. The method assumes the antenna load is resistive; uncorrected reactance needs further attention.

#### Stubs in Parallel

Earlier, shorted and open line sections supplied inductive or capacitive reactance. Connect one in parallel with the feed line and it can cancel an unwanted reactive component at a selected point. Its length determines the reactance; its position determines the load it must correct.

> **Key Information:** A stub match uses a short transmission-line section connected in parallel with the feed line at or near the feed point. {{< link id="E9E03" >}}

Picture a T connection: the main feed line continues toward the antenna and the stub branches off to one side. Its open or shorted far end is intentional. The Smith chart in the next section helps choose both branch position and length.

#### The Gamma Connection

*A gamma match connects the coax shield to the center of the antenna and its center conductor through a matching arm to a point off center.* The arm runs beside part of the element. *That geometry transforms the feed resistance but also introduces inductive reactance, which a series capacitor cancels.*

> **Key Information:**
> - A gamma match connects the coax shield at the antenna center and the center conductor a fraction of a wavelength to one side. {{< link id="E9E02" >}}
> - Its series capacitor cancels unwanted inductive reactance. {{< link id="E9E04" >}}

Because this feed arrangement does not require a center break in the radiator, it can work with an electrically grounded structure. *A grounded tower used as a vertical radiator can receive RF through a gamma arm attached above its base.*

> **Key Information:** A gamma match can shunt feed a tower grounded at its base. {{< link id="E9E09" >}}

The tower remains grounded at DC while the feed arrangement establishes the required RF voltage and current relationship.

#### The Hairpin Connection

A beta, or hairpin, match places a short inductive section across a split driven element. *The driven element is shortened until it supplies the needed capacitive reactance.* Together, that capacitance and the shunt inductance form a matching network.

> **Key Information:**
> - A beta or hairpin match requires the Yagi's driven element to be insulated from the boom. {{< link id="E9E01" >}}
> - Its driven element must have capacitive feed point impedance, obtained by making it electrically shorter than one-half wavelength. {{< link id="E9E05" >}}

The hairpin does more than add an inductor to an already matched dipole. Element length and hairpin dimensions work together to obtain the intended resistance and cancel the reactive part.

![Two matching arrangements compare their electrical connections. At left, a gamma match uses an unbroken horizontal driven element bonded to the gray vertical boom at its center. A blue lead connects the outer ring of the coax symbol, representing its shield, to that center joint. The orange center conductor leaves the coax symbol through the ring opening and connects through the series capacitor C to a blue matching arm parallel to the element. A shorting connection joins the arm to the element at a dot to the right of center. At right, the hairpin arrangement has a gap between two halves of the driven element. A hatched insulating support holds those halves away from the gray boom. A blue U-shaped conductor joins the two feed joints above the gap, forming the shunt inductive section. Separate orange feed conductors extend downward from those same two joints to open terminals. Black dots mark electrical joints. The drawings show connections only; element lengths, matching dimensions, and a balun are not shown.](../../../images/s6-7-gamma-hairpin.svg)
{.img-centered .img-xlarge .img-mobile-full caption="Left: gamma feed. The coax shield (outer ring) joins the continuous element at its center; the center conductor feeds the offset arm through C. Right: hairpin feed. The two feed terminals connect across a split element and the U-shaped inductive section. The hatched support insulates the element from the gray boom. Connection sketches only; dimensions and a balun are omitted."}

#### Feeding Two Loads

Two 50-ohm antennas connected directly in parallel present 25 ohms at their junction. *A Wilkinson divider avoids that mismatch while dividing the input power equally.* Its matching sections and isolation resistor also reduce interaction between the output ports.

> **Key Information:** A Wilkinson divider can split power equally between two 50-ohm loads while maintaining a 50-ohm input impedance. {{< link id="E9E08" >}}

Ideally, a 100-watt input supplies 50 watts to each matched load. The 3 dB reduction at each output reflects the split between two destinations; it does not mean half the total power was turned into heat.
