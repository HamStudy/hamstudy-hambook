---
chapter: "7"
section: "7.2"
questions: ["G4A12", "G4D01", "G4D02", "G4D03", "G4A02", "G4A10"]
status: reviewed1
---

### Section 7.2: Transmitting on HF

Finally—time to transmit! Your first HF contact awaits, but hold that microphone. The difference between a signal that cuts through the pile-up and one that dies unheard isn't just power—it's technique. HF demands different skills than the FM repeaters you mastered as a Technician. Get this right, and 100 watts reaches around the world. Get it wrong, and even a kilowatt won't save you.

#### SSB: Welcome to Efficient Voice Communication

Forget everything FM taught you. Single sideband strips away the carrier and opposite sideband, cramming all your power into the intelligence-carrying portion of the signal. Result? Your 100 watts acts like 400 watts compared to AM, and you use half the bandwidth.

The rules are simple but absolute:
- **Below 10 MHz**: Lower Sideband (LSB)
- **10 MHz and above**: Upper Sideband (USB)

Your radio probably switches automatically, but verify—nothing marks you as a newcomer faster than USB on 40 meters.

#### Split Operation: The DX Secret Weapon

Here's the scenario: A rare DX station appears on 14.195 MHz. Hundreds of stations call simultaneously, creating an impenetrable wall of sound. The DX operator's solution? "Listening 14.205 to 14.210." Welcome to split operation:

> **Key Information:** A common use of the dual-VFO feature on a transceiver is to transmit on one frequency and listen on another. {{< link id="G4A12" >}}

<img src="../images/split-operation.svg" alt="Diagram showing split frequency operation" style="width: 450px; margin: 10px;">

You listen to the DX on VFO A (14.195) but transmit on VFO B (somewhere in their listening range). This spreads out the calling stations, letting the DX pick out individual calls instead of hearing an unintelligible roar.

Master split operation before you need it:
1. Set VFO A to the DX frequency
2. Set VFO B to your transmit frequency
3. Press SPLIT
4. Listen on A, transmit on B

Practice now, or fumble later while that rare one gets away.

#### The Audio Arms Race: Making Your Voice Cut Through

On FM, everyone sounds roughly the same. On SSB, audio quality separates the stations everyone can copy from those lost in the noise. Your secret weapon sits right in your radio's menu:

> **Key Information:** The purpose of a speech processor in a transceiver is to increase the apparent loudness of transmitted voice signals. {{< link id="G4D01" >}}

<img src="../images/speech-processor-effect.svg" alt="Audio waveform showing effect of speech processing" style="width: 400px; margin: 10px;">

Here's the magic: speech processing squeezes more average power from your transmitter without increasing peaks. Normal speech has a huge dynamic range—whispers to shouts. The processor compresses this range, bringing up the quiet parts that carry intelligibility:

> **Key Information:** A speech processor affects a single sideband phone signal by increasing its average power. {{< link id="G4D02" >}}

Your 100-watt peaks still hit 100 watts, but now your average power jumps from maybe 25 watts to 40 watts. That's like adding a 60% power boost for free.

But here's where newcomers destroy their audio:

> **Key Information:** The effect of an incorrectly adjusted speech processor includes all these choices: distorted speech, excess intermodulation products, and excessive background noise. {{< link id="G4D03" >}}

<img src="../images/speech-processor-settings.svg" alt="Audio waveforms showing proper vs excessive speech processing" style="width: 450px; margin: 10px;">

Too much processing creates a harsh, distorted mess that's harder to copy than no processing at all. The sweet spot:
1. Start with processing OFF
2. Increase slowly while monitoring ALC
3. Stop when ALC shows moderate activity on voice peaks
4. Get on-air reports—"How's my audio?"

#### Microphone Mastery

Your mic technique matters more than your radio's price tag:

**Distance**: 2-3 inches—close enough for presence, far enough to avoid breath pops
**Angle**: Speak across the mic, not into it
**Voice**: Normal conversation level—let the processor do the work
**Gain**: ALC flickers on peaks, never pins

Forget "broadcast quality." You want "cuts through noise quality." That means emphasizing the 2-3 kHz range where human speech intelligibility lives.

#### Beyond Voice: CW and Digital Mastery

When conditions deteriorate and SSB becomes unintelligible, CW punches through. When CW struggles, digital modes decode signals you can't even hear. Your General privileges unlock these powerful alternatives across every HF band.

##### CW: The Original Digital Mode

Here's a trick that separates CW operators who struggle from those who thrive in QRM:

> **Key Information:** The benefit of using the opposite or "reverse" sideband when receiving CW is that it may be possible to reduce or eliminate interference from other signals. {{< link id="G4A02" >}}

Switching sidebands flips the audio spectrum. That interfering signal 200 Hz below your desired CW note jumps to 200 Hz above when you switch sidebands. Your brain refocuses on the new pitch while the interference moves to a less bothersome frequency. It's like moving your chair when someone blocks your view—same signal, better perspective.

