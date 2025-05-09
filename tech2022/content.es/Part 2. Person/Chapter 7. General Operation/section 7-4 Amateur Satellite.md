---
chapter: "7"
section: "7.4"
questions: [ "T1A07", "T1E02", "T1B02", "T8B10", "T8B08", "T8B04", "T8B01", "T8B05", "T8B11", "T8B09", "T8B07", "T8B03", "T8B06", "T8B02", "T8B12" ]
---

### Sección 7.4: Operación de Satélites de Radioaficionados

Muy bien, cadetes espaciales, prepárense para un viaje a la frontera final de la radioafición - ¡la operación de satélites! Sí, escucharon bien. Como Técnico, puedes comunicarte a través de satélites que orbitan cientos de kilómetros sobre la Tierra, extendiendo el alcance de tu radio más allá del horizonte y potencialmente alrededor del globo. ¿No es genial?

> **Información Clave:** 
> * Según la Parte 97 de la FCC, una estación espacial es una estación de aficionado ubicada a más de 50 km sobre la superficie de la Tierra. {{< link id="T1A07" >}} 
> * Cualquier radioaficionado con licencia de clase Técnico o superior puede comunicarse a través de satélites de aficionados. {{< link id="T1E02" >}} 
> * Cualquier radioaficionado con licencia de clase Técnico o superior puede contactar con la Estación Espacial Internacional (ISS) en bandas VHF {{< link id="T1B02" >}} cuando pasa sobre nosotros.

#### ¿Qué son los Satélites de Radioaficionados?

Los satélites de radioaficionados, a menudo llamados "OSCAR" (Satélite Orbital Portador de Radio de Aficionados), son como repetidores basados en el espacio. Reciben señales en una frecuencia (enlace ascendente) y las retransmiten en otra (enlace descendente). ¡Es como jugar ping-pong cósmico con tus ondas de radio!

> **Información Clave:**
> * Un satélite LEO es un satélite en _**Ó**rbita **T**errestre **B**aja_, {{< link id="T8B10" >}} típicamente entre 160 y 1,900 kilómetros sobre la Tierra.
> * Cuando un satélite está operando en "modo U/V", el enlace ascendente del satélite está en la banda de 70 centímetros (UHF) y el enlace descendente está en la banda de 2 metros (VHF). {{< link id="T8B08" >}}
> * Los satélites de radioaficionados comúnmente usan múltiples modos de transmisión incluyendo SSB, FM, CW y datos. {{< link id="T8B04" >}}

Estos velocistas espaciales se desplazan alrededor de la Tierra y pasan sobre nuestras cabezas varias veces al día. Un "pase" se refiere a la porción de la órbita del satélite cuando es visible desde tu ubicación en la Tierra - cuando está por encima de tu horizonte y puedes comunicarte con él. Cada pase típicamente dura solo de 5 a 15 minutos, ¡así que tienes que ser rápido! La mayoría de los satélites de aficionados son LEO (satélites de Órbita Terrestre Baja), lo que los hace accesibles para operadores con equipos modestos.

#### Balizas y Telemetría de Satélites

> **Información Clave:**
> * Una baliza de satélite es una transmisión desde un satélite que contiene información de estado sobre la salud y condición del satélite. {{< link id="T8B01" >}} {{< link id="T8B05" >}}
> * *Cualquier persona puede recibir telemetría de una estación espacial* {{< link id="T8B11" >}} - estas transmisiones no están encriptadas y están destinadas a ser monitoreadas por operadores de aficionados en todo el mundo.

Las balizas de satélite son transmisiones especiales que los satélites envían regularmente, como un faro basado en el espacio. Estas balizas típicamente transmiten datos de telemetría que pueden incluir niveles de voltaje de la batería, lecturas de temperatura, modo de operación y orientación de la nave espacial.

#### Características de la Señal de Satélite

