import matplotlib.pyplot as plt
import numpy as np

# Create figure and axis
fig, ax = plt.subplots(figsize=(12, 6))

# Draw the ground
ax.plot([-1, 11], [0, 0], color='saddlebrown', linewidth=3)
ax.text(5, -0.3, 'Ground', ha='center', va='center', color='saddlebrown', fontsize=12)

# HF Low Frequencies: Ground-Wave Propagation (Curved Near Ground)
ground_wave_x = np.linspace(0, 10, 500)
ground_wave_y = 0.5 * np.sin(0.5 * np.pi * ground_wave_x / 10)  # Low sine wave near the ground
ax.plot(ground_wave_x, ground_wave_y, color='darkblue', linestyle='-', linewidth=2, label='HF (Ground-Wave Propagation)')
ax.text(8, 0.6, 'Lower HF (Ground-Wave)', ha='center', color='darkblue', fontsize=10)

# Add an arrow to the ground-wave arc
ax.annotate('', xy=(7, 0.5 * np.sin(0.5 * np.pi * 7 / 10)), xytext=(6.5, 0.5 * np.sin(0.5 * np.pi * 6.5 / 10)),
            arrowprops=dict(facecolor='darkblue', shrink=0.05, width=2, headwidth=8))

# HF High Frequencies: Ionospheric Reflection (Curved Path)
hf_x = np.linspace(0, 10, 500)
hf_y = 3 * np.sin(np.pi * hf_x / 10)  # Higher sine wave to simulate ionospheric reflection
ax.plot(hf_x, hf_y, color='blue', linestyle='--', linewidth=2, label='HF (Ionospheric Reflection)')
ax.text(5, 3.2, 'Higher HF (Ionospheric)', ha='center', color='blue', fontsize=10)

# VHF Propagation: Line-of-Sight (Straight Line)
ax.arrow(1, 0.1, 8, 2, head_width=0.2, head_length=0.2, fc='green', ec='green', linewidth=2)
ax.text(5, 1.5, 'VHF (Line-of-Sight)', ha='center', color='green', fontsize=10)

# UHF Propagation: Line-of-Sight (Straight Line, Shorter Path)
ax.arrow(1.5, 0.1, 6, 1.5, head_width=0.2, head_length=0.2, fc='red', ec='red', linewidth=2)
ax.text(5, 0.6, 'UHF (Line-of-Sight)', ha='center', color='red', fontsize=10)

# Add the ionosphere
ax.plot([-1, 11], [3, 3], color='purple', linestyle=':', linewidth=2)
ax.text(9.8, 3.1, 'Ionosphere', va='center', color='purple', fontsize=12)

# Set limits and labels
ax.set_xlim(-1, 11)
ax.set_ylim(-0.5, 4)
ax.axis('off')  # Hide the axes

# Set title and legend
ax.set_title('Propagation Characteristics by Frequency Band', fontsize=16, fontweight='bold')
ax.legend(loc='upper right')

# Save the figure
plt.savefig('propagation-types.svg', format='svg')

# Display the diagram
# plt.show()
