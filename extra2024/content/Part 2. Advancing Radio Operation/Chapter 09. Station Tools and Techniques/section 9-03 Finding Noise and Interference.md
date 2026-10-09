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

A regularly spaced series of signals suggests a repeating electrical source. Harmonics of switching activity appear at multiples of its frequency, so *switch-mode power supplies can produce carriers at regular intervals across a wide frequency range*. *Computer network equipment may instead produce unstable modulated or unmodulated signals at specific frequencies.* Use the pattern to choose what to test, without treating it as proof of the source.

> **Key Information:**
> - Computer network equipment can produce unstable modulated or unmodulated signals at specific frequencies. {{< link id="E4E06" >}}
> - Switch-mode power supplies can cause a series of carriers at regular intervals across a wide frequency range. {{< link id="E4E12" >}}

Try running the receiving station from a battery, then switch suspected household devices off one at a time where you can do so safely. Write down what changes, including any delay of a few seconds after a device loses power. If you switch five things off together, you have five suspects again when the noise returns. A portable receiver can help locate the strongest area without requiring access to the source itself.

Intermittent roaring or buzzing suggests a different family of causes. A thermostat may arc only while its contacts change state; faulty equipment may behave differently as it warms.

> **Key Information:** Intermittent loud roaring or buzzing AC line interference can come from arcing contacts in a thermostatically controlled device, a defective doorbell or doorbell transformer, or a malfunctioning illuminated advertising display. {{< link id="E4E10" >}}

Locating suspect utility equipment does not make it safe to touch. Report a location and observed pattern to the responsible utility or owner.

#### Mixing Outside the Receiver

An unwanted signal may remain even after receiver attenuation removes overload. Mixing can occur before the signal reaches your antenna: a corroded metal contact acts as a nonlinear junction, much like a crude rectifier. *Strong AM broadcast signals can mix at that contact and be reradiated as spurious MF or HF signals.*

> **Key Information:** Nearby corroded metal connections can mix and reradiate AM broadcast signals, creating spurious signals on the MF or HF bands. {{< link id="E4E11" >}}

This is *passive intermodulation*: the troublesome junction needs no power supply of its own. Two real broadcast signals have produced a third signal that no broadcast transmitter deliberately sent. Reducing gain inside your receiver may not remove a signal that has already been created outside it.

At a repeater site, energy from one transmitter can enter another transmitter through its antenna connection. *The final amplifier can then mix the two signals.* A circulator routes RF between ports in one direction; with a suitable load on its third port, it diverts incoming energy away from the amplifier.

> **Key Information:**
> - Intermodulation between nearby repeaters can occur when their output signals mix in the final amplifier of one or both transmitters. {{< link id="E4D03" >}}
> - A properly terminated circulator at the repeater transmitter's output can reduce or eliminate intermodulation caused by a nearby transmitter. {{< link id="E4D04" >}}

The termination absorbs the diverted energy. The circulator does not make that energy disappear, so leaving its third port without the proper load defeats the intended isolation.

#### Stop Noise Along Its Path

A ferrite choke can suppress cable-borne interference only if it opposes the unwanted current's path. The intended differential current goes out on one conductor and returns on another. *Common-mode current flows in the same direction on the conductors relative to their surroundings; equal current on every conductor of an unshielded cable is common mode.* Its return path lies elsewhere, allowing the cable to act as an antenna.

![Two equivalent current-path circuits show an instant in an RF cycle. On the left, a source drives differential current I to the right along one conductor, through the load, and back to the left along the other conductor. On the right, a common-mode source drives equal currents I to the right along both conductors. Each conductor connects through a stray capacitance to an external return path below the pair. The currents combine into 2I, shown by a leftward arrow on the dashed return, and complete the circuit through the source. These drawings isolate the two current components; both may occur on a real cable.](../../../images/s9-3-current-paths.svg)
{.img-centered .img-xlarge .img-mobile-full caption="Equivalent circuits at one instant: differential current (left) returns on the other conductor. Equal common-mode currents (right) return outside the pair, combining to 2I. The capacitors show one possible stray-capacitance path; the dashed return closes through the noise source. A real cable can carry both components."}

> **Key Information:**
> - Current flowing equally on all conductors of an unshielded multiconductor cable is common-mode current. {{< link id="E4E08" >}}
> - Common-mode currents on the shield and conductors can cause shielded cables to radiate or receive interference. {{< link id="E4E07" >}}

*A shielded cable can still radiate or receive interference through common-mode currents on its shield and conductors.* Put the ferrite choke where its added RF impedance interrupts that path, ideally close to the source before a long cable radiates the noise. For noise conducted from a vehicle's battery charging system, *place chokes on the charging-system leads*. A line-driven AC motor instead calls for *a brute-force AC-line filter in series with its power leads*.

> **Key Information:**
> - Ferrite chokes on automobile battery charging-system leads can suppress conducted noise from that system. {{< link id="E4E04" >}}
> - A brute-force AC-line filter in series with a line-driven AC motor's power leads suppresses its RF interference. {{< link id="E4E05" >}}

The term *brute-force* here means a power-line filter built to pass the load current while blocking RF. Use a filter rated for the voltage and current; installing one in mains wiring is electrical work, not a reason to improvise with loose components. After any remedy, repeat the original listening test. The change should fix the observed problem.
