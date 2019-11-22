const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const idioma = new Schema({
    jp: Array,
})

module.exports = mongoose.model('idioma', idioma);