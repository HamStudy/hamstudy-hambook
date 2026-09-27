---
chapter: "7"
section: "7.6"
status: draft3
questions: ["G4B06", "G4B09", "G4B03", "G4B04", "G4B07", "G4B08", "G4B13", "G4B12"]
---

### Section 7.6: Test Equipment and Measurement

A normal power reading does not show whether a transmission is distorted. Nor does it explain a supply voltage drop or a changing antenna match. The measurement principles from Section 2.5 help you choose a test that answers the question you have.

#### Choosing a Meter for the Job

Comparing a power supply's DC voltage while receiving and transmitting can reveal a drop that is not present while the radio is idle. A digital multimeter is useful when you need to read and compare small differences:

> **Key Information:** An advantage of a digital multimeter compared to an analog multimeter is higher precision. {{< link id="G4B06" >}}

A numerical display avoids estimating a needle's position between scale markings. The meter's accuracy specifications still matter, however; more displayed digits do not guarantee a more accurate result.

When adjusting a circuit for a peak or dip, the direction of change matters more than the exact value. A moving needle lets you follow the reading as it rises, reaches a turning point, and falls:

> **Key Information:** An analog multimeter is preferred when adjusting circuits for maximum or minimum values. {{< link id="G4B09" >}}

This is also why an analog plate-current meter is useful for observing the tuning dip described in Section 7.4.

#### Looking at a Transmitted Signal

CW illustrates why signal shape matters. Each dot or dash turns the RF carrier on and off, but its rise and fall should be controlled. Abrupt transitions spread energy into nearby frequencies, where other operators may hear key clicks:

> **Key Information:** An oscilloscope is the best instrument for checking a CW transmitter's keying waveform. {{< link id="G4B03" >}}

The scope shows how the RF envelope rises and falls, letting you inspect the shape of each element rather than only its length.

For either CW or a modulated signal, the sample comes from the transmitter's RF output. It must be reduced to a level the scope can safely accept:

> **Key Information:** When checking a transmitted signal's RF envelope pattern, the attenuated RF output of the transmitter is connected to the oscilloscope's vertical input. {{< link id="G4B04" >}}

Use a sampling or attenuation arrangement rated for the frequency and power involved. The transmitter still needs a suitable load, such as a properly rated dummy load; the oscilloscope input is not a substitute. Follow the equipment's measurement instructions before making connections.

#### Testing Transmitter Linearity

For SSB, one important question is whether the transmitting system preserves the signal without adding unwanted distortion. Speech changes constantly, so two steady audio tones provide a repeatable test:

> **Key Information:**
> - A two-tone test uses two non-harmonically related audio signals. {{< link id="G4B07" >}}
> - A two-tone test analyzes transmitter linearity. {{< link id="G4B08" >}}

For example, 700 Hz and 1900 Hz are not harmonically related because neither frequency is a whole-number multiple of the other. Applied together to an SSB transmitter, they produce two corresponding RF tones. Nonlinear operation creates additional intermodulation products that may extend beyond the intended bandwidth.

An oscilloscope can reveal obvious distortion in the combined RF envelope, such as flattened peaks. A spectrum analyzer separates the output by frequency so you can compare the wanted tones with unwanted products. Use the test to check for distortion at the intended output power.

#### Checking the Antenna System

Section 7.1 introduced the antenna analyzer for checking SWR. It can also help investigate the feed line itself:

> **Key Information:** An antenna analyzer can measure the impedance of coaxial cable. {{< link id="G4B13" >}}

A cable's nominal impedance, such as 50 ohms, is its characteristic impedance. This is not necessarily the impedance measured at one end of the cable. That input impedance also depends on frequency, cable length, and the load at the far end. Follow the analyzer's cable-testing procedure to determine characteristic impedance rather than treating a single input reading as the cable's rating.

An analyzer uses its own small test signal. RF received by the antenna under test can interfere with that measurement:

> **Key Information:** Strong signals from nearby transmitters can produce received power that interferes with an antenna analyzer's SWR readings. {{< link id="G4B12" >}}

If readings change when a nearby station transmits, incoming RF may be affecting the measurement. Strong RF can also damage the analyzer, so follow the manufacturer's precautions around active transmitters and disconnect it when not in use.

#### Choosing the Right Test

You do not need every instrument to operate an HF station. Start with the symptom, decide what measurement would help identify its cause, and use equipment suited to that test. A club member may be able to provide both an instrument and guidance in using it safely.

With the station working as expected, you can focus on making clear, considerate contacts. Chapter 8 covers those operating skills.
