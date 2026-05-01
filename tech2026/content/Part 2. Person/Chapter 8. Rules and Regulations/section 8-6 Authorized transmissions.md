---
chapter: "8"
section: "8.6"
questions: [ "T1C03", "T1D08", "T1D09", "T1D01", "T1C06", "T1F08", "T1F07", "T1D02", "T1D10", "T1D05", "T1D03", "T1D04", "T1D06", "T1A11" ]
state: complete
---

### Section 8.6: Authorized and Prohibited Transmissions

The "do's and don'ts" of amateur radio. Understanding what you can and can't transmit is part of operating legally and ethically — this section breaks it down.

#### Authorized Transmissions

Amateur radio is for personal use and self-training, not for business. Authorized transmissions cover the things the service exists for: technical experimentation, personal communications, emergency support, and education about the hobby itself.

##### Compensation: When You Can Get Paid

> **Key Information:** A control operator may receive compensation for operating an amateur station when the communication is part of classroom instruction at an educational institution. {{< link id="T1D08" >}}

Generally, you can't get paid for operating an amateur station — we're in this for the love of radio, not the paycheck. The classroom exception covers a teacher who operates the school's amateur station as part of teaching about radio. They're being paid to teach, not to operate the station.

Part 97 includes a few other narrow compensation exceptions, which we'll cover in the Prohibited Transmissions discussion below.

##### Emergency Communications

> **Key Information:** Amateur stations may transmit information in support of broadcasting, program production, or news gathering when such communications are directly related to the ***immediate safety of human life or protection of property***. {{< link id="T1D09" >}}

In a real emergency, the usual rules take a back seat — you're allowed to use any communication method necessary to get help. Section 97.403 specifies:

> No provision of these rules prevents the use by an amateur station of any means of radiocommunication at its disposal to provide essential communication needs in connection with the immediate safety of human life and immediate protection of property when normal communication systems are not available.

You may be called on to justify your decision afterward, so make sure it really was an emergency and that this really was the only way to address it.

##### Other Authorized Activities

Several other categories of transmissions are explicitly authorized:

- **Promoting the hobby**: Discussing ham radio activities, demonstrations, public outreach.
- **Disaster preparedness**: Practice, drills, and simulated emergency exercises.
- **Equipment testing**: Brief on-the-air tests, signal reports, and station adjustments.
- **One-way transmissions** (in specific cases): Morse code practice, beacons, telecommand, telemetry — covered in more detail below.

##### International Communications

> **Key Information:**
> - Permitted international communications are those incidental to the purposes of the Amateur Radio Service and remarks of a personal character. {{< link id="T1C03" >}}
> - You may operate from a US-documented vessel in international waters with the master's (captain's) permission. {{< link id="T1C06" >}}
> - FCC-licensed amateurs are prohibited from exchanging communications with any country whose administration has notified the ITU that it objects to such communications. {{< link id="T1D01" >}}

You can chat with hams worldwide, but the conversation has to remain personal or radio-related — no business communications crossing international borders any more than they're allowed domestically.

There are some countries you're not allowed to communicate with. The list isn't fixed (countries can change their stance), so we won't list them here. The mechanism is simple: a country tells the ITU it objects to amateur communication with its citizens, and US amateurs must not exchange communications with that country.

If you're operating from international waters on a US-documented vessel, you can use your US amateur license — provided the captain has approved it. ("Captain's ship, captain's rules," basically.) You'd still need to know and follow the rules of any country whose territorial waters you might enter.

#### Third-Party Communications

> **Key Information:**
> - Third-party communications are messages from a control operator (first party) of an amateur station to another amateur station's control operator (second party) on behalf of another person (third party). {{< link id="T1F08" >}}
> - When a non-licensed person speaks to a foreign amateur station via a station under the control of an FCC-licensed operator, the foreign station must be in a country with which the U.S. has a third-party agreement. {{< link id="T1F07" >}}

Ever wanted to let your non-ham friend use your radio? That — as well as passing messages on their behalf — counts as a third-party communication, and it comes with rules:

1. **What's the deal?** Third-party communication is when you're the middleman, passing a message from a non-ham to another station. Part 97 also allows that person to participate directly (speaking on the radio themselves), as long as the control operator is at the control point.

