---
chapter: "6"
section: "6.5"
questions: ["E9D10", "E9D09", "E9D04", "E9D03", "E9D07", "E9D08", "E9D06"]
status: generated1
draft: true
---

### Section 6.5: Electrically Short Antennas

Once a short whip resonates on the chosen HF band, there is still useful work to do. Coil loss, coil position, and current distribution determine how much of the accepted power it radiates. Improving those can help a compact antenna without making it full-sized.

#### Resonance Without Full Size

A base-fed whip used below its natural resonant frequency is electrically short and has capacitive reactance. *Its radiation resistance also falls as frequency falls.* Loss resistance then accounts for a larger share of the total unless the design reduces those losses.

> **Key Information:** A base-fed whip's radiation resistance decreases below its resonant frequency. {{< link id="E9D10" >}}

For example, a radiation resistance of 2 ohms with 8 ohms of loss gives $2/(2+8)=20\%$ efficiency. If radiation resistance falls to 1 ohm while losses stay at 8 ohms, efficiency becomes $1/9\approx11\%$. Low feed resistance by itself is not a sign of good performance.

The loading coil cancels that capacitive reactance: for $-j200\ \Omega$ at the antenna, it supplies $+j200\ \Omega$ at the design frequency.

> **Key Information:** A loading coil resonates an electrically short antenna by canceling capacitive reactance. {{< link id="E9D09" >}}

After choosing the needed reactance, compare coil losses. The coil stores magnetic energy rather than replacing the missing length of radiating wire, and its resistance dissipates power. Lower resistance gives the same tuning effect with less heating.

> **Key Information:** Loading coils should have a high reactance-to-resistance ratio to maximize efficiency. {{< link id="E9D04" >}}

*That ratio is the coil's Q.* A coil supplying 200 ohms of reactance with 1 ohm of resistance has a Q of 200. The same reactance with 4 ohms of resistance gives Q 50 and greater loss.

#### Moving Current Up the Radiator

A base loading coil is convenient, but the current in the short whip above it falls toward zero at the tip. Moving the loading coil upward allows more of the lower radiator to carry substantial current. Moving it too near the tip demands a larger inductance and creates other losses and practical difficulties.

> **Key Information:** Near the center of an electrically short vertical radiator is the most efficient loading-coil location. {{< link id="E9D03" >}}

A *capacity hat* adds conducting area at the top. This top loading lets more current flow along the vertical portion and reduces the inductive loading needed for resonance. The support must carry the hat, but *the electrical benefit is improved efficiency.*

> **Key Information:** Top loading an electrically short HF vertical improves radiation efficiency. {{< link id="E9D07" >}}

#### A Narrow Match

An efficient loading system can still need frequent retuning as you move across a band. A small loaded antenna stores substantial energy compared with what it radiates or loses each cycle, giving it high antenna Q. Its reactance then changes rapidly away from resonance, so the match holds over a relatively narrow frequency range.

> **Key Information:**
> - Increasing antenna Q decreases SWR bandwidth. {{< link id="E9D08" >}}
> - Loading an electrically short antenna with one or more coils decreases its SWR bandwidth. {{< link id="E9D06" >}}

Coil Q and antenna Q answer different questions. *High coil Q reduces loss for a given reactance.* *High antenna-system Q means a narrow useful bandwidth.* Adding resistance could broaden the SWR curve, but it would do so by wasting power. If a small antenna claims an unusually broad match, ask where the accepted power goes. Some of that pleasing SWR curve may come from loss.
