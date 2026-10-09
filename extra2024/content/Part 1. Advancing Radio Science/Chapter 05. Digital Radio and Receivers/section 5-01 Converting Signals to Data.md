---
chapter: "5"
section: "5.1"
questions: ["E7F01", "E7F05", "E7F10", "E7F06", "E8A09", "E8A02", "E8A08", "E8A04", "E8A11", "E8A10"]
status: generated1
draft: true
---

### Section 5.1: Converting Signals to Data

The signal coming down your feed line is still a changing voltage, however digital the radio may be. *A direct-sampling receiver turns incoming RF into numbers before changing its frequency.* An analog-to-digital converter, or ADC, measures the signal voltage at regular intervals. Digital circuits can then select, filter, and demodulate the wanted signal.

> **Key Information:** In a direct-sampling software defined radio, incoming RF is digitized by an ADC without first mixing it with a local oscillator signal. {{< link id="E7F01" >}}

Filters and amplifiers may still precede the ADC. *Direct* identifies where frequency conversion occurs; it does not mean the antenna connects to a bare converter with no other circuitry.

#### Fast Enough in Time

Each measurement is a sample. The *sample rate* counts measurements per second. If samples arrive too slowly, different input frequencies can produce the same sequence of numbers. That ambiguity is *aliasing*: an out-of-range frequency appears as another frequency in the sampled result. Once the converter has saved only those numbers, software cannot tell which of the possible waveforms produced them.

![A solid 1 kHz cosine wave and a dashed 5 kHz cosine wave pass through the same seven marked sample points during one millisecond. The points are taken 1/6000 second apart, at a sample rate of 6000 samples per second. Between samples the waveforms differ; at every sampled instant they have identical voltages.](/images/s5-1-aliasing.svg)
{.img-centered .img-xlarge caption="At 6,000 samples per second, these 1 kHz and 5 kHz signals produce identical samples. An input filter must keep the unwanted higher-frequency signal out before sampling."}

*For the ordinary low-pass sampling case, the Nyquist requirement says the sample rate must be at least twice the highest signal frequency.* Real systems leave extra room because practical filters cannot remove unwanted frequencies at an infinitely sharp boundary.

> **Key Information:**
> - Accurate reproduction requires sampling at least twice the rate of the signal's highest frequency component. {{< link id="E7F05" >}}
> - Sample rate determines a direct-sampling SDR's maximum receive bandwidth. {{< link id="E7F10" >}}

For example, a receiver intended to digitize everything from near DC through 30 MHz needs a theoretical minimum of 60 million samples per second. A practical design uses a higher rate and an input filter. Carefully filtered bandpass-sampling designs can place a higher-frequency band into another sampling zone, but that does not remove the bandwidth limit.

#### Fine Enough in Voltage

Sample rate describes *when* the converter measures. Bit depth describes how many voltage values it can report. An $N$-bit ADC has $2^N$ possible codes. More bits divide the same full-scale voltage range into smaller steps.

> **Key Information:** An eight-bit ADC can encode $2^8=256$ different input levels. {{< link id="E8A09" >}}

Suppose a 1-volt input range needs steps no larger than 1 millivolt. Convert to matching units: $1\text{ V}=1{,}000\text{ mV}$. We need at least $1{,}000/1=1{,}000$ steps. Nine bits provide $2^9=512$, too few. *Ten provide $2^{10}=1{,}024$, enough.*

$$\begin{aligned}
\text{Step size}&\approx\frac{1\text{ V}}{1{,}024}\\
&=0.000977\text{ V}=0.977\text{ mV}.
\end{aligned}$$

> **Key Information:** Sampling a 1-volt range with 1-millivolt resolution requires at least ten bits. {{< link id="E7F06" >}}

An ADC rounds each measured voltage to an available code. This rounding is *quantization*. Its error can appear as noise or as unwanted tones, especially when it repeats in step with the input waveform.

#### Making the Conversion

*A successive-approximation ADC makes a series of comparisons.* It first asks whether the voltage is above or below a halfway value, then narrows the remaining range one bit at a time. *A flash ADC uses many comparisons in parallel to make a much faster decision, at the cost of more hardware.*

> **Key Information:**
> - Successive approximation is a method of analog-to-digital conversion. {{< link id="E8A02" >}}
> - Direct, or flash, conversion ADCs can digitize high frequencies because of their very high speed. {{< link id="E8A08" >}}

Adding noise may sound like an odd way to improve a receiver. Here the target is a repeating error: *a controlled amount of noise, called dither, can prevent quantization errors from repeating in a fixed pattern.* It spreads those errors rather than leaving them concentrated in unwanted tones. The benefit is reduced quantization-related artifacts; adding noise does not erase all noise in the receiver.

> **Key Information:** Dither is a small amount of noise added to an ADC's input signal to reduce quantization noise. {{< link id="E8A04" >}}

Real converters also distort the waveform. Feeding a sine wave into an imperfect ADC can produce harmonics in the digital output. *Total harmonic distortion compares the unwanted harmonic energy with the wanted fundamental, giving one measure of converter quality.*

> **Key Information:** Total harmonic distortion is a measure of ADC quality. {{< link id="E8A11" >}}

#### Back to a Voltage

A digital-to-analog converter, or DAC, performs the return trip. It converts a stream of numbers into changing analog levels. That output contains sampling-related images and other unwanted components as well as the intended waveform. *A low-pass reconstruction filter passes the wanted signal and reduces those artifacts.*

> **Key Information:** A low-pass filter at a DAC's output removes spurious sampling artifacts. {{< link id="E8A10" >}}

The ADC needs a suitable input before conversion; the DAC needs suitable filtering afterward. Between them, the signal is a sequence of numbers ready for processing.
