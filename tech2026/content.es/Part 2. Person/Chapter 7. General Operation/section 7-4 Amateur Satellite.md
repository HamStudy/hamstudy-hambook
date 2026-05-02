---
chapter: "7"
section: "7.4"
questions: [ "T1A07", "T1E02", "T1B02", "T8B10", "T8B08", "T8B04", "T8B01", "T8B05", "T8B11", "T8B09", "T8B07", "T8B03", "T8B06", "T8B02", "T8B12" ]
status: publish1
---

### Sección 7.4: Operación de Satélites de Radioaficionados

Abróchense los cinturones, cadetes espaciales: como Técnico, puedes comunicarte a través de satélites que orbitan a cientos de millas sobre la Tierra, extendiendo el alcance de tu radio más allá del horizonte y potencialmente alrededor del globo. Sí, de verdad.

> **Información Clave:**
> - Según la Parte 97 de la FCC, una estación espacial es una estación de aficionado ubicada a más de 50 km sobre la superficie de la Tierra. {{< link id="T1A07" >}}
> - El operador de control de una estación que se comunica a través de un satélite de aficionados o una estación espacial puede ser cualquier radioaficionado autorizado a transmitir en la frecuencia de enlace ascendente del satélite. {{< link id="T1E02" >}} En la práctica, esto significa cualquier operador de clase Técnico o superior, ya que las bandas normalmente usadas para enlaces ascendentes de satélite están dentro de los privilegios Technician.
> - Cualquier radioaficionado con licencia de clase Técnico o superior puede contactar con la Estación Espacial Internacional (ISS) en bandas VHF. {{< link id="T1B02" >}}

#### ¿Qué son los Satélites de Radioaficionados?

Los satélites de radioaficionados, a menudo llamados "OSCAR" (Orbiting Satellite Carrying Amateur Radio), son como repetidores basados en el espacio. Reciben señales en una frecuencia (enlace ascendente) y las retransmiten en otra (enlace descendente). ¡Es como jugar ping-pong cósmico con tus ondas de radio!

> **Información Clave:**
> - LEO significa Low Earth Orbit, órbita terrestre baja, que tiene un período de alrededor de 100 minutos. {{< link id="T8B10" >}}
> - Cuando un satélite opera en modo U/V, el enlace ascendente está en la banda de 70 centímetros y el enlace descendente en la banda de 2 metros. {{< link id="T8B08" >}}
> - Los satélites de radioaficionados comúnmente usan modos SSB, FM y CW/datos. {{< link id="T8B04" >}}

Estos velocistas espaciales dan vueltas alrededor de la Tierra y pasan sobre nuestras cabezas varias veces al día. Un "pase" se refiere a la porción de la órbita del satélite en la que es visible desde tu ubicación en la Tierra: cuando está por encima de tu horizonte y puedes comunicarte con él. Cada pase suele durar solo de 5 a 15 minutos, así que tienes que ser rápido. La mayoría de los satélites de aficionados son LEO (satélites de órbita terrestre baja), lo que los hace accesibles para operadores con equipos modestos.

#### Balizas y Telemetría de Satélites

> **Información Clave:**
> - Una baliza de satélite es una transmisión desde un satélite que contiene información de estado; normalmente reporta la salud y el estado del satélite. {{< link id="T8B05" >}} {{< link id="T8B01" >}}
> - Cualquier persona puede recibir telemetría de un satélite de radioaficionados. {{< link id="T8B11" >}}

Las balizas de satélite son transmisiones especiales que los satélites envían regularmente, como un faro en el espacio. Estas balizas normalmente transmiten datos de telemetría que pueden incluir niveles de voltaje de la batería, lecturas de temperatura, modo de operación y orientación de la nave espacial. Estas transmisiones no están cifradas y están destinadas a ser monitoreadas por operadores aficionados de todo el mundo.

#### Características de las Señales de Satélite

> **Información Clave:**
> - El desvanecimiento por rotación de las señales de satélite es causado por la rotación del satélite y sus antenas. {{< link id="T8B09" >}}
> - El desplazamiento Doppler en comunicaciones por satélite es un cambio observado en la frecuencia de la señal causado por el movimiento relativo entre el satélite y la estación terrestre. {{< link id="T8B07" >}}

A medida que un satélite rota en el espacio, sus antenas cambian de orientación con respecto a la Tierra, haciendo que la intensidad de la señal varíe periódicamente, casi como un efecto de faro cósmico. Este fenómeno, llamado desvanecimiento por rotación, es la razón por la que los operadores de satélites deben estar atentos a las características de rotación del satélite.

Con el desplazamiento Doppler, a medida que el satélite se acerca, la frecuencia parece más alta, y cuando se aleja, parece más baja, igual que el cambio de tono del silbato de un tren al pasar. Esto significa que tendrás que ajustar tu frecuencia durante el pase para compensar este efecto.

#### Seguimiento y Operación de Satélites

> **Información Clave:**
> - Los programas de seguimiento de satélites proporcionan mapas de posición del satélite en tiempo real, horarios de pases y frecuencia aparente incluyendo el desplazamiento Doppler. {{< link id="T8B03" >}}
> - La entrada principal para un programa de seguimiento de satélites son los elementos keplerianos: un conjunto de números que describen la órbita del satélite. {{< link id="T8B06" >}}
> - Usar potencia radiada efectiva excesiva en el enlace ascendente de un satélite puede bloquear el acceso a otros usuarios. {{< link id="T8B02" >}}
> - Para comprobar si tu potencia de enlace ascendente hacia un satélite con transpondedor lineal es apropiada, la intensidad de tu señal en el enlace descendente debe ser aproximadamente la misma que la de la baliza. {{< link id="T8B12" >}}

Esto es lo que necesitas saber para empezar:

1. **Frecuencias**: La mayoría de los satélites de radioaficionados operan en bandas VHF y UHF, justo dentro de tus posibilidades como Técnico. A menudo usarás una banda para el enlace ascendente y otra para el descendente.

2. **Seguimiento**: ¡Los satélites se mueven rápido! Necesitarás programas de seguimiento para saber cuándo pasan sobre tu ubicación. Estos programas usan fórmulas matemáticas para predecir dónde estará un satélite en un momento dado.

3. **Antenas**: Aunque puedes hacer algunos contactos con un equipo portátil y su antena de fábrica, las antenas direccionales funcionan mucho mejor para comunicaciones por satélite.

#### Tipos de Operaciones Satelitales

Los satélites de aficionados admiten varios tipos de operación:

- **Satélites FM**: Excelentes para principiantes. Funcionan como un repetidor en el cielo.
- **Satélites con Transpondedor Lineal**: Reciben un rango de frecuencias en una banda y las retransmiten en otra banda.
- **Estación Espacial Internacional (ISS)**: La ISS a menudo tiene equipo de radioaficionado a bordo, lo que permite a los astronautas hacer contactos con radioaficionados en la Tierra.

La operación satelital puede parecer intimidante, pero es increíblemente gratificante. Comienza escuchando para familiarizarte con los pases de satélite antes de transmitir. Usa software de seguimiento para planificar tus operaciones y siempre ten presentes tus niveles de potencia.

---

Los satélites son una de las cosas más espectaculares que puedes hacer con una licencia Technician, pero están lejos de ser la única diversión disponible. La próxima sección cubre algunas más, incluida una que consiste en perseguir transmisores ocultos por un parque.
