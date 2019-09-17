const express = require('express');
const router = express.Router();
const Plato = require('../models/plato');

router.get('/dieta/plato', (req, res) => {
    Plato.find((err, ingredientes) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(ingredientes);
    })
})

router.post('/dieta/plato', (req, res) => {

    console.log(req.body);
    if(false){
        let file = req.files.sampleFile;
        console.log(req.body.file);
        sampleFile.mv('/assets/dieta/images/ingredient/test.jpg', function(err) {
            if (err) return res.status(500).send(err);
        });
    }

    var plato = new Plato(req.body);

    plato.save(function(err, ingrediente) {
		if(err) {
            console.log(err.message);
            return res.status(500).send(err.message);
        }
        res.status(200).json(plato.nombre);
	});
})

router.put('/dieta/plato', (req, res) => {

})

router.delete('/dieta/plato', (req, res) => {

})

module.exports = router;