---
chapter: "4"
section: "4.5"
questions: ["E8B10", "E8B11", "E8B08", "E8B07", "E8D03", "E8D02", "E8D01"]
status: generated1
draft: true
---

### Section 4.5: Sharing Signal Bandwidth

Suppose one radio link has several data streams to deliver. They need not wait for separate radio links: several streams can share one transmitted signal. One method gives each stream its own frequency range. Another lets the streams take turns. The receiver must know the arrangement so it can separate the messages again.

#### Dividing Frequency or Time

*Frequency division multiplexing, or FDM, divides the available spectrum into smaller bands.* For example, one data stream might occupy a lower subchannel while another occupies a higher one. They travel at the same time, and receiver filters separate them.

*Time division multiplexing, or TDM, assigns time slots instead.* A repeating frame could carry stream A, then stream B, then stream C. Each stream shares the channel's frequency range but uses only its assigned moments.

> **Key Information:**
> - FDM divides a transmitted signal into separate frequency bands, each carrying a different data stream. {{< link id="E8B10" >}}
> - Digital TDM arranges two or more signals in discrete time slots within a data transmission. {{< link id="E8B11" >}}

FDM needs frequency separation. TDM needs timing agreement. Neither method, by itself, supplies error correction.

#### Closely Packed Subcarriers

Ordinary FDM leaves room between channels so their filters can separate them. Orthogonal frequency-division multiplexing, or OFDM, takes a more coordinated approach. It divides digital data among many subcarriers whose frequencies have a precise relationship to the symbol interval.

*Orthogonal* means the receiver can separate these subcarriers over that interval even though their spectra overlap. Each subcarrier's spectral zeros align with the centers of the others: where one subcarrier is being measured, the others contribute zero over the symbol interval. Guard intervals help keep delayed copies of an earlier symbol from interfering with the next one.

> **Key Information:**
> - OFDM is a digital modulation technique using subcarriers at frequencies chosen to avoid intersymbol interference. {{< link id="E8B08" >}}
> - Amateur digital modes use OFDM. {{< link id="E8B07" >}}

The exam description groups the result under intersymbol interference. More precisely, orthogonal spacing separates the subcarriers, while timing and the guard interval control interference between successive symbols. These features work together; arbitrary overlapping carriers would not give the same result.

#### Spreading a Signal on Purpose

Spread spectrum distributes a signal over more spectrum than the message would otherwise require. The transmitter and receiver use the same known sequence to spread and recover it. *Pseudorandom* means the sequence looks irregular but is reproducible.

*With frequency hopping, the transmitted signal rapidly visits different frequencies according to that sequence.* A receiver following the same hops can keep recovering the message. An interferer confined to one frequency affects only part of the sequence.

*Direct sequence instead combines the data with a much faster binary sequence, often called a chip sequence. That sequence rapidly changes the carrier's phase.* The receiver applies the matching sequence to gather the wanted signal back into its original bandwidth.

> **Key Information:**
> - Frequency hopping rapidly varies the transmitted frequency according to a pseudorandom sequence. {{< link id="E8D03" >}}
> - Direct-sequence spread spectrum uses a high-speed binary bit stream to shift an RF carrier's phase. {{< link id="E8D02" >}}
> - Spread-spectrum reception suppresses signals that do not use the matching spread-spectrum algorithm. {{< link id="E8D01" >}}

The interference does not receive the same recovery benefit as the wanted signal. This provides resistance to interference, not immunity: a strong enough unwanted signal can still overwhelm the receiver.
