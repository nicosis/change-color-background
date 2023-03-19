//En este array de strings, tenemos todos los colores
const colors = [ 'red', 'green', 'blue', 'yellow', 'pink', 'purple' ];

randomColor = () => {
    let randomIndex = Math.floor(Math.random() * (colors.length));
    return colors[ randomIndex ];
};

let button = document.querySelector('button');
let bodyColor = document.querySelector('body');

button.addEventListener('click', (event) => {
    bodyColor.style.backgroundColor = randomColor();
});
