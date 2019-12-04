const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const palabra = new Schema({
    form1: String,
    form2: String,
    form3: String,
    fonetica: String,
    traduccion: String,
    relacion: String,
    tipo: String,
    tier: Number,
    ejemplo: String,
    subcategoria: String,
    idioma: String,
})

module.exports = mongoose.model('Palabra', palabra);