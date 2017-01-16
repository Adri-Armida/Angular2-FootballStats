import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { ToastComponent } from '../shared/toast/toast.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-clasificacion',
  templateUrl: './editaClasificacion.component.html',
  styleUrls: ['./editaClasificacion.component.css']
})
export class EditaClasificacionComponent implements OnInit {

  private equipos = [];
	private equipo = {}
	private addEquipoForm: FormGroup;
	
	private Nombre = new FormControl("hola", Validators.required);
  private Puntos = new FormControl("", Validators.required);
  private Jugados = new FormControl("", Validators.required);
	private Victorias = new FormControl("", Validators.required);
	private Empates = new FormControl("", Validators.required);
	private Derrotas = new FormControl("", Validators.required);
	private GolesAfavor = new FormControl("", Validators.required);
	private GolesEnContra = new FormControl("", Validators.required);
	
  constructor(private http: Http,
              private dataService: DataService,
              private toast: ToastComponent,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getEquipos();
	  
	  this.addEquipoForm = this.formBuilder.group({
      Nombre: this.Nombre,
      Puntos: this.Puntos,
      Jugados: this.Jugados,
		Victorias: this.Victorias,
		  Empates: this.Empates,
		  Derrotas: this.Derrotas,
		  GolesAfavor: this.GolesAfavor,
		  GolesEnContra: this.GolesEnContra
    });
  }

  getEquipos() {
    this.dataService.getEquipos().subscribe(
      data => this.equipos = data,
      error => console.log(error)
    );
  }
  
	editEquipo(equipo) {
    this.dataService.editEquipo(equipo).subscribe(
      res => {
        this.equipo = equipo;
        this.toast.setMessage("equipo modificado correctamente", "success");
      },
      error => console.log(error)
    );
  }
	addEquipo(){
		this.dataService.addEquipo(this.addEquipoForm).subscribe(
      res => {
        var newEquipo = res.json();
		  console.log(newEquipo);
        this.equipos.push(newEquipo);
        this.addEquipoForm.reset();
        this.toast.setMessage("Equipo añadido correctamente", "success");
      },
      error => console.log(error)
    );
	}
	
	eliminarEquipo(equipo){
		if(window.confirm("Estas seguro de eliminar a "+equipo.Nombre)) {
      this.dataService.eliminarEquipo(equipo).subscribe(
        res => {
          var pos = this.equipos.map(equipo => { return equipo._id }).indexOf(equipo._id);
          this.equipos.splice(pos, 1);
          this.toast.setMessage("Equipo eliminado correctamente", "success");
        },
        error => console.log(error)
      );
    }
	}
}