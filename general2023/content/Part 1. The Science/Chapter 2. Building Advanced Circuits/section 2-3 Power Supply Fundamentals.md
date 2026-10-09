---
chapter: "2"
section: "2.3"
questions: ["G7A05", "G7A06", "G7A04", "G7A07", "G7A03", "G7A02", "G7A01", "G7A08"]
status: draft1
---

### Section 2.3: Power Supply Fundamentals

Now that we've explored how transistors and tubes amplify signals, let's turn our attention to what powers them. The active circuits in your radio need clean, stable DC power to operate properly. Your household outlets provide AC power, so we need a way to convert that alternating current into the direct current our radios require.

Whether you're setting up a new station or trying to track down that annoying hum in your transmitted audio, these fundamentals will serve you well.

#### The Power Supply Journey: From AC to DC

Converting AC from your wall outlet to clean DC for your radio involves these basic stages:

1. **Transformation** - Changing the voltage level (if needed)
2. **Rectification** - Converting AC to pulsating DC
3. **Filtering** - Smoothing the pulses into steady DC
4. **Regulation** - Maintaining constant voltage despite load changes

The previous chapter covered transformers and voltage ratios. We'll start here with rectification, then follow the output through filtering and regulation.

#### Rectification: Converting AC to DC

Rectification changes alternating current that flows back and forth into direct current that flows in one direction. There are two basic approaches to rectification: half-wave and full-wave.

> **Key Information:**
> * A half-wave rectifier converts 180 degrees of the AC cycle to DC. {{< link id="G7A05" >}}
> * A full-wave rectifier converts 360 degrees of the AC cycle to DC. {{< link id="G7A06" >}}

![Three voltage graphs share the same time scale. The AC input alternates between positive and negative half-cycles. The half-wave output keeps each positive half-cycle and remains at zero during each negative half-cycle, producing one pulse per input cycle. The full-wave output turns the negative half-cycles into positive pulses, producing two pulses per input cycle. Both rectified voltages stay positive or zero, but they still rise and fall; the unfiltered full-wave output reaches zero between pulses.](../../../images/s2-3-rectifier-waveforms.svg)
{.img-centered}

As you can see in the waveform comparison:
- The input AC signal alternates between positive and negative
- Half-wave rectification preserves only the positive portions, creating gaps in the output
- Full-wave rectification flips the negative portions to create a continuous series of positive pulses

#### Half-Wave Rectification

> **Key Information:** A half-wave rectifier is characterized by using only one diode. {{< link id="G7A04" >}}

![An AC source, diode D1, and a resistive load form one series loop. The diode’s cathode bar faces the load. During the half-cycle that makes the source’s upper terminal positive, current passes through the diode, through the load, and back to the source. During the opposite half-cycle, the diode blocks that path. The load therefore receives current in only one direction, during only half of each AC cycle.](../../../images/s2-3-half-wave-rectifier.svg)
{.img-large .float-right .img-bw}

The half-wave rectifier is the simplest design:
- A single diode allows current to flow only during the positive half-cycle
- The diode completely blocks the negative half-cycle
- The output pulses occur at the same frequency as the input AC

Despite leaving half of each AC cycle unused, half-wave rectification is sometimes used in:
- Simple battery chargers
- Power indicators
- Applications where cost and simplicity outweigh efficiency concerns
- Circuits where only a small amount of DC power is needed



#### Full-Wave Rectification

Full-wave rectifiers utilize the entire AC cycle, making them more efficient and easier to filter.

> **Key Information:** An unfiltered full-wave rectifier connected to a resistive load produces a series of DC pulses at twice the frequency of the AC input. {{< link id="G7A07" >}}

The main advantage of full-wave rectification is its efficiency:
- It utilizes both positive and negative portions of the AC cycle instead of skipping alternate half-cycles
- By converting both halves of the cycle, it inherently produces pulses at twice the input frequency (120 Hz from a 60 Hz input)
- The unfiltered output still reaches zero, but the shorter time between peaks makes filtering easier for a given load and capacitance

The exam covers two common full-wave rectifier designs: center-tapped transformer and bridge rectifier.

##### **Center-Tapped Transformer Design**

> **Key Information:** A full-wave rectifier circuit using a center-tapped transformer uses two diodes. {{< link id="G7A03" >}}

![An AC source drives a transformer whose secondary winding has a connection at its midpoint, called the center tap. Each end of the secondary connects through its own diode, D1 or D2, to the same positive side of the load. The other side of the load returns to the center tap. When the upper end is positive relative to the tap, D1 conducts; when the lower end is positive, D2 conducts. Both paths send current through the load in the same direction, so both half-cycles produce positive output pulses.](../../../images/s2-3-center-tap-rectifier.svg)
{.img-centered caption="The two diodes conduct on alternate half-cycles, keeping current through the load in the same direction."}

This design uses:
- A transformer with a center tap on its secondary winding
- Two diodes that alternately conduct during opposite half-cycles
- The center tap serves as the common (often ground) connection

During operation:
- When the top of the secondary is positive relative to the center tap, the top diode conducts
- When the bottom of the secondary is positive relative to the center tap, the bottom diode conducts
- In both cases, current flows in the same direction through the load



##### **Bridge Rectifier Design**

![Four diodes form a diamond. The AC source connects to its top corner, N, and bottom corner, S. The load connects between the right corner, marked DC positive, and the left corner, marked DC negative. When N is positive, current goes through D2 to DC positive, through the load to DC negative, then through D4 to S. When S is positive, current goes through D3, through the load in the same direction, and through D1 back to N. A different pair of diodes conducts on each half-cycle, but load current keeps the same direction.](../../../images/s2-3-bridge-rectifier.svg)
{.img-centered .img-bw caption="At the wire crossing without a dot, the wires are not connected."}

