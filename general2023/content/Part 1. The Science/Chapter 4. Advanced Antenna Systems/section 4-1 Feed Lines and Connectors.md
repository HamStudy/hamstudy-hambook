---
chapter: "4"
section: "4.1"
questions: ["G9A01", "G9A03", "G9A05", "G9A06", "G6B04", "G6B07", "G6B11", "G6B12"]
status: reviewed1
---

### Section 4.1: Feed Lines and Connectors

You've just worked your first transatlantic contact. The European station gives you a 5-3 report—readable, but weak. You're running 100 watts into what should be a decent antenna. Where did your power go?

Chances are, a significant chunk never made it past your feed line.

Feed lines are the unsung heroes of every amateur station. They're just wires, right? Wrong. That innocent-looking coax snaking from your radio to the antenna can make or break your station's performance. Choose wisely and your signal reaches the world. Choose poorly and you're heating up cable instead of making contacts.

#### Understanding Characteristic Impedance

Every feed line has a characteristic impedance—think of it as the cable's DNA, determined purely by its physical construction:

> **Key Information:** The characteristic impedance of a parallel conductor feed line is determined by the distance between the centers of the conductors and the radius of the conductors. {{< link id="G9A01" >}}

The physics is beautifully simple:
- Spread those conductors farther apart? Impedance goes up.
- Use fatter wires? Impedance goes down.
- What you connect to either end? Irrelevant to the cable's impedance.

Common impedances you'll encounter:
- **50 ohms**: The amateur radio standard—your radio expects it, most antennas are designed for it
- **75 ohms**: Television's choice—cheaper to manufacture but mismatched for ham gear
- **450 ohms**: Ladder line's domain—wide spacing for low loss

Here's why this matters: Impedance mismatch is like trying to force a fire hose output through a garden hose. Some of that energy has nowhere to go but backwards. In RF terms, we call these reflections "standing waves," and they're the enemy of efficient communication.

> **Key Information:** The nominal characteristic impedance of "window line" transmission line is 450 ohms. {{< link id="G9A03" >}}

Window line—also called ladder line—looks like a ladder with the rungs removed. Those rectangular cutouts aren't just for show. By removing most of the plastic between conductors, we get a feed line that's incredibly efficient at HF frequencies. Air is a nearly perfect dielectric, and window line is mostly air.

But here's the catch: Window line is like a temperamental racing car—incredible performance if you treat it right, but demanding about conditions:
- Metal objects nearby? Performance crashes.
- Sharp bends? Signal reflections.
- Rain or ice? Impedance shifts.
- Running it next to another feed line? Coupling problems.

Coax doesn't care about any of this. Its shield keeps RF contained and outside influences at bay. Window line trades that convenience for efficiency—a worthwhile trade when every decibel counts.

#### Feed Line Loss: Where Your Power Goes

Here's a sobering thought: You might be losing more power in your feed line than you're putting into your antenna. Every foot of cable between your radio and antenna acts like a resistor, converting your carefully generated RF into useless heat.

> **Key Information:** The attenuation of coaxial cable increases with increasing frequency. {{< link id="G9A05" >}}

Three culprits steal your signal:
1. **Skin effect**: At RF, current crowds onto the conductor's surface. Higher frequency = thinner skin = more resistance.
2. **Dielectric heating**: The insulation absorbs energy, especially as frequency climbs.
3. **Radiation**: Some RF escapes through the shield (yes, even "lossless" cables radiate).

> **Key Information:** RF feed line loss is usually expressed in decibels per 100 feet. {{< link id="G9A06" >}}

Let's put this in perspective with RG-8X (a popular "compromise" cable):
- **10 MHz (30 meters)**: 1.0 dB/100 ft—barely noticeable
- **50 MHz (6 meters)**: 2.3 dB/100 ft—starting to hurt
- **146 MHz (2 meters)**: 4.5 dB/100 ft—ouch!

That 4.5 dB loss on 2 meters? You're delivering 35 watts to your antenna from a 100-watt radio. The other 65 watts? Warming up your coax. Now you know why that DX station can't hear you.

#### Choosing Feed Line for Your Station

Selecting feed line is like choosing tires for your car—the wrong choice ruins everything else you've invested in. Here's how to match feed line to your needs:

**HF Operations (160-10 meters):**
Window line reigns supreme here. Yes, it's finicky about routing. Yes, you need an antenna tuner. But when you're trying to work that rare Pacific island with 100 watts and a wire antenna, those 0.5 dB/100 ft losses make window line your best friend.

Can't use window line? Quality coax like RG-213 or LMR-400 delivers respectable HF performance. Save the RG-8X for portable operations where flexibility matters more than the last decibel.

**VHF/UHF Operations:**
Forget compromises—use the best coax you can afford. That same RG-8X that works fine on HF becomes a space heater on 2 meters. LMR-400 or equivalent keeps your signal where it belongs: at the antenna.

