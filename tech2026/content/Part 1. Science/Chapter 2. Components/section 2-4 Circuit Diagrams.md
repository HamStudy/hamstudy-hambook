---
chapter: "2"
section: "2.4"
questions: [ "T6C01", "T6C12", "T6C02", "T6C08", "T6C06", "T6C09", "T6C10", "T6D10", "T6C03", "T6C07", "T6C05", "T6C04", "T6C11" ]
status: complete
---

### Section 2.4: Circuit Diagrams: Putting It All Together

By now, you've gotten to know a lot of different components — resistors, capacitors, transistors, and more. You've seen their symbols sprinkled throughout earlier sections, and hopefully, they're starting to feel familiar. Now it's time to gather everything in one place and focus on how these symbols are used in circuit diagrams.

> **Key Information:** A schematic is an electrical diagram that uses standard component symbols. {{< link id="T6C01" >}} The most important thing to remember is that schematics show component connections accurately. {{< link id="T6C12" >}}

Think of a schematic as a map for electronics. Instead of using pictures of actual parts, it uses standard symbols to show how components connect. Once you know how to read them, circuit diagrams are your key to understanding any electronic device, no matter how complicated.

#### Essential Components and Their Symbols

Let's review the key components you'll encounter in circuit diagrams. Pay special attention to how they control or affect current flow in a circuit.

##### Basic Components

These are the passive components we covered in Section 2.1 — the ones that don't need their own power source to do their job.

| **Component** | **Description** | **Symbol**  |
|---------------|------------------|---|
| **Resistor** | That familiar zig-zag line represents a component that controls current flow. You'll see these everywhere in circuits. {{< link id="T6C02" >}} | ![Resistor schematic diagram](../../../images/s2-1-resistor.svg) |
| **Variable Resistor (Potentiometer)** | Like a regular resistor, but with an arrow showing you can adjust its value. {{< link id="T6C08" >}} | ![Potentiometer schematic symbol](../../../images/schem-potentiometer.svg) |
| **Capacitor** | Two parallel lines that store electrical energy. You'll see both polarized (with one straight line and one curved line) and non-polarized versions — both are still capacitors. {{< link id="T6C06" >}} | ![Capacitor schematic diagram](../../../images/s2-1-capacitor.svg) |
| **Inductor** | A coil of wire which stores energy in a magnetic field | ![Inductor schematic Symbol](../../../images/s2-1-inductor.svg) |
| **Transformer** | Two coils side by side show energy transfer between circuits. {{< link id="T6C09" >}} | ![Transformer schematic Symbol](../../../images/schem-transformer.svg) |
| **Variable Inductor** | A coil with an arrow showing you can adjust its value. {{< link id="T6C10" >}} | ![Variable Inductor schematic symbol](../../../images/schem-varinductor.svg) |
{.component-table}

##### Active Components

These are the semiconductors from Section 2.2 — the ones that control or amplify current in ways passive components can't.

| **Component** | **Description** | **Symbol** |
|---------------|-----------------|------------|
| **Transistor** | Control current flow and provide amplification. On a BJT like the one shown, the arrow on the emitter points in the direction of conventional current flow. {{< link id="T6D10" >}} | ![NPN Transistor Schematic Symbol](../../../images/schem-npn.svg) {{< link id="T6C03" >}} |
| **Diode** | As seen in Section 2.2, the arrow points toward the cathode. | ![Diode diagram with anode / cathode labeled](../../../images/s2-2-diode.svg) |
| **LED (Light Emitting Diode)** | Like a regular diode but with arrows showing it emits light. | ![LED schematic diagram with anode / cathode labeled](../../../images/s2-2-led.svg) {{< link id="T6C07" >}} |
{.component-table}

##### Power and Indicators

These components represent energy sources, visual signals, and the connection point where a circuit meets the outside world.

| **Component** | **Description** | **Symbol** |
|---------------|-----------------|------------|
| **Battery** | Long and short lines show positive and negative terminals. | ![Battery Schematic Symbol](../../../images/schem-battery.svg) {{< link id="T6C05" >}} |
| **Lamp** | A visual indicator. | ![Lamp Schematic Symbol](../../../images/schem-lamp.svg) {{< link id="T6C04" >}} |
| **Antenna** | A line with smaller lines at an angle represents an antenna, where signals enter or leave the circuit. {{< link id="T6C11" >}} | ![Antenna Schematic Symbol](../../../images/schem-antenna.svg) |
{.component-table}

#### Reading Circuit Diagrams

Schematics might look complicated at first, but they're just maps showing how components connect. A few things to look for when you're reading one:

- Start at the power source (usually a battery) and follow the connections between components.
- Components are usually labeled (R1, C1, etc.) with their values shown nearby.
- Where lines meet, connection points are shown by dots — lines that cross without a dot aren't connected to each other.

As a Technician Class operator you won't need to know this stuff in depth, but there are a few questions you might see on the exam which require you to identify a component by its symbol — make sure you look them over carefully so you know what to look for!
