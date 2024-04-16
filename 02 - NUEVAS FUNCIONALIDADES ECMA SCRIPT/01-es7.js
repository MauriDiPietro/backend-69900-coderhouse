/* ----------------------------------- es6 ---------------------------------- */
console.log(Math.pow(2, 3))
/* ----------------------------------- es7 ---------------------------------- */
console.log(2 ** 3);

/* -------------------------------- includes -------------------------------- */
const array = [1,2,3,4,5,6,7,8,9,10]

console.log(array.includes(11));

/* ---------------------------------- some ES6 ---------------------------------- */

const array2 = [
    {
        nombre: 'Juan', edad: 45
    },
    {
        nombre: 'Pedro', edad: 30
    },
    {
        nombre: 'Luis', edad: 25
    },
];

// const exists = array2.some((user)=>user.edad === 25)

// console.log(exists);

const exists = array2.find((user)=>user.edad === 25)

console.log(exists);
