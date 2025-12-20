---
chapter: "6"
section: "6.7"
questions: [ "T7B03", "T7B05", "T7B02", "T7B11", "T7B07", "T7B06", "T7B08", "T7B10", "T7B09" ]
state: complete
---

### Section 6.7: Interference and Troubleshooting

Welcome to the world of radio detective work! As a ham, you'll sometimes encounter interference or audio issues. Let's explore how to identify, prevent, and solve these problems.

#### Radio Frequency Interference

> **Key Information:** Radio frequency interference (RFI) can be caused by fundamental overload, harmonics, and spurious emissions. {{< link id="T7B03" >}}

Radio Frequency Interference (RFI) refers to unwanted radio energy interfering with your desired signals. It can come from various sources, including other radio transmitters, electronic devices, power lines, and motor-driven equipment.

##### Fundamental Overload

> **Key Information:** Interference by an amateur station to a non-amateur over-the-air radio receiver can be reduced by blocking the amateur signal with a filter at the antenna input of the affected receiver. {{< link id="T7B05" >}}

Fundamental overload occurs when a strong nearby signal overwhelms a receiver, even if it's not on the frequency you're trying to receive. It's like trying to hear a whisper while someone's shouting nearby.

In non-amateur receivers (like TVs, radios, or cell phones), fundamental overload can happen when a nearby amateur transmitter is so strong that it overloads the receiver's front-end circuitry. This can cause interference even if the amateur signal isn't on a frequency close to what the device is trying to receive.

Signs might include *hearing amateur radio transmissions unintentionally on a broadcast AM or FM radio* {{< link id="T7B02" >}} because the receiver is unable to reject strong signals outside its intended band or simply not being able to pick anything up at all.

To address fundamental overload:
- Reduce transmitter power if possible
- Increase the distance between your antenna and affected devices
- *Install a band-pass filter at the input of the affected receiver to block out-of-band signals*
- Use a better-designed antenna that minimizes radiation in unwanted directions

Remember, just because a neighbor can hear your transmissions on their device doesn't necessarily mean you're transmitting illegally or on the wrong frequency. It could be a case of fundamental overload, which is often a receiver problem rather than a transmitter problem.

##### Harmonics and Spurious Emissions

Harmonics are multiples of the fundamental frequency you're transmitting on. For example, if you're transmitting on 146 MHz, harmonics could appear at 292 MHz, 438 MHz, and so on.

Spurious emissions are unwanted radio frequency outputs on frequencies other than the fundamental frequency and its harmonics.

Both harmonics and spurious emissions can cause interference to other services or devices operating on those frequencies.

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

Beyond the interference sources discussed above, here are some practical tools and techniques for addressing common problems.

##### Ferrite Chokes and RF Feedback

> **Key Information:** Adding a clip-on ferrite choke to the microphone cable can eliminate distorted voice transmissions by preventing the transmitted signal from feeding back into the transmitter. {{< link id="T7B11" >}}

RF feedback creates garbled or unintelligible transmissions when RF energy gets back into your audio circuits. Ferrite chokes suppress these unwanted RF currents—slip them over microphone cables, power cords, or audio cables. Multiple chokes may be needed on longer cables. Other solutions include improving station grounding and adjusting antenna placement.

##### Filters

> **Key Information:** A band-reject filter can reduce interference to a 2-meter transceiver from a nearby commercial FM station. {{< link id="T7B07" >}}

Band-reject filters block a specific frequency range causing interference, while low-pass filters on your transmitter output reduce harmonics that might interfere with TVs or other devices.

##### Grounding

Proper grounding of your station can significantly reduce interference issues. Ensure all equipment is connected to a common ground point.

#### Dealing with Neighbor Complaints

> **Key Information:** If a neighbor tells you that your station's transmissions are interfering with their radio or TV reception, *you should first make sure that your station is functioning properly and that it does not cause interference to your own radio or television when it is tuned to the same channel*. {{< link id="T7B06" >}}

Take complaints seriously and be polite. After verifying your own equipment, *work with your neighbor to identify the offending device* {{< link id="T7B08" >}} and make sure your station meets the standards of good amateur practice. Sometimes the issue may be with their equipment's susceptibility to strong signals rather than a problem with your transmissions.

#### Troubleshooting Audio Issues

Audio problems are among the most common issues you'll encounter. Whether it's distorted audio, unintelligible transmissions, or reports that you sound "off," these problems usually have straightforward causes and solutions.

> **Key Information:** If you receive a report that your audio signal through an FM repeater is distorted or unintelligible, it might be because your transmitter is slightly off frequency, you are speaking too loudly or too close to the microphone, or you are in a bad location. {{< link id="T7B10" >}}

Speaking too loudly or too close to the microphone causes *overdeviation*—your FM signal swings too far from the center frequency, resulting in distorted audio on voice peaks. Back off from the mic and speak at a normal volume. If you're in a poor location, your signal may be too weak for the repeater to process cleanly, so try moving to a spot with a better path to the repeater. And if your radio is slightly off frequency, the repeater may not decode your audio properly.

#### TV Interference

> **Key Information:** The first step to resolve cable TV interference caused by your amateur radio transmission is to be sure all TV feed line coaxial connectors are installed properly. {{< link id="T7B09" >}}

Loose connectors, poorly shielded cables, damaged lines, or missing terminations on unused outlets can all allow your signal to leak in. After checking connections, a low-pass filter on your transmitter output or high-pass filters on affected TV equipment can help with persistent issues.

Remember, patience is key when troubleshooting. Methodically check each part of your station, and don't be afraid to ask for help from more experienced hams.

Pro Tip: Keep a log of any interference issues and the steps you take to resolve them. This can be invaluable if you encounter similar problems in the future or need to demonstrate your efforts to resolve interference.
