---
chapter: "1"
section: "1.3"
questions: ["E6F04", "E6F01", "E6F09", "E6F10", "E6F11", "E6F02", "E6F06", "E6F03", "E6F08", "E6F07", "E6F05"]
status: generated1
draft: true
---

### Section 1.3: Light and Electricity

A solar panel can power your station. A light beam inside a tuning knob can report how far you turn it. Both put light to work electrically, but one supplies energy while the other carries information. The semiconductor and its circuit determine which job it does.

#### Making Electricity from Light

A *photon* is a packet of light energy. If it *transfers enough energy to an electron in a semiconductor*, that electron can move into a state where it contributes to conduction, leaving a hole behind. The electric field inside a photovoltaic cell separates these carriers so they can deliver energy to an external circuit.

> **Key Information:**
> - The photovoltaic effect is the conversion of light to electrical energy. {{< link id="E6F04" >}}
> - Electrons absorb the energy from light falling on a photovoltaic cell. {{< link id="E6F01" >}}
> - Silicon is the most common material used in power-generating photovoltaic cells. {{< link id="E6F10" >}}

A cell does not turn every incoming photon into useful output. Some light is reflected, some passes through, and some absorbed energy becomes heat. That is why the light power arriving at a panel and the electrical power leaving it are different numbers.

> **Key Information:** Photovoltaic-cell efficiency describes the relative fraction of light converted to electrical output, stated in the question pool as “the relative fraction of light that is converted to current.” {{< link id="E6F09" >}}

*More precisely, energy-conversion efficiency is electrical output power divided by incident light power.* If 1 W of light falls on a cell and it delivers 0.2 W to a load, efficiency is $0.2/1=20\%$. Current by itself is not power; voltage matters too.

A single silicon cell produces a modest voltage. Cells are connected in series to obtain the larger voltage needed by a panel.

> **Key Information:** The exam's approximate open-circuit voltage for a fully illuminated silicon photovoltaic cell is 0.5 volts. {{< link id="E6F11" >}}

Open circuit means no load current is flowing. Actual voltage varies with cell design, illumination, and temperature; *0.5 V is the pool's approximation, not a universal maximum.* Under load, both voltage and current must be considered when finding power.

#### Detecting Light with Resistance

Light can also change a material's conductivity without making the device a useful power source. In a photoconductive device, incoming photons create additional mobile carriers. *More carriers allow more current for a given applied voltage, which means lower resistance.*

> **Key Information:**
> - A photoconductive material's resistance decreases when light shines on it. {{< link id="E6F02" >}}
> - Crystalline semiconductor is the material commonly used to make photoconductive devices. {{< link id="E6F06" >}}

Connect that light-sensitive resistor to a powered circuit and its changing resistance can report the light level. The circuit supplies the electrical energy; this is different from using a photovoltaic cell as the source. A phototransistor uses light to control transistor current, providing a stronger response than the initial light-generated current alone.

#### Passing a Signal Across Insulation

Place an LED and a light-sensitive device inside one package. Driving the LED makes light; the detector responds on the other side. *A transparent insulating barrier lets the light cross without a direct conducting path between circuits.* This is an *optoisolator*, also called an *optocoupler*.

> **Key Information:**
> - The most common optoisolator configuration is an LED and a phototransistor. {{< link id="E6F03" >}}
> - In circuits controlling 120 VAC, optoisolators provide electrical isolation between the control circuit and the circuit being switched. {{< link id="E6F08" >}}

The controller sends the instruction across as light. The other side supplies the energy needed to act on it. No shared signal wire has to bridge the insulating barrier. The component's insulation rating and the surrounding construction must suit the voltage involved; optical signaling alone does not define the rating of a complete assembly.

*A solid-state relay uses semiconductor switches to perform the switching job of a mechanical relay.* Many include optical input isolation. Their output stage may use devices other than a phototransistor to carry the load current.

> **Key Information:** A solid-state relay uses semiconductors to implement the functions of an electromechanical relay. {{< link id="E6F07" >}}

#### Watching a Shaft Turn

Light can report mechanical movement too. *In an optical shaft encoder, a patterned wheel rotates between a light source and detector.* *Its clear openings or opaque marks alternately pass and block the light, producing electrical changes as the shaft turns.*

> **Key Information:** An optical shaft encoder detects rotation by interrupting a light source with a patterned wheel. {{< link id="E6F05" >}}

Counting those changes measures movement. Two suitably spaced detectors can also distinguish direction, allowing a tuning knob to report clockwise and counterclockwise rotation without sliding electrical contacts.
