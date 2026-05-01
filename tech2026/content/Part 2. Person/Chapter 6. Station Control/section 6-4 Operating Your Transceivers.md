---
chapter: "6"
section: "6.4"
questions: [ "T4B02", "T7A07", "T2B13", "T4B03", "T4B05", "T2B06", "T4B08", "T4B10", "T4B01", "T4B06", "T4A12" ]
status: complete
---

### Section 6.4: Operating Your Transceiver

Now that you understand what transceivers are and how they work, let's explore how to operate them. We'll start with the most common controls found on all radios and then introduce some specialized features you might encounter if you decide to explore additional modes beyond FM.

#### Basic Controls for All Transceivers

> **Key Information:**
> - A transceiver's operating frequency can be entered using the keypad or VFO knob. {{< link id="T4B02" >}}
> - The PTT (Push-To-Talk) input switches the transceiver from receive to transmit when grounded. {{< link id="T7A07" >}}

Every radio, regardless of type, has these fundamental controls:

- **Power/Volume**: Turns the radio on/off and adjusts audio level.
- **Frequency Entry**: Use the keypad to type in a frequency directly, or turn the VFO knob to tune up or down the band.
- **PTT (Push-To-Talk)**: The button on the microphone (or radio body) that switches you from listening to transmitting.

#### Memory Channels

Most radios let you save frequencies (along with their associated settings — offset, tones, power level, and so on) into memory channels. Once programmed, you can jump to a saved channel with a couple of button presses instead of typing the frequency in every time. This is especially useful for repeaters and other channels you use regularly, and most radios can store dozens or even hundreds of memories.

#### Squelch Control

> **Key Information:**
> - The squelch function mutes the receiver audio when a signal is not present. {{< link id="T2B13" >}}
> - To hear a weak FM signal, set the squelch threshold so that receiver output audio is on all the time. {{< link id="T4B03" >}}

A receiver amplifies whatever's coming in. When no signal is present, that amplification turns background noise into a loud hiss. The squelch control sets a threshold — signals below the threshold get muted, signals above it are passed through to the speaker:

- Too low: constant background noise.
- Too high: you'll miss weak signals.
- Just right: silent until someone transmits.

To pull in a weak signal, lower the squelch until you can just barely hear the noise floor.

#### Scanning Function

> **Key Information:** The scanning function tunes through a range of frequencies to check for activity. {{< link id="T4B05" >}}

This feature automatically searches for active channels:

- When the radio detects a signal, it pauses so you can listen.
- Once the transmission ends, scanning resumes.
- Useful for finding active repeaters or monitoring multiple channels at once.

#### FM-Specific Controls

##### Tone Controls

Many repeaters and other systems require specific tones for access:

- **CTCSS (Continuous Tone-Coded Squelch System)**: a sub-audible continuous tone sent along with your voice.
- **DCS (Digital-Coded Squelch)**: a digital alternative to CTCSS.

We'll discuss how these are used to access repeaters in the next section.

##### DTMF

> **Key Information:** DTMF (Dual-Tone Multi-Frequency) signaling uses two simultaneous audio tones. {{< link id="T2B06" >}}

DTMF is the same technology as touch-tone phones — each "digit" is sent as two simultaneous audio tones. While most commonly used with repeaters, DTMF can be used in many ways: controlling repeater functions, accessing internet-linked systems like IRLP, or other automated services. Unlike CTCSS or DCS, DTMF isn't typically used for basic repeater access.

##### Power Level Selection

Many FM transceivers offer selectable power levels:

- Handhelds: typically Low (0.5–1 W) and High (5 W).
- Mobile rigs: often Low, Medium, and High (5–50 W and beyond).

Always use the minimum power necessary for reliable communication. Lower power conserves battery life in handhelds and reduces the chance of interfering with other stations. As mentioned in the previous section, improving your antenna system will often yield better results than simply increasing power.

#### All-Mode Transceiver Controls

While most Technician operators start with FM, transceivers that operate in multiple modes add capabilities like SSB, CW, and digital communications. Understanding these additional controls is useful if you decide to explore other modes available to Technicians, such as SSB on 10 meters or digital modes on various bands.

##### Mode Selection

Select the appropriate mode for your operation using the MODE control:

- **SSB** (USB — Upper Sideband, and LSB — Lower Sideband).
- **CW** (Continuous Wave for Morse code).
- **AM** (Amplitude Modulation).
- **FM** (Frequency Modulation).
- **Digital** (sometimes labeled DATA or RTTY).

For VHF/UHF SSB operation, *upper sideband* is normally used.

##### Receiver Bandwidth Controls

> **Key Information:**
> - Multiple receiver filter bandwidth choices on a multimode transceiver permit noise or interference reduction by selecting a bandwidth matching the mode. {{< link id="T4B08" >}}
> - For SSB reception, a 2400 Hz filter bandwidth provides the best signal-to-noise ratio. {{< link id="T4B10" >}}

Bandwidth controls let you adjust how "wide" a slice of the radio spectrum your receiver processes:

- **SSB**: typically 2400 Hz (best signal-to-noise ratio).
- **CW**: typically 250–500 Hz.
- **AM**: typically 6 kHz.
- **FM**: typically 10–15 kHz.
- **Digital**: varies by mode.

Narrower bandwidths reduce noise and interference but might cut off parts of a wider signal. Wider bandwidths provide better fidelity but let in more noise.

##### Microphone Gain

> **Key Information:** Excessive microphone gain on SSB transmissions causes distorted transmitted audio. {{< link id="T4B01" >}}

Unlike FM, where your microphone gain rarely needs adjustment, proper mic gain setting is critical for SSB:

- Too high: distorted audio that's difficult to understand.
- Too low: weak signal that others will struggle to hear.

Start with a moderate setting and get on-air reports to fine-tune. Clear, undistorted audio is the goal.

##### RIT/Clarifier

> **Key Information:** If the voice pitch of an SSB signal seems too high or low, the RIT or Clarifier can be used to correct it. {{< link id="T4B06" >}}

When operating SSB, you might notice that some stations sound too high-pitched or too low-pitched. The RIT (Receiver Incremental Tuning) control — sometimes called a Clarifier — adjusts only your receive frequency without changing your transmit frequency, which lets you "clarify" the voice without ending up off-frequency to the other station.

##### Electronic Keyers for CW

> **Key Information:** An electronic keyer is a device that assists in manual sending of Morse code. {{< link id="T4A12" >}}

If you're interested in Morse code, all-mode transceivers typically include an electronic keyer for use with a paddle-type Morse key. This feature helps generate properly timed dots and dashes, making your CW transmissions cleaner and more consistent.

##### Noise Reduction Features

All-mode transceivers often include noise reduction systems:

- **Noise Blanker**: helps reduce impulse noise like ignition noise.
- **Digital Noise Reduction**: uses DSP to identify and reduce random noise.
- **Notch Filter**: eliminates steady tones that can make reception difficult, and can help reduce interference from an adjacent signal.

These features enhance your receiver's ability to pick out desired signals by filtering out unwanted ones.

#### Learning Your Transceiver

Every radio model is different, so take time to read your owner's manual. Understanding your specific radio's menu system and button functions will save a lot of frustration when you're trying to make contacts. Start with the basic controls described here, then gradually explore additional features as your interests grow.

---

A lot of the FM controls covered here — CTCSS, DCS, DTMF — are most commonly used when working through repeaters. Repeaters are also where things like offset and the reverse function come into play, both of which deserve a fuller treatment than they could fit here. The next section is all about working with them.
