---
chapter: "9"
section: "9.1"
questions: ["E7D09", "E7D11"]
status: "generated1"
draft: true
---

### Section 9.1: Planning Station Power

Estimating how long a battery will run a radio looks simple until you ask which current to use. A radio may spend most of an afternoon listening, then draw several times as much current for each transmission. Weight each current by its share of operating time to find the average.

> **Key Information:** Battery operating time is calculated by dividing capacity in amp-hours by average current in amperes. {{< link id="E7D09" >}}

Suppose the radio draws 2 A on receive and 12 A on transmit. Transmitting one fifth of the time (0.2) and listening the rest (0.8) gives

$$I_{\text{avg}}=(0.8\times2\text{ A})+(0.2\times12\text{ A})=4\text{ A}.$$

With 20 amp-hours of usable capacity, the estimated time is

$$t=\frac{20\text{ Ah}}{4\text{ A}}=5\text{ hours}.$$

That estimate assumes four minutes of listening for every minute of transmitting. A long conversation or a different digital mode can change the average. Include a computer or other accessories if the same battery powers them. Usable capacity can also fall short of the nameplate rating: temperature, discharge rate, battery age, and the allowed depth of discharge all affect the time available. Plan some reserve rather than scheduling the last contact for the calculated last minute.

#### Supplying the Right Kind of Power

In the field, a solar panel often recharges that battery. The panel produces DC, and a charge controller regulates how that power charges the battery. A DC transceiver can run from the battery directly. Equipment that requires AC needs one more conversion stage.

> **Key Information:** An inverter connected to a solar panel output converts the panel's output from DC to AC. {{< link id="E7D11" >}}

If your computer can run from a suitable DC adapter, that may avoid an unnecessary DC-to-AC-to-DC path, which wastes some power at each step. Whatever equipment you choose, its power draw belongs in the operating-time estimate.
