---
chapter: "7"
section: "7.3"
questions: ["G4A04", "G4A08", "G4A05", "G4A09", "G7B08", "G7B02", "G7B01", "G7B11"]
---

### Section 7.3: Power Amplifiers and Measurement

With your General class privileges, you're authorized to use the maximum power allowed to amateur radio operators: 1500 watts PEP (Peak Envelope Power) on most HF bands. While many operators never need this much power, understanding amplifiers and how to properly measure and adjust your output power becomes increasingly important as your station grows.

#### Understanding RF Amplifiers

An RF power amplifier does exactly what the name suggests—it takes your transceiver's signal and amplifies it to a higher power level. Most modern transceivers output between 100-200 watts, while amplifiers can boost this to 600-1500 watts, depending on the model.

##### Amplifier Classes and Efficiency

Amplifiers are categorized into different "classes" based on how they operate:

> **Key Information:** *Class C amplifiers have the highest efficiency* compared to other common amplifier classes. {{< link id="G7B02" >}}

<img src="../images/amplifier-classes.svg" alt="Diagram comparing efficiency of different amplifier classes" style="width: 450px; margin: 10px;">

The main amplifier classes you'll encounter are:

- **Class A**: Conducts throughout the entire input cycle; very linear but least efficient (typically 25-30%)
- **Class AB**: A compromise between linearity and efficiency (typically 50-60%)
- **Class B**: Conducts for 50% of the input cycle; more efficient than Class A but less linear
- **Class C**: Conducts for less than 50% of the input cycle; most efficient (typically 70-80%) but highly non-linear

The efficiency of an RF power amplifier is determined by a simple calculation:

> **Key Information:** *The efficiency of an RF power amplifier is determined by dividing the RF output power by the DC input power.* {{< link id="G7B08" >}}

For example, if an amplifier draws 2000 watts of DC power and produces 1200 watts of RF output, its efficiency is 1200 ÷ 2000 = 0.6 or 60%.

Higher efficiency means less wasted power (which becomes heat), but often at the expense of linearity. This leads to an important consideration:

> **Key Information:** *For amplifying a modulated signal, a Class C power stage is appropriate for FM, but NOT for SSB or AM.* {{< link id="G7B11" >}}

The reason is simple: Class C amplifiers distort the signal considerably, which isn't a problem for FM (where the information is in the frequency, not the amplitude). However, for SSB and AM, where the information is carried in the amplitude variations, this distortion would make your signal unintelligible or cause splatter interference to adjacent frequencies.

For SSB operation, most amplifiers operate in Class AB, which provides a good balance between efficiency and linearity.

##### Neutralization: Preventing Self-Oscillation

Some amplifier designs, particularly those using vacuum tubes, require neutralization:

> **Key Information:** *The purpose of neutralizing an amplifier is to eliminate self-oscillations.* {{< link id="G7B01" >}}

<img src="../images/neutralization.svg" alt="Diagram showing neutralization circuit in amplifier" style="width: 400px; margin: 10px;">

Self-oscillation occurs when some of the output signal feeds back to the input in the right phase to cause sustained oscillation. This feedback often happens through internal capacitance in vacuum tubes or transistors. Neutralization circuits provide an equal but opposite feedback path to cancel this effect, stabilizing the amplifier.

Modern solid-state amplifiers rarely require user adjustment of neutralization, but many tube amplifiers still include neutralization controls that may need occasional adjustment.

#### Tuning Vacuum Tube Amplifiers

If you're using a vacuum-tube type amplifier (still common in amateur radio due to their robustness and ability to handle operator errors), proper tuning is essential:

> **Key Information:** *The correct setting of a vacuum-tube RF power amplifier's TUNE control results in a pronounced dip in plate current.* {{< link id="G4A04" >}}

<img src="../images/amplifier-tuning-dip.svg" alt="Graph showing plate current dip during proper tuning" style="width: 450px; margin: 10px;">

Tuning a tube amplifier typically involves two main controls:

1. **TUNE control**: Adjusts the plate circuit resonance
2. **LOAD or COUPLING control**: Adjusts the coupling to the antenna circuit

The proper adjustment sequence is:
1. Start with reduced power
2. Adjust the TUNE control for a pronounced dip in plate current (indicating resonance)
3. Adjust the LOAD control for proper power output

> **Key Information:** *The correct adjustment for the LOAD or COUPLING control of a vacuum tube RF power amplifier is to achieve the desired power output without exceeding maximum allowable plate current.* {{< link id="G4A08" >}}

