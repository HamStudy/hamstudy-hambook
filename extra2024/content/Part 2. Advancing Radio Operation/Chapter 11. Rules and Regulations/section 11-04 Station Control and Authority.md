---
chapter: "11"
section: "11.4"
questions: ["E2C12", "E1C08", "E1F10", "E1D05", "E2C01", "E1D06", "E1B09", "E1B10"]
status: "generated1"
draft: true
---

### Section 11.4: Station Control and Authority

Running a station over the internet counts as remote control. The control operator sits at a control point, perhaps miles from the transmitter, and still answers for every signal the station sends. That distance raises three practical questions: how quickly a command arrives, what happens if the link fails, and whom someone at the transmitter site should contact.

#### Follow a Command to the Radio

Each command takes time to cross the network, and the transmitter changes only when the command arrives. The screen may already show “receive” while the command to stop is still on its way, so what counts is what the transmitter actually does.

If the link fails completely, the stop command never arrives at all. The station needs a way to stop on its own.

> **Key Information:**
> - Latency is the delay between a control operator action and the corresponding change in the transmitted signal. {{< link id="E2C12" >}}
> - The maximum permissible duration of a remotely controlled station's transmissions if its control link malfunctions is 3 minutes. {{< link id="E1C08" >}}

A failed link should leave a quiet transmitter, so test that the station really stops when the link drops. The 3-minute timeout is a safeguard, not a target for normal transmissions.

#### The Control Link and the Station Site

Part 97 calls remote operation through a control link **telecommand of an amateur station**, the title of Section 97.213. Its rules cover a station on or within 50 kilometers of Earth's surface. Farther out, the station is a space station, covered in the previous chapter. A control link through the internet, a phone line, or another telecommunications service counts as wireline. A radio control link must use an auxiliary station. That station passes messages point-to-point within a system of cooperating amateur stations.

The remote site needs a sign, too. Picture a landowner or a utility worker opening a shed and finding a radio that seems to run itself. Anyone who finds the equipment should be able to tell whose station it is and whom to call. On the air, listeners need to know which station they hear, not where its operator sits.

![A control point at left connects to a remote station at right by either of two links. The upper link, a solid line labeled internet, phone, or fiber, is marked wireline. The lower link, a radio path between two antennas, is marked auxiliary station. Inside the remote station box are the transmitter, a clock marked 3-minute stop, and a posted license copy and contact label.](../../../images/s11-4-remote-link.svg)
{.img-centered .img-xlarge .img-mobile-full caption="Either link can carry the control operator's commands, but a radio link must use an auxiliary station. The remote site needs its failsafe and posted information either way."}

> **Key Information:**
> - Only Technician, General, Advanced, or Amateur Extra class operators may be the control operator of an auxiliary station. {{< link id="E1F10" >}}
> - At the location of a station operated by telecommand on or within 50 kilometers of the Earth's surface, post a photocopy of the station license and a label with the name, address, and telephone number of the station licensee and of the control operator. {{< link id="E1D05" >}}
> - No additional indicator is required when a US-licensed operator remotely controls a station whose transmitter is located in the US. {{< link id="E2C01" >}}

Novice, the one class left out, is no longer issued. Post the license copy and label in a conspicuous place at the site; a file on your computer miles away doesn't count. Other call-sign rules still apply, such as the upgrade indicator for temporary privileges.

#### Commands to Model Craft

Telecommand also covers its best-known use: flying a model plane or steering a model boat by radio. That job has its own power limit.

> **Key Information:** The maximum permitted transmitter output power when operating a model craft by telecommand is 1 W. {{< link id="E1D06" >}}

Unlike the 1 W EIRP limit on 2200 meters, this 1 W limit applies to transmitter output.

#### RACES Authority

The Radio Amateur Civil Emergency Service (RACES) raises a different question. The issue isn't how a station is controlled, but whose authority it works under. RACES stations carry civil-defense messages for government agencies. The civil-defense organization needs to know which stations and operators it can count on.

> **Key Information:**
> - Any FCC-licensed amateur station certified by the responsible civil defense organization for the area served may be operated under RACES rules. {{< link id="E1B09" >}}
> - An amateur station operating under RACES rules is authorized all amateur service frequencies authorized to the control operator. {{< link id="E1B10" >}}

The control operator must also hold an FCC amateur license and be enrolled in that organization. Only if the President invokes War Emergency Powers would RACES stations be held to specially authorized segments.
