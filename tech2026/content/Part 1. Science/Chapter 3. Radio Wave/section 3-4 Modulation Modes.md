---
chapter: "3"
section: "3.4"
questions: [ "T8A02", "T8A04", "T8A09", "T8A03", "T8A07", "T8A06", "T8A08", "T8A01", "T8A05", "T8A11", "T8A10" ]
status: publish1
---

### Section 3.4: Modulation Modes and Bandwidth

Suppose you're sending a message to a friend across a dark field with a laser pointer. You might blink it on and off, vary its brightness, or switch between different colored lasers (red, green, blue) to communicate. That's exactly what we're doing in radio! Radio waves and visible light are both forms of electromagnetic (EM) waves — they're cousins in the same energy family, just at different frequencies.

The color of a laser is determined by its frequency — red has a lower frequency than green or blue. Similarly, in radio, we work with different frequencies that we can't see. When we talk about radio modulation, we're talking about how we manipulate these invisible waves to carry our voice or data. Let's explore these different ways of manipulating radio waves and how much radio spectrum space (bandwidth) each method needs.

#### Amplitude Modulation (AM)

In Amplitude Modulation (AM), we vary the strength (amplitude) of a radio wave to carry information. Think of it like changing the brightness of the laser, rapidly increasing or decreasing the power of the light in order to convey information.

When we vary the amplitude (intensity of the light) rapidly enough, something interesting happens: the signal creates additional frequencies (colors) slightly above and below the main frequency. These are called **sidebands**, and they actually contain the information you're transmitting. The main carrier wave itself doesn't contain any information — our hypothetical laser pointer's main color would be there but we'd see other colors above and below the main color as well and those are what would give us the message.

While AM isn't the most common mode in amateur radio, you'll still encounter it in broadcast radio and some specialized communications. Most analog television signals, including Amateur Television (ATV), use AM.

#### Frequency Modulation (FM) and Phase Modulation (PM)

> **Key Information:**
> - FM/PM are commonly used for VHF packet radio transmissions. {{< link id="T8A02" >}}
> - FM/PM are the primary modes for VHF and UHF voice repeaters. {{< link id="T8A04" >}}

In Frequency Modulation (FM), we keep the amplitude (brightness) constant but vary the frequency (color) of the radio wave. It's like using a light that maintains the same brightness but shifts between different colors to send your message — a specific color shift represents a specific sound or piece of data.

**Phase Modulation (PM)** is closely related to FM, but instead of directly changing the frequency, it shifts the **timing** of the wave. In practice, the effect is so similar that most amateur radio operators simply group PM and FM together as "FM." The specific differences are beyond the scope of this book, but for ham radio use, just remember that FM and PM both result in the same practical type of signal.

> **Key Information:** A typical VHF repeater FM voice signal has a bandwidth between 10 and 15 kHz. {{< link id="T8A09" >}}

#### Single Sideband (SSB)

Now, let's talk about SSB, which is where amplitude modulation gets a cool upgrade. SSB is the preferred mode for long-distance (weak signal) contacts on the VHF and UHF bands. {{< link id="T8A03" >}}

> **Key Information:**
> - Compared to FM, SSB signals have a narrower bandwidth. {{< link id="T8A07" >}}
> - Upper Sideband (USB) is normally used for 10-meter HF, VHF, and UHF single-sideband communications. {{< link id="T8A06" >}}
> - A typical single sideband voice signal has an approximate bandwidth of 3 kHz. {{< link id="T8A08" >}}
> - Single Sideband (SSB) is a form of amplitude modulation. {{< link id="T8A01" >}}

Remember how AM creates sidebands above and below the main frequency? In SSB, we eliminate the carrier wave and one of the sidebands. Using our laser pointer analogy, this would be like keeping the laser's color variations that represent your voice, but eliminating the constant background brightness of the beam when you're not speaking.

If you could filter out the color variations above the main color — the ones that carry your voice — that would leave just the variations below: a single sideband, or SSB. Your laser would only emit light when you're actually speaking, and it would use exactly the minimum amount of light needed to represent your voice — no wasted energy on a constant beam or redundant information from the upper sideband.

If you removed the laser pointer's main frequency and the colors below (the colors in the lower sideband), you'd be left with Upper Sideband (USB).

Both Upper Sideband (USB) and Lower Sideband (LSB) modulation are referred to as Single Sideband (SSB), because we've removed one of the sidebands. Both are a form of Amplitude Modulation.

There are two flavors of SSB:

- **Upper Sideband (USB)**: Generally used on frequencies above 10 MHz — the 30, 20, 17, 15, 12, and 10 meter bands — as well as all VHF and UHF SSB work.
- **Lower Sideband (LSB)**: Used below 10 MHz, covering the 160, 80, and 40 meter bands.

Since we only transmit the essential part of the signal, SSB uses about **half the bandwidth** of standard AM and requires much less power for the same range — making it a favorite for weak signal and long-distance communications.

#### Bandwidth Comparison

Different modulation modes occupy different amounts of frequency space, much like how different colors of light take up different parts of the visual spectrum:

> **Key Information:** Approximate bandwidths:
> - CW (Morse Code): Narrowest bandwidth, about 150 Hz. {{< link id="T8A05" >}} {{< link id="T8A11" >}}
> - SSB voice: About 3 kHz.
> - FM voice: About 10-15 kHz.
> - AM fast-scan television: About 6 MHz. {{< link id="T8A10" >}}

#### Bandwidth and Frequency Range

One fascinating aspect of amateur radio is how available bandwidth influences our choice of modulation. Think of radio bands like different-sized sections of the electromagnetic spectrum:

- **Narrow Sections (Limited Bandwidth)**: Modes like CW (Morse code) work brilliantly because they use an incredibly narrow slice of spectrum — like using just a sliver of a specific color in the rainbow.

- **Wider Sections (More Bandwidth)**: Bands with more available frequencies can support "wider" modes. For example:
  - The 10-meter band has enough room for both narrow CW and wider SSB.
  - VHF/UHF repeater bands can handle FM voice, which needs more bandwidth.
  - Fast-scan television requires massive bandwidth (about 6 MHz!) That's more than the width of any of the amateur bands below 70cm, so it is only allowed on 70cm and above.

As frequency ranges get wider, you can use more bandwidth-intensive modes. A 2-meter band voice contact might use wide FM (15kHz) or narrow FM (5kHz), or even narrower SSB (3kHz). There are digital modes that can be even narrower. One digital mode, PSK31 (which we'll discuss in the next section), fits in roughly 60 Hz in practical use — narrower than a typical CW signal.

This flexibility is part of what makes amateur radio so dynamic and exciting.

---

With the basics of modulation covered, let's look at the specific world of digital modes — where computers and radios work together to send data, images, and even video over the air.
