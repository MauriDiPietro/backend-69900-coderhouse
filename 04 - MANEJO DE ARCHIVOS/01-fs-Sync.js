const fs = require('fs');

const path = './file1.txt'

if(fs.existsSync(path)){
    const info = fs.readFileSync(path, 'utf-8')
    console.log(info);
    fs.appendFileSync(path, ', Chau mundo')
} else {
    fs.writeFileSync(path, 'Hola mundo')
}
