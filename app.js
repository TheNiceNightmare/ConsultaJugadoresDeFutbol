const express = require('express');

const jugadoresRoutes = require('./routes/jugadores-equipos');

const app = express();

app.use('/api/jugadores',jugadoresRoutes)

app.listen(3000, () => {
    console.log('Servidor Express en funcionamiento en el puerto 3000');
});