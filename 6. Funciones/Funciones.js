function convertirMayusculas(texto) {
  return texto.toUpperCase();
}

console.log(convertirMayusculas("hola mundo")); // "HOLA MUNDO"

function convertirMinusculas(texto) {
  return texto.toLowerCase();
}

console.log(convertirMinusculas("HOLA MUNDO")); // "hola mundo"

function restarNumeros(num1, num2) {
  return num1 - num2;
}

console.log(restarNumeros(10, 5)); // 5

function dividirNumeros(num1, num2) {
  if (num2 === 0) {
    return "Error: No se puede dividir por cero";
  }
  return num1 / num2;
}

console.log(dividirNumeros(10, 2)); // 5
console.log(dividirNumeros(10, 0)); // "Error: No se puede dividir por cero"

function multiplicarNumeros(num1, num2) {
  return num1 * num2;
}

console.log(multiplicarNumeros(10, 5)); // 50

function longitudString(texto) {
  return texto.length;
}

console.log(longitudString("Hola mundo")); // 10
