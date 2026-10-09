---
chapter: "1"
section: "1.6"
questions: ["E7A11", "E7A10", "E7A08", "E7A07", "E7A09", "E6C08", "E6C10", "E6C11", "E6C05", "E6C06", "E6C04", "E6C03", "E6C07"]
status: generated1
draft: true
---

### Section 1.6: Logic Gates and Levels

A logic gate does not need a perfect voltage measurement to make its decision. It treats a range of low voltages as one state and a range of high voltages as the other. Once it has interpreted the inputs, it follows a fixed rule for the output.

#### Rules for Ones and Zeros

> **Key Information:** In positive logic, a high voltage represents 1 and a low voltage represents 0. {{< link id="E7A11" >}}

A *logic gate* implements a rule for its inputs. *A truth table lists every input combination and the corresponding result*, so there is no ambiguity about words such as “or.”

> **Key Information:** A truth table lists inputs and their corresponding outputs for a digital device. {{< link id="E7A10" >}}

For two inputs, A and B, there are four combinations:

| A | B | AND | OR | NAND | NOR | Exclusive NOR |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 1 | 1 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 | 0 |
| 1 | 0 | 0 | 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 | 1 |
{.table-scroll}

AND requires both inputs to be 1. *OR accepts either one or both.* *NOT means inversion: it changes 1 to 0 and 0 to 1.* NAND is an AND result followed by NOT; NOR is an OR result followed by NOT. Read across the last row: *both inputs are 1, so AND gives 1 and NAND inverts that to 0.*

An OR rule could let either a manual switch or a temperature sensor request a cooling fan. The fan should also run when *both* request it. Everyday speech sometimes uses “or” to mean a choice of one or the other; *the OR gate includes both.*

> **Key Information:**
> - An OR gate produces 1 if any input is 1. {{< link id="E7A08" >}}
> - A NAND gate produces 0 only if all inputs are 1. {{< link id="E7A07" >}}
> - A two-input exclusive NOR gate produces 0 if one and only one input is 1. {{< link id="E7A09" >}}

Exclusive NOR, often shortened to XNOR, is a useful equality test: *its output is 1 when its two inputs agree.* For example, comparing a stored bit with a received bit *gives 0 if they differ.*

#### Symbols Show the Operation

*A small circle, or bubble, on an output means inversion.* *It changes an AND symbol to NAND or an OR symbol to NOR.* *An inverter uses a triangle with an output bubble.*

![Official Figure E6-3 shows six logic symbols. Symbol 1 is AND. Symbol 2 has an AND-shaped body and an output bubble, making it NAND. Symbol 3 is OR. Symbol 4 adds an output bubble to OR, making it NOR. Symbol 5 is a triangle with an output bubble and performs NOT. Symbol 6 has two inputs, a curved input side, and a pointed output side without a bubble.](../../../hugo/static/figures/E6-3.svg)
{.img-centered .img-xlarge .img-bw caption="Figure E6-3: An output bubble marks an inverted result."}

> **Key Information:** In Figure E6-3, symbol 2 is NAND, symbol 4 is NOR, and symbol 5 performs NOT, or inversion. {{< link id="E6C08" >}} {{< link id="E6C10" >}} {{< link id="E6C11" >}}

Use the body shape and bubble together. A bubble alone tells you to invert a result, but not which operation produced that result.

#### Logic Has Electrical Limits

A *logic family* is a group of devices built with a particular circuit technology and compatible electrical behavior. CMOS means complementary metal-oxide-semiconductor. It combines N-channel and P-channel devices so a stable logic state can draw very little internal current. Switching still requires energy to charge and discharge capacitance.

> **Key Information:** CMOS has the lowest power consumption among the listed logic families: Schottky TTL, ECL, NMOS, and CMOS. {{< link id="E6C05" >}}

*A switching threshold near the middle of the supply range leaves room for a low input to rise somewhat, or a high input to fall somewhat, without changing the interpreted state.* That room is a *noise margin*.

> **Key Information:** CMOS has high immunity to input or supply noise because its input switching threshold is about half the supply voltage. {{< link id="E6C06" >}}

That is the general model used by the exam. Exact guaranteed input levels differ among CMOS families and must come from the device specifications.

BiCMOS combines bipolar and CMOS circuitry. *Its CMOS input needs little current, while its bipolar output can drive a load with relatively low output impedance.*

> **Key Information:** BiCMOS offers the high input impedance of CMOS and the low output impedance of bipolar transistors. {{< link id="E6C04" >}}

#### Letting Go of a Shared Wire

Two outputs must not fight by driving the same wire to opposite levels. *A tri-state output can stop actively driving the line*, allowing another device to use it.

> **Key Information:** Tri-state logic has 0, 1, and high-impedance output states. {{< link id="E6C03" >}}

High impedance is the output letting go of the wire. It is effectively disconnected, not sending a third number. That gives another output a chance to drive the line. An input still needs a defined voltage when nobody is driving it; noise or leakage can otherwise choose its apparent state for you.

> **Key Information:** A pull-up or pull-down resistor connects to the positive or negative supply to establish a voltage when an input or output is an open circuit. {{< link id="E6C07" >}}

For a single positive supply, a pull-down commonly goes to ground. Imagine a pushbutton from an input to ground and a pull-up resistor from that input to the positive supply. Released, the button leaves the resistor to establish a high level. Pressed, it connects the input to ground and establishes a low level. The resistor limits current while ensuring both positions have a definite meaning.
