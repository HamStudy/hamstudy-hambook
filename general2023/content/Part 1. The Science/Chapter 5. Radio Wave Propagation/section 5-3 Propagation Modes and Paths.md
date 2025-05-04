---
slug: "section3.3"
questions: ["G3B01", "G3B02", "G3B03", "G3B04", "G3B09", "G3B10", "G3B12", "G3C06", "G3C07", "G3C08", "G3C09", "G3C10"]
---

### Section 5.3: Propagation Modes and Paths

With your General class privileges, you'll discover that radio signals don't always travel in straight lines or take the most obvious path to their destination. In fact, some of the most interesting contacts happen through unusual propagation modes that can surprise even experienced operators. Let's explore the various ways your signals can travel and how to take advantage of them!

#### Beyond the Horizon: How HF Travels the Globe

Unlike VHF and UHF signals that primarily travel line-of-sight, HF signals can reach around the world through various propagation modes. Understanding these modes helps you predict when and where your signals will be heard.

##### Skip and Hop Propagation

<img src="../images/skip-propagation.svg" alt="Skip Propagation Diagram Showing Multiple Hops" style="width: 450px; margin: 10px;">

The most common type of long-distance HF propagation occurs when your signal "skips" off the ionosphere and returns to Earth at a distance. The signal may then bounce off the Earth and return to the ionosphere for another "hop," extending the range even further.

As we learned in Section 3.1, different ionospheric layers provide different skip distances:

> **Key Information:** 
> - *The approximate maximum distance along the Earth's surface normally covered in one hop using the F2 region is 2,500 miles.* {{< link id="G3B09" >}}
> - *The approximate maximum distance along the Earth's surface normally covered in one hop using the E region is 1,200 miles.* {{< link id="G3B10" >}}

Multiple hops can allow communication over much greater distances—even to the opposite side of the globe under favorable conditions.

##### Short Path vs. Long Path

When you're trying to contact a distant station, there are actually two possible routes your signal can take around the spherical Earth:

1. **Short Path**: The most direct route (the shortest great circle path)
2. **Long Path**: The route going the opposite way around the globe

<img src="../images/short-long-path.svg" alt="Short Path vs Long Path Diagram" style="width: 400px; margin: 10px;">

Most contacts occur via short path, but sometimes long path propagation provides better results:

> **Key Information:** *A characteristic of skywave signals arriving at your location by both short-path and long-path propagation is a slightly delayed echo.* {{< link id="G3B01" >}}

This echo occurs because the long path signal takes longer to arrive than the short path signal. If conditions are right, you might hear both signals with a distinct delay between them—a fascinating propagation phenomenon.

How can you tell if a signal is coming via long path?
- The signal arrives from the opposite direction than expected
- Signal strength peaks at unusual times for the short path
- The echo effect mentioned above is present

To work a station via long path, you'd point your directional antenna 180 degrees away from the station's actual location—in the complete opposite direction!

#### Specialized Propagation Modes

Beyond basic skip propagation, several specialized propagation modes can provide exciting operating opportunities.

##### HF Scatter

Not all ionospheric propagation occurs through neat, mirror-like reflections. Sometimes energy is scattered in various directions:

> **Key Information:** *Signals in an HF scatter path often have a fluttering sound.* {{< link id="G3C06" >}}

This fluttering occurs because:

> **Key Information:** *HF scatter signals often sound distorted because energy is scattered into the skip zone through several different paths.* {{< link id="G3C07" >}}

Scatter propagation can be useful because:

> **Key Information:** *Scatter propagation allows signals to be heard in the skip zone.* {{< link id="G3C09" >}}

However, there's a downside:

> **Key Information:** *HF scatter signals in the skip zone are usually weak because only a small part of the signal energy is scattered into the skip zone.* {{< link id="G3C08" >}}

Despite being weak, scatter signals can provide contacts when no other propagation mode is available, making them valuable for filling in the "skip zone" where signals might otherwise not be heard.

##### Sporadic E

Sporadic E (Es) propagation occurs when small, intensely ionized patches form in the E region of the ionosphere. These patches can reflect signals at much higher frequencies than normal E-layer propagation:

<img src="../images/sporadic-e.svg" alt="Sporadic E Propagation" style="width: 400px; margin: 10px;">

Sporadic E is most common on the 10 and 6 meter bands, but occasionally extends up to 2 meters. It typically occurs during summer months and provides sudden, often intense openings that can last from minutes to hours.

Sporadic E characteristics:
- Often appears suddenly and unpredictably
- Provides strong but sometimes fleeting openings
- Typically offers single-hop distances of 500-1,400 miles
- Most common in summer months, particularly May through August in the Northern Hemisphere

##### NVIS: Near Vertical Incidence Skywave

