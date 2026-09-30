const tarjetas = document.querySelectorAll('.tarjeta'); /* seleccionamos todos los elementos que tengan clase tarjeta */
/* esto nos devuelve una especie de array con cada tarjeta */
tarjetas.forEach(function(tarjeta) { /* recorre cada elemento de ese array y lo almacena en tarjeta */
    tarjeta.addEventListener('click', function(){ /* si el elemento que esta tomando la variable tarjeta se clickea entonces: */
        tarjeta.classList.toggle('seleccionada'); /* cambia su calse con toggle, si no la tiene activada activa seleccionada, si esta activada la quita y vuelve a su clase original */
    })
})