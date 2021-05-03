import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import { MensajesService } from 'src/app/services/mensajes.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
   Bienvenido:any
   ExamenCliente:any
   resistencia
   fuerza
   capacidad
   puerta
   week:any = [];

  constructor(public usuarioservicio:UsuarioService,
     private apiService:ApiFitechService,
     private ruta:NavController,
     private notificacion:MensajesService,
     public alertController: AlertController,
     public loadingController: LoadingController) {
   }

   async ionViewDidEnter(){
     // esperar
    this.presentLoading()
    /* Este paso sere restructurado mas adelante */
    const token = await this.apiService.cargarToken()
    this.apiService.asignarToken(token)
   /* Este paso sere restructurado mas adelante */

    this.week = await this.apiService.obtenerUsuario()

    //  EXAMEN CAPACIDAD
    this.capacidad = await this.apiService.cargarExamenCapacidad()
      // fin de cargar
    this.loadingController.dismiss()

   }

   async ngOnInit() {

    const valor = await this.apiService.cargarNombreUsuario()

    // SACAR DE LA APP NO ES VALIDO
  
    // if(valor.heart_rate === 0){
    //   this.apiService.desconectarUsuario()
    //   this.presentAlert()
    //   this.ruta.navigateRoot(['/'])
    // }

    if( valor.risk > 1){
      this.apiService.desconectarUsuario()
      this.presentAlert2()
      this.ruta.navigateRoot(['/'])
    }

    // ACA LLAMAS AL METODO DESPUES QUE SE CARGA EL TOKEN
    const comprobar = this.apiService.usuario 
    this.Bienvenido = comprobar ? this.apiService.usuario : valor['name']
    const comprobados = this.apiService.usuario 
    this.ExamenCliente = comprobados ? this.apiService.training : valor['training_place']
    



    
  }


  Fuerza(){
    this.ruta.navigateForward('test-fuerza-info')
  }

  Resistencia(){
    this.ruta.navigateForward('test-resistencia')
  }

  Capacidad(){
    this.ruta.navigateForward('test-capacidad-info')
  }
  
  async rutinas(){

      const valor = await this.apiService.cargarNombreUsuario()
      const comprobados = this.apiService.usuario 
      this.ExamenCliente = comprobados ? this.apiService.training : valor['training_place']
        /*arreglar como la de home*/
        // if(this.ExamenCliente === 0){
        //   const validar = await this.apiService.obtenerRutina() 
        //   if(validar){
        //     this.apiService.verificarLugar(this.ExamenCliente)
        //     this.ruta.navigateForward('entrenamientos')
        //   }else{
        //     this.notificacion.notificacionUsuario("Ocurrio un error, revise su conexión","primary")
        //   }
        // }
  
        if(this.ExamenCliente === 2){
          const validar = await this.apiService.obtenerRutinaHome()
          console.log(validar)

          if(validar == true){
            this.apiService.verificarLugar(this.ExamenCliente)
            this.ruta.navigateForward('entrenamientos')
          }
          
          if(validar == false){
            this.notificacion.notificacionUsuario("Ocurrio un error, revise su conexión","danger")
          }

          if(validar === "examen"){
            this.notificacion.notificacionUsuario("Debes realizar el test para poder empezar tu entrenamiento","danger")
          }

        }

    }

  async nutricion(){
    
    const validar = await this.apiService.obtenerRutinaHome()
    //Validamos que exista la nutricion en el cache
    const nutricion = await this.apiService.cargarnutricion()
    //Validamos que exista el test home
    const comprobar = await this.apiService.obtenerUsuario()

      if(validar == true){
        if(nutricion === 'activado' || comprobar['food_measures'] !== null){
          this.ruta.navigateForward('/tutorial-alimentacion')
            return;
        }else{
          this.ruta.navigateForward('/actividad');
          return;
        }
      }

      if(validar == false){
        this.notificacion.notificacionUsuario("Ocurrio un error, revise su conexión","danger")
      }

      if(validar === "examen"){
        this.notificacion.notificacionUsuario("Debes realizar el test para poder empezar tu plan nutricional","danger")
      }
  }


  progreso(){
    this.ruta.navigateForward('progreso')
  }



  // mensaje del corazon

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Fittech',
      cssClass: 'customMensaje',
      message: 'Lo sentimos, lo más que queremos es ayudarte, pero no estás apto para continuar según la información de salud que nos diste, te recomendamos ir al médico, y te esperamos de vuelta pronto.',
      buttons: [
        {
          text: 'Ok',
          cssClass: 'confirmButton'
        }
      ]
    });

    await alert.present();
  }

  // mensaje de riesgo
  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Fittech',
      cssClass: 'customMensaje',
      message: 'Lo sentimos, aunque tú frecuencia cardíaca este bien tienes un riesgo alto y no estás apto para continuar según la información de salud que nos diste, te recomendamos ir al médico, y te esperamos de vuelta pronto.',
      buttons: [
        {
          text: 'Ok',
          cssClass: 'confirmButton'
        }
      ]
    });

    await alert.present();
  }

  // cargar
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'custom-loading'
    });
    await loading.present();
  }
    


  // medidas(){
  //   this.ruta.navigateForward('medidas')
  // }
  

}
