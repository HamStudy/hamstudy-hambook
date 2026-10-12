---
chapter: "10"
section: "10.4"
questions: ["E2A06", "E2A01", "E2A10", "E2A04", "E2A05", "E2A09", "E1D07", "E1D08", "E1D09", "E1D11", "E2A11"]
status: "generated1"
draft: true
---

### Section 10.4: Satellite Orbits and Links

A satellite in low Earth orbit circles the planet in about 100 minutes, so each pass across your sky usually lasts 15 minutes or less. Fitting a contact into that window takes planning. You need to know when and where the satellite will appear, which bands it uses and which you may transmit on, and how to keep its signal from fading.

#### Predict the Pass

Tracking software predicts each pass from a satellite's Keplerian elements: numbers giving the size, shape, and orientation of its orbit, and where the satellite was at a stated time. With your location and the time, the software shows when to listen and where to aim. Orbits change, so old elements give wrong times and directions.

Each pass is also called ascending or descending, named as if you traced it on a map with north at the top. The words describe the direction of travel, not rising above your horizon.

Not every satellite makes short passes. A geostationary satellite circles above the equator in step with Earth's rotation, so an antenna can stay fixed on it. A satellite in a highly elliptical orbit (HEO) can stay in view for hours as it moves slowly near apogee, the high point of its orbit, but it still crosses the sky.

> **Key Information:**
> - Keplerian elements are parameters that define a satellite's orbit. {{< link id="E2A06" >}}
> - An ascending satellite pass travels from south to north. {{< link id="E2A01" >}}
> - A geostationary satellite appears to stay in one position in the sky. {{< link id="E2A10" >}}

#### Read the Band Designation

Satellite listings give each satellite's mode, such as U/V, which you may have met while studying for Technician. U/V means a 70-centimeter (UHF) uplink and a 2-meter (VHF) downlink. Higher bands have letters of their own, such as L and S. This use of “mode” has nothing to do with FM or SSB modulation.

> **Key Information:**
> - A satellite's mode, given by the letters of its mode designator, specifies its uplink and downlink frequency bands, in that order. {{< link id="E2A04" >}} {{< link id="E2A05" >}}
> - In satellite band designations, L band is 23 centimeters and S band is 13 centimeters. {{< link id="E2A09" >}}

#### Check Both Ends of the Link

Not every amateur band is open to satellites. The FCC's list of space-station frequencies, in §97.207, includes all of 17, 15, 12, and 10 meters. It also includes the segments 7.0–7.1 MHz, 14.00–14.25 MHz, 144–146 MHz, 435–438 MHz, and 2400–2450 MHz, plus several microwave bands. The 2400 MHz segment is in the 13-centimeter band, which still counts as UHF. The list skips 30 meters, 6 meters, 1.25 meters, and 33 centimeters, among others.

Your own station follows a separate rule. An **Earth station** is an amateur station on, or within 50 kilometers of, Earth's surface that communicates with space stations or through other objects in space. That's your station whenever you work a satellite. The Earth-station rule (§97.209) adds a 1260–1270 MHz segment, so 23 centimeters can carry signals up to a satellite but not back down. You need no special course or certificate.

> **Key Information:**
> - HF bands with space-station allocations include 40, 20, 15, and 10 meters. {{< link id="E1D07" >}}
> - The VHF amateur band with frequencies authorized for space stations is 2 meters. {{< link id="E1D08" >}}
> - UHF amateur bands with frequencies authorized for space stations are 70 and 13 centimeters. {{< link id="E1D09" >}}
> - Any amateur station may operate as an Earth station, subject to the privileges of the control operator's license class. {{< link id="E1D11" >}}

#### Keep Polarization from Stealing the Signal

Even with the antenna aimed correctly, a satellite's signal can fade in and out. As the spacecraft spins, its antennas keep changing their alignment with yours: **spin fading**, also called **spin modulation**. The ionosphere adds **Faraday rotation**, slowly turning the signal's polarization. A linearly polarized antenna loses signal as the incoming polarization turns away from its own. A circularly polarized antenna (Section 6.6) doesn't depend on that orientation.

> **Key Information:** A circularly polarized antenna can minimize the effects of spin modulation and Faraday rotation. {{< link id="E2A11" >}}
