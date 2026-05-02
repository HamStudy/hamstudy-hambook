---
chapter: "3"
section: "3.3"
questions: [ "T3A11", "T3C11", "T3C02", "T3C01", "T3A01", "T3A06", "T3A10", "T3A05", "T3C05", "T3A08", "T3C09", "T3C10", "T3C03", "T3C04", "T3C08", "T3C06", "T3C07", "T3A07", "T3A12", "T3A02" ]
status: publish1
---

### Sección 3.3: Cómo viajan las señales

Ahora que entendemos las diferentes bandas de radioafición, exploremos cómo las señales realmente viajan a través de ellas. La forma en que las ondas de radio se propagan varía enormemente según su frecuencia y las condiciones ambientales, creando posibilidades fascinantes para la comunicación.

Cuando transmites una señal, no viaja simplemente en línea recta como un rayo láser. Las ondas de radio pueden doblarse, rebotar, dispersarse y atravesar obstáculos de maneras que a veces parecen casi mágicas. Entender estos mecanismos de propagación es clave para tener éxito en las comunicaciones de radioafición.

> **Información clave:** Comportamiento básico de las ondas en las bandas de aficionados
> - La ionosfera puede reflejar ondas de radio HF. {{< link id="T3A11" >}}
> - El horizonte radioeléctrico está más lejano que el horizonte visual porque la atmósfera refracta ligeramente las ondas de radio. {{< link id="T3C11" >}}
> - La propagación ionosférica a larga distancia es mucho más común en HF que en VHF/UHF. {{< link id="T3C02" >}}
> - Las señales UHF rara vez se escuchan más allá de su horizonte radioeléctrico porque por lo general no son propagadas por la ionosfera. {{< link id="T3C01" >}}

![Tipos de propagación en diferentes rangos de frecuencia](../../../images/propagation-types.svg)

#### Propagación por onda terrestre

**Más allá del examen**: La propagación por onda terrestre ocurre cuando una señal sigue la curvatura de la Tierra a lo largo de la superficie. Las frecuencias más bajas (como la banda de radiodifusión AM) viajan más lejos como onda terrestre que las bandas HF de aficionados, por eso las estaciones AM suelen cubrir áreas grandes durante el día. No se evalúa directamente, pero vale la pena saber que el término existe.

#### Propagación en línea de visión (LOS)

La línea de visión es como poder ver a alguien al otro lado de un campo: si puedes verlo, por lo general puedes comunicarte con él. Sin embargo, varios efectos importantes pueden ayudar o dificultar esta propagación básica:

> **Información clave — Efectos multitrayecto**:
> - Las intensidades de señal VHF pueden variar mucho al moverse solo unos pocos pies porque la propagación multitrayecto cancela o refuerza las señales. {{< link id="T3A01" >}}
> - El término **"picket fencing"** significa aleteo rápido ("flutter") de las señales de las estaciones móviles debido a la propagación multitrayecto. {{< link id="T3A06" >}}
> - La propagación multitrayecto puede aumentar los índices de error en transmisiones de datos. {{< link id="T3A10" >}}

Cuando las señales de radio viajan del transmisor al receptor, a menudo toman múltiples caminos:

- Algunas señales van directamente.
- Otras rebotan en edificios, montañas u otros objetos.
- Estos diferentes caminos pueden combinarse en tu antena:
  - Cuando las señales llegan en fase, se refuerzan entre sí.
  - Cuando llegan fuera de fase, pueden cancelarse mutuamente.
  - Mover tu antena incluso ligeramente puede cambiar esta relación.

Para los modos digitales, el multitrayecto puede ser especialmente problemático: las señales que llegan por diferentes trayectos pueden interferir entre sí y aumentar los índices de error, por lo que la mayoría de los modos digitales incluyen detección y corrección de errores.

> **Información clave — Cómo sortear obstáculos**:
> - Cuando los edificios bloquean la señal de un repetidor, a menudo puedes encontrar un camino que refleje señales hacia el repetidor. {{< link id="T3A05" >}}
> - La difracción de filo de cuchillo permite que las señales de radio viajen más allá de las obstrucciones. {{< link id="T3C05" >}}

Que no puedas ver tu objetivo no significa que no puedas alcanzarlo:

- **Reflexiones**: Como rebotar una pelota contra una pared, tu señal puede rebotar en edificios u otras superficies para llegar a un repetidor.
- **Difracción de filo de cuchillo**: Las ondas de radio pueden doblarse ligeramente alrededor de bordes afilados, de la misma forma en que el borde de una sombra siempre queda un poco suave porque la luz se dobla alrededor de lo que la proyecta. Esto permite que las señales entren un poco en la "zona de sombra" detrás de montañas o edificios altos.

