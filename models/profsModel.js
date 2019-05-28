'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var profsSchema = new Schema({
    nom:  String,
    departement: String,
    titre: String

});


module.exports = mongoose.model('Profs', profsSchema);