const titulo = document.querySelector(`h1`);
const parrafo = document.querySelector(`p`);
const boton = document.querySelector(`button`);

boton.addEventListener(`click`, () => {
    titulo.addEventListener(`click`, () => {
        titulo.style.color = `red`;
    });

    parrafo.addEventListener(`click`, () => {
        parrafo.style.color = `blue`;
    });

    // Mostrar un elemento en pantalla
    const nuevoElemento1 = document.createElement(`p`);
    nuevoElemento1.textContent = `¡Mostrar el color rojo!`;
    document.body.appendChild(nuevoElemento1);

    const nuevoElemento2 = document.createElement(`p`);
    nuevoElemento2.textContent = `¡Mostrar el color naranja!`;
    document.body.appendChild(nuevoElemento2);

    const nuevoElemento3 = document.createElement(`p`);
    nuevoElemento3.textContent = `¡Mostrar el color amarillo!`;
    document.body.appendChild(nuevoElemento3);

    const nuevoElemento4 = document.createElement(`p`);
    nuevoElemento4.textContent = `¡Mostrar el color verde!`;
    document.body.appendChild(nuevoElemento4);

    const nuevoElemento5 = document.createElement(`p`);
    nuevoElemento5.textContent = `¡Mostrar el color azul!`;
    document.body.appendChild(nuevoElemento5);

    const nuevoElemento6 = document.createElement(`p`);
    nuevoElemento6.textContent = `¡Mostrar el color índigo!`;
    document.body.appendChild(nuevoElemento6);

    const nuevoElemento7 = document.createElement(`p`);
    nuevoElemento7.textContent = `¡Mostrar el color violeta!`;
    document.body.appendChild(nuevoElemento7);

    console.log(`¡Has hecho clic en el botón!`);
});