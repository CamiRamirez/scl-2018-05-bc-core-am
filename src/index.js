window.onload = function() {
    /* botones */
    const btnCifrar = document.getElementById('botonCifrar');
    const btnDescifrar = document.getElementById('botonDescifrar');
    
    /* Acción al apretar boton cifrar*/

    btnCifrar.addEventListener('click', () => {
      const stringEncode = document.getElementById('mensajeUno').value;
      const offset = parseInt(document.getElementById('key').value);
      const textEncode = window.cipher.encode(stringEncode, offset);
        document.getElementById('cifrado').innerHTML = textEncode;
    });

      /* Acción al apretar boton descifrar*/
    btnDescifrar.addEventListener('click', () => {
      const stringDecode = document.getElementById('mensajeDos').value;
      const offset = parseInt(document.getElementById('key').value);
      const textDecode = window.cipher.encode(stringDecode, offset);
        document.getElementById('Descifrado').innerHTML = textDecode;
    });
  }

