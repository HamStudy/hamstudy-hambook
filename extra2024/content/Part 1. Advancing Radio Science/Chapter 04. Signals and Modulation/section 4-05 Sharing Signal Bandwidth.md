---
chapter: "4"
section: "4.5"
questions: ["E8B10", "E8B11", "E8B08", "E8B07", "E8D03", "E8D02", "E8D01"]
status: generated1
---

### Section 4.5: Sharing Signal Bandwidth

Sharing a repeater usually means taking turns. A DMR repeater lets two conversations run at once on one 12.5 kHz channel by giving each its own time slot. A system can also split a channel by frequency, and either way the receiver has to pull the streams apart again.

#### Dividing Frequency or Time

Split by frequency, a channel might carry one data stream in a lower subchannel and another in a higher one. They travel at the same time, and receiver filters separate them.

Split by time, it carries a repeating frame: stream A, then stream B, then stream C. Each stream uses the whole channel, but only in its own slots, like DMR's two.

> **Key Information:**
> - Frequency division multiplexing (FDM) is dividing the transmitted signal into separate frequency bands that each carry a different data stream. {{< link id="E8B10" >}}
> - In digital time division multiplexing, two or more signals are arranged to share discrete time slots of a data transmission. {{< link id="E8B11" >}}

#### Closely Packed Subcarriers

Ordinary FDM leaves room between channels so filters can separate them. **Orthogonal frequency-division multiplexing**, or OFDM, packs its subcarriers so closely that their spectra overlap. It ties their frequencies to the symbol interval. Over one interval, each subcarrier completes a whole number of cycles, and neighbors differ by exactly one cycle. When the receiver measures one subcarrier over that interval, each of the others averages out to zero. That is what orthogonal means here.

![Three sine waves are drawn one above another over the same symbol interval, which is marked by dashed vertical lines at its start and end. The top wave completes exactly 3 cycles in the interval, the middle wave 4 cycles, and the bottom wave 5 cycles. Each wave is labeled with its cycle count, starts and ends the interval at the same point in its cycle, and differs from its neighbor by exactly one cycle. An arrow below spans one symbol interval.](../../../images/s4-5-ofdm-subcarriers.svg)
{.img-centered .img-large .img-mobile-full caption="Over one symbol interval, each OFDM subcarrier completes a whole number of cycles, and neighbors differ by one cycle."}

Packing subcarriers this way lets a signal use many of them, each sending long, slow symbols. On a path with echoes, a delayed copy of one symbol can spill into the next, which is **intersymbol interference**. With long symbols, an echo overlaps only a small part of the next one, and a short **guard interval** between symbols absorbs it. Amateur Digital Radio Mondiale (DRM) image transmissions and DVB-T television, in the next section, both work this way.

> **Key Information:**
> - OFDM is a digital modulation technique using subcarriers at frequencies chosen to avoid intersymbol interference. {{< link id="E8B08" >}}
> - OFDM is a technique used for amateur digital modes. {{< link id="E8B07" >}}

#### Spreading a Signal on Purpose

Spread spectrum does the opposite of tight packing. It spreads a signal over a much wider band than the message needs, following a sequence that the receiver copies to recover it. The sequence is **pseudorandom**: it looks irregular but is reproducible.

One way moves a narrow signal around, jumping between frequencies many times a second in the order the sequence sets. A receiver that makes the same jumps keeps recovering the message. An interferer on one frequency spoils only part of it.

The other way combines the data with a much faster binary sequence, called a chip sequence, which rapidly shifts the carrier's phase. That spreads the signal thinly across a wide band. Applying the same sequence at the receiver gathers the wanted signal back into a narrow band. The same step spreads any other signal across the wide band, so a final narrow filter rejects most of it. Stations with different sequences can share one wide band at once, separated by sequence rather than by time or frequency. The figure below compares all four methods.

![Four small panels, two above and two below, share the same axes, with time running to the right and frequency running up. In the FDM panel, at upper left, three horizontal stripes each hold one stream on its own frequency band for the whole time. In the TDM panel, at upper right, three vertical stripes each give one stream the whole band for its own turn, repeating as A, B, C. In the frequency hopping panel, at lower left, a narrow block jumps to a different frequency in each time step in an irregular pattern. In the direct sequence panel, at lower right, one pale block covers the whole band for the whole time, showing a signal spread thinly everywhere.](../../../images/s4-5-sharing-methods.svg)
{.img-centered .img-xlarge .img-mobile-full caption="FDM gives each stream its own band all the time; TDM gives each stream the whole band in turn. Frequency hopping moves a narrow signal around the band; direct sequence spreads it thinly across the whole band."}

> **Key Information:**
> - Spread spectrum frequency hopping is rapidly varying the frequency of a transmitted signal according to a pseudorandom sequence. {{< link id="E8D03" >}}
> - Direct sequence spread spectrum uses a high-speed binary bit stream to shift the phase of an RF carrier. {{< link id="E8D02" >}}
> - Received spread spectrum signals are resistant to interference because signals not using the spread spectrum algorithm are suppressed in the receiver. {{< link id="E8D01" >}}
