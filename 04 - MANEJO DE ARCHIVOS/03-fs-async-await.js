const fs = require("fs");

class UserManager {
    constructor(path){
        this.path = path
    }

    async getUsers(){
        try {
         if(fs.existsSync(this.path)){
            const users = await fs.promises.readFile(this.path, "utf8");
            return JSON.parse(users)
         } else return [];   
        } catch (error) {
            console.log(error);
        }
    }

    async createUser(user){
        try {
            const usersFile = await this.getUsers();
            usersFile.push(user);
            await fs.promises.writeFile(this.path, JSON.stringify(usersFile));
        } catch (error) {
            console.log(error);
        }
    }
}

const manager = new UserManager('./users.json');

const user1 = {
    firstname: 'Franco',
    lastname: 'Perez',
    age: 35
}

const user2 = {
    firstname: 'Matias',
    lastname: 'Gomez',
    age: 36
}

const test = async()=>{
    await manager.createUser(user1)
    await manager.createUser(user2)
    console.log(await manager.getUsers());
}

test()
