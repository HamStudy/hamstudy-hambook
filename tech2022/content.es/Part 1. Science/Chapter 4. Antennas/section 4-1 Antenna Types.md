---
chapter: "4"
section: "4.1"
questions: [ "T9A11", "T9A05", "T9A01", "T9A06", "T9A10", "T9A08", "T9A12", "T9A09", "T9A02", "T9A04", "T9B04" ]
---

### Sección 4.1: Tipos de Antenas

Imagina que estás en una fiesta, tratando de hablar con un amigo al otro lado de una habitación ruidosa. Podrías poner tus manos alrededor de tu boca para dirigir tu voz, o girar tu oreja hacia tu amigo para escuchar mejor. Las antenas funcionan de manera similar - ayudan a dirigir la energía de radio hacia donde quieres que vaya y a captar las señales que quieres escuchar.

Hay muchos tipos diferentes de antenas, cada una con sus propias ventajas y desventajas. Algunas ocupan más espacio, algunas son direccionales, algunas tienen más ganancia. El truco está en encontrar la antena que funcione mejor para tu situación – y la mayoría de los radioaficionados terminan con varias antenas diferentes para diversos propósitos.

> **Definamos un Término**: Es posible que hayas encontrado el término "Sistema de Antena" – el Sistema de Antena incluye todo lo que utiliza el transceptor como parte de la antena, como la línea de alimentación y la propia antena.

#### Conceptos Esenciales de Antenas

**Vamos a cubrir mucha información en esta sección que no necesitas estrictamente saber para aprobar tu examen de licencia** – algunos lectores pueden optar por leer superficialmente y centrarse en las preguntas, para luego volver más tarde cuando la información sea más relevante, ¡y eso está bien!

> **Información Clave:** 
> - *La ganancia de una antena* es el *aumento de la intensidad de la señal en una dirección especificada en comparación con una antena de referencia* {{< link id="T9A11" >}}
> - *Acortar una antena aumenta su frecuencia de resonancia* {{< link id="T9A05" >}}

Cuando hablamos de ganancia de antena, piensa en ello como cambiar de una bombilla normal a un foco - obtienes un haz más brillante en una dirección, pero menos luz en otras. La ganancia se mide típicamente en:
- dBi (decibelios relativos a un radiador isotrópico)
- dBd (decibelios relativos a un dipolo)

> Un radiador isotrópico es una antena teórica "perfecta" que radia igualmente en todas las direcciones, utilizada como punto de referencia para comparar antenas reales. La "i" en "dBi" se refiere a este radiador isotrópico.

#### Tipos de Antenas Comunes

1. **Antenas Directivas (Beam)**
  
   **Información Clave:** Una *antena directiva* es *una antena que concentra las señales en una dirección* {{< link id="T9A01" >}}. Imagínala como el reflector de una linterna enfocando la luz. La *antena Yagi ofrece la mayor ganancia* {{< link id="T9A06" >}} de los tipos comunes de antena, utilizando múltiples elementos para lograr una alta ganancia y directividad.  

   Es importante recordar que la *ganancia* es solo una redistribución de la señal—como un espejo o una lente que dirige la señal hacia tu antena. Obtienes una señal más fuerte en ese punto focal, pero cualquier cosa fuera de ese enfoque se vuelve mucho más débil.

2. **Dipolos**
   
   **Información Clave:** Un dipolo de media onda radia la señal más fuerte perpendicular (broadside) a la antena. {{< link id="T9A10" >}}

   El dipolo es el tipo de antena más básico y fundamental - solo dos conductores de igual longitud, alimentados en el centro. La mayoría de las otras antenas son realmente solo variaciones ingeniosas de este diseño básico. Una *antena dipolo de media longitud de onda* puede orientarse en cualquier dirección, y su señal es siempre *más fuerte perpendicular (broadside) al cable*. Entender los dipolos te ayuda a entender cómo funciona casi cualquier otra antena.

3. **Monopolos**
   Un monopolo es esencialmente la mitad de un dipolo que utiliza un plano de tierra (como la carrocería de tu coche, la carcasa de tu radio portátil, o la propia Tierra) como la otra mitad. La mayoría de las antenas portátiles y móviles son monopolos - son más simples de construir y montar que los dipolos completos, manteniendo características de radiación similares. Cuando ves una antena vertical de un cuarto de onda en un HT o en un coche, estás viendo un monopolo.

3. **Verticales de Cuarto de Onda**
   Para la banda de 2 metros (146 MHz), una vertical de un cuarto de onda tiene *aproximadamente 19 pulgadas de largo* {{< link id="T9A08" >}}. Estas son como dipolos de pie, con la tierra (o tu coche, o tu radio portátil) actuando como la otra mitad.

4. **Verticales de 5/8 de Onda**

   **Información Clave:** Una antena tipo látigo de 5/8 de longitud de onda tiene *más ganancia que una antena de 1/4 de longitud de onda* {{< link id="T9A12" >}} al concentrar más señal hacia el horizonte en lugar de hacia el cielo.
   
   Mientras que esto las hace populares para operaciones móviles de VHF y UHF en terreno plano, es importante entender que al igual que con una antena directiva esta "ganancia" es solo una redistribución de la señal. En áreas montañosas o cañones donde tu repetidor podría estar por encima de ti, una antena de 1/4 de onda puede funcionar mejor porque radia más señal hacia arriba.

