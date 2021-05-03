import { Component, OnInit ,ChangeDetectorRef  } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-test-fuerza-categoria',
  templateUrl: './test-fuerza-categoria.page.html',
  styleUrls: ['./test-fuerza-categoria.page.scss'],
})
export class TestFuerzaCategoriaPage implements OnInit {

  constructor( private apiservice:ApiFitechService,
     private notificacion:MensajesService, 
     private route:Router , 
     private usuarioservicio:UsuarioService , 
     public loadingController: LoadingController,
     private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    console.log(this.apiservice.bloquearexamen)
  }

  empuje(){
    if(this.apiservice.bloquearexamen.examen1){
      document.getElementById("banca").classList.add('realizado')
      return
    }else{
      this.usuarioservicio.TestSelecion(1)
      this.route.navigateByUrl('/test-fuerza-pasos1');
    }

  }

  atraccion(){
    if(this.apiservice.bloquearexamen.examen2){
      document.getElementById("curl").classList.add('realizado')
      return
    }else{
      this.usuarioservicio.TestSelecion(3)
      this.route.navigateByUrl('/test-fuerza-pasos1');
    }
  }
  
  inferior(){
    if(this.apiservice.bloquearexamen.examen3){
      document.getElementById("squat").classList.add('realizado')
      return
    }else{
      this.route.navigateByUrl('/test-fuerza-menu3');
      this.usuarioservicio.TestSelecion(2)
      this.usuarioservicio.TestSelecion(4)

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
        this.route.navigateByUrl('/tabs')
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