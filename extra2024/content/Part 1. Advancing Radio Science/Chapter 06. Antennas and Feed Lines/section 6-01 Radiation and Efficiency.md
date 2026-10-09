---
chapter: "6"
section: "6.1"
questions: ["E3A04", "E3A05", "E3A10", "E3A14", "E9A01", "E9A09", "E9A04", "E9A05", "E9B08"]
status: generated1
draft: true
---

### Section 6.1: Radiation and Efficiency

Current in an antenna creates changing electric and magnetic fields. Some energy remains close to the antenna, moving between stored electric and magnetic energy. Some travels away as an electromagnetic wave. Radiation is that outward flow.

#### Fields Crossing Space

Frequency counts cycles per second. Wavelength, $\lambda$, is the distance the wave travels during one cycle. In free space, using frequency $f$ in megahertz gives the convenient approximation

$$\lambda\text{ (meters)}\approx\frac{300}{f\text{ (MHz)}}.$$

At 30 MHz, a wavelength is about 10 meters. At 150 MHz, it is about 2 meters. That is why a full-sized antenna for one band can look tiny beside a full-sized antenna for another. Dimensions expressed in wavelengths change their physical size when frequency changes.

*In a freely traveling wave, the electric and magnetic fields point at right angles to each other.* *The wave travels perpendicular to both.* For example, a horizontally traveling wave can have a vertical electric field and a horizontal magnetic field extending across its path.

> **Key Information:**
> - An electromagnetic wave travels at a right angle to its electric and magnetic fields. {{< link id="E3A04" >}}
> - The electric and magnetic fields are oriented at right angles to one another. {{< link id="E3A05" >}}
> - A medium's index of refraction determines wave speed through that medium. {{< link id="E3A10" >}}

Here, right angles describe *directions in space*, not a 90-degree timing difference. In a plane wave in free space, the electric and magnetic fields rise and fall together. *The index of refraction $n$ relates wave speed $v$ to the vacuum speed $c$: $v=c/n$.* A wave with unchanged frequency has a shorter wavelength in a medium where it travels more slowly.

#### The Electric Field's Direction

Polarization names the electric field's orientation. With linear polarization, it stays along one line, such as vertical or horizontal. *With circular polarization, its direction rotates as the wave passes, while its magnitude remains constant in the ideal case.* *The magnetic field rotates with it and remains perpendicular.*

> **Key Information:** Circularly polarized waves have rotating electric and magnetic fields. {{< link id="E3A14" >}}

The wave still moves forward. Circular polarization does not mean the signal travels in a circle, nor does a circular wire loop automatically produce circular polarization.

#### Radiated Power and Lost Power

Antenna current can do two things with real power: radiate it or dissipate it as heat. We represent radiation by *radiation resistance*, $R_r$, and heat losses by *loss resistance*, $R_l$. Both must refer to the same current point when used in a calculation.

$$\eta=\frac{R_r}{R_r+R_l}.$$

The Greek letter $\eta$ (eta) represents efficiency as a fraction; multiply by 100 for percent. For $R_r=40\ \Omega$ and $R_l=10\ \Omega$, efficiency is $40/50=0.8$, or 80%. Of 100 watts accepted by that antenna, 80 watts radiate and 20 watts become heat.

> **Key Information:** Antenna efficiency is radiation resistance divided by total resistance. {{< link id="E9A09" >}}

Direction is a separate issue. *An isotropic radiator supplies a reference that sends energy equally in every direction, like a uniform spherical distribution.* It is a mathematical reference rather than a physical antenna you can buy.

> **Key Information:** An isotropic radiator is a hypothetical, lossless antenna with equal radiation intensity in all directions, used as a gain reference. {{< link id="E9A01" >}}

#### The Antenna's Surroundings

An antenna's fields induce currents in the ground and nearby conductors. Those currents create fields of their own, which affect both the pattern and the voltage-to-current ratio at the feed point. Raise the antenna and you may need to adjust a match that was fine near the ground. Its impedance can change even though you have not shortened any wire.

> **Key Information:**
> - Antenna height affects feed point impedance. {{< link id="E9A04" >}}
> - Ground gain is increased signal strength caused by ground reflections in the antenna's environment. {{< link id="E9A05" >}}

A reflected field can reinforce the direct field in one direction and weaken it in another. Ground gain does not create extra transmitter power; it changes its distribution.

Close to the antenna, the mix of stored and radiated fields changes with distance. *Far enough away, the angular pattern settles into a stable shape.* Field strength still falls as distance increases, but the relative strengths in different directions remain the same.

> **Key Information:** The far field is the region where radiation-pattern shape no longer varies with distance. {{< link id="E9B08" >}}
