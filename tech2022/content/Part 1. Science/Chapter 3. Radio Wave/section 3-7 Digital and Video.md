---
questions: [ "T2B07", "T8D13", "T8D01", "T8D04", "T8D06", "T8D11", "T4A06", "T4B09", "T8D02", "T8D05", "T8D07", "T8D08", "T8D10", "T8D03", "T8D12", "T2B12", "T4A04", "T4A07", "T4A10", "T4B07", "T4B11" ]
---

### Section 3.7: Digital and Video Modes

Welcome to the digital age of amateur radio! If voice modes are like having a conversation, digital modes are like sending text messages or emails through the airwaves. And video? You might be surprised to know that it's been possible to send pictures and even television via Amateur Radio for decades!

#### Quick Reference: Key Information

**Digital Mode Basics**:
- *PSK* stands for *Phase Shift Keying*
- *FT8* is a *digital mode capable of low signal-to-noise operation*
- *NTSC* indicates *an analog fast-scan color TV signal*
- *ARQ* is an *error correction method where the receiving station detects errors and requests retransmission*

**Digital Voice Systems**:
- *DMR* (Digital Mobile Radio):
  - Uses *time-multiplexing to put two digital voice signals on a single 12.5 kHz repeater channel*
  - *Color codes must match the repeater* for access
  - *Talkgroups allow users to share a channel without hearing other users*
  - Join a talkgroup by *programming your radio with the group's ID or code*
  - A "code plug" contains *access information for repeaters and talkgroups*

- *D-STAR*:
  - Must *program your call sign* before transmitting

**Digital Connections**:
- Computer-radio interface needs: *Receive audio, transmit audio, and transmitter keying*
- For FT8: Connect radio to *audio input and output of computer running WSJT-X software*
- For digital modes: Connect *computer "line in" to transceiver speaker*

**APRS** can transmit:
- *GPS position data*
- *Weather data*
- *Text messages*
- Provides *real-time tactical communications with station location mapping*

**Other Systems**:
- *Digital hot spots* enable *communication using digital voice or data systems via the internet*
- A *mesh network* is an *amateur-radio based data network using commercial Wi-Fi equipment with modified firmware*
- *Packet radio* includes:
  - Error detection checksum
  - Destination station call sign
  - Automatic repeat request

#### Packet Radio

Imagine sending an email through radio waves. That's essentially what packet radio does! It breaks your message into small "packets" of data, sends them over the air, and then reassembles them at the receiving end. Each packet includes:

- A *checksum for error detection*
- The *call sign of the destination station*
- An *automatic repeat request if errors are detected*

It's like sending a puzzle through the air that reassembles itself perfectly on the other side! Packet radio was a big deal in the 1980s and 1990s before the internet became widespread. Today, it's still used in some applications, especially in emergency communications. Think of it as the sturdy old pickup truck of digital modes—not the fastest, but reliable and it gets the job done.

#### APRS (Automatic Packet Reporting System)

*APRS* is like the social media of ham radio. It lets you transmit:
- *GPS position data* 
- *Weather information*
- *Short text messages*
- And provides *real-time tactical digital communications in conjunction with a map showing the locations of stations*

With APRS you can set up even a home station as a digital signpost and view a map showing the locations of other stations! It's like Twitter meets Google Maps, but for radio!

#### PSK31

*PSK* (*Phase Shift Keying*) is like the smooth jazz of digital modes. It's designed for real-time, keyboard-to-keyboard conversations. The "31" in its name comes from its bandwidth—just 31 Hz! That's incredibly narrow, allowing it to get through in tough conditions.

#### RTTY (RadioTeletype)

RTTY is the granddaddy of digital modes. It's been around since the 1930s! Think of it as a radio-based typewriter. It's still popular in contests and among some news agencies.

#### PACTOR

PACTOR is like the Swiss Army knife of digital modes. It can automatically switch between speeds and encoding methods based on conditions. There are several versions, with PACTOR III offering robust performance for things like email over radio.

#### Digital Mobile Radio (DMR)

Think of DMR as the multitasking wizard of the radio world. This digital mode *uses time-division multiple access (TDMA) to split a 12.5 kHz channel into two time slots*, allowing two conversations to happen at once on the same frequency. It's like getting double the channels without needing more spectrum!

