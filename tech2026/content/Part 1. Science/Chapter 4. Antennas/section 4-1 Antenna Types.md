---
chapter: "4"
section: "4.1"
questions: [ "T9A11", "T9A05", "T9A01", "T9A06", "T9A10", "T9A08", "T9A09", "T9A02", "T9A04", "T9B04" ]
status: complete
---

### Section 4.1: Antenna Types

Imagine you're at a party, trying to talk to a friend across a noisy room. You might cup your hands around your mouth to direct your voice, or turn your ear toward your friend to hear better. The best antennas work similarly — they help direct radio energy where you want it to go and pick up signals you want to hear.

There are many different types of antennas, each with its own advantages and disadvantages. Some take more or less space, some are directional, some have more gain. The trick is to find the antenna that works best for your situation — and most hams end up with several different antennas for various purposes.

> **Let's Define a Term**: In this book we will occasionally use the term "antenna system." The antenna system includes everything connected to the antenna port on your transceiver: the feed line, any tuner or matching network, and the antenna itself. This is a useful distinction — concepts like SWR and impedance matching apply to the system as a whole, not just the antenna.

#### Essential Antenna Concepts

**We are going to cover a lot of information in this section which you don't strictly need to know to pass your license exam** — some readers may choose to skim and focus on the questions, then come back later when the information feels more relevant, and that's okay!

A few ideas apply to almost every antenna you'll encounter, so it's worth getting them straight up front.

##### Antenna Gain

> **Key Information:** *Antenna gain* is the *increase in signal strength in a specified direction compared to a reference antenna*. {{< link id="T9A11" >}}

Think of antenna gain like changing from a regular light bulb to a spotlight — you get a brighter beam in one direction, but less light in others. The key idea is that gain is *redistribution*, not free energy: an antenna with gain focuses the signal you already have into a narrower area rather than creating more signal. That shows up in both directional antennas (beams) and in some verticals designed to push signal toward the horizon.

Gain is typically measured in:
- dBi (decibels relative to an isotropic radiator)
- dBd (decibels relative to a dipole)

An isotropic radiator is a theoretical "perfect" antenna that radiates equally in all directions, used as a reference point for comparing real antennas. The "i" in "dBi" refers to this isotropic radiator. dBd uses a half-wave dipole as the reference instead. The dipole itself has some gain over an isotropic radiator (about 2.15 dB), so a figure in dBi will always be a little higher than the same antenna's gain expressed in dBd.

##### Antenna Length and Frequency

> **Key Information:** *Shortening* a dipole antenna *increases its resonant frequency*. {{< link id="T9A05" >}}

The length of an antenna is tied to its resonant frequency — the frequency at which it operates most efficiently. Longer antennas resonate at lower frequencies; shorter antennas resonate at higher frequencies. Here's a handy formula for a half-wavelength dipole:

$\text{Length (in feet)} ≈ \frac{468}{\text{frequency (in MHz)}}$

or

$\text{Length (in inches)} ≈ \frac{5600}{\text{frequency (in MHz)}}$

Below are common lengths for different bands. You can learn the equation or just memorize the number, whichever is easiest for you.

| Band  | Frequency | Half-wave length | Quarter-wave length |
|:-----:|:---------:|:----------------:|:-------------------:|
| 10m   | 28 MHz    | 200 inches       | 100 inches          |
| 6m    | 50 MHz    | 112 inches       | 56 inches           |
| 2m    | 146 MHz   | 38 inches        | 19 inches           |
| 1.25m | 222 MHz   | 25 inches        | 12.5 inches         |
| 70cm  | 440 MHz   | 13 inches        | 6.5 inches          |

#### Common Antenna Types

1. **Beam Antennas**

   > **Key Information:** A *beam antenna* is *an antenna that concentrates signals in one direction*. {{< link id="T9A01" >}} Of the common antenna types, the *Yagi* antenna *offers the greatest gain*. {{< link id="T9A06" >}}

   Picture a beam antenna as a flashlight reflector focusing light. The Yagi uses multiple elements — a driven element plus parasitic directors and a reflector — to achieve high gain and directivity. Like all gain, this is a redistribution of signal: you get a stronger signal in the direction the beam is pointed, but much weaker signal elsewhere.

