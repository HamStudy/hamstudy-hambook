---
chapter: "6"
section: "6.9"
questions: ["E9H02", "E9H03", "E9H01", "E9H07", "E9H06", "E9H10", "E9H04", "E9H05", "E9H08", "E9H09", "E9H11"]
status: generated1
draft: true
---

### Section 6.9: Receiving Antennas

For transmitting, losing most of the accepted power is disappointing. For receiving on a noisy low band, a lossy antenna can still be excellent if it rejects more noise than wanted signal. Switch to it and the S-meter may fall while the words become easier to copy. For this job, signal-to-noise ratio matters more than a large meter reading.

#### Listen in Fewer Directions

*On 160 and 80 meters, atmospheric noise often dominates the receiver's own noise.* Some antenna loss can reduce both the wanted signal and that external noise without making the receiver's internal noise significant. *Directionality can provide a larger benefit by favoring the station while rejecting noise arriving elsewhere.*

> **Key Information:** For 160- and 80-meter receiving antennas, atmospheric noise is generally high enough that directivity matters much more than losses. {{< link id="E9H02" >}}

The qualification matters: enough signal and external noise must still reach the receiver. Unlimited loss would eventually make receiver noise the limiting factor.

*Receiving directivity factor, or RDF, compares peak gain with the average gain over the surrounding upper hemisphere.* That average considers the whole region around and above the antenna, not only one rear bearing.

> **Key Information:** RDF is peak antenna gain compared with average gain over the hemisphere around and above the antenna. {{< link id="E9H03" >}}

A deep rear null can help against one noise source, but RDF gives a broader view of how much unwanted energy the antenna admits from other directions.

#### A Long Wire Near the Ground

A Beverage is a long receiving wire supported relatively close to the ground. A wave arriving along the favored direction induces voltages along the wire that add usefully at the feed point. A transformer connects its impedance to the receiver's feed line.

> **Key Information:** A Beverage should be at least one wavelength long for good performance at the intended frequency. {{< link id="E9H01" >}}

Using the free-space wavelength estimate, one wavelength at 1.8 MHz is about $300/1.8=167$ meters. That is a long walk to the far end before you have even allowed space for supports. A Beverage needs considerable property, though it does not need a high tower.

Its far end normally has a terminating resistor. *The termination absorbs traveling energy that would otherwise reflect and increase response from the reverse direction.* That trades efficiency for a useful one-way pattern.

> **Key Information:**
> - A Beverage's terminating resistor absorbs signals from the reverse direction. {{< link id="E9H07" >}}
> - Minimum variation in SWR across the desired frequency range indicates the correct terminating resistance. {{< link id="E9H06" >}}

*The target is a smooth SWR curve, not the lowest single reading at one frequency.* A poorly terminated wire develops stronger reflections, so its feed impedance varies more as frequency changes.

#### Stronger Loop Output

A small receiving loop responds to changing magnetic flux through its area. A larger area intercepts more flux; more turns add the induced voltages of individual turns. *Within the useful operating range, either can raise output voltage.*

> **Key Information:** Increasing the number of turns, the enclosed area, or both increases a multiple-turn receiving loop's output voltage. {{< link id="E9H10" >}}

More turns also add inductance and stray capacitance, so this is not an unlimited way to improve reception. The loop must remain suitable for its intended frequency.

For direction finding, or DF, a small loop's deep null is often easier to locate precisely than its broad maximum. Unbalanced capacitive pickup from surrounding objects can fill that null with an unwanted response. *A properly made electrostatic shield reduces that pickup.*

> **Key Information:** An electrostatic shield eliminates unbalanced capacitive coupling to a small DF loop's surroundings, improving null depth. {{< link id="E9H04" >}}

The shield must not form a closed conducting turn around the loop. Its purpose is to control electric-field pickup while preserving the loop's magnetic response.

#### One Null Instead of Two

*A small loop has two null directions, 180 degrees apart.* Rotate it until a signal disappears and you have found an axis. The transmitter could be ahead of you or behind you; that 180-degree ambiguity remains even with a very sharp null.

> **Key Information:** A small wire loop presents a direction-finding challenge because its null pattern is bidirectional. {{< link id="E9H05" >}}

A *sense antenna* adds a second response with suitable phase and amplitude. *Combined with the loop, it removes one of the two nulls and leaves a single-null pattern.* The receiver can then distinguish the correct direction.

> **Key Information:** A sense antenna modifies a DF antenna's pattern to provide a null in only one direction. {{< link id="E9H08" >}}

*A single-turn terminated loop, such as a pennant, also produces a cardioid pattern.* Its asymmetric combination of loop geometry and termination favors one direction and rejects the opposite direction.

> **Key Information:**
> - A single-turn terminated loop such as a pennant has a cardioid pattern. {{< link id="E9H09" >}}
> - A cardioid's single null makes it useful for direction finding. {{< link id="E9H11" >}}

These antennas put the pattern to work in two ways: a strong lobe selects a wanted region, and a null rejects a troublesome direction. The next question is whether the radio path itself can deliver a signal from that region to the antenna.
