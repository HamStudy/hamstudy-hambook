---
chapter: "5"
section: "5.4"
questions: ["E4C09", "E7E09", "E4D08", "E4D11", "E4D10", "E4D06", "E4D01", "E4D02", "E4C08", "E4C12", "E4C13", "E4C01"]
status: generated1
draft: true
---

### Section 5.4: Receiver Limits and Distortion

A receiver can hear an extremely weak test signal and still struggle on a crowded band. Nearby strong signals place different demands on its filters, amplifiers, mixers, and converter. Some interference enters through the antenna; some is created inside the receiver itself.

#### The Other Frequency That Fits

A superheterodyne receiver must reject an image before mixing: once it reaches the same intermediate frequency (IF) as the wanted signal, even a sharp IF filter cannot separate them. The choice of IF affects how easily the input circuits can do that job.

Suppose the wanted signal is at 14 MHz, the local oscillator (LO) is at 23 MHz, and the IF is 9 MHz. The wanted difference is $23-14=9$ MHz. A signal at 32 MHz also gives a 9 MHz difference: $32-23=9$ MHz. That unwanted 32 MHz signal is the *image*.

Both signals produce the same IF, but they are 18 MHz apart at the input. That separation is twice the IF: *a higher IF puts the image farther from the wanted signal, making it easier to reject ahead of the mixer*.

> **Key Information:** A high IF makes image responses easier for a superheterodyne receiver's front-end circuitry to reject. {{< link id="E4C09" >}}

#### Products That Were Never Transmitted

Rejecting images does not prevent interference created inside the receiver. *Nonlinear behavior combines incoming signals into unwanted intermodulation products.* A mixer needs controlled nonlinearity for frequency conversion, but *excessive input levels create additional combinations*.

> **Key Information:**
> - Excessive mixer input levels generate spurious mixer products. {{< link id="E7E09" >}}
> - Nonlinear circuits or devices cause intermodulation. {{< link id="E4D08" >}}

Two signals at frequencies $f_1$ and $f_2$ can produce third-order products at $2f_1-f_2$ and $2f_2-f_1$. For example, signals at 14.020 and 14.030 MHz produce products at 14.010 and 14.040 MHz. Both lie close to the real stations, where the receiver is supposed to be listening.

> **Key Information:** Odd-order intermodulation products of two in-band signals are likely to fall within the received band too. {{< link id="E4D11" >}}

Intermodulation grows faster than the wanted response: in the small-signal region, raising both test signals by 1 dB raises their third-order products by about 3 dB. To compare receivers, extend those trends on a graph until they meet at the *third-order intercept point*. The actual receiver reaches overload before operating at that theoretical meeting.

![A graph plots output power per component in dBm against input power per tone for two equal test signals. The blue fundamental response follows a one-dB-per-dB trend at low levels, then bends toward compression. One orange third-order product follows a three-dB-per-dB trend. Dashed straight extensions of both low-level trends meet at a hollow point, IP3, at 40 dBm input and 30 dBm output. A vertical guide projects that point to IIP3 on the input axis. The solid fundamental response remains below the intersection. The illustrative conversion stage has 10 dB of small-signal conversion loss. The curves are a model, not measurements or input ratings of a particular receiver.](../../../images/s5-4-third-order-intercept.svg)
{.img-centered .img-xlarge .img-mobile-full caption="Illustrative two-tone test. At low levels, each 1 dB input increase raises the fundamentals (blue) 1 dB and third-order products (orange) 3 dB. Dashed extensions meet at IIP₃ = 40 dBm; the solid response compresses first. Powers are per component. The intercept is theoretical, not an operating limit."}

> **Key Information:** A 40 dBm input third-order intercept means that two 40 dBm input signals would theoretically produce a third-order product with the same output amplitude as either input signal's response. {{< link id="E4D10" >}}

It is an extrapolated comparison, not permission to feed 40 dBm into a receiver, and not a threshold below which intermodulation disappears.

#### Compression and Lost Sensitivity

An amplifier initially increases output in proportion to input. Near its limit, output no longer grows as much as expected: its gain *compresses*. A strong unwanted signal can drive a stage toward that limit and reduce its ability to amplify a weak wanted signal.

> **Key Information:**
> - Reduced receiver sensitivity caused by a strong nearby signal is desensitization. {{< link id="E4D06" >}}
> - Blocking dynamic range is the difference in dB between the noise floor and the incoming-signal level that causes 1 dB of gain compression. {{< link id="E4D01" >}}
> - Poor dynamic range permits spurious responses from cross modulation and desensitization from strong adjacent signals. {{< link id="E4D02" >}}

Cross modulation transfers modulation from an unwanted strong signal onto another signal through nonlinearity. It can make one station appear to carry another station's audio. *Desensitization instead describes the loss of sensitivity.* You may hear the weak station fade when a strong neighbor transmits, or hear the neighbor’s speech turn up where it does not belong. Both effects can originate in your receiver even when the wanted transmitter is working correctly.

If the noise floor is $-130$ dBm and a test signal at $-20$ dBm causes 1 dB compression, blocking dynamic range is $-20-(-130)=110$ dB. The test-signal spacing and receiver settings matter when comparing that number with another receiver's specification.

To protect later stages from strong signals they do not need to process, a roofing filter limits bandwidth early in the IF chain. *It attenuates signals outside its passband, improving blocking dynamic range.* It cannot undo overload ahead of it.

> **Key Information:** A narrow-band roofing filter improves blocking dynamic range by attenuating strong signals near the receive frequency. {{< link id="E4C12" >}}

A direct-sampling radio faces the same need to control signal levels. Its ADC has a full-scale input range set by its reference. *When the combined waveform exceeds that range, clipping replaces the true peaks with maximum or minimum codes.* The converter has run out of voltage range, not storage space or sampling speed. The resulting distortion spreads through the sampled signal.

> **Key Information:** An SDR receiver overloads when input signals exceed the ADC's reference-voltage limit. {{< link id="E4C08" >}}

#### Oscillator Noise

A strong adjacent signal can raise the noise inside the wanted passband even when the filter rejects the adjacent carrier. The source can be the receiver's oscillator: its small, rapid phase fluctuations create *phase noise* on either side of its frequency. These fluctuations differ from a slow shift in tuning.

*The adjacent signal mixes with that LO noise, placing noise inside the wanted IF passband.* The resulting higher background can hide the station you want to hear.

> **Key Information:**
> - Reciprocal mixing occurs when LO phase noise mixes with strong adjacent signals and interferes with desired signals. {{< link id="E4C13" >}}
> - Excessive phase noise in an SDR's master clock can combine with strong nearby signals to generate interference. {{< link id="E4C01" >}}

The sampling clock plays a timing role as fundamental as the LO's role in a mixer. Fine digital filters help only after the signal has survived those earlier stages with its information intact.
