---
chapter: "5"
section: "5.3"
questions: ["G3B09", "G3B10", "G3B01", "G3C06", "G3C07", "G3C08", "G3C09", "G3C10", "G3B02", "G3B03", "G3B04", "G3B12"]
status: draft1
---

### Section 5.3: Propagation Modes and Paths

Now that you understand the ionosphere's structure and the solar forces that control it, let's see how your signals actually navigate this dynamic system. Your signal leaves the antenna and heads skyward. Sometimes it bounces once and lands 2,000 miles away. Sometimes it scatters into unexpected places or takes paths that seem to defy logic. Understanding these propagation modes and paths helps you predict which bands will work and when contacts become possible. Each mode has its own characteristics and requirements that determine your communication success.

#### Skip Propagation: How Signals Circle the Globe

HF signals use the ionosphere as a natural relay station, bouncing between Earth and sky to reach distant locations. Your signal travels upward, refracts off an ionospheric layer, returns to Earth, reflects from the surface, and heads skyward again. Each bounce extends your reach by hundreds or thousands of miles.

The distance each hop covers depends on which ionospheric layer does the refracting. {{< link id="G3B09" >}} {{< link id="G3B10" >}}

> **Key Information:** Maximum single-hop distance:
> - F2 region: approximately *2,500 miles*
> - E region: approximately *1,200 miles*

A single F2 hop can span the Atlantic Ocean. String three hops together and you're communicating 7,500 miles away. The higher layer provides longer hops because geometry favors distance—like throwing a ball against a higher ceiling lets it travel farther before landing.

#### Short Path vs. Long Path

Every distant station offers two possible paths around our spherical Earth. Short path takes the direct route—the shortest distance between two points on the globe. From New York to Japan, you'd aim northwest across Alaska, roughly 7,000 miles.

Long path goes the opposite direction completely around the world. That same New York to Japan contact would point southeast toward Africa, traveling about 15,000 miles. This longer journey sometimes encounters better propagation conditions than the direct route.

When both paths open simultaneously, physics provides an unmistakable indicator. {{< link id="G3B01" >}}

> **Key Information:** A characteristic of skywave signals arriving by both short-path and long-path propagation is a *slightly delayed echo*.

The echo results from the 8,000-mile difference in path lengths. The long-path signal arrives milliseconds after the short-path signal, creating a distinctive hollow sound. This echo confirms your signal has successfully traveled around the world in both directions.

#### Scatter Propagation: Signals from the Impossible Zone

The skip zone should be silent—too far for ground wave, too close for normal skip. Yet sometimes weak signals appear from this "dead" zone through scatter propagation. Instead of clean refraction, your signal hits ionospheric irregularities and scatters in multiple directions like light hitting a disco ball. {{< link id="G3C06" >}} {{< link id="G3C07" >}} {{< link id="G3C08" >}} {{< link id="G3C09" >}}

> **Key Information:** HF scatter propagation characteristics:
> - Creates signals with a *fluttering sound*
> - Sounds *distorted* due to energy scattered through multiple paths
> - Allows signals to be heard in the transmitting station's *skip zone*
> - Signals are usually *weak* because only a *small part* of the energy scatters into the skip zone

The multiple scattered signals arrive with slightly different timing and phase, combining at your receiver to produce the unmistakable warbling sound of scatter propagation. Most of your signal continues on its normal path or gets absorbed—only a tiny fraction scatters back toward the skip zone, explaining why these signals barely rise above the noise floor. Digital modes excel here since they can decode signals too weak for voice communication.

#### NVIS: Reliable Regional Coverage

Sometimes you need solid coverage of a 200-300 mile area without skip zones or dead spots. Near Vertical Incidence Skywave propagation fills this need by launching signals nearly straight up. {{< link id="G3C10" >}}

> **Key Information:** NVIS propagation is short distance MF or HF propagation using *high radiation angles*.

