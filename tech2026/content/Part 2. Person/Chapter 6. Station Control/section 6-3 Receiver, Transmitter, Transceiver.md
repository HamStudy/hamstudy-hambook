---
chapter: "6"
section: "6.3"
questions: [ "T7A01", "T7A04", "T7A05", "T7A11", "T7A03", "T7A08", "T7A02", "T7A06", "T7A10", "T7A09", "T9A07" ]
status: publish1
---

### Section 6.3: Receiver, Transmitter, Transceiver

A ham radio does two things: it picks up signals from the air and turns them into sound, and it takes your voice and sends it out as a signal. Most modern gear does both in one box, but the two functions are worth understanding separately — they're different jobs with different parts.

#### What is a Receiver?

The receiver is your radio's ears. It picks up those invisible waves floating through the air and turns them into something you can hear. A good receiver is like a skilled eavesdropper at a party — it can pick out the conversation you want to hear even when there's a lot of noise around.

> **Key Information:**
> - A receiver's ability to detect the presence of a signal is its sensitivity. {{< link id="T7A01" >}}
> - A receiver's ability to discriminate between multiple signals is its selectivity. {{< link id="T7A04" >}}

A more sensitive receiver can pick up fainter signals, letting you hear distant or low-power stations more clearly. Good selectivity helps you focus on the station you want without interference from nearby frequencies. You can think of sensitivity as "how soft a whisper you can hear" and selectivity as "how well you can pick one voice out of a crowd."

Inside the receiver, a key component called a mixer combines the incoming radio frequency (RF) signal with a signal from a local oscillator.

> **Key Information:**
> - A circuit that generates a signal at a specific frequency is an oscillator. {{< link id="T7A05" >}}
> - A mixer is used to convert a signal from one frequency to another. {{< link id="T7A03" >}}

When the oscillator's signal is mixed with the RF signal, the output contains frequencies equal to the sum and difference of the two — which is how a receiver tunes different incoming frequencies down to a fixed intermediate frequency that it can filter and amplify efficiently.

The oscillator you're actually adjusting when you turn the tuning knob is a special one called the Variable Frequency Oscillator (VFO). The name comes from early radio days when most oscillators used crystals that were fixed to a single frequency — if you wanted to change frequencies, you had to swap crystals. The VFO was the breakthrough that made the frequency *variable*, and the name stuck even though modern radios handle this digitally.

> **Key Information:** The function of the VFO is to set the receive and transmit frequency. {{< link id="T7A11" >}}

#### What is a Transmitter?

A transmitter is your radio's mouth. It takes your voice (or data) and combines it with an RF carrier signal so it can travel through the air as radio waves. That combination process has a name:

> **Key Information:** Combining speech with an RF carrier signal is called modulation. {{< link id="T7A08" >}}

Think of it as wrapping your voice in an electromagnetic wave instead of a sound wave, so your radio can broadcast it far and wide.

#### What is a Transceiver?

Most modern ham radio equipment combines the receiver and transmitter into one neat package called a transceiver.

> **Key Information:** A transceiver is a device that combines a receiver and transmitter. {{< link id="T7A02" >}}

One moment it's listening, the next it's talking. Flip a switch (or press a button) and you go from receiving to transmitting.

For Technician class operators, you're most likely going to be using a VHF/UHF transceiver. These come in two main flavors:

- **Handheld Transceivers (HTs)**: These handy little radios fit right in your hand — hence the name. Since you can walk around and talk with them, some people call them "walkie-talkies." They're portable, battery-powered, and perfect for local communications. Great for emergency prep or chatting while hiking.
- **Mobile Transceivers**: These pack more punch and are designed to be installed in a vehicle or used as a base station at home. They usually have more power and features than HTs.

Both types do essentially the same job — they receive and transmit. The main differences are in power output, features, and of course, size.

#### Extending Your Reach

There are two common types of accessory devices referenced on the test that hams use to extend their operating capabilities: **transverters** and **amplifiers**. They solve different problems.

##### Transverters

A transverter shifts the frequencies a transceiver works on, letting you operate on bands the radio wasn't designed for.

> **Key Information:** A device that converts the RF input and output of a transceiver to another band is a transverter. {{< link id="T7A06" >}}

For example, you might use a transverter to operate on a VHF or UHF band using an HF transceiver — useful for accessing bands your primary radio doesn't cover.

##### Power Amplifiers

A power amplifier increases the strength of the signal coming out of a transceiver, helping it reach further.

> **Key Information:**
> - An RF power amplifier can be added to the output of a transceiver to increase the transmitted output power. {{< link id="T7A10" >}}
> - The SSB or CW-FM switch on a VHF power amplifier sets the amplifier for proper operation in the selected mode. {{< link id="T7A09" >}}

More power isn't usually the best solution — before reaching for an amplifier, check your antenna and feed line, since improvements there will almost always give you more bang for your buck than brute force.

Some VHF/UHF power amplifiers have an SSB/CW-FM switch because SSB, CW (Continuous Wave, or Morse code), and FM have different signal characteristics, and the amplifier needs to handle each appropriately.

#### Using a Handheld Inside a Vehicle

> **Key Information:** A drawback of using a handheld VHF transceiver inside a vehicle without an external antenna is reduced signal strength due to the shielding effect of the vehicle. {{< link id="T9A07" >}}

The metal body of a vehicle reflects and absorbs VHF and UHF signals, blocking or substantially reducing the radio waves an HT's rubber duck is trying to send out or receive. The result is dramatically reduced range from inside the vehicle, and your signal reports will suffer accordingly. In addition, depending on the length of your antenna it might just be really difficult to use without turning it on its side, which would alter the polarization of your signal!

For better performance consider one or more of these suggestions:

- Use an external antenna, mounted on the outside of the vehicle.
- Hold the radio near a window where metal obstructions are minimized.
- Use a properly installed mobile radio instead of a handheld.

> Reminder: Any time you are driving, safety comes first — use hands-free options or wait until you're stopped to operate your radio. Also be aware of the laws in your area, it may be illegal to operate a radio while driving!

---

Knowing what's inside your radio is one thing; knowing which knob does what is another. The next section walks through the controls you'll actually use.
