const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dieta = new Schema({
    nombre: String,
    descripcion: String,
    dias: Array
})

module.exports = mongoose.model('Dia', dieta);