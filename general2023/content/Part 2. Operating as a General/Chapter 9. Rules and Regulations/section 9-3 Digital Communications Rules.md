---
chapter: "9"
section: "9.3"
questions: ["G1C07", "G1B04", "G1B05", "G1B07", "G1E03", "G1E07", "G1E08"]
status: reviewed1
---

### Section 9.3: Digital Communications Rules

Welcome to the wild west of amateur radio—except it's not that wild anymore. Digital modes have transformed from exotic experiments into everyday communication tools, and with that evolution comes a framework of rules designed to keep our digital playground both innovative and orderly.

As a new General, you're about to discover modes that can punch through noise floors that would swallow voice communications whole. But first, let's decode the regulations.

#### Rolling Your Own: New Digital Protocols

Imagine you've just invented the next FT8—a mode so efficient it can decode signals buried 30 dB below the noise floor using nothing but good intentions and phase shifts. Exciting! But before you fire up that revolutionary new mode:

> *Key Information:* *Before using a new digital protocol on the air, you must publicly document the technical characteristics of the protocol.* {{< link id="G1C07" >}}

![Diagram showing protocol documentation process](../images/digital-protocol-documentation.svg)

This isn't bureaucratic gatekeeping—it's the opposite. The FCC essentially says, "Go ahead, innovate! Just tell everyone how it works." No approval needed, no forms to file, just transparency.

Your documentation recipe should include:
- How the modulation works (the secret sauce)
- Bandwidth requirements (how much spectrum you're eating)
- Symbol rates and timing
- Error correction methods (if any)
- Enough detail for others to build compatible systems

Post it on your blog, publish in QST, present at your radio club—anywhere public counts. The goal? Keep amateur radio open. When everyone can decode everyone else's signals (at least in theory), we maintain the community spirit that makes ham radio special.

#### What Can We Send? The Transmission Rules

Digital modes open doors to automated operation and information sharing, but not everything goes:

> *Key Information:* *Occasional retransmission of weather and propagation forecast information from US government stations is permitted for all amateur stations.* {{< link id="G1B04" >}}

![Chart showing permitted and prohibited retransmissions](../images/permitted-retransmissions.svg)

Notice that word "occasional"? It's doing heavy lifting here. Sharing this morning's solar flux numbers from WWV during a net? Perfect. Setting up an automated beacon that rebroadcasts NOAA weather every 15 minutes? That crosses the line from occasional to constant.

The spirit here: Amateur radio can help spread useful information, but we're not a broadcast service.

Speaking of helping others learn:

> *Key Information:* *Transmissions to assist with learning the International Morse code are permitted as one-way transmissions.* {{< link id="G1B05" >}}

This exception keeps the tradition alive. W1AW's code practice, your local club's slow-speed CW sessions, even your personal code practice beacon (properly identified, of course)—all explicitly blessed by the FCC. Because even in our digital age, there's something magical about the original digital mode.

#### Digital Abbreviations: When UR 2 CRYPTIC

Digital modes love abbreviations. Packet uses them. PSK31 thrives on them. But where's the line?

> *Key Information:* *Abbreviations and procedural signals may be used if they do not obscure the meaning of a message.* {{< link id="G1B07" >}}

![Examples of acceptable and unacceptable abbreviations](../images/digital-abbreviations.svg)

The test is simple: Could another ham reasonably understand your transmission?
- "QTH UR 599 IN CALIF" = Obviously fine
- "THE WX HR IS SUNNY" = No problem
- "XYZ ABC 123 QQQ" = What are you hiding?

Standard abbreviations, Q-signals, and common digital shortcuts are your friends. Creating your own secret code that only you and your buddy understand? That's a one-way ticket to an FCC notice.

#### Automatic Control: When Robots Answer

Digital stations often run unattended—think Winlink gateways, APRS digipeaters, or packet BBSs. But even robots need rules:

> *Key Information:* *When communicating with a digital station operating under automatic control outside the automatic control band segments, the station initiating the contact must be under local or remote control.* {{< link id="G1E03" >}}

![Diagram showing automatic control requirements](../images/automatic-control-requirements.svg)

Translation: That Winlink gateway can sit there all day automatically responding to connection requests. But you, the human making the connection, need to be actively controlling your station—either sitting at the radio (local) or controlling it over the internet (remote).

Why? Because someone needs to take responsibility if things go sideways. The gateway can't decide to QSY if it's causing interference—but you can.

#### The Wi-Fi Temptation

Your 2.4 GHz amateur privileges overlap with Wi-Fi channels. Your ham radio can technically speak Wi-Fi's language. So why not bridge the gap?

> *Key Information:* *Amateur stations may not communicate with non-licensed Wi-Fi stations in any part of the 2.4 GHz band.* {{< link id="G1E07" >}}

![Chart showing 2.4 GHz band usage](../images/wifi-band-restrictions.svg)

The wall between amateur radio and Part 15 (unlicensed) devices is absolute. You can't connect your ham station to the coffee shop's Wi-Fi, even if you have the technical skills to do it. You can't set up a cross-band repeater that bridges 2 meters to your home network.

What you CAN do: Build your own amateur-only high-speed network using Wi-Fi technology but following amateur rules (proper ID, no encryption, etc.). Several groups have created impressive regional amateur data networks this way—just no mixing with consumer Wi-Fi.

#### Spread Spectrum: With Great Bandwidth Comes Little Power

Spread spectrum trades bandwidth for reliability, spreading signals across a wide swath of spectrum. It's incredibly resistant to interference, which sounds perfect for amateur radio. There's just one catch:

> *Key Information:* *The maximum PEP output allowed for spread spectrum transmissions is 10 watts.* {{< link id="G1E08" >}}

![Chart showing spread spectrum power limits compared to other modes](../images/spread-spectrum-power-limits.svg)

Ten watts. Not 100, not 1500—ten. That's QRP territory, whether you like it or not.

Why so stingy? Spread spectrum signals are bandwidth hogs. A 10-watt spread spectrum signal affects more spectrum than a 1500-watt CW signal. The power limit keeps these wide signals from steamrolling other users.

But don't dismiss spread spectrum because of the power limit. Ten watts of properly implemented spread spectrum can be remarkably effective, especially for local and regional digital networks.

#### Digital Band Planning: Finding Your Frequency

Unlike phone operation where you can pretty much transmit anywhere in the phone bands, digital modes have evolved their own neighborhoods:

![Chart showing digital mode frequency allocations across bands](../images/digital-mode-allocations.svg)

Each digital mode has its preferred hangouts:
- **PSK31**: Usually found near the bottom of phone bands
- **FT8**: Has claimed specific frequencies on each band (like 14.074 MHz)
- **RTTY**: Traditional spots that haven't changed in decades
- **Packet**: VHF/UHF frequencies coordinated locally

These aren't FCC regulations—they're gentleman's agreements that keep different modes from stepping on each other. Following them isn't legally required, but it's like using your turn signal: technically optional in a parking lot, but everyone appreciates when you do it.

#### Operating Digital: Practical Magic

Now that you know the rules, here's how to be a good digital citizen:

**Audio Levels Matter**: Overdriving your digital signal doesn't make it louder—it makes it wider. That PSK31 signal that should be 31 Hz wide? Overdrive it and you're splattering across 200 Hz, wiping out six other QSOs. Watch your ALC meter—it should barely move.

**Know Your Mode**: Keep notes on the modes you use. When someone asks "What's that signal?", you should be able to point them to resources. Being an ambassador for your favorite mode grows the community.

**ID Properly**: Yes, even on digital. Most software handles this automatically, but verify it's working. Some modes (like FT8) have shortened ID protocols—use them correctly.

**Respect the Neighborhoods**: If you hear a bunch of FT8 signals on 14.074, don't fire up your RTTY there just because it's legal. Find where RTTY operators congregate.

**Power Wisdom**: Just because you can run 1500 watts on digital doesn't mean you should. Many digital modes work brilliantly at 25-50 watts. Save the kilowatt for when you really need it.

#### The Digital Future Is Now

Digital modes aren't the future of amateur radio—they're the present. From FT8 making contacts possible when conditions are abysmal, to Winlink providing email when infrastructure fails, to high-speed data modes pushing megabits through amateur spectrum, digital has become essential to modern ham radio.

The rules we've covered aren't meant to restrict innovation—they're designed to enable it while keeping our bands functional for everyone. As you explore digital modes with your new General privileges, remember that today's experimental protocol might be tomorrow's emergency communications standard.

Ready to see what antenna and station regulations your General license brings? The next section takes us from the digital domain to the physical realm of towers, antennas, and RF exposure.