var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// Aquí jalo la bd ya sea mi local o la de la variable de entorno de heroku
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = {mongoose};
