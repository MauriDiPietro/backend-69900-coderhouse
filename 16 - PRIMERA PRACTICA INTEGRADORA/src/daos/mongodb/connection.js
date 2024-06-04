import { connect } from 'mongoose';

const connectionString = 'mongodb://127.0.0.1:27017/coder69900';

export const initMongoDB = async () => {
  try {
    await connect(connectionString);
    console.log('Conectado a la base de datos de MongoDB');
  } catch (error) {
    console.log(`ERROR => ${error}`);
  }
};