The bridge rectifier uses four diodes arranged to:
- Direct current through the load in the same direction regardless of input polarity
- Eliminate the need for a center-tapped transformer

The AC connections in the diagram are marked N (top) and S (bottom). We'll use the "positive to negative" convention of tracing current flow.



- When N is positive, current flows from `N` -> `D2` -> `DC+` -> `Load` -> `DC-` -> `D4` -> `S`
- When N is negative, current flows from `S` -> `D3` -> `DC+` -> `Load` -> `DC-` -> `D1` -> `N`


#### Center-tapped vs. Bridge Rectifier Designs

Each design has advantages and disadvantages:

Center-tapped transformer design:
- Uses fewer components (only two diodes)
- Only one diode voltage drop in the current path
- Requires a special center-tapped transformer
- Less efficient use of the transformer (each half of the secondary winding conducts only 50% of the time)

Bridge rectifier design:
- Works with a suitable transformer without needing a center tap
- More efficient use of transformer windings
- Requires four diodes instead of two
- Two diode voltage drops in series (higher loss)

#### Rectifier Voltage Drops

In practical circuits, the diode forward voltage drop affects the output. For a rough calculation, use about `0.7V` per conducting silicon junction diode; the actual drop depends on device, current and temperature. This means:
- In half-wave rectifiers: output is reduced by about 0.7V
- In center-tapped designs: output is reduced by about 0.7V
- In bridge rectifiers: output is reduced by about 1.4V (two diodes in series)

For high-power applications, this voltage drop represents wasted power and heat generation in the diodes.

Most amateur radio power supplies use full-wave rectification for its efficiency and easier filtering. Bridge rectifiers are the most common in modern designs because of their flexibility and the low cost of diodes.

#### Filtering: Smoothing the Pulses

Rectification alone produces pulsating DC—not the smooth, constant voltage our radio equipment needs. The next step is filtering, which smooths these pulses into steady DC.

> **Key Information:** Capacitors and inductors are used in a power supply filter network. {{< link id="G7A02" >}}

The most common filter configuration uses large electrolytic capacitors that charge during voltage peaks and discharge during valleys, filling in the gaps to create smoother DC. In filter circuits, inductors can resist current changes and further smooth the output.

Think of filter capacitors like water towers in a municipal water system. High pressure (voltage) refills the tower near each peak. Between peaks, the tower keeps the pressure up while the town draws water (current). The larger the capacitor, the more energy it can store and the smoother the output becomes.

![A graph compares rectified voltage with capacitor-filtered output over time. The unfiltered rectified voltage repeatedly rises to a peak and falls to zero. The filtered output rises with the first peak, then falls only gradually while the capacitor supplies current to the load. Each following peak recharges the capacitor. The result is a mostly steady positive voltage with small repeated drops between charging peaks; those remaining rises and falls are ripple.](../../../images/s2-3-supply-ripple.svg)
{.img-centered caption="Between charging peaks, the capacitor supplies the load. More load current discharges it faster."}

The small repeated rise and fall left in the filtered output is called **ripple**. Too much ripple can cause hum in your audio.

A **regulator** adjusts the supply’s operation to keep its output voltage close to the desired value as input voltage or load current changes. Filtering smooths the pulses; regulation controls the output level.

#### Safety: Bleeder Resistors

When you turn off a power supply, those large filter capacitors can retain dangerous charges for minutes or even hours. This creates a serious shock hazard for anyone working on the equipment.

> **Key Information:** A power supply bleeder resistor discharges the filter capacitors when power is removed. {{< link id="G7A01" >}}

Bleeder resistors are high-value resistors connected across the filter capacitors. They provide a discharge path that safely drains stored energy when the power supply is turned off. While they do consume a small amount of power during operation, the safety benefit far outweighs this minor inefficiency.

Never assume a power supply is safe just because it's unplugged! Those capacitors can deliver a painful or even dangerous shock. A bleeder can fail or be absent, so waiting alone does not prove the supply safe. Follow the equipment’s service procedure and have stored voltage checked before internal work. [Chapter 6]({{% pageref "chpt6" %}}) covers electrical hazards.

#### Modern Alternative: Switchmode Power Supplies

The transformer, rectifier, filter, and regulator we have followed make up a traditional **linear power supply**. These supplies work well but tend to be large and heavy due to their 60 Hz transformers and massive filter capacitors. Switchmode (switching) power supplies offer a more compact alternative.

> **Key Information:** High-frequency operation allows switchmode power supplies to use smaller components compared to linear power supplies. {{< link id="G7A08" >}}

Instead of transforming 60 Hz AC directly, a typical switchmode supply that runs from household AC and provides electrical isolation will:
1. Rectify the incoming AC to DC
2. Use high-speed switching transistors to create high-frequency AC
3. Transform this high-frequency AC to the desired voltage
4. Rectify and filter the output

Because transformers and filter components can be much smaller at higher frequencies, switchmode supplies achieve the same power output in a fraction of the size and weight. This is why switching supplies are common in radio stations despite their increased complexity.

The tradeoff? Switchmode supplies can generate RF interference due to their high-frequency switching. Good design and shielding minimize this issue, but it's something to consider when choosing between linear and switching supplies for your station.

---

Next, we'll explore digital circuits and see how modern radios use digital technology to enhance performance.