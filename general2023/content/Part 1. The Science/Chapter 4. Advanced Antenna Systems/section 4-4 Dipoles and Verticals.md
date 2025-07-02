---
chapter: "4"
section: "4.4"
questions: ["G9B01", "G9B02", "G9B03", "G9B04", "G9B05", "G9B06", "G9B07", "G9B08", "G9B09", "G9B10", "G9B11", "G9B12", "G9D01", "G9D02", "G9D12"]
status: reviewed1
---

### Section 4.4: Dipoles and Vertical Antennas

You're ready to get on the air with your new General privileges, but maybe a tower with a beam antenna isn't in your immediate future. Good news—the vast majority of successful HF contacts happen with simple wire dipoles and vertical antennas. These workhorses of amateur radio have launched countless DX adventures and provided reliable communication for generations of hams. Understanding how to optimize these fundamental antennas will transform your HF experience from frustrating to fantastic.

#### Dipole Antennas: Your Gateway to HF Success

Picture this: with just two pieces of wire and some coax, you can work stations on the other side of the world. That's the magic of the dipole antenna—it transforms electrical energy into radio waves that bounce off the ionosphere and travel thousands of miles. The dipole works because it creates a resonant structure that efficiently radiates your signal into space.

<img src="../images/dipole-radiation.svg" alt="Dipole Radiation Pattern" style="width: 350px; margin: 10px;">

The dipole's effectiveness comes from its radiation pattern. {{< link id="G9B04" >}} Unlike a light bulb that shines equally in all directions, a dipole focuses its energy in specific directions.

> **Key Information:** *The radiation pattern of a dipole antenna in free space is a figure-eight at right angles to the antenna.*

This figure-eight pattern means your signal radiates strongest broadside to the wire—perpendicular to its length. Orient your dipole so this maximum radiation heads toward your target areas, whether that's Europe, Japan, or your favorite net control station.

#### Height Transforms Your Dipole's Performance

Here's something that surprises many new General operators: the same dipole antenna can behave completely differently just by changing how high you hang it. Height doesn't just affect signal strength—it fundamentally changes where your signal goes and how well your antenna matches your radio.

When you mount a dipole low (less than a half wavelength high), something interesting happens. {{< link id="G9B05" >}} The ground reflection changes your radiation pattern from that classic figure-eight into something more like a cloud overhead.

> **Key Information:** 
> - *If a horizontal dipole HF antenna is less than 1/2 wavelength high, its azimuthal radiation pattern is almost omnidirectional at elevation angles higher than about 45 degrees*
> - *The feed point impedance of a horizontal 1/2 wave dipole antenna steadily decreases as its height is reduced to 1/10 wavelength above ground* {{< link id="G9B07" >}}

<img src="../images/dipole-height-patterns.svg" alt="Dipole Patterns at Different Heights" style="width: 400px; margin: 10px;">

This height effect creates two distinct operating modes. A low dipole sends most energy upward—perfect for NVIS (Near Vertical Incidence Skywave) work within a few hundred miles. Raise that same antenna above a half wavelength, and it transforms into a DX machine with a lower radiation angle. The impedance change from height also explains why your SWR might be different than expected—that theoretical 73-ohm dipole impedance assumes free space, not real-world installation heights.

#### Feed Point Magic: Controlling Impedance

Want to match your antenna to different feed line impedances? The secret lies in where you connect your feed line. {{< link id="G9B08" >}} A dipole offers different impedances at different points along its length, giving you a natural impedance transformer.

> **Key Information:** *The feed point impedance of a 1/2 wave dipole steadily increases as the feed point is moved from the center toward the ends.*

<img src="../images/dipole-feed-points.svg" alt="Dipole Feed Point Variations" style="width: 350px; margin: 10px;">

At the center, you get the familiar 73 ohms (in free space). Move toward the ends, and impedance climbs into the thousands of ohms. This principle powers several antenna designs, from the classic center-fed dipole that matches well to 50-ohm coax, to end-fed antennas that require special matching transformers to handle their high impedance.

#### Building Your Dipole: From Formula to Reality

Converting your General privileges into on-air contacts starts with cutting your dipole to the right length. The magic number 468 gives you a quick way to calculate dipole length—it accounts for the "end effect" that makes practical antennas slightly shorter than theoretical half wavelengths.

$$Length (feet) = \frac{468}{f_{MHz}}$$

Let's see this formula in action for popular General class frequencies. {{< link id="G9B10" >}} {{< link id="G9B11" >}}

> **Key Information:** 
> - *The approximate length for a 1/2 wave dipole antenna cut for 14.250 MHz is 33 feet*
> - *The approximate length for a 1/2 wave dipole antenna cut for 3.550 MHz is 132 feet*

