function analisisCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
      return "La cadena está formada solo por mayúsculas.";
    }
    if (cadena === cadena.toLowerCase()) {
      return "La cadena está formada solo por minúsculas.";
    }
    return "La cadena es una mezcla de mayúsculas y minúsculas.";
  }
  
  var cadena = prompt("Por favor, ingrese una cadena de texto:");
  
  if (cadena !== null) {
    var resultado = analisisCadena(cadena);
    console.log(resultado);
  } else {
    console.log("La cadena ingresada no es válida.");
  }