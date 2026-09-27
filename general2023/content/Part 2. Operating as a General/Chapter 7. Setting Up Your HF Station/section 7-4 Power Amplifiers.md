---
chapter: "7"
section: "7.4"
status: reviewed1
questions: ["G4A05", "G4A09", "G4A04", "G4A08"]
---

### Section 7.4: Power Amplifiers

Many HF transceivers put out around 100 watts, which is enough for most contacts. Sometimes, though, you can hear another station well enough while your signal is not reaching them reliably. Marginal propagation or a compromise antenna can make this more likely. In those situations, an external power amplifier can provide additional transmit power.

An amplifier is not simply another accessory to place in the RF path. It must work together with the transceiver, and using one correctly means understanding drive power, switching, tuning, and the additional safety concerns that come with higher power.

#### Integrating the Amplifier

An amplifier takes the RF signal from your transceiver and increases its power. It often needs much less drive than the transceiver is capable of producing, so the radio's output must be set appropriately. Too much drive can distort the transmitted signal and may damage the amplifier.

If both devices support it, Automatic Level Control (ALC) provides an additional way to limit excessive drive:

> **Key Information:** ALC is used with an RF power amplifier to prevent excessive drive. {{< link id="G4A05" >}}

The amplifier's ALC output can signal a compatible transceiver to reduce its output when necessary. ALC should be treated as a safeguard, though—not as a substitute for setting the correct drive level in the first place.

The amplifier must also be ready before the transceiver begins producing RF. When you transmit, the amplifier needs time to switch its antenna path from receive to transmit. Sending RF before that switching is complete can cause the amplifier to switch while power is already present, which can damage its switching components.

For this reason, the transceiver activates the amplifier's keying line first and delays its RF output briefly:

> **Key Information:** The purpose of delaying RF output after activating a transmitter's keying line to an external amplifier is to allow time for the amplifier to switch the antenna between the transceiver and the amplifier output. {{< link id="G4A09" >}}

Some radio and amplifier combinations handle this sequencing automatically. Others require you to connect the keying line and configure an appropriate transmit delay.

#### Operating a Tube Amplifier

Modern solid-state amplifiers generally do not require manual tuning. Many tube amplifiers, especially older models, use TUNE and LOAD or COUPLING controls that must be adjusted when changing bands or moving significantly within a band.

The TUNE control adjusts the amplifier's output circuit for resonance. One indication that it has reached the correct setting is a dip in plate current:

> **Key Information:** The correct setting of a vacuum-tube RF power amplifier's TUNE control produces a pronounced dip in plate current. {{< link id="G4A04" >}}

The LOAD or COUPLING control determines how the amplifier transfers power into the load. It is adjusted for the desired output while keeping the tube within its safe operating limits:

> **Key Information:** The correct adjustment for the LOAD or COUPLING control of a vacuum tube RF power amplifier is to achieve the desired power output without exceeding maximum allowable plate current. {{< link id="G4A08" >}}

TUNE and LOAD affect each other, so tuning usually involves moving back and forth between them until both are correct. Always follow the manufacturer's procedure and stay within the amplifier's current, power, and tuning-time limits.

#### Using an Amplifier Well

The efficiency and linearity concepts from Section 2.2 become important when choosing and operating an amplifier. The amplifier must be suitable for the type of signal being transmitted. An amplifier intended only for constant-amplitude modes such as FM may not be linear enough for SSB, where changes in amplitude carry part of the information.

Even a suitable amplifier can produce a poor signal if it is overdriven. More indicated power does not necessarily mean a better transmitted signal; pushing an amplifier beyond its intended operating range can create distortion and unwanted emissions.

Higher power also produces more heat. Longer transmissions, especially sustained digital transmissions, give the amplifier less time to cool than intermittent voice operation. Keep airflow unobstructed and respect the manufacturer's duty-cycle limits.

#### Operating Safely

Higher RF power means greater voltages and currents throughout the transmitting system. Feed lines, switches, meters, tuners, and other accessories must all be rated for the power being used. High SWR can make RF voltages and currents even greater, and operating an amplifier may require you to reevaluate your station's RF exposure.

Tube amplifiers introduce another serious hazard: potentially lethal internal voltages. These voltages may remain after the amplifier has been turned off and unplugged. Never remove the cover or attempt internal repairs unless you are trained to do so and follow the manufacturer's safety procedures.

Used properly, an amplifier can provide useful transmit margin when your signal is not quite reaching the other station. More power is not the only way to make a contact, though. Some digital modes use narrow signals and computer processing to communicate successfully at much lower signal levels—and that is where we go next.
