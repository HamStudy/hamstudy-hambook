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

Lead-acid batteries contain corrosive acid and can release flammable hydrogen during charging. Charge them in a ventilated area, keep sparks and flames away, and wear eye protection when working around them. Never charge a frozen or damaged battery.

##### The Voltage Floor

Discharging too deeply shortens battery life. In a lead-acid battery, lead sulfate forms during normal discharge and is converted back during charging. Leaving the battery discharged can let hard sulfate crystals build up and reduce capacity. How far you can safely discharge it depends on the battery and operating conditions.

> **Key Information:** The minimum allowable discharge voltage for maximum life of a standard 12-volt lead-acid battery is 10.5 volts. {{< link id="G6A01" >}}

Treat **10.5 volts as the exam’s lower-limit answer**, not a daily target for long battery life. It is a typical fully discharged endpoint under a specified load. Shallower discharges usually extend life; use the battery maker’s voltage and depth-of-discharge limits.

Here's the gotcha: voltage sags under load. Your battery might read a comfortable 12.2 volts while you're listening, then drop below 10.5 volts the moment you key up to transmit. If you're serious about battery longevity, monitor voltage while transmitting—or better yet, use a low-voltage cutoff set for your battery and load. Your future self (and wallet) will thank you.

##### Internal Resistance: The Hidden Spec

Ever wonder why two batteries with the same amp-hour rating perform so differently? The secret is internal resistance—opposition to current flow inside the battery itself.

> **Key Information:** An advantage of batteries with low internal resistance is high discharge current. {{< link id="G6A02" >}}

When your transmitter demands 20+ amps, internal resistance determines whether the battery delivers or disappoints. If there is a high internal resistance, the voltage will drop significantly under load, potentially causing your transmitter to shut down or perform poorly. Check the battery’s rated discharge current and voltage under load, rather than relying on a “high discharge rate” label alone. A short across the battery terminals can draw dangerous current; keep tools and jewelry from bridging them.

Car starting batteries have very low internal resistance—they're designed to crank hundreds of amps to your starter motor. They are also generally expected to remain mostly charged all the time—they hate deep discharge; run one down repeatedly and you will rapidly decrease its lifespan. Deep-cycle batteries tolerate repeated cycling but often have higher resistance. AGM (Absorbed Glass Mat) describes how a lead-acid battery holds its electrolyte, not whether it is a starting or deep-cycle battery. An AGM model rated for deep cycling and your transmit current can work well for ham radio.

#### Lithium Batteries: A Growing Standard

LiFePO4 (lithium iron phosphate) batteries have gone from exotic to nearly mainstream in recent years, and for good reason. They're roughly half the weight of lead-acid for the same capacity, deliver more usable amp-hours (you can safely use 80% of their capacity versus maybe 50% for lead-acid), and last for thousands of charge cycles. Yes, they cost more upfront—but when you factor in lifespan and performance, they often win on value too.

Those are useful comparisons, not universal ratings. Check the particular battery’s usable capacity, cycle-life conditions and maximum current.

The trade-off? They're pickier about charging, which we'll cover when we get to solar systems.

#### Mobile Power: Doing It Right

Working HF from your vehicle is one of the great joys of General privileges. But a 100-watt transceiver pulling 20+ amps on voice peaks needs more than a casual power connection.

##### Go Straight to the Source

For most mobile radios, plan on a dedicated, fused connection to the vehicle battery.

> **Key Information:** The best direct, fused power connection for a 100-watt HF mobile installation is to the battery using heavy-gauge wire. {{< link id="G4E03" >}}

Size the power wiring for both the radio's current draw and the length of the run: longer runs need heavier wire to limit voltage drop. Place a fuse in the positive lead close to the battery, rated to protect the wire as well as supply the radio. That fuse protects against a short along the cable, not only a fault inside the radio. Keep wiring away from hot or moving parts, and protect it with a grommet wherever it passes through a metal panel so vibration cannot wear through the insulation.

Follow the radio and vehicle makers’ connection instructions, including where to connect the negative power lead. Some vehicles require an approved chassis point so the connection does not bypass a battery-current sensor.

A dedicated battery connection avoids relying on accessory wiring shared with other loads, but it does not eliminate every source of electrical noise. Noise can still reach the radio through its power leads or antenna. Yes, a dedicated power run is more work than tapping into an existing circuit, but that circuit may not be designed to handle the load.

##### That Tempting Cigarette Lighter Socket

It's right there. It's already wired. It even has a convenient plug...

> **Key Information:** DC power for a 100-watt HF transceiver should not be supplied by a vehicle's auxiliary power socket because the socket's wiring may be inadequate for the current drawn by the transceiver. {{< link id="G4E04" >}}

