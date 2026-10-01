---
chapter: "2"
section: "2.4"
questions: ["G6A07", "G7B03", "G6B02", "G6B03", "G6B06", "G7B06", "G7B05"]
status: draft1
---

### Section 2.4: Digital Circuit Fundamentals

The switching power supplies in the previous section use transistors to turn current on and off. Digital circuits also use switching, but their purpose is to represent and process information. Inside your radio, these circuits handle tasks such as controlling settings and processing signals. To understand how they work, we'll begin with two states: low and high.

#### The Digital Difference: Binary States

Unlike analog circuits that work with continuously varying voltages and currents, digital logic represents information with two states: low or high (usually represented as 0 or 1). Each state allows a range of voltages; small noise changes within that range need not change the value. This binary approach creates circuits that are:
- More resistant to noise and interference
- Capable of precise, repeatable operations
- Able to perform complex logical functions

These reliable states let digital circuits carry out calculations on signal samples. That is the basis of digital signal processing, which we will explore in the next chapter.

#### Transistors as Switches

Earlier in this chapter, we saw how a small base current controls a larger current in a bipolar transistor. Digital switching uses two operating conditions:

> **Key Information:** A bipolar transistor used as a switch operates at cutoff and saturation. {{< link id="G6A07" >}}

In **cutoff**, very little collector current flows, like an open (off position) switch. In **saturation**, the collector-to-emitter voltage is small, like a closed (on position) switch. The load still limits the current. For example, a transistor can turn an indicator off in cutoff and on in saturation.

#### Logic Gates: Digital Decision Makers

The fundamental building blocks of digital circuits are logic gates—components that perform basic decision-making functions based on their inputs:

> **Key Information:** A two-input AND gate outputs a high signal (1) only when both inputs are high. {{< link id="G7B03" >}}

![The AND gate symbol has a flat left edge and a curved right edge, like a capital D. Two input lines, A and B, enter on the left; one output line leaves on the right. The output is high only when both inputs are high. If either input, or both inputs, are low, the output is low.](../../../images/s2-4-and-gate.svg)
{.img-centered}

 A | B | Output
:-:|:-:|:------:
 0 | 0 | 0
 0 | 1 | 0
 1 | 0 | 0
 1 | 1 | 1
{.w-50 caption="Table 1: AND gate truth table"}

Think of an AND gate as similar to a series circuit with two switches—both must be closed for current to flow. In digital terms:
- If Input A = 1 AND Input B = 1, then Output = 1
- For any other combination, Output = 0

There are many other types of gates which provide similar but different functions which make up the building blocks of digital logic. These include OR, NOT, NOR, NAND, and XOR gates, just to name a few of the basics; if you are interested in digital circuits they are worth reading up on, but since you only need the basics for the license exam we'll leave it here for the purpose of this book.

#### Integrated Circuits: Technology in a Package

Most digital functions in modern equipment are implemented using integrated circuits (ICs)—chips that combine many circuit elements in one package, from small logic blocks to processors with millions of transistors.

##### MMICs: RF Processing in a Tiny Package

> **Key Information:** MMIC stands for Monolithic Microwave Integrated Circuit. {{< link id="G6B02" >}}

“Monolithic” means the circuit is formed together on one semiconductor chip. An MMIC can handle analog RF signals; being an IC does not make it digital. These specialized ICs are designed for radio frequency and microwave applications, integrating various RF functions into a single chip:
- Amplifiers
- Mixers
- Oscillators
- Filters

MMICs have revolutionized RF design by enabling complex RF processing in extremely small packages. They're a key reason why modern handhelds and mobile radios can offer sophisticated features in compact sizes. As you explore microwave bands and satellite communications as your interests grow, you'll benefit from equipment using these efficient components.

##### CMOS vs. TTL: Digital Logic Families

Digital ICs come in different "families" with distinct characteristics:

> **Key Information:** An advantage of CMOS integrated circuits compared to TTL integrated circuits is low power consumption. {{< link id="G6B03" >}}

**CMOS (Complementary Metal-Oxide-Semiconductor)** varies by family. Some conventional CMOS families offer:
- Very low power consumption (especially when not switching)
- A range of operating voltages, specified for the particular family
- High noise immunity
- Recognizes 70% of supply voltage or higher as logical "1" 
- Recognizes 30% of supply voltage or lower as logical "0"

**Traditional 5 V TTL (Transistor-Transistor Logic)** provides:
- Faster switching than some early CMOS families
- Output-current limits that depend on the part
- More standardized voltage levels (fixed 5V supply)
- Recognizes 2.0V to 5.0V as logical "1"
- Recognizes 0V to 0.8V as logical "0"

