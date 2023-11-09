function ParOImpar(numero) {
    if (numero % 2 === 0) {
      return "El número es par";
    } else {
      return "El número es impar";
    }
  }
  
  var numero = parseInt(prompt("Por favor, ingrese un número entero:"));
  
  if (!isNaN(numero)) {
    var resultado = ParOImpar(numero);
    console.log(resultado);
  } else {
    console.log("Número no válido");
  }