const numero1 = 15;
const numero2 = 20;
const numero3 = "25";

if (numero1 >= numero2) {
  console.log(numero1 + " >= " + numero2);
} else {
  console.log(numero1 + " no es mayor o igual que " + numero2);
}
if (numero1 <= numero2) {
  console.log(numero1 + " <= " + numero2);
} else {
  console.log(numero1 + " no es menor o igual que " + numero2);
}
if (numero1 < Number(numero3)) {
  console.log(numero1 + " < " + numero3);
}
if (Number(numero3) < numero2) {
  console.log(numero3 + " < " + numero2);
} else {
  console.log(numero3 + " no es menor que " + numero2);
}
if (Number(numero3) !== numero1) {
  console.log(Number(numero3) + " es estrictamente diferente de " + numero1);
}
if (numero1 === numero2) {
  console.log(numero1 + " es estrictamente igual " + numero2);
} else {
  console.log(numero1 + " no es estrictamente igual " + numero2);
}
