import numpy as np
import matplotlib.pyplot as plt

# Constants
speed_of_light = 3e8  # Speed of light in m/s

# Array of frequencies (add more frequencies here if needed)
frequencies = [146.52e6, 440e6]  # Example: 146.52 MHz and 440 MHz

# Relative positions for arrow start (relative to the wave cycle)
relative_arrow_positions = [0.25, 0.75]  # For each frequency, set where the arrow starts

# Y positions for the arrow lines (set to 1 or -1)
arrow_y_positions = [1, -1]  # Arrow Y positions corresponding to each frequency

# Define time values to cover two complete cycles of the lowest frequency signal
t = np.linspace(0, 2 / min(frequencies), 1000)  # Time array for two cycles of the lowest frequency

# Create the plot with adjusted padding
plt.figure(figsize=(12, 3.5))

# Iterate over frequencies to plot each signal and annotate wavelengths
for i, freq in enumerate(frequencies):
    # Generate the signal
    signal = np.sin(2 * np.pi * freq * t)

    # Calculate the wavelength in meters and convert to centimeters if necessary
    wavelength_m = speed_of_light / freq
    wavelength_label = f'{wavelength_m:.2f} m' if wavelength_m > 1 else f'{wavelength_m * 100:.2f} cm'

    # Plot the signal
    color = 'blue' if i % 2 == 0 else 'red'  # Alternate colors for clarity
    plt.plot(t * 1e9, signal, label=f'{freq / 1e6:.2f} MHz (Wavelength ≈ {wavelength_label})', color=color)

    # Calculate arrow start and end positions based on the relative position along the wave
    arrow_center = (relative_arrow_positions[i] / freq) * 1e9 + (1 / freq) * 1e9 / 2
    arrow_length = 0.9 * (1 / freq) * 1e9  # 90% of the wavelength for padding
    arrow_start = arrow_center - arrow_length / 2
    arrow_end = arrow_center + arrow_length / 2

    # Determine Y positions for annotations
    y_position = arrow_y_positions[i]  # Use the specified Y position for the arrow line
    text_y_position = y_position - 0.05 if y_position > 0 else y_position + 0.05

    # Draw arrow and annotate wavelength
    plt.annotate('', xy=(arrow_start, y_position), xytext=(arrow_end, y_position),
                 arrowprops=dict(arrowstyle='<->', color=color))
    plt.text((arrow_start + arrow_end) / 2, text_y_position, wavelength_label, ha='center',
             va='bottom' if y_position < 0 else 'top', color=color)

# Title and labels
plt.title('Frequency vs. Wavelength - Distance Traveled at Light Speed')
plt.xlabel('Distance (nanoseconds, scaled to represent distance traveled at light speed)')
plt.ylabel('Amplitude')
plt.grid(True, alpha=0.5)  # Lighter grid lines
plt.gca().yaxis.set_major_locator(plt.MaxNLocator(4))  # Reduce the number of Y-axis divisions

# Move the legend below the plot
plt.legend(loc='upper center', bbox_to_anchor=(0.5, -0.25), ncol=2)

# Tighten layout to remove extra vertical padding
plt.tight_layout()

# Save the plot as SVG
plt.savefig('freq_vs_wavelen_dualband.svg', format='svg', bbox_inches='tight')
plt.close()

print("Updated diagram with reduced padding, lighter grid, and explanatory labels has been generated.")
