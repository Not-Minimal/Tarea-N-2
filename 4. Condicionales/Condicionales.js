const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

let mayor = Math.max(numero1, numero2, numero3);
console.log("El número mayor es: " + mayor);

let menor = Math.min(numero1, numero2, numero3);
console.log("El número menor es: " + menor);

if (numero1 % 2 === 0) {
  console.log(numero1 + " es par");
} else {
  console.log(numero1 + " es impar");
}

if (numero2 % 2 === 0) {
  console.log(numero2 + " es par");
} else {
  console.log(numero2 + " es impar");
}

if (numero3 % 2 === 0) {
  console.log(numero3 + " es par");
} else {
  console.log(numero3 + " es impar");
}

if (numero1 % 5 === 0) {
  console.log(numero1 + " es múltiplo de 5");
} else {
  console.log(numero1 + " no es múltiplo de 5");
}

if (numero2 % 5 === 0) {
  console.log(numero2 + " es múltiplo de 5");
} else {
  console.log(numero2 + " no es múltiplo de 5");
}

if (numero3 % 5 === 0) {
  console.log(numero3 + " es múltiplo de 5");
} else {
  console.log(numero3 + " no es múltiplo de 5");
}
