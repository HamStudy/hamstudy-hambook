---
chapter: "8"
section: "8.3"
questions: [ "T1B06", "T1B01", "T1B05", "T1B10", "T1B03", "T1B04", "T1B07", "T1B11", "T1B12", "T1B09" ]
---

### Section 8.3: Authorized Frequencies

As a Technician, you have a wide range of frequencies available — from a small slice of HF all the way up through microwave bands. This section walks through what you can use and where.

Most of this section involves memorization for the exam, but you don't need to commit every frequency to memory. Focus on the specific points that appear in test questions, and review those questions for this chapter to see what facts to lock in. For everyday operating, most hams keep reference charts handy.

> **Tip:** Many frequency-related questions on the exam can be solved using the wavelength equation we introduced in Section 3.1 — $\text{Wavelength} = \frac{300}{\text{Frequency in MHz}}$. Often the correct answer is the only option that falls within the specified band!

A quick reminder on terminology before we dive in: "CW" (short for "Continuous Wave") refers to Morse code, "Phone" means voice transmissions, and "Data" covers digital modes.

#### Band Designations

Amateur radio bands are often referred to by their approximate wavelength rather than their frequency range. Recall from Section 3.1 that wavelength and frequency are inversely related — as frequency increases, wavelength decreases.

This naming convention is why you'll hear references to the "2-meter band" (144-148 MHz), the "70-centimeter band" (420-450 MHz), or the "10-meter band" (28-29.7 MHz). It also gives a quick way to estimate the size of antennas needed for these bands, since antenna elements are often designed as fractions (like 1/4 or 1/2) of the wavelength.

#### Technician Privileges Overview

> **Key Information:**
> - Technician class operators have phone privileges on the 10-meter band only among all HF bands, specifically 28.300 MHz to 28.500 MHz. {{< link id="T1B06" >}} {{< link id="T1B01" >}}
> - Technicians are authorized to use digital modes such as FT8 on the 10-meter, 6-meter, and 2-meter bands. {{< link id="T1B05" >}}
> - SSB phone may be used in at least some segment of all amateur bands above 50 MHz. {{< link id="T1B10" >}}

#### HF (High Frequency) Privileges

1. 80 meters: CW only on 3.525 - 3.600 MHz
2. 40 meters: CW only on 7.025 - 7.125 MHz
3. 15 meters: CW only on 21.025 - 21.200 MHz
4. 10 meters:
   - CW, RTTY, and Data: 28.000 - 28.300 MHz.
   - Phone (SSB) and CW: 28.300 - 28.500 MHz.

The 10-meter band is the only HF band where Technicians can transmit voice. Below 30 MHz on the 80, 40, and 15 meter bands, your only option is CW (Morse code).

#### VHF and UHF

> **Key Information:**
> - 52.525 MHz is in the 6-meter amateur band. {{< link id="T1B03" >}}
> - 146.52 MHz is in the 2-meter amateur band. {{< link id="T1B04" >}}
> - 50.0 MHz to 50.1 MHz and 144.0 MHz to 144.1 MHz are limited to CW only. {{< link id="T1B07" >}}

Technicians have full privileges on four bands across VHF and UHF:

1. **6 meters: 50 - 54 MHz**
   - 50.0 - 50.1 MHz: CW only.
   - 50.1 - 54 MHz: All modes including voice.
2. **2 meters: 144 - 148 MHz**
   - 144.0 - 144.1 MHz: CW only.
   - 144.1 - 148 MHz: All modes including voice.
3. **1.25 meters**:
   - 219 - 220 MHz: Fixed digital message forwarding only.
   - 220 - 222 MHz: Not allocated to amateur radio (was in the past, no longer).
   - 222 - 225 MHz: All modes including voice.
4. **70 centimeters: 420 - 450 MHz** — full Technician privileges across the entire band.

Note the consistent pattern at the bottom of the 6 m and 2 m bands: the first 100 kHz is CW only.

In practice, 2 meters and 70 centimeters are by far the most-used bands in this group — most handheld radios are 2m, 70cm, or "dual-band" models that cover both. Some "tri-band" radios add 1.25 meters (most often as an option in the US, since 1.25m is a US-only allocation and the equipment market reflects that). 6 meters used to be more popular but is more niche these days, partly because the antennas are larger.

#### Microwave Bands

Various bands above 902 MHz are available with full Technician privileges. These get less attention in this book because they require specialized equipment and are mostly used by hams interested in microwave experimentation.

#### Power Limits for Technician Class Operators

> **Key Information:**
> - The maximum peak envelope power output for Technician class operators in their HF band segments is 200 watts. {{< link id="T1B11" >}}
> - Except for some specific restrictions, the maximum peak envelope power output for Technician class operators using frequencies above 30 MHz is 1500 watts. {{< link id="T1B12" >}}

If 200 watts on HF doesn't seem like a lot, consider that most typical HF radios have a maximum output power of 100 watts or less. And 1500 watts on VHF/UHF is excessive for most purposes — the typical VHF/UHF radio has a max output of 50 watts and that's usually plenty.

A few things to keep in mind before cranking up the power:

- Just because you can use that much power doesn't mean you always should. Good operators use the minimum power necessary to make the contact.
- Some modes, specific segments, and even geographical areas might have lower power limits. Always check the current band plan and regulations.
- Higher power means more potential for interference with neighbors' electronics and more safety considerations in your shack.
- Your antenna system plays a huge role in how effective your signal is. A good antenna with lower power often outperforms a poor antenna with high power. Additionally, using too much power can damage most antennas and feedlines!

Start with lower power, learn good operating practices, and work your way up as you gain experience.

#### Listening Privileges

While your license governs where you can **transmit**, you're free to **listen** on any amateur radio frequency. Many hams enjoy tuning around and listening to activity on bands they can't yet transmit on.

Be aware that some **non-amateur frequencies** — like cordless or cellular phone communications — may be **illegal to monitor**, especially if they're encrypted or intended to be private. In practice, most of those signals are digital or encrypted and can't be decoded anyway, but it's good to know.

#### Operating Near Band Edges

> **Key Information:** You should not set your transmit frequency exactly at the edge of an amateur band or sub-band. Calibration error in the transmitter frequency display, modulation sidebands extending beyond the band edge, and transmitter frequency drift could all push part of your signal out of band. {{< link id="T1B09" >}}

It's good practice to stay a few kHz inside the band when you transmit, giving yourself a safety margin. Most experienced hams do this without thinking about it, just to be on the safe side. It's always better to err on the side of caution and keep your signals well within the authorized limits.

---

That covers the spectrum available to you. The next section pulls back and looks at how that spectrum is shared with other services, the band plans that organize use within it, and what to do when two stations end up on the same frequency.
