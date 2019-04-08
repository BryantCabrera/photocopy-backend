const mongoose = require('mongoose');

// const photoSchema = new mongoose.Schema({
//     title: String,
//     date: Date, 
//     category: String,
//     price_min: Number,
//     price_max: Number
// });

const creatorSchema = new mongoose.Schema({
    name: { type: String, default: 'Creator' },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    img: { type: String, default: 'https://i.imgur.com/KbicDVh.jpg' },
    photos: [{type: mongoose.Schema.Types.ObjectId, ref: 'Photo'}],
    bankAccount: Number,
    address: String
});

const Creator = mongoose.model('Creator', creatorSchema);

module.exports = Creator;