const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingrediente = new Schema({
    nombre:  String,
    macros: {
        proteinas: Number,
        carbohidratos: Number,
        grasas: Number,
        agua: Number,
    },
    micros: {
        vitaminas: {
            A: Number,
            C: Number,
            D: Number,
            E: Number,
            K: Number,
            B1: Number,
            B2: Number,
            B3: Number,
            B5: Number,
            B6: Number,
            B9: Number,
            B12: Number
        },
        minerales: {
            zinc: Number,
            cobre: Number,
            yodo: Number,
            selenio: Number,
            cromo: Number,
            hierro: Number,
            fluor: Number,
            calcio: Number,
            fosforo: Number,
            magnesio: Number
        }
    },
    valoracion: Number

});

module.exports = mongooose.model('Ingrediente', ingrediente);