'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var programmesSchema = new Schema({
    annee:  String,
    semestre: Number,
    nsection: Number,
    horaires: [Date],
    profsid: [{ type: Schema.Types.ObjectId, ref: 'Profs'}]

});


module.exports = mongoose.model('Programmes', programmesSchema);