import schemdraw
import schemdraw.elements as elm

# Set global styles
schemdraw.config(unit=2.5, fontsize=14, color='black', lw=2)

def create_half_wave_rectifier():
    """Creates a half-wave rectifier circuit diagram with improved layout."""
    d = schemdraw.Drawing()
    # Start with AC source
    d += (source := elm.SourceSin().label('AC Input', loc='bottom'))
    
    # Add diode with clear label
    d += elm.Diode().right().label('D1', loc='top')
    
    # Add load resistor
    d += elm.Resistor().right().label('Load', loc='bottom')
    
    # Close the circuit
    d += elm.Line().down()
    d += elm.Line().left().tox(source.start)
    d += elm.Line().up().toy(source.start)
    
    # Explicitly save again to ensure it works
    filename = 'half-wave-rectifier.svg'
    d.save(filename)
    print("Half-wave rectifier saved as " + filename)

def create_center_tap_rectifier():
    """Creates a center-tapped transformer full-wave rectifier with fixed junction."""
    d = schemdraw.Drawing()
    
    # Add transformer with a named center tap on secondary
    d += (xform := elm.Transformer(t1=4, t2=8).tap(name="CT", pos=4, side="secondary"))
    
    # Add AC source connected to transformer primary
    d += elm.SourceSin().at(xform.p1).left().label('AC Input', loc='bottom')
    d += elm.Line().at(xform.p2).left().tox(d.here)
    
    # Draw top diode from s1 to a point above the junction
    d += (D1 := elm.Diode().at(xform.s1).right().label('D1', loc='top'))
    d += elm.Line().down().toy(xform.CT[1])
    
    d += (D2 := elm.Diode().at(xform.s2).right().label('D2', loc='top'))
    d += elm.Line().up().toy(xform.CT[1])
    
    # Add load resistor from junction
    d += elm.Resistor().at(xform.CT).right().label('Load', loc='bottom')
    load_end = d.here
    
    # Explicitly save
    filename = 'center-tap-rectifier.svg'
    d.save(filename)
    print("Center-tap rectifier saved as " + filename)
    
    return d

def create_bridge_rectifier():
    """Creates a bridge rectifier circuit with proper AC source connections."""
    d = schemdraw.Drawing()

    d += (RECT := elm.Rectifier(fill=True, labels=['D1', 'D2', 'D3', 'D4']))
    d.add(elm.Label().at((RECT.W[0] + 0.1, RECT.W[1] - 0.1)).label('DC-', loc='right'))
    d.add(elm.Label().at((RECT.E[0] + 0.1, RECT.E[1] - 0.1)).label('DC+', loc='right'))

    # Add AC source

    d += elm.Dot().at(RECT.N).label('N', loc='top')
    d += elm.Dot().at(RECT.S).label('S', loc='bottom')
    d += elm.Dot().at(RECT.E)
    d += elm.Dot().at(RECT.W)
    d += elm.Line().left(4).at(RECT.N)
    d += (source := elm.SourceSin().down().label('AC Input', loc='bottom'))
    d += elm.Line().left(4).at(RECT.S)
    d += elm.Line().up().to(source.end)

    d += elm.Line().at(RECT.E).down(4)
    d += (R1 := elm.Resistor().left().label('Load', loc='top'))
    d += elm.Line().at(RECT.W).down(4)
    d += elm.Line().tox(R1.end)
    
    # Explicitly save
    filename = 'bridge-rectifier.svg'
    d.save(filename)
    print("Bridge rectifier saved as " + filename)
    
    return d

if __name__ == "__main__":
    create_half_wave_rectifier()
    create_center_tap_rectifier()
    create_bridge_rectifier()
    
    print("All circuit diagrams created successfully as SVG files!")