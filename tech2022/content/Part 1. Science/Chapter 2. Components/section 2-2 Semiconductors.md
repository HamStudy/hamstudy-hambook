---
slug: section2.2
questions: [ "T6B02", "T6B11", "T6B06", "T6B08", "T6D07", "T6D01", "T6D09", "T6B03", "T6B04", "T6B09", "T6B10", "T6B01", "T6B05", "T6B07", "T6B12" ]
gistMap:
   "schem-bridgerectifier.svg": "https://gist.github.com/taxilian/a7d1cca34d08baa8f98a3d6d4b408e55/raw/65fa82634729e8d9f46857591488b125cff4c767/schem-bridgerectifier.svg"
---

### Section 2.2: Semiconductors

Semiconductors are the building blocks of modern electronics. They’re special materials that can act as both a conductor (letting electricity flow) and an insulator (blocking electricity), depending on how they’re used. This unique property allows us to create all sorts of devices that control electricity in useful ways.

#### Diodes: One-Way Streets

A diode is like a one-way street for electricity—it only allows current to flow in one direction. Think of it as a one-way valve in plumbing: water (or in this case, electrical current) can flow through, but only one way. If you try to push current the other way, the diode blocks it.

Diodes have two terminals:

* Anode (A): The positive side where current enters.
* Cathode (K or C): The negative side where current exits.

![Diode schematic diagram with anode / cathode labeled](../../../images/s2-2-diode.svg)

An easy way to remember this is: The Anode and Cathode are **A positive** and **C negative**! (***AC***)

Diodes are used in many circuits, especially in converting AC (alternating current) to DC (direct current). When you plug your radio into the wall, the power supply uses diodes to turn the AC from the outlet into the DC that your radio needs.

- **Forward Voltage Drop:** When a diode is conducting (letting current flow), there’s a small voltage drop across it. This is known as the forward voltage drop. The amount of this drop depends on the type of diode:
  - **Silicon Diodes** typically have a forward voltage drop of about 0.7 volts.
  - **Schottky Diodes**, which are often used in high-speed switching, have a lower forward voltage drop, usually around 0.2 to 0.3 volts.
  - **Zener Diodes** are designed to allow current to flow in the reverse direction when a specific reverse voltage (called the Zener voltage) is reached. They are often used for voltage regulation in circuits.
  
- **Key Points:**
  - **Current Flow:** Diodes allow current to flow in only one direction.
  - **Markings:** The cathode (negative side) is often marked with a stripe.
  - **Forward Voltage Drop:** The forward voltage drop is lower in some diode types (like Schottky diodes) than in others (like silicon diodes).


#### Light-Emitting Diodes (LEDs): Let There Be Light

An LED is a special kind of diode that emits light when current flows through it. LEDs are used as visual indicators in almost all electronic devices, from the power light on your computer to the blinking lights on your radio. When current passes through the LED in the forward direction, it lights up, making it easy to see whether your circuit is working.

![LED schematic diagram with anode / cathode labeled](../../../images/s2-2-led.svg)

- **Key Points:**
  - **Visual Indicator:** LEDs emit light when current flows through them in the correct direction.


#### Rectifiers: Turning AC into DC

A rectifier is a specific type of circuit that uses diodes to convert AC (which flows back and forth) into DC (which flows in only one direction). This process is crucial in power supplies, where the alternating current from the wall outlet needs to be converted into the direct current that most electronic devices require.

<img src="../../../images/schem-bridgerectifier.svg" alt="Full Wave Bridge Rectifier Schematic Symbol" style="float: right; width: 100px; height: auto;">
In a basic rectifier circuit, diodes are arranged so that they only allow current to pass when it’s flowing in the desired direction, effectively “chopping up” the AC into DC. In a "full wave bridge rectifier" two paths are created through the diodes so that whichever direction current flows in it will always flow out the same direction.

The output of a full wave bridge rectifier is pulsating DC, which goes from 0 to +V back to 0 and repeats, rather than alternating between positive and negative like AC. In a power supply, capacitors may then be used to smooth out the signal.

