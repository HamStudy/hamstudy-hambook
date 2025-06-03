---
chapter: "4"
section: "4.3"
questions: ["G9C01", "G9C02", "G9C03", "G9C05", "G9C07", "G9C08", "G9C09", "G9C10", "G9D05", "G9D06", "G9D07", "G9D03", "G9D10", "G9D09"]
---

### Section 4.3: Directional Antennas

With your General class privileges, you'll have access to the entire HF spectrum where directional antennas really shine. Unlike omnidirectional antennas that radiate roughly equally in all directions, directional antennas focus your signal where you want it—like trading your flashlight for a spotlight.

#### The Mighty Yagi: Directing Your Signal

The Yagi antenna (technically called a Yagi-Uda array) is the champion of directional antennas for amateur radio. You've probably seen TV antennas on rooftops—those are Yagis! For ham radio, we use similar designs but optimized for our frequencies.

<img src="../images/yagi-antenna.svg" alt="Yagi Antenna with Parts Labeled" style="width: 400px; margin: 10px;">

A Yagi consists of several parallel elements mounted on a boom:

1. **The Driven Element**: This is the only element actually connected to your feed line, and it's where power goes in and out. 

   > **Key Information:** *The approximate length of the driven element of a Yagi antenna is 1/2 wavelength.* {{< link id="G9C02" >}}

2. **The Reflector**: This element sits behind the driven element and pushes the signal forward.

3. **Directors**: These elements sit in front of the driven element and pull the signal in their direction.

> **Key Information:** *In a three-element Yagi, the reflector is longer and the director is shorter than the driven element.* {{< link id="G9C03" >}}

This arrangement creates a directional pattern, with maximum signal strength in the direction the antenna is pointing (from reflector toward directors).

#### Yagi Performance Factors

When shopping for or building a Yagi, several factors affect performance:

1. **Number of Elements**: More elements generally means more gain, but with diminishing returns.

   > **Key Information:** *Increasing boom length and adding directors to a Yagi antenna primarily increases its gain.* {{< link id="G9C05" >}}

2. **Element Diameter**: Thicker elements give you more bandwidth.

   > **Key Information:** *Using larger-diameter elements would increase the bandwidth of a Yagi antenna.* {{< link id="G9C01" >}}

3. **Spacing Between Elements**: Affects both gain and front-to-back ratio.

4. **Boom Length**: Longer booms allow for more elements and generally better performance.

Yagis excel at focusing your signal in one direction (and receiving well from that direction), but they have limitations. They're physically large at lower frequencies, and they need to be rotated to communicate in different directions.

#### Understanding Antenna Specifications

When evaluating directional antennas, you'll encounter several important specifications:

1. **Gain**: How much the antenna concentrates energy in its favored direction compared to a reference antenna.

   > **Key Information:** *Antenna gain in dBi is 2.15 dB higher than gain stated in dBd for the same antenna.* {{< link id="G9C04" >}}

   This happens because dBi compares to an isotropic radiator (theoretical perfect sphere), while dBd compares to a dipole. Since a dipole already has 2.15 dB gain over an isotropic radiator, the dBi number is always 2.15 higher than the dBd number for the same antenna.

2. **Front-to-Back Ratio**: Indicates how well the antenna rejects signals from behind.

   > **Key Information:** *Front-to-back ratio means the power radiated in the major lobe compared to that in the opposite direction.* {{< link id="G9C07" >}}

   A high front-to-back ratio helps you ignore signals from the direction opposite to where you're pointing, which can be invaluable when dealing with interference.

3. **Main Lobe**: The direction of maximum signal strength.

   > **Key Information:** *The main lobe of a directive antenna is the direction of maximum radiated field strength from the antenna.* {{< link id="G9C08" >}}

   Understanding the shape and width of the main lobe helps you know where your signal is going and how precisely you need to aim.

#### Optimizing Yagi Performance

You can adjust several aspects of a Yagi to optimize its performance:

> **Key Information:** *Forward gain, front-to-back ratio, and SWR bandwidth of a Yagi antenna can all be optimized by adjusting the physical length of the boom, the number of elements on the boom, and the spacing of each element along the boom.* {{< link id="G9C10" >}}

These adjustments involve tradeoffs. For example, optimizing for maximum gain might reduce the front-to-back ratio, while optimizing for wide bandwidth might reduce the gain somewhat.

#### Stacking Antennas for More Gain

Want even more gain? Try stacking antennas:

> **Key Information:** *In free space, the gain of two 3-element Yagi antennas spaced vertically 1/2 wavelength apart is approximately 3 dB higher than a single 3-element Yagi.* {{< link id="G9C09" >}}

<img src="../images/stacked-yagis.svg" alt="Stacked Yagi Antennas" style="width: 350px; margin: 10px;">

Stacking antennas provides two benefits:
1. It increases gain by about 3 dB (doubling your effective power)
2. It narrows the beam pattern in the stacking plane

Similarly, for horizontally polarized Yagis:

> **Key Information:** *An advantage of vertically stacking horizontally polarized Yagi antennas is that it narrows the main lobe in elevation.* {{< link id="G9D05" >}}

