### Section 1.3: Electrical Laws (and Math)

Okay, let's get into some of the basic math and electrical laws you'll use all the time in amateur radio. Don't worry—this isn’t rocket science (though I imagine rocket scientists would use this as well!). We’re talking about Ohm’s Law and the Power Law, which are like the peanut butter and jelly of electronics. They go together perfectly and once you get the hang of them, you'll see they're not that hard to digest.

#### Ohm's Law

First up is Ohm’s Law. This is the bread and butter of everything electrical. It’s all about how voltage, current, and resistance are related in a circuit. The law itself is simple:

$$V = I \times R$$

Where:
- **$V$** is the voltage in volts (V)
- **$I$** is the current in amperes (A)
- **$R$** is the resistance in ohms (Ω)

In plain English, Ohm's Law is saying, "The voltage across a component is equal to the current flowing through it times its resistance." It’s like figuring out how much push (voltage) is needed to get the right amount of flow (current) through a certain resistance.

**Example 1**: 
Let’s say you have a resistor with a resistance of 10 ohms, and there’s 2 amps of current running through it. According to Ohm's Law:

$$V = I \times R$$

$$V = 2 \times 10\Omega$$

$$V = 20V$$

So, you’d need 20 volts to push 2 amps through that 10-ohm resistor.

**Example 2**: 
Now suppose you’ve got a 12-volt battery hooked up to a circuit with a total resistance of 4 ohms. To figure out the current flowing through the circuit:

$$I = \frac{V}{R}$$
$$I = \frac{12 \, \text{V}}{4 \, \text{Ω}}$$
$$I = 3 \, \text{A}$$

That’s 3 amps of current flowing through the circuit.

#### The Power Law

Next up is the Power Law. This one tells you how much power (in watts) your circuit is using, based on the voltage and current. Power is basically how fast your circuit is eating up energy, and here’s the formula:

$$P = V \times I$$

Where:
- **$P$** is the power in watts (W)
- **$V$** is the voltage in volts (V)
- **$I$** is the current in amperes (A)

This law is pretty handy because it tells you that power is just the product of how much voltage you’ve got times how much current is flowing. And just like with Ohm’s Law, you can tweak this to use resistance too:

$$P = I^2 \times R$$

$$P = \frac{V^2}{R}$$

**Example 1**:
Let’s stick with that 12-volt circuit with 2 amps of current. The power it’s consuming would be:

$$P = V \times I$$

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

You might be wondering, "Why should I care about all this?" Well, as a ham, you'll use these laws all the time. Whether you're figuring out how much power your transmitter is using, picking the right resistor for a circuit, or troubleshooting why something isn't working, Ohm’s Law and the Power Law are your best friends.

**Voltage Drop**: Imagine you’re running power through a long wire. The resistance of the wire will cause some voltage to drop along the way, which means the stuff at the other end might not get enough juice. Ohm’s Law lets you figure out how much voltage drop to expect.

**Power Rating**: Every component has a limit on how much power it can handle before it starts to cook. Using the Power Law, you can make sure your components are operating safely within those limits.

**Efficiency**: When you're setting up antennas or power systems, efficiency is key. Understanding how power, voltage, and current interact helps you design systems that minimize energy loss and keep everything running smoothly.

#### Quick Reference

Here’s a quick cheat sheet to keep these formulas handy:

- **Ohm's Law**: 
  - $V = I \times R$
  - $I = \frac{V}{R}$
  - $R = \frac{V}{I}$
- **Power Law**:
  - $P = V \times I$
  - $P = I^2 \times R$
  - $P = \frac{V^2}{R}$

The more you practice with these, the easier they get. Soon enough, you’ll be calculating like a pro and solving problems on the fly. Keep this section bookmarked—you’ll find yourself coming back to it often as you dive deeper into the world of amateur radio.

#### Question Pool examples

While I usually prefer to focus just on material in a book like this, it's worth showing all the questions which use these formulae in one place, so look over these so you understand how to answer them on the exam!

| **Question ID** | **Calculation**                         | **Equation Used**                    | **Answer** |
|-----------------|-----------------------------------------|--------------------------------------|------------|
| T5C08           | Power formula for a DC circuit          | $P = V \times I$                     |            |
| T5C09           | Power from 13.8 volts and 10 amperes    | $P = 13.8V \times 10A$               | $P = 138W$ |
| T5C10           | Power from 12 volts and 2.5 amperes     | $P = 12V \times 2.5A$                | $P = 30W$  |
| T5C11           | Current required for 120 watts at 12V   | $I = \frac{120W}{12V}$               | $I = 10A$  |
| T5D01           | Formula for current in a circuit        | $I = \frac{V}{R}$                    |            |
| T5D02           | Formula for voltage in a circuit        | $V = I \times R$                     |            |
| T5D03           | Formula for resistance in a circuit     | $R = \frac{V}{I}$                    |            |
| T5D04           | Resistance with 90 volts and 3 amperes  | $R = \frac{90V}{3A}$                 | $R = 30\Omega$ |
| T5D05           | Resistance with 12 volts and 1.5 amperes| $R = \frac{12V}{1.5A}$               | $R = 8\Omega$  |
| T5D06           | Resistance with 12 volts and 4 amperes  | $R = \frac{12V}{4A}$                 | $R = 3\Omega$  |
| T5D07           | Current with 120 volts and 80 ohms      | $I = \frac{120V}{80\Omega}$          | $I = 1.5A$ |
| T5D08           | Current with 200 volts and 100 ohms     | $I = \frac{200V}{100\Omega}$         | $I = 2A$   |
| T5D09           | Current with 240 volts and 24 ohms      | $I = \frac{240V}{24\Omega}$          | $I = 10A$  |
| T5D10           | Voltage across 2 ohms and 0.5 amperes   | $V = 0.5A \times 2\Omega$            | $V = 1V$   |
| T5D11           | Voltage across 10 ohms and 1 ampere     | $V = 1A \times 10\Omega$             | $V = 10V$  |
| T5D12           | Voltage across 10 ohms and 2 amperes    | $V = 2A \times 10\Omega$             | $V = 20V$  |

Note that you can get at most two of these on your exam, so even if you don't understand it – don't get intimidated! You can miss 9 questions on the Technician exam and still pass.
