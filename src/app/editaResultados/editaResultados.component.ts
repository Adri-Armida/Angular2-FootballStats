import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import { ToastComponent } from '../shared/toast/toast.component';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './editaResultados.component.html',
  styleUrls: ['./editaResultados.component.css']
})
export class EditaResultadoComponent implements OnInit {
    private resultados = [];
    private equipos = [];
	private jugadores = [];
	
	private jugador = {}
	private resultado = {}
	
	private mostrarDatosPartidoVector: boolean[] = [false,false,false,false,false,false,false,false,false,false];

    constructor(private http: Http,
              private dataService: DataService,
              private toast: ToastComponent,
              private formBuilder: FormBuilder) { }
    
    ngOnInit() {
        this.getResultados();
        this.getEquipos();
		this.getJugadores();

    }
    
	editarPartido(partido: number){
       this.mostrarDatosPartidoVector[partido] = !this.mostrarDatosPartidoVector[partido];
   }
	
    getResultados() {
        this.dataService.getResultados().subscribe(
          data => this.resultados = data,
          error => console.log(error)
        );
    }
    getEquipos() {
        this.dataService.getEquipos().subscribe(
          data => this.equipos = data,
          error => console.log(error)
        );
    }
	getJugadores() {
        this.dataService.getJugadores().subscribe(
          data => this.jugadores = data,
          error => console.log(error)
        );
    }
	
	editJugador(jugador) {
		console.log(jugador);
		this.dataService.editJugador(jugador).subscribe(
		  res => {
			this.jugador = jugador;
			this.toast.setMessage("jugador editado correctamente", "success");
		  },
		  error => console.log(error)
		);
  	}
	
	editResultado(partido) {
		console.log(partido);
		this.dataService.editResultado(partido).subscribe(
		  res => {
			this.resultado = partido;
			this.toast.setMessage("partido editado correctamente", "success");
		  },
		  error => console.log(error)
		);
  	}
}