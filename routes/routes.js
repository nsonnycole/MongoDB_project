'use strict';

module.exports = function(app) {
	var main   = require('../controllers/main_controller');



	app.route('/')
	.get(main.home);

}