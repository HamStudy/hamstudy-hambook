---
chapter: "6"
section: "6.3"
questions: ["G0B04", "G0B11", "G0B13", "G4C05", "G4C06", "G4C11", "G4C10", "G4C09", "G4C12", "G4C07", "G0B10"]
status: draft1
---

### Section 6.3: Grounding and Lightning

That antenna reaching toward the sky does a great job of catching radio waves—but it's also pretty good at catching lightning. Grounding can be confusing because it means different things for lightning protection, RF management, and basic electrical safety. Let's sort it all out.

#### Lightning Protection

Lightning carries enormous energy and will find a path to ground one way or another. Your job is to give it an attractive path that doesn't go through your equipment—or you. The fundamental principle is simple: keep the lightning path outside your building, and make sure all your ground systems are connected.

> **Key Information:**
> - The lightning protection ground system should be located *outside the building*. {{< link id="G0B04" >}}
> - Lightning protection ground rods must be bonded together with all other grounds. {{< link id="G0B11" >}}

Think of your house as a protected zone. Lightning grounds, arrestors, and the connections between them all belong outside. When lightning hits your antenna system, you want that energy to flow directly to earth without ever entering your walls. But separate, unbonded ground systems create another hazard: during a strike, different ground points can momentarily sit at very different voltages. If your tower ground is at one potential and your electrical service ground is at another, that difference will try to equalize, potentially through your equipment or through you.

Bonding helps limit voltage differences between grounding systems during a strike; it does not guarantee that every point stays at exactly the same voltage. The conductor sizes, connections, and routing must be appropriate to the installation. The principle here is to coordinate the grounding systems rather than treat each ground rod as an isolated solution.

Ground rods, bonding conductors and lightning arrestors work as a system. Arrestors act rather like pressure relief valves: they pass your signals under normal conditions, but limit a voltage surge by diverting current into the bonded grounding system. They do not make the surge voltage zero.

> **Key Information:** Lightning arrestors should be located where feed lines enter the building. {{< link id="G0B13" >}}

Mount them directly connected to your external ground system. Every conductor entering your shack needs protection: coax, control cables, rotator lines. One unprotected path can negate all your other protection.

Make any planned cable disconnections before a storm arrives. When you hear thunder, stop operating and stay away from equipment connected to outdoor antennas or house wiring. Do not handle antenna cables or grounding connections while lightning is nearby.

#### RF Grounding

Lightning protection is about handling massive currents safely. RF grounding is about something completely different—managing radio frequency energy so it doesn't cause problems in your shack. The two require different approaches, and what works for one may not work for the other.

Even an ordinary wire has some resistance and inductance. At radio frequencies, its length and return path become especially important. A grounding connection near a quarter wavelength long can present high impedance at the equipment end, even if its far end is well grounded. RF current through that impedance can produce a high voltage.

> **Key Information:**
> - High RF voltages that produce RF burns can be caused by a ground wire having high impedance on that frequency. {{< link id="G4C05" >}}
> - A possible effect of a resonant ground connection is high RF voltages on the enclosures of station equipment. {{< link id="G4C06" >}}

A shock or RF burn from a microphone or enclosure is a reason to stop transmitting and correct the problem—not a test to repeat by touch. Other clues include erratic equipment behavior or RF feedback in your audio.

For RF, a connection to earth is not enough by itself. Bonding equipment enclosures together helps reduce the RF voltage differences between them. The connections have impedance too, so their length and arrangement matter; bonding reduces a problem rather than guaranteeing that all unwanted RF disappears.

> **Key Information:**
> - Bonding all equipment enclosures together helps to minimize RF "hot spots" in an amateur station. {{< link id="G4C11" >}}

Bonding also helps with a different problem: unwanted currents in your audio connections. Equipment may be connected through both its grounding conductors and the shields of audio cables. Small voltage differences can drive current around those multiple paths, creating a *ground loop*. If that current adds hum to your microphone or computer audio, the transmitter sends the hum along with your intended signal.

> **Key Information:**
> - Reports of hum on your station's transmitted signal can be a symptom of a ground loop in the station's audio connections. {{< link id="G4C10" >}}
> - Ground loops can be minimized by bonding equipment enclosures together. {{< link id="G4C09" >}}

A hum report is a clue, not proof that every hum comes from a ground loop. Check the audio connections and equipment bonding rather than assuming that more microphone gain will help.

A common bonding point helps reduce voltage differences between enclosures. Sometimes powering interconnected equipment from the same suitable outlet or power strip also helps. Do not disconnect an electrical safety ground to interrupt a loop; solving an audio problem must not create a shock hazard.

#### Electrical Safety Grounding

Beyond lightning and RF, there's basic electrical safety. Line-powered equipment designed for a protective ground needs that ground—the green wire in a typical power cord. Double-insulated equipment and low-voltage devices have different designs; do not add or alter a mains ground without understanding the equipment.

> **Key Information:** Metal enclosures of station equipment are grounded to prevent hazardous voltages on the chassis. {{< link id="G4C12" >}}

When insulation fails or a component shorts inside your equipment, the chassis could become energized at line voltage. A proper safety ground gives fault current a low-impedance path, allowing the fuse or circuit breaker to disconnect power. A ground rod does not replace the protective ground wire back to the electrical supply. Grounding reduces the hazard; it is not permission to touch equipment suspected of having a fault.

Never defeat safety grounds by cutting off ground pins, using two-prong adapters, or "floating" grounds to fix hum problems. If you have vintage equipment with a two-prong plug, have a qualified technician assess its safety. A three-wire cord alone is not a suitable fix for every circuit design.

#### Soldering: Two Different Safety Concerns

A soldered joint that works well inside an electronic circuit is not necessarily suitable for a lightning protection connection. The difference is the enormous heating a lightning current can produce.

> **Key Information:** Soldered joints should not be used in lightning protection ground connections because a soldered joint will likely be destroyed by the heat of a lightning strike. {{< link id="G4C07" >}}

Lightning protection requires connection methods suitable for that purpose, rather than relying on electronics solder. Designing those connections is beyond this section; use applicable electrical and lightning-protection guidance for the actual installation.

Ordinary electronics soldering has a separate safety concern. Lead-tin solder can leave lead contamination on your hands, which can then transfer to food.

> **Key Information:** Lead can contaminate food if hands are not washed carefully after handling lead-tin solder. {{< link id="G0B10" >}}

Keep food away from the work area and wash your hands carefully after handling the solder, especially before eating. That hygiene precaution addresses lead ingestion; ventilation addresses the different problem of breathing soldering fumes. Choosing lead-free solder does not remove the need to manage heat and fumes while working.

#### Bringing It All Together

Three different grounding needs—lightning protection, RF management, and electrical safety—sometimes seem to pull in different directions. All three benefit from proper bonding of the grounding systems and equipment enclosures.

The common goal is to manage currents and voltage differences rather than leave separate pieces of equipment at unrelated potentials. Lightning protection, RF bonding, and electrical safety grounding each address a different hazard, so none replaces the others. A station can need attention to all three even if one appears to be working well.

No ground system is perfect, and a direct lightning strike can overwhelm any protection.

The next section turns from electrical connections to installing and maintaining antennas, including the hazards of working at height.
