---
chapter: "6"
section: "6.1"
questions: ["G0B01", "G0B02", "G0B03", "G0B05", "G0B06", "G0B12"]
---

### Section 6.1: AC Power and Circuit Protection

Welcome to the world of General class station safety! If your Technician experience was mainly with handheld radios and low-power setups, you're about to enter a new realm. With your General privileges, you might soon be working with more substantial power levels, larger antennas, and possibly even amplifiers. Understanding AC power safety becomes more important than ever.

#### Understanding AC Power in Your Shack

In your Technician studies, you learned the basics of electrical safety—that electricity always seeks a path to ground, and that your body can unfortunately become that path if you're not careful. Now, let's dig deeper into the AC power that runs your ham shack.

Most homes in the United States have three types of AC circuits:

1. **120-volt circuits** - These are your standard wall outlets that power most household devices
2. **240-volt circuits** - These power energy-hungry appliances like electric dryers, stoves, and air conditioners
3. **120/240-volt circuits** - These are split-phase circuits that provide both voltages

As your station grows, you may find yourself needing dedicated 240-volt circuits for amplifiers or other high-power equipment. Regardless of voltage, proper wiring and circuit protection are essential.

#### Fuses and Circuit Breakers: Location Matters

When installing circuit protection in AC power circuits, where the fuse or circuit breaker goes is actually quite important:

> **Key Information:** *In a 120-volt AC power circuit, fuses or circuit breakers should be installed in series with the hot conductor only.* {{< link id="G0B01" >}}

<img src="../images/ac-fusing-diagram.svg" alt="Diagram showing proper fuse placement in hot conductor" style="width: 400px; margin: 10px;">

