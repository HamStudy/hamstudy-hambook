---
chapter: "4"
section: "4.2"
questions: ["G9A02", "G9A04", "G9A07", "G9A08", "G9A09", "G9A10", "G9A11", "G7C03", "G4B10", "G4B11", "G4B12", "G4B13", "G8A13", "G8A14"]
status: generated
---

### Section 4.2: SWR and Antenna Matching

Now that you have access to HF bands with your General license, understanding Standing Wave Ratio (SWR) and impedance matching becomes even more critical. Let's expand our knowledge of these concepts and explore how to ensure your signal gets to your antenna efficiently rather than bouncing back to cause problems.

#### SWR Fundamentals

SWR measures how well your antenna system's impedance matches your feed line. A 1:1 SWR represents a perfect match where all power flows smoothly from transmitter to antenna. With HF operation and potentially higher power levels, understanding what causes SWR issues and how to address them becomes increasingly important.

#### What Causes Standing Waves?

Think of your feed line like a pipe carrying water to a sprinkler system. If the pipe suddenly changes size (impedance), water pressure builds up and creates turbulence. In radio terms:

> **Key Information:** *Reflected power at an antenna's feed point is caused by a difference between feed line impedance and antenna feed point impedance.* {{< link id="G9A04" >}}

<img src="../images/impedance-mismatch.svg" alt="Impedance Mismatch Causing Reflections" style="width: 400px; margin: 10px;">

When your signal hits this impedance "speed bump," some energy reflects back toward your radio instead of radiating from your antenna. These reflections create standing waves on your feed line - patterns of voltage and current that stand still rather than traveling smoothly to your antenna.

#### The Math Behind SWR

For the General exam, you'll need to understand how to calculate SWR for specific mismatch scenarios. For a purely resistive load (no reactance), the formula is simple:

$$SWR = \frac{Z_\text{higher}}{Z_\text{lower}}$$

Where you divide the higher impedance by the lower one. Let's look at some examples that might appear on your exam:

> **Key Information:** *Connecting a 50-ohm feed line to a 200-ohm resistive load results in a 4:1 SWR.* {{< link id="G9A09" >}}

$$SWR = \frac{200}{50} = 4:1$$

> **Key Information:** *Connecting a 50-ohm feed line to a 10-ohm resistive load results in a 5:1 SWR.* {{< link id="G9A10" >}}

$$SWR = \frac{50}{10} = 5:1$$

#### Why SWR Matters on HF

When operating HF with longer feed lines and potentially higher power, SWR takes on even greater importance:

> **Key Information:** *High SWR increases loss in a lossy transmission line.* {{< link id="G9A02" >}}

<img src="../images/swr-loss-relationship.svg" alt="Relationship Between SWR and Line Loss" style="width: 400px; margin: 10px;">

It's a double penalty - not only does some power reflect back to your radio, but the standing wave pattern actually increases the losses in your feed line! This effect compounds with longer feed lines and higher frequencies, which is why addressing SWR is especially important for HF work.

An interesting quirk: if your feed line has significant loss, your SWR meter might show a better reading than reality:

> **Key Information:** *Higher line loss reduces the SWR measured at the input to the line.* {{< link id="G9A11" >}}

This happens because your feed line absorbs some of the reflected power before it reaches your meter - like measuring water pressure after some has already leaked out of the pipe. It might look better on your meter, but it actually means you're losing power in your feed line!

#### Solving the SWR Puzzle

How do we fix SWR issues? The fundamental solution remains the same as you learned at the Technician level:

> **Key Information:** *To prevent standing waves on a feed line, the antenna feed point impedance must be matched to the characteristic impedance of the feed line.* {{< link id="G9A07" >}}

There are several approaches to achieving this match:

1. **Antenna Design**: Build or adjust your antenna to naturally present the desired impedance at the frequency you want to use

2. **Antenna Placement**: Sometimes relocating the antenna away from interfering objects improves the match

3. **Matching Networks**: Circuits that transform impedance, including:
   - Antenna tuners
   - Impedance transformers
   - L-networks, T-networks, and Pi-networks
   - Baluns and ununs

4. **Feed Line Selection**: Sometimes choosing a different feed line type (like ladder line instead of coax) can help with certain antenna types

#### The Truth About Antenna Tuners

As you use your new HF privileges, you'll likely use an antenna tuner (more accurately called a "transmatch"). Here's an important fact that confuses many hams:

> **Key Information:** *If the SWR on an antenna feed line is 5:1, and a matching network at the transmitter end is adjusted to present a 1:1 SWR to the transmitter, the resulting SWR on the feed line is still 5:1.* {{< link id="G9A08" >}}

<img src="../images/antenna-tuner-reality.svg" alt="How Antenna Tuners Really Work" style="width: 400px; margin: 10px;">

