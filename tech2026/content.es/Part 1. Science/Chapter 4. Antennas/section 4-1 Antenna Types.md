---
chapter: "4"
section: "4.1"
questions: [ "T9A11", "T9A05", "T9A01", "T9A06", "T9A10", "T9A08", "T9A09", "T9A02", "T9A04", "T9B04" ]
status: publish1
---

### Sección 4.1: Tipos de antenas

Imagina que estás en una fiesta, tratando de hablar con un amigo al otro lado de una habitación ruidosa: ¿cómo podrías hacerlo? Tal vez podrías poner tus manos alrededor de la boca para dirigir tu voz, o girar una oreja hacia tu amigo para escuchar mejor. Las mejores antenas funcionan de manera similar: ayudan a dirigir la energía de radio hacia donde quieres que vaya y a captar las señales que quieres escuchar.

Hay muchos tipos diferentes de antenas, cada una con sus propias ventajas y desventajas. Algunas ocupan más o menos espacio, algunas son direccionales, algunas tienen más ganancia. El truco está en encontrar la antena que funcione mejor para tu situación, y la mayoría de los radioaficionados terminan con varias antenas diferentes para diversos propósitos.

> **Definamos un término**: En este libro usaremos ocasionalmente el término "sistema de antena". El sistema de antena incluye todo lo conectado al puerto de antena de tu transceptor: la línea de alimentación, cualquier sintonizador o red de adaptación, y la antena misma. Esta es una distinción útil: conceptos como la ROE (SWR) y la adaptación de impedancia se aplican al sistema completo, no solo a la antena.

#### Conceptos esenciales de antenas

**Vamos a cubrir mucha información en esta sección que no necesitas estrictamente saber para aprobar tu examen de licencia**; algunos lectores quizá prefieran leer por encima y enfocarse en las preguntas, y luego volver más tarde cuando la información se sienta más relevante, ¡y eso está bien!

Unas cuantas ideas se aplican a casi todas las antenas que encontrarás, así que vale la pena aclararlas desde el principio.

##### Ganancia de antena

> **Información clave:** La ganancia de una antena es el aumento de la intensidad de la señal en una dirección especificada en comparación con una antena de referencia. {{< link id="T9A11" >}}

Piensa en la ganancia de antena como cambiar una bombilla normal por un reflector: obtienes un haz más brillante en una dirección, pero menos luz en otras. La idea clave es que la ganancia es *redistribución*, no energía gratis: una antena con ganancia enfoca la señal que ya tienes en un área más estrecha en lugar de crear más señal. Eso aparece tanto en antenas direccionales (beams) como en algunas verticales diseñadas para empujar la señal hacia el horizonte.

La ganancia se mide típicamente en:
- dBi (decibelios relativos a un radiador isotrópico).
- dBd (decibelios relativos a un dipolo).

Un radiador isotrópico es una antena teórica "perfecta" que radia por igual en todas las direcciones, usada como punto de referencia para comparar antenas reales. La "i" en "dBi" se refiere a este radiador isotrópico. dBd usa como referencia un dipolo de media onda. El dipolo en sí tiene algo de ganancia sobre un radiador isotrópico (aproximadamente 2,15 dB), así que una cifra en dBi siempre será un poco más alta que la misma ganancia de antena expresada en dBd.

##### Longitud de antena y frecuencia

> **Información clave:** Acortar una antena dipolo aumenta su frecuencia de resonancia. {{< link id="T9A05" >}}

La longitud de una antena está ligada a su frecuencia de resonancia: la frecuencia en la que opera con mayor eficiencia. Las antenas más largas resuenan a frecuencias más bajas; las antenas más cortas resuenan a frecuencias más altas. Aquí tienes una fórmula práctica para un dipolo de media longitud de onda:

$\text{Longitud (en pies)} ≈ \frac{468}{\text{frecuencia (en MHz)}}$

o

$\text{Longitud (en pulgadas)} ≈ \frac{5600}{\text{frecuencia (en MHz)}}$

A continuación se muestran longitudes comunes para diferentes bandas. Puedes aprender la ecuación o simplemente memorizar el número, lo que te resulte más fácil.

| Banda  | Frecuencia | Longitud de media onda | Longitud de cuarto de onda |
|:-----:|:---------:|:----------------:|:-------------------:|
| 10m   | 28 MHz    | 200 pulgadas       | 100 pulgadas          |
| 6m    | 50 MHz    | 112 pulgadas       | 56 pulgadas           |
| 2m    | 146 MHz   | 38 pulgadas        | 19 pulgadas           |
| 1.25m | 222 MHz   | 25 pulgadas        | 12.5 pulgadas         |
| 70cm  | 440 MHz   | 13 pulgadas        | 6.5 pulgadas          |

#### Tipos comunes de antenas

1. **Antenas directivas (beam)**

   > **Información clave:** Una antena directiva es una antena que concentra las señales en una dirección. {{< link id="T9A01" >}} De los tipos comunes de antena, la antena Yagi ofrece la mayor ganancia. {{< link id="T9A06" >}}

   Imagina una antena directiva como el reflector de una linterna enfocando la luz. La Yagi usa varios elementos — un elemento excitado más directores parásitos y un reflector — para lograr alta ganancia y directividad. Como toda ganancia, esto es una redistribución de la señal: obtienes una señal más fuerte en la dirección hacia la que apunta la antena, pero una señal mucho más débil en otros lugares.

2. **Dipolos**

   > **Información clave:** Una antena dipolo de media onda radia la señal más fuerte perpendicular (broadside) a la antena. {{< link id="T9A10" >}}

   El dipolo es el tipo de antena más básico y fundamental: dos conductores de igual longitud, alimentados en el centro. La mayoría de las demás antenas son en realidad variaciones ingeniosas de este diseño básico. Un dipolo de media longitud de onda puede orientarse en cualquier dirección, y su señal siempre es más fuerte *perpendicular (broadside) al cable*. Entender los dipolos te ayuda a entender cómo funciona casi cualquier otra antena.

