---
chapter: "6"
section: "6.5"
questions: ["G0A01", "G0A02", "G0A04", "G0A07", "G0A03", "G0A09", "G0A06", "G0A08", "G0A05", "G0A10", "G0A11", "G0A12", "G4C11"]
status: draft1
---

### Section 6.5: RF Exposure

When you transmit, where does all that RF energy go? Most of it radiates into the atmosphere and off toward distant stations (that's the plan, anyway). But some of it ends up closer to home. While you can't see or smell RF, it's real, and at high enough levels it can cause harm. The FCC requires amateur stations to comply with RF exposure limits—whether you're running QRP or pushing the legal limit.

#### How RF Affects You

You covered this in your Technician studies: unlike ionizing radiation from X-rays that damages molecules directly, RF energy works more like a microwave oven—it causes heating.

> **Key Information:** RF energy can affect human body tissue by heating it. {{< link id="G0A01" >}}

At amateur power levels, this heating rarely causes immediate burns (except from touching energized components—don't do that). But prolonged exposure above safety limits can cause tissue damage before you feel anything. The eyes are particularly vulnerable since they don't dissipate heat well.

#### What Determines Your Exposure

Three factors work together to determine how much RF exposure someone receives:

> **Key Information:** RF exposure is determined by frequency, power density, and duty cycle. {{< link id="G0A02" >}}

**Frequency** determines how efficiently your body absorbs the energy. As you learned for the Technician exam, around 50 MHz is where the human body absorbs RF most efficiently—a quarter wavelength on 6 meters is about 1.5 meters, or around 5 feet. In other words, typical adult human height makes us decent antennas at that wavelength.

**Power density** is the concentration of RF power in space, measured in milliwatts per square centimeter. The closer you are to the antenna, the higher the power density. Move twice as far away and the power density drops to one quarter (the inverse square law at work).

**Duty cycle** is the percentage of time you're actually transmitting. If you listen for 5 minutes and transmit for 5 minutes, your duty cycle is 50%. A ragchew where you talk for 2 minutes then listen for 2 minutes is also 50%. Running FT8 and transmitting every other 15-second slot? Still 50%. Duty cycle is about the overall pattern, not individual transmissions.

The FCC uses "time averaging" to account for duty cycle when evaluating exposure:

> **Key Information:**
> - Time averaging means the total RF exposure averaged over a certain period when evaluating RF radiation exposure. {{< link id="G0A04" >}}
> - A lower duty cycle permits greater power levels to be transmitted. {{< link id="G0A07" >}}

The averaging period is 6 minutes for controlled environments (like your shack, where you know about the RF) and 30 minutes for uncontrolled environments (public areas where people don't know they're being exposed).

This is why duty cycle matters so much for compliance. SSB voice might average only 20% duty cycle—you're transmitting only while actually speaking, and conversations have natural pauses. CW runs around 40% (key-down time versus spaces between elements and words). But continuous modes like FM, RTTY, and FT8 are essentially 100% duty cycle whenever you're transmitting. A higher-power SSB station might comply easily where a lower-power digital station struggles, simply because of that duty cycle difference.

#### Evaluating Your Station

The FCC requires you to ensure your station meets RF exposure limits. There are three accepted ways to do this:

> **Key Information:**
> - You can determine that your station complies with FCC RF exposure regulations by calculation based on FCC OET Bulletin 65, by calculation based on computer modeling, or by measurement of field strength using calibrated equipment. {{< link id="G0A03" >}}
> - A calibrated field strength meter with a calibrated antenna can be used to accurately measure an RF field strength. {{< link id="G0A09" >}}

**OET Bulletin 65** is the FCC's official guidance document for RF exposure evaluation. "OET" stands for Office of Engineering and Technology. The bulletin provides formulas and tables that let you calculate expected exposure based on your power, antenna gain, and distance. Many online calculators automate this math—you plug in your station details and get a compliance answer.

**Computer modeling** uses antenna simulation software to predict RF fields around your specific setup. This handles complex situations like stacked antennas or unusual configurations.

**Direct measurement** with calibrated equipment is the most accurate method but requires expensive gear. Some clubs own field strength meters that members can borrow.

For most amateur stations, the OET 65 calculations (or an online calculator based on them) are plenty adequate.

#### What the FCC Requires

Low-power stations often qualify for "categorical exemption"—the power is low enough that compliance is assumed without formal evaluation. But if your station doesn't qualify for exemption:

> **Key Information:**
> - If your station fails to meet the FCC RF exposure exemption criteria, you must perform an RF exposure evaluation in accordance with FCC OET Bulletin 65. {{< link id="G0A06" >}}
> - An amateur operator must perform a routine RF exposure evaluation and prevent access to any identified high exposure areas to ensure compliance with RF safety regulations. {{< link id="G0A08" >}}
> - If an evaluation shows that the RF energy radiated exceeds permissible limits for possible human absorption, you must take action to prevent human exposure to the excessive RF fields. {{< link id="G0A05" >}}

"Take action" can mean several things: reduce power, raise or relocate antennas, limit access to high-exposure areas during transmission, or change operating patterns. The FCC doesn't accept "I know there's a problem but I can't fix it"—you must actually achieve compliance.

#### Special Situations

A few scenarios deserve extra attention:

> **Key Information:**
> - If evaluation shows that a neighbor might experience more than the allowable limit of RF exposure from the main lobe of a directional antenna, take precautions to ensure that the antenna cannot be pointed in their direction when they are present. {{< link id="G0A10" >}}
> - When installing an indoor transmitting antenna, make sure that MPE limits are not exceeded in occupied areas. {{< link id="G0A11" >}}
> - All stations with a time-averaged transmission of more than one milliwatt are subject to the FCC rules on RF exposure. {{< link id="G0A12" >}}

**Directional antennas** focus your signal—and RF exposure—in specific directions. Great for working DX, but worth considering if your beam sweeps across the neighbor's yard. Options include mechanical stops that prevent rotation into problem directions, reduced power when pointing toward occupied areas, or coordinating operating times.

**Indoor antennas** are necessarily close to living spaces. That attic dipole might sit just a few feet above your bedroom. Operating from an apartment with an indoor antenna demands careful attention to power levels and who's nearby when you transmit.

**Low-power stations** aren't automatically exempt from the rules. One milliwatt is 0.001 watts—your station definitely exceeds that. The good news: low-power stations almost always comply with huge safety margins, but you verify rather than assume.

#### RF in the Shack

Beyond antenna fields, stray RF inside your station can create localized exposure. If your microphone case tingles when you transmit, that's RF where it shouldn't be—and your lips are awfully close to that microphone.

> **Key Information:** Bonding all equipment enclosures together helps to minimize RF "hot spots" in an amateur station. {{< link id="G4C11" >}}

We covered bonding in the grounding section—connecting all your equipment chassis together with wide copper strap keeps everything at the same RF potential. This eliminates hot spots while also solving many RFI problems.

#### Staying Compliant

RF exposure management doesn't need to be complicated:

1. Use an online calculator or OET 65 to evaluate your station
2. Identify any areas that might exceed limits
3. Address problems with more distance, less power, or restricted access
4. Document your evaluation
5. Re-evaluate when you make significant station changes

The rules exist not to limit your enjoyment but to ensure amateur radio remains safe for operators, families, and neighbors. A little awareness goes a long way.
