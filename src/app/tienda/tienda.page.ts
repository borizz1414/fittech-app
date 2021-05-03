import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { MensajesService } from '../services/mensajes.service';
import { TiendaService } from '../services/tienda.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
})
export class TiendaPage implements OnInit {
  tienda:any = []
  constructor(    private service: TiendaService,
                  public loadingController: LoadingController,
                  public navCtrl: NavController,
                  private utilities: MensajesService,) { }

  ngOnInit() {
    this.getData()
  }


  async getData(){
    this.presentLoading()
    const valor = await this.service.getProducts()
      if(valor == false ){
        this.loadingController.dismiss()
      this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger')
      }else{
        console.log(valor)
        this.loadingController.dismiss()
         this.tienda = valor
      }
  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Por favor espere...',
      cssClass: 'my-loading',
    });
    await loading.present();
  }

  go(item){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        shop: JSON.stringify(item),
      },
    };

    this.navCtrl.navigateForward(["tienda-productos"], navigationExtras);
  }

}
