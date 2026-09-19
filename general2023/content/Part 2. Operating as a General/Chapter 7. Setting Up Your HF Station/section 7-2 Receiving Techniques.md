---
chapter: "7"
section: "7.2"
questions: ["G4A13", "G4A01", "G4C02", "G4E07", "G4A03", "G4A07", "G4C03", "G4C04", "G4C01", "G4C08", "G4D04", "G4D06", "G4D05", "G4D07"]
status: draft2
---

### Section 7.2: Receiving Techniques

Most of your operating as a Technician was probably on FM, where the strongest signal usually captures the receiver and you hear only one station at a time. Single sideband—the voice mode you will use most on HF—works differently. Your receiver may pick up the station you want along with atmospheric static, distant thunderstorms, electrical noise from nearby electronics, and other stations close to the same frequency. A weak signal may not be gone; it may simply be buried, and the right tools and techniques can often bring it out.

The stations listening to you face the same challenges. Everything you learn here about overcoming noise and interference on receive will also help you understand how to send a clearer signal. We will cover that side in the next section. For now, let's look at the tools your HF transceiver gives you for hearing better.

#### When You Have Too Much Signal

Ever try looking into a shaded area on a bright, sunny day? You cannot see what is there because the bright light hides the subtle differences between light and dark. Put on sunglasses and suddenly you can see into the shadows. The sunglasses reduce the overwhelming brightness, letting your eyes work properly again.

An attenuator does much the same thing for your receiver:

> **Key Information:** The purpose of using a receive attenuator is to prevent receiver overload from strong incoming signals. {{< link id="G4A13" >}}

A very strong nearby station may overload your receiver, causing distortion or hiding weaker signals. Turning on the attenuator reduces all incoming signals, including the one you want. However, it may reduce the strong signal enough for the receiver to work properly again, allowing the weaker station to become readable.

Many HF transceivers include an attenuator that reduces the strength of incoming signals. It can be useful on crowded contest weekends, at Field Day when several transmitters are operating nearby, or whenever unusually strong signals are overloading your receiver.

#### Cleaning Up What You Hear

Even at comfortable signal levels, SSB never gives you the quiet background FM does. With no continuous carrier, there is no "full quieting"—the noise remains underneath, and a clear signal is simply one that stands well above it. To help, most receivers include three tools, each aimed at a different kind of noise or interference.

The first is for a problem you'll run into soon enough: a steady whistle parked right on top of a conversation you're trying to follow—often another station's carrier or a signal radiated by nearby electronics:

> **Key Information:** The notch filter found on many HF transceivers reduces interference from carriers in the receiver passband. {{< link id="G4A01" >}}

A notch filter cuts out a very narrow slice of frequencies, removing the offending tone—usually with little effect on the rest of the audio, though anything you want to hear that falls inside the notch is removed along with it. Manual versions let you tune the notch to exactly where the interference sits; automatic ones hunt it down for you.

Not every interfering source stays on one frequency. Ordinary electrical equipment can produce noise across a broad stretch of the dial, and the culprit may not look like radio equipment at all.

> **Key Information:** Arcing at a poor electrical connection can cause interference covering a wide range of frequencies. {{< link id="G4C02" >}}

Each tiny spark produces a brief electrical disturbance containing many frequencies, which can be heard as popping or buzzing. In a vehicle, there are several less obvious sources besides the ignition system:

> **Key Information:** A vehicle's battery charging system, fuel delivery system, and control computers can all cause receive interference to an installed HF transceiver. {{< link id="G4E07" >}}

These are examples, not an exhaustive list. Notice when noise starts or changes as equipment operates; that can help distinguish local electrical noise from a distant signal. A proper power connection does not prevent noise from being picked up by the antenna, and receiver controls cannot repair the source. Leave suspected power-line faults to the utility rather than approaching electrical hardware yourself.

The second receiver tool targets *impulse noise*: brief pulses such as the sharp popping from ignition systems, sparking power lines, and electric fences:

> **Key Information:** A noise blanker works by reducing receiver gain during a noise pulse. {{< link id="G4A03" >}}

A noise blanker watches for these sharp impulses and briefly reduces the receiver's gain when one arrives, blanking the pop out of the audio, then restores normal operation between pulses. It is intended for short pulse-type noise; it won't help much with steady noise.

For that steady noise—the ever-present hiss—there's DSP noise reduction. It analyzes the incoming audio, tries to distinguish signal from noise, and suppresses what it decides is noise. Light settings can lift a weak voice out of the hiss wonderfully. There's a catch, though:

> **Key Information:** As a receiver's noise reduction control level is increased, received signals may become distorted. {{< link id="G4A07" >}}

