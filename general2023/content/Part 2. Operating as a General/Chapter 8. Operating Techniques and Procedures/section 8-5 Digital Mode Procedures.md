---
chapter: "8"
section: "8.5"
questions: ["G2E01", "G2E06", "G2E14", "G2E12", "G2E13", "G2E02", "G2E03", "G2E07", "G2E04", "G2E05", "G2E08", "G2E15", "G2E09", "G2E10", "G2E11"]
status: reviewed1
---

### Section 8.5: Digital Mode Operating Procedures

Remember your first packet connection? That satisfying "CONNECTED" message? That was just the beginning. Today's digital modes can decode signals you can't even hear, send perfect text through apocalyptic band conditions, and connect you to a global data network that works when the internet doesn't.

Welcome to digital amateur radio, where your computer and radio unite to push the boundaries of what's possible.

#### Getting Started with RTTY

RTTY is the grandfather of digital modes—invented when "computer" meant a room full of tubes. But don't let its age fool you. When newer modes fail, RTTY keeps grinding through the noise like a diesel engine. It's not pretty, but it works.

##### RTTY Fundamentals

> **Key Information:** When sending RTTY signals via AFSK with an SSB transmitter, LSB is normally used. {{< link id="G2E01" >}}

![Diagram showing RTTY signal generation via AFSK](../images/rtty-afsk-generation.svg)

Why LSB for RTTY when everything else uses USB? Blame history. Early RTTY ops discovered LSB put the mark and space tones in the right order. Decades later, we're still doing it that way. Fighting convention means nobody can decode you—follow the crowd on this one.

RTTY uses frequency shift keying with two specific tones:

> **Key Information:** The most common frequency shift for RTTY emissions in the amateur HF bands is 170 Hz. {{< link id="G2E06" >}}

![Illustration of 170 Hz RTTY frequency shift](../images/rtty-frequency-shift.svg)

That 170 Hz shift isn't random—it's narrow enough to save bandwidth but wide enough that your filters can tell mark from space. Some old-timers use 850 Hz shift, but unless you're working vintage gear, stick with 170.

##### RTTY Troubleshooting

If you're having difficulty decoding RTTY signals:

> **Key Information:** If you cannot decode an RTTY or other FSK signal even though it is apparently tuned in properly, the mark and space frequencies may be reversed, you may have selected the wrong baud rate, or you may be listening on the wrong sideband. {{< link id="G2E14" >}}

![Flowchart for RTTY troubleshooting](../images/rtty-troubleshooting.svg)

RTTY troubleshooting in order:
1. **Gibberish?** Hit the reverse button—mark and space are flipped
2. **Still garbage?** Check your baud rate—45.45, not 50 or 75
3. **Nothing but noise?** Wrong sideband—use LSB
4. **Close but not quite?** Shift setting—170 Hz, not 850
5. **All else fails?** You're off frequency—center those marks on the waterfall

RTTY operation requires more precise tuning than some other digital modes, but offers excellent reliability once properly configured.

#### Modern Digital Modes

While RTTY has a long history, newer digital modes offer superior performance for specific purposes:

##### WINLINK: Email via Radio

> **Key Information:** Winlink is a wireless network to send and receive email on the internet, a form of Packet Radio, and a wireless network capable of both VHF and HF band operation. {{< link id="G2E12" >}}

![Diagram showing Winlink system components and operation](../images/winlink-system-overview.svg)

Winlink is email's apocalypse-proof cousin. Internet down? Cell towers dead? Fire up Winlink and your emails still flow—just via radio waves instead of fiber optics. Emergency responders love it, sailors depend on it, and after your first hurricane, you'll appreciate it.

Winlink has become especially valuable for emergency communications, maritime operation, and remote exploration. The system's flexibility allows access via various digital protocols across multiple bands.

To facilitate messages moving between radio and internet systems:

> **Key Information:** A Winlink Remote Message Server is also called a Gateway. {{< link id="G2E13" >}}

![Illustration of Winlink gateway functioning](../images/winlink-gateway-operation.svg)

Gateway operators are the unsung heroes of digital radio. They maintain 24/7 stations that relay your radio emails to the internet and back. Think of them as digital mode repeater operators—except their repeaters span continents.

##### VARA: Enhanced Digital Protocol

Another valuable digital protocol in the modern amateur's toolkit:

> **Key Information:** VARA is a digital protocol used with Winlink. {{< link id="G2E02" >}}

![Chart comparing VARA with other digital protocols](../images/vara-protocol-features.svg)

VARA is what happens when modern coding theory meets amateur radio. It watches band conditions and adapts—speeding up when signals are strong, slowing down when they're not. Think of it as cruise control for digital modes.

With its advanced features, VARA has become increasingly popular for both emergency communication and routine digital operation.

Like many digital modes, VARA can be affected by interference:

> **Key Information:** Frequent retries or timeouts, long pauses in message transmission, and failure to establish a connection between stations are all symptoms of other signals interfering with a PACTOR or VARA transmission. {{< link id="G2E03" >}}

Digital modes might be robust, but they're not magic. When someone fires up their kilowatt three kilohertz away, even VARA throws in the towel.

##### FT8 and Related Modes: Weak Signal Champions

In recent years, FT8 has revolutionized digital communication on the HF bands:

> **Key Information:** When using FT8, computer time accurate to within approximately 1 second is required. {{< link id="G2E07" >}}

![Diagram showing importance of time synchronization for FT8](../images/ft8-time-synchronization.svg)

FT8 is like a synchronized swimming routine—everyone must move in perfect time. Miss by even two seconds and you're that person jumping in the pool while everyone else is climbing out. Internet time sync isn't optional—it's mandatory.

When operating FT8, proper frequency selection is crucial:

