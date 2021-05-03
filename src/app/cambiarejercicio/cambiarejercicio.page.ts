import { Component, OnInit } from '@angular/core';
import { ApiFitechService } from '../services/api-fitech.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cambiarejercicio',
  templateUrl: './cambiarejercicio.page.html',
  styleUrls: ['./cambiarejercicio.page.scss'],
})
export class CambiarejercicioPage implements OnInit {

  constructor(private ApiService:ApiFitechService,private ruta:NavController  ) { }
  nombre
  repeticion

  ngOnInit() {
    this.ApiService.contadorEjercicio(1)
   this.nombre = this.ApiService.Nuevarutina['name']
  }

  async atras(){
    const validar = await this.ApiService.obtenerRutina() 
    if(validar){
      this.ruta.navigateBack("entrenamientos")
    }else{
      console.log("ocurrio un error")
    }


  }

}
