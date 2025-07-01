---
chapter: "9"
section: "9.2"
questions: ["G1A06", "G1E04", "G1E10", "G1E11"]
status: generated
---

### Section 9.2: Secondary Allocations and Interference

Understanding frequency allocations isn't just about knowing where you can transmit—it's also about understanding your responsibilities when sharing spectrum with other services. Amateur radio operates in various allocations with different status levels, and knowing when to yield is essential for maintaining good relations with other spectrum users.

#### Primary vs. Secondary Allocations

The FCC and international regulatory bodies divide radio spectrum into allocations for different services. These allocations come with a hierarchy:

- **Primary Users**: Have priority access to frequencies
- **Secondary Users**: Must avoid interference with primary users

Amateur radio has some bands where it's the primary service, others where it's secondary, and some with a mix depending on the segment.

> **Key Information:** *When the FCC rules designate the amateur service as a secondary user on a band, amateur stations must not cause harmful interference to primary users and must accept interference from primary users.* {{< link id="G1A06" >}}

<img src="../images/primary-secondary-allocations.svg" alt="Diagram showing relationship between primary and secondary services" style="width: 450px; margin: 10px;">

This principle is fundamental to frequency sharing. As a secondary service, amateur radio operates under two key conditions:
1. You must not cause harmful interference to primary services
2. You must accept interference from primary services

If a primary user experiences interference from your amateur operations, you must take immediate steps to eliminate the interference, which may include changing frequency or ceasing transmission. Conversely, if primary users cause interference to your amateur communications, you have no regulatory recourse - you must either work around the interference or move to another frequency.

#### Examples of Secondary Allocations

Several bands where General class operators have privileges are secondary allocations:

- **60 meters (5 MHz)**: Amateur radio is secondary to government operations
- **30 meters (10.1-10.15 MHz)**: Amateur radio is secondary to fixed services
- **70 centimeters (420-450 MHz)** in parts of the US: Amateur radio is secondary to government radiolocation services

In these bands, additional operating restrictions may apply beyond the secondary status, such as power limitations, mode restrictions, or geographic restrictions.

#### Avoiding Harmful Interference

Various circumstances require amateur operators to take specific steps to avoid causing harmful interference:

> **Key Information:** *When operating within one mile of an FCC Monitoring Station, when using a band where the amateur service is secondary, or when a station is transmitting spread spectrum emissions, a licensed amateur radio operator must take specific steps to avoid harmful interference to other users or facilities.* {{< link id="G1E04" >}}

<img src="../images/interference-avoidance.svg" alt="Diagram showing interference prevention techniques" style="width: 450px; margin: 10px;">

Let's examine each of these special circumstances:

1. **Near FCC Monitoring Stations**: These facilities monitor and enforce spectrum regulations. Operating near them requires extra caution to avoid interfering with their sensitive equipment. The FCC maintains monitoring stations in various locations across the US.

2. **Secondary Allocations**: As discussed above, operating on bands where amateur radio is secondary requires vigilance to avoid interfering with primary users.

3. **Spread Spectrum Emissions**: These special transmission techniques spread a signal across a wide bandwidth. While they offer advantages like resistance to interference and potential security benefits, they must be used carefully to avoid causing problems for other spectrum users.

Steps to avoid interference include:
- Using the minimum power necessary for communication
- Selecting frequencies and times with lower probability of interference
- Being prepared to change frequency or cease operation if interference occurs
- Employing directional antennas to minimize signal in directions of potential interference
- Monitoring for primary users before and during transmission

#### Special Considerations for Automated Operation

Automated stations present unique interference potential since they operate without continuous human supervision:

> **Key Information:** *Amateur operators should normally avoid transmitting on 14.100, 18.110, 21.150, 24.930, and 28.200 MHz because a system of propagation beacon stations operates on those frequencies.* {{< link id="G1E10" >}}

<img src="../images/beacon-frequencies.svg" alt="Chart showing the international beacon network frequencies" style="width: 450px; margin: 10px;">

These specific frequencies host the International Beacon Project, a worldwide network of synchronized beacons that transmit in sequence to help operators assess propagation conditions. Transmitting on these frequencies would disrupt this valuable resource for the entire amateur community.

