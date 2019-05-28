'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var coursSchema = new Schema({
    nom: String,
    nombre:  Number,
    titre: String,
    credit: Number,
    prerequis: [String],
    coursid: [{ type: Schema.Types.ObjectId, ref: 'Cours'}],
    programmesid: [{ type: Schema.Types.ObjectId, ref: 'Programmes'}]

});


module.exports = mongoose.model('Cours', coursSchema);