For regional communications in the 100-300 mile range, NVIS propagation is particularly useful:

> **Key Information:** *Near Vertical Incidence Skywave (NVIS) propagation is short distance MF or HF propagation at high elevation angles.* {{< link id="G3C10" >}}

<img src="../images/nvis-propagation.svg" alt="NVIS Propagation Diagram" style="width: 400px; margin: 10px;">

Unlike traditional skip propagation that uses low radiation angles to achieve distance, NVIS uses high-angle radiation (almost straight up) that returns to Earth in a circular pattern around your station. This creates a coverage area with a radius of roughly 300 miles or less.

NVIS works best on lower frequencies (typically 40, 60, and 80 meters during the day, and 160 meters at night) and is particularly valuable for:
- Emergency communications over a region
- Filling in the skip zone where regular skip propagation doesn't reach
- Communicating over mountainous terrain
- Maintaining regional nets

To optimize for NVIS:
- Use horizontal antennas mounted low to the ground (0.1 to 0.25 wavelengths high)
- Focus on lower frequency bands (160-40 meters)
- Operate during daytime on higher frequencies (40-60 meters) and nighttime on lower frequencies (80-160 meters)

#### Predicting Propagation Conditions

While propagation can sometimes seem mysterious, there are ways to predict and assess current conditions:

> **Key Information:** *A way to determine if current propagation on a desired band from your station is by using a network of automated receiving stations on the internet to see where your transmissions are being received.* {{< link id="G3B04" >}}

Several networks of automated receivers around the world can detect your signal and report reception via the internet. The most popular of these is the Reverse Beacon Network (RBN) for CW and some digital modes, and the PSK Reporter network for digital modes.

These tools allow you to:
- See immediately where your signal is being heard
- Identify which bands are currently open to different parts of the world
- Test antenna performance
- Discover unexpected propagation openings

Remember that propagation is influenced by numerous factors:

> **Key Information:** *The MUF (Maximum Usable Frequency) is affected by path distance and location, time of day and season, and solar radiation and ionospheric disturbances.* {{< link id="G3B02" >}}

For best results in long-distance communication:

> **Key Information:** *The frequency that will have the least attenuation for long-distance skip propagation is just below the MUF.* {{< link id="G3B03" >}}

Operating just below the MUF gives you the benefits of:
- Lower absorption than lower frequencies
- Better refraction than higher frequencies
- Often the best signal-to-noise ratio

#### Seasonal Variations

Different seasons bring different propagation characteristics:

> **Key Information:** *During the summer, the lower HF frequencies typically experience high levels of atmospheric noise or static.* {{< link id="G3B12" >}}

This summer static comes from increased thunderstorm activity worldwide. Lightning discharges generate significant radio noise that affects primarily the lower frequency bands (160, 80, and 40 meters).

Seasonal effects to remember:
- Summer: Higher static on lower bands, good Sporadic E on upper bands
- Winter: Lower noise on lower bands, generally better for 160 and 80 meters
- Spring/Fall: Often the best seasons for HF DX, especially around the equinoxes

#### Time of Day Considerations

The time of day dramatically affects which bands are open for long-distance communication:

- **Daytime**: Higher frequencies (20-10 meters) generally work best
- **Nighttime**: Lower frequencies (160-30 meters) typically perform better
- **Sunrise/Sunset**: These transition periods often provide unique propagation opportunities when both day and night paths may be available

#### Propagation Toolbox

To make the most of various propagation modes:

1. **Listen Before Transmitting**:
   - Scan the bands to find where signals are coming in
   - Pay attention to where other stations are making contacts

2. **Use Online Resources**:
   - Propagation prediction websites and software
   - Real-time propagation reporting networks
   - DX cluster spots showing current activity

3. **Try Different Modes and Bands**:
   - When one band seems dead, try another
   - Different modes (CW, SSB, digital) have different effective signal-to-noise ratios

4. **Be Persistent**:
   - Propagation can change quickly
   - Sometimes calling CQ into an apparently "dead" band can reveal surprising openings

#### The Complete Journey: From Radio to Radio

We've now followed the complete journey of a radio signal—from the electrical principles that make it possible, through the components that generate and process it, the modulation methods that encode information onto it, the antenna systems that launch it into space, and finally the propagation mechanisms that carry it around the world.

This understanding of the entire communication chain gives you a solid foundation for making the most of your General class privileges. You'll be able to make informed decisions about when and where to operate, which modes to use for different conditions, and how to optimize your station for the contacts you want to make.

In Part 2 of this HamBook, we'll build on this technical foundation by exploring operating procedures, station setup, regulations, and safety considerations. You'll learn not just how radio works, but how to use it effectively to connect with other operators around the block or around the world. With the science under your belt, you're ready to dive into the practical aspects of General class operation!
