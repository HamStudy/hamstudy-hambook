---
chapter: "9"
section: "9.3"
questions: ["E4E06", "E4E12", "E4E10", "E4E11", "E4D03", "E4D04", "E4E08", "E4E07", "E4E04", "E4E05"]
status: "generated1"
draft: true
---

### Section 9.3: Finding Noise and Interference

Noise has clues: its spacing across the dial, its rhythm, and the equipment that makes it start or stop. Treat each clue as something you can test, not a verdict on the nearest piece of electronics. A buzz that vanishes when one device is unplugged is more useful evidence than a long list of possible culprits.

#### Listen for a Pattern

Digital electronics and switching power supplies contain repeating electrical activity. Harmonics of that activity can appear at many frequencies. The sound and spacing help narrow the search, though they do not identify a device with certainty.

> **Key Information:**
> - Computer network equipment can produce unstable modulated or unmodulated signals at specific frequencies. {{< link id="E4E06" >}}
> - Switch-mode power supplies can cause a series of carriers at regular intervals across a wide frequency range. {{< link id="E4E12" >}}

Try running the receiving station from a battery, then switch suspected household devices off one at a time where you can do so safely. Write down what changes, including any delay of a few seconds after a device loses power. If you switch five things off together, you have five suspects again when the noise returns. A portable receiver can help locate the strongest area without requiring access to the source itself.

Intermittent roaring or buzzing suggests a different family of causes. A thermostat may arc only while its contacts change state; faulty equipment may behave differently as it warms.

> **Key Information:** Intermittent loud roaring or buzzing AC line interference can come from arcing contacts in a thermostatically controlled device, a defective doorbell or doorbell transformer, or a malfunctioning illuminated advertising display. {{< link id="E4E10" >}}

Locating suspect utility equipment does not make it safe to touch. Report a location and observed pattern to the responsible utility or owner.

#### Mixing Outside the Receiver

Chapter 5 traced unwanted mixing inside receivers. Nonlinear junctions elsewhere can mix signals too. A corroded metal contact may act as a crude rectifier. *Strong broadcast signals reaching it can combine into new frequencies, which the metalwork then radiates.*

> **Key Information:** Nearby corroded metal connections can mix and reradiate AM broadcast signals, creating spurious signals on the MF or HF bands. {{< link id="E4E11" >}}

This is *passive intermodulation*: the troublesome junction needs no power supply of its own. Two real broadcast signals have produced a third signal that no broadcast transmitter deliberately sent. Reducing gain inside your receiver may not remove a signal that has already been created outside it.

At a repeater site, energy from one transmitter can enter another transmitter through its antenna connection. *The final amplifier can then mix the two signals.* A circulator routes RF between ports in one direction; with a suitable load on its third port, it diverts incoming energy away from the amplifier.

> **Key Information:**
> - Intermodulation between nearby repeaters can occur when their output signals mix in the final amplifier of one or both transmitters. {{< link id="E4D03" >}}
> - A properly terminated circulator at the repeater transmitter's output can reduce or eliminate intermodulation caused by a nearby transmitter. {{< link id="E4D04" >}}

The termination absorbs the diverted energy. The circulator does not make that energy disappear, so leaving its third port without the proper load defeats the intended isolation.

#### Stop Noise Along Its Path

A cable may carry unwanted RF as well as its intended signal. With differential-mode current, current goes out on one conductor and returns on another. *With common-mode current, the conductors carry RF in the same direction relative to their surroundings.* The return path lies elsewhere, so the cable can act as an antenna.

![Two equivalent current-path circuits show an instant in an RF cycle. On the left, a source drives differential current I to the right along one conductor, through the load, and back to the left along the other conductor. On the right, a common-mode source drives equal currents I to the right along both conductors. Each conductor connects through a stray capacitance to an external return path below the pair. The currents combine into 2I, shown by a leftward arrow on the dashed return, and complete the circuit through the source. These drawings isolate the two current components; both may occur on a real cable.](../../../images/s9-3-current-paths.svg)
{.img-centered .img-xlarge .img-mobile-full caption="Equivalent circuits at one instant: differential current (left) returns on the other conductor. Equal common-mode currents (right) return outside the pair, combining to 2I. The capacitors show one possible stray-capacitance path; the dashed return closes through the noise source. A real cable can carry both components."}

> **Key Information:**
> - Current flowing equally on all conductors of an unshielded multiconductor cable is common-mode current. {{< link id="E4E08" >}}
> - Common-mode currents on the shield and conductors can cause shielded cables to radiate or receive interference. {{< link id="E4E07" >}}

A shield is therefore not a guarantee of quiet operation. A ferrite choke adds impedance to unwanted RF current on a cable. Put suppression where it interrupts the coupling path, ideally close to the source before a long cable radiates the noise.

> **Key Information:**
> - Ferrite chokes on automobile battery charging-system leads can suppress conducted noise from that system. {{< link id="E4E04" >}}
> - A brute-force AC-line filter in series with a line-driven AC motor's power leads suppresses its RF interference. {{< link id="E4E05" >}}

The term *brute-force* here means a power-line filter built to pass the load current while blocking RF. Use a filter rated for the voltage and current; installing one in mains wiring is electrical work, not a reason to improvise with loose components. After any remedy, repeat the original listening test. The change should fix the observed problem.
