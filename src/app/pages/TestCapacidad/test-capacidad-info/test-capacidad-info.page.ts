import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiFitechService } from 'src/app/services/api-fitech.service';

@Component({
  selector: 'app-test-capacidad-info',
  templateUrl: './test-capacidad-info.page.html',
  styleUrls: ['./test-capacidad-info.page.scss'],
})
export class TestCapacidadInfoPage implements OnInit {

  constructor(private ruta:NavController , private apiService:ApiFitechService,private navCtrl: NavController) { }

  async ngOnInit() {
    const valor = await this.apiService.cargarNombreUsuario()
    
    this.apiService.asignarGenero(valor['gender'])

    console.log(this.apiService.genero)
  }

  test(){
    this.ruta.navigateForward('bateriahome/0')
  }

  goTo(url:string){
    this.ruta.navigateForward(url);
  }

  atras(){
    this.navCtrl.pop();
  }

}
