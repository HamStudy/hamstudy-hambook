---
chapter: "6"
section: "6.1"
questions: ["G0B06", "G0B02", "G0B03", "G0B01", "G0B05", "G0B12"]
status: draft1
---

### Section 6.1: AC Power and Circuit Protection

Ham shacks come in all shapes and sizes—from a corner of the kitchen table to a dedicated room filled with equipment. But whether you're adding a simple power strip to charge your handheld or running a dedicated 240-volt circuit for an amplifier, any time you modify your station's power distribution, you're making decisions that affect safety. Understanding how AC power works in your home and how to protect yourself and your equipment is something that will pay dividends not just in the hobby, but throughout your life!

#### The Foundation: Understanding Your Home's Power

Before thinking about what your station needs, it helps to understand what's already available in your home. Standard US residential service is **split-phase 120/240V**—the utility delivers 240 volts center-tapped to provide two 120-volt legs. This gives you access to both voltages throughout your home:

- **120-volt circuits**: Standard outlets powering most household items—lamps, televisions, computers, kitchen appliances, phone chargers
- **240-volt circuits**: High-power appliances like electric dryers, ovens/ranges, central air conditioners, water heaters, and EV chargers
- **120/240-volt circuits**: Appliances needing both—like a dryer that uses 240V for the heating element but 120V for the motor and timer, or a range that heats at 240V but runs its clock and lights at 120V

Most ham stations run happily on standard 120-volt outlets. A typical 100-watt HF transceiver draws only 20-25 amps at 12 volts DC, which translates to just a couple of amps from your wall outlet through its power supply. Add a computer, monitor, and a few accessories, and you're still well within what a single 15 or 20-amp circuit can handle.

That said, there are reasons you might eventually want to expand—adding an amplifier that requires 240 volts, or simply wanting a dedicated circuit so the microwave doesn't cause your radio to hiccup. The key is matching your infrastructure to your actual needs.

#### The Wires in Your Walls

Before discussing circuit protection, it helps to understand what's actually inside that electrical cable. A standard 120-volt circuit has three conductors:

- **Hot (black)**: Carries voltage from the breaker panel. This is the dangerous one—it's always "live" when the circuit is on.
- **Neutral (white)**: Completes the circuit back to the panel. It carries current but normally sits at zero volts.
- **Ground (green or bare copper)**: A safety path that carries no current during normal operation, but provides a safe route to ground if something goes wrong.

A 240-volt circuit has two hot wires (typically black and red) instead of one, plus neutral and ground. Understanding which wire does what matters when we talk about where to put fuses and why.

#### The National Electrical Code

The standards for safe residential wiring aren't arbitrary—they come from the National Electrical Code, which represents decades of hard-learned lessons about what causes fires and electrocutions. The NEC covers everything from wire sizing to outlet placement, and it applies to your ham station too.

> **Key Information:** The National Electrical Code covers electrical safety of the station. {{< link id="G0B06" >}}

Local codes sometimes exceed NEC requirements, and compliance matters for both safety and practical reasons—insurance claims after electrical fires often hinge on whether the installation met code. If you're adding circuits or making significant changes, working with a licensed electrician ensures the job is done right.

#### Circuit Protection and Wire Sizing

Current flowing through undersized wire creates heat—potentially enough to melt insulation and start fires. Think of wire gauge like water pipes—too small and things back up, but with electricity the result is heat rather than pressure.

We can take advantage of this property by running current through a small wire carefully chosen to burn out and break if the current exceeds a safe level. This is called a fuse! Circuit breakers achieve the same protection using an electromagnetic or thermal mechanism to trip a switch; they have the advantage of being reusable—just reset them after fixing whatever caused the overload.

The NEC specifies which wire sizes are safe for different current loads:

> **Key Information:**
> - According to the National Electrical Code, the minimum wire size that may be used safely with a 20-ampere circuit breaker is AWG number 12. {{< link id="G0B02" >}}
> - A 15-ampere fuse or circuit breaker would be appropriate to use with a circuit that uses AWG number 14 wiring. {{< link id="G0B03" >}}

**Common Wire and Breaker Combinations:**

| Wire Size | Maximum Breaker | Typical Use |
|-----------|-----------------|-------------|
| AWG 14    | 15 Amps        | Standard lighting circuits, light-duty outlets. |
| AWG 12    | 20 Amps        | Kitchen outlets, workshops, most ham stations. |
| AWG 10    | 30 Amps        | Window AC units, some power tools. |
| AWG 8     | 40 Amps        | Electric ranges, large appliances. |
| AWG 6     | 55 Amps        | Central AC, high-power equipment. |

These ratings assume normal conditions. Long cable runs or high ambient temperatures reduce capacity. When in doubt, use heavier gauge wire.

Beyond sizing, *where* you place circuit protection matters. Get this wrong, and equipment might look dead while remaining dangerous.

> **Key Information:** In a 120-volt AC power circuit, fuses or circuit breakers should be installed in series with the hot conductor only. {{< link id="G0B01" >}}

![Diagram showing proper fuse placement in hot conductor](../images/ac-fusing-diagram.svg)

The logic is straightforward: interrupt the hot wire, and you eliminate the hazard. Interrupt only the neutral, and you've created a trap—equipment that appears dead but remains energized. The neutral fuse blows, nothing works, but 120 volts still waits on the hot wire.

For 240-volt circuits with two hot conductors, both must have protection with a "common trip" design—when either breaker trips, both disconnect, ensuring complete isolation.

#### GFCI Protection

That outlet with the test and reset buttons could save your life. Ground Fault Circuit Interrupters detect when current isn't returning the way it should and shut down the circuit in milliseconds.

In normal operation, all the current flowing out on the hot wire returns on the neutral. If some current takes a different path—directly to ground, through spilled water, into a person, etc.—the outgoing and returning currents no longer match. A GFCI detects this imbalance and trips the breaker.

> **Key Information:** A ground fault circuit interrupter (GFCI) will disconnect AC power if current flows from one or more of the hot wires directly to ground. {{< link id="G0B05" >}}

![Diagram showing GFCI operation principles](../images/gfci-operation.svg)

Electrical codes require GFCI protection in areas where water and electricity might meet—bathrooms, kitchens, garages, outdoors, and unfinished basements. For your ham shack, they're worth considering anywhere you might be handling equipment in less-than-ideal conditions.

#### Interlocks: Protection from Stored Energy

High-voltage equipment can be dangerous even when unplugged—capacitors store energy that takes time to dissipate. Many power supplies and amplifiers include interlocks: switches that automatically disconnect dangerous voltages when the cabinet is opened.

> **Key Information:** The purpose of a power supply interlock is to ensure that dangerous voltages are removed if the cabinet is opened. {{< link id="G0B12" >}}

![Diagram showing how an interlock switch works](../images/interlock-diagram.svg)

The concept is simple—open the cover, break the circuit. When you open an amplifier cabinet, the interlock cuts high voltage before your fingers get near anything dangerous.

Interlocks provide an important layer of protection, but they're not foolproof. Before working inside any high-voltage equipment, switch it off, unplug it, and give capacitors time to discharge. If you're uncertain, verify with a meter that no dangerous voltages remain.

#### Practical Considerations

A few practical tips as you set up or expand your station:

- **Know your circuits.** Figure out which breakers control which outlets before you need that information in an emergency.
- **Don't overload outlets.** If you're daisy-chaining power strips, it's time to think about your power distribution.
- **Test before you trust.** A simple outlet tester can verify that wiring is correct—a worthwhile check for any outlet you'll depend on.
- **Consider a master shutoff.** Being able to kill power to your entire station quickly can be valuable if something goes wrong.

The goal isn't to over-engineer your power system, but to understand it well enough to use it safely and know when you need professional help.
