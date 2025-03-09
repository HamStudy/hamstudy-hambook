---
slug: "section1.5"
questions: ["G5B01", "G5B02", "G5B03", "G5B04", "G5B05", "G5B06", "G5B07", "G5B08", "G5B09", "G5B10", "G5B11", "G5B12", "G5B13", "G5B14", "G9A06", "G9C04"]
---

### Section 1.5: Power and Measurements

With your General class license, you'll be working with a wider range of power levels and measurement concepts. You might upgrade to higher power amplifiers, work with more sophisticated antennas, or venture into weak signal modes. In all these situations, understanding power calculations and related measurements becomes increasingly important.

#### Decibels: The Radio Operator's Yardstick

When comparing power levels or signal strengths, radio operators often use decibels (dB) rather than direct power ratios. Why? Because decibels make large ratios more manageable and allow us to add or subtract changes rather than multiplying or dividing.

> **Key Information:** *A change of approximately 3 dB represents a factor of two increase or decrease in power.* {{< link id="G5B01" >}}

The decibel is a logarithmic unit that expresses the ratio between two values:

$$dB = 10 \log_{10}\left(\frac{P_2}{P_1}\right)$$

Where:
- $P_1$ is the reference power level
- $P_2$ is the power level being compared

Here are some important dB values to remember:

| dB Change | Power Ratio |
|-----------|-------------|
| +3 dB     | 2× increase |
| -3 dB     | 0.5× decrease (half power) |
| +10 dB    | 10× increase |
| -10 dB    | 0.1× decrease (one-tenth power) |
| +20 dB    | 100× increase |
| -20 dB    | 0.01× decrease (one-hundredth power) |

Understanding percentage changes in power is also important:

> **Key Information:** *A loss of 1 dB represents a power loss of approximately 20.6 percent.* {{< link id="G5B10" >}}

This comes from the formula:
$$Percentage = (1 - 10^{-dB/10}) \times 100\%$$

For a 1 dB loss:
$$Percentage = (1 - 10^{-1/10}) \times 100\% = (1 - 0.794) \times 100\% = 20.6\%$$

#### Antenna Gain in dBi vs. dBd

When evaluating antenna performance, you'll encounter two common reference points:

> **Key Information:** *Antenna gain expressed in dBi is 2.15 dB higher than the same gain expressed in dBd.* {{< link id="G9C04" >}}

- **dBi** compares the antenna to an isotropic radiator (a theoretical point source that radiates equally in all directions)
- **dBd** compares the antenna to a half-wave dipole

Since a half-wave dipole has approximately 2.15 dB gain over an isotropic radiator, there's a 2.15 dB difference between the two measurements. For example, an antenna with 7 dBd gain has approximately 9.15 dBi gain.

#### RF Cable Loss

When working with HF and especially VHF/UHF frequencies, understanding transmission line loss becomes crucial:

> **Key Information:** *RF feed line loss is usually expressed in decibels per 100 feet.* {{< link id="G9A06" >}}

Manufacturers typically specify coaxial cable loss in dB per 100 feet (or per 100 meters) at various frequencies. For example, LMR-400 coax might have a loss of:
- 0.7 dB/100 ft at 10 MHz
- 1.5 dB/100 ft at 100 MHz
- 2.7 dB/100 ft at 400 MHz

This tells you that higher frequencies experience greater loss in the same length of cable—one reason why VHF/UHF installations often use higher-quality feed lines than HF setups.

#### Basic Power Calculations

Let's revisit the power calculation we covered in the Technician HamBook, as it forms the foundation for our more advanced work:

$$P = E \times I$$

Where:
- $P$ is power in watts (W)
- $E$ is voltage in volts (V)
- $I$ is current in amperes (A)

Let's work through some examples that might appear on the exam:

##### Example 1: DC Power Calculation
> **Key Information:** *400 VDC supplied to an 800-ohm load consumes 200 watts of electrical power.* {{< link id="G5B03" >}}

Using Ohm's Law, we first find current:
$$I = \frac{E}{R} = \frac{400V}{800\Omega} = 0.5A$$

