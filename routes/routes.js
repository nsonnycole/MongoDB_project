'use strict';

module.exports = function(app) {
	var main   = require('../controllers/main_controller');



	app.route('/')
	.get(main.home);

    app.route('/etudiants-list')
    .get(main.etudiants_list);

    app.route('/programmes-list/:etudiantId').get(main.programmes_list);

}