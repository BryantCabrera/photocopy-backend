const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    title: String,
    date: Date, 
    category: String,
    price_min: Number,
    price_max: Number
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;