---
chapter: "1"
section: "1.6"
questions: ["E7A11", "E7A10", "E7A08", "E7A07", "E7A09", "E6C08", "E6C10", "E6C11", "E6C05", "E6C06", "E6C04", "E6C03", "E6C07"]
status: generated1
draft: true
---

### Section 1.6: Logic Gates and Levels

An AND gate can require both a transmit request and permission from a protection circuit. A cooling fan may need a different rule: run when either a switch or a temperature sensor requests it. The choice of gate depends on how those conditions should combine.

#### Rules for Ones and Zeros

We'll use positive logic for these examples.

> **Key Information:** In positive logic, a high voltage represents 1 and a low voltage represents 0. {{< link id="E7A11" >}}

Let 1 mean “run the fan” and 0 mean “no request.” *An OR gate produces 1 when either input is 1, including when both are 1.* That fits our fan: either request should start it, and receiving both requests should keep it running. Everyday speech sometimes uses “or” to mean one choice or the other; *the OR gate includes both.*

*NOT reverses a result, changing 1 to 0 and 0 to 1.* NAND applies NOT to the AND result; NOR applies it to the OR result. *With both inputs at 1, AND gives 1 and NAND inverts that to 0.*

We can also compare two bits, such as a stored bit and a received bit. *An exclusive NOR gate, or XNOR, produces 1 when they agree and 0 when they differ.* *A truth table lists every input combination and the corresponding result* so we can check exactly what a circuit will do.

> **Key Information:** A truth table lists inputs and their corresponding outputs for a digital device. {{< link id="E7A10" >}}

Two inputs, A and B, have four possible combinations. Read across a row to compare the gates:

| A | B | AND | OR | NAND | NOR | Exclusive NOR |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 1 | 1 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 | 0 |
| 1 | 0 | 0 | 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 | 1 |
{.table-scroll}

> **Key Information:**
> - An OR gate produces 1 if any input is 1. {{< link id="E7A08" >}}
> - A NAND gate produces 0 only if all inputs are 1. {{< link id="E7A07" >}}
> - A two-input exclusive NOR gate produces 0 if one and only one input is 1. {{< link id="E7A09" >}}

#### Symbols Show the Operation

On a schematic, gate symbols show how those rules connect. *A small circle, or bubble, on an output means inversion: it changes an AND symbol to NAND or an OR symbol to NOR.* *An inverter uses a triangle with an output bubble.*

![Official Figure E6-3 shows six logic symbols. Symbol 1 is AND. Symbol 2 has an AND-shaped body and an output bubble, making it NAND. Symbol 3 is OR. Symbol 4 adds an output bubble to OR, making it NOR. Symbol 5 is a triangle with an output bubble and performs NOT. Symbol 6 has two inputs, a curved input side, and a pointed output side without a bubble.](../../../hugo/static/figures/E6-3.svg)
{.img-centered .img-xlarge .img-bw caption="Figure E6-3: An output bubble marks an inverted result."}

> **Key Information:** In Figure E6-3, symbol 2 is NAND, symbol 4 is NOR, and symbol 5 performs NOT, or inversion. {{< link id="E6C08" >}} {{< link id="E6C10" >}} {{< link id="E6C11" >}}

Use the body shape and bubble together. The body gives the rule; the bubble tells you to reverse its result.

#### Logic Has Electrical Limits

CMOS's low power use makes it attractive for a battery-powered controller. Its complementary N-channel and P-channel devices draw very little internal current in a stable state; switching still takes energy to charge and discharge capacitance. A logic family's power use is only part of the choice—we also need to consider noise tolerance and the load it can drive.

> **Key Information:** CMOS has the lowest power consumption among the listed logic families: Schottky TTL, ECL, NMOS, and CMOS. {{< link id="E6C05" >}}

Noise on an input or power supply should not turn “off” into “on.” *A switching threshold near half the supply voltage leaves room for a low input to rise somewhat, or a high input to fall somewhat, without changing the interpreted state.* That tolerance is a *noise margin*.

> **Key Information:** CMOS has high immunity to input or supply noise because its input switching threshold is about half the supply voltage. {{< link id="E6C06" >}}

This is the exam's general model. Check the device specifications for its guaranteed input levels; they differ among CMOS families.

Sometimes a gate needs to accept a signal without drawing much input current, yet drive a load at its output. BiCMOS combines bipolar and CMOS circuitry to do both. *Its CMOS input has high impedance, while its bipolar output provides low output impedance to drive the load.*

> **Key Information:** BiCMOS offers the high input impedance of CMOS and the low output impedance of bipolar transistors. {{< link id="E6C04" >}}

#### Letting Go of a Shared Wire

Devices sharing a signal wire must take turns driving it. Otherwise, one output could try to hold the wire high while another holds it low. *A control signal can put a tri-state output into its high-impedance state, allowing another device to drive the line.*

> **Key Information:** Tri-state logic has 0, 1, and high-impedance output states. {{< link id="E6C03" >}}

In the high-impedance state, the output effectively disconnects. It lets go of the wire rather than sending a third number. When nobody drives the line, however, an input still needs a defined voltage. Noise or leakage could otherwise determine its apparent state.

> **Key Information:** A pull-up or pull-down resistor connects to the positive or negative supply to establish a voltage when an input or output is an open circuit. {{< link id="E6C07" >}}

For example, connect a pushbutton between an input and ground, with a pull-up resistor from the input to the positive supply. Released, the button leaves the resistor to establish a high level. Pressed, it connects the input to ground and establishes a low level. The resistor limits current to prevent a short circuit when you press the button. A pull-down serves the opposite purpose; with a single positive supply, it commonly connects to ground.
