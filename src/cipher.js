window.cipher = {
  encode: () => {
    /* Variables */
    const yourKey = parseInt(document.getElementById('key').value);
    const messageInitial = document.getElementById('mensajeUno').value;
    let letterEncode = 0;
    let newPositionEncode = 0;
    let newLetterEncode = "";
    let textEncodeFinal = "";

    let i = 0;
      while (i < messageInitial.length) {
        letterEncode = messageInitial.charCodeAt(i); /*Transforma char a ASCII (posicion en el ascii)*/
        //console.log(letterEncode);
        newPositionEncode = ((letterEncode -65 + yourKey) % 26 + 65); /*posicion de la letra */
        //console.log(newPositionEncode);
        newLetterEncode = String.fromCharCode(newPositionEncode); /* Me muestra la letra en la nueva ubicacion*/
        //console.log(newLetterEncode);
        textEncodeFinal = textEncodeFinal + newLetterEncode;
        i++; 
    
      }
      return textEncodeFinal;

      console.log('texto codificado',textEncode);
  },

   
  

  decode: () => {
    /* Variables */
    
    const yourKey = parseInt(document.getElementById('key').value);
    const messageInitial2 = document.getElementById('mensajeDos').value;
    let letterDecode = 0;
    let newPositionDecode = 0;
    let newLetterDecode = "";
    let textDecodeFinal = "";

    let i = 0;
      while (i < messageInitial2.length) {
        letterDecode = messageInitial2.charCodeAt(i); /*Transforma char a ASCII (posicion en el ascii)*/
        console.log(letterDecode);
        newPositionDecode = ((letterDecode -97 + yourKey) % 26 + 65); /*posicion de la letra */
        console.log(newPositionDecode);
        newLetterDecode = String.fromCharCode(newPositionDecode); 
        console.log(newLetterDecode);
        textDecodeFinal = textDecodeFinal + newLetterDecode;
        i++; 
    
      }
      return textDecodeFinal;

      console.log('texto decodificado',textDecode);
  }
}
