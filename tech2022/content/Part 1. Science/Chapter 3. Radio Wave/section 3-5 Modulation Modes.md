---
chapter: "3"
section: "3.5"
questions: [ "T8A01", "T8A06", "T8A02", "T8A03", "T8A04", "T8A05", "T8A07", "T8A08", "T8A09", "T8A10", "T8A11" ]
---

### Section 3.5: Modulation Modes and Bandwidth

Imagine you're trying to send a message to a friend across a dark field using a laser pointer. You might blink it on and off, vary its brightness, or switch between different colored lasers (red, green, blue) to communicate. That's exactly what we're doing in radio! Radio waves and visible light are both forms of electromagnetic (EM) waves—they're cousins in the same energy family, just at different frequencies.

The color of a laser is determined by its frequency—red has a lower frequency than green or blue. Similarly, in radio, we work with different frequencies that we can't see. When we talk about radio modulation, we're talking about how we manipulate these invisible waves to carry our voice or data. Let's explore these different ways of manipulating radio waves and how much radio spectrum space (bandwidth) each method needs.

### Amplitude Modulation (AM)

In Amplitude Modulation (AM), we vary the strength (amplitude) of a radio wave to carry information. Think of it like changing the brightness of the laser, rapidly increasing or decreasing the power of the light in order to convey information.

When we vary the amplitude (intensity of the light) rapidly enough, something interesting happens: the signal creates additional frequencies (colors) slightly above and below the main frequency. These are called **sidebands**, and they actually contain the information you're transmitting. The main carrier wave itself doesn't contain any information — our hypothetical laser pointer's main color would be there but we'd see other colors above and below the main color as well and those are what would give us the message.

While AM isn't the most common mode in amateur radio, you'll still encounter it in broadcast radio and some specialized communications. Most analog television signals, including Amateur Television (ATV), use AM.

#### Frequency Modulation (FM) and Phase Modulation (PM)

> **Key Information:**
> - *FM/PM are commonly used for VHF packet radio transmissions* {{< link id="T8A02" >}}
> - *FM/PM are the primary modes for VHF and UHF voice repeaters* {{< link id="T8A04" >}}

In Frequency Modulation (FM), we keep the amplitude (brightness) constant but vary the frequency (color) of the radio wave. It's like using a light that maintains the same brightness but shifts between different colors to send your message—a specific color shift represents a specific sound or piece of data.

**Phase Modulation (PM)** is closely related to FM, but instead of directly changing the frequency, it shifts the **timing** of the wave. In practice, the effect is so similar that most amateur radio operators simply group PM and FM together as "FM." The specific differences are beyond the scope of this book, but for ham radio use, just remember that FM and PM both result in the same practical type of signal.  

> **Key Information:** A *typical VHF repeater FM voice signal has a bandwidth between 10 and 15 kHz*. {{< link id="T8A09" >}}

#### Single Sideband (SSB)

Now, let's talk about SSB, which is where amplitude modulation gets a cool upgrade. *SSB is the preferred mode for long-distance (weak signal) contacts on the VHF and UHF bands.* {{< link id="T8A03" >}}

> **Key Information:**
> - *Compared to FM, SSB signals have a narrower bandwidth* {{< link id="T8A07" >}}
> - *Upper Sideband (USB)* is *normally used for 10-meter HF, VHF, and UHF single-sideband communications* {{< link id="T8A06" >}}
> - A *typical single sideband voice signal has an approximate bandwidth of 3 kHz* {{< link id="T8A08" >}}
> - Single Sideband (SSB) is a form of amplitude modulation. {{< link id="T8A01" >}}

Remember how AM creates sidebands above and below the main frequency? In SSB, we eliminate the carrier wave and one of the sidebands. Using our laser pointer analogy, this would be like keeping the laser's color variations that represent your voice, but eliminating the constant background brightness of the beam when you're not speaking.

If you could filter out just the color variations above the laser pointer's main frequency, the colors that represent your voice, you'd be left with just the colors in the side band below the pointer's main color. These colors can be referred to as a "single side band" or SSB. Your laser would only emit light when you're actually speaking, and it would use exactly the minimum amount of light needed to represent your voice - no wasted energy on a constant beam or redundant information from the upper side band. 

If you removed the laser pointer's main frequency and the colors below (the colors in the lower side band), you'd be left with Upper Side Band (USB). 

Both Upper Side Band (USB) and Lower Side Band (LSB) modulation are referred to as Single Side Band (SSB), because we're removed one of the side bands. Both are a form of Amplitude Modulation.

There are two flavors of SSB:
- **Upper Sideband (USB)**: Generally used on frequencies above 10 MHz. This includes the 30, 20, 17, 15, 12, and 10 meter bands.
- **Lower Sideband (LSB)**: Used below 10 MHz, covering the 160, 80, and 40 meter bands.

Since we only transmit the essential part of the signal, SSB uses about **half the bandwidth** of standard AM and requires much less power for the same range—making it a favorite for weak signal and long-distance communications.

#### Bandwidth Comparison

Different modulation modes occupy different amounts of frequency space, much like how different colors of light take up different parts of the visual spectrum:

> **Key Information:** Approximate bandwidths:
> - *CW (Morse Code)*: *Narrowest bandwidth, about 150 Hz* {{< link id="T8A05" >}} {{< link id="T8A11" >}}
> - *SSB voice*: About 3 kHz
> - *FM voice*: About 10-15 kHz
> - *AM fast-scan television*: About 6 MHz {{< link id="T8A10" >}}

#### Bandwidth and Frequency Range

One fascinating aspect of amateur radio is how available bandwidth influences our choice of modulation. Think of radio bands like different-sized sections of the electromagnetic spectrum:

- **Narrow Sections (Limited Bandwidth)**: Modes like CW (Morse code) work brilliantly because they use an incredibly narrow slice of spectrum—like using just a sliver of a specific color in the rainbow.

- **Wider Sections (More Bandwidth)**: Bands with more available frequencies can support "wider" modes. For example:
  - The 10-meter band has enough room for both narrow CW and wider SSB
  - VHF/UHF repeater bands can handle FM voice, which needs more bandwidth
  - Fast-scan television requires massive bandwidth (about 6 MHz!) That's more than the width of any of the amateur bands below 70cm, so it is only allowed on 70cm and above.

As frequency ranges get wider, you can use more bandwidth-intensive modes. A 2-meter band voice contact might use wide FM (15kHz) or narrow FM (5kHz), or even narrower SSB (3kHz). There are digital modes which can be even narrower. One digital mode, PSK31 (which we'll discuss later), sends characters at 31 characters per second and coincidently only takes up 31Hz!

This flexibility is part of what makes amateur radio so dynamic and exciting.

#### These are just some of the modes!

In ham radio, there's always something new to learn. Each mode has its own quirks and charms. As you gain experience, you'll develop preferences and understand when to use each type of modulation. The joy of amateur radio is in the exploration!

Don't be afraid to listen, ask questions, and experiment. Every mode is a new adventure in communication.