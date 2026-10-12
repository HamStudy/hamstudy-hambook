---
chapter: "7"
section: "7.1"
questions: ["E3B08", "E3B13", "E3C06", "E3A07", "E3A11", "E9A08"]
status: generated1
draft: true
---

### Section 7.1: Ground and Tropospheric Paths

Not every contact depends on the ionosphere. A UHF handheld's signal seldom reaches far past the radio horizon, while an AM broadcast station, at a much lower frequency, carries far beyond the horizon in daytime. Both signals stay near the ground; frequency sets their limits.

#### Along the Surface

The AM station's daytime signal travels mostly as a surface wave. Ground-wave propagation includes a surface wave that follows Earth's curvature. The wave drives currents in the ground, and the ground's resistance turns some of the wave's energy into heat. That loss grows as frequency increases. Seawater, a good conductor, supports much better paths than poor soil.

A vertically polarized wave's electric field stands perpendicular to the ground. A horizontal electric field lies along the conducting surface, which nearly shorts it out. That is why AM broadcast stations use tall vertical towers.

> **Key Information:**
> - The maximum range of ground-wave propagation decreases when the signal frequency is increased. {{< link id="E3B08" >}}
> - Ground-wave propagation supports vertical polarization. {{< link id="E3B13" >}}

#### A Horizon That Bends

By VHF, the surface wave dies out within a short distance, so terrestrial contacts rely on waves through the lower atmosphere. The air's refractive index normally decreases with height, so a wave travels slightly faster higher up. The top of the wavefront pulls ahead, bending the path gently downward and extending the usable horizon.

> **Key Information:** The VHF/UHF radio horizon is approximately 15 percent farther than the geographic horizon. {{< link id="E3C06" >}}

An antenna about 270 feet above smooth ground has a geographic horizon near 20 miles, so its radio horizon is about $20\times1.15=23$ miles. Hills, trees, buildings, and unusual weather can change the actual result.

#### Trapped in a Weather Layer

Usually that bending is gentle. When the refractive index falls sharply with height, the path can curve as fast as Earth does, keeping the signal within a layer instead of letting it escape upward. A temperature inversion, warmer air above cooler air, can form such a **tropospheric duct**. A sharp drop in humidity with height can too, where evaporation keeps the lowest air much moister than the air above.

A duct traps only waves that are short compared with its thickness. Ducts over water are often just tens of feet thick, which suits microwaves. The signal must also enter the layer, which depends on the duct's height and the antenna's position. Once trapped, a microwave signal can travel many times past the radio horizon.

> **Key Information:**
> - Atmospheric ducts capable of propagating microwave signals often form over large bodies of water. {{< link id="E3A07" >}}
> - A typical range for tropospheric duct propagation of microwave signals is 100 miles to 300 miles. {{< link id="E3A11" >}}

#### Fresnel Clearance

At microwave frequencies, seeing the other antenna does not always mean the path is clear enough. Energy reaches the receiver through a broad region around the line of sight. Where a detour adds less than half a wavelength to the trip, that energy arrives close enough in step to add together. That region is the **first Fresnel zone** (pronounced fray-NEL), and an obstruction inside it blocks part of the energy that adds up at the receiver.

The zone bulges outward between the antennas and narrows to nothing at each end. With a longer wavelength, a detour can swing farther out before it adds half a wavelength, so the zone grows. At the same point on the same path, its radius is proportional to the square root of wavelength. Among the common microwave bands below 6 GHz, 5.8 GHz has the shortest wavelength.

> **Key Information:** The 5.8 GHz band has the smallest first Fresnel zone. {{< link id="E9A08" >}}

For example, on the same path a 5.8 GHz zone has about $\sqrt{2.4/5.8}\approx0.64$ times the radius of a 2.4 GHz zone. A ridge can therefore clear one zone while intruding into the other.

![Two antennas have a clear horizontal line of sight above a ridge. A dashed oval outlines the larger first Fresnel zone at 2.4 GHz, and a solid oval outlines the smaller zone at 5.8 GHz. The ridge intrudes into the larger zone while remaining below the smaller one. At every position along the path, the smaller zone has about 64 percent of the larger zone’s radius. Vertical dimensions are exaggerated.](../../../images/s7-1-fresnel-clearance.svg)
{.img-centered .img-xlarge caption="A clear sightline is only part of the clearance check. This sketch exaggerates the vertical scale to show a ridge intruding into the 2.4 GHz zone but not the 5.8 GHz zone."}
