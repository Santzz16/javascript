const textarea = document.getElementById('text-area');
const contador = document.getElementById('contador');

textarea.addEventListener('input', function(){
    contador.textContent = `caracteres: ${textarea.value.length}`;
})