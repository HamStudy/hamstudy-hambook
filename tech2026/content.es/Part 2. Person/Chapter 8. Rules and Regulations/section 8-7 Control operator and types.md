---
chapter: "8"
section: "8.7"
questions: [ "T1E11", "T1E03", "T1E07", "T1E04", "T1E01", "T1E06", "T1F01", "T1E05", "T1E10", "T1E09", "T1E08", "T1D07", "T1F10" ]
status: publish1
---

### Sección 8.7: Operador de Control y Tipos de Control

El operador de control es la persona responsable de lo que sale al aire. Toda estación de aficionado que transmite tiene uno, y la Parte 97 tiene cosas específicas que decir sobre quién es esa persona, qué se le permite hacer y dónde debe estar.

#### ¿Qué es un Operador de Control?

> **Información Clave:**
> - Un operador de control es un operador de radioafición designado por el licenciatario de una estación para ser responsable de las transmisiones y del cumplimiento de las reglas de la FCC en esa estación. {{< link id="T1E11" >}}
> - El operador de control de la estación debe ser designado por el licenciatario de la estación. {{< link id="T1E03" >}}
> - Cuando el operador de control no es el licenciatario de la estación, tanto el operador de control como el licenciatario de la estación son responsables de la operación adecuada de la estación. {{< link id="T1E07" >}}

Toda estación de aficionado tiene dos roles clave: el **licenciatario de la estación** y el **operador de control**. El licenciatario de la estación es la persona que posee la licencia de esa estación, normalmente el propietario. El operador de control es el radioaficionado designado por el licenciatario para ser responsable de las transmisiones reales. Pueden ser la misma persona o personas distintas, pero ambos roles siempre existen mientras una estación está al aire.

Cuando son personas distintas —por ejemplo, si dejas que un amigo con licencia opere tu estación— ambos comparten responsabilidad. El operador de control es responsable de lo que se transmite mientras está en los controles; el licenciatario es responsable de la estación misma y de designar quién puede operarla.

#### Privilegios y el Operador de Control

> **Información Clave:**
> - Los privilegios de frecuencia de transmisión de una estación de aficionado están determinados por la clase de licencia de operador que posee el operador de control. {{< link id="T1E04" >}}
> - Una estación de aficionado nunca puede transmitir sin un operador de control. {{< link id="T1E01" >}}

Este es un punto importante: los privilegios en uso están ligados al *operador de control*, no al hardware de la estación ni a quién más esté en la habitación. Un operador de clase General podría ser el operador de control en una estación propiedad de un licenciatario Technician, y aplicarían los privilegios General. Lo inverso también funciona: un Técnico actuando como operador de control en la estación de un Extra solo puede operar dentro de los privilegios Technician.

Una estación nunca puede transmitir sin un operador de control, incluso cuando no hay nadie físicamente presente junto al radio. Para una estación controlada remotamente, el operador de control está en el punto de control (más sobre esto abajo). Para una estación controlada automáticamente —como un repetidor— todavía debe designarse un operador de control con licencia, aunque no esté monitoreando activamente cada transmisión.

> **Información Clave:** Salvo durante una emergencia, un licenciatario de clase Technician nunca puede ser el operador de control de una estación que opere en un segmento de banda de clase Amateur Extra. {{< link id="T1E06" >}}

Un Técnico puede transmitir en frecuencias para las que tiene licencia mientras un operador de clase superior es el operador de control (por ejemplo, en una estación de club durante un concurso), pero un Técnico nunca es el operador de control en segmentos solo para Extra. El límite por clase de operador es estricto.

#### El Punto de Control

> **Información Clave:** El punto de control de una estación de aficionado es la ubicación en la que se realiza la función de operador de control. {{< link id="T1E05" >}}

El punto de control no es donde está la antena, ni donde está el transmisor, ni donde está la dirección postal del licenciatario. Es donde está sentado el operador de control (o de pie, o conduciendo, o dondequiera que esté operando). Para la mayoría de las estaciones, el punto de control es el mismo lugar que el radio, pero no tiene por qué serlo.

#### Tipos de Control

Hay tres tipos de control en radioafición, distinguidos por dónde está el operador de control en relación con el transmisor.

##### Control Local

El control local es el tipo más común: estás físicamente en la estación, sentado frente al radio, operándolo directamente. El punto de control y la estación están en el mismo lugar.

##### Control Remoto

> **Información Clave:**
> - Operar la estación por internet es un ejemplo de control remoto según se define en la Parte 97. {{< link id="T1E10" >}}
> - Cualquier estación de aficionado puede ser controlada remotamente. {{< link id="T1E09" >}}

Con control remoto, el operador de control manipula los controles de la estación mediante algún tipo de enlace, más comúnmente internet. El operador de control aún debe estar en el punto de control (que ahora es dondequiera que esté operando remotamente), y se requiere un operador de control en todo momento. No hay restricción sobre qué tipo de estación puede controlarse remotamente: cualquier estación puede.

##### Control Automático

> **Información Clave:** La operación de repetidor es un ejemplo de control automático. {{< link id="T1E08" >}}

Con control automático, la estación opera sin un operador de control físicamente presente en el punto de control, aunque todavía debe designarse uno. El control automático está limitado a operaciones específicas como repetidores, balizas y estaciones espaciales.

#### Retransmisión Automática

Algunos tipos de estaciones de aficionado tienen permitido retransmitir automáticamente señales de otras estaciones, específicamente estaciones repetidoras, auxiliares y espaciales. Este es un aspecto clave del control automático que tiene reglas específicas.

**Estaciones repetidoras** reciben señales en una frecuencia y las retransmiten simultáneamente en otra, extendiendo el alcance de las comunicaciones.

> **Información Clave:** Un ejemplo de estación auxiliar es una que envía transmisiones unidireccionales entre un receptor remoto de repetidor y el transmisor principal del repetidor. {{< link id="T1D07" >}}

**Estaciones auxiliares** pueden retransmitir automáticamente señales como parte de una red local de estaciones de aficionado.

**Estaciones espaciales** (satélites y otras estaciones de radioafición basadas en el espacio) pueden retransmitir automáticamente señales de estaciones terrestres.

> **Información Clave:** Cuando un repetidor retransmite inadvertidamente comunicaciones que violan las reglas de la FCC, el operador de control de la estación de origen es responsable. {{< link id="T1F10" >}}

Esto tiene sentido práctico: el operador de control del repetidor normalmente no está monitoreando cada transmisión, pero la persona que originó la transmisión indebida sabía lo que estaba diciendo. Ten en cuenta que si el propietario de un repetidor se da cuenta de que alguien viola regularmente las reglas a través de su repetidor y no hace nada, el propietario también puede ser considerado responsable.

Una estación que opera bajo control automático y causa interferencia perjudicial debe cesar la operación.

#### Registros de Estación e Inspección

> **Información Clave:** La estación y los registros de la estación deben estar disponibles para inspección de la FCC en cualquier momento a solicitud de un representante de la FCC. {{< link id="T1F01" >}}

Como licenciatario federal, estás sujeto a la supervisión de la FCC. Un representante de la FCC puede solicitar inspeccionar tu estación y tus registros sin aviso previo por escrito y sin una orden judicial. En la práctica, esto rara vez sucede salvo que haya motivo para sospechar una infracción, pero el requisito existe. Mantén accesible la documentación de tu licencia.

---

Ese es el lado de las reglas. Con la ciencia de la Parte 1 y las prácticas operativas, consideraciones de seguridad y reglamentos de la Parte 2, tienes una imagen completa de lo que se necesita para ser un operador de radioafición de clase Technician.
