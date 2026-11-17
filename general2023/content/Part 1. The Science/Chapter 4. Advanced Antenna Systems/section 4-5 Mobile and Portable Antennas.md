---
chapter: "4"
section: "4.5"
questions: ["G4E01", "G4E06", "G4E02", "G4E05", "G9D08", "G9D04", "G9D11", "G9D03"]
status: publish1
---

### Section 4.5: Mobile and Portable Antennas

Freedom to roam with radio—that's the promise of mobile and portable operation. The General privileges you’re studying for can turn a road trip into a chance to make worldwide contacts, every park visit into a Parks On The Air (POTA) event, and every emergency into a chance to provide vital communications. The challenge? Creating effective antennas that can travel with you while still getting your signal out to the world.

#### Engineering Magic: Making Big Antennas Small

Let's say you're taking a road trip and want to work 40 meters along the way. A simple quarter-wave whip should do it, right? That 33-foot antenna is unlikely to survive your first overpass—assuming the overhead power lines didn't take it out first.

Even so, hams work HF on the road all the time, sometimes reaching stations across the ocean with a whip just a few feet long. The trick is to make that short whip electrically long enough to resonate on 40 meters.

Remember the [resonant circuits]({{% pageref "1.3" %}}) we looked at earlier? The same principle applies here. Below its first resonance, a short whip has capacitive reactance. A loading coil can supply just enough inductive reactance to cancel it at the operating frequency, leaving only resistance at the feed point.

A capacitance hat is another way to add electrical length without making the whip taller. {{< link id="G4E01" >}}

> **Key Information:** A capacitance hat on a mobile antenna is used to *electrically lengthen a physically short antenna*. 

Think of a capacitance hat as spreading out the antenna's electric field at the top, where current is lowest. The hat is usually a set of four to eight horizontal spokes or a solid metal disk. Either shape adds capacitance to ground, *reducing the capacitive reactance of the short antenna*.

![One short whip has a loading coil inserted along its length. The other has both a loading coil and a capacitance hat, with spokes extending sideways from the tip. The hat adds capacitance; the coil adds inductance to help bring the short antenna to resonance. Each installation needs an RF return path at the base. The drawing does not give construction dimensions.](../../../images/s4-5-loaded-whips.svg)
{.img-centered .mw-70 .img-mobile-full caption="The parts are shown; their sizes depend on the design."}

Every engineering solution has trade-offs. {{< link id="G4E06" >}} When you shorten an antenna and add components to resonate it, you're creating a high-Q circuit with *a narrow bandwidth*.

**Q** describes stored energy compared with the energy radiated or lost each cycle. A high-Q resonant system tends to change its match quickly as frequency changes.

> **Key Information:** One disadvantage of using a shortened mobile antenna as opposed to a full-size antenna is *operating bandwidth may be very limited*. 

This narrow bandwidth means you might need to retune when moving just a few kilohertz up or down the band. Many mobile operators solve this with automatic antenna tuners or motorized antennas that adjust on the fly.

A tuner at the radio changes the load seen by the radio; it cannot remove losses in the short antenna. A motorized loading adjustment changes the antenna itself.

#### Taming Tip Discharge: Corona Protection

That innocent-looking ball at the tip of mobile HF antennas serves a critical purpose. When you key up with 100 watts into a shortened antenna, the high Q of the resonant circuit creates extreme voltage multiplication—potentially thousands of volts at the antenna tip! {{< link id="G4E02" >}}

> **Key Information:** The purpose of a corona ball on an HF mobile antenna is to *reduce RF voltage discharge from the tip of the antenna while transmitting*. 

Corona discharge happens when high voltage ionizes the air, creating a bluish glow and crackling sound around your antenna tip. Besides wasting power, this creates broadband noise that interferes with nearby electronics. The corona ball spreads out the electric field, reducing field concentration and *the chance of discharge*. The rounded tip helps; it does not guarantee no sparking and does not protect against lightning.

#### The Mobile Reality Check: Efficiency and Power

Here's the truth about mobile HF: more transmitter power doesn't fix an inefficient antenna system. {{< link id="G4E05" >}}

