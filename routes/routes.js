'use strict';

module.exports = function(app) {
    var main   = require('../controllers/main_controller');



    app.route('/home')
    .get(main.home);

}