---
chapter: "7"
section: "7.4"
questions: ["E3A08", "E3A09", "E3A12", "E3A13", "E3A01", "E3A02", "E3A03"]
status: generated1
draft: true
---

### Section 7.4: Scatter and Moonbounce

A brief meteor ping and a raspy auroral signal call for different operating choices. One offers little time to pass information; the other distorts the signal throughout the contact. Moonbounce adds a different challenge: recovering a tiny, changing return from a very long path.

#### A Trail That Lasts Briefly

For a meteor-scatter contact, the two stations need a trail in a useful position before it disperses. Friction with the thin upper air vaporizes a meteor roughly 50 to 75 miles up, leaving a long, narrow trail of ionized gas. That trail scatters energy beyond the stations' normal terrestrial range.

At higher frequencies, echoes from ordinary meteor trails become weaker and shorter. Lower HF frequencies face more noise and interference from ordinary ionospheric propagation. The best results fall between those extremes. Six meters, a favorite meteor-scatter band, sits in that middle ground.

> **Key Information:**
> - When a meteor strikes Earth's atmosphere, a linear ionized region is formed in the E region of the ionosphere. {{< link id="E3A08" >}}
> - The 28 MHz to 148 MHz range is most suited for meteor-scatter communications. {{< link id="E3A09" >}}

A weak trail may produce only a short burst or “ping.” Denser trails can last longer. Suitable digital modes can recover short pieces of information during those brief openings; [Section 10.3]({{% pageref "10.3" %}}) covers how to use them.

#### The Rough Sound of Aurora

The geomagnetic storms that close polar HF paths can open a VHF one. A severe storm intensifies the aurora and fills the auroral oval with moving irregularities in the ionization. Signals scattered from them can link stations well beyond line of sight. Both stations usually aim toward the aurora, north in the Northern Hemisphere, rather than at each other.

The same motion spreads the signal in frequency. A steady CW tone can become raspy or hiss-like. Speech loses the clean frequency relationships that make voices understandable, so SSB can become difficult to copy, and FM and narrow-shift data modes struggle too. Even with a rough tone, the timing of Morse dots and dashes stays recognizable.

> **Key Information:**
> - Severe geomagnetic storms are most likely to result in auroral propagation. {{< link id="E3A12" >}}
> - CW is the best emission mode for auroral propagation. {{< link id="E3A13" >}}

#### Both Stations Face the Moon

Earth-Moon-Earth communication, or EME, sends a signal to the Moon and receives the small part its surface scatters back toward Earth. The signal spreads over a vast area on the way to the Moon, and the echo spreads again on the way back. Together with the small fraction the Moon returns, that spreading creates a very large path loss. Antenna gain, low receiver noise, and narrow signal bandwidth help recover that weak return.

Both stations must have the Moon “visible” at the same time. Here “visible” means above the usable horizon, not visible to the naked eye; you can work a Moon path in daylight or through cloud. Because the Moon is so distant, nearly half of Earth faces it at once. One station can have the Moon rising on its horizon while the other watches it set. Their separation along the surface can approach half of Earth's circumference.

![Earth drawn as a circle. The Moon, too far away to draw, lies off to the right. The right half of the circle, facing the Moon, is shaded and labeled Moon visible; the left half is labeled Moon not visible. Station A sits at the top of the circle and station B at the bottom, on the boundary between the halves. From each station, a horizontal arrow labeled to the Moon runs right along that station's horizon, so both see the Moon just at the horizon. A thick orange arc runs from A around the shaded side to B and is labeled about 12,000 miles, half of Earth's circumference.](../../../images/s7-4-eme-visibility.svg)
{.img-centered .img-large .img-mobile-full caption="Stations at opposite edges of the Moon-facing half each see the Moon on the horizon."}

> **Key Information:** The approximate maximum EME separation measured along Earth's surface is 12,000 miles, if the Moon is “visible” by both stations. {{< link id="E3A01" >}}

#### Flutter and Distance

Even with both antennas aimed at the Moon, the returned signal can flutter. Different parts of the Moon's rough surface return energy over slightly different paths. Earth and lunar motion keep the Moon's apparent orientation rocking slightly, a motion called **libration**. That motion gives the returns slightly different Doppler shifts, so their contributions alternately reinforce and cancel.

> **Key Information:** Libration fading of an EME signal is characterized by a fluttery, irregular fading. {{< link id="E3A02" >}}

At VHF, those Doppler differences are too small to hear as a change in pitch.

Lunar distance offers a more predictable advantage. **Perigee** is the nearest point in the Moon's orbit; **apogee** is the farthest. A nearer reflector reduces spreading on both legs of the trip. Each leg's loss grows with the square of distance, so the round trip's grows with the fourth power. Perigee is about 10 percent closer than apogee, which saves about 2 dB.

> **Key Information:** When scheduling EME contacts, the least path loss generally comes when the Moon is at perigee. {{< link id="E3A03" >}}

On a lunar calendar, look for the perigee date. A full Moon describes the lit face seen from Earth, not the Moon's distance.
