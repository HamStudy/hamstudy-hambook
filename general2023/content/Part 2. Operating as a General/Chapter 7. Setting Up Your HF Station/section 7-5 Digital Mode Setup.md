---
chapter: "7"
section: "7.5"
status: reviewed1
questions: ["G2E06", "G4A11", "G8C14", "G8C13", "G2E07", "G2E14"]
---

### Section 7.5: Digital Mode Station Setup

Digital modes often add a computer to your station. Depending on the setup, it may control the radio, exchange audio with it, or do both. The software can handle much of the operating process, but you still need to confirm that the radio is using the right mode, frequency, audio levels, and timing.

#### Getting the Audio Right

In most digital mode setups, the computer's audio becomes your transmitted signal. The radio cannot tell the difference: it transmits whatever audio it receives, whether that is your voice or a computer's tones.

Tones are exactly what many digital modes send. AFSK (Audio Frequency-Shift Keying) transmits data by shifting an audio tone between two frequencies, called "mark" and "space." RTTY (Radio Teletype), one of the oldest digital modes, works this way, and the spacing between its two frequencies is called the *shift*:

> **Key Information:** The most common frequency shift for RTTY emissions in the amateur HF bands is 170 Hz. {{< link id="G2E06" >}}

The receiving software watches the tone flip between mark and space and turns those shifts back into text.

The radio's indifference comes with a catch: its automatic systems respond to data audio just as they would to your voice. The one that causes the most trouble is ALC:

> **Key Information:** The ALC system should be inactive when transmitting AFSK data signals because the ALC action distorts the signal. {{< link id="G4A11" >}}

If the computer sends too much audio to the radio, the ALC system begins reducing the transmitter's output. That action can distort the signal and create interference outside its normal bandwidth. Reduce the audio drive until the ALC meter shows no activity, and turn off speech processing or other audio effects.

Other digital modes have their own details to watch out for—these two are simply the ones that may come up on the exam. It's always worth doing a little reading before trying a new digital mode.

#### Seeing What You're Doing

For many computer-based digital modes, the waterfall display is the main tool for finding and tuning signals:

> **Key Information:** A waterfall display shows frequency horizontally, signal strength as intensity, and time vertically. {{< link id="G8C14" >}}

The display normally shows the portion of the receiver's passband being sent to the computer. Signals leave traces as the display scrolls—brighter usually means stronger—letting you see where each signal is and whether you are tuned correctly.

![A waterfall display](waterfall.png)

The waterfall also helps you spot signal problems—yours or anyone else's:

> **Key Information:** Vertical lines on either side of a data mode or RTTY signal on a waterfall display indicate overmodulation. {{< link id="G8C13" >}}

Overdriving a transmitter creates unwanted signals beside the intended one. If another operator reports this on your signal—or you see it while monitoring with a separate receiver—reduce your audio drive and check that speech processing is turned off.

#### Keeping Accurate Time

Some modes have requirements beyond audio levels. FT8 contacts use alternating 15-second periods tied to UTC:

> **Key Information:** FT8 requires computer time accurate to within approximately 1 second. {{< link id="G2E07" >}}

If your computer's clock is too far off, your transmission will not line up properly with the other station's receive period, making signals harder or impossible to decode. Use a reliable time-synchronization service and verify that your clock remains accurate rather than assuming the computer's default settings are sufficient.

#### When It Doesn't Work

Suppose the waterfall shows an RTTY signal and it appears to be tuned correctly, but the decoded text is still unreadable:

> **Key Information:** If you cannot decode an RTTY or other FSK signal even though it is apparently tuned in properly, the mark and space frequencies may be reversed, you may have selected the wrong baud rate, or you may be listening on the wrong sideband. {{< link id="G2E14" >}}

Changing sidebands reverses the mark and space frequencies. Most RTTY software has a **Reverse** control that can correct this without changing sidebands. The receiving software must also use the same transmission speed as the sending station; 45.45 baud is standard for amateur HF RTTY, but other settings are possible.

Check the sideband or Reverse setting first, then confirm the baud rate and shift. Change one setting at a time so you can tell what fixed the problem.

#### Trust, but Verify

The modes covered here are only the beginning. Dozens of digital modes are active on the amateur bands, each with different strengths—keyboard-to-keyboard chat, messages relayed around the world, pictures, contacts completed at signal levels no voice operator could use. Once your computer and radio are working together, trying a new mode is often just a matter of installing software, and exploring what's out there is half the fun.

Every one of those modes depends on the same foundation, though: knowing what your station is actually doing. Watching the ALC meter, reading the waterfall, confirming the clock, changing one setting at a time—that habit of verifying rather than assuming is an important station skill. Several instruments are designed for exactly that job, and that is how we will finish the chapter.
