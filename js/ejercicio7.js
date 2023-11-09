function tablaMultiplicar(numero) {
    console.log("Tabla de multiplicar del " + numero + ":");
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  }
  
  let numero = parseInt(prompt("Igrese el número del cual quiere mostrar su tabla de multiplicar:"));
  
  if (!isNaN(numero)) {
    tablaMultiplicar(numero);
  } else {
    console.log("Número no valido");
  }