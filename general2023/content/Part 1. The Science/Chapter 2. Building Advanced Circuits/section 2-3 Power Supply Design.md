---
slug: "section2.3"
questions: ["G7A01", "G7A02", "G7A03", "G7A04", "G7A05", "G7A06", "G7A07", "G7A08"]
---

### Section 2.3: Power Supply Fundamentals

Behind every successful amateur radio station lies an unsung hero: the power supply. While it may not be as exciting as a new transceiver or antenna, your power supply is the foundation that keeps everything running. With your General license privileges, you might be adding higher-power amplifiers or more sophisticated equipment to your station—making it even more important to understand how power supplies work.

#### From Wall Power to Radio Power

Most amateur radio equipment operates on DC (Direct Current), typically 12-14 volts. But the power coming from your wall outlet is 120V AC (Alternating Current). Your power supply's job is to perform this crucial conversion safely and reliably.

Let's look at the key components that make this transformation possible.

#### Rectification: Making AC Go One Way

The first step in converting AC to DC is rectification—changing alternating current that flows back and forth into direct current that flows in just one direction.

##### Half-Wave Rectification

> **Key Information:** *A half-wave rectifier uses only one diode and only converts 180 degrees of the AC cycle to DC.* {{< link id="G7A04" >}} {{< link id="G7A05" >}}

<img src="../images/half-wave-rectifier.svg" alt="Half-Wave Rectifier Circuit and Waveform" style="width: 350px; margin: 10px;">

In a half-wave rectifier:
- Only one diode is used
- Current flows only during positive half-cycles
- The negative half-cycles are blocked
- The output is pulsating DC with significant gaps

While simple, half-wave rectifiers are inefficient because they waste half of the input power. They're rarely used in amateur radio power supplies except in the simplest applications.

##### Full-Wave Rectification

For more efficient power conversion, we use full-wave rectification:

> **Key Information:** *A full-wave rectifier converts 360 degrees of the AC cycle to DC.* {{< link id="G7A06" >}}

There are two common types of full-wave rectifiers:

1. **Center-Tapped Transformer with Two Diodes**

> **Key Information:** *A full-wave rectifier circuit using a center-tapped transformer uses two diodes.* {{< link id="G7A03" >}}

<img src="../images/center-tap-rectifier.svg" alt="Center-Tapped Full-Wave Rectifier" style="width: 350px; margin: 10px;">

In this design:
- The transformer has a center tap on its secondary winding
- One diode conducts during positive half-cycles
- The other diode conducts during negative half-cycles
- The output uses both halves of the input cycle

2. **Bridge Rectifier**

<img src="../images/bridge-rectifier.svg" alt="Bridge Rectifier Circuit" style="width: 350px; margin: 10px;">

The bridge rectifier uses four diodes arranged so that:
- Current always flows through the load in the same direction
- The entire AC cycle is utilized
- No center-tapped transformer is required

> **Key Information:** *An unfiltered full-wave rectifier connected to a resistive load produces a series of DC pulses at twice the frequency of the AC input.* {{< link id="G7A07" >}}

For example, with 60 Hz AC input, the output pulses occur at 120 Hz because both the positive and negative half-cycles of the input are converted to positive pulses in the output.

#### Filter Networks: Smoothing the Bumps

The output from a rectifier is pulsating DC—not the smooth, constant voltage our radio equipment needs. Filter networks smooth these pulses into a more constant DC voltage.

> **Key Information:** *Capacitors and inductors are used in a power supply filter network.* {{< link id="G7A02" >}}

<img src="../images/filter-network.svg" alt="Power Supply Filter Network" style="width: 350px; margin: 10px;">

A typical filter network includes:

1. **Filter Capacitors**:
   - Store energy during voltage peaks
   - Release energy during voltage dips
   - Larger capacitance provides better smoothing

2. **Filter Inductors** (sometimes called chokes):
   - Resist changes in current flow
   - Help maintain steady current during voltage variations
   - Work with capacitors to reduce ripple

The combination of capacitors and inductors creates a low-pass filter that allows DC to pass while blocking the AC ripple components.

#### Bleeder Resistors: An Important Safety Feature

You might notice a large resistor connected across the filter capacitors in power supply schematics:

> **Key Information:** *A power supply bleeder resistor discharges the filter capacitors when power is removed.* {{< link id="G7A01" >}}

<img src="../images/bleeder-resistor.svg" alt="Bleeder Resistor in Power Supply" style="width: 300px; margin: 10px;">

This seemingly simple component serves a crucial safety function. Filter capacitors can hold a dangerous charge even after the power supply is turned off and unplugged. The bleeder resistor safely discharges these capacitors, preventing nasty (and potentially lethal) surprises when servicing the equipment.

