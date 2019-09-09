const express = require('express');
const app = express();


//Rutas
app.use('routes/diet');

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});