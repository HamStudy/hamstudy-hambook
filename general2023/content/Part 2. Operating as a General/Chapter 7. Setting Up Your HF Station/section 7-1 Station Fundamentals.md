---
chapter: "7"
section: "7.1"
questions: ["G4A06", "G4B11", "G4B10"]
status: draft1
---

### Section 7.1: Station Fundamentals

You've passed your General exam and you're ready for HF. What equipment do you actually need? This section covers the building blocks of an HF stationâ€”what's essential to get on the air and what's optional to make your station work better.

The bare minimum for any HF station: a transceiver, power supply, feed line, and antenna. Everything else enhances performance, adds flexibility, or helps you troubleshootâ€”but isn't strictly required.

#### The Essentials

Most HF stations have certain things in common; nonetheless, there are many different types of equipment and ways to configure the station! Here we're going to cover some of the most common type of station that you'll want to understand as a General class licensee (and to help you pass the exam)!

**Transceiver**: The heart of your station, combining transmitter and receiver. Most modern HF transceivers output 100 watts and cover 160 through 10 meters. Generally they will expect 13.8 volts DC at 20-25 amperes. Other options may have additional or fewer bands, specialize in low-power super portable operation, or have advanced Software Defined Radio capabilities. Whatever radio you use, you'll need to power it and provide an antenna!

**Power source**: Nearly all HF transceivers run on DC power. The exact requirements will vary, but most 100-watt HF transceivers run at 13.8VDC and need 20-25 amps when transmitting at full power. Common options include:
* A AC to DC power supply
* A 13.8V battery (such as one of the types we discussed in Section 6.2).
* A heavy gauge wire to the battery on your vehicle. As we discussed in Chapter 6, the existing wiring in most vehicles is not sufficient for high-power HF operation, so a dedicated wire is *strongly* recommended.

**Feed line**: Connects transceiver to antenna, as discussed in Section 4.1.

**Antenna**: As we discussed in Chapter 4, there are many types of antennasâ€”there is no "one size fits all", so the specific type you choose will depend on what is most important to you.

That's it. Transceiver, power, feed line, antennaâ€”you're on the air.

#### The Optional Additions

You can stick with the bare minimum, or you can add on one of many types of common accessories. Here are a few of the common types to be aware of:

##### Antenna Tuner

Many antennas present 50 ohms naturally on their design frequencyâ€”a 40-meter dipole at resonance, for instance. No tuner needed. But what if you want to operate that same dipole on 20 meters? Or 80 meters? Now you need impedance transformation:

> **Key Information:** The purpose of an antenna tuner is to increase power transfer from the transmitter to the feed line. {{< link id="G4A06" >}}

Tuners transform whatever impedance your antenna presents into the 50 ohms your transceiver expects. That 40-meter dipole showing 200 ohms on 20 meters? The tuner makes it look like 50 ohms to your radio. Note that this does not make the antenna resonant on that band; it just allows efficient power transfer despite the mismatch â€“ it's making the best of what you have.

There are many different types of antenna tuners; some are built into the transceiver, though those often are more limited in how much mismatch they can handle. External tuners (manual or automatic) can handle a wider range of impedances and higher power levels.

You will almost always have the best performance using an antenna which is completely resonant on your frequency, but an antenna tuner will add a lot of flexibility, which makes them a very common (some would say "must-have") addition to your HF station.

##### SWR Monitoring

Section 4.2 explained SWR theory. When we're using a handheld transceiver or a radio which puts out low power we may not worry all that much about SWR. The higher the power level, the more important it becomes to monitor SWR both to protect your equipment and to ensure efficient operation.

Many modern transceivers include a built-in SWR meter. If yours doesn't, or if you want a more accurate reading, there are two types of meters you can add:

> **Key Information:** A directional wattmeter can determine standing wave ratio. {{< link id="G4B10" >}}

* Directional wattmeter - This device measures forward and reflected power. The advantage here is you can see exactly how much output power your transmitter is putting out, as well as how much is being reflected back. Comparing the two also allows you to calculate SWR, and many have a handy SWR scale built in.

* SWR meter - This device simply measures SWR. It's generally simpler in how it displays than a directional wattmeter, but it is usually basically the same device, just not showing quite as much information.

Why would you need to continuously monitor SWR? Even if you measure SWR when you set things up doesn't mean it will stay that way. Weather, antenna damage, feed line issues, and other factors can change your antenna system's characteristics over time.

##### Antenna Analyzer

An SWR meter (or directional wattmeter) is a useful tool, but it's really intended more for making sure things are working as expected when operating; if you are designing your own antenna, you may want to invest in an antenna analyzer. SWR meters require transmitting to measure your system. An antenna analyzer generates its own test signal:

> **Key Information:** When using an antenna analyzer for SWR measurements, the antenna and feed line must be connected. {{< link id="G4B11" >}}

Analyzers let you test antennas before installation, troubleshoot by measuring at different points, identify damaged feed line, and map antenna performance across bands. Measure your antenna on the ground, adjust it to resonance, then install itâ€”beats adjusting at the top of a tower. Basic models display SWR, while more advanced models add advanced troubleshooting and visualization tools to make it easier to identify and fix issues with your antenna system.

##### Amplifier

Your General license authorizes up to 1500 watts PEP on some frequencies. The key rule for power usage in Amateur Radio is to only use as much power as you need to make a contactâ€”particularly because you might not hear the response if the remote station has less power than you doâ€”but having more power available can give you more options. 

Amplifiers help with marginal propagation, local noise, contests, or compromise antennas. They require careful operationâ€”proper cooling, higher voltage, careful tuning, and RF exposure calculations. It's worth noting that any accessory that is part of your antenna system (such as a power meter, SWR meter, or antenna tuner) will need to be rated for however much power you are putting through it to be of any use to you, and the more power you output the more critical proper impedance matching (measured by SWR) becomes.

#### Building Your Station

The place to start when building your station is to decide what you want to do and where you want to operate. Start with the four essentials, and ask these questions:

* Where do I want to operate?
* What kind of antenna can I put up / do I have room for?
* What types of operation am I interested in / what modes do I want to focus on?

Once you've identified answers to these key questions you can start looking at what equipment fits those needs; start with the four essentials (transceiver, power supply, feed line, and antenna) and work from there.

Keep those questions in mind as we discuss other aspects of your HF station throughout this chapter.
