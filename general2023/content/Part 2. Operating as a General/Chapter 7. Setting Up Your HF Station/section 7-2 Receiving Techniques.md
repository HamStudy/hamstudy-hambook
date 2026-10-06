---
chapter: "7"
section: "7.2"
questions: ["G4A13", "G4A01", "G4C02", "G4A03", "G4E07", "G4A07", "G4C03", "G4C04", "G4C01", "G4C08", "G4D04", "G4D06", "G4D05", "G4D07"]
status: draft3
---

### Section 7.2: Receiving Techniques

An HF receiver may deliver the station you want along with static, noise from nearby electronics, and other stations close to the same frequency. If most of your experience is with FM, hearing these sounds together may be unfamiliar. On SSB, a strong signal does not capture the receiver in the same way. The right adjustment depends on whether the problem is an overloaded receiver, a steady tone, or another kind of interference.

#### When Signals Overload the Receiver

A strong signal can overload the receiver, causing distortion or making weaker signals difficult to hear. Increasing gain will not solve that problem; reducing the signal level reaching the receiver may help instead.

> **Key Information:** The purpose of using a receive attenuator is to prevent receiver overload from strong incoming signals. {{< link id="G4A13" >}}

An attenuator reduces all incoming signals, including the station you want. If it brings an overloaded receiver back into its normal operating range, the wanted signal may become easier to understand even though it is weaker. This can be useful at Field Day, where several transmitters may operate nearby, or whenever unusually strong signals interfere with reception.

#### Reducing Noise and Interference

Overload is only one source of poor reception. A receiver operating normally can still pass an unwanted tone, repeated noise pulses, or background hiss. Notch filters, noise blankers, and noise reduction controls address these different problems.

Suppose a steady whistle overlaps the voice you are trying to hear. It may come from another station's carrier or from nearby electronics. A notch filter reduces a narrow range of frequencies around that tone:

> **Key Information:** The notch filter found on many HF transceivers reduces interference from carriers in the receiver passband. {{< link id="G4A01" >}}

The notch also reduces any wanted signal within that narrow range. A manual notch lets you choose the frequency; an automatic notch finds and follows an interfering tone.

Not all interference is confined to a narrow range of frequencies. A loose or corroded electrical connection can arc, creating noise across much of the band:

> **Key Information:** Arcing at a poor electrical connection can cause interference covering a wide range of frequencies. {{< link id="G4C02" >}}

The rapid change in current during each spark produces a brief pulse of energy spread across many frequencies. A noise blanker reduces the effect of these pulses:

> **Key Information:** A noise blanker works by reducing receiver gain during a noise pulse. {{< link id="G4A03" >}}

The receiver returns to normal gain between pulses. This can reduce impulse noise from ignition systems, sparking power lines, or electric fences, but it is not intended for a continuous tone or steady hiss.

Ignition systems are not the only sources of noise in a vehicle:

> **Key Information:** A vehicle's battery charging system, fuel delivery system, and control computers can all cause receive interference to an installed HF transceiver. {{< link id="G4E07" >}}

Some of this interference consists of pulses; other sources produce a steady buzz or whine. Changes that follow engine speed or the switching of nearby equipment can help identify the source. Report suspected power-line faults to the utility rather than inspecting or repairing the hardware yourself.

Steadier background noise calls for a different approach. Noise reduction, often labeled **NR**, uses digital processing to reduce noise in the received audio. It attempts to preserve speech while suppressing noise, but stronger processing can also alter the wanted signal:

> **Key Information:** As a receiver's noise reduction control level is increased, received signals may become distorted. {{< link id="G4A07" >}}

Start with a low setting and increase it only while the voice becomes easier to understand. Compare with the control off; a quieter background is not an improvement if the words are harder to follow.

#### When RF Gets into Audio Equipment

Receiver controls cannot correct every sound coming from the station's speakers. RF may enter a separate audio device, such as powered computer speakers, and be unintentionally detected by its amplifier. That creates sound without passing through your receiver's filters. The interfering transmitter may be yours or another nearby station.

What you hear can help identify the type of transmission:

> **Key Information:**
> - RF interference from a single sideband phone transmitter can produce distorted speech in an audio device. {{< link id="G4C03" >}}
> - RF interference from a CW transmitter can produce on-and-off humming or clicking in an audio device. {{< link id="G4C04" >}}

The solution depends on where the RF enters or is detected. A suitably chosen bypass capacitor can divert RF away from a sensitive point in the audio circuit. Its lower reactance at RF than at audio frequencies allows it to reduce the interference while leaving the wanted audio largely unaffected.

> **Key Information:** A bypass capacitor can be useful in reducing RF interference to audio-frequency circuits. {{< link id="G4C01" >}}

When RF reaches the equipment as common-mode current on an audio cable, a ferrite choke can add impedance to that current without changing the circuit inside the equipment:

> **Key Information:** Placing a ferrite choke on an audio cable can reduce RF interference caused by common-mode current on that cable. {{< link id="G4C08" >}}

Capacitor value and placement matter, and a choke must be effective at the interfering frequency. Leave internal modifications to someone familiar with the circuit and its hazards.

#### Understanding S-Meter Readings

Listening tells you whether a signal is understandable. The S-meter provides a different piece of information: its received strength.

> **Key Information:**
> - An S meter measures received signal strength. {{< link id="G4D04" >}}
> - One S unit typically represents a 6 dB change in signal strength. {{< link id="G4D06" >}}

The scale runs from S1 through S9, followed by readings in decibels above S9, such as "20 over S9." With 6 dB per S unit, an S9 signal represents about four times the received power of S8 and sixteen times that of S7.

Small changes on this scale can therefore represent large changes in power:

> **Key Information:**
> - A signal that reads 20 dB over S9 is 100 times more powerful than one that reads S9, assuming a properly calibrated S meter. {{< link id="G4D05" >}}
> - Power output must be raised approximately 4 times to change the S meter reading on a distant receiver from S8 to S9. {{< link id="G4D07" >}}

Each 10 dB increase multiplies power by ten, so 20 dB corresponds to $10 \times 10 = 100$ times the power. Similarly, increasing transmitter output from 100 to 400 watts is approximately a 6 dB change. With other conditions unchanged, that is about one additional S unit at the distant receiver.

Actual S-meters vary, so readings are most useful for comparing signals on the same receiver with its settings unchanged. They can help you compare antennas or observe fading.

Signal strength is also separate from readability. In a phone report of "52," the 5 means perfectly readable and the 2 means very weak. You may be able to complete a contact without increasing power, even when the signal-strength number is low.

#### Listen First

You can begin before earning your General Class License by listening to amateur HF signals. Try one control at a time and judge the result by how well you can follow the signal.

Listening also helps you avoid interrupting a contact. A pause does not mean that a frequency is clear, especially if you can hear only one side of a conversation. Listen long enough to establish what is happening before transmitting.

The operator receiving your transmission faces many of these same problems. Your choice of audio level, bandwidth, and frequency can make their job easier or harder.
