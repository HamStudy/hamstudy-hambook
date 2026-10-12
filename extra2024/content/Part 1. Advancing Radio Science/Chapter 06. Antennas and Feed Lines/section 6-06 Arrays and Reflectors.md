---
chapter: "6"
section: "6.6"
questions: ["E9E11", "E9C03", "E9C01", "E9C02", "E9D05", "E9D12", "E9D11", "E9D02", "E9D01"]
status: generated1
draft: true
---

### Section 6.6: Arrays and Reflectors

A Yagi favors one direction, and changing that direction means turning the antenna. Two fixed verticals can favor a direction too, then switch to another without moving; only their feed changes. In the pair, as in the Yagi, fields from separate elements meet at a distant point. They add in some directions and cancel in others. Spacing and the phase of each element's current decide which directions are which.

#### Feed Phase and Travel Phase

Here both verticals are driven elements. **Phasing lines**, lengths of feed line that delay the signal to one element, set the phase of each element's current. At a distant point, the phase difference between the two fields combines that feed delay with the extra distance one field travels. The pattern follows from the total.

The **array axis** is the line joining the antennas. Consider two quarter-wave verticals spaced half a wavelength apart, with equal currents in phase. Broadside to the axis, the travel distances are equal, so their fields add. Along the axis, the extra half wavelength of travel adds 180 degrees, so their fields cancel.

Now feed the same elements 180 degrees apart. Broadside, their fields cancel. Along the axis, a direction sometimes called **end-fire**, the extra travel delay makes up for the feed-phase difference, so the fields arrive in step and add.

> **Key Information:**
> - The purpose of using multiple driven elements connected through phasing lines is to control the antenna's radiation pattern. {{< link id="E9E11" >}}
> - Two 1/4-wavelength vertical antennas spaced 1/2-wavelength apart and fed in phase create a figure-eight pattern broadside to the axis of the array. {{< link id="E9C03" >}}
> - The same pair fed 180 degrees out of phase creates a figure-eight pattern oriented along the axis of the array. {{< link id="E9C01" >}}

![Two plan-view radiation patterns for identical pairs of quarter-wave verticals spaced half a wavelength apart. In both panels two dots represent the verticals along a horizontal array axis. With zero feed-phase difference, the figure-eight lobes point above and below that axis and nulls lie along it. With a 180-degree feed-phase difference, the lobes point left and right along the axis and the nulls lie broadside. The curves are simplified horizontal patterns calculated from spacing and feed phase for equal element currents, plotted as normalized field strength.](../../../images/s6-6-array-phase.svg)
{.img-centered .img-xlarge .img-mobile-full caption="Δφ is the feed-phase difference. The in-phase pair favors broadside directions; reversing the phase of one element favors directions along the array. Dots mark the verticals in this view from above. Curves show simplified horizontal patterns for equal element currents, not physical distances."}

Quarter-wave spacing and a 90-degree feed difference give another useful pattern. Along one direction, the travel delay makes up for the feed delay, so the fields arrive in step and add. In the opposite direction, the two phase differences total 180 degrees, so the fields cancel and produce a null. The favored direction points from the element whose feed leads toward the one that lags, so reversing which element leads reverses the pattern.

![A plan-view radiation pattern for two quarter-wave verticals spaced a quarter wavelength apart, with a 90-degree feed-phase difference. Two dots on a horizontal array axis mark the verticals. The left one is labeled leads and the right one lags, with a quarter-wavelength dimension between them. A heart-shaped cardioid is drawn centered on the midpoint between them, so its pinched point falls between the two dots and the leading element sits just outside the curve. Its single broad lobe extends to the right, beyond the lagging element, where an arrow marks the favored direction. To the left the response falls to zero, and an arrow pointing left marks the null. The curve is a simplified horizontal pattern for equal element currents. Its distance from the midpoint shows normalized field strength in each direction, not a physical distance, so the dots' positions relative to the curve have no meaning.](../../../images/s6-6-cardioid.svg)
{.img-centered .img-med .img-mobile-full caption="With quarter-wave spacing and a 90-degree feed difference, the pattern favors the direction from the leading element toward the lagging one and has a single null in the opposite direction."}

> **Key Information:** Two 1/4-wavelength vertical antennas spaced 1/4-wavelength apart and fed 90 degrees out of phase create a cardioid radiation pattern. {{< link id="E9C02" >}}

The depth of the null is a useful check on construction: amplitude or phase errors fill it in.

#### Phase From Parasitic Elements

A Yagi obtains useful phase differences without feeding every element. Only its driven element connects to the feed line. Fields from it induce currents in the parasitic elements, and those elements reradiate. The phase of each induced current depends on the element's length and spacing. An element longer than resonant length is inductive, so its current lags the voltage induced in it. A shorter element is capacitive, like the short whip in the previous section, so its current leads. As with the phased verticals, that phase and the spacing together decide on which side the fields add. That is why designers make a reflector longer than resonant length and a director shorter.

A two-element Yagi can use either one. A reflector usually sits around 0.15 to 0.2 wavelength from the driven element. A director does as well only at closer spacing, about 0.1 wavelength, where the feed resistance falls low enough to make matching harder.

> **Key Information:**
> - A Yagi's driven element is approximately 1/2 wavelength long. {{< link id="E9D05" >}}
> - The purpose of making a Yagi's parasitic elements either longer or shorter than resonance is control of phase shift. {{< link id="E9D12" >}}
> - Most two-element Yagis with normal spacing have a reflector instead of a director for higher gain. {{< link id="E9D11" >}}

#### Rotating the Polarization

A 90-degree phase difference can also set polarization. Circular polarization, often used for satellite work, comes from two perpendicular linear fields of equal strength, a quarter cycle apart, as [Section 6.1]({{% pageref "6.1" %}}) showed. Two Yagis can supply those fields when they share one boom with their elements at right angles. Their driven elements must sit at the same point along the boom, because an offset would add its own travel phase.

> **Key Information:** Two linearly polarized Yagi antennas can produce circular polarization when arranged on the same axis and perpendicular to each other, with the driven elements at the same point on the boom and fed 90 degrees out of phase. {{< link id="E9D02" >}}

#### Dish Gain and Frequency

A parabolic dish, the shape familiar from satellite TV, reflects energy from a feed at its focus into a narrow beam. Its gain is proportional to its area measured in square wavelengths, so the same dish has more gain on a higher band. Doubling frequency halves wavelength. The dish then spans twice as many wavelengths across, so its area in square wavelengths, and its gain, grow by a factor of four.

$$\text{Gain increase}=10\log_{10}(4)\approx6\text{ dB}.$$

> **Key Information:** Doubling the operating frequency increases the gain of an ideal parabolic reflector antenna by 6 dB. {{< link id="E9D01" >}}

A real dish delivers that full increase only if its surface accuracy and feed still perform well at the higher frequency. Its narrower beam also demands more careful pointing.
