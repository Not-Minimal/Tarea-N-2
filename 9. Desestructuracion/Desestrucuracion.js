// Objeto ejemplo que contiene los datos del usuario
const usuario = {
  nombre: "Saul",
  apellido: "Muñoz",
  ciudad: "Concepcion",
  direccion: {
    calle: "Collao",
    numero: 680,
  },
  contactos: {
    email: "saul.munoz2201@alumnos.ubiobio.cl",
    linkedin: "nottminimal",
  },
  intereses: ["Programación", "Música", "Viajar"],
};

// 1. Desestructuración para extraer nombre, apellido y ciudad del objeto usuario
const { nombre, apellido, ciudad } = usuario;
console.log(nombre);
console.log(apellido);
console.log(ciudad);

const [primerInteres] = usuario.intereses;
console.log(primerInteres);

// 3. Extraer email y linkedin de los contactos del usuario
const { email, linkedin } = usuario.contactos;
console.log(email);
console.log(linkedin);

// 4. Extraer calle y número de la dirección, renombrados como calleUsuario y numeroUsuario
const { calle: calleUsuario, numero: numeroUsuario } = usuario.direccion;
console.log(calleUsuario);
console.log(numeroUsuario);
