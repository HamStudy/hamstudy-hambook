---
chapter: "7"
section: "7.2"
questions: ["E3A06", "E3B05", "E3B06", "E3B07", "E3B12", "E3B10", "E3B01", "E3B02", "E3B03", "E3B04", "E3B09", "E3B11"]
status: generated1
draft: true
---

### Section 7.2: Ionospheric Paths

A conversation with a distant station on 15 meters can sink into the noise around sunset, though neither operator has touched a knob. A different band may save the contact, or a different route may work. Choosing well means looking at conditions along the whole path.

#### Keeping a Path Open

After sunset, ionization falls, and so does the path's maximum usable frequency (MUF). The D region fades too, so the lower bands lose their daytime absorption.

> **Key Information:** To continue a long-distance contact when the MUF for that path decreases due to darkness, switch to a lower-frequency HF band. {{< link id="E3A06" >}}

If 21 MHz no longer bends back to the other station, 14 MHz may still return. More power won't rescue the path, because the ionosphere bends a 1,500 W signal no more than a 100 W one.

#### Darkness and the Long Way Around

The fading D region matters most on 160 meters, where daytime absorption blocks distant paths. An early sunset at your location does not remove daytime absorption thousands of miles away.

> **Key Information:** A path entirely in darkness is most likely to support long-distance propagation on 160 meters. {{< link id="E3B05" >}}

When the short route won't work, **long-path propagation** may offer another chance. It follows the longer arc of the same great circle, so you point a directional antenna roughly 180 degrees away from the short-path heading.

A long path covers more than half of Earth's circumference, so it usually crosses both daylight and darkness. On 160 and 80 meters, the sunlit part adds heavy D-region absorption. On 10 and 6 meters, the dark part usually drops the MUF below the band. That leaves the middle of HF.

> **Key Information:** Long-path propagation is most frequent on the 40-meter and 20-meter bands. {{< link id="E3B06" >}}

#### Fewer Hops, Less Loss

A long path takes many hops. A ray launched at a low angle rises gradually, so it covers more ground before it reaches the ionosphere, and as much again on the way down.

> **Key Information:** Lowering a signal's transmitted elevation angle increases the distance covered by each hop in ionospheric HF skip propagation. {{< link id="E3B07" >}}

Fewer hops then cover the same distance, which is why DXers raise their antennas for the low-angle lobes from the previous chapter. In an ordinary multi-hop path, the signal comes back to Earth, reflects from the ground, and travels up again. Every ground reflection loses some energy, and the trips down through the absorbing D region and back up lose more.

Real ionospheric regions can tilt, though. A ray refracted at one point may then meet the layer again before it reaches the ground. It crosses beneath the curved ionosphere like a chord joining two points on a circle, which gives **chordal-hop propagation** its name.

![Two side-by-side cross sections, each showing a curved Earth with a thin D region shaded just above the surface and the F region shaded higher up. Heights are exaggerated. At left, labeled multi-hop, a ray leaves one station, rises to the F region, comes back down to the ground at the midpoint, reflects, rises to the F region again, and comes down at the far station. A circle marks the ground reflection, and red dots mark the four places where the ray passes through the D region. At right, labeled chordal hop, the ray rises to the F region, crosses a straight chord beneath the curved F region to a second point in it, and then comes down at the far station. It never touches the ground between the stations, and red dots show only two passes through the D region.](../../../images/s7-2-chordal-hop.svg)
{.img-centered .img-xlarge .img-mobile-full caption="An ordinary two-hop path reflects from the ground and passes through the absorbing D region four times. A chordal hop travels between two points in the F region and passes through the D region only twice."}

> **Key Information:**
> - Chordal-hop propagation is successive ionospheric refractions without an intermediate reflection from the ground. {{< link id="E3B12" >}}
> - With chordal-hop propagation, the signal experiences less loss compared to multi-hop propagation, which uses Earth as a reflector. {{< link id="E3B10" >}}

#### Across the Magnetic Equator

Near the **geomagnetic equator**, where Earth's magnetic field runs level with the ground, the daytime ionosphere takes a shape that suits such hops. Ionization collects into two dense bands roughly 10 to 20 degrees north and south of that line. The line follows the field rather than the map, so it wanders north and south of the geographic equator.

A VHF signal can refract from one band to the other without touching the ground, much like a chordal hop. This is **transequatorial propagation**, or TEP. It works best when the stations sit on opposite sides, about equally far from that line, so the signal bent by one band reaches the matching part of the other.

![A map-style sketch. A dashed straight line across the middle is the geographic equator. A solid curved line, the magnetic equator, runs above it on the left and crosses below it on the right. Two shaded bands labeled dense band follow the magnetic equator, one on each side, with a clear gap between each band and the line. An orange path joins station A, at the outer edge of the northern band, to station B, at the outer edge of the southern band. It crosses the magnetic equator at a right angle, marked with a small square, so it is tilted away from north-south. A and B are the same distance from the magnetic equator. A dimension line beside the path is labeled 2,000 to 3,000 miles.](../../../images/s7-2-tep-geometry.svg)
{.img-centered .img-large .img-mobile-full caption="A TEP path links matching points in the two dense bands."}

The bands build through the day and peak in the afternoon. In the evening a second type, evening TEP, rides on long, uneven patches of ionization stretched along the magnetic field.

> **Key Information:**
> - Transequatorial propagation is most likely between points separated by 2,000 miles to 3,000 miles over a path perpendicular to the geomagnetic equator. {{< link id="E3B01" >}}
> - The approximate maximum range for signals using transequatorial propagation is 5,000 miles. {{< link id="E3B02" >}}
> - Transequatorial propagation is most likely to occur in the afternoon or early evening. {{< link id="E3B03" >}}

Real paths vary, and afternoon TEP often runs somewhat longer than 3,000 miles.

#### Two Waves in One Path

The magnetic field also changes how a wave travels through the ionosphere: the ionized medium splits it into two modes, the **ordinary** and **extraordinary** waves. They follow slightly different paths. In each, the electric field rotates as the wave travels, and its tip traces an ellipse.

> **Key Information:** Extraordinary and ordinary waves are independently propagating, elliptically polarized waves created in the ionosphere. {{< link id="E3B04" >}}

The two waves reach the receiver with a shifting phase difference, so their combined polarization keeps changing. That is one cause of fading. The shifting polarization also means vertical and horizontal antennas both work for HF skywave. A vertical in a small yard and a dipole strung between two trees can both work the same distant station.

#### Dense Patches in the E Region

Six meters can sit silent for hours, then fill with strong signals from half a continent away, then go quiet again. That is sporadic E, often written $E_s$, and a big reason hams call 6 meters the Magic Band. Thin, dense patches of ionization form within the E region, drift, and fade. While they last, they can return frequencies that would otherwise pass through, including VHF. Sporadic E can't be scheduled, but seasonal and daily patterns suggest when to listen.

> **Key Information:**
> - Sporadic-E propagation is most likely to occur around the solstices, especially the summer solstice. {{< link id="E3B09" >}}
> - Sporadic-E propagation is most likely to occur between sunrise and sunset. {{< link id="E3B11" >}}

A smaller peak comes near the winter solstice, and nighttime openings occur too.
