---
chapter: "5"
section: "5.3"
questions: ["G3B09", "G3B10", "G3B01", "G3C06", "G3C07", "G3C08", "G3C09", "G3C10", "G3B02", "G3B03", "G3B04", "G3B12"]
status: complete1
---

### Section 5.3: Propagation Modes and Paths

Now that you understand the ionosphere's structure and the solar forces that control it, let's see how your signals actually navigate this dynamic system. Your signal leaves the antenna and heads skyward. Sometimes it bounces once and lands 2,000 miles away. Sometimes it scatters into unexpected places or takes paths that seem to defy logic. Understanding these propagation modes and paths helps you predict which bands will work and when contacts become possible.

#### Skip Propagation: How Signals Circle the Globe

HF signals use the ionosphere as a natural relay station, bouncing between Earth and sky to reach distant locations. Your signal travels upward, bends back toward Earth as it passes through the ionosphere, reflects from Earth's surface, and heads skyward again. Each bounce extends your reach by hundreds or thousands of miles.

The distance each hop covers depends on which ionospheric layer does the refracting. {{< link id="G3B09" >}} {{< link id="G3B10" >}}

> **Key Information:** Maximum single-hop distance:
> - F2 region: approximately *2,500 miles*
> - E region: approximately *1,200 miles*

A single F2 hop can cross a narrow part of the Atlantic. Under suitable conditions, three hops can cover up to roughly 7,500 miles; real hop lengths vary. The higher layer provides longer hops because geometry favors distance—like throwing a ball against a higher ceiling lets it travel farther before landing.

#### Short Path vs. Long Path

Every distant station offers two possible paths around our spherical Earth. Short path takes the direct route—the shortest distance between two points on the globe. From New York to Tokyo, the short great-circle route heads roughly north-northwest and covers about 6,700 miles.

Long path heads the opposite direction, the long way around the world. For that same contact, aim south-southeast from New York. The long path to Tokyo covers about 18,100 miles. This longer journey sometimes encounters better propagation conditions than the direct route.

