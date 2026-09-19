---
chapter: "6"
section: "6.2"
questions: ["G6A01", "G6A02", "G4E03", "G4E04", "G4E09", "G4E08", "G4E10", "G4E11", "G0B09"]
status: draft1
---

### Section 6.2: Batteries and Power Systems

You covered battery basics when studying for your Technician license—the different chemistries, safety around shorting and overcharging, calculating runtime from amp-hours. Now let's dig into some specifics that matter as you expand your operating horizons: keeping lead-acid batteries healthy, choosing batteries that can handle transmit current, powering mobile stations properly, and safely integrating solar charging.

#### Lead-Acid Batteries: Cheap and Easy

Lead-acid batteries have been around forever, and there's a reason they're still popular: they're inexpensive, are generally still usable at cold temperatures, widely available, and you can often find used ones that still have plenty of life left. They're not the lightest or most elegant solution, but when you need a lot of amp-hours without spending a lot of dollars, lead-acid delivers.

##### The Voltage Floor

Every battery chemistry has a point of no return—discharge below it, and you cause permanent damage. For lead-acid, going too deep causes sulfation, where crystals form on the plates and steal capacity you'll never get back.

> **Key Information:** The minimum allowable discharge voltage for maximum life of a standard 12-volt lead-acid battery is 10.5 volts. {{< link id="G6A01" >}}

Here's the gotcha: voltage sags under load. Your battery might read a comfortable 12.2 volts while you're listening, then drop below 10.5 volts the moment you key up to transmit. If you're serious about battery longevity, monitor voltage while transmitting—or better yet, use a low-voltage cutoff that protects the battery automatically. Your future self (and wallet) will thank you.

##### Internal Resistance: The Hidden Spec

Ever wonder why two batteries with the same amp-hour rating perform so differently? The secret is internal resistance—opposition to current flow inside the battery itself.

> **Key Information:** An advantage of batteries with low internal resistance is high discharge current. {{< link id="G6A02" >}}

When your transmitter demands 20+ amps, internal resistance determines whether the battery delivers or disappoints. If there is a high internal resistance, the voltage will drop significantly under load, potentially causing your transmitter to shut down or perform poorly. Look for batteries marketed as "low internal resistance" or "high discharge rate" to ensure reliable performance during transmission.

Car starting batteries have very low internal resistance—they're designed to crank hundreds of amps to your starter motor. They are also generally expected to remain mostly charged all the time—they hate deep discharge; run one down repeatedly and you will rapidly decrease its lifespan. Deep-cycle batteries tolerate repeated cycling but often have higher resistance. AGM (Absorbed Glass Mat) batteries split the difference nicely for ham radio use—low enough resistance for solid transmit performance, robust enough for regular cycling.

#### Lithium Batteries: A Growing Standard

LiFePO4 (lithium iron phosphate) batteries have gone from exotic to nearly mainstream in recent years, and for good reason. They're roughly half the weight of lead-acid for the same capacity, deliver more usable amp-hours (you can safely use 80% of their capacity versus maybe 50% for lead-acid), and last for thousands of charge cycles. Yes, they cost more upfront—but when you factor in lifespan and performance, they often win on value too.

The trade-off? They're pickier about charging, which we'll cover when we get to solar systems.

#### Mobile Power: Doing It Right

Working HF from your vehicle is one of the great joys of General privileges. But a 100-watt transceiver pulling 20+ amps on voice peaks needs more than a casual power connection.

##### Go Straight to the Source

For serious mobile power, there's really only one right answer.

> **Key Information:** The best direct, fused power connection for a 100-watt HF mobile installation is to the battery using heavy-gauge wire. {{< link id="G4E03" >}}

Size the power wiring for both the radio's current draw and the length of the run: longer runs need heavier wire to limit voltage drop. Place a fuse in the positive lead close to the battery, rated to protect the wire as well as supply the radio. That fuse protects against a short along the cable, not only a fault inside the radio. Keep wiring away from hot or moving parts, and protect it with a grommet wherever it passes through a metal panel so vibration cannot wear through the insulation.

A dedicated battery connection avoids relying on accessory wiring shared with other loads, but it does not eliminate every source of electrical noise. Noise can still reach the radio through its power leads or antenna. Yes, a dedicated power run is more work than tapping into an existing circuit, but that circuit may not be designed to handle the load.

