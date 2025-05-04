---
slug: "section7.2"
questions: ["G4A12", "G4D01", "G4D02", "G4D03", "G4A02", "G4A10"]
---

### Section 7.2: Transmitting on HF

Now that you've mastered receiving HF signals, it's time to get on the air! Transmitting on HF bands with your new General privileges introduces new operating modes, techniques, and considerations beyond what you experienced as a Technician. In this section, we'll cover essential transmitting skills that will help ensure your signal is heard clearly around the world.

#### Getting Started with Voice Modes

##### SSB: The Voice Workhorse of HF

As a Technician, you likely gained experience with FM voice communications. On HF, however, single sideband (SSB) is the dominant voice mode. SSB is more spectrum-efficient than FM and performs better under marginal conditions. There are two variants:

- **Lower Sideband (LSB)**: Conventionally used on 160, 80, and 40 meters
- **Upper Sideband (USB)**: Used on 20, 17, 15, 12, and 10 meters

Your transceiver will often select the appropriate sideband automatically based on the band, but understanding which to use is important, especially when operating near band edges or on less common frequencies.

##### VFO Flexibility: Split Operation

One feature you'll appreciate as you start working distant stations (DX) is dual VFO capability:

> **Key Information:** *A common use of the dual-VFO feature on a transceiver is to transmit on one frequency and listen on another.* {{< link id="G4A12" >}}

<img src="../images/split-operation.svg" alt="Diagram showing split frequency operation" style="width: 450px; margin: 10px;">

When operating "split," you transmit on one frequency (VFO A) while listening on another (VFO B). This technique is essential when working DX stations that may be listening 5-10 kHz away from their transmitting frequency to manage large pileups.

Most modern transceivers make split operation straightforward with dedicated "A/B" and "Split" buttons. Practice this technique before needing it in the heat of a DX pileup!

#### Voice Processing and Quality

Getting your voice audio right is critical for effective HF communication. Unlike FM, where deviation limiting keeps audio relatively consistent, SSB requires more attention to audio quality and processing.

##### Speech Processors: Increasing Talk Power

> **Key Information:** *The purpose of a speech processor in a transceiver is to increase the apparent loudness of transmitted voice signals.* {{< link id="G4D01" >}}

<img src="../images/speech-processor-effect.svg" alt="Audio waveform showing effect of speech processing" style="width: 400px; margin: 10px;">

Speech processors increase your signal's average power without increasing its peak power:

> **Key Information:** *A speech processor affects a single sideband phone signal by increasing its average power.* {{< link id="G4D02" >}}

This makes your signal sound louder and more easily copyable under marginal conditions. Think of it as audio compression that brings up the quieter parts of your voice while preventing the louder parts from overmodulating.

However, speech processing must be used carefully:

> **Key Information:** *The effect of an incorrectly adjusted speech processor includes distorted speech, excessive background noise, and excessive bandwidth.* {{< link id="G4D03" >}}

<img src="../images/speech-processor-settings.svg" alt="Audio waveforms showing proper vs excessive speech processing" style="width: 450px; margin: 10px;">

Start with minimal processing and gradually increase it while getting on-air audio reports from other stations. Aim for improved readability without distortion. Most operators find that moderate compression (3-6 dB) provides benefits without negative effects.

##### Microphone Technique and Settings

Beyond processing, how you use your microphone significantly affects your transmitted audio:

1. **Microphone Position**: Maintain a consistent distance (typically 1-3 inches) from the microphone
2. **Speaking Level**: Use a normal conversational tone rather than shouting
3. **Mic Gain**: Adjust so your ALC (Automatic Level Control) meter shows activity on voice peaks but doesn't pin at maximum
4. **Equalization**: If your transceiver offers audio equalization, adjust for clarity rather than "broadcast" quality

Remember that communication effectiveness, not audio fidelity, is the goal. Optimizing for intelligibility rather than pleasing sound will make your signal more effective under difficult conditions.

#### Working CW and Digital Modes

While voice communication is popular, CW (Morse code) and digital modes offer advantages in challenging conditions. Your General privileges open up extensive CW and digital mode segments across the HF spectrum.

##### CW Operation Enhancements

If you're exploring CW, your HF transceiver offers features to enhance your experience:

> **Key Information:** *The benefit of using the opposite or "reverse" sideband when receiving CW is that it may be possible to reduce or eliminate interference from other signals.* {{< link id="G4A02" >}}

This technique works because changing from USB to LSB (or vice versa) when receiving CW effectively shifts the pitch of the received signal. Interfering signals will shift in the opposite direction, potentially moving them out of your receiver's audio passband while keeping your desired signal audible.

For sending CW, most modern transceivers include an electronic keyer:

