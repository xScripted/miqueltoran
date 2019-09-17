const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plato = new Schema({
    nombre: String,
    ingredientes: Array,
    tipo: String,
    tiempo: Number
})

module.exports = mongoose.model('Plato', plato);
