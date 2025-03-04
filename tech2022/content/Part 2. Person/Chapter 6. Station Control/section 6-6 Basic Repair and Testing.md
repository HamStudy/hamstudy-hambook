---
questions: [ "T6D04", "T7C01", "T7C03", "T7D04", "T0A12", "T7D01", "T7D02", "T7D03", "T7D06", "T7D07", "T7D09", "T7D11", "T0A11", "T7D08", "T7D10" ]
---

### Section 6.6: Basic Repair and Testing

#### Introduction to Test Equipment

Let's get familiar with some essential skills for keeping your ham shack running smoothly: using test equipment and basic soldering.

#### The Multimeter: Your Ham Shack Swiss Army Knife

> **Key Information:**
> * A multimeter can measure *voltage, current and resistance*.
> * An *ammeter* is used to measure electric current. {{< link id="T7D07" >}}
> * A meter displays an *electrical quantity as a numeric value*. {{< link id="T6D04" >}}

Your trusty multimeter is perhaps the most versatile and essential diagnostic tool in the ham shack. It typically combines at least three crucial measurement instruments: a *voltmeter (to measure voltage)* {{< link id="T7D01" >}}, an *ammeter (to measure current)* {{< link id="T7D04" >}}, and an *ohmmeter (to measure resistance)*. When troubleshooting equipment issues, your first step should often be checking power supplies and connections with your multimeter.

##### Using a Multimeter Safely

> **Key Information:** 
> * A *voltmeter is connected in parallel* {{< link id="T7D02" >}} with a component to measure voltage.
> * An *ammeter is connected in series* {{< link id="T7D03" >}} with a component to measure current.
> * *Ensure the circuit is not powered when measuring resistance* {{< link id="T7D11" >}} to avoid damage to the meter.
> * *Attempting to measure voltage when using the resistance setting* {{< link id="T7D06" >}} can damage your multimeter.

When measuring voltage, set your multimeter to the appropriate range (DC or AC) and connect it in parallel with the component - red probe to the positive point and black to negative or ground.

For current measurements, you must break the circuit and connect the meter in series so the current flows through the meter.

⚠️ **WARNING**: Never attempt to measure current by connecting the probes in parallel with a circuit - this can cause a short circuit and damage your meter or create a safety hazard.

#### Working with Capacitors

> **Key Information:** 
> * An increasing resistance reading on an ohmmeter indicates you're measuring a *discharged capacitor that is charging*. {{< link id="T7D10" >}}
> * Power supplies can store dangerous charges in *filter capacitors even after being turned off*. {{< link id="T0A11" >}}

When measuring a capacitor with an ohmmeter, you might notice the reading starts low and then increases. This is normal behavior for a discharged capacitor. As the ohmmeter applies a small voltage to make its measurement, it charges the capacitor, causing the apparent resistance to increase over time.

⚠️ **WARNING**: Always discharge capacitors safely before working on equipment, especially in power supplies which can store dangerous charges even after being turned off.

#### Measuring High Voltages

> **Key Information:** When measuring high voltages, *ensure that the voltmeter and leads are rated for the voltages to be measured*. {{< link id="T0A12" >}}

Safety is paramount when measuring high voltages. Always *ensure that your voltmeter and its leads are rated for the voltage you're measuring*. Using a voltmeter rated for 50 volts to measure 1000 volts could damage your meter or cause serious injury.

Remember that some ham radio equipment, especially tube-based gear, can have dangerously high voltages even when unplugged. Those filter capacitors can hold a charge for a long time, so always discharge high-voltage capacitors before working on equipment.

#### Other Essential Test Equipment

> **Key Information:** A dummy load *prevents transmitting signals over the air when making tests* {{< link id="T7C01" >}} and consists of *a non-inductive resistor mounted on a heat sink*. {{< link id="T7C03" >}}

1. **SWR Meter**: Measures the Standing Wave Ratio, telling you how well your antenna is matched to your transmitter. High SWR can indicate antenna problems and may damage your transmitter.

2. **Wattmeter**: Measures your transmitter's power output, helping you stay within legal limits and ensure proper functioning.

3. **Dummy Load**: Invaluable for testing transmitters without broadcasting a signal. It's essentially a fake antenna that converts your radio's output to heat, letting you tune and troubleshoot without causing interference.

4. **Oscilloscope**: For more advanced testing, an oscilloscope can visualize electrical signals, helping diagnose issues with modulation or signal quality.

#### The Art of Soldering

> **Key Information:** 
> * *Acid-core solder should not be used for radio and electronic applications*. {{< link id="T7D08" >}} 
> * A *cold solder joint appears rough or lumpy*. {{< link id="T7D09" >}}

Soldering is a skill that can save you money and keep your equipment in top shape. Here are some soldering basics:

1. Use a soldering iron with adjustable temperature control (600-700°F/315-370°C for most electronics).

2. Always "tin" your soldering iron tip by applying a small amount of solder before making a connection.

3. Heat the joint, not the solder. Touch your iron to the components you're joining, then apply solder to the heated joint.

4. *Use rosin-core solder for electronics. Never use acid-core solder*, which can corrode your components.

5. Work in a well-ventilated area and always use safety glasses.

6. A good solder joint should be smooth and shiny, with a concave shape. If you see a joint that looks *dull, rough, or lumpy*, it's likely a "cold" solder joint that formed when parts weren't heated sufficiently. Cold joints can cause intermittent connections and should be redone.

#### Final Safety Reminder

Remember, safety first! Always unplug equipment before working on it, and be aware that capacitors can hold a charge even when the power is off. With these skills in your toolkit, you'll be well-equipped to handle basic repairs and keep your station in prime operating condition. Happy testing and soldering!