- **Key Points:**
  - **Function:** Rectifiers convert AC into varying DC using diodes.
  - **Application:** Rectifiers are commonly used in power supplies for radios and other electronics.

#### Understanding a Simple Power Supply

To create a basic power supply, the AC from the wall needs to be transformed and rectified:

1. **AC Signal from the Wall (Figure 1):** The 120V AC signal is what you get from a typical household outlet. It oscillates between positive and negative values, which isn't suitable for most electronics.

![Figure 1: Original 120V AC Signal at 60 Hz](../../../images/rectifier-fig1.svg)

2. **Step-Down Transformer (Figure 2):** A transformer is used to reduce the AC voltage to a safer level. In our example, a 10:1 transformer reduces 120V AC to 12V AC, while maintaining the oscillating nature of the signal.

![Figure 2: AC Signal After 10:1 Transformer at 60 Hz](../../../images/rectifier-fig2.svg)

3. **Rectification (Figure 3):** A full-wave bridge rectifier uses four diodes to flip the negative parts of the AC signal, creating a pulsating DC. Although this is still not perfectly smooth, it's a step closer to the DC needed by your devices.

![Figure 3: Signal After Full-Wave Bridge Rectifier at 60 Hz](../../../images/rectifier-fig3.svg)

Together, these components form the backbone of many power supplies, converting high-voltage AC into usable low-voltage DC.

#### Transistors: The Workhorses of Electronics

Transistors are like tiny electronic switches or amplifiers. They can turn a small signal into a larger one, making them essential in all sorts of circuits, from radios to computers. They are generally made from three regions of semiconductor material.

There are two main types of transistors: Bipolar Junction Transistors (BJTs) and Field-Effect Transistors (FETs).

- **Bipolar Junction Transistors (BJTs):** These have three parts called the emitter, base, and collector. Imagine the base as the control gate. They use a small amount of current at the base to control a larger current flow between the emitter and collector, making them excellent for current amplification. This ability to amplify signals is called "gain" - it's the ratio of the output signal to the input signal.

  ![BJT schematic diagram with labels](../../../images/s2-2-bjt.svg)
  
- **Field-Effect Transistors (FETs):** Instead of using a small current to control the transistor, FETs use voltage applied to a part called the gate. They also have two other parts called the drain and source. When you apply voltage to the gate, it creates an electric field that controls the current flow between the drain and source. FETs are often used as voltage-controlled switches and are very common in low-power and high-frequency applications.
 
  ![FET schematic diagram with labels](../../../images/s2-2-fet.svg)

**Let's Review!:**
  BJTs have an emitter, base, and collector and are typically used when current gain or amplification is needed. FETs have a gate, drain, and source and are often used as voltage-controlled switches or in applications requiring high input impedance.

> "Gain" in transistors refers to their ability to produce an output signal that's larger than the input signal. For BJTs, this usually means current gain (a small input current controls a larger output current), while for FETs, it often relates to how effectively the gate voltage controls the output current.

Transistor tale: The first transistor, invented at Bell Labs in 1947, was about the size of a paperclip and was jokingly called a "crystal triode." Today, a single microprocessor chip can contain billions of transistors, each thousands of times smaller than a human hair!

#### Integrated Circuits: Miniature Electronic Worlds

An Integrated Circuit (IC) is like a tiny city of electronic components all packed into a single chip. Inside an IC, you might find transistors, diodes, resistors, and capacitors all working together to perform a specific function. ICs are used everywhere in modern electronics because they allow complex circuits to fit into very small spaces.

- **Key Points:**
  - **Combination of Components:** An IC combines multiple components into one small package.
  - **Function:** ICs can perform complex tasks like processing signals or controlling devices.

By understanding these basic semiconductor devices—diodes, LEDs, transistors, and ICs—you’ll have a solid foundation for understanding how modern electronics work. Whether you’re building a simple circuit or troubleshooting a problem with your radio, these components will be essential tools in your ham radio toolkit.
