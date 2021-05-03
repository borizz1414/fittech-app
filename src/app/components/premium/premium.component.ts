import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { NutricionService } from 'src/app/services/nutricion.service';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.scss'],
})
export class PremiumComponent implements OnInit {
  dato:any

  constructor(private ruta: NavController,
    private service: NutricionService,
    private utilities: MensajesService,
    public loadingController: LoadingController,) { }

  ngOnInit() {
    this.getPremium()
  }


  
  async getPremium(){
    this.presentLoading()
    const valor = await this.service.GetPrice()
    this.loadingController.dismiss()
      if(valor == false ){
        this.utilities.notificacionUsuario("Ocurrio un error, revise su conexión","danger")
      }else{
        this.dato = valor
      }
  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Por favor espere...',
    });
    await loading.present();
  }

}
