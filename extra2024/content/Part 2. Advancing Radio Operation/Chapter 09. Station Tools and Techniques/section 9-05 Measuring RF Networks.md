---
chapter: "9"
section: "9.5"
questions: ["E4A07", "E4A08", "E4B06", "E4B07", "E4B04", "E4B03", "E4B11", "E4B05", "E4B09", "E4A11"]
status: "generated1"
draft: true
---

### Section 9.5: Measuring RF Networks

An SWR reading tells you about a mismatch, but it does not tell you every detail of the load. Measuring impedance adds resistance and reactance. Measuring transmission through a device adds another view: how much signal gets through, and at which frequencies.

#### Power Going Each Way

A directional wattmeter separates forward and reflected power. At the measurement point, their difference is the net power flowing toward the load. For a meter placed at a terminating load, subtract the reflected reading from the forward reading:

$$P_{\text{absorbed}}=100\text{ W}-25\text{ W}=75\text{ W}.$$

> **Key Information:** A directional power meter reading 100 W forward and 25 W reflected indicates that the terminating load absorbs 75 W. {{< link id="E4B06" >}}

This is a power balance, not a rule that every reflected watt is lost as heat in the feed line. If a lossy line lies between the meter and the load, account for that loss before treating the result as power delivered to the antenna.

An antenna analyzer supplies its own small test signal and measures the response. That lets you sweep an unpowered antenna system and see where its impedance changes. It reports what the antenna does; it does not turn the tuning knobs or change the wire length for you.

> **Key Information:**
> - An antenna analyzer's advantage over an SWR bridge is that it computes SWR and impedance automatically. {{< link id="E4A07" >}}
> - A directional wattmeter, vector network analyzer, or antenna analyzer can measure SWR. {{< link id="E4A08" >}}

Low SWR alone does not prove resonance or good radiation efficiency. Use the impedance reading to see whether reactance is near zero, and remember the losses discussed in Chapter 6.

#### Two Ports, Two Different Questions

A vector network analyzer, or VNA, measures both magnitude and phase. Its test connections are called *ports*. For a two-port device such as a filter, call the input port 1 and the output port 2. Test diagrams often label that device DUT, for *device under test*.

The VNA describes traveling signals with scattering parameters, usually shortened to *S parameters*. *The first subscript says where the response is measured; the second says which port is driven.* *Thus $S_{21}$ reads “response at port 2 from a signal applied at port 1.”* Read the subscripts in that order even though the test signal travels from 1 to 2.

![A signal enters port 1 of a two-port device. The S11 arrow returns toward port 1, showing input reflection. The S21 arrow passes through the device to port 2, showing forward transmission. In both subscripts the final 1 identifies the driven port.](../../../images/s9-5-s-parameters.svg)
{.img-centered .img-xlarge caption="Drive port 1. Measure what returns there for S11, or what reaches port 2 for S21."}

> **Key Information:**
> - S-parameter subscripts represent the port or ports at which measurements are made. {{< link id="E4B07" >}}
> - $S_{11}$ represents the input-port reflection coefficient, from which input return loss and VSWR can be found. {{< link id="E4B04" >}}
> - $S_{21}$ is equivalent to forward gain. {{< link id="E4B03" >}}
> - A VNA can measure input impedance, output impedance, and reflection coefficient. {{< link id="E4B11" >}}

**Return loss** expresses the ratio of forward to reflected power in decibels: greater return loss means less reflection. **VSWR** stands for voltage standing-wave ratio—the SWR used earlier.

*For $S_{11}$, the VNA sends a signal into port 1 and measures what comes back there. For $S_{21}$, it measures what arrives at port 2.* Driving port 2 instead lets it check the output-port reflection, $S_{22}$, and the reverse path, $S_{12}$. These are different tests: a filter can have a well-matched input while allowing very little signal through outside its passband.

#### Calibrate Where You Connect

The analyzer also sees its cables and connectors. Calibration measures known standards so it can correct systematic errors and place the measurement reference at the intended connection point.

> **Key Information:** The three test loads used to calibrate an RF VNA are a short circuit, an open circuit, and a 50-ohm load. {{< link id="E4B05" >}}

The short reflects with one phase, the open with the opposite phase, and the matched load should produce very little reflection. Those known responses give the VNA a way to identify errors in its own measurement path. Connect the standards at the end of the test cable if that is where the device will attach. A full two-port calibration also uses a through connection between ports. Follow the instrument's procedure and keep the same cable arrangement after calibration.

Now connect a filter between ports 1 and 2 and sweep frequency. The $S_{21}$ plot shows the passband, loss within it, and rejection outside it.

> **Key Information:** A two-port VNA can measure filter frequency response. {{< link id="E4B09" >}}

For a suitable single-resonance response, you can also apply the earlier $Q=f_0/BW$ relationship. A response centered on 10 MHz with a 100 kHz bandwidth has $Q=10{,}000/100=100$, using kilohertz for both numbers. Identify the correct bandwidth points before calculating.

#### A Feed Line as a Test Object

The analyzer's sweep can reveal electrical length as well as impedance. An open or short at the far end of a cable produces a repeatable pattern as frequency changes. *If you know its physical length, that pattern can reveal velocity factor. If you know velocity factor, it can reveal length.* For a tuned circuit, look for the resonance behavior from Chapter 2: inductive and capacitive effects cancel, leaving a resistive impedance.

> **Key Information:** An antenna analyzer can measure velocity factor, cable length, and the resonant frequency of a tuned circuit. {{< link id="E4A11" >}}

These measurements depend on the analyzer's features and the chosen test arrangement. Disconnect transmitting equipment before connecting an analyzer; its small-signal measurement port is not a transmitter power input.
