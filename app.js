var express = require('express'),
app = express(),
engine = require('ejs-blocks'),
helmet = require('helmet'),
session = require('express-session'),
port = process.env.PORT || 3000;
mongoose = require('mongoose'),

  Prof    = require('./models/profsModel'), //created model loading here
  Programme = require('./models/programmesModel'),
  Etudiant = require('./models/etudiantsModel'),
  Note = require('./models/notesModel'),
  Cour = require('./models/coursModel'),

  bodyParser = require('body-parser'),
  session = require('client-sessions');

    //mongoose instance connection url connection
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://bokokvin:sylvestre96@ds147926.mlab.com:47926/ipssi');
    //mongoose.connect('mongodb://localhost/PaiementDB'); 


    app.engine('ejs', require('express-ejs-extend'));
    //app.engine('ejs', engine);
    //app.set('view engine', 'ejs');
    app.use(helmet());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(express.static(__dirname + '/public'));
    
    var routes = require('./routes/routes'); //importing route
    routes(app); //register the route

    app.use(function(req, res) {
      res.status(404).send({url: req.originalUrl + ' not found'})
    });


    app.listen(port);

    console.log('todo list RESTful API server started on: ' + port);