const form = document.getElementById('form')
const nameToSubmmit = document.getElementById('name');
const errorMessage = document.getElementById('error-msg');


form.addEventListener('submit', function(event) {

    if (nameToSubmmit.value.trim() === "") {
        event.preventDefault();
        errorMessage.textContent = "ERRROR, DEBE INGRESAS UN NOMBRE!"
    }

})