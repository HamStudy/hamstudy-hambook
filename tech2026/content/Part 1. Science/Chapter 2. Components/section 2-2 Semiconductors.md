---
chapter: "2"
section: "2.2"
questions: [ "T6B02", "T6B06", "T6B01", "T6B09", "T6D01", "T6B07", "T6D07", "T6B03", "T6B04", "T6B08", "T6B12", "T6B05", "T6B10", "T6B11", "T6D09" ]
status: complete
---

### Section 2.2: Semiconductors

Semiconductors are materials that can act as either a conductor or an insulator depending on how they're used. That in-between behavior is what makes modern electronics possible, and it shows up in a handful of components you'll see constantly: diodes, LEDs, transistors, and integrated circuits.

#### Diodes: One-Way Electronic Streets

> **Key Information:** 
> - A diode allows current to flow in only one direction. {{< link id="T6B02" >}}
> - The cathode lead is often marked with a stripe. {{< link id="T6B06" >}}
> - The forward voltage drop is lower in some diode types than others. {{< link id="T6B01" >}}

Diodes are likely the simplest type of semiconductor and are generally thought of as one-way gates for current, though that's not entirely accurate since there are types of diodes which can be intentionally used backwards (called *reverse-biasing*).

![Diode schematic diagram with anode / cathode labeled](../../../images/s2-2-diode.svg)
{.img-small .float-right .img-bw}

A diode has two electrodes — the *anode* and the *cathode* {{< link id="T6B09" >}} — and current can only flow in one direction: into the anode and out through the cathode. You can think of the anode as the "positive" side and the cathode as the "negative" side when the diode is conducting, and that intuition will generally serve you well, though technically the labels describe the direction of current flow rather than the voltage itself.

Even when current is flowing the right way, a diode doesn't conduct perfectly. It takes a small amount of voltage just to get current moving; this is called the forward voltage drop (you might remember the concept of voltage drop from Section 1.2). That lost voltage turns into heat as electrical energy becomes thermal energy. Different types of diodes drop different amounts — for example, Schottky diodes typically have a lower forward voltage drop than regular silicon diodes.

One common use of diodes is in a *rectifier*, which changes alternating current (AC) into a varying direct current (DC) signal. {{< link id="T6D01" >}} The "varying" part is important: a simple rectifier's output is positive-only but pulsating rather than steady. Smoothing those pulses into clean DC is one of the jobs capacitors do in a power supply, which is where the two components often work together.

#### Light-Emitting Diodes (LEDs): Diodes That Shine

> **Key Information:** An LED produces light when forward current flows through it. {{< link id="T6B07" >}}

![LED schematic diagram with anode / cathode labeled](../../../images/s2-2-led.svg)
{.img-small .float-right .img-bw}

LEDs are special diodes that light up when current flows through them. They're commonly used as indicator lights on radio equipment — that power light on your transceiver is an LED! {{< link id="T6D07" >}}

#### Transistors: The Heart of Modern Electronics

> **Key Information:** 
> - Transistors can be used as electronic switches. {{< link id="T6B03" >}}
> - A transistor contains three regions of semiconductor material. {{< link id="T6B04" >}}
> - FET stands for Field Effect Transistor. {{< link id="T6B08" >}}

There are two main types of transistors, and you'll need to know the names of the three electrodes on each:

1. **Bipolar Junction Transistor (BJT)**
   - Three parts: *Emitter, Base, and Collector* {{< link id="T6B12" >}}
   - Often used for amplifying signals

2. **Field-Effect Transistor (FET)**
   - Three parts: *Gate, Drain, and Source* {{< link id="T6B05" >}}
   - Often used as voltage-controlled switches

In either type, the idea is the same: a small signal on one of the three electrodes controls a much larger current between the other two. That's what lets a transistor amplify — turning a small input signal into a big output — or switch, using a small control signal to turn a big current on or off.

##### Transistors as Amplifiers

The ability to amplify signals is what makes transistors so important in radio equipment. Before transistors, vacuum tubes performed this role, and you'll still find tube amplifiers in use today — particularly in high-power HF stations. But most modern amateur radio equipment relies on transistors for amplification, from the tiny preamp that boosts weak signals in your receiver to the power amplifier in your handheld or mobile transceiver.

> **Key Information:** 
> - Transistors can provide power gain — the ability to amplify signals. {{< link id="T6B10" >}}
> - Gain in amplifiers can refer to the ratio of output to input voltage, current, or power — all are valid ways to measure how much a signal is amplified. {{< link id="T6B11" >}}

#### Integrated Circuits (ICs): Many Components in One

> **Key Information:** An integrated circuit combines several semiconductors and other components into one package. {{< link id="T6D09" >}}

An IC is a single chip containing many components — transistors, diodes, resistors, and so on — all fabricated together and working as a unit. You may also hear them called *microchips* or just chips. This is the technology that makes modern radio equipment possible, packing circuits that would have filled a room fifty years ago into something smaller than a fingernail.

---

Semiconductors get us most of the way to a working radio, but there are a few more components that show up regularly enough to deserve their own mention.
