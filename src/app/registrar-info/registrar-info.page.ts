import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

//google
import * as firebase from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
//facebook
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { ModalEmailPage } from '../modal-email/modal-email.page';

@Component({
  selector: 'app-registrar-info',
  templateUrl: './registrar-info.page.html',
  styleUrls: ['./registrar-info.page.scss'],
})
export class RegistrarInfoPage implements OnInit {
  public logeado:Observable<firebase.User> ;
  habilitar = true
  facebookData = null
  googleData = null
  googlehabilitar = false
  facebookhabilitar = false

  constructor( private ruta: NavController,
              public afAuth:AngularFireAuth,
              private gplus:GooglePlus,
              public modalController: ModalController,
              private usuarioservicio:UsuarioService,
              public fb: Facebook,
              private mensajeServicio:MensajesService,
              private platform:Platform) {
                this.logeado = this.afAuth.authState
               }

  ngOnInit() {
    this.emailLogin();
  }

  navegar(){
    this.ruta.navigateRoot(['/terminos'])
  }

  googleLogin(){
    if(this.platform.is('cordova')){
      let prueba = this.nativegooglelogin()
      prueba.then(respuesta=>{
        console.log(respuesta.user.email)
        console.log(respuesta.user.displayName)
        this.googleData = {email:respuesta.user.email , first_name:respuesta.user.displayName}
        this.registrarRedes(this.googleData)
        this.habilitar = false
        this.facebookhabilitar = true
        this.googlehabilitar = true
      })
    }
  }

  async nativegooglelogin(){
    try{
      const gplusUser = await this.gplus.login({
        'scopes': '', 
        'webClientId':'852806702714-hha82fck69qmatnl5ufm806hknfo7utf.apps.googleusercontent.com',
        'offline': true
      })

      return await this.afAuth.auth.signInWithCredential(
        await firebase.auth.GoogleAuthProvider.credential(gplusUser)    
        ) /*.then(response=>{
         this.googleData = {email:response.user.email , first_name:response.user.displayName}
        this.habilitar = false
        this.facebookhabilitar = true
        this.googlehabilitar = true
        console.log(response.user)
        this.registrarRedes(this.googleData)
      })*/

      
    }catch(error){
      //console.error(error);
      this.mensajeServicio.alertaInformatica(error)
    }
  }

  facebookLogin(){
   try{
    this.fb.login(['public_profile', 'email'])
    .then((res: FacebookLoginResponse) =>{
      this.fb.api('me?fields=id,name,email,first_name', []).then(profile=>{
        this.facebookData = {email:profile['email'],first_name:profile['first_name']}
        console.log(profile)
        this.habilitar = false
        this.googlehabilitar = true
        this.facebookhabilitar = true
        this.registrarRedes(this.facebookData)
      })
    })
   }catch{
      this.mensajeServicio.alertaInformatica("lo sentimos no se pudo conectar a facebook")
   }
  
  }


  registrarRedes(valor){
    this.usuarioservicio.redesSociales(valor)
  }

  async emailLogin(){
    const modal = await this.modalController.create({
      component: ModalEmailPage
    });
     await modal.present();
     const {data} = await modal.onDidDismiss()
     console.log("data recibida",data.salir)
     if(data.salir){
      this.ruta.navigateForward(['/terminos'])
     }else{
      this.ruta.navigateRoot(['/'])
     }
  }


  aceptar(){
    return
  }

}
