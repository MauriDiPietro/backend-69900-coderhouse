import fs from "fs";

export class UserManager {
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
