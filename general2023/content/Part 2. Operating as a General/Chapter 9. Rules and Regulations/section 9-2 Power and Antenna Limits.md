---
chapter: "9"
section: "9.2"
questions: ["G1C11", "G1C02", "G1C05", "G1C06", "G1C01", "G1C03", "G1C04", "G1B01", "G1B06"]
status: draft1
---

### Section 9.2: Power and Antenna Limits

A frequency may be available to your license class while the power you intend to use is not. Most of the familiar MF and HF bands share one general transmitter-power limit, but some have lower limits. On 60 meters, the antenna’s gain matters too.

The minimum-power rule introduced in [Chapter 7]({{% pageref "chpt7" %}}) still applies: use no more power than necessary to carry out the communication. A maximum is a limit, not a recommended setting.

#### What the Power Limit Measures

An amplifier’s electrical input, its RF output, and the power radiated in a particular direction are different quantities. For the general transmitter limit, the FCC uses the RF output measurement. For a General control operator, the usual maximum is *1,500 watts PEP output* unless a more restrictive rule applies.

> **Key Information:**
> - FCC rules regulating maximum transmitter power specify PEP output from the transmitter. {{< link id="G1C11" >}}
> - The maximum transmitter power on the 12-meter band is 1,500 watts PEP output. {{< link id="G1C02" >}}
> - The maximum transmitter power on the 28 MHz band for a General class control operator is 1,500 watts PEP output. {{< link id="G1C05" >}}
> - The maximum transmitter power on the 1.8 MHz band is 1,500 watts PEP output. {{< link id="G1C06" >}}

On SSB, the limit applies to the voice peaks discussed in [Section 7.3]({{% pageref "7.3" %}}). A low average meter reading does not establish that those peaks are below the limit.

Equipment ratings, RF exposure requirements, and any special operating restriction can require a lower setting.

#### The Lower Limit on 30 Meters

The 30-meter band has a lower transmitter-output limit throughout its 10.100–10.150 MHz range:

> **Key Information:** The maximum transmitter power an amateur station may use on 10.140 MHz is 200 watts PEP output. {{< link id="G1C01" >}}

#### Power and Bandwidth on 60 Meters

The four 60-meter channels and the continuous segment introduced in the previous section share a bandwidth limit:

> **Key Information:** The maximum bandwidth permitted for USB transmissions in the 60-meter band is 2.8 kHz. {{< link id="G1C03" >}}

The current rule also applies that *2.8 kHz maximum* to the other permitted 60-meter emissions. Set the transmitter for the allowed bandwidth rather than assuming that a normal SSB or data preset fits.

Power on this band is specified as **effective radiated power (ERP)**, rather than only the transmitter’s output. The antenna’s gain therefore affects how much transmitter power you may use.

You can find the latest version of this book at [hambook.org](https://hambook.org). The limits below reflect the rules effective February 13, 2026:

| 60-meter operation | Maximum radiated power |
|---|---|
| Four channels centered on 5332.0, 5348.0, 5373.0, and 5405.0 kHz | 100 watts ERP |
| Continuous segment from 5351.5 to 5366.5 kHz | 9.15 watts ERP, equivalent to 15 watts EIRP |

ERP uses a half-wave dipole as its reference antenna. **Equivalent isotropically radiated power (EIRP)** uses an isotropic antenna—an ideal source that radiates equally in every direction. [Section 1.5]({{% pageref "1.5" %}}) introduced these gain references. The two figures in the second row express the same limit using different references.

For the FCC’s 60-meter calculation, multiply transmitter PEP by antenna gain relative to a dipole. A dipole is assigned a gain factor of 1, or 0 dBd. If another antenna has 3 dBd of gain, its gain factor is about 2. In the continuous segment, a 4.5-watt setting would then produce about 9 watts ERP, below the 9.15-watt limit. Allow for uncertainty in the gain and power measurements rather than choosing a setting that may exceed the limit.

That calculation needs a documented gain value:

> **Key Information:** When operating on 60 meters with an antenna other than a dipole, you must keep a record of the antenna’s gain. {{< link id="G1C04" >}}

The record may use the manufacturer’s gain data or an appropriate calculation. Check whether a published value is in dBd or dBi before using it.

#### Antenna Height and Aviation Requirements

An antenna can be electrically suitable and still require approval because of its height or location.

> **Key Information:** Away from a public-use airport, an antenna structure may generally be up to 200 feet tall before its height triggers Federal Aviation Administration (FAA) notification and FCC registration. {{< link id="G1B01" >}}

The height-based requirement generally applies to structures *more than 200 feet above ground level*. Shorter structures near airports may also require notification and registration. Measure the complete structure, including an antenna mounted on top, rather than only the length of the tower sections.

Check the FAA and FCC criteria for the site before construction, along with applicable building and zoning requirements. Marking and lighting requirements, when imposed, depend on that review.

#### State and Local Antenna Rules

Local rules may address an installation’s safety, location, height, and appearance. Federal policy limits how far those restrictions may go:

> **Key Information:** State and local antenna regulations must reasonably accommodate amateur service communications and must be the minimum practicable regulation needed to accomplish a legitimate state or local purpose. {{< link id="G1B06" >}}

This principle comes from the FCC’s PRB-1 decision and is reflected in Section 97.15(b). It does not guarantee approval of every proposed antenna.

Private deed restrictions, leases, and homeowners’ association covenants are a separate issue; PRB-1 does not generally override them. Check both the public requirements and any private restrictions that apply to the property.

Meeting a transmitter-power limit does not by itself establish a safe installation—or remove the obligation to avoid harmful interference to other services.

<!-- Editorial sources, checked 2026-09-26: 47 CFR 97.3(b)(9), 97.313, 97.307(f)(14), 97.15, and Part 17; FCC PRB-1, 101 FCC 2d 952 (1985); Federal Register 2026-00587. -->
