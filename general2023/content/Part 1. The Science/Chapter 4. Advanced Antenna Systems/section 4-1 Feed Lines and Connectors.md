---
chapter: "4"
section: "4.1"
questions: ["G9A01", "G9A03", "G9A05", "G9A06", "G6B04", "G6B07", "G6B11", "G6B12"]
status: draft1
---

### Section 4.1: Feed Lines and Connectors

You've just worked your first transatlantic contact. The European station gives you a "five by three" report—perfectly readable, but your signal is weak. You're running 100 watts into what should be a decent antenna. Where did your power go?

Chances are, a significant chunk never made it past your feed line.

Feed lines are an easily overlooked but critical part of every amateur station. They're just wires, right? If only it were that simple. That innocent-looking coax snaking from your radio to the antenna can make or break your station's performance. Feed line loss is a double penalty—it weakens your transmitted signal AND attenuates incoming signals by the same amount. You lose coming and going. With good quality, properly chosen and installed coax your signal reaches the world. With damaged, lossy, or incorrect feed line, even a kilowatt won't save you.

#### Understanding Characteristic Impedance

Every feed line has a characteristic impedance—a fixed property determined by its physical construction:

> **Key Information:** The characteristic impedance of a parallel conductor feed line is determined by the distance between the centers of the conductors and the radius of the conductors. {{< link id="G9A01" >}}

The physics is beautifully simple:
- Spread conductors farther apart? Impedance goes up.
- Use fatter wires? Impedance goes down.
- What you connect to either end? Doesn't change the cable's impedance.

Common impedances you'll encounter:
- **50 ohms**: The amateur radio standard—your radio expects it, most antennas are designed for it
- **75 ohms**: TV cable—cheaper but wrong for ham gear
- **450 ohms**: Ladder line—wide spacing for low loss

When impedances don't match, some of your signal reflects back instead of moving forward—like water hitting a sudden pipe size change. These reflections waste power and can even damage your transmitter. Matching impedances throughout your system keeps power flowing in the right direction.

> **Key Information:** The nominal characteristic impedance of "window line" transmission line is 450 ohms. {{< link id="G9A03" >}}

Window line (ladder line with rectangular cutouts) achieves remarkable efficiency by using air as its primary dielectric. Those windows aren't decorative—they remove lossy plastic while maintaining conductor spacing.

The tradeoff? Window line demands respect:
- Keep it away from metal objects
- Avoid sharp bends
- Protect it from ice buildup
- Don't run it parallel to other cables

Coax is the easygoing alternative—its shield contains RF and blocks interference. Window line trades convenience for efficiency—worthwhile when you need every watt to count such as for QRP (weak signal) operation.

#### Feed Line Loss: Where Your Power Goes

Here's a sobering thought: You might be losing more power in your feed line than you're putting into your antenna. Every foot of cable between your radio and antenna acts like a resistor, converting your carefully generated RF into useless heat.

> **Key Information:** The attenuation of coaxial cable increases with increasing frequency. {{< link id="G9A05" >}}

Three culprits steal your signal:
1. **Skin effect**: At RF, current crowds onto the conductor's surface. Higher frequency = thinner skin = more resistance.
2. **Dielectric heating**: The insulation absorbs energy, especially as frequency climbs.
3. **Radiation**: All feed lines leak a little RF. In good coax this is tiny, but damage or poor shielding can make it worse. Open-wire or window line can also radiate more if it's unbalanced or routed near metal.

> **Key Information:** RF feed line loss is usually expressed in decibels per 100 feet. {{< link id="G9A06" >}}

Let's put this in perspective with RG-8X (a popular "compromise" cable):
- **10 MHz (30 meters)**: 1.0 dB/100 ft—barely noticeable
- **50 MHz (6 meters)**: 2.3 dB/100 ft—starting to hurt
- **146 MHz (2 meters)**: 4.5 dB/100 ft—ouch!
- **440 MHz (70 cm)**: 8.6 dB/100 ft—yikes!

That 4.5 dB loss on 2 meters? You're delivering 35 watts to your antenna from a 100-watt radio. The other 65 watts? Warming up your coax. Now you know why that distant station can't hear you.

#### Choosing Feed Line for Your Station

Selecting feed line is like choosing tires for your car—snow tires for winter, all-terrains for off-road, high-performance for the track. Your choice depends on frequency, distance, power level, and installation constraints.

