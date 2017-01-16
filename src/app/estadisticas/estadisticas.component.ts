import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import { ToastComponent } from '../shared/toast/toast.component';

import { DataService } from '../services/data.service';

import {Observable} from "rxjs/Observable";
import {AnonymousSubscription} from "rxjs/Subscription";

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
    
    private goleadores = [];
    private porteros = [];
    private jugadores = [];

	private timerSubscription: AnonymousSubscription;
    private postsSubscription: AnonymousSubscription;
	
    constructor(private http: Http,
              private dataService: DataService,
              private toast: ToastComponent,
              private formBuilder: FormBuilder) { }
    
    ngOnInit() {
        this.getGoleadores();
        this.getPorteros();
        this.getJugadores();
    }
    
    private subscribeToJugadores(): void {
        this.timerSubscription = Observable.timer(5000).first().subscribe(() => this.getJugadores());
    }
	
    getGoleadores() {
        this.postsSubscription = this.dataService.getGoleadores().subscribe(
          data =>{ this.goleadores = data;
          this.subscribeToJugadores();
				 });
    }
    getPorteros() {
        this.dataService.getPorteros().subscribe(
          data => this.porteros = data,
          error => console.log(error)
        );
    }
    getJugadores() {
        this.dataService.getJugadores().subscribe(
          data => this.jugadores = data,
          error => console.log(error)
        );
    }
    
    redondear2Decimales(numero): Number {
        return Math.round(numero * 100) / 100;
    }
}