const express = require('express');
const router = express.Router();
const Ingrediente = require('../models/ingrediente');

router.get('/dieta/ingrediente', (req, res) => {
    Ingrediente.find((err, ingredientes) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(ingredientes);
    })
})

router.post('/dieta/ingrediente', (req, res) => {

    console.log(req.body);
    if(false){
        let file = req.files.sampleFile;
        console.log(req.body.file);
        sampleFile.mv('/assets/dieta/images/ingredient/test.jpg', function(err) {
            if (err) return res.status(500).send(err);
        });
    }

    var ingrediente = new Ingrediente(req.body);

    ingrediente.save(function(err, ingrediente) {
		if(err) {
            console.log(err.message);
            return res.status(500).send( err.message);
        }
        res.status(200).json(ingrediente.nombre);
	});
})

router.put('/dieta/ingrediente', (req, res) => {

})

router.delete('/dieta/ingrediente', (req, res) => {

})

module.exports = router;