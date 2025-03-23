import schemdraw
from schemdraw import elements as elm

# Set global styles
schemdraw.config(unit=0.5, fontsize=14, color='black', lw=2, margin= 0.5)

def create_and_gate_with_truth_table():
    """Creates an AND gate symbol with its truth table."""
    d = schemdraw.Drawing()
    
    d += (op := elm.Opamp(leads=True, sign=True))

    filename = 'op-amp.svg'
    d.save(filename, transparent=False)
    print(f"AND gate with truth table saved as {filename}")
    
    return d

if __name__ == "__main__":
    create_and_gate_with_truth_table()
    print("Circuit diagram created successfully as SVG file!")