This tighter elevation pattern helps focus more of your signal toward the horizon where it's typically most needed for terrestrial contacts.

#### Matching the Yagi to Your Feed Line

To efficiently transfer power to a Yagi, you need to match its impedance to your feed line. Two common matching methods are:

1. **Beta Match (Hairpin Match)**:

   > **Key Information:** *A beta or hairpin match is a shorted transmission line stub placed at the feed point of a Yagi antenna to provide impedance matching.* {{< link id="G9C11" >}}

   The hairpin match adds inductive reactance to cancel out the capacitive reactance present at the feed point of many Yagis.

2. **Gamma Match**:

   > **Key Information:** *A gamma match with a Yagi antenna does not require the driven element to be insulated from the boom.* {{< link id="G9C12" >}}

   This is a significant advantage, as it simplifies construction and improves mechanical stability.

#### Log Periodic Antennas: The Frequency-Flexible Option

If you need coverage across multiple bands without adjusting your antenna, the log periodic antenna (LPDA) might be your answer:

> **Key Information:** *An advantage of a log periodic antenna is wide bandwidth.* {{< link id="G9D06" >}}

<img src="../images/log-periodic-antenna.svg" alt="Log Periodic Antenna" style="width: 350px; margin: 10px;">

> **Key Information:** *A log periodic antenna has element length and spacing vary logarithmically along the boom.* {{< link id="G9D07" >}}

This progressive scaling of elements allows the antenna to operate over a wide frequency range with relatively consistent performance. While LPDAs typically have less gain than a Yagi optimized for a single frequency, their bandwidth makes them versatile for General class operators who want to work multiple bands with a single antenna.

#### Specialized Directional Antennas

Beyond Yagis and log periodics, several specialized directional antennas serve specific purposes:

1. **Halo Antennas for VHF/UHF**:

   > **Key Information:** *The maximum radiation from a VHF/UHF "halo" antenna is omnidirectional in the plane of the halo.* {{< link id="G9D03" >}}

   <img src="../images/halo-antenna.svg" alt="VHF/UHF Halo Antenna" style="width: 250px; margin: 10px;">

   Halo antennas are horizontally polarized but omnidirectional in azimuth, making them ideal for mobile or portable VHF SSB operation where you need horizontal polarization but don't want to constantly rotate a beam.

2. **Small Loop Antennas**:

   > **Key Information:** *An electrically small loop (less than 1/10 wavelength in circumference) has nulls in its radiation pattern broadside to the loop.* {{< link id="G9D10" >}}

   <img src="../images/small-loop-pattern.svg" alt="Small Loop Antenna Pattern" style="width: 300px; margin: 10px;">

   These nulls can be useful for direction finding or rejecting interference from a specific direction.

3. **Beverage Antennas for Low-Band DX**:

   > **Key Information:** *The primary use of a Beverage antenna is directional receiving for MF and low HF bands.* {{< link id="G9D09" >}}

   <img src="../images/beverage-antenna.svg" alt="Beverage Antenna" style="width: 400px; margin: 10px;">

   Beverage antennas are extremely long (typically 1-2 wavelengths) and mounted close to the ground. While they don't transmit efficiently, they excel at receiving weak signals from specific directions on the lower bands (160-40 meters), making them popular for serious DXers.

#### Practical Considerations for Directional Antennas

Before investing in a directional antenna, consider these practical factors:

1. **Space Requirements**: Yagis for lower frequencies can be huge—a 3-element Yagi for 20 meters might have a 24-foot boom and elements over 30 feet long.

2. **Mounting and Rotation**: Directional antennas need sturdy mounts and often require rotators to change direction.

3. **Wind Load**: Larger antennas catch more wind, requiring stronger towers and mounts.

4. **Visual Impact**: Larger antennas may raise aesthetic concerns or encounter zoning restrictions.

5. **Cost**: Quality directional antennas, towers, and rotators represent a significant investment.

These factors explain why many General class operators begin with simpler wire antennas and gradually add directional antennas as their interests and resources grow.

#### Making the Most of Directional Antennas

Directional antennas are transformative for HF operating. With your new General privileges, here's how they can enhance your experience:

1. **Working DX**: A modest Yagi at a reasonable height can make the difference between making that rare DX contact or missing it.

2. **Reducing Interference**: By pointing your antenna at the station you want to hear and putting others in the nulls, you can dramatically improve signal-to-noise ratio.

3. **Maximizing Limited Power**: If you're running 100 watts or less, a directional antenna effectively multiplies your power in the favored direction.

4. **Competitive Edge**: For contests or DX pile-ups, directional antennas help your signal stand out.

As you explore the bands with your new General license, directional antennas will open up exciting possibilities. Whether you start with a small 10-meter Yagi or invest in a tribander for 20/15/10 meters, you'll be amazed at the difference focused power can make in your amateur radio experience.

Now that we've covered how to direct your signal where you want it, let's look at some special antenna types that can help you make the most of portable, mobile, and space-constrained operations.