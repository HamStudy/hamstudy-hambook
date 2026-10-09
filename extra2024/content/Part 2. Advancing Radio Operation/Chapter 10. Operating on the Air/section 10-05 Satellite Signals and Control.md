---
chapter: "10"
section: "10.5"
questions: ["E2A03", "E2A02", "E2A07", "E2A08", "E2A12", "E1D03", "E1D10", "E1D02"]
status: "generated1"
draft: true
---

### Section 10.5: Satellite Signals and Control

Tune across a linear satellite transponder's downlink and you may hear several separate contacts. The transponder relays a range of frequencies at once, so those narrow signals can share it while each keeps its own place in the passband. Unlike a single-channel voice repeater, it does not need to decode each user's modulation before forwarding it.

#### An Upside-Down Passband

An inverting transponder applies the mixing process from Chapter 4. *It combines the uplink with a local oscillator and sends the appropriate difference product.* When the local oscillator is above the uplink, increasing the uplink frequency decreases that difference.

> **Key Information:** An inverting linear transponder mixes the uplink signal with a local oscillator and transmits the difference product. {{< link id="E2A03" >}}

For a fixed local oscillator above the uplink, the relationship is $f_{\text{down}}=f_{\text{LO}}-f_{\text{up}}$. *The subtraction reverses positions across the passband.*

![Two frequency scales show an inverting transponder. A 435.100 MHz uplink at the low edge maps to the 145.950 MHz downlink at the high edge. A 435.150 MHz uplink at the high edge maps to the 145.900 MHz downlink at the low edge. Increasing the uplink frequency by 50 kilohertz decreases the downlink frequency by 50 kilohertz.](../../../images/s10-5-inverting-transponder.svg)
{.img-centered .img-xlarge caption="Example passbands with a 581.050 MHz local oscillator and Doppler ignored: tune upward on the uplink and your signal moves downward on the downlink. Actual frequencies depend on the satellite."}

In this example, $581.050-435.100=145.950$ MHz. Raising the uplink to 435.150 MHz lowers the downlink to 145.900 MHz. The center still maps to the center.

*The reversal happens within each signal too, so an upper sideband becomes a lower sideband.* *Inversion also makes the uplink and downlink contributions to Doppler shift oppose each other, reducing the combined shift.* For your own signal, an upward Doppler shift arriving on the uplink becomes a downward change after the subtraction. The downlink's own Doppler shift then acts the other way. Because the uplink and downlink frequencies differ, the two changes do not generally cancel completely.

> **Key Information:** An inverting linear transponder reverses signal positions in the band, changes USB to LSB and LSB to USB, and reduces Doppler shift because the uplink and downlink shifts act in opposite directions. {{< link id="E2A02" >}}

A common operating convention is to receive USB and transmit LSB through an inverting transponder. Follow the satellite operator's published guidance and keep track of your own downlink as the pass progresses.

#### Share the Available Power

Linearity lets the transponder preserve many kinds of modulation as long as their signals fit its passband. Technical capability and good operating practice are separate questions, though.

> **Key Information:** A linear transponder can relay FM and CW, SSB and SSTV, and PSK and packet signals. {{< link id="E2A07" >}}

That does not make every mode suitable for every satellite. Wide or high-duty-cycle signals can consume a large share of a transponder's resources; some satellite operators permit only specified modes. Check those instructions before transmitting.

The satellite has a limited power supply and a shared transmitter. *A strong uplink can dominate its automatic level control, reducing the downlink power available to weaker users.* Raising power until you are the loudest station can make their contacts fail. You are sharing one spacecraft power budget with everyone else in the passband.

> **Key Information:** Limit effective radiated power to a satellite with a linear transponder to avoid reducing downlink power to all the other users. {{< link id="E2A08" >}}

Use enough uplink power to hear a readable downlink and follow the operator's recommended reference level. Your transmitter's watt setting is only part of that decision; antenna gain also changes the power directed toward the satellite.

Some satellites carry a different kind of relay. *They store digital messages in onboard memory. You could upload a message during your pass and let its recipient collect it on a later pass.* Sender and recipient do not need simultaneous access to the spacecraft.

> **Key Information:** Digital store-and-forward holds messages in a satellite for later download. {{< link id="E2A12" >}}

#### Using the Satellite or Commanding It

Talking through a satellite and changing its operating state are different activities. *A command that switches a transponder on, changes a function, or stops a transmission is telecommand.*

> **Key Information:**
> - A space telecommand station transmits communications that initiate, modify, or terminate functions of a space station. {{< link id="E1D03" >}}
> - Any amateur station designated by the space-station licensee may be its telecommand station, subject to the control operator's license privileges. {{< link id="E1D10" >}}
> - Telecommand signals from a space telecommand station may use encrypted messages. {{< link id="E1D02" >}}

This narrow encryption allowance protects spacecraft commands. It does not authorize encrypted ordinary conversation through the transponder, encrypted terrestrial repeater-control traffic under the same exception, or encrypted mesh-network user traffic. The station's role and the message's purpose determine which rule applies.
