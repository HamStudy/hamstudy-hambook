---
chapter: "6"
section: "6.2"
questions: [ "T7B03", "T7B02", "T7B05", "T7B07", "T4A11" ]
state: complete
---

### Section 6.2: Interference and Grounding

Interference is any unwanted signal or noise that gets in the way of the one you want. It can come from other equipment — theirs or yours — or from natural sources like lightning and solar activity. This section covers what you can do about the sources you have some control over, along with the grounding practices that help reduce interference in both directions.

#### What Causes Interference?

> **Key Information:** Radio frequency interference (RFI) can be caused by fundamental overload, harmonics, and spurious emissions. {{< link id="T7B03" >}}

RFI refers to unwanted radio energy interfering with your desired signals. It can come from various sources, including other radio transmitters, electronic devices, power lines, and motor-driven equipment.

#### Fundamental Overload

Fundamental overload occurs when a strong nearby signal overwhelms a receiver, even if it's not on the frequency you're trying to receive. It's like trying to hear a whisper while someone's shouting nearby.

In non-amateur receivers (like TVs, radios, or cell phones), fundamental overload can happen when a nearby amateur transmitter is so strong that it overloads the receiver's front-end circuitry. This can cause interference even if the amateur signal isn't on a frequency close to what the device is trying to receive.

> **Key Information:**
> - A broadcast AM or FM radio can receive an amateur radio transmission unintentionally because the receiver is unable to reject strong signals outside the AM or FM band. {{< link id="T7B02" >}}
> - To reduce interference by an amateur station to a non-amateur over-the-air radio receiver, block the amateur signal with a filter at the antenna input of the affected receiver. {{< link id="T7B05" >}}

To address fundamental overload:

- Reduce transmitter power if possible.
- Increase the distance between your antenna and affected devices.
- Install a filter at the input of the affected receiver to block the offending signals.
- Use a better-designed antenna that minimizes radiation in unwanted directions.

Just because a neighbor can hear your transmissions on their device doesn't necessarily mean you're transmitting illegally or on the wrong frequency. It could be a case of fundamental overload, which is often a receiver problem rather than a transmitter problem.

#### Harmonics and Spurious Emissions

Harmonics are multiples of the fundamental frequency you're transmitting on. For example, if you're transmitting on 146 MHz, harmonics could appear at 292 MHz, 438 MHz, and so on.

Spurious emissions are unwanted radio frequency outputs on frequencies other than the fundamental frequency and its harmonics.

Both harmonics and spurious emissions can cause interference to other services or devices operating on those frequencies. Causes can include:

- Overdriven amplifiers.
- Poor filtering in the transmitter.
- Faulty or poorly designed equipment.

To minimize harmonics and spurious emissions:

- Ensure your transmitter is properly tuned and not overdriven.
- Use appropriate low-pass filters on your transmitter output.
- Maintain your equipment and replace any faulty components.

Understanding harmonics and spurious emissions is crucial for responsible amateur radio operation. These unwanted signals can cause interference far outside your intended transmission frequency, potentially affecting a wide range of devices and services.

#### Don't Be "That Neighbor"

Your shiny new setup might be causing interference to your neighbors' electronic devices without you even knowing it. Signs can include distorted pictures on nearby TVs or your voice coming through someone's stereo (and trust me, they probably don't want to hear your Field Day plans).

To avoid being a pest:

- **Use the minimum power necessary** to make your contact.
- **Make sure your antenna is properly tuned** to avoid spurious emissions.
- **Consider using filters** on your transmitter output to keep your signal clean.
- **Keep your station well-grounded** (more on that in a bit).

#### Dealing with Unwanted Interference

On the receiving end, interference might sound like buzzing, clicking, or that annoying "brrrap" that drowns out the signal you're trying to hear. Common culprits include:

- Power lines.
- Electric motors (a fridge, a nearby AC unit).
- LED lights (yes, even those eco-friendly bulbs can be radio unfriendly).
- Poorly-made solar charge controllers.
- Computers and other electronic devices.

Tracking it down is detective work: turn off devices one by one until the noise goes away. Ferrite beads or chokes on power cords can often help tame the noisy ones you can't turn off.

#### Filters

> **Key Information:** Interference to a 2-meter band transceiver from a nearby commercial FM station can be reduced by installing a band-reject filter. {{< link id="T7B07" >}}

A band-reject filter blocks a specific frequency range causing interference, keeping a strong nearby signal from reaching your receiver.

#### Grounding: The Foundation of a Good Station

Grounding is crucial for both safety and reducing interference. A good ground system is like the foundation of a house — you don't see it, but everything depends on it.

##### Station Grounding Basics

For your station, you want a low-impedance path to ground. This means:

- **Use thick wire or a braided ground strap** (the thicker, the better).
- **Keep it as short and straight as possible** and avoid sharp bends.
- **Connect to a good earth ground** (ground rods, cold water pipes, etc.).

All of your equipment should be grounded to a single point. This prevents "ground loops," which happen when equipment at different ground potentials creates a loop that current can flow through — causing hum, noise, and other headaches. If your station has more than one ground rod or earth connection, remember from Section 5.5 that they need to be bonded together with heavy wire or conductive strap so lightning and stray currents can't develop a voltage difference between them.

Grounding isn't just about performance; it's also a safety issue. A good ground can help protect your equipment (and you) from static buildup and is part of your lightning protection system.

##### Grounding in Mobile Installations

Grounding a mobile transceiver has a subtlety that's easy to get wrong.

> **Key Information:** The negative power return of a mobile transceiver should be connected at the 12-volt battery chassis ground. {{< link id="T4A11" >}}

It's tempting to assume that because a vehicle's chassis is one big piece of bonded metal, any metal point on it is equally good as a ground — just attach the radio's negative lead to whatever's convenient. That might appear to work, but it's definitely not ideal. The correct connection is at the same point where the 12-volt battery's negative terminal bonds to the chassis (or directly to the battery's negative terminal itself). Most vehicles have a designated heavy-gauge bond wire running from the battery negative to a specific chassis point, and that's the spot.

Why does it matter? A transmitting radio can draw a lot of current, and every connection and every inch of metal between you and the battery negative has a tiny amount of resistance. Bolting your negative lead to a random chassis point adds extra resistance to the return path, which causes voltage drop under transmit load, alternator whine, and noise problems. The standard practice is to run both the positive and negative power leads directly to the main battery connection point with fuses on both lines — the fuse on the ground lead protects the radio in unusual situations where current could flow backward, such as an improperly done jump-start.

---

Even a well-set-up station benefits from understanding the equipment that makes it work. The next section takes a closer look at the heart of any station — the receiver, transmitter, and transceiver — and the concepts behind how they handle signals.
