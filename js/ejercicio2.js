var ciudades = [];

while (true) {
    var ciudad = prompt("Ingrese una ciudad:");
    if (ciudad === null) {
        break;
    }
    ciudades.push(ciudad);
}

console.log("El arreglo de ciudades tiene " + ciudades.length + " elementos");
document.write("- Elemento primera posicion: " + ciudades[0] + "<br>");
document.write("- Elemento tercera posicion: " + ciudades[2] + "<br>");
document.write("- Elemento última posición: " + ciudades[ciudades.length - 1] + "<br>");

ciudades.push("París");

document.write("- Elemento en la segunda posición: " + ciudades[1] + "<br>");

ciudades[1] = "Barcelona";

document.write("<h1>ARREGLO DE CIUDADES</h1>");
for (var i = 0; i < ciudades.length; i++) {
    document.write("- Elemento: " + ciudades[i] + "<br>");
}