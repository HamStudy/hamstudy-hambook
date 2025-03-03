import numpy as np
import matplotlib.pyplot as plt

# Define the sine wave parameters
frequency = 60  # Hz
voltage = 120   # Volts peak
time_period = 1 / frequency  # Time for one full cycle

# Generate time values for two full cycles
time = np.linspace(0, 2 * time_period, 200)  # 200 points across two cycles

# Generate the sine wave
waveform = voltage * np.sin(2 * np.pi * frequency * time)

# Create the plot
plt.figure(figsize=(6, 1.75))  # Set figure size
plt.plot(time * 1000, waveform, color="red", label="60Hz 120V AC")  # Convert time to milliseconds
plt.axhline(0, color='black', linewidth=0.5)  # Horizontal axis
plt.axvline(0, color='black', linewidth=0.5)  # Vertical axis
plt.xlabel("Time (ms)", color="black")
plt.ylabel("Voltage (V)", color="black")
plt.title("60Hz 120V AC Sine Wave (Two Cycles)", color="black")
plt.grid(True, linestyle=":", linewidth=0.5, color="gray")
plt.legend()

# Save as SVG
plt.savefig("sine_wave_two_cycles.svg", format="svg", bbox_inches="tight")

print("SVG file saved as 'sine_wave_two_cycles.svg'")
