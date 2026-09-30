const form = document.getElementById('sesion');
const gmail = document.getElementById('gmail');
const password = document.getElementById('contrasena');
const sessionStarted = document.getElementById('sesion-iniciada-msg');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (gmail.value.includes("@gmail.com") && gmail.value.trim() != "" && password.value.length >= 6) {
        sessionStarted.style.display = 'block';
    } else {
        alert("INGRESE GMAIL Y CONTRASEÑA")
    }
})