---
questions: [ "T6D04", "T7C01", "T7C03", "T7D04", "T0A12", "T7D01", "T7D02", "T7D03", "T7D06", "T7D07", "T7D09", "T7D11", "T0A11", "T7D08", "T7D10" ]
---

### Section 6.6: Basic Repair and Testing

#### Introduction to Test Equipment

Let's dive into some essential skills for keeping your ham shack running smoothly: using test equipment and basic soldering.

#### The Multimeter: Your Ham Shack Swiss Army Knife

> **Key Information:**
> * A multimeter can measure *voltage, current and resistance*.
> * An *ammeter* is used to measure electric current. {{< link id="T7D07" >}}
> * A meter displays an *electrical quantity as a numeric value*. {{< link id="T6D04" >}}

Your trusty multimeter is perhaps the most versatile and essential diagnostic tool in the ham shack. It typically combines at least three crucial measurement instruments: a *voltmeter (to measure voltage)*, an *ammeter (to measure current)* {{< link id="T7D04" >}}, and an *ohmmeter (to measure resistance)*. When troubleshooting equipment issues, your first step should often be checking power supplies and connections with your multimeter. Remember, most ham radios run on 13.8V DC.

##### Using a Multimeter

> **Key Information:** A *voltmeter is connected in parallel* {{< link id="T7D02" >}} with a component to measure voltage. An *ammeter is connected in series* {{< link id="T7D03" >}} with a component to measure current.

1. Measuring Voltage:
   - *Use a voltmeter* {{< link id="T7D01" >}} to measure electric potential (voltage).
   - Set the multimeter to the appropriate voltage range (DC or AC).
   - *Connect the voltmeter in parallel* - red probe to the positive point and the black probe to the negative point or ground.
   - Read the voltage on the display.

2. Measuring Current:
   - Set the multimeter to the appropriate current range.
   - *Break the circuit and connect the ammeter in series* with the load.
   - The current will flow through the meter, allowing you to read the amperage.

3. Measuring Resistance:
   - Set the multimeter to the resistance (ohms) function.
   - Connect the probes across the component you're measuring.
   - *Ensure the circuit is not powered when measuring resistance* {{< link id="T7D11" >}} to avoid damaging the meter and getting inaccurate readings.

> **Key Information:** *Attempting to measure voltage when using the resistance setting* {{< link id="T7D06" >}} on your multimeter can damage the meter. *Never attempt to measure current by connecting the probes in parallel* with a circuit.

⚠️ **WARNING**: Never attempt to measure current by connecting the probes in parallel with a circuit or component. This can cause a short circuit and damage your meter or create a safety hazard.

#### Special Considerations for Capacitors

> **Key Information:** An increasing resistance reading on an ohmmeter indicates you're measuring a *discharged capacitor that is charging*. {{< link id="T7D10" >}}

When measuring the resistance of a capacitor with an ohmmeter, you might notice the reading starts low and then increases. This is normal behavior for a discharged capacitor. As the ohmmeter applies a small voltage to make its measurement, it charges the capacitor, causing the apparent resistance to increase over time.

> **Key Information:** Power supplies can store dangerous charges in filter capacitors even after being turned off. {{< link id="T0A11" >}}

⚠️ **WARNING**: *Power supply filter capacitors can store charge* even after the equipment has been turned off. Always discharge capacitors safely before working on equipment.

#### Safety First: Measuring High Voltages

> **Key Information:** When measuring high voltages, *ensure that the voltmeter and leads are rated for the voltages to be measured*. {{< link id="T0A12" >}}

When it comes to measuring high voltages, safety is paramount. Always *ensure that your voltmeter and its leads are rated for the voltage you're measuring*. It's like making sure you're wearing the right protective gear for the job. Using a voltmeter rated for 50 volts to measure 1000 volts is a recipe for disaster - it could damage your meter or, worse, cause injury. 

Also, remember that some ham radio equipment, especially tube-based gear, can have dangerously high voltages even when unplugged. Those capacitors we talked about earlier? They can hold a charge for a long time. So always discharge high-voltage capacitors before poking around, and if you're not sure how to do that safely, it's best to leave it to someone with more experience. Remember, the goal is to measure voltage, not become part of the circuit yourself!

⚠️ **WARNING**: Attempting to measure voltage when using the resistance setting on your multimeter can damage the meter. Always double-check your meter's settings before making measurements.

#### Other Essential Test Equipment

> **Key Information:** A dummy load *prevents transmitting signals over the air when making tests* {{< link id="T7C01" >}} and consists of *a non-inductive resistor mounted on a heat sink*. {{< link id="T7C03" >}}

1. SWR Meter: Measures the Standing Wave Ratio, which tells you how well your antenna is matched to your transmitter. High SWR can indicate antenna problems and may cause damage to your transmitter if left unchecked.

2. Wattmeter: Measures your transmitter's power output, helping you stay within legal limits and ensure your equipment is functioning correctly.

3. Dummy Load: Invaluable for testing transmitters without broadcasting a signal. It's *primary purpose is to prevent transmitting signals over the air when making tests*. A dummy load consists of *a non-inductive resistor mounted on a heat sink* - essentially a fake antenna that converts your radio's output to heat, letting you tune and troubleshoot without causing interference.

4. Oscilloscope: For more advanced testing, an oscilloscope can visualize electrical signals, helping diagnose issues with modulation or signal quality. While not essential for beginners, it's a powerful tool as you advance in the hobby.

#### The Art of Soldering

> **Key Information:** *Acid-core solder should not be used for radio and electronic applications*. {{< link id="T7D08" >}} A *cold solder joint appears rough or lumpy*. {{< link id="T7D09" >}}

Soldering is a skill that can save you money and keep your equipment in top shape. Here are some soldering basics:

1. Use a soldering iron with adjustable temperature control. Most electronics work best with temperatures between 600-700°F (315-370°C).

2. Always "tin" your soldering iron tip by applying a small amount of solder to it before making a connection. This improves heat transfer.

3. Heat the joint, not the solder. Touch your iron to the components you're joining, then apply solder to the heated joint.

4. *Use rosin-core solder for electronics. Never use acid-core solder*, which can corrode your components. Acid-core solder is designed for plumbing applications and will damage electronic circuits.

5. Work in a well-ventilated area and always use safety glasses.

6. Practice on old electronics or scrap wire before tackling your valuable ham gear.

7. Learn to recognize good and bad solder joints. A good joint should be smooth and shiny, with a concave shape. If you see a joint that looks *dull, rough, or lumpy*, it might be a "cold" solder joint. *Cold joints occur when the parts weren't heated sufficiently during soldering*. They can cause intermittent connections or failures and should be redone.

#### Final Safety Reminder

Remember, safety first! Always unplug equipment before working on it, and be aware that capacitors can hold a charge even when the power is off, particularly in something that handles a lot of current like a power supply. When measuring in-circuit resistance, always ensure that the circuit is not powered to avoid damaging your meter or getting inaccurate readings.

With these skills in your toolkit, you'll be well-equipped to handle basic repairs and keep your station in prime operating condition. Happy testing and soldering!