Improper tuning can result in:
- Reduced efficiency
- Excessive plate current
- Poor linearity
- Shortened tube life
- Splatter and interference to other stations

With practice, you'll develop a feel for properly tuning your specific amplifier model.

#### Automatic Level Control (ALC)

To prevent overdriving, most modern stations use Automatic Level Control (ALC):

> **Key Information:** *ALC is used with an RF power amplifier to prevent excessive drive and distortion.* {{< link id="G4A05" >}}

<img src="../images/alc-system.svg" alt="Diagram showing ALC feedback loop" style="width: 450px; margin: 10px;">

ALC works as a feedback system:
1. The amplifier monitors its operating conditions
2. When it detects potential overdrive, it generates an ALC voltage
3. This voltage is sent back to the exciter (your transceiver) via the ALC line
4. The exciter reduces its output power in response

Most transceivers have an ALC meter that shows this action. For proper operation:
- The ALC meter should show some activity on voice peaks
- Consistent full-scale ALC indication suggests overdriving
- No ALC indication might mean you're underutilizing your system

#### Amplifier Safety Features

Modern amplifiers include several safety features to protect both the equipment and the operator:

##### T/R (Transmit/Receive) Sequencing

When an amplifier is added to your station, proper sequencing of equipment switching becomes critical:

> **Key Information:** *The purpose of delaying RF output after activating a transmitter's keying line to an external amplifier is to allow time for the amplifier to switch the antenna between the transceiver and the amplifier output.* {{< link id="G4A09" >}}

<img src="../images/tr-sequencing.svg" alt="Diagram showing proper T/R sequencing" style="width: 450px; margin: 10px;">

The proper sequence for transmitting is:
1. Keying line activates (PTT pressed)
2. Amplifier switches from receive to transmit mode
3. RF output begins after a slight delay

Without this delay, "hot switching" can occur, potentially damaging amplifier relays or causing arcing. Most modern transceivers automatically provide this delay, but some older or specialized equipment might require external sequencers.

##### Other Important Safety Features

Quality amplifiers typically include:
- **Thermal protection**: Shuts down the amplifier if it overheats
- **High SWR protection**: Reduces power or shuts down if antenna system SWR is too high
- **Grid or current limiting**: Prevents exceeding safe operating parameters
- **Safety interlocks**: Disable high voltage when covers are removed

#### Measuring Your Output Power

> **Key Information:** *An RF power meter should be installed in the feed line, between the transmitter and antenna.*

Accurate power measurement ensures you're operating within legal limits and that your equipment is functioning properly. Several methods exist for measuring RF power:

##### Directional Wattmeters

These popular instruments measure both forward and reflected power, allowing you to calculate:
- Net power delivered to the antenna
- SWR (Standing Wave Ratio)

For most accurate measurements, place the wattmeter:
- As close to the antenna as practical
- After any tuners or filters in the line
- Using the shortest possible jumper cables

##### Oscilloscope Measurement

For more detailed analysis, an oscilloscope can measure the RF envelope pattern:

<img src="../images/oscilloscope-power-measurement.svg" alt="Oscilloscope showing RF envelope measurement" style="width: 400px; margin: 10px;">

This method allows you to:
- Observe actual peak voltage
- Check for flat-topping or distortion
- Verify modulation characteristics

To use this method, you'll need:
- An oscilloscope with sufficient bandwidth
- An appropriate RF sampling device
- Knowledge of the impedance at the measurement point

#### Legal Power Limits

With your General license, you must adhere to FCC power limits:
- Maximum 1500 watts PEP output on most HF bands
- Lower limits on some bands (e.g., 200 watts PEP on 30 meters)
- Must use minimum power necessary for communications

Remember that these limits refer to output power, not input power. Your amplifier's power consumption from the wall outlet will be significantly higher due to efficiency factors.

#### The Bottom Line: Responsible Power Use

Higher power is a privilege that comes with responsibility. Before cranking up the watts:
1. Ensure your antenna system can handle the power
2. Check that your station is properly grounded
3. Verify you have appropriate RF safety measures in place
4. Consider whether you actually need more power or if antenna improvements might be more effective

Many experienced operators find that improving antennas, reducing local noise, or enhancing operating technique often yields better results than simply increasing power. Used judiciously, however, an amplifier can be the difference between making and missing that rare DX contact when conditions are marginal.

In the next section, we'll explore how to set up your station for digital mode operation, which adds another dimension to your General class operating privileges.
