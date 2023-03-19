//En este array de strings, tenemos todos los colores
const colors = [ 'red', 'green', 'blue', 'yellow', 'pink', 'purple' ];

randomIndex = (array) => {
    return array[ Math.floor(Math.random() * (array.length)) ];
};

let button = document.querySelector('#button');
let bodyColor = document.querySelector('body');

button.addEventListener('click', () => {
    bodyColor.style.backgroundColor = randomIndex(colors);
});
