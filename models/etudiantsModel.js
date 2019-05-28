'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var etudiantsSchema = new Schema({
    nom:  String,
    prenom: String,
    programmesid: [{ type: Schema.Types.ObjectId, ref: 'Programmes'}]

});


module.exports = mongoose.model('Etudiants', etudiantsSchema);