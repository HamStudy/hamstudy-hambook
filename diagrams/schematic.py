import schemdraw
from schemdraw import elements as elm
import os

schemdraw.theme('default')
# schemdraw.use('svg')
# schemdraw.svgconfig.precision = 2
# schemdraw.svgconfig.text = 'path'

# Get the directory of the current script
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))

# Define the output directory relative to the script location
OUTPUT_DIR = os.path.abspath(os.path.join(SCRIPT_DIR, '..', 'tech2022', 'images'))

def draw_diode():
    d = schemdraw.Drawing()
    d += (D1 := elm.Diode().right().label('Diode', 'bottom'))
    d += (A1 := elm.Line().left().at(D1.start).length(d.unit/-10).label('Anode'))
    d += (C1 := elm.Line().right().at(D1.end).length(d.unit/-10).label('Cathode'))
    d.save(os.path.join(OUTPUT_DIR, 's2-2-diode.svg'), transparent=False)

def draw_led():
    d = schemdraw.Drawing()
    d += (LED1 := elm.LED().right().label('LED'))
    d += (A1 := elm.Line().left().at(LED1.start).length(d.unit/-10).label('Anode'))
    d += (C1 := elm.Line().right().at(LED1.end).length(d.unit/-10).label('Cathode'))
    d.save(os.path.join(OUTPUT_DIR, 's2-2-led.svg'), transparent=False)

def draw_bjt():
    d = schemdraw.Drawing()
    d += (Q1 := elm.BjtNpn().right().label('BJT'))
    d += (B1 := elm.Line().left().at(Q1.base).length(d.unit/3).label('Base'))
    d += (B1 := elm.Line().right().at(Q1.emitter).length(d.unit*0.6).label('Emitter', 'bottom'))
    d += (B1 := elm.Line().right().at(Q1.collector).length(d.unit*0.6).label('Collector'))
    d.save(os.path.join(OUTPUT_DIR, 's2-2-bjt.svg'), transparent=False)

def draw_fet():
    d = schemdraw.Drawing()
    d += (Q1 := elm.NFet().right().label('FET'))
    d += (G1 := elm.Line().right().at(Q1.gate).length(d.unit * 0.3).label('Gate'))
    d += (S1 := elm.Line().left().at(Q1.source).length(d.unit*0.6).label('Source', 'bottom'))
    d += (D1 := elm.Line().left().at(Q1.drain).length(d.unit*0.6).label('Drain'))
    d.save(os.path.join(OUTPUT_DIR, 's2-2-fet.svg'), transparent=False)

def draw_resistor():
    d = schemdraw.Drawing()
    d += (R1 := elm.Resistor().right().label('Resistor (IEEE)'))
    elm.style(elm.STYLE_IEC)
    d += (R2 := elm.Resistor().right().label('Resistor (IEC)', 'bottom'))
    d.save(os.path.join(OUTPUT_DIR, 's2-1-resistor.svg'), transparent=False)
    elm.style(elm.STYLE_IEEE)

def draw_antenna():
    d = schemdraw.Drawing()
    
    # Draw the antenna using the built-in element
    d += elm.Antenna().right().label('Antenna')

    d.save(os.path.join(OUTPUT_DIR, 's2-3-antenna.svg'), transparent=False)

def draw_ground():
    d = schemdraw.Drawing()
    
    # Draw the ground symbol using the built-in element
    d += elm.Ground().right().label('Ground')

    d.save(os.path.join(OUTPUT_DIR, 's2-3-ground.svg'), transparent=False)


def draw_series_circuit():
    d = schemdraw.Drawing()
    
    # Battery
    d += (BAT1 := elm.Battery().right().label('Battery'))
    
    # Resistors
    d += (R1 := elm.Resistor().right().label('$R_1$'))
    d += (R2 := elm.Resistor().down().label('$R_2$'))
    d += (R3 := elm.Resistor().left().label('$R_3$'))
    
    # Connecting lines
    d += (L1 := elm.Line().left().tox(BAT1.start))
    d += (L2 := elm.Line().up().toy(BAT1.start))

    # Arrows for current flow
    d += elm.Arrow().at((BAT1.end[0] - .5, BAT1.end[1] - .25)).right(1).label('$I_\\text{total}$', loc='bottom')
    d += elm.Arrow().at((R3.end[0] - .5, R3.end[1] + .25)).left(1).label('$I_\\text{total}$', loc='top')

    # Add the total resistance label to the diagram
    d += elm.Label().at((R1.center[0] - 2, R1.center[1] - 1.35)).label('$R_\\text{total} = R_1 + R_2 + R_3$')

    d.save(os.path.join(OUTPUT_DIR, 's2-1-series-circuit.svg'), transparent=True)

def draw_parallel_circuit():
    d = schemdraw.Drawing()
    # Draw the battery vertically on the left side
    d += (BAT1 := elm.Battery().down().label('Battery'))

    d += (L1 := elm.Line().right(d.unit * 0.5))
    d += (R1 := elm.Resistor().up().at(L1.end).label('R1'))

    d += (L2 := elm.Line().right(d.unit * 0.5)).at(L1.end)
    d += (R2 := elm.Resistor().up().at(L2.end).label('R2'))

    d += (L3 := elm.Line().right(d.unit * 0.5)).at(L2.end)
    d += (R3 := elm.Resistor().up().at(L3.end).label('R3'))

    d += (L4 := elm.Line().right(d.unit * 1.5)).at(BAT1.start)

    # # Arrows for current flow
    d += elm.Arrow().at((R1.end[0] - .25, R1.end[1] - .25)).down(0.5).label('$I_1$', loc='top')
    d += elm.Arrow().at((R2.end[0] - .25, R2.end[1] - .25)).down(0.5).label('$I_2$', loc='top')
    d += elm.Arrow().at((R3.end[0] - .25, R3.end[1] - .25)).down(0.5).label('$I_3$', loc='top')

    d += elm.Arrow().at((BAT1.start[0] - .25, BAT1.start[1] - .75)).up(0.5).label('$I_\\text{total}$', loc='top')

    # d += elm.Arrow().at((R3.end[0] - .5, R3.end[1] + .25)).left(1).label('$I_\\text{total}$', loc='top')

    # Invisible line to add padding at the bottom
    d += elm.Line().down().at(BAT1.end - 0.15).length(0.75).color('white')
    
    # Add the total resistance label to the diagram
    d += elm.Label().at((R2.center[0] - 1, R1.center[1] - 1.85)).label('$R_\\text{total} = \\frac{1}{\\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}}$')

    d.save(os.path.join(OUTPUT_DIR, 's2-1-parallel-circuit.svg'), transparent=True)

