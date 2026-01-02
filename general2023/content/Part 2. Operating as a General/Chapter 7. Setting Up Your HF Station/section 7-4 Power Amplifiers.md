---
chapter: "7"
section: "7.4"
questions: ["G7B02", "G7B08", "G7B11", "G7B01", "G4A04", "G4A08", "G4A05", "G4A09"]
status: reviewed1
---

### Section 7.4: Power Amplifiers

Your transceiver puts out 100 watts. That's plenty for most HF contacts—you'll work DX, have ragchews, and participate in nets without any problems. But sometimes 100 watts isn't quite enough. Maybe propagation is marginal, maybe your antenna is compromised, maybe you're trying to break through a pileup, or maybe you just want that extra edge in a contest. This is when you add an external power amplifier.

Adding an amplifier transforms your station from a simple transceiver into a *system*. The transceiver and amplifier need to work together properly, which means understanding how to integrate them, operate them, and avoid damaging either one.

#### Integrating the Amplifier

When you connect an amplifier to your transceiver, you're asking your radio to drive another piece of equipment. This creates two immediate challenges.

First, your transceiver might be capable of more output than the amplifier can handle as input. Most amplifiers need somewhere between 50 and 100 watts of drive to reach full output. Feed them 150 watts and you'll overdrive the amplifier, creating distortion and potentially damaging it. This is where ALC (Automatic Level Control) becomes critical:

> **Key Information:** ALC is used with an RF power amplifier to prevent excessive drive. {{< link id="G4A05" >}}

The amplifier sends an ALC voltage back to your transceiver that tells it "I'm getting too much drive, back off." Your transceiver automatically reduces power to keep the amplifier happy. Without this feedback loop, you'd have to manually adjust your transmit power every time you keyed up—tedious and error-prone.

Second, the amplifier needs to switch your antenna from the transceiver's receive path to the amplifier's transmit path. This switching can't happen instantly, and if RF hits the relay while it's between positions, you get arcing and damage. The solution is sequencing:

> **Key Information:** The purpose of delaying RF output after activating a transmitter's keying line to an external amplifier is to allow time for the amplifier to switch the antenna between the transceiver and the amplifier output. {{< link id="G4A09" >}}

Your transceiver waits a few milliseconds after you hit PTT before actually transmitting, giving the amplifier time to complete the switching. Modern transceivers and amplifiers handle this automatically through the control cable, but understanding what's happening helps you troubleshoot when things don't work right.

#### Operating a Tube Amplifier

Most high-power amateur amplifiers use vacuum tubes. While solid-state amplifiers are becoming more common, tubes still dominate at the kilowatt level because they're relatively inexpensive, can handle abuse better, and are easier to repair. But tubes require tuning—two controls labeled TUNE and LOAD that need adjustment for different frequencies.

Understanding what these controls actually do helps you use them effectively. When you tune an amplifier, you're doing two things: maximizing power transfer from the tube to the load (your antenna system), and ensuring the tube operates within safe limits.

The TUNE control adjusts the resonant circuit in the amplifier's output, bringing it to resonance at your operating frequency. When you've got it right:

> **Key Information:** The correct setting of a vacuum-tube RF power amplifier's TUNE control produces a pronounced dip in plate current. {{< link id="G4A04" >}}

You're watching the plate current meter while adjusting TUNE, looking for the point where current drops to a minimum. This dip tells you the output circuit is resonant—it's presenting the right impedance to the tube at this frequency.

Once you've found the dip with TUNE, you adjust LOAD:

> **Key Information:** The correct adjustment for the LOAD or COUPLING control of a vacuum tube RF power amplifier is to achieve desired power output without exceeding maximum allowable plate current. {{< link id="G4A08" >}}

LOAD controls how much impedance the tube sees. Increase loading and you transfer more power to the antenna—but you also increase plate current. Your job is finding the sweet spot where you get the power output you want while keeping plate current within the tube's safe operating range. Too little loading and you're not getting all the power you could; too much and you risk damaging the tube.

The typical tuning procedure: Set LOAD to minimum (no loading), adjust TUNE for the dip in plate current, then increase LOAD gradually while watching both power output and plate current. When you hit your target power without exceeding the plate current limit, you're done.

#### What's Happening Inside

Understanding a bit about amplifier theory helps you operate more effectively and recognize when something's wrong.

Amplifiers come in different classes based on how much of the time the active device (tube or transistor) conducts:

> **Key Information:** Class C amplifiers have the highest efficiency. {{< link id="G7B02" >}}

Class A amplifiers conduct 100% of the time—they're always on, which makes them very linear but inefficient. Most of your input power becomes heat. Class B conducts about 50% of the time, Class AB is between A and B, and Class C conducts less than 50% of the time. The less time spent conducting, the less power wasted as heat, which is why Class C wins on efficiency.

But there's a tradeoff. Class C amplifiers are so non-linear that they can only amplify signals that can tolerate severe distortion:

> **Key Information:** A Class C power stage is appropriate for amplifying FM modulated signals, but not SSB or AM. {{< link id="G7B11" >}}

FM works in Class C because the information is in the frequency, not the amplitude—you can distort the amplitude all you want and still recover the signal perfectly. SSB and AM require linear amplification because their information is encoded in amplitude variations. Distort those and you've destroyed the signal.

For measuring how well an amplifier is working:

> **Key Information:** The efficiency of an RF power amplifier is determined by dividing the RF output power by the DC input power. {{< link id="G7B08" >}}

If your amplifier draws 2000 watts from the AC line (after the power supply converts it to DC) and produces 1200 watts of RF output, you've got 60% efficiency. The other 40% becomes heat that your cooling system has to remove. This is why amplifiers have big heat sinks and fans—inefficiency means heat, and heat kills tubes and transistors.

One more bit of tube amplifier technology worth understanding:

> **Key Information:** The purpose of neutralizing an amplifier is to eliminate self-oscillations. {{< link id="G7B01" >}}

Tubes have internal capacitance between their elements. This capacitance can create a feedback path from output back to input, and if conditions are right (wrong?), the amplifier starts oscillating on its own instead of amplifying your signal. Neutralization adds a canceling feedback path that prevents this. Most modern amplifiers come pre-neutralized, but older designs might require adjustment, and understanding neutralization helps you recognize when an amplifier is oscillating instead of amplifying.

#### Operating Safely

With great power comes great responsibility—and great potential for expensive mistakes. Never transmit into an amplifier without confirming it's properly connected and tuned. Always start with low power from your transceiver and tune the amplifier before going to full drive. Watch your plate current and never exceed the tube's maximum ratings. And remember that 1500 watts into a mismatched antenna creates very high voltages—respect the RF and you'll avoid both equipment damage and RF burns.

When it's working right, an amplifier gives you that extra margin when you need it. Next, let's look at how to set up your station for digital modes, where clean operation matters more than power.
