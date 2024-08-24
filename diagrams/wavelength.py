import numpy as np
import matplotlib.pyplot as plt

# Speed of light in meters per second
c = 3e8

# Define the length to be displayed on the x-axis (in meters)

# Define the frequencies in Hz
frequencies = [146e6, 222e6, 440e6]
# Corresponding wavelengths in meters
wavelengths = [c / frequency for frequency in frequencies]

distance = wavelengths[0] * 2  # twice the wavelength of the longest wave

# Time it takes for light to travel the distance (4 meters)
time_to_travel = distance / c  # in seconds

# Create a common x-axis from 0 to `distance` meters
x = np.linspace(0, distance, 1000)

# Create a stacked plot
fig, axes = plt.subplots(len(frequencies), 1, figsize=(10, 12))

roundedDist = round(distance, 2)

# Set a title at the top of the entire figure indicating the travel time
fig.suptitle(f"Time for light to travel {roundedDist} meters: {time_to_travel:.2} seconds", fontsize=14)

# Plot each sine wave with the same x-axis scale
for i, (wavelength, frequency) in enumerate(zip(wavelengths, frequencies)):
    y = np.sin(2 * np.pi * x / wavelength)  # Sine wave equation
    axes[i].plot(x, y)
    
    # Labeling the axes
    axes[i].set_title(f"Sine Wave for {frequency/1e6:.2f} MHz (Wavelength: {wavelength:.2f} meters)")
    axes[i].set_xlabel("Distance traveled at the speed of light (meters)")
    axes[i].set_ylabel("Amplitude")
    
    # Set the grid lines to light gray
    axes[i].grid(True, color='#eeeeee')
    
    # Annotate wavelength on the x-axis
    axes[i].axvline(x=wavelength, color='r', linestyle='--')
    axes[i].text(wavelength, 0, f' Wavelength = {wavelength:.2f} m', verticalalignment='bottom', horizontalalignment='right', color='red')
    
    # Set the x-axis limit to 0 to `distance` meters
    axes[i].set_xlim(0, distance)

# Adjust layout for better spacing
plt.tight_layout(rect=[0, 0, 1, 0.96])  # Adjust for the suptitle

plt.savefig("sine_waves.svg", format="svg")

# Display the plot
plt.show()
