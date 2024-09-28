import matplotlib.pyplot as plt
import numpy as np

# Create figure and axis
fig, ax = plt.subplots(figsize=(12, 8))

# Draw the ground
ax.plot([-1, 11], [0, 0], color='saddlebrown', linewidth=3)
ax.text(5.5, -0.3, 'Ground', ha='center', va='center', color='saddlebrown', fontsize=12)

# HF Low Frequencies: Ground-Wave Propagation (160m, 80m, 60m bands)
ground_wave_x = np.linspace(1, 4, 500)  # Shorter range for ground-wave
ground_wave_y = 0.3 * np.sin(np.pi * (ground_wave_x - 1) / 3)  # Adjusted to stay above ground
ax.plot(ground_wave_x, ground_wave_y, color='darkblue', linestyle='-', linewidth=2, label='160m, 80m, 60m Bands (Ground-Wave)')
ax.text(5.5, 0.1, '160m, 80m, 60m Bands (Ground-Wave)', ha='center', color='darkblue', fontsize=10)

# Add an arrow to the ground-wave arc
ax.annotate('', xy=(3.5, 0.3 * np.sin(np.pi * (3.5 - 1) / 3)), xytext=(3, 0.3 * np.sin(np.pi * (3 - 1) / 3)),
            arrowprops=dict(facecolor='darkblue', shrink=0.05, width=2, headwidth=8))

# HF Mid to High Frequencies: Ionospheric Reflection (40m, 30m, 20m, 17m, 15m, 12m, 10m bands)
hf_x = np.linspace(1, 8, 500)  # Longer range for skywave
hf_y = 3 * np.sin(np.pi * (hf_x - 1) / 7)  # Adjusted to reach the ionosphere and reflect down
ax.plot(hf_x, hf_y, color='blue', linestyle='--', linewidth=2, label='40m, 30m, 20m, 17m, 15m, 12m, 10m Bands (Skywave)')
ax.text(8.75, 1.25, '40m, 30m, 20m, 17m,\n15m, 12m, 10m Bands (Skywave)', ha='center', color='blue', fontsize=10)

# VHF Propagation: Line-of-Sight (2m band)
ax.arrow(1, 0, 6, 2, head_width=0.2, head_length=0.2, fc='green', ec='green', linewidth=2)
ax.text(5.5, 1, '2m (VHF, Line-of-Sight)', ha='center', color='green', fontsize=10)

# UHF Propagation: Line-of-Sight (70cm band)
ax.arrow(1, 0, 3.5, 1.5, head_width=0.2, head_length=0.2, fc='red', ec='red', linewidth=2)
ax.text(4, 1.75, '70cm (UHF, Line-of-Sight)', ha='center', color='red', fontsize=10)

# Add NVIS Propagation (80m, 40m bands)
# Upward NVIS line with a 5-degree forward angle
ax.arrow(1, 0, 0.3, 2.7, head_width=0.2, head_length=0.2, fc='orange', ec='orange', linewidth=2)
# Downward NVIS line with a 5-degree forward angle
ax.arrow(1.3, 3, 0.3, -2.7, head_width=0.2, head_length=0.2, fc='orange', ec='orange', linewidth=2)
ax.text(0.2, 1.5, '80m, 40m NVIS', ha='center', color='orange', fontsize=10)

# Add the ionosphere
ax.plot([-1, 11], [3, 3], color='purple', linestyle=':', linewidth=2)
ax.text(9.25, 3.1, 'Ionosphere', va='center', color='purple', fontsize=12)

# Set limits and labels
ax.set_xlim(-0.5, 10.5)
ax.set_ylim(-0.5, 4)
ax.axis('off')  # Hide the axes

# Set title and legend
ax.set_title('Propagation Characteristics by Ham Radio Bands', fontsize=16, fontweight='bold')
ax.legend(loc='upper right')

# Save the figure as an SVG file with tight bounding box
plt.savefig('propagation-types.svg', bbox_inches='tight')

# Display the diagram
plt.show()
