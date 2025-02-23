---
slug: section1.3
questions: [ "T5D07", "T5D12", "T5D10", "T5D09", "T5D08", "T5D02", "T5D06", "T5D01", "T5D03", "T5D11", "T5C08", "T5C09", "T5C10", "T5C11", "T5D04", "T5D05" ]
---

### Section 1.3: Electrical Laws (and Math)

Okay, let's get into some of the basic math and electrical laws you'll use all the time in amateur radio. Don't worry—this isn’t rocket science (though I imagine rocket scientists would use this as well!). We’re talking about Ohm’s Law and the Power Law, which are like the peanut butter and jelly of electronics. They go together perfectly and once you get the hang of them, you'll see they're not that hard to digest.

#### Ohm's Law

<img src="../../../images/illus/ohms_triangle.svg" alt="cartoon showing a conductor on the left and an insulator on the right, angry with each other" style="float: right; width: 250px; margin: 3px;">

First up is Ohm’s Law. This is the bread and butter of everything electrical. It’s all about how voltage, current, and resistance are related in a circuit. The law itself is simple:

$$E = I \times R$$

> This is sometimes written with $V$ (voltage) instead of $E$ (electro-motive force or EMF). Electromotive force is another term for voltage and is measured in Volts. Many prefer to use $E$ because $V$ is used for "Velocity" by many engineers.

Where:
- **$E$** is the voltage (electromotive force) in volts (V) 
- **$I$** is the current in amperes (A)
- **$R$** is the resistance in ohms (Ω)

<div style="clear:both;"></div>

In plain English, Ohm's Law is saying, "The voltage across a component is equal to the current flowing through it times its resistance." It’s like figuring out how much push (voltage) is needed to get the right amount of flow (current) through a certain resistance.

Applying a little basic arithmetic we can modify this to give us any of the three units provided we have the other two. It's the same formula, just mutated around! For your reference, though, here are the other two ways to write it:

$$I \text{ (Current)} = \frac{E}{R}$$
$$R \text{ (Resistance)} = \frac{E}{I}$$

**Example 1**: 
Let’s say you have a resistor with a resistance of 10 ohms, and there’s 2 amps of current running through it. According to Ohm's Law:

$$E = I \times R$$

$$E = 2 \times 10\Omega$$

$$E = 20V$$

So, you’d need 20 volts to push 2 amps through that 10-ohm resistor.

**Example 2**: 
Now suppose you’ve got a 12-volt battery hooked up to a circuit with a total resistance of 4 ohms. To figure out the current flowing through the circuit:

$$I = \frac{E}{R}$$
$$I = \frac{12V}{4\Omega}$$
$$I = 3A$$

That’s 3 amps of current flowing through the circuit.

#### The Power Law

Next up is the Power Law. This one tells you how much power (in watts) your circuit is using, based on the voltage and current. Power is basically how fast your circuit is eating up energy, and here’s the formula:

$$P = V \times I$$

Where:
- **$P$** is the power in watts (W)
- **$E$** is the voltage (electromotive force) in volts (V)
- **$I$** is the current in amperes (A)

This law is pretty handy because it tells you that power is just the product of how much voltage you’ve got times how much current is flowing. And just like with Ohm’s Law, you can tweak this to use resistance too:

$$P = I^2 \times R$$

$$P = \frac{E^2}{R}$$

**Example 1**:
Let’s stick with that 12-volt circuit with 2 amps of current. The power it’s consuming would be:

$$P = E \times I$$

$$P = 12V \times 2A$$

$$P = 24W$$

So, this circuit is using up 24 watts of power.

**Example 2**:
If the circuit has a resistance of 6 ohms, you can calculate the power using that instead:

$$P = I^2 \times R$$

$$P = 2^2A \times 6\Omega$$

$$P = 4A \times 6\Omega$$

$$P = 24W$$

Still $24$ watts—so it checks out!

#### Why Does This Matter?