Then we calculate power:
$$P = E \times I = 400V \times 0.5A = 200W$$

##### Example 2: Another DC Power Calculation
> **Key Information:** *A 12 VDC light bulb that draws 0.2 amperes consumes 2.4 watts of electrical power.* {{< link id="G5B04" >}}

$$P = E \times I = 12V \times 0.2A = 2.4W$$

##### Example 3: Milliamp Range Calculation
> **Key Information:** *A current of 7.0 milliamperes flowing through a 1,250-ohm resistance consumes approximately 61 milliwatts.* {{< link id="G5B05" >}}

We can use either $P = E \times I$ or $P = I^2 \times R$:

Using $P = I^2 \times R$:
$$P = (0.007A)^2 \times 1250\Omega = 0.000049 \times 1250 = 0.06125W = 61.25mW$$

#### RMS Measurements and AC Power

In AC circuits, we typically measure effective or RMS (Root Mean Square) values rather than peak values:

> **Key Information:** *The RMS value of an AC signal produces the same power dissipation in a resistor as a DC voltage of the same value.* {{< link id="G5B07" >}}

This is why household electricity is specified as 120 volts RMS rather than its peak value of about 170 volts.

The relationships between different AC voltage measurements are:

| Measure | Relationship to RMS |
|---------|---------------------|
| RMS     | $V_{RMS}$ (reference) |
| Peak    | $V_{peak} = V_{RMS} \times \sqrt{2} \approx V_{RMS} \times 1.414$ |
| Peak-to-Peak | $V_{p-p} = 2 \times V_{peak} = 2 \times V_{RMS} \times \sqrt{2} \approx V_{RMS} \times 2.828$ |

Let's solve some example problems:

##### Example 4: Peak-to-Peak from RMS
> **Key Information:** *The peak-to-peak voltage of a sine wave with an RMS voltage of 120 volts is 339.4 volts.* {{< link id="G5B08" >}}

$$V_{p-p} = V_{RMS} \times 2 \times \sqrt{2} = 120V \times 2.828 = 339.36V \approx 339.4V$$

##### Example 5: RMS from Peak
> **Key Information:** *The RMS voltage of a sine wave with a value of 17 volts peak is approximately 12 volts.* {{< link id="G5B09" >}}

$$V_{RMS} = \frac{V_{peak}}{\sqrt{2}} = \frac{17V}{1.414} = 12.02V \approx 12V$$

#### PEP: Peak Envelope Power

For amateur radio transmitters, especially those using voice modes like SSB, we often measure output in terms of Peak Envelope Power (PEP):

> **Key Information:** *PEP is the maximum power an SSB transmitter outputs during peak voice modulation.*

For an unmodulated carrier (like a steady CW signal):

> **Key Information:** *The ratio of PEP to average power for an unmodulated carrier is 1.00.* {{< link id="G5B11" >}}

With no modulation, peak power equals average power. This changes during modulation, especially with voice.

Let's calculate some PEP values:

##### Example 6: PEP from Peak-to-Peak Voltage
> **Key Information:** *The PEP produced by 200 volts peak-to-peak across a 50-ohm dummy load is 100 watts.* {{< link id="G5B06" >}}

First, convert peak-to-peak to peak:
$$V_{peak} = \frac{V_{p-p}}{2} = \frac{200V}{2} = 100V$$

Then calculate peak power:
$$PEP = \frac{V_{peak}^2}{R} = \frac{(100V)^2}{50\Omega} = \frac{10,000}{50} = 200W$$

Actually, for a sinusoidal RF waveform, the PEP is calculated using peak voltage:
$$PEP = \frac{V_{peak}^2}{2R}$$

But since we're working with RF and peak-to-peak values, we use:
$$PEP = \frac{(V_{p-p})^2}{8R} = \frac{(200V)^2}{8 \times 50\Omega} = \frac{40,000}{400} = 100W$$

##### Example 7: RMS Voltage from Power
> **Key Information:** *The RMS voltage across a 50-ohm dummy load dissipating 1200 watts is 245 volts.* {{< link id="G5B12" >}}