#### Propagación por onda espacial

> **Información clave:**
> - El desvanecimiento irregular de las señales es causado por la combinación aleatoria de señales que llegan por diferentes caminos. {{< link id="T3A08" >}}
> - Mejor momento para la propagación de la región F en la banda de 10 metros: desde el amanecer hasta poco después de la puesta del sol durante alta actividad de manchas solares. {{< link id="T3C09" >}}
> - Durante el pico del ciclo solar, 6 y 10 metros pueden usar propagación de la región F. {{< link id="T3C10" >}}

Piensa en la propagación por onda espacial como rebotar una pelota en el techo para alcanzar a alguien al otro lado de la habitación. La ionosfera actúa como nuestro "techo" en el cielo, pero en lugar de una superficie dura es una región de partículas cargadas que dobla (o refracta) las ondas de radio de vuelta hacia la Tierra. Para simplificar, a este doblamiento a menudo se le llama "rebote" o "reflexión", aunque en realidad es una refracción gradual a través de las capas de la ionosfera.

- Diferentes capas de la ionosfera afectan diferentes frecuencias.
- La hora del día y la actividad solar cambian qué tan bien refleja las señales.
- Múltiples caminos de señal pueden causar desvanecimiento al combinarse de distintas maneras.

##### Propagación auroral

Una forma especial de onda espacial que conviene conocer es la propagación auroral. Cuando las señales se reflejan en la aurora, están distorsionadas, con un característico sonido rasposo. {{< link id="T3C03" >}} — la aurora es como una cortina brillante y móvil que refleja señales de manera impredecible.

#### Propagación por E esporádica

> **Información clave:** E esporádica causa señales fuertes ocasionales en las bandas de 10, 6 y 2 metros desde más allá del horizonte radioeléctrico. {{< link id="T3C04" >}}

La E esporádica ocurre cuando parches aleatorios de la capa E de la ionosfera se cargan temporalmente — como una nube de partículas ionizadas que aparece y desaparece en la atmósfera superior. Cuando se forma uno, puede reflejar señales mucho más lejos de lo normal por un breve tiempo, dándote contactos inesperados de larga distancia. No puedes predecir exactamente cuándo ocurrirá, pero es una característica regular de la propagación VHF.

#### Conductos troposféricos

> **Información clave:**
> - Causados por inversiones de temperatura en la atmósfera. {{< link id="T3C08" >}}
> - Permiten comunicaciones VHF y UHF a distancias de aproximadamente 300 millas de manera regular. {{< link id="T3C06" >}}

Una inversión de temperatura puede formar algo parecido a un túnel en el cielo, guiando señales VHF y UHF mucho más allá de su alcance normal. Las inversiones de temperatura crean estos "conductos" que pueden guiar señales VHF y UHF mucho más allá de su alcance normal, haciendo posibles contactos de larga distancia en bandas que normalmente solo funcionan para comunicación local.

#### Dispersión por meteoros

> **Información clave:** La banda de 6 metros es la más adecuada para comunicarse mediante dispersión por meteoros ("meteor scatter"). {{< link id="T3C07" >}}

Cuando los meteoros se queman en la atmósfera, dejan estelas breves que pueden reflejar señales de radio. Es como jugar ping-pong con una estrella fugaz: las reflexiones son breves, pero pueden permitir contactos a distancias sorprendentes. La banda de 6 metros funciona particularmente bien para este tipo de comunicación.

#### Efectos ambientales

Diferentes factores ambientales afectan diferentes frecuencias de distintas maneras.

> **Información clave:**
> - La precipitación puede disminuir el alcance en frecuencias de microondas. {{< link id="T3A07" >}}
> - La niebla y la lluvia tienen poco efecto en las señales de las bandas de 10 metros y 6 metros. {{< link id="T3A12" >}}
> - La vegetación absorbe señales UHF y de microondas, lo que produce mala recepción de señales débiles. {{< link id="T3A02" >}}

Entender estos efectos te ayuda a elegir frecuencias apropiadas para diferentes condiciones climáticas y a colocar las antenas de manera que se minimice la absorción por árboles y edificios.

---

Con la propagación cubierta, ya sabemos qué puede ocurrirle a una señal en su camino del transmisor al receptor. A continuación, veremos cómo ponemos información *sobre* esas señales en primer lugar.