> **Key Information:** When responding to a station calling CQ using FT8, you should find a clear frequency during the alternate time slot to the calling station. {{< link id="G2E04" >}}

![Illustration of FT8 alternating time slot operation](../images/ft8-alternating-transmission.svg)

FT8's genius: While you transmit, they receive. While they transmit, you receive. It's like a perfectly choreographed conversation where nobody interrupts. Find a clear spot in the opposite time slot and make magic happen.

For all JT-family digital modes and related protocols:

> **Key Information:** The standard sideband used for JT65, JT9, FT4, or FT8 digital signals when using AFSK is USB. {{< link id="G2E05" >}}

Finally, some sanity! JT modes use USB everywhere. No more remembering which sideband for which mode on which band. Set USB and forget it.

##### Finding Digital Activity

Digital modes cluster in specific segments of each band:

> **Key Information:** Most digital mode operations are commonly found between 14.070 MHz and 14.100 MHz on the 20-meter band. {{< link id="G2E08" >}}

![Chart showing digital mode frequency allocations](../images/digital-mode-band-segments.svg)

The digital playground has unwritten rules:
- 14.074-14.077: FT8 territory (don't even think about RTTY here)
- 14.080-14.100: RTTY country (where keyboards have clacked since 1950)
- In between: Digital mode demilitarized zone

Similar clustering occurs on other bands, generally in the lower portion of General class privileges. A particularly common FT8 frequency:

> **Key Information:** FT8 is commonly found between approximately 14.074 MHz and 14.077 MHz. {{< link id="G2E15" >}}

FT8 on 14.074 is like the coffee shop of amateur radio—everyone knows where to find it, it's always busy, and you'll meet operators from around the world. Just don't try ordering a latte.

#### Digital Mode Protocol Characteristics

Different digital modes have specific operational characteristics that affect how you interact with them:

##### PACTOR Connections

> **Key Information:** Joining an existing contact between two stations using the PACTOR protocol is not possible, as PACTOR connections are limited to two stations. {{< link id="G2E09" >}}

![Diagram showing PACTOR's point-to-point connection model](../images/pactor-connection-properties.svg)

PACTOR is monogamous—it connects two stations and only two stations. No conference calls, no party lines. Think of it as the dedicated phone line of digital modes. Great for reliability, not so much for group chats.

To establish a connection with a digital messaging system:

> **Key Information:** Transmitting a connect message on the station's published frequency is the way to establish contact with a digital messaging system gateway station. {{< link id="G2E10" >}}

Connecting to a digital gateway is like calling a business—you need the right number (frequency) and the right greeting (connect command). Get it right and doors open. Get it wrong and you're talking to yourself.

##### AREDN: Mesh Networking for Emergencies

Beyond traditional digital modes, advanced networking systems offer powerful emergency communication capabilities:

> **Key Information:** The primary purpose of an Amateur Radio Emergency Data Network (AREDN) mesh network is to provide high-speed data services during an emergency or community event. {{< link id="G2E11" >}}

![Illustration of AREDN mesh network topology](../images/aredn-mesh-network.svg)

AREDN turns amateur radio into amateur internet. When the real internet fails, AREDN creates its own—complete with video streaming, file sharing, and VOIP phones. It's what happens when network engineers get ham licenses and ask "What if we rebuilt the internet with radios?"

These sophisticated systems represent the cutting edge of amateur radio's emergency communication capabilities, combining modern networking technology with amateur radio's independence from commercial infrastructure.

#### Practical Digital Operating Tips

Successful digital operation relies on proper setup and operating practices:

##### Signal Levels and ALC

For most digital modes, proper audio drive levels are critical:
- Set audio drive so ALC action is minimal or non-existent
- Use dedicated "DATA" modes on your transceiver when available
- Monitor your signal width on a waterfall display
- Avoid excessive power that might create splatter

![Diagram showing proper vs improper digital signal levels](../images/digital-signal-levels.svg)

Your digital signal on a waterfall should look like a single clean line, not a hairy caterpillar. Those fuzzy shoulders? That's distortion—you're splattering across three frequencies instead of one. Back off the audio until it's clean. Your neighbors will thank you.

##### Computer Interface Considerations

Digital success depends heavily on proper computer-to-radio interfacing:
- Use high-quality USB or audio cables with appropriate shielding
- Install ferrite chokes on cables to reduce RF interference
- Ensure solid ground connections between equipment
- Consider dedicated interface devices with built-in isolation
- Configure your software with the correct COM ports and audio devices

##### Operating Etiquette

Digital mode etiquette:
- **Keep it short**: This isn't a ragchew mode
- **Keep it clean**: More power doesn't help when you're splattering
- **Keep it smart**: See an open frequency? Use it. Don't CQ on top of others
- **Keep it spaced**: Leave room between signals—we're not playing Tetris

#### The Evolution of Digital Communications

Digital modes continue to evolve rapidly, with new protocols emerging regularly. As a General class licensee, you're positioned to explore both established and cutting-edge digital communications.

These modes offer different advantages that complement traditional voice and CW operation:
- Reliable text communication under marginal conditions
- Automatic logging and contact verification
- Operation with modest antennas and power levels
- Global communication despite language barriers
- Structured data exchange for emergency response

Digital modes are where amateur radio's past meets its future. We're still sending signals through the ether, just like Marconi. But now those signals carry emails, images, and data streams he never dreamed of. Pretty cool for a hobby that started with sparks and dots.

Your General license unlocks digital mode playgrounds across the HF spectrum. Whether you're drawn to FT8's weak signal magic, Winlink's emergency capabilities, or RTTY's nostalgic charm, there's a digital mode waiting for you. Boot up that computer, fire up the rig, and join the digital revolution.

Just remember to sync your clock first.
