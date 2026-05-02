---
chapter: "5"
section: "5.3"
questions: [ "T0A04", "T0A05", "T0A08" ]
status: publish1
---

### Sección 5.3: Fusibles e interruptores automáticos

#### ¿Qué son los fusibles y los interruptores automáticos?

Los fusibles y los interruptores automáticos son la primera línea de defensa en la seguridad eléctrica. Su trabajo es interrumpir sobrecargas y cortocircuitos antes de que puedan dañar equipos o iniciar un incendio.

> **Información clave:** El propósito de un fusible en un circuito eléctrico es quitar la energía en caso de una sobrecarga. {{< link id="T0A04" >}}

#### Fusibles: los héroes de un solo uso

![Ilustración caricaturesca de un fusible recibiendo un rayo para proteger un radio costoso, con una etiqueta de precio de 50¢ en el fusible y una de $500 en el radio](../../../images/illus/fuse-hero.svg)
{.img-pgcap .float-right}

Un fusible es, en esencia, un eslabón débil sacrificial: un alambre delgado encerrado en un tubo de vidrio o cerámica, diseñado para derretirse primero para que todo lo que está aguas abajo de él no lo haga. Cuando fluye demasiada corriente, el alambre se calienta y se rompe, abriendo el circuito. Una vez que un fusible se ha fundido, hizo su trabajo y debe reemplazarse.

#### Interruptores automáticos: los protectores reutilizables

Los interruptores automáticos logran el mismo objetivo sin destruirse. Usan una tira bimetálica o un electroimán para detectar sobrecorriente y, cuando la detectan, accionan un interruptor que abre el circuito. Una vez resuelto el problema de fondo, puedes restablecer el interruptor y ponerlo de nuevo en servicio.

#### Elegir fusibles adecuados para los circuitos

Los fusibles están clasificados para niveles específicos de corriente, y usar el correcto importa más de lo que la mayoría de la gente cree. Digamos que acabas de instalar un equipo móvil en tu auto. Tienes un transceptor VHF/UHF de 50 W que consume alrededor de 10 A a plena potencia y estás por elegir un fusible para la línea de alimentación. El fabricante recomienda un fusible de 15 A. Tienes un fusible de 30 A en la guantera. Es tentador usar el de 30 A, pero eso es un error.

> **Información clave:** Un fusible de 5 amperios nunca debe reemplazarse por uno de 20 amperios porque la corriente excesiva podría causar un incendio. {{< link id="T0A05" >}}

Un fusible con una clasificación mayor que la del circuito para el que fue diseñado dejará pasar suficiente corriente para sobrecalentar el cableado mucho antes de dispararse. Los cables más pequeños detrás del tablero no fueron hechos para transportar 30 amperios, y si algo sale mal —un cortocircuito, una transmisión atascada, un cable aplastado— el propio cableado se convierte en el fusible. Aislamiento derritiéndose y humo dentro de la cabina cerrada de un vehículo no es el modo de falla que quieres.

**Esto es lo bastante importante como para decirlo claramente: nunca reemplaces un fusible por uno de mayor clasificación que la del circuito para el que fue diseñado, y nunca puentees un fusible por completo.** Si un fusible sigue fundiéndose, la respuesta es averiguar por qué, no instalar un fusible más grande.

#### Dónde instalar fusibles e interruptores automáticos

> **Información clave:** En un circuito de alimentación de CA de 120 V, un fusible o interruptor automático debe instalarse en serie solo con el conductor vivo. {{< link id="T0A08" >}}

Colocar el fusible en serie con el conductor vivo asegura que, cuando se dispare, desconecte el circuito de la fuente de voltaje energizada. Un fusible en la línea neutra detendría el flujo de corriente, pero el conductor vivo seguiría energizado, así que tocar un conductor expuesto en el circuito supuestamente apagado todavía podría darte una descarga.

Este principio también se aplica a circuitos de CC. Para configuraciones móviles y alimentadas por baterías, instala el fusible en serie con el conductor positivo, tan cerca de la batería como sea práctico. Un cortocircuito en cualquier punto aguas abajo de ese fusible lo disparará; un cortocircuito aguas arriba no lo hará y puede descargar una corriente enorme a través de cableado sin protección.

#### Algunos puntos prácticos más

- **Investiga los fusibles que se funden repetidamente**: Un fusible que se funde una vez puede ser un evento aleatorio. Un fusible que se funde dos veces está intentando decirte algo.
- **Conoce dónde están tus interruptores**: En tu estación y en tu casa, etiqueta los interruptores para saber qué controla cada uno. Lo agradecerás la vez que realmente necesites cortar la energía rápido.
- **Usa regletas con interruptores**: Las regletas con interruptores automáticos integrados te dan una capa adicional de protección para el equipo de tu estación.
- **Sobrecorriente no es sobrevoltaje**: Los fusibles e interruptores protegen contra demasiada corriente, no contra demasiado voltaje. Una sobretensión (por un rayo, por ejemplo) puede pasar a través de un fusible sin dispararlo. Los protectores contra sobretensión son otra cosa.

---

Los fusibles e interruptores protegen tu equipo de fallas eléctricas, pero el equipo mismo —especialmente las baterías— tiene su propio conjunto de peligros. La siguiente sección cubre la seguridad con baterías, incluido por qué una batería de plomo-ácido o de ion-litio puede ser peligrosa de maneras en que un tomacorriente no lo es.
