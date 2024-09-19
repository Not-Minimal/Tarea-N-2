// Crear un objeto "persona"
const persona = {
  nombre: "Juan Pérez",
  edad: 30,
  genero: "Masculino",
};

// Mostrar información de la persona en consola
console.log(persona); // {nombre: 'Juan Pérez', edad: 30, genero: 'Masculino'}
console.log("Nombre: " + persona.nombre); // Nombre: Juan Pérez
console.log("Edad: " + persona.edad); // Edad: 30
console.log("Género: " + persona.genero); // Género: Masculino
// Crear un objeto "caja"
const caja = {
  cuadernos: 5,
  lapices: 10,
  papel: 50,
  fotografias: 20,
  buenEstado: true,
};

// Imprimir el objeto entero por consola
console.log(caja);
/*
{
  cuadernos: 5,
  lapices: 10,
  papel: 50,
  fotografias: 20,
  buenEstado: true
}
*/

// Imprimir cada propiedad del objeto
console.log("Cuadernos: " + caja.cuadernos); // Cuadernos: 5
console.log("Lápices: " + caja.lapices); // Lápices: 10
console.log("Papel: " + caja.papel); // Papel: 50
console.log("Fotografías: " + caja.fotografias); // Fotografías: 20
console.log("Buen estado: " + caja.buenEstado); // Buen estado: true

// Imprimir el tipo de dato de cada propiedad
console.log(typeof caja); // object
console.log(typeof caja.cuadernos); // number
console.log(typeof caja.lapices); // number
console.log(typeof caja.papel); // number
console.log(typeof caja.fotografias); // number
console.log(typeof caja.buenEstado); // boolean