Check a device’s actual supply and input ratings before connecting logic families. CMOS switching still consumes energy, so faster and more complex chips can use substantial power. Modern amateur radio equipment widely uses CMOS technology due to its energy efficiency—particularly important for portable and battery-powered devices. This technology choice directly impacts your radio's battery life and heat generation.

#### Operational Amplifiers: The Analog-Digital Bridge

While we're focusing on digital circuits, it's important to understand how analog and digital worlds interface:

> **Key Information:** An integrated circuit operational amplifier is an analog device. {{< link id="G6B06" >}}

![An operational amplifier is drawn as a triangle pointing to the right. Two inputs enter its flat left side: the upper input is marked minus and the lower input is marked plus. The output leaves the triangle’s right-hand point. The minus sign identifies the inverting input, and the plus sign identifies the non-inverting input; these are signal inputs, not the amplifier’s power-supply connections.](../../../images/s2-4-op-amp.svg)
{.float-right .img-small caption="Figure 1: Operational Amplifier symbol"}

Operational amplifiers (op-amps) are versatile analog ICs that:
- Amplify and condition signals
- Create active filters
- Buffer between circuit stages

Op-amps often form the critical interface between analog signals (from antennas or microphones) and the digital processing systems within modern transceivers. They can prepare signals for an analog-to-digital converter and filter or buffer the output of a digital-to-analog converter. The converters perform the conversion; the op-amp remains an analog device.

Passing the exam requires that you know that op-amps are analog devices, but the practical applications of op-amps in digital systems are beyond the scope of this book and the exam.

#### Digital Storage and Processing Elements

Digital circuits include specialized components for managing digital information:

##### Shift Registers: Digital Data Movement

> **Key Information:** A shift register is a clocked array of circuits that passes data in steps along the array. {{< link id="G7B06" >}}

A **bit** is one binary digit, 0 or 1. A **clock** provides the timing steps.

![Five rows show four register stages connected in a chain, with data moving from left to right. All four stages start at zero. A one enters on the first clock step, followed by zeros on later steps. On the next three clock steps, the one moves to the second, third, and fourth stages. All other stages hold zero. Each clock step moves the stored bit one stage toward the output at the right.](../../../images/s2-4-shift-register-static.svg)
{.img-centered caption="Figure 2: A 1 followed by zeros moves one stage per clock step."}

A shift register functions like a bucket brigade for digital data—each pulse of a clock signal moves the data one position down the line. This sequential movement is important for:
- Converting between serial and parallel data forms
- Creating precise timing delays
- Generating specific bit patterns

Shift registers are widely used in the digital signal processing capabilities of modern transceivers and in the encoding/decoding circuits for digital communications modes.

##### Binary Counters: Tracking Digital States

> **Key Information:** A 3-bit binary counter has 8 states. {{< link id="G7B05" >}}

A binary counter is a digital circuit that advances through a sequence of binary states with each clock pulse. For a 3-bit counter:

| Decimal | Binary |
|:-------:|:------:|
| 0       | 000    |
| 1       | 001    |
| 2       | 010    |
| 3       | 011    |
| 4       | 100    |
| 5       | 101    |
| 6       | 110    |
| 7       | 111    |
{.w-50}

That's $2^3 = 8$ different states: two possibilities for each of three bits. The largest value is seven because counting starts at zero.

Binary counters are fundamental to:
- Frequency synthesis in modern transceivers
- Digital frequency displays
- Timing and control functions

The number of bits in a counter determines how many states it can represent: an n-bit counter can represent $2^n$ different states. This exponential relationship is why adding just a few bits dramatically increases a digital system's capabilities.

#### The Digital Foundation for Advanced Radio Features

While we've focused on the fundamental components, these digital building blocks combine to create the sophisticated capabilities in modern equipment:

- **Digital Signal Processing (DSP)** uses these elements at high speeds to filter signals and reduce noise
- **Software Defined Radio (SDR)** leverages digital processing to implement radio functions in software running on processing hardware, rather than fixed analog circuits
- **Digital Mode Operation** relies on these components to encode and decode signals

When you use features like noise reduction, notch filters, or digital mode interfaces, you're benefiting from these digital fundamentals working together.

#### Looking Ahead

The digital concepts we've explored form the foundation for many advanced amateur radio techniques. In later sections, we'll see how these digital capabilities translate into practical applications for General class operation, including:
- Operating digital modes on HF bands
- Understanding and using DSP features in modern transceivers
- Setting up interfaces between computers and radios

Analog and digital circuits both need a way to describe their connections and check their behavior. A schematic shows how the components fit together; a meter or waveform display lets you compare the working circuit with that description. Those are the two views we will connect in the next section.
