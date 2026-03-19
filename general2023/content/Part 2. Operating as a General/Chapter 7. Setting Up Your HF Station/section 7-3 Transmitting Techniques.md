---
chapter: "7"
section: "7.3"
questions: ["G4A12", "G4D01", "G4D02", "G4D03", "G4A02", "G4A10", "G4D08", "G4D09", "G4D10", "G4D11"]
status: draft1
---

### Section 7.3: Transmitting Techniques

In the last section, we focused on overcoming challenges when receiving—fighting noise, interference, and weak signals. Now let's flip that around: when you transmit, your goal is to give the receiving station the best possible signal and help *them* deal with those same battles.

If you're coming from VHF/UHF FM, HF is a different animal. On FM, your transmitter outputs constant power whether you're whispering or shouting. On HF (using SSB), **your transmitter output varies with your voice.**

This is a critical distinction. If you speak softly, your RF output drops significantly. You aren't "wasting" energy in terms of efficiency—the radio isn't drawing more power from the wall—but you aren't making full use of your transmitter's capability to punch through noise. Conversely, shouting into the microphone doesn't help either; it causes distortion and splatter that interferes with other stations. The goal is a strong, clean signal at normal voice levels.

#### Speaking into the Microphone: SSB and Speech Processing

When using Single Sideband (SSB) voice, the power output you set on your transmitter is actually the "maximum" power it *can* use (Peak Envelope Power, or PEP). Your actual output power depends on how loudly you speak into the microphone.

This is where a **speech processor** comes in. Think of it like a compressor on a music recording—it reduces the loud peaks and boosts the quiet valleys in order to give you a more consistent output.

> **Key Information:**
> - The purpose of a speech processor in a transceiver is to increase the apparent loudness of transmitted voice signals. {{< link id="G4D01" >}}
> - A speech processor increases average power in a single sideband phone signal. {{< link id="G4D02" >}}

By compressing your voice's dynamic range, you're transmitting closer to your maximum power more of the time. To the receiving station, you sound louder and punch through noise better without actually increasing your peak power rating.

**But be careful:** Too much processing makes you sound distorted and creates "splatter" that interferes with stations on adjacent frequencies. You'll have to experiment with your rig to find the right balance—enough processing to improve your signal without going overboard.

> **Key Information:** The effect of an incorrectly adjusted speech processor includes distorted speech, excess intermodulation products, and excessive background noise. {{< link id="G4D03" >}}

#### Frequency Discipline: Bandwidth and Band Edges

Even though we refer to the "frequency" of a radio signal, it's important to remember that *all* signals actually extend over a range of frequencies. The amount of spectrum a signal uses is called its *bandwidth*.

Imagine driving on a highway. A motorcycle uses a very narrow part of the lane and a semi uses nearly all of the lane. Some vehicles or loads are even larger than the lane allows (an "oversized load") and extra care needs to be taken to avoid hitting other vehicles or running off the road. All of these vehicles try to stay centered on their lane, but the actual vehicle extends to either side of that center point.

SSB signals occupy bandwidth—about **3 kHz** for typical voice communication. This means when you set your displayed frequency, your signal actually extends beyond that point. The direction depends on which sideband you're using:

*   **LSB (Lower Sideband):** Your signal extends *below* the displayed frequency.
*   **USB (Upper Sideband):** Your signal extends *above* the displayed frequency.

To use our highway analogy, LSB signals have the steering wheel on one side of the vehicle and USB on the other. If you try to drive on the left side of the lane but are confused as to which side the steering wheel is on then you're likely to hit a car in the other lane.

This matters tremendously when you're near band edges. If you set your LSB frequency right at the bottom of the phone band, part of your signal spills outside the band—illegal and rude to operators on adjacent bands.

> **Key Information:**
> - Your displayed carrier frequency should be at least 3 kHz above the lower edge of the band when using 3 kHz wide LSB. {{< link id="G4D10" >}}
> - A 3 kHz LSB signal when the displayed carrier frequency is set to 7.178 MHz occupies 7.175 MHz to 7.178 MHz. {{< link id="G4D08" >}}
> - Your displayed carrier frequency should be at least 3 kHz below the upper edge of the band when using 3 kHz wide USB. {{< link id="G4D11" >}}
> - A 3 kHz USB signal with the displayed carrier frequency set to 14.347 MHz occupies 14.347 MHz to 14.350 MHz. {{< link id="G4D09" >}}

It is your responsibility to ensure your entire signal fits within the band limits. Additionally, you need to make sure you are far enough away from any other signals both to avoid interfering with them and to avoid having them interfere with you.

#### Managing Pileups: Split Operation

Rare DX stations can attract hundreds of callers creating massive pileups. Operating **split** manages this chaos: the DX station transmits on one frequency but listens on another range.

For example, a station might transmit on 14.195 MHz but listen "up 5" starting at 14.200 MHz. This keeps their frequency clear so everyone hears the exchanges, while callers spread across several kilohertz to avoid stepping on each other.

> **Key Information:** A common use of the dual-VFO feature on a transceiver is to transmit on one frequency and listen on another. {{< link id="G4A12" >}}

The DX operator works through callers systematically—perhaps calling a station every kilohertz moving up the band. Success comes from listening first to understand the pattern before jumping in. Split also enables contacts between stations with different band privileges—a station calling on 14.220 MHz (Extra only in the US) can listen at 14.230 MHz where General class operators can transmit.

#### Morse Code (CW) Operation

Believe it or not, Morse code remains popular on HF. CW cuts through noise that would make voice contacts impossible, works with very low power, and uses very little bandwidth. Many operators enjoy it as a challenging skill, while others appreciate the connection to radio's heritage.

CW (short for Continuous Wave) works by turning a carrier on and off in patterns—short bursts (dots) and longer bursts (dashes) represent different letters. Operators traditionally used a straight key, the classic spring-loaded switch you might imagine.

Modern CW operators often use **electronic keyers** with code paddles. The most common type of paddle has two levers—one for dots and one for dashes. The keyer generates the appropriate timing, allowing for faster and more consistent sending.

> **Key Information:** The function of an electronic keyer is automatic generation of dots and dashes for CW operation. {{< link id="G4A10" >}}

Since CW is just a series of on/off signals it sounds the same regardless of which sideband you use to transmit it. While you should still follow the convention of using LSB below 10 MHz and USB above 10 MHz, the choice doesn't affect the shape of the signal itself. However, you can sometimes switch sidebands when receiving to avoid interference, shifting the frequency up or down as a result.

> **Key Information:** One benefit of using the opposite or "reverse" sideband when receiving CW is that it may be possible to reduce or eliminate interference from other signals. {{< link id="G4A02" >}}

#### The Goal: A Clean Signal

While there are a lot of things you can focus on when transmitting, you should always start with these fundamentals: make sure your equipment is working properly and your signal is as clean as you can make it.

Many people make a hobby of transmitting with as little power as they can get away with to see how far they can go! Others take a more old fashioned approach: brute forcing it with MOAR POWER! We'll look at what that means next.

Regardless of power, remember: **A clean signal is a good neighbor.** If you're overdriving your mic, splattering across the band, or transmitting outside the band edges, you're not just hurting your own chances—you're making life harder for everyone else (and possibly violating FCC regulations).

Next, we'll look at how to add power when you need it, and how to do so safely.
