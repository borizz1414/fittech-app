import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiFitechService } from '../services/api-fitech.service';

@Component({
  selector: 'app-calentamiento-info',
  templateUrl: './calentamiento-info.page.html',
  styleUrls: ['./calentamiento-info.page.scss'],
})
export class CalentamientoInfoPage implements OnInit {

  constructor( private avanzar:NavController , private ApiService:ApiFitechService,private navCtrl: NavController) { }

  ngOnInit() {

  }

  async continuar(){
    const validar = await this.ApiService.obtenerCalentamiento()
    if(validar){
      this.avanzar.navigateForward(["/bateriacalentamientohome/0"])
    }else{
      console.log("error")
    }

  }

  saltarCalentamiento(){
    this.avanzar.navigateForward(["/rutina-entrenamiento"])
  }

  atras(){
    this.avanzar.pop();
  }

}