##### That Tempting Cigarette Lighter Socket

It's right there. It's already wired. It even has a convenient plug...

> **Key Information:** DC power for a 100-watt HF transceiver should not be supplied by a vehicle's auxiliary power socket because the socket's wiring may be inadequate for the current drawn by the transceiver. {{< link id="G4E04" >}}

Vehicle manufacturers wire these sockets for phone chargers, not transceivers. Thin wire, small fuses, and connectors that weren't designed for 20+ amps add up to trouble. Best case: you blow fuses at inconvenient times. Worst case: wiring quietly overheats somewhere behind your dashboard. Don't do it.

#### Solar Charging

Away from your vehicle or an outlet, sunlight gives you another way to replenish a station battery. A solar panel converts light to electrical energy using photovoltaic cells, but a single cell cannot provide enough voltage to charge a 12-volt battery.

> **Key Information:** A fully illuminated silicon photovoltaic cell has an approximate open-circuit voltage of 0.5 VDC. {{< link id="G4E09" >}}

*Open-circuit* means measured with no load connected. It is not a promise that the cell will maintain that voltage while supplying any amount of current you ask for. To make a useful panel, manufacturers combine cells, using the series and parallel relationships from Chapter 1.

> **Key Information:** The individual cells in a solar panel are connected in a series-parallel configuration. {{< link id="G4E08" >}}

Cells in series add their voltages; parallel strings increase the available current. For example, a string of 36 cells at roughly 0.5 volt each would provide about 18 volts open-circuit, rather than the half volt from one cell. Actual voltage and current depend on illumination, temperature, and the load. The panel must supply enough voltage for charging under load, and charging equipment must keep the battery within its limits. That introduces two concerns: controlling current toward the battery and preventing current from flowing back out of it.

##### When Darkness Falls

Here's something that's easy to overlook: solar panels don't just stop generating power at night—they actually become a small load that slowly drains your battery backward through the cells.

> **Key Information:** A series diode should be connected between a solar panel and a storage battery that is being charged by the panel to prevent discharge of the battery through the panel during times of low or no illumination. {{< link id="G4E10" >}}

A blocking diode acts like a one-way valve, letting current flow into the battery while preventing it from sneaking back out overnight. Simple problem, simple solution. The most common solution to this is to just use a "Solar Charge Controller", which also handles regulating the charge voltage and current to the battery.

##### Lithium Batteries Need a Chaperone

Remember how we said LiFePO4 batteries are pickier about charging? Here's where that matters.

> **Key Information:** When connecting a solar panel to a lithium iron phosphate battery, the solar panel must have a charge controller. {{< link id="G4E11" >}}

While it's often a good idea to use a charge controller with any battery, Lead-acid batteries are relatively forgiving—overcharge them a bit and they'll probably still be okay. Lithium cells don't have that tolerance. Overcharge them and you risk damage to expensive batteries or, in extreme cases, safety hazards. A charge controller regulates voltage and current to keep everything happy. This isn't optional equipment—it's required for safe operation. Most often a Lithium battery will also have a "Battery Management System" (BMS) built in or added on to handle cell balancing and additional safety features.

Lithium batteries also quickly degrade in performance at low temperatures. Make sure you know the temperature limits of your battery and charge controller, and avoid using them in conditions that exceed those limits.

#### Generator Safety

When the sun isn't shining and the batteries are low, generators save the day—but like everything else, they come with safety considerations.

##### Carbon Monoxide: The Silent Threat

Generator exhaust contains carbon monoxide—colorless, odorless, and deadly. You can't smell it, you can't see it, and by the time you feel symptoms, you may be too confused to save yourself.

> **Key Information:** An emergency generator installation should operate in a well-ventilated area. {{< link id="G0B09" >}}

For a portable fuel-powered generator, "well-ventilated" means *outdoors*, never inside a home or garage, even with doors or windows open. Exhaust can still enter a building from an outdoor generator, so being outside alone does not guarantee safe placement.

Ventilation is only one part of generator safety. Before using one, research safe placement, fueling, and electrical connections using the generator's safety instructions and guidance from public-safety authorities. This section is not a generator installation guide.

Whether you're running on batteries, solar, generator, or wall power, all that energy needs somewhere safe to go when things go wrong. That's where grounding comes in—and as we'll see in the next section, "grounding" means several different things depending on whether you're worried about lightning, RF, or electrical safety.