Accessory socket ratings vary, and many cannot supply the current a 100-watt transceiver needs. Thin wire, small fuses, and connectors that weren't designed for 20+ amps add up to trouble. Best case: you blow fuses at inconvenient times. Worst case: wiring quietly overheats somewhere behind your dashboard. Don't do it.

#### Solar Charging

Away from your vehicle or an outlet, sunlight gives you another way to replenish a station battery. A solar panel converts light to electrical energy using photovoltaic cells, but a single cell cannot provide enough voltage to charge a 12-volt battery.

> **Key Information:** A fully illuminated silicon photovoltaic cell has an approximate open-circuit voltage of 0.5 VDC. {{< link id="G4E09" >}}

*Open-circuit* means measured with no load connected. It is not a promise that the cell will maintain that voltage while supplying any amount of current you ask for. To make a useful panel, manufacturers combine cells, using the series and parallel relationships from Chapter 1.

> **Key Information:** The exam describes the individual cells in a solar panel as connected in a series-parallel configuration. {{< link id="G4E08" >}}

Cells in series add their voltages; parallel strings increase the available current. In a simplified example, 36 cells at 0.5 volt each would add to 18 volts open-circuit, rather than the half volt from one cell. Real cells and panels can have higher open-circuit voltages; use the panel’s specifications when choosing equipment. Actual voltage and current depend on illumination, temperature, and the load. The panel must supply enough voltage for charging under load, and charging equipment must keep the battery within its limits. That introduces two concerns: controlling current toward the battery and preventing current from flowing back out of it.

##### When Darkness Falls

Here's something that's easy to overlook: without reverse-current protection, a solar panel can become a small load at night, slowly draining your battery backward through the cells.

> **Key Information:** A series diode should be connected between a solar panel and a storage battery that is being charged by the panel to prevent discharge of the battery through the panel during times of low or no illumination. {{< link id="G4E10" >}}

A blocking diode acts like a one-way valve, letting current flow into the battery while preventing it from sneaking back out overnight. Simple problem, simple solution. A solar charge controller regulates the battery’s charging voltage and current, and many include reverse-current protection. Check its specifications before adding a separate blocking diode.

##### Lithium Batteries Need a Chaperone

Remember how we said LiFePO4 batteries are pickier about charging? Here's where that matters.

> **Key Information:** When connecting a solar panel to a lithium iron phosphate battery, the solar panel must have a charge controller. {{< link id="G4E11" >}}

All battery types need charging within the maker’s limits. Overcharging lead-acid batteries can cause heat, water loss and hazardous gas; lithium batteries also need the correct charging settings to avoid damage and safety hazards. A charge controller regulates voltage and current to keep everything happy. This isn't optional equipment—it's required for safe operation. Most often a Lithium battery will also have a "Battery Management System" (BMS) built in or added on to handle cell balancing and additional safety features.

The BMS is a protective backup, not a substitute for a compatible charge controller. Use the charging settings specified for the battery.

![Power flows from the solar panel through a charge controller and a fuse to the battery. The battery supplies the radio through a separate fuse. Both fuses are near the battery, one on its charging cable and one on the cable supplying the radio. The controller limits charging and may also block current from flowing backward into the panel. The arrows show power flow, not complete wiring connections.](../../../images/s6-2-solar-power.svg)
{.img-centered}

Cold-weather charging needs special attention. A LiFePO4 battery may allow discharge at a temperature where charging would damage it. Follow its separate charging and discharging limits, and verify whether its BMS actually blocks charging when too cold.

#### Generator Safety

When the sun isn't shining and the batteries are low, generators save the day—but like everything else, they come with safety considerations.

##### Carbon Monoxide: The Silent Threat

Generator exhaust contains carbon monoxide—colorless, odorless, and deadly. You can't smell it, you can't see it, and by the time you feel symptoms, you may be too confused to save yourself.

> **Key Information:** An emergency generator installation should operate in a well-ventilated area. {{< link id="G0B09" >}}

For a portable fuel-powered generator, "well-ventilated" means *outdoors*, never inside a home or garage, even with doors or windows open. Exhaust can still enter a building from an outdoor generator, so being outside alone does not guarantee safe placement.

Keep it at least 20 feet from homes and other occupied buildings, away from doors, windows and vents, with exhaust directed away from people and buildings. Use battery-powered or battery-backup carbon monoxide alarms in the home. If an alarm sounds or anyone feels dizzy or ill, move to fresh air immediately and call 911.

Ventilation is only one part of generator safety. Shut the generator off and let it cool before refueling. Use outdoor-rated extension cords sized for the load, and keep the generator and electrical connections dry. Never feed a generator into a wall outlet; powering household circuits requires suitable transfer equipment installed by a qualified electrician. Follow the generator’s safety instructions for the actual setup.

The power source is only part of a station's electrical system. The next section looks at its grounding and bonding connections, and why "grounding" means different things in lightning protection, RF management, and electrical safety.
