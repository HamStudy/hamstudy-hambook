### Section 6.6: Repeater Operation

Alright, let's talk about repeaters - the range-extending marvels of the ham radio world. These helpful devices take your signal and shout it from the rooftops (or mountaintops) for you.

#### What's a Repeater?

Imagine a radio relay station perched high up on a hill or tall building. It listens on one frequency and simultaneously retransmits what it hears on another. This extends your range way beyond what your little handheld or mobile rig could do on its own.

Now, only one signal can usefully exist on a given frequency at once, so the repeater can't talk on the same frequency you are talking on. Instead, when you transmit to a repeater, you're actually sending on one frequency (the input), and listening on another (the output). Don't worry, your radio will handle this automatically if you've set it up correctly.

#### Accessing Repeaters

Most repeaters require either a CTCSS (Continuous Tone-Coded Squelch System) tone, often called a PL (Private Line) tone, or a DCS (Digital Coded Squelch) code to access them. CTCSS is a low, inaudible tone you send along with your transmission. DCS, on the other hand, is a continuous stream of low-speed digital data. Both serve the same purpose: they help prevent interference and unintended activations of the repeater. Your radio can be set to transmit either type of squelch signal, depending on what the repeater requires. Check your local repeater directory or club information to find out which system a particular repeater uses.

#### Repeater Offsets

When using repeaters, you need to know about offsets. An offset is the difference between the repeater's input frequency (where it listens) and its output frequency (where it transmits). Your radio needs to be set to the correct offset to communicate through a repeater effectively.

Here's a handy table of common repeater offsets for various amateur radio bands:

| Band | Frequency Range | Common Offset |
|------|-----------------|---------------|
| 6m   | 50-54 MHz       | -500 kHz or -1 MHz |
| 2m   | 144-148 MHz     | ±600 kHz |
| 1.25m| 222-225 MHz     | -1.6 MHz |
| 70cm | 420-450 MHz     | ±5 MHz |
| 33cm | 902-928 MHz     | -12 MHz or -25 MHz |
| 23cm | 1240-1300 MHz   | -12 MHz or -20 MHz |

Remember, these are the most common offsets, but there can be exceptions:

- On 2 meters, repeaters above 147 MHz typically use a positive offset, while those below use a negative offset.
- Some areas might use non-standard offsets due to local frequency coordination.
- Certain repeaters, especially those on less common bands, might use split frequencies that don't follow these standard offsets.

Most modern radios can automatically set the correct offset based on the frequency you input, but it's always good to double-check. When in doubt, consult a local repeater directory or ask a fellow ham in your area.

Pro Tip: Some repeaters use "reverse splits" where the offset direction is opposite of what's normally used. Always listen first and check your local band plan and repeater listings

#### How Repeater Conversations Work

Here's how a typical repeater conversation flows:
1. You transmit on the input frequency (your radio adds the correct offset and tone).
2. The repeater picks up your signal and retransmits it on the output frequency.
3. Other hams in the area hear you on the repeater's output frequency.
4. When they respond, the process happens in reverse.

#### Repeater Etiquette

Repeater etiquette is important since these are shared resources:
- Listen before you transmit to avoid interrupting ongoing conversations.
- Keep transmissions reasonably short and leave pauses for others to join.
- Identify yourself using your callsign as required by FCC rules.
- If you want to join an ongoing conversation, wait for a pause and say your callsign.

Calling someone on a repeater is simple: just **say the call sign of the station you want to talk to, then "this is" and your call sign**. This is an example, not a fixed template you have to use! The main thing is to say their call sign first so you get their attention, then let them know who is calling. This is more of a convention than a rule, but it's still good to follow!

Like any equipment, the owner of the repeater gets to set the rules for its use (at least subject to FCC regulations). Keep in mind that each repeater may be a bit different in the conventions that people follow. No worries, though, because most hams are happy to help you get familiar with things when you're getting started -- though keep a thick skin, because some of us aren't as tactful as we probably should be! As with any group, just try to add more positivity than negativity and you'll find most groups are pretty welcoming.

#### Calling "CQ" on a repeater

Generally speaking we don't actually call "CQ" on a repeater – there isn't any reason we couldn't, but it is generally frowned upon with varying levels of intensity by different members of the community. When we're on a repeater we don't really need to get people's attention – usually someone will be listening to the repeater already – so the conventions tend to be more casual.  Here are some common phrases we use:

* *"This is KD7BBC, mobile and monitoring"* – indicating both that you are moving around and that you are on the frequency, presumably happy to talk to someone if they want.
* *"KF7KGR listening"* – shorter version of the same
* *"This is AC7DM. Anyone around to chat while I drive?" – more casual, but still fine
* *"This is NV7V, could I get a signal report?"* – indicates that you just want a short QSO to confirm how well you are getting into the repeater.

