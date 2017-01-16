import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getEquipos(): Observable<any> {
    return this.http.get('/equipos').map(res => res.json());
  }
  
  getResultados(): Observable<any> {
    return this.http.get('/resultados').map(res => res.json());
  }
  
  getJugadores(): Observable<any> {
	  return this.http.get('/jugadores').map(res => res.json());
  }
   getGoleadores(): Observable<any> {
    return this.http.get('/jugadores/campo').map(res => res.json());
  }
  
  getPorteros(): Observable<any> {
    return this.http.get('/jugadores/porteros').map(res => res.json());
  }
  addEquipo(equipo): Observable<any> {
    return this.http.post("/equipo", JSON.stringify(equipo), this.options);
  }

  editJugador(jugador): Observable<any> {
	  console.log("yeah");
    return this.http.put(`/jugador/${jugador._id}`, JSON.stringify(jugador), this.options);
  }
	editResultado(partido): Observable<any> {
	  console.log("yeah");
    return this.http.put(`/partido/${partido._id}`, JSON.stringify(partido), this.options);
  }

	editEquipo(equipo): Observable<any> {
	  console.log("yeah");
    return this.http.put(`/equipo/${equipo._id}`, JSON.stringify(equipo), this.options);
  }

  eliminarEquipo(equipo): Observable<any> {
    return this.http.delete(`/equipo/${equipo._id}`, this.options);
  }
  
}
