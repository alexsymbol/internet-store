import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    products: [{
        image: { type: String },
        name: { type: String },
        price: { type: Number },
        color: { type: String },
        quantity: { type: Number }
    }],
    amount : Number
});

export default mongoose.model('cart', schema);
