import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-estiramientos',
  templateUrl: './estiramientos.page.html',
  styleUrls: ['./estiramientos.page.scss'],
})
export class EstiramientosPage implements OnInit {
  estiramientos: boolean = false;
  constructor( private navCtrl: NavController) { }

  ngOnInit() {
  }

  iniciar(){
    this.navCtrl.navigateForward("/bateria-estiramientos");
  }

  saltar(){
    this.navCtrl.navigateForward("/percepcionentrenamiento");
  }
}
