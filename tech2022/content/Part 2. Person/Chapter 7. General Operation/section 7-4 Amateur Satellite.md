---
questions: [ "T1A07", "T1E02", "T8B01", "T8B03", "T8B06", "T8B05", "T8B04", "T8B09", "T8B11", "T1B02", "T8B02", "T8B07", "T8B08", "T8B10", "T8B12" ]
---

### Section 7.4: Amateur Satellite Operation

Alright, space cadets, strap in for a journey to the final frontier of ham radio - satellite operation! Yes, you heard that right. As a Technician, you can literally bounce your signals off satellites whizzing hundreds of miles above Earth. How cool is that?

#### What are Amateur Satellites?

Amateur satellites, often called "OSCAR" (Orbiting Satellite Carrying Amateur Radio), are like space-based repeaters. They receive signals on one frequency (uplink) and retransmit them on another (downlink). It's like playing cosmic ping-pong with your radio waves!

When we talk about satellites in amateur radio, we're referring to what the FCC officially calls "space stations" in the Amateur Radio Service. Specifically, a space station is defined as an amateur station located more than 50 km above the Earth's surface. This includes purpose-built amateur satellites and amateur radio equipment on other spacecraft, like the International Space Station (ISS).

You may see some satellites referred to as a LEO satellite; don't worry, those are not Law Enforcement Operators, **LEO** in this case stands for **Low Earth Orbit**. Remember that when we are talking about "orbit", the term "low" becomes just a bit relative! These space speedsters zip around Earth at altitudes between about 100 to 1,200 miles. They're close enough that you don't need much power to reach them, and they pass overhead several times a day. The catch? Each pass only lasts 5 to 15 minutes, so you've got to be quick! Most amateur sats, including the popular FM 'birds', are LEOs. It's like having a chat with a friend on a fast-moving train - brief, but exciting!

#### Satellite Beacons and Telemetry

Now, let's talk about satellite beacons. These are special transmissions that satellites send out regularly, like a space-based lighthouse. But instead of just saying 'Hey, I'm here!', these beacons are packed with useful information. They typically transmit telemetry data about the health and status of the satellite. This can include things like battery voltage levels, temperature readings, operating mode, and spacecraft orientation. By listening to these beacons, hams on the ground can keep tabs on the satellite's condition. It's like getting a space weather report and a health checkup all in one!

Satellite beacons aren't just for telemetry. They also help you locate and identify the satellite. It's like a cosmic game of Marco Polo - the beacon calls out, and you use it to find the satellite's signal.

Best of all, beacons aren't encrypted – anyone can receive them!

#### Satellite Signal Characteristics: Spin Fading

Ever wonder why satellite signals can sound like they're doing a weird dance? Let's talk about spin fading! 

When a satellite rotates, its antennas change orientation relative to the Earth. This rotation can cause the signal strength to vary periodically - almost like a cosmic lighthouse effect. As the satellite turns, its antennas might point toward or away from Earth at different moments, creating a fluctuating signal strength. This phenomenon is called "spin fading".

Imagine a satellite spinning like a slowly tumbling basketball in space. As it turns, the antenna's radiation pattern changes, which means the signal strength you receive goes up and down. It's not interference or Doppler shift - it's simply the physical rotation of the satellite itself causing these signal variations.

This is why satellite operators and ham radio enthusiasts tracking satellites need to be aware of the satellite's rotational characteristics. Some advanced tracking software even takes spin fading into account when predicting signal strength.

#### Getting Started with Satellite Operation

Here's what you need to know to get started:

1. Frequencies: Most ham satellites operate on VHF and UHF bands, right in your Technician wheelhouse. You'll often use one band for uplink and another for downlink.

2. Doppler Shift: Doppler shift is the reason your satellite frequencies seem to drift during a pass. As the satellite approaches, the frequency appears higher, and as it moves away, it seems lower. It's like the changing pitch of a passing train's whistle, but with radio waves!

3. Tracking: Satellites move fast! You'll need to know when they're passing overhead. Satellite tracking programs are your best friends here. These nifty tools provide real-time maps of satellite positions, pass predictions, and even Doppler shift calculations. It's like having a space traffic control center right on your computer!
  
    Now, you might wonder how these tracking programs work their magic. They rely on some pretty fancy math called Keplerian elements. Don't worry, you don't need to understand the math! Just know that these elements are a set of numbers that describe the satellite's orbit. They're like a cosmic recipe for predicting where a satellite will be at any given time.
    
    The tracking program takes these Keplerian elements (often just called 'Keps' by satellite enthusiasts), crunches the numbers, and voila! You get a prediction of when and where to point your antenna. These Keps get updated regularly to account for changes in the satellite's orbit. So when you're using a tracking program, remember to keep your Keplerian elements up to date. It's like making sure you have the latest map before going on a road trip - you want the most accurate directions to find your satellite!

4. Antennas: While you can make some contacts with a handheld and its stock antenna, directional antennas work much better. Think of it as using a laser pointer instead of a flashlight to signal your space friends.

5. Power: Unlike terrestrial repeaters, you don't need much power. In fact, too much power can overwhelm the satellite. It's like yelling into a microphone - you'll overload the system and make it harder for everyone to communicate. Always use just enough power to make the contact. A good way to verify that your power is right is if your signal strength on the downlink is about the same as the signal strength of the satellite beacon.

#### Types of Satellite Operations

Some cool satellite operations to try:

- FM Satellites: These are great for beginners. They work just like a repeater in the sky.
- Linear Transponder Satellites: These receive a specific range of frequencies (typically 40 - 100 kHz) in one band (the uplink), convert them to another band and amplify the converted signal for transmission on the downlink band. 
  * Because it covers a range of frequencies rather than operating a particular mode, you can use any mode that fits in the uplink range! SSB, FM, CW, Data... all are used on this type of satellite.
- International Space Station (ISS): Yes, you can actually talk to astronauts! The ISS has a ham radio onboard.



#### Important Points to Remember

For the exam and operation, remember:

- Satellites use "U/V" or "V/U" designations. "U/V" means uplink is UHF, downlink is VHF. "V/U" is the opposite – uplink on VHF, downlink on UHF.
- Any amateur holding a Technician class license or higher can use amateur satellites.
- Operating through an amateur satellite doesn't require any special license beyond what's needed for the frequencies being used.
- Satellites have limited power and sensitivity, so using excessive uplink power can cause more harm than good. It's like shouting in a small room - not only does it not help you be heard better, but it can drown out everyone else trying to talk. When you use too much power, your signal can overwhelm the satellite's receiver, effectively blocking other users from accessing it. It's a bit like hogging all the lanes on a highway - nobody else can get through! This is why it's crucial to use just enough power to make your contact, keeping the satellite accessible for everyone. Remember, in satellite operations, finesse beats brute force every time!

#### Pro Tips for Satellite Operation

Satellite operation might seem daunting, but it's incredibly rewarding. Here are some tips:

1. Start by listening. Get familiar with satellite passes and how they sound before you try transmitting. It's like learning to dance - listen to the music before you hit the floor!

2. Use tracking software to plan your operations. It's like having a cosmic timetable at your fingertips.

3. Be mindful of your power. Start low and only increase if necessary. It's better to whisper and be heard than to shout and cause interference. 

Remember, every time you make a satellite contact, you're participating in a grand space adventure. You're using technology orbiting Earth at thousands of miles per hour to chat with fellow hams. If that doesn't make you feel like a space-age radio hero, I don't know what will!

So, grab your radio, point it at the sky, and get ready to say "CQ satellite!" Who knows? Your next contact might be with an astronaut on the ISS. Now that's what I call taking your radio hobby to new heights!