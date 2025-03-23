import schemdraw
import schemdraw.elements as elm
from schemdraw import logic

# Set global styles
schemdraw.config(unit=0.5, fontsize=14, color='black', lw=2, margin= 0.5)

def create_and_gate_with_truth_table():
    """Creates an AND gate symbol with its truth table."""
    d = schemdraw.Drawing()
    
    # Add AND gate with inputs and output labeled
    d += (and_gate := logic.And().down().label('Output', 'left'))
    d += logic.Line().up(d.unit / 2).at(and_gate.in1).label('B', 'right')
    d += logic.Line().up(d.unit / 2).at(and_gate.in2).label('A', 'right')
    
    # Move down to add truth table
    d.move(dx=-1, dy=-1)

    filename = 'and-gate.svg'
    d.save(filename, transparent=False)
    print(f"AND gate with truth table saved as {filename}")
    
    return d

if __name__ == "__main__":
    create_and_gate_with_truth_table()
    print("Circuit diagram created successfully as SVG file!")