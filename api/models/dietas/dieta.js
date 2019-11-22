const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dieta = new Schema({
    nombre: String,
    descripcion: String,
    macros: {
        proteinas: Number,
        carbohidratos: Number,
        grasas: Number,
        fibra: Number,
        calorias: Number
    },
    contenido: Object
})

module.exports = mongoose.model('Dietas', dieta);