3. **Monopolos y verticales de cuarto de onda**

   > **Información clave:** Una antena vertical de 19 pulgadas se usa a menudo en 2 metros porque es un cuarto de onda resonante en esa frecuencia. {{< link id="T9A08" >}}

   Un monopolo es esencialmente la mitad de un dipolo que usa un plano de tierra (como la carrocería de tu auto, el cuerpo de tu radio portátil o la Tierra misma) como la otra mitad. La mayoría de las antenas portátiles y móviles son monopolos: son más simples de construir y montar que los dipolos completos, manteniendo características de radiación similares. El ejemplo más común de monopolo es la vertical de cuarto de onda: un dipolo puesto de pie, dimensionado para medir un cuarto de longitud de onda en la frecuencia objetivo. Para 2 metros (146 MHz), las matemáticas dan aproximadamente 19 pulgadas.

   Algo importante que recordar con los monopolos es que, como la otra mitad de la antena está formada por lo que podríamos llamar factores ambientales, puede terminar incluyendo muchas cosas que en realidad no estaban destinadas a ser parte de una antena, ¡como tu propio brazo al usar un HT! No es peligroso ni nada por el estilo, pero sí afecta el rendimiento de la antena.

4. **Verticales de 5/8 de onda**

   > **Información clave:** Una antena látigo de 5/8 de longitud de onda tiene más ganancia que una antena de 1/4 de onda. {{< link id="T9A09" >}}

   Una antena látigo de 5/8 de onda concentra más señal hacia el horizonte en lugar de hacia el cielo, por eso son populares para operaciones móviles en VHF y UHF sobre terreno plano. Igual que con una antena directiva, esta "ganancia" es una redistribución de la señal. En áreas montañosas o cañones donde tu repetidor podría estar por encima de ti, una antena de 1/4 de onda puede funcionar mejor porque radia más señal hacia arriba.

5. **J-poles**

   Con forma de la letra J, estas son esencialmente antenas de media onda alimentadas en un extremo. Son populares para VHF y UHF porque son fáciles de construir y no requieren un plano de tierra. También hay algunas variaciones, como la J-pole de stub abierto, que tiene una forma algo distinta pero funciona con el mismo principio.

#### Hacer que las antenas funcionen en espacios limitados

A veces necesitamos modificar las antenas para que funcionen mejor o quepan en un espacio más pequeño:

1. **Carga de antena**

   > **Información clave:** La carga de antena significa alargarla eléctricamente insertando inductores en los elementos radiantes. {{< link id="T9A02" >}}

   Cuando el espacio es limitado, podemos hacer que una antena sea eléctricamente más larga de lo que es físicamente agregando inductancia, normalmente con una bobina en algún lugar del elemento radiante. Así es como una antena látigo móvil de 19 pulgadas puede funcionar en bandas HF donde una antena de tamaño completo mediría muchos pies. La carga nos permite usar antenas más cortas cuando es necesario, aunque no es tan eficiente como una antena de tamaño completo.

2. **Antenas portátiles**

   > **Información clave:** La antena corta y flexible de un radio portátil tiene baja eficiencia en comparación con una antena de cuarto de onda de tamaño completo. {{< link id="T9A04" >}}

   Las antenas pequeñas y flexibles que vienen con los radios portátiles son convenientes, pero su tamaño compacto tiene un costo: menos de tu potencia se convierte realmente en ondas de radio. Por eso una antena externa — incluso una simple antena látigo con montaje magnético — a menudo mejora drásticamente el alcance de un portátil.

3. **Sintonizadores de antena**

   > **Información clave:** La función principal de un sintonizador de antena es adaptar la impedancia del sistema de antena a la impedancia de salida del transceptor. {{< link id="T9B04" >}}

   Un sintonizador es como una caja de cambios, ajustando la conexión para que tu transmisor y tu antena trabajen juntos con la mayor eficiencia posible. Es importante entender que un sintonizador en realidad no "sintoniza" la antena: solo adapta impedancias para que el transmisor vea una carga con la que esté contento. No mejora la eficiencia de radiación de una antena.

#### Antenas que requieren sintonizadores

Algunas antenas están diseñadas para funcionar en un amplio rango de frecuencias, pero no son naturalmente resonantes en ninguna de ellas:

1. **Antenas de cable aleatorio**

   Tal como suenan: un cable de longitud aleatoria usado como antena. Pueden ser efectivas, especialmente para operaciones portátiles, pero casi siempre requieren un sintonizador.

2. **Dipolos multibanda**

   Estos dipolos están diseñados para funcionar en múltiples bandas, pero a menudo no son perfectamente resonantes en todas ellas. Un sintonizador puede ayudar a adaptar la impedancia en las bandas no resonantes.

3. **Antenas de lazo magnético**

   Estas antenas compactas son excelentes para espacios restringidos, pero tienen un ancho de banda muy estrecho. Requieren un circuito especial de sintonía (normalmente un capacitor variable) que se ajusta cada vez que cambias de frecuencia.

---

La "mejor" antena depende por completo de tu situación y tus objetivos. A veces, una antena sencilla que realmente puedes instalar es mejor que una antena teóricamente perfecta que no cabe en tu espacio. No tengas miedo de experimentar: tu colección de antenas puede crecer con tu experiencia.

Por supuesto, la mejor antena del mundo no te ayudará mucho si no la instalas y conectas correctamente, así que ahora vamos a hablar de polarización, líneas de alimentación y conectores.
