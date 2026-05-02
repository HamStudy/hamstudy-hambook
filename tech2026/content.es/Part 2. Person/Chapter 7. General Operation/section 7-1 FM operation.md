---
chapter: "7"
section: "7.1"
questions: [ "T2A02", "T4B04", "T2B05", "T7B01", "T8A12", "T2B11", "T2B10", "T2A08" ]
status: publish1
---

### Sección 7.1: Operación FM

Bienvenido a FM (modulación de frecuencia), el modo que probablemente usarás con más frecuencia como nuevo Técnico. Es el estándar para comunicaciones de voz en VHF/UHF: ofrece audio claro y una gran resistencia al ruido, lo que lo hace perfecto para contactos locales cotidianos.

#### Entendiendo FM

![Antena HT FM](../../../images/illus/ht-signalstick.svg)
{.img-xsmall .float-right}

FM es el modo predeterminado para la mayoría de las comunicaciones locales, especialmente en las bandas VHF y UHF. Mientras que AM (modulación de amplitud) se vuelve inestable cuando hay interferencia eléctrica, FM mantiene la calma y entrega audio limpio incluso en entornos ruidosos.

En lugar de variar la intensidad de la señal (como lo hace AM), FM varía ligeramente la frecuencia. Es como cambiar el color de un láser en vez de su intensidad. Por eso FM suena tan clara en la radio de tu coche, y por eso es perfecta para charlas locales de radioaficionados.

Como discutimos en la Sección 3.5, también existe PM (modulación de fase), que en el uso práctico es tan parecida a FM que la mayoría de los radioaficionados no conocen la diferencia. Por conveniencia, simplemente nos referimos a ella como FM, ya que la diferencia principal está en cómo el transmisor genera la señal.

#### Tipos de Operación FM

Ahora hablemos de cómo se usa FM en el mundo de la radioafición:

1. **Operación Simplex**: Es la comunicación directa de radio a radio. Como se presentó en la Sección 6.5, tú y tu contacto están en la misma frecuencia, turnándose para transmitir y recibir. Es excelente para charlas locales o comunicaciones de emergencia cuando los repetidores podrían estar fuera de servicio.

   > **Información Clave:** La frecuencia nacional de llamada para operaciones simplex de FM en la banda de 2 metros es 146.520 MHz. {{< link id="T2A02" >}}

   Es como el equivalente radiofónico de una plaza pública: se usa para hacer el contacto inicial antes de moverse a otra frecuencia.

2. **Operación con Repetidor**: Como se cubrió en la Sección 6.5, la mayoría de los repetidores de VHF y UHF usan FM. Escuchan en una frecuencia y transmiten en otra, aumentando enormemente tu área de cobertura.

3. **FM de Banda Estrecha**: Muchas radios modernas usan FM de banda estrecha para permitir más canales en el mismo espacio de frecuencia. Piensa en ello como meter más coches en un estacionamiento reduciendo un poco el tamaño de cada espacio.

#### Consejos para Operar en FM

Cuando operes en FM, ten presentes estos consejos:

- Habla claro y a un ritmo normal. No hace falta gritar: ¡el micrófono está justo ahí!
- Deja una pausa entre transmisiones. Esto da a otros la oportunidad de entrar o pedir ayuda.
- Usa simplex cuando sea posible. Mantiene los repetidores disponibles para quienes realmente necesitan el alcance extendido.

Hay un par de problemas específicos de FM a los que debes prestar atención: la sintonía debe ser precisa (otros modos pueden sonar desafinados cuando estás ligeramente fuera de frecuencia, pero FM simplemente suena mal), y como discutimos en la Sección 6.7, el volumen del micrófono también importa: hablar demasiado fuerte puede causar sobredesviación, lo que produce cortes de audio en los picos de voz.

> **Información Clave:**
> - Cuando se recibe una señal FM ligeramente fuera de frecuencia, el audio se distorsiona. {{< link id="T4B04" >}}
> - El audio se corta en los picos de voz porque estás hablando demasiado fuerte. {{< link id="T2B05" >}}
> - Si te dicen que tu transceptor FM está sobredesviando, habla más lejos del micrófono. {{< link id="T7B01" >}}

#### Peculiaridades de FM

FM tiene algunas peculiaridades que debes conocer:

- **Efecto de Captura**: La señal más fuerte gana. Si dos estaciones transmiten al mismo tiempo en la misma frecuencia, normalmente solo oirás la más fuerte. Si tienen intensidades parecidas, puedes oír audio confuso, o nada en absoluto.
- **Problema Cerca-Lejos**: Una estación cercana puede imponerse sobre un repetidor más distante, especialmente si su frecuencia está cerca. Intenta cambiar de posición o usar una antena direccional para ayudar.

> **Información Clave:** Una desventaja de FM comparada con la banda lateral única es que solo se puede recibir una señal a la vez, una consecuencia directa del efecto de captura. {{< link id="T8A12" >}}

#### Códigos Q y Abreviaturas Comunes

Históricamente, los operadores que usaban código Morse (CW) necesitaban formas rápidas y estandarizadas de expresar mensajes comunes. Aunque estos atajos no son necesarios en la comunicación de voz, se han convertido en una parte duradera de la cultura de la radioafición.

> **Información Clave:** Vale la pena reconocer todos estos términos — los radioaficionados los usan constantemente como jerga coloquial — pero los que pueden aparecer en tu examen son QSY (cambiar de frecuencia), QRM (recibir interferencia de otras estaciones) y la señal de procedimiento CQ (llamar a cualquier estación). {{< link id="T2B11" >}} {{< link id="T2B10" >}} {{< link id="T2A08" >}}

No los cubriremos todos aquí, pero estos son algunos de los más comunes:

- **QSY** – "Estoy cambiando de frecuencia" o "Cambia tu frecuencia a...".
- **QTH** – "Mi ubicación es...". Se usa para decir a otros dónde estás.
- **QRM** – "Estoy recibiendo interferencia de otras estaciones".
- **QRN** – "Estoy recibiendo interferencia de ruido atmosférico". Piensa en estática de tormenta.
- **QSL** – "Confirmo" o "Entiendo". Como decir "recibido" o "copiado".
- **QRZ** – "¿Quién me está llamando?". Se usa cuando alguien llama pero no captaste el indicativo.
- **73** – "Saludos cordiales" o "Adiós".
- **88** – "Besos y abrazos" (a menudo usado por parejas de radioaficionados o amigos cercanos).
- **CQ** – "Llamando a cualquier estación". Úsalo cuando quieras que alguien — cualquiera — te responda.
- **DX** – Se refiere a distancia. "Trabajar DX" significa intentar hacer contactos de larga distancia o extranjeros.

Estos códigos y abreviaturas son parte del lenguaje único de la radioafición.

---

FM es confiable y perfecta para conversaciones cotidianas, pero los Técnicos también tienen una pequeña porción de HF disponible, y eso es lo que viene a continuación.
