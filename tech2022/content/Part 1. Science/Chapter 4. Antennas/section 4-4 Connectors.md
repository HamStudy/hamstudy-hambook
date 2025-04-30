---
chapter: "4"
section: "4.4"
questions: [ "T9B07", "T9B06" ]
---
### Section 4.4: Connectors  

Ever tried to plug your phone charger into a USB-C port, only to realize it's micro-USB? That's the world of connectors in a nutshell. In ham radio, getting the right connection is crucial—it's the handshake between your radio and antenna.  

Let’s take a look at the connectors you’re most likely to encounter as a new Technician, especially if you’re working with handheld radios.  

#### SMA (SubMiniature version A)  

This little connector is like the smartphone of radio connectors—small, sleek, and everywhere these days. Most modern handheld radios use them, but here’s where it can get a bit tricky:  

- Major brands like **Icom, Yaesu, and Kenwood** typically put an **SMA-F (female)** connector on the radio, so you need an **SMA-M (male)** antenna.  
- However, many newer brands, especially **Baofeng and other Chinese brands**, do the opposite. They use an **SMA-M** connector on the radio, so you’ll need an **SMA-F** antenna.  

**Understanding SMA Connector Gender:**  
An **SMA-M (male) connector** has **internal threads** and a **center pin**. This often causes confusion because the **external threads** of an **SMA-F (female) connector** can make it *look* male at first glance. However, the key detail is that **the center conductor determines the gender**:  

| Center **pin** = **male** | Center **socket** = **female** |
|:---------:|:-----:|
| ![SMA Male Connector](../../../images/SMAMale.jpg) | ![SMA Female Connector](../../../images/SMAFemale.jpg) |
{.connector-table}

Confused yet? Don’t worry, you’ll get the hang of it. Just remember: whatever connector is on your radio, you need the *opposite* on your antenna.  

#### BNC (Bayonet Neill–Concelman)  

![BNC Male and Adapters](../../../images/bncadapters.jpg)
{.img-large .float-right} 

Think of BNC as the quick-change artist of connectors. Instead of screwing on like SMA, it has a **twist-and-lock** mechanism that makes connecting and disconnecting antennas a breeze. You'll see these on some handheld radios, a lot of test equipment, and even some HF accessories.

**Since early 2021, there's been a significant shift in the handheld radio community** toward using BNC connectors. While most handhelds still come with SMA connectors, a growing number of operators—especially those who regularly swap antennas—are now **adding BNC adapters to their radios**. This trend has accelerated quickly, with BNC adapters becoming standard equipment for many hams.

**Why are so many hams making this switch?**
- **Quick antenna changes**—twist-and-lock instead of multiple rotations with SMA threads
- **Reduced wear on radio connectors**—the adapter takes the strain instead of your radio's built-in connector
- **Flexibility for different situations**—swap between rubber duck, whip, and mobile antennas in seconds
- **Less risk of cross-threading**—a common issue with SMA connectors

However, adapters aren't for everyone. They **add bulk** and **a tiny amount of signal loss**. If you don't switch antennas often, sticking with what fits your radio directly is totally fine.


#### PL-259/SO-239 (UHF Connector)  

> **Key Information:** PL-259 connectors are **commonly used at HF and VHF frequencies** but are **not ideal for true UHF work**. {{< link id="T9B07" >}}

Despite its name, the “UHF connector” is a bit of a misnomer. It’s widely used for **HF and VHF** radios, but it’s not the best choice for UHF. The name originates from a time when the UHF spectrum was defined as a different (lower) range of frequencies but the connector name stuck.

You’ll find these connectors on a lot of **mobile and base station gear**. They’re **rugged**, **easy to solder**, and can handle **high power levels**.  

* The **PL-259** is the male **PL**ug.
* The **SO-239** is the female **SO**cket.

| PL-259 (UHF Male) | SO-239 (UHF Female) |
|:---------:|:-----:|
| ![PL-259 Connector (UHF Male)](../../../images/PL259.jpg) | ![SO-239 Connector (UHF Female)](../../../images/SO239.jpg) |
{.connector-table}

These connectors work well up to about **150 MHz**, but if you’re working above that, you might want to use **Type N** connectors instead.  

#### Type N  

> **Key Information:** Type N connectors are the **best choice for frequencies above 400 MHz** due to their **low loss and excellent shielding**.  {{< link id="T9B06" >}}

![Type N Male Connector](../../../images/typen.jpg)
{.img-med .float-right}

Meet the heavyweight champion of RF connectors. **Type N connectors** are like the armored tanks of the radio world—**strong, weatherproof, and built for high frequencies**.  

They’re designed for **UHF and microwave bands**, which means they work great for **repeaters, satellite communications, and serious VHF/UHF setups**. While they’re bigger than SMA or BNC connectors, they make up for it with **low signal loss and excellent shielding**.  

If you’re working at **frequencies above 400 MHz**, **Type N** is your best bet for **maximum performance**.  

#### Pro Tips for Using Connectors  

1. **Keep connectors clean and dry** – They're crucial connection points for your signal, so treat them well.    
2. **Tighten, but don’t over-tighten** – Hand-tight is usually just right for handhelds.
3. **Be gentle with SMA connectors** – They’re tough, but not indestructible.  
4. **Stick to one connector type in your shack** – It’ll save you from adapter headaches down the road.  

Remember, while adapters can be lifesavers, they’re **not ideal for permanent setups**. Every connection is a potential point of **signal loss or failure**. When possible, **use antennas and gear that match your radio’s connector directly**.

---

Understanding connectors isn’t the most exciting part of ham radio, but it’s one of the most **practical**. If you don’t know the difference between SMA-M and SMA-F, you might buy an antenna that won’t fit your handheld. If you don’t recognize a PL-259, you could end up with the wrong coax for your mobile or base station.  

Getting the right connectors means **less hassle, fewer adapters, and better performance**. Whether you’re hooking up a new antenna, changing radios, or building your station, knowing your connectors will save you time, money, and frustration.  

So before you hit "Buy Now" on that new antenna or coax, take a second to check the connector. A little knowledge here can save you a lot of headaches down the road!  
