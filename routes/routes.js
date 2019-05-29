'use strict';

module.exports = function(app) {
	var main   = require('../controllers/main_controller');



	app.route('/')
	.get(main.home);

    app.route('/nouveau')
    .get(main.new);


    // Etudiants
    app.route('/etudiants-list')
    .get(main.etudiants_list);


    app.route('/etudiant-new')
    .post(main.etudiant_new);


    // Programme
    app.route('/programmes-list')
    .get(main.programmes_list);

    app.route('/programmes-list/:etudiantId')
    .get(main.programmes_list);

    app.route('/programmes-add/:etudiantId/:programmeId')
    .get(main.programmes_add);

    app.route('/programmes-new')
    .post(main.programmes_new);

    // Profs

    app.route('/profs-list')
    .get(main.profs_list);

    app.route('/prof-new')
    .post(main.prof_new);

    // Cours
    app.route('/cours-list')
    .get(main.cours_list);

    app.route('/cours-list/:etudiantId')
    .get(main.cours_list);

    app.route('/add_note/:coursId')
    .get(main.add_note);

    app.route('/cours-new')
    .post(main.cours_new);

    app.route('/note-new/:coursId')
    .post(main.note_new);
}