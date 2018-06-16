//cifrado
  window.cipher = {
    encode: (stringEncode, offset) => {
      //Declarar las variables
      let messageUp = stringEncode;
      let letterEncode = "";
      let newLetterEncode = "";
      let textEncodeFinal = "";
      //Métodos para cifrado
      for (let i = 0; i < messageUp.length; i++) {
        letterEncode = messageUp.charCodeAt(i); //me devuelve la posicion de la letra indicada
        if (letterEncode >= 65 && letterEncode <= 90) {
          newLetterEncode = (letterEncode - 65 + offset) % 26 + 65;
          textEncodeFinal += String.fromCharCode(newLetterEncode);
        } else if (letterEncode >= 32 && letterEncode <= 64) {
          textEncodeFinal += String.fromCharCode(letterEncode);
        } else if (letterEncode >= 97 && letterEncode <=  122) {
          newLetterEncode = (letterEncode - 97 + offset) % 26 + 97;
          textEncodeFinal += String.fromCharCode(newLetterEncode);
        }
      }
      return textEncodeFinal;
    },
  }