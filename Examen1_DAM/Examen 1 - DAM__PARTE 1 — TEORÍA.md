# Alejandro Barrios Martínez. 293992



##### **1. ¿Qué es React Native?**

Es un framework de código abierto creado por Facebook que nos permite construir aplicaciones móviles nativas utilizando JavaScript y React. Una de sus grandes ventajas es que puedes desarrollar apps para iOS y Android compartiendo la mayor parte del código y el resultado final renderiza componentes nativos del dispositivo, lo que ayuda a que el rendimiento sea casi igual al de una app nativa pura.





##### **2. ¿Qué es una aplicación móvil?**

Es un software que permite ejecutarse en smartphones o tablets, sirve para diferentes tareas. Dos de los ejemplos mas claros que utilizo día a día es WhatsApp y Strava





##### **3. Tipos de aplicaciones móviles**

***Explica brevemente:***

***Aplicaciones nativas:*** Son desarrolladas para un sistema operativo especifico utilizando sus lenguajes y herramientas. Ofrece el mejor rendimiento y acceso a funciones del dispositivo.

***Aplicaciones híbridas:*** Estas son las creadas con tecnologías web (HTML, CSS, JavaScript) y empaquetadas en un contenedor nativo. Permite un único código base para multiples plataformas.

***Aplicaciones web:***  Sitios web que se comportan como aplicaciones móviles. Pueden instalarse en la pantalla de inicio y funcionar offline, sin necesidad de una tienda de aplicaciones. No ocupan espacio de almacenamiento significativo en el dispositivo y dependen del navegador.

***¿Cuál es la diferencia principal entre ellas?***

La diferencia principal esta en el equilibrio entre rendimiento y portabilidad. Las nativas tienen acceso total y directo al hardware, ofreciendo la máxima velocidad, mientras que las híbridas y web dependen de un "puente" o navegador, lo que puede perjudicar la fluidez en algunas tareas.

Por otro lado, las nativas requieren aprender dos lenguajes distintos, una para iOS y otra para Android. Tambien las híbridas y web permiten escribir el código una sola vez y ejecutarlo en cualquier lugar.





##### **4. Componentes básicos de React Native**

***Explica para qué sirve cada uno:***

***View:*** Es el contenedor fundamental (equivalente a un div en HTML). Se usa para agrupar otros componentes, crear estructuras y aplicar estilos de diseño.

***Text:*** Es el componente para mostrar cualquier tipo de texto en pantalla, no se puede poner texto suelto, siempre requiere de un text.

***Image:*** Sirve para mostrar imágenes, ya sean locales o remotas.

***TextInput:*** Es el componente que permite al usuario ingresar texto mediante el teclado.





##### **5. useState**

**Responde:**

***¿Qué es useState?*** Es una una función especial de React que nos permite añadir y gestionar un "estado" local dentro de un componente funcional.

***¿Para qué sirve?*** Sirve para almacenar datos que pueden cambiar durante la vida de la aplicación (como un contador o si un modo oscuro está activado o no). Cuando el valor del estado cambia, React actualiza automáticamente la pantalla para mostrar el nuevo dato.

***Escribe un ejemplo sencillo donde se utilice.***

import React, { useState } from 'react';

import { View, Text, Button } from 'react-native';

const Contador = () => {

&nbsp; const \[cuenta, setCuenta] = useState(0);



&nbsp; return (

&nbsp;   <View>

&nbsp;     <Text>Has presionado: {cuenta} veces</Text>

&nbsp;     <Button 

&nbsp;       title="Aumentar" 

&nbsp;       onPress={() => setCuenta(cuenta + 1)}

&nbsp;     />

&nbsp;   </View>

&nbsp; );

};



En este ejemplo se utiliza guardar el estado que es nuestra cuenta que vamos incrementando y después vamos aumentando y actualizando.





##### **6. Lógica en aplicaciones móviles**

***a) ¿Por qué es importante usar estados en una app?***

Porque las aplicaciones móviles son interactivas. Los estados son la memoria del componente en ese momento y nos permiten que la interfaz reaccione a lo que hace el usuario o a datos que llegan de internet. Sin estados, la interfaz no sabría qué mostrar cuando algo cambia.

***b) ¿Qué pasaría si una app no tuviera estados dinámicos?***

La aplicación sería completamente estática, como una foto o un pdf. Aunque el usuario tocara botones o intentara escribir, la pantalla nunca cambiaría ni mostraría información nueva, ya que el software no tendría forma de recordar o procesar esos cambios para actualizar la vista.

***c) Menciona un ejemplo real donde usarías estados.***

Por ejemplo en la aplicación de Strava, se usa un estado para el cronometro de la caminata o actividad. El estado inicial seria 00:00.

El cambio seria que cada segundo que pasa, el estado se actualiza (00:01, 00:02...) y esto provoca que la pantalla muestre el nuevo tiempo automáticamente. Sin un estado, el tiempo en pantalla se quedaría congelado aunque el reloj interno siguiera avanzando.













