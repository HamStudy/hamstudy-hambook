---
chapter: "4"
section: "4.4"
questions: ["G9B01", "G9B02", "G9B03", "G9B04", "G9B05", "G9B06", "G9B07", "G9B08", "G9B09", "G9B10", "G9B11", "G9B12", "G9D01", "G9D02", "G9D12"]
status: generated
---

### Section 4.4: Dipoles and Vertical Antennas

While directional antennas are impressive, the majority of General class HF operation still happens with simpler antennas - particularly dipoles and verticals. These antennas might lack the focused gain of a beam, but they're affordable, relatively easy to install, and remarkably effective. Let's explore how to get the most from these versatile workhorses.

#### Dipole Antennas: The Versatile Standard

The dipole is amateur radio's fundamental antenna - simple, effective, and adaptable to nearly any situation. A basic dipole is just two equal lengths of wire fed at the center, but there's more to getting good performance than just hanging up some wire.

<img src="../images/dipole-radiation.svg" alt="Dipole Radiation Pattern" style="width: 350px; margin: 10px;">

> **Key Information:** *The radiation pattern of a dipole antenna in free space is a figure-eight at right angles to the antenna.* {{< link id="G9B04" >}}

This figure-eight pattern means dipoles work best broadside (perpendicular) to the wire. When installing a dipole, try to orient it so this stronger radiation pattern points toward areas you want to communicate with.

#### Height Matters - A Lot

How high you hang your dipole dramatically affects its performance:

> **Key Information:** *If a horizontal dipole HF antenna is less than 1/2 wavelength high, its azimuthal radiation pattern is almost omnidirectional at elevation angles higher than about 45 degrees.* {{< link id="G9B05" >}}

This means a low dipole radiates mostly upward in all directions, which is great for NVIS (Near Vertical Incidence Skywave) communications within a few hundred miles, but less effective for DX.

<img src="../images/dipole-height-patterns.svg" alt="Dipole Patterns at Different Heights" style="width: 400px; margin: 10px;">

Height also affects impedance:

> **Key Information:** *The feed point impedance of a horizontal 1/2 wave dipole antenna steadily decreases as its height is reduced to 1/10 wavelength above ground.* {{< link id="G9B07" >}}

A dipole in free space has an impedance of about 73 ohms, but this drops significantly when the antenna is mounted low. This impedance change explains why low dipoles often have a different SWR than expected.

#### Feed Point Location Effects

The feed point location on a dipole also affects its impedance:

> **Key Information:** *The feed point impedance of a 1/2 wave dipole steadily increases as the feed point is moved from the center toward the ends.* {{< link id="G9B08" >}}

<img src="../images/dipole-feed-points.svg" alt="Dipole Feed Point Variations" style="width: 350px; margin: 10px;">

This property is useful for matching in some antenna designs, but for most simple dipoles, center-feeding provides the closest match to common 50-75 ohm feed lines.

#### Calculating Dipole Length

For a half-wave dipole, the total length in feet is approximately:

$$Length (feet) = \frac{468}{f_{MHz}}$$

Here are some common examples:

> **Key Information:** *The approximate length for a 1/2 wave dipole antenna cut for 14.250 MHz is 33 feet.* {{< link id="G9B10" >}}

$$Length = \frac{468}{14.250} \approx 33 \text{ feet}$$

> **Key Information:** *The approximate length for a 1/2 wave dipole antenna cut for 3.550 MHz is 132 feet.* {{< link id="G9B11" >}}

$$Length = \frac{468}{3.550} \approx 132 \text{ feet}$$

These calculations provide starting points, but you'll usually need to trim your antenna for best resonance on your target frequency.

#### The Inverted V: Space-Saving Variation

A popular dipole variation is the inverted V:

> **Key Information:** *The common name of a dipole with a single central support is an inverted V.* {{< link id="G9D12" >}}

<img src="../images/inverted-v.svg" alt="Inverted V Dipole" style="width: 300px; margin: 10px;">

The inverted V requires only one tall support (instead of two for a flat-top dipole) and less horizontal space. Its radiation pattern is a blend between a horizontal dipole and a vertical antenna. The inverted V typically has a slightly lower feed point impedance than a flat-top dipole at the same height, often making it a better match to 50-ohm coax.

