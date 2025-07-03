---
chapter: "7"
section: "7.3"
questions: ["G7B02", "G7B08", "G7B11", "G7B01", "G4A04", "G4A08", "G4A05", "G4A09"]
status: reviewed1
---

### Section 7.3: Power Amplifiers and Measurement

Your 100-watt signal barely moves the S-meter on that rare DX station. Meanwhile, the big gun down the street gets "59 plus 20" reports from the same operator. The difference? An amplifier—and knowing how to use it properly. Your General license authorizes up to 1500 watts PEP, but with great power comes great responsibility. Master amplifiers wrong, and you'll splatter across the band while cooking expensive components. Master them right, and you'll punch through pile-ups when conditions demand that extra punch.

#### The Power Behind the Power

Think of an RF amplifier as a signal magnifier. Your transceiver whispers at 100 watts; the amplifier shouts at 1500. But here's the catch—amplifiers aren't just bigger-is-better devices. They're precision instruments that demand respect, understanding, and careful operation. Get it right, and distant stations suddenly hear you clearly. Get it wrong, and you become the lid everyone complains about.

##### Amplifier Classes: Choose Your Weapon

Not all amplifiers are created equal. Engineers classify them by how they handle the signal cycle, trading efficiency for fidelity:

> **Key Information:** Class C amplifiers have the highest efficiency compared to other common amplifier classes. {{< link id="G7B02" >}}

<img src="../images/amplifier-classes.svg" alt="Diagram comparing efficiency of different amplifier classes" style="width: 450px; margin: 10px;">

Picture these classes as different engines:

**Class A**: The luxury sedan—smooth and refined but guzzles fuel. Conducts throughout the entire cycle, delivering pristine audio at 25-30% efficiency. Your electric bill suffers, but your signal sounds beautiful.

**Class AB**: The sport sedan—balances performance and economy. The sweet spot for SSB operation, delivering 50-60% efficiency with acceptable linearity. Most amateur amplifiers live here.

**Class B**: The economy car—conducts half the cycle, more efficient but rougher. Rarely used alone in amateur service.

**Class C**: The racing engine—raw efficiency at 70-80%, but brutal on signal quality. Perfect for FM, disastrous for SSB.

Calculating efficiency reveals how much of your electric bill becomes RF versus expensive heat:

> **Key Information:** The efficiency of an RF power amplifier is determined by dividing the RF output power by the DC input power. {{< link id="G7B08" >}}

Real-world example: Your amplifier pulls 2000 watts from the wall but delivers 1200 watts to the antenna. Efficiency = 1200 ÷ 2000 = 60%. That missing 800 watts? It's heating your shack. Higher efficiency means lower electric bills and quieter cooling fans, but here's the critical trade-off:

> **Key Information:** For amplifying a modulated signal, a Class C power stage is appropriate for FM, but NOT for SSB or AM. {{< link id="G7B11" >}}

Why? Class C mangles your signal's envelope—no problem for FM where only frequency matters, but catastrophic for SSB where amplitude carries your voice. Use Class C on SSB and you'll splatter across 20 kHz while sounding like a robot gargling marbles. That's why SSB amplifiers run Class AB—the Goldilocks zone between efficiency and clean signals.

##### Neutralization: Taming the Oscillation Monster

Ever hear an amplifier suddenly start howling on its own? That's self-oscillation—your amplifier has become an expensive signal generator. Older tube designs especially need neutralization to prevent this embarrassing (and illegal) situation:

> **Key Information:** The purpose of neutralizing an amplifier is to eliminate self-oscillations. {{< link id="G7B01" >}}

<img src="../images/neutralization.svg" alt="Diagram showing neutralization circuit in amplifier" style="width: 400px; margin: 10px;">

Picture a microphone too close to a speaker—that ear-piercing squeal is audio feedback. RF amplifiers do the same thing when output sneaks back to the input through stray capacitance. Neutralization creates an equal-but-opposite feedback path, like noise-canceling headphones for your amplifier. Modern solid-state designs handle this automatically, but that vintage tube amp might need your touch on the neutralization control to keep it stable.

#### The Tube Tuning Dance

Tube amplifiers remain amateur radio favorites—they're forgiving of antenna mismatches, deliver that warm tube sound, and when you accidentally transmit into an open circuit, they grumble but survive. However, they demand a tuning ritual that separates operators from appliance users:

> **Key Information:** The correct setting of a vacuum-tube RF power amplifier's TUNE control results in a pronounced dip in plate current. {{< link id="G4A04" >}}

<img src="../images/amplifier-tuning-dip.svg" alt="Graph showing plate current dip during proper tuning" style="width: 450px; margin: 10px;">

Master these two controls or cook your tubes:

**TUNE knob**: Adjusts plate circuit resonance—like tuning a guitar string to pitch
**LOAD knob**: Controls antenna coupling—like adjusting guitar volume

