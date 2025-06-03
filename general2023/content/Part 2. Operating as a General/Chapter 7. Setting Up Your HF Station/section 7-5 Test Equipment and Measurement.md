---
chapter: "7"
section: "7.5"
questions: ["G4B01", "G4B02", "G4B03", "G4B04", "G4B05", "G4B06", "G4B07", "G4B08", "G4B09", "G4B12", "G4B13"]
---

### Section 7.5: Test Equipment and Measurement

As your station grows more sophisticated with your General class privileges, proper test equipment becomes increasingly important. The right tools help you evaluate, troubleshoot, and optimize your station's performance. In this section, we'll explore essential test equipment and measurement techniques that will help you get the most from your amateur radio station.

#### The Oscilloscope: Visualizing Signals

Among the most versatile instruments in a ham's toolkit is the oscilloscope:

> **Key Information:** *An oscilloscope contains horizontal and vertical channel amplifiers.* {{< link id="G4B01" >}}

<img src="../images/oscilloscope-block-diagram.svg" alt="Block diagram of basic oscilloscope components" style="width: 450px; margin: 10px;">

An oscilloscope (often called a "scope") displays signal voltage as a function of time, allowing you to see the actual waveform. The horizontal amplifier controls the time base (how fast the trace moves across the screen), while the vertical amplifier handles the voltage measurement.

Modern digital storage oscilloscopes (DSOs) offer additional features like signal storage, automated measurements, and digital filters, but even a basic analog scope provides valuable insights:

> **Key Information:** *An advantage of an oscilloscope versus a digital voltmeter is that complex waveforms can be measured.* {{< link id="G4B02" >}}

Unlike a voltmeter that shows only a single value, an oscilloscope reveals the complete shape of a signal, letting you see:
- Peak voltages and timing
- Signal distortion
- Unwanted components or noise
- Modulation characteristics

One particularly useful application is checking CW transmitter keying:

> **Key Information:** *An oscilloscope is the best instrument to use for checking the keying waveform of a CW transmitter.* {{< link id="G4B03" >}}

<img src="../images/cw-keying-waveforms.svg" alt="Oscilloscope displays showing good vs poor CW keying waveforms" style="width: 450px; margin: 10px;">

By examining the keying waveform, you can identify issues like:
- Key clicks caused by excessively fast rise or fall times
- Chirp (frequency shift during keying)
- Unstable keying or bouncing contacts
- RF envelope shaping problems

To check your transmitter's RF envelope pattern:

> **Key Information:** *The attenuated RF output of the transmitter is connected to the vertical input of an oscilloscope when checking the RF envelope pattern of a transmitted signal.* {{< link id="G4B04" >}}

This setup requires reducing your transmitter's output to a safe level for your scope's input using appropriate attenuators and possibly an RF sampling device or pickup coil. Never connect a transmitter's direct output to an oscilloscope without proper attenuation!

#### Digital vs. Analog Multimeters

The multimeter remains an essential tool in every ham's collection. Both analog and digital versions have their place:

> **Key Information:** *Voltmeters have high input impedance because it decreases the loading on circuits being measured.* {{< link id="G4B05" >}}

<img src="../images/voltmeter-circuit-loading.svg" alt="Diagram showing how high vs low impedance affects circuit measurements" style="width: 400px; margin: 10px;">

A low-impedance meter would draw significant current from the circuit under test, potentially altering its behavior and giving inaccurate readings. High input impedance (typically 10 megohms or higher in digital multimeters) minimizes this loading effect.

Digital multimeters (DMMs) offer several advantages:

> **Key Information:** *Higher precision is an advantage of a digital multimeter as compared to an analog multimeter.* {{< link id="G4B06" >}}

Modern DMMs typically provide:
- 3½ to 6½ digits of precision
- Auto-ranging capabilities
- Multiple measurement functions
- Data hold and min/max recording
- Computer interfaces in advanced models

However, analog meters still excel in certain situations:

> **Key Information:** *An analog multimeter is preferred to a digital multimeter when adjusting circuits for maximum or minimum values.* {{< link id="G4B09" >}}

The moving needle of an analog meter makes it easier to see trends and peaks when adjusting circuits like:
- Receiver alignment
- Antenna tuning
- Oscillator frequency adjustment
- Power supply regulation

For best results, maintain both types in your test equipment collection.

#### Two-Tone Testing for SSB Transmitters

When evaluating SSB transmitters, a specialized test called the "two-tone test" provides valuable insights:

> **Key Information:** *Two non-harmonically related audio signals are used to conduct a two-tone test.* {{< link id="G4B07" >}}

<img src="../images/two-tone-test-setup.svg" alt="Diagram of two-tone test setup and resulting pattern" style="width: 450px; margin: 10px;">

This test involves sending two audio tones (typically around 700 Hz and 1900 Hz) through your SSB transmitter while observing the output on an oscilloscope. The result should be a characteristic pattern that reveals the transmitter's linearity:

> **Key Information:** *Linearity is the transmitter performance parameter that a two-tone test analyzes.* {{< link id="G4B08" >}}

