window.onload = function() {
    /* botones */
    const btn = document.getElementById('button-number');
    const btnCifrar = document.getElementById('botonCifrar');
    const btnDescifrar = document.getElementById('botonDescifrar');
    /*Mensajes ingresados*/
    let txt = document.getElementById('mensajeUno');
    let txtDos = document.getElementById('mensajeDos');

    btnCifrar.addEventListener('click',function() {
        cifrado.innerHTML = ('txt');
    })

    btnDescifrar.addEventListener('click', function() {
        descifrado.innerHTML = ('txtDos');
    })
}
MensajeUno.SetToolTip(MensajeUno, "Este es el mensaje")