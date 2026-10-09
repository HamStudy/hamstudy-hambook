---
chapter: "9"
section: "9.2"
questions: ["E4D13", "E4D12", "E4C10", "E4C11", "E4D07", "E4C02", "E4D09", "E4C14", "E4E02", "E4E03", "E4E09", "E4E01"]
status: "generated1"
draft: true
---

### Section 9.2: Improving Reception

You turn up the gain, the speaker gets louder, and the call sign is still unreadable. More sound has not bought you more information. Better copy may depend on less noise, less interference, or less total signal at an overloaded input. The useful control depends on which problem you have.

#### Following the Signal Level

Before adding receiver gain, estimate how much signal should reach the antenna input. A *link budget* adds antenna gains and subtracts losses along the path. Use dBm for power levels, referenced to one milliwatt, and dB for gains and losses; antenna gain in dBi is referenced to an isotropic antenna.

For a 10 W transmitter, start at +40 dBm. Add the transmitting antenna's 6 dBi gain and the receiving antenna's 3 dBi gain, then subtract 100 dB of path loss:

$$P_{\text{received}}=40+6+3-100=-51\text{ dBm}.$$

> **Key Information:** A transmit power of 10 W (+40 dBm), transmit antenna gain of 6 dBi, receive antenna gain of 3 dBi, and path loss of 100 dB produce a received signal level of −51 dBm. {{< link id="E4D13" >}}

The link margin tells us how much signal remains above the level required for the link. In the exam's second example, the two antennas provide a combined 10 dB of gain. Cable loss is 3 dB and path loss is 136 dB:

$$P_{\text{received}}=40+10-3-136=-89\text{ dBm}.$$

The receiver's minimum discernible signal, or MDS, is −103 dBm. With a required signal-to-noise ratio of 6 dB, the target level is $-103+6=-97$ dBm. The received signal exceeds it by

$$\text{margin}=-89-(-97)=+8\text{ dB}.$$

> **Key Information:** For +40 dBm transmit power, 10 dBi system antenna gain, 3 dB cable loss, 136 dB path loss, −103 dBm receiver MDS, and a required 6 dB signal-to-noise ratio, the link margin is +8 dB. {{< link id="E4D12" >}}

![A horizontal power scale in dBm increases to the right. Its three ticks are minus 103, minus 97, and minus 89 dBm. The first is the receiver MDS. A bracket spans 6 dB from MDS to the required signal level at minus 97 dBm. A second bracket spans 8 dB from that required level to the received signal at minus 89 dBm. Tick spacing is proportional to the decibel differences: the 8 dB span is one third longer than the 6 dB span.](../../../images/s9-2-link-margin.svg)
{.img-centered .img-xlarge .img-mobile-full caption="The exam example starts with −103 dBm MDS and adds 6 dB to reach the required signal level of −97 dBm. The received −89 dBm signal leaves 8 dB of margin. Equal distances on the scale represent equal decibel differences."}

Read that *+8 dB* as an allowance for extra loss. If the path gets 5 dB worse, 3 dB of margin remains; if it gets 9 dB worse, the link falls 1 dB short. The calculation gives you a planning margin, not a guarantee against every fade.

#### Admit Only What You Need

*Match receive bandwidth to the modulation to admit the wanted information while limiting noise and adjacent signals.* Narrowing beyond that point cuts the signal you are trying to copy. CW permits a narrower passband than SSB, but filter width is only part of the decision.

> **Key Information:** A choice of receiver bandwidths lets you match the modulation bandwidth, maximizing signal-to-noise ratio and minimizing interference. {{< link id="E4C10" >}}

The position of a filter matters as much as its width. The roofing filter discussed in Chapter 5 limits what reaches later receiver stages. *A strong signal outside the band may need rejection before it reaches the first active stage at all. A preselector is a tuned input filter that does this work.* A later IF filter cannot undo overload that has already happened at the input.

> **Key Information:**
> - A front-end filter or preselector can eliminate interference from strong out-of-band signals. {{< link id="E4C02" >}}
> - A preselector increases rejection of signals outside the band being received. {{< link id="E4D09" >}}

*When a nearby station falls at one edge of your receive passband, try IF Shift.* This moves the passband relative to the wanted signal so the filter can cut more of the interference. The passband moves relative to the signal; this is not the same as tuning the receiver to a different station. Some wanted audio may also be lost, so judge the setting by whether you can copy the contact.

> **Key Information:** The receiver IF Shift control reduces interference from stations transmitting on adjacent frequencies. {{< link id="E4C14" >}}

#### When Less Input Helps

Attenuation can restore an overloaded receiver's linear operation, but it also reduces the wanted signal. Whether that costs readability depends on what supplies most of the noise: the antenna or the receiver itself.

*On the lower HF bands, atmospheric noise often exceeds the receiver's own noise by a wide margin.* Moderate attenuation can lower the signal and atmospheric noise together while leaving both above the internal noise floor. *Their ratio changes little, but overload may disappear.*

> **Key Information:**
> - Inserting attenuation before the first RF stage reduces the likelihood of receiver desensitization. {{< link id="E4D07" >}}
> - On the lower HF bands, attenuation can reduce overload with little or no effect on signal-to-noise ratio because atmospheric noise is generally greater than internally generated noise even after attenuation. {{< link id="E4C11" >}}

Compare reception with and without attenuation. Keep it only if reducing overload helps more than the reduced signal level hurts.

#### Noise Controls Have Side Effects

The noise pattern determines which processing is useful. *Digital noise reduction can often reduce broadband white noise, ignition noise, and power line noise* by distinguishing them from the wanted signal. White noise contributes roughly equal power in equal-width frequency ranges. *A noise blanker targets impulse noise by suppressing the brief intervals containing large pulses*; an automatic notch targets steady tones. Each method can also alter a wanted signal that resembles what it is trying to remove.

> **Key Information:**
> - Digital noise reduction can often reduce broadband white noise, ignition noise, and power line noise. {{< link id="E4E02" >}}
> - A noise blanker removes impulse noise. {{< link id="E4E03" >}}
> - A noise blanker can distort strong signals, making them appear to cause spurious emissions. {{< link id="E4E09" >}}

Increase noise reduction only while it improves copy. Aggressive settings can change the wanted audio too. If a station seems to splatter only when your noise blanker is on, check the receiver setting before blaming the transmitter.

A CW note is itself a tone. *The automatic notch cannot be trusted to preserve it merely because it is the tone you want.*

> **Key Information:** An automatic notch filter used while receiving CW may remove the CW signal along with the interfering carrier. {{< link id="E4E01" >}}

Receiver controls may make a noisy band usable. When the noise comes from equipment nearby, finding its source can give a better result than processing it after it arrives.
