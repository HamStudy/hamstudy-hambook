---
chapter: "7"
section: "7.4"
status: reviewed1
questions: ["G4A05", "G4A09", "G4A04", "G4A08"]
---

### Section 7.4: Power Amplifiers

Most HF transceivers put out around 100 watts, and that is enough for the vast majority of contacts. Sometimes it is not quite enough, though. Propagation may be marginal, your antenna may be a compromise, or you may be trying to break through a pileup. This is when operators add an external power amplifier.

An amplifier is not just another accessory. It must be connected and configured correctly, and operating it well means understanding drive power, switching, tuning, and safety.

#### Integrating the Amplifier

Connecting an amplifier to your transceiver requires the two devices to coordinate both power and timing.

First, an amplifier often needs less drive than the transceiver can produce. Too much drive can distort the transmitted signal and may damage the amplifier. Set the transceiver's output according to the amplifier manufacturer's instructions. External ALC (Automatic Level Control) can provide an added layer of protection:

> **Key Information:** ALC is used with an RF power amplifier to prevent excessive drive. {{< link id="G4A05" >}}

When the amplifier detects excessive drive, its ALC output signals a compatible transceiver to reduce power. ALC is best used as a safety limit, not as a substitute for setting the correct drive level.

The amplifier must also switch to its transmit path before RF arrives. Sending power too soon can cause it to switch while RF is already present, possibly damaging its switching components. The solution is proper sequencing:

> **Key Information:** The purpose of delaying RF output after activating a transmitter's keying line to an external amplifier is to allow time for the amplifier to switch the antenna between the transceiver and the amplifier output. {{< link id="G4A09" >}}

When you transmit, the transceiver first activates the amplifier's keying line. After a brief delay gives the amplifier time to switch, the transceiver begins producing RF. Some radio and amplifier combinations coordinate this automatically. Others require you to connect and configure the keying and delay settings yourself.

#### Operating a Tube Amplifier

Solid-state amplifiers generally require no manual tuning. Many tube amplifiers, especially older models, use TUNE and LOAD controls that must be adjusted when changing bands or moving significantly within a band.

The TUNE control brings the amplifier's output circuit to resonance:

> **Key Information:** The correct setting of a vacuum-tube RF power amplifier's TUNE control produces a pronounced dip in plate current. {{< link id="G4A04" >}}

The dip shows that the output circuit is resonant. The LOAD or COUPLING control then adjusts how the amplifier transfers power to the antenna:

> **Key Information:** The correct adjustment for the LOAD or COUPLING control of a vacuum tube RF power amplifier is to achieve the desired power output without exceeding maximum allowable plate current. {{< link id="G4A08" >}}

The two controls affect each other, so you may need to adjust them more than once. Always follow the manufacturer's tuning procedure, begin with low drive, and stay within the amplifier's current and time limits.

#### Turning Amplifier Theory into Operating Choices

The efficiency and linearity tradeoff from Section 2.2 now has a practical consequence: an amplifier must suit the signal you intend to send. An amplifier designed for constant-amplitude FM is not necessarily suitable for SSB, whose changing amplitude carries the voice. Choose equipment intended for the mode, and do not assume that a higher power reading means a better signal. Excess drive can turn otherwise suitable equipment into a source of distortion.

Efficiency also becomes a cooling problem at higher power. An amplifier taking 2,000 watts of DC input while delivering 1,200 watts of RF must dispose of roughly 800 watts as heat. Longer transmissions leave less cooling time between them. Keep airflow unobstructed and respect the amplifier's duty-cycle limits, especially when moving from intermittent voice peaks to a sustained digital transmission.

Section 2.2 also explained unwanted feedback and neutralization. In equipment that needs neutralization, that is a design or servicing adjustment, not an extra step to try with the everyday TUNE and LOAD controls. If an amplifier behaves abnormally, stop and investigate rather than increasing drive to force the expected output.

#### Operating Safely

An amplifier concentrates a great deal of energy in one box, and mistakes can be expensive. Confirm that everything is connected correctly before transmitting. Begin with low drive, follow the manufacturer's tuning procedure, and stay within all current, power, and time limits.

At amplifier power levels, antennas and feed lines can carry dangerous RF voltages and currents, especially when SWR is high. Adding an amplifier may also require you to reevaluate your station's RF exposure.

Tube amplifiers contain potentially lethal internal voltages, which may remain after the amplifier is turned off and unplugged. Never remove the cover or attempt internal repairs unless you are trained to do so and follow the manufacturer's safety procedures.

When it is working properly, an amplifier gives you extra margin when conditions are difficult. More power is not the only solution, though. Some digital modes use narrow signals and computer processing to communicate at much lower signal levels—and that is where we go next.
