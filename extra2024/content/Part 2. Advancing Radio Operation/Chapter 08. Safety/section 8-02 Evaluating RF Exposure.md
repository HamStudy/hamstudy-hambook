---
chapter: "8"
section: "8.2"
questions: ["E0A08", "E0A03", "E0A05", "E0A06", "E0A02", "E0A09", "E0A10", "E0A04"]
status: generated1
draft: true
---

### Section 8.2: Evaluating RF Exposure

Strong RF fields heat body tissue, and the FCC's exposure limits keep that heating well below harmful levels. The heating happens inside the body, though, where no station meter can reach.

#### Energy Absorbed by the Body

The core limits cap the RF power each kilogram of tissue absorbs. **Maximum permissible exposure (MPE)** limits translate them into field strengths or power densities you can check where people may be. The MPE limits are tightest where the whole body absorbs most efficiently: at wavelengths of a few meters, where a person's height suits the body as a receiving antenna.

Above 300 MHz the limits ease again, but microwave work has its own way to exceed them. A dish concentrates power into a narrow beam, which makes it useful for a distant contact. Someone in that beam may receive much more exposure than someone the same distance behind the dish.

> **Key Information:**
>
> - Specific absorption rate (SAR) measures the **rate at which RF energy is absorbed by the body**. {{< link id="E0A08" >}}
> - The FCC's human-body RF exposure limits are most restrictive from **30 to 300 MHz**. {{< link id="E0A03" >}}
> - The hazard created by operating at microwave frequencies is that the **high-gain antennas commonly used can result in high exposure levels**. {{< link id="E0A05" >}}

![A graph of FCC power-density exposure limits against frequency, with both scales logarithmic, from 0.3 MHz to 100 GHz. A solid blue line shows the uncontrolled limits and a dashed orange line shows the controlled limits, which are higher. Both lines start at 100 milliwatts per square centimeter at the lowest frequencies, fall steeply through the HF range, and reach their lowest level in a shaded band from 30 to 300 MHz, where the uncontrolled limit is 0.2 milliwatt per square centimeter. Above 300 MHz both rise again and level off above 1.5 GHz. Small ticks mark the 80, 20, 6, and 2 meter bands and the 70 and 23 centimeter bands; 6 and 2 meters fall inside the shaded band. A bracket under the frequency axis marks everything below 300 MHz, where separate electric and magnetic field limits also apply.](../../../images/s8-2-mpe-limits.svg)
{.img-centered .img-large .img-mobile-full caption="The limits are lowest from 30 to 300 MHz, where the body absorbs RF most efficiently. Below 300 MHz, separate E-field and H-field limits also apply."}

#### Both Fields Matter Nearby

A simple power-density estimate assumes the far field, where an antenna's pattern has settled into a stable shape ([Section 6.1]({{% pageref "6.1" %}})). Closer in, in the **near field**, the electric and magnetic field strengths lack the simple fixed relationship they have in a traveling wave. The near field reaches farther at longer wavelengths, so at HF and low VHF, people near an antenna are often inside it. There, the electric field drives current through tissue, while the changing magnetic field induces loops of current of its own.

> **Key Information:** There are separate electric (E) and magnetic (H) MPE limits below 300 MHz because:
>
> - The body reacts to both E and H fields.
> - Ground reflections and scattering make field strength vary with location.
> - E-field and H-field intensity peaks can occur at different locations. {{< link id="E0A06" >}}

A calculator's reassuring number means little unless its model fits your antenna and the distances involved.

#### People Beyond Your Station

Which limits apply depends on who is exposed. Controlled limits can cover only you and your household, and only with the right RF-safety training and information. Everyone else, such as guests and passersby, falls under the stricter **uncontrolled** limits.

> **Key Information:** At a neighbor's home, signals from your station must be less than the **uncontrolled maximum permissible exposure (MPE) limits**. {{< link id="E0A02" >}}

Include nearby homes, yards, and other accessible spaces in your assessment. Redo it after any antenna or transmitter change, counting gain and direction, not just power. You may need to change antenna placement, reduce power or transmitting time, or restrict access to the affected area.

#### Evaluation and Exemptions

Before May 3, 2021, FCC rules excused amateur handhelds, mobile radios, and many lower-power stations from routine evaluation. New rules took effect that day. They replaced those exemptions with criteria for all radio services, based on power, frequency, and distance. Now every station must be assessed, though a simple exemption check can be that assessment. An exemption skips only the detailed evaluation, never the exposure limits.

> **Key Information:**
>
> - **Hand-held transceivers sold before May 3, 2021** are exempt from RF exposure evaluations. {{< link id="E0A09" >}}
> - For an amateur station operating on **80 meters**, an RF exposure evaluation **must always be performed**. {{< link id="E0A10" >}}

The current rules list no exemption by sale date, though. An older handheld, like any radio, either meets the exemption criteria or needs an evaluation. Follow the manufacturer's antenna and operating conditions.

On 80 meters, low power or CW operation doesn't settle the question. The exemption table rests on a simple power-density estimate, so it needs everyone roughly outside the near field: at least $\lambda/2\pi$ from every part of the antenna. On 80 meters that's about 13 m (42 ft), and around a home, people are nearly always closer.

Read the [FCC's current RF exposure rules](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-1/subpart-I/section-1.1307) before relying on an exemption, and check [hambook.org](https://hambook.org) for the latest book.

#### Several Transmitters, One Site

Separate checks can each pass while the combined exposure at a shared site exceeds the limit. The contributions add: suppose one transmitter contributes 60% of its applicable limit at a location and another contributes 50% of its limit. Together they reach 110%, even though neither reaches 100% alone. Compare contributions as fractions of each transmitter's power-density limit, not by adding transmitter watts. FCC rules make fixing the excess a shared responsibility.

> **Key Information:** Some areas of a site with multiple transmitters can exceed the total MPE limit. There, the operators and licensees of each transmitter producing **5% or more of its MPE limit** are responsible for mitigating the over-exposure. {{< link id="E0A04" >}}

The fix can also mean coordinating so the transmitters don't all run at once.
