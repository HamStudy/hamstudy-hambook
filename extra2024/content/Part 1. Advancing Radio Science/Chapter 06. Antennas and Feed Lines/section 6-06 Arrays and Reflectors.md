---
chapter: "6"
section: "6.6"
questions: ["E9E11", "E9C03", "E9C01", "E9C02", "E9D05", "E9D12", "E9D11", "E9D02", "E9D01"]
status: generated1
draft: true
---

### Section 6.6: Arrays and Reflectors

Two antennas fed from the same transmitter do not automatically make a stronger signal everywhere. In one direction their fields may arrive together. In another, one may arrive half a cycle later and cancel the other. Element spacing and feed phase let the designer choose those directions.

#### Feed Phase and Travel Phase

A phasing line gives one driven element a chosen delay relative to another. The phase difference seen at a distant receiver combines that feed delay with the extra travel distance from one element. The pattern follows from the total.

> **Key Information:** Multiple driven elements connected through phasing lines control an antenna's radiation pattern. {{< link id="E9E11" >}}

Consider two quarter-wave verticals spaced half a wavelength apart, with equal currents in phase. Broadside to the line joining them, the travel distances are equal, so their fields add. Along that line, the extra half-wavelength travel adds 180 degrees, so their fields cancel. *The result is a broadside figure-eight pattern.*

Now feed the same elements 180 degrees apart. Broadside, their fields cancel. Along the axis, the extra travel phase cancels the feed-phase difference, and the fields add. *The figure eight turns to point along the array.*

> **Key Information:** For two quarter-wave verticals spaced one-half wavelength apart:
> - In-phase feeding produces a figure eight broadside to the array's axis. {{< link id="E9C03" >}}
> - Feeding 180 degrees out of phase produces a figure eight along the array's axis. {{< link id="E9C01" >}}

The *array axis* is the line joining the antennas. Imagine looking straight down at the two verticals: that line lies across the ground.

![Two plan-view radiation patterns for identical pairs of quarter-wave verticals spaced half a wavelength apart. In both panels two dots represent the verticals along a horizontal array axis. With zero feed-phase difference, the figure-eight lobes point above and below that axis and nulls lie along it. With a 180-degree feed-phase difference, the lobes point left and right along the axis and the nulls lie broadside. The curves are simplified horizontal array-factor patterns for equal element currents, plotted as normalized field strength.](/images/s6-6-array-phase.svg)
{.img-centered .img-xlarge caption="Same spacing, different feed phase. The in-phase pair favors broadside directions; reversing the phase of one element favors directions along the array. Dots mark the verticals in this view from above. Curves show simplified horizontal patterns for equal element currents, not physical distances."}

Quarter-wave spacing and a 90-degree feed difference give another useful pattern. Along one direction, travel and feed phase cancel; along the opposite direction, they add to 180 degrees. One direction is strong and the opposite direction has a null. *The resulting heart-shaped pattern is called a cardioid.*

> **Key Information:** Two quarter-wave verticals spaced one-quarter wavelength apart and fed 90 degrees out of phase produce a cardioid pattern. {{< link id="E9C02" >}}

Reversing which element leads reverses the favored direction. The null is a useful check on your construction: amplitude or phase errors fill it in. Equal feed-line lengths alone do not guarantee the intended result if the elements and their surroundings differ.

#### Phase From Parasitic Elements

A Yagi usually feeds only one element directly. *Its driven element is approximately half a wavelength long.* Fields from it induce currents in nearby *parasitic* elements, which then reradiate. Their currents' phases and amplitudes reshape the combined pattern.

> **Key Information:**
> - A Yagi's driven element is approximately one-half wavelength long. {{< link id="E9D05" >}}
> - Making parasitic elements longer or shorter than resonance controls their phase shift. {{< link id="E9D12" >}}

A reflector is normally longer than resonant length; a director is shorter. Those names describe their role in the combined field. The reflector does not act as a solid metal wall, and the director has no feed line pushing power into it.

> **Key Information:** For a two-element Yagi with normal spacing, a reflector is preferred to a director for higher gain. {{< link id="E9D11" >}}

Spacing, tuning, gain, and front-to-back ratio interact. That comparison does not mean every possible two-element director design has lower gain. A designer may trade some maximum forward gain for a better rear null or a wider operating range.

#### Rotating the Polarization

Two perpendicular linear fields can combine into a rotating field. Use equal amplitudes and place them 90 degrees apart in phase: when one field is at its maximum, the other passes through zero. A quarter-cycle later, their roles reverse. The combined electric field rotates.

> **Key Information:** To obtain circular polarization from two linear Yagis, place them on the same axis, perpendicular to each other, with their driven elements at the same point along the boom, and feed them 90 degrees out of phase. {{< link id="E9D02" >}}

Equal amplitudes are also needed for ideal circular polarization. If the amplitudes or timing are wrong, the field generally becomes elliptical. Spatial placement matters because a displacement along the boom adds its own travel phase.

#### Dish Gain and Frequency

A parabolic reflector brings energy from its feed into a narrow beam. Its gain depends on how large its aperture is in wavelengths. Keep the physical dish and efficiency unchanged, then double frequency: wavelength halves, making the dish twice as wide in wavelengths and four times as large in wavelength-squared area.

$$\text{Gain increase}=10\log_{10}(4)\approx6\text{ dB}.$$

> **Key Information:** Doubling frequency increases an ideal parabolic reflector's gain by 6 dB. {{< link id="E9D01" >}}

The beam also narrows, so pointing becomes more demanding. A real dish must retain suitable surface accuracy and feed performance at the higher frequency for the ideal gain increase to hold.
