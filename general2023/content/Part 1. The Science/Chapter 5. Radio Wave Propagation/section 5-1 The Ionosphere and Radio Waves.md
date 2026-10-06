---
chapter: "5"
section: "5.1"
questions: ["G3C01", "G3C11", "G3C05", "G3C03", "G3C04", "G3C02", "G3B08", "G3B07", "G3B06", "G3B11", "G3B05"]
status: draft1
---

### Section 5.1: The Ionosphere and Radio Waves

Your antenna launches a signal skyward. Less than a second later, someone on the other side of the planet hears it. Understanding how the ionosphere works is the key to knowing when and why different bands open and close.

As a Technician, you learned that the ionosphere can bend radio waves back to Earth. Now we'll explore exactly how this happens and why it varies throughout the day.

#### How the Ionosphere Works

While we often say radio waves "bounce" off the ionosphere, they actually refract or bend gradually. The sun's ultraviolet radiation and X-rays strip electrons from atoms in the upper atmosphere, creating layers of charged particles from about 30 miles to over 350 miles up. When your radio signal enters these charged layers at the right frequency and angle, it curves back toward Earth, landing thousands of miles away.

#### The Ionosphere's Multiple Personalities

The ionosphere isn't one uniform blanket—think of it more like a layer cake where each layer has different properties and affects your signals differently. {{< link id="G3C01" >}}

> **Key Information:** The D region is the ionospheric region closest to the surface of Earth.

