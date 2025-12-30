---
chapter: "6"
section: "6.3"
questions: ["G0B04", "G0B11", "G0B13", "G4C05", "G4C06", "G4C11", "G4C09", "G4C12", "G4C07", "G0B10"]
status: draft1
---

### Section 6.3: Grounding and Lightning Protection

That antenna reaching toward the sky does a great job of catching radio waves—but it's also pretty good at catching lightning. Your General privileges often mean bigger antennas and more power, which makes understanding grounding systems more important than ever. What makes grounding confusing is that the word means different things depending on whether you're talking about lightning protection, RF management, or basic electrical safety. Let's sort it all out.

#### Lightning Protection

Lightning carries enormous energy and will find a path to ground one way or another. Your job is to give it an attractive path that doesn't go through your equipment—or you. The fundamental principle is simple: keep the lightning path outside your building, and make sure all your ground systems are connected.

> **Key Information:**
> - The lightning protection ground system should be located *outside the building*. {{< link id="G0B04" >}}
> - Lightning protection ground rods must be bonded together with all other grounds. {{< link id="G0B11" >}}

Think of your house as a protected zone. Lightning grounds, arrestors, and the connections between them all belong outside. When lightning hits your antenna system, you want that energy to flow directly to earth without ever entering your walls. But having multiple separate ground systems can actually be more dangerous than having none at all—during a strike, different ground points can momentarily sit at very different voltages. If your tower ground is at one potential and your electrical service ground is at another, that difference will try to equalize, potentially through your equipment or through you.

Use heavy copper conductors (#6 AWG or larger) to connect every ground system: tower, electrical service, telephone, cable TV. When everything is bonded, the whole system rises and falls in voltage together during a strike, eliminating dangerous differences. Use mechanical connections—clamps, compression fittings, or exothermic welding—rather than solder for all lightning protection work.

Ground rods handle the energy, but lightning arrestors determine *where* that energy goes. They work like pressure relief valves—invisible to your signals under normal conditions, but providing an instant short to ground when voltage spikes.

> **Key Information:** Lightning arrestors should be located where feed lines enter the building. {{< link id="G0B13" >}}

Mount them directly connected to your external ground system. Every conductor entering your shack needs protection: coax, control cables, rotator lines. One unprotected path can negate all your other protection.

#### RF Grounding

Lightning protection is about handling massive currents safely. RF grounding is about something completely different—managing radio frequency energy so it doesn't cause problems in your shack. The two require different approaches, and what works for one may not work for the other.

At DC and low frequencies, a wire is just a wire. But at radio frequencies, wires have impedance that varies with length and frequency. If your ground wire happens to be a quarter wavelength long on your operating frequency, it resonates like an antenna. Instead of providing a low-impedance path to ground, it develops high RF voltage.

> **Key Information:**
> - High RF voltages that produce RF burns can be caused by a ground wire having high impedance on that frequency. {{< link id="G4C05" >}}
> - A possible effect of a resonant ground connection is high RF voltages on the enclosures of station equipment. {{< link id="G4C06" >}}

Touch the "grounded" equipment while transmitting and you'll discover this the hard way—RF burns are painful and slow to heal. Symptoms of RF grounding problems include equipment that's warm or tingly to the touch, shocks from the microphone, erratic equipment behavior, or RF feedback in your audio.

For RF, the goal isn't a perfect connection to earth—it's keeping all equipment at the same RF potential. When everything is bonded together, there are no RF voltage differences to cause problems. Use wide copper strap rather than round wire (strap has lower inductance at RF), and connect all metal equipment enclosures to a common bonding bus with short straps.

> **Key Information:**
> - Bonding all equipment enclosures together helps to minimize RF "hot spots" in an amateur station. {{< link id="G4C11" >}}
> - Ground loops can be minimized by bonding equipment enclosures together. {{< link id="G4C09" >}}

This same bonding approach solves the common headache of ground loops—that mysterious hum or buzz in your audio that you can't track down. Ground loops form when equipment connects to ground through multiple paths, and tiny voltage differences between those paths drive currents that induce noise in your audio. Bond everything together at a common point so there's only one ground path. Sometimes moving equipment to the same power strip or outlet solves problems that filters and chokes couldn't fix.

#### Electrical Safety Grounding

Beyond lightning and RF, there's basic electrical safety. Every piece of equipment with a metal enclosure needs a safety ground—the green wire in your power cord.

> **Key Information:** All metal enclosures of station equipment must be grounded to ensure that hazardous voltages cannot appear on the chassis. {{< link id="G4C12" >}}

When insulation fails or a component shorts inside your equipment, the chassis could become energized at line voltage. A proper safety ground provides a low-resistance path that trips the breaker immediately, before you touch the case.

Never defeat safety grounds by cutting off ground pins, using two-prong adapters, or "floating" grounds to fix hum problems. If you have vintage equipment with a two-prong plug, it's worth having it professionally retrofitted with a proper three-wire cord.

#### A Note About Soldering

Building and repairing equipment usually means soldering. Two things worth knowing:

> **Key Information:**
> - Soldered joints should not be used in lightning protection ground connections because a soldered joint will likely be destroyed by the heat of a lightning strike. {{< link id="G4C07" >}}
> - Lead can contaminate food if hands are not washed carefully after handling the solder. {{< link id="G0B10" >}}

For lightning protection, use mechanical connections—bronze ground clamps, compression fittings, or exothermic welding. For your regular electronics work with lead solder, just wash your hands before eating and keep the area ventilated. Lead-free solder is also an option if you'd rather not think about it.

#### Bringing It All Together

Three different grounding needs—lightning protection, RF management, and electrical safety—sometimes seem to pull in different directions. But they all benefit from the same basic approach: bonding everything together.

Your lightning grounds stay outside but connect to your electrical service ground. Your RF bonding bus inside the shack connects to a single point that ties to the outdoor system. Every piece of equipment uses its safety ground through the power cord *and* bonds to the RF bus. The result is a unified system where everything shares a common ground reference. Lightning energy has a clear path to earth that bypasses your equipment. RF has no voltage differences to create hot spots. And electrical faults trip breakers before anyone gets hurt.

No ground system is perfect, and a direct lightning strike can overwhelm any protection. But a well-designed system gives you the best possible odds of your equipment—and you—surviving to operate another day.

Speaking of staying safe, if your antenna ambitions include towers or significant height, the next section covers what you need to know before you climb.
