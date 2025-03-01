---
questions: [ "T2B01", "T2B13", "T4B02", "T4B04", "T4B05", "T7A07", "T2B06", "T4B03", "T4B08", "T4A12", "T4B01", "T4B06", "T4B10" ]
---

### Section 6.4: Operating Your Transceiver

Now that you understand what transceivers are and how they work, let’s explore how to operate them. We’ll start with the most common controls found on all radios and then introduce some specialized features you might encounter if you decide to explore additional modes beyond FM.

#### Basic Controls for All Transceivers

Every radio, regardless of type, has these fundamental controls:

- **Power/Volume**: Turns the radio on/off and adjusts audio level
- **Frequency Entry**: *The keypad or VFO knob can be used to enter a transceiver's operating frequency*. {{< link id="T4B02" >}}
  - **Direct Entry**: Use the keypad to type in the exact frequency
  - **VFO Knob**: Turn to tune up or down the band
- **PTT (Push-To-Talk)**: This button *switches the transceiver from receive to transmit when grounded*. {{< link id="T7A07" >}}

#### Memory Channels

> **Key Information:** *To enable quick access to a favorite frequency or channel on your transceiver, store it in a memory channel*. {{< link id="T4B04" >}}

Rather than entering frequencies manually each time, store them in your radio's memory:
- Program your frequently used channels (repeaters, simplex frequencies)
- Then simply select from these saved channels using up/down buttons
- Most radios store dozens or even hundreds of channels, each with its associated settings

#### Squelch Control

> **Key Information:** The squelch function *mutes the receiver audio when a signal is not present*. {{< link id="T2B13" >}}

The squelch control sets a threshold—signals below this level are muted:
- Too low: Constant background noise
- Too high: Might miss weak signals
- Just right: Silent until someone transmits

*To hear weak FM signals, adjust the squelch threshold so that receiver output audio is on all the time*, then slowly increase until background noise just disappears. {{< link id="T4B03" >}}

#### Scanning Function

> **Key Information:** The scanning function *tunes through a range of frequencies to check for activity*. {{< link id="T4B05" >}}

This feature automatically searches for active channels:
- When the radio detects a signal, it pauses so you can listen
- Once the transmission ends, scanning resumes
- This is useful for finding active repeaters or monitoring multiple channels

#### FM-Specific Controls

##### Tone Controls

Many repeaters require specific tones for access:

- **CTCSS (Continuous Tone-Coded Squelch System)**: Sub-audible tones sent along with your voice
- **DCS (Digital-Coded Squelch)**: Digital alternative to CTCSS

We will discuss these in more detail in the next section.

> **Key Information:** *DTMF (Dual-Tone Multi-Frequency) uses pairs of audio tones* for sending commands. While most commonly used with repeaters, these can be used in many ways. {{< link id="T2B06" >}}

- **DTMF**: The same technology as touch-tone phones, used to control repeater functions or access internet-linked systems

##### Repeater Controls

> **Key Information:** The VHF/UHF reverse function *lets you listen on a repeater's input frequency*. {{< link id="T2B01" >}}

When working through repeaters, you'll use:

- **Offset**: Sets the difference between transmit and receive frequencies for repeaters. Common offsets are plus or minus 600 kHz on 2 meters and plus or minus 5 MHz on 70 cm bands.

- **Reverse Function**: Temporarily swaps your transmit and receive frequencies to listen on the repeater's input frequency.

##### Power Level Selection

Most FM transceivers offer selectable power levels:
- Handhelds: Typically Low (0.5-1W) and High (5W)
- Mobile rigs: Often Low, Medium, and High (5-50W+)

Always use the minimum power necessary for reliable communication. Lower power conserves battery life in handhelds and reduces the chance of interfering with other stations. Often, improving your antenna system will yield better results than simply increasing power.

#### All-Mode Transceiver Controls

While most Technician operators start with FM, transceivers that operate in multiple modes add capabilities like SSB, CW, and digital communications. Understanding these additional controls can be valuable knowledge if you decide to explore other modes available to Technicians, such as SSB on 10 meters or digital modes on various bands.

##### Mode Selection

Simply select the appropriate mode for your operation using the MODE control:

- **SSB** (USB - Upper Sideband and LSB - Lower Sideband)
- **CW** (Continuous Wave for Morse code)
- **AM** (Amplitude Modulation)
- **FM** (Frequency Modulation)
- **Digital** (Sometimes labeled DATA or RTTY)

For VHF/UHF SSB operation, *Upper Sideband (USB) is normally used*.

##### Receiver Bandwidth Controls

> **Key Information:** *Having multiple receive bandwidth choices on a multimode transceiver permits noise or interference reduction by selecting a bandwidth matching the mode*. {{< link id="T4B08" >}} For SSB reception, *a 2400 Hz filter bandwidth provides the best signal-to-noise ratio*. {{< link id="T4B10" >}}

As explained in Section 6.3, bandwidth controls let you adjust how "wide" a slice of the radio spectrum your receiver processes:

- **SSB**: Typically 2400 Hz (best signal-to-noise ratio)
- **CW**: Typically 250-500 Hz
- **AM**: Typically 6 kHz
- **FM**: Typically 10-15 kHz
- **Digital**: Varies by mode

Narrower bandwidths reduce noise and interference but might affect audio quality. Wider bandwidths provide better fidelity but let in more noise.

##### Microphone Gain

> **Key Information:** *Excessive microphone gain on SSB transmissions causes distorted transmitted audio*. {{< link id="T4B01" >}}

Unlike FM, where your microphone gain rarely needs adjustment, proper mic gain setting is critical for SSB:
- Too high: Distorted audio that's difficult to understand
- Too low: Weak signal that others will struggle to hear

Start with a moderate setting and get on-air reports to adjust it properly. Clear, undistorted audio is the goal.

##### RIT/Clarifier

> **Key Information:** *The RIT or Clarifier control can be used if the voice pitch of a single-sideband signal seems too high or low*. {{< link id="T4B06" >}}

When operating SSB, you might notice that some stations sound too high-pitched or too low-pitched. The RIT (Receiver Incremental Tuning) control—sometimes called a Clarifier—allows you to adjust only your receive frequency without changing your transmit frequency, making the voice sound more natural.

##### Electronic Keyers for CW

> **Key Information:** An *electronic keyer assists in manual sending of Morse code*. {{< link id="T4A12" >}}

If you're interested in Morse code, all-mode transceivers typically include an electronic keyer for use with a paddle-type Morse key. This feature helps generate properly timed dots and dashes, making your CW transmissions cleaner and more consistent.

##### Noise Reduction Features

All-mode transceivers often include noise reduction systems:

- **Noise Blanker**: Helps reduce impulse noise like ignition noise
- **Digital Noise Reduction**: Uses DSP to identify and reduce random noise
- **Notch Filter**: Eliminates steady tones that can make reception difficult

These features enhance your receiver's ability to pick out desired signals by filtering out unwanted signals and noise.

#### Learning Your Transceiver

Every radio model is different, so take time to read your owner's manual. Understanding your specific radio's menu system and button functions will make operating much more enjoyable and avoid frustration when you're trying to make contacts.

All-mode transceivers have a steeper learning curve than FM-only radios, but don't be intimidated. Start with the basic controls you learned for FM operation, then gradually explore additional features as your interests expand.

The knowledge you've gained about transceiver operation creates a solid foundation if you later decide to explore other modes or frequency bands. Should you choose to continue your amateur radio journey and upgrade your license class, you'll already understand many of the operating principles needed to communicate across the country and around the world. But even as a Technician, this knowledge will help you make the most of your current operating privileges.
