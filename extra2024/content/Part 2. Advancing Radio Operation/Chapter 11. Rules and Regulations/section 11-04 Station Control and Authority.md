---
chapter: "11"
section: "11.4"
questions: ["E2C12", "E1C08", "E2C01", "E1F10", "E1D05", "E1D06", "E1B09", "E1B10"]
status: "generated1"
draft: true
---

### Section 11.4: Station Control and Authority

Remote control moves the controls away from the transmitter. The control operator remains responsible for the signal. The link must carry commands reliably, including the command to stop transmitting.

#### Follow a Command to the Radio

Suppose you release push-to-talk at your computer. The command travels across a network before the remote radio responds. Your screen may already show “receive” while the command is still on its way. What matters on the air is when the transmitter actually changes state.

> **Key Information:** Latency is the delay between a control operator's action and the corresponding change in the transmitted signal. {{< link id="E2C12" >}}

If the link fails, the station needs a way to stop without waiting forever for a command that will not arrive.

> **Key Information:** If a remotely controlled station's control link malfunctions, provisions must limit its transmissions to no more than 3 minutes. {{< link id="E1C08" >}}

You want a failed link to leave a quiet transmitter. The timeout is a safeguard, not a normal transmission target. Test that the station stops under the failure conditions the control system is designed to handle.

The transmitter identifies the station under the usual identification rules. *Remote operation does not create its own mandatory suffix.*

> **Key Information:** No additional indicator is required solely because a US-licensed operator remotely controls a transmitter located in the United States. {{< link id="E2C01" >}}

Other call-sign rules still apply. For example, add the required upgrade indicator when using temporary privileges.

#### The Control Link and the Station Site

Section 97.213 sets rules for remote control of an amateur station on or within 50 kilometers of Earth's surface. A radio control link must use an auxiliary station. A link through another telecommunications service counts as wireline under this rule. An *auxiliary station* carries messages within a group of amateur stations that work together. The link serves that system instead of carrying an ordinary contact between users.

> **Key Information:** Only Technician, General, Advanced, or Amateur Extra operators may be control operators of auxiliary stations, subject to their license privileges. {{< link id="E1F10" >}}

Someone inspecting the remote equipment must be able to tell who is responsible for it.

> **Key Information:** At a station operated by telecommand on or within 50 kilometers of Earth's surface, post a photocopy of the station license and a label giving the name, address, and telephone number of the station licensee and the control operator. {{< link id="E1D05" >}}

*The posting must be easy to see and must name at least one designated control operator.* A visitor at the transmitter site cannot read a file that exists only on your computer miles away. Put the required information where the equipment is.

#### Commands to Model Craft

A model-control transmitter is another telecommand use, with its own limit. Do not borrow the spacecraft command rules from the previous chapter for this terrestrial application.

> **Key Information:** The maximum transmitter output power for telecommand of a model craft is 1 W. {{< link id="E1D06" >}}

*Here the limit is transmitter output power.* It is not *the 1 W EIRP limit for 2200 meters* discussed in the previous section.

#### RACES Authority

The Radio Amateur Civil Emergency Service, or RACES, authorizes amateur operation for civil defense. Local, remote, and automatic control describe how a station is controlled. RACES describes the authority under which it operates.

> **Key Information:**
> - Any FCC-licensed amateur station certified by the responsible civil-defense organization for the area served may operate under RACES rules. {{< link id="E1B09" >}}
> - A RACES station may use all amateur-service frequencies authorized to its control operator. {{< link id="E1B10" >}}

The control operator also needs an FCC amateur license. The civil-defense organization must certify that the operator is enrolled in it. *RACES does not raise that operator's license privileges.* Special limits can apply if the President invokes War Emergency Powers. The general exam answer describes normal RACES operation.
