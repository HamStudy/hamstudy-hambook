---
chapter: "2"
section: "2.3"
questions: [ "T6D06", "T6D02", "T6D03" ]
status: complete
---

### Section 2.3: Other Components

Alongside resistors, capacitors, and semiconductors, a few other components show up often enough in radio equipment to be worth knowing about.

#### Transformers: The Voltage Jugglers

> **Key Information:** A transformer can be used to change 120V AC power to a higher or lower AC voltage for other uses. {{< link id="T6D06" >}}

![Transformer schematic diagram](../../../images/s2-3-transformer.svg)
{.img-small .float-right .img-bw}

A transformer is two or more coils of wire wound around a common core, usually made of iron. When AC flows through one coil, the changing magnetic field induces a voltage in the other coil. The ratio of turns between the two coils determines whether the output voltage is higher or lower than the input — that's why a transformer can "step up" or "step down" voltage.

Here's the key intuition: a transformer trades voltage for current while keeping the total power roughly the same. It's like a gear ratio — a small gear driving a larger gear turns the larger one slowly but with more force, and vice versa. A transformer with more turns on the output side gives you higher voltage but less current, and one with fewer turns on the output gives you lower voltage but more current. The total power stays about the same either way.

Transformers show up in amateur radio in a few places:

1. **Power supplies** — stepping wall voltage (120V AC) down to the lower voltages your radio needs.
2. **Impedance matching** — matching audio stages to one another, or matching a transmission line to an antenna.

Fun fact: the largest transformers in the world are the size of a four-story building, weigh over 900 tons, and handle enough power for several million homes. The transformers in your ham shack are, thankfully, much smaller.

#### Relays: The Electromagnetic Switches

> **Key Information:** A relay is an electrically-controlled switch. {{< link id="T6D02" >}}

![Relay schematic diagram](../../../images/s2-3-relay.svg)
{.img-small .float-right .img-bw}

A relay is just an electromagnet controlling a switch. When current flows through the electromagnet's coil, the magnetic field pulls a pair of contacts open or closed, opening or closing the circuit those contacts are in. Because the electromagnet is in one circuit and the contacts are in another, you can use a small control signal to turn a much bigger load on or off. You can often even hear the *click* when it switches.

In amateur radio, relays show up in several applications:

1. **Antenna switching** — quickly switching between different antennas, or between transmit and receive.
2. **Amplifier control** — managing the sequencing required when using high-power amplifiers.
3. **Automatic antenna tuners** — many autotuners use a bank of relays to switch different combinations of inductors and capacitors.

Relay revelation: the first practical relay was invented by Joseph Henry in 1835. It paved the way for long-distance telegraphy — the direct predecessor to amateur radio.

#### Types of Wire

> **Key Information:** Shielded wire is used to prevent coupling of unwanted signals to or from the wire. {{< link id="T6D03" >}}

You'll encounter several types of wire when setting up a shack or building equipment. A few worth knowing:

- **Standard wire** — your basic conductor, usually copper, in various gauges (thicknesses). Thicker wire can safely carry more current — which is the voltage drop concept from Chapter 1 showing up again.
- **Stranded wire** — multiple thin strands twisted together. More flexible than solid wire, so it holds up better where the wire needs to bend repeatedly.
- **Shielded wire** — has one or more insulated inner conductors wrapped in a conductive layer (the shield, usually braided wire or foil) and then an outer insulating jacket. The shield keeps external electromagnetic interference from getting into the signal, and also keeps the wire's own signals from leaking out and interfering with other equipment. This is why audio cables, microphone cables, and coaxial feedlines all use shielded construction.
- **Magnet wire** — thin wire with a very thin insulating coating, used for winding coils and inductors.

Choosing the right type of wire for each job matters both for performance and for safety.

---

Now that we've covered the major components, the next question is how they're shown when engineers draw a circuit.
