---
chapter: "3"
section: "3.1"
questions: ["E7C04", "E7C01", "E7C02", "E7C03", "E7C07", "E7C05", "E7C06", "E7C11", "E7C09", "E7C08", "E7C10", "E5C04"]
status: generated1
draft: true
---

### Section 3.1: Filters and Matching Networks

An amplifier's output network may need to do two jobs at once: present the right load to the amplifier and keep harmonics away from the antenna. The same reactive components can do both. Choosing their arrangement and values determines the impedance match and which frequencies pass.

#### Matching While Filtering

An impedance-matching network can make a complex load look like the resistance a source expects. *It must deal with both parts of impedance: cancel the unwanted reactance and transform the resistance.* A 50 Ω resistance is not the same load as $50+j30\ \Omega$.

> **Key Information:** An impedance-matching circuit cancels the reactive part of the impedance and changes the resistive part to the desired value. {{< link id="E7C04" >}}

Ideally, inductors and capacitors accomplish this without dissipating the transferred power. They change the relationship between input voltage and current. Because their reactances change with frequency, the match and the amount of signal passed also change with frequency.

For a low-pass match, a *Pi-network* uses two branches to ground and one component joining input to output. The drawing resembles the Greek letter $\pi$.

> **Key Information:** A low-pass Pi-network has a capacitor from input to ground, another capacitor from output to ground, and an inductor between input and output. {{< link id="E7C01" >}}

*Shunt* means connected across a circuit path, often from the signal line to ground. As frequency rises, the series inductor offers more opposition while the shunt capacitors offer less opposition to ground. Follow those two paths: the route toward the load becomes harder, while the route to ground becomes easier. Both effects reduce the high-frequency signal reaching the load.

*A T-network instead has two series arms with a branch to ground at their junction.* With capacitors in the series arms and an inductor in the shunt branch, low frequencies face large series reactance and an easier route to ground.

> **Key Information:** A T-network with series capacitors and a shunt inductor has a high-pass response. {{< link id="E7C02" >}}

At a 7 MHz fundamental, the second and third harmonics are 14 and 21 MHz. A low-pass output network can pass 7 MHz while suppressing those products of nonlinear transmitter circuits. If a Pi-network does not provide enough suppression, an extra inductor can strengthen its filtering.

> **Key Information:** A Pi-L network is a Pi-network with an additional series inductor at the output. That inductor provides greater harmonic suppression. {{< link id="E7C07" >}} {{< link id="E7C03" >}}

![Three filter schematics have input at the left and output at the right. The left, labeled pi, has a series inductor between its ports and a capacitor from each port node to ground. The middle, labeled T, has two series capacitors and an inductor from their junction to ground. The right, labeled pi-L, has the same two grounded capacitors and intervening series inductor as the pi network, followed by an additional series inductor between the second capacitor node and the output. Junction dots mark connected branches. The added output inductor is orange; its position identifies it without color.](../../../images/s3-1-matching-topologies.svg)
{.img-centered .img-xlarge .img-mobile-full caption="Left: low-pass Pi. Middle: high-pass T. Right: Pi-L, with an extra series inductor at the output for greater harmonic suppression. Input is at the left of each circuit; output is at the right."}

*The extra inductor gives those harmonics another obstacle on their way to the antenna.* The network still needs to transfer the wanted signal efficiently; harmonic suppression is not a matter of deliberately burning off power in a resistor.

#### Reading the Response

A nearby unwanted signal can fall in the transition between a filter's passband and its *stopband*, the range intended for rejection. The width of that transition determines how close the unwanted signal can be before the filter struggles to separate it from the wanted one.

The vertical scale on a response graph often spans a huge range of power. Decibels make that range manageable. A power ratio expressed in decibels is

$$G_{\mathrm{dB}}=10\log_{10}\left(\frac{P_{\mathrm{out}}}{P_{\mathrm{in}}}\right).$$

A ratio of one gives 0 dB; a ratio of ten gives +10 dB; a ratio of one-tenth gives −10 dB. Half power is about −3 dB. A decibel value here describes a ratio, not an absolute number of watts. When attenuation is stated as a positive loss, “20 dB attenuation” means an output power ratio of $1/100$, equivalent to −20 dB gain.

> **Key Information:** Circuit frequency-response graphs most often use a logarithmic Y-axis scale. {{< link id="E5C04" >}}

*A Y axis marked in equal decibel steps is logarithmic in power*: each 10 dB step represents another factor of ten. A curve falling from −20 to −40 dB therefore passes one-hundredth as much power at the second point as at the first.

A steeper transition can improve separation of nearby signals, but it may come with *ripple*: variation in response within a band. A Butterworth response keeps the passband flat; other filter families accept ripple to obtain a sharper transition.

> **Key Information:**
> - A Chebyshev filter has passband ripple and a sharp cutoff. {{< link id="E7C05" >}}
> - An elliptic filter has an extremely sharp cutoff with one or more notches in the stopband. {{< link id="E7C06" >}}

A *notch* is a narrow region of especially strong rejection. On a response graph, look for a deep downward dip: less signal gets through there. *Those stopband notches help the elliptic response fall rapidly beyond its passband.*

![Three illustrative low-pass response graphs have gain in decibels on the vertical axis and frequency increasing to the right. Butterworth has a flat passband and a smooth fall. Chebyshev has small passband ripples and a steeper fall. Elliptic has passband ripple, a sharp fall, and deep notches in its stopband. Lower on each graph means stronger rejection.](../../../images/s3-1-filter-responses.svg)
{.img-centered .img-xlarge caption="Typical low-pass response shapes. The small passband ripples and deep stopband notches are different features."}

Two filters can have the same 3 kHz passband yet behave differently when a strong station sits just outside it. *Shape factor* compares the widths of their responses at two stated attenuation levels, commonly the bandwidth at 60 dB down divided by the bandwidth at 6 dB down. A ratio closer to one means steeper sides.

> **Key Information:** Shape factor measures a filter's ability to reject signals in adjacent channels. {{< link id="E7C11" >}}

For example, a filter 3 kHz wide at 6 dB down and 6 kHz wide at 60 dB down has a shape factor of $6/3=2$.

#### Choosing a Resonator

When a filter uses resonators, choose ones suited to its signal level and frequency. Quartz crystals provide very sharp resonance for low-level signals in a small circuit-board package. *Helical resonators use a coil inside a conducting enclosure and serve VHF/UHF band-pass and notch-filter roles.*

A repeater places a much greater demand on its filters: its *duplexer* lets the transmitter and receiver share an antenna while isolating their frequencies. Cavity resonators store RF energy in conducting chambers, providing the separation and power handling that this job requires.

> **Key Information:**
> - A crystal lattice filter is a filter for low-level signals made using quartz crystals. {{< link id="E7C09" >}}
> - Helical filters are frequently used as band-pass or notch filters in VHF and UHF transceivers. {{< link id="E7C08" >}}
> - A 2-meter repeater duplexer uses cavity filters. {{< link id="E7C10" >}}

A small receiver crystal filter and a repeater cavity therefore solve different problems. Choose the filter's physical limits as carefully as its response curve.