> **Información Clave:**
> * El desvanecimiento por rotación de señales de satélite es causado por la rotación del satélite y sus antenas. {{< link id="T8B09" >}}
> * El efecto Doppler en comunicaciones por satélite es un cambio observado en la frecuencia de la señal causado por el movimiento relativo entre el satélite y la estación terrestre. {{< link id="T8B07" >}}

A medida que un satélite rota en el espacio, sus antenas cambian de orientación con respecto a la Tierra, causando que la intensidad de la señal varíe periódicamente - casi como un efecto de faro cósmico. Este fenómeno, llamado desvanecimiento por rotación, es por qué los operadores de satélites necesitan conocer las características rotacionales del satélite.

Con el efecto Doppler, a medida que el satélite se acerca, la frecuencia parece más alta, y mientras se aleja, parece más baja - justo como el cambio de tono del silbido de un tren que pasa. Esto significa que tendrás que ajustar tu frecuencia durante el pase para compensar este efecto.

#### Seguimiento y Operación de Satélites

> **Información Clave:**
> * Los programas de seguimiento de satélites proporcionan mapas que muestran la posición en tiempo real de los satélites, información de temporización de pases y la frecuencia aparente incluyendo los efectos de desplazamiento Doppler. {{< link id="T8B03" >}}
> * *Estos programas utilizan elementos Keplerianos como entradas* {{< link id="T8B06" >}} - un conjunto de números que describen la órbita del satélite.
> * Usar potencia de enlace ascendente excesiva puede bloquear el acceso al satélite para otros usuarios. {{< link id="T8B02" >}}
> * Tu intensidad de señal en el enlace descendente debe ser aproximadamente igual a la de la baliza {{< link id="T8B12" >}} para asegurar que tu potencia de enlace ascendente sea apropiada. Esto significa que debes escuchar tu propia señal mientras es retransmitida por el satélite y compararla con la fuerza de la señal de baliza del satélite. Si tu señal es mucho más fuerte que la baliza, reduce tu potencia; si es más débil, puede que necesites aumentar la potencia o mejorar la orientación de tu antena.

Aquí está lo que necesitas saber para empezar:

1. **Frecuencias**: La mayoría de los satélites de radioaficionados operan en bandas VHF y UHF, justo en tu ámbito de Técnico. A menudo usarás una banda para el enlace ascendente y otra para el descendente.

2. **Seguimiento**: ¡Los satélites se mueven rápido! Necesitarás programas de seguimiento para saber cuándo están pasando sobre tu cabeza. Estos programas utilizan fórmulas matemáticas para predecir dónde estará un satélite en cualquier momento dado.
   
3. **Antenas**: Aunque puedes hacer algunos contactos con un equipo portátil y su antena estándar, las antenas direccionales funcionan mucho mejor para comunicaciones por satélite.

4. **Potencia**: A diferencia de los repetidores terrestres, no necesitas mucha potencia. Siempre usa solo la potencia suficiente para hacer contacto. Demasiada potencia puede causar problemas para otros usuarios que intentan acceder al satélite al mismo tiempo.

#### Tipos de Operaciones de Satélite

Los satélites de aficionados soportan varios tipos de operaciones:

- **Satélites FM**: Excelentes para principiantes. Funcionan como un repetidor en el cielo.
- **Satélites de Transpondedor Lineal**: Estos reciben un rango de frecuencias en una banda y las retransmiten en otra banda.
- **Estación Espacial Internacional (ISS)**: La ISS a menudo tiene equipo de radioaficionado a bordo, permitiendo a los astronautas hacer contactos con radioaficionados en tierra.

La operación de satélites puede parecer intimidante, pero es increíblemente gratificante. Comienza escuchando para familiarizarte con los pases de satélites antes de transmitir. Utiliza software de seguimiento para planificar tus operaciones y siempre sé consciente de tus niveles de potencia.

Recuerda, cada vez que haces un contacto por satélite, estás participando en una gran aventura espacial - utilizando tecnología que orbita la Tierra a miles de kilómetros por hora para charlar con otros radioaficionados. ¡Eso es llevar tu afición de radio a nuevas alturas!
