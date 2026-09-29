const showBtn = document.getElementById('show-text-btn'); /* se genera la variable para representar el boton*/
const text = document.getElementById('text');   /* se genera la variable para representar el texto que aparece y desaparece */
text.style.display = 'none';    /* se oculta el texto con siplay none */

function changeTextBtn() {  /* se genera una funcion para cambiar el textcontent del boton dependdiendo el estado del texto */
    if (text.style.display === "none") {        /* si el texto esta oculto el textcontent del boton es "MOSTRAR TEXTO" */
        showBtn.textContent = "MOSTRAR TEXTO";
    } else {
        showBtn.textContent = "OCULTAR TEXTO"; /* si el texto esta MOSTRANDOSE el textcontent del boton es "OCULTAR TEXTO" */
    }
}

    changeTextBtn(); /* SE LLAMA A LA FUNCION  para que muestre el textcontent del boton al iniciar la pagina*/

showBtn.addEventListener('click', function () { /* se crea el evento click del boton */
    if (text.style.display === 'none') {/* si el texto esta oculto cambia el estado de su display a block para mostrarlo */
        text.style.display = 'block';
    } else {
        text.style.display = 'none'; /* si esta mostrandose cambia su display a none para ocultarlo */
    }

    changeTextBtn(); /* llama a la funcion al final de la funcion para cambiar el estado del textcontent del boton */
})

