/* ----------------------------- spread operator ---------------------------- */

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(Math.max(...array1));

const array2 = [...array1, 12,13,14,15]
// console.log(array2);


const array3 = [20,21,22,23]

const array4 = [...array1, ...array3]

console.log(array4);

const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

obj1.a = 0

const obj2 = {
    ...obj1,
    h: 7
}

console.log(obj2);


/* ------------------------------ rest operator ----------------------------- */

const myFunc = (a, b, ...otrosParams) => {
    console.log(a);
    console.log(b);
    console.log(otrosParams);
}

myFunc(1, 2, 3, true, null, obj2)