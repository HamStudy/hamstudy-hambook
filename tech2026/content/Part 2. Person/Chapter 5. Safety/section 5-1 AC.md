---
chapter: "5"
section: "5.1"
questions: [ "T0A03", "T0A02", "T0A06" ]
status: complete
---

### Section 5.1: AC Power

#### AC Power Basics

AC stands for Alternating Current. Unlike DC (Direct Current) that powers most of our radios by flowing steadily in one direction, AC constantly reverses. In the United States, AC operates at 60 Hz, meaning the current reverses direction and returns to its starting point 60 times every second.

Unless you're running everything off batteries (and kudos if you are!), AC is what's powering your station — and it's potentially dangerous if not respected. Here's what you need to know:

- **Voltage**: In the U.S., most home outlets provide 120 volts AC — enough to give you a nasty shock or worse. Some appliances, like electric dryers or stoves, use 240 volts.

- **Current**: Measured in amperes or amps. A typical household circuit might be 15 or 20 amps.

- **Wiring Colors**: 

  > **Key Information:** In the United States, in a three-wire 120 V AC cable, black wire insulation indicates the hot wire, white is neutral, and green or bare copper is the ground. {{< link id="T0A03" >}}

  That's the standard — but it's only a starting point. Never assume a wire is safe to touch based on its color alone. Previous owners, unlicensed handywork, or old wiring predating modern codes can all produce wiring that doesn't follow the convention. Always test with proper equipment before working on any AC circuit.

#### Electrical Hazards to the Human Body

> **Key Information:** Electrical current through the body can cause injury by heating body tissue, disrupting the electrical functions of cells, and causing involuntary muscle contractions. {{< link id="T0A02" >}}

Each of these effects is its own kind of problem:

- Heating: current passing through tissue generates heat the same way a resistor does, which can cause internal and external burns.
- Cellular disruption: even relatively small currents can interfere with the electrical signals your heart and nervous system depend on, which would be (as we in the hobby like to say) Bad.
- Muscle contractions: current can cause your muscles to lock up, which might prevent you from letting go of an energized conductor — turning a brief contact into prolonged exposure.

Any one of these effects can be serious, and in some circumstances fatal, depending on the current path through your body, how long the contact lasts, and the amount of current.

#### AC Power Safety Tips

> **Key Information:** To guard against electrical shock at your station:
> - Use three-wire cords and plugs for all AC powered equipment. {{< link id="T0A06" >}}
> - Connect all AC powered station equipment to a common safety ground.
> - Ensure all capacitors used for high-voltage DC are fully discharged before working inside equipment.

The three-wire requirement is the basic electrical-code answer: the third conductor (green or bare copper) provides a safe path to ground if insulation fails inside a piece of equipment, rather than that failure energizing the metal chassis and waiting for you to touch it. The common safety ground extends that protection across your whole station — if every piece of gear shares a ground, there's no voltage difference between them that could shock you. And the capacitor point matters because high-voltage capacitors can hold a dangerous charge for a long time after equipment is unplugged; power amplifiers and tube-era gear are especially notorious for this.

In addition to the items in the Key Information above, a few general practices are worth following:

- **Keep it dry**: Water and electricity don't mix. Keep your equipment dry, and never operate with wet hands.
- **Check your cords**: Frayed cords, cracked insulation, and damaged plugs are accidents waiting to happen.
- **Don't overload circuits**: Know how much current your equipment draws and make sure your wiring can handle it.
- **Ask for help**: There's no shame in calling an electrician or a more experienced ham for advice when you're unsure.

---

AC power is one source of hazardous voltage, but it's not the only one. In the next section we'll look more broadly at where dangerous voltages can show up in and around your station.