You might be wondering, "Why should I care about all this?" Well, whenever you work with electronics you will use these laws all the time. Whether you're figuring out how much power your transmitter is using, picking the right resistor for a circuit, or troubleshooting why something isn't working, Ohm’s Law and the Power Law are your best friends.

**Voltage Drop**: Imagine you’re running power through a long wire. The resistance of the wire will cause some voltage to drop along the way, which means the stuff at the other end might not get enough juice. Ohm’s Law lets you figure out how much voltage drop to expect.

**Power Rating**: Every component has a limit on how much power it can handle before it starts to cook. Using the Power Law, you can make sure your components are operating safely within those limits.

**Efficiency**: When you're setting up antennas or power systems, efficiency is key. Understanding how power, voltage, and current interact helps you design systems that minimize energy loss and keep everything running smoothly.

#### Quick Reference

Here’s a quick cheat sheet:

- **Ohm's Law**: 
  - $E = I \times R$
&nbsp;

  - $I = \frac{E}{R}$
&nbsp;

  - $R = \frac{E}{I}$
&nbsp;
- **Power Law**:
  - $P = E \times I$
&nbsp;

  - $P = I^2 \times R$
&nbsp;

  - $P = \frac{E^2}{R}$

The more you practice with these, the easier they get. Soon enough, you’ll be calculating like a pro and solving problems on the fly. Keep this section bookmarked—you’ll find yourself coming back to it often as you dive deeper into the world of amateur radio.

#### Question Pool examples

While I usually prefer to focus just on material in a book like this, it's worth showing all the questions which use these formulae in one place, so look over these so you understand how to answer them on the exam!

| **Question ID** | **Calculation**                         | **Equation Used**                    | **Answer** |
|-----------------|-----------------------------------------|--------------------------------------|------------|
| T5C08           | Power formula for a DC circuit          | $P = E \times I$                     |            |
| T5C09           | Power from 13.8 volts and 10 amperes    | $P = 13.8V \times 10A$               | $P = 138W$ |
| T5C10           | Power from 12 volts and 2.5 amperes     | $P = 12V \times 2.5A$                | $P = 30W$  |
| T5C11           | Current required for 120 watts at 12V   | $I = \frac{120W}{12V}$               | $I = 10A$  |
| T5D01           | Formula for current in a circuit        | $I = \frac{E}{R}$                    |            |
| T5D02           | Formula for voltage in a circuit        | $E = I \times R$                     |            |
| T5D03           | Formula for resistance in a circuit     | $R = \frac{E}{I}$                    |            |
| T5D04           | Resistance with 90 volts and 3 amperes  | $R = \frac{90V}{3A}$                 | $R = 30\Omega$ |
| T5D05           | Resistance with 12 volts and 1.5 amperes| $R = \frac{12V}{1.5A}$               | $R = 8\Omega$  |
| T5D06           | Resistance with 12 volts and 4 amperes  | $R = \frac{12V}{4A}$                 | $R = 3\Omega$  |
| T5D07           | Current with 120 volts and 80 ohms      | $I = \frac{120V}{80\Omega}$          | $I = 1.5A$ |
| T5D08           | Current with 200 volts and 100 ohms     | $I = \frac{200V}{100\Omega}$         | $I = 2A$   |
| T5D09           | Current with 240 volts and 24 ohms      | $I = \frac{240V}{24\Omega}$          | $I = 10A$  |
| T5D10           | Voltage across 2 ohms and 0.5 amperes   | $E = 0.5A \times 2\Omega$            | $E = 1V$   |
| T5D11           | Voltage across 10 ohms and 1 ampere     | $E = 1A \times 10\Omega$             | $E = 10V$  |
| T5D12           | Voltage across 10 ohms and 2 amperes    | $E = 2A \times 10\Omega$             | $E = 20V$  |

Note that you can get at most two of these on your exam, so even if you don't understand it – don't get intimidated! You can miss 9 questions on the Technician exam and still pass.

<ohms-law-calculator></ohms-law-calculator>
