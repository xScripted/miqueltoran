const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tipo = new Schema({
    subcategorias: Array
})

module.exports = mongoose.model('tipo', tipo);