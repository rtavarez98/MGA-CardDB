const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    id: Number,
    name: String,
    type: String,
    cost: Number,
    rarity: String,
    pack: String,
    description: String,
});

module.exports = mongoose.model('card', cardSchema);