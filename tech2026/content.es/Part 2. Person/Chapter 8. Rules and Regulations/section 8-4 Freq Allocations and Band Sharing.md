---
chapter: "8"
section: "8.4"
questions: [ "T1B08", "T2A10", "T1A08", "T1A09", "T2B09", "T2B08" ]
status: publish1
---

### Sección 8.4: Asignaciones de Frecuencia y Compartición de Bandas

Ahora que sabes qué frecuencias puedes usar, aquí hay una pregunta que vale la pena considerar: ¿cómo se encuentran realmente los radioaficionados entre sí? Tener una licencia no basta; si no sabes qué frecuencia están usando otras personas, no puedes hablar con ellas. Este es un asunto más práctico de lo que parece. Muchas personas compran un radio "para emergencias" y nunca lo usan, y luego en una emergencia real no tienen idea de dónde sintonizar.

La respuesta implica un sistema por capas de asignaciones, planes de banda voluntarios y coordinadores de frecuencia que organizan cómo se usa el espectro. Esta sección cubre cada capa.

#### Gestión del Espectro

El espectro radioeléctrico es un recurso finito compartido entre muchos servicios: radiodifusión, telefonía celular, militar, aviación, operadores satelitales y radioafición, entre otros. En los EE. UU., la Comisión Federal de Comunicaciones (FCC) decide qué porciones corresponden a cada servicio, dividiendo el espectro en asignaciones.

#### Asignaciones Primarias vs. Secundarias

> **Información Clave:** En segmentos de bandas donde el Servicio de Radioaficionados es secundario, los radioaficionados estadounidenses pueden encontrar estaciones no aficionadas en esos segmentos y deben evitar interferir con ellas. {{< link id="T1B08" >}}

No todas las asignaciones de espectro son iguales. Cada servicio en una banda determinada es:

- **Primario**: tiene prioridad en esa frecuencia. Otros servicios no deben interferir con los usuarios primarios, y los usuarios primarios no tienen que acomodar la interferencia de usuarios secundarios.
- **Secundario**: puede usar la frecuencia, pero no debe causar interferencia a los usuarios primarios, y debe aceptar cualquier interferencia que los usuarios primarios le causen.

Como operador de radioafición, te encontrarás en ambas situaciones. Por ejemplo, en la banda de 70 cm (420–450 MHz), la radioafición es secundaria frente a servicios gubernamentales de radiolocalización en algunas áreas. Si los usuarios federales necesitan las ondas, nosotros nos hacemos a un lado.

Por otro lado, hay bandas donde los aficionados tienen estatus primario. La porción 2390–2417 MHz de la banda de 2.4 GHz es un ejemplo: la radioafición es primaria allí, mientras que los dispositivos Wi-Fi (el canal 1 de Wi-Fi cae en este rango) operan sobre una base secundaria. Eso significa que si hay interferencia entre una estación de aficionado y dispositivos Wi-Fi en esas frecuencias, la estación de aficionado tiene prioridad legal, aunque es bastante probable que tu vecino no lo sepa, por lo que la utilidad práctica es cuestionable.

#### Planes de Banda

> **Información Clave:** Un plan de banda, más allá de los privilegios establecidos por la FCC, es una guía voluntaria para usar diferentes modos o actividades dentro de una banda de radioaficionados. {{< link id="T2A10" >}}

Dentro de nuestra porción del espectro, la comunidad de radioaficionados organiza aún más las cosas mediante planes de banda voluntarios. Estos designan qué segmentos de una banda se usan típicamente para qué: voz en una parte, modos digitales en otra, repetidores en ciertas frecuencias, frecuencias de llamada para hacer contactos iniciales, y así sucesivamente. No son leyes, pero se siguen ampliamente porque hacen práctico compartir la banda.

Esta también es la capa que resuelve el problema de "¿cómo encuentro a alguien?" mencionado al comienzo de la sección. Si sabes qué segmento de una banda usan los radioaficionados de tu zona para voz FM, dónde están los repetidores locales y qué frecuencia de llamada monitorear, tienes un punto de partida. Sin el plan de banda, estarías girando el dial a ciegas.

Diferentes modos también necesitan distintas cantidades de ancho de banda: desde señales CW estrechas (alrededor de 150 Hz) hasta transmisiones de voz FM más anchas (unos 16 kHz). Los planes de banda ayudan a acomodar estas diferentes necesidades y a evitar que las señales se extiendan accidentalmente más allá de los bordes de banda.

#### Coordinadores de Frecuencia

> **Información Clave:**
> - Un Coordinador de Frecuencia Voluntario reconocido por los radioaficionados locales recomienda canales de transmisión/recepción para estaciones repetidoras y auxiliares. {{< link id="T1A08" >}}
> - Los Coordinadores de Frecuencia son seleccionados por operadores aficionados de un área local o regional cuyas estaciones son elegibles para ser estaciones repetidoras o auxiliares. {{< link id="T1A09" >}}

Los repetidores en particular necesitan coordinación cuidadosa: dos repetidores que intentan usar las mismas frecuencias de entrada/salida en áreas de cobertura superpuestas pueden interferirse gravemente. Los coordinadores de frecuencia son voluntarios que gestionan esto para una región, recomendando qué pares de frecuencias deben usar los nuevos repetidores y ayudando a resolver conflictos. No son nombrados por ninguna agencia gubernamental; son elegidos por los operadores locales de repetidores a quienes sirven.

Sus recomendaciones no son legalmente vinculantes, pero seguirlas se considera una buena práctica de radioafición. La mayoría de los operadores de repetidores trabaja con su coordinador local para asegurar que su estación encaje bien en la red de repetidores existente.

Las asignaciones de frecuencia y las convenciones también varían entre regiones de la UIT, así que siempre revisa las regulaciones locales si operas internacionalmente.

#### Canales Simplex Designados

> **Información Clave:** Los canales simplex se designan en los planes de banda VHF/UHF para que las estaciones dentro del alcance entre sí puedan comunicarse sin ocupar un repetidor. {{< link id="T2B09" >}}

Los repetidores son recursos compartidos valiosos, y no hay razón para ocupar uno cuando puedes hablar directamente con alguien. Los planes de banda VHF/UHF reservan canales simplex específicos exactamente para este propósito: eventos locales, contactos casuales entre estaciones cercanas o cualquier situación en la que el repetidor no sea necesario.

Es tentador escoger una frecuencia arbitraria y empezar a operar, pero siempre revisa primero el plan de banda local: podrías estar en la entrada de un repetidor sin saberlo, haciendo que todos los demás escuchen tu tráfico (y probablemente se molesten porque estás ocupando el repetidor).

#### Interferencia y Resolución

> **Información Clave:** Cuando dos estaciones que transmiten en la misma frecuencia interfieren entre sí, las estaciones deben negociar el uso continuado de la frecuencia. {{< link id="T2B08" >}}

A veces dos estaciones terminan en la misma frecuencia pese a las mejores intenciones de todos. La regla es cortesía mutua: ambas estaciones tienen iguales derechos, nadie tiene un reclamo preferente por haber llegado primero o por tener la señal más fuerte, y el enfoque correcto es hablar entre ustedes y decidir quién se moverá o cómo compartir.

La interferencia deliberada —interrumpir intencionalmente a otra estación— es un asunto completamente distinto. Está prohibida y puede resultar en sanciones de la FCC. Si la encuentras, documéntala y repórtala por los canales adecuados en lugar de enfrentarte con la estación interferente.

---

Eso cubre cómo se divide y comparte el espectro. La próxima sección entra en una de las reglas más fundamentales para operar dentro de él: cómo y cuándo identificar tu estación.
