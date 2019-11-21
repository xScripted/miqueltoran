const express = require('express');
const router = express.Router();
const Diet = require('../models/dieta');

router.get('/dieta', (req, res) => {
    Diet.find((err, diets) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(diets);
    })
})

router.post('/dieta', (req, res) => {
    console.log(req.body);

    var diet = new Diet({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        macros: req.body.macros,
        contenido: [
            [{},{},{},{},{}],
            [{},{},{},{},{}],
            [{},{},{},{},{}],
            [{},{},{},{},{}],
            [{},{},{},{},{}],
            [{},{},{},{},{}],  
            [{},{},{},{},{}]
        ]
	});

    diet.save(function(err, diet) {
		if(err) return res.status(500).send( err.message);
        res.status(200).json(diet);
	});
})

router.put('/dieta', (req, res) => {

    Diet.findByIdAndUpdate( 
        req.body._id, // ID
        req.body, // Datos a escribir, mongoose llenara lo que coincida
        (err, diet) => {
            if (err) return res.status(500).send(err);
            return res.send(diet);
        }
    )

})

router.delete('/dieta', (req, res) => {

})

module.exports = router;