These calculations give you starting points—expect to trim a few inches for perfect resonance. That 33-foot dipole for 20 meters fits in many suburban yards, while the 132-foot 80-meter dipole might require some creative installation techniques!

#### The Inverted V: One Support, Full HF Coverage

Not everyone has two tall supports perfectly spaced for a flat dipole. Enter the inverted V—a clever solution that needs just one central support while maintaining excellent performance. {{< link id="G9D12" >}}

> **Key Information:** *The common name of a dipole with a single central support is an inverted V.*

<img src="../images/inverted-v.svg" alt="Inverted V Dipole" style="width: 300px; margin: 10px;">

The inverted V design brings practical advantages beyond saving a support structure. Its sloping legs create a radiation pattern that blends horizontal and vertical characteristics, often providing more consistent coverage than a flat dipole. The downward angle also typically lowers the feed point impedance to around 50 ohms—a perfect match for your coax without any additional matching devices. Many hams find the inverted V becomes their go-to antenna because it performs well while fitting into real-world constraints.

#### End-Fed Antennas: Feed Line Freedom

Sometimes your perfect antenna location puts the center right where you can't reach it—over a pond, across a neighbor's property, or high in a tree. End-fed half-wave (EFHW) antennas solve this dilemma by moving the feed point to one end, letting you keep your radio connection accessible while the antenna stretches to wherever it needs to go.

This convenience comes with a technical challenge. {{< link id="G9D02" >}} Remember how moving the feed point toward the ends increases impedance? At the very end, you're dealing with extreme values.

> **Key Information:** *The feed point impedance of an end-fed half-wave antenna is very high.*

<img src="../images/efhw-antenna.svg" alt="End-Fed Half-Wave Antenna" style="width: 350px; margin: 10px;">

We're talking several thousand ohms—far from the 50 ohms your radio expects. Modern EFHW antennas solve this with impedance transformers (often called "ununs") that convert these high impedances down to usable levels. The result? An antenna you can deploy from your shack window, feed at ground level, or string up in configurations impossible with center-fed designs.

#### Horizontal vs. Vertical: Choosing Your Polarization

Every antenna decision involves trade-offs, and polarization is no exception. Your choice between horizontal and vertical polarization affects everything from DX performance to local noise levels. Understanding these differences helps you pick the right tool for your operating goals.

Horizontal antennas like dipoles offer a significant efficiency advantage for most amateur stations. {{< link id="G9B09" >}} The physics of how radio waves interact with the ground favors horizontal polarization.

> **Key Information:** *An advantage of using a horizontally polarized as compared to a vertically polarized HF antenna is lower ground losses.*

Think of it this way: vertical antennas must push their signals through the ground to create their radiation pattern, losing energy in the process. Horizontal antennas interact with the ground differently, reflecting signals with less loss. This efficiency advantage is especially pronounced over typical suburban soil. However, verticals shine in other ways—they're compact, don't need tall supports, and can provide excellent low-angle radiation for DX when properly installed.

#### Vertical Antennas: Your Window to the World

When horizontal space is at a premium but you still want to work DX, vertical antennas become your best friend. A vertical takes up no more ground space than its base, reaches straight up into the sky, and can deliver surprisingly strong signals to distant stations. The secret lies in their unique radiation characteristics and simple installation requirements.

<img src="../images/quarter-wave-vertical.svg" alt="Quarter-Wave Vertical Antenna" style="width: 300px; margin: 10px;">

The vertical's superpower is its omnidirectional coverage. {{< link id="G9B03" >}} Unlike beams that must be rotated or dipoles that favor certain directions, verticals hear and transmit equally in all directions.

> **Key Information:** *The radiation pattern of a quarter-wave ground-plane vertical antenna is omnidirectional in azimuth.*

This 360-degree coverage means you'll never miss a rare DX station calling from an unexpected direction. It also makes verticals perfect for nets, emergency communications, or any time you need to maintain awareness in all directions. The trade-off? You can't focus your signal like a beam antenna, but many operators find the convenience of omnidirectional coverage outweighs the lack of gain.

#### The Secret to Vertical Success: Radials

Here's what many new General operators don't realize: a vertical antenna is only half the story. The other half—the part that makes or breaks your signal—is the ground plane system. Think of radials as the other half of your antenna, providing the "mirror" that allows your vertical to radiate efficiently.

For ground-mounted verticals, proper radial installation makes the difference between a mediocre antenna and a DX powerhouse. {{< link id="G9B06" >}}

> **Key Information:** *The radial wires of a ground-mounted vertical antenna system should be placed on the surface or buried a few inches below the ground.*

