---
slug: "section4.1"
questions: ["G9A01", "G9A03", "G9A05", "G9A06", "G6B04", "G6B07", "G6B11", "G6B12"]
---

### Section 4.1: Feed Lines and Connectors

With your new General class privileges opening up the HF bands, your signals will be traveling much farther than they did as a Technician. Having explored propagation in the previous chapter, you know how your signal can bounce around the world—but first, it has to get from your radio to your antenna efficiently. That's where feed lines come in.

Think of feed lines as the highways that carry your RF energy from your transmitter to your antenna. Just like highways, some are better constructed, carry more traffic, and have fewer delays than others. Choosing the right feed line for your station can make the difference between your signal reaching Australia or barely making it out of your neighborhood.

#### Understanding Transmission Lines

All feed lines have a characteristic impedance—their natural electrical "personality" determined by their physical construction. This characteristic impedance remains the same regardless of length (unlike the input impedance, which can vary along the line).

> **Key Information:** *The characteristic impedance of a parallel conductor feed line is determined by the distance between the centers of the conductors and the radius of the conductors.* {{< link id="G9A01" >}}

<img src="../images/parallel-line-impedance.svg" alt="Parallel Line Impedance Factors" style="width: 350px; margin: 10px;">

In simple terms, the characteristic impedance depends on:
- How far apart the conductors are
- How thick the conductors are

This impedance is a fundamental property of the line and determines how it interacts with your radio and antenna. Common characteristic impedances include:
- 50 ohms for most coaxial cable used in transmitting amateur radio equipment
- 75 ohms for TV/CATV coaxial cable and some receiving applications
- 300-600 ohms for various types of open-wire and ladder line

Speaking of ladder line:

> **Key Information:** *The nominal characteristic impedance of "window line" transmission line is 450 ohms.* {{< link id="G9A03" >}}

<img src="../images/window-line.svg" alt="Window Line (Ladder Line)" style="width: 300px; margin: 10px;">

"Window line" gets its name from the regular openings or "windows" in the insulating material between the conductors. This design reduces dielectric losses and makes it highly efficient, especially at HF frequencies.

#### Feed Line Loss: The Signal Thief

Every feed line introduces some loss—RF energy that gets converted to heat rather than making it to your antenna. Understanding these losses helps you make better feed line choices:

> **Key Information:** *The attenuation of coaxial cable increases with increasing frequency.* {{< link id="G9A05" >}}

<img src="../images/coax-loss-vs-frequency.svg" alt="Coaxial Cable Loss vs. Frequency Chart" style="width: 400px; margin: 10px;">

This increasing loss happens because:
- RF current tends to flow on the outer surface of conductors at higher frequencies (skin effect)
- Dielectric losses in the insulation increase with frequency
- Radiation leakage becomes more significant at higher frequencies

When comparing different feed lines, loss is typically specified in a standardized way:

> **Key Information:** *RF feed line loss is usually expressed in decibels per 100 feet.* {{< link id="G9A06" >}}

For example, RG-8X coaxial cable might have a loss of:
- 1.0 dB/100 ft at 10 MHz
- 2.0 dB/100 ft at 50 MHz
- 4.5 dB/100 ft at 146 MHz

These numbers help you compare different feed line options and calculate total loss for your particular installation.

#### Choosing the Right Feed Line

When selecting a feed line for your station, consider these factors:

1. **Frequency of operation**:
   - Higher frequencies need better quality lines with lower loss
   - VHF/UHF operation is more sensitive to feed line loss than HF

2. **Power level**:
   - Higher power requires larger diameter coax or wider-spaced ladder line
   - Some smaller coax types can't safely handle legal limit power

3. **Feed line length**:
   - Longer runs multiply the loss
   - A short run of moderately lossy cable might be acceptable, while a long run would need a lower-loss option

4. **Installation environment**:
   - Coax works well in wet conditions and can be buried
   - Ladder line needs to be kept away from metal objects and works best in dry conditions

5. **Antenna system**:
   - Balanced antennas (like dipoles) work well with ladder line
   - Unbalanced antennas (like verticals) typically use coax

For multiband HF operation, ladder line often provides significantly lower loss than coaxial cable, especially when the antenna isn't perfectly resonant on all bands. However, it requires more careful installation and typically needs an antenna tuner at the radio end.

#### RF Connectors: Critical Connection Points

All the high-quality feed line in the world won't help if your connections are poor. RF connectors are specialized fittings designed to maintain the characteristic impedance of your feed line at junction points while providing reliable mechanical and electrical connections.

Different frequency ranges and applications call for different connector types:

##### BNC Connectors

