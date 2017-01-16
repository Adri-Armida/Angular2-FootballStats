var express = require('express');
var path = require('path');
var morgan = require('morgan'); // logger
var bodyParser = require('body-parser');

var app = express();
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname + '/../../dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(morgan('dev'));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/proyecto');
var db = mongoose.connection;
mongoose.Promise = global.Promise;

// Models
var Equipo = require('./models/equipo.model.js');
var Jugador = require('./models/jugador.model.js');
var Resultado = require('./models/resultado.model.js');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');

    // APIs
    // select all equipos
    app.get('/equipos', function (req, res) {
        Equipo.find({}, function (err, docs) {
            if (err) return console.error(err);
            res.json(docs);
        }).sort({
            Puntos: -1
        });
    });

	// select all goleadores
    app.get('/jugadores/campo', function (req, res) {
        Jugador.find({
            "TipoJugador": "Campo"
        }, function (err, docs) {
            if (err) return console.error(err);
            res.json(docs);
        }).sort({
            "Goles": -1,
            "Partidos": -1
        });
    });
    // select all porteros
    app.get('/jugadores/porteros', function (req, res) {
        Jugador.find({
            "TipoJugador": "Portero"
        }, function (err, docs) {
            if (err) return console.error(err);
            res.json(docs);
        }).sort({
            "Partidos": -1
        });
    });
    // select all jugadores
    app.get('/jugadores', function (req, res) {
        Jugador.find({}, function (err, docs) {
            if (err) return console.error(err);
            res.json(docs);
        });
    });
    // select all resultados
    app.get('/resultados', function (req, res) {
        Resultado.find({}, function (err, docs) {
            if (err) return console.error(err);
            res.json(docs);
        });
    });
	//Actualizar
	app.put('/jugador/:id', function(req, res) {
		console.log("aqui");
    Jugador.findOneAndUpdate({_id: req.params.id}, req.body, function(err) {
      if(err) return console.error(err);
      res.sendStatus(200);
    })
  });
	//Actualizar
	app.put('/partido/:id', function(req, res) {
		console.log("aqui");
    Resultado.findOneAndUpdate({_id: req.params.id}, req.body, function(err) {
      if(err) return console.error(err);
      res.sendStatus(200);
    })
  });
	
	//Actualizar
	app.put('/equipo/:id', function(req, res) {
    Equipo.findOneAndUpdate({_id: req.params.id}, req.body, function(err) {
      if(err) return console.error(err);
      res.sendStatus(200);
    })
  });

      // create
      app.post('/equipo', function(req, res) {
        var obj = new Equipo(req.body);
		  console.log(obj);
        obj.save(function(err, obj) {
          if(err) return console.error(err);
          res.status(200).json(obj);
        });
      });

      /*// find by id
      app.get('/cat/:id', function(req, res) {
        Cat.findOne({_id: req.params.id}, function(err, obj) {
          if(err) return console.error(err);
          res.json(obj);
        })
      });

      // update by id
      app.put('/cat/:id', function(req, res) {
        Cat.findOneAndUpdate({_id: req.params.id}, req.body, function(err) {
          if(err) return console.error(err);
          res.sendStatus(200);
        })
      });*/

      // delete by id
      app.delete('/equipo/:id', function(req, res) {
        Equipo.findOneAndRemove({_id: req.params.id}, function(err) {
          if(err) return console.error(err);
          res.sendStatus(200);
        });
      });


    // all other routes are handled by Angular
    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, '/../../dist/index.html'));
    });

    app.listen(app.get('port'), function () {
        console.log('Angular 2 Full Stack listening on port ' + app.get('port'));
    });
});

module.exports = app;