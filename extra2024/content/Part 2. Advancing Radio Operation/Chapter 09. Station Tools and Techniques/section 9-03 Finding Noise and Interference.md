---
chapter: "9"
section: "9.3"
questions: ["E4E12", "E4E06", "E4E10", "E4E11", "E4D03", "E4D04", "E4E08", "E4E07", "E4E04", "E4E05"]
status: "generated1"
---

### Section 9.3: Finding Noise and Interference

Switch nearby devices off one at a time, where you safely can, and a noise coming from one of them stops when you reach it. That slow search is the standard method, and the noise itself can shorten it. Its spacing across the dial, its rhythm, and when it comes and goes all point toward likely causes, though each clue still needs a test.

#### Listen for a Pattern

Evenly spaced signals suggest a source that repeats. A switch-mode power supply switches at a steady rate, and its harmonics fall at every multiple of that rate, evenly spaced far up the spectrum. Network equipment behaves differently. Its clocks and data links run at a few set rates, and the traffic they carry changes from moment to moment.

> **Key Information:**
> - Switch-mode power supplies can cause a series of carriers at regular intervals across a wide frequency range. {{< link id="E4E12" >}}
> - Computer network equipment can produce unstable modulated or unmodulated signals at specific frequencies. {{< link id="E4E06" >}}

Intermittent roaring or buzzing on the AC line points to a different family of causes: arcing, where current jumps a small gap. Switch contacts can arc each time they open or close. A failing transformer can arc inside, and so can worn insulation or connections in high-voltage lighting such as neon. A failing part may also behave differently as it warms.

> **Key Information:** Intermittent loud roaring or buzzing AC line interference can come from arcing contacts in a thermostatically controlled device, a defective doorbell or doorbell transformer, or a malfunctioning illuminated advertising display. {{< link id="E4E10" >}}

When you test, run the receiver from a battery. That rules out its own power supply and lets you switch off household circuits without losing the receiver. Write down what changes, including any delay of a few seconds after a device loses power. If you switch five things off together, you have five suspects again when the noise returns. A portable receiver can help locate the strongest area without access to the source itself.

If the noise leads to a power pole, a neighbor's sign, or other equipment you don't own, don't open or touch it. Report the location and the pattern you observed to the utility or the owner.

#### Mixing Outside the Receiver

Some unwanted signals survive every receiver adjustment because they arise before reaching the antenna. A corroded joint in nearby metal can act like a crude diode. Like any nonlinear junction, it mixes the strong signals that reach it.

> **Key Information:** Nearby corroded metal connections can mix and reradiate AM broadcast signals, creating spurious signals on the MF or HF bands. {{< link id="E4E11" >}}

This is **passive intermodulation**: the junction needs no power of its own. The broadcast signals can be perfectly clean, and turning down your receiver's gain won't remove a product created outside it.

At a crowded repeater site, the mixing can happen inside a transmitter. A nearby transmitter's signal comes in through the antenna and reaches the final amplifier. No power amplifier is perfectly linear. A **circulator** routes RF between its ports in one direction only. Put one at the transmitter's output with a suitable load on its third port. It passes the outgoing signal to the antenna and sends incoming energy into the load instead of the amplifier.

![A repeater transmitter at left connects to a circulator, drawn as a circle with a clockwise arrow inside. The circulator's right port feeds a line to the antenna, and its bottom port connects through a resistor, the load, to ground. Blue arrows show the transmitter's output passing through the circulator to the antenna. A red dashed arrow shows a signal from a nearby transmitter arriving from the antenna, entering the circulator, and turning down into the load instead of reaching the transmitter.](../../../images/s9-3-circulator.svg)
{.img-centered .img-large .img-mobile-full caption="The circulator passes the repeater's output to the antenna and sends signals arriving from the antenna into the load, keeping them out of the final amplifier."}

> **Key Information:**
> - Intermodulation between nearby repeaters can occur when their output signals mix in the final amplifier of one or both transmitters. {{< link id="E4D03" >}}
> - A properly terminated circulator at the repeater transmitter's output can reduce or eliminate intermodulation caused by a nearby transmitter. {{< link id="E4D04" >}}

The load absorbs the diverted energy. Without it, the third port reflects that energy onward to the transmitter, defeating the isolation.

#### Stop Noise Along Its Path

Ferrite chokes on cables are a familiar cure for RF interference. They act on only one kind of current. The intended **differential** current goes out on one conductor and returns on another. Current can also flow the same way on every conductor at once. With no return path inside the cable, it returns outside, through stray capacitance to the surroundings, and the cable acts as an antenna. A shield doesn't prevent this, because the same current can flow on the outside of the shield as well.

![Two equivalent current-path circuits show an instant in an RF cycle. On the left, a source drives differential current I to the right along one conductor, through the load, and back to the left along the other conductor. On the right, a common-mode source drives equal currents I to the right along both conductors. Each conductor connects through a stray capacitance to an external return path below the pair. The currents combine into 2I, shown by a leftward arrow on the dashed return, and complete the circuit through the source. These drawings isolate the two current components; both may occur on a real cable.](../../../images/s9-3-current-paths.svg)
{.img-centered .img-xlarge .img-mobile-full caption="Equivalent circuits at one instant: differential current (left) returns on the other conductor. Equal common-mode currents (right) return outside the pair, combining to 2I. The capacitors show one possible stray-capacitance path; the dashed return closes through the noise source. A real cable can carry both components."}

> **Key Information:**
> - Current flowing equally on all conductors of an unshielded multiconductor cable is common-mode current. {{< link id="E4E08" >}}
> - Common-mode currents on the shield and conductors can cause shielded cables to radiate or receive interference. {{< link id="E4E07" >}}

The choke adds RF impedance to common-mode current while leaving the differential current largely alone. Put it where that impedance interrupts the noise path, ideally close to the source before a long cable radiates the noise.

Match the remedy to the conductors that carry the noise. In a vehicle, noise from the battery charging system travels along the charging leads. A line-driven AC motor sends its noise back along its power leads. A **brute-force** filter is a low-pass filter for the power line: series inductors and capacitors across the line pass the load current while blocking RF.

> **Key Information:**
> - Ferrite chokes on automobile battery charging-system leads can suppress conducted noise from that system. {{< link id="E4E04" >}}
> - A brute-force AC-line filter in series with a line-driven AC motor's power leads suppresses its RF interference. {{< link id="E4E05" >}}

Use a filter rated for the voltage and current; installing it in mains wiring is electrical work, not a job for loose components. After any remedy, repeat the original listening test to confirm that the change fixed the problem.