def draw_capacitor():
    d = schemdraw.Drawing()
    d += (C1 := elm.Capacitor().right().label('Capacitor'))
    d.save(os.path.join(OUTPUT_DIR, 's2-1-capacitor.svg'), transparent=False)

def draw_inductor():
    d = schemdraw.Drawing()
    d += (L1 := elm.Inductor().right().label('Inductor'))
    d += (L2 := elm.Inductor2().right().label('Inductor (alternate)', 'bottom'))
    d.save(os.path.join(OUTPUT_DIR, 's2-1-inductor.svg'), transparent=False)

def draw_potentiometer():
    d = schemdraw.Drawing()
    d += (POT1 := elm.Potentiometer().right().label('Potentiometer'))
    d.save(os.path.join(OUTPUT_DIR, 's2-1-potentiometer.svg'), transparent=False)

def draw_spst_switch():
    d = schemdraw.Drawing()
    d += (SW1 := elm.Switch().right().label('SPST Switch'))
    d.save(os.path.join(OUTPUT_DIR, 's2-1-spst-switch.svg'), transparent=False)

def draw_spdt_switch():
    d = schemdraw.Drawing()
    d += (SW1 := elm.SwitchSpdt().right().label('SPDT Switch'))
    d += (A1 := elm.Line().right().at(SW1.b).length(d.unit/2).label('b', 'bottom'))
    d += (A2 := elm.Line().right().at(SW1.c).length(d.unit/2).label('a', 'bottom'))
    d.save(os.path.join(OUTPUT_DIR, 's2-1-spdt-switch.svg'), transparent=False)

def draw_dpst_switch():
    d = schemdraw.Drawing()
    d += (SW1 := elm.SwitchDpst().right().label('DPST Switch'))
    d += elm.Line().left().at(SW1.p1).length(d.unit/2).label('in1', 'bottom')
    d += elm.Line().right().at(SW1.t1).length(d.unit/2).label('out1', 'bottom')
    d += elm.Line().left().at(SW1.p2).length(d.unit/2).label('in2', 'bottom')
    d += elm.Line().right().at(SW1.t2).length(d.unit/2).label('out2', 'bottom')
    # d += (A2 := elm.Line().right().at(SW1.c).length(d.unit/2).label('a', 'bottom'))
    d.save(os.path.join(OUTPUT_DIR, 's2-1-dpst-switch.svg'), transparent=False)

def draw_dpdt_switch():
    d = schemdraw.Drawing()
    d += (SW1 := elm.SwitchDpdt().right().label('DPDT Switch'))
    d += (A1 := elm.Line().left().at(SW1.p1).length(d.unit/2).label('in1', 'bottom'))
    d += (A1 := elm.Line().right().at(SW1.t1).length(d.unit/2).label('out1-a', 'bottom'))
    d += (A1 := elm.Line().right().at(SW1.t2).length(d.unit/2).label('out1-b', 'bottom'))
    d += (A1 := elm.Line().left().at(SW1.p2).length(d.unit/2).label('in2', 'bottom'))
    d += (A1 := elm.Line().right().at(SW1.t3).length(d.unit/2).label('out2-a', 'bottom'))
    d += (A1 := elm.Line().right().at(SW1.t4).length(d.unit/2).label('out2-b', 'bottom'))
    d.save(os.path.join(OUTPUT_DIR, 's2-1-dpdt-switch.svg'), transparent=False)

def draw_transformer():
    d = schemdraw.Drawing()
    d += (T1 := elm.Transformer().right().label('Transformer'))
    d += elm.Line().length(d.unit/3).left().at(T1.p1).label('In1', 'bottom')
    d += elm.Line().length(d.unit/3).left().at(T1.p2).label('In2', 'top')
    d += elm.Line().length(d.unit/3).right().at(T1.s1).label('Out1', 'bottom')
    d += elm.Line().length(d.unit/3).right().at(T1.s2).label('Out2', 'top')
    d.save(os.path.join(OUTPUT_DIR, 's2-3-transformer.svg'), transparent=False)

def draw_relay():
    d = schemdraw.Drawing()
    d += (RLY1 := elm.Relay().right().label('Relay'))
    d.save(os.path.join(OUTPUT_DIR, 's2-3-relay.svg'), transparent=False)


if __name__ == "__main__":
    draw_diode()
    draw_led()
    draw_bjt()
    draw_fet()

    draw_resistor()
    draw_capacitor()
    draw_inductor()
    draw_potentiometer()
    draw_spst_switch()
    draw_spdt_switch()
    draw_dpst_switch()
    draw_dpdt_switch()
    draw_transformer()
    draw_relay()

    draw_series_circuit()
    draw_parallel_circuit()

    draw_antenna()
    draw_ground()

