import { initMongoDB } from "./01-conexion.js";
import { UserModel } from "./02-schema.js";

const createUser = async (user) => {
    const res = await UserModel.create(user);
    console.log(res);
}

const test = async () =>{
    await initMongoDB();
    const newUser = {
        firstname: 'Juan',
        lastname: 'Perez',
        age: 45
    }
    await createUser(newUser);
}

test()