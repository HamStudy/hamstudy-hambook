---
chapter: "6"
section: "6.7"
questions: [ "T7B03", "T7B05", "T7B02", "T7B04", "T7B07", "T7B06", "T7B08", "T7B10", "T7B11", "T7B09" ]
---

### Section 6.7: Interference and Troubleshooting

Welcome to the world of radio detective work! As a ham, you'll sometimes encounter interference or audio issues. Let's explore how to identify, prevent, and solve these problems.

#### Types of Interference

> **Key Information:** *Radio frequency interference (RFI) can be caused by fundamental overload, harmonics, and spurious emissions.* {{< link id="T7B03" >}} These are all potential sources of interference to other devices.

1. Radio Frequency Interference (RFI): This is unwanted radio signals interfering with your desired signal. It can come from various sources, including:
   - Other radio transmitters
   - Electronic devices
   - Power lines
   - Motor-driven equipment

2. Fundamental Overload: 
   This occurs when a strong nearby signal overwhelms a receiver, even if it's not on the frequency you're trying to receive. It's like trying to hear a whisper while someone's shouting nearby.

   > **Key Information:** *Fundamental overload of a non-amateur radio or TV receiver by an amateur signal can be reduced or eliminated by blocking the amateur signal with a filter at the antenna input of the affected receiver.* {{< link id="T7B05" >}}

   - In non-amateur receivers (like TVs, radios, or cell phones), fundamental overload can happen when a nearby amateur transmitter is so strong that it overloads the receiver's front-end circuitry.
   - This can cause interference even if the amateur signal isn't on a frequency close to what the device is trying to receive.
   - Symptoms might include *hearing amateur radio transmissions unintentionally on a broadcast AM or FM radio* {{< link id="T7B02" >}} because the receiver is unable to reject strong signals outside its intended band.

   To address fundamental overload:
   - Reduce transmitter power if possible
   - Increase the distance between your antenna and affected devices
   - *Install a band-pass filter at the input of the affected receiver to block out-of-band signals*
   - Use a better-designed antenna that minimizes radiation in unwanted directions

   Remember, just because a neighbor can hear your transmissions on their device doesn't necessarily mean you're transmitting illegally or on the wrong frequency. It could be a case of fundamental overload, which is often a receiver problem rather than a transmitter problem.

3. Harmonics and Spurious Emissions:
   - Harmonics are multiples of the fundamental frequency you're transmitting on. For example, if you're transmitting on 146 MHz, harmonics could appear at 292 MHz, 438 MHz, and so on.
   - Spurious emissions are unwanted radio frequency outputs on frequencies other than the fundamental frequency and its harmonics.
   - Both harmonics and spurious emissions can cause interference to other services or devices operating on those frequencies.

   Causes of harmonics and spurious emissions can include:
   - Overdriven amplifiers
   - Poor filtering in the transmitter
   - Faulty or poorly designed equipment

   To minimize harmonics and spurious emissions:
   - Ensure your transmitter is properly tuned and not overdriven
   - Use appropriate low-pass filters on your transmitter output
   - Maintain your equipment and replace any faulty components

   Understanding harmonics and spurious emissions is crucial for responsible amateur radio operation. These unwanted signals can cause interference far outside your intended transmission frequency, potentially affecting a wide range of devices and services.

#### Common Causes and Solutions

1. FM Deviation and Overmodulation: 
   > **Key Information:** *Talking too loudly into the microphone causes your FM transmission audio to be distorted on voice peaks.* This is known as overdeviation.

   - Cause: Speaking too loudly into the microphone or having the mic gain set too high.
   - Solution: Adjust your mic gain and speak at a normal volume. If others report distorted audio, try backing off the mic a bit.

2. Ferrite Chokes:
   > **Key Information:** *A ferrite choke can be used to cure distorted audio caused by RF current on the shield of a microphone cable.* {{< link id="T7B04" >}}

   - Use: These are great for reducing RFI on cables.
   - How: Slip them over power cords, audio cables, or coax feedlines to suppress unwanted RF.

3. Filters:
   > **Key Information:** *A band-reject filter can reduce overload of a VHF transceiver by a nearby commercial FM station.* {{< link id="T7B07" >}}

   - Band-reject filters: These can block out a specific frequency range causing interference. For example, you could use one to block signals from a nearby commercial FM station.
   - Low-pass filters: Use these on your transmitter output to reduce harmonics that might interfere with TVs or other devices.

4. Grounding:
   - Proper grounding of your station can significantly reduce interference issues.
   - Ensure all equipment is connected to a common ground point.

#### Dealing with Neighbor Complaints

> **Key Information:** If a neighbor tells you that your station's transmissions are interfering with their radio or TV reception, *you should first make sure that your station is functioning properly and that it does not cause interference to your own radio or television when it is tuned to the same channel*. {{< link id="T7B06" >}}

If a neighbor complains about interference:

1. Take it seriously and be polite.
2. *Verify your station is operating properly and not causing interference to your own devices.*
3. *Work with your neighbor to identify the offending device.* {{< link id="T7B08" >}}
4. Make sure your station meets the standards of good amateur practice.
5. If it is your station, work on solutions like filters or adjusting operating times.

Remember that both you and your neighbor share responsibility in resolving interference issues. While you need to ensure your station is operating properly, sometimes the issue may be with their equipment's susceptibility to strong signals rather than a problem with your transmissions.

#### Troubleshooting Audio Issues

1. Distorted Audio through Repeaters:

   > **Key Information:** *If you receive a report that your audio signal through an FM repeater is distorted or unintelligible, it might be because your transmitter is slightly off frequency, your batteries are running low, or you are in a bad location.* {{< link id="T7B10" >}}

   - Possible causes: Overdeviation, poor signal into the repeater, repeater issues, low batteries, being off-frequency.
   - Solutions: Check your transmit audio levels, try a different location, replace or charge batteries, ensure your radio is on frequency, or contact the repeater owner if the problem persists.

2. RF Feedback:

   > **Key Information:** *A symptom of RF feedback in a transmitter or transceiver is reports of garbled, distorted, or unintelligible voice transmissions.* {{< link id="T7B11" >}}

   - Symptoms: Garbled, distorted, or unintelligible transmissions.
   - Causes: RF energy from your transmitter is getting back into your microphone or audio circuits. This creates a feedback loop where your transmitted signal interferes with its own audio input.
   - Solutions: Improve station grounding, use ferrite chokes on cables, ensure proper shielding of audio equipment, and adjust antenna placement to reduce RF in the shack.

#### TV Interference

> **Key Information:** *The first step to resolve cable TV interference caused by your amateur radio transmission is to be sure all TV feed line coaxial connectors are installed properly.* {{< link id="T7B09" >}}

Interference to cable TV can often be resolved by ensuring all connections are tight and properly shielded. Sometimes, a low-pass filter on your transmitter output or high-pass filters on affected TV equipment can help.

Problems with cable TV interference are frequently caused by:
- Loose connectors allowing your signal to leak in
- Poorly shielded cables
- Broken or damaged cable lines
- Missing or damaged terminations on unused cable outlets

Remember, patience is key when troubleshooting. Methodically check each part of your station, and don't be afraid to ask for help from more experienced hams. With practice, you'll become a pro at keeping your signals clean and your neighbors happy!

Pro Tip: Keep a log of any interference issues and the steps you take to resolve them. This can be invaluable if you encounter similar problems in the future or need to demonstrate your efforts to resolve interference.
