---
chapter: "7"
section: "7.2"
questions: ["G4A13", "G4A01", "G4A03", "G4A07", "G4D04", "G4D05", "G4D06", "G4D07"]
status: draft1
---

### Section 7.2: Receiving Techniques

We've talked a few times about the importance of keeping in mind both receive and transmit; that's because it does not matter how efficiently or powerfully you transmit your signal, communication cannot happen unless you hear the response.

As a Technician class operator the most common mode is FM; with an FM signal you mostly either have a signal or you don't have a signal, and you can only have at most one clear signal on a given frequency—and it is generally *very* clear. Now on HF frequencies and operating as a General class operator we're probably going to use SSB (Single Side-Band) for most communication and suddenly there is a lot more that we can do to try to get a signal out of the noise. At the same time, there is also a much higher chance that we'll be trying to do so with a particularly weak signal.

Your HF transceiver includes several tools designed to improve what you can hear. Understanding when and how to use them can make all the difference in the world.

#### When You Have Too Much Signal

Ever try looking into a shaded area on a bright sunny day? You can't see what's there—the bright light blinds you to the subtle differences between light and dark. Put on sunglasses and suddenly you can see into those shadows. The sunglasses reduced the overwhelming brightness, letting your eyes work properly again.

An attenuator does the same thing for your receiver:

> **Key Information:** The purpose of using a receive attenuator is to prevent receiver overload from strong incoming signals. {{< link id="G4A13" >}}

That kilowatt contest station might be preventing you from hearing a weak DX station nearby. Turn on the attenuator and both signals drop in strength, but now your receiver can hear them both. The strong station drops from overwhelming to manageable, while the weak DX emerges from the noise.

Most HF transceivers include an attenuator button that reduces incoming signal levels by 10-20 dB. You'll use it during contest weekends on crowded bands, at Field Day when operating near other transmitters, or any time strong signals are drowning out what you're trying to hear.

#### Cleaning Up What You Hear

The next big barrier to clarity is that with SSB you have no carrier, which means unlike with FM there is no "full quieting" on a signal; particularly clear signals are easier to hear only because they are louder and more crisp than the noise around them. You still have to listen to all of that noise, and that can make it hard to understand what you are listening to.

Most receivers include three tools to help you cut through the noise:

> **Key Information:** 
> - The notch filter found on many HF transceivers reduces interference from carriers in the receiver passband. {{< link id="G4A01" >}}
> - A noise blanker works by reducing receiver gain during a noise pulse. {{< link id="G4A03" >}}
> - As a receiver's noise reduction control level is increased, received signals may become distorted. {{< link id="G4A07" >}}

Each tackles a different problem. The **notch filter** cuts out a very narrow slice of frequencies—perfect for removing that steady whistle from another station's carrier or a local computer sitting right on top of your signal. Manual versions let you tune to exactly where the interference is; automatic ones hunt it down for you.

The **noise blanker** handles pulse-type interference from electric fences, power lines, and vehicle ignition. It works like lightning-fast earmuffs—when it detects a noise pulse, it momentarily mutes the receiver to cut out the pop, then opens back up between pulses. Works great on regular pulses; won't help much with steady noise.

**DSP noise reduction** takes a different approach. It analyzes the incoming signal, tries to distinguish signal from noise, and suppresses what it thinks is noise. Light settings can pull weak signals up from the hiss wonderfully. Crank it too high and voices turn robotic and weak signals disappear—the algorithm guesses wrong. Start low and increase gradually until the signal sounds clearer, backing off if it gets weird.

Use what you need, turn off what's not helping. Every control affects your signal somehow.

#### Understanding What the S-Meter Tells You

How strong is that station you're hearing? The S-meter gives you the answer.

> **Key Information:** 
> - An S meter measures received signal strength. {{< link id="G4D04" >}}
> - One S unit typically represents 6 dB change in signal strength. {{< link id="G4D06" >}}

The scale runs from S1 (barely detectable) through S9 (strong signal), then continues as "dB over S9" for really powerful signals—you'll hear reports like "20 over S9" or "40 over S9." You should remember from our earlier discussions about decibels that 6 dB represents a factor of four in power, so S9 is four times more powerful than S8, and sixteen times more powerful than S7.

The dB scale compresses huge power differences into manageable numbers:

> **Key Information:** 
> - A signal that reads 20 dB over S9 is 100 times more powerful than one that reads S9. {{< link id="G4D05" >}}
> - Power output must be raised approximately 4 times to change the S meter reading on a distant receiver from S8 to S9. {{< link id="G4D07" >}}

Since 10 dB = $10 \times$ power, then 20 dB = $10 \times 10 = 100$ times the power. This has practical implications: going from 100 watts to 400 watts just to move up one S-unit! This is why antenna improvements (which can give you 3-6 dB or more) often beat power increases for improving your signal.

One thing to keep in mind about S-meters is that they're not very accurate. One radio's S9 might be another's S7. They're calibrated differently and respond differently to the same signal. It isn't intended to be a precise measurement, it's just useful for relative measurements—comparing two antennas, watching propagation change over time, or tracking a signal's strength. Don't obsess over absolute accuracy. When someone gives you "59" it means "I can hear you fine." A "52" means "you're weak but readable."

#### Moving on from receiving

Just like we covered receiving here first and are about to discuss transmitting, always *listen* before you start transmitting on a frequency; a lot of frustration is caused when someone turns on and keys up in the 5 second gap someone left while taking a quick drink in the middle of their QSO!
