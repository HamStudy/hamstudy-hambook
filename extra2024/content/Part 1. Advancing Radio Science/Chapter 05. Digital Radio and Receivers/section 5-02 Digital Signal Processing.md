---
chapter: "5"
section: "5.2"
questions: ["E7F07", "E7F08", "E7F09", "E7F13", "E7F14", "E7F12", "E7F02", "E7F04", "E7F03", "E7H09", "E7H10", "E7H11"]
status: generated1
draft: true
---

### Section 5.2: Digital Signal Processing

A receiver that samples everything from near DC to 30 MHz captures the whole HF spectrum at once. To hear one SSB voice, though, you need only about 3 kHz of it. Digital processing has to pick out that channel and drop the data it doesn't need. Its tools are simple: delaying samples, scaling them, and adding them. The same tools can also generate a signal for transmitting.

#### Frequency and Sample Rate

That wide capture lets an SDR show the whole band on a spectrum or waterfall display. To draw one, the radio must measure how strong each frequency is across a block of samples. A record of amplitude against time is the **time-domain** view of a signal; strength against frequency is the **frequency-domain** view. The fast Fourier transform, or FFT, is a quick way to do the Fourier analysis from Section 4.1 on such a block. It doesn't convert between analog and digital; the samples must already exist.

> **Key Information:** A Fast Fourier Transform converts signals from the time domain to the frequency domain. {{< link id="E7F07" >}}

Hearing one channel takes far less data than drawing the band. Once the receiver has chosen a narrow channel, it doesn't need every sample. Suppose earlier stages have already narrowed the stream to 48,000 samples per second. Keeping one sample in four cuts that to 12,000. That also lowers the Nyquist limit from 24 kHz to 6 kHz. A component at 8 kHz would now alias to 4 kHz ($12\text{ kHz}-8\text{ kHz}=4\text{ kHz}$) and could pass for a wanted signal.

> **Key Information:**
> - The function of decimation is reducing the effective sample rate by removing samples. {{< link id="E7F08" >}}
> - A decimator requires an anti-aliasing filter because the filter removes high-frequency signal components that would otherwise be reproduced as lower frequency components. {{< link id="E7F09" >}}

#### Taps and Filter Shape

To pass some frequencies and reject others, a digital filter combines samples taken at different times. Picture a line of stored samples, newest at one end; each step back is one sample interval earlier. The filter multiplies those values by chosen weights and adds the results. Each point where it reads a stored sample is called a **tap**.

For a small example, average the current sample with the preceding one. Steady samples of 1 and 1 give $(1+1)/2=1$: the steady signal passes. Alternating samples of 1 and $-1$ give zero: this rapid variation cancels. Different weights produce more useful frequency responses. At the same sample rate, more taps lengthen the time span the filter compares, so it can tell apart closer frequencies.

> **Key Information:**
> - Taps in a digital signal processing filter provide incremental signal delays for filter algorithms. {{< link id="E7F13" >}}
> - More taps allow a digital signal processing filter to create a sharper filter response. {{< link id="E7F14" >}}

A finite impulse response, or FIR, filter uses a finite set of these weighted samples. Feed it one isolated pulse, and once that pulse has passed the last tap, the output returns to zero. If its weights are symmetrical about the middle tap, every frequency component emerges centered on that tap, half the filter's length later. Their relative timing stays intact, which helps preserve the waveform's shape. The trade-off is work: compared with filters that feed their output back into the calculation, an FIR filter usually needs more taps, more calculation, and more delay for the same steep rolloff.

A fixed FIR filter keeps the same response until its weights change. An **adaptive** filter adjusts its weights continually to suit the input. Speech has patterns that repeat over short spans, and random noise doesn't, so such a filter can keep adjusting to pass what it can predict.

> **Key Information:**
> - FIR filters can delay all frequency components of the signal by the same amount. {{< link id="E7F12" >}}
> - An adaptive DSP audio filter is used to remove unwanted noise from a received SSB signal. {{< link id="E7F02" >}}

#### Quadrature Makes a Sideband

Section 4.1 built SSB from a balanced modulator and a sharp filter that removes one sideband. DSP can instead cancel the unwanted sideband. It splits the audio into two paths, 90 degrees apart at every audio frequency. A Hilbert-transform filter provides that quadrature path, while the original path passes through a matching delay.

The two paths then modulate the I and Q carriers from Section 4.3, which are also 90 degrees apart. Added together, the two results reinforce one sideband and cancel the other. Subtracting them instead keeps the opposite sideband.

> **Key Information:**
> - One method of generating an SSB signal using digital signal processing combines signals in quadrature phase relationship. {{< link id="E7F04" >}}
> - A Hilbert-transform filter is the type of DSP filter used to generate an SSB signal. {{< link id="E7F03" >}}

#### Synthesizing an Oscillator

The PLL in Section 3.5 reaches a chosen frequency by steering an analog oscillator. **Direct digital synthesis** (DDS) computes the waveform instead, one value per tick of a fixed clock. A **phase accumulator** tracks the position within the cycle. On each tick it advances by a chosen increment, then wraps around after a full cycle. A larger increment completes cycles faster, producing a higher frequency.

The phase value selects an entry in a **lookup table**. For a sine wave, the entries at 0, 90, 180, and 270 degrees are proportional to 0, +1, 0, and −1, whatever frequency the synthesizer generates. A DAC turns those numbers into voltage steps, and a low-pass filter smooths them, as in the previous section. DDS designers often call this filter an anti-alias filter, though it does the same smoothing.

![A DDS diagram runs left to right. At left, a circular dial labeled phase accumulator has a wraparound arrow. A dashed pointer marks the previous phase and an orange pointer the current phase, phi; a curved arrow between them, labeled delta phi, is the increment added each clock tick. Next, the lookup table is drawn as a sine curve of amplitude A against phase, with dots marking its stored entries; the entry at the current phase, a quarter cycle, gives peak amplitude. A DAC box follows, and its output is a stepped voltage waveform. A box labeled low-pass filter, with a response that is flat and then falls, turns the steps into the smooth sine-wave output at right.](../../../images/s5-2-dds.svg)
{.img-centered .img-xlarge .img-mobile-full caption="The phase accumulator advances by Δφ each clock tick. The lookup table supplies waveform amplitude A for each phase φ; the DAC produces voltage steps, and the low-pass filter removes unwanted conversion products."}

Rounding phase or amplitude values leaves small errors. The accumulator's pattern of steps repeats over and over, so the errors repeat too. Like the quantization tones from an ADC, repeating errors pile up at a few frequencies rather than spreading out as broadband noise. Engineers call the resulting tones **spurs**. Flaws in the DAC can add more.

> **Key Information:**
> - A direct digital synthesizer uses a phase accumulator, lookup table, digital-to-analog converter, and a low-pass anti-alias filter. {{< link id="E7H09" >}}
> - The lookup table of a direct digital synthesizer contains amplitude values that represent the desired waveform. {{< link id="E7H10" >}}
> - The major spectral impurity components of direct digital synthesizers are spurious signals at discrete frequencies. {{< link id="E7H11" >}}
