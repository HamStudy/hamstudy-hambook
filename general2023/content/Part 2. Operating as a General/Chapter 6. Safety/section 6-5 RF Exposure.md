---
chapter: "6"
section: "6.5"
questions: ["G0A01", "G0A02", "G0A04", "G0A07", "G0A03", "G0A09", "G0A06", "G0A08", "G0A05", "G0A10", "G0A11", "G0A12"]
status: draft1
---

### Section 6.5: RF Exposure

When you transmit, where does all that RF energy go? Most of it radiates into the atmosphere and off toward distant stations (that's the plan, anyway). But some of it ends up closer to home. While you can't see or smell RF, it's real, and at high enough levels it can cause harm. The FCC requires amateur stations to comply with RF exposure limits—whether you're running low power (QRP) or pushing the legal limit.

#### How RF Affects You

You covered this in your Technician studies: unlike ionizing radiation from X-rays that damages molecules directly, RF energy works more like a microwave oven—it causes heating.

> **Key Information:** RF energy can affect human body tissue by *heating it*. {{< link id="G0A01" >}}

Strong RF fields can heat tissue, and you cannot rely on feeling warmth to judge safe exposure. Touching an energized component can also cause a burn—a separate hazard discussed below. The eyes are particularly vulnerable since they don't dissipate heat well.

#### What Determines Your Exposure

Three factors work together to determine how much RF exposure someone receives:

> **Key Information:** RF exposure is determined by *frequency*, *power density*, and *duty cycle*. {{< link id="G0A02" >}}

**Frequency** determines how efficiently your body absorbs the energy. The body absorbs RF efficiently over part of the VHF range, and the FCC’s lowest power-density limits apply from 30 to 300 MHz. You may remember 50 MHz from Technician study: a quarter wavelength on 6 meters is about 1.5 meters, or around 5 feet. That is a useful reminder that body size matters, not an exact resonance shared by every person.

**Power density** is the concentration of RF power in space, measured in milliwatts per square centimeter. Far enough from an antenna, in a given direction, moving twice as far away reduces power density to about one quarter (the inverse square law at work). Close to the antenna, the fields are more complex, so that shortcut may not apply.

**Transmit duty cycle** is the percentage of time you're transmitting. If you listen for 5 minutes and transmit for 5 minutes, that is 50% over the full 10 minutes. But exposure rules use a specified time window, not necessarily your whole conversation. Alternating FT8 slots gives a transmit fraction a little below 50%, because each signal ends before its 15-second slot does; using 50% is a conservative estimate for that alternating pattern.

The FCC uses "time averaging" to account for duty cycle when evaluating exposure:

> **Key Information:**
> - Time averaging means the *total RF exposure averaged over a certain period* when evaluating RF radiation exposure. {{< link id="G0A04" >}}
> - A *lower duty cycle* permits *greater power levels* to be transmitted. {{< link id="G0A07" >}}

For the maximum permissible exposure (MPE) limits used here, the averaging periods are 6 minutes for controlled exposure and 30 minutes for uncontrolled exposure. Under the amateur rules, the licensee and immediate household may use controlled limits with appropriate RF-safety training and information. Other nearby people must be evaluated under the general-population/uncontrolled limits. Being inside your shack does not by itself make someone’s exposure controlled.

Check the busiest applicable window. Five minutes transmitting followed by five minutes listening includes a six-minute controlled-exposure window with five minutes of transmission: $5 \div 6 \approx 83\%$, rather than 50%. Repeating that pattern throughout a 30-minute uncontrolled-exposure window gives 50%.

![The radio transmits from minute zero to minute five, then receives until minute ten. Across all ten minutes, transmission takes five out of ten minutes, or fifty percent. But a six-minute window starting at zero includes five minutes of transmission and only one minute of receiving. Five divided by six is about eighty-three percent. Equal transmit and receive time over ten minutes does not mean fifty percent within every shorter window.](../../../images/s6-5-time-averaging.svg)
{.img-centered caption="The six-minute controlled-exposure window includes five minutes of transmission. Repeating the pattern over a 30-minute uncontrolled-exposure window averages 50%."}

There is a second factor, **modulation duty cycle**: the average power **while transmitting** compared with peak envelope power (PEP). SSB speech rises and falls, and CW has spaces between keyed elements, so their average power can be below PEP. FM, RTTY and FT8 signals are close to full power while the signal is actually on. Do not count the same pauses in both factors.

For example, suppose a 100-watt-PEP SSB signal averages half its PEP while you transmit. You also transmit for half the applicable averaging window. Average power is $100 \times 0.5 \times 0.5 = 25$ watts. These are example factors; voice processing and operating habits change the actual values. A lower transmit fraction can allow more power while still meeting exposure limits, but it never overrides the band’s legal power limit ([Section 9.2]({{% pageref "9.2" %}})).

#### Evaluating Your Station

The FCC requires you to ensure your station meets RF exposure limits. There are three accepted ways to do this:

> **Key Information:**
> - You can determine that your station complies with FCC RF exposure regulations by calculation based on FCC OET Bulletin 65, by calculation based on computer modeling, or by measurement of field strength using calibrated equipment. {{< link id="G0A03" >}}
> - A calibrated field strength meter with a calibrated antenna can be used to accurately measure an RF field strength. {{< link id="G0A09" >}}

**OET Bulletin 65** is the FCC's official guidance document for RF exposure evaluation. "OET" stands for Office of Engineering and Technology. The bulletin provides formulas and tables that let you calculate expected exposure based on your power, antenna gain, and distance. Many online calculators automate this math, but the result is useful only when their assumptions fit your station, including antenna height, direction and distance.

**Computer modeling** uses antenna simulation software to predict RF fields around your specific setup. This handles complex situations like stacked antennas or unusual configurations.

**Direct measurement** requires calibrated equipment and a method suited to the frequency, field and locations being checked. A casual meter reading can miss the highest exposure. Some clubs have suitable equipment and experienced members who can help.

For many amateur stations, suitable OET 65 calculations are a practical starting point. Very close to an antenna or with a complex installation, use a method valid for those conditions or get qualified help.

#### What the FCC Requires

Some stations qualify for an exemption from routine evaluation under the current FCC criteria. Those criteria can depend on frequency, power and separation, and they do not exempt a station from the exposure limits themselves. Use the current criteria in [47 CFR §1.1307](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-1/subpart-I/section-1.1307), rather than an old amateur power-only table. If your station does not qualify:

> **Key Information:**
> - If your station fails to meet the FCC RF exposure exemption criteria, you must perform an RF exposure evaluation in accordance with FCC OET Bulletin 65. {{< link id="G0A06" >}}
> - An amateur operator must perform a routine RF exposure evaluation when required and prevent human exposure above the applicable limits, including by restricting access to identified high-exposure areas. {{< link id="G0A08" >}}
> - If an evaluation shows that the RF energy radiated exceeds permissible limits for possible human absorption, you must take action to prevent human exposure to the excessive RF fields. {{< link id="G0A05" >}}

"Take action" can mean several things: reduce power, raise or relocate antennas, limit access to high-exposure areas during transmission, or change operating patterns. The FCC doesn't accept "I know there's a problem but I can't fix it"—you must actually achieve compliance.

#### Special Situations

A few scenarios deserve extra attention:

> **Key Information:**
> - If evaluation shows that a neighbor might experience more than the allowable limit of RF exposure from the main lobe of a directional antenna, take precautions to ensure that the antenna *cannot be pointed in their direction when they are present*. {{< link id="G0A10" >}}
> - When installing an indoor transmitting antenna, make sure that **MPE limits** are not exceeded in occupied areas. {{< link id="G0A11" >}}
> - All stations with a time-averaged transmission of more than one milliwatt are subject to the FCC rules on RF exposure. {{< link id="G0A12" >}}

**Directional antennas** focus your signal—and RF exposure—in specific directions. Great for working DX, but worth considering if your beam sweeps across the neighbor's yard. Options include mechanical stops that prevent rotation into problem directions or reducing power enough to meet the limit. If you rely on operating times or access controls, they must reliably prevent excessive exposure whenever people are present.

**Indoor antennas** are necessarily close to living spaces. That attic dipole might sit just a few feet above your bedroom. Operating from an apartment with an indoor antenna demands careful attention to power levels and who's nearby when you transmit. Include occupied spaces above, below and next door, and use an evaluation method valid at those short distances.

**Low-power stations** are not automatically exempt from the rules. One milliwatt is 0.001 watts. The current rules include a routine-evaluation exemption for an individual source at or below that time-averaged available power. The general obligation to avoid excessive exposure still applies. Above that power, check the applicable exemption or evaluation criteria; low power alone does not establish a safe margin at every distance.

#### Exposure and Contact Burns Are Different Problems

The radiated-field evaluation in this section does not replace the grounding and bonding precautions covered earlier in this chapter. RF voltage on a microphone case or other equipment can cause a contact burn; bonding helps reduce those voltage differences. Passing an exposure evaluation does not prove that equipment is safe to touch, and bonding the equipment does not establish compliance with radiated-exposure limits. Both problems need attention.

#### Staying Compliant

RF exposure management doesn't need to be complicated:

1. Use a suitable calculator or OET 65 method to evaluate your station
2. Identify any areas that might exceed limits
3. Address problems with more distance, less power, or restricted access
4. Document your evaluation
5. Re-evaluate when you make significant station changes
