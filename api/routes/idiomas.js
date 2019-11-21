const express = require('express');
const router = express.Router();
const Palabra = require('../models/palabra');

router.put('/idiomas', (req, res) => {
    console.log(req.body);

    var palabra = new Palabra(req.body);

    palabra.save(function(err, palabra) {
		if(err) {
            console.log(err.message);
            return res.status(500).send(err.message);
        }
        res.status(200);
	});
})


module.exports = router;