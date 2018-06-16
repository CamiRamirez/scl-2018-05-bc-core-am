window.onload = () => {
    /* Acción al apretar boton cifrar*/
    document.getElementById("botonCifrar").addEventListener('click', () => {
      let stringEncode = document.getElementById('mensajeUno').value; //recibe el valor que ingresa el usuario en el input de cifrar
      let offset = parseInt(document.getElementById('key').value);
      const textEncodeFinal = window.cipher.encode(stringEncode, offset);
        document.getElementById('cifrado').innerHTML = textEncodeFinal;
    });

      /* Acción al apretar boton descifrar*/
      document.getElementById('botonDescifrar').addEventListener('click', () => {
      let stringDecode = document.getElementById('mensajeDos').value;//recibe el valor que ingresa el usuario en el input de descifrar
      let offset = parseInt(document.getElementById('key').value);
      const textDecodeFinal = window.cipher.decode(stringDecode, offset);
        document.getElementById('descifrado').innerHTML = textDecodeFinal;
    });
}