> **Key Information:** *The efficiency of the electrically short antenna* is what most limits an HF mobile installation. 

A full-size quarter-wave vertical might radiate 90% of your power. Shrink it to fit on a car, and efficiency can fall to 10% or less—meaning 90 watts or more of a 100-watt signal becomes heat in the coil, conductors and return path instead of radiating! A short antenna may have only a few ohms of radiation resistance. If the coil and return path add more resistance than that, more power becomes heat than radio waves.

To get the best efficiency, mount antennas as high as possible on the vehicle, use the largest diameter conductor that's practical, ensure excellent ground connections to the vehicle body, and keep losses in the loading system minimal.

#### The Screwdriver Revolution: Tuning on the Fly

Imagine changing bands while cruising down the highway, never stopping to adjust your antenna. That's the promise of the "screwdriver" antenna—one of amateur radio's most ingenious mobile solutions. Many models cover a wide range of HF bands with the push of a button; check the particular antenna and whip’s range, and make adjustments without distracting the driver.

The name refers to the motorized loading adjustment. {{< link id="G9D08" >}}

> **Key Information:** A "screwdriver" mobile antenna adjusts its feed point impedance by *varying the base loading inductance*. 

Inside that cylindrical base sits a motor-driven variable inductor. As the motor turns, it *changes the inductance* to cancel the antenna's capacitive reactance at your desired frequency—just like adjusting a variable capacitor in a tuned circuit. Modern versions include controllers that remember settings for each band, letting you change bands as easily as changing channels on your car radio.

#### Multiband Magic: Trap Antennas

Whether mobile or portable, carrying separate antennas for each band quickly becomes impractical. Enter the trap antenna—a clever solution that packs multiple resonant antennas into one physical structure. {{< link id="G9D04" >}}

> **Key Information:** The primary function of antenna traps is to *enable multiband operation*. 

Traps are parallel LC circuits that act as frequency-selective switches. At resonance, a parallel LC circuit presents high impedance, as [Section 1.3]({{% pageref "1.3" %}}) explains. That effectively cuts off the antenna at the trap. Below that frequency, the trap acts as an inductor. More of the antenna participates, and the trap’s loading helps establish a lower-frequency resonance. This lets *one antenna work like multiple antennas of different lengths*—a 40/20/15 meter trap vertical automatically selects the right electrical length for each band.

The multiband convenience comes with a catch. {{< link id="G9D11" >}} These antennas can radiate on frequencies you didn't intend.

> **Key Information:** A disadvantage of multiband antennas is that they have *poor harmonic rejection*. 

When your antenna resonates on multiple amateur bands, it might also *resonate on harmonics of your operating frequency*. Transmit on 7 MHz, and your second harmonic at 14 MHz might radiate efficiently too—potentially causing interference.

The transmitter creates that unwanted harmonic; the antenna may radiate it efficiently rather than rejecting it. Since the antenna can't distinguish between your desired signal and its harmonics, good transmitter filtering becomes essential with multiband antennas.

#### A Mobile VHF Option

**The Halo** solves the VHF mobile SSB problem—you need horizontal polarization but can't rotate an antenna while driving. {{< link id="G9D03" >}}

> **Key Information:** The maximum radiation from a VHF/UHF "halo" antenna is omnidirectional in the plane of the halo.

It's roughly a half-wave element bent into a loop shape, with its ends close but not joined; that gap is not generally the feed point. Mounted horizontally, the halo gives you horizontal polarization for SSB work with *roughly 360-degree coverage*—perfect for VHF contest operators who travel between locations and need to work stations in any direction without stopping.

#### From Antennas to Propagation

With shortened antennas, the same physics applies whether you are using a screwdriver on a vehicle or a loaded vertical in the field—adding reactance to achieve resonance despite size limitations.

Portable operation need not mean a shortened antenna. If there’s room for a full-size wire dipole, you can use the same design as at home and avoid losses added just to make it smaller.

Your antennas launch signals into space, but that's only half the story. In the next chapter, we'll discover how the ionosphere bends those signals around the Earth and why bands open and close. Understanding propagation transforms random band-scanning into strategic operating.
