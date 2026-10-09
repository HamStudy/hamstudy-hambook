---
chapter: "3"
section: "3.2"
questions: ["E7B12", "E7B10", "E7B11", "E7B04", "E7B01", "E7B09", "E7B06", "E7B07", "E7B02", "E7B08", "E7B03", "E7B05"]
status: generated1
draft: true
---

### Section 3.2: Amplifier Circuits

An amplifier uses a small signal to control power from a DC supply. To reproduce the signal faithfully, the active device needs room to move in both directions. Its bias sets that starting point; its circuit arrangement determines where the input and output connect.

#### Reading a Transistor Stage

In Figure E7-1, the signal enters the transistor's base through C1. The amplified signal leaves the collector through C2. *C3 bypasses the emitter to ground at signal frequencies, so the emitter is the terminal shared by the input and output circuits.*

![Official Figure E7-1 shows a common-emitter transistor amplifier. C1 couples the input to the base and C2 couples the collector to the output. R1 runs from the positive supply to the base, and R2 from the base to ground, forming a bias divider. R3 connects the emitter to ground for self bias; C3 bypasses the emitter at signal frequencies.](../../../hugo/static/figures/E7-1.svg)
{.img-centered .img-xlarge .img-bw caption="Figure E7-1: The resistors set DC bias while the capacitors route AC."}

> **Key Information:**
> - Figure E7-1 is a common-emitter amplifier. {{< link id="E7B12" >}}
> - R1 and R2 provide voltage-divider bias. {{< link id="E7B10" >}}
> - R3 provides self bias. {{< link id="E7B11" >}}

*Even with no input signal, R1 and R2 establish a DC voltage at the base by dividing the supply voltage.* That gives the transistor its starting operating point.

R3 then helps stabilize the resting current. If emitter current rises, the voltage across R3 rises. That reduces base-to-emitter voltage for a given base voltage, opposing the increase. C3 allows signal-frequency current to bypass much of that resistance while preserving its DC effect.

*Feedback* returns part of a circuit's output or response to its input. Negative feedback opposes a change, as R3 does for the bias current. Positive feedback reinforces a change. The sign describes the effect around the complete path, including any phase shifts.

In a common-emitter stage, increased collector current creates a larger drop across the collector resistor, pulling collector voltage down. The voltage signal is therefore inverted.

An *emitter follower*, also called a common-collector amplifier, takes its output from the emitter instead. Its voltage gain is near one, but it can provide current gain and isolate a signal source from a load. A gain of one is useful when the source already has enough voltage but cannot supply the current the load needs. *The emitter follows the base's voltage changes without reversing them.*

> **Key Information:** An emitter follower's input and output signals are in phase. {{< link id="E7B09" >}}

Vacuum-tube stages use related arrangements. A tube has a cathode that supplies electrons, a grid that controls their flow, and a plate that collects them. In a grounded-grid amplifier, the grid is at RF ground, the cathode receives the input, and the plate supplies the output. Moving the cathode voltage changes its voltage relative to the fixed grid, controlling electron flow. *The driving stage must supply RF current through the cathode circuit, so it faces a relatively low input impedance.*

> **Key Information:** A grounded-grid amplifier has low input impedance. {{< link id="E7B06" >}}

#### Conduction Angle

Amplifier *class* describes how the active device conducts during a signal cycle. In Class A, it conducts for all 360 degrees. Its resting operating point leaves room for the signal to rise and fall without reaching cutoff, where conduction stops, or saturation, where the transistor can no longer increase its output swing normally.

> **Key Information:** A Class A common-emitter amplifier operates approximately halfway between saturation and cutoff. {{< link id="E7B04" >}}

A push-pull amplifier uses two active elements to handle opposite portions of the waveform. In Class B, each conducts for half a cycle. Class AB adds some overlap to reduce distortion where their contributions meet. *Neither device has to handle the whole cycle, but each stays on a little beyond its own half.* That avoids an abrupt handoff at the crossing.

> **Key Information:** Each active element in a push-pull Class AB amplifier conducts for more than 180 degrees but less than 360 degrees of the signal cycle. {{< link id="E7B01" >}}

Class C conducts for less than half a cycle. A tuned output circuit can build a sine wave from those current pulses, making Class C useful for suitable constant-envelope RF signals. A single-sideband, or SSB, phone signal has a changing *amplitude envelope*: the outline of its RF peaks rises and falls with speech. *Ordinary Class C amplification does not preserve that envelope.*

> **Key Information:** Using a Class C amplifier to amplify an SSB phone signal causes signal distortion and excessive bandwidth. {{< link id="E7B07" >}}

“Linear” amplification means the output follows the input's changing amplitude in proportion, within the circuit's limits. Class A and properly operated Class AB stages can provide that behavior.

#### Switching for Efficiency

An active device dissipates power when voltage across it and current through it exist at the same time. A switch avoids much of that overlap: when off, current is small; when fully on, the voltage drop is small. Most of the time, one factor in $P=VI$ is small. Real switching transitions still cause some loss.

> **Key Information:**
> - A Class D amplifier uses switching technology to achieve high efficiency. {{< link id="E7B02" >}}
> - Switching amplifiers are more efficient because their switching devices spend most of the time at saturation or cutoff. {{< link id="E7B08" >}}

For a MOSFET, the low-loss on state is often called its ohmic region; the exam's “saturation or cutoff” wording describes the general fully-on/fully-off switching model. Do not confuse that wording with the different technical meaning of MOSFET saturation.

*The switching waveform contains harmonics. Filtering selects the wanted output and removes unwanted frequency components.*

> **Key Information:** An RF switching amplifier requires an output filter to remove harmonic content. {{< link id="E7B03" >}}

#### Stopping an Accidental Oscillator

An amplifier's output can find an unintended route back to its input through capacitance, wiring, or magnetic coupling. If that return reinforces the input with enough gain, the circuit can oscillate even without an applied signal.

> **Key Information:** Parasitic suppressors and/or neutralization can prevent unwanted oscillations in an RF power amplifier. {{< link id="E7B05" >}}

A suppressor damps an unwanted resonant path; ferrite beads from Chapter 1 are one example. *Neutralization* supplies a carefully chosen opposing feedback signal to cancel unwanted feedback. An amplifier that produces RF without being driven has started a second job you did not ask it to do. *Suppression and neutralization remove the feedback conditions that let it keep doing that job.*
