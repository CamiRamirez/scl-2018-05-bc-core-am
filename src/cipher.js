window.cipher = {
  encode:(stringEncode, offset) => {
     //////////////////////////////////CODIGO PARA CIFRAR/////////////////////////////////////////////////
    /* Variables */
    const yourKey = parseInt(document.getElementById('key').value);
    const messageInitial = document.getElementById('mensajeUno').value;
    const messageUp = messageInitial.toUpperCase();
    let letterEncode = 0;
    let newPositionEncode = 0;
    let newLetterEncode = "";
    let textEncodeFinal = "";

    let i = 0;
      while (i < messageUp.length) {
        letterEncode = messageUp.charCodeAt(i); /*Transforma char a ASCII (posicion en el ascii)*/
        //console.log(letterEncode);
        newPositionEncode = (letterEncode - 65 + yourKey) % 26 + 65 ; /*nueva posicion de la letra */
        //console.log(newPositionEncode);
        newLetterEncode = String.fromCharCode(newPositionEncode); /* Me muestra la letra en la nueva ubicacion*/
        //console.log(newLetterEncode);
        textEncodeFinal = textEncodeFinal + newLetterEncode; /* Mensaje final */
        i++; 
    
      }
      return textEncodeFinal;

      //console.log('texto codificado',textEncode);
  },

  //////////////////////////////////CODIGO PARA DESCIFRAR/////////////////////////////////////////////////
  decode: () => {
    /* Variables */
    
    const yourKey = parseInt(document.getElementById('key').value);
    const messageInitial2 = document.getElementById('mensajeDos').value;
    const messageUp2 = messageInitial2.toUpperCase();
    let letterDecode = 0;
    let newPositionDecode = 0;
    let newLetterDecode = "";
    let textDecodeFinal = "";

    let i = 0;
      while (i < messageUp2.length) {
        letterDecode = messageUp2.charCodeAt(i); /*Transforma char a ASCII (posicion en el ascii)*/
        //console.log(letterDecode);  
        newPositionDecode = ((letterDecode -90 + yourKey) % 26 + 86); /*posicion de la letra */
          if (newPositionDecode > 90){
            newPositionDecode % 90===64;
          }
        //console.log(newPositionDecode);
        newLetterDecode = String.fromCharCode(newPositionDecode); /*Me muestra la letra en la nueva ubicacion*/
        //console.log(newLetterDecode);
        textDecodeFinal = textDecodeFinal + newLetterDecode; /*Mensaje final*/
        i++; 
    
      }
      return textDecodeFinal;

      //console.log(textDecodefinal);
  }
}
