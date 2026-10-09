---
chapter: "8"
section: "8.2"
questions: ["E0A08", "E0A03", "E0A05", "E0A06", "E0A02", "E0A09", "E0A10", "E0A04"]
status: generated1
draft: true
---

### Section 8.2: Evaluating RF Exposure

You replace a dipole with a high-gain beam and leave the power setting alone. Have exposure levels stayed the same? Not necessarily: the antenna now puts more energy in some directions. An RF exposure check considers where people can be, along with power, antenna gain, direction, distance, frequency, and transmitting time.

#### Energy Absorbed by the Body

RF exposure limits protect people from harmful effects of absorbed energy, including heating. ***Specific absorption rate (SAR)** describes that absorption in the body.* **Maximum permissible exposure (MPE)** limits instead specify allowed field strengths or power density in the space a person occupies. The limits are most restrictive where whole-body absorption is most efficient.

> **Key Information:**
>
> - SAR measures the **rate at which RF energy is absorbed by the body**. {{< link id="E0A08" >}}
> - The FCC's human-body RF exposure limits are most restrictive from **30 to 300 MHz**. {{< link id="E0A03" >}}
> - At microwave frequencies, commonly used **high-gain antennas can produce high exposure levels**. {{< link id="E0A05" >}}

Gain concentrates energy in a favored direction. That makes a dish useful for a distant contact, but also means someone in front of it may receive much more exposure than someone the same distance behind it. Evaluate where people can actually be.

#### Both Fields Matter Nearby

Close to an antenna, in its **near field**, electric and magnetic field strengths do not have the simple fixed relationship they have in a traveling wave far away. *Reflections also affect the field around a station.* A single far-field power-density estimate may therefore be unsuitable close to an antenna.

> **Key Information:** Below 300 MHz, separate electric (E) and magnetic (H) MPE limits account for three facts:
>
> - The body reacts to both E and H fields.
> - Ground reflections and scattering make field strength vary with location.
> - E-field and H-field intensity peaks can occur at different locations. {{< link id="E0A06" >}}

Use an evaluation method that fits your antenna and distance. A calculator can't check the assumptions for you: a reassuring number is useful only if the model fits your installation.

#### People Beyond Your Station

The FCC distinguishes **controlled** exposure from **uncontrolled** exposure for the general public. At an amateur station, controlled limits may apply to the licensee and immediate household members who understand the exposure and know how to avoid it. *Other people nearby, including guests and neighbors, require the uncontrolled limits.*

> **Key Information:** At a neighbor's home, keep exposure from your station below the **uncontrolled MPE limits**. {{< link id="E0A02" >}}

Include nearby homes, yards, and other accessible spaces in your assessment. You may need to change antenna placement, reduce power or transmitting time, or restrict access near the antenna.

#### Evaluation and Exemptions

Begin with the equipment you use and where you use it. FCC rules allow some setups to skip a routine evaluation, but every setup must still meet the exposure limits. Check the exemption criteria before deciding that yours qualifies.

> **Key Information:**
>
> - The pool identifies **hand-held transceivers sold before May 3, 2021** as exempt from RF exposure evaluations. {{< link id="E0A09" >}}
> - For a station operating on **80 meters**, the exam answer is that an evaluation **must always be performed**. {{< link id="E0A10" >}}

Don't treat low power or a particular mode as an automatic exemption for an 80-meter station. Check the current criteria first; an assessment may establish an exemption or show that a calculation or measurement is needed. For a handheld, follow the manufacturer's antenna and operating conditions rather than treating its age as proof that any use is safe.

The pool's brief answers don't describe every condition in the rules. Use the [FCC's current RF exposure requirements](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-1/subpart-I/section-1.1307) for an installation decision, and check [hambook.org](https://hambook.org) for the latest book.

#### Several Transmitters, One Site

At a shared site, exposure contributions add. For example, suppose one transmitter contributes 60% of its applicable limit at a location and another contributes 50% of its limit. Together they reach 110%, even though neither reaches 100% alone. Compare contributions as fractions of their applicable limits, not simply by adding transmitter watts.

> **Key Information:** Where combined exposure exceeds the MPE limit, the exam assigns responsibility for reducing it to each transmitter producing **5% or more of its MPE limit** in that area. {{< link id="E0A04" >}}

This takes teamwork. Operators may need to change antenna locations, reduce simultaneous transmission, or keep people out of the affected area. Checking only your own transmitter can miss the problem that everyone shares.
