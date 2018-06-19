window.cipher = {

  /////////////////METODO PARA CODIFICAR///////////////////////////
  encode: (stringEncode, offset) => { //parámetros

    let messageInitial = stringEncode;
    let letterEncode = "";
    let newPositionEncode = "";
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

  /////////////////METODO PARA DECODIFICAR///////////////////////////
decode: (stringDecode, offset) => { //parámetros
  
  let messageInitial2 = stringDecode;
  let letterDecode = "";
  let newPositionDecode = "";
  let textDecodeFinal = "";

 
  for (let i = 0; i < messageInitial2.length; i++) {
    letterDecode = messageInitial2.charCodeAt(i);
    if (letterDecode >= 65 && letterDecode <= 90) {
      newPositionDecode = (letterDecode + 65 - offset) % 26 + 65;
      textDecodeFinal += String.fromCharCode(newPositionDecode);
    } else if (letterDecode >= 32 && letterDecode <= 64) {
      textDecodeFinal += String.fromCharCode(letterDecode);
    } else if (letterDecode >= 97 && letterDecode <= 122) {
      newPositionDecode = (letterDecode - 122 - offset) % 26 + 122;
      textDecodeFinal += String.fromCharCode(newPositionDecode);
    }
  }
  return textDecodeFinal;
}
};