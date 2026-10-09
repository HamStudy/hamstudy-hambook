---
chapter: "6"
section: "6.8"
questions: ["E9G01", "E9G03", "E9G02", "E9G04", "E9G07", "E9G06", "E9G10", "E9G08", "E9G09", "E9G11", "E9G05"]
status: generated1
draft: true
---

### Section 6.8: Reading the Smith Chart

A Smith chart puts resistance, reactance, mismatch, and line length on one drawing. Its curved grid can look crowded until you follow one point at a time. Each point represents a complex impedance, just as $R+jX$ did in Chapter 2.

> **Key Information:** A Smith chart can determine impedance along transmission lines and show their impedance and SWR values. {{< link id="E9G01" >}} {{< link id="E9G03" >}}

The outer circle can resemble the antenna plots we just used, but it has a different job. Here you are following an impedance, not aiming a beam.

#### Two Families of Curves

On an ordinary rectangular impedance plot, resistance runs horizontally and reactance vertically. A Smith chart bends those coordinates into circles and arcs. *Select one resistance circle and one reactance arc; their intersection gives the impedance.*

![Figure E9-3, a normalized impedance Smith chart. A horizontal resistance axis runs from zero at the left edge through one at the center to infinity at the right edge. Constant-resistance circles touch the right edge and cross the horizontal axis at their labeled values, including 0.2, 0.5, 1, 2, and 5. Constant-reactance arcs run from the large outer circle toward the right edge. The upper half represents positive inductive reactance and the lower half negative capacitive reactance; the printed arc labels give magnitudes. The center represents a resistive load equal to the chosen reference impedance. No wavelength scales or added constant-SWR circles are shown in this simplified figure.](../../../hugo/static/figures/E9-3.svg)
{.img-centered .img-xlarge .img-bw caption="Figure E9-3: Resistance circles and reactance arcs."}

> **Key Information:**
> - A Smith chart's coordinate system uses resistance circles and reactance arcs. {{< link id="E9G02" >}}
> - Resistance and reactance are the two families that form its grid. {{< link id="E9G04" >}}
> - Each reactance arc contains points of constant reactance. {{< link id="E9G10" >}}

A constant-resistance circle does not have constant distance from the chart's center. Follow the circle marked 1: its resistance stays 1 while its reactance changes. That distinction will matter when we add SWR circles.

*The only straight line in Figure E9-3 is the horizontal diameter.* *Every point on it has zero reactance, so it represents pure resistance.* The left endpoint is a short circuit; the right endpoint is an open circuit. *The large outer circle represents pure reactance, with zero resistance.*

> **Key Information:** In Figure E9-3:
> - The only straight line is the resistance axis. {{< link id="E9G07" >}}
> - The large outer circle where the reactance arcs terminate is the reactance axis. {{< link id="E9G06" >}}

Positive, inductive reactance occupies the upper half. Negative, capacitive reactance occupies the lower half. The figure labels the magnitudes on both halves; the location supplies the sign.

#### Give the Center a Value

A printed chart need not be limited to 50-ohm systems. *Normalization* divides all impedances by a chosen reference $Z_0$. *The center, marked 1, then represents a resistance equal to $Z_0$ and zero reactance.*

> **Key Information:** A Smith chart is normalized by reassigning the prime center's impedance value. {{< link id="E9G08" >}}

For a 50-ohm system, divide $100+j50\ \Omega$ by 50. The result is $2+j1$. Find the resistance-2 circle and the positive-reactance-1 arc; their upper-half intersection represents the load. Multiply the chart values by 50 to return to ohms. If the reference were 75 ohms, the same chart point would mean $150+j75\ \Omega$.

At the center, $1+j0$ means a perfect match to the reference. A point's distance from the center represents the magnitude of its reflection coefficient. Points equally far from the center have the same mismatch, even when their resistance and reactance differ.

#### Following a Transmission Line

Draw a circle centered on the prime center through the load point. On an ideal lossless line, moving along the line changes reflection phase but not reflection magnitude. The impedance moves around that circle while SWR stays constant.

> **Key Information:**
> - Constant-SWR circles are a third family often added during matching-network design. {{< link id="E9G09" >}}
> - Smith-chart wavelength scales use fractions of transmission-line electrical wavelength. {{< link id="E9G11" >}}

Those scales appear around the rim of a full working chart; the simplified official figure omits them. Clockwise motion represents movement toward the generator. A full revolution corresponds to one-half wavelength of line, because a reflection accumulates phase on both the outward and return paths.

For a 100-ohm load on 50-ohm line, the normalized load is 2, on the horizontal axis to the right of center. Its SWR is 2:1. Move one-quarter wavelength toward the generator: that is half a turn around the constant-SWR circle. The new point is 0.5, or 25 ohms. Another quarter wavelength brings you back to 100 ohms. Impedance changes; the lossless line’s SWR does not.

![A simplified Smith-chart sketch shows a constant-SWR circle centered on the chart center. With 50-ohm normalization, a 100-ohm load lies on the circle to the right, and 25 ohms lies to the left. A clockwise arrow follows the lower half of the circle from 100 ohms to 25 ohms, representing one-quarter electrical wavelength toward the generator. Both points remain on the same 2-to-1 SWR circle.](/images/s6-8-swr-circle.svg)
{.img-centered .img-med caption="On this 50-ohm chart, a quarter-wave move toward the generator transforms 100 ohms to 25 ohms. Both points have 2:1 SWR. The faint outer circle is the chart boundary; the smaller circle is the added constant-SWR circle."}

#### Placing a Matching Stub

A parallel stub adds *admittance*, the reciprocal of impedance. Recall that parallel admittances add directly. Stub design therefore uses the chart's admittance interpretation to find a point where the real part is correct and a stub can cancel the remaining imaginary part.

> **Key Information:** A common Smith-chart use is finding the length and position of an impedance-matching stub. {{< link id="E9G05" >}}

A small worked example shows what the cancellation means. Suppose a chart or analyzer gives the main line's admittance at the chosen junction as $0.02+j0.02$ siemens. The chart has already done the impedance-to-admittance conversion for us.

The real part, 0.02 siemens, already corresponds to $1/0.02=50\ \Omega$. We need to cancel the $+j0.02$ part. A shorted one-eighth-wave stub of 50-ohm line presents $+j50\ \Omega$, so its admittance is $-j0.02$ siemens. Connected in parallel, the imaginary parts cancel and leave a 50-ohm resistive input.

*The chart provides a graphical route to that junction and stub length.* Once the electrical lengths are known, multiply the corresponding free-space lengths by the line's velocity factor before cutting physical cable. A correct position on paper still needs the correct kind of line on the bench.
