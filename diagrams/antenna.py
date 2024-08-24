import numpy as np
import matplotlib.pyplot as plt

# Speed of light in meters per second
c = 3e8

# Define the frequencies in Hz
frequencies = [146e6, 222e6, 440e6]
# Corresponding wavelengths in meters
wavelengths = [c / frequency for frequency in frequencies]

# Define the distance as twice the wavelength of the longest wave and round it
distance = round(wavelengths[0] * 2, 2)  # wavelength[0] corresponds to 146 MHz (longest wavelength)

# Time it takes for light to travel the distance
time_to_travel = distance / c  # in seconds

# Create a common x-axis from 0 to `distance` meters
x = np.linspace(0, distance, 1000)

# Create a stacked plot
fig, axes = plt.subplots(len(frequencies), 1, figsize=(10, 12))

# Set a title at the top of the entire figure indicating the travel time
fig.suptitle(f"Time for light to travel {distance} meters: {time_to_travel:.2e} seconds", fontsize=14)

# Plot each sine wave with the same x-axis scale
for i, (wavelength, frequency) in enumerate(zip(wavelengths, frequencies)):
    y = np.sin(2 * np.pi * x / wavelength)  # Sine wave equation
    axes[i].plot(x, y)
    
    # Labeling the axes
    axes[i].set_title(f"Sine Wave for {frequency/1e6:.2f} MHz (Wavelength: {wavelength:.2f} meters)")
    axes[i].set_xlabel("Distance (meters)")
    axes[i].set_ylabel("Amplitude")
    
    # Set the grid lines to light gray
    axes[i].grid(True, color='lightgray')
    
    # Annotate wavelength on the x-axis
    axes[i].axvline(x=wavelength, color='r', linestyle='--')
    axes[i].text(wavelength, 0, f' Wavelength = {wavelength:.2f} m', verticalalignment='bottom', horizontalalignment='right', color='red')

    # Calculate and mark the quarter wavelength
    quarter_wavelength = wavelength / 4
    quarter_wavelength_in_inches = quarter_wavelength * 39.37  # Convert meters to inches

    # Vertical line at 1/4 wavelength
    axes[i].axvline(x=quarter_wavelength, color='blue', linestyle=':')
    axes[i].text(quarter_wavelength, y.max()/2, f'1/4 Wavelength = {quarter_wavelength:.2f} m\n({quarter_wavelength_in_inches:.2f} inches)',
                 verticalalignment='center', horizontalalignment='right', color='blue', bbox=dict(facecolor='white', alpha=0.8))
    axes[i].plot([quarter_wavelength, quarter_wavelength], [0, np.sin(2 * np.pi * quarter_wavelength / wavelength)], color='blue', linestyle='--')
    
    # Horizontal line from 0 to 1/4 wavelength
    axes[i].hlines(0, 0, quarter_wavelength, color='#00bcd6', linestyle='-', linewidth=2)

    # Set the x-axis limit to 0 to `distance` meters
    axes[i].set_xlim(0, distance)

# Adjust layout for better spacing
plt.tight_layout(rect=[0, 0, 1, 0.96])  # Adjust for the suptitle

# Save the figure as an SVG file
plt.savefig("sine_waves_with_quarter_wavelengths.svg", format="svg")

# Display the plot
plt.show()
