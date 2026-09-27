---
chapter: "7"
section: "7.2"
questions: ["G4A13", "G4A01", "G4C02", "G4A03", "G4E07", "G4A07", "G4C03", "G4C04", "G4C01", "G4C08", "G4D04", "G4D06", "G4D05", "G4D07"]
status: draft3
---

### Section 7.2: Receiving Techniques

Most of your operating as a Technician was probably on FM, where the strongest signal usually captures the receiver and you hear one station at a time. Single sideband—the voice mode you'll use most on HF—works differently. Your receiver may pick up the station you want along with atmospheric static, distant thunderstorms, electrical noise from nearby electronics, and other stations close to the same frequency. A weak signal may not be gone; it may simply be buried, and the right tools can often bring it out.

#### When You Have Too Much Signal

Ever try looking into a shaded area on a bright, sunny day? The glare hides the subtle differences between light and dark. Put on sunglasses and you can suddenly see into the shadows—cutting the overwhelming brightness lets your eyes work properly again.

An attenuator does much the same thing for your receiver:

> **Key Information:** The purpose of using a receive attenuator is to prevent receiver overload from strong incoming signals. {{< link id="G4A13" >}}

A very strong nearby station can overload your receiver, causing distortion or hiding weaker signals. The attenuator reduces everything coming in, including the station you want—but if that is enough to get the receiver working properly again, the weak station becomes readable. It earns its keep on crowded contest weekends, at Field Day with several transmitters running nearby, or any time unusually strong signals are swamping everything else.

#### Cleaning Up What You Hear

Even at comfortable signal levels, SSB never gives you the quiet background FM does. With no continuous carrier there is no "full quieting"—the noise stays underneath, and a clear signal is simply one that stands well above it. Most receivers include three tools for the job, each aimed at a different kind of noise.

The first handles a steady whistle parked on top of the conversation you're trying to follow—often another station's carrier, or something radiated by nearby electronics.

> **Key Information:** The notch filter found on many HF transceivers reduces interference from carriers in the receiver passband. {{< link id="G4A01" >}}

A notch filter cuts out a very narrow slice of frequencies, removing the offending tone with little effect on the rest of the audio—though anything you wanted to hear inside that slice goes with it. Manual versions let you tune the notch to where the interference sits; automatic ones hunt it down for you.

A narrow notch only fixes narrow problems. Plenty of interference is smeared across a wide stretch of the dial, and the culprit is often not radio equipment at all—it may be ordinary electrical hardware with a connection that has corroded or worked loose.

> **Key Information:** Arcing at a poor electrical connection can cause interference covering a wide range of frequencies. {{< link id="G4C02" >}}

Each tiny spark is an abrupt burst of current, and an abrupt burst carries energy across many frequencies at once, so you hear popping or buzzing rather than a tone. Those sparks do have something useful in common: they arrive as brief pulses with quiet gaps in between, which is exactly what the second tool exploits.

> **Key Information:** A noise blanker works by reducing receiver gain during a noise pulse. {{< link id="G4A03" >}}

A noise blanker watches for sharp impulses and drops the receiver's gain for the instant one arrives, punching the pop out of the audio before restoring normal gain. Ignition systems, sparking power lines, and electric fences all produce this kind of *impulse noise*. Steady noise gives the blanker nothing to work with.

A vehicle shows both halves of the problem at once. Ignition noise is the famous one, but it has company:

> **Key Information:** A vehicle's battery charging system, fuel delivery system, and control computers can all cause receive interference to an installed HF transceiver. {{< link id="G4E07" >}}

A modern car is full of switching electronics, so treat those as examples rather than a complete list. Some of it pops, which the blanker handles nicely; some of it is a steady whine that rises and falls with engine speed, which the blanker ignores. Noticing when noise starts or changes as equipment switches on is the quickest way to tell local electrical noise from something arriving on the antenna. Suspected power-line faults are worth reporting to the utility rather than investigating yourself.

For steady noise—the whine, the hash, the ever-present hiss—the third tool works differently. A noise reduction control analyzes the incoming audio, tries to sort speech from noise, and suppresses whatever it decides is noise. That sorting is done digitally, which is why the control is often labeled DSP or NR. Light settings can lift a weak voice out of the hiss wonderfully. There is a catch:

