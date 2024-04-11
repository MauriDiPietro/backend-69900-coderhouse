const mostrarLista = (array) => {
    if(Array.isArray(array)){
        if(array.length === 0){
            return 'Lista vacía'
        } else {
            for (const item of array) {
                console.log(item);
            }
        }
    } else return 'no es un array'
}

/* ------------------------------------ - ----------------------------------- */

const mostrarLista2 = (array) => {
    if(!Array.isArray(array)) return 'No es un array'
    if(array.length !== 0) {
        console.log(`La longitud del array es: ${array.length}`);
        return array.map((x) => { return x })
    } else return 'Lista vacia'
}

/* ------------------------------------ - ----------------------------------- */

const mostrarLista3 = (array) => {
    if(Array.isArray(array)){
        console.log(`La longitud del array es: ${array.length}`);
        switch (array.length) {
            case 0:
                return 'Lista vacia'
                break;
            default:
                return array.map((item) => { return item })
                break;
        }
    } return 'No es un array'
}

console.log(mostrarLista3([ 1, 2, 3, 4 ]));
                  

// [ 1, 2, 3, 4 ]
//           item