---
slug: "section2.5"
questions: ["G7A09", "G7A10", "G7A11", "G7A12", "G7A13", "G4B01", "G4B02", "G4B05", "G4B06", "G4B07", "G4B08", "G4B09"]
---

### Section 2.5: Test Equipment and Schematic Reading

With your new General class privileges, you might find yourself diving deeper into station setup, troubleshooting, or even building some of your own gear. To do this effectively, you'll need to understand schematic diagrams and know how to use basic test equipment. Let's explore these essential skills for the active ham!

#### Reading Schematic Symbols: The Language of Electronics

Schematics are like road maps for electronics—they show how components connect using standardized symbols. Let's look at some key symbols you'll need to recognize for the General exam and your radio adventures.

##### Semiconductor Symbols

> **Key Information:** *In figure G7-1, the symbol labeled as number 1 represents a field effect transistor.* {{< link id="G7A09" >}}

<img src="../images/fet-symbol.svg" alt="Field Effect Transistor Symbol" style="width: 150px; margin: 10px;">

Field Effect Transistors (FETs) have symbols showing:
- The Gate (G) controlling current flow
- The Source (S) where current enters
- The Drain (D) where current exits

> **Key Information:** *In figure G7-1, the symbol labeled as number 5 represents a Zener diode.* {{< link id="G7A10" >}}

<img src="../images/zener-diode-symbol.svg" alt="Zener Diode Symbol" style="width: 150px; margin: 10px;">

The Zener diode symbol resembles a regular diode but with bent lines at the ends of the bar, indicating its special voltage regulation properties.

> **Key Information:** *In figure G7-1, the symbol labeled as number 2 represents an NPN junction transistor.* {{< link id="G7A11" >}}

<img src="../images/npn-transistor-symbol.svg" alt="NPN Transistor Symbol" style="width: 150px; margin: 10px;">

The NPN transistor symbol shows:
- The arrow pointing outward (away from the base)
- Three terminals: Emitter (where the arrow is), Base (middle connection), and Collector

##### Transformer and Inductor Symbols

> **Key Information:** *In Figure G7-1, the symbol labeled as number 6 represents a solid core transformer.* {{< link id="G7A12" >}}

<img src="../images/transformer-symbol.svg" alt="Transformer Symbol" style="width: 150px; margin: 10px;">

The solid core is represented by the parallel lines between the coils, showing that the windings share a common core material.

> **Key Information:** *In Figure G7-1, the symbol labeled as number 7 represents a tapped inductor.* {{< link id="G7A13" >}}

<img src="../images/tapped-inductor-symbol.svg" alt="Tapped Inductor Symbol" style="width: 150px; margin: 10px;">

A tapped inductor has an additional connection point somewhere along its length, allowing access to a portion of the total inductance.

#### Essential Test Equipment

As you expand your station and take on more ambitious projects, having the right test equipment becomes increasingly important. Let's explore some essential tools for the General class amateur.

##### Oscilloscopes: Seeing Signals in Action

> **Key Information:** *A item of test equipment that contains horizontal and vertical channel amplifiers is an oscilloscope.* {{< link id="G4B01" >}}

<img src="../images/oscilloscope.svg" alt="Basic Oscilloscope" style="width: 350px; margin: 10px;">

An oscilloscope displays signal waveforms on a screen, showing how voltage changes over time. Think of it as an electronic "camera" that captures electrical signals in action.

Key oscilloscope features include:
- Horizontal axis showing time
- Vertical axis showing voltage
- Controls for adjusting time scale (seconds per division)
- Controls for adjusting voltage scale (volts per division)
- Trigger controls to stabilize the display

> **Key Information:** *An advantage of an oscilloscope versus a digital voltmeter is that complex waveforms can be measured.* {{< link id="G4B02" >}}

While a voltmeter gives you a single value, an oscilloscope shows the entire waveform, allowing you to:
- See signal shape and distortion
- Measure timing relationships
- Identify noise and interference
- Observe modulation characteristics

> **Key Information:** *An oscilloscope is the best instrument to use for checking the keying waveform of a CW transmitter.* {{< link id="G4B03" >}}

<img src="../images/cw-keying-waveform.svg" alt="CW Keying Waveform on Oscilloscope" style="width: 350px; margin: 10px;">

By viewing the keying waveform, you can check for:
- Key clicks (sharp transitions causing interference)
- Proper rise and fall times
- Voltage overshoots
- Timing accuracy

For checking RF envelope patterns from your transmitter:

> **Key Information:** *The attenuated RF output of the transmitter is connected to the vertical input of an oscilloscope when checking the RF envelope pattern of a transmitted signal.* {{< link id="G4B04" >}}

Remember to use appropriate attenuation—connecting full transmitter output directly to an oscilloscope would damage the instrument!

##### Digital and Analog Multimeters

Multimeters are versatile instruments that measure voltage, current, and resistance. You'll find both digital and analog varieties, each with advantages.

> **Key Information:** *Digital multimeters are preferred over analog multimeters for higher precision measurements.* {{< link id="G4B06" >}}

Digital multimeters (DMMs) offer:
- Precise numerical readings
- Higher input impedance
- Auto-ranging capability
- Additional measurements (frequency, capacitance, etc.)

However, analog meters have their place too:

