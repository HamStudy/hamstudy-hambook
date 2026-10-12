---
chapter: "5"
section: "5.1"
questions: ["E7F01", "E7F05", "E7F10", "E8A09", "E7F06", "E8A04", "E8A11", "E8A02", "E8A08", "E8A10"]
status: generated1
draft: true
---

### Section 5.1: Converting Signals to Data

In a software-defined radio (SDR), software does the filtering and detection. First, though, an analog-to-digital converter, or ADC, has to turn the signal into numbers. Some SDRs mix the signal down to a lower frequency before converting it, much as a superheterodyne receiver does. Others leave even that frequency conversion to software.

> **Key Information:** *Direct sampling* in software defined radios means incoming RF is digitized by an ADC without being mixed with a local oscillator signal. {{< link id="E7F01" >}}

Filters and amplifiers may still come before the ADC; "direct" says only where frequency conversion happens. Either way, the ADC must measure the voltage often enough, and in fine enough steps, to keep the wanted information.

#### Fast Enough in Time

Each measurement is a sample. The **sample rate** counts measurements per second. If samples arrive too slowly, different input frequencies can produce the same sequence of numbers. That ambiguity is **aliasing**: an out-of-range frequency appears as another frequency in the sampled result. Once only those numbers remain, software can't tell which waveform produced them.

![A solid 1 kHz cosine wave and a dashed 5 kHz cosine wave pass through the same seven marked sample points during one millisecond. The points are taken 1/6000 second apart, at a sample rate of 6000 samples per second. Between samples the waveforms differ; at every sampled instant they have identical voltages.](../../../images/s5-1-aliasing.svg)
{.img-centered .img-xlarge .img-mobile-full caption="At 6,000 samples per second, these 1 kHz and 5 kHz signals produce identical samples. An input filter must keep the unwanted higher-frequency signal out before sampling."}

In the figure, 6,000 samples per second can represent signals from near zero frequency up to only 3 kHz, the Nyquist limit for that rate. The 5 kHz input is above that limit, so its samples match those of a 1 kHz signal ($6\text{ kHz}-5\text{ kHz}=1\text{ kHz}$). A low-pass filter ahead of the ADC must keep such signals out. Real systems leave a margin below the limit, since no practical filter cuts off at an infinitely sharp boundary.

A receiver meant to digitize everything from near DC through 30 MHz needs at least 60 million samples per second. Some designs sample a filtered higher band at a lower rate on purpose. That band must still fit within a span half the sample rate wide.

> **Key Information:**
> - An analog signal must be sampled at least twice the rate of its highest frequency component to be accurately reproduced. {{< link id="E7F05" >}}
> - In receiver analog-to-digital conversion, the sample rate determines the maximum receive bandwidth of a direct-sampling SDR. {{< link id="E7F10" >}}

#### Fine Enough in Voltage

Even frequent samples can miss small voltage changes if the converter reports them in steps that are too large. Sample rate sets how often it measures; **bit depth**, also called **sample width**, sets how many voltage values it can report. An $N$-bit ADC has $2^N$ possible codes. The converter's **reference voltage** sets its full-scale input range, and more bits divide that range into smaller steps. An amplifier ahead of the ADC changes the signal's size, not the number of codes.

Suppose a 1-volt input range needs steps no larger than 1 millivolt. Since $1\text{ V}=1{,}000\text{ mV}$, that takes at least 1,000 steps. Nine bits provide $2^9=512$, too few. Ten provide $2^{10}=1{,}024$, enough.

$$\begin{aligned}
\text{Step size}&\approx\frac{1\text{ V}}{1{,}024}\\
&=0.000977\text{ V}=0.977\text{ mV}.
\end{aligned}$$

> **Key Information:**
> - An ADC with 8-bit resolution can encode $2^8=256$ different input levels. {{< link id="E8A09" >}}
> - Sampling a signal with a range of 1 volt at a resolution of 1 millivolt requires a minimum of 10 bits. {{< link id="E7F06" >}}

An ADC rounds each measured voltage to the nearest available code. This rounding is **quantization**. Its error can appear as noise or as unwanted tones, especially when it repeats in step with the input waveform. Adding noise sounds backward, but a little random variation at the input keeps the rounding error from repeating that way. The error spreads out instead of piling up at particular frequencies.

To check how faithfully an ADC reproduces a waveform, feed it a pure sine wave and look for harmonics in its digital output. Total harmonic distortion (THD) compares the power in those harmonics with the power of the sine wave itself.

> **Key Information:**
> - *Dither* is a small amount of noise added to an ADC's input signal to reduce quantization noise. {{< link id="E8A04" >}}
> - Total harmonic distortion is a measure of the quality of an analog-to-digital converter. {{< link id="E8A11" >}}

#### Making the Conversion

The converter must also keep up with the sample rate. A successive-approximation ADC makes a series of comparisons. It first compares the voltage with a halfway value, then narrows the remaining range one bit at a time. A flash ADC makes all its comparisons at once, trading more hardware for a much faster decision. Flash converters are also called direct-conversion ADCs, a different use of "direct" from direct sampling. Pure flash designs rarely exceed about 8 bits, so many SDRs use pipelined converters, which chain several small flash stages to add resolution while keeping much of the speed.

> **Key Information:**
> - Successive approximation is a type of analog-to-digital conversion. {{< link id="E8A02" >}}
> - Direct or flash conversion ADCs are used for software defined radio because their very high speed allows digitizing high frequencies. {{< link id="E8A08" >}}

#### Back to a Voltage

Sometimes the processed numbers must drive an analog circuit, such as an audio amplifier. A digital-to-analog converter (DAC) turns them back into voltage levels. Its output steps from one level to the next, and it contains unwanted copies of the signal near multiples of the sample rate. The wanted waveform lies below half the sample rate, and those copies lie above it.

> **Key Information:** A low-pass filter used at the output of a digital-to-analog converter removes spurious sampling artifacts from the output signal. {{< link id="E8A10" >}}
