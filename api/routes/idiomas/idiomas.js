const express = require('express');
const router = express.Router();
const Palabra = require('../../models/idiomas/palabra');
const Idioma = require('../../models/idiomas/idioma');

router.put('/idiomas', (req, res) => {
    var palabra = new Palabra(req.body);

    palabra.save(function(err, palabra) {
      if(err) {
        console.log(err.message);
        return res.status(500).send(err.message);
      }
      res.status(200).send(palabra);
	  });
})

router.get('/idiomas/palabras/:lang?', (req, res) => {
  Palabra.find({idioma: req.params.lang}, null, {sort: 'subcategoria'}, (err, palabras) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(palabras);
  })
})

router.get('/idiomas', (req, res) => {
  Idioma.find({}, null, (err, idiomas) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(idiomas);
  })
})


router.put('/idiomas/nuevo/', (req, res) => {
  var idioma = new Idioma(req.body);

  idioma.save(function(err, palabra) {
    if(err) {
      console.log(err.message);
      return res.status(500).send(err.message);
    }
    res.status(200).send('Idioma ' + palabra + 'creado correctamente!');
  });
})



module.exports = router;