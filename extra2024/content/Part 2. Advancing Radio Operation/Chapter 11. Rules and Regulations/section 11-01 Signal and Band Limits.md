---
chapter: "11"
section: "11.1"
questions: ["E1A01", "E1A02", "E1A04", "E1A03", "E1A06", "E1C01", "E1B02", "E1C09", "E1F01", "E1B01", "E1C10", "E1F03", "E1F11"]
status: "generated1"
draft: true
---

### Section 11.1: Signal and Band Limits

An SSB signal occupies about 3 kHz on one side of the frequency your radio displays. You may remember an example from studying for General: a 3 kHz USB signal displayed at 14.347 MHz ends right at the 20-meter edge, 14.350 MHz. The same check, finding where the whole signal ends, applies at segment edges and 60-meter channels. Other rules limit the signal itself: its width, its modulation, and the unwanted output beside it.

#### Leave Room for the Sideband

Move that signal up 1 kHz, and it no longer fits. The display shows the suppressed carrier frequency, so add the stated width for USB or subtract it for LSB to find the far edge:

$$14.348\text{ MHz}+0.003\text{ MHz}=14.351\text{ MHz}.$$

LSB near a lower edge works the same way in reverse. On 75 meters, the Extra phone segment begins at 3.600 MHz. A 3 kHz signal below a 3.601 MHz carrier reaches 3.598 MHz, 2 kHz past that edge. Being an Extra gives you access to the phone segment; it does not move the boundary.

![Two band-edge examples. A USB signal displayed at 14.348 MHz extends upward to 14.351 MHz, putting its top 1 kilohertz above the 14.350 MHz upper band edge. An LSB signal displayed at 3.601 MHz extends downward to 3.598 MHz, putting its bottom 2 kilohertz below the 3.600 MHz Extra phone-segment edge. Triangles mark the displayed carrier frequency; hatching marks the parts outside the permitted range.](../../../images/s11-1-sideband-edges.svg)
{.img-centered .img-xlarge caption="The display marks one end of the sideband, not its full occupied range. Triangles mark the displayed carrier; dashed lines mark the applicable band or segment edge. Hatched portions extend beyond it."}

> **Key Information:**
> - A 3 kHz USB signal with a carrier frequency of 14.348 MHz is not legal because the upper 1 kHz of the signal is outside the 20-meter band. {{< link id="E1A01" >}}
> - When a transceiver displays the carrier frequency of phone signals, the lowest displayed frequency at which a properly adjusted LSB emission will be totally within the band is 3 kHz above the lower band edge. {{< link id="E1A02" >}}
> - An Extra class operator may not answer the CQ of a station on 3.601 MHz LSB phone, because the sideband components will extend beyond the edge of the phone band segment. {{< link id="E1A04" >}}

Data has its own segment and its own width. On 20 meters, the RTTY/data segment ends at 14.150 MHz, and Section 97.307(f)(3) limits those emissions to 2.8 kHz bandwidth. That bandwidth limit replaced an older 300-baud symbol-rate limit in January 2024. This time, work back from the edge, subtracting the signal's width to find the highest carrier:

$$14.1500\text{ MHz}-0.0028\text{ MHz}=14.1472\text{ MHz}.$$

> **Key Information:** The highest legal carrier frequency on the 20-meter band for transmitting a 2.8 kHz wide USB data signal is 14.1472 MHz. {{< link id="E1A03" >}}

Here the edge that matters is the data segment's, not the band's. The 20-meter band continues above 14.150 MHz, but data emissions stop there. On the air, also allow for frequency error rather than placing the far edge right on the limit.

#### The Two Forms of 60-Meter Access

