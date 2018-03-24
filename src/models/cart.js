import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
        image: { type: String },
        title: { type: String },
        price: { type: Number },
        color: { type: String }
});

export default mongoose.model('cart', schema);