<img src="../images/vertical-radial-system.svg" alt="Vertical Antenna with Radial System" style="width: 350px; margin: 10px;">

The radial system acts like a shield, preventing your precious RF energy from being absorbed by lossy ground. More radials mean better shielding and stronger signals. While perfection might require 120 radials, don't let that discourage you—even four radials provide noticeable improvement over none, and 16-32 radials achieve most of the possible gain. For elevated verticals, you need fewer radials (typically 2-4) since they're not fighting ground losses directly.

#### Fine-Tuning Your Vertical's Match

A quarter-wave vertical naturally presents about 36 ohms impedance—close to 50 ohms but not quite perfect. This small mismatch usually works fine, but for optimum performance, you can adjust the impedance using a clever trick involving your radial system.

The angle of your radials controls more than just the ground plane—it also affects feed point impedance. {{< link id="G9B02" >}} By tilting the radials, you change how the antenna "sees" its environment.

> **Key Information:** *To adjust the feed point impedance of an elevated quarter-wave ground-plane vertical antenna to be approximately 50 ohms, slope the radials downward.*

<img src="../images/sloper-radials.svg" alt="Vertical with Sloping Radials" style="width: 300px; margin: 10px;">

Angling radials downward at about 45 degrees raises the feed point impedance from 36 ohms to nearly 50 ohms—a perfect match for your coax. This technique works especially well with elevated verticals where you have full control over radial positioning. It's one of those elegant solutions that uses antenna geometry to solve an impedance problem without any additional components.

#### Sizing Your Vertical for Success

Building a vertical starts with getting the length right. Since a vertical is essentially half of a dipole (the other half being its image in the ground plane), we use half the magic number: 234 instead of 468.

$$Length (feet) = \frac{234}{f_{MHz}}$$

Let's calculate a practical example for 10 meters. {{< link id="G9B12" >}}

> **Key Information:** *The approximate length for a 1/4 wave monopole antenna cut for 28.5 MHz is 8 feet.*

That's remarkably manageable—an 8-foot vertical for 10 meters fits almost anywhere! This compact size makes verticals especially attractive on higher bands where even modest heights achieve excellent low-angle radiation for DX work.

#### Random Wire Antennas: The Compromise That Works

Life doesn't always provide perfect antenna situations. Maybe you're in an HOA-restricted neighborhood, renting, or just need something temporary. Random wire antennas—essentially any wire that isn't cut to a specific resonant length—offer a path to get on the air when conventional antennas aren't possible.

Random wires come with a unique challenge that catches many operators off guard. {{< link id="G9B01" >}} When you connect a non-resonant wire directly to your equipment, the antenna system becomes unbalanced.

> **Key Information:** *A characteristic of a random-wire HF antenna connected directly to the transmitter is that station equipment may carry significant RF current.*

<img src="../images/random-wire.svg" alt="Random Wire Antenna Setup" style="width: 350px; margin: 10px;">

This RF in the shack can cause everything from "hot" microphones to computer interference. The solution involves creating a complete antenna system: use an antenna tuner to achieve a match, add a counterpoise wire to provide a return path for RF currents, and consider an unun (unbalanced-to-unbalanced transformer) at the feed point. With these additions, a simple random wire can provide surprisingly good performance across multiple bands.

#### NVIS: Your Regional Communication Powerhouse

Sometimes DX isn't the goal. When disasters strike, during emergency nets, or for reliable statewide coverage, you need signals that blanket your region without skipping over nearby stations. Near Vertical Incidence Skywave (NVIS) turns conventional antenna wisdom upside down—literally—by sending signals straight up to rain back down across hundreds of miles.

NVIS works by deliberately creating a high-angle radiation pattern. {{< link id="G9D01" >}} Instead of fighting to get your antenna higher for DX, you optimize for regional coverage.

> **Key Information:** *A horizontal dipole antenna most effective as a Near Vertical Incidence Skywave (NVIS) antenna for short-skip communications on 40 meters during the day is one placed between 1/10 and 1/4 wavelength above the ground.*

<img src="../images/nvis-propagation.svg" alt="NVIS Propagation Pattern" style="width: 400px; margin: 10px;">

For 40 meters, this means mounting your dipole just 13-33 feet high—easily achievable heights that would horrify DXers but create perfect regional coverage. The low height causes your signal to launch nearly straight up, reflect off the ionosphere, and return in an umbrella pattern that covers everything from your QTH out to about 300 miles. Mountains, valleys, and terrain obstacles become irrelevant when your signal arrives from above. This makes NVIS invaluable for emergency communications, regional nets, and any time you need consistent coverage of your state or surrounding area.

