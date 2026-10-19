---
chapter: "10"
section: "10.5"
questions: ["E2A03", "E2A02", "E2A07", "E2A08", "E2A12", "E1D03", "E1D10", "E1D02"]
status: "generated1"
---

### Section 10.5: Satellite Signals and Control

An FM satellite works like a repeater in the sky: one channel up, one channel down, and one conversation at a time. A linear transponder relays a whole slice of spectrum instead, often tens of kilohertz wide. Several SSB and CW contacts can share it at once, each in its own part of the passband. Finding your own signal there takes a map from uplink frequency to downlink frequency, and on many satellites that map runs backward.

#### An Upside-Down Passband

The backward map comes from subtraction. With a fixed local oscillator above the uplink, $f_{\text{down}}=f_{\text{LO}}-f_{\text{up}}$: a higher uplink frequency gives a smaller difference.

> **Key Information:** An inverting linear transponder mixes the uplink signal with a local oscillator and transmits the difference product. {{< link id="E2A03" >}}

![Two frequency scales show an inverting transponder: the uplink scale on top and the downlink scale below, both increasing to the right. A 435.100 MHz uplink at the low edge maps to the 145.950 MHz downlink at the high edge, and a 435.150 MHz uplink at the high edge maps to the 145.900 MHz downlink at the low edge, so the two mapping arrows cross. Increasing the uplink frequency by 50 kilohertz decreases the downlink frequency by 50 kilohertz. A dashed line joins the centers of the two scales. There, a wedge-shaped LSB signal on the uplink comes back on the downlink as a mirror-image USB signal.](../../../images/s10-5-inverting-transponder.svg)
{.img-centered .img-xlarge caption="Example passbands with a 581.050 MHz local oscillator and Doppler ignored: tune upward on the uplink and your signal moves downward on the downlink. The wedges show one signal's spectrum on each link. Actual frequencies depend on the satellite."}

You don't need to calculate these satellite frequencies for the exam; they show the reversal in action. In this example, $581.050-435.100=145.950$ MHz. Raising the uplink to 435.150 MHz lowers the downlink to 145.900 MHz. The center, 435.125 MHz, still maps to the center, 145.925 MHz.

The same reversal happens within each signal, as the mirrored wedges in the figure show. Frequencies above the uplink carrier come out below the downlink carrier.

As the satellite approaches, it receives your uplink at a slightly higher frequency: an upward Doppler shift. The transponder's subtraction turns that into a downward shift in its output. The downlink then shifts upward on its trip back to you, so the two effects partly offset each other. Higher frequencies undergo larger Doppler shifts, so the different uplink and downlink frequencies prevent complete cancellation.

> **Key Information:** An inverting linear transponder reverses signal positions in the band, changes USB to LSB and LSB to USB, and reduces Doppler shift because the uplink and downlink shifts act in opposite directions. {{< link id="E2A02" >}}

Operators usually transmit LSB on the uplink so that the downlink comes back as USB, the usual sideband for VHF and UHF SSB.

#### Sharing the Satellite

A linear transponder relays whatever arrives in its passband without decoding it. The type of modulation doesn't matter, as long as the signal fits and the satellite's operators permit it. Every signal shares the same transmitter and power supply, though. Wide or high-duty-cycle signals take a large share, so operators may restrict the modes allowed.

Uplink power matters for the same reason. The transponder's automatic level control holds its total output roughly constant, so a strong uplink takes a larger share of that output. Your signal sounds louder on the downlink.

> **Key Information:**
> - A linear transponder can relay FM and CW, SSB and SSTV, and PSK and packet signals. {{< link id="E2A07" >}}
> - Limit effective radiated power to a satellite with a linear transponder to avoid reducing downlink power to all the other users. {{< link id="E2A08" >}}

A simple check works: use only enough uplink power to make your downlink about as strong as the satellite's beacon. Antenna gain counts along with the transmitter's watts. Effective radiated power, not transmitter output alone, sets the signal you send toward the satellite.

A transponder contact needs both stations in view of the satellite at the same moment. Some digital satellites remove that limit: the recipient can collect a message on a later pass.

> **Key Information:** Digital store-and-forward holds messages in a satellite for later download. {{< link id="E2A12" >}}

#### Using the Satellite or Commanding It

Talking through a satellite differs from changing its operating state. Commands that switch a transponder on, change a function, or stop a transmission are called telecommand. They must come only from stations the satellite's operators trust.

Amateurs normally may not encrypt messages. Commands to a spacecraft raise a problem, though: anyone who could read them could send the same commands and take control of a spacecraft that no one can reach with a screwdriver.

> **Key Information:**
> - A space telecommand station transmits communications that initiate, modify, or terminate functions of a space station. {{< link id="E1D03" >}}
> - Any amateur station designated by the space-station licensee may be its telecommand station, subject to the control operator's license privileges. {{< link id="E1D10" >}}
> - Telecommand signals from a space telecommand station may use encrypted messages. {{< link id="E1D02" >}}

The exception covers only commands sent to a space station. Links that control a repeater or carry its audio don't qualify. Neither does ordinary talk through the transponder or traffic on a mesh network.