**The Distance Factor:**
Running 10 feet to an attic antenna? Almost any coax will work fine—the losses are minimal. Running 200 feet to that tower? Now feed line choice becomes critical. At HF, even mediocre coax might work for short runs, but those same losses multiply with distance until they dominate your signal budget.

**HF Operations (160-10 meters):**
Both window line and coax have their place. Window line offers extremely low loss—ideal for long runs or when you need maximum efficiency. But it requires careful installation away from metal (including other cables, tower legs, raingutters, etc), needs an antenna tuner, and doesn't tolerate ice or water well.

Quality coax trades some efficiency for convenience—it's mostly weatherproof, doesn't care about nearby metal, and connects directly to your radio. For most HF stations, good coax is the practical choice.

**VHF/UHF Operations:**
Higher frequencies mean higher losses. Coax that works adequately at HF might lose half your power at 2 meters over a long run. At UHF you could see significant losses even with good coax. Short runs? Use what you have. For longer runs? Invest in better quality cable.

**Power Considerations:**
QRP operators can use lighter coax—when you're running 5 watts, power handling isn't a concern. But push 1500 watts through undersized coax and you risk damage from heating, especially at impedance mismatch points.

#### RF Connectors: Moving Beyond Handheld Adapters

As a Technician, you learned about SMA and BNC connectors on your handheld, maybe even added that BNC adapter everyone's talking about. Now as a General operator working HF with higher power and demanding applications, connector choice becomes even more critical. The best radio and antenna in the world become expensive decorations if a poorly installed connector blocks your signal. A damaged PL-259, corroded connection, or wrong connector type can waste just as much power as having the wrong antenna.

##### Quick Review: The Connector Lineup

You already know the basics—SMA for handhelds, UHF connectors (PL-259/SO-239) for mobile and base gear, BNC for quick connections. As a General operator, you'll use these same connectors but in more demanding situations where details really matter.

##### BNC at HF Frequencies
> **Key Information:** A typical upper frequency limit for low SWR operation of 50-ohm BNC connectors is *4 GHz*. {{< link id="G6B04" >}}

BNC handles 100 watts and works fine through HF frequencies. You'll see it on test equipment like antenna analyzers and oscilloscopes where the quick twist-lock connection is handy. But HF transceivers and antennas come with UHF connectors, and installing BNC on thick coax is challenging, so BNC remains rare in HF stations despite being technically capable.

##### Type N: An Underappreciated Option
> **Key Information:** A type N connector is a *moisture-resistant RF connector useful to 10 GHz*. {{< link id="G6B07" >}}

Type N is the connector that does everything right—highly weather-resistant, handles legal limit power, maintains constant impedance, works into microwave frequencies. It's technically superior to UHF connectors for almost everything we do.

So why don't we all use Type N? Simple: most amateur radio transceivers come with UHF connectors, so that's what we use. Switching to Type N means adapters or replacing connectors, which adds hassle and potentially negates some benefits. Still, for permanent outdoor installations or VHF/UHF weak signal work, Type N is worth considering.

##### SMA: Small but Capable
> **Key Information:** An SMA connector is a *small threaded connector suitable for signals up to several GHz*. {{< link id="G6B11" >}}

Beyond handhelds, you'll find these tiny threaded connectors on SDR equipment and compact test gear. Their main advantage is size—they pack impressive frequency handling into a connector barely larger than a pencil eraser.

##### Audio and Control Connections
> **Key Information:** *RCA Phono* connectors are commonly used for *low frequency or DC signal connections* to a transceiver. {{< link id="G6B12" >}}

Those RCA jacks behind your transceiver handle audio and control signals for digital modes, PTT keying, and external speakers—never RF.

#### Do it right the first time

Here's the bottom line: That exotic antenna you built won't compensate for lossy feed line. That expensive amplifier won't overcome bad connectors. Your feed line system is where the rubber meets the road—or more accurately, where your RF meets the real world.

Choose your feed line based on physics, not price tags. Install connectors like your QSOs depend on it (they do). Route cables with respect for RF's quirks. Get these fundamentals right, and you've built the foundation for a station that performs.

Still, we're not done yet. Getting power to your antenna efficiently is crucial, but there is still the matter of making sure your antenna will effectively *use* that power. That's where impedance matching and SWR come into play!
