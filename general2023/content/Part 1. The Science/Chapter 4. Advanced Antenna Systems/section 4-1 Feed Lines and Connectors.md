---
chapter: "4"
section: "4.1"
questions: ["G9A01", "G9A03", "G9A05", "G9A06", "G6B04", "G6B07", "G6B11", "G6B12"]
status: reviewed1
---

### Section 4.1: Feed Lines and Connectors

Your new General class privileges open up the HF bands where your signals can travel around the world—but first, they need to get from your radio to your antenna efficiently. Think of feed lines as the superhighways that carry your RF energy on its journey to exciting destinations. Just like highways, some are smooth six-lane expressways while others are bumpy back roads full of potholes. Choosing the right feed line can make the difference between reaching that rare DX station in Antarctica or watching your signal get lost somewhere between your shack and the backyard!

#### Understanding Characteristic Impedance

Every feed line has a characteristic impedance—its natural electrical "personality" determined by physical construction, not by what's connected to it:

> **Key Information:** The characteristic impedance of a parallel conductor feed line is determined by the distance between the centers of the conductors and the radius of the conductors. {{< link id="G9A01" >}}

In simple terms:
- Conductors farther apart = higher impedance
- Thicker conductors = lower impedance

Common impedances include:
- **50 ohms**: Most amateur radio coaxial cable
- **75 ohms**: TV cable and some receiving applications  
- **450 ohms**: Window line (ladder line)

Why does impedance matter? When your feed line doesn't match your radio or antenna impedance, some of your signal bounces back instead of going to the antenna. This creates "standing waves" that waste power and can even damage your radio if severe enough. That's why matching 50-ohm coax to 50-ohm equipment is so important!

> **Key Information:** The nominal characteristic impedance of "window line" transmission line is 450 ohms. {{< link id="G9A03" >}}

**Window line** gets its name from the little openings—or “windows”—between the two conductors. These cutouts reduce weight, lower signal loss by minimizing plastic between the wires, and help water and dirt drain off more easily. The consistent spacing between conductors is what makes window line so efficient, especially for HF antennas.

But that efficiency comes with some tradeoffs. Window line is very sensitive to its surroundings—keep it well clear of metal objects like towers, guy wires, or gutters. Even other nearby window lines can cause issues, unlike coax, which can usually be bundled or run side-by-side without trouble. Sharp bends are also a no-go, and even **rain, ice, or dirt** can affect performance by altering the signal path between the wires.

#### Feed Line Loss: Where Your Power Goes

Every feed line converts some of your precious RF energy into heat. Understanding these losses helps you make smart choices:

> **Key Information:** The attenuation of coaxial cable increases with increasing frequency. {{< link id="G9A05" >}}

This happens because:
- RF current concentrates on conductor surfaces at higher frequencies (skin effect)
- Dielectric losses in the insulation increase with frequency
- More energy leaks out at higher frequencies

Loss specifications help you compare different cables:

> **Key Information:** RF feed line loss is usually expressed in decibels per 100 feet. {{< link id="G9A06" >}}

For example, RG-8X might show:
- 1.0 dB/100 ft at 10 MHz
- 4.5 dB/100 ft at 146 MHz

Yikes! Remember that 3 dB represents half your power, so a 100-foot run of RG-8X on 2 meters gobbles up more than half your signal before it even reaches the antenna. That's like having a really hungry monster living in your feed line!

#### Choosing Feed Line for Your Station

**For HF Operation:**
- **Ladder line**: Lowest loss, especially with antenna tuners, but requires careful installation
- **High-quality coax (RG-213, LMR-400)**: Good performance with easier installation
- **RG-8X or RG-58**: Acceptable for short runs or QRP operation

**For VHF/UHF:**
- **Low-loss coax**: Essential due to higher frequency losses
- **Short runs**: Keep feed lines as short as practical
- **Quality connectors**: Poor connections become major loss sources

**Installation Considerations:**
- **Coax**: Weather-resistant, can be buried, works near metal
- **Ladder line**: Must stay dry and away from metal objects
- **Power handling**: Higher power needs larger conductors
- **Flexibility**: Some installations require more flexible cables

#### RF Connectors: The Critical Links

Poor connectors can ruin an otherwise excellent feed line system. Different applications need different connector types:

##### BNC Connectors
> **Key Information:** A typical upper frequency limit for low SWR operation of 50-ohm BNC connectors is 4 GHz. {{< link id="G6B04" >}}

BNC connectors use a quick bayonet lock (satisfying click!) and work well for test equipment and low-power applications up to about 1 GHz in most practical uses.

Keep in mind that BNC connectors are not weatherproof, so they need extra protection for outdoor use. They're also limited to lower power levels (typically under 100 watts at HF), making them perfect for QRP and test equipment but not suitable for high-power stations.

##### Type N Connectors
> **Key Information:** A type N connector is a moisture-resistant RF connector useful to 10 GHz. {{< link id="G6B07" >}}

Type N connectors are the workhorses for VHF/UHF base stations and repeaters. Their threaded coupling provides excellent performance and weather resistance.

##### SMA Connectors
> **Key Information:** An SMA connector is a small threaded connector suitable for signals up to several GHz. {{< link id="G6B11" >}}

SMA connectors are compact and commonly found on handheld radios, SDR equipment, and test instruments. Despite their tiny size, these little connectors pack a serious performance punch well into the microwave region!

##### Audio/Control Connectors
> **Key Information:** RCA Phono connectors are commonly used for low frequency or DC signal connections to a transceiver. {{< link id="G6B12" >}}

RCA (phono) connectors handle audio, PTT lines, and other non-RF connections between your radio and station accessories.

#### Installation Tips for Success

**Connector Installation:**
- Follow manufacturer instructions exactly
- Use proper tools—don't improvise
- Make outdoor connections weatherproof
- Test for shorts/opens before final installation

**Feed Line Routing:**
- Keep runs as short and direct as possible
- Avoid sharp bends in coax
- Keep ladder line away from metal objects
- Provide adequate support—don't let cables hang unsupported

**Troubleshooting Common Problems:**
- **High SWR on all bands**: Check connectors for shorts or opens
- **Increasing SWR over time**: Look for water infiltration
- **Higher loss than expected**: Verify proper connector installation
- **Intermittent operation**: Check for loose connections or cable movement

#### Making the Connection

Your feed line is the crucial link between your carefully crafted signals and the antenna that launches them on their worldwide adventures. Quality feed lines and proper installation ensure that maximum power from your transmitter actually makes it to the antenna—and that's when the real fun begins!

But getting power to the antenna is only half the story. In the next section, we'll explore the fascinating world of impedance matching and SWR, and learn how to optimize power transfer for maximum performance on the air.
