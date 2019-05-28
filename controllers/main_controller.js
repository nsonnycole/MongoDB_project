'use strict';

const url = require('url');
var moment = require('moment');

var mongoose = require('mongoose');
//var Prof = mongoose.model('Profs');
var Etudiant = mongoose.model('Etudiants');


// Affiche la page d'accueil
exports.home = function(req, res) { 
    res.render('index.ejs');   
};


// Affiche liste des etudiants
exports.users_list = function(req, res) { 

    /*var etudiant1 = new Etudiant ( {
        nom : "Test",
        prenom : "Test"
    })

    etudiant1.save();*/

    Etudiant
    .find({})
    .populate('programmesid')
    .exec(function (err, Etudiant) {
        console.log(Etudiant);
        res.render('etudiants-list.ejs', {etudiants: Etudiant});
    })   
};


