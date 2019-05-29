'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var programmesSchema = new Schema({
	annee:  String,
	semestre: Number,
	nsection: Number,
	horaires: [Date],
	description: [String],
	profsid: [{ type: Schema.Types.ObjectId, ref: 'Profs'}],
	idcours: [{ type: Schema.Types.ObjectId, ref: 'Cours'}]
});


module.exports = mongoose.model('Programmes', programmesSchema);