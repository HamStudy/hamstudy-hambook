---
chapter: "4"
section: "4.5"
questions: [ "T9B12", "T7C04", "T7C06", "T9B01", "T7C05", "T9B09", "T7C02", "T7C08" ]
---

### Sección 4.5: Relación de Onda Estacionaria (ROE o SWR)

La Relación de Onda Estacionaria, o ROE (también conocida como SWR por sus siglas en inglés), es un concepto crítico para asegurar que tu sistema de antena esté funcionando de manera eficiente. Vamos a desglosarlo en partes manejables:

#### ¿Qué es la ROE?

> **Información Clave:** La ROE es una **medida de cuán bien se adapta una carga a una línea de transmisión**. Una lectura de **1:1** en un medidor de ROE indica una **coincidencia perfecta de impedancia** entre la antena y la línea de alimentación. {{< link id="T9B12" >}} {{< link id="T7C04" >}}

La ROE es esencialmente una tarjeta de reporte para la coincidencia de impedancia en tu sistema de antena. Te dice qué tan bien la impedancia de tu transmisor coincide con la impedancia combinada de tu línea de alimentación y tu antena. Cuando estas impedancias coinciden (típicamente a 50 ohmios en radioafición), se transfiere la máxima potencia de tu transmisor a tu sistema de antena.

![Ilustración que muestra agua fluyendo a través de tuberías que cambian de diámetro, causando contrapresión](../../../images/illus/backpressure.svg)
{.img-pgcap .float-right}

Piensa en tu sistema de radio como agua fluyendo a través de tuberías. Tu transmisor empuja la señal (agua) a través de tu línea de alimentación (tubería) hacia tu antena. Cuando las tuberías son del tamaño correcto (buena coincidencia de impedancia), el agua fluye suavemente. Pero si hay una discordancia, parte del agua es empujada hacia atrás, creando contrapresión - igual que la energía RF reflejada de vuelta a tu transmisor. Esta contrapresión es lo que mide la ROE.

La ROE se mide como una relación - esto es lo que significan las diferentes lecturas:

- **ROE 1:1**: ¡Coincidencia perfecta! Toda la potencia está siendo aceptada por tu línea de alimentación y antena.
- **Hasta ROE 1.5:1**: ¡Excelente! La mayor parte de tu potencia está pasando.
- **ROE 2:1**: Aceptable pero no ideal. Algo de potencia está siendo reflejada.
- **ROE 3:1 o mayor**: Tu *impedancia no coincide*. Una cantidad significativa de potencia está siendo reflejada. {{< link id="T7C06" >}}

#### ¿Por qué importa la ROE?

> **Información Clave:** Un beneficio de una ROE baja es la **reducción de pérdida de señal**. La mayoría de los transmisores de estado sólido **reducen la potencia de salida a medida que aumenta la ROE** para **proteger los transistores del amplificador de salida**. {{< link id="T9B01" >}} {{< link id="T7C05" >}}

¿Por qué deberías preocuparte por la ROE? Todo se trata de eficiencia y seguridad del equipo. Cuanto más baja sea tu ROE, más potencia de tu radio realmente llega a tu antena y sale al mundo. Una ROE alta significa que parte de esa potencia está rebotando de regreso a tu radio en lugar de ser transmitida.

Esta potencia reflejada crea dos problemas significativos:

1. **Energía Desperdiciada**: La potencia reflejada de vuelta a tu transmisor no contribuye a tu señal, reduciendo tu rango efectivo de comunicación.

2. **Daño al Equipo**: Más seriamente, la potencia reflejada puede sobrecalentar y dañar los componentes del amplificador de salida de tu transmisor. Esta es la razón por la que *la mayoría de los transmisores de estado sólido automáticamente reducen la potencia de salida a medida que la ROE aumenta más allá de cierto nivel*.

Los radios modernos tienen circuitos de protección que detectan una ROE alta y reducen la potencia o se apagan si es necesario, pero es mejor no depender de ellos—especialmente con transmisores más económicos. Mantener tu ROE baja asegura que tu radio se mantenga eficiente y seguro durante años.

