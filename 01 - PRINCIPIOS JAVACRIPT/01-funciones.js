function saludar(nombre) {
  return `Hola ${nombre}`;
}

console.log(saludar("Juan"));

const saludar1 = (nombre) => {
  return `Hola ${nombre}`;
};

console.log(saludar1("Maxi"));

const saludar2 = (nombre) => `Hola ${nombre}`;

console.log(saludar2("Ema"));

/* -------------------------------- callbacks ------------------------------- */

const array = [1, 2, 3, 4];

const array2 = array.filter(function (number) {
  return number > 1;
});

const array1 = array.filter((number) => {
  return number > 1;
});


const array3 = array.filter(number => number > 1);

console.log(array3);


/* ---------------------------- template strings ---------------------------- */

let nombre = 'Juan';
let edad = 35;
let msj = 'Mi nombre es ' + nombre + ' y tengo ' + edad + ' años'
console.log(msj);

let nombre1 = 'Carlos';
let edad1 = 35;
let msj1 = `Mi nombre es ${nombre1} y tengo ${edad1}`
console.log(msj1);

const msjMultilinea = `
    Este es un ejemplo
    de un mensaje en 
    3 líneas
`

console.log(msjMultilinea);