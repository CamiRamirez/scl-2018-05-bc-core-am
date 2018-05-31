window.cipher = {
  encode: () => {
    /* Variables */
    const yourKey = document.getElementById('key').value;
    const messageInitial = document.getElementById('mensajeUno').value;
    let textEncode = [];
    let textEncode1 = [];

    let i = 0;
      while (i < messageInitial.length) {
        textEncode [i] = messageInitial.charCodeAt(i) + parseInt(yourKey); /*Transforma char a ASCII*/
        textEncode1 [i] = String.fromCharCode(textEncode[i]); /*Transforma ASCII a char */
        i++; 
      }
      return textEncode1;
    }
    
  ,

  decode: () => {
    /* Variables */
    const yourKey = document.getElementById('key').value;
    const messageInitial2 = document.getElementById('mensajeDos').value;
    let textDecode = [];
    let textDecode1 = [];
    
    let i = 0;
      while (i < messageInitial2.length) {
        textDecode1 [i] = String.fromCharCode(textDecode[i]); /*Transforma ASCII a char (ya cifrada) FUNCIONA!! */
        i++;
      
        textdecode [i] = messageInitial2.charCodeAt(i) + parseInt(yourKey); /*Transforma char a ASCII + desplazamiento FUNCIONA!!*/ 
      
    }
    
    return textDecode1 ;
    }
}
