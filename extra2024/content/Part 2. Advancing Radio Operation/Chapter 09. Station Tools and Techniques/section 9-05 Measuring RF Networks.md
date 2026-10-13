---
chapter: "9"
section: "9.5"
questions: ["E4B06", "E4A07", "E4B07", "E4B04", "E4B03", "E4B11", "E4A08", "E4B05", "E4B09", "E4A11"]
status: "generated1"
---

### Section 9.5: Measuring RF Networks

An SWR meter answers one question about a feed line: how well does the load match it? Other instruments answer it too. They differ in what else they reveal: the power reaching the load, the load's resistance and reactance, or how much signal passes through a device at each frequency.

#### Power Going Each Way

A directional wattmeter reads the power traveling toward the load and the power reflected back. Their ratio sets the SWR, and their difference is the net power flowing toward the load at the measurement point. For a meter placed at a terminating load, subtract the reflected reading from the forward reading:

$$P_{\text{absorbed}}=100\text{ W}-25\text{ W}=75\text{ W}.$$

> **Key Information:** A directional power meter reading 100 W forward and 25 W reflected indicates that the terminating load absorbs 75 W. {{< link id="E4B06" >}}

If a lossy line lies between the meter and the load, account for that loss before treating the result as power delivered to the antenna.

A simple **SWR bridge** is the circuit inside a basic SWR meter. It compares forward and reflected signals and shows only the mismatch. On many basic meters, you first set the forward reading to full scale, then switch to reflected to read the SWR. An antenna analyzer sweeps the antenna system with its own small test signal and shows resistance and reactance as well.

> **Key Information:** An antenna analyzer's advantage over an SWR bridge is that it computes SWR and impedance automatically. {{< link id="E4A07" >}}

You still choose the wire length or tuning setting, but the readings show what each adjustment changed. Low SWR alone does not prove resonance or good radiation efficiency. Use the impedance reading to see whether reactance is near zero, and remember the losses discussed in Chapter 6.

#### Two Ports, Two Different Questions

An antenna has one connection to measure, but a filter has two. Its input match tells you how much signal it reflects, not how much gets through. The rest either passes through or is lost inside the filter. A **vector network analyzer**, or VNA, measures at both test connections, called **ports**. It measures phase as well as magnitude, hence the “vector” in its name. Connect the filter's input to port 1 and output to port 2. The filter is the DUT, or **device under test**.

The VNA describes traveling signals with scattering parameters, usually shortened to **S parameters**. The first subscript says where the VNA measures the response; the second says which port it drives. Thus $S_{21}$ reads “response at port 2 from a signal applied at port 1.” Read the subscripts in that order even though the test signal travels from 1 to 2.

![A signal enters port 1 of a two-port device. The S11 arrow returns toward port 1, showing input reflection. The S21 arrow passes through the device to port 2, showing forward transmission. In both subscripts the final 1 identifies the driven port.](../../../images/s9-5-s-parameters.svg)
{.img-centered .img-xlarge caption="Drive port 1. Measure what returns there for S11, or what reaches port 2 for S21."}

What returns to port 1, compared with what left it, is the reflection coefficient $\Gamma$ from Section 6.3, phase included. Driving port 2 instead gives the output-port reflection, $S_{22}$, and the reverse path, $S_{12}$. At either port, a reflection's size and phase together reveal the resistance and reactance that produced it.

For the input match, **return loss** expresses the forward-to-reflected power ratio in decibels: a larger positive value means less reflection. VSWR is the voltage standing-wave ratio. Both describe reflection, whereas forward gain describes transmission.

> **Key Information:**
> - S-parameter subscripts represent the port or ports at which measurements are made. {{< link id="E4B07" >}}
> - $S_{11}$ represents the input-port reflection coefficient, from which input return loss and VSWR can be found. {{< link id="E4B04" >}}
> - $S_{21}$ is equivalent to forward gain. {{< link id="E4B03" >}}
> - A VNA can measure input impedance, output impedance, and reflection coefficient. {{< link id="E4B11" >}}
> - A directional wattmeter, vector network analyzer, or antenna analyzer can measure SWR. {{< link id="E4A08" >}}

#### Calibrate, Then Sweep

The cables and connectors between the VNA and the filter add their own response. Calibrating at the point where the filter connects lets the analyzer remove those errors instead of blaming them on the filter. Calibration uses standards with known reflections. A short reflects with one phase, an open with the opposite phase, and a matched load reflects almost nothing.

> **Key Information:** The three test loads used to calibrate an RF VNA are a short circuit, an open circuit, and a 50-ohm load. {{< link id="E4B05" >}}

Connect the standards at the end of the test cable if that is where the device will attach. A full two-port calibration also uses a through connection between ports. Follow the instrument's procedure and keep the same cable arrangement after calibration.

Now connect a filter between ports 1 and 2 and sweep frequency. The $S_{21}$ plot shows the passband, loss within it, and rejection outside it. The $S_{11}$ plot shows the match across the passband. Outside the passband, $S_{11}$ climbs toward full reflection, because a typical filter rejects a signal mostly by reflecting it back toward the source.

> **Key Information:** A two-port VNA can measure filter frequency response. {{< link id="E4B09" >}}

For a suitable single-resonance response, you can also apply the $Q=f_0/\mathrm{BW}$ relationship from Section 2.4. A response centered on 10 MHz with 100 kHz between its half-power points, 3 dB below the peak, has $Q=10{,}000/100=100$, using kilohertz for both numbers.

#### A Feed Line as a Test Object

An antenna analyzer's sweep can reveal a cable's electrical length as well as its impedance. A shorted cable looks like an open circuit at the frequency where it is an electrical quarter wavelength long, as Section 6.3 showed. Suppose a shorted 10 m cable looks open at 4.95 MHz. A free-space quarter wave there is $300/(4\times4.95)\approx15.2$ m, so the velocity factor is $10/15.2\approx0.66$. With the velocity factor known instead, the same measurement gives the length. For a tuned circuit, look for the resonance behavior from Chapter 2: inductive and capacitive effects cancel, leaving a resistive impedance.

> **Key Information:** An antenna analyzer can measure velocity factor, cable length, and the resonant frequency of a tuned circuit. {{< link id="E4A11" >}}

Disconnect the transmitter before connecting an analyzer. Its measurement port is built for a small test signal, not transmitter power. Key up into it by mistake, and it may never measure anything again.
