window.onload = () => {

  /* Acción al apretar boton cifrar*/
  document.getElementById("botonCifrar").addEventListener('click', () => {
    const stringEncode = document.getElementById('mensajeUno').value;
    const offset = parseInt(document.getElementById('key').value);
    const textEncodeFinal = window.cipher.encode(stringEncode, offset);
    document.getElementById('cifrado').innerHTML = textEncodeFinal;
  });

  /* Acción al apretar boton descifrar*/
  document.getElementById("botonDescifrar").addEventListener('click', () => {
    const stringDecode = document.getElementById('mensajeDos').value;
    const offset = parseInt(document.getElementById('key').value);
    const textDecodeFinal = window.cipher.decode(stringDecode, offset);
    document.getElementById('descifrado').innerHTML = textDecodeFinal;
  });
}

