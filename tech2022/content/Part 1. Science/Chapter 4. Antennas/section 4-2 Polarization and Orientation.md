---
chapter: "4"
section: "4.2"
questions: [ "T9A03", "T3A09", "T3A04", "T3A03" ]
---

### Section 4.2: Polarization and Orientation

Imagine you're trying to slip a letter through a mail slot. If the slot is horizontal, you'll turn your letter sideways. If it's vertical, you'll orient your letter up-and-down. Antenna polarization works in a similar way—it's all about matching the orientation of your radio waves to get the best results.

![Illustration; top: boy holding a handheld radio with the antenna extending vertically. bottom: boy holding a handheld radio turned on its side with the antenna extending horizontally.](../../../images/illus/polarization.svg)
{.img-pgcap .float-right}


#### Types of Polarization

Here's the deal with polarization - it's really just about which way your antenna is oriented and how that affects your radio waves. You've got three main flavors:

**Vertical Polarization**: 
Picture an antenna standing straight up and down, like a flagpole. The radio waves it sends out vibrate up and down as they travel. This is what you typically see on most mobile rigs and handheld radios.

**Horizontal Polarization**: 
Now imagine that flagpole laid down flat, parallel to the ground. You've got horizontal polarization - the waves vibrate side to side as they move. This is what you'll often use for those long-distance VHF/UHF contacts.

<div class="clear"></div>

> **Key Information:**
> - A dipole *oriented parallel to Earth's surface is a horizontally polarized antenna* {{< link id="T9A03" >}}

**Elliptical and Circular Polarization**:
Here's where things get interesting! When signals "reflect" off the ionosphere and return to Earth, their polarization can change, often becoming elliptically polarized. This means the wave's orientation traces an oval pattern as it moves through space. When this oval pattern becomes a perfect circle, we call it circular polarization.

> **Key Information:**
> - Because signals propagated by the ionosphere are elliptically polarized, *either vertically or horizontally polarized antennas may be used for transmission or reception* {{< link id="T3A09" >}}

Circular polarization is super useful for satellite work because it works regardless of how the antenna is oriented - kind of like a round peg that fits no matter how you rotate the hole. That's why many satellite operators use circularly polarized antennas.

The neat thing about ionospheric propagation is that it naturally induces elliptical polarization, which means either vertically or horizontally polarized antennas may be used for transmission or reception. Nature's doing the work of making your antenna choice more flexible!

#### Why Should You Care?

Simple - if you want the best signal possible, you want your receiving antenna to match the polarization of the incoming signal. Think back to that mail slot - you'll have a much easier time if your letter matches the slot's orientation.

> **Key Information:**
> - When antennas at opposite ends of a VHF/UHF line of sight radio link use different polarizations, the *received signal strength is reduced* {{< link id="T3A04" >}}

If your polarization is mismatched with the station you want to communicate with, you could lose up to 20 dB of signal strength - that's like turning your 100-watt transmitter into a 1-watt transmitter. Ouch!

#### What Works Where?

Different types of operation tend to favor different polarizations. Here's the rundown:

1. **VHF/UHF FM and Repeaters**: Most repeaters use vertical polarization - that's why pretty much every antenna you see on cars and HTs is standing straight up. It's all about playing nice with the repeaters!

2. **VHF/UHF Weak Signal Work**: When making long-distance contacts without repeaters, horizontal polarization is typically best. Most weak-signal VHF/UHF operators use horizontal antennas because they reduce signal loss due to polarization mismatch and can take better advantage of atmospheric propagation effects.

   > **Key Information:**
   > - *Horizontal polarization is normally used for long-distance CW and SSB contacts on VHF and UHF bands* {{< link id="T3A03" >}}

   It also tends to pick up less man-made noise, which is always a plus.

3. **HF Operation**: Here's a fun twist - because the ionosphere tends to mix things up anyway, you can use either vertical or horizontal antennas. Each has its advantages, and many hams end up using both!

4. **Satellite Work**: Now we're really having fun! Satellites don't sit still relative to us, so their signals are constantly changing polarization. Many satellite enthusiasts use circularly polarized antennas to handle this. It's like being ready for a mail slot that's spinning!

#### Cool Tricks and Tips

Want to experiment with polarization? Here's a neat trick: if you've got a dipole antenna on a rotatable mount, you can switch between horizontal and vertical polarization just by rotating it. Instant flexibility!

And here's something to keep in mind - while matching polarization is important, don't get too stressed about it. In the real world, buildings, trees, and terrain all mess with polarization anyway. The important thing is to understand the basics and use them to your advantage when you can.

Remember, this stuff is fun to play with! Try different orientations, see what works best for your situation, and don't be afraid to experiment. That's what ham radio is all about - learning by doing and having a blast while you're at it.