An antenna tuner at your radio is like putting a pressure regulator at the beginning of a leaky pipe - it protects your transmitter but doesn't fix the leak! The standing waves and associated feed line losses remain the same. The best place for matching is at the antenna feed point, though this is often impractical.

Regardless of where you place it, impedance matching is crucial:

> **Key Information:** *One reason to use an impedance matching transformer at a transmitter output is to present the desired impedance to the transmitter and feed line.* {{< link id="G7C03" >}}

#### Tools for Measuring SWR

To evaluate your antenna system, you'll need the right tools:

> **Key Information:** *Standing wave ratio can be determined with a directional wattmeter.* {{< link id="G4B10" >}}

A directional wattmeter shows both forward and reflected power, letting you calculate SWR. For more detailed analysis, an antenna analyzer is invaluable:

> **Key Information:** *An antenna and feed line must be connected to an antenna analyzer when it is being used for SWR measurements.* {{< link id="G4B11" >}}

<img src="../images/antenna-analyzer.svg" alt="Basic Antenna Analyzer Setup" style="width: 350px; margin: 10px;">

Modern antenna analyzers can show not just SWR but complex impedance (resistance and reactance), resonant frequency, bandwidth, and more. They can even:

> **Key Information:** *An antenna analyzer can be used to measure the impedance of coaxial cable.* {{< link id="G4B13" >}}

This helps identify feed line problems like water damage or breaks. Just be aware that:

> **Key Information:** *Received power from nearby transmitters that interferes with SWR readings can affect antenna analyzer measurements.* {{< link id="G4B12" >}}

So try to make measurements when local interference is minimal.

#### The Bigger Picture: Link Budgets and Margins

Moving beyond just SWR, successful radio communication depends on the entire system from transmitter to receiver. Engineers use link budgets to plan reliable communications:

> **Key Information:** *A link budget is the sum of transmit power and antenna gains minus system losses as seen at the receiver.* {{< link id="G8A13" >}}

<img src="../images/link-budget.svg" alt="Link Budget Components" style="width: 450px; margin: 10px;">

For reliable operation, they include some extra signal headroom called link margin:

> **Key Information:** *Link margin is the difference between received power level and minimum required signal level at the input to the receiver.* {{< link id="G8A14" >}}

Think of link margin as bringing an extra gallon of gas on a road trip - it provides a safety buffer when conditions aren't perfect. In radio terms, it helps your signal remain readable during fading or interference.

#### What SWR Should You Aim For?

As a General class operator, you'll often be working with higher power levels and more complex antenna systems than you did as a Technician. Here are practical SWR guidelines:

- **1:1 to 1.5:1**: Excellent! Maximum power transfer with minimal losses
- **1.5:1 to 2:1**: Very good for most operations
- **2:1 to 3:1**: Acceptable but worth improving if possible, especially on higher bands or with long feed lines
- **Above 3:1**: Needs attention - significant power is being reflected and feed line losses increase dramatically

Most modern HF transceivers automatically reduce power when SWR exceeds 2:1 or 3:1 to protect their final amplifier stages.

#### Troubleshooting SWR Issues

When faced with high SWR, approach troubleshooting systematically:

1. **Check Connections**: Just like you learned at the Technician level, loose or corroded connections remain a common culprit

2. **Inspect the Feed Line**: Look for damage, water ingress, or kinks

3. **Examine the Antenna**: Is it intact? Has anything changed in its environment (new metal objects nearby)?

4. **Verify Frequency**: Are you operating within the antenna's design bandwidth?

5. **Test with Antenna Analyzer**: A frequency sweep can reveal whether the issue is with resonance or some other factor

Sometimes a dramatic change in SWR indicates a serious problem like a broken connection or damaged antenna element. More subtle changes might reflect seasonal conditions affecting your antenna's performance.

#### From Single-Band to Multi-Band Operation

One big difference between typical Technician and General operation is the use of multiple HF bands. You'll quickly discover that SWR varies with frequency - an antenna perfectly matched on 20 meters might have high SWR on 40 meters.

There are several approaches to multi-band operation:
- Separate antennas for each band
- Multi-band antennas with traps or interlaced elements
- Antenna tuners to match a wider range of impedances
- Open-wire feed lines that can work with wider impedance variations

#### Practical Antenna Matching in the Real World

As you experiment with your new HF privileges, remember that a perfect SWR across all bands is rarely achievable. Instead, aim for:

1. **Reasonable SWR** (below 2:1) on your primary operating frequencies
2. **Low feed line loss**, which becomes more important with higher SWR
3. **Effective radiation** of your signal, which depends on more than just SWR

Sometimes it's better to accept a slightly higher SWR with a more efficient antenna than to achieve perfect SWR with an inefficient system. After all, the goal is successful communication, not just a pretty SWR meter reading!

In the next section, we'll explore directional antennas that can focus your signal where you want it to go, dramatically improving your ability to work distant stations with your new General class privileges.
