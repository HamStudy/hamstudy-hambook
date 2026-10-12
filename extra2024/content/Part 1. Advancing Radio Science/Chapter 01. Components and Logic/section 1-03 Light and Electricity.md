---
chapter: "1"
section: "1.3"
questions: ["E6F04", "E6F01", "E6F10", "E6F09", "E6F11", "E6F02", "E6F06", "E6F03", "E6F08", "E6F07", "E6F05"]
status: generated1
draft: true
---

### Section 1.3: Light and Electricity

The solar panel charging a battery at Field Day turns sunlight into electricity, the reverse of what an LED does. Both depend on the band gap described earlier in this chapter. In an LED, electrons give up energy as light when they fall across the gap; a solar cell runs that process the other way. Light can carry information as well as power, so a circuit can also use it to measure brightness, pass a command across an insulating gap, or follow a turning knob.

#### Making Electricity from Light

A solar cell, or photovoltaic cell, is a PN junction much like a diode's, with a large area exposed to light. Getting useful power from it takes two steps: freeing charge carriers and separating them.

When the cell absorbs a photon, an electron in the semiconductor can gain enough energy to cross the band gap. It becomes free to conduct and leaves a hole behind. The electric field in the junction's depletion region then pushes freed electrons toward the N side and holes toward the P side. Kept apart instead of recombining, they can deliver energy to an external circuit.

The light reaching a panel sets an upper limit on the power it can supply. Some light reflects off the cells, some passes through, and some absorbed energy becomes heat. Only part becomes useful electrical output.

> **Key Information:**
> - The photovoltaic effect is the conversion of light to electrical energy. {{< link id="E6F04" >}}
> - Electrons absorb the energy from light falling on a photovoltaic cell. {{< link id="E6F01" >}}
> - Silicon is the most common material used in power-generating photovoltaic cells. {{< link id="E6F10" >}}
> - The efficiency of a photovoltaic cell is the relative fraction of light that is converted to current. {{< link id="E6F09" >}}

Here, “converted to current” is shorthand: efficiency is the electrical output power divided by the light power falling on the cell. A cell that turns 1 W of light into 0.2 W of output is 20% efficient. Current alone does not tell us the power; we need voltage too.

A cell's **open-circuit voltage** is its voltage with nothing connected, so no current flows.

> **Key Information:** A fully illuminated silicon photovoltaic cell produces an approximate open-circuit voltage of 0.5 volts. {{< link id="E6F11" >}}

Half a volt won't charge much of anything, so a panel connects many cells in series to add their voltages. A panel built to charge a 12 V battery commonly strings 36 of them. Actual voltage varies with cell design, light, and temperature. Many modern silicon cells measure above 0.6 V with nothing connected, and their voltage drops toward 0.5 V while they deliver power.

#### Detecting Light with Resistance

We don't always need light to supply power. A porch light that switches on at dusk only needs to know how much light is present. A **photoconductive** device changes its resistance with light. As in a solar cell, absorbed photons free additional mobile carriers in the semiconductor, and more carriers let more current flow for a given applied voltage.

> **Key Information:**
> - A photoconductive material's resistance decreases when light shines on it. {{< link id="E6F02" >}}
> - Crystalline semiconductor is the material most commonly used to create photoconductive devices. {{< link id="E6F06" >}}

For a stronger response, a **phototransistor** puts transistor gain to work. Carriers freed by light near its base act like base current, and the transistor amplifies them into a much larger collector current.

#### Passing a Signal Across Insulation

A low-voltage controller may need to switch a 120 VAC circuit while keeping the two electrically separate, so an AC fault can't reach the controller, or you. We can send the instruction as light, letting it cross insulation without a shared signal wire.

An **optoisolator**, also called an **optocoupler**, puts a light source and a light detector in one package. Driving the source makes light, and the detector responds on the other side. A transparent insulating barrier lets the light pass without a direct conducting path between circuits.

The controller sends only the instruction; the receiving side supplies the energy to act on it. The component's insulation rating and the surrounding construction must suit the voltage involved.

The switched side still needs a device that can carry the load current. A mechanical relay would close its contacts with an electromagnet. Semiconductor switches can do the same job with no coil or moving contacts, often with optical isolation built in.

> **Key Information:**
> - The most common optoisolator configuration is an LED and a phototransistor. {{< link id="E6F03" >}}
> - Optoisolators are often used with solid-state circuits that control 120 VAC circuits because they provide electrical isolation between a control circuit and the circuit being switched. {{< link id="E6F08" >}}
> - A solid-state relay uses semiconductors to implement the functions of an electromechanical relay. {{< link id="E6F07" >}}

#### Watching a Shaft Turn

A radio with a free-spinning tuning knob has to sense how far the knob turns and in which direction. Light offers a way to do it. A wheel turns with the shaft between a light source and a detector, and its clear openings or opaque marks alternately pass and block the beam.

> **Key Information:** An optical shaft encoder detects rotation by interrupting a light source with a patterned wheel. {{< link id="E6F05" >}}

The detector turns those interruptions into electrical pulses. Counting the pulses measures movement. With two suitably spaced detectors, the circuit can also distinguish clockwise from counterclockwise rotation. The knob can now report your movement without sliding electrical contacts, so nothing wears into the crackle of an old volume control.
