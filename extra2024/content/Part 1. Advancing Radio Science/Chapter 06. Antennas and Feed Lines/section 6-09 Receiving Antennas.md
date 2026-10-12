---
chapter: "6"
section: "6.9"
questions: ["E9H02", "E9H03", "E9H07", "E9H06", "E9H01", "E9H10", "E9H04", "E9H05", "E9H08", "E9H09", "E9H11"]
status: generated1
draft: true
---

### Section 6.9: Receiving Antennas

For transmitting, losing most of the accepted power is disappointing. For receiving on a noisy low band, a lossy antenna can still be excellent if it rejects more noise than wanted signal. Switch to it and the S-meter may fall while the words become easier to copy. For this job, signal-to-noise ratio matters more than a large meter reading.

#### Listen in Fewer Directions

On 160 and 80 meters, atmospheric noise usually far exceeds the receiver's own noise. Antenna loss weakens the wanted signal and that noise together, so their ratio stays the same. That holds until the loss grows large enough for the receiver's own noise to matter. Directivity can improve the ratio by favoring the wanted station while rejecting noise from other directions.

A deep rear null helps against one noise source, but noise can come from all around. Receiving directivity factor, or RDF, rates how well an antenna rejects all of it.

> **Key Information:**
> - For 160- and 80-meter receiving antennas, atmospheric noise is generally so high that directivity is much more important than losses. {{< link id="E9H02" >}}
> - Receiving directivity factor (RDF) is peak antenna gain compared to average gain over the hemisphere around and above the antenna. {{< link id="E9H03" >}}

That average includes every direction above the ground, not only the rear, so RDF tells you more than a front-to-back ratio does.

#### A Long Wire Near the Ground

The Beverage, a long, low wire with a resistor at its far end, is the classic low-band receiving antenna. It works like the terminated long wire in [Section 6.4]({{% pageref "6.4" %}}). The wire points toward the wanted stations, with the receiver connection at the near end and the termination at the far end. A signal from the favored direction travels along the wire toward the receiver, and the voltages it induces add along the way. A signal from behind builds up toward the far end instead, where it meets the resistor rather than an open end that would reflect it back toward the receiver.

The resistor works best when it matches the wire's own characteristic impedance, typically several hundred ohms. With the wrong value, waves reaching the far end partly reflect. As on any mismatched line in [Section 6.3]({{% pageref "6.3" %}}), the feed impedance then varies more as frequency changes.

Directivity grows with length. For scale, one wavelength at 1.8 MHz is about $300/1.8=167$ meters. A Beverage needs considerable property, though it does not need a high tower.

> **Key Information:**
> - The function of a Beverage antenna's termination resistor is to absorb signals from the reverse direction. {{< link id="E9H07" >}}
> - Minimum variation in SWR over the desired frequency range indicates the correct value of terminating resistance for a Beverage antenna. {{< link id="E9H06" >}}
> - To achieve good performance at the desired frequency, a Beverage antenna should be at least one wavelength long. {{< link id="E9H01" >}}

#### Stronger Loop Output

Where a Beverage won't fit, a small receiving loop offers a compact alternative. If its output is too low, a larger area intercepts more changing magnetic flux, while more turns add their induced voltages.

> **Key Information:** The output voltage of a multiple-turn receiving loop antenna can be increased by increasing the number of turns and/or the area enclosed by the loop. {{< link id="E9H10" >}}

#### Sharper Nulls for Direction Finding

For direction finding, or DF, a small loop's deep null is often easier to locate precisely than its broad maximum. The loop responds mainly to the wave's magnetic field. Stray capacitance to its surroundings, unequal on its two sides, adds some electric-field pickup. That unbalanced capacitive coupling makes the loop act partly like a small whip, which hears every direction and so fills the nulls. An **electrostatic shield**, a conducting tube around the loop, intercepts that electric field before it reaches the wire. The shield has a gap so it doesn't form a closed turn, which would block the magnetic field as well.

> **Key Information:** An electrostatic shield around a small-loop direction-finding antenna eliminates unbalanced capacitive coupling to the antenna's surroundings, improving the depth of its nulls. {{< link id="E9H04" >}}

#### One Null Instead of Two

Even a perfect null leaves a question: which end of the bearing points to the transmitter? Rotating the loop until the signal disappears identifies an axis, leaving the source ahead or behind.

> **Key Information:** The challenge presented by a small wire-loop antenna for direction finding is that it has a bidirectional null pattern. {{< link id="E9H05" >}}

The loop's two lobes have opposite phase: signals from opposite sides produce voltages of opposite polarity. A **sense antenna**, usually a short vertical, adds back the whip-like response the shield removed, this time on purpose, at a controlled phase and level. It reinforces one lobe and cancels the other, leaving a pattern shaped like that of the phased verticals in [Section 6.6]({{% pageref "6.6" %}}).

![Two plan-view receiving patterns. At left, labeled loop alone, a short orange bar represents a small loop seen edge-on. Its pattern is a figure eight with one lobe on each side along the bar, marked plus on the right and minus on the left for their opposite phase. Arrows pointing straight up and straight down, broadside to the loop, mark its two nulls. At right, labeled loop plus sense antenna, the same loop has a green dot at its center for the sense antenna. Dashed curves show the loop's figure eight, marked plus and minus, and the sense antenna's circle, each at half size. Their sum, drawn solid, is a heart-shaped cardioid that extends to the right over the plus lobe and pinches to zero on the left, where a single arrow marks the only null.](../../../images/s6-9-sense-antenna.svg)
{.img-centered .img-xlarge .img-mobile-full caption="A small loop alone has two nulls, 180 degrees apart. Adding an equal, nondirectional sense antenna reinforces the loop's plus lobe and cancels its minus lobe, leaving a cardioid with one null."}

A **pennant** produces that pattern by itself. It is a single-turn loop shaped like a flag, with a resistor on the side opposite its feed point. It sums its own electric- and magnetic-field pickup, much as a loop and sense antenna do, with the resistor setting the balance.

> **Key Information:**
> - The function of a sense antenna is to modify the pattern of a DF antenna to provide a null in only one direction. {{< link id="E9H08" >}}
> - A single-turn, terminated loop such as a pennant antenna creates a cardioid radiation pattern. {{< link id="E9H09" >}}
> - A single null is the feature of a cardioid pattern that makes it useful for direction-finding antennas. {{< link id="E9H11" >}}
