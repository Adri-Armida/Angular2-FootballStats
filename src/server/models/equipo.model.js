var mongoose = require('mongoose');

var equipoSchema = mongoose.Schema({
    Nombre: String,
    Escudo: String,
	Puntos: Number,
	Jugados: Number,
    Posicion: Number,
    Victorias: Number,
    Empates: Number,
    Derrotas: Number,
    GolesAfavor: Number,
    GolesEnContra: Number
});

var Equipo = mongoose.model('Equipo', equipoSchema);

module.exports = Equipo;