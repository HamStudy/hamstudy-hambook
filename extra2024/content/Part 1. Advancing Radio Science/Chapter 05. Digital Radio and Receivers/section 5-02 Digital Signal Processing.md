---
chapter: "5"
section: "5.2"
questions: ["E7F07", "E7F08", "E7F09", "E7F13", "E7F14", "E7F12", "E7F02", "E7F04", "E7F03", "E7H09", "E7H10", "E7H11"]
status: generated1
draft: true
---

### Section 5.2: Digital Signal Processing

The ADC may capture far more spectrum than the one channel you want to hear. Digital processing must isolate that channel and preserve its information without processing unnecessary data. Delaying, scaling, and adding samples provide the tools. The same operations can also shape a transmitted signal.

#### Frequency and Sample Rate

To display activity across that spectrum, the radio needs to separate the frequencies contained in its time-ordered samples. *The fast Fourier transform, or FFT, reorganizes a block of samples into frequency components*, showing the strength of many frequencies at once.

> **Key Information:** An FFT converts a signal from the time domain to the frequency domain. {{< link id="E7F07" >}}

The FFT does not perform analog-to-digital conversion; the samples must already exist. It also cannot move an RF signal to a lower frequency by itself. It describes which frequencies are present in the sampled block.

After selecting a narrow channel, a receiver need not keep processing samples at the original wideband rate. *Decimation reduces the effective sample rate.* Discarding samples also lowers the highest frequency that can be represented without aliasing. *A digital low-pass filter must first remove components that would violate that new limit.*

> **Key Information:**
> - Decimation reduces effective sample rate by removing samples. {{< link id="E7F08" >}}
> - A decimator's anti-aliasing filter removes high-frequency components that would otherwise appear as lower frequencies. {{< link id="E7F09" >}}

For example, reducing 48,000 samples per second to 12,000 means retaining one sample in four after filtering. The new Nyquist limit is 6 kHz. A component at 8 kHz must be suppressed first, or it can alias to 4 kHz and be mistaken for a wanted signal.

#### Taps and Filter Shape

To pass some frequencies and reject others, a digital filter combines samples taken at different times. Picture a line of stored samples, newest at one end; each step back is one sample interval earlier. The filter multiplies those values by chosen weights and adds the results. *Its taps provide access to the delayed samples.*

> **Key Information:**
> - DSP-filter taps provide incremental signal delays for filter algorithms. {{< link id="E7F13" >}}
> - More taps allow a sharper filter response. {{< link id="E7F14" >}}

For a small example, average the current sample with the preceding one. Steady samples of 1 and 1 give $(1+1)/2=1$: the steady signal passes. Alternating samples of 1 and $-1$ give zero: this rapid variation cancels. Different weights produce more useful frequency responses.

A finite impulse response, or FIR, filter uses a finite set of these weighted samples. After one isolated input pulse and enough subsequent zero samples, its output returns to zero. *With the right symmetry in its weights, an FIR filter delays all frequency components by the same time.* That preserves their relative timing and helps preserve waveform shape.

> **Key Information:** FIR filters can delay all frequency components of a signal by the same amount. {{< link id="E7F12" >}}

Sharper filtering usually requires more calculation and can add delay. A fixed FIR filter keeps the same response until its weights change.

When a fixed response does not suit changing noise conditions, an *adaptive* filter adjusts to the input. *Receiver noise reduction can use it to separate patterns in speech from less predictable noise*.

> **Key Information:** An adaptive DSP audio filter can remove unwanted noise from a received SSB signal. {{< link id="E7F02" >}}

When trying noise reduction, listen to the words as well as the hiss. Strong settings may alter the voice, so a quieter output is not always easier to copy. The filter cannot restore information that noise has completely obscured.

#### Quadrature Makes a Sideband

Instead of removing an unwanted sideband with a sharp RF filter, DSP can cancel it by combining signals with the right phase relationships. *That requires two audio paths 90 degrees apart across the audio band*. *A Hilbert-transform filter provides the quadrature path*; the original path receives a matching delay.

Those paths modulate quadrature carrier components. When combined with the right signs, the desired sideband adds while the unwanted sideband cancels. Changing the sign of one path selects the other sideband.

> **Key Information:**
> - DSP can generate SSB by combining signals in a quadrature phase relationship. {{< link id="E7F04" >}}
> - A Hilbert-transform filter is used in DSP SSB generation. {{< link id="E7F03" >}}

This produces the same kind of SSB signal as the balanced-modulator-and-filter method, but achieves sideband selection through phase relationships.

#### Synthesizing an Oscillator

To generate a chosen frequency from a fixed clock, direct digital synthesis (DDS) controls how far a waveform advances on each tick. A *phase accumulator* tracks that position within the cycle. It advances by a chosen amount on each clock tick, then wraps around at a full cycle. A larger increment completes cycles faster, producing a higher frequency.

The phase value selects an entry in a lookup table. *The entry supplies the waveform amplitude at that point in the cycle.* For a sine wave, the entries at 0, 90, 180, and 270 degrees are proportional to 0, +1, 0, and −1. *The table stores heights along the wave, not a list of channel frequencies.* A DAC turns the amplitude numbers into voltage, and a low-pass filter smooths the output and removes sampling artifacts.

![A DDS diagram begins with a circular phase dial and a wraparound arrow. An increment, delta phi, advances the phase each clock tick. Next, a sine curve plotted as amplitude against phase shows the lookup table selecting waveform height from phase position; the marked quarter-cycle position gives peak amplitude. A DAC converts those amplitude values into a stepped voltage waveform. A low-pass response curve represents the reconstruction filter, followed by a smooth sine-wave output.](/images/s5-2-dds.svg)
{.img-centered .img-xlarge caption="The phase accumulator advances by Δφ each clock tick. The lookup table supplies waveform amplitude A for each phase φ; the DAC produces voltage steps, and the low-pass filter removes unwanted conversion products."}

> **Key Information:**
> - A DDS uses a phase accumulator, lookup table, DAC, and low-pass filter, called an anti-alias filter in the exam question. {{< link id="E7H09" >}}
> - Its lookup table stores amplitude values representing the desired waveform. {{< link id="E7H10" >}}
> - Its major spectral impurities are spurious signals at discrete frequencies. {{< link id="E7H11" >}}

The DAC output filter is more precisely a reconstruction, or anti-imaging, filter. *Limited number precision and imperfect conversion can still leave discrete unwanted tones called spurs.* A precise tuning display tells you the requested frequency; it does not guarantee a perfectly pure spectrum.