Instead of using low angles for distance, NVIS uses high angles for area coverage. The ionosphere acts like an umbrella, reflecting your nearly vertical signal back down in a circular pattern around your station. This creates consistent coverage from 0 to 300 miles with no skip zone.

NVIS requires specific antenna configuration and frequency selection. Low horizontal antennas (0.1 to 0.25 wavelengths high) produce the high-angle radiation needed. Ground reflection reinforces upward radiation while canceling low-angle signals. Frequency must be below the critical frequency for vertical reflection but high enough to avoid excessive D-region absorption. During daylight, 40 and 60 meters work well. After dark, 80 and 160 meters become optimal as the MUF drops.

Emergency services rely on NVIS because it provides dependable regional coverage when infrastructure fails. The mode excels for disaster communications, nets covering mountainous terrain, and any application requiring solid coverage within a few hundred miles.

#### Understanding MUF and Path Selection

The MUF (Maximum Usable Frequency) concept from Section 5.1 becomes more complex in practice—it's not a single number but varies constantly based on multiple factors. {{< link id="G3B02" >}}

> **Key Information:** MUF is affected by path distance and location, time of day and season, and solar radiation and ionospheric disturbances.

Every path between two stations has its own MUF at any given moment. The path from New York to London might support 21 MHz while New York to Tokyo peaks at 14 MHz. These variations depend on ionospheric conditions along the entire path, not just at the endpoints.

Choosing the right frequency relative to the MUF determines propagation success. {{< link id="G3B03" >}}

> **Key Information:** For long-distance skip propagation, the least attenuation occurs at frequencies *just below the MUF*.

Operating just below the MUF provides optimal propagation. The frequency is high enough to minimize D-region absorption but low enough for reliable ionospheric refraction. This sweet spot delivers maximum signal strength with minimum fading.

#### Monitoring Real Propagation

Modern technology eliminates guesswork about band conditions. {{< link id="G3B04" >}}

> **Key Information:** Current propagation can be determined by using a network of automated receiving stations on the internet to see where your transmissions are being received.

Networks like the Reverse Beacon Network and PSK Reporter show exactly where signals propagate in real-time. Transmit a CQ or beacon signal, and within seconds you'll see reports from automated receivers worldwide. This actual propagation data proves more valuable than any prediction.

#### Seasonal Propagation Patterns

Summer brings particular challenges to HF operation. {{< link id="G3B12" >}}

> **Key Information:** Lower HF frequencies typically experience high levels of atmospheric noise or static during *summer*.

Thunderstorms across the tropics and temperate regions generate radio noise that plagues 160, 80, and 40 meters from late spring through early fall. Each lightning strike acts as a broadband transmitter, raising noise levels that can bury weak signals. The lower the frequency, the worse the noise. This atmospheric QRN (natural noise) differs from man-made QRM (interference) and can't be filtered out.

Winter provides the opposite conditions. Minimal thunderstorm activity means low atmospheric noise on all bands. The longer darkness hours favor low-band propagation. Spring and fall equinoxes often bring enhanced propagation as Earth's tilt creates balanced day/night conditions worldwide.

#### From Propagation Science to Practical Operation

You now understand how signals travel via multiple hops to circle the globe, why scatter creates weak signals in the skip zone, and how NVIS provides regional coverage. You know that operating just below the MUF minimizes losses and that summer static affects lower frequencies most.

These propagation modes aren't just curiosities—they're tools that enable communication when conventional paths fail. Long path works when short path doesn't. Scatter fills skip zones. NVIS covers disaster areas. Each mode serves specific communication needs.

You now have the complete propagation picture—from ionospheric layers through solar control to signal paths. Part 2 will show you how to apply this propagation knowledge in actual operation. You'll learn when to check for long path openings, how to set up antennas for different propagation modes, and which operating techniques work best for marginal conditions. The science you've mastered provides the foundation for making contacts others miss.
