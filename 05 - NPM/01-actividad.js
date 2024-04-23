const obj = {};

/**
 {
    1: 2,
    2: 266,
    3: 650,
    ...
    20
 }
 */

for (let i = 0; i < 10; i++) {
  const num = Math.floor(Math.random() * 20) + 1;    
  if (!obj[num]) obj[num] = 1;
  else obj[num]++;
  console.log(obj);
}

// console.log(obj);

// const obj2 = {
//     1: 1,
//     2: 1
// }

// console.log(obj2[2]);
// console.log(obj2[2]++);
// console.log(obj2);