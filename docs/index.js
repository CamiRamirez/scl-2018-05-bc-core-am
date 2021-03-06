window.onload = () => {
    /* botones */
    const btnCifrar = document.getElementById('botonCifrar');
    const btnDescifrar = document.getElementById('botonDescifrar');
    
    /* Acción al apretar boton cifrar*/

    btnCifrar.addEventListener('click', () => {
      const stringEncode = document.getElementById('mensajeUno').value;
      const offset = parseInt(document.getElementById('key').value);
      const textEncodeFinal = window.cipher.encode(stringEncode, offset);
        document.getElementById('cifrado').innerHTML = textEncodeFinal;
    });

      /* Acción al apretar boton descifrar*/
    btnDescifrar.addEventListener('click', () => {
      const stringDecode = document.getElementById('mensajeDos').value;
      const offset = parseInt(document.getElementById('key').value);
      const textDecodeFinal = window.cipher.decode(stringDecode, offset);
        document.getElementById('descifrado').innerHTML = textDecodeFinal;
    });
}

