window.cipher = {

  encode: (stringEncode, offset) => {

    let messageInitial = stringEncode;
    let newPositionEncode = "";
    let letterEncode = "";
    
    let textEncodeFinal = "";

    for (let i = 0; i < messageInitial.length; i++) { //recorre el texto ingresado
      letterEncode = messageInitial.charCodeAt(i); //devuelve el valor ascii de cada letra
      if (letterEncode >= 65 && letterEncode <= 90) { //abcdario en mayusculas en codigo ascii
        newPositionEncode = (letterEncode - 65 + offset) % 26 + 65;
        textEncodeFinal += String.fromCharCode(newPositionEncode);//me devuelve una concatenacion,  de la nueva posicion de la o las  letra(s)
      } else if (letterEncode >= 32 && letterEncode <= 64) {
        textEncodeFinal += String.fromCharCode(letterEncode);//me devuelve una concatenacion,  de la nueva posicion de la o las  letra(s)
      } else if (letterEncode >= 97 && letterEncode <= 122) { //abcedario en minusculas en codigo ascii
        newPositionEncode = (letterEncode - 97 + offset) % 26 + 97; 
        textEncodeFinal += String.fromCharCode(newPositionEncode); //me devuelve una concatenacion,  de la nueva posicion de la o las  letra(s)
      }
    }
    return textEncodeFinal;
  },
}