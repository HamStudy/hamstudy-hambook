---
chapter: "7"
section: "7.4"
status: draft3
questions: ["G4A05", "G4A09", "G4A04", "G4A08"]
---

### Section 7.4: Power Amplifiers

An external amplifier increases the power of the RF signal from your transceiver. The transceiver still creates the signal, but now its output drives the amplifier rather than feeding the antenna system directly. That changes the required power settings and transmit timing; some amplifiers also need manual tuning.

#### Integrating the Amplifier

An amplifier often reaches its rated output with less drive than the transceiver can supply. Set the radio's output according to the amplifier manufacturer's instructions. Too much drive can distort the transmitted signal or damage the amplifier.

If both devices support a compatible external Automatic Level Control (ALC) connection, the amplifier can signal the transceiver to reduce power:

> **Key Information:** ALC is used with an RF power amplifier to prevent excessive drive. {{< link id="G4A05" >}}

Treat ALC as a safeguard, not as the normal way to set output power. Set the correct drive first, then configure ALC according to the equipment instructions. Relying on ALC to continually reduce excessive drive can itself introduce distortion.

The amplifier must also complete its receive-to-transmit switching before RF arrives. The radio therefore activates the amplifier's keying line first, then waits briefly before sending RF. Switching while RF is already present can damage the switching components:

> **Key Information:** The purpose of delaying RF output after activating a transmitter's keying line to an external amplifier is to allow time for the amplifier to switch the antenna between the transceiver and the amplifier output. {{< link id="G4A09" >}}

Some radio and amplifier combinations coordinate this timing automatically. Others require a separate keying connection and an appropriate transmit-delay setting. Follow both manufacturers' instructions for the connections and timing.

#### Operating a Tube Amplifier

Solid-state amplifiers generally do not require manual output tuning. Many tube amplifiers use TUNE and LOAD or COUPLING controls that need adjustment when changing bands or moving significantly within a band.

The TUNE control brings the output circuit to resonance. A dip in the plate-current reading indicates the correct setting:

> **Key Information:** The correct setting of a vacuum-tube RF power amplifier's TUNE control produces a pronounced dip in plate current. {{< link id="G4A04" >}}

The LOAD or COUPLING control adjusts the load that the output circuit presents to the tube. Its setting affects both output power and plate current:

> **Key Information:** The correct adjustment for the LOAD or COUPLING control of a vacuum tube RF power amplifier is to achieve the desired power output without exceeding maximum allowable plate current. {{< link id="G4A08" >}}

TUNE and LOAD interact, so adjusting one may require readjusting the other. Follow the manufacturer's tuning procedure and observe its limits on drive, current, output power, and tuning time.

#### Using an Amplifier Well

The linearity concepts from Section 2.2 apply to the entire transmitting system. An amplifier intended only for constant-amplitude modes such as FM may distort SSB, whose changing amplitude carries information. Use equipment intended for the mode, and remember that even a suitable amplifier can distort when overdriven.

Average power also matters for cooling. As the previous section explained, voice reaches its peak power only briefly. A sustained digital signal may remain near its set output throughout a transmission, placing a greater heat load on the amplifier than voice at the same peak power. Keep airflow clear and follow the manufacturer's duty-cycle and continuous-output limits; a rating for SSB does not necessarily apply to sustained data transmissions.

#### Operating Safely

Higher RF output also increases the voltages and currents that the antenna system must handle. Feed lines, switches, meters, tuners, and other accessories after the amplifier must all be rated for the power used. High SWR can create still higher voltage and current peaks, so stay within the equipment's matching limits as well. Check that your station's RF exposure assessment from the previous chapter covers the higher power level.

Tube amplifiers contain potentially lethal internal voltages that can remain after the amplifier is turned off and unplugged. Never remove the cover or attempt internal repairs unless you are trained to do so and follow the manufacturer's safety procedures.

More power is not the only way to make a weak signal usable. Some digital modes can decode signals too weak for a voice contact, but they require careful coordination between the computer and radio.