2. **Domestic third-party traffic**: Within the U.S., it's generally a free-for-all. Let your friends and family experience the magic of ham radio — subject to the usual rules about content and identification, and as long as a licensed amateur is at the control point.

3. **International third-party traffic**: This is where it gets tricky. Both countries need to have a third-party agreement on the books for it to be allowed. No agreement, no third-party comms with that foreign station — except in the case of emergency or disaster relief, which is always allowed.

4. **You're the boss**: When letting a non-ham use your station, you're responsible. Stay present and keep an ear on what's happening.

Part 97 specifies for international transmissions:

> Transmissions to a different country, where permitted, shall be limited to communications incidental to the purposes of the amateur service and to remarks of a personal character.

#### One-Way Transmissions

> **Key Information:** Broadcasting is the prohibited form of one-way transmission. The FCC defines broadcasting as transmissions intended for reception by the general public. {{< link id="T1D02" >}} {{< link id="T1D10" >}}

While amateur radio is primarily designed for two-way communications, several specific kinds of one-way transmissions are permitted:

- **Brief station adjustments and equipment tests**.
- **Establishing two-way communication** (calling CQ, for instance).
- **Telecommand** (controlling model aircraft, satellites, etc.).
- **Emergency communications** (when no two-way conversation is possible).
- **Morse code practice**.
- **Information bulletins** (like ARRL's W1AW broadcasts to the amateur community).
- **Telemetry** (data from satellites, beacons, etc.).
- **Beacon stations** (continuous one-way transmissions for propagation studies).

Note that these are exceptions, not the rule. The general principle remains that amateur radio is for two-way communications. The forbidden category — broadcasting — is specifically transmissions intended for the general public, not for other amateurs. An information bulletin to the amateur community is fine; a transmission intended to entertain or inform the general public is not.

#### Prohibited Transmissions

##### Commercial Communications

You generally can't use ham radio to conduct business or make money. Part 97 phrases this as prohibiting communications "in which the station licensee or control operator has a pecuniary interest, including communications on behalf of an employer."

There are a few specific exceptions in 97.113(a)(3):

> **Key Information:** Amateur radio operators may use their stations to notify other amateurs of equipment for sale or trade when selling amateur radio equipment and not on a regular basis. {{< link id="T1D05" >}}

In addition: 

- You can be paid when using the radio if you are participating on behalf of an employer in an emergency/disaster preparedness drill or testing in preparation for those drills (with some time limits — read up on it before doing so).
- You can be paid when using a radio as an incidental part of teaching a class (as discussed above under Compensation).
- A control operator for a club station can be paid for running the station when doing information bulletins or telegraphy — this has a bunch of weird requirements; look it up if you actually need it.

##### Encrypted Messages

> **Key Information:** Messages encoded to obscure their meaning may only be transmitted when sending control commands to space stations or radio control craft. {{< link id="T1D03" >}}

Generally, ham radio messages need to be in the open — anyone listening should be able to understand what's being said. The exception is for control: you can encrypt the commands you send to a satellite or to a radio-controlled aircraft or drone, because there's a real safety concern if someone else could take control of those systems.

##### Music

> **Key Information:** An amateur station may transmit music using a phone emission only when incidental to an authorized retransmission of manned spacecraft communications. {{< link id="T1D04" >}}

Playing music over the air isn't allowed — except in the very narrow case where you're retransmitting authorized communications from manned spacecraft (like the ISS), and there happens to be music in the audio. The astronauts get to play music; you don't.

##### Indecent or Obscene Language

> **Key Information:** Any language considered indecent or obscene is prohibited. {{< link id="T1D06" >}}

There's no FCC- or ITU-published list of forbidden words. The interpretation falls to the operator and the broader community, with the practical understanding that amateur transmissions can be heard by anyone — including children. Pretend your grandma is listening with your 4-year-old niece sitting on her lap and speak appropriately! Use good judgment.

##### Willful Interference

> **Key Information:** Willful or malicious interference is prohibited. {{< link id="T1A11" >}}

Intentionally disrupting another station — jamming a frequency, transmitting noise to drown out a contact, deliberately keying over someone — is prohibited and can result in serious FCC penalties. This is one of the few amateur radio rules that comes with real enforcement bite.

---

The essence of ham radio is two-way communication and experimentation. If what you're doing doesn't fit those purposes, it's probably not allowed. The next section covers the role that ties the rules to actual operation: the control operator.
