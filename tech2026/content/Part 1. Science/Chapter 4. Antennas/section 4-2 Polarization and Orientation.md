---
chapter: "4"
section: "4.2"
questions: [ "T9A03", "T3A09", "T3A04", "T3A03" ]
status: publish1
---

### Section 4.2: Polarization and Orientation

Slipping a letter through a mail slot is easier when you turn the letter to match the slot's orientation. If the slot is horizontal, you'll turn your letter sideways. If it's vertical, you'll orient your letter up-and-down. Antenna polarization works in a similar way — it's all about matching the orientation of your radio waves to get the best results.

![Illustration; top: boy holding a handheld radio with the antenna extending vertically. bottom: boy holding a handheld radio turned on its side with the antenna extending horizontally.](../../../images/illus/polarization.svg)
{.img-pgcap .float-right}

#### Types of Polarization

> **Key Information:** The polarization of an antenna is described by the orientation of the electric field. {{< link id="T9A03" >}}

Technically, polarization is about the orientation of the electric field component of the radio wave — but conveniently, the electric field usually lines up with the driven element of the antenna. So in practice, if your antenna is standing straight up, you're transmitting a vertically polarized signal; if it's lying sideways, you're transmitting a horizontally polarized signal.

We describe polarization in three primary ways: vertical, horizontal, and either elliptical or circular (which are mostly the same thing).

**Vertical and Horizontal** are pretty straightforward: an antenna standing straight up — like a flagpole — radiates with the electric field oriented vertically; the same antenna laid horizontally gives you horizontal polarization.
<div class="clear"></div>

**Elliptical polarization** is more interesting. When signals "reflect" off the ionosphere and return to Earth, their polarization can change, often becoming elliptically polarized. This means the wave's orientation traces an oval pattern as it moves through space. When this oval pattern becomes a perfect circle, we call it circular polarization.

> **Key Information:** Because signals propagated by the ionosphere are elliptically polarized, either vertically or horizontally polarized antennas may be used for transmission or reception. {{< link id="T3A09" >}}

Circular polarization is super useful for satellite work because it works regardless of how the antenna is oriented — kind of like a round peg that fits no matter how you rotate the hole. That's why many satellite operators use circularly polarized antennas.

#### Why Should You Care?

Simple — if you want the best signal possible, you want your receiving antenna to match the polarization of the incoming signal. Think back to that mail slot — you'll have a much easier time if your letter matches the slot's orientation.

> **Key Information:** Cross-polarization (when antennas at opposite ends of a line-of-sight link use different polarizations) causes received signal strength to be reduced. {{< link id="T3A04" >}}

If your polarization is mismatched with the station you want to communicate with, you could lose up to 20 dB of signal strength — that's like turning your 100-watt transmitter into a 1-watt transmitter. Ouch!

#### What Works Where?

Different types of operation tend to favor different polarizations. Here's the rundown:

1. **VHF/UHF FM and Repeaters**: Most repeaters use vertical polarization — that's why pretty much every antenna you see on cars and HTs is standing straight up. It's all about playing nice with the repeaters!

2. **VHF/UHF Weak Signal Work**: When making long-distance contacts without repeaters, horizontal polarization is normally used for long-distance CW and SSB contacts on VHF and UHF bands. {{< link id="T3A03" >}} This is more convention than physics — weak-signal operators standardized on horizontal decades ago, so using horizontal gives you a polarization match with everyone else doing the same thing. A side benefit is that horizontal antennas tend to pick up less man-made noise (which is often vertically polarized), so you get a better signal-to-noise ratio as a bonus.

3. **HF Operation**: Here's a fun twist — because the ionosphere tends to mix things up anyway, you can use either vertical or horizontal antennas. Each has its advantages, and many hams end up using both!

4. **Satellite Work**: Satellites don't sit still relative to us, so their signals are constantly changing polarization. Many satellite enthusiasts use circularly polarized antennas to handle this. It's like being ready for a mail slot that's spinning!

#### One More Tip

Want to experiment with polarization? If you've got a dipole antenna on a rotatable mount, you can switch between horizontal and vertical polarization just by rotating it. Instant flexibility!

And keep in mind — while matching polarization is important, don't stress about it too much. In the real world, buildings, trees, and terrain all scatter signals and mess with polarization anyway. Understand the basics, use them when you can, and don't worry too much when reality doesn't cooperate.

---

Now that we've covered how to orient your antenna, let's go over the various ways you can feed (connect to) it!
