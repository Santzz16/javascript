const contadorSpan = document.getElementById('contador'); /* Se selecciona el span como contador */
const agregarBtn = document.getElementById('add-number'); /* se asigna cada boton a una variable segun lo que hagan */
const quitarBtn = document.getElementById('rest-number');
let contador = 0;

function mostrarContador() {
    contadorSpan.textContent = contador;        /* Se crea una funcion para la accion de cambiar el texto del contador */
}                                               /* el texto del span contador toma el valor de contador (number) y lo transforma en un string */

agregarBtn.addEventListener('click', function() {       /* cuando se clickea el boton agregarBtn el contador se suma 1 */
    contador++;
    mostrarContador();                                  /* agregamos la funcion para actualizar el span */
})

quitarBtn.addEventListener('click', function() {        /* cuando se clickea el boton restarBtn el contador se inicia un if*/                                       /*  */
    if (contador > 0) {                                 /* si contador es mayor a 0 se resta 1*/
        contador--;
        mostrarContador();                              /* se actualiza el texto del span contador */
    } else {
        alert('NO se pueden eliminar más números');     /* Si cotador es igual o menor a 0 se lanza una alerta */
    }
    
})

mostrarContador()       /* se actualiza el span contador para que siempre tome el valor con el que se inicialice contador*/