**The Installation Reality Check:**
- **Going underground?** Only coax survives burial.
- **Tight bends needed?** Flexible coax, not rigid hardline.
- **Running along a metal tower?** Coax laughs at metal; ladder line doesn't.
- **Portable operation?** Weight and flexibility trump ultimate performance.
- **High power?** Bigger coax handles heat better—size matters when running legal limit.

#### RF Connectors: The Critical Links

Here's a $50 lesson that costs much more to learn the hard way: A bad connector can turn your perfect feed line into an expensive dummy load. I've seen stations with thousands invested in equipment brought to their knees by a poorly installed PL-259.

##### BNC Connectors
> **Key Information:** A typical upper frequency limit for low SWR operation of 50-ohm BNC connectors is 4 GHz. {{< link id="G6B04" >}}

That satisfying "click" when you twist a BNC into place? Music to a technician's ears. These bayonet-locking connectors dominate test benches and QRP stations for good reason—they're quick, reliable, and work beautifully up through UHF.

But before you BNC everything: They hate weather (water finds every gap), they're limited to about 100 watts, and that 4 GHz rating? That's laboratory conditions. In the real world, expect good performance to 1 GHz.

##### Type N Connectors
> **Key Information:** A type N connector is a moisture-resistant RF connector useful to 10 GHz. {{< link id="G6B07" >}}

When Paul Neill designed the Type N connector in the 1940s (the "N" is for Neill), he created the connector that refuses to quit. Threaded coupling, weatherproof design, constant impedance through the connector—Type N does everything right.

Visit any commercial repeater site and you'll see why pros choose Type N: These connectors shrug off weather that would destroy a PL-259, handle legal-limit power without breaking a sweat, and maintain excellent SWR well into the microwave region. Yes, they cost more. Yes, they're worth it.

##### SMA Connectors
> **Key Information:** An SMA connector is a small threaded connector suitable for signals up to several GHz. {{< link id="G6B11" >}}

Don't let their size fool you. These subminiature threaded connectors—barely larger than a pencil eraser—handle frequencies that make other connectors give up. You'll find them on handheld radios, SDR dongles, and precision test equipment.

Word of warning: SMA connectors are precision devices. Cross-thread one or over-tighten it, and you've created an expensive problem. Treat them with respect—finger-tight plus a gentle quarter turn with the proper wrench. Your SWR meter will thank you.

##### Audio/Control Connectors
> **Key Information:** RCA Phono connectors are commonly used for low frequency or DC signal connections to a transceiver. {{< link id="G6B12" >}}

Those colorful RCA jacks on your radio's back panel? They're not for RF—they're the workhorses of your station's audio and control systems. PTT circuits, audio in/out for digital modes, external speaker connections—RCA handles them all.

Just remember: RCA connectors and RF don't mix. I've seen newcomers try to use audio cables for antenna connections. The results range from "no contact" to "magic smoke." Keep your signal types straight and your connectors happy.

#### Installation Tips for Success

After 30 years of fixing feed line disasters, I can tell you most problems trace back to installation day. Do it right once or do it over repeatedly—your choice.

**Connector Installation Secrets:**
The manufacturer's instructions aren't suggestions—they're the result of expensive engineering. That specific strip length for your PL-259? Get it wrong and you've created a reflection generator. The torque specification for Type N? Too loose leaks RF, too tight cracks insulators.

Outdoor connections need paranoid-level waterproofing. Water finds its way into connectors like a determined burglar. Self-amalgamating tape, then electrical tape, then more self-amalgamating tape. Overkill? Tell that to the ham who lost a connector to corrosion.

**Feed Line Routing Wisdom:**
Every unnecessary foot of feed line is a thief. Route directly, but remember: RF cable isn't rope. That sharp 90-degree bend might look neat, but it's creating an impedance bump. Use gentle curves with radius at least 10 times the cable diameter.

Ladder line needs the VIP treatment—keep it 4-6 inches from any metal, maintain consistent spacing, and never bundle it with other cables. Treat it like the diva it is, and it rewards you with incredibly low losses.

**When Things Go Wrong:**
- **SWR suddenly high?** Water got in. Check every outdoor connection.
- **SWR creeping up slowly?** Connector corrosion or cable deterioration.
- **SWR different on each band?** Feed line acting as an impedance transformer.
- **Intermittent SWR?** Loose connection or cable flexing in the wind.

The best troubleshooting tool? A notebook. Document your installation—cable types, lengths, connector locations. Future you will appreciate current you's attention to detail.

#### Making the Connection

Here's the bottom line: That exotic antenna you built won't compensate for lossy feed line. That expensive amplifier won't overcome bad connectors. Your feed line system is where the rubber meets the road—or more accurately, where your RF meets the real world.

Choose your feed line based on physics, not price tags. Install connectors like your QSOs depend on it (they do). Route cables with respect for RF's quirks. Get these fundamentals right, and you've built the foundation for a station that performs.

But we're not done yet. Getting power to your antenna efficiently is crucial, but what happens when your antenna doesn't want to accept that power? That's where impedance matching and the mysterious SWR come into play...