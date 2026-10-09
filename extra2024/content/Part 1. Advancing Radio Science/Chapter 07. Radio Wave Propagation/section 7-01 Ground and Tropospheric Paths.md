---
chapter: "7"
section: "7.1"
questions: ["E3B08", "E3B13", "E3C06", "E3A07", "E3A11", "E9A08"]
status: generated1
draft: true
---

### Section 7.1: Ground and Tropospheric Paths

The geographic horizon is not always the end of a radio path. A surface wave can follow the ground, and the lower atmosphere can bend a wave beyond the straight-line horizon. These are different mechanisms, with different frequency limits.

#### Along the Surface

*Ground-wave propagation includes a surface wave that follows Earth's curvature.* Interaction with the ground absorbs energy, and that loss grows as frequency increases. Conductive surfaces such as seawater support better paths than poorly conducting ground.

> **Key Information:**
> - Increasing frequency decreases the maximum range of ground-wave propagation. {{< link id="E3B08" >}}
> - Ground-wave propagation supports vertical polarization. {{< link id="E3B13" >}}

A vertically polarized wave has its electric field perpendicular to the ground. A horizontally polarized surface wave suffers heavy loss because its electric field drives currents along the conducting surface. Ground wave is therefore most useful at lower frequencies, where it can extend well beyond an optical line of sight. Raising frequency eventually makes other paths more useful.

#### A Horizon That Bends

Most familiar VHF and UHF terrestrial contacts use direct and ground-reflected waves through the lower atmosphere. Atmospheric refractive index normally decreases with height, bending radio paths slightly downward. That extends the usable horizon compared with a straight geometric ray.

> **Key Information:** The VHF/UHF radio horizon is approximately 15% farther away than the geographic horizon. {{< link id="E3C06" >}}

For an idealized location with a 20-mile geographic horizon, that estimate gives $20\times1.15=23$ miles for the radio horizon. Use that 23-mile estimate as a starting point, not a promise from the repeater. Hills, trees, buildings, and unusual weather can change the actual result.

#### Trapped in a Weather Layer

Temperature and moisture sometimes change sharply with height. The resulting refractive-index gradient can bend a microwave signal enough to keep it within a layer rather than letting it escape upward. This is *tropospheric ducting*, named for the lower atmosphere where weather occurs.

A temperature inversion, with warmer air above cooler air, can help establish such conditions. Moisture gradients over water can do so too. The duct's height and the antenna's position affect whether the signal enters it.

> **Key Information:**
> - Microwave-supporting atmospheric ducts often form over large bodies of water. {{< link id="E3A07" >}}
> - A typical microwave tropospheric-duct range is 100 to 300 miles. {{< link id="E3A11" >}}

A 200-mile microwave contact during a duct opening does not establish an everyday 200-mile path. The quoted range is typical, not a hard maximum, and an inversion alone does not guarantee an opening. The weather layer must suit the frequency and both stations’ positions.

#### Fresnel Clearance

At microwave frequencies, seeing the other antenna does not always mean the path is clear enough. Waves passing near an obstruction can diffract and combine with the direct signal. The *first Fresnel zone* describes a region around the direct path where obstructions can have a strong effect.

This zone bulges outward between the antennas and narrows near each end. Its size depends on the path distances and wavelength. *At the same point on the same path, its radius is proportional to the square root of wavelength.* *Higher frequency means shorter wavelength and a smaller zone.*

> **Key Information:** Of 900 MHz, 2.4 GHz, 3.4 GHz, and 5.8 GHz, the 5.8 GHz band has the smallest first Fresnel zone. {{< link id="E9A08" >}}

For example, on the same path a 5.8 GHz zone has about $\sqrt{2.4/5.8}\approx0.64$ times the radius of a 2.4 GHz zone. A ridge can therefore clear one zone while intruding into the other.

![Two antennas have a clear horizontal line of sight above a ridge. A dashed oval outlines the larger first Fresnel zone at 2.4 GHz, and a solid oval outlines the smaller zone at 5.8 GHz. The ridge intrudes into the larger zone while remaining below the smaller one. At every position along the path, the smaller zone has about 64 percent of the larger zone’s radius. Vertical dimensions are exaggerated.](/images/s7-1-fresnel-clearance.svg)
{.img-centered .img-xlarge caption="A clear sightline is only part of the clearance check. On the same path, 5.8 GHz has a smaller first Fresnel zone than 2.4 GHz. This sketch exaggerates the vertical scale to show a ridge intruding into the larger zone."}

Fresnel clearance is a requirement along the path, not a separate propagation mode.
