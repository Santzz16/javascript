const imgsContainer = document.getElementById('img-container');
const button = document.getElementById('change-image-btn');
let htmlImg = true;

button.addEventListener('click', function() {
    if (htmlImg === true) {
        imgsContainer.src = 'Imagenes/CSS.png';
        htmlImg = false;
    } else {
        imgsContainer.src = 'Imagenes/Diseño sin título.png';
        htmlImg = true;
    }
})