---
chapter: "1"
section: "1.3"
questions: ["E6F04", "E6F01", "E6F09", "E6F10", "E6F11", "E6F02", "E6F06", "E6F03", "E6F08", "E6F07", "E6F05"]
status: generated1
draft: true
---

### Section 1.3: Light and Electricity

The previous section used a small electrical signal to control a larger current. Light can affect semiconductor current too. That opens up other jobs: supplying power from sunlight, sensing movement, and sending a control signal across insulation.

#### Making Electricity from Light

Getting useful power from a solar cell requires both freeing charge carriers and separating them. In the *photovoltaic effect, light supplies the energy for this electrical output*. Each *photon*, or packet of light energy, can *transfer energy to an electron in the semiconductor*. If the electron gains enough energy, it can contribute to conduction and leave a hole behind. The cell's internal electric field separates those carriers so they can deliver energy to an external circuit.

> **Key Information:**
> - The photovoltaic effect is the conversion of light to electrical energy. {{< link id="E6F04" >}}
> - Electrons absorb the energy from light falling on a photovoltaic cell. {{< link id="E6F01" >}}
> - Silicon is the most common material used in power-generating photovoltaic cells. {{< link id="E6F10" >}}

The light reaching a panel sets an upper limit on the power it can supply. Some light reflects off the cells, some passes through, and some absorbed energy becomes heat. Only part becomes useful electrical output. A cell's *efficiency* tells us how large that part is.

> **Key Information:** Photovoltaic-cell efficiency describes the relative fraction of light converted to electrical output, stated in the question pool as “the relative fraction of light that is converted to current.” {{< link id="E6F09" >}}

*Energy-conversion efficiency is electrical output power divided by incident light power.* If 1 W of light falls on a cell and it delivers 0.2 W to a load, efficiency is $0.2/1=20\%$. Current alone does not tell us the power; we need voltage too.

Cell voltage matters when arranging a panel's series connections. For a loaded panel, distinguish the cell's operating voltage from its open-circuit reading.

> **Key Information:** The exam's approximate open-circuit voltage for a fully illuminated silicon photovoltaic cell is 0.5 volts. {{< link id="E6F11" >}}

Actual voltage varies with cell design, illumination, and temperature; *0.5 V is the pool's approximation, not a universal maximum.* Under load, both voltage and current determine the power available to the station.

#### Detecting Light with Resistance

We don't always need light to supply power. Sometimes a powered circuit only needs to measure how much light is present. A *photoconductive* material provides a changing resistance that the circuit can sense. Incoming photons create additional mobile carriers; *more carriers let more current flow for a given applied voltage, so resistance falls.*

> **Key Information:**
> - A photoconductive material's resistance decreases when light shines on it. {{< link id="E6F02" >}}
> - Crystalline semiconductor is the material commonly used to make photoconductive devices. {{< link id="E6F06" >}}

Connect this light-sensitive resistor to a powered circuit and the resistance reports the light level. The circuit supplies the electrical energy, unlike a photovoltaic cell serving as the source. For a stronger response, a *phototransistor* lets light control transistor current. The resulting current change is larger than the initial light-generated current alone.

#### Passing a Signal Across Insulation

A low-voltage controller may need to switch a 120 VAC circuit while keeping the two electrically separate. We can send the instruction as light, letting it cross insulation without a shared signal wire.

An *optoisolator*, also called an *optocoupler*, places an LED and a light-sensitive device in one package. Driving the LED makes light, and the detector responds on the other side. *A transparent insulating barrier lets the light pass without a direct conducting path between circuits.*

> **Key Information:**
> - The most common optoisolator configuration is an LED and a phototransistor. {{< link id="E6F03" >}}
> - In circuits controlling 120 VAC, optoisolators provide electrical isolation between the control circuit and the circuit being switched. {{< link id="E6F08" >}}

The controller provides the instruction; the receiving side supplies the energy to act on it. The component's insulation rating and the surrounding construction must suit the voltage involved. Optical signaling alone does not establish the rating of a complete assembly.

The circuit still needs a switch that can carry the load current. *A solid-state relay uses semiconductor switches to do the switching job of a mechanical relay.* Many include optical input isolation, though their output stage may use devices other than a phototransistor to carry the load current.

> **Key Information:** A solid-state relay uses semiconductors to implement the functions of an electromechanical relay. {{< link id="E6F07" >}}

#### Watching a Shaft Turn

A radio's controls also need to know how far you turn the tuning knob and in which direction. An *optical shaft encoder* detects that movement with light. *A patterned wheel rotates between a light source and detector. Clear openings or opaque marks alternately pass and block the beam as the shaft turns.*

> **Key Information:** An optical shaft encoder detects rotation by interrupting a light source with a patterned wheel. {{< link id="E6F05" >}}

The detector turns those interruptions into electrical pulses. Counting the pulses measures movement. With two suitably spaced detectors, the circuit can also distinguish clockwise from counterclockwise rotation. The knob can now report your movement without sliding electrical contacts.
