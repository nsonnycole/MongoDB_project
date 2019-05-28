'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var programmesSchema = new Schema({
	note: Number,
	date: [Date],
	id_cours: [{ type: Schema.Types.ObjectId, ref: 'Cours'}]
	id_etudiant: [{ type: Schema.Types.ObjectId, ref: 'Etudiants'}]

});


module.exports = mongoose.model('Notes', notesSchema);