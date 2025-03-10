import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation

class CircleSineAnimator:
    def __init__(self, frames=30, interval=100, save_as_gif=False, gif_filename="circle_sine.gif"):
        self.frames = frames
        self.interval = interval
        self.save_as_gif = save_as_gif
        self.gif_filename = gif_filename
        self.fig, self.ax = plt.subplots(1, 2, figsize=(12, 5))
        self.theta = np.linspace(0, 2*np.pi, 100)
        self.circle_x = np.cos(self.theta)
        self.circle_y = np.sin(self.theta)
        self.t = np.linspace(0, 2*np.pi, 100)
        self.sine_wave = np.sin(self.t)

        # Initialize plots
        self.circle_line, = self.ax[0].plot(self.circle_x, self.circle_y, label="Circle Path")
        self.circle_dot, = self.ax[0].plot([], [], 'ro', label="Current Position")
        self.radius_line, = self.ax[0].plot([], [], 'r--', linewidth=1)

        self.sine_line, = self.ax[1].plot(self.t, self.sine_wave, label="Sine Wave")
        self.sine_dot, = self.ax[1].plot([], [], 'ro', label="Current Position")
        self.sine_guide, = self.ax[1].plot([], [], 'r--', linewidth=1)

        self.setup_axes()
        self.ani = animation.FuncAnimation(self.fig, self.update, frames=self.frames, interval=self.interval, blit=True)

    def setup_axes(self):
        self.ax[0].set_xlabel("X Position")
        self.ax[0].set_ylabel("Y Position")
        self.ax[0].set_title("Circular Motion Representation")
        self.ax[0].set_aspect('equal')
        self.ax[0].grid()
        self.ax[0].legend()
        
        self.ax[1].set_xlabel("Angle (radians)")
        self.ax[1].set_ylabel("Amplitude")
        self.ax[1].set_title("Sine Wave Derived from Circle")
        self.ax[1].grid()
        self.ax[1].legend()

    def update(self, frame):
        angle = np.pi - 2 * np.pi * (frame / self.frames)  # Start at 180° and rotate clockwise
        point_x = np.cos(angle)
        point_y = np.sin(angle)
        sine_x = np.pi - angle
        sine_y = np.sin(angle)

        self.circle_dot.set_data([point_x], [point_y])
        self.radius_line.set_data([0, point_x], [0, point_y])

        self.sine_dot.set_data([sine_x], [sine_y])
        self.sine_guide.set_data([sine_x, sine_x], [0, sine_y])

        return self.circle_dot, self.radius_line, self.sine_dot, self.sine_guide

    def show(self):
        if self.save_as_gif:
            from matplotlib.animation import PillowWriter
            writer = PillowWriter(fps=20)
            self.ani.save(self.gif_filename, writer=writer)
            print(f"Animation saved as {self.gif_filename}")
        else:
            plt.show()

# Example usage
if __name__ == "__main__":
    animator = CircleSineAnimator(save_as_gif=True)
    animator.show()
