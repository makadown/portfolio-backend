require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

var {Proyecto} = require('./models/proyecto');

var app = express();
const port = process.env.PORT;

// middleware para CORS (ver https://enable-cors.org/server_expressjs.html)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.json());

app.get('/proyectos', (req, res) => {
  Proyecto.find().then((proyectos) => {
    res.send({proyectos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/proyectos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Proyecto.findOne({
    _id: id
  }).then((proyecto) => {
    if (!proyecto) {
      return res.status(404).send();
    }

    res.send({proyecto});
  }).catch((e) => {
    res.status(400).send();
  });
});



app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