Good safety practices include:
- Always including bleeder resistors in power supply designs
- Waiting for capacitors to discharge before touching internal components
- Using a discharging tool (insulated handle with resistor and probe) to manually discharge capacitors before working on equipment

#### Linear vs. Switching Power Supplies

Amateur radio operators use two main types of power supplies: linear and switching. Each has advantages and disadvantages.

##### Linear Power Supplies

Traditional linear power supplies use:
- Transformer to reduce voltage
- Rectifiers to convert AC to DC
- Filter capacitors to smooth the output
- Linear regulator to maintain stable voltage

They're relatively simple, reliable, and generate clean DC output with minimal RF noise.

##### Switching Power Supplies

> **Key Information:** *A characteristic of a switchmode power supply as compared to a linear power supply is that high-frequency operation allows the use of smaller components.* {{< link id="G7A08" >}}

<img src="../images/switching-ps.svg" alt="Switching Power Supply Block Diagram" style="width: 400px; margin: 10px;">

Switching power supplies (also called switch-mode power supplies or SMPS):
- Convert AC to DC
- Chop this DC into high-frequency pulses
- Use a small, high-frequency transformer
- Rectify and filter the transformer output

Their high-frequency operation (typically 50 kHz to 1 MHz) allows the use of much smaller transformers and filter components, making switching supplies more compact and lighter than equivalent linear supplies.

However, the switching action can generate RF noise that might interfere with your radio operation. Quality switching supplies designed specifically for amateur radio use include additional filtering to minimize this interference.

#### Voltage Regulation

Both linear and switching supplies typically include voltage regulation circuits to maintain steady output voltage despite:
- Variations in input voltage
- Changes in load current
- Temperature fluctuations

Modern power supplies often include additional features:
- Adjustable output voltage
- Current limiting for protection
- Over-voltage protection
- Short circuit protection
- Multiple outputs

#### Practical Power Supply Considerations

As a General class operator with access to more bands and possibly higher power levels, you'll want to consider these factors when selecting a power supply:

1. **Current Capacity**:
   - A 100W HF transceiver typically needs 20-25A
   - Add margin for accessories
   - Consider peak current demands, especially for SSB operation

2. **Voltage Stability**:
   - Most modern transceivers specify 13.8V DC ±15%
   - Poor regulation can cause output power fluctuation
   - Voltage sag under load can cause symptoms like distorted audio

3. **RF Noise**:
   - Some switching supplies generate RFI
   - Look for supplies designed specifically for amateur radio
   - Additional filtering may be needed

4. **Physical Size and Heat**:
   - Linear supplies are typically larger and heavier
   - Both types generate heat and need ventilation
   - Mobile/portable operation may require compromise

#### Power Supply Safety

Working with power supplies requires attention to safety:

1. **High Voltage Dangers**:
   - Filter capacitors can hold lethal charges
   - Always discharge capacitors before servicing
   - Use insulated tools when working on power supplies

2. **Current Capacity**:
   - High-current DC can cause severe burns and fire
   - Use properly rated wiring and connectors
   - Fuse all DC power lines appropriately

3. **Heat Management**:
   - Ensure adequate ventilation
   - Keep power supplies away from flammable materials
   - Monitor for unusual heating during operation

#### Power Supply Troubleshooting

Common power supply problems and their symptoms include:

1. **No Output Voltage**:
   - Blown fuse or tripped circuit breaker
   - Failed rectifier diodes
   - Open transformer winding
   - Failed regulator

2. **Low Output Voltage**:
   - Failing filter capacitors (increased ripple)
   - Regulator issues
   - Overload condition
   - Input voltage too low

3. **Excessive Ripple**:
   - Failed filter capacitors
   - Open filter inductor
   - Rectifier diode issues

4. **Overheating**:
   - Component failure
   - Overload condition
   - Inadequate ventilation
   - Internal short circuit

Basic troubleshooting steps include:
- Visual inspection for burned components
- Checking fuses
- Measuring input and output voltages
- Checking ripple with an oscilloscope (if available)
- Testing rectifier diodes with a multimeter

#### Powering Your Adventures

A reliable power supply is the foundation of your amateur radio station. Understanding how they work helps you:
- Select the right power supply for your needs
- Troubleshoot problems when they arise
- Operate safely with high voltages and currents

Whether you choose a traditional linear supply or a modern switching supply, ensuring it provides clean, stable power at sufficient current capacity will help your radio equipment perform at its best—letting you make the most of your new General class privileges!

With reliable power now flowing to our equipment, let's explore how modern radios utilize digital circuits to process signals, control functions, and open up exciting new operating modes.
