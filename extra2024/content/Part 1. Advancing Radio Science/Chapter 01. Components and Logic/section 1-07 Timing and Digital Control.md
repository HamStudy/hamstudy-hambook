---
chapter: "1"
section: "1.7"
questions: ["E6C02", "E6C01", "E7A01", "E7A03", "E7A04", "E7A02", "E7A05", "E7A06", "E6C09"]
status: generated1
draft: true
---

### Section 1.7: Timing and Digital Control

An ordinary gate can tell you whether a button is down now. A controller may also need to remember that you pressed it a moment ago, count the presses, or keep something on for a set time. Those jobs need memory or timing as well as a rule for the present inputs.

#### From Level to Decision

A *comparator* compares an input voltage with a reference. *Its output changes between low and high according to which voltage is greater.* The reference establishes the threshold.

> **Key Information:** A comparator changes its output state when its input signal crosses the threshold voltage. {{< link id="E6C02" >}}

If a slowly changing input sits near the threshold, small noise fluctuations can make it cross back and forth repeatedly. The output then chatters. *Hysteresis* uses separate thresholds for rising and falling input voltage, so changing back requires a definite movement in the opposite direction.

> **Key Information:** Hysteresis prevents input noise from causing unstable comparator output signals. {{< link id="E6C01" >}}

For example, a detector might turn on above 3.0 V and turn off below 2.8 V. After it turns on, a small fluctuation to 2.95 V does not turn it off. The output can ignore that small wobble instead of changing its mind repeatedly. To switch it off, the input must fall the rest of the way below 2.8 V.

#### Remembering a Bit

*A flip-flop has two stable states.* It can remain in either state until an input or clock event tells it to change. That makes it a one-bit memory element.

> **Key Information:** A flip-flop is a bistable circuit. {{< link id="E7A01" >}}

A *clock* is a repeating signal that tells a circuit when to act. A *period* is the time for one complete cycle. The clock's *edges* are transitions from low to high or high to low. A flip-flop arranged to *toggle* changes to the opposite state at each selected edge—say, every low-to-high transition. One input pulse takes its output from 0 to 1; the next takes it back to 0. *Two input periods are therefore needed for one complete output cycle.*

![A clock waveform and a flip-flop output share a time axis. The output, labeled Q, changes state at each rising clock edge and stays unchanged at falling clock edges. A clock period is labeled T, while one complete output period spans 2T. The output therefore makes four cycles during eight clock cycles.](../../../images/s1-7-toggle-timing.svg)
{.img-centered .img-xlarge caption="Idealized rising-edge toggle: two clock cycles make one output cycle. Q labels the flip-flop output."}

> **Key Information:** A flip-flop can divide the frequency of a pulse train by two. {{< link id="E7A03" >}}

*Connect toggling stages in a chain and each stage halves the frequency again.* *Four stages divide by two four times: $2\times2\times2\times2=16$*. We can write that repeated multiplication as $2^4$; for $n$ stages, the division factor is $2^n$. A 16 kHz input would produce 8 kHz, 4 kHz, 2 kHz, and finally 1 kHz at successive stages.

> **Key Information:** Four flip-flops are required to divide a signal frequency by 16. {{< link id="E7A04" >}}

Not every useful count is a power of two. A decade counter advances through ten states before repeating. *Its carry output marks completion of each group of ten input pulses.*

> **Key Information:** A decade counter produces one output pulse for every ten input pulses. {{< link id="E7A02" >}}

Several decade counters can divide by 100 or 1000. Frequency counters use related counting and timing operations to measure incoming signals.

#### Stable and Timed States

The word *multivibrator* names a family of switching circuits. Their names describe how many states are stable without a new trigger.

A *monostable* has one stable resting state. *A trigger sends it temporarily to its other state; a timing circuit then returns it.* This is also called a one-shot. It can turn a brief trigger into a pulse of a chosen duration.

An *astable* has no stable resting state. *Its timing network keeps forcing it back and forth. It can supply a repeating pulse train without receiving an outside clock.*

> **Key Information:**
> - A monostable multivibrator switches temporarily to an alternate state for a set time. {{< link id="E7A06" >}}
> - An astable multivibrator continuously alternates between two states without an external clock signal. {{< link id="E7A05" >}}

The names count the stable states: *bi-* means two, *mono-* means one, and *a-* means none. *A bistable stays where you put it, a monostable returns after a delay, and an astable keeps switching.* Those behaviors tell you much more than the shape of the package.

#### Configuring a Larger Circuit

A *field-programmable gate array*, or FPGA, contains many logic resources and configurable connections. Its configuration determines which resources act as gates, registers, counters, and other circuits.

> **Key Information:** A hardware description language, or HDL, is used to design an FPGA's configuration. {{< link id="E6C09" >}}

An HDL describes hardware behavior and connections. Design tools translate that description into a configuration for the chip. An FPGA can therefore perform many operations at once in dedicated logic, rather than requiring a processor to carry out every step in sequence. The description becomes a circuit that can work on several signals at once.
