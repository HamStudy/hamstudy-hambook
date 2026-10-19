---
chapter: "6"
section: "6.7"
questions: ["E9E06", "E9E08", "E9E02", "E9E04", "E9E09", "E9E01", "E9E05", "E9E03"]
status: generated1
---

### Section 6.7: Antenna Matching Methods

Put an antenna tuner beside the radio and the transmitter sees a 50-ohm load, but the feed line beyond the tuner still carries the antenna's mismatch. The radio is happy; the coax isn't. A match made at the antenna clears the mismatch from the line. The methods here make that match with sections of transmission line or with connections to the radiating element itself.

#### A Quarter-Wave Transformer

Suppose an antenna presents 100 ohms but the feed line is 50 ohms. A quarter-wave section of another line impedance can transform one into the other. For a lossless section matching a resistive load, multiply the load resistance by the main line's impedance and take the square root. Here, the matching section's characteristic impedance, $Z_t$, is

$$Z_t=\sqrt{50\times100}\approx70.7\ \Omega.$$

The length must be one-quarter electrical wavelength at the operating frequency, including velocity factor. This arrangement is called a **Q-section** or **quarter-wave transformer**. Common 75-ohm coax, such as TV cable, is close enough to the calculated impedance to give a good match.

> **Key Information:** A 75-ohm transmission line is suitable for constructing a quarter-wave Q-section to match a 100-ohm feed point impedance to a 50-ohm transmission line. {{< link id="E9E06" >}}

#### Feeding Two Loads

The same impedance transformation lets one 50-ohm line feed two 50-ohm antennas. Connected directly in parallel, the two would present 25 ohms at their junction. A **Wilkinson divider** instead feeds each load through its own 70.7-ohm quarter-wave branch. Each branch turns its 50-ohm load into 100 ohms at the junction, where the two branches in parallel give 50 ohms. An isolation resistor reduces interaction between the output ports.

> **Key Information:** A use for a Wilkinson divider is to divide power equally between two 50-ohm loads while maintaining 50-ohm input impedance. {{< link id="E9E08" >}}

Ideally, a 100-watt input supplies 50 watts to each load. Each output is 3 dB down because the power is split, not lost as heat.

#### The Gamma Connection

Both methods above connect to a feed point. A Yagi's driven element is often a continuous tube bolted straight to a metal boom, with no break at its center to serve as one. Coax can still feed it. The shield connects at the element's center, and the center conductor runs out along a parallel rod, the arm, to a point off center. How far out that point sits sets the resistance the coax sees. The arm and the part of the element beside it also form a short line, shorted at the far end. Like the shorted stubs in [Section 6.3]({{% pageref "6.3" %}}), it acts as an inductor, so a capacitor goes in series with the arm.

Because this feed arrangement does not require a center break in the radiator, it can work with an electrically grounded structure. On a grounded tower used as a vertical radiator, the arm attaches partway up the tower. The coax shield connects to the grounded base and ground system; the center conductor feeds the arm through the matching capacitor. Feeding RF alongside the direct ground connection this way is called **shunt feeding**.

> **Key Information:**
> - A gamma match matches coaxial cable to an antenna by connecting the shield to the center of the antenna and the conductor a fraction of a wavelength to one side. {{< link id="E9E02" >}}
> - The purpose of the series capacitor in a gamma match is to cancel unwanted inductive reactance. {{< link id="E9E04" >}}
> - A gamma match is used to shunt feed a grounded tower at its base. {{< link id="E9E09" >}}

![Two matching arrangements compare their electrical connections. At left, a gamma match uses an unbroken horizontal driven element bonded to the gray vertical boom at its center. A blue lead connects the outer ring of the coax symbol, representing its shield, to that center joint. The orange center conductor leaves the coax symbol through the ring opening and connects through the series capacitor C to a blue matching arm parallel to the element. A shorting connection joins the arm to the element at a dot to the right of center. At right, the hairpin arrangement has a gap between two halves of the driven element. A hatched insulating support holds those halves away from the gray boom. A blue U-shaped conductor joins the two feed joints above the gap, forming the shunt inductive section. Separate orange feed conductors extend downward from those same two joints to open terminals. Black dots mark electrical joints. The drawings show connections only; element lengths, matching dimensions, and a balun are not shown.](../../../images/s6-7-gamma-hairpin.svg)
{.img-centered .img-large .caption-wide .img-mobile-full caption="Left: gamma feed. The coax shield (outer ring) joins the continuous element at its center; the center conductor feeds the offset arm through C. Right: hairpin feed. The two feed terminals connect across a split element and the U-shaped inductive section. The hatched support insulates the element from the gray boom. Connection sketches only; dimensions and a balun are omitted."}

#### The Hairpin Connection

With a split driven element, a beta or hairpin match uses the element itself as part of the matching network. The hairpin, a short length of line shorted at its far end, sits across the feed point and acts as an inductor. A Yagi's driven element often presents well below 50 ohms. Like the matching networks in [Section 3.1]({{% pageref "3.1" %}}), the hairpin works with a reactance of the opposite kind in the element. Together they cancel the reactance and raise that low resistance to the value the line needs. Because the element is split and fed across its center gap, bonding both halves directly to a metal boom would short that gap.

> **Key Information:**
> - The beta or hairpin matching system for Yagi antennas requires the driven element to be insulated from the boom. {{< link id="E9E01" >}}
> - A beta or hairpin matching system requires a capacitive Yagi driven element feed point impedance, with the driven element electrically shorter than 1/2 wavelength. {{< link id="E9E05" >}}

#### Stubs in Parallel

The hairpin is itself a shorted stub placed right at the feed point. A stub can also sit some distance down the feed line, connected in parallel with it. Moving along a mismatched line changes what it presents, and at certain points, adding the right reactance in parallel leaves exactly the line's characteristic impedance. A shorted or open stub at one of those points supplies that inductive or capacitive reactance. The stub's length sets its reactance; its position sets what it must correct.

![A one-line diagram of a stub match. A horizontal blue feed line runs from the transmitter at the left to a box labeled antenna at the right. At a junction dot a distance d to the left of the antenna, an orange stub branches straight down from the feed line. The stub has length ℓ and ends in a bar labeled shorted end. Dimension arrows mark d along the feed line between the junction and the antenna, and ℓ along the stub.](../../../images/s6-7-stub-match.svg)
{.img-centered .img-large .img-mobile-full caption="A stub match: a short section of line in parallel with the feed line, a distance d from the antenna. Its length ℓ sets the reactance it adds; its far end may be shorted or open."}

> **Key Information:** A stub match uses a short length of transmission line connected in parallel with the feed line at or near the feed point. {{< link id="E9E03" >}}
