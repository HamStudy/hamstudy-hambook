import numpy as np
import matplotlib.pyplot as plt

# Configurable number of cycles to display
num_cycles = 2  # Change this value to show more or fewer cycles

# Define time values for the specified number of cycles at 60 Hz (Period = 1/60 seconds per cycle)
t = np.linspace(0, num_cycles / 60, num_cycles * 1000)  # Time array adjusted based on num_cycles

# Define AC input signal (120V peak)
ac_signal = 120 * np.sin(2 * np.pi * 60 * t)  # 60 Hz frequency

# Half-wave rectified signal (positive half only)
half_wave_rectified = np.maximum(ac_signal, 0)

# Full-wave rectified signal (both halves positive)
full_wave_rectified = np.abs(ac_signal)

# Set Y-axis limits
y_limits_ac = (-130, 130)  # Y-axis limits for input waveforms
y_limits_rectified = (-130, 130)  # Y-axis limits for rectified waveforms

# Create a single figure with three subplots:
# 1. Input AC waveform
# 2. Half-wave rectified output
# 3. Full-wave rectified output

fig, axes = plt.subplots(3, 1, figsize=(5, 3), sharex=True)

# Plot input AC waveform
axes[0].plot(t * 1000, ac_signal, label='Input AC (120V Peak)', color='blue')
axes[0].set_title('Input AC Waveform')
axes[0].set_ylabel('')
axes[0].grid(True)
axes[0].set_ylim(y_limits_ac)
axes[0].axhline(0, color='black', linewidth=0.5)
axes[0].set_yticklabels([])
axes[0].set_xticklabels([])

# Plot half-wave rectified waveform
axes[1].plot(t * 1000, half_wave_rectified, label='Half-Wave Rectified Output', color='red')
axes[1].set_title('Half-Wave Rectified Output')
axes[1].set_ylabel('Voltage (E)')
axes[1].grid(True)
axes[1].set_ylim(y_limits_rectified)
axes[1].axhline(0, color='black', linewidth=0.5)
axes[1].set_yticklabels([])
axes[1].set_xticklabels([])

# Plot full-wave rectified waveform
axes[2].plot(t * 1000, full_wave_rectified, label='Full-Wave Rectified Output', color='green')
axes[2].set_title('Full-Wave Rectified Output')
axes[2].set_xlabel('Time')
axes[2].set_ylabel('')
axes[2].grid(True)
axes[2].set_ylim(y_limits_rectified)
axes[2].axhline(0, color='black', linewidth=0.5)
axes[2].set_yticklabels([])
axes[2].set_xticklabels([])

plt.tight_layout()
plt.savefig("rectifier-waveforms.svg", format="svg")
plt.close()

print("Single figure with input and both rectified outputs saved as rectifier-waveforms.svg.")
