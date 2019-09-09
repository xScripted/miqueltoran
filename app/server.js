const express = require('express');
const app = express();

//Settings
app.set('port', process.env.PORT || 9000);

//Middlewares
app.use(express.static(__dirname + '/public'));

//Rutas
app.get('/', (req, res) => res.send('./public'));

app.use(require('./routes/dieta'));

//Listen
app.listen(app.get('port'), () => console.log('Server listening on port ' + app.get('port')));