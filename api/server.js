const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

//Settings
app.set('port', process.env.PORT || 9000);

//Middlewares
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false} ));
app.use(bodyParser.json());

app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'authorization, Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// MongoDB Connection
mongoose.connect('mongodb://localhost/miqueltorandb', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

//Rutas
//app.get('/', (req, res) => res.send('./public'));

app.use(require('./routes/dieta'));
app.use(require('./routes/ingrediente'));

//Listen
app.listen(app.get('port'), () => console.log('Server listening on port ' + app.get('port')));