import matplotlib.pyplot as plt
import numpy as np
import sys

# Check command line arguments for language selection
use_spanish = len(sys.argv) > 1 and sys.argv[1] == "es"

# Define translations
if use_spanish:
    labels = {
        'ground': 'Suelo',
        'ionosphere': 'Ionosfera',
        'ground_wave': 'Bandas 160m, 80m, 60m (Onda Terrestre)',
        'sky_wave': 'Bandas 40m, 30m, 20m, 17m,\n15m, 12m, 10m (Onda Ionosférica)',
        'vhf_los': '2m (VHF, Línea de Vista)',
        'uhf_los': '70cm (UHF, Línea de Vista)',
        'nvis': '80m, 40m NVIS',
        'title': 'Características de Propagación por Bandas de Radio Aficionado'
    }
    filename_suffix = '-es'
else:
    labels = {
        'ground': 'Ground',
        'ionosphere': 'Ionosphere',
        'ground_wave': '160m, 80m, 60m Bands (Ground-Wave)',
        'sky_wave': '40m, 30m, 20m, 17m,\n15m, 12m, 10m Bands (Skywave)',
        'vhf_los': '2m (VHF, Line-of-Sight)',
        'uhf_los': '70cm (UHF, Line-of-Sight)',
        'nvis': '80m, 40m NVIS',
        'title': 'Propagation Characteristics by Ham Radio Bands'
    }
    filename_suffix = ''

# Create figure and axis
fig, ax = plt.subplots(figsize=(12, 8))

# Draw the ground
ax.plot([-1, 11], [0, 0], color='saddlebrown', linewidth=3)
ax.text(5.5, -0.3, labels['ground'], ha='center', va='center', color='saddlebrown', fontsize=12)

# HF Low Frequencies: Ground-Wave Propagation (160m, 80m, 60m bands)
ground_wave_x = np.linspace(1, 4, 500)  # Shorter range for ground-wave
ground_wave_y = 0.3 * np.sin(np.pi * (ground_wave_x - 1) / 3)  # Adjusted to stay above ground
ax.plot(ground_wave_x, ground_wave_y, color='darkblue', linestyle='-', linewidth=2, label=labels['ground_wave'])
ax.text(5.5, 0.1, labels['ground_wave'], ha='center', color='darkblue', fontsize=10)

# Add an arrow to the ground-wave arc
ax.annotate('', xy=(3.5, 0.3 * np.sin(np.pi * (3.5 - 1) / 3)), xytext=(3, 0.3 * np.sin(np.pi * (3 - 1) / 3)),
            arrowprops=dict(facecolor='darkblue', shrink=0.05, width=2, headwidth=8))

# HF Mid to High Frequencies: Ionospheric Reflection (40m, 30m, 20m, 17m, 15m, 12m, 10m bands)
hf_x = np.linspace(1, 8, 500)  # Longer range for skywave
hf_y = 3 * np.sin(np.pi * (hf_x - 1) / 7)  # Adjusted to reach the ionosphere and reflect down
ax.plot(hf_x, hf_y, color='blue', linestyle='--', linewidth=2, label=labels['sky_wave'])
ax.text(8.75, 1.25, labels['sky_wave'], ha='center', color='blue', fontsize=10)

# VHF Propagation: Line-of-Sight (2m band)
ax.arrow(1, 0, 6, 2, head_width=0.2, head_length=0.2, fc='green', ec='green', linewidth=2)
ax.text(5.5, 1, labels['vhf_los'], ha='center', color='green', fontsize=10)

# UHF Propagation: Line-of-Sight (70cm band)
ax.arrow(1, 0, 3.5, 1.5, head_width=0.2, head_length=0.2, fc='red', ec='red', linewidth=2)
ax.text(4, 1.75, labels['uhf_los'], ha='center', color='red', fontsize=10)

# Add NVIS Propagation (80m, 40m bands)
# Upward NVIS line with a 5-degree forward angle
ax.arrow(1, 0, 0.3, 2.7, head_width=0.2, head_length=0.2, fc='orange', ec='orange', linewidth=2)
# Downward NVIS line with a 5-degree forward angle
ax.arrow(1.3, 3, 0.3, -2.7, head_width=0.2, head_length=0.2, fc='orange', ec='orange', linewidth=2)
ax.text(0.2, 1.5, labels['nvis'], ha='center', color='orange', fontsize=10)

# Add the ionosphere
ax.plot([-1, 11], [3, 3], color='purple', linestyle=':', linewidth=2)
ax.text(9.25, 3.1, labels['ionosphere'], va='center', color='purple', fontsize=12)

# Set limits and labels
ax.set_xlim(-0.5, 10.5)
ax.set_ylim(-0.5, 4)
ax.axis('off')  # Hide the axes

# Set title and legend
ax.set_title(labels['title'], fontsize=16, fontweight='bold')
ax.legend(loc='upper right')

# Save the figure as an SVG file with tight bounding box
output_filename = f'propagation-types{filename_suffix}.svg'
plt.savefig(output_filename, bbox_inches='tight')
print(f"Saved diagram as {output_filename}")

# Display the diagram
plt.show()
