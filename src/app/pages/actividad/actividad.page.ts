import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NavController } from '@ionic/angular';
import { ApiFitechService } from 'src/app/services/api-fitech.service';


@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.page.html',
  styleUrls: ['./actividad.page.scss'],
})
export class ActividadPage implements OnInit {

  constructor(private apiService:ApiFitechService,private ruta:NavController) { }
  info: boolean;
  actividad:any;
 
  async ngOnInit() {
    // this.actividad = await this.apiService.cargaractividad()
    console.log(this.actividad)
    this.info = false;
  }

  nivel(valor){
    console.log(valor)
    //  this.apiService.guardaractividad(valor)
     this.ruta.navigateForward(['/porcentajegrasa'])
  }


  mostrar(valor){
      this.info = !valor;
  }
   
  cerrar(){
    this.info = false;
  }


}