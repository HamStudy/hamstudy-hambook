---
questions: [ "T8A01", "T8A06", "T8A02", "T8A03", "T8A04", "T8A05", "T8A07", "T8A08", "T8A09", "T8A10", "T8A11" ]
---

### Section 3.6: Modulation Modes and Bandwidth

Imagine you're at a busy train station. Trains of all shapes and sizes are carrying different types of cargo. In the world of radio, our "trains" are carrier waves, and the "cargo" is the information we want to send. The way we load this information onto our carrier wave is called modulation.

#### Amplitude Modulation (AM)

> **Key Information:** *Single Sideband (SSB) is a form of amplitude modulation.*

Imagine you're trying to communicate with a friend using a special lightbulb. In Amplitude Modulation (AM), you're changing the brightness of the bulb to send your message. A bright light means one thing, a dim light means another. The intensity of the light represents your signal - just like the height (amplitude) of a radio wave changes to carry information.

While AM isn't the most common mode in amateur radio, you'll still encounter it in broadcast radio and some specialized communications. Most analog television signals, including Amateur Television (ATV), use AM.

#### Frequency Modulation (FM) and Phase Modulation (PM)

> **Key Information:**
> - *FM/PM are commonly used for VHF packet radio transmissions*
> - *FM/PM are the primary modes for VHF and UHF voice repeaters*

Now imagine a different signaling method. Instead of changing brightness, you're changing the color of the lightbulb. A blue light might mean one thing, a green light another, with the colors shifting rapidly to convey your message. This is how Frequency Modulation (FM) works - the frequency of the wave changes to carry information. The light stays at a constant brightness, but the color shifts to communicate.

Phase Modulation (PM) is similar, but instead of shifting the actual color dramatically, think of it like delaying or advancing the timing of the color change. Imagine that instead of switching instantly between blue and green, there’s a slight hesitation or an early jump between colors. The overall colors stay the same, but the timing of when the change occurs is slightly altered. If that doesn't make a lot of sense to you – don't worry, you don't really need to understand it, just remember that FM and PM are functionally almost the same and we usually just refer to them both as "FM".

> **Key Information:** A *typical VHF repeater FM voice signal has a bandwidth between 10 and 15 kHz*.

#### Single Sideband (SSB)

Now, let's talk about SSB, which is where amplitude modulation gets a cool upgrade. *SSB is the preferred mode for long-distance (weak signal) contacts on the VHF and UHF bands.* 

> **Key Information:**
> - *Compared to FM, SSB signals have a narrower bandwidth*
> - *Upper Sideband (USB)* is *normally used for 10-meter HF, VHF, and UHF single-sideband communications*
> - A *typical single sideband voice signal has an approximate bandwidth of 3 kHz*

Continuing our lightbulb analogy, SSB is like finding a way to communicate using just a small part of the color spectrum, removing unnecessary information. We've stripped away the "white light" (carrier) and one set of colors (sideband), leaving a more efficient signal. The result? A more focused way of sending your message. It's still amplitude modulation, but now using only half as much bandwidth.

There are two flavors of SSB:
- **Upper Sideband (USB)**: Generally used on frequencies above 10 MHz. This includes the 30, 20, 17, 15, 12, and 10 meter bands.
- **Lower Sideband (LSB)**: Used below 10 MHz, covering the 160, 80, and 40 meter bands.

#### Bandwidth Comparison

Radio signals are like different-sized trains, each taking up a different amount of track space in the radio spectrum:

> **Key Information:** Approximate bandwidths:
> - *CW (Morse Code)*: *Narrowest bandwidth, about 150 Hz*
> - *SSB voice*: About 3 kHz
> - *FM voice*: About 10-15 kHz
> - *AM fast-scan television*: About 6 MHz

#### Bandwidth and Frequency Range

One fascinating aspect of amateur radio is how available bandwidth influences our choice of modulation. Think of radio bands like different-sized highways:

- **Narrow Highways (Limited Bandwidth)**: Modes like CW (Morse code) work brilliantly because they use an incredibly narrow slice of spectrum. When you have limited space, you want an efficient, skinny vehicle.

- **Wider Highways (More Bandwidth)**: Bands with more available frequencies can support "wider" modes. For example:
  - The 10-meter band has enough room for both narrow CW and wider SSB
  - VHF/UHF repeater bands can handle FM voice, which needs more bandwidth
  - Fast-scan television requires massive bandwidth (about 6 MHz!)

As frequency ranges get wider, you can use more bandwidth-intensive modes. A 2-meter band contact might use narrow FM, while the broader 10-meter band allows for wider SSB and even digital modes. This flexibility is part of what makes amateur radio so dynamic and exciting.

#### Final Thoughts

In ham radio, there's always something new to learn. Each mode has its own quirks and charms. As you gain experience, you'll develop preferences and understand when to use each type of modulation. The joy of amateur radio is in the exploration!

Don't be afraid to listen, ask questions, and experiment. Every mode is a new adventure in communication.