#### Causas comunes de ROE alta

> **Información Clave:** Una conexión suelta en la antena o línea de alimentación puede causar *cambios erráticos en la ROE*. {{< link id="T9B09" >}}

¿Qué causa una ROE alta? Aquí hay algunos culpables comunes:

1. **Longitud de la Antena**: Tu antena no tiene la longitud correcta para la frecuencia que estás usando.
2. **Problemas con la Línea de Alimentación**: Hay un problema con tu línea de alimentación — tal vez está dañada o le ha entrado agua.
3. **Objetos Metálicos Cercanos**: Tu antena está demasiado cerca de objetos metálicos. ¡Recuerda, a las antenas no les gusta estar abarrotadas!
4. **Conexiones Sueltas o Corroídas**: Un poco de oxidación puede causar grandes problemas.

#### Midiendo la ROE

> **Información Clave:** Un *analizador de antena* o un *vatímetro direccional* pueden ser utilizados para determinar si una *antena está en resonancia* en la frecuencia deseada y para *medir la ROE*. {{< link id="T7C02" >}} {{< link id="T7C08" >}}

¿Cómo verificas tu ROE? Muchos radios modernos tienen medidores de ROE incorporados. Si el tuyo no lo tiene, puedes obtener un medidor de ROE externo o un analizador de antena. Estas herramientas son excelentes para tener en tu caja de herramientas de radioaficionado. Otra opción es usar un vatímetro direccional—mide cuánta potencia sale de tu radio (potencia directa) y cuánta potencia regresa de la antena (potencia reflejada), y puedes calcular tu ROE.

#### ROE y Radios Portátiles

Vale la pena señalar que verificar la ROE en un monopolo (como la mayoría de las antenas en un Transceptor Portátil) puede ser complicado. La antena en un HT utiliza tu cuerpo como parte del plano de tierra, por lo que cuando conectas cualquier equipo de medición, ¡fundamentalmente cambias el sistema de antena mismo! Esto a menudo conduce a lecturas inexactas y confusión.

Para HTs y configuraciones portátiles similares, generalmente es más práctico evaluar el rendimiento de la antena a través de pruebas de señal reales en lugar de confiar únicamente en mediciones de ROE. Si quieres verificar la ROE, dispositivos especiales que simulan la capacitancia del cuerpo pueden ayudar, pero no son perfectos.

#### Solución de problemas con ROE alta

Si tu ROE es alta, ¡no entres en pánico! Aquí hay algunas cosas que puedes probar:

1. **Verifica tus Conexiones**: ¡Una *conexión suelta en la antena o línea de alimentación* es tanto una solución muy fácil como un problema muy común, y hará que tu ROE se dispare en un instante!
2. **Ajusta la Longitud de tu Antena**: A veces un pequeño recorte o estiramiento es todo lo que necesitas.
3. **Usa un Acoplador de Antena**: Es como un casamentero para tu sistema de radio y antena.
4. **Mueve tu Antena**: Dale algo de espacio para respirar—¡lejos de objetos metálicos!

#### Pensamientos finales sobre la ROE

Si bien una ROE baja es esencial para una transferencia eficiente de potencia, no cuenta toda la historia sobre la efectividad de radiación de tu antena. Podrías tener una ROE perfecta de 1:1 con una carga fantasma (que es solo una resistencia que convierte energía RF en calor), pero no estarías haciendo ningún contacto porque ¡una carga fantasma no radia!

La ROE simplemente te dice que la potencia se está transfiriendo eficientemente desde tu transmisor a tu sistema de antena - lo que sucede después depende del diseño de la antena, la altura, el entorno y muchos otros factores. Una buena antena con una buena ROE asegura que tu potencia llegue a la antena y luego radie efectivamente al espacio.

Así que la próxima vez que estés configurando tu estación, tómate un momento para verificar tu ROE. Es como asegurarte de que la tubería desde tu tanque de agua no tenga fugas antes de preocuparte por hacia dónde apuntan los rociadores. Con una buena ROE, sabrás que la potencia de tu transmisor está al menos llegando a la antena - ¡el primer paso para hacer esos emocionantes contactos!