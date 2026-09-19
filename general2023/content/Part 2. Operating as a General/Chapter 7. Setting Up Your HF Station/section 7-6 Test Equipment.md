---
chapter: "7"
section: "7.6"
status: reviewed1
questions: ["G4B06", "G4B09", "G4B03", "G4B04", "G4B07", "G4B08", "G4B13", "G4B12"]
---

### Section 7.6: Test Equipment and Measurement

A power or SWR reading can confirm that your station is transmitting into a reasonable load. It cannot tell you everything about the signal. Your CW might have abrupt keying edges, your SSB might be distorted, or your supply voltage might fall when you transmit. Each problem calls for a different observation. The measurement principles from Section 2.5 help you choose a tool that answers the question you actually have.

#### Choosing a Meter for the Job

A multimeter is often the first instrument you reach for. For example, comparing a low-voltage power supply's output while receiving and while transmitting can reveal a voltage drop that you would miss with the radio idle. A digital meter makes small differences easier to read:

> **Key Information:** An advantage of a digital multimeter compared to an analog multimeter is higher precision. {{< link id="G4B06" >}}

A numerical display avoids estimating a needle's position between scale markings. More digits do not guarantee a perfectly accurate measurement, however; the meter's specifications and selected range still matter. Remember the loading effect from Section 2.5 as well: connecting an instrument can change the circuit, particularly at a high-impedance point.

Sometimes a precise number is less useful than seeing which way the reading is moving. Suppose you are adjusting a circuit for a peak. As you turn past the best setting, you want to see the reading rise, stop, and fall.

> **Key Information:** An analog multimeter is preferred when adjusting circuits for maximum or minimum values. {{< link id="G4B09" >}}

A moving needle makes that trend visible without requiring you to compare a succession of changing numbers. This is also why the dip in plate current discussed in Section 7.4 is convenient to observe on an analog meter. Choose the display for the task: a value you need to record, or a change you need to follow.

#### Checking the Shape of a Transmission

When the problem concerns timing or shape, use the voltage-versus-time view introduced in Section 2.5. CW is a useful example. Its carrier is switched on and off, but the transitions should not be unnecessarily abrupt. Sharp edges can spread energy into nearby frequencies, heard by other operators as key clicks.

> **Key Information:** An oscilloscope is the best instrument for checking a CW transmitter's keying waveform. {{< link id="G4B03" >}}

The waveform lets you examine the rise and fall of each transmitted element. You are looking at the shaping of the RF envelope, not merely the speed at which dots and dashes are sent. Slowing down your Morse code does not by itself correct poorly shaped edges.

The same instrument can show how the RF envelope varies during a modulated transmission, but transmitter output is far too powerful to connect indiscriminately to an instrument input.

> **Key Information:** When checking a transmitted signal's RF envelope pattern, the attenuated RF output of the transmitter is connected to the oscilloscope's vertical input. {{< link id="G4B04" >}}

*Attenuated* means reduced to a suitable level. A properly designed sampling or attenuation arrangement lets the instrument observe the signal without receiving the transmitter's full output power. This is a measurement principle, not a wiring recipe: the transmitter load, sampler, attenuation, instrument ratings, and grounding must all suit the test. Learn the appropriate setup before making connections.

#### Testing Linearity with Two Tones

Section 2.2 explained that a linear amplifier preserves the waveform, while Section 3.3 showed how nonlinearity creates unwanted mixing products. Speech is constantly changing, which makes it a poor test signal when you want to compare one adjustment with another. Two steady audio tones provide a repeatable input instead.

> **Key Information:**
> - A two-tone test uses two non-harmonically related audio signals. {{< link id="G4B07" >}}
> - A two-tone test analyzes transmitter linearity. {{< link id="G4B08" >}}

For example, 700 Hz and 1900 Hz are not integer multiples of one another. Applied to an SSB transmitter, they ideally produce two corresponding RF tones in the selected sideband. Nonlinear operation creates additional intermodulation products. Those unwanted signals can interfere with stations outside the bandwidth you intended to occupy.

An oscilloscope shows the combined signal's envelope and can reveal deformation such as flattened peaks. A spectrum analyzer instead separates the output by frequency, showing the wanted tones and unwanted products. Those are different views of the same test; an ordinary time-domain scope display does not directly show individual spectral lines. Use the test to assess distortion, not only to seek the largest power reading.

#### Investigating the Antenna System

Section 7.1 introduced the directional wattmeter and antenna analyzer for checking the station's match. An analyzer becomes especially useful when a single SWR reading does not explain the problem: you can observe how impedance changes across a range of frequencies and compare measurements at different points in the system.

> **Key Information:** An antenna analyzer can measure the impedance of coaxial cable. {{< link id="G4B13" >}}

The impedance seen at one end depends on the cable and what is connected to its other end. For example, comparing a measurement through the feed line with a measurement at the antenna can help separate feed-line effects from antenna behavior. Follow the analyzer's measurement method for the property you want to determine; one reading through an arbitrary length of cable is not automatically its nominal characteristic impedance.

An analyzer supplies its own small test signal. That makes testing possible without using your transmitter, but also means outside RF can compete with the signal being measured.

> **Key Information:** Strong signals from nearby transmitters can produce received power that interferes with an antenna analyzer's SWR readings. {{< link id="G4B12" >}}

If a reading changes erratically while another station transmits, do not immediately conclude that the antenna changed. Check the measurement conditions. Strong RF can also exceed an instrument's safe input limits, so protect the analyzer as well as questioning the reading.

#### Verify Without Buying Everything

Most routine operation does not require a full test bench. A multimeter, a suitable SWR or power indication, and access to more specialized equipment when needed can answer many station questions. A club member's instrument and experience may be more useful than buying equipment you have not learned to use.

Begin with the symptom, decide what measurement would distinguish its possible causes, and change one thing at a time. Respect the electrical and RF hazards from Chapter 6; knowing what a test measures is not the same as being prepared to perform it safely. With a station whose behavior you can check rather than guess at, the next step is using it to make clear, considerate contacts. That is the focus of Chapter 8.
