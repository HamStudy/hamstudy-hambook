---
chapter: "6"
section: "6.5"
questions: ["E9D10", "E9D09", "E9D04", "E9D03", "E9D07", "E9D08", "E9D06"]
status: generated1
draft: true
---

### Section 6.5: Electrically Short Antennas

A short whip makes an HF installation possible where a full-sized antenna will not fit. You can bring it to resonance, but that does not give it the efficiency of a full-sized antenna. Loading fixes the reactance. The remaining radiation resistance and loss resistance decide where the accepted power goes.

#### Resonance Without Full Size

A base-fed whip used below its natural resonant frequency is electrically short and has capacitive reactance. *Its radiation resistance also falls as frequency falls.* Loss resistance then accounts for a larger share of the total unless the design reduces those losses.

> **Key Information:** A base-fed whip's radiation resistance decreases below its resonant frequency. {{< link id="E9D10" >}}

For example, a radiation resistance of 2 ohms with 8 ohms of loss gives $2/(2+8)=20\%$ efficiency. If radiation resistance falls to 1 ohm while losses stay at 8 ohms, efficiency becomes $1/9\approx11\%$. Low feed resistance by itself is not a sign of good performance.

A loading coil supplies inductive reactance. If the short antenna has $-j200\ \Omega$ of capacitive reactance, a suitable coil supplies $+j200\ \Omega$ to cancel it at the design frequency.

> **Key Information:** A loading coil resonates an electrically short antenna by canceling capacitive reactance. {{< link id="E9D09" >}}

The coil does not replace a missing length of straight radiating wire. It stores magnetic energy, and its resistance also dissipates some power. For a required reactance, lower coil resistance means less heating.

> **Key Information:** Loading coils should have a high reactance-to-resistance ratio to maximize efficiency. {{< link id="E9D04" >}}

*That ratio is the coil's Q.* A coil supplying 200 ohms of reactance with 1 ohm of resistance has a Q of 200. The same reactance with 4 ohms of resistance gives Q 50 and greater loss.

#### Moving Current Up the Radiator

A base loading coil is convenient, but the current in the short whip above it falls toward zero at the tip. Moving the loading coil upward allows more of the lower radiator to carry substantial current. Moving it too near the tip demands a larger inductance and creates other losses and practical difficulties.

> **Key Information:** Near the center of an electrically short vertical radiator is the most efficient loading-coil location. {{< link id="E9D03" >}}

A *capacity hat* adds conducting area at the top. This top loading lets more current flow along the vertical portion and reduces the inductive loading needed for resonance. The support must carry the hat, but *the electrical benefit is improved efficiency.*

> **Key Information:** Top loading an electrically short HF vertical improves radiation efficiency. {{< link id="E9D07" >}}

#### A Narrow Match

A small loaded antenna stores substantial energy compared with the energy it radiates or loses each cycle. That means high antenna Q. Its reactance changes rapidly as frequency moves away from resonance, so the feed impedance departs from the matched value over a relatively small frequency range.

> **Key Information:**
> - Increasing antenna Q decreases SWR bandwidth. {{< link id="E9D08" >}}
> - Loading an electrically short antenna with one or more coils decreases its SWR bandwidth. {{< link id="E9D06" >}}

Coil Q and antenna Q answer different questions. *High coil Q reduces loss for a given reactance.* *High antenna-system Q means a narrow useful bandwidth.* Adding resistance could broaden the SWR curve, but it would do so by wasting power. If a small antenna claims an unusually broad match, ask where the accepted power goes. Some of that pleasing SWR curve may come from loss.
