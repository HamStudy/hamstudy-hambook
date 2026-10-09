---
chapter: "9"
section: "9.1"
questions: ["G1A01", "G1A08", "G1A11", "G1A05", "G1A09", "G1A02", "G1A03", "G1A07", "G1A10", "G1E02"]
status: draft1
---

### Section 9.1: General Frequency Privileges

A General Class License gives you access to many more HF frequencies and modes, but a radio’s tuning range is not a guide to your privileges. Some frequencies require a different license class, and some permit CW or data but not voice. Check both the frequency and the emission type before transmitting.

A current amateur band chart puts those two kinds of permission together. The chart’s license-class boundaries come from FCC rules; suggested places for particular activities come from voluntary band plans.

#### Reading the License-Class Boundaries

On several widely used bands, General privileges cover only part of the amateur allocation:

> **Key Information:**
> - General class licensees may not transmit in portions of the 80-, 40-, 20-, and 15-meter bands. {{< link id="G1A01" >}}
> - The HF bands with segments exclusively allocated to Amateur Extra licensees are 80, 40, 20, and 15 meters. {{< link id="G1A08" >}}

These statements do not mean that every frequency unavailable to a General is Extra-only. Some are also available to operators who hold an Advanced license.

For voice, there is a useful pattern:

> **Key Information:** When General class licensees cannot use the entire voice portion of a band, they may use the upper-frequency portion. {{< link id="G1A11" >}}

For example, the full phone segment on 20 meters is 14.150–14.350 MHz; General privileges cover *the upper part, 14.225–14.350 MHz*. On 40 meters, the General phone segment begins at 7.175 MHz:

> **Key Information:** A General class licensee may not act as control operator for transmissions from 7.125 MHz to 7.175 MHz. {{< link id="G1A05" >}}

That 40-meter interval is available to Advanced and Amateur Extra operators. Hearing a station there does not allow a General operator to answer on the same frequency.

#### Checking a Frequency in Practice

Suppose you hear a voice station on 21.300 MHz (21,300 kHz). First identify the band: 21.000–21.450 MHz is the 15-meter amateur band. Then check the General phone segment, which runs from 21.275 to 21.450 MHz:

> **Key Information:** 21.300 MHz is within the General class portion of the 15-meter band. {{< link id="G1A09" >}}

It is well inside that phone segment, so a normal-width SSB signal can fit there. Near an edge, check that the whole signal fits within your privileges, as explained in [Section 7.3]({{% pageref "7.3" %}}).

#### Checking the Mode as Well as the Band

The 30-meter band is only 50 kHz wide, from 10.100 to 10.150 MHz. US amateur privileges there allow CW and permitted RTTY/data emissions, but exclude two other emission categories:

> **Key Information:**
> - Phone operation is prohibited on the 30-meter band. {{< link id="G1A02" >}}
> - Image emissions are prohibited on the 30-meter band. {{< link id="G1A03" >}}

For routine operation, treat 30 meters as a CW and permitted-data band, *not a place for voice or an image mode such as slow-scan TV (SSTV)*.

CW has broader permission on most bands: control operators may generally use it wherever they have frequency privileges, subject to any special restrictions. On 10 meters, a General operator has access to *the whole band*:

> **Key Information:** A General class control operator may transmit CW emissions throughout the entire 10-meter band. {{< link id="G1A07" >}}

That means 28.000–29.700 MHz for CW. It does not make the entire range available for phone; 10-meter phone and image privileges begin at 28.300 MHz.

#### The Separate Arrangements on 60 Meters

The US 60-meter allocation changed on February 13, 2026. It now includes a continuous range from **5351.5 to 5366.5 kHz**, plus four separate channels. An older chart showing only five channels is no longer sufficient. For the latest version of this book, visit [hambook.org](https://hambook.org).

For the four separate channels, these are the channel centers and the corresponding USB suppressed-carrier settings:

| Channel center (kHz) | USB dial frequency (kHz) |
|---|---|
| 5332.0 | 5330.5 |
| 5348.0 | 5346.5 |
| 5373.0 | 5371.5 |
| 5405.0 | 5403.5 |

The two columns describe the same channel in different ways. The USB dial setting is 1.5 kHz below the channel center because the audio shifts the transmitted signal above the suppressed carrier. For CW, the transmitted carrier goes at the channel center instead. Follow the radio and mode instructions so its displayed frequency produces the required RF frequency.

The four separate channels permit USB phone, CW, and the specified RTTY/data emissions. In the continuous segment, permitted phone, CW, RTTY, and data emissions remain subject to the applicable technical rules. In either arrangement, the whole signal must stay within the authorized spectrum and *must not exceed 2.8 kHz in bandwidth*. The continuous segment and the four channels have different power limits, covered in the next section. In particular, the former channel centered on 5358.5 kHz is now inside the new lower-power segment.

#### Repeaters on 10 Meters

Some 10-meter contacts use repeaters rather than a direct path between the two operators. Repeater operation has its own frequency restriction:

> **Key Information:** The portion of the 10-meter band available for repeater use is above 29.5 MHz. {{< link id="G1A10" >}}

Both the repeater’s receive and transmit frequencies must be allowed for that purpose. Use its published frequency pair and local coordination information rather than choosing an arbitrary offset.

A repeater may also link two different bands. In that case, the user’s station and the repeater each have a control operator with appropriate privileges:

> **Key Information:** A 10-meter repeater may retransmit a 2-meter signal from a station with a Technician control operator only if the repeater’s control operator holds at least a General Class License. {{< link id="G1E02" >}}

The Technician is transmitting on 2 meters, where that operator has privileges. The repeater makes a separate transmission on 10 meters under its own control operator’s authority.

#### MF and HF Reference Ranges

The following table summarizes common General privileges for a station in the **48 contiguous United States**, in MHz. CW may also be used in the phone/image ranges shown. Notice the gaps: permission for CW does not cross a frequency interval unavailable to your license class.

| Band | CW | RTTY/data | Phone/image |
|---|---|---|---|
| 160 m | 1.800–2.000 | 1.800–2.000 | 1.800–2.000 |
| 80/75 m | 3.525–3.600; 3.800–4.000 | 3.525–3.600 | 3.800–4.000 |
| 60 m | Special channels and segment above | Special channels and segment above | Phone under special 60-meter rules; no image |
| 40 m | 7.025–7.125; 7.175–7.300 | 7.025–7.125 | 7.175–7.300 |
| 30 m | 10.100–10.150 | 10.100–10.150 | Not permitted |
| 20 m | 14.025–14.150; 14.225–14.350 | 14.025–14.150 | 14.225–14.350 |
| 17 m | 18.068–18.168 | 18.068–18.110 | 18.110–18.168 |
| 15 m | 21.025–21.200; 21.275–21.450 | 21.025–21.200 | 21.275–21.450 |
| 12 m | 24.890–24.990 | 24.890–24.930 | 24.930–24.990 |
| 10 m | 28.000–29.700 | 28.000–28.300 | 28.300–29.700 |

Some geographic areas have different provisions. The separate 630- and 2200-meter allocations also have [special requirements in Section 97.303(g)](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-97/subpart-D/section-97.303) not summarized here.

Keep a current band chart near the operating position and check unfamiliar frequencies before transmitting. Once the frequency and mode are allowed, the next limit to check is the power and antenna arrangement you plan to use.

<!-- Editorial sources, checked 2026-09-26: 47 CFR 97.301, 97.303, 97.305, 97.307, 97.205; Federal Register 2026-00587 (effective 2026-02-13). -->
