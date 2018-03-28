import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  username: String,
  ownname: String,
  surname: String,
  password: String,
  email: String,
  age: String
});

export default mongoose.model('customers', schema);
