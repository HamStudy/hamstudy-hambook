---
chapter: "3"
section: "3.5"
questions: ["E6D01", "E6D03", "E6D02", "E7H01", "E7H04", "E7H05", "E7H12", "E7H02", "E7H07", "E7H08", "E7H13", "E7H03", "E7H06"]
status: generated1
draft: true
---

### Section 3.5: Oscillators and Phase Locking

A useful oscillator must do more than keep oscillating. It needs to hold its chosen frequency despite temperature changes, vibration, and the circuits connected to it. The resonator and feedback arrangement set that behavior; a stable reference can help correct drift.

#### Quartz Resonance

For sharp frequency selection, a quartz crystal provides a very high-Q resonance. Its mechanical vibration interacts with the electrical signal through *piezoelectricity: applied voltage deforms the crystal slightly, and deforming the crystal produces voltage.*

> **Key Information:** Piezoelectric materials generate voltage when stressed and flex when voltage is applied. Mechanical deformation caused by an applied voltage is one aspect of the piezoelectric effect. {{< link id="E6D01" >}} {{< link id="E6D03" >}}

The quartz really does vibrate; it is not merely holding a fixed electrical charge. A cut piece has mechanical resonances determined largely by its dimensions and cut. Electrodes couple the circuit to those vibrations. Because little energy is lost per cycle, the resonance can have a very high Q.

To predict how the surrounding circuit affects that resonance, we model the crystal's mechanical motion with electrical components. *A series inductance and capacitance represent energy moving between two forms; a series resistance represents loss. The electrodes and other stray capacitance add a parallel path.*

> **Key Information:** A quartz crystal's equivalent circuit is a series RLC branch in parallel with a shunt capacitance representing electrode and stray capacitance. {{< link id="E6D02" >}}

![A quartz crystal symbol at left is followed by an equivalence sign and a two-terminal electrical model at right. The model splits into two parallel branches. Its upper branch passes through R, L, and C in series. Its lower branch passes through C zero alone. Both branches visibly join the same input and output nodes. R represents loss, L and C model the crystal vibration, and C zero represents electrode and stray capacitance. The inductor is part of the model, not a physical coil inside the crystal.](../../../images/s3-5-quartz-model.svg)
{.img-centered .img-med .img-mobile-full caption="Equivalent circuit: R represents loss; L and C model vibration; C₀ represents electrode and stray capacitance. The model does not imply a physical coil inside the crystal."}

This equivalent circuit describes electrical behavior; it does not mean someone has hidden a wire coil inside the crystal package. Its series and parallel resonances explain why the surrounding circuit affects the operating frequency.

#### Returning the Signal in Phase

For oscillation to grow, the feedback signal must reinforce the signal already circulating around the loop. The total phase shift around the loop is a whole number of cycles at the desired frequency, and the initial loop gain must overcome losses. As amplitude grows, circuit behavior limits it to a steady value.

> **Key Information:** Colpitts, Hartley, and Pierce are three common oscillator circuits. {{< link id="E7H01" >}}

Their names identify different ways to arrange the resonator and feedback. A Hartley oscillator uses a tapped inductance or inductive divider. *A Colpitts uses a pair of capacitors as a divider.* *A Pierce oscillator places a quartz crystal in its feedback path.*

> **Key Information:**
> - A Colpitts oscillator supplies positive feedback through a capacitive divider. {{< link id="E7H04" >}}
> - A Pierce oscillator supplies positive feedback through a quartz crystal. {{< link id="E7H05" >}}

The frequency marked on a crystal assumes a particular circuit load. *A crystal specified for a particular load capacitance reaches its rated frequency when the oscillator presents that effective capacitance.* Board and device capacitances contribute along with the intended capacitors.

> **Key Information:** Providing a crystal with its specified parallel capacitance ensures operation at the frequency specified by the manufacturer. {{< link id="E7H12" >}}

“Parallel capacitance” here is the effective capacitive load seen by the crystal. Two capacitors from its terminals to ground may contribute as a series combination, so adding their marked values would give the wrong load. For example, two equal 20 pF capacitors contribute 10 pF in series, before stray capacitance is counted. The number printed on the crystal specification describes the effective load the whole circuit must provide.

