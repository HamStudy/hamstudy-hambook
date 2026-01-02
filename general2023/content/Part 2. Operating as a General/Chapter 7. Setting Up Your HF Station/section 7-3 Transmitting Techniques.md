---
chapter: "7"
section: "7.3"
questions: ["G4A12", "G4D01", "G4D02", "G4D03", "G4A02", "G4A10", "G4D08", "G4D09", "G4D10", "G4D11"]
status: reviewed1
---

### Section 7.3: Transmitting Techniques

In the last section we focused on overcoming challenges when receiving—fighting noise, interference, and weak signals. Now let's flip that around: when you transmit, your goal is to give the receiving station the best possible signal so *they* don't have to fight those same battles. A clean, strong, properly positioned signal makes all the difference between a successful contact and a frustrating struggle.

#### Getting Your Signal Through

The first challenge in HF communication is simply getting heard. You might be running 100 watts, but if you're fighting poor propagation or the other station is surrounded by noise, every bit of signal strength matters. This is where understanding your voice signal becomes important.

When you speak normally, your power output varies wildly. You might hit 100 watts on "RADIO" but drop to 20 watts on quieter syllables. Most of the time you're transmitting well below your peak power. A speech processor changes this:

> **Key Information:**
> - The purpose of a speech processor in a transceiver is to increase the apparent loudness of transmitted voice signals. {{< link id="G4D01" >}}
> - A speech processor increases average power in a single sideband phone signal. {{< link id="G4D02" >}}

Speech processing compresses your voice's dynamic range—it reduces the loud peaks and boosts the quiet valleys. The result is that you're transmitting closer to your maximum power more of the time, which means your *average* power goes up even though your *peak* power stays the same. To the receiving station, you sound louder and punch through noise better.

But—and this is important—more is not always better:

> **Key Information:** The effect of an incorrectly adjusted speech processor includes distorted speech, excess intermodulation products, and excessive background noise. {{< link id="G4D03" >}}

Too much processing makes you sound distorted and creates splatter that interferes with stations on adjacent frequencies. Start with processing off or minimal, increase it gradually, and ask for audio reports. If someone says you sound distorted, back it off. You want to be *readable*, not just loud.

#### Keeping Your Signal Clean

A strong signal doesn't help if it's full of distortion or bleeding onto other frequencies. Part of being an effective transmitter is staying within your allocated space and keeping your signal clean.

SSB signals occupy bandwidth—about 3 kHz for typical voice communication. This means when you set your displayed frequency, your signal actually extends beyond that point. The direction depends on which sideband you're using:

> **Key Information:**
> - A 3 kHz LSB signal when the displayed carrier frequency is set to 7.178 MHz occupies 7.175 MHz to 7.178 MHz. {{< link id="G4D08" >}}
> - A 3 kHz USB signal with the displayed carrier frequency set to 14.347 MHz occupies 14.347 MHz to 14.350 MHz. {{< link id="G4D09" >}}

With LSB your signal extends *below* the displayed frequency; with USB it extends *above*. This matters tremendously when you're near band edges. If you set your LSB frequency right at the bottom of the phone band, part of your signal spills outside the band—illegal and rude to operators on adjacent bands.

The solution is straightforward:

> **Key Information:**
> - Your displayed carrier frequency should be at least 3 kHz above the lower edge of the band when using 3 kHz wide LSB. {{< link id="G4D10" >}}
> - Your displayed carrier frequency should be at least 3 kHz below the upper edge of the band when using 3 kHz wide USB. {{< link id="G4D11" >}}

For example, on 40 meters where the General class phone segment starts at 7.175 MHz, don't set your LSB frequency any lower than 7.178 MHz. You need to leave room for your entire signal, not just your carrier frequency. Most modern transceivers enforce this automatically, but understanding why keeps you legal and considerate even with older equipment.

#### When the Usual Approach Doesn't Work

Sometimes normal operation isn't enough. You might need to listen on one frequency while transmitting on another, or you might face interference that requires creative solutions.

**Split operation** is essential when rare DX stations create pileups. They transmit on 14.195 MHz but listen "up 5"—at 14.200 MHz. This keeps their receive frequency clear while everyone calls on a different frequency:

> **Key Information:** A common use of the dual-VFO feature on a transceiver is to transmit on one frequency and listen on another. {{< link id="G4A12" >}}

You set one VFO to their transmit frequency (where you listen) and the other VFO to their listening frequency (where you transmit). Your radio handles the switching automatically. You'll also use this for satellite work where uplink and downlink are always on different frequencies.

**CW operation** gives you additional flexibility. An electronic keyer makes sending code much easier:

> **Key Information:** The function of an electronic keyer is automatic generation of dots and dashes for CW operation. {{< link id="G4A10" >}}

With just two paddles—one for dots, one for dashes—you can send perfect code at any speed. The keyer handles all the timing automatically. But there's also a receiving trick that's unique to CW:

> **Key Information:** The benefit of using the opposite or "reverse" sideband when receiving CW is that it may be possible to reduce or eliminate interference from other signals. {{< link id="G4A02" >}}

Since CW is just an on-off carrier, you can receive it on either sideband by adjusting your tuning slightly. If there's interference on one sideband, flip to the other—the interfering station moves to the opposite side of your desired signal, often making it much easier to copy.

#### Putting It Together

Effective HF transmission isn't complicated, but it requires attention to detail. Use speech processing judiciously to maximize your average power without creating distortion. Keep your entire signal within band limits by understanding how your sideband selection affects bandwidth. And when standard operation doesn't cut it, use split operation or CW techniques to work through the challenges.

The goal is always the same: give the receiving station the best possible signal. When you do that, you're not just following the rules—you're being the kind of operator others enjoy working. Next, let's look at what to do when 100 watts isn't quite enough.
