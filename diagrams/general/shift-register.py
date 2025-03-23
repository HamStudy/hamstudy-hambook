import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle, Circle, FancyArrow
from matplotlib.animation import FuncAnimation

# Constants
num_bits = 4
num_frames = 5  # Number of clock cycles to animate (1 input + 4 shifts)
bit_colors = {1: 'orange', 0: 'lightgray'}
register_labels = ['Q0', 'Q1', 'Q2', 'Q3']

# Setup figure
fig, ax = plt.subplots(figsize=(6.5, 1.5))
ax.set_xlim(1, 9.5)
ax.set_ylim(0.5, 2)
ax.axis('off')

fig.subplots_adjust(left=0.125, right=0.925, top=1, bottom=0, wspace=None, hspace=None)

# Draw static elements (boxes, arrows, labels)
boxes = []
circles = []
texts = []

for i in range(num_bits):
    x = 1.5 + i * 2
    # Box
    rect = Rectangle((x, 0.8), 1.5, 1, edgecolor='black', facecolor='white', lw=2)
    ax.add_patch(rect)
    boxes.append(rect)

    # Initial circle
    circle = Circle((x + 0.75, 1.3), 0.3, color='lightgray', ec='black')
    ax.add_patch(circle)
    circles.append(circle)

    # Bit value text
    txt = ax.text(x + 0.75, 1.3, '0', va='center', ha='center', fontsize=14, weight='bold')
    texts.append(txt)

    # Register label
    ax.text(x + 0.75, 0.7, register_labels[i], ha='center', va='top', fontsize=10)

# Arrows between registers
for i in range(num_bits - 1):
    ax.add_patch(FancyArrow(3 + i*2, 1.3, 0.4, 0, width=0.05, length_includes_head=True, color='gray'))

# Input/Output labels and arrows
ax.text(0.7, 1.3, "Serial In", ha='right', va='center', fontsize=10)
ax.add_patch(FancyArrow(0.8, 1.3, 0.5, 0, width=0.05, length_includes_head=True, color='blue'))

ax.text(9.1, 1.3, "Serial Out", ha='left', va='center', fontsize=10)
ax.add_patch(FancyArrow(8.6, 1.3, 0.4, 0, width=0.05, length_includes_head=True, color='green'))

ax.text(5, 0.2, "Clock Pulse → Shifts bits right", ha='center', fontsize=10, style='italic')

# Bit stream to input: a single '1' followed by '0's
input_stream = [1] + [0] * (num_frames - 1)
register_state = [0] * num_bits

# Animation update function
def update(frame):
    global register_state

    # Shift bits to the right
    new_bit = input_stream[frame - 1] if frame < len(input_stream) else 0
    register_state = [new_bit] + register_state[:-1]

    # Update visuals
    for i in range(num_bits):
        bit = register_state[i]
        circles[i].set_color(bit_colors[bit])
        texts[i].set_text(str(bit))

# Create animation
ani = FuncAnimation(fig, update, frames=num_frames, interval=1000, repeat=True)

ani.save("shift_register.gif", writer="pillow", fps=1)

# plt.tight_layout()
# plt.show()
