---
chapter: "5"
section: "5.3"
questions: ["E4C04", "E4C05", "E4C06", "E4C07", "E4D14", "E6E05", "E7F11"]
status: generated1
draft: true
---

### Section 5.3: Noise and Sensitivity

![A cartoon operator wearing headphones listens with a small smile while turning the tuning knob on a desktop radio.](/images/illus/s5-3-listening-operator.png)
{.img-small .float-right}

A receiver's noise floor sets the background against which a weak signal must stand out. To compare receivers, we need to measure that noise, account for filter bandwidth, and separate noise added by the receiver from noise at its input. More gain alone cannot improve the ratio of a signal to noise already mixed with it.

#### Power in dBm

Decibels compare powers using $10\log_{10}(P_2/P_1)$, but a sensitivity specification needs an actual power level. We can use the same scale by giving the ratio a fixed reference.

For *dBm*, that reference is 1 milliwatt: 0 dBm equals 1 mW. Positive values exceed it; negative values are below it. Thus $-10$ dBm is 0.1 mW and $-20$ dBm is 0.01 mW. Each further decrease of 10 dB divides power by ten again.

#### Noise in Each Hertz

Even a resistor at room temperature generates thermal noise. *An ideal receiver with a room-temperature source has an input noise power of about $-174$ dBm in a 1 Hz bandwidth.* A wider filter admits more of that noise.

> **Key Information:** A noise floor of $-174$ dBm represents the theoretical noise in a 1 Hz bandwidth at the input of a perfect receiver at room temperature. {{< link id="E4C05" >}}

For noise spread uniformly across the band, noise power grows in proportion to bandwidth. Increasing bandwidth from 50 Hz to 1,000 Hz admits $1{,}000/50=20$ times as much noise:

$$\Delta N=10\log_{10}(20)\approx13\text{ dB}.$$

> **Key Information:** Increasing receiver bandwidth from 50 Hz to 1,000 Hz raises the noise floor by 13 dB. {{< link id="E4C06" >}}

Narrowing the filter reduces noise, provided the signal still fits its passband. A narrow CW filter can exclude noise while retaining the tone; applying it to speech would also remove wanted sidebands.

#### What the Receiver Adds

To isolate the receiver's contribution, compare its noise with that ideal baseline. *Noise figure expresses how much the receiver worsens the signal-to-noise ratio, using the standard room-temperature reference.* A 3 dB noise figure means twice the equivalent input noise power of the ideal case.

> **Key Information:** Receiver noise figure compares receiver noise with the theoretical minimum, expressed as a ratio in dB. {{< link id="E4C04" >}}

For calculations, compare the receiver's *total equivalent input noise* with the ideal thermal baseline. Noise figure is not a comparison with whatever atmospheric noise happens to reach the antenna that day. At room temperature, a useful estimate is

$$N\text{ (dBm)}=-174+10\log_{10}(B)+NF,$$

where bandwidth $B$ is in hertz and noise figure $NF$ is in dB. In a 1,000 Hz bandwidth with a 3 dB noise figure, the estimate is $-174+30+3=-141$ dBm.

When later receiver stages contribute too much noise, a low-noise preamplifier can provide early gain while adding little noise of its own. That makes the later stages' noise less significant, especially where external noise is low and losses ahead of the receiver matter.

*Noise figure is a ratio in dB, so a value in dBm is not a noise figure at all.* For an ordinary amplifier using this room-temperature reference, look for a small positive value: zero would mean no added noise.

> **Key Information:** A typical low-noise UHF preamplifier can have a noise figure of 0.5 dB. {{< link id="E6E05" >}}

#### Finding the Smallest Signal

For a direct measure of sensitivity, *minimum discernible signal (MDS) gives the smallest signal a receiver can distinguish under specified test conditions*. Its bandwidth matters: a narrow-filter measurement is not directly comparable to one made through a wide filter.

> **Key Information:** MDS means minimum discernible signal. {{< link id="E4C07" >}}

To turn a dBm figure back into watts, start with the 1 mW reference:

$$P=10^{P_{\text{dBm}}/10}\times10^{-3}\text{ W}.$$

For $-100$ dBm, the power ratio is $10^{-10}$. Multiplying by $10^{-3}$ watt gives $10^{-13}$ watt. *Since one picowatt is $10^{-12}$ watt, this is 0.1 picowatt.*

> **Key Information:** An MDS of $-100$ dBm represents 0.1 picowatt. {{< link id="E4D14" >}}

A sampled receiver has a further limit: its smallest voltage steps. The ADC's reference sets the full-scale range, and its bit depth divides that range into codes. A larger range with the same bit count makes each step larger.

> **Key Information:** In the absence of atmospheric or thermal noise, reference voltage and sample width in bits set the minimum detectable level of a direct-sampling receiver. {{< link id="E7F11" >}}

This is the idealized quantization limit from the preceding sections. Practical sensitivity also depends on filtering, processing, and the actual noise and distortion in the hardware.
