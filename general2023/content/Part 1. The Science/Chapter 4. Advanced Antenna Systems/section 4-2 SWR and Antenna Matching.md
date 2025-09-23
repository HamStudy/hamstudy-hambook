---
chapter: "4"
section: "4.2"
questions: ["G9A04", "G9A07", "G9A09", "G9A10", "G9A02", "G9A11", "G9A08", "G7C03", "G4B10", "G4B11", "G4B12", "G4B13", "G8A13", "G8A14"]
status: draft1
---

### Section 4.2: SWR and Antenna Matching

Your new General privileges open up worldwide communication possibilities, but only if your precious RF power actually makes it from transmitter to antenna and out into the ether. Remember from your Technician studies that SWR tells you about impedance matching? Now it's time to understand the deeper physics and practical implications that help you squeeze every decibel of performance from your station.

#### The Real Problem: Impedance Mismatch

Before diving into SWR measurements, let's understand what's actually happening in your antenna system. Your transmitter expects to see a specific impedance—typically 50 ohms in amateur radio. Your coaxial cable presents 50 ohms. Ideally, your antenna also presents 50 ohms at your operating frequency. When all these impedances match, maximum power transfers smoothly through the system.

> **Key Information:** Reflected power at an antenna's feed point is caused by a difference between feed line impedance and antenna feed point impedance. {{< link id="G9A04" >}}

Think of impedance like pipe diameter in a water system. When water flows from a large pipe into a small one, pressure builds up at the junction. Some water might even splash back. In RF systems, when the signal encounters an impedance change, some energy reflects back toward the source instead of continuing forward.

Here's the key insight: the impedance mismatch is the disease; high SWR is just the symptom we can easily measure.

Just like the resonant circuits we discussed in Chapter 1, antenna impedance isn't constant—it varies with frequency. At resonance, the reactive components cancel out leaving pure resistance. Move away from resonance, and the antenna becomes reactive (capacitive if too short, inductive if too long), causing poor impedance match. This explains why your 40-meter dipole might show 1:1 SWR at 7.150 MHz but 10:1 at 7.000 MHz.

#### Enter SWR: Our Diagnostic Tool

Standing Wave Ratio (SWR) gives us a practical way to detect and quantify impedance mismatches. When forward and reflected waves travel on the same feed line, they create a standing wave pattern. SWR is the ratio of maximum to minimum voltages in this pattern.

Why use SWR instead of directly measuring impedance? At HF frequencies, measuring complex impedance requires sophisticated equipment. But measuring voltage ratios is relatively simple, making SWR the standard diagnostic tool.

> **Key Information:** To prevent standing waves on a feed line connected to an antenna, the antenna feed point impedance must be matched to the characteristic impedance of the feed line. {{< link id="G9A07" >}}

For purely resistive loads, the math is straightforward:

> **Key Information:** Connecting a 50-ohm feed line to a 200-ohm resistive load results in a 4:1 SWR. Connecting a 50-ohm feed line to a 10-ohm resistive load results in a 5:1 SWR. {{< link id="G9A09" >}} {{< link id="G9A10" >}}

The formula: SWR equals the larger impedance divided by the smaller. So $\frac{200\Omega}{50\Omega} = 4:1$, and $\frac{50\Omega}{10\Omega} = 5:1$.

#### The Hidden Cost of High SWR

> **Key Information:** High SWR increases loss in a lossy transmission line. {{< link id="G9A02" >}}

This creates a vicious cycle. The higher the SWR, the more the inherent line losses are magnified. Every feed line has some loss, and when SWR is high, the signal bounces back and forth between antenna and transmitter, suffering that loss on each trip. A line with 1 dB of matched loss might exhibit 3 dB or more with high SWR. Your 100-watt signal could lose 30-50% of its power as heat in the coax!

> **Key Information:** Higher loss reduces SWR measured at the input to the line. {{< link id="G9A11" >}}

This creates a dangerous illusion. The lossy line attenuates both forward and reflected signals, making the mismatch appear better than it actually is. That beautiful 1.5:1 SWR reading on your UHF antenna with 200 feet of RG-58? The low SWR might mean your feed line is so lossy it's absorbing the reflected power. Your actual antenna match could be terrible, but the loss masks the problem.

