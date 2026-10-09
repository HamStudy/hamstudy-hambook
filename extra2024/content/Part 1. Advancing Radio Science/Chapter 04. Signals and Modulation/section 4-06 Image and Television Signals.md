---
chapter: "4"
section: "4.6"
questions: ["E2B10", "E2B04", "E2B12", "E2B11", "E2B09", "E2B02", "E2B03", "E2B06", "E2B05", "E2B08", "E2B07", "E2B01"]
status: generated1
draft: true
---

### Section 4.6: Image and Television Signals

A radio can send a picture as a sequence of measurements. Read one row from left to right, send its values, and then begin the next row. The receiver rebuilds the image in the same order. How quickly those rows arrive separates slow-scan images from moving television.

#### A Picture Made from Tones

*Analog slow-scan television, or SSTV, represents brightness by audio tone frequency.* A change from dark to light changes the tone's pitch. Turning up the receiver's volume does not make the encoded picture brighter because amplitude is not the brightness measurement.

Color needs more information than brightness alone. *The transmitter sends color components in sequence, and the receiver combines them into the displayed image.* *Synchronizing tones mark the line timing; a code at the start identifies which SSTV format supplies that timing and color sequence.*

> **Key Information:**
> - Tone frequency encodes brightness in analog SSTV. {{< link id="E2B10" >}}
> - Analog SSTV sends color lines sequentially. {{< link id="E2B04" >}}
> - Specific tone frequencies tell SSTV receiving software to begin a new picture line. {{< link id="E2B12" >}}
> - The vertical interval signaling, or VIS, code identifies the SSTV mode. {{< link id="E2B11" >}}

A strong signal can still produce a scrambled picture if the decoder uses the wrong mode. It may be hearing every tone correctly while putting the rows or colors in the wrong places. *The VIS code tells it which arrangement to expect.*

Digital image modes can send picture data through a voice-width channel too. Amateur use of the Digital Radio Mondiale, or DRM, protocol carries coded digital data that software turns back into a file or image. This differs from assigning a brightness value directly to each analog tone. *An SSB receiver preserves the signal in its audio output so the software can do the digital decoding.*

> **Key Information:** An SSB receiver can receive DRM-protocol SSTV for decoding by suitable software. {{< link id="E2B09" >}}

#### From Rows to Moving Frames

Fast-scan television refreshes whole pictures fast enough to show motion, so it needs much more bandwidth. The analog NTSC system divides each frame into two *fields*. *One field scans the odd-numbered lines; the next fills in the even-numbered lines between them.* This is interlaced scanning.

> **Key Information:**
> - An NTSC fast-scan television frame contains 525 horizontal lines. {{< link id="E2B02" >}}
> - Interlacing scans odd-numbered lines in one field and even-numbered lines in the next. {{< link id="E2B03" >}}

The 525 count includes the line intervals used for blanking and timing; it is not a count of 525 visible picture rows. Keep *field* and *frame* distinct: the two fields together complete a frame.

#### Leaving a Vestige

An AM video signal would contain two full sidebands. Removing one completely saves bandwidth, but preserving very low video frequencies near the carrier would demand a difficult filter transition. *Vestigial sideband, or VSB, keeps one full sideband and a small portion of the other.*

> **Key Information:**
> - VSB is amplitude modulation with one complete sideband and a portion of the other transmitted. {{< link id="E2B06" >}}
> - In analog fast-scan TV, VSB reduces bandwidth while improving the fidelity of low-frequency video components. {{< link id="E2B05" >}}

That remaining portion gives the transmitter and receiver a workable response around the carrier. It is not a separate sideband reserved for sound or color.

Some cable-TV channel frequencies overlap the 70-centimeter amateur band. *A compatible analog television receiver that tunes those cable channels can therefore receive amateur fast-scan television without first moving it into a broadcast-TV channel.*

> **Key Information:** Transmitting on channels shared with cable TV permits compatible commercial analog TV receivers to receive 70-centimeter fast-scan amateur TV. {{< link id="E2B08" >}}

The receiver must actually support the analog format and cable-channel tuning. The presence of a screen and an antenna socket alone does not establish that compatibility.

#### Video and Error Protection

Digital television encodes the picture as data, adds error protection, and maps the resulting bits onto modulation symbols. *DVB-T, Digital Video Broadcasting—Terrestrial, uses OFDM subcarriers with QPSK or QAM symbol states.*

> **Key Information:** Amateur DVB-T television uses QAM and QPSK modulation. {{< link id="E2B07" >}}

The *coding rate* tells how much of a coded stream represents information before forward error correction was added. *A rate of $3/4$ means three information bits for every four transmitted coded bits. The remaining one bit in four provides error protection.*

$$\text{FEC fraction}=1-\frac34=\frac14=25\%.$$

> **Key Information:** A digital-TV coding rate of 3/4 means 25% of the data sent is forward error correction data. {{< link id="E2B01" >}}

For every 3,000 information bits in this example, the encoder sends 4,000 coded bits. The extra 1,000 let the receiver repair some errors without requesting the picture again. That is coding overhead, not picture compression and not a time-slot guard interval.
