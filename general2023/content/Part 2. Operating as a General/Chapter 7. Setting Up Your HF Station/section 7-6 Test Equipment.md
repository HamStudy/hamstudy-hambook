---
chapter: "7"
section: "7.6"
status: reviewed1
questions: ["G4B06", "G4B09", "G4B03", "G4B04", "G4B07", "G4B08", "G4B13", "G4B12"]
---

### Section 7.6: Test Equipment and Measurement

Section 2.5 introduced multimeters and oscilloscopes and showed how different instruments reveal different things about a circuit. The same principle applies to troubleshooting a station: begin with what you are trying to learn, then choose an instrument that can show it.

#### Choosing a Meter for the Job

Digital and analog multimeters measure many of the same things, but their displays make them better suited to different jobs.

A digital meter is useful when you want a precise numerical value, such as checking whether a power supply voltage drops when you transmit:

> **Key Information:** An advantage of a digital multimeter compared to an analog multimeter is higher precision. {{< link id="G4B06" >}}

When making an adjustment, however, the exact number may matter less than seeing whether the reading is rising or falling. A moving needle makes it easy to follow a peak or dip as you turn a control:

> **Key Information:** An analog multimeter is preferred when adjusting circuits for maximum or minimum values. {{< link id="G4B09" >}}

Choose the display that best matches the job: digital when you need a value, analog when you need to follow a trend.

#### Looking at a Transmitted Signal

An oscilloscope becomes useful when you care about the shape of a transmitted signal rather than only its power.

CW is a good example. The transmitter switches its carrier on and off to form dots and dashes, but those transitions must be shaped properly. If they are too abrupt, they can produce key clicks and spread energy onto nearby frequencies.

> **Key Information:** An oscilloscope is the best instrument for checking a CW transmitter's keying waveform. {{< link id="G4B03" >}}

The same instrument can display the RF envelope of a modulated transmission. You do not connect a transmitter's full RF output directly to an ordinary oscilloscope input; instead, you observe a suitably reduced sample:

> **Key Information:** When checking a transmitted signal's RF envelope pattern, the attenuated RF output of the transmitter is connected to the oscilloscope's vertical input. {{< link id="G4B04" >}}

The attenuation brings the sample within the instrument's safe input range while preserving the waveform you want to examine.

#### Testing Transmitter Linearity

For SSB, one important question is whether the transmitter amplifies a changing signal without introducing excessive distortion. Ordinary speech is not convenient for comparing adjustments because it is constantly changing, so a two-tone test provides a repeatable signal.

> **Key Information:**
> - A two-tone test uses two non-harmonically related audio signals. {{< link id="G4B07" >}}
> - A two-tone test analyzes transmitter linearity. {{< link id="G4B08" >}}

The two audio tones produce corresponding RF signals in the transmitted sideband. If the transmitter is nonlinear, it also creates unwanted intermodulation products. An oscilloscope can reveal distortion in the RF envelope, while a spectrum analyzer can separate the wanted and unwanted signals by frequency.

The goal of the test is not maximum power, but clean amplification without excessive distortion.

#### Checking the Antenna System

An antenna analyzer generates its own small test signal and measures how an antenna or feed line responds. Besides checking SWR and antenna impedance, it can also make measurements involving feed line:

> **Key Information:** An antenna analyzer can measure the impedance of coaxial cable. {{< link id="G4B13" >}}

The result depends on the cable, its length, and what is connected to the other end, so follow the analyzer's procedure for the particular measurement you are making.

Because an analyzer works with a very small signal, strong RF from a nearby transmitter can interfere with its measurements:

> **Key Information:** Strong signals from nearby transmitters can produce received power that interferes with an antenna analyzer's SWR readings. {{< link id="G4B12" >}}

If an analyzer's readings become erratic while another station transmits nearby, the antenna may not have changed at all—the analyzer may simply be receiving unwanted RF.

#### Measure the Problem

No single instrument tells you everything about a station. A multimeter can show a voltage problem, an oscilloscope can reveal waveform problems, and an antenna analyzer can investigate the antenna system. More specialized equipment, such as a spectrum analyzer, provides another view when necessary.

Start with the symptom and ask what measurement would help distinguish its possible causes. Choosing the right observation is more useful than simply collecting numbers. With the station working as expected, the next step is using it to make clear, considerate contacts. That is the focus of Chapter 8.
