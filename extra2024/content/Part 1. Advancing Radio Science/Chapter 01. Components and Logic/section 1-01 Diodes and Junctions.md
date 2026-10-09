---
chapter: "1"
section: "1.1"
questions: ["E6A02", "E6A04", "E6A03", "E6B01", "E6B02", "E6B08", "E6B06", "E6B09", "E6B10", "E6B04", "E6B05", "E6B11", "E6B03", "E6B07"]
status: generated1
draft: true
---

### Section 1.1: Diodes and Junctions

The diode in a power supply and the diode that tunes a receiver may look much alike. One rectifies alternating current (AC), making it flow in one direction; the other acts as a controllable capacitor. Other diodes hold a reference voltage or switch a radio-frequency (RF) path. Their jobs make more sense once we look at what happens where two materials meet.

#### Building a Junction

Pure semiconductor material becomes more useful when small amounts of other elements are added, a process called *doping*. *In N-type material, added donor atoms provide extra free electrons.* P-type material has *holes*: missing electrons in the crystal's bonds that behave as movable positive charge carriers. *An acceptor atom accepts an electron into a bond, leaving a hole available to move elsewhere in the crystal.*

> **Key Information:**
> - N-type semiconductor material contains excess free electrons. {{< link id="E6A02" >}}
> - An impurity atom that adds holes is an acceptor impurity. {{< link id="E6A04" >}}

Electrons are the majority carriers in N-type material, while holes are the majority carriers in P-type. Small numbers of the opposite carrier, called minority carriers, remain in each.

Where P and N material meet, carriers diffuse across the junction and recombine. That leaves a *depletion region* with few mobile carriers and an electric field that opposes further movement. A diode's P side is its anode; its N side is its cathode.

*Bias* is an applied direct-current (DC) voltage or current that sets a device's operating condition. Forward bias makes the anode positive relative to the cathode and reduces the junction barrier. *Reverse bias pulls the majority carriers away from the junction.*

> **Key Information:** Reverse bias separates holes in the P-type material from electrons in the N-type material, widening the depletion region and preventing normal conduction through a PN-junction diode. {{< link id="E6A03" >}}

![Two continuous PN semiconductor bars compare bias conditions. In each bar, P material is on the left, N material on the right, and a shaded band straddles the junction. The left bar has a positive contact on P and a negative contact on N. Arrows point holes and electrons toward its narrow depletion band. The right bar reverses those contact polarities. Arrows point majority carriers away from its wider depletion band. Holes are open circles with plus signs; electrons are filled circles with minus signs. A bracket labeled W marks each depletion width. The shaded band remains part of the semiconductor, not an air gap. Widths and carrier positions are qualitative.](../../../images/s1-1-junction-bias.svg)
{.img-centered .img-xlarge .img-mobile-full caption="Forward bias (left) narrows the depletion region; reverse bias (right) widens it. W marks its width. Open + circles represent holes; filled − circles represent electrons. Arrows show majority-carrier movement as bias is applied, not a continuous reverse current. The shaded region is still semiconductor."}

*Reverse bias is therefore how we keep an ordinary diode from conducting, though a small leakage current remains.* Raise the reverse voltage far enough and the junction reaches *breakdown*, where current can increase greatly. That sounds like something to avoid—and for many diodes it is—but a Zener diode is designed to work there with its current limited.

#### Rectifying and Holding Voltage

A *Zener diode* operates in controlled reverse breakdown. *Over its rated operating range, a substantial change in current causes only a small change in voltage.* A series resistor or other current-limiting circuit keeps it within that range.

> **Key Information:** A Zener diode's most useful characteristic is a nearly constant voltage drop under conditions of varying current. {{< link id="E6B01" >}}

*A Schottky diode uses a metal-semiconductor junction rather than a PN junction.* *Its low forward drop reduces the power lost when carrying current.* That loss is voltage drop multiplied by current. For example, at 1 A, a 0.3 V drop dissipates 0.3 W, while a 0.7 V drop dissipates 0.7 W.

> **Key Information:**
> - A Schottky barrier diode is a metal-semiconductor junction. {{< link id="E6B08" >}}
> - Its lower forward voltage drop can make it a better power-supply rectifier than a silicon PN-junction diode. {{< link id="E6B02" >}}

Small Schottky devices also respond well at high frequencies. A *detector* extracts information or a level from an RF signal; rectifying RF can produce a voltage that follows its strength. *Point-contact diodes, made with a fine contact against a semiconductor, also perform this detection job.* A *mixer* instead combines signals to produce new frequencies, as we will examine in Chapter 4.

> **Key Information:** Schottky diodes are commonly used as VHF/UHF mixers or detectors. Point-contact diodes are also used as RF detectors. {{< link id="E6B06" >}} {{< link id="E6B09" >}}

![Official Figure E6-2 shows eight semiconductor symbols. Symbol 6 is the Schottky diode, identified by the small squared hooks at the ends of its cathode bar. Symbol 3 has the bent cathode bar of a Zener diode, and symbol 5 has outward arrows representing light from an LED.](../../../hugo/static/figures/E6-2.svg)
{.img-centered .img-xlarge .img-bw caption="Figure E6-2: The cathode marking distinguishes the Schottky diode."}

> **Key Information:** Symbol 6 in Figure E6-2 is a Schottky diode. {{< link id="E6B10" >}}

Compare the cathode bars carefully. *The Schottky's hooked shape differs from both an ordinary straight bar and the Zener's angled ends.*

#### Tuning and Switching

Capacitance describes how much charge a device stores for a given voltage. A reverse-biased junction has conducting regions separated by a depletion region, so it has capacitance. Increasing the reverse bias widens that region and reduces the capacitance. A diode designed to use this effect lets a control voltage tune a resonant circuit—changing the frequency it favors.

> **Key Information:** A varactor diode is designed for use as a voltage-controlled capacitor. {{< link id="E6B04" >}}

A *PIN diode* places a nearly intrinsic, or undoped, layer between its P and N regions. At RF it can act as a resistance controlled by DC bias. *More forward bias current stores more charge in the intrinsic layer and lowers its RF resistance.* *With little or no conduction, low capacitance helps keep RF from leaking through the supposedly open switch.*

> **Key Information:**
> - Low junction capacitance makes a PIN diode useful as an RF switch. {{< link id="E6B05" >}}
> - Forward DC bias current controls a PIN diode's attenuation of RF signals. {{< link id="E6B11" >}}

*Varying that current gradually makes an attenuator*; switching between suitable bias conditions makes an RF switch. *The control is DC even though the signal being handled is RF.* You can change the radio's signal path without moving a contact.

#### Light and Heat

In a light-emitting diode, or LED, electrons and holes recombine in a material that releases much of the energy as light. The *band gap* is the energy difference between two ranges of electron states called the valence and conduction bands. An electron crossing that gap must gain or release energy. Light carries energy in packets called *photons*. *The gap therefore helps determine both the emitted light's photon energy and the forward voltage required for operation.*

> **Key Information:** The band gap of an LED's semiconductor material determines its forward voltage drop. {{< link id="E6B03" >}}

Not all electrical power becomes light or useful output. Junction heating limits every diode. Excess current increases heat faster than the device can remove it.

> **Key Information:** A junction diode fails from excessive current because its junction temperature becomes excessive. {{< link id="E6B07" >}}

Forward voltage, reverse voltage, current, and temperature ratings must all fit the job. A diode that suits a detector may be a poor rectifier, even though both symbols look familiar.