Crank the noise reduction too high and voices become distorted—watery, robotic, and hard to understand—as the algorithm starts guessing wrong about what is noise. Start low and increase gradually until the signal sounds clearer, backing off if it starts to sound strange.

With all of these tools: use what helps, turn off what doesn't. Every control changes the audio in some way.

#### When RF Gets into Audio Equipment

Those controls act on signals passing through your receiver. But sometimes an unwanted sound enters by another route. A cable connected to powered speakers can pick up RF, and components in the speakers' amplifier can unintentionally detect it, converting some of that RF into sound. The transmitter could be yours or someone else's; the audio device was never intended to be a radio receiver.

The sound can give you a clue about the transmission being picked up:

> **Key Information:**
> - RF interference from a single sideband phone transmitter can produce distorted speech in an audio device. {{< link id="G4C03" >}}
> - RF interference from a CW transmitter can produce on-and-off humming or clicking in an audio device. {{< link id="G4C04" >}}

For example, computer speakers might make broken, speech-like sounds while a nearby operator talks on SSB. With CW, the disturbance follows the carrier switching on and off. This is unintended detection, not the controlled process a receiver uses to recover intelligible speech or a clear CW tone. Changing your receiver's notch filter will not fix RF entering a separate speaker amplifier.

The remedy depends on where the RF enters. Recall from Chapter 1 that a capacitor offers less reactance at higher frequencies. A suitably chosen bypass capacitor can divert unwanted RF away from a susceptible point in an audio circuit while leaving the wanted audio substantially unaffected.

> **Key Information:** A bypass capacitor can be useful in reducing RF interference to audio-frequency circuits. {{< link id="G4C01" >}}

If the RF arrives as common-mode current on an audio cable, the ferrites from Chapter 2 offer another approach. Instead of modifying the circuit inside the equipment, a choke around the cable adds impedance to that unwanted RF current.

> **Key Information:** Placing a ferrite choke on an audio cable can reduce RF interference caused by common-mode current on that cable. {{< link id="G4C08" >}}

Neither remedy is universal: capacitor selection and placement matter, and a ferrite must be effective at the interfering frequency. Internal modifications are a job for someone familiar with the equipment. Also distinguish this RF pickup from the ground-loop hum discussed in Section 6.3; the sounds may be similar, but the entry paths and remedies differ. Identifying the path is more useful than trying every filter at random.

#### Understanding What the S-Meter Tells You

When you start tuning around HF, one of the first questions you'll have about any station is a simple one: how strong is it? The S-meter gives you the answer.

> **Key Information:**
> - An S meter measures received signal strength. {{< link id="G4D04" >}}
> - One S unit typically represents 6 dB change in signal strength. {{< link id="G4D06" >}}

The scale runs from S1 (barely detectable) through S9 (strong signal), then continues as "dB over S9" for really powerful signals—you may hear reports like "20 over S9" or "40 over S9." Remember from our discussion of decibels that 6 dB represents roughly a factor of four in power, so an S9 signal is about four times more powerful than S8 and sixteen times more powerful than S7.

The dB scale compresses huge power differences into manageable numbers:

> **Key Information:**
> - A signal that reads 20 dB over S9 is 100 times more powerful than one that reads S9. {{< link id="G4D05" >}}
> - Power output must be raised approximately 4 times to change the S meter reading on a distant receiver from S8 to S9. {{< link id="G4D07" >}}

Since 10 dB is a factor of ten in power, 20 dB is $10 \times 10 = 100$ times the power. That math has practical consequences: moving a distant station's meter up a single S-unit takes *four times* your current power—100 watts becomes 400 watts for one S-unit! This is why antenna improvements, which can add 3–6 dB or more, often beat power increases for improving your signal.

One thing to keep in mind: S-meters are not precision instruments. One radio's S9 might be another's S7—they're calibrated differently and respond differently to the same signal. Treat the reading as relative, not absolute. It's great for comparing two antennas, watching propagation change, or tracking a signal over time. When someone gives you a "59," it means "I can hear you fine"; a "52" means "you're weak but readable." Nobody is measuring to the decibel.

#### Listen First

All of these tools serve one habit that will make you a better operator than any accessory can: listening. The good news is you don't have to wait for your General license to start—receiving requires no privileges at all. Spend time tuning around now, learning what the bands sound like, how signals fade, and what the noise floor does at different times of day. By the time you're ready to transmit, the bands will already feel familiar.

Listening is also basic courtesy once you're on the air: a lot of frustration is caused when someone keys up in the five-second gap another operator left while taking a quick drink in the middle of their QSO!

Once you can reliably pull signals out of the noise, it's time to think about the other side of the contact. Every challenge you've just learned to fight—noise, fading, interference—the station trying to copy *you* is fighting too. Transmitting well means making their job as easy as possible, and that's where we go next.