#### The Matching Network Illusion

Here's a critical concept that trips up many operators:

> **Key Information:** If the SWR on an antenna feed line is 5:1, and a matching network at the transmitter end is adjusted to present a 1:1 SWR to the transmitter, the resulting SWR on the feed line remains 5:1. {{< link id="G9A08" >}}

The matching network (antenna tuner) transforms the impedance seen by the transmitter, protecting it from high SWR. But between the tuner and antenna, that 5:1 SWR still exists with all its losses. The tuner doesn't change your antenna's resonant frequency—a 40-meter dipole remains resonant at 7.150 MHz whether you use a tuner or not.

> **Key Information:** An impedance matching transformer at a transmitter output is used to present the desired impedance to the transmitter and feed line. {{< link id="G7C03" >}}

Think of it as a pressure regulator on mismatched pipes—it protects the pump but doesn't fix the plumbing problem. The transformer optimizes power transfer even when there's a mismatch downstream.

#### Measuring Tools: Your Diagnostic Arsenal

> **Key Information:** A directional wattmeter can determine standing wave ratio. {{< link id="G4B10" >}}

A directional wattmeter measures forward and reflected power separately. Since SWR is based on the ratio between these, the meter can display your SWR. This is what's inside most "SWR meters"—they're essentially directional wattmeters with an SWR scale. Many modern transceivers have this built in, showing SWR while you transmit.

> **Key Information:** When using an antenna analyzer for SWR measurements, the antenna and feed line must be connected. {{< link id="G4B11" >}}

Unlike an SWR meter that requires transmitting, an analyzer generates its own low-power test signal. This lets you sweep across frequencies without transmitting, showing:
- SWR curves across frequency ranges
- Complex impedance (resistance and reactance)
- Resonant frequency identification (where reactance = 0)
- Smith chart displays

> **Key Information:** Strong signals from nearby transmitters can cause received power that interferes with SWR readings on an antenna analyzer. {{< link id="G4B12" >}}

That perfect SWR reading might be contaminated by your neighbor's signal. Always verify unusual readings by testing at different times.

> **Key Information:** An antenna analyzer can measure impedance of coaxial cable. {{< link id="G4B13" >}}

Beyond antennas, analyzers serve as sophisticated cable testers—finding breaks, verifying characteristic impedance, checking velocity factor, or detecting water intrusion.

#### System Performance Metrics

As you advance in amateur radio, you'll encounter professional concepts that quantify overall system performance:

> **Key Information:** A link budget is the sum of transmit power and antenna gains minus system losses as seen at the receiver. {{< link id="G8A13" >}}

Think of it as communication accounting that determines if a link will work:
- Start with transmitter power (+50 dBm for 100W)
- Add antenna gains
- Subtract all losses (including SWR losses)
- Result must exceed receiver sensitivity

> **Key Information:** Link margin is the difference between received power level and minimum required signal level at the input to the receiver. {{< link id="G8A14" >}}

This is your safety cushion against fading and interference. If your receiver needs -100 dBm minimum and receives -71 dBm, you have 29 dB of link margin.

#### The Complete Picture

Remember: perfect SWR doesn't guarantee good performance. A dummy load has 1:1 SWR but makes zero contacts! SWR tells you about power transfer efficiency, not radiation effectiveness. A beam antenna at 2:1 SWR vastly outperforms a perfectly matched dummy load.

Focus on the complete system:
- Reasonable impedance match (SWR under 2:1)
- Proper antenna design and placement
- Quality feed line appropriate for frequency
- Regular measurements to catch problems early

Don't chase perfect SWR at the expense of getting on the air. That attic dipole with 1:1 SWR won't perform as well as an outdoor antenna at 2:1. The goal isn't impressing your SWR meter—it's making contacts. Always remember that regardless of any other factor, the best antenna is the one that works!

Your General license represents advancement in understanding these relationships. Mastering both power transfer (reasonable SWR) and radiation principles (effective antennas) will go a long ways in helping you get the most out of your equipment!
