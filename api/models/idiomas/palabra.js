const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const palabra = new Schema({
    kana: String,
    kanji: String,
    fonetica: String,
    traduccion: String,
    relacion: String
})

module.exports = mongoose.model('Palabra', palabra);