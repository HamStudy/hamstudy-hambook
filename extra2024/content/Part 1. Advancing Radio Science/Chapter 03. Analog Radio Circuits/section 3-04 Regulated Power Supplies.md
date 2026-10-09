---
chapter: "3"
section: "3.4"
questions: ["E7D01", "E7D03", "E7D04", "E7D05", "E7D08", "E7D06", "E7D07", "E7D12", "E7D13", "E7D02", "E7D10", "E7D14", "E7D15"]
status: generated1
draft: true
---

### Section 3.4: Regulated Power Supplies

A supply's voltage reading with nothing connected tells only part of the story. Add a load and the voltage may sag; remove the load and it may rise. A rectifier changes AC into pulsating DC, and smoothing capacitors reduce the variations. Some AC variation, called *ripple*, can remain. A regulator adjusts power flow to hold the output near a chosen value as those conditions change.

#### Continuous Control

*A linear regulator varies the conduction of an active device.* A stable reference gives its control circuit a voltage to compare against. The circuit adjusts conduction in the direction that opposes any change in output voltage.

> **Key Information:**
> - A linear electronic voltage regulator varies the conduction of a control element to maintain a constant output voltage. {{< link id="E7D01" >}}
> - A Zener diode can provide a stable voltage reference. {{< link id="E7D03" >}}

A *series regulator* puts its control device in the path between source and load. If output voltage begins to fall, that device conducts more; if output rises, it conducts less. *A shunt regulator instead changes the current drawn across the source, in parallel with the load.* A source resistance or current-limiting element allows that changing load to control voltage.

> **Key Information:**
> - The common three-terminal voltage regulator is a series regulator. {{< link id="E7D04" >}}
> - A shunt regulator operates by loading the unregulated voltage source. {{< link id="E7D05" >}}

A three-terminal regulator packages the input, output, and reference or ground connections with its internal control circuitry. The discrete circuit below makes the series-control idea visible.

![Official Figure E7-2 shows a linear supply regulator with a plus-25-volt input and plus-12-volt output. Q1 is the series pass transistor between them. R1 feeds Q1's base and Zener D1, which connects to ground as a reference. C2 is connected in parallel with D1 to bypass ripple. C1 is across the input; C3 and load R2 are across the output.](../../../hugo/static/figures/E7-2.svg)
{.img-centered .img-xlarge .img-bw caption="Figure E7-2: Q1 controls load current while D1 establishes a reference."}

> **Key Information:**
> - Figure E7-2 is a linear voltage regulator. {{< link id="E7D08" >}}
> - Q1 controls current to keep the output voltage constant. {{< link id="E7D06" >}}
> - C2 bypasses rectifier-output ripple around D1. {{< link id="E7D07" >}}

D1 holds the base voltage fairly steady. The emitter output follows at approximately one base-emitter drop below it. *C2 provides a low-impedance path for the remaining AC ripple at the reference node, helping prevent that ripple from appearing at the output.* It is not the large main filter across the load.

#### Headroom and Heat

The control device needs some voltage across it to keep regulating. If the input falls too close to the desired output, the device cannot compensate further.

> **Key Information:** Dropout voltage is the minimum input-to-output voltage difference required for a linear regulator to maintain regulation. {{< link id="E7D12" >}}

For example, a regulator requiring 2 V of headroom to provide 12 V needs at least about 14 V at its input under the stated operating conditions. The lowest points of input ripple matter, not just the average input voltage.

Excess headroom becomes heat. Ignoring the regulator's small internal operating current, its dissipation is

$$P_{\mathrm{loss}}=(V_{\mathrm{in}}-V_{\mathrm{out}})I_{\mathrm{out}}.$$

The voltage difference is in volts and output current in amperes, so the result is watts. Converting 25 V to 12 V at 1 A dissipates $(25-12)(1)=13\ \mathrm{W}$ in the series regulator, in addition to the 12 W delivered to the load.

> **Key Information:** A series linear regulator's power dissipation is the input-to-output voltage difference multiplied by output current. {{< link id="E7D13" >}}

In this example, the regulator heats the room with more power than it delivers to the load. The 12 V output can be perfectly steady while the regulator runs hot. A larger current or voltage drop increases that heat further.

#### Controlling Pulses Instead

A switchmode regulator repeatedly turns an active device on and off. An energy-storage network and filter turn those pulses into a steadier output. *Duty cycle* is the fraction of each switching period spent on.

> **Key Information:** A switchmode voltage regulator varies the duty cycle of pulses applied to a filter. {{< link id="E7D02" >}}

Suppose each switching period lasts 10 µs. Staying on for 2 µs gives a duty cycle of $2/10=0.20$, or 20%; staying on for 5 µs gives 50%. Changing the pulse width changes how much energy reaches the output. As with the switching amplifiers we just studied, the device spends less time carrying substantial current while dropping a substantial voltage. It can therefore dissipate less power than a comparable linear pass device.

Many switching supplies convert power at a frequency much higher than the AC mains frequency. Their transformers transfer smaller packets of energy more frequently, and their filters need to smooth shorter intervals between packets.

> **Key Information:** A switching supply can be lighter and less expensive because its high-frequency inverter uses much smaller transformers and filter components for an equivalent power output. {{< link id="E7D10" >}}

The high-frequency switching still needs careful filtering and layout to keep unwanted signals out of a radio. That practical interference problem appears again in the station chapters.

#### Stored Energy at Higher Voltage

A high-voltage supply may use several filter capacitors in series to obtain enough total voltage rating. Real capacitors have unequal leakage currents, so equal capacitance values alone do not ensure equal DC voltage sharing. *Equal-value resistors across the capacitors make the division more predictable by drawing a controlled current.*

> **Key Information:** Equal-value resistors across series-connected supply filter capacitors equalize capacitor voltages, discharge the capacitors when voltage is removed, and provide a minimum load on the supply. {{< link id="E7D14" >}}

These are often called balancing or bleeder resistors. *While the supply is on, they keep drawing current even if the main load is disconnected; that is the minimum load.* *After power is removed, stored charge has a path through the same resistors.* Discharge takes time, and a failed resistor can defeat that function; their presence is not proof that a capacitor is discharged.

At switch-on, an uncharged capacitor can demand a large current. *A step-start circuit temporarily limits that current, then permits normal operation after the capacitors have charged.*

> **Key Information:** A step-start circuit allows a high-voltage supply's filter capacitors to charge gradually. {{< link id="E7D15" >}}

A common arrangement initially includes resistance in the charging path and later bypasses it. High-voltage supply work requires training and equipment for handling stored energy safely. Understanding this circuit does not make its exposed parts safe to touch.
