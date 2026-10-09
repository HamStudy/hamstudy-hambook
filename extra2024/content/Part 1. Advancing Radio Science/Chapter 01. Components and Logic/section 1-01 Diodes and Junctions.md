---
chapter: "1"
section: "1.1"
questions: ["E6A02", "E6A04", "E6A03", "E6B01", "E6B02", "E6B08", "E6B06", "E6B09", "E6B10", "E6B04", "E6B05", "E6B11", "E6B03", "E6B07"]
status: generated1
draft: true
---

### Section 1.1: Diodes and Junctions

A diode that works well in a power-supply rectifier may be a poor choice for an RF detector or tuning circuit. Forward voltage drop, junction capacitance, and reverse-bias behavior determine whether it fits the job. Those differences begin inside the junction.

#### Building a Junction

Inside a PN junction, the available charge carriers determine how current can flow. Adding small amounts of other elements to a pure semiconductor changes those carriers, a process called *doping*. *In N-type material, added donor atoms provide extra free electrons.* P-type material has *holes*: missing electrons in the crystal's bonds that behave as movable positive charge carriers. *An acceptor atom accepts an electron into a bond, leaving a hole available to move elsewhere in the crystal.*

> **Key Information:**
> - N-type semiconductor material contains excess free electrons. {{< link id="E6A02" >}}
> - An impurity atom that adds holes is an acceptor impurity. {{< link id="E6A04" >}}

Electrons are the majority carriers in N-type material, while holes are the majority carriers in P-type. Small numbers of the opposite carrier, called minority carriers, remain in each. Join the two materials and carriers diffuse across their boundary and recombine. This leaves a *depletion region* with few mobile carriers and an electric field that opposes further movement. A diode's P side is its anode; its N side is its cathode.

Forward bias, with the anode positive relative to the cathode, reduces that barrier. This is how the applied DC voltage or current—the *bias*—sets the diode's operating condition. *Reverse bias pulls the majority carriers away from the junction.*

> **Key Information:** Reverse bias separates holes in the P-type material from electrons in the N-type material, widening the depletion region and preventing normal conduction through a PN-junction diode. {{< link id="E6A03" >}}

![Two continuous PN semiconductor bars compare bias conditions. In each bar, P material is on the left, N material on the right, and a shaded band straddles the junction. The left bar has a positive contact on P and a negative contact on N. Arrows point holes and electrons toward its narrow depletion band. The right bar reverses those contact polarities. Arrows point majority carriers away from its wider depletion band. Holes are open circles with plus signs; electrons are filled circles with minus signs. A bracket labeled W marks each depletion width. The shaded band remains part of the semiconductor, not an air gap. Widths and carrier positions are qualitative.](../../../images/s1-1-junction-bias.svg)
{.img-centered .img-xlarge .img-mobile-full caption="Forward bias (left) narrows the depletion region; reverse bias (right) widens it. W marks its width. Open + circles represent holes; filled − circles represent electrons. Arrows show majority-carrier movement as bias is applied, not a continuous reverse current. The shaded region is still semiconductor."}

*Reverse bias therefore keeps an ordinary diode from conducting, apart from a small leakage current.*

#### Holding a Reference Voltage

Some circuits need a reference voltage that stays nearly fixed even when the current changes. A *Zener diode* provides one by operating in a region that ordinary diodes usually avoid. Raise the reverse voltage far enough and a junction reaches *breakdown*, where current can increase greatly. A Zener is designed to work in this region with its current limited.

*Over its rated operating range, a substantial change in current causes only a small change in voltage.* A series resistor or other current-limiting circuit keeps the diode within its operating range.

> **Key Information:** A Zener diode's most useful characteristic is a nearly constant voltage drop under conditions of varying current. {{< link id="E6B01" >}}

#### Reducing Rectifier Loss

A conducting diode still has a voltage drop across it, so it uses some of the power we want to deliver to the load. The loss is voltage drop multiplied by current. At 1 A, for example, a 0.7 V drop dissipates 0.7 W, while a 0.3 V drop dissipates only 0.3 W.

