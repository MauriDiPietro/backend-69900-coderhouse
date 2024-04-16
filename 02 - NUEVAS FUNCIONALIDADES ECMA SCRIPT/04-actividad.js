const products = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2,
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4,
  },
];

const keysNoRepeat = [];

let sumValues = 0;

for (const prod of products) {
  const keys = Object.keys(prod); 
//   console.log(keys);
  const values = Object.values(prod);
  console.log(values);
  for (const k of keys) {
    if (!keysNoRepeat.includes(k)) {
      keysNoRepeat.push(k);
    }
  }
//   console.log(keysNoRepeat);
  for (const val of values) {
    sumValues += val;
  }
}

console.log(keysNoRepeat);
console.log(sumValues);
