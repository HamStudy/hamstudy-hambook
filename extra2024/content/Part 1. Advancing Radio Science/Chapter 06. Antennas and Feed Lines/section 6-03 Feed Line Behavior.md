---
chapter: "6"
section: "6.3"
questions: ["E9F01", "E9F02", "E9F03", "E9F06", "E9F07", "E9F08", "E9F05", "E9E07", "E9F04", "E9F09", "E9F12", "E9F10", "E9F11"]
status: generated1
draft: true
---

### Section 6.3: Feed Line Behavior

Changing feed-line length can change the impedance seen at the transmitter without changing the antenna. Incident and reflected waves combine differently at each point along the line. By choosing its length deliberately, we can use that behavior to transform an impedance or supply a reactance for matching.

#### Wavelength Inside the Line

A matching section needs a particular electrical length: a particular fraction of a wave's cycle. Its physical length depends on wave speed in the cable. *The line's dielectric—the insulating material between its conductors—slows the wave.* *Velocity factor, or VF, compares that speed with the speed of light in a vacuum:*

$$VF=\frac{v_{\text{line}}}{c}.$$

> **Key Information:**
> - Velocity factor is wave velocity in the line divided by the velocity of light in a vacuum. {{< link id="E9F01" >}}
> - The insulating dielectric has the biggest effect on velocity factor. {{< link id="E9F02" >}}
> - Coax is electrically longer than its physical length suggests because waves travel more slowly in it than in air. {{< link id="E9F03" >}}

“Electrically longer” means more phase delay per meter. If VF is 0.66, a wave travels only 66% as far during one cycle as it would in free space. The physical length for a chosen fraction of a wavelength is therefore the free-space length multiplied by VF.

For an air-insulated parallel line at 14.10 MHz, use VF approximately equal to 1:

$$L_{1/2}\approx\frac{300}{2\times14.10}\times1=10.6\text{ m}.$$

> **Key Information:** An air-insulated parallel line that is electrically one-half wavelength at 14.10 MHz is about 10.6 meters long. {{< link id="E9F06" >}}

The same electrical length in VF 0.66 coax would be about $10.6\times0.66=7.0$ meters. Before cutting a matching section, check the cable’s velocity factor as well as your tape measure. Seven meters and 10.6 meters can represent the same electrical length in different lines.

#### Loss and Construction

Conductor resistance and dielectric loss convert some traveling energy into heat. *Air-insulated parallel line generally loses less power than coax with a plastic dielectric.* Its open fields, however, make conductor spacing and nearby objects part of the installation.

Foamed dielectric replaces some solid material with gas. *Compared with otherwise similar solid-dielectric coax, that raises velocity factor and lowers loss. It also lowers the safe maximum operating voltage in the comparison used by the pool.*

> **Key Information:**
> - Parallel-conductor line generally has lower loss than plastic-dielectric coax. {{< link id="E9F07" >}}
> - With other parameters equal, foam-dielectric coax has lower loss per unit length, higher velocity factor, and lower safe maximum operating voltage than solid-dielectric coax. {{< link id="E9F08" >}}

A particular cable's voltage rating must still come from its manufacturer. A higher velocity factor alone does not establish a safe voltage.

The same need for controlled impedance applies to the short paths between microwave components on a circuit board. *Microstrip uses a precisely sized conducting trace over a ground plane, separated by the board dielectric.* Its geometry controls impedance, so it cannot be treated as an arbitrary piece of hookup wire.

> **Key Information:** Microstrip consists of precision printed-circuit conductors above a ground plane, providing constant-impedance microwave interconnections. {{< link id="E9F05" >}}

#### Reflections and Loss

SWR tells us the size of a mismatch, but predicting impedance along the line also requires the reflected wave's phase. A load equal to the line's characteristic impedance, $Z_0$, produces no reflection. For other loads, we need to describe both the size and phase of that reflection.

*The reflection coefficient, $\Gamma$ (capital gamma), gives the reflected voltage wave relative to the incident voltage wave, including phase.* For a load impedance $Z_L$,

$$\Gamma=\frac{Z_L-Z_0}{Z_L+Z_0}.$$

> **Key Information:** Reflection coefficient describes the interaction between a load and a transmission line. {{< link id="E9E07" >}}

For a 100-ohm resistive load on 50-ohm line, $\Gamma=(100-50)/(100+50)=1/3$. The reflected power fraction is $|\Gamma|^2=1/9$, about 11%. Incident and reflected waves also create stationary voltage maxima and minima. Their ratio is standing wave ratio, or SWR:

$$SWR=\frac{1+|\Gamma|}{1-|\Gamma|}=2:1.$$

Reflection sends energy back along the line; resistance turns energy into heat. A lossless mismatched line can have high SWR without dissipating power. Real line loss changes the practical result, and a long lossy line can make the transmitter-end SWR look deceptively mild.

#### Impedance Along a Line

To use a line as a matching component, follow how the reflected wave's phase changes along it. That changes the local voltage-to-current ratio, and therefore the impedance seen at each point. *An ideal half-wave line repeats its terminating impedance.* *A quarter-wave line inverts it: a short appears open, and an open appears short.*

![Two side-by-side graphs align standing-wave magnitude envelopes with transmission-line schematics. Distance runs from the load at the left, through a quarter wavelength at the middle guide, to the half-wave input at the right. The solid blue curve is voltage magnitude divided by its maximum; the dashed orange curve is current magnitude divided by its own maximum. In the left-hand, shorted line, voltage is zero at the load, maximum at one quarter wavelength, and zero at one half wavelength; current has the opposite pattern. In the right-hand, open line, voltage is maximum, zero, maximum at those positions, and current is zero, maximum, zero. The left schematic joins the two conductors at the load; the right leaves their ends open. Both have input terminals at the right. For a line ending at the quarter-wave guide, the shorted load therefore gives high input impedance, and the open load gives low input impedance. The curves show magnitudes versus position, not simultaneous instantaneous voltage and current.](../../../images/s6-3-standing-waves.svg)
{.img-centered .img-xlarge .img-mobile-full caption="Lossless lines, shorted at left and open at right. Curves show voltage and current magnitudes along the line, each scaled to its own maximum. At a quarter wavelength, a short looks open and an open looks short; a half wavelength repeats the load. These are spatial envelopes, not instantaneous waveforms."}

> **Key Information:**
> - A shorted half-wave line presents very low impedance. {{< link id="E9F04" >}}
> - A shorted quarter-wave line presents very high impedance. {{< link id="E9F09" >}}
> - An open quarter-wave line presents very low impedance. {{< link id="E9F12" >}}

Matching may require a particular reactance rather than an open or a short. A shorter line section can supply one: one-eighth wavelength gives 45 degrees of travel phase, halfway to a quarter-wave section. *At that length, a lossless shorted line has reactance $+Z_0$: inductive. The corresponding open line has reactance $-Z_0$: capacitive.*

For a lossless shorted line, the general relation is $X=Z_0\tan(\beta l)$, where $\beta l$ is the electrical length in radians. One-eighth wavelength is $\pi/4$ radians, or 45 degrees. Since $\tan(\pi/4)=1$, this gives the $+Z_0$ result above.

> **Key Information:**
> - A shorted one-eighth-wave line presents inductive reactance. {{< link id="E9F10" >}}
> - An open one-eighth-wave line presents capacitive reactance. {{< link id="E9F11" >}}

Thus an eighth-wave section of 50-ohm line can supply approximately $+j50\ \Omega$ when shorted or $-j50\ \Omega$ when open. These deliberately terminated pieces, called *stubs*, will become useful matching components later in the chapter.
