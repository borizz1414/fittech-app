import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../services/mensajes.service';
import { ApiFitechService } from '../services/api-fitech.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-relacioncadera',
  templateUrl: './relacioncadera.page.html',
  styleUrls: ['./relacioncadera.page.scss'],
})
export class RelacioncaderaPage implements OnInit {

  medidasCorporales = {
    min_cintura:null,
    max_cintura:null,
    cadera:null,
    cuello:null,
    muslo_derecho:null,
    muslo_izquierdo:null,
    brazo_derecho:null,
    brazo_izquierdo:null,
    pantorrilla_derecho:null,
    pantorrilla_izquierda:null,
    pecho:null
  }
  habilitar=false;
  elementoValidar = {
    elemenUno:false,
    elemenDos:false,
    elemenTre:false,
    elemenCua:false,
    elemenCin:false,
    elemenSei:false,
    elemenSie:false,
    elemenOch:false,
    elemenNue:false,
    elemenDie:false,
    elemenOnc:false,
  }

  constructor(private mensajeservice:MensajesService,private ApiService:ApiFitechService,private ruta: NavController) { }

  ngOnInit() {
  }

  async finalizar(){
    if(this.elementoValidar.elemenUno && this.elementoValidar.elemenDos  && this.elementoValidar.elemenTre
      && this.elementoValidar.elemenCua&& this.elementoValidar.elemenCin&& this.elementoValidar.elemenSei
      && this.elementoValidar.elemenSie && this.elementoValidar.elemenOch && this.elementoValidar.elemenNue
      && this.elementoValidar.elemenDie && this.elementoValidar.elemenOnc){


      const valido = await this.ApiService.cinturacadera(this.medidasCorporales)
      if(valido){
       this.ruta.navigateRoot(['/tabs'])
      }else{
        return
      }



      }else{
        this.mensajeservice.alertaInformatica('Todo los campos deben ser obligatorio, y su valor mayor a 0 y menor a 4 digitos')
      }

  }

  validar(valor,asignacion){

    if(valor.target.value  <= 0 ||  valor.target.value.length <= 1 ||  valor.target.value.length > 4   ){
      console.log("error ")
      this.asignarValidacionErronea(asignacion)
      console.log(this.elementoValidar)
    }else{
      this.asignarValidacion(asignacion)
    }

  }

  asignarValidacion(asignacion){
    if(asignacion == 1){
      this.elementoValidar.elemenUno  = true
    }
    if(asignacion == 2){
      this.elementoValidar.elemenDos  = true
    }
    if(asignacion == 3){
      this.elementoValidar.elemenTre  = true
    }
    if(asignacion == 4){
      this.elementoValidar.elemenCua  = true
    }
    if(asignacion == 5){
      this.elementoValidar.elemenCin  = true
    }
    if(asignacion == 6){
      this.elementoValidar.elemenSei  = true
    }
    if(asignacion == 7){
      this.elementoValidar.elemenSie  = true
    }
    if(asignacion == 8){
      this.elementoValidar.elemenOch  = true
    }
    if(asignacion == 9){
      this.elementoValidar.elemenNue  = true
    }
    if(asignacion == 10){
      this.elementoValidar.elemenDie  = true
    }
    if(asignacion == 11){
      this.elementoValidar.elemenOnc  = true
    }

  }

  asignarValidacionErronea(asignacion){
    if(asignacion == 1){
      this.elementoValidar.elemenUno  = false
    }
    if(asignacion == 2){
      this.elementoValidar.elemenDos  = false
    }
    if(asignacion == 3){
      this.elementoValidar.elemenTre  = false
    }
    if(asignacion == 4){
      this.elementoValidar.elemenCua  = false
    }
    if(asignacion == 5){
      this.elementoValidar.elemenCin  = false
    }
    if(asignacion == 6){
      this.elementoValidar.elemenSei  = false
    }
    if(asignacion == 7){
      this.elementoValidar.elemenSie  = false
    }
    if(asignacion == 8){
      this.elementoValidar.elemenOch  = false
    }
    if(asignacion == 9){
      this.elementoValidar.elemenNue  = false
    }
    if(asignacion == 10){
      this.elementoValidar.elemenDie  = false
    }
    if(asignacion == 11){
      this.elementoValidar.elemenOnc  = false
    }

  }



}