#### End-Fed Half-Wave Antennas

For situations where feeding in the center isn't practical, an end-fed half-wave (EFHW) antenna can be a solution:

> **Key Information:** *The feed point impedance of an end-fed half-wave antenna is very high.* {{< link id="G9D02" >}}

<img src="../images/efhw-antenna.svg" alt="End-Fed Half-Wave Antenna" style="width: 350px; margin: 10px;">

The impedance at the end of a half-wave antenna can be several thousand ohms. This requires a matching transformer to connect to typical 50-ohm coaxial cable, but it allows the antenna to be fed from one end, which can be a significant practical advantage in some installations.

#### Choosing Between Horizontal and Vertical Polarization

Your choice between horizontal antennas (like dipoles) and vertical antennas impacts your station's performance:

> **Key Information:** *An advantage of using a horizontally polarized as compared to a vertically polarized HF antenna is lower ground losses.* {{< link id="G9B09" >}}

Horizontal antennas typically experience less signal loss from ground absorption, especially over average or poor ground. This makes them generally more efficient for most amateur installations, particularly at lower heights.

#### Vertical Antennas: Space-Efficient DX Tools

Vertical antennas have their own advantages - they're compact, omnidirectional, and often excellent for DX work.

<img src="../images/quarter-wave-vertical.svg" alt="Quarter-Wave Vertical Antenna" style="width: 300px; margin: 10px;">

> **Key Information:** *The radiation pattern of a quarter-wave ground-plane vertical antenna is omnidirectional in azimuth.* {{< link id="G9B03" >}}

This omnidirectional pattern means verticals work equally well (or poorly) in all compass directions without needing a rotator - a significant advantage for limited-space stations or those who want to monitor all directions simultaneously.

#### Ground Planes and Radials

A critical aspect of vertical antenna performance is the ground plane or radial system:

> **Key Information:** *The radial wires of a ground-mounted vertical antenna system should be placed on the surface or buried a few inches below the ground.* {{< link id="G9B06" >}}

<img src="../images/vertical-radial-system.svg" alt="Vertical Antenna with Radial System" style="width: 350px; margin: 10px;">

Without an effective ground plane, much of your signal gets lost in ground losses. For best results:
- Use at least 4 radials for minimal operation
- 16-32 radials provide good performance
- 60+ radials approach maximum efficiency

For elevated verticals (mounted above ground), the radials can be fewer (typically 2-4) but should be elevated as well.

#### Adjusting the Feed Point Impedance of Verticals

The natural impedance of a quarter-wave vertical is around 36 ohms - not a perfect match for 50-ohm systems. This can be adjusted:

> **Key Information:** *To adjust the feed point impedance of an elevated quarter-wave ground-plane vertical antenna to be approximately 50 ohms, slope the radials downward.* {{< link id="G9B02" >}}

<img src="../images/sloper-radials.svg" alt="Vertical with Sloping Radials" style="width: 300px; margin: 10px;">

By angling the radials downward at about 45 degrees, the feed point impedance increases to around 50 ohms, providing a better match to standard coaxial cable.

#### Calculating Vertical Antenna Length

For a quarter-wave vertical, the length in feet is approximately:

$$Length (feet) = \frac{234}{f_{MHz}}$$

For example:

> **Key Information:** *The approximate length for a 1/4 wave monopole antenna cut for 28.5 MHz is 8 feet.* {{< link id="G9B12" >}}

$$Length = \frac{234}{28.5} \approx 8.2 \text{ feet} \approx 8 \text{ feet}$$

#### Random Wire Antennas: When Space and Aesthetics Matter

Sometimes you just need to get on the air with minimal visibility and space requirements:

> **Key Information:** *A characteristic of a random-wire HF antenna connected directly to the transmitter is that station equipment may carry significant RF current.* {{< link id="G9B01" >}}

<img src="../images/random-wire.svg" alt="Random Wire Antenna Setup" style="width: 350px; margin: 10px;">

Random wire antennas (wires of non-resonant length) can be effective, but they typically:
- Require an antenna tuner
- Need a good RF ground
- May cause RF in the shack due to unbalanced feed

