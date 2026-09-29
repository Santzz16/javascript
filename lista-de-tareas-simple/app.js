const task = document.getElementById('task-adder'); /* se asigna el input como tarea */
const btn = document.getElementById('add-task-btn');/* se genera la constante del boton */
const tasks = document.getElementById('task-list');/* se genera la constante paraa la ul */

btn.addEventListener('click', function() { /* cuando btn sea clickeado entonces: */

    if (task.value.trim() != "") {/* si el valor del input sin espacios es diferente a no tener caracteres */
        const li = document.createElement('li'); /* se genera un li y se asigna a la variable li */
        li.textContent = task.value.trim();/* el texto de li es igual al texto de input sin espacios a los lados */
        tasks.appendChild(li); /* se crea un hijo de ul que es igual a il */
    }

    task.value = "";    /* se limpia el texto de input */
    task.focus(); /* se vuelve a seleccionar input */

})

