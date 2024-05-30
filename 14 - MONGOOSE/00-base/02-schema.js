import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    firstname: { type: String, required: true, max: 30 },
    lastname: { type: String, required: true },
    age: { type: Number, required: true }
});

export const UserModel = model('users', UserSchema);
