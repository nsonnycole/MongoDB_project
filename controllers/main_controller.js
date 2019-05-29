'use strict';

const url = require('url');
var moment = require('moment');

var mongoose = require('mongoose');

//var Prof = mongoose.model('Profs');
var Etudiant = mongoose.model('Etudiants');
var Programme = mongoose.model('Programmes');
var Cours = mongoose.model('Cours');
var Prof = mongoose.model('Profs');
var Note = mongoose.model('Notes');

// Affiche la page d'accueil
exports.home = function(req, res) { 
    res.render('index.ejs');   
};


// Affiche la page de création
exports.new = function(req, res) { 
    res.render('nouveau.ejs');   
};


// **** ETUDIANTS *** 


exports.etudiant_new = function(req, res) {

  var etudiant1 = new Etudiant ( {
    nom : req.body.nom,
    prenom : req.body.prenom,
})

  etudiant1.save();


  res.redirect("etudiants-list");
}



// Affiche liste des etudiants
exports.etudiants_list = function(req, res) { 

    /*var etudiant1 = new Etudiant ( {
        nom : "EL AMIRCHI",
        prenom : "Rachid"
    })

    etudiant1.save();*/
    Etudiant
    .find({})
    .populate('programmesid')
    .exec(function (err, Etudiant) {

      res.render('etudiants-list.ejs', {"etudiants": Etudiant });
  })



    

};


// **** PROGRAMMES ***

exports.programmes_new = function(req, res) {

  var programme1 = new Programme({
    annee:  req.body.annee,
    semestre: req.body.semestre,
    nsection: req.body.nsection,
    horaires: req.body.horaires,
});

  programme1.save();
  res.redirect("programmes-list");
}


// Affiche liste des programmes
exports.programmes_list_user = function(req, res) {
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
            res.render('programmes_user.ejs', {"programmes": Programmes, "etudiantId": etudiantId});
        }
    })
};


// Affiche liste des programmes
exports.programmes_list = function(req, res) {

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
            res.render('programmes_add.ejs', {"programmes": Programmes, "etudiantId": etudiantId});
        }
    })

};



//  **** PROFS ***

// Affiche liste des profs
exports.profs_list = function(req, res) {
    /*var prof1 = new Prof({
        nom:  "Rachid",
        departement: "Informatique",
        titre: "Ingénieur",
    });

    prof1.save();*/
    Prof.find({}).exec(function (err, Profs) {
        if(err){
            console.log(err);
        }else {
            res.render('profs.ejs', {"profs": Profs});
        }
    })
};


exports.prof_new = function(req, res) {

    var prof1 = new Prof({
       nom:  req.body.nom,
       departement: req.body.departement,
       titre: req.body.titre,
   });

    prof1.save();
    res.redirect("profs");
}



//  **** COURS ****

// Affiche liste des profs
exports.cours_list = function(req, res) {

    Cours.find({}).exec(function (err, Cours) {
        if(err){
            console.log(err);
        }else {
            res.render('cours.ejs', {"cours": Cours});
        }
    })
};




exports.cours_new = function(req, res) {


    var cours1 = new Cours({
        nom: req.body.nom,
        nombre:  req.body.nombre,
        titre: req.body.titre,
        credit: req.body.credit,
        prerequis: req.body.prerequis
    });

    cours1.save();
    res.redirect("cours-list");
}



// NOTE


exports.note_list = function(req, res) {

    Note.find({}).exec(function (err, Note) {
        if(err){
            console.log(err);
        }else {
            console.log(Note);
            res.render('note.ejs', {"notes": Note});
        }
    })
};


exports.add_note = function(req, res) {

    Etudiant
    .find({})
    .exec(function (err, Etudiant) {
        console.log(Etudiant);
        res.render('add_note.ejs', {etudiants: Etudiant, coursId: req.params.coursId});
    })


};


exports.note_new = function(req, res) {


    var coursId = req.params.coursId;

    var note1 = new Cours({
     id_cours:  coursId,
     id_etudiant:  req.body.etudiantId,
     note: req.body.note,
     date: Date(),
 });

    note1.save();
    res.redirect("/etudiants-list");
}

