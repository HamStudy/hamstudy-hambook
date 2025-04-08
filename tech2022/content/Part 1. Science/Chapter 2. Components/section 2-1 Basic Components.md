---
chapter: "2"
section: "2.1"
questions: [ "T6A01", "T6A04", "T6A05", "T6A06", "T6A07", "T6D08", "T5D13", "T5D14", "T6A03", "T6A02", "T6A08", "T6A12" ]
illustration_ideas:
- component family portrait - A simple line drawing header for the section showing the basic components with friendly faces, positioned like a family photo.
- capacitor internals, showing two conductive plates with an insulator
- inductor and capacitor energy storage comparison (magnetic field vs electric field)
- Railroad track SPDT switch diagram
- Series vs parallel circuit diagrams
---

### Section 2.1: Basic Components

When you peek inside any radio equipment, you'll find a fascinating array of electronic components working together in harmony. Let's start our exploration with passive components - the workhorses of electronic circuits that don't require an external power source to function.

#### Resistors: The Traffic Cops of Electronics

> **Key Information:** A *resistor opposes the flow of current in any circuit (including a DC circuit)*.{{< link id="T6A01" >}}

*Resistors* are small cylindrical components with colored bands that indicate their resistance value. These color codes help electronics enthusiasts determine the component's resistance. 

Common applications in amateur radio include:
1. Dividing voltages to protect delicate components
2. Limiting current to sensitive parts
3. Setting operating points in amplifier circuits

#### Capacitors and Inductors: The Energy Storage Twins

Just as a battery stores energy chemically, capacitors and inductors also store energy—but in completely different ways. These components are like siblings: they complement each other while having their own unique characteristics.

##### Capacitors: Electric Field Energy Storage

> **Key Information:**
> 1. A *capacitor stores energy in an electric field*{{< link id="T6A04" >}}
> 2. A *capacitor consists of conductive surfaces (usually metal plates) separated by an insulator*. This physical structure is fundamental to how capacitors work and is frequently tested.{{< link id="T6A05" >}}

*Capacitors* come in various shapes and sizes, from tiny ceramic discs to large cylindrical types. Their capacity to store charge is measured in farads (F), though most radio circuits use microfarads (µF) or picofarads (pF).

In amateur radio, capacitors are used to:
1. Smooth out fluctuations in power supplies (AC to DC converters)
2. Block unwanted signals or noise, including keeping RF out of audio circuits
3. Help select or tune specific frequencies in a circuit

##### Inductors: Magnetic Field Energy Storage

> **Key Information:**
> 1. *Inductors store energy in a magnetic field* {{< link id="T6A06" >}}
> 2. They are *typically constructed as a coil of wire* {{< link id="T6A07" >}}
> 3. They are *used with capacitors to make a resonant circuit* {{< link id="T6D08" >}}

While capacitors store energy in an electric field, *inductors* store energy in a magnetic field that forms around the coil when current flows through it. This complementary relationship makes them perfect partners in radio circuits.

*Inductors* play important roles in radio circuits, including:
1. Signal filtering
2. Impedance matching
3. Energy storage

Together, capacitors and inductors form the foundation of tuned circuits that select specific frequencies—the heart of radio technology.

#### Understanding Circuit Configurations

> **Key Information:** The fundamental differences between series and parallel circuits are:
> - In *series circuits*, current is the same through all components {{< link id="T5D13" >}}
> - In *parallel circuits*, voltage is the same across all components {{< link id="T5D14" >}}

These two circuit types behave very differently:
- **Series Circuits**: Components are connected end-to-end in a single path. If one component fails, the entire circuit stops functioning.
- **Parallel Circuits**: Components are connected across the same two points. If one path fails, current can still flow through the other paths.

#### Potentiometers: The Adjustable Resistors

> **Key Information:** A *potentiometer is used to control resistance* {{< link id="T6A03" >}} and is often used as a *volume control*. {{< link id="T6A02" >}}

A *potentiometer* is a variable resistor. As you turn the knob or slide the control, the resistance changes. In amateur radio, they are commonly used for:
1. Volume control
2. Adjusting transmit power levels
3. Adjusting the squelch control

#### Switches: The Circuit Controllers

> **Key Information:**
> * For your exam, you need to know about an *SPDT (Single Pole, Double Throw) switch*. This type of switch allows *a single circuit to be switched between one of two other circuits*.{{< link id="T6A08" >}}
> * You will also need to be able to *identify a SPST (Single Pole, Single Throw) switch on a circuit diagram*. {{< link id="T6A12" >}}

Think of an SPDT switch like a railroad track switch with one input track (the pole) that can connect to either of two output tracks (the throws). When you flip the switch, you're choosing which output track the input will connect to.

Switches are described using two key terms:
- **Poles**: The number of separate circuits a switch can control
- **Throws**: The number of positions each circuit can be connected to

For example, in an SPDT switch:
- Single Pole: Controls one circuit
- Double Throw: Can connect that circuit to either of two positions

In amateur radio, switches are crucial for:
1. Turning equipment on and off
2. Selecting between different antennas
3. Changing bands or modes on a transceiver
4. Activating or deactivating specific features of a radio

#### Putting it together

Understanding these passive components - resistors, capacitors, inductors, potentiometers, and switches - is crucial for grasping how electronic circuits work. They're the building blocks that allow your radio equipment to function, controlling and shaping electrical signals in precise ways. As you continue your journey in amateur radio, you'll encounter these components again and again, each time gaining a deeper appreciation for their roles in making radio communication possible.
