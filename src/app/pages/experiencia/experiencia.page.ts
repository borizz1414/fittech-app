import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.page.html',
  styleUrls: ['./experiencia.page.scss'],
})
export class ExperienciaPage implements OnInit {

  constructor(private usuarioservicio:UsuarioService,private ruta:NavController,
              public alertController: AlertController) { }

  ngOnInit() {
  }

  experiencia(valor){
    this.usuarioservicio.experiencia(valor)
    this.ruta.navigateRoot(['/lugar-ejercicios'])
  }

  atras(){
    this.ruta.navigateRoot(['/objetivo'])
  }

  testear(){
      this.alerta()
  }

      // mensaje de reanudar
      async alerta() {
        const alert = await this.alertController.create({
          header: 'La sesión ha sido pausada',
          cssClass: 'customMensaje1',
          buttons: [
            {
              text: 'Continuar',
              role: 'cancel',
              cssClass: 'cancelButton',
              handler: (blah) => {
                console.log("nop2")
              }
            }, {
              text: 'Finalizar',
              cssClass: 'confirmButton',
              handler: () => {
                // mensaje confirmacion
                this.confirmarSalida()
              }
            }
          ]
    
        });
    
        await alert.present();
      }
      // mensaje de reanudar
      async confirmarSalida() {
        const alert = await this.alertController.create({
          header: 'Si finalizas aquí no contará la sesión ¿seguro quieres finalizar?',
          cssClass: 'customMensaje1',
          buttons: [
            {
              text: 'No',
              role: 'cancel',
              cssClass: 'cancelButton',
              handler: (blah) => {
                console.log("nop")
              }
            }, {
              text: 'Si',
              cssClass: 'confirmButton',
              handler: () => {
                // clearInterval(this.tiemposegundo) 
                // this.navCtrl.navigateRoot("tabs/dashboard")
                console.log("nop")
              }
            }
          ]
    
        });
    
        await alert.present();
      }

}
