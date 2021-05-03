import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-test-fuerza-manual',
  templateUrl: './test-fuerza-manual.page.html',
  styleUrls: ['./test-fuerza-manual.page.scss'],
})
export class TestFuerzaManualPage implements OnInit {

  constructor(private ruta:Router,
    private apiservice:ApiFitechService,
    public loadingController: LoadingController,
    private notificacion:MensajesService) { }

  ngOnInit() {
  }

  empuje(){
    if(this.apiservice.bloquearexamen.examen1){
      document.getElementById("banca").classList.add('realizado')
      return
    }else{
      this.ruta.navigateByUrl("test-fuerza-manual-pasos/1")
    }
  }

  atraccion(){
    if(this.apiservice.bloquearexamen.examen2){
      document.getElementById("curl").classList.add('realizado')
      return
    }else{
      this.ruta.navigateByUrl("test-fuerza-manual-pasos/2")
    }
  }
  
  inferior(){
    if(this.apiservice.bloquearexamen.examen3){
      document.getElementById("squat").classList.add('realizado')
      return
    }else{
      this.ruta.navigateByUrl("test-fuerza-manual-pasos/3")
    }
  }


  async termina(){

    if(this.apiservice.bloquearexamen.examen1 && this.apiservice.bloquearexamen.examen2 && this.apiservice.bloquearexamen.examen3 ){
      this.presentLoading();

      const validar = await this.apiservice.TestFuerza()
      this.loadingController.dismiss()
      
      if(validar){
        console.log(this.apiservice.evaluarTest)

        if(this.apiservice.evaluarTest){
          document.getElementById("tablaexamen").classList.add('ocultar')
         }else{
           this.apiservice.pruebaRealizada(true)
         }

        document.getElementById("fuerza").classList.add('ocultar')
        this.ruta.navigateByUrl('/tabs')
       this.notificacion.notificacionUsuario("Gracias por realizar el test!","danger")
       
      }else{
      this.notificacion.notificacionUsuario("Ocurrio un error, revise su conexión","primary")
        }
      }else{
        this.notificacion.notificacionUsuario("Complete los test, antes de finalizar","warning")
      }

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Por favor espere...',
    });
    await loading.present();
  }

}
