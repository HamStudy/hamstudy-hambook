---
chapter: "11"
section: "11.1"
questions: ["E1A01", "E1A02", "E1A03", "E1A04", "E1A06", "E1C01", "E1B02", "E1C09", "E1B01", "E1C10", "E1F03", "E1F11", "E1F01"]
status: "generated1"
draft: true
---

### Section 11.1: Signal and Band Limits

Near a band or emission-segment edge, selecting an allowed dial frequency is not enough. The complete emission must fit. Use the displayed carrier frequency, sideband direction, and occupied width to calculate its outer edge, then compare that edge with the limit for the emission type.

#### Leave Room for the Sideband

For the exam's SSB examples, the display gives the suppressed carrier frequency. *Add the stated width for USB or subtract it for LSB* to locate the far edge. This turns the band-edge precaution into a specific frequency check.

At 14.348 MHz, a 3 kHz USB signal extends to

$$14.348\text{ MHz}+0.003\text{ MHz}=14.351\text{ MHz}.$$

*The 20-meter upper edge is 14.350 MHz, so the top 1 kHz lies outside the band.*

> **Key Information:** A 3 kHz USB signal with a carrier frequency of 14.348 MHz is illegal because its upper 1 kHz is outside the 20-meter band. {{< link id="E1A01" >}}

At a lower edge, LSB presents the opposite problem. A displayed carrier 1 kHz above the boundary leaves only 1 kHz for a sideband that may need 3 kHz.

> **Key Information:**
> - For the exam's properly adjusted LSB phone signal, the lowest displayed carrier frequency that keeps the emission within the band is 3 kHz above the lower edge. {{< link id="E1A02" >}}
> - An Extra operator may not answer a CQ on 3.601 MHz LSB phone because the sideband components extend below the phone-segment edge. {{< link id="E1A04" >}}

Here the Extra phone segment begins at 3.600 MHz. A 3 kHz signal below a 3.601 MHz carrier reaches 3.598 MHz. Being an Extra gives you access to the phone segment; it does not move that boundary.

![Two band-edge examples. A USB signal displayed at 14.348 MHz extends upward to 14.351 MHz, placing 1 kilohertz above the 14.350 MHz upper band edge. An LSB signal displayed at 3.601 MHz extends downward to 3.598 MHz, placing 2 kilohertz below the 3.600 MHz Extra phone-segment edge. Triangles mark the displayed carrier frequency; hatching marks the parts outside the permitted range.](../../../images/s11-1-sideband-edges.svg)
{.img-centered .img-xlarge caption="The display marks one end of the sideband, not its full occupied range. Triangles mark the displayed carrier; dashed lines mark the applicable band or segment edge. Hatched portions extend beyond it."}

Data has its own segment limits. On 20 meters, the RTTY/data segment ends at 14.150 MHz. Subtract the 2.8 kHz bandwidth of the stated USB data signal:

$$14.1500\text{ MHz}-0.0028\text{ MHz}=14.1472\text{ MHz}.$$

> **Key Information:** The highest legal carrier frequency for a 2.8 kHz USB data signal on 20 meters is 14.1472 MHz. {{< link id="E1A03" >}}

Before doing the arithmetic, write down which edge matters: the whole band's edge or the edge for your emission type. The 20-meter data example stops at 14.150 MHz even though the band continues above it. These calculations use the signal widths given. In practice, allow for actual occupied bandwidth and frequency error rather than placing the far edge against the limit with no margin.

#### The Two Forms of 60-Meter Access

Before using a 60-meter memory, determine whether it falls in a discrete channel or the continuous segment; the operating constraints differ. The 2026 rules provide a continuous segment from 5351.5 to 5366.5 kHz plus four separate channels. The channel centers are 5332, 5348, 5373, and 5405 kHz. Check older memories against that layout and the power limits below.

> **Key Information:**
> - For channelized 60-meter operation, a CW signal must transmit at the channel's center frequency. {{< link id="E1A06" >}}
> - The maximum bandwidth of a data emission on 60 meters is 2.8 kHz. {{< link id="E1C01" >}}

The channel-center requirement applies to those discrete channels. Within the continuous segment, keep the complete emission within its edges. *The 2.8 kHz maximum applies throughout the authorized 60-meter spectrum.*

The power limits differ too. The four discrete channels permit up to 100 W ERP. The continuous segment permits only 9.15 W ERP, equivalent to about 15 W EIRP. ERP uses a half-wave dipole reference; EIRP uses an isotropic reference, as in Chapter 6. These are radiated-power limits, so antenna gain matters. The former channel at 5358.5 kHz lies within the new continuous segment and does not retain a separate 100 W allowance.

Amateurs remain secondary users on 60 meters. Avoid harmful interference to primary users and accept interference from them.

#### Match the Emission to Its Limits

Choosing a digital-voice or image mode requires both room for its signal and permission for that emission on the band. The mode's label alone does not establish either. Apply the emission-specific limits as well as the segment boundaries.

> **Key Information:**
> - Where authorized on HF, 3 kHz is an acceptable bandwidth for digital voice or slow-scan television. {{< link id="E1B02" >}}
> - For angle modulation below 29.0 MHz, the maximum modulation index at the highest modulation frequency is 1.0. {{< link id="E1C09" >}}
> - Spread-spectrum transmissions are permitted only on amateur frequencies above 222 MHz where that emission type is authorized. {{< link id="E1F01" >}}

*The 3 kHz answer describes a communications-quality signal, not a universal exemption from narrower limits such as those on 60 meters.* The modulation-index limit likewise restricts how much an angle-modulated signal can spread. For FM, recall that *index is peak deviation divided by modulating frequency*. *The rule limits that ratio to 1.0 at the highest modulation frequency.*

For spread spectrum, look for SS among the permitted emission types in §97.305; permission for “data” alone is not the same thing. Use that table together with the standards in §97.307.

#### Keep Unwanted Output Down

A signal can fit inside its segment while unwanted products appear elsewhere. The spectrum-analyzer tests in Chapter 9 let us distinguish information-bearing output from *spurious emissions: output outside the necessary bandwidth that can be reduced or removed without changing the transmitted information*. A transmitter must suppress those products.

> **Key Information:**
> - A spurious emission is an emission outside the signal's necessary bandwidth that can be reduced or eliminated without affecting the transmitted information. {{< link id="E1B01" >}}
> - Below 30 MHz, the tested maximum mean spurious-emission level is −43 dB relative to the fundamental emission. {{< link id="E1C10" >}}

*The −43 dB requirement applies to transmitters installed after January 1, 2003*; §97.307 contains provisions for older equipment. All stations must reduce spurious emissions as far as practicable and correct harmful interference. Meeting one numerical limit does not excuse interference from a spur.

Adding an external amplifier can raise unwanted output as well as wanted power. Its certification test therefore checks spurious emissions at a specified output level. Certification sets requirements for commercially supplied equipment, with an exception relevant to amateur construction.

> **Key Information:**
> - A dealer may sell an uncertified external RF amplifier capable of operation below 144 MHz under the exception for an amplifier constructed or modified by an amateur operator for use at an amateur station. {{< link id="E1F03" >}}
> - To qualify for FCC certification, an external RF amplifier must meet the FCC's spurious-emission standards at the lesser of 1500 W or its full output power. {{< link id="E1F11" >}}

For the stated power test, a 600 W PEP amplifier is tested at 600 W PEP, while a 2000 W PEP amplifier is tested at 1500 W PEP. That test point does not authorize 2000 W on the air. The certification rule also checks spurious output with the amplifier connected in standby or off. The amateur-construction exception concerns certification; the station still has to meet its operating and emission limits.
