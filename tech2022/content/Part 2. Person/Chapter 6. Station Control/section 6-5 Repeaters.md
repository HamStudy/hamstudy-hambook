---
questions: [ "T2A04", "T1F09", "T2B02", "T2B04", "T2B03", "T2A03", "T2A07", "T8C08", "T2A01", "T2A09", "T8C06", "T8C07", "T8C10", "T8C11", "T8C09" ]
---

### Section 6.5: Repeater Operation

Alright, let's talk about repeaters - the range-extending marvels of the ham radio world. These helpful devices take your signal and shout it from the rooftops (or mountaintops) for you.

#### What's a Repeater?

> **Key Information:** A *repeater station simultaneously retransmits the signal of another amateur station on a different channel (frequency)*. This type of amateur station is formally known as a *repeater station*. {{< link id="T1F09" >}}

Imagine a radio relay station perched high up on a hill or tall building. It listens on one frequency and simultaneously retransmits what it hears on another. This extends your range way beyond what your little handheld or mobile rig could do on its own.

Now, only one signal can usefully exist on a given frequency at once, so the repeater can't talk on the same frequency you are talking on. Instead, when you transmit to a repeater, you're actually sending on one frequency (the input), and listening on another (the output). Don't worry, your radio will handle this automatically if you've set it up correctly.

#### Repeater Offsets

> **Key Information:** *Repeater offset is the difference between a repeater's transmit and receive frequencies*. Common offsets are *plus or minus 600 kHz on 2 meters* and *plus or minus 5 MHz on 70 cm*. {{< link id="T2A07" >}} {{< link id="T2A01" >}} {{< link id="T2A03" >}}

When using repeaters, you need to know about offsets. An *offset is the difference between a repeater's transmit and receive frequencies*. Your radio needs to be set to the correct offset to communicate through a repeater effectively.

Here's a handy table of common repeater offsets for various amateur radio bands:

| Band | Frequency Range | Common Offset |
|------|-----------------|---------------|
| 6m   | 50-54 MHz       | -500 kHz or -1 MHz |
| 2m   | 144-148 MHz     | *±600 kHz* |
| 1.25m| 222-225 MHz     | -1.6 MHz |
| 70cm | 420-450 MHz     | *±5 MHz* |
| 33cm | 902-928 MHz     | -12 MHz or -25 MHz |
| 23cm | 1240-1300 MHz   | -12 MHz or -20 MHz |

Remember, these are the most common offsets, but there can be exceptions:

- On 2 meters, repeaters above 147 MHz typically use a positive offset, while those below use a negative offset.
- Some areas might use non-standard offsets due to local frequency coordination.
- Certain repeaters, especially those on less common bands, might use split frequencies that don't follow these standard offsets.

Most modern radios can automatically set the correct offset based on the frequency you input, but it's always good to double-check. When in doubt, consult a local repeater directory or ask a fellow ham in your area.

Pro Tip: You can use a VHF/UHF transceiver's "reverse" function to *listen on a repeater's input frequency*. This helps you determine if you can hear a station directly without going through the repeater—useful for checking signal quality or troubleshooting. {{< link id="T2B01" >}}

#### Accessing Repeaters

> **Key Information:** Most repeaters use *CTCSS tones or DCS codes* for access. Difficulties accessing a repeater could be caused by *improper offset, wrong CTCSS tone, or wrong DCS code*. *CTCSS (Continuous Tone-Coded Squelch System) is a sub-audible tone transmitted along with normal voice audio to open the squelch of a receiver*. {{< link id="T2B02" >}} {{< link id="T2B04" >}}

Most repeaters require either a CTCSS (Continuous Tone-Coded Squelch System) tone, often called a PL (Private Line) tone, or a DCS (Digital Coded Squelch) code to access them. *CTCSS is a sub-audible tone transmitted along with normal voice audio to open the squelch of a receiver*. DCS, on the other hand, is a continuous stream of low-speed digital data. 

Both serve the same purpose: they help prevent interference and unintended activations of the repeater. Your radio must be set to transmit the correct CTCSS tone or DCS code for the repeater to even recognize your signal. Check your local repeater directory or club information to find out which system a particular repeater uses.

> **Key Information:** *DTMF (Dual-Tone Multi-Frequency) uses pairs of audio tones* for sending commands to repeaters and accessing systems like IRLP, but is different from CTCSS/DCS which are required for basic repeater access.

You'll also encounter DTMF (Dual-Tone Multi-Frequency) in repeater operation. *DTMF uses pairs of audio tones* and is the same technology used in touch-tone phones. Unlike CTCSS or DCS, DTMF is not used for basic repeater access but instead for controlling repeater functions, activating links to other systems, or accessing internet-connected systems like IRLP.

If you're having trouble accessing a repeater whose output you can hear, there could be several reasons:
- *You're using the wrong offset*
- *You're using the wrong CTCSS tone*
- *You're using the wrong DCS code*
- You're too far away or in a poor location for your signal to reach the repeater

Always double-check all these settings when programming a new repeater into your radio.

#### How Repeater Conversations Work

> **Key Information:** When calling another station on a repeater, *say the station's call sign, then identify with your call sign*. {{< link id="T2A04" >}}

Here's how a typical repeater conversation flows:
1. You transmit on the input frequency (your radio adds the correct offset and tone).
2. The repeater picks up your signal and retransmits it on the output frequency.
3. Other hams in the area hear you on the repeater's output frequency.
4. When they respond, the process happens in reverse.

Calling someone on a repeater is simple: just *say the call sign of the station you want to talk to, then identify with your call sign*. For example: "W1ABC, this is K2XYZ." This is more of a convention than a rule, but it's an appropriate way to get someone's attention on a repeater.