5. **J-poles**
   Con forma de la letra J, estas son esencialmente antenas de media onda alimentadas en un extremo. Son populares para VHF y UHF porque son fáciles de construir y no requieren un plano de tierra.

6. **Antenas de Lazo**
   Estas vienen en varias formas y tamaños y son excelentes para espacios pequeños como áticos o balcones.

#### Longitud de Antena y Frecuencia

La longitud de una antena está relacionada con su frecuencia de resonancia. Cuanto más larga es la antena, más baja es la frecuencia de resonancia. Aquí hay una fórmula útil para la longitud del dipolo:

$\text{Longitud (en pies)} ≈ \frac{468}{\text{frecuencia (en MHz)}}$

o

$\text{Longitud (en pulgadas)} ≈ \frac{5600}{\text{frecuencia (en MHz)}}$

A continuación se muestran longitudes comunes para diferentes bandas. ¡Algunas de estas son respuestas a preguntas del examen! Puedes aprender la ecuación o simplemente memorizar el número, lo que sea más fácil para ti.

| Banda  | Frecuencia | Longitud de media onda | Longitud de cuarto de onda |
|:-----:|:---------:|:----------------:|:-------------------:|
| 10m   | 28 MHz    | 200 pulgadas       | 100 pulgadas          |
| 6m    | 50 MHz    | **112 pulgadas** {{< link id="T9A09" >}}  | 56 pulgadas          |
| 2m    | 146 MHz   | 38 pulgadas        | **19 pulgadas**       |
| 1.25m | 222 MHz   | 25 pulgadas        | 12.5 pulgadas         |
| 70cm  | 440 MHz   | 13 pulgadas        | 6.5 pulgadas          |

#### Hacer que las Antenas Funcionen en Espacios Limitados

A veces necesitamos modificar las antenas para que funcionen mejor o quepan en un espacio más pequeño:

1. **Carga de Antena (Antenna Loading)**

   **Información Clave:** Cuando el espacio es limitado, podemos hacer que una antena sea eléctricamente más larga *insertando inductores en los elementos radiantes* {{< link id="T9A02" >}}. Esto se llama carga. Aunque no es tan eficiente como una antena de tamaño completo, nos permite usar antenas más cortas cuando es necesario.

2. **Antenas Portátiles**
   **Información Clave:** Las antenas pequeñas y flexibles que vienen con los radios portátiles son convenientes pero tienen una desventaja significativa: tienen *baja eficiencia en comparación con una antena de cuarto de onda de tamaño completo* {{< link id="T9A04" >}}. Esto significa que menos de tu potencia se convierte realmente en ondas de radio.

3. **Sintonizadores de Antena**
   **Información Clave:** El trabajo principal de un sintonizador de antena es *ajustar la impedancia del sistema de antena a la impedancia de salida del transceptor* {{< link id="T9B04" >}}. Es como un cambio de marchas, ajustando la conexión para que tu transmisor y antena trabajen juntos de la manera más eficiente posible.  

#### Antenas que Requieren Sintonizadores

Algunas antenas están diseñadas para funcionar en un amplio rango de frecuencias pero no son naturalmente resonantes en ninguna de ellas:

1. **Antenas de Cable Aleatorio**
Son exactamente lo que parecen - un cable de longitud aleatoria utilizado como antena. Pueden ser efectivas, especialmente para operaciones portátiles, pero casi siempre requieren un sintonizador.

2. **Dipolos Multibanda**
Estos dipolos están diseñados para trabajar en múltiples bandas pero a menudo no son perfectamente resonantes en todas ellas. Un sintonizador puede ayudar a adaptar la impedancia en las bandas no resonantes.

3. **Antenas de Lazo Magnético**
Estas antenas compactas son excelentes para espacios restringidos pero tienen un ancho de banda muy estrecho. Requieren un ajuste cuidadoso cada vez que cambias de frecuencia.

Recuerda que un sintonizador no "sintoniza" realmente la antena - solo iguala impedancias. No mejora la eficiencia de radiación de una antena.

#### Consideraciones Prácticas

Al elegir una antena, considera:
1. El espacio disponible
2. Los requisitos de instalación
3. La dirección en la que quieres comunicarte
4. Las bandas que quieres usar

Por ejemplo, una antena directiva puede darte la mayor ganancia, pero necesita ser rotada para apuntar en diferentes direcciones y requiere más trabajo de instalación que una simple antena vertical.

La "mejor" antena depende totalmente de tu situación y objetivos. A veces, una antena simple que realmente puedes instalar es mejor que una antena teóricamente perfecta que no cabe en tu espacio. No tengas miedo de experimentar - tu colección de antenas puede crecer con tu experiencia. ¡Lo más importante es salir al aire y unirte a la conversación!
