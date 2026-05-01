---
chapter: "8"
section: "8.4"
questions: [ "T1B08", "T2A10", "T1A08", "T1A09", "T2B09", "T2B08" ]
state: complete
---

### Section 8.4: Frequency Allocations and Band Sharing

Now that you know what frequencies you can use, here's a question worth thinking about: how do hams actually find each other? Just having a license isn't enough — if you don't know what frequency other people are using, you can't talk to them. This is a more practical issue than it sounds. Many people get a radio "for emergencies" and never actually use it, then in an actual emergency have no idea where to tune.

The answer involves a layered system of allocations, voluntary band plans, and frequency coordinators that organize how the spectrum gets used. This section covers each layer.

#### Spectrum Management

The radio spectrum is a finite resource shared among many services — broadcasting, cellular, military, aviation, satellite operators, and amateur radio, among others. In the US, the Federal Communications Commission (FCC) decides which slices go to which service, dividing the spectrum into allocations.

#### Primary vs. Secondary Allocations

> **Key Information:** In segments of bands where the Amateur Radio Service is secondary, U.S. amateurs may find non-amateur stations in those segments, and must avoid interfering with them. {{< link id="T1B08" >}}

Not all spectrum allocations are created equal. Each service in a given band is either:

- **Primary**: has priority on that frequency. Other services must not interfere with primary users, and primary users do not have to accommodate interference from secondary users.
- **Secondary**: allowed to use the frequency but must not cause interference to primary users — and must accept any interference primary users cause to them.

As an amateur operator, you'll find yourself in both situations. For example, on the 70 cm band (420–450 MHz), amateur radio is secondary to government radiolocation services in some areas. If federal users need the airwaves, we step aside.

On the other hand, there are bands where amateurs have primary status. The 2390–2417 MHz portion of the 2.4 GHz band is one example — amateur radio is primary there, while Wi-Fi devices (Wi-Fi channel 1 falls in this range) operate on a secondary basis. That means if there's interference between an amateur station and Wi-Fi devices on those frequencies, the amateur station has legal priority — though it's quite likely your neighbor won't be aware of that, so the practical usefulness is questionable.

#### Band Plans

> **Key Information:** A band plan, beyond the privileges established by the FCC, is a voluntary guideline for using different modes or activities within an amateur band. {{< link id="T2A10" >}}

Within our slice of the spectrum, the amateur community further organizes things through voluntary band plans. These designate which segments of a band are typically used for what — voice in one part, digital modes in another, repeaters at certain frequencies, calling frequencies for making initial contacts, and so on. They're not laws, but they're widely followed because they make sharing the band practical.

This is also the layer that solves the "how do I find anyone?" problem mentioned at the top of the section. If you know which segment of a band hams in your area use for FM voice, where the local repeaters live, and what calling frequency to monitor, you have a starting point. Without the band plan, you'd be turning the dial blind.

Different modes also need different amounts of bandwidth — from narrow CW signals (around 150 Hz) to wider FM voice transmissions (about 16 kHz). Band plans help accommodate these different needs and help prevent signals from accidentally extending beyond band edges.

#### Frequency Coordinators

> **Key Information:**
> - A Volunteer Frequency Coordinator recognized by local amateurs recommends transmit/receive channels for repeater and auxiliary stations. {{< link id="T1A08" >}}
> - Frequency Coordinators are selected by amateur operators in a local or regional area whose stations are eligible to be repeater or auxiliary stations. {{< link id="T1A09" >}}

Repeaters in particular need careful coordination — two repeaters trying to use the same input/output frequencies in overlapping coverage areas can interfere with each other badly. Frequency coordinators are volunteers who manage this for a region, recommending which frequency pairs new repeaters should use and helping resolve conflicts. They're not appointed by any government agency; they're chosen by the local repeater operators they serve.

Their recommendations aren't legally binding, but following them is considered good amateur practice. Most repeater operators work with their local coordinator to ensure their station fits well into the existing repeater network.

Frequency allocations and conventions also vary between ITU regions, so always check local regulations if operating internationally.

#### Designated Simplex Channels

> **Key Information:** Simplex channels are designated in the VHF/UHF band plans so stations within range of each other can communicate without tying up a repeater. {{< link id="T2B09" >}}

Repeaters are valuable shared resources, and there's no reason to occupy one when you can talk to someone directly. The VHF/UHF band plans set aside specific simplex channels for exactly this purpose — local events, casual contacts between nearby stations, or any situation where the repeater isn't needed.

It's tempting to just pick an arbitrary frequency and start operating, but always check the local band plan first — you might be on the input to a repeater and not know it, resulting in everyone else listening to your traffic (and likely angry that you are tying up the repeater).

#### Interference and Resolution

> **Key Information:** When two stations transmitting on the same frequency interfere with each other, the stations should negotiate continued use of the frequency. {{< link id="T2B08" >}}

Sometimes two stations end up on the same frequency despite everyone's best intentions. The rule is mutual courtesy: both stations have equal rights, no one has preemptive claim by being there first or by having the stronger signal, and the right approach is to talk to each other and figure out who'll move or how to share.

Willful interference — deliberately disrupting another station — is a different matter entirely. It's prohibited and can result in penalties from the FCC. If you encounter it, document it and report it through proper channels rather than engaging with the interfering station.

---

That covers how the spectrum gets divided up and shared. The next section gets into one of the most fundamental rules of operating within it: how and when to identify your station.