The specifics don't matter, as long as it's easy to understand and not deceptive; for example, don't be "that ham" who calls asking for a signal report and expects a long QSO.

Note also that conventions vary between different communities and repeaters; keep a thick skin for when someone is a bit tactless telling you about the local preferences and learn as you go!

### Finding Repeaters

So, you've got your radio ready, but how do you find a repeater to connect with? Luckily, finding repeaters is easier than ever thanks to a few handy resources:

1. **RepeaterBook**: This online and app-based platform is like a treasure map for hams. It’s community-driven, meaning it’s constantly updated by users like you. Just enter your location, and RepeaterBook will show you nearby repeaters, complete with frequency, offset, and tone information. It’s a must-have tool for any modern ham. Before you get too excited, though, remember that this resource is mostly maintained by community members, not the frequency coordinators themselves. It is usually pretty accurate, but there is no guarantee!

2. **Local Frequency Coordinators**: Every region has a frequency coordinator, a kind of “airwave traffic controller” who helps manage and assign repeater frequencies to avoid interference. Many coordinators have websites or can be contacted directly to provide up-to-date lists of repeaters in your area. If you’re unsure who your local coordinator is, a quick online search or a chat with a fellow ham can point you in the right direction.

3. **Web Search**: When all else fails, google it!

These resources will help you quickly find the repeaters you need, whether you're at home or on the go. Happy hunting!

#### Linked Repeater Systems

Imagine trying to pass a message across a line of friends, where each person repeats the message to the next. If you have enough friends, your message could travel quite a distance! Linked repeater systems work in a similar way, but instead of people, they use a network of repeaters that are electronically connected. This setup allows your signal to cover much greater distances, potentially spanning entire regions, states, or even countries!

When you transmit on one repeater in a linked system, your signal is instantly relayed to all the other repeaters in the network. This means someone listening on a linked repeater in another city or even across the country can hear you as clearly as if they were standing right next to you.

Linked repeater systems are super handy, especially in situations where wide-area communication is needed. For example, during an emergency, linked repeaters can help coordinate rescue efforts across a large area, ensuring everyone involved stays in touch, no matter where they are.

But, just like with any powerful tool, a little bit of caution goes a long way. Since your transmission can be heard over a large area, it’s important to keep your communications clear, concise, and to the point.

So, the next time you talk on a repeater, you may want to check: your voice might just be traveling farther than you think!

#### Internet-Linked Repeaters

Some repeaters aren’t just linked through the airwaves—they use the internet to connect with other repeaters across vast distances. This can happen behind the scenes, and as a user, you might not even notice that your signal is being relayed over the internet to other repeaters in different locations. These "passive" internet-linked repeaters extend your reach without any extra effort on your part.

#### User-Controlled Internet-Linked Repeaters

Now, let's dive into the world of repeaters that you can interact with and control directly through the internet. These systems don’t just relay your signal—they let you take control and connect with repeaters and hams all over the globe. Here are the two most popular systems you'll likely encounter:

**IRLP (Internet Radio Linking Project)**

Think of IRLP as a magic phone book for your radio. It connects repeaters and simplex nodes worldwide using the internet. To use it, you'll punch in DTMF tones—those beeps you hear when you press numbers on your phone. It's like dialing a phone number to chat with a ham on the other side of the planet! The best part? If your local repeater has IRLP, you can use it just like any other repeater. No special gadgets are needed on your end!

**EchoLink**

EchoLink is similar to IRLP, but with a twist—you can use it from your computer or phone, not just your radio! It's like having a ham radio in your pocket, even when you're nowhere near your shack. Some repeaters have EchoLink built-in, so you can use it without any extra steps. But if you want to use it directly from your device, you'll need to create an account by registering your call sign with EchoLink and providing proof that you are the licensee. It's like getting a backstage pass to a global radio concert!

Both of these systems use special stations called gateways to connect regular radio signals to the internet. Think of a gateway as a friendly translator who speaks both "radio" and "internet" fluently.

#### Why Use Repeaters?

Repeaters are excellent for local communications, emergency preparedness, and getting started in ham radio. They're a great way to meet other hams and learn about the local radio community. With internet-linked systems, you can even talk to hams around the world!

So find a local repeater, program it into your radio, and give it a try. Remember, when you key up that mic, you're connecting with fellow radio enthusiasts who share your passion for communication. Enjoy exploring the expanded world that repeaters open up for you! The best way to learn is to do.