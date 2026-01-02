---
chapter: "7"
section: "7.5"
questions: ["G4A11", "G2E07", "G2E14", "G8C14", "G8C13", "G2E06"]
status: reviewed1
---

### Section 7.5: Digital Mode Station Setup

You've mastered voice operation—adjusting your mic gain, setting speech processing, staying within band limits. Digital modes change everything. Instead of talking into a microphone, you're connecting a computer that generates audio tones representing data. The computer doesn't know about ALC, can't judge if it's overdriving your transmitter, and won't notice if its clock is off by a few seconds. Getting digital modes working well requires understanding how to interface your computer with your transceiver correctly.

#### Why Digital is Different

With voice, your speech processor handles peaks and valleys naturally. Your ears tell you when you're clipping or distorting. With digital modes, the computer generates precise tones at precise levels—and those levels need to stay constant and clean. The computer expects you to have everything set correctly; it can't compensate the way your voice naturally does.

This matters because digital modes use the audio signal itself to encode information. With voice, a bit of distortion might make you sound rough but you're still understandable. With digital, distortion corrupts the data and breaks the decoding.

#### Getting the Audio Right

The first and most important rule for digital modes using audio frequency shift keying (AFSK):

> **Key Information:** The ALC system should be inactive when transmitting AFSK data signals because the ALC action distorts the signal. {{< link id="G4A11" >}}

ALC is designed for voice—it reduces peaks and boosts valleys. Perfect for speech. Terrible for data. When the computer sends a steady tone for a mark or space frequency, ALC tries to "help" by adjusting the level. This creates level changes that corrupt the data encoding. Turn off ALC (or set your audio levels low enough that ALC never activates) and let the computer's constant-level audio pass through unchanged.

Speaking of frequencies, RTTY (Radio Teletype) uses frequency shift keying where different tones represent different data:

> **Key Information:** The most common frequency shift for RTTY emissions in the amateur HF bands is 170 Hz. {{< link id="G2E06" >}}

The transmitter alternates between two tones 170 Hz apart—one represents a mark (binary 1), the other a space (binary 0). Your receiving station decodes these frequency shifts back into letters and numbers. This 170 Hz shift is standard for HF RTTY, though VHF FM packet radio uses different values.

#### Seeing What You're Doing

Unlike voice where you judge audio quality by ear, digital modes need visual feedback. Enter the waterfall display:

> **Key Information:** A waterfall display shows frequency horizontally, signal strength as intensity, and time vertically. {{< link id="G8C14" >}}

Imagine looking down at a spectrogram as time flows past you. Signals appear as colored traces moving down the screen—brighter colors mean stronger signals. The horizontal position shows frequency, so you can see the entire band segment at once. Strong signals burn bright, weak signals barely show up, and you can watch signals appear and fade as propagation changes.

The waterfall is also your overmodulation detector:

> **Key Information:** Vertical lines on either side of a data mode or RTTY signal on a waterfall display indicate overmodulation. {{< link id="G8C13" >}}

When you overdrive your transmitter, you create sidebands (splatter) extending beyond your signal's normal bandwidth. These show up as vertical lines or smears on either side of your main signal. If you see them, reduce your audio drive level immediately—you're interfering with adjacent frequencies and creating a signal that's harder to decode. A clean digital signal looks like a narrow, well-defined trace with no splatter.

#### Mode-Specific Requirements

Some digital modes have unusual requirements. FT8, which has become wildly popular for weak-signal work, needs precise timing:

> **Key Information:** FT8 requires computer time accurate to within approximately 1 second. {{< link id="G2E07" >}}

FT8 operates in strict 15-second time slots—everyone transmits in alternating slots based on clock time. If your computer clock is off by more than a second, you'll transmit when everyone else is receiving (or vice versa), and nobody will decode your signals. Most operators use NTP (Network Time Protocol) to keep their computer clocks synchronized. This is built into Windows, Mac, and Linux—just make sure it's enabled.

#### When It Doesn't Work

You've got everything connected, the waterfall shows signals, but nothing decodes. What's wrong?

> **Key Information:** If you cannot decode an RTTY or other FSK signal even though it is apparently tuned in properly, the mark and space frequencies may be reversed, you may have selected the wrong baud rate, or you may be listening on the wrong sideband. {{< link id="G2E14" >}}

RTTY can be decoded on either sideband—but the mark and space assignments reverse. If you're on the wrong sideband, you'll see the signal but decode garbage. Baud rate (transmission speed) must match between sender and receiver; 45.45 baud is standard for amateur RTTY, but if your software is set to 50 baud, you won't decode a 45.45 baud signal. And some modes require USB while others use LSB—check the band plan for your chosen mode.

The key to troubleshooting digital modes: verify one thing at a time. Check sideband first (easiest to fix), then baud rate, then audio levels, then timing. Most problems are simple setup issues, not equipment failures.

#### Making the Connection

Digital modes open up communication possibilities that voice can't match—weak signal work that makes 100-milliwatt QRP contacts across the country routine, perfect copy through terrible noise, and automated operation while you sleep. But they require attention to technical details that voice operation forgives. Get your audio levels right, keep your clock synchronized, watch that waterfall for cleanliness, and you'll be part of the digital revolution. Next, let's look at the test equipment that helps you verify everything is working correctly.
