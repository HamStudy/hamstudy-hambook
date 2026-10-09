---
chapter: "6"
section: "6.6"
questions: ["E9E11", "E9C03", "E9C01", "E9C02", "E9D05", "E9D12", "E9D11", "E9D02", "E9D01"]
status: generated1
draft: true
---

### Section 6.6: Arrays and Reflectors

A fixed pair of verticals can favor one direction or another without either antenna moving. The change comes from how their fields arrive together at a distant point: reinforcement in one direction, cancellation in another. Element spacing and feed phase give us control over that pattern.

#### Feed Phase and Travel Phase

To establish the needed delay between driven elements, we can feed them through phasing lines. The phase difference seen at a distant receiver combines that feed delay with the extra travel distance from one element. The pattern follows from the total.

> **Key Information:** Multiple driven elements connected through phasing lines control an antenna's radiation pattern. {{< link id="E9E11" >}}

The *array axis* is the line joining the antennas. Viewed from above, it lies across the ground between the verticals. Consider two quarter-wave verticals spaced half a wavelength apart, with equal currents in phase. Broadside to the line joining them, the travel distances are equal, so their fields add. Along that line, the extra half-wavelength travel adds 180 degrees, so their fields cancel. *The result is a broadside figure-eight pattern.*

Now feed the same elements 180 degrees apart. Broadside, their fields cancel. Along the axis, the extra travel phase cancels the feed-phase difference, and the fields add. *The figure eight turns to point along the array.*

> **Key Information:** For two quarter-wave verticals spaced one-half wavelength apart:
> - In-phase feeding produces a figure eight broadside to the array's axis. {{< link id="E9C03" >}}
> - Feeding 180 degrees out of phase produces a figure eight along the array's axis. {{< link id="E9C01" >}}

![Two plan-view radiation patterns for identical pairs of quarter-wave verticals spaced half a wavelength apart. In both panels two dots represent the verticals along a horizontal array axis. With zero feed-phase difference, the figure-eight lobes point above and below that axis and nulls lie along it. With a 180-degree feed-phase difference, the lobes point left and right along the axis and the nulls lie broadside. The curves are simplified horizontal array-factor patterns for equal element currents, plotted as normalized field strength.](/images/s6-6-array-phase.svg)
{.img-centered .img-xlarge caption="Same spacing, different feed phase. The in-phase pair favors broadside directions; reversing the phase of one element favors directions along the array. Dots mark the verticals in this view from above. Curves show simplified horizontal patterns for equal element currents, not physical distances."}

Quarter-wave spacing and a 90-degree feed difference give another useful pattern. Along one direction, travel and feed phase cancel; along the opposite direction, they add to 180 degrees. One direction is strong and the opposite direction has a null. *The resulting heart-shaped pattern is called a cardioid.*

> **Key Information:** Two quarter-wave verticals spaced one-quarter wavelength apart and fed 90 degrees out of phase produce a cardioid pattern. {{< link id="E9C02" >}}

Reversing which element leads reverses the favored direction. The null is a useful check on your construction: amplitude or phase errors fill it in. Equal feed-line lengths alone do not guarantee the intended result if the elements and their surroundings differ.

#### Phase From Parasitic Elements

A Yagi obtains useful phase differences without separate feed lines to every element. *Its directly fed element is approximately half a wavelength long.* Fields from it induce currents in the parasitic elements, whose phase and amplitude depend on their lengths and spacing. Their reradiated fields then reshape the combined pattern.

> **Key Information:**
> - A Yagi's driven element is approximately one-half wavelength long. {{< link id="E9D05" >}}
> - Making parasitic elements longer or shorter than resonance controls their phase shift. {{< link id="E9D12" >}}

A reflector is normally longer than resonant length; a director is shorter. Those names describe their role in the combined field. The reflector does not act as a solid metal wall, and the director has no feed line pushing power into it.

> **Key Information:** For a two-element Yagi with normal spacing, a reflector is preferred to a director for higher gain. {{< link id="E9D11" >}}

Spacing, tuning, gain, and front-to-back ratio interact. That comparison does not mean every possible two-element director design has lower gain. A designer may trade some maximum forward gain for a better rear null or a wider operating range.

#### Rotating the Polarization

A Yagi pair can also control polarization. To produce a rotating field, combine two perpendicular linear fields with equal amplitudes, 90 degrees apart in phase. When one field is at its maximum, the other passes through zero; a quarter-cycle later, their roles reverse. Their combined electric field rotates.

> **Key Information:** To obtain circular polarization from two linear Yagis, place them on the same axis, perpendicular to each other, with their driven elements at the same point along the boom, and feed them 90 degrees out of phase. {{< link id="E9D02" >}}

Equal amplitudes are also needed for ideal circular polarization. If the amplitudes or timing are wrong, the field generally becomes elliptical. Spatial placement matters because a displacement along the boom adds its own travel phase.

#### Dish Gain and Frequency

A dish used on two bands can have different gain on each even though its physical size stays the same. The parabolic reflector directs energy from its feed into a narrow beam, and its gain depends on aperture size in wavelengths. With unchanged efficiency, doubling frequency halves wavelength. The dish becomes twice as wide in wavelengths and four times as large in wavelength-squared area.

$$\text{Gain increase}=10\log_{10}(4)\approx6\text{ dB}.$$

> **Key Information:** Doubling frequency increases an ideal parabolic reflector's gain by 6 dB. {{< link id="E9D01" >}}

The beam also narrows, so pointing becomes more demanding. A real dish must retain suitable surface accuracy and feed performance at the higher frequency for the ideal gain increase to hold.
