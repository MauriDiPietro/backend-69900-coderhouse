import { connect } from "mongoose";

const MONGO_URL = "mongodb+srv://admin:admin@cluster0.xibok.mongodb.net/coder69900?retryWrites=true&w=majority&appName=Cluster0";
//mongodb://127.0.0.1:27017/coder69900

export const initMongoDB = async () => {
  try {
    await connect(MONGO_URL);
    console.log("Conectado a la base de datos de MONGODB");
  } catch (error) {
    console.log(error);
  }
};