> **Key Information:** *A typical upper frequency limit for low SWR operation of 50-ohm BNC connectors is 4 GHz.* {{< link id="G6B04" >}}

<img src="../images/bnc-connector.svg" alt="BNC Connector" style="width: 200px; margin: 10px;">

BNC (Bayonet Neill-Concelman) connectors are compact and feature a quick-connect/disconnect bayonet locking mechanism. They're commonly used in test equipment, low-power amateur applications, and portable gear. While rated for frequencies up to 4 GHz, their performance starts to degrade above 1 GHz in many practical applications.

##### Type N Connectors

> **Key Information:** *A type N connector is a moisture-resistant RF connector useful to 10 GHz.* {{< link id="G6B07" >}}

<img src="../images/n-connector.svg" alt="Type N Connector" style="width: 200px; margin: 10px;">

Type N connectors are workhorse fittings for VHF, UHF, and microwave applications. Their threaded coupling provides a secure connection, and their design maintains excellent impedance matching up to 10 GHz. They're often used in base stations, repeaters, and applications where performance and weather resistance are critical.

##### SMA Connectors

> **Key Information:** *An SMA connector is a small threaded connector suitable for signals up to several GHz.* {{< link id="G6B11" >}}

<img src="../images/sma-connector.svg" alt="SMA Connector" style="width: 180px; margin: 10px;">

SMA (SubMiniature version A) connectors are compact threaded connectors commonly found in modern SDR (Software Defined Radio) equipment, handheld transceivers, and microwave systems. Despite their small size, they provide excellent performance up to about 18 GHz in high-quality versions.

##### Audio and Control Connectors

Not all connectors in amateur radio handle RF signals:

> **Key Information:** *RCA Phono connectors are commonly used for low frequency or DC signal connections to a transceiver.* {{< link id="G6B12" >}}

<img src="../images/rca-connector.svg" alt="RCA Phono Connector" style="width: 180px; margin: 10px;">

RCA connectors (also called phono connectors) are used for audio, PTT (Push-To-Talk), and other low-frequency or DC connections. While not suitable for RF applications, they're widely used for interconnecting station accessories like audio interfaces, foot switches, and external speakers.

#### Feed Line Installation Best Practices

Even the best feed line and connectors can underperform if improperly installed. Here are some tips for getting the most from your feed line system:

1. **Plan the route** from radio to antenna carefully:
   - Make runs as short and direct as practical
   - Avoid sharp bends (especially in coax)
   - Keep parallel-conductor lines away from metal objects

2. **Install coaxial connectors properly**:
   - Follow manufacturer instructions exactly
   - Use the right tools for the job
   - Ensure connections are waterproof for outdoor installations
   - Check for shorts or opens before completing installation

3. **Provide proper support**:
   - Don't let the feed line hang unsupported for long distances
   - Use proper strain relief at connection points
   - Allow some slack for thermal expansion/contraction and wind movement

4. **Consider using multiple feed line types**:
   - Ladder line for the longer outdoor run to reduce loss
   - Short coax jumpers where needed for equipment connections
   - Appropriate transitions and baluns between different line types

5. **Protect against moisture and UV damage**:
   - Use quality weatherproofing on outdoor connections
   - Select UV-resistant cable jackets for exposed runs
   - Consider conduit for buried lines

#### Feed Line Troubleshooting

When your antenna system isn't performing as expected, the feed line is often the culprit. Here are some common issues and how to identify them:

1. **High SWR on all bands**:
   - Check for connector problems (shorts, opens)
   - Look for damaged feed line (kinks, water intrusion)
   - Inspect baluns and transitions

2. **Increasing SWR over time**:
   - Check for water infiltration at connections
   - Look for physical damage to the feed line
   - Inspect for corrosion at connection points

3. **Higher loss than expected**:
   - Verify connectors are properly installed
   - Check for moisture in the line
   - Verify the actual line type (sometimes cables are mislabeled)

4. **Intermittent operation**:
   - Look for loose connections
   - Check for feed line movement in the wind
   - Inspect for partial breaks in the conductors

Simple test equipment like an antenna analyzer or SWR meter can help identify many feed line problems before they cause serious issues with your station's performance.

#### From Radio to Antenna and Beyond

Your feed line is a critical link in the chain from your radio to the distant station you're trying to work. With your new HF privileges, choosing the right feed line and connectors—and installing them properly—can make the difference between frustration and successful DX.

In the next section, we'll explore how to ensure maximum power transfer by matching your antenna's impedance to your feed line, solving the puzzle of Standing Wave Ratio (SWR) and its effects on your station's performance.