![Stations A and B lie on one great circle around Earth. The short path follows the smaller arc between them. The long path leaves A in the opposite direction and follows the rest of that same circle to B. These are two routes to the same station, so their initial antenna headings are opposite. The curves mark routes around Earth's surface, not the height of ionospheric hops.](../../../images/s5-3-long-short-path.svg)
{.img-centered .mw-70 .img-mobile-full caption="The short and long paths between A and B follow one great circle in opposite directions. The paths show surface routes, not hop heights."}

When both paths open simultaneously, you may hear a useful clue. {{< link id="G3B01" >}}

> **Key Information:** A characteristic of skywave signals arriving by both short-path and long-path propagation is a *slightly delayed echo*.

In our example, the surface routes differ by about 11,400 miles—roughly 60 milliseconds of travel time at the speed of light. The actual ionospheric paths are somewhat longer. The later arrival can create a *distinctive hollow sound*. It is a clue to check the opposite beam heading, though other multiple paths can also cause echoes.

#### Scatter Propagation: Signals from the Impossible Zone

The skip zone should be silent—too far for ground wave, too close for normal skip. Occasionally, scatter propagation brings a weak signal into that "dead" zone. Instead of clean refraction, your signal hits ionospheric irregularities and scatters in multiple directions like light hitting a disco ball. {{< link id="G3C06" >}} {{< link id="G3C07" >}} {{< link id="G3C08" >}} {{< link id="G3C09" >}}

> **Key Information:** HF scatter propagation characteristics:
> - Creates signals with a *fluttering sound*
> - Sounds *distorted* due to energy scattered through multiple paths
> - Allows signals to be heard in the transmitting station's *skip zone*
> - Signals are usually *weak* because only a *small part* of the energy scatters into the skip zone

The multiple scattered signals arrive with slightly different timing and phase, combining at your receiver to produce the *unmistakable warbling sound* of scatter propagation. Most of your signal continues on its normal path or gets absorbed—only *a tiny fraction scatters back toward the skip zone*, explaining why these signals barely rise above the noise floor. Digital modes excel here since they can decode signals too weak for voice communication.

#### NVIS: Reliable Regional Coverage

Sometimes you need coverage across a region a few hundred miles wide, including places inside the usual skip zone. Near vertical incidence skywave (NVIS) sends signals nearly straight up so the ionosphere can bend them back toward nearby stations. {{< link id="G3C10" >}}

> **Key Information:** NVIS propagation is short distance MF or HF propagation using *high radiation angles*.

For a regional emergency net in mountainous terrain, even a low horizontal dipole can be useful. A height of 0.1 to 0.25 wavelength favors the high angles you need. Choose a frequency below the critical frequency for a vertical return, yet high enough to avoid excessive D-region absorption. By day, 40 or 60 meters can work well. As ionization falls after dark, 80 or 160 meters may work better. Try the bands on your path and ask local operators which ones work for their regional nets.

![Two rays leave the same transmitter and curve back toward Earth through the ionosphere. The steeply rising ray returns nearby; the shallower ray travels much farther before returning. This is the principle behind near vertical incidence skywave: a high-angle path can reach nearby stations that a lower-angle path skips over. Both rays assume a frequency the ionosphere can return. Angles, distances, and heights are not drawn to scale.](../../../images/s5-3-nvis.svg)
{.img-centered .mw-70 .img-mobile-full caption="Both rays assume a frequency the ionosphere can return. The diagram is not to scale."}

#### Understanding MUF and Path Selection

Choosing among these paths also means choosing a frequency. [Section 5.1]({{% pageref "5.1" %}}) introduced the Maximum Usable Frequency (MUF) for a path. How does that frequency change when you aim at a different station? {{< link id="G3B02" >}}

> **Key Information:**
> - MUF is affected by path distance and location, time of day and season, and solar radiation and ionospheric disturbances.
> - For long-distance skip propagation, the least attenuation occurs at frequencies *just below the MUF*.

Every path between two stations has its own MUF at any given moment. The path from New York to London might support 21 MHz while New York to Tokyo peaks at 14 MHz. These variations depend on ionospheric conditions along the entire path, not just at the endpoints.

Choosing the right frequency relative to the MUF determines propagation success. {{< link id="G3B03" >}} Operating *just below the MUF* reduces absorption while the ionosphere can still return the signal. That explains the exam’s least-attenuation answer. The MUF changes, though: a little more room below it may keep a link working when conditions shift. Least attenuation does not necessarily mean minimum fading or greatest reliability.

#### Monitoring Real Propagation

Modern technology gives you another way to check band conditions. {{< link id="G3B04" >}}

> **Key Information:** Current propagation can be determined by using a network of automated receiving stations on the internet to see where your transmissions are being received.

Networks like the Reverse Beacon Network and PSK Reporter show where participating receivers have heard signals. Send a CQ in a mode the network monitors, and reports may appear within seconds on the Reverse Beacon Network or within a few minutes on PSK Reporter. That is direct evidence of a working path. No report does not prove the path is closed: a receiver may be absent, busy or unable to decode your signal.

#### Seasonal Propagation Patterns

Finding an open path is only part of the job; your signal also has to compete with noise. Summer brings particular challenges to HF operation. {{< link id="G3B12" >}}

> **Key Information:** Lower HF frequencies typically experience high levels of atmospheric noise or static during *summer*.

Thunderstorms across the tropics and temperate regions generate radio noise that plagues 160, 80, and 40 meters from late spring through early fall. Each lightning strike acts as a broadband transmitter, raising noise levels that can bury weak signals. The lower the frequency, the worse the noise. Operators often call this static QRN and interference from other signals QRM; the distinction is noise versus interfering signals, not simply natural versus man-made. Filters and noise controls can help, but they cannot always separate noise from a wanted signal in the same passband.

Winter often brings less local thunderstorm noise, though you can still hear distant storms. The longer winter nights favor low-band propagation. Spring and fall can also offer useful DX openings; seasonal ionospheric changes and the daylight along each path matter.

#### From Propagation Science to Practical Operation

Band choice and timing are only part of getting on the air. The next part turns to the station you operate, starting with safety before moving into equipment setup and operating procedures.