To minimize RF feedback problems with random wires:
- Use a counterpoise wire
- Install a good RF ground
- Consider a balun or unun at the feed point
- Keep the antenna away from your station equipment

#### NVIS: Communicating in Your Region

For reliable communication within a few hundred miles, Near Vertical Incidence Skywave (NVIS) propagation is hard to beat:

> **Key Information:** *A horizontal dipole antenna most effective as a Near Vertical Incidence Skywave (NVIS) antenna for short-skip communications on 40 meters during the day is one placed between 1/10 and 1/4 wavelength above the ground.* {{< link id="G9D01" >}}

<img src="../images/nvis-propagation.svg" alt="NVIS Propagation Pattern" style="width: 400px; margin: 10px;">

An NVIS antenna radiates most of its energy upward, where it reflects off the ionosphere and returns to Earth in a circular pattern around your location. This is ideal for:
- Emergency communications within your state or region
- Reliable communication regardless of terrain
- Consistent coverage where ground wave is too weak and regular skip is too distant

An NVIS setup typically consists of:
- A dipole mounted 0.1 to 0.25 wavelengths high (about 6-20 feet for 40 meters)
- Operation on lower bands (primarily 40-80 meters)
- Daytime operation on higher frequencies, nighttime on lower frequencies

#### Multiband Options for HF Dipoles and Verticals

As a General class operator, you'll likely want to operate on multiple HF bands. Several approaches work well:

1. **Trap Dipoles/Verticals**: Use resonant LC circuits (traps) to make a single antenna work on multiple bands

2. **Fan Dipoles**: Multiple dipoles of different lengths fed at a common point

3. **Linear Loaded Antennas**: Folded sections to fit longer electrical lengths in shorter physical spaces

4. **Off-Center Fed Dipoles**: Feeding a dipole away from center can enable multiband operation

5. **End-Fed Half-Wave with Matching Transformer**: Can work on multiple harmonically related bands

6. **Antenna Tuners with Open-Wire Line**: A single dipole fed with ladder line and a good tuner can work on many bands

Each approach has advantages and tradeoffs in terms of efficiency, bandwidth, complexity, and space requirements.

#### Making the Most of Limited Space

Many General class operators face space constraints. Here are strategies that work:

1. **Use the highest frequency bands your license allows**: Higher frequencies mean shorter antennas

2. **Go vertical**: Vertical antennas typically need less horizontal space

3. **Consider indoor antennas**: Attic dipoles can work surprisingly well

4. **Try loading coils**: Shortened antennas with loading coils trade some efficiency for size

5. **Explore magnetic loops**: Small but efficient when well-constructed

6. **Use natural supports**: Trees, buildings, and existing structures can support wire antennas

Remember that even a compromised antenna that lets you get on the air is better than a perfect antenna that never gets built!

#### Practical Tips for Dipoles and Verticals

Having installed countless dipoles and verticals over the years, here are some hard-earned tips:

1. **For dipoles**:
   - Install higher whenever possible
   - Keep ends away from metal objects and trees
   - Consider a 1:1 current balun at the feed point to reduce feed line radiation
   - Slight drooping at the ends often improves performance

2. **For verticals**:
   - More radials nearly always improve performance
   - Elevating the antenna even a few feet above ground often helps
   - Mount away from buildings and metal objects
   - Remember that nearby objects become part of the antenna

3. **For both**:
   - Use quality insulators at end points
   - Make secure, waterproof connections
   - Include strain relief for mechanical stability
   - Build with maintenance in mind - you will need to access it eventually

#### From Simple to Sophisticated

The beauty of dipoles and verticals is that they can grow with your experience. You might start with a simple single-band dipole, then move to a multi-band trap vertical, and eventually build a complex multi-band dipole system with open-wire feed and a sophisticated antenna tuner.

With your General privileges, even modest dipoles and verticals will let you work stations around the world when conditions are favorable. As you gain experience, you'll develop preferences based on your operating habits, available space, and the bands you prefer.

Next, we'll explore specialized antennas designed for specific situations - mobile operation, portable setups, and restricted spaces - where conventional dipoles and verticals might not be practical.
