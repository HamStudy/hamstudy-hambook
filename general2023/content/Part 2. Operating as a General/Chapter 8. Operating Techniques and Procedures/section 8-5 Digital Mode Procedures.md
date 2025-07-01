---
chapter: "8"
section: "8.5"
questions: ["G2E01", "G2E02", "G2E03", "G2E04", "G2E05", "G2E06", "G2E07", "G2E08", "G2E09", "G2E10", "G2E11", "G2E12", "G2E13", "G2E14", "G2E15"]
status: generated
---

### Section 8.5: Digital Mode Operating Procedures

Digital modes represent one of the most innovative and rapidly evolving aspects of amateur radio. With your General class license, you now have access to extensive digital mode segments across all HF bands. These modes offer exceptional weak-signal performance, reliable text communication, and unique operating experiences that complement traditional voice and CW operation.

#### Getting Started with RTTY

Radioteletype (RTTY) is one of the oldest digital modes, dating back to mechanical teleprinters. Despite its age, RTTY remains popular for contests and general communication due to its robust performance and wide acceptance.

##### RTTY Fundamentals

> **Key Information:** *When sending RTTY signals via AFSK with an SSB transmitter, LSB is normally used.* {{< link id="G2E01" >}}

<img src="../images/rtty-afsk-generation.svg" alt="Diagram showing RTTY signal generation via AFSK" style="width: 450px; margin: 10px;">

While this might seem counterintuitive (since we typically use USB for frequencies above 10 MHz), historical convention established LSB as the standard for RTTY on all amateur bands. Using LSB with Audio Frequency Shift Keying (AFSK) produces the correct mark and space frequencies.

RTTY uses frequency shift keying with two specific tones:

> **Key Information:** *The most common frequency shift for RTTY emissions in the amateur HF bands is 170 Hz.* {{< link id="G2E06" >}}

<img src="../images/rtty-frequency-shift.svg" alt="Illustration of 170 Hz RTTY frequency shift" style="width: 400px; margin: 10px;">

This 170 Hz separation between mark and space tones has become the standard for amateur RTTY. While other shifts exist (notably 850 Hz for some commercial services), 170 Hz offers a good balance between narrow bandwidth and reliable separation of tones.

##### RTTY Troubleshooting

If you're having difficulty decoding RTTY signals:

> **Key Information:** *If you cannot decode an RTTY or other FSK signal even though it is apparently tuned in properly, the mark and space frequencies may be reversed, you may have selected the wrong baud rate, or you may be listening on the wrong sideband.* {{< link id="G2E14" >}}

<img src="../images/rtty-troubleshooting.svg" alt="Flowchart for RTTY troubleshooting" style="width: 450px; margin: 10px;">

Common RTTY problems and solutions include:
- **Reversed Mark/Space**: Try the "reverse" button in your software
- **Wrong Baud Rate**: Ensure you're using 45.45 baud (the standard for HF RTTY)
- **Wrong Sideband**: Confirm you're using LSB
- **Wrong Shift**: Verify your software is set for 170 Hz shift
- **Incorrect Tuning**: Align your receiving indicator with the RTTY signal on a waterfall display

RTTY operation requires more precise tuning than some other digital modes, but offers excellent reliability once properly configured.

#### Modern Digital Modes

While RTTY has a long history, newer digital modes offer superior performance for specific purposes:

##### WINLINK: Email via Radio

> **Key Information:** *Winlink is a wireless network to send and receive email on the internet, a form of Packet Radio, and a wireless network capable of both VHF and HF band operation.* {{< link id="G2E12" >}}

<img src="../images/winlink-system-overview.svg" alt="Diagram showing Winlink system components and operation" style="width: 450px; margin: 10px;">

This comprehensive digital communication system allows amateurs to:
- Send and receive email without internet infrastructure
- Access weather bulletins and other information
- Submit position reports and other structured data
- Communicate during emergencies when other systems fail

Winlink has become especially valuable for emergency communications, maritime operation, and remote exploration. The system's flexibility allows access via various digital protocols across multiple bands.

