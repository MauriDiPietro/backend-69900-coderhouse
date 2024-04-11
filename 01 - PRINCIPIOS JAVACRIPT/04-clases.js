class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    static variableEstatica = 'variable estatica'

    obtenerNombre(){
        return this.nombre
    }
}

const instancia1 = new Persona('Juan');
// console.log(instancia1.obtenerNombre());
// console.log(Persona.variableEstatica);

/* ------------------------------------ ACTIVIDAD- ----------------------------------- */

class Contador {
    constructor(nombre){    
        this.nombre = nombre;
        this.contador = 0;
    }

    static contadorGlobal = 0;

    getResponsable(){
        return this.nombre
    }

    getCuentaGlobal(){
        return Contador.contadorGlobal
    }

    getCuentaIndividual(){
        return this.contador;
    }

    contar(){
        this.contador++
        Contador.contadorGlobal++
    }
}

const contador1 = new Contador('Emanuel')
const contador2 = new Contador('Franco')

console.log(contador1.getResponsable());
console.log(contador2.getResponsable());
contador1.contar();
contador1.contar();
console.log('cuenta emanuel: ', contador1.getCuentaIndividual());
console.log('contador global: ', contador1.getCuentaGlobal());
contador2.contar()
console.log('cuenta franco: ', contador2.getCuentaIndividual());
console.log('contador global: ', Contador.contadorGlobal);