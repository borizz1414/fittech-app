import { Component, OnInit } from '@angular/core';
import { ActionSheetController, LoadingController, NavController } from '@ionic/angular';
import { MensajesService } from '../services/mensajes.service';
import { NutricionService } from '../services/nutricion.service';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-planes-pagos',
  templateUrl: './planes-pagos.page.html',
  styleUrls: ['./planes-pagos.page.scss'],
})
export class PlanesPagosPage implements OnInit {
  dato:any
  slideOpts:any;
  constructor(private service: NutricionService,
    private utilities: MensajesService,
    public actionSheetController: ActionSheetController,
    private ruta:NavController,
    private iab: InAppBrowser,
    public loadingController: LoadingController,) { }

  ngOnInit() {
    registerLocaleData( es );
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
      cssClass: 'my-loading',
    });
    await loading.present();
  }

  pago(id){
    switch (id) {
    case 1:
      this.ruta.navigateRoot(['/'])
    break;
    
    case 2:
      console.log("pagar2")
      this.planespagos('32.000')
    break;
    
    case 3:
      console.log("pagar3")

    break;
    
    case 4:
      console.log("pagar4")

    break;
    
    case 5:
      console.log("pagar5")

    break;
    
    default:
      break;
    }

  }



  async planespagos(price:string) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Método de pagos',
      cssClass: 'my-custom-class',
      buttons: [
{
        text: 'Paypal',
        icon: 'card-outline',
        handler: () => {
          this.ruta.navigateForward('/paypal');
        }
      }, {
        text: 'PayU',
        icon: 'card-outline',
        handler: () => {
          const page = "https://biz.payulatam.com/L0e126b6D5DFA1A/"
          this.iab.create(page,'_blank')
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


}
