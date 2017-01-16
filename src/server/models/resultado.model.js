var mongoose = require('mongoose');

var resultadoSchema = mongoose.Schema({
    Jornada: Number,
    Fecha: String,
	Estado: String,
    Arbitro: String,
    Local: {
        Equipo: String,
        Goles: Number,
        Posesion: Number,
        Remates: Number,
        RematesPuerta: Number,
        Corners: Number,
        Paradas: Number,
        Faltas: Number,
        FuerasDeJuego: Number,
        TarjetasAmarillas: Number,
        TarjetasRojas: Number,
        Titulares: {
            Jugador1: String,
            Jugador2: String,
            Jugador3: String,
            Jugador4: String,
            Jugador5: String,
            Jugador6: String,
            Jugador7: String,
            Jugador8: String,
            Jugador9: String,
            Jugador10: String,
            Jugador11: String
        }
    },
    Visitante: {
        Equipo: String,
        Goles: Number,
        Posesion: Number,
        Remates: Number,
        RematesPuerta: Number,
        Corners: Number,
        Paradas: Number,
        Faltas: Number,
        FuerasDeJuego: Number,
        TarjetasAmarillas: Number,
        TarjetasRojas: Number,
        Titulares: {
            Jugador1: String,
            Jugador2: String,
            Jugador3: String,
            Jugador4: String,
            Jugador5: String,
            Jugador6: String,
            Jugador7: String,
            Jugador8: String,
            Jugador9: String,
            Jugador10: String,
            Jugador11: String
        }
    }
});

var Resultado = mongoose.model('resultados', resultadoSchema, 'resultados');

module.exports = Resultado;