2. **Dipoles**

   > **Key Information:** A half-wave dipole antenna radiates the strongest signal *broadside to the antenna*. {{< link id="T9A10" >}}

   The dipole is the most basic and fundamental antenna type — just two conductors of equal length, fed at the center. Most other antennas are really just clever variations on this basic design. A half-wavelength dipole can be oriented in any direction, and its signal is always strongest *broadside (perpendicular) to the wire*. Understanding dipoles helps you understand how almost every other antenna works.

3. **Monopoles and Quarter-wave Verticals**

   > **Key Information:** A *19-inch vertical antenna* is often used on 2 meters because *it is a resonant quarter-wave* at that frequency. {{< link id="T9A08" >}}

   A monopole is essentially half of a dipole that uses a ground plane (like your car body, the body of your handheld radio, or the Earth itself) as the other half. Most handheld and mobile antennas are monopoles — they're simpler to build and mount than full dipoles while retaining similar radiation characteristics. The most common example of a monopole is the quarter-wave vertical: a dipole standing on end, sized so it's one-quarter of a wavelength at the target frequency. For 2 meters (146 MHz), the math works out to approximately 19 inches.

   One important thing to remember with monopoles is that since the other half of the antenna is made up of what we might call environmental factors, it can end up including a lot of things not really intended to be part of an antenna — such as your arm itself when using an HT! That isn't dangerous or anything, but it does impact the performance of the antenna.

4. **5/8 Wave Verticals**

   > **Key Information:** A 5/8-wavelength whip antenna has *more gain* than a 1/4-wave antenna. {{< link id="T9A09" >}}

   A 5/8-wave whip concentrates more signal toward the horizon instead of up into the sky, which is why they're popular for VHF and UHF mobile operations on flat terrain. Just like with a beam antenna, this "gain" is a redistribution of the signal. In hilly areas or canyons where your repeater might be above you, a 1/4-wave antenna can actually work better because it radiates more signal upward.

5. **J-poles**

   Shaped like the letter J, these are essentially half-wave antennas fed at one end. They're popular for VHF and UHF because they're easy to build and don't require a ground plane. There are some variations as well, such as the Open-Stub j-pole which are shaped a bit differently but work on the same principle.

#### Making Antennas Work in Limited Space

Sometimes we need to modify antennas to make them work better or fit in a smaller space:

1. **Antenna Loading**

   > **Key Information:** Antenna loading means *electrically lengthening by inserting inductors in radiating elements*. {{< link id="T9A02" >}}

   When space is tight, we can make an antenna electrically longer than it is physically by adding inductance — usually with a coil somewhere in the radiating element. That's how a 19-inch mobile whip can work on HF bands where a full-size antenna would be many feet long. Loading lets us use shorter antennas when necessary, though it isn't as efficient as a full-size antenna.

2. **Portable Antennas**

   > **Key Information:** A handheld radio's short flexible antenna has *low efficiency* compared to a full-sized quarter-wave antenna. {{< link id="T9A04" >}}

   The small, flexible antennas that come with handheld radios are convenient, but their compact size comes at a cost: less of your power actually gets converted into radio waves. That's why an external antenna — even a simple mag-mount whip — often dramatically improves range from a handheld.

3. **Antenna Tuners**

   > **Key Information:** An antenna tuner's main job is to *match the antenna system impedance to the transceiver's output impedance*. {{< link id="T9B04" >}}

   A tuner is like a gearshift, adjusting the connection so your transmitter and antenna work together as efficiently as possible. It's important to understand that a tuner doesn't actually "tune" the antenna — it just matches impedances so the transmitter sees a load it's happy with. It doesn't improve an antenna's radiation efficiency.

#### Antennas Requiring Tuners

Some antennas are designed to work across a wide range of frequencies but aren't naturally resonant at any of them:

1. **Random Wire Antennas**

   Just what they sound like — a wire of random length used as an antenna. They can be effective, especially for portable operations, but almost always require a tuner.

2. **Multi-band Dipoles**

   These dipoles are designed to work on multiple bands but are often not perfectly resonant on all of them. A tuner can help match the impedance on the non-resonant bands.

3. **Magnetic Loop Antennas**

   These compact antennas are great for restricted spaces but have a very narrow bandwidth. They require a special tuning circuit (usually a variable capacitor) which is adjusted each time you change frequency.

---

The "best" antenna depends entirely on your situation and goals. Sometimes a simple antenna that you can actually install is better than a theoretically perfect antenna that won't fit in your space. Don't be afraid to experiment — your antenna farm can grow with your experience.

Of course, the best antenna in the world won't help you much if you don't set it up and connect it correctly, so now we're going to discuss polarization, feed lines, and connectors.
