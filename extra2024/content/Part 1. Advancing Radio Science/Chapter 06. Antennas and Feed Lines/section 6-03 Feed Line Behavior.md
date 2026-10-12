---
chapter: "6"
section: "6.3"
questions: ["E9F01", "E9F02", "E9F03", "E9F06", "E9F07", "E9F08", "E9F05", "E9E07", "E9F04", "E9F09", "E9F12", "E9F10", "E9F11"]
status: generated1
draft: true
---

### Section 6.3: Feed Line Behavior

On a mismatched feed line, forward and reflected waves combine into a standing wave, with voltage peaks and dips at fixed points along the line. SWR sums up that pattern in one number, the ratio of the highest voltage to the lowest. Voltage and current vary from point to point, so the impedance does too, and a line cut to a chosen length can become a matching component.

#### Wavelength Inside the Line

A matching section needs a particular **electrical length**: the fraction of a wavelength it spans, measured inside the line. Its physical length depends on how fast the wave travels there, and the line's dielectric, the insulating material between its conductors, slows the wave. A **velocity factor**, VF, describes that speed:

$$VF=\frac{v_{\text{line}}}{c}.$$

A slower wave has a shorter wavelength. If VF is 0.66, a wave travels only 66% as far during one cycle as it would in free space. To find the physical length for a chosen fraction of a wavelength, multiply the free-space length by VF.

A free-space wavelength in meters is about 300 divided by the frequency in megahertz. For an air-insulated parallel line at 14.10 MHz, VF is approximately 1, so a half wavelength is

$$L_{1/2}\approx\frac{300}{2\times14.10}\times1=10.6\text{ m}.$$

The same electrical length in VF 0.66 coax is about $10.6\times0.66=7.0$ meters.

> **Key Information:**
> - The velocity factor of a transmission line is the velocity of a wave in the transmission line divided by the velocity of light in a vacuum. {{< link id="E9F01" >}}
> - The insulating dielectric material has the biggest effect on the velocity factor of a transmission line. {{< link id="E9F02" >}}
> - The electrical length of a coaxial cable is longer than its physical length because electromagnetic waves move more slowly in a coaxial cable than in air. {{< link id="E9F03" >}}
> - An air-insulated, parallel conductor transmission line that is electrically 1/2 wavelength long at 14.10 MHz is approximately 10.6 meters long. {{< link id="E9F06" >}}

#### Loss and Construction

The plastic that slows the wave in coax also absorbs some of its energy, and conductor resistance turns more into heat. Parallel line held apart mostly by air has little plastic to absorb energy.

Foam dielectric replaces much of the solid plastic with gas, leaving less material to slow the wave or absorb it. Gas also breaks down at a lower voltage than solid plastic. Check the maker's rating for a particular cable.

A line's build also sets its characteristic impedance. Conductor size, spacing, and the dielectric between them all count. Copper traces on a circuit board work the same way. At microwave frequencies, even a trace a few centimeters long spans a large part of a wavelength. It acts like a feed line, so any change in its impedance causes reflections.

> **Key Information:**
> - Parallel conductor transmission line has lower loss than coaxial cable with a plastic dielectric. {{< link id="E9F07" >}}
> - Assuming all other parameters are the same, foam dielectric coaxial cable has lower safe maximum operating voltage, lower loss per unit of length, and higher velocity factor than solid dielectric coaxial cable. {{< link id="E9F08" >}}
> - Microstrip consists of precision printed circuit conductors above a ground plane that provide constant impedance interconnects at microwave frequencies. {{< link id="E9F05" >}}

#### Reflections and Standing Waves

Predicting the impedance at each point takes more than SWR. It takes the size and the phase of the reflected wave. A load equal to the line's characteristic impedance, $Z_0$, produces no reflection.

The **reflection coefficient**, $\Gamma$ (capital gamma), gives the reflected voltage wave relative to the incident voltage wave, including phase. For a load impedance $Z_L$,

$$\Gamma=\frac{Z_L-Z_0}{Z_L+Z_0}.$$

> **Key Information:** Reflection coefficient is the parameter that describes the interaction of a load and transmission line. {{< link id="E9E07" >}}

For a 100-ohm resistive load on 50-ohm line, $\Gamma=(100-50)/(100+50)=1/3$. The reflected power fraction is $|\Gamma|^2=1/9$, about 11%. SWR follows from the size of $\Gamma$:

$$SWR=\frac{1+|\Gamma|}{1-|\Gamma|}=2:1.$$

That matches the shortcut for a resistive load: $100\ \Omega/50\ \Omega=2$.

#### Impedance Along a Line

To use a line as a matching component, follow how the reflected wave's phase changes along it. That changes the local voltage-to-current ratio, and therefore the impedance seen at each point. Where voltage is high and current approaches zero, their ratio gives very high impedance. Where voltage approaches zero and current is high, impedance is very low. An ideal half-wave line repeats its terminating impedance; a quarter-wave line inverts it.

![Two side-by-side graphs align standing-wave magnitude envelopes with transmission-line schematics. Distance runs from the load at the left, through a quarter wavelength at the middle guide, to the half-wave input at the right. The solid blue curve is voltage magnitude divided by its maximum; the dashed orange curve is current magnitude divided by its own maximum. In the left-hand, shorted line, voltage is zero at the load, maximum at one quarter wavelength, and zero at one half wavelength; current has the opposite pattern. In the right-hand, open line, voltage is maximum, zero, maximum at those positions, and current is zero, maximum, zero. The left schematic joins the two conductors at the load; the right leaves their ends open. Both have input terminals at the right. For a line ending at the quarter-wave guide, the shorted load therefore gives high input impedance, and the open load gives low input impedance. The curves show magnitudes versus position, not simultaneous instantaneous voltage and current.](../../../images/s6-3-standing-waves.svg)
{.img-centered .img-xlarge .img-mobile-full caption="Lossless lines, shorted at left and open at right. Curves show voltage and current magnitudes along the line, each scaled to its own maximum. At a quarter wavelength, a short looks open and an open looks short; a half wavelength repeats the load. These are spatial envelopes, not instantaneous waveforms."}

> **Key Information:**
> - A 1/2-wavelength transmission line shorted at the far end presents very low impedance to an RF generator. {{< link id="E9F04" >}}
> - A 1/4-wavelength transmission line shorted at the far end presents very high impedance to an RF generator. {{< link id="E9F09" >}}
> - A 1/4-wavelength transmission line open at the far end presents very low impedance to an RF generator. {{< link id="E9F12" >}}

Matching may also call for a particular reactance rather than an open or a short. A short section of line with a shorted or open end can supply one; used this way, it is called a **stub**. When a stub is shorter than a quarter wave, a shorted end keeps current high and voltage low over most of its length, so the stub stores mostly magnetic energy. An open end does the reverse, so an open stub stores mostly electric energy.

For electrical length $\theta$ in degrees, a lossless shorted stub has $X=Z_0\tan\theta$; an open stub has $X=-Z_0/\tan\theta$. At one-eighth wavelength, $\theta=45^\circ$ and $\tan45^\circ=1$.

> **Key Information:**
> - A 1/8-wavelength transmission line shorted at the far end presents an inductive reactance to an RF generator. {{< link id="E9F10" >}}
> - A 1/8-wavelength transmission line open at the far end presents a capacitive reactance to an RF generator. {{< link id="E9F11" >}}

An eighth-wave stub of 50-ohm line therefore supplies about $+j50\ \Omega$ when shorted, or $-j50\ \Omega$ when open.
