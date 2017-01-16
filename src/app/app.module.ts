import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ClasificacionComponent } from './clasificacion/clasificacion.component';
import { EditaClasificacionComponent } from './editaClasificacion/editaClasificacion.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { EditaResultadoComponent } from './editaResultados/editaResultados.component';
import { DataService } from './services/data.service';
import { AdministracionComponent } from './administracion/administracion.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { ToastComponent } from './shared/toast/toast.component';
import "../rxjs-extensions";

const routing = RouterModule.forRoot([
    { path: 'resultados', component: ResultadosComponent },
	{ path: 'editaResultados', component: EditaResultadoComponent },
	{ path: 'estadisticas', component: EstadisticasComponent },
	{ path: 'editaClasificacion', component: EditaClasificacionComponent },
	{ path: 'clasificacion', component: ClasificacionComponent },
	{ path: 'administracion', component: AdministracionComponent }
]);

@NgModule({
  declarations: [
    AppComponent,
	ClasificacionComponent,
    ResultadosComponent,
	EditaResultadoComponent,
	  EstadisticasComponent,
	  EditaClasificacionComponent,
	 AdministracionComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
    DataService,
    ToastComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