#### Multiband Magic: One Antenna, Many Bands

Your General privileges span from 160 through 10 meters—that's a 16:1 frequency range! Building separate antennas for each band quickly becomes impractical. Fortunately, clever engineering provides several ways to make one antenna system cover multiple bands effectively.

**Trap antennas** use tuned circuits to electrically "cut" the antenna at different lengths for different bands. On 20 meters, the traps act as insulators, using only the inner portion. On 40 meters, the traps become transparent, using the full length.

**Fan dipoles** take the brute-force approach—multiple dipoles for different bands all connected to one feed point. The inactive dipoles present high impedance and don't significantly affect the active one.

**End-fed antennas with wideband transformers** naturally resonate on harmonic frequencies. A half-wave on 40 meters also works on 20, 15, and 10 meters with the same transformer.

**Open-wire fed dipoles** represent the ultimate in flexibility. Fed with ladder line and a good antenna tuner, a single dipole cut for your lowest band can work effectively on all higher bands. The low loss of ladder line means even significant SWR doesn't waste much power.

Each approach trades simplicity for flexibility. Trap antennas offer convenience but require careful construction. Fan dipoles are simple but need space. End-feds are compact but may need careful deployment to avoid RF feedback. Open-wire systems are efficient but require balanced tuners and careful routing of the ladder line.

#### Success in Small Spaces

Limited space doesn't mean limited possibilities. Some of amateur radio's most innovative antenna designs emerged from operators facing HOA restrictions, apartment living, or tiny lots. The key is understanding which compromises hurt least and which creative solutions work best.

Start with physics on your side—higher frequencies mean smaller antennas. A full-size 10-meter dipole spans just 16 feet, while that same antenna scaled for 80 meters needs 132 feet. Vertical antennas shrink the footprint further, needing ground space only for their base and radial system.

Indoor antennas surprise many operators with their effectiveness. An attic dipole escapes weather and visual concerns while working remarkably well, especially on higher bands. Magnetic loops, though requiring careful construction, offer efficient operation in minimal space. Loading coils can shrink antennas to fit available space—you trade some efficiency for the ability to get on the air.

Creative support structures abound: flag poles hide verticals, fence tops support wire antennas, and trees provide natural antenna supports that sway gracefully in the wind. The most important principle? Any antenna that gets you on the air beats the perfect antenna that never gets built. Start with what's possible, then improve over time.

#### Real-World Installation Wisdom

After helping dozens of hams get on the air, certain patterns emerge about what separates frustrating antenna projects from successful ones. These field-tested tips will save you time, money, and frustration.

**Dipole Success Secrets:**
Get it high—even 10 feet makes a difference. That 1:1 current balun at the feed point isn't just theory; it prevents your coax from radiating and causing interference. Keep wire ends away from metal—gutters, siding, and even large tree branches detune your carefully calculated lengths. Slight end droop? That's fine and often improves the match.

**Vertical Victory Tips:**
Radials are like money—you can never have too many. Even elevating your vertical a few feet reduces ground losses noticeably. Location matters more than you think; that metal shed or chain-link fence will couple to your antenna and skew everything. Water is your enemy—seal every connection like your signal depends on it (because it does).

**Universal Truths:**
Quality components pay dividends. That bargain connector will fail during the contest weekend. Build for maintenance from day one—you will need to lower that antenna eventually. Document everything: lengths, heights, SWR readings. Future you will thank present you when troubleshooting or rebuilding.

#### Your Antenna Journey Begins

The path from antenna novice to antenna expert is paved with dipoles and verticals. These fundamental antennas teach you about resonance, radiation patterns, and impedance matching while delivering real on-air results. Every antenna farm started with someone stringing their first dipole between two trees or mounting their first vertical in the backyard.

Your General privileges open doors to worldwide communication, and even a simple dipole or modest vertical can deliver those magical moments—breaking through a DX pileup, providing emergency communications when infrastructure fails, or simply enjoying a casual conversation with someone on the other side of the planet. The antennas we've explored aren't just wire and aluminum; they're your connection to the global amateur radio community.

As you experiment with different configurations, heights, and designs, you'll discover what works best for your unique situation. Some operators become dipole devotees, perfecting their wire antenna systems. Others embrace the simplicity and consistency of verticals. Many use both, choosing the best tool for each band and application. The important thing is to start somewhere and keep learning.

Next, we'll explore antennas designed for specific challenges—mobile operation where your antenna must survive highway speeds, portable setups for field operations, and creative solutions for deed-restricted properties. Each brings unique challenges and clever solutions that expand your antenna toolkit even further.
