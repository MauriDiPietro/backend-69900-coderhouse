const divisionPromesa = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) reject("No se puede dividir por 0");
    else resolve(a / b);
  });
};

divisionPromesa(3, 3)
    .then((result)=>console.log(result))
    .catch((err)=>console.log(err))
    .finally(()=>console.log('finalizó el proceso'))


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json => console.log(json))
    .catch((err)=>console.log(err))
    .finally(()=>console.log('finalizó el proceso'))