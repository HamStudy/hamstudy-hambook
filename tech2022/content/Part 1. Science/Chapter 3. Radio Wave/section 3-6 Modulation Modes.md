---
questions: [ "T8A01", "T8A06", "T8A02", "T8A03", "T8A04", "T8A05", "T8A07", "T8A08", "T8A09", "T8A10", "T8A11" ]
---

### Section 3.6: Modulation Modes and Bandwidth

Imagine you're at a busy train station. You see trains of all shapes and sizes, carrying different types of cargo. Some are sleek passenger trains, others are long freight trains. In the world of radio, our "trains" are carrier waves, and the "cargo" is the information we want to send. The way we load this information onto our carrier wave is called modulation.

Let’s dive into some common modulation modes you’ll encounter as a ham:

#### Amplitude Modulation (AM)

Think of AM like a roller coaster. The carrier wave is the track, and our signal information creates hills and valleys along this track. In AM, we're changing (modulating) the amplitude, or height, of the wave.

AM was the first modulation method used for voice transmission. While it’s not as common in amateur radio today, you’ll still hear it on broadcast radio and some aircraft communications. Most analog television signals, including most fast scan Amateur Television (ATV), use AM.

#### Frequency Modulation (FM) and Phase Modulation (PM)

If AM is a roller coaster, FM is more like a winding road. Instead of changing the height of our wave, we’re changing its frequency—making it wiggle faster or slower. PM is similar, but instead of changing the frequency, we’re shifting the phase of the signal. Honestly, most of us don’t spend much time thinking about the difference between FM and PM because, in practical terms, they’re very similar. An FM receiver can usually pick up a PM signal and vice versa.

FM (or PM) is super popular in amateur radio, especially on VHF and UHF bands. It’s one of the simplest and clearest modes to use and is not only used for voice on VHF/UHF but for packet radio as well.

#### Single Sideband (SSB)

Now, let's talk about SSB, which is where amplitude modulation gets a cool upgrade. SSB is actually a form of amplitude modulation, but with a clever twist. Remember our AM roller coaster? Well, SSB is like realizing we can send our message with just half of the track and without the center rail. We’ve stripped away the carrier (the part that makes AM signals "quiet" even when there’s no sound) and one of the sidebands. The result? A more efficient signal that uses less bandwidth and power. It’s like AM went on a diet and came back leaner and meaner!

There are two flavors of SSB:
- **Upper Sideband (USB)**: Generally used on frequencies above 10 MHz. This includes the 30, 20, 17, 15, 12, and 10 meter bands.
- **Lower Sideband (LSB)**: Used below 10 MHz, covering the 160, 80, and 40 meter bands.

SSB is a ham radio favorite, especially on HF bands. It’s more efficient than AM, allowing your signal to go further with less power. It’s like upgrading from a steam engine to a bullet train!

#### Bandwidth

Now, let’s talk about bandwidth. If our modulated signal is a train, bandwidth is the width of the track it needs. Different modulation types need different amounts of "track space" in the radio spectrum.

Here’s a rough guide:
- **CW (Morse code)**: About 150 Hz
- **SSB voice**: About 3 kHz
- **AM voice**: About 6 kHz
- **FM voice**: About 10-15 kHz for narrowband FM used in amateur radio
- **AM fast-scan television**: About 6 MHz

Why does this matter? Well, the wider your bandwidth, the more "space" you take up in the radio spectrum. A typical single sideband (SSB) voice signal has an approximate bandwidth of 3 kHz, while a typical AM voice signal uses about 6 kHz. This is one reason why SSB is often preferred for long-distance communication on HF bands, as it uses less bandwidth than other voice modes like AM.

As a Technician, you’ll mostly use FM on VHF and UHF bands. But as you explore the 10-meter HF band, you’ll get to try out SSB. And who knows? You might even get bitten by the CW bug and start learning Morse code!

#### Final Thoughts

Choosing the right modulation mode is like picking the right tool for the job. FM is great for local communications with high audio quality. SSB lets you stretch out on HF bands, making long-distance contacts with relatively low power. And CW? It’s the mode that gets through when all others fail, piercing through noise with its narrow bandwidth.

In ham radio, there’s always something new to learn and try. Each mode has its own quirks and charms. As you gain experience, you’ll develop your own preferences. Maybe you’ll love the clarity of FM, or perhaps you’ll be drawn to the DX potential of SSB. The joy of amateur radio is in the exploration!