The sacred sequence (violate at your wallet's peril):
1. Reduce power to 25-50 watts (save the tubes during tuning)
2. Key up and smoothly adjust TUNE for that magical current dip
3. Adjust LOAD for desired power without exceeding redline current
4. Increase to full power and touch up settings

> **Key Information:** The correct adjustment for the LOAD or COUPLING control of a vacuum tube RF power amplifier is to achieve the desired power output without exceeding maximum allowable plate current. {{< link id="G4A08" >}}

Mess this up and watch the fireworks:
- Cherry-red tube plates (expensive)
- Splatter across three channels (angry neighbors)
- Shortened tube life (very expensive)
- That distinctive burnt-electronics smell (extremely expensive)

After a few tuning cycles, you'll develop the touch—smooth, confident adjustments that nail the sweet spot every time. Until then, take it slow and watch those meters like a hawk.

#### ALC: Your Amplifier's Guardian Angel

Push too much signal into an amplifier and bad things happen—distortion, splatter, and expensive component failure. Enter ALC, the automatic system that saves you from yourself:

> **Key Information:** ALC is used with an RF power amplifier to prevent excessive drive. {{< link id="G4A05" >}}

<img src="../images/alc-system.svg" alt="Diagram showing ALC feedback loop" style="width: 450px; margin: 10px;">

The ALC feedback loop protects everything:
1. Amplifier senses trouble brewing (too much input)
2. Sends "back off!" voltage to your transceiver
3. Transceiver reduces drive automatically
4. Your signal stays clean, components stay cool

Reading the ALC meter tells the story:
- **Flickering on voice peaks**: Perfect—system working as designed
- **Pinned at maximum**: Overdriving—reduce microphone gain or processor level
- **No movement ever**: Underdriving—you're leaving power on the table

#### Built-In Protection: Because Mistakes Happen

Modern amplifiers pack more safety features than a luxury car, because RF mistakes cost more than fender benders:

##### The Critical Timing Dance: T/R Sequencing

Ever wonder why your amp has that slight delay when you key up? It's not lag—it's protection:

> **Key Information:** The purpose of delaying RF output after activating a transmitter's keying line to an external amplifier is to allow time for the amplifier to switch the antenna between the transceiver and the amplifier output. {{< link id="G4A09" >}}

<img src="../images/tr-sequencing.svg" alt="Diagram showing proper T/R sequencing" style="width: 450px; margin: 10px;">

The millisecond choreography that saves your amp:
1. You squeeze PTT ("I want to transmit!")
2. Amplifier relays clunk over ("Switching antennas...")
3. RF flows after a brief pause ("Safe to transmit!")

Skip this sequence and you get "hot switching"—RF arcing across relay contacts still in motion. The result? Pitted contacts, eventual relay failure, and an expensive repair bill. Modern gear handles this automatically, but mix vintage equipment and you might need an external sequencer to keep the timing right.

##### Your Amplifier's Defense Systems

Quality amplifiers protect themselves (and you) with multiple safeguards:

**Thermal protection**: Gets too hot? Shuts down before meltdown. Those cooling fans aren't just noise makers.

**SWR foldback**: Antenna falls off? Power automatically reduces. No more "transmitting into dead short" disasters.

**Current limiting**: Tubes or transistors approaching danger zone? Current limits kick in before destruction.

**Interlock switches**: Cover off = high voltage off. Because 3000 volts and curiosity don't mix.

#### Know Your Power: Measurement Matters

Guessing your output power is like driving blindfolded—legal limits aren't suggestions, and the FCC has excellent direction-finding equipment. Proper measurement keeps you legal and your station healthy.

##### The Directional Wattmeter: Your Power Truth-Teller

This Swiss Army knife of RF measurement reveals both what you're sending and what's bouncing back:

**Forward power**: What's heading to your antenna
**Reflected power**: What your antenna rejected
**The difference**: What actually radiates

Placement matters for accuracy:
- Close to the antenna (measures actual delivered power)
- After all tuners and filters (shows real-world results)
- Short jumpers (minimize measurement errors)

##### The Oscilloscope: Power Analysis for Perfectionists

When you need to see exactly what your signal looks like, break out the scope:

<img src="../images/oscilloscope-power-measurement.svg" alt="Oscilloscope showing RF envelope measurement" style="width: 400px; margin: 10px;">

The scope reveals what meters hide:
- **Flat-topping**: Your peaks look like mesa instead of mountains? You're overdriving.
- **Envelope shape**: Clean SSB looks smooth. Distorted SSB looks fuzzy.
- **Peak voltage**: Calculate exact PEP from voltage measurements.

Requirements for scope measurement:
- Scope with bandwidth above your operating frequency
- RF sampler or pick-up (never connect directly!)
- Math skills (Power = V²/R, where R is your system impedance)

#### Playing by the Rules: Power Limits Matter

Your General ticket comes with serious power privileges—use them wisely:

**Most HF bands**: 1500 watts PEP output (not input!)
**30 meters**: 200 watts PEP (gentleman's band, gentleman's power)
**Always**: Minimum power necessary (QRP when possible, QRO when needed)

Critical distinction: The FCC measures OUTPUT power at your antenna connector. Your amp might gulp 3000 watts from the wall to deliver legal 1500 watts output. That efficiency factor matters for both legality and your electric bill.

#### Power Wisdom from the Trenches

Before you flip that amplifier switch, consider the hierarchy of effective communication:

1. **Antenna improvements beat power increases**: 3 dB from a better antenna equals doubling power
2. **Noise reduction multiplies effective power**: Can't hear them = can't work them
3. **Operating skill trumps brute force**: Timing, technique, and patience beat kilowatts
4. **Power solves specific problems**: When you truly need it, use it wisely

Pre-amplifier checklist:
✓ Antenna system rated for high power?
✓ Station grounding bombproof?
✓ RF exposure calculations complete?
✓ Really need it, or just want it?

The truth seasoned operators know: That rare DX station works the weak signal with perfect timing over the strong signal with poor technique. But when propagation is marginal and you've exhausted other options, a well-operated amplifier transforms "almost" into "confirmed."

Next up: Digital modes unlock a different kind of magic—where 25 watts can outperform 1500 watts of voice. Time to explore your computer-to-radio connection.