When it comes to automated digital stations, special rules apply:

> **Key Information:** *Automatically controlled stations transmitting RTTY or data emissions may communicate with other automatically controlled digital stations anywhere in the 6-meter or shorter wavelength bands, and in limited segments of some of the HF bands.* {{< link id="G1E11" >}}

<img src="../images/auto-control-segments.svg" alt="Chart showing frequency segments for automatically controlled digital stations" style="width: 450px; margin: 10px;">

Automatically controlled digital stations can operate on:
- All amateur bands 50 MHz and above (6 meters, 2 meters, 70 cm, etc.)
- Limited segments of some HF bands, specifically designated for this purpose

These limitations help manage the potential for interference from stations operating without direct human control.

#### Interference Resolution and Band Sharing

When interference issues arise (as they inevitably will), a systematic approach helps resolve them effectively:

1. **Verify Your Station Operation**: Ensure your own station is functioning properly and not causing interference through overmodulation, splatter, or other technical issues.

2. **Document the Problem**: Record when interference occurs, its characteristics, and any other relevant details.

3. **Attempt Technical Solutions**: Try different frequencies, times, antennas, power levels, or modes to avoid the interference.

4. **Communication**: If interference involves other amateur stations, communicate directly to find a mutually acceptable solution.

5. **Coordination**: Where applicable, work with frequency coordinators or band planners to resolve conflicts.

6. **Regulatory Remedies**: Only after exhausting other options should you consider involving regulatory authorities, and then only for cases of deliberate interference or clear regulatory violations.

Remember that even when you operate with primary status, good amateur practice dictates minimizing interference to all users. Cooperation and technical solutions should be emphasized over asserting regulatory rights.

#### Interference to Consumer Electronics

As a General class operator with expanded frequency and power privileges, you may encounter situations where your transmissions affect consumer electronics like televisions, telephones, or audio equipment. While this isn't typically considered "harmful interference" in the regulatory sense (as consumer devices must accept interference from licensed services), it's still your responsibility to help resolve these issues when possible.

Some approaches to reducing interference to consumer devices include:
- Install proper station grounding
- Use RF chokes and ferrite beads on both your station cables and affected devices
- Reduce transmitter power when operating near sensitive equipment
- Consider the timing of your transmissions
- Help neighbors install appropriate filters on affected equipment

#### International Considerations

When operating internationally or in border regions, remember that frequency allocations may differ between countries and ITU regions. A band where amateur radio is primary in your country might be secondary or unavailable to amateurs elsewhere. Always research and respect the regulations of the country where you're physically located when operating.

#### Beacon Monitoring and Reporting

The international beacon network mentioned earlier provides a valuable resource for understanding propagation conditions. Taking time to listen to these beacons can help you:

1. Determine which bands are open to different parts of the world
2. Understand how propagation changes throughout the day
3. Compare signal strengths to assess the effectiveness of your receiving setup

Many operators also participate in reverse beacon networks, automated systems that report when and where your CW or digital signals are heard. These systems provide real-time feedback on your signal's propagation without requiring active participation from other operators.

#### IARU Band Plans

Beyond FCC regulations, the International Amateur Radio Union (IARU) develops band plans that harmonize amateur operations worldwide. While not regulatory requirements, these band plans represent the consensus of the global amateur community on efficient spectrum use.

IARU band plans often provide more detailed guidance than FCC regulations, suggesting specific segments for various modes and purposes. Following these voluntary plans demonstrates good amateur practice and helps maximize the utility of our shared spectrum resources.

#### The Importance of Cooperation

The amateur radio spectrum is a shared resource that grows more valuable as technology advances and demand for wireless services increases. Your General class license brings increased privileges but also increased responsibility to use the spectrum wisely and cooperatively.

By understanding your obligations regarding secondary allocations and interference prevention, you contribute to the continued vitality of amateur radio and help ensure our access to spectrum in the future. Remember that our collective behavior as a service influences how regulatory bodies view amateur radio during spectrum allocation discussions.

Each time you yield to a primary service, help resolve an interference issue, or follow a voluntary band plan, you demonstrate the value of amateur radio's self-regulating tradition and strengthen the case for continued access to our precious spectrum resources.
