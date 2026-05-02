---
chapter: "6"
section: "6.6"
questions: [ "T7D07", "T6D04", "T7D01", "T7D04", "T7D02", "T7D03", "T7D05", "T7D11", "T7D06", "T7D10", "T0A11", "T0A12", "T7C01", "T7C03", "T7D08", "T7D09" ]
status: publish1
---

### Sección 6.6: Reparación y pruebas básicas

Mantener una estación de radioaficionado funcionando sin problemas se reduce a dos habilidades prácticas: usar equipo de prueba y soldar de forma básica. Esta sección cubre ambas.

#### El multímetro: la navaja suiza de tu estación

![Dibujo de un multímetro antropomórfico](../../../images/illus/multimeter.svg)
{.img-small .float-right}

> **Información clave:**
> - Un multímetro mide voltaje y resistencia. {{< link id="T7D07" >}}
> - Un medidor es un dispositivo que muestra una magnitud eléctrica como valor numérico. {{< link id="T6D04" >}}
> - Un voltímetro se usa para medir potencial eléctrico (voltaje). {{< link id="T7D01" >}}
> - Un amperímetro se usa para medir corriente eléctrica. {{< link id="T7D04" >}}

Un multímetro combina varios instrumentos de medición en un solo dispositivo: típicamente un voltímetro, un ohmímetro (para resistencia) y, en la mayoría de los modelos, un amperímetro. Al solucionar problemas de equipo, a menudo tu primer paso debería ser revisar fuentes de alimentación y conexiones con tu multímetro.

##### Usar un multímetro de forma segura

> **Información clave:**
> - Un voltímetro se conecta en paralelo con un componente para medir voltaje. {{< link id="T7D02" >}}
> - Cuando está configurado para medir corriente, un multímetro se conecta en serie con un componente. {{< link id="T7D03" >}}
> - Un ohmímetro mide resistencia aplicando una pequeña corriente y midiendo el voltaje resultante. {{< link id="T7D05" >}}
> - Al medir resistencia dentro de un circuito con un ohmímetro, asegúrate de que el circuito no esté alimentado. {{< link id="T7D11" >}}
> - Intentar medir voltaje usando la escala de resistencia puede dañar un multímetro. {{< link id="T7D06" >}}

Al medir voltaje, configura tu multímetro en el rango apropiado (CC o CA) y conéctalo a través del componente que estás midiendo: sonda roja al punto positivo y negra al negativo o tierra.

Para mediciones de corriente, tienes que abrir el circuito y poner el medidor en línea para que la corriente fluya a través de él.

> ⚠️ **ADVERTENCIA**: Nunca conectes las sondas en paralelo con un circuito mientras el medidor está configurado para medir corriente. La baja resistencia interna del medidor lo convierte en casi un cortocircuito, lo que puede fundir el fusible del medidor, dañar el medidor o crear un peligro de seguridad.

#### Trabajar con condensadores

> **Información clave:**
> - Una lectura de resistencia que aumenta con el tiempo en un ohmímetro indica un condensador descargado que se está cargando. {{< link id="T7D10" >}}
> - El peligro en una fuente de alimentación inmediatamente después de apagarla es la carga almacenada en los condensadores de filtro. {{< link id="T0A11" >}}

Cuando mides un condensador con un ohmímetro, la lectura normalmente empieza baja y sube con el tiempo. Eso es normal: el ohmímetro aplica una pequeña corriente para hacer su medición, y esa corriente carga el condensador. A medida que el condensador se carga, la corriente baja, lo que el medidor interpreta como resistencia creciente.

Ese mismo comportamiento de almacenamiento de carga es lo que hace que los condensadores sean un peligro real dentro de las fuentes de alimentación. Incluso después de desenchufar la fuente, los condensadores de filtro pueden mantener voltajes peligrosos durante mucho tiempo. Siempre descarga los condensadores de forma segura antes de trabajar en equipo que pueda tenerlos cargados.

#### Medir altos voltajes

> **Información clave:** Al medir altos voltajes con un voltímetro, asegúrate de que el voltímetro y sus cables estén clasificados para los voltajes que se van a medir. {{< link id="T0A12" >}}

La seguridad es primordial al medir altos voltajes. Usar un voltímetro clasificado para 50 voltios para medir 1000 voltios podría dañar el medidor, permitir que el alto voltaje forme un arco a través de los cables o causar lesiones graves. Algunos equipos de radioafición —especialmente los basados en tubos— pueden tener voltajes peligrosamente altos, y los condensadores de filtro discutidos arriba pueden mantener ese peligro mucho después de desenchufar el equipo.

#### Otro equipo de prueba esencial

> **Información clave:**
> - El propósito principal de una carga fantasma ("dummy load") es evitar transmitir señales al aire al hacer pruebas. {{< link id="T7C01" >}}
> - Una carga fantasma ("dummy load") típica de RF consiste en una resistencia no inductiva de 50 ohmios montada en un disipador de calor. {{< link id="T7C03" >}}

Algunos otros instrumentos merecen espacio en la caja de herramientas de cualquier radioaficionado:

1. **Medidor de ROE**: mide la relación de onda estacionaria para que puedas saber qué tan bien está adaptada tu antena a tu transmisor. Cubrimos la ROE en detalle en la Sección 4.5.
2. **Vatímetro**: mide la potencia de salida de tu transmisor, lo que te ayuda a mantenerte dentro de los límites legales y confirmar operación correcta.
3. **Carga fantasma ("dummy load")**: te permite probar transmisores sin poner una señal en el aire. Se ve como una antena correctamente adaptada para tu transmisor, pero convierte toda la energía de RF en calor en lugar de radiarla.
4. **Osciloscopio**: visualiza señales eléctricas a lo largo del tiempo. Es más avanzado, pero útil para diagnosticar problemas de modulación o calidad de señal.

#### El arte de soldar

> **Información clave:**
> - La soldadura con núcleo de ácido no debe usarse para aplicaciones de radio y electrónica. {{< link id="T7D08" >}}
> - La apariencia característica de una unión fría de soldadura de estaño-plomo es una superficie rugosa o grumosa. {{< link id="T7D09" >}}

Soldar es una habilidad que se paga sola muchas veces en cables reparados, conectores arreglados y proyectos caseros. Lo básico:

1. Usa un soldador con control de temperatura ajustable (600–700°F / 315–370°C es apropiado para la mayoría de la electrónica).
2. “Estaña” la punta del soldador aplicando una pequeña cantidad de soldadura antes de hacer una conexión.
3. Calienta la unión, no la soldadura. Toca con el soldador las partes que estás uniendo y luego aplica soldadura a la unión caliente para que fluya dentro de la conexión.
4. Usa soldadura con núcleo de resina para electrónica. Nunca uses *soldadura con núcleo de ácido*: su residuo de fundente corrosivo dañará tus componentes con el tiempo.
5. Trabaja en un área bien ventilada y usa siempre gafas de seguridad.
6. Una buena unión de soldadura es lisa y brillante, con forma cóncava. Si una unión se ve opaca, *rugosa o grumosa*, probablemente es una unión “fría” que se formó cuando las piezas no se calentaron lo suficiente. Las uniones frías pueden causar conexiones intermitentes y deben refluirse.

---

Incluso con buen equipo y buena técnica, a veces las cosas salen mal al aire. La siguiente sección cubre los tipos de interferencia y problemas de audio que es más probable que encuentres, y qué hacer al respecto.