![Moving upward from Earth's surface, the daytime regions are D, E, F one, and F two. D is lowest, and F two is highest. At night the D region becomes much weaker, the E region weakens, and a single F region remains instead of separate F one and F two regions. The blocks show their order, not exact heights, thicknesses, or sharp boundaries.](../../../images/s5-1-ionosphere.svg)
{.img-centered}

##### D Region: The Daytime Signal Absorber

Located 30-55 miles up, the D region becomes much more strongly ionized in daylight and weakens greatly after dark. Think of it as a wet blanket that the sun throws over your lower-frequency signals during the day. {{< link id="G3C11" >}} {{< link id="G3C05" >}}

> **Key Information:** 
> - The D region is the *most absorbent of signals below 10 MHz* during daylight hours
> - Long-distance communication on the *40-, 60-, 80-, and 160-meter bands* is more difficult during the day because the D region absorbs these lower-frequency signals

Here's what happens: Your 80-meter signal that worked great for reaching distant stations at sunrise gets absorbed by the D region before it can reach the higher, reflective layers. When darkness falls and D-region ionization drops, those same bands suddenly come alive with signals from around the world. This daily transformation is why experienced operators schedule their low-band operations around sunrise and sunset—they're working with nature, not against it.

The absorption comes from collisions: the wave gives energy to electrons, which collide with air molecules and turn some of that energy into heat. Air is denser this low in the atmosphere, so collisions are much more frequent than in the higher regions.

##### E Region: The Middle Layer

Rising about 50 to 90 miles above Earth, the E region forms from moderate solar ionization during daylight hours. Like the greatly weakened D region at night, the E region maintains some weak ionization after dark.

The E region has more free electrons than the D region, but its thinner air means fewer collisions. It can therefore bend some signals back without the heavy absorption that plagues the D region. An E-region path still passes through the D region, so it does not bypass daytime absorption. Under suitable conditions it can return signals over shorter skywave paths than the higher F region.

During summer months, patches of unusually dense ionization called "Sporadic E" can open surprising paths. Atmospheric winds can concentrate long-lived metallic ions into thin sheets capable of returning even VHF signals that would normally escape to space.

##### F Region: Your Gateway to the World

The F region is where DX happens. Located around 90 to 300 miles up, it splits into F1 and F2 layers during daylight, merging into a single layer at night. {{< link id="G3C03" >}}

> **Key Information:** Skip propagation via the F2 region is longer than that via the other ionospheric regions because it is the highest.

The F2 region's height allows a single hop of up to roughly *2,500 miles* under suitable conditions. Several hops can carry a signal across an ocean, as we'll see later in this chapter.

#### The Physics of Skip: Angles and Frequencies

Making contacts via the ionosphere requires understanding two critical concepts that control whether your signal returns to Earth or escapes to space.

##### Critical Angle: Creating the Skip Zone

{{< link id="G3C04" >}}

> **Key Information:** The critical angle is the highest takeoff angle that will return a radio wave to Earth under specific ionospheric conditions.

For the frequency and conditions being considered, rays below the critical angle can return while steeper rays pass through. This can create a "skip zone" between useful ground-wave coverage (signals following Earth's surface) and the first ordinary skywave return. For a hypothetical example, you might be heard 50 miles away by ground wave and 500 miles away by skywave, while stations at 200 miles hear nothing. It is not a fixed ring: direction, frequency and other propagation paths can change it.

Understanding critical angle helps you choose antennas for your target areas. Low dipoles have high takeoff angles (good for closer skip), while an antenna with a useful low-angle lobe can favor DX. Height and surroundings matter as well as antenna type.

##### Critical Frequency: When Waves Escape

Here's a thought experiment: Imagine sending a ray straight up (90 degrees above the horizon) while gradually increasing frequency. At some point, your signal stops reflecting back and escapes to space. {{< link id="G3C02" >}}

> **Key Information:** The critical frequency at a given incidence angle is the highest frequency that is refracted back to Earth.

The exam specifies a given angle. An **ionosonde** is a radar that probes the ionosphere by sending signals straight up. The critical frequency in its report normally means **vertical incidence**; slanting paths may return at higher frequencies than that vertical value.

This critical frequency constantly changes based on ionospheric conditions. Think of it like the ionosphere's "strength" at any given moment. During high solar activity, the critical frequency might reach 12 MHz or higher. During solar minimum, it could drop to 5 MHz or lower. Real-time ionosonde data shows current critical frequencies, helping you choose bands that will work rather than letting your signals escape to space.

#### Maximum and Lowest Usable Frequencies: Your Operating Window

Every path between you and another station has a sweet spot—a range of frequencies that will actually complete the journey. Maximum Usable Frequency (MUF) sets the upper edge of that window, and Lowest Usable Frequency (LUF) sets the lower edge.

##### Maximum Usable Frequency: The Ceiling

The MUF sets your upper boundary—go higher, and your signal escapes to space. {{< link id="G3B08" >}}

> **Key Information:** MUF stands for the Maximum Usable Frequency for communications between two points.

Think of MUF as a ceiling that changes height throughout the day. Morning might find 20 meters dead to Europe (your frequency is above the MUF), but by afternoon, the MUF rises and suddenly European stations boom in. The MUF depends on:
- Current ionospheric conditions
- The distance of your path
- Time of day
- Solar activity

##### Lowest Usable Frequency: The Absorption Floor

While MUF sets the ceiling, LUF sets the floor below which your signals get absorbed. {{< link id="G3B07" >}} {{< link id="G3B06" >}} {{< link id="G3B11" >}}

> **Key Information:** 
> - LUF stands for the *Lowest Usable Frequency* for communications between two specific points
> - Radio waves with frequencies *below the LUF are attenuated (weakened)* before reaching the destination
> - When the LUF exceeds the MUF, propagation via *ordinary skywave communications is not possible* over that path

The D region is the main culprit here. During daylight, it absorbs low-frequency signals before they can reach the reflective F layers. At night, as D-region absorption weakens, the LUF often drops. Noise, transmitter power, antennas and the required signal quality also affect it. This is why 80 meters works poorly for DX at noon but comes alive after sunset—the absorption floor has dropped.

Sometimes the ionosphere just won't cooperate. Think of it like this: if the floor rises above the ceiling, there's no room to operate! This happens during severe ionospheric disturbances or at transition times between day and night. When LUF rises above MUF, no frequency will complete the path. Time to try a different direction or propagation method, or grab a cup of coffee and wait for conditions to improve. Merely changing bands cannot restore ordinary skywave on that same path while no usable interval exists.

#### Working Within Nature's Window

> **Key Information:** {{< link id="G3B05" >}} The ionosphere refracts radio waves with frequencies below the MUF and above the LUF back to Earth.

This creates a "window" of usable frequencies that shifts throughout the day.

![Frequency increases upward in this comparison. For one radio path, the lowest usable frequency, or LUF, lies below the maximum usable frequency, or MUF. Frequencies between the two limits form a usable skywave range. In the second case, LUF is higher than MUF. No frequency can then be both above LUF and below MUF, so ordinary skywave has no usable interval on that path.](../../../images/s5-1-frequency-window.svg)
{.img-centered}

Lower bands (160m, 80m, 40m) suffer from D-region absorption during daylight but excel at night. Middle bands (30m, 20m, 17m) often offer useful openings with less absorption, but their day/night availability depends on the path and ionization. Upper bands (15m, 12m, 10m) depend heavily on solar activity—less reliable during solar minimum, with more frequent openings during solar maximum.

Next, we'll explore how the sun creates and controls these layers. Solar radiation forms the ionosphere, and solar disturbances can dramatically enhance or destroy propagation conditions.
