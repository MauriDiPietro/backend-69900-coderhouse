const fs = require('fs')
const crypto = require('crypto')

class UserManager {
    constructor(path){
        this.path = path
    }

    async getUsers(){
        if(fs.existsSync(this.path)){
            const usersFile = await fs.promises.readFile(this.path, 'utf-8');   //json
            // console.log('JSON-->', usersFile);
            // console.log('JSON.parse', JSON.parse(usersFile));
            return JSON.parse(usersFile);  //javascript
        } 
        return []
    }

    async createUser(user) {
        const users = await this.getUsers();
        user.salt = crypto.randomBytes(128).toString(); //clave secreta
        user.password = crypto.createHmac('sha256', user.salt).update(user.password).digest('hex')
        // console.log(user.password);
        users.push(user);
        await fs.promises.writeFile(this.path, JSON.stringify(users))
    }

    async validateUser(username, password){
        const users = await this.getUsers();
        const user = users.find((u) => u.username === username);
        if(!user) return 'Error: user o passsword incorrect';
        const newCrypto = crypto.createHmac('sha256', user.salt).update(password).digest('hex')
        if(user.password === newCrypto) return 'Logueado'
        else return 'Error: user o passsword incorrect'
    }

}

const user = {
    firstname: 'Juan',
    lastname: 'Perez',
    username: 'Jperez',
    password: '1234'
}

const manager = new UserManager('./users.json');

const test = async() =>{
    // await manager.createUser(user)
    console.log(await manager.validateUser('Jperez', '1234'))
    // console.log(await manager.getUsers());
    // console.log(crypto.randomBytes(128).toString())
}

test()