#### Repeater Etiquette

Repeater etiquette is important since these are shared resources:
- Listen before you transmit to avoid interrupting ongoing conversations.
- Keep transmissions reasonably short and leave pauses for others to join.
- Identify yourself using your callsign as required by FCC rules.
- If you want to join an ongoing conversation, wait for a pause and say your callsign.

Like any equipment, the owner of the repeater gets to set the rules for its use (subject to FCC regulations). Keep in mind that each repeater may be a bit different in the conventions that people follow.

#### Calling on a Repeater

> **Key Information:** To indicate you're listening on a repeater and looking for a contact, *use your call sign followed by the word "monitoring"*. {{< link id="T2A09" >}}

Generally speaking we don't actually call "CQ" on a repeater – there isn't any reason we couldn't, but it is generally frowned upon with varying levels of intensity by different members of the community. Instead, to indicate that you're listening on a repeater and looking for a contact, *use your call sign followed by the word "monitoring"*. For example: "K2XYZ monitoring."

Here are some other common phrases:
* *"This is KD7BBC, mobile and monitoring"* – indicating both that you are moving around and that you are on the frequency, presumably happy to talk to someone if they want.
* *"KF7KGR listening"* – shorter version of the same
* *"This is AC7DM. Anyone around to chat while I drive?"* – more casual, but still fine
* *"This is NV7V, could I get a signal report?"* – indicates that you aren't looking for a QSO, just to confirm how well you are getting into the repeater.

The specifics don't matter, as long as it's easy to understand and not deceptive.

#### Repeater vs. Direct Communication

When communicating through a repeater, you're operating in duplex mode since you're using two different frequencies (the repeater's input and output). This is different from direct station-to-station communication (called simplex operation), which we'll discuss in more detail in Section 7.1.

> **Key Information:** When using a repeater, you're transmitting and receiving on different frequencies. This contrasts with simplex operation where stations transmit and receive on the same frequency.

Sometimes, frequencies in band plans are specifically designated for direct station-to-station communication without using repeaters. This helps keep repeaters available for those who truly need their range-extending capabilities. We'll cover simplex operation and designated simplex frequencies more thoroughly in Section 7.1.

#### Linked Repeater Systems

> **Key Information:** A linked repeater network is one where *signals received by one repeater are transmitted by all the repeaters in the network*. {{< link id="T2B03" >}}

Imagine trying to pass a message across a line of friends, where each person repeats the message to the next. Linked repeater systems work in a similar way, but instead of people, they use a network of repeaters that are electronically connected. In a *linked repeater network, signals received by one repeater are transmitted by all the repeaters in the network*.

This setup allows your signal to cover much greater distances, potentially spanning entire regions, states, or even countries! When you transmit on one repeater in a linked system, your signal is instantly relayed to all the other repeaters in the network. This means someone listening on a linked repeater in another city or even across the country can hear you as clearly as if they were standing right next to you.

Linked repeaters are particularly valuable for:
- Emergency communications across wide areas
- Club nets that span multiple cities or counties
- Special events where coordination is needed across a large region
- Allowing mobile operators to stay connected while traveling long distances

#### Internet-Linked Repeaters

> **Key Information:** Voice Over Internet Protocol (VoIP) is a *method of delivering voice communications over the internet using digital techniques*. {{< link id="T8C07" >}}

Some repeaters aren't just linked through the airwaves—they use the internet to connect with other repeaters across vast distances. This is often done using Voice Over Internet Protocol (VoIP), which is a *method of delivering voice communications over the internet using digital techniques*.

#### User-Controlled Internet-Linked Repeaters

> **Key Information:** IRLP access is accomplished *by using DTMF signals*. To use EchoLink, you must *register your call sign and provide proof of license*. {{< link id="T8C06" >}} {{< link id="T8C10" >}}

Now, let's dive into systems that you can interact with and control directly. These systems don't just relay your signal—they let you take control and connect with repeaters and hams all over the globe:

**IRLP (Internet Radio Linking Project)**

The Internet Radio Linking Project (IRLP) is *a technique to connect amateur radio systems, such as repeaters, via the internet using Voice Over Internet Protocol (VoIP)*. Think of IRLP as a magic phone book for your radio. It connects repeaters and simplex nodes worldwide using the internet. {{< link id="T8C08" >}}

To use it, you'll punch in DTMF tones—those beeps you hear when you press numbers on your phone. *Over-the-air access to IRLP nodes is accomplished by using DTMF signals*. It's like dialing a phone number to chat with a ham on the other side of the planet!

**EchoLink**

EchoLink is similar to IRLP, but with a twist—it enables an *amateur station to transmit through a repeater without using a radio to initiate the transmission*. You can use it from your computer or phone, not just your radio! {{< link id="T8C09" >}}

*Before using the EchoLink system, you must register your call sign and provide proof of license*. This verification process ensures that only licensed amateurs can access the system. It's like getting a backstage pass to a global radio concert!

Both of these systems use special stations called *gateways* to connect regular radio signals to the internet. An amateur radio station that connects other amateur stations to the internet is called *a gateway*. {{< link id="T8C11" >}}

#### Why Use Repeaters?

Repeaters are excellent for local communications, emergency preparedness, and getting started in ham radio. They're a great way to meet other hams and learn about the local radio community. With internet-linked systems, you can even talk to hams around the world!

So find a local repeater, program it into your radio, and give it a try. Remember, when you key up that mic, you're connecting with fellow radio enthusiasts who share your passion for communication. Enjoy exploring the expanded world that repeaters open up for you! The best way to learn is to do.
