import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from matplotlib.animation import FuncAnimation, PillowWriter

# Set up the figure and 3D axis
fig = plt.figure(figsize=(10, 6))
ax = fig.add_subplot(111, projection='3d')

# Generate the z data (direction of wave propagation)
z = np.linspace(0, 2 * np.pi, 1000)  # One full wavelength along the z-axis

# Set axis limits
ax.set_xlim([0, 2 * np.pi])  # One wavelength along the z-axis
ax.set_ylim([-1, 1])         # Electric field (y-axis)
ax.set_zlim([-1, 1])         # Magnetic field (x-axis)

# Set labels for the axes
ax.set_xlabel('Propagation Direction (z-axis)')
ax.set_ylabel('Electric Field (y-axis)')
ax.set_zlabel('Magnetic Field (x-axis)')

# Adjust the viewing angle
ax.view_init(elev=20, azim=-60)

# Plot static lines for reference
ax.plot(z, np.zeros_like(z), np.zeros_like(z), color='k', linestyle='--', linewidth=1)  # z-axis line
ax.plot([0, 2 * np.pi], [0, 0], [0, 0], color='k', linestyle='--', linewidth=1)  # y-axis line
ax.plot([0, 0], [-0.5, 0.5], [0, 0], color='k', linestyle='--', linewidth=1)  # Perpendicular line on x/y plane
ax.plot([0, 0], [0, 0], [-0.5, 0.5], color='k', linestyle='--', linewidth=1)  # x-axis line

# Initialize lines for electric and magnetic fields
electric_line, = ax.plot([], [], [], color='r', label='Electric Field (E)')
magnetic_line, = ax.plot([], [], [], color='b', label='Magnetic Field (B)')

# Set up the title and legend
ax.set_title('Electromagnetic Wave: Electric and Magnetic Fields')
ax.legend()

# Number of frames for one full wavelength animation
frames = 50

# Function to initialize the animation
def init():
    electric_line.set_data([], [])
    electric_line.set_3d_properties([])
    magnetic_line.set_data([], [])
    magnetic_line.set_3d_properties([])
    return electric_line, magnetic_line

# Function to animate the fields
def update(frame):
    # Calculate phase shift to complete one full cycle over the total frames
    phase_shift = (2 * np.pi / frames) * frame

    # Calculate new electric and magnetic field data
    E_field = 0.5 * np.sin(2 * z - phase_shift)  # Electric field
    B_field = 0.5 * np.sin(2 * z - phase_shift + np.pi / 2)  # Magnetic field

    # Update electric field line
    electric_line.set_data(z, E_field)
    electric_line.set_3d_properties(np.zeros_like(z))

    # Update magnetic field line
    magnetic_line.set_data(z, np.zeros_like(z))
    magnetic_line.set_3d_properties(B_field)
    
    return electric_line, magnetic_line

# Create the animation
anim = FuncAnimation(fig, update, frames=frames, init_func=init, blit=True, interval=50)

# Save as GIF
anim.save('wave_animation.gif', writer=PillowWriter(fps=15))

# Save as MP4
# anim.save('wave_animation.mp4', writer='ffmpeg', fps=30)

# Show the plot (optional)
# plt.show()
