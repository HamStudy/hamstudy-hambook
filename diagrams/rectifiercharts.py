import numpy as np
import matplotlib.pyplot as plt

# Configurable number of cycles to display
num_cycles = 2  # Change this value to show more or fewer cycles

# Define time values for the specified number of cycles at 60 Hz (Period = 1/60 seconds per cycle)
t = np.linspace(0, num_cycles / 60, num_cycles * 1000)  # Time array adjusted based on num_cycles

# Define signals
# 1. Original AC signal (120V peak)
ac_signal = 120 * np.sin(2 * np.pi * 60 * t)  # 60 Hz frequency

# 2. AC signal after a 10:1 transformer (12V peak)
transformed_signal = 12 * np.sin(2 * np.pi * 60 * t)  # Still 60 Hz after the transformer

# 3. Full-wave rectified signal (absolute value of transformed signal)
rectified_signal = np.abs(transformed_signal)

# Set Y-axis limits
y_limits_ac = (-130, 130)  # Y-axis limits for the first plot
y_limits_transformed = (-65, 65)  # Y-axis limits for the second and third plots

# Function to annotate both positive and negative peaks with a background box for readability
def annotate_peaks(ax, signal, expected_peak_value, threshold=1, annotate_zero=False):
    # Find indices where the signal is close to the positive peak value
    pos_peak_indices = np.where(np.isclose(signal, expected_peak_value, atol=threshold))[0]
    # Find indices where the signal is close to the negative peak value
    neg_peak_indices = np.where(np.isclose(signal, -expected_peak_value, atol=threshold))[0]

    # Annotate the first positive peak if found
    if len(pos_peak_indices) > 0:
        ax.annotate(f'+{expected_peak_value}V',
                    xy=(t[pos_peak_indices[0]] * 1000, signal[pos_peak_indices[0]]),
                    xytext=(t[pos_peak_indices[0]] * 1000 + 2, signal[pos_peak_indices[0]] + 10),
                    arrowprops=dict(facecolor='black', arrowstyle='->'),
                    fontsize=10, color='red',
                    bbox=dict(boxstyle='round,pad=0.3', edgecolor='red', facecolor='#ffffff', alpha=0.8))

    # Annotate the first negative peak if found
    if len(neg_peak_indices) > 0:
        ax.annotate(f'-{expected_peak_value}V',
                    xy=(t[neg_peak_indices[0]] * 1000, signal[neg_peak_indices[0]]),
                    xytext=(t[neg_peak_indices[0]] * 1000 + 2, signal[neg_peak_indices[0]] - 15),
                    arrowprops=dict(facecolor='black', arrowstyle='->'),
                    fontsize=10, color='blue',
                    bbox=dict(boxstyle='round,pad=0.3', edgecolor='blue', facecolor='#ffffff', alpha=0.8))

    # Annotate the 0V point for rectified signal if required
    if annotate_zero:
        zero_indices = np.where(np.isclose(signal, 0, atol=threshold))[0]
        if len(zero_indices) > 0:
            ax.annotate('0V',
                        xy=(t[zero_indices[0]] * 1000, signal[zero_indices[0]]),
                        xytext=(t[zero_indices[0]] * 1000 + 2, signal[zero_indices[0]] - 10),
                        arrowprops=dict(facecolor='black', arrowstyle='->'),
                        fontsize=10, color='black',
                        bbox=dict(boxstyle='round,pad=0.3', edgecolor='black', facecolor='#ffffff', alpha=0.8))

# Plot 1: Original AC Signal
plt.figure(figsize=(8, 4))
plt.plot(t * 1000, ac_signal, label='120V AC Signal (60 Hz)')
plt.title('Figure 1: Original 120V AC Signal at 60 Hz')
plt.xlabel('Time (milliseconds)')
plt.ylabel('Voltage (V)')
plt.grid(True)
plt.axhline(0, color='black', linewidth=0.5)
plt.xticks(np.arange(0, num_cycles * 16.67, 5))  # Adjust tick marks based on the number of cycles
plt.ylim(y_limits_ac)  # Set Y-axis limits for consistency
annotate_peaks(plt.gca(), ac_signal, 120)  # Annotate the positive and negative peaks
plt.savefig('rectifier-fig1.svg', format='svg')
plt.close()

# Plot 2: Transformed AC Signal
plt.figure(figsize=(8, 4))
plt.plot(t * 1000, transformed_signal, label='12V AC Signal (After Transformer, 60 Hz)', color='orange')
plt.title('Figure 2: AC Signal After 10:1 Transformer at 60 Hz')
plt.xlabel('Time (milliseconds)')
plt.ylabel('Voltage (V)')
plt.grid(True)
plt.axhline(0, color='black', linewidth=0.5)
plt.xticks(np.arange(0, num_cycles * 16.67, 5))
plt.ylim(y_limits_transformed)  # Adjusted Y-axis scale
annotate_peaks(plt.gca(), transformed_signal, 12)  # Annotate the positive and negative peaks
plt.savefig('rectifier-fig2.svg', format='svg')
plt.close()

# Plot 3: Rectified Signal
plt.figure(figsize=(8, 4))
plt.plot(t * 1000, rectified_signal, label='Rectified Signal (Full-Wave, 60 Hz)', color='green')
plt.title('Figure 3: Signal After Full-Wave Bridge Rectifier at 60 Hz')
plt.xlabel('Time (milliseconds)')
plt.ylabel('Voltage (V)')
plt.grid(True)
plt.axhline(0, color='black', linewidth=0.5)
plt.xticks(np.arange(0, num_cycles * 16.67, 5))
plt.ylim(y_limits_transformed)  # Adjusted Y-axis scale for rectified signal
annotate_peaks(plt.gca(), rectified_signal, 12, annotate_zero=True)  # Annotate positive peaks and 0V points
plt.savefig('rectifier-fig3.svg', format='svg')
plt.close()

print("SVG files with labeled figures have been generated.")