*A Schottky diode reduces this loss with a lower forward voltage drop.* *It uses a metal-semiconductor junction rather than a PN junction.*

> **Key Information:**
> - A Schottky barrier diode is a metal-semiconductor junction. {{< link id="E6B08" >}}
> - Its lower forward voltage drop can make it a better power-supply rectifier than a silicon PN-junction diode. {{< link id="E6B02" >}}

Rectification can also help us measure a radio-frequency (RF) signal: it can produce a voltage that follows the signal's strength. A *detector* extracts information or a level from RF. *Small Schottky devices respond well at high frequencies, making them useful as VHF/UHF detectors or mixers.* *Point-contact diodes, made with a fine contact against a semiconductor, also serve as RF detectors.* A *mixer* has a different job: it combines signals to produce new frequencies, as we will examine in Chapter 4.

> **Key Information:** Schottky diodes are commonly used as VHF/UHF mixers or detectors. Point-contact diodes are also used as RF detectors. {{< link id="E6B06" >}} {{< link id="E6B09" >}}

On a schematic, the cathode bar helps you tell these diodes apart. *The Schottky's small squared hooks differ from an ordinary straight bar and the Zener's angled ends.*

![Official Figure E6-2 shows eight semiconductor symbols. Symbol 6 is the Schottky diode, identified by the small squared hooks at the ends of its cathode bar. Symbol 3 has the bent cathode bar of a Zener diode, and symbol 5 has outward arrows representing light from an LED.](../../../hugo/static/figures/E6-2.svg)
{.img-centered .img-xlarge .img-bw caption="Figure E6-2: The cathode marking distinguishes the Schottky diode."}

> **Key Information:** Symbol 6 in Figure E6-2 is a Schottky diode. {{< link id="E6B10" >}}

#### Tuning and Switching

A receiver needs a way to change the frequency it favors. Changing the capacitance in a resonant circuit can tune it to a different frequency, and a diode can provide that change under voltage control. A reverse-biased junction has conducting regions separated by a depletion region, so it has capacitance. Increasing reverse bias widens the separation and reduces the capacitance.

*A varactor diode uses this changing capacitance to tune the circuit under voltage control.*

> **Key Information:** A varactor diode is designed for use as a voltage-controlled capacitor. {{< link id="E6B04" >}}

A control signal can also select an RF path without moving a contact. For that job, a *PIN diode* acts at RF as a resistance controlled by DC bias. It has a nearly intrinsic, or undoped, layer between its P and N regions. *More forward bias current stores more charge in that layer and lowers its RF resistance.* When the switch should block RF, another property helps: *with little or no conduction, low junction capacitance limits RF leakage through the diode.*

> **Key Information:**
> - Low junction capacitance makes a PIN diode useful as an RF switch. {{< link id="E6B05" >}}
> - Forward DC bias current controls a PIN diode's attenuation of RF signals. {{< link id="E6B11" >}}

Switching between suitable bias conditions makes an RF switch. *Varying the forward current gradually instead makes an attenuator, which reduces signal strength.* *The control is DC even though the signal being handled is RF.*

#### Light and Heat

Replacing an LED with a different type can change its forward voltage as well as its color. These properties are linked: when electrons and holes recombine, the material releases energy as light, in packets called *photons*.

The amount of energy involved depends on the material's *band gap*. This is the energy difference between two ranges of electron states called the valence and conduction bands. An electron crossing that gap must gain or release energy. *The gap helps determine both the emitted light's photon energy and the forward voltage required to operate the LED.*

> **Key Information:** The band gap of an LED's semiconductor material determines its forward voltage drop. {{< link id="E6B03" >}}

Whether a diode makes light, rectifies power, or handles a signal, some electrical power becomes heat instead of useful output. If excess current produces heat faster than the device can remove it, the junction overheats.

> **Key Information:** A junction diode fails from excessive current because its junction temperature becomes excessive. {{< link id="E6B07" >}}

Forward voltage, reverse voltage, current, and temperature ratings must all fit the job. A diode that suits a detector may be a poor rectifier, even though both symbols look familiar.
