var apariciones = new Array(13).fill(0);

for (var i = 0; i < 50; i++) {
  var dado1 = Math.floor(Math.random() * 6) + 1;
  var dado2 = Math.floor(Math.random() * 6) + 1;
  var suma = dado1 + dado2;
  apariciones[suma]++;
}

var tabla = "<table><tr><th>Suma</th><th>Apariciones</th></tr>";
for (var j = 2; j <= 12; j++) {
  tabla += "<tr><td>" + j + "</td><td>" + apariciones[j] + "</td></tr>";
}
tabla += "</table>";

document.write(tabla);