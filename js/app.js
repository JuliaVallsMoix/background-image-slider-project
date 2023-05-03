const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4"
];

// buena suerte

// Variable de estado que nos diga qué foto toca mostrar en todo momento

let indexPhoto = 0;
let images = document.querySelector('.img-container');

// Actualizadme el nodo adecuado del HTML para establcer su estilo en línea backgroundImage con la URL de la foto que pertenece a indexPhoyo

images.style.backgroundImage = `url(../img/${pictures[indexPhoto]}.jpeg)`;

// 1. Recuperar el nodo del botón derecho y asociar el evento click
// 2. Al ejecutar la función del 'click', actualizar la variable de estado sumándole 1
// 3. Volvemos a actualizar el style.backgroundImage

document.querySelector('.btn-right').addEventListener('click', function () {
  indexPhoto++;
  if (indexPhoto >= pictures.length) {
    indexPhoto = 0;
  };
  images.style.backgroundImage = `url(../img/${pictures[indexPhoto]}.jpeg)`;
});

// 4. Para el botón izquierdo, es lo mismo, pero en vez de sumar 1, restar 1.

document.querySelector('.btn-left').addEventListener('click', function () {
  indexPhoto--;
  if (indexPhoto < 0) {
    indexPhoto = pictures.length - 1;
  };
  images.style.backgroundImage = `url(../img/${pictures[indexPhoto]}.jpeg)`;
});