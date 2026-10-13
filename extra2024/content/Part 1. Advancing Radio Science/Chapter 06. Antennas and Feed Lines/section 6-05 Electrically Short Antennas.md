---
chapter: "6"
section: "6.5"
questions: ["E9D10", "E9D09", "E9D04", "E9D03", "E9D07", "E9D08", "E9D06"]
status: generated1
---

### Section 6.5: Electrically Short Antennas

A full-size quarter-wave vertical for 40 meters stands about 10 meters (33 feet) tall. A loading coil lets a mobile whip a fraction of that height resonate on the same band, yet the whip may turn most of the power it accepts into heat. The efficiency ratio from [Section 6.1]({{% pageref "6.1" %}}) shows why, and what helps.

#### Resonance Without Full Size

A base-fed whip used below its natural resonant frequency is electrically short and has capacitive reactance. The lower the frequency, the smaller a fraction of a wavelength the same whip becomes, and the less it radiates for a given current. Loss resistance then makes up a larger share of the total.

> **Key Information:** The radiation resistance of a base-fed whip antenna decreases below its resonant frequency. {{< link id="E9D10" >}}

For example, a radiation resistance of 2 Ω with 8 Ω of loss gives $2/(2+8)=20\%$ efficiency. If radiation resistance falls to 1 Ω while losses stay at 8 Ω, efficiency drops to $1/9\approx11\%$. Low feed resistance by itself does not signal good performance.

A loading coil in series supplies inductive reactance. If the whip presents $-j200\ \Omega$, a coil supplying $+j200\ \Omega$ at the design frequency brings the net reactance to zero. The coil stores magnetic energy; it doesn't replace the missing length of radiating wire. Its resistance also dissipates power, so lower resistance gives the same tuning with less heating.

> **Key Information:**
> - The function of a loading coil in an electrically short antenna is to resonate the antenna by cancelling the capacitive reactance. {{< link id="E9D09" >}}
> - Antenna loading coils should have a high ratio of reactance to resistance to maximize efficiency. {{< link id="E9D04" >}}

That ratio is the coil's Q, the series $Q=X/R$ from [Section 2.4]({{% pageref "2.4" %}}). A coil supplying 200 Ω of reactance with 1 Ω of resistance has a Q of 200. The same reactance with 4 Ω of resistance gives Q 50 and four times the loss.

#### Moving Current Up the Radiator

With the coil at the base, the current in the whip above it falls steadily to zero at the tip. Moving the coil upward lets the whole lower section carry nearly full current. More current over more of the height radiates more power for the same feed current, which raises radiation resistance and with it the efficiency ratio. Too near the tip, the coil needs much more inductance, adding loss.

A **capacitance hat**, also called a capacity hat, is the usual form of top loading. Its conducting area at the top keeps current high along nearly the whole vertical portion. It also reduces the inductance needed for resonance, so coil loss falls. The support must carry the hat's weight and wind load.

![Three short vertical radiators stand side by side above a ground line, each fed at its base. A shaded profile to the right of each radiator shows the current at each height, and every profile starts with the same current at the feed point. At left, with a loading coil at the base, the current falls steadily from the top of the coil to zero at the tip, forming a triangle. In the middle, with the coil near the center, the current stays nearly constant from the base up to the coil, then falls to zero at the tip, enclosing a larger area. At right, with a capacitance hat at the top and no coil, the current stays high all the way up and is still well above zero where the radiator meets the hat, enclosing the largest area.](../../../images/s6-5-loading-current.svg)
{.img-centered .img-xlarge .img-mobile-full caption="Current along a short vertical with the same feed-point current. Moving the coil up, or adding a top hat, keeps more current over more of the radiator, which raises radiation resistance."}

> **Key Information:**
> - Near the center of the vertical radiator is the most efficient location for a loading coil on an electrically short whip. {{< link id="E9D03" >}}
> - An advantage of top loading an electrically short HF vertical antenna is improved radiation efficiency. {{< link id="E9D07" >}}

#### A Narrow Match

Mobile HF operators often retune after moving only a short way across a band; on 75 meters, a few tens of kilohertz can be enough. A small loaded antenna stores much more energy than it radiates or loses each cycle, which gives it a high antenna Q. Its reactance changes quickly away from resonance, as in any high-Q resonant circuit.

> **Key Information:**
> - As the Q of an antenna increases, SWR bandwidth decreases. {{< link id="E9D08" >}}
> - When one or more loading coils are used to resonate an electrically short antenna, SWR bandwidth decreases. {{< link id="E9D06" >}}

Coil Q and antenna Q answer different questions. A coil's Q compares its reactance with its own resistance, so higher is better. Adding any resistance lowers antenna Q, which widens the SWR curve, but only by turning more of the power into heat. By that measure, a dummy load is the broadest-band antenna of all.
