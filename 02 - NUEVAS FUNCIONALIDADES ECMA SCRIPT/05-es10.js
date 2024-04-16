const saludo = '                   hola                '

console.log(saludo.trim());

/* ---------------------------------- flat ---------------------------------- */

const array = [ 
    1, 2, 
    [3,4], 
    [5,6], 
    [7, 
        [8,9],[1,2,[3,4]]
    ] 
]

console.log(array.flat(2));