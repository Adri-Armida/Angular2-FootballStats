import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private logoLFP = require('../../dist/assets/LaLiga_Santander.svg.png');

    private equipos = [];

/*
  private addCatForm: FormGroup;
  private name = new FormControl("", Validators.required);
  private age = new FormControl("", Validators.required);
  private weight = new FormControl("", Validators.required);
*/
  constructor(
              private dataService: DataService,) { }

  ngOnInit() {
    this.getEquipos();

    /*this.addCatForm = this.formBuilder.group({
      name: this.name,
      age: this.age,
      weight: this.weight
    });*/
  }

  getEquipos() {
    this.dataService.getEquipos().subscribe(
      data => this.equipos = data,
      error => console.log(error)
    );
  }
}
