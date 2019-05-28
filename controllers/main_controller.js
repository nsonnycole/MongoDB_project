'use strict';

const url = require('url');
var moment = require('moment');

var mongoose = require('mongoose');
    //Prof = mongoose.model('Profs');
var Programme = mongoose.model('Programmes');


// Affiche la page d'accueil
exports.home = function(req, res) { 
    res.render('index.ejs');   
};


// Affiche liste des utilisateurs
exports.users_list = function(req, res) { 
    res.render('index.ejs');   
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
    Programme.find({}).populate('profsid').exec(function (err, Programmes) {
        if(err){
            console.log(err);
        }else {
            res.render('programmes.ejs', {"programmes": Programmes});
        }
    })
};

