---
chapter: "4"
section: "4.1"
questions: [ "T9A11", "T9A05", "T9A01", "T9A06", "T9A10", "T9A08", "T9A12", "T9A09", "T9A02", "T9A04", "T9B04" ]
---

### Section 4.1: Antenna Types

Imagine you're at a party, trying to talk to a friend across a noisy room. You might cup your hands around your mouth to direct your voice, or turn your ear towards your friend to hear better. Antennas work similarly - they help direct radio energy where you want it to go and pick up signals you want to hear.

There are many different types of antennas, each with its own advantages and disadvantages. Some take more space, some are directional, some have more gain. The trick is to find the antenna that works best for your situation – and most hams end up with several different antennas for various purposes.

> **Let's Define a Term**: You may have come across the term "Antenna system" – the Antenna System includes everything that is used by the transceiver as part of the antenna, such as the feed line and the antenna itself.

#### Essential Antenna Concepts

**We are going to cover a lot of information in this section which you don't strictly need to know to pass your license exam** – some readers may choose to skim and focus on the questions, then come back later when the information feels more relevant, and that's okay!

> **Key Information:** 
> - *Antenna gain* is the *increase in signal strength in a specified direction compared to a reference antenna* {{< link id="T9A11" >}}
> - *Shortening an antenna increases its resonant frequency* {{< link id="T9A05" >}}

When we talk about antenna gain, think of it like changing from a regular light bulb to a spotlight - you get a brighter beam in one direction, but less light in others. Gain is typically measured in:
- dBi (decibels relative to an isotropic radiator)
- dBd (decibels relative to a dipole)

> An isotropic radiator is a theoretical "perfect" antenna that radiates equally in all directions, used as a reference point for comparing real antennas. The "i" in "dBi" refers to this isotropic radiator.

#### Common Antenna Types

1. **Beam Antennas**
  
   **Key Information:** A *beam antenna* is *an antenna that concentrates signals in one direction* {{< link id="T9A01" >}}. Picture it as a flashlight reflector focusing light. The *Yagi antenna offers the greatest gain* {{< link id="T9A06" >}} of common antenna types, using multiple elements to achieve high gain and directivity.  

   It's important to remember that *gain* is just a redistribution of the signal—like a mirror or a lens that directs the signal toward your antenna. You get a stronger signal at that focal point, but anything outside that focus becomes much weaker.

2. **Dipoles**
   
   **Key Information:** A half-wave dipole radiates the strongest signal broadside to the antenna. {{< link id="T9A10" >}}

   The dipole is the most basic and fundamental antenna type - just two conductors of equal length, fed at the center. Most other antennas are really just clever variations on this basic design. A *half-wavelength dipole antenna* can be oriented in any direction, and its signal is always *strongest broadside (perpendicular) to the wire*. Understanding dipoles helps you understand how almost every other antenna works.

3. **Monopoles**
   A monopole is essentially half of a dipole that uses a ground plane (like your car body, handheld radio case, or the Earth itself) as the other half. Most handheld and mobile antennas are monopoles - they're simpler to build and mount than full dipoles while retaining similar radiation characteristics. When you see a quarter-wave vertical antenna on an HT or car, you're looking at a monopole.

3. **Quarter-wave Verticals**
   For the 2-meter band (146 MHz), a quarter-wave vertical is *approximately 19 inches long* {{< link id="T9A08" >}}. These are like dipoles standing on end, with the ground (or your car, or your handheld radio) acting as the other half.

4. **5/8 Wave Verticals**

   **Key Information:** A 5/8 wavelength whip antenna has *more gain than a 1/4-wavelength antenna {{< link id="T9A12" >}} by concentrating more signal toward the horizon instead of up into the sky.
   
   While this makes them popular for VHF and UHF mobile operations on flat terrain, it's important to understand that just like with a beam antenna this "gain" is just a redistribution of the signal. In hilly areas or canyons where your repeater might be above you, a 1/4-wave antenna can actually work better because it radiates more signal upward.

5. **J-poles**
   Shaped like the letter J, these are essentially half-wave antennas fed at one end. They're popular for VHF and UHF because they're easy to build and don't require a ground plane.

6. **Loop Antennas**
   These come in various shapes and sizes and are great for small spaces like attics or balconies.

#### Antenna Length and Frequency

The length of an antenna is related to its resonant frequency. The longer the antenna, the lower the resonant frequency. Here's a handy formula for dipole length:

$\text{Length (in feet)} ≈ \frac{468}{\text{frequency (in MHz)}}$

or

$\text{Length (in inches)} ≈ \frac{5600}{\text{frequency (in MHz)}}$

Below are common lengths for different bands. Some of these are answers to test questions! You can learn the equation or just memorize the number, whichever is easiest for you.

| Band  | Frequency | Half-wave length | Quarter-wave length |
|:-----:|:---------:|:----------------:|:-------------------:|
| 10m   | 28 MHz    | 200 inches       | 100 inches          |
| 6m    | 50 MHz    | **112 inches** {{< link id="T9A09" >}}  | 56 inches          |
| 2m    | 146 MHz   | 38 inches        | **19 inches**       |
| 1.25m | 222 MHz   | 25 inches        | 12.5 inches         |
| 70cm  | 440 MHz   | 13 inches        | 6.5 inches          |

#### Making Antennas Work in Limited Space

Sometimes we need to modify antennas to make them work better or fit in a smaller space:

1. **Antenna Loading**

   **Key Information:** When space is tight, we can make an antenna electrically longer by *inserting inductors in the radiating elements* {{< link id="T9A02" >}}. This is called loading. While not as efficient as a full-size antenna, it lets us use shorter antennas when necessary.

2. **Portable Antennas**
   **Key Information:** The small, flexible antennas that come with handheld radios are convenient but have a significant drawback: they have *low efficiency compared to a full-sized quarter-wave antenna* {{< link id="T9A04" >}}. This means less of your power actually gets converted into radio waves.

3. **Antenna Tuners**
   **Key Information:** An antenna tuner's main job is to *match the antenna system impedance to the transceiver's output impedance* {{< link id="T9B04" >}}. It’s like a gearshift, adjusting the connection so your transmitter and antenna work together as efficiently as possible.  

#### Antennas Requiring Tuners

Some antennas are designed to work across a wide range of frequencies but aren't naturally resonant at any of them:

1. **Random Wire Antennas**
Just what they sound like - a wire of random length used as an antenna. They can be effective, especially for portable operations, but almost always require a tuner.

2. **Multi-band Dipoles**
These dipoles are designed to work on multiple bands but are often not perfectly resonant on all of them. A tuner can help match the impedance on the non-resonant bands.

3. **Magnetic Loop Antennas**
These compact antennas are great for restricted spaces but have a very narrow bandwidth. They require careful tuning each time you change frequency.

Remember that a tuner doesn't actually "tune" the antenna - it just matches impedances. It doesn't improve an antenna's radiation efficiency.

#### Practical Considerations

When choosing an antenna, consider:
1. Available space
2. Installation requirements
3. Direction you want to communicate
4. Bands you want to use

For example, a beam antenna might give you the most gain, but it needs to be rotated to point in different directions and requires more installation work than a simple vertical antenna.

The "best" antenna depends entirely on your situation and goals. Sometimes a simple antenna that you can actually install is better than a theoretically perfect antenna that won't fit in your space. Don't be afraid to experiment - your antenna farm can grow with your experience. The most important thing is to get on the air and join the conversation!