For sending perfect CW, embrace the electronic keyer:

> **Key Information:** The function of an electronic keyer is automatic generation of dots and dashes for CW operation. {{< link id="G4A10" >}}

<img src="../images/electronic-keyer.svg" alt="Diagram showing electronic keyer operation" style="width: 400px; margin: 10px;">

Unlike a straight key where you form every element manually, a keyer's paddle lets you press one side for perfect dots, the other for perfect dashes. The keyer handles timing, spacing, and weight. You just decide what to send.

Modern keyers add power features:
- Memories for "CQ DX DE W1XYZ" and other repetitive sends
- Speed control from 5 to 50+ WPM
- Iambic modes that let you squeeze both paddles for alternating elements

#### Digital Modes: When Every Decibel Counts

FT8 works when nothing else will. PSK31 sends perfect text through noise. RTTY contests push rates beyond what voice can achieve. But digital modes demand different thinking:

**The Golden Rule**: NO ALC action on digital modes—ever. That flickering ALC meter means distortion, splatter, and failed QSOs. Reduce audio drive until ALC stays at zero.

**Duty Cycle Reality**: Digital modes run continuous power. Your 100-watt radio might only handle 50 watts continuous. Check your manual or prepare for expensive repairs.

**Audio Balance**: Too little drive and you're weak. Too much creates splatter across 10 kHz. Use waterfall displays to see your signal—it should be crisp and narrow, not a fuzzy blob.

#### Band Edge Operations: Don't Be "That Guy"

Your General ticket comes with frequency limits. Exceed them and you're the lid everyone talks about. Here's how SSB bandwidth really works:

<img src="../images/band-edge-operation.svg" alt="Diagram showing proper operation near band edges" style="width: 450px; margin: 10px;">

**USB Reality**: Your displayed frequency marks the BOTTOM of your signal. At 14.350 MHz (the band edge), your signal extends UP to 14.353.

**LSB Reality**: Your displayed frequency marks the TOP of your signal. At 7.175 MHz (the band edge), your signal extends DOWN to 7.172.

The safety rule: Stay 3 kHz inside any band edge. Better to be conservative than explain yourself to the FCC.

#### Advanced Operating: DX Pileup Survival

A new country appears on 20 meters. Within minutes, a thousand stations call simultaneously. Most create QRM. A few make the contact. Here's how to join the successful few:

**Rule 1: Listen First**
Does the DX work split? By numbers? Specific regions? Figure out their system before transmitting.

**Rule 2: Time Your Calls**
Don't join the roaring mob. Call slightly off-beat, in the gaps between the masses.

**Rule 3: Partial Calls Work**
If the DX says "W3?" and you're W3ABC, send "W3ABC" immediately—not just "ABC."

**Rule 4: Match Their Speed**
If they're sending quick exchanges, don't give your life story. "W1XYZ" beats "Whiskey One X-ray Yankee Zulu."

#### Contest Success: Speed Meets Accuracy

Contests teach efficient operating like nothing else. Whether chasing points or just making QSOs, contest-style operation sharpens every skill:

**Exchange Only What's Required**: "59 CT" not "You're 59 in Connecticut, name is Bob, weather is..."
**Voice Preservation**: Use voice keyer memories, stay hydrated, speak from your chest not throat
**Rate Maximization**: Strong signal? Run (call CQ). Weak signal? Search and pounce.
**Accuracy Matters**: Better to ask for repeats than log wrong calls

#### Station Upgrades That Actually Matter

Before spending money on more power, consider these game-changers:

**Headset with Boom Mic**: Consistent audio, hands-free operation, better DX success than any amplifier
**Footswitch**: Essential for contesting, DXing, or any serious operating
**Audio Processor**: External units often outperform built-in processing
**Antenna Tuner**: A good external tuner matches what internal tuners can't

Notice what's missing? The amplifier. Fix everything else first—then consider more power.

#### The Operating Code: Professionalism on the Air

Your signal represents you. Make it count:

**Listen First, Transmit Second**: That frequency might sound clear, but is someone listening for a weak signal?
**Keep It Moving**: Long-winded transmissions frustrate everyone. Say what's needed, then listen.
**Stay In Bounds**: Your privileges have edges. Respect them.
**Clean Signals**: Overdriven audio and splatter mark you as careless or clueless.
**Pay It Forward**: Someone helped you learn. Return the favor.

#### Your Transmitting Reality Check

Great operators aren't born—they're made through deliberate practice. Every contest entered, every DX contact attempted, every net joined teaches lessons no book can provide. Start with solid technique, add experience, and watch your signal reports climb.

Remember: More power rarely solves problems that good technique can fix. Master your current station before upgrading. The operator matters more than the equipment.

Next up: When 100 watts isn't enough, amplifiers beckon. But with great power comes great responsibility—and the need for careful measurement and control.