> **Key Information:** *An analog multimeter is preferred over a digital multimeter when adjusting circuits for maximum or minimum values.* {{< link id="G4B09" >}}

The constantly moving needle of an analog meter makes it easier to see when you've reached a peak or minimum value during adjustments. It's like the difference between watching a speedometer needle versus a digital speed display when trying to maintain a steady speed.

> **Key Information:** *Voltmeters have high input impedance because it decreases the loading on circuits being measured.* {{< link id="G4B05" >}}

<img src="../images/voltmeter-loading.svg" alt="Voltmeter Loading Effect" style="width: 350px; margin: 10px;">

High input impedance prevents the meter from drawing significant current from the circuit being measured, which would alter the voltage and give inaccurate readings. This is especially important when measuring high-impedance circuits like oscillators or RF stages.

##### Two-Tone Testing for SSB Transmitters

To check the linearity of a single sideband transmitter, a two-tone test is used:

> **Key Information:** *Two non-harmonically related audio signals are used to conduct a two-tone test.* {{< link id="G4B07" >}}

<img src="../images/two-tone-test.svg" alt="Two-Tone Test Setup" style="width: 350px; margin: 10px;">

This test involves:
1. Feeding two audio tones (typically 700 Hz and 1900 Hz) into the transmitter
2. Observing the output signal on an oscilloscope or spectrum analyzer
3. Looking for distortion that indicates non-linearity

> **Key Information:** *A two-tone test analyzes transmitter linearity.* {{< link id="G4B08" >}}

<img src="../images/two-tone-patterns.svg" alt="Two-Tone Test Patterns" style="width: 400px; margin: 10px;">

In a properly operating linear amplifier, the output envelope should show a clear pattern without flattening or distortion. Any clipping or asymmetry indicates nonlinear operation, which can cause:
- Splatter on adjacent frequencies
- Increased distortion
- Reduced intelligibility
- Potential interference to other stations

##### Directional Wattmeters and Antenna Analyzers

> **Key Information:** *Standing wave ratio (SWR) can be determined with a directional wattmeter.* {{< link id="G4B10" >}}

<img src="../images/directional-wattmeter.svg" alt="Directional Wattmeter" style="width: 300px; margin: 10px;">

A directional wattmeter measures both forward and reflected power in a transmission line, allowing you to calculate SWR. These instruments help ensure efficient power transfer to your antenna system.

Similarly, antenna analyzers provide comprehensive information about antennas and transmission lines:

> **Key Information:** *An antenna and feed line must be connected to an antenna analyzer when it is being used for SWR measurements.* {{< link id="G4B11" >}}

Modern antenna analyzers can measure:
- SWR across a range of frequencies
- Impedance (resistance and reactance)
- Return loss
- Cable length and loss
- Resonant frequency

> **Key Information:** *Nearby transmitters can interfere with an antenna analyzer by generating received power that interferes with SWR readings.* {{< link id="G4B12" >}}

This interference occurs because the analyzer measures all RF energy, not just its own test signal. Strong nearby transmitters can cause erroneous readings.

> **Key Information:** *An antenna analyzer can be used to measure the impedance of coaxial cable.* {{< link id="G4B13" >}}

This is particularly useful when:
- Checking for cable faults
- Determining the electrical length of cable
- Making custom matching sections
- Verifying cable characteristics

#### Setting Up Your Test Bench

As a General class operator, having a basic test bench can help you maintain and troubleshoot your station. Here's what to consider:

##### Essential Equipment
- Digital multimeter (for general measurements)
- Antenna analyzer or SWR meter
- Dummy load (for testing transmitters safely)
- Simple RF probe (can be homebrewed)

##### Additional Useful Tools
- Oscilloscope (new or used)
- Signal generator
- Frequency counter
- Power meter

##### Safety First!
When setting up test equipment:
- Ensure proper grounding
- Use appropriate fusing
- Avoid RF exposure
- Connect equipment properly to prevent damage

#### Practical Applications of Test Equipment

Let's look at some common scenarios where test equipment proves invaluable:

##### Troubleshooting a Power Supply
1. Use a multimeter to check AC input voltage
2. Check DC output voltage with and without load
3. Measure ripple with an oscilloscope
4. Check for heat issues with components

##### Analyzing Antenna System Performance
1. Use an antenna analyzer to check SWR across operating frequencies
2. Look for resonant points and impedance values
3. Check coax cables for losses or damage
4. Optimize antenna tuner settings

##### Evaluating Transmitter Performance
1. Measure output power into a dummy load
2. Check modulation quality with a two-tone test
3. Observe keying waveform for CW operation
4. Test for harmonic content with a spectrum analyzer (if available)

#### From Components to Signals

Now that we've explored the basic components that make up your radio equipment, you have a better understanding of what's happening "under the hood" when you operate. These components—from simple resistors and capacitors to complex integrated circuits and power supply systems—form the foundation of all radio communication.

But how do these components work together to create, process, and decode radio signals? In the next chapter, we'll dive into signal theory and modulation—exploring how information is encoded onto radio waves using both analog and digital techniques. You'll learn about the modulation methods used for different amateur modes and understand how signals are mixed, filtered, and processed in modern transceivers. This knowledge will help you make informed operating decisions as you explore your new General class privileges.