To facilitate messages moving between radio and internet systems:

> **Key Information:** *A Winlink Remote Message Server is also called a Gateway.* {{< link id="G2E13" >}}

<img src="../images/winlink-gateway-operation.svg" alt="Illustration of Winlink gateway functioning" style="width: 400px; margin: 10px;">

These gateway stations bridge the radio and internet worlds, enabling global message delivery. Gateway operators maintain specialized equipment that allows messages to flow seamlessly between radio networks and the internet.

##### VARA: Enhanced Digital Protocol

Another valuable digital protocol in the modern amateur's toolkit:

> **Key Information:** *VARA is a digital protocol used with Winlink.* {{< link id="G2E02" >}}

<img src="../images/vara-protocol-features.svg" alt="Chart comparing VARA with other digital protocols" style="width: 450px; margin: 10px;">

VARA offers significant advantages including:
- Adaptive operation that adjusts to changing conditions
- Higher throughput than many older protocols
- Excellent weak signal performance
- Compatibility with Winlink message handling

With its advanced features, VARA has become increasingly popular for both emergency communication and routine digital operation.

Like many digital modes, VARA can be affected by interference:

> **Key Information:** *Frequent retries or timeouts, long pauses in message transmission, and failure to establish a connection between stations are all symptoms of other signals interfering with a PACTOR or VARA transmission.* {{< link id="G2E03" >}}

These interference symptoms highlight the challenges of maintaining reliable digital communications in crowded band conditions.

##### FT8 and Related Modes: Weak Signal Champions

In recent years, FT8 has revolutionized digital communication on the HF bands:

> **Key Information:** *When using FT8, computer time accurate to within approximately 1 second is required.* {{< link id="G2E07" >}}

<img src="../images/ft8-time-synchronization.svg" alt="Diagram showing importance of time synchronization for FT8" style="width: 450px; margin: 10px;">

FT8's time-synchronized operation creates a structured framework where stations transmit and receive in specific 15-second intervals. This precision timing allows the mode to decode signals well below the noise floor, but requires accurate clock synchronization using internet time sources or GPS.

When operating FT8, proper frequency selection is crucial:

> **Key Information:** *When responding to a station calling CQ using FT8, you should find a clear frequency during the alternate time slot to the calling station.* {{< link id="G2E04" >}}

<img src="../images/ft8-alternating-transmission.svg" alt="Illustration of FT8 alternating time slot operation" style="width: 450px; margin: 10px;">

This alternating transmission pattern maximizes efficiency by allowing continuous communication flow without collisions. The waterfall display in FT8 software shows both your transmission window and the window of stations you're communicating with.

For all JT-family digital modes and related protocols:

> **Key Information:** *The standard sideband used for JT65, JT9, FT4, or FT8 digital signals when using AFSK is USB.* {{< link id="G2E05" >}}

Unlike RTTY, these newer modes standardized on USB regardless of band. This simplifies operation and eliminates one potential source of configuration errors.

##### Finding Digital Activity

Digital modes cluster in specific segments of each band:

> **Key Information:** *Most digital mode operations are commonly found between 14.070 MHz and 14.100 MHz on the 20-meter band.* {{< link id="G2E08" >}}

<img src="../images/digital-mode-band-segments.svg" alt="Chart showing digital mode frequency allocations" style="width: 450px; margin: 10px;">

Within this range, different modes typically use specific frequency ranges:
- 14.070-14.077 MHz: FT8, FT4, JS8Call
- 14.080-14.100 MHz: RTTY and traditional data modes

Similar clustering occurs on other bands, generally in the lower portion of General class privileges. A particularly common FT8 frequency:

> **Key Information:** *FT8 is commonly found between approximately 14.074 MHz and 14.077 MHz.* {{< link id="G2E15" >}}

This narrow range has become the standard meeting place for FT8 operators on 20 meters, with similar conventions on other bands.

#### Digital Mode Protocol Characteristics

Different digital modes have specific operational characteristics that affect how you interact with them:

##### PACTOR Connections

> **Key Information:** *Joining an existing contact between two stations using the PACTOR protocol is not possible, as PACTOR connections are limited to two stations.* {{< link id="G2E09" >}}

<img src="../images/pactor-connection-properties.svg" alt="Diagram showing PACTOR's point-to-point connection model" style="width: 400px; margin: 10px;">

PACTOR creates a dedicated link between two stations, unlike some other digital modes where multiple stations can communicate simultaneously. This point-to-point nature provides reliable error correction and flow control, but restricts communication to paired stations.

To establish a connection with a digital messaging system:

> **Key Information:** *Transmitting a connect message on the station's published frequency is the way to establish contact with a digital messaging system gateway station.* {{< link id="G2E10" >}}

Digital systems like packet nodes, Winlink gateways, and bulletin board systems listen for connect requests on their published frequencies. Once connected, these systems often offer menus of available services and capabilities.

##### AREDN: Mesh Networking for Emergencies

Beyond traditional digital modes, advanced networking systems offer powerful emergency communication capabilities:

> **Key Information:** *The primary purpose of an Amateur Radio Emergency Data Network (AREDN) mesh network is to provide high-speed data services during an emergency or community event.* {{< link id="G2E11" >}}

<img src="../images/aredn-mesh-network.svg" alt="Illustration of AREDN mesh network topology" style="width: 450px; margin: 10px;">

AREDN networks create resilient, high-bandwidth communication systems that can:
- Transport video, voice, and data simultaneously
- Operate independently of commercial infrastructure
- Self-heal when nodes become unavailable
- Scale as additional nodes join the network

These sophisticated systems represent the cutting edge of amateur radio's emergency communication capabilities, combining modern networking technology with amateur radio's independence from commercial infrastructure.

#### Practical Digital Operating Tips

Successful digital operation relies on proper setup and operating practices:

##### Signal Levels and ALC

For most digital modes, proper audio drive levels are critical:
- Set audio drive so ALC action is minimal or non-existent
- Use dedicated "DATA" modes on your transceiver when available
- Monitor your signal width on a waterfall display
- Avoid excessive power that might create splatter

<img src="../images/digital-signal-levels.svg" alt="Diagram showing proper vs improper digital signal levels" style="width: 450px; margin: 10px;">

A properly configured digital signal appears as a clean, straight trace on a waterfall display. Overdriven signals show "shoulders" or multiple parallel traces, indicating distortion that reduces effectiveness and potentially interferes with adjacent frequencies.

##### Computer Interface Considerations

Digital success depends heavily on proper computer-to-radio interfacing:
- Use high-quality USB or audio cables with appropriate shielding
- Install ferrite chokes on cables to reduce RF interference
- Ensure solid ground connections between equipment
- Consider dedicated interface devices with built-in isolation
- Configure your software with the correct COM ports and audio devices

##### Operating Etiquette

Digital modes have developed their own operating conventions:
- Use standardized macros and exchanges when available
- Keep transmissions brief, especially on busy channels
- Avoid unnecessarily high power levels
- Respond to calls directly rather than calling CQ on a busy frequency
- Leave space between signals on waterfall displays

#### The Evolution of Digital Communications

Digital modes continue to evolve rapidly, with new protocols emerging regularly. As a General class licensee, you're positioned to explore both established and cutting-edge digital communications.

These modes offer different advantages that complement traditional voice and CW operation:
- Reliable text communication under marginal conditions
- Automatic logging and contact verification
- Operation with modest antennas and power levels
- Global communication despite language barriers
- Structured data exchange for emergency response

Whether you're seeking DX contacts, participating in emergency preparedness, or simply exploring new facets of the hobby, digital modes offer exciting possibilities that extend far beyond what earlier generations of amateurs could have imagined.

The combination of computer technology and radio fundamentals creates a powerful synergy that continues to push the boundaries of what's possible in amateur radio communication. Your General class privileges provide the spectrum access needed to fully explore these fascinating modes across multiple bands and propagation conditions.
