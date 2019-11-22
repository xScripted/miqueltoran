const express = require('express');
const router = express.Router();
const Plato = require('../../models/dietas/plato');

router.get('/dieta/plato', (req, res) => {
    Plato.find((err, platos) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(platos);
    })
})

router.post('/dieta/plato', (req, res) => {

    console.log(req.body);


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