> **Key Information:** As a receiver's noise reduction control level is increased, received signals may become distorted. {{< link id="G4A07" >}}

Crank it too high and voices turn watery and robotic as the processing starts guessing wrong about what is noise. Start low and work up until the signal sounds clearer, backing off if it starts to sound strange.

Use what helps and turn off what doesn't; every one of these controls changes the audio in some way.

#### When RF Gets into Audio Equipment

Those controls act on signals passing through your receiver. Sometimes an unwanted sound arrives by another route entirely: a cable connected to powered speakers picks up RF, and components in the speakers' amplifier detect it, turning some of that RF into sound. The transmitter might be yours or a neighbor's; the audio device was never meant to be a radio receiver.

What you hear hints at what is being picked up:

> **Key Information:**
> - RF interference from a single sideband phone transmitter can produce distorted speech in an audio device. {{< link id="G4C03" >}}
> - RF interference from a CW transmitter can produce on-and-off humming or clicking in an audio device. {{< link id="G4C04" >}}

Computer speakers might make broken, speech-like sounds while a nearby operator talks on SSB; with CW, the disturbance follows the carrier switching on and off. This is unintended detection, not the controlled process a receiver uses to recover speech or a clean CW tone—which is why your notch filter can do nothing about RF getting into a separate speaker amplifier.

The remedy depends on where the RF gets in. A capacitor offers less reactance at higher frequencies, so a well-chosen bypass capacitor can divert RF away from a susceptible point in an audio circuit while leaving the wanted audio substantially unaffected.

> **Key Information:** A bypass capacitor can be useful in reducing RF interference to audio-frequency circuits. {{< link id="G4C01" >}}

If the RF instead arrives as common-mode current riding on an audio cable, a ferrite choke around that cable adds impedance to the unwanted current without touching the circuit inside the equipment.

> **Key Information:** Placing a ferrite choke on an audio cable can reduce RF interference caused by common-mode current on that cable. {{< link id="G4C08" >}}

Neither is a cure-all: placement matters for a capacitor, a ferrite has to be effective at the interfering frequency, and work inside someone's equipment is a job for someone familiar with it. Finding the path the RF takes beats trying every filter in the drawer.

#### Understanding What the S-Meter Tells You

When you start tuning around HF, one of the first things you'll want to know about a station is how strong it is. The S-meter answers that.

> **Key Information:**
> - An S meter measures received signal strength. {{< link id="G4D04" >}}
> - One S unit typically represents 6 dB change in signal strength. {{< link id="G4D06" >}}

The scale runs from S1 (barely detectable) through S9 (strong), then continues as "dB over S9" for the really loud ones—you'll hear reports like "20 over S9." Since 6 dB is roughly a factor of four in power, an S9 signal is about four times as powerful as S8, and sixteen times S7.

That compression hides some big numbers:

> **Key Information:**
> - A signal that reads 20 dB over S9 is 100 times more powerful than one that reads S9. {{< link id="G4D05" >}}
> - Power output must be raised approximately 4 times to change the S meter reading on a distant receiver from S8 to S9. {{< link id="G4D07" >}}

10 dB is a factor of ten in power, so 20 dB is $10 \times 10 = 100$ times. The practical consequence: moving a distant station's meter up a single S-unit takes *four times* your current power—100 watts becomes 400 for one unit! Antenna improvements, which can add 3–6 dB or more, are usually the better investment.

S-meters are not precision instruments, though. One radio's S9 might be another's S7. Treat the reading as relative: it's great for comparing two antennas, watching propagation shift, or tracking a signal over time. When someone gives you a "59" they mean "I can hear you fine"; a "52" means "weak but readable." Nobody is measuring to the decibel.

#### Listen First

All of these tools serve one habit that will do more for you than any accessory: listening. You don't have to wait for your General license to start, either—receiving requires no privileges at all. Spend time tuning around now, learning what the bands sound like, how signals fade, and what the noise floor does at different times of day. By the time you're ready to transmit, the bands will already feel familiar.

Listening is also basic courtesy once you're on the air. Plenty of frustration comes from someone keying up in the five-second gap another operator left while taking a quick drink mid-QSO!

Every challenge you've just learned to fight is being fought by the station trying to copy *you*. Transmitting well means making their job as easy as possible, and that's where we go next.
