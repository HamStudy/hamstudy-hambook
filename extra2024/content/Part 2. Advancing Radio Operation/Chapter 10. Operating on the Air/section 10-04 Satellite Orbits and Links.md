---
chapter: "10"
section: "10.4"
questions: ["E2A06", "E2A01", "E2A10", "E2A04", "E2A05", "E2A09", "E1D07", "E1D08", "E1D09", "E1D11", "E2A11"]
status: "generated1"
draft: true
---

### Section 10.4: Satellite Orbits and Links

For a low-orbit satellite, the useful contact window may pass while you are still deciding where to point. Prepare from the orbit data: when it rises, where it crosses the sky, and when it sets. Then check the radio link it actually offers.

#### Predict the Pass

Tracking software uses a mathematical description of the orbit along with your location and the time. *The elements describe the orbit and the satellite's place in it at a stated time.* The program works forward from there to predict a pass. Old data can put the predicted pass in the wrong place or at the wrong time, so use a current set.

> **Key Information:**
> - Keplerian elements are parameters that define a satellite's orbit. {{< link id="E2A06" >}}
> - An ascending satellite pass travels from south to north. {{< link id="E2A01" >}}
> - A geostationary satellite appears to stay in one position in the sky. {{< link id="E2A10" >}}

*“Ascending” describes northward travel, not merely rising above your horizon.* A geostationary satellite is a different case: it circles above the equator in step with Earth's rotation. *From a location within its coverage area, the antenna points in a nearly fixed direction rather than following a short pass.*

#### Read the Band Designation

An *uplink* goes from your Earth station to the satellite. A *downlink* comes from the satellite to Earth. *Satellite descriptions often use “mode” to identify those two frequency bands*, which is different from selecting FM or SSB on your radio.

> **Key Information:**
> - A satellite's mode specifies its uplink and downlink frequency bands. {{< link id="E2A04" >}}
> - The letters in a mode designator specify the uplink and downlink frequency ranges, in that order. {{< link id="E2A05" >}}
> - In satellite band designations, L band is 23 centimeters and S band is 13 centimeters. {{< link id="E2A09" >}}

For example, U/V means an uplink in the 70-centimeter band and a downlink in the 2-meter band. *L/S puts the 23-centimeter uplink first and the 13-centimeter downlink second.* The letters narrow the search; the satellite's published operating information supplies the actual frequencies, signal modes, and current availability. “U/V” tells you which bands to prepare, not which buttons to press to select SSB or FM.

#### Check Both Ends of the Link

The FCC authorizes specific bands or band segments for amateur space stations. Permission to use a band for a terrestrial contact does not automatically make all of it available for a satellite link.

> **Key Information:**
> - HF bands with space-station allocations include 40, 20, 15, and 10 meters. {{< link id="E1D07" >}}
> - The VHF amateur band with frequencies authorized for space stations is 2 meters. {{< link id="E1D08" >}}
> - UHF amateur bands with frequencies authorized for space stations are 70 and 13 centimeters. {{< link id="E1D09" >}}

The HF list in that exam answer is not exhaustive: §97.207 also includes 17 and 12 meters. On some bands, only a segment is authorized. Examples are 7.0–7.1 MHz, 14.00–14.25 MHz, 144–146 MHz, 435–438 MHz, and 2400–2450 MHz. Consult the current rule and the satellite's assigned operating frequencies rather than treating the entire named band as a downlink allocation.

The Earth-station rule is separate. For example, it includes a 1260–1270 MHz uplink segment, while 23 centimeters is not a space-station downlink band under §97.207.

> **Key Information:** Any amateur station may operate as an Earth station, subject to the privileges of the control operator's license class. {{< link id="E1D11" >}}

No special AMSAT qualification is needed to be an ordinary satellite user. *Your control-operator privileges still govern your transmissions.*

#### Keep Polarization from Stealing the Signal

A satellite's spin may rotate its antenna relative to yours, producing *spin modulation*: a changing signal level caused by changing antenna alignment. Faraday rotation in the ionosphere can also rotate linear polarization. *A circularly polarized antenna is less sensitive to that changing linear orientation.*

> **Key Information:** A circularly polarized antenna can minimize the effects of spin modulation and Faraday rotation. {{< link id="E2A11" >}}

It does not remove every cause of fading. It addresses the polarization part of the link. You still have to keep the antenna aimed at the spacecraft. With the pass, bands, and antenna prepared, the remaining question is how the satellite handles your signal.
