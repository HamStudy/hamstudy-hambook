---
chapter: "9"
section: "9.1"
questions: ["E7D09", "E7D11"]
status: "generated1"
draft: true
---

### Section 9.1: Planning Station Power

For an afternoon on battery power, the station's average current matters more than its receive or transmit current alone. A radio may spend most of the time listening but draw several times as much current while transmitting. Weight each current by its share of operating time, then use that average to estimate battery life.

> **Key Information:** Battery operating time is calculated by dividing capacity in amp-hours by average current in amperes. {{< link id="E7D09" >}}

If a battery has 20 amp-hours of usable capacity and the station draws an average of 4 amperes, the estimated time is

$$t=\frac{20\text{ Ah}}{4\text{ A}}=5\text{ hours}.$$

*Capacity in amp-hours divided by average current in amperes gives operating time in hours.* The useful part of the estimate is choosing an average that reflects how you will operate.

To find the average current, account for how long each load runs. Suppose the radio draws 2 A on receive and 12 A on transmit. Transmitting one fifth of the time gives

$$I_{\text{avg}}=(0.8\times2\text{ A})+(0.2\times12\text{ A})=4\text{ A}.$$

That estimate assumes four minutes of listening for every minute of transmitting. A long conversation or a different digital mode can change the average. Include a computer or other accessories if the same battery powers them. A nameplate capacity is not a promise of usable capacity under every condition. Temperature, discharge rate, battery age, and the allowed depth of discharge affect the time available. Plan some reserve rather than scheduling the last contact for the calculated last minute.

#### Supplying the Right Kind of Power

A solar-powered station may include both a DC transceiver and equipment that requires AC. The DC radio can use a suitable charging and battery system directly; the AC load needs an additional conversion stage.

> **Key Information:** An inverter connected to a solar panel output converts the panel's output from DC to AC. {{< link id="E7D11" >}}

*An inverter converts the solar system's DC output to AC*; the charge controller still has the separate job of managing battery charging. If your computer can run from a suitable DC adapter, that may avoid an unnecessary DC-to-AC-to-DC path. Whatever equipment you choose, its power draw belongs in the operating-time estimate.
