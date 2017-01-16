import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import { ToastComponent } from '../shared/toast/toast.component';

import { DataService } from '../services/data.service';

import {Observable} from "rxjs/Observable";
import {AnonymousSubscription} from "rxjs/Subscription";

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
    
    private timerSubscription: AnonymousSubscription;
    private postsSubscription: AnonymousSubscription;
    
    private resultados = [];
    private equipos = [];
    private mostrarDatosPartidoVector: boolean[] = [false,false,false,false,false,false,false,false,false,false];

    
    constructor(private http: Http,
              private dataService: DataService,
              private toast: ToastComponent,
              private formBuilder: FormBuilder) { }
    
    ngOnInit() {
        this.getResultados();
        this.getEquipos();
        /*this.addCatForm = this.formBuilder.group({
          name: this.name,
          age: this.age,
          weight: this.weight
        });*/
    }
    
    public ngOnDestroy(): void {
        if (this.postsSubscription) {
            this.postsSubscription.unsubscribe();
        }
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
    }
    
    mostrarDatosPartido(partido: number){
        this.mostrarDatosPartidoVector[partido] = !this.mostrarDatosPartidoVector[partido];
    }
    
    getResultados() {
        this.postsSubscription = this.dataService.getResultados().subscribe(
          data => {this.resultados = data;
          this.subscribeToResultados();
                  });
    }
    
    getEquipos() {
        this.postsSubscription = this.dataService.getEquipos().subscribe(
          data =>{ this.equipos = data;
          this.subscribeToEquipos();
                 });
    }
    
    private subscribeToEquipos(): void {
        this.timerSubscription = Observable.timer(5000).first().subscribe(() => this.getEquipos());
    }
    
    private subscribeToResultados(): void {
        this.timerSubscription = Observable.timer(5000).first().subscribe(() => this.getResultados());
    }
}