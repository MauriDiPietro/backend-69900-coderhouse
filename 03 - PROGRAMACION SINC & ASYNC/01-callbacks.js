const suma = (a, b) => a+b;
const resta = (a, b) => a-b;
const multiplicacion = (a, b) => a*b;
const division = (a, b) => a/b;

const operaciones = (a, b, callback) => {
    return callback(a,b)
}

console.log(operaciones(1, 2, suma));

setTimeout(()=>{
    console.log('hola mundo');
}, 3000)