#### Keeping Frequency Steady

A resonator can respond to movement of the radio's enclosure as well as to its electrical controls. *Vibration changes physical dimensions or stray capacitance and may move the frequency. In oscillator work, that unwanted response is called a microphonic.* A bump to the case can become a change in the signal.

> **Key Information:**
> - A microphonic is a change in oscillator frequency caused by mechanical vibration. {{< link id="E7H02" >}}
> - Mechanically isolating oscillator circuitry from its enclosure reduces microphonic response. {{< link id="E7H07" >}}

Thermal drift has a different cause. Temperature changes component values and the crystal's mechanical properties. Stable components reduce the circuit's contribution to that movement.

> **Key Information:** NP0 capacitors can reduce thermal drift in crystal oscillators. {{< link id="E7H08" >}}

NP0, also commonly written C0G/NP0, identifies a ceramic capacitor dielectric with a very small temperature coefficient. It helps keep the oscillator's capacitive loading steady; it does not remove every source of crystal drift.

At higher operating frequencies, the same percentage of drift moves the signal through more hertz. Microwave systems may compare a local oscillator with a stable reference or control the resonator's temperature directly to hold it more closely.

> **Key Information:** Techniques for highly accurate and stable microwave oscillators include a GPS signal reference, a rubidium-stabilized reference oscillator, and a temperature-controlled high-Q dielectric resonator. {{< link id="E7H13" >}}

GPS can provide a timing reference used to correct a local oscillator. A rubidium reference uses an atomic transition to stabilize frequency. A dielectric resonator stores microwave energy in a low-loss insulating material; high Q and temperature control help hold its frequency steady. They all pursue the same practical goal: keeping the signal where you put it, even when the ordinary circuit parts would drift.

#### Locking to a Reference

A stable reference can correct a tunable oscillator instead of fixing the radio to one frequency. A *voltage-controlled oscillator*, or VCO, provides the adjustment: changing its control voltage changes its frequency. A phase-comparison circuit supplies the correction.

In a *phase-locked loop*, or PLL, a phase detector compares the reference signal with a signal derived from the VCO output. A low-pass filter smooths the detector's correction signal. That voltage adjusts the VCO, reducing the phase error. *The loop is a servo*: a control system that continually corrects a difference between desired and actual behavior.

> **Key Information:** A PLL is an electronic servo loop consisting of a phase detector, a low-pass filter, a voltage-controlled oscillator, and a stable reference oscillator. {{< link id="E7H03" >}}

*A divider in the feedback path makes frequency synthesis possible: generating a chosen frequency from a stable reference.* Suppose a 1 MHz reference is compared with the VCO output divided by 100. The loop brings the divided signal to 1 MHz, so the VCO runs at 100 MHz.

![A phase-locked loop compares a stable 1 MHz reference oscillator with feedback from its output. The reference enters a phase detector, followed by a low-pass loop filter and a voltage-controlled oscillator. The VCO produces 100 MHz. A branch of that output passes through a divide-by-100 block and returns 1 MHz to the phase detector, closing the loop. The filter's control voltage adjusts the VCO to maintain lock.](../../../images/s3-5-pll.svg)
{.img-centered .img-xlarge caption="A synthesizer PLL in lock: 100 MHz divided by 100 matches the 1 MHz reference. LPF is the low-pass loop filter; V is its control voltage."}

Follow the return path: the detector compares two 1 MHz signals, even though the useful output is 100 MHz. If the VCO drifts, the comparison changes and the loop corrects it. Changing the division ratio selects another related output frequency without requiring a separate reference crystal for each one.

*A loop can also follow a received FM signal within its tracking range.* As the carrier frequency changes, the loop adjusts its VCO to follow. *The resulting correction voltage recovers the modulation.*

> **Key Information:** A phase-locked loop can perform frequency synthesis and FM demodulation. {{< link id="E7H06" >}}

Frequency generation, amplification, and filtering give us the main circuit tools. The next chapter uses them to put information onto signals and recover it.