> **Key Information:** *The function of an electronic keyer is automatic generation of dots and dashes for CW operation.* {{< link id="G4A10" >}}

<img src="../images/electronic-keyer.svg" alt="Diagram showing electronic keyer operation" style="width: 400px; margin: 10px;">

Electronic keyers work with paddle-style keys to generate perfectly timed dots and dashes. Simply press one side of the paddle for dots and the other for dashes. Most keyers allow you to adjust the speed (in words per minute) and the weight (the dot-to-dash ratio).

Some transceivers also include:
- Memory keyers to store and play back common messages
- Beacon modes for propagation testing
- CW decoders that display received Morse on the screen

##### Digital Mode Considerations

Digital modes like RTTY, PSK31, FT8, and others have become increasingly popular on HF bands. When operating digital modes:

1. **Audio Levels**: Set proper audio levels between your computer and radio (too high causes distortion, too low reduces effectiveness)
2. **ALC Management**: *Keep your ALC (Automatic Level Control) inactive or minimal when transmitting digital signals to prevent distortion*
3. **Duty Cycle Awareness**: Many digital modes transmit continuously while active, potentially causing your transmitter to heat up more than with voice modes
4. **Bandwidth Considerations**: Respect the conventional segments for different digital modes within each band

#### Operating at Band Edges

With your General privileges, you'll have access to portions of bands that have specific frequency limits. Operating near band edges requires attention to your emission bandwidth:

<img src="../images/band-edge-operation.svg" alt="Diagram showing proper operation near band edges" style="width: 450px; margin: 10px;">

For SSB operation, remember that:
- A typical SSB signal occupies about 2.8 kHz of bandwidth
- When using LSB, your displayed frequency is at the upper edge of your transmitted signal
- When using USB, your displayed frequency is at the lower edge of your transmitted signal

This means when operating LSB near the lower edge of a voice segment, you should keep your displayed frequency at least 3 kHz above the band edge. Similarly, when operating USB near the upper edge, keep your displayed frequency at least 3 kHz below the band edge.

#### Specialized Transmitting Techniques

As you gain experience on HF, you'll encounter specialized operating scenarios that require specific techniques:

##### Working DX and Pileups

When rare or desirable stations come on the air, many operators call them simultaneously, creating a "pileup." Effective techniques include:

1. **Listen First**: Understand the DX station's pattern before calling
2. **Timing**: Call slightly before or after the majority of stations
3. **Brevity**: Give your call sign once or twice, clearly and at moderate speed
4. **Power Control**: More power doesn't always help—a clean, well-timed signal often works better
5. **Split Operation**: When the DX works "split," transmit on their listening frequency, not their transmitting frequency

##### Contest Operation

HF contests provide excellent opportunities to make many contacts and improve your operating skills:

1. **Efficiency**: Keep exchanges brief and to the format required by the contest
2. **Endurance**: Manage your voice to avoid strain during extended operating periods
3. **Strategy**: Know when to call CQ and when to search and pounce on other stations
4. **Log Accuracy**: Ensure you correctly copy call signs and exchange information

#### Station Accessories for Better Transmitting

Consider these accessories to enhance your transmitting capabilities:

1. **External Audio Equalizer**: Tailors your audio for maximum clarity and "punch"
2. **Footswitch**: Frees your hands for logging or other tasks while transmitting
3. **Headset/Boom Microphone**: Provides consistent microphone positioning and reduces background noise
4. **External Antenna Tuner**: Offers greater flexibility than internal tuners for matching antennas
5. **Linear Amplifier**: Can boost your signal when conditions require (remember proper license limits)

#### Being a Good Operator

With your General class privileges comes additional responsibility to operate professionally:

1. **Courtesy**: Listen before transmitting to avoid interrupting ongoing contacts
2. **Efficiency**: Be clear and concise, especially in busy band conditions
3. **Accuracy**: Ensure you're operating within authorized frequency segments
4. **Cleanliness**: Maintain a properly adjusted transmitter that doesn't create splatter or distortion
5. **Helpfulness**: Assist newcomers as others likely helped you

#### The Bottom Line: Effective Transmission Practices

Transmitting effectively on HF requires attention to both technical details and operating practices. By maintaining proper audio levels, using appropriate modes and techniques for different situations, and respecting band plans and other operators, you'll build a reputation as a skilled and courteous operator.

As you gain experience, you'll develop your own operating style and preferences. Don't be afraid to experiment with different approaches to find what works best for you and your station. The journey from making your first HF contact to becoming a proficient HF operator is rewarding and filled with learning opportunities.

In the next section, we'll explore power amplifiers and measurement techniques that can help you optimize your station's performance and ensure compliance with regulations.
