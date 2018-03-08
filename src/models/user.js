import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const schema = new Schema({
  username: { type: String, required: true },
  ownname: String,
  surname: String,
  password: { type: String, required: true },
  email: String,
  gender: String,
  age: Number
});

export default mongoose.model('customers', schema);
