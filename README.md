1. Observa la estructura HTML entregada por el instructor.
RTA: La estructura HTML consta de un título (h1), un párrafo (p) y un botón (button). 
El título y el párrafo contienen información sobre los colores del arcoíris, 
mientras que el botón está destinado a cambiar el color de estos elementos cuando se haga clic en él.
2. Identifica los elementos que necesitas manipular desde JavaScript.
RTA: Los elementos que se necesitan manipular desde JavaScript son el título (h1), el párrafo (p) y el botón (button).
3. Asocia un evento al botón.
RTA: Se ha asociado un evento de clic al botón utilizando el método addEventListener.
4. Crea un nuevo elemento usando el DOM.
RTA: Se han creado nuevos elementos de párrafo (p) utilizando el método createElement del DOM para mostrar los colores del arcoíris.
5. Agrega contenido al elemento creado.
RTA: Se ha agregado contenido a los nuevos elementos de párrafo utilizando la propiedad textContent para mostrar mensajes relacionados con los colores del arcoíris.
6. Inserta el nuevo elemento dentro de la página.
RTA: Se ha insertado el nuevo elemento dentro de la página utilizando el método appendChild


Mientras desarrollas la actividad, responde por escrito:
• ¿Qué elemento del DOM estás seleccionando?
RTA: Estoy seleccionando el título (h1), el párrafo (p) y el botón (button) del DOM utilizando document.querySelector().
• ¿Qué evento provoca el cambio en la página?
RTA: El evento que provoca el cambio en la página es el evento de clic (click) en el botón. 
Al hacer clic en el botón, se ejecuta la función que cambia el color del título y del párrafo, y también crea nuevos elementos en la página.
• ¿Qué nuevo elemento se crea?
RTA: Se crean nuevos elementos <p> (párrafos) que contienen mensajes sobre los colores a mostrar.
• ¿Dónde se inserta ese elemento dentro del DOM?
RTA: Los nuevos elementos se insertan dentro del cuerpo del documento (document.body) utilizando el método appendChild().
• ¿Qué ocurre en la página cada vez que repites la acción?
RTA: Cada vez que haces clic en el botón, se crean nuevos párrafos con los mensajes correspondientes a los colores, y se cambian los colores del título y del párrafo.