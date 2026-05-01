---
chapter: "7"
section: "7.1"
questions: [ "T2A02", "T4B04", "T2B05", "T7B01", "T8A12", "T2B11", "T2B10", "T2A08" ]
state: complete
---

### Section 7.1: FM Operation

Welcome to FM (Frequency Modulation) — the mode you'll probably use most often as a new Technician. It's the standard for VHF/UHF voice communications, delivering clear audio with strong resistance to noise, which makes it perfect for everyday local contacts.

#### Understanding FM

![FM HT Antenna](../../../images/illus/ht-signalstick.svg)
{.img-xsmall .float-right}

FM is the default mode for most local communications, especially on VHF and UHF bands. While AM (Amplitude Modulation) gets jittery when there's electrical interference, FM keeps its cool, delivering clean audio even in noisy environments.

Instead of varying the strength of the signal (like AM does), FM varies the frequency slightly. It's like changing the color of a laser rather than the intensity. This is why FM sounds so clear on your car radio — and why it's perfect for local ham chats.

As we discussed in Section 3.5, there is also PM (Phase Modulation), which is so similar to FM in practical use that most hams don't know the difference. For convenience, we just refer to it as FM since the main difference lies in how the transmitter generates the signal.

#### Types of FM Operation

Now, let's talk about using FM in the ham world:

1. **Simplex Operation**: This is direct radio-to-radio communication — as introduced in Section 6.5, you and your contact are on the same frequency, taking turns to transmit and receive. It's great for local chats or emergency communications when repeaters might be down.

   > **Key Information:** The national calling frequency for FM simplex operations in the 2-meter band is 146.520 MHz. {{< link id="T2A02" >}}

   It's like the radio equivalent of a public square — used to make initial contact before moving to a different frequency.

2. **Repeater Operation**: As covered in Section 6.5, most VHF and UHF repeaters use FM. They listen on one frequency and transmit on another, vastly increasing your coverage area.

3. **Narrow Band FM**: Many modern radios use Narrow Band FM to allow more channels in the same frequency space. Think of it like fitting more cars into a parking lot by shrinking the spaces just a little.

#### FM Operating Tips

When operating FM, keep these tips in mind:

- Speak clearly and at a normal pace. No need to shout — the mic is right there!
- Leave a pause between transmissions. This gives others a chance to break in or call for help.
- Use simplex when possible. It keeps repeaters available for those who truly need the extended range.

A couple of FM-specific issues to watch for: tuning has to be precise (other modes may sound off-pitch when you're slightly off frequency, but FM just sounds bad), and as we discussed in Section 6.7, microphone volume matters too — talking too loudly can cause overdeviation, which results in audio dropouts on voice peaks.

> **Key Information:**
> - When an FM signal is received slightly off frequency, the audio becomes distorted. {{< link id="T4B04" >}}
> - Audio drops out on voice peaks because you are talking too loudly. {{< link id="T2B05" >}}
> - If you're told your FM transceiver is over-deviating, talk farther away from the microphone. {{< link id="T7B01" >}}

#### FM Quirks

FM has some quirks you should be aware of:

- **Capture Effect**: The strongest signal wins. If two stations transmit at the same time on the same frequency, you'll usually only hear the stronger one. If they're close in strength, you may hear garbled audio — or nothing at all.
- **Near-Far Problem**: A nearby station can overpower a more distant repeater, especially if their frequency is close. Try repositioning or using a directional antenna to help.

> **Key Information:** A disadvantage of FM compared to single sideband is that only one signal can be received at a time — a direct consequence of the capture effect. {{< link id="T8A12" >}}

#### Q-Codes and Common Abbreviations

Historically, operators using Morse code (CW) needed quick, standardized ways to express common messages. While these shortcuts aren't necessary in voice communication, they've become a lasting part of ham radio culture.

> **Key Information:** All of these are worth recognizing — hams use them constantly as colloquial slang — but the ones that may show up on your exam are QSY (changing frequency), QRM (receiving interference from other stations), and the procedural signal CQ (calling any station). {{< link id="T2B11" >}} {{< link id="T2B10" >}} {{< link id="T2A08" >}}

We won't cover all of them here, but these are some of the most common:

- **QSY** – "I'm changing frequency" or "Change your frequency to...".
- **QTH** – "My location is..." Used to tell others where you are.
- **QRM** – "I'm getting interference from other stations.".
- **QRN** – "I'm getting interference from atmospheric noise." Think thunderstorm static.
- **QSL** – "I confirm" or "I understand." Like saying "roger" or "copy.".
- **QRZ** – "Who is calling me?" Used when someone is calling but you didn't catch the callsign.
- **73** – "Best regards" or "Goodbye.".
- **88** – "Love and kisses." (Often used by ham couples or close friends.).
- **CQ** – "Calling any station." Use this when you want someone — anyone — to come back to you.
- **DX** – Refers to distance. "Working DX" means you're trying to make long-distance or foreign contacts.

These codes and abbreviations are part of ham radio's unique language.

---

FM is reliable and perfect for everyday conversations, but Technicians also have a small slice of HF available — which is what's coming up next.
