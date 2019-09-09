const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dia = new Schema({
    nombre: String,
    platos: Array,
    fecha: Date,
})

module.exports = mongoose.model('Dia', dia);
