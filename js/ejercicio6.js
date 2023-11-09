function calcularPerimetro(ancho, alto) {
    return 2 * (ancho + alto);
  }
  
  let ancho = parseFloat(prompt("Por favor, ingrese el ancho del rectángulo:"));
  let alto = parseFloat(prompt("Por favor, ingrese el alto del rectángulo:"));
  
  if (!isNaN(ancho) && !isNaN(alto)) {
    let perimetro = calcularPerimetro(ancho, alto);
    console.log("El perímetro del rectángulo es: " + perimetro);
} else {
  document.write("Valores no validos");
}