---
chapter: "7"
section: "7.1"
questions: ["G4A06", "G4B10", "G4B11"]
status: draft3
---

### Section 7.1: Station Fundamentals

As a Technician, there's a good chance your first station was a handheld radio—transmitter, receiver, antenna, and battery all in one package you could clip to your belt. HF stations don't usually come that way. Instead, you'll start with a few basic parts and add to them depending on your specific goals. Those choices, especially about antennas and power, shape what your station can do.

The basics are the same for nearly every HF station: a transceiver, a power source, a feed line, and an antenna. Other station accessories enhance performance, add flexibility, or help you troubleshoot—but aren't always required.

#### The Essentials

**Transceiver**: The heart of your station, combining transmitter and receiver in one box. Most modern HF transceivers output 100 watts and cover 160 through 10 meters. Other options may have additional or fewer bands, specialize in low-power super-portable operation, or offer advanced Software Defined Radio capabilities.

**Power source**: Most 100-watt HF transceivers run on 13.8 volts DC and draw 20–25 amps at full power. That can come from an AC-to-DC power supply, a battery, or a heavy-gauge wire run to your vehicle's battery. Follow the radio and vehicle makers' instructions for wire size, fuses, and battery connections—a vehicle's accessory socket and its wiring may not handle that much current.

**Feed line**: Connects the transceiver to the antenna.

**Antenna**: There are many types of antennas—there is no "one size fits all," so the type you choose will depend on what matters most to you.

Those are the basic station parts: transceiver, power, feed line, antenna. Before going on the air, complete the safety checks from the previous chapter and confirm that your frequency and mode are within your current privileges.

#### The Optional Additions

The four essentials assume everything cooperates: your antenna presents a nice 50-ohm load, your match stays good over time, and 100 watts is always enough. Real stations rarely stay that tidy, which is why a few categories of accessories show up in shack after shack. Each one exists to solve a specific problem.

##### Antenna Tuner

A 40-meter dipole at resonance presents close to the 50 ohms your radio expects. Use that same dipole on 20 or 80 meters, though, and the impedance the radio sees can be wildly different. An antenna tuner transforms that impedance so the transmitter sees a load close to the 50 ohms it was designed for:

> **Key Information:** The purpose of an antenna tuner is to increase power transfer from the transmitter to the feed line. {{< link id="G4A06" >}}

A tuner at the radio does not change the antenna's resonant frequency or remove the mismatch between the antenna and feed line—that mismatch, and its losses, are still there. A tuner at the antenna feed point instead changes the load presented to the feed line.

Many transceivers have a built-in tuner, though these usually handle only a limited range of impedances. External tuners can often match a wider range of antenna systems.

##### SWR Monitoring

Section 4.2 explained SWR as the measure of how well your antenna system is matched. An SWR meter puts that number in front of you while you operate, and it solves more than one problem. It shows the match at the point where you connect it and verifies the radio-side match when you place it between the radio and a tuner. Many meters also show whether your transmitter is putting out power. A good reading at the radio does not, by itself, prove a good match at the antenna.

Many modern transceivers include a built-in SWR meter. If yours doesn't, or if you need a reading at another point or power level, you can add one of two closely related instruments:

> **Key Information:** A directional wattmeter can determine standing wave ratio. {{< link id="G4B10" >}}

* **Directional wattmeter** — Measures forward and reflected power separately. Comparing the two gives you SWR, and many meters have a handy SWR scale built right in. The forward power reading is also useful for that "am I actually transmitting?" check. Net power flow at the meter is forward power minus reflected power; forward power alone does not tell you how much reaches or leaves the antenna.

* **SWR meter** — Displays SWR directly. It's usually the same basic device as a directional wattmeter inside, just presenting less information in a simpler way.

![A DC power source feeds the transceiver. From left to right, the transmit signal passes from the transceiver through an SWR meter, an optional station tuner, the feed line, and the antenna. The meter is before the tuner, so it checks the match presented to the radio. A good reading there does not prove that the feed line and antenna are matched.](../../../images/s7-1-station-signal-path.svg)
{.img-full .img-centered}

These meters also earn their keep long after setup day. Weather, antenna damage, feed line problems, and other factors can change your antenna system's characteristics over time. A slowly rising SWR is often your first warning that something outside needs attention. Watching SWR becomes more important as power increases—both to protect your equipment and to keep your signal getting where you want it.

##### Antenna Analyzer

An SWR meter is great for keeping an eye on things while you operate, but it has two limitations. It requires you to transmit to make a measurement, and it only shows SWR at the frequency you're transmitting on. When you're building, adjusting, or troubleshooting an antenna, you want an instrument that generates its own low-power test signal instead: an antenna analyzer.

> **Key Information:** When using an antenna analyzer for SWR measurements, the antenna and feed line must be connected. {{< link id="G4B11" >}}

Analyzers let you test antennas before installation, troubleshoot by measuring at different points in the system, identify damaged feed line, and plot SWR and impedance across a band. An analyzer can help with early checks, but make the final measurements with the antenna in its intended position. Its height and nearby objects can change the result. We'll dig deeper into what analyzers can measure later in this chapter.

##### Amplifier

Once your General privileges take effect, you may use up to 1,500 watts PEP on many bands, subject to the limits in Section 9.2. The guiding rule in amateur radio is to use only as much power as needed. More power can help the other station hear you, but it cannot improve your reception. If you hear them well but they cannot hear you, an amplifier may help. We'll discuss amplifiers later in this chapter.

#### Building Your Station

With all these pieces to choose from, where do you start? Not with a shopping list—with questions:

* Where do I want to operate? At home, in the car, in the field?
* What kind of antenna can I put up, and how much room do I have for it?
* What types of operation interest me, and which modes do I want to focus on?

Once you connect the gear and switch on the power, the very first thing your new station will do is receive.
