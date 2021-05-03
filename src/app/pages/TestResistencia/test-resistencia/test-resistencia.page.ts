import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { LoadingController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-test-resistencia',
  templateUrl: './test-resistencia.page.html',
  styleUrls: ['./test-resistencia.page.scss'],
})
export class TestResistenciaPage implements OnInit {
    atleta = {
      correr:null
    }

  constructor(private route:Router,
    private ApiService:ApiFitechService , 
    private notificacion:MensajesService,
    public loadingController: LoadingController) { }

  ngOnInit() {
  }


  async test(){
    
    if(this.atleta.correr == null || this.atleta.correr < 0){
     return
    }else{
        this.presentLoading();

       console.log(this.atleta.correr)
       const validar = await this.ApiService.TestResistencia(this.atleta.correr)  

       this.loadingController.dismiss()
       
       if(validar){
        console.log(this.ApiService.evaluarTest)

         if(this.ApiService.evaluarTest){
          document.getElementById("tablaexamen").classList.add('ocultar')
         }else{
           this.ApiService.pruebaRealizada(true)
         }

        document.getElementById("resistencia").classList.add('ocultar')
        this.route.navigateByUrl('/tabs')
        this.notificacion.notificacionUsuario("Gracias por realizar el test!","danger")
       }else{
       this.notificacion.notificacionUsuario("Ocurrio un error, revise su conexión","primary")
       }

      //this.route.navigateByUrl('/tabs')
    }

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Por favor espere...',
    });
    await loading.present();
  }

}