Using the power formula:
$$P = \frac{V_{RMS}^2}{R}$$

Solving for $V_{RMS}$:
$$V_{RMS} = \sqrt{P \times R} = \sqrt{1200W \times 50\Omega} = \sqrt{60,000} = 244.95V \approx 245V$$

##### Example 8: Unmodulated Carrier PEP
> **Key Information:** *The output PEP of an unmodulated carrier with 1060 watts average power is 1060 watts.* {{< link id="G5B13" >}}

For an unmodulated carrier, PEP equals average power, so:
$$PEP = P_{avg} = 1060W$$

##### Example 9: PEP from Peak-to-Peak
> **Key Information:** *The output PEP of 500 volts peak-to-peak across a 50-ohm load is 625 watts.* {{< link id="G5B14" >}}

Using the formula for PEP from peak-to-peak voltage:
$$PEP = \frac{V_{peak}^2}{R} = \frac{(V_{p-p}/2)^2}{R} = \frac{(500V/2)^2}{50\Omega} = \frac{(250V)^2}{50\Omega} = \frac{62,500}{50} = 625W$$

#### Current Dividers and Parallel Circuits

When working with parallel circuits, understanding current division becomes important:

> **Key Information:** *In a circuit of parallel resistors, the total current equals the sum of the currents through each branch.* {{< link id="G5B02" >}}

This follows from Kirchhoff's Current Law, which states that the sum of currents entering a node equals the sum of currents leaving the node. In a parallel circuit, the total current divides among the branches according to the conductance (1/R) of each branch.

#### Practical Applications in Your Station

Understanding these power and measurement concepts helps you in many aspects of amateur radio:

1. **Power Supply Requirements**: Calculate the power needs of your station components.

2. **Amplifier Considerations**: Determine if your power supply can handle the current requirements of an amplifier.

3. **Feed Line Selection**: Choose appropriate coaxial cable based on frequency and acceptable loss.

4. **Antenna Performance**: Compare antennas using dB gain figures.

5. **Transmitter Output**: Understand the difference between average power and PEP when operating different modes.

6. **Signal Reports**: Better interpret S-meter readings and signal comparisons.

7. **Station Efficiency**: Identify where power is being lost in your system.

#### Test Equipment for Power and Signal Measurement

As a General class operator, you might invest in test equipment that helps you measure these parameters:

1. **Digital Multimeter (DMM)**: Measures voltage, current, and resistance
2. **RF Power Meter**: Measures transmitter output power
3. **Antenna Analyzer**: Measures impedance and SWR
4. **Oscilloscope**: Visualizes waveforms and measures voltage
5. **Spectrum Analyzer**: Shows signal strength across a range of frequencies

#### Power and Measurements in Practice

Let's look at a practical scenario: You've upgraded to General and want to add a 500-watt amplifier to your station. How do you determine if your power supply is adequate?

1. Calculate the current needed: $I = \frac{P}{E} = \frac{500W}{13.8V} \approx 36.2A$
2. Add 20% margin for efficiency and other station components: $36.2A \times 1.2 \approx 43.5A$
3. Check if your power supply can deliver at least 43.5A continuously

This application of power calculations helps you make informed decisions about station equipment.

#### Measuring Your Success

Power and measurement concepts are fundamental to understanding how your amateur radio station works:
- Decibels provide a convenient way to express power ratios and signal changes
- RMS measurements give us effective values for AC signals
- Peak Envelope Power (PEP) helps us describe transmitter output during modulation
- Feed line loss expressed in dB helps us choose appropriate transmission lines
- Antenna gain measurements in dBi or dBd help us compare antenna performance

As you explore new bands and modes with your General privileges, these concepts will help you optimize your station's performance and troubleshoot issues that arise. Whether you're trying to reach a DX station or set up a reliable regional net, understanding power and measurements is key to your success.

With our electrical foundation firmly established, let's now turn our attention to the components that put these principles into action. In Chapter 2, we'll explore the building blocks that make up your radio equipment!
