---
chapter: "2"
section: "2.5"
questions: ["E5D01", "E5D08", "E5D02", "E5D04", "E5D05", "E5D06", "E5D07", "E5D10"]
status: generated1
draft: true
---

### Section 2.5: Real Components at RF

You buy an inductor for its inductance, but you get some capacitance and resistance with it at no extra charge. A capacitor brings unwanted inductance too. Our calculations need to account for these unwanted properties when they become large enough to affect the circuit. A correct value on the label does not guarantee the right behavior at RF.

#### Current Crowds Toward the Surface

A wire's DC resistance can underestimate the loss it causes at RF. DC uses the cross section fairly evenly, but *a higher-frequency magnetic field redistributes current toward the conductor's surface*. This is *skin effect*. *Less of the metal carries most of the current, so the effective resistance rises.*

> **Key Information:** Conductor skin effect increases resistance as frequency increases because RF current flows closer to the surface. {{< link id="E5D01" >}}

The same issue can affect the metal electrodes inside a capacitor. A thin insulating film separates the electrodes, but the current still has to travel through metal to charge them.

> **Key Information:** The exam identifies skin effect as the primary cause of loss in film capacitors at RF. {{< link id="E5D08" >}}

Actual loss depends on the capacitor's construction, dielectric, and operating frequency. Manufacturer loss and impedance curves describe a particular part more fully than its capacitance value does.

#### A Connection Is a Component

Even a straight lead has inductance. Since $X_L=2\pi fL$, a lead that contributes little reactance at audio frequencies can become troublesome at VHF. *Shortening it reduces that unwanted inductance.*

At microwave frequencies, a connection can also occupy a noticeable fraction of a wavelength. The signal takes time to travel along it, so its phase at one end differs from its phase at the other. Physical layout becomes part of the circuit.

> **Key Information:**
> - Short component leads at VHF and above minimize inductive reactance. {{< link id="E5D02" >}}
> - Short connections at microwave frequencies reduce phase shift along the connection. {{< link id="E5D04" >}}

Suppose a circuit works with short connections, then stops working when you spread the same parts across a breadboard. The schematic may still be correct. The extra wire has changed the circuit's inductance and, at sufficiently high frequencies, its phase relationships. At RF, the layout belongs in the troubleshooting process.

#### Unwanted Resonance

An inductor stops behaving as expected when its parasitic capacitance becomes significant. Adjacent turns are conductors separated by insulation and air, so they form small capacitors. *That capacitance acts with the winding's nominal, or specified, inductance to produce self-resonance.*

> **Key Information:**
> - Inter-turn capacitance creates an inductor's self-resonance. {{< link id="E5D06" >}}
> - A component's nominal reactance and parasitic reactance combine to create self-resonance. {{< link id="E5D07" >}}

Below its first self-resonant frequency, an ordinary inductor behaves mainly as an inductor. Above that resonance, its parasitic capacitance can dominate. The useful operating range therefore depends on more than the marked inductance.

Capacitors have the reverse problem. Their intended capacitance combines with unwanted series inductance. Beyond series self-resonance, that inductance can dominate. An RF bypass capacitor provides a path for unwanted RF current around part of a circuit, often to ground. Replacing it with a much larger capacitor may make the bypass worse: the larger marked value does not tell you its behavior at that frequency.

> **Key Information:** Parasitic inductance makes ordinary electrolytic capacitors unsuitable for use at RF. {{< link id="E5D05" >}}

An electrolytic can still store energy and smooth low-frequency supply ripple. A smaller capacitor designed for RF can handle the higher-frequency current nearby. The two components serve different frequency ranges.

#### Two Kinds of Length

Making an antenna element thicker can change its resonant behavior even if its physical length stays the same. Its *electrical length* depends on wavelength and phase, not just the ruler measurement. Inductance and capacitance occur all along the conductor; its shape, including diameter, affects both.

> **Key Information:** As a conductor's diameter increases, its electrical length increases. {{< link id="E5D10" >}}

A thicker antenna element may therefore need a shorter physical length for the same resonance. We will use that distinction again when discussing antennas in Chapter 6.

Resistance, reactance, and geometry now belong in the same picture. We can use them with the components from the previous chapter to follow a complete circuit: one that filters, amplifies, or generates a signal.
