const fs = require("fs");

const path = "./file1.txt";

if (fs.existsSync(path)) {
  fs.promises
    .readFile(path, "utf-8")
    .then((info) => {
      console.log(info);
      return fs.promises.appendFile(path, ", chau mundo");
    })
    .then(() => console.log("se adicionó la frase"))
    .catch((error) => console.log(error))
    .finally(() => console.log("finalizó el proceso"));
} else {
  fs.promises
    .writeFile(path, "hola mundo")
    .then(() => console.log("archivo creado con éxito"))
    .catch((error) => console.log(error));
}

/* ------------------------------------ - ----------------------------------- */

const products = [
  {
    name: "prod1",
    price: 500,
    stock: 50,
  },
  {
    name: "prod2",
    price: 700,
    stock: 80,
  },
];

const pathJSON = './products.json'

fs.writeFileSync(pathJSON, JSON.stringify(products))    //GUARDAR INFO  --> JSON
const info = fs.readFileSync(pathJSON, 'utf8')
console.log(info);
const infoJS = JSON.parse(info) //UTILIZAR INFO --> JAVASCRIPT
console.log(infoJS);

