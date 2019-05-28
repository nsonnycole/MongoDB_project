'use strict';

const url = require('url');
var moment = require('moment');

var mongoose = require('mongoose');

//var Prof = mongoose.model('Profs');
var Etudiant = mongoose.model('Etudiants');
var Programme = mongoose.model('Programmes');

// Affiche la page d'accueil
exports.home = function(req, res) { 
    res.render('index.ejs');   
};


// Affiche liste des etudiants
exports.etudiants_list = function(req, res) { 

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

// Affiche liste des programmes
exports.programmes_list = function(req, res) {
    /*var programme1 = new Programme({
        annee:  "2019",
        semestre: 2,
        nsection: 3,
        horaires: new Date(),
    });

    programme1.save();*/

    var etudiantId = req.params.etudiantId;

    Programme.find({}).populate('profsid').exec(function (err, Programmes) {
        if(err){
            console.log(err);
        }else {
            res.render('programmes.ejs', {"programmes": Programmes, "etudiantId": etudiantId});
        }
    })
};


// Ajoute un programme à un utilisateur
exports.programmes_add = function(req, res) {

    var etudiantId = req.params.etudiantId;
    var programmeId = req.params.programmeId;

    Etudiant
    .findOne({ _id : etudiantId})
    .populate('programmesid')
    .exec( function(err, etudiant){
        Programme.findOne({ _id : programmeId}).exec(function(err, programme){ 
            //console.log(programme);
            etudiant.programmesid.push(programme);
            etudiant.save();})
      
    })

    Programme.find({}).populate('profsid').exec(function (err, Programmes) {
        if(err){
            console.log(err);
        }else {
            res.render('programmes.ejs', {"programmes": Programmes, "etudiantId": etudiantId});
        }
    })
        
};

