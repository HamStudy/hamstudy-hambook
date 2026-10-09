---
chapter: "6"
section: "6.2"
questions: ["E9B07", "E9B01", "E9B02", "E9B03", "E9B05", "E9B06", "E9B04", "E9A12", "E9A03", "E9A02", "E9A06", "E9A07", "E9B09", "E9B10", "E9B11"]
status: generated1
draft: true
---

### Section 6.2: Gain and Antenna Patterns

A gain antenna sends more signal toward some places by sending less toward others. That trade is visible in its radiation pattern. A large gain number is little comfort if the other station sits in a null. The strongest direction is useful only if it points where the contact needs to go.

> **Key Information:** A lossless gain antenna and a lossless isotropic radiator driven by the same power radiate the same total power. {{< link id="E9B07" >}}

Gain describes strength in a direction relative to a reference antenna, not a multiplication of total energy. A pattern plot lets us inspect that distribution instead of relying on one gain number.

#### Reading the Free-Space Pattern

Figure E9-1 is a polar plot. Angles run around the outside; distance from the center represents relative signal strength in decibels. The outer edge is the peak reference, 0 dB. Moving inward means weaker radiation. The thick curve traces the antenna's response.

![Figure E9-1, a free-space antenna pattern plotted on a circular decibel grid. The main lobe points right at zero degrees and peaks at the outer reference circle. Its minus-3-dB crossings are near plus and minus 25 degrees, giving a 50-degree beamwidth. Response directly behind at 180 degrees is about 18 dB below the forward peak. The side response near plus or minus 90 degrees is about 14 dB below the peak. Smaller side and rear lobes show that the antenna also radiates away from its main direction.](../../../hugo/static/figures/E9-1.svg)
{.img-centered .img-xlarge .img-bw caption="Figure E9-1: Direction and relative strength in a free-space pattern."}

The broad outward bulge toward zero degrees is the *main lobe*. Smaller bulges are side or rear lobes. To find the 3 dB beamwidth, locate where the main lobe crosses the $-3$ dB circle on each side of its peak. *Those points are about $+25^\circ$ and $-25^\circ$, so the full width is $25-(-25)=50^\circ$.* A 3 dB decrease corresponds to half the power density, not half the plotted angle.

Front-to-back ratio compares the forward peak with the response directly behind it. Front-to-side ratio compares the forward response with the response 90 degrees to the side. Read both values on the decibel grid, then subtract. Keep a finger on the requested bearing while you do this; the deepest-looking notch may be at a different angle.

> **Key Information:** In Figure E9-1:
> - The 3 dB beamwidth is 50 degrees. {{< link id="E9B01" >}}
> - The front-to-back ratio is 18 dB. {{< link id="E9B02" >}}
> - The front-to-side ratio is 14 dB. {{< link id="E9B03" >}}

*For example, the forward reference is 0 dB and the rear response is about $-18$ dB. Their difference is $0-(-18)=18$ dB.* Do not confuse a deep null elsewhere in the pattern with the response in the specified direction.

#### Looking Above the Horizon

An azimuth pattern is a horizontal slice around the antenna. An elevation pattern is a vertical slice showing radiation at different angles above the horizon. Figure E9-2 includes the ground, so only the upper half of the circle appears.

![Figure E9-2, an elevation radiation pattern over real ground. The horizontal baseline is the horizon, with forward zero degrees to the right, 90 degrees overhead, and the rear horizon at 180 degrees to the left. The strongest forward lobe peaks only about 7.5 degrees above the horizon. Other weaker forward lobes rise at higher angles, separated by deep nulls. Small rear lobes are about 28 dB below the strongest forward response. Radial markings show minus 10, minus 20, minus 30, and minus 40 dB.](../../../hugo/static/figures/E9-2.svg)
{.img-centered .img-xlarge .img-bw caption="Figure E9-2: Elevation lobes produced over real ground."}

The longest lobe is close to the right-hand horizon. *Its peak lies halfway between zero and 15 degrees, so its elevation angle is about 7.5 degrees.* Follow the small rear lobe on the opposite side and compare its level with the forward peak to obtain the front-to-back ratio.

> **Key Information:** In Figure E9-2:
> - The plot is an elevation pattern. {{< link id="E9B05" >}}
> - Peak response occurs at 7.5 degrees elevation. {{< link id="E9B06" >}}
> - The front-to-back ratio is 28 dB. {{< link id="E9B04" >}}

These are different questions from beamwidth. A low takeoff angle tells where a lobe points; beamwidth tells how broad it is.

#### Naming the Gain Reference

*Gain in dBi uses the isotropic reference.* *Gain in dBd uses a half-wave dipole in free space.* The dipole's maximum gain is 2.15 dBi, so the same antenna has a number 2.15 smaller when stated in dBd:

$$G_{\text{dBd}}=G_{\text{dBi}}-2.15.$$

> **Key Information:** An antenna with 6 dB gain over isotropic has $6-2.15=3.85$ dB gain over a half-wave dipole. {{< link id="E9A12" >}}

The antenna did not change. Only the reference changed. Carry that reference into power calculations.

#### Power After Losses and Gain

Effective radiated power, or ERP, expresses directional performance using a dipole reference. Effective isotropic radiated power, or EIRP, uses the isotropic reference. *Each includes transmitter power, losses before the antenna, and antenna gain in the direction of interest.*

> **Key Information:** Effective radiated power takes account of the system's gains and losses. {{< link id="E9A03" >}}

ERP is an equivalent reference-antenna power in a direction. It can exceed transmitter output power because the antenna concentrates radiation; it does not represent extra energy summed over all directions.

Add the gain and subtract losses in decibels first. Then convert the net decibel change to a power multiplier:

$$P_{\text{equivalent}}=P_{\text{transmitter}}\times10^{G_{\text{net}}/10}.$$

A duplexer, which lets a repeater share an antenna between transmitter and receiver, has insertion loss. A circulator in the RF path can add loss too. Include each loss once.

For a 150-watt transmitter, 2 dB line loss, 2.2 dB duplexer loss, and 7 dBd antenna gain,

$$G_{\text{net}}=7-2-2.2=2.8\text{ dB},$$
$$ERP=150\times10^{2.8/10}\approx286\text{ W}.$$

The other examples use the same steps:

| Reference and transmitter | Net gain after losses | Equivalent power |
|---|---|---|
| ERP, 200 W | $10-4-3.2-0.8=2$ dB | *$200\times10^{2/10}\approx317$ W* |
| EIRP, 200 W | $7-2-2.8-1.2=1$ dB | *$200\times10^{1/10}\approx252$ W* |
{.table-scroll}

> **Key Information:**
> - 150 W, 2 dB feed line loss, 2.2 dB duplexer loss, and 7 dBd gain give 286 W ERP. {{< link id="E9A02" >}}
> - 200 W, 4 dB feed line loss, 3.2 dB duplexer loss, 0.8 dB circulator loss, and 10 dBd gain give 317 W ERP. {{< link id="E9A06" >}}
> - 200 W, 2 dB feed line loss, 2.8 dB duplexer loss, 1.2 dB circulator loss, and 7 dBi gain give 252 W EIRP. {{< link id="E9A07" >}}

#### A Modeled Pattern

A wire-antenna model divides conductors into small pieces called segments. The program solves for their currents and combines the fields those currents produce. The common *Method of Moments* turns the field relationships into a set of equations a computer can solve.

> **Key Information:**
> - Method of Moments analysis is commonly used to model antennas. {{< link id="E9B09" >}}
> - In the basic Method of Moments model, a wire becomes a series of segments, each with a uniform current value. {{< link id="E9B10" >}}
> - Fewer than ten segments per half-wavelength can produce an incorrect calculated feed point impedance. {{< link id="E9B11" >}}

That segment description is an introductory model; practical programs can use more detailed current shapes within a segment. The lesson remains: too few segments leave the program unable to represent changes in current well enough. More detail also cannot repair wrong wire dimensions, missing conductors, or an unsuitable ground model. Before trusting a beautiful plot, check what you told the model about the actual antenna and its surroundings.