Sixty meters adds channels to the edges you check. Under rules effective February 13, 2026, the band has a continuous segment from 5351.5 to 5366.5 kHz plus four separate channels. The channel centers are 5332, 5348, 5373, and 5405 kHz. Check older radio memories against that layout and the power limits below. The latest version of this book is at [hambook.org](https://hambook.org).

![A frequency scale runs from 5330 to 5410 kilohertz. Four narrow blue channels, each 2.8 kilohertz wide, are centered at 5332, 5348, 5373, and 5405 kilohertz, and each is labeled 100 watts ERP. A wider green continuous segment runs from 5351.5 to 5366.5 kilohertz and is labeled 9.15 watts ERP. A dashed outline inside that segment marks the former channel at 5358.5 kilohertz, which is now part of the lower-power segment.](../../../images/s11-1-60m-layout.svg)
{.img-centered .img-xlarge .img-mobile-full caption="Four 100 W ERP channels and a 9.15 W ERP continuous segment, which now includes the former 5358.5 kHz channel."}

The rules define each channel by its center. For USB voice and data, you may set the carrier 1.5 kHz below the center, so the signal above it lands centered in the channel. A CW signal has no sideband to offset; it sits at its carrier frequency. In the continuous segment, keep the complete emission within the segment's edges.

> **Key Information:**
> - The required transmit frequency of a CW signal for channelized 60-meter operation is the center frequency of the channel. {{< link id="E1A06" >}}
> - The maximum bandwidth for a data emission on 60 meters is 2.8 kHz. {{< link id="E1C01" >}}

The power limits differ, too: 100 W ERP on the channels, but only 9.15 W ERP, about 15 W EIRP, in the segment. Both limits apply to radiated power (Chapter 6), so antenna gain counts.

Amateurs remain secondary users on 60 meters. Avoid harmful interference to primary users and accept interference from them.

#### Match the Emission to Its Limits

Each emission type also has limits on its width and modulation. On HF, an image signal such as slow-scan TV may be no wider than a communications-quality voice signal of the same modulation type. For SSB, that is about 3 kHz, and HF digital voice modes fit through an ordinary SSB transmitter. Narrower limits, such as the 2.8 kHz on 60 meters, still apply where they exist.

**Angle modulation** means FM or PM. Below 29.0 MHz, the rules cap its **modulation index**, which for FM is the peak deviation divided by the modulating frequency (Chapter 4). The cap applies at the highest modulation frequency. With 3 kHz as the highest audio frequency, it holds the peak deviation to 3 kHz, which limits how far the signal spreads.

Spread spectrum (SS) deliberately spreads a signal across far more bandwidth than the message needs (Chapter 4). The rules list SS as its own emission type, so permission for data alone doesn't cover it.

> **Key Information:**
> - An acceptable bandwidth for digital voice or slow-scan TV transmissions made on the HF amateur bands is 3 kHz. {{< link id="E1B02" >}}
> - The highest modulation index permitted at the highest modulation frequency for angle modulation below 29.0 MHz is 1.0. {{< link id="E1C09" >}}
> - Spread spectrum transmissions are permitted only on amateur frequencies above 222 MHz. {{< link id="E1F01" >}}

#### Keep Unwanted Output Down

A signal can fit inside its segment while unwanted products appear elsewhere. On a spectrum analyzer, as in Chapter 9, they show up as extra signals away from the wanted one. Products like these carry none of the message, so a transmitter can, and must, suppress them.

> **Key Information:**
> - A spurious emission is an emission outside the signal's necessary bandwidth that can be reduced or eliminated without affecting the information transmitted. {{< link id="E1B01" >}}
> - The maximum mean power level for a spurious emission below 30 MHz with respect to the fundamental emission is −43 dB. {{< link id="E1C10" >}}

That −43 dB limit applies to transmitters installed after January 1, 2003; older equipment has its own limits. For a 100 W transmitter, −43 dB allows about 5 mW in any one spur. Every station must still reduce spurious emissions as far as practicable and fix any spur that causes harmful interference, even when it meets the limit.

An external amplifier can boost unwanted output along with the signal you want. For that reason, Section 97.315 requires FCC certification for an amplifier manufactured or imported for amateur use. Amateurs have long built and modified their own amplifiers, though, and the rule leaves room for that work.

> **Key Information:**
> - A dealer may sell an uncertified external RF power amplifier capable of operation below 144 MHz if it was constructed or modified by an amateur radio operator for use at an amateur station. {{< link id="E1F03" >}}
> - To qualify for a grant of FCC certification, an external RF power amplifier must satisfy the FCC's spurious emission standards when operated at the lesser of 1500 W or its full output power. {{< link id="E1F11" >}}

That test point means a 600 W PEP amplifier is tested at 600 W PEP. A 2000 W PEP amplifier is tested at 1500 W PEP, the most any amateur station may transmit. Certification also checks spurious output with the amplifier connected but switched to standby or off.
