var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* Modelos de proyectos de portafolio */
var proyectoSchema = new Schema({
  categoria: { type: String, required: true, minlength: 1, trim: true },
  desc1: { type: String, required: true, minlength: 1, trim: true },
  desc2: { type: String, required: true, minlength: 1, trim: true },
  nombre: { type: String, required: true, minlength: 1, trim: true },
  nombre2: { type: String, required: true, minlength: 1, trim: true },
  techinfo: { type: String, required: true, minlength: 1, trim: true },
  url: { type: String, required: true, minlength: 1, trim: true },
  img_url1: { type: String, required: true, minlength: 1, trim: true },
  img_url2: { type: String, required: true, minlength: 1, trim: true },
  img_url3: { type: String, required: true, minlength: 1, trim: true }
}, { collection: 'proyectos'});

module.exports = mongoose.model('Proyecto', proyectoSchema);
