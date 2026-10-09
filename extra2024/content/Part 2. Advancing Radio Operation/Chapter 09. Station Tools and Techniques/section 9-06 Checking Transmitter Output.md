---
chapter: "9"
section: "9.6"
questions: ["E4A02", "E4A03", "E4B10", "E8D07", "E8D08", "E8D09"]
status: "generated1"
draft: true
---

### Section 9.6: Checking Transmitter Output

Your wattmeter may show full power while the next station on the band hears an untidy signal. Reaching rated output power does not prove that a transmitter is clean: the meter adds wanted and unwanted signal power together. *A spectrum analyzer separates it by frequency, exposing unwanted products beside the desired signal.*

> **Key Information:**
> - A spectrum analyzer displays signal amplitude on the vertical axis and frequency on the horizontal axis. {{< link id="E4A02" >}}
> - A spectrum analyzer can display spurious signals and intermodulation distortion products from an SSB transmitter. {{< link id="E4A03" >}}

The oscilloscope in the previous sections answered “How does the signal change with time?” The spectrum analyzer answers “Where is its energy in frequency?” Both views can describe the same signal.

#### Give Distortion a Recognizable Pattern

Speech changes too much for a repeatable distortion test. Two steady audio tones give a cleaner comparison. *Choose frequencies that are not harmonically related, feed them into the transmitter's audio input, and inspect the RF output.* “Not harmonically related” means neither audio tone is an integer multiple of the other. That keeps an ordinary harmonic of one test tone from being mistaken for a mixing product. A linear SSB transmitter produces the two translated tones. Nonlinearity adds intermodulation products.

> **Key Information:** Measure SSB transmitter intermodulation distortion by modulating it with two AF signals at non-harmonically related frequencies and observing the RF output with a spectrum analyzer. {{< link id="E4B10" >}}

For example, third-order products fall at $2f_1-f_2$ and $2f_2-f_1$ around two RF tones at $f_1$ and $f_2$. The two nearest third-order products sit one tone-spacing outside the intended pair.

![A spectrum has two tall intended lines at f1 and f2 and two shorter unwanted lines equally spaced outside them, at 2f1 minus f2 and 2f2 minus f1. Amplitude increases upward and frequency increases to the right.](../../../images/s9-6-two-tone-spectrum.svg)
{.img-centered .img-xlarge caption="A two-tone test gives distortion a recognizable pattern. The outer dashed lines are third-order IMD products; their drawn heights are illustrative."}

For RF tones at 7.101 and 7.102 MHz, those products land at 7.100 and 7.103 MHz. A power meter might show little to complain about while this frequency-by-frequency view reveals the extra signals. Reducing drive should reduce products caused by overdriving a stage.

Use a suitable dummy load and a correctly rated attenuator or sampling coupler. The analyzer receives a small sample of the output, not the transmitter's full power. The analyzer itself must also remain below overload, or its own distortion can spoil the test.

#### Set Digital Audio for a Clean Signal

Audio-frequency shift keying, or AFSK, sends audio tones through the transmitter's audio path. More computer audio does not necessarily produce a better RF signal. Once a stage leaves its linear range, extra drive creates unwanted frequencies.

> **Key Information:**
> - Excessive transmit audio levels are a common cause of AFSK overmodulation. {{< link id="E8D07" >}}
> - Intermodulation distortion, or IMD, evaluates AFSK distortion caused by excessive input audio levels. {{< link id="E8D08" >}}

Begin with a low audio level, then increase it while following the radio's digital-mode drive instructions. Disable speech processing unless the mode and equipment instructions specifically call for it. Check the signal's quality as well as its output power.

An idling PSK signal provides a repeatable condition for an IMD check. The minus sign in the result says the unwanted products lie below the reference signal; a more negative value means smaller products.

> **Key Information:** An acceptable maximum IMD level for an idling PSK signal is −30 dB. {{< link id="E8D09" >}}

At −30 dB, the measured distortion power is one thousandth of its reference power. A reading of −20 dB is worse, not better. The goal is to give the receiving station one clean signal to decode, while leaving room for the next contact beside you.
