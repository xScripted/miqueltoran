const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const idioma = new Schema({
    name: String
})

module.exports = mongoose.model('idioma', idioma);