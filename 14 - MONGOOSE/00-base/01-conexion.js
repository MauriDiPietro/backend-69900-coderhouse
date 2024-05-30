import mongoose from "mongoose";

const connectionString = 'mongodb+srv://admin:admin@cluster0.xibok.mongodb.net/coder69900?retryWrites=true&w=majority&appName=Cluster0'

export const initMongoDB = async ()=> {
    try {
        await mongoose.connect(connectionString)
        console.log('Conectado a la base de datos MongoDB');
    } catch (error) {
        console.log(error);
    }
}

initMongoDB();