But why only the hot wire? The reason is safety. If you were to fuse both the hot and neutral wires, and only the neutral fuse blew, the circuit would open but the hot wire would still be energized all the way to your equipment. This creates a dangerous situation where equipment appears to be off (since it's not working) but still has live voltage present.

By placing fuses or circuit breakers only in the hot conductors, you ensure that when protection devices trip, the hazardous voltage is disconnected from the equipment.

For a 240-volt circuit with two hot conductors, both hot lines should be fused or have circuit breakers. This ensures complete disconnection when a fault occurs.

#### Proper Wire Sizing: Not Just a Suggestion

When setting up your ham shack, you might be tempted to use whatever wire is handy to hook up your equipment. This would be a mistake. Wire size matters significantly for safety.

> **Key Information:** *According to the National Electrical Code, the minimum wire size that may be used safely with a 20-ampere circuit breaker is AWG number 12.* {{< link id="G0B02" >}}

Wire gauge (size) determines how much current a wire can safely carry without overheating. Using undersized wire is like trying to force too much water through a garden hose—something's going to give, and in the case of electrical wiring, that means heat, which can lead to melted insulation and fires.

Here's a simple guide to common wire sizes and their appropriate circuit breakers:

> **Key Information:** *A 15-ampere fuse or circuit breaker would be appropriate to use with a circuit that uses AWG number 14 wiring.* {{< link id="G0B03" >}}

| Wire Size | Maximum Circuit Breaker Size |
|-----------|------------------------------|
| AWG 14    | 15 Amps                      |
| AWG 12    | 20 Amps                      |
| AWG 10    | 30 Amps                      |
| AWG 8     | 40 Amps                      |
| AWG 6     | 55 Amps                      |

Remember that this table applies to normal household wiring conditions. Special circumstances like very long runs, high ambient temperatures, or bundled wires may require even larger wire sizes for the same current.

#### Ground Fault Circuit Interrupters (GFCIs)

You've probably seen those special outlets with "Test" and "Reset" buttons in bathrooms and kitchens. These life-saving devices are Ground Fault Circuit Interrupters (GFCIs), and understanding how they work is important for ham radio operators who often work with complex electrical setups.

> **Key Information:** *A ground fault circuit interrupter (GFCI) will disconnect AC power if current flows from one or more of the hot wires directly to ground.* {{< link id="G0B05" >}}

<img src="../images/gfci-operation.svg" alt="Diagram showing GFCI operation principles" style="width: 400px; margin: 10px;">

A GFCI constantly monitors the current flowing in the hot and neutral wires. In a normal circuit, the current should be exactly the same in both wires. If some current is "leaking" from the hot wire to ground (possibly through a person!), the GFCI detects this imbalance and trips, interrupting the circuit in milliseconds—fast enough to prevent a fatal shock in many cases.

Consider installing GFCIs in areas of your ham shack where moisture might be present or where you frequently work with equipment while it's plugged in. They're especially important for outdoor operations or portable setups where ground conditions might be less than ideal.

#### The National Electrical Code and You

The National Electrical Code (NEC) is a comprehensive set of regulations for electrical wiring and equipment. It's not just for professional electricians—it's relevant to amateur radio operators too.

> **Key Information:** *The National Electrical Code covers electrical safety of the station.* {{< link id="G0B06" >}}

The NEC includes specific provisions related to:
- Proper grounding techniques
- Wire sizing and current ratings
- Appropriate use of circuit protection devices
- Requirements for permanent and temporary installations

Many local building codes directly adopt the NEC, making compliance not just a good idea but often a legal requirement. When in doubt about an electrical installation for your station, consulting the NEC or a licensed electrician is always wise.

#### Power Supply Interlocks: An Extra Layer of Safety

If you're upgrading to higher-power equipment with your General privileges, you might encounter devices with "interlocks"—but what are they and why do they matter?

> **Key Information:** *The purpose of a power supply interlock is to ensure that dangerous voltages are removed if the cabinet is opened.* {{< link id="G0B12" >}}

Equipment like linear amplifiers and high-power power supplies can contain lethal voltages even after they're switched off, due to charged capacitors. Interlocks are mechanical switches that automatically disconnect power when a case or cabinet is opened, providing an extra layer of protection.

<img src="../images/interlock-diagram.svg" alt="Diagram showing how an interlock switch works" style="width: 350px; margin: 10px;">

While interlocks are an important safety feature, never rely on them as your only protection. Always:

1. Turn off the equipment
2. Unplug from AC power
3. Wait for capacitors to discharge
4. Verify with appropriate test equipment that no voltage is present

*Never* bypass or defeat an interlock—they exist because the voltages inside are potentially lethal.

#### AC Safety Practices for Your Ham Shack

Here are some practical AC safety tips for your General class station:

1. **Dedicated Circuits**: Consider installing dedicated circuits for your ham equipment, especially if you're using amplifiers or multiple transmitters.

2. **Proper Outlets**: Ensure all outlets are properly wired and grounded. Use a circuit tester to verify correct wiring before connecting expensive equipment.

3. **Power Distribution**: Use quality power strips with circuit breakers for your equipment. Mount them where you can easily reach them in an emergency.

4. **Emergency Shutoff**: Install an easily accessible master power cutoff for your station. In an emergency, you want to be able to kill all power with one motion.

5. **Documentation**: Create a diagram of your station's electrical system, including which circuit breakers control which equipment. In an emergency, this information could be crucial.

6. **Regular Inspection**: Periodically check all power cords, plugs, and connections for signs of wear or damage. Replace anything that looks questionable.

7. **Clean Installations**: Keep wiring neat and organized. Tangled wires can develop shorts or make troubleshooting difficult.

A ham I know once installed a new amplifier without verifying the outlet's wiring first. The outlet had been miswired with the hot and ground reversed. When he connected his amplifier's case to his station ground, he effectively created a short circuit. Fortunately, the breaker tripped immediately, but not before creating a spectacular (and terrifying) shower of sparks! A simple outlet tester would have identified the problem before any equipment was connected.

#### Beyond the Basics: Power Considerations for a Growing Station

As your station grows more complex with your General privileges, consider these additional power considerations:

1. **Voltage Sag**: High-power transmitters can cause temporary voltage drops when transmitting. If your lights dim when you key up, you might need a dedicated circuit or even a voltage regulator.

2. **Soft-Start Circuits**: Some amplifiers and high-power equipment draw huge inrush currents when first turned on. Soft-start circuits can prevent this from tripping breakers or causing voltage sags.

3. **UPS (Uninterruptible Power Supply)**: For critical station components like computers and digital mode interfaces, a UPS can prevent data loss during power fluctuations.

4. **Whole-House Surge Protection**: Beyond protecting individual pieces of equipment, consider whole-house surge protection at your main electrical panel to protect all your electronics.

#### The Bottom Line: AC Power Safety

With your General license comes the responsibility to understand and implement proper electrical safety practices. The higher power levels you might be working with now can be dangerous if not respected.

Remember that electricity doesn't care about your license class, your operating awards, or how carefully you follow FCC regulations. It follows the laws of physics, period. Give it the respect it deserves, follow proper safety protocols, and you'll enjoy many years of safe operation with your new privileges.

In the next section, we'll explore batteries and alternative power systems, which present their own unique safety considerations.
