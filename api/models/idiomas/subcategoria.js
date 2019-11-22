const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subcategoria = new Schema({
    palabras: Array
})

module.exports = mongoose.model('subcategoria', subcategoria);