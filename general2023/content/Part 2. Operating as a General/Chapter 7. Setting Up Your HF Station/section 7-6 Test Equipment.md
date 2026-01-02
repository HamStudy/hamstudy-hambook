---
chapter: "7"
section: "7.6"
questions: ["G4B01", "G4B02", "G4B03", "G4B04", "G4B05", "G4B06", "G4B07", "G4B08", "G4B09", "G4B12", "G4B13"]
status: reviewed1
---

### Section 7.6: Test Equipment and Measurement

Your transceiver has built-in meters showing forward power, reflected power, and SWR. These tell you the basics—are you getting power out, is your antenna matched reasonably well? But sometimes you need to dig deeper. Is your CW keying clean or does it have clicks? Is your SSB signal linear or are you generating distortion products? What's actually happening with your antenna system at different frequencies?

This is where test equipment comes in. You don't need a bench full of expensive gear for everyday operation, but understanding what different instruments do—and when you might need them—helps you troubleshoot problems and verify your station is working properly.

#### Beyond Basic Meters

Your transceiver's power meter measures one thing: how much RF you're putting out. That's useful but incomplete. Power doesn't tell you if the signal is clean, if the keying waveform is smooth, or if you're creating harmonics and spurious emissions. For those questions, you need instruments that can measure voltage, view waveforms, or analyze signal quality.

#### Measuring DC and Low-Frequency AC

The most basic test instrument is the multimeter, which measures voltage, current, and resistance. You'll use it for checking power supply voltages, measuring antenna system DC resistance, or verifying relay operations.

Modern digital multimeters offer a significant advantage:

> **Key Information:** An advantage of a digital multimeter as compared to an analog multimeter is higher precision. {{< link id="G4B06" >}}

Digital meters display exact values—12.47 volts, not "about 12.5" based on reading a needle against a scale. For most amateur radio work, this precision helps you verify specifications and troubleshoot with confidence.

But analog meters have their place:

> **Key Information:** An analog multimeter is preferred to a digital multimeter when adjusting circuits for maximum or minimum values. {{< link id="G4B09" >}}

When you're tuning a circuit and watching for a peak or dip, a smoothly moving needle is easier to follow than a rapidly changing digital display. The needle's motion gives you immediate feedback about which direction to turn the adjustment. This is why many amplifiers still use analog meters for tuning—you're watching for that dip in plate current, and a needle makes it obvious.

One critical design feature of all voltmeters:

> **Key Information:** Voltmeters have high input impedance because it decreases the loading on circuits being measured. {{< link id="G4B05" >}}

When you connect a meter to a circuit, you're adding a parallel path for current. If the meter has low impedance, it draws significant current and changes what you're trying to measure. High input impedance (typically many megohms) means the meter barely affects the circuit—you're measuring the voltage as it actually exists, not the voltage with a heavy load added.

#### Viewing Waveforms

Sometimes you need to see the actual shape of a signal, not just measure its voltage. This is where oscilloscopes become essential:

> **Key Information:** An oscilloscope contains horizontal and vertical channel amplifiers. {{< link id="G4B01" >}}

The vertical amplifier drives the display up and down (showing voltage), while the horizontal amplifier sweeps time from left to right. You see voltage versus time—the actual waveform of whatever signal you're measuring.

Compared to a voltmeter:

> **Key Information:** An advantage of an oscilloscope versus a digital voltmeter is that complex waveforms can be measured. {{< link id="G4B02" >}}

A voltmeter shows you the RMS or peak voltage. An oscilloscope shows you the shape: Is it a clean sine wave? Square wave? Does it have overshoot, ringing, or distortion? You can see problems that voltage measurements alone would miss.

For example, checking CW keying quality:

> **Key Information:** The best instrument to use for checking the keying waveform of a CW transmitter is an oscilloscope. {{< link id="G4B03" >}}

Connect the oscilloscope to your transmitter's output (through a proper attenuator to protect the scope), send some CW, and watch the waveform. Clean keying shows smooth rise and fall times without clicks or overshoot. Harsh keying shows sharp transitions or ringing—these create key clicks that interfere with adjacent frequencies. You can see the problem directly and adjust your keying speed or waveform shaping to fix it.

For viewing your transmitter's modulated RF:

> **Key Information:** The attenuated RF output of the transmitter is connected to the vertical input of an oscilloscope when checking the RF envelope pattern of a transmitted signal. {{< link id="G4B04" >}}

The oscilloscope can't handle your full transmitter power (typically 100 watts or more), so you use an attenuator or directional coupler to reduce it to milliwatt levels. Then you can see the modulation envelope—the shape of your voice signal imposed on the RF carrier. This reveals overmodulation, distortion, or asymmetry that audio monitoring alone might miss.

#### Verifying Transmitter Quality

For SSB transmitters, the gold standard test is the two-tone test:

> **Key Information:** 
> - A two-tone test uses two non-harmonically related audio signals. {{< link id="G4B07" >}}
> - A two-tone test analyzes transmitter linearity. {{< link id="G4B08" >}}

You feed your transmitter two pure audio tones—typically something like 700 Hz and 1900 Hz (deliberately not harmonically related). A perfectly linear transmitter produces only those two frequencies in its RF output. A non-linear transmitter creates intermodulation products—new frequencies that are mathematical combinations of the input tones. These IMD products cause interference to adjacent channels.

You view the result on a spectrum analyzer or oscilloscope, looking for unwanted products between and around the two main tones. The cleaner your transmitter, the fewer IMD products you'll see. This test reveals problems that normal voice operation might hide, letting you adjust drive levels or bias to improve linearity.

#### Antenna System Analysis

Beyond the basic SWR meter, antenna analyzers provide detailed information about your antenna system:

> **Key Information:** An antenna analyzer can measure the impedance of coaxial cable. {{< link id="G4B13" >}}

When using an analyzer for SWR measurements:

> **Key Information:** The antenna and feed line must be connected to an antenna analyzer when it is being used for SWR measurements. {{< link id="G4B11" >}}

The analyzer sends a signal into your system and measures what comes back. From this it calculates SWR, impedance (both resistive and reactive components), and resonant frequency. You can sweep across a band and see exactly where your antenna is resonant, how bandwidth changes, and whether you have feedline problems.

One caution when using analyzers:

> **Key Information:** Strong signals from nearby transmitters can interfere with SWR readings when using an antenna analyzer, because received power interferes with the analyzer's measurements. {{< link id="G4B12" >}}

Analyzers use very low power (often just milliwatts). A nearby transmitter radiating kilowatts can overload the analyzer or add to the signal it's trying to measure. If your readings seem erratic or wrong, check whether someone else is transmitting nearby. Move to a quieter location or wait until the band clears.

#### When Do You Need Test Equipment?

Most day-to-day operation doesn't require anything beyond your transceiver's built-in meters. But when you're troubleshooting intermittent problems, setting up a new antenna, optimizing a transmitter, or verifying compliance with regulations, proper test equipment moves you from guessing to knowing. You don't need to own everything—many clubs have equipment available for members, and sometimes borrowing or renting makes more sense than buying. But understanding what these instruments do helps you know when to reach for them.

With your station set up, optimized, and verified, you're ready to get on the air. The next chapter covers the operating procedures and techniques that turn your technical knowledge into successful contacts.
