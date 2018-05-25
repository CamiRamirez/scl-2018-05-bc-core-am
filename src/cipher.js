window.cipher = {
  encode: (cifrar) => {
  //const abc = "abcdefghijklmnñopqrstuvwxyz"
    //abc.charCodeArt(numero);
    var mensaje = getElementById('mensajeUno');
  
    let cifrado ="";
   
       for(var i=0; i<mensaje.length; i++) { //el for recorrera las letras del texto a cifrar//
        
          if (parseInt(mensaje[i])%1 === 0) //condicionar para no ingresar numeros//
             texto = prompt("Por favor ingrese un texto sin numeros ni espacios");
            
          var ubicacionCesar=(mensaje.toUpperCase().charCodeAt(i) - 65 + 33) % 26 + 65;
    
          var palabraCifrada= String.fromCharCode(ubicacionCesar);
    
      cifrado+= palabraCifrada; //acumular las letras cifradas//
      
      }
        
    return cifrado;
    decipher(cipher());
  }

  }
  decode: (descifrar) => {
    /* Acá va tu código */
  }
