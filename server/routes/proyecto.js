var express = require('express');
var app = express();

var Proyecto = require('../models/proyecto');


app.get('/', (req, res) => {
    Proyecto.find().then((proyectos) => {
      res.send({proyectos});
    }, (e) => {
      res.status(400).send(e);
    });
  });
  
  app.get('/:id', (req, res) => {
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

  module.exports = app;
  