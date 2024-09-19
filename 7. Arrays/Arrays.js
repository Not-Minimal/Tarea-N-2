function sumarNumerosArray(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}

console.log(sumarNumerosArray([1, 2, 3, 4, 5])); // 15

function promedioNumerosArray(numeros) {
  const suma = sumarNumerosArray(numeros); // Usamos la función de suma creada antes
  const promedio = suma / numeros.length;
  return promedio;
}

console.log(promedioNumerosArray([1, 2, 3, 4, 5])); // 3

function convertirArrayMayusculas(strings) {
  return strings.map(function (string) {
    return string.toUpperCase();
  });
}

console.log(convertirArrayMayusculas(["hola", "mundo", "javascript"])); // ["HOLA", "MUNDO", "JAVASCRIPT"]

function filtrarNumerosPares(numeros) {
  return numeros.filter(function (numero) {
    return numero % 2 === 0;
  });
}

console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
