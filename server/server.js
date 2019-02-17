require('./config/config');

const port = process.env.PORT;
// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Inicializar variables
var app = express();

// middleware para CORS (ver https://enable-cors.org/server_expressjs.html)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});
/* Considerar también: https://github.com/expressjs/cors */

// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Importar rutas
var proyectoRoutes = require('./routes/proyecto');

mongoose.Promise = global.Promise;
// Aquí jalo la bd ya sea mi local o la de la variable de entorno de heroku
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

// Rutas
app.use('/proyectos', proyectoRoutes);

// Escuchar peticiones
app.listen(port, () => {
    //console.log('Servidor Express online corriendo en: \x1b[32m%s\x1b[0m', ' puerto 3000');
    console.log('Servidor NodeJS online');
});
