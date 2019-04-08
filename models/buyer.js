const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
    name: { type: String, default: 'Buyer' },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    img: { type: String, default: 'https://i.imgur.com/KbicDVh.jpg' },
    bankAccount: Number,
    address: String
});

const Buyer = mongoose.model('Buyer', buyerSchema);

module.exports = Buyer;