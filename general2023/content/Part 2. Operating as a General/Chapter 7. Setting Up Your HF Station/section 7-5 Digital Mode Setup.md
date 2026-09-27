---
chapter: "7"
section: "7.5"
status: reviewed1
questions: ["G2E06", "G4A11", "G8C14", "G8C13", "G2E07", "G2E14"]
---

### Section 7.5: Digital Mode Station Setup

Digital modes often add a computer to your station. Depending on the setup, it may control the radio, exchange audio with it, or do both. The software handles much of the work, but you still need to make sure the radio is using the right mode, frequency, audio levels, and timing.

#### Getting the Audio Right

In many digital mode setups, the computer generates audio tones that the radio transmits just as it would your voice.

AFSK (Audio Frequency-Shift Keying) sends data by shifting between two audio frequencies called *mark* and *space*. RTTY (Radio Teletype), one of the oldest digital modes, commonly uses AFSK, and the difference between the mark and space frequencies is called the *shift*:

> **Key Information:** The most common frequency shift for RTTY emissions in the amateur HF bands is 170 Hz. {{< link id="G2E06" >}}

The receiving software watches those changes and converts them back into text.

Because the radio treats this audio much like voice audio, too much input from the computer can cause problems. In particular, ALC should not be active while transmitting AFSK:

> **Key Information:** The ALC system should be inactive when transmitting AFSK data signals because the ALC action distorts the signal. {{< link id="G4A11" >}}

If the ALC meter shows activity, reduce the computer's audio drive. Speech processing and other audio effects should normally be turned off as well.

#### Seeing What You're Doing

For many digital modes, a waterfall display is the main tool for finding and tuning signals:

> **Key Information:** A waterfall display shows frequency horizontally, signal strength as intensity, and time vertically. {{< link id="G8C14" >}}

As the display scrolls, signals leave traces showing where they are in frequency and how their strength changes over time.

A waterfall can also reveal problems with a transmitted signal:

> **Key Information:** Vertical lines on either side of a data mode or RTTY signal on a waterfall display indicate overmodulation. {{< link id="G8C13" >}}

Overdriving the transmitter can create unwanted signals beside the intended one. If your signal shows signs of overmodulation, reduce the audio drive and verify that speech processing is disabled.

![A waterfall display](waterfall.png)

#### Keeping Accurate Time

Some digital modes also depend on precise timing. FT8 uses synchronized transmit and receive periods, so the computers at both stations need clocks that closely agree:

> **Key Information:** FT8 requires computer time accurate to within approximately 1 second. {{< link id="G2E07" >}}

If your clock is too far off, your transmissions may not line up properly with other stations and can become difficult or impossible to decode. A reliable time-synchronization service normally keeps the computer clock accurate enough.

#### When It Doesn't Work

If an RTTY or other FSK signal appears to be tuned correctly but still will not decode, several settings may be wrong:

> **Key Information:** If you cannot decode an RTTY or other FSK signal even though it is apparently tuned in properly, the mark and space frequencies may be reversed, you may have selected the wrong baud rate, or you may be listening on the wrong sideband. {{< link id="G2E14" >}}

Changing sidebands reverses the relationship between mark and space, and most RTTY software also provides a **Reverse** setting for the same purpose. The receiver must also use the same transmission speed as the sending station; 45.45 baud is common for amateur HF RTTY.

When troubleshooting, check the sideband or Reverse setting, baud rate, and shift. Change one thing at a time so you know what corrected the problem.

#### Trust, but Verify

Digital modes vary widely, but the same operating habits apply to all of them: set the audio correctly, watch what your signal is doing, keep required timing accurate, and verify settings rather than assuming they are right.

Meters and other station instruments give you more ways to make those checks, and that is how we will finish the chapter.