A linear transmitter produces an output waveform that's a faithful reproduction of the input, just amplified. Non-linearity causes distortion that results in:
- Splatter (interference to adjacent frequencies)
- Reduced intelligibility
- Potential damage to the final amplifier

By analyzing the oscilloscope pattern during a two-tone test, you can:
1. Identify improper bias settings
2. Detect overdriving of amplifier stages
3. Verify proper neutralization
4. Ensure compliance with good engineering practices

Commercial two-tone generators are available, but you can also create test tones using computer software and your digital interface.

#### Antenna Analysis Tools

Beyond basic SWR meters, more sophisticated instruments help characterize antenna systems:

##### Antenna Analyzers

Antenna analyzers combine multiple measurement functions in a portable package, allowing comprehensive evaluation of antennas and feed lines without transmitting:

> **Key Information:** *When using an antenna analyzer for SWR measurements, the antenna and feed line must be connected.* {{< link id="G4B11" >}}

<img src="../images/antenna-analyzer-usage.svg" alt="Proper connection of antenna analyzer to antenna system" style="width: 400px; margin: 10px;">

These versatile instruments typically measure:
- SWR across a frequency range
- Complex impedance (resistance and reactance)
- Resonant frequencies
- Capacitance and inductance
- Cable length and velocity factor

Modern analyzers provide graphical displays showing parameter changes across frequency, making antenna tuning and troubleshooting much easier.

However, be aware of potential measurement errors:

> **Key Information:** *Strong signals from nearby transmitters can cause received power that interferes with SWR readings on an antenna analyzer.* {{< link id="G4B12" >}}

When using an analyzer in the field or at multi-operator events, strong nearby signals can corrupt measurements. To avoid this:
- Ask nearby operators to stand by briefly
- Use the analyzer when band activity is low
- Shield the analyzer or move away from high-power stations
- Some analyzers include band-pass filtering to reduce this problem

##### Advanced Measurement Capabilities

Modern antenna analyzers go beyond basic SWR measurements:

> **Key Information:** *Impedance of coaxial cable can be measured with an antenna analyzer.* {{< link id="G4B13" >}}

This capability lets you:
- Verify cable specifications
- Find hidden damage in feed lines
- Determine cable electrical length
- Calculate velocity factor
- Detect water infiltration or corrosion

Some analyzers even include time-domain reflectometry (TDR) functions that can pinpoint the exact location of cable faults—a tremendous help when troubleshooting long feed line runs.

#### Directional Wattmeters

Directional wattmeters remain the standard for measuring transmitted power and SWR during actual operation:

<img src="../images/directional-wattmeter-operation.svg" alt="Cross-section diagram showing how directional wattmeter works" style="width: 450px; margin: 10px;">

Unlike antenna analyzers that use their own low-power test signals, directional wattmeters measure your actual transmitted signal. They contain directional couplers that separately sample forward and reflected power, allowing calculation of net power and SWR.

When selecting a wattmeter:
- Ensure it covers your frequency range of interest
- Verify it handles your expected power levels
- Consider accuracy specifications (typically ±5-10%)
- Look for selectable power scales for better resolution

For most accurate measurements, place the wattmeter as close to the antenna as practical, after any tuners or filters.

#### Equipment You Can Build

While commercial test equipment offers convenience and precision, many useful instruments can be built at modest cost:

1. **Dummy Loads**: Non-radiating resistive loads for testing transmitters without causing interference
2. **SWR Bridges**: Simple circuits for measuring standing wave ratio
3. **Field Strength Meters**: Help evaluate antenna radiation patterns
4. **Grid Dip Meters**: Versatile instruments for determining resonance
5. **Signal Generators**: Provide test signals for receiver alignment
6. **Antenna Noise Bridges**: Help determine antenna impedance

Many kits and designs are available in amateur radio publications and online. Building your own test equipment not only saves money but also enhances your understanding of circuit operation.

#### Practical Measurement Tips

To get the most from your test equipment:

1. **Calibrate Regularly**: Even high-quality instruments drift over time. Periodically check against known standards.

2. **Document Measurements**: Keep records of baseline measurements when your station is working well. This provides valuable comparison data when troubleshooting.

3. **Consistent Conditions**: When comparing measurements over time, try to maintain similar conditions (power level, frequency, connections).

4. **Proper Connections**: Use appropriate adapters and short, high-quality cables for test equipment connections.

5. **Safety First**: Never exceed voltage or power ratings of your instruments, and use isolation transformers when measuring equipment connected to AC power.

6. **Load Consideration**: Remember that connecting test equipment may alter circuit behavior. Account for this when interpreting results.

#### The Bottom Line: Test, Measure, Improve

Test equipment isn't just for fixing problems—it's for optimizing performance. Regular measurements help ensure your station operates at its best, complies with regulations, and causes minimum interference to others.

As you grow in the hobby, gradually build your test equipment collection based on your interests and needs. Even a modest assortment of basic instruments will significantly enhance your capabilities and enjoyment of amateur radio.

With the knowledge from this chapter, you're well-equipped to set up, operate, and maintain a capable HF station that makes the most of your General class privileges. In the next chapter, we'll explore operating procedures that will help you make successful contacts and navigate the protocols and conventions of the amateur radio community.
