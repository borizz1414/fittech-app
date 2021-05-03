import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ApiFitechService } from '../services/api-fitech.service';
import { ModalController } from '@ionic/angular';
import { MensajesService } from '../services/mensajes.service';

@Component({
  selector: 'app-modal-email',
  templateUrl: './modal-email.page.html',
  styleUrls: ['./modal-email.page.scss'],
})
export class ModalEmailPage implements OnInit {
  registrar = {
    nombre:null,
    email:null,
    contra:null,
    reemail:null,
    recontra:null
  }
  constructor(private usuarioService:UsuarioService,public modalController: ModalController ,
              private apiService:ApiFitechService,  private mensajeservice:MensajesService) { }

  ngOnInit() {
  }

  acceder(){

    if(this.registrar.contra !=null && this.registrar.contra.length > 2){
      console.log("es igual")
    }else{
      this.mensajeservice.alertaInformatica('Por favor introduzca un password mayor a 2 digitos')
      this.registrar.contra = null
      this.registrar.recontra = null
      // break rompes la continuacion 
      return
    }

    if(this.registrar.nombre !=null && this.registrar.nombre.length > 2){
      if(this.registrar.email !=null && this.registrar.email.length > 2){
        if(this.registrar.contra === this.registrar.recontra){
            this.usuarioService.registrarEmail(this.registrar)
            this.modalController.dismiss({
              salir:true
            });
        }else{
          this.mensajeservice.alertaInformatica('El password no coincide')
          this.registrar.contra = null
          this.registrar.recontra = null
          return
        }
      }else{
      this.mensajeservice.alertaInformatica('Por favor introduzca el campo del correo correctamente')
      return
      }
    }else{
      this.mensajeservice.alertaInformatica('Por favor introduzca el campo del nombre correctamente')
      return
    }


  }

  async Email(valor:any){

    const valido = await this.apiService.validarEmail(valor.target.value)
    if(valido){
      this.mensajeservice.alertaInformatica('el correo ya existe en nuestra base de datos')
      this.registrar.email = null
    }else{
      console.log("aprobado email")
    }

  }

  Email2(){
    let valor
    if(this.registrar.email === this.registrar.reemail){
       valor = this.validateEmail(this.registrar.email)
         if(valor){
           console.log("todo bien")
         }else{
          this.mensajeservice.alertaInformatica('El email no tiene un formato valido ')
          this.registrar.email = null
          this.registrar.reemail = null
         }
    }else{
      this.mensajeservice.alertaInformatica('El email no coincide ')
      this.registrar.email = null
      this.registrar.reemail = null
    }

  }

  
  //funcion para validar desde el js vainilla
  validateEmail(email) 
  {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
  }
  

  atras(){
    this.modalController.dismiss({
      salir:false
    });
  }
  


}