Here's what makes DMR stand out:
- **Color Codes**: *Must match the repeater color code for access*. Think of it as a digital key to unlock access.
- **Talkgroups**: *A way for groups of users to share a channel at different times without hearing other users*. Just *program the right group ID*, and you're chatting with other hams in that group.
- **Code Plug**: Contains *access information for repeaters and talkgroups* - it's like a configuration file for your radio.

#### D-STAR (Digital Smart Technologies for Amateur Radio)

Before you can use D-STAR, you *must program your call sign into the transceiver*. This is essential because:
- Your call sign is included in every transmission
- It enables call sign routing features
- It helps maintain network integrity

D-STAR enables both voice and data communications, allowing operators to send text, images, and GPS data alongside their voice transmissions.

#### System Fusion (C4FM)

**Beyond the Test**: System Fusion, also known as C4FM, is a digital communication mode developed by Yaesu. It was designed to provide the flexibility of both digital and analog FM communications in one system, making it easy for users to transition between modes depending on their needs.

System Fusion offers several key features:
- **Automatic Mode Select (AMS)**: Automatically switches between digital and analog modes
- **Digital Group Monitor (GM)**: Shows who else is within range
- **Data Capabilities**: Supports text messaging, GPS information, and images

#### Digital Mode Hot Spots

A *digital hot spot* allows *communication using digital voice or data systems via the internet*. Think of it as your personal gateway to the world of digital radio. Whether you're using DMR, D-STAR, or System Fusion, a hot spot extends your reach far beyond the local area.

#### Computer-Radio Interfaces

For digital modes, you need to connect your radio to your computer. This requires:
- *Receive audio* (from radio to computer)
- *Transmit audio* (from computer to radio)
- *Transmitter keying* (to control when the radio transmits)

For *FT8*, you'll need to:
- Connect to the *audio input and output of a computer running WSJT-X software*
- Connect the *computer "line in" to the transceiver speaker*

#### WSJT-X and FT8

*FT8* is a *digital mode capable of low signal-to-noise operation* that's part of the WSJT-X software suite. The WSJT-X software supports several key amateur radio activities:
- Earth-Moon-Earth (moonbounce) communication
- Weak signal propagation beacons
- Meteor scatter
- Various digital modes including FT8

#### Video Modes

Amateur radio operators have several options for sending images and video:

**Fast-Scan Television (FSTV)**:
*NTSC* refers to *an analog fast-scan color TV signal*. This is similar to what was used for broadcast TV, but adapted for amateur use. FSTV requires significant bandwidth, so it's typically used on UHF and microwave frequencies.

**Slow-Scan Television (SSTV)**:
Think of SSTV as sending a postcard via radio. It transmits still images, taking anywhere from a few seconds to a couple of minutes to send a single picture. While not tested on the exam, SSTV is popular because:
- It works on HF bands
- Requires minimal equipment (often just your radio and computer)
- Lets you receive pictures from the International Space Station!
- Great way to mix visual and radio communications

#### Mesh Networks

An *amateur radio mesh network* is a *data network using commercial Wi-Fi equipment with modified firmware*. It creates a robust, decentralized network where each station can receive and relay data.

#### ARQ (Automatic Repeat reQuest)

*ARQ* is an *error correction method where the receiving station detects errors and sends a request for retransmission*. It's like having a built-in "Could you repeat that?" function.

#### Getting Started with Digital Modes

1. **Start Simple**:
   - Try receiving before transmitting
   - Use built-in sound card interfaces
   - Join local digital nets to practice with packet radio
   - Learn to use *talkgroups* and *color codes* on *DMR*

2. **Progress Gradually**:
   - Try *APRS* for position reporting and messaging
   - Experiment with keyboard-to-keyboard modes like *PSK*
   - Set up *FT8* for weak signal contacts
   - Explore digital voice modes

3. **Expand Your Capabilities**:
   - Build a *mesh network* node
   - Set up a *digital hot spot*
   - Try different interface methods
   - Experiment with video modes

Remember: Digital modes are constantly evolving. While you need to know certain concepts for the exam, the real excitement comes from using these modes to communicate in new and interesting ways.