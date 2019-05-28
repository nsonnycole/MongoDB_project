'use strict';

const url = require('url');
var moment = require('moment');

var mongoose = require('mongoose');
    //Prof = mongoose.model('Profs');


// Affiche la page d'accueil
exports.home = function(req, res) { 
    res.render('index.ejs');   
};


