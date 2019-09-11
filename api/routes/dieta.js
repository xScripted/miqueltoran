const express = require('express');
const router = express.Router();
const Diet = require('../models/dieta');

router.get('/diet', (req, res) => {
    console.log('Diets: ');
    Diet.find((err, diets) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(diets);
    })
})

router.post('/diet', (req, res) => {
    console.log(req.body);

    var diet = new Diet({
        nombre: req.body.name,
        descripcion: req.body.desc,
        dias: req.body.days
	});

    diet.save(function(err, diet) {
		if(err) return res.status(500).send( err.message);
        res.status(200).json(diet);
	});
})

router.put('/diet', (req, res) => {

})

router.delete('/diet', (req, res) => {

})

module.exports = router;