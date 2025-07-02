---
chapter: "8"
section: "8.1"
questions: ["G2A01", "G2A02", "G2A03", "G2A04", "G2A05", "G2A06", "G2A07", "G2A09", "G2B07", "G2B08"]
status: reviewed1
---

### Section 8.1: Getting Started on HF

Picture this: It's 3 AM, and you're wide awake in your shack. The house is quiet, but your radio is alive with voices from halfway around the world. A station in Japan is calling CQ, their signal bouncing off the ionosphere and landing crystal clear in your receiver. With your new General class privileges, this isn't just a dream—it's Tuesday night.

Welcome to HF, where the ionosphere becomes your personal worldwide repeater system. Unlike the predictable coverage of VHF/UHF, HF offers adventure. One moment the band seems dead, the next you're chatting with Antarctica. Let's unlock the secrets of successful HF operation.

#### Understanding HF Voice Modes

As a Technician, you likely focused on FM operation on VHF and UHF bands. On HF, single sideband (SSB) is the primary voice mode, and it works quite differently from FM. Here's what you need to know:

##### Sideband Selection: USB vs. LSB

> **Key Information:** *Upper sideband (USB) is most commonly used for voice communications on frequencies of 14 MHz or higher.* {{< link id="G2A01" >}}

![Diagram showing which sidebands are used on different bands](../images/sideband-selection.svg)

The HF bands follow a convention for which sideband to use:

> **Key Information:** *Lower sideband (LSB) is most commonly used for voice communications on the 160-, 75-, and 40-meter bands.* {{< link id="G2A02" >}}

This pattern continues into the VHF range:

> **Key Information:** *Upper sideband (USB) is most commonly used for SSB voice communications in the VHF and UHF bands.* {{< link id="G2A03" >}}

For the less commonly used bands:

> **Key Information:** *Upper sideband (USB) is most commonly used for voice communications on the 17- and 12-meter bands.* {{< link id="G2A04" >}}

Why does this matter? Try listening to someone using the wrong sideband—they'll sound like they're speaking through a kazoo underwater. Following the convention ensures everyone can understand each other.

The simple rule of thumb is: 
- **LSB**: Use on 160, 75, and 40 meters (below 10 MHz)
- **USB**: Use on 20, 17, 15, 12, 10 meters and all VHF/UHF bands (10 MHz and above)
- **Exception**: 60 meters uses USB despite being below 10 MHz

Why do we use LSB on lower bands and USB on higher bands? This is primarily a historical convention that began with equipment limitations of early SSB transceivers, but it's now firmly established as operating practice.

##### Advantages of SSB

Your first SSB experience might surprise you. Where's the squelch? Why does everyone sound like Donald Duck until you tune precisely? Don't worry—your ears will quickly adapt, and you'll discover why SSB dominates HF:

> **Key Information:** *Single sideband is the most commonly used voice mode on the HF amateur bands.* {{< link id="G2A05" >}}

> **Key Information:** *Less bandwidth used and greater power efficiency are advantages of single sideband compared to other analog voice modes on the HF amateur bands.* {{< link id="G2A06" >}}

![Diagram showing SSB efficiency compared to other voice modes](../images/ssb-bandwidth-efficiency.svg)

SSB transmits only one sideband of the amplitude-modulated signal, eliminating the carrier and other sideband:

> **Key Information:** *In single sideband, only one sideband is transmitted while the carrier and other sideband are suppressed.* {{< link id="G2A07" >}}

This efficiency translates to:
- Using approximately 1/3 the bandwidth of AM
- Concentrating power in the information-carrying part of the signal
- Better performance under marginal conditions
- More efficient use of limited spectrum space

Think of it this way: SSB is like a fuel-efficient car that can go three times farther on the same tank. When every watt counts for reaching distant stations, efficiency wins.

##### Why Most Amateur Stations Use LSB on Lower Bands

If you're wondering why there's this division between upper and lower bands:

> **Key Information:** *Most amateur stations use lower sideband on the 160-, 75-, and 40-meter bands because it is commonly accepted practice, not due to technical advantages.* {{< link id="G2A09" >}}

While the convention began partly due to early equipment designs, today it's simply standard practice. Using the opposite sideband will make your transmission sound unintelligible to others listening with the conventional sideband selected.

#### Choosing Frequencies and Making Contacts

With numerous frequencies available across multiple bands, how do you decide where to operate?

##### Following Band Plans

Ever wonder how thousands of hams share the bands without chaos? Band plans are our gentleman's agreement—voluntary guidelines that keep CW operators from accidentally landing in the middle of a phone roundtable:

> **Key Information:** *Following the voluntary band plan for the operating mode you are using is commonly accepted amateur practice when choosing a frequency on which to initiate a call.* {{< link id="G2B07" >}}

![Sample band plan showing different mode segments](../images/bandplan-example.svg)

Band plans typically divide each band into segments for different modes and activities:
- CW/digital modes at the lower end
- SSB phone in the middle portions
- Special interest modes or activities in designated segments

Consulting a current band plan before operating helps maintain harmony on the bands and ensures you're operating where others expect to find your mode.

##### Special Operating Segments

Some frequency ranges have special purposes:

> **Key Information:** *In the 50.1 MHz to 50.125 MHz band segment, stations within the 48 contiguous states should only contact stations not within the 48 contiguous states.* {{< link id="G2B08" >}}

This segment is reserved for DX (long distance) contacts. Stations in the continental US should use it only to contact stations outside the continental US, preserving this spectrum for intercontinental communication opportunities.

Similar special-purpose segments exist on other bands, including:
- DX windows
- Contest-preferred frequencies
- Digital mode clusters
- QRP (low power) calling frequencies

Pro tip: Print out current band plans and keep them at your operating position. Even experienced operators reference them regularly.

#### Practical Tips for Getting Started on HF

Now that you understand the basics, here are some practical suggestions for your first HF adventures:

##### Listening First

Before transmitting, spend time listening to different bands. This helps you:
- Learn the rhythm and etiquette of HF contacts
- Identify active frequencies and band openings
- Understand typical signal reports and exchanges
- Get comfortable with SSB reception
- Identify where the DX (distant) stations are operating

Here's a secret: The best HF operators have "golden ears" developed through hours of listening. They know when 20 meters opens to Europe, recognize the sound of long-path propagation, and can tell you which DX station has the best operating skills—all from listening.

##### Making Your First HF Contacts

When you're ready to transmit:

1. **Choose an appropriate band** based on time of day and current conditions:
   - Daytime: 20, 17, 15, 12, 10 meters often work best
   - Nighttime: 80, 60, 40 meters typically offer better propagation
   - 30 meters can work throughout day and night

2. **Find a clear frequency** by listening carefully for at least 30 seconds, then asking "Is this frequency in use?" followed by your callsign.

3. **Call CQ** using this format:
   "CQ CQ CQ, this is [your callsign], [phonetically spell callsign], calling CQ and standing by."
   
   For example: "CQ CQ CQ, this is W1ABC, Whiskey One Alpha Bravo Charlie, calling CQ and standing by."

4. **Responding to a CQ** requires a different approach:
   - Wait for the station to finish calling
   - Give the other station's callsign once, followed by your callsign phonetically
   
   For example: "W1XYZ, this is W1ABC, Whiskey One Alpha Bravo Charlie."

5. **Exchange information** typically including:
   - Signal report (using the RS system: Readability 1-5, Strength 1-9)
   - Your location (city and state or country)
   - Your name
   - Brief description of your equipment (optional)

6. **End the contact** with a courteous sign-off:
   "Thanks for the contact, [callsign]. This is W1ABC, clear."

##### Recommended First HF Bands

For your first HF experiences:

- **20 meters (14.0-14.350 MHz)** is often called the "workhorse band" because it frequently offers good propagation throughout the day and across seasons. The General class phone segment starts at 14.225 MHz.

- **40 meters (7.0-7.3 MHz)** provides reliable medium-distance communications during daylight and excellent long-distance potential at night. The General class phone segment starts at 7.175 MHz.

- **10 meters (28.0-29.7 MHz)** can offer exceptional worldwide propagation when open (mostly during solar cycle peaks) and uses equipment and antennas similar to VHF. The General class phone segment starts at 28.3 MHz.

#### Developing Your HF Approach

HF isn't instant gratification like hitting a repeater. Some nights you'll work the world with 5 watts; others, 100 watts won't get you past the state line. That unpredictability? That's not a bug—it's the feature that keeps us coming back.

Don't be discouraged if your first attempts at HF contacts aren't immediately successful. Even experienced operators sometimes spend hours calling without a response when conditions are poor. With time, you'll develop an intuitive feel for when and where to operate for the best results.

Think about your next QSO differently: Your voice will leave your antenna, rise hundreds of miles into space, reflect off an ionized layer of atmosphere heated by the sun, and descend to earth on another continent. If that doesn't give you goosebumps, check your pulse.

In the next section, we'll explore more advanced voice operating techniques that will help you make the most of challenging band conditions and special operating situations.