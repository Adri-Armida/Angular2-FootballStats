var mongoose = require('mongoose');

var jugadorSchema = mongoose.Schema({
   Nombre: String,
   Foto: String,
   Goles: Number,
   Partidos: Number,
	Amarillas: Number,
	Rojas: Number,
	Minutos: Number,
   TipoJugador: String,
   Equipo: String,

});

var Jugador = mongoose.model('jugadores', jugadorSchema);

module.exports = Jugador;