const { v4: uuidv4 } = require('uuid');
const id = uuidv4()

const product = {
    id,
    name: 'Juan'
}

console.log(product); 