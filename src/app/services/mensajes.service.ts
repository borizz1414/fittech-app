import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(public alertController: AlertController,public toastController: ToastController) { }

  async alertaInformatica(message:string) {
    const alert = await this.alertController.create({
      animated:true,
      message,
      cssClass: 'customMensaje',
      buttons: [
        {
          text: 'Ok',
          cssClass: 'confirmButton'
        }
      ]
    });
    await alert.present();
  }

  async notificacionUsuario(message:string,color:string, position:any = 'middle') {
    const toast = await this.toastController.create({
      position: position,
      color:color,
      message: message,
      // cssClass:'customToast',
      duration: 2000
    });
    toast.present();
  }

  async notificacionUsuarioFinalizar(message:string,color:string) {
    const toast = await this.toastController.create({
      position: 'middle',
      color:color,
      message: message,
      cssClass:'customToast1',
      duration: 2000
    });
    toast.present();
  }

  

}
