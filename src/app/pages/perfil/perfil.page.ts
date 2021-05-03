import { Component, OnInit } from '@angular/core';
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MensajesService } from 'src/app/services/mensajes.service';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  comparar:any = 'perfil'
  image:any;
  objetivo:any
  genero:any
  titulo:any
  form: FormGroup;
  formpass:FormGroup;
  imgSelected: any;
  valor: any;
  clase:string = 'perfil'

  constructor(private fb: FormBuilder, private apiService:ApiFitechService,
            public loadingController: LoadingController,
            private ruta:NavController,public alertController: AlertController,
            private webView: WebView, private camera: Camera, 
            private service: ApiFitechService,private utilities: MensajesService,){ 
      this.form = this.fb.group({
        name:[null, Validators.required],
        objective:[null],
        email:[null,Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
        avatar:[null]
      });

      this.formpass = this.fb.group(
        {
        password:[null,Validators.compose([Validators.required, Validators.minLength(5)])],
        repassword:[null,Validators.required]},
        { 
        validator: this.ConfirmedValidator('password', 'repassword')
      })

        
  }
  

  ngOnInit() {
    this.getData()
  }

  segmentChanged(valor){
    this.clase = valor.target.value

   this.comparar = valor.target.value
  }

  
  desconectar(){
    // LLAMO ALA RUTA PARA DESCONECTAR Y LO FUERZO A REDIRECIONAR AL LOGIN
    this.apiService.desconectarUsuario()
    this.ruta.navigateRoot(["/login"])
  }


  
  async getData(){
    const valor = await this.service.obtenerUsuario()
      if(valor == false ){
      this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger')
      }else{
          if(valor['user'].gender == '1'){
            this.genero = "Hombre"
          }else{
            this.genero = "Mujer"
          }

          if(valor['user'].objective == '0'){
            this.objetivo = "Estar en forma"
          }
          if(valor['user'].objective == '1'){
            this.objetivo = "Ganar musculatura"
          }
          if(valor['user'].objective == '2'){
            this.objetivo = "Adelgazar"
          }


          this.imgSelected = valor['user'].avatar; 
          this.titulo = valor['user'].name
          this.form.controls.objective.setValue(valor['user'].objective)
         this.form.controls.avatar.setValue(valor['user'].avatar)
         this.form.controls.name.setValue(valor['user'].name)
         this.form.controls.email.setValue(valor['user'].email)
      }
  }


  async changeData(){
    this.presentLoading()
    console.log(this.form.value)
    const data = await this.apiService.actualizarPerfil(this.form.value)
      if(data){
        this.loadingController.dismiss()
        // this.changepass()
        this.utilities.notificacionUsuario("Su perfil ha sido actualizado ","dark")
        this.getData()
      }else{
        this.loadingController.dismiss()
        this.utilities.notificacionUsuario("Ocurrio un error, revise su conexión","danger")
      }
  }

  getClass(){
    return  this.formpass.status == 'INVALID' ? 'pencil-grey' : 'pencil-red'
  }


  async changepass(){
      if(this.formpass.status == 'INVALID'){
          return
      }
  
    const data = await this.apiService.cambiarPassword(this.formpass.value)
      if(data){
        this.loadingController.dismiss()
        this.utilities.notificacionUsuario("Su contraseña ha sido actualizada ","dark")
        this.desconectar()
      }else{
        this.loadingController.dismiss()
        this.utilities.notificacionUsuario("Ocurrio un error, revise su conexión","danger")
      }

  }

  seleccionarFuente() {
    return new Promise(async resolve => {

      const alert = await this.alertController.create({
        header: 'Seleccionar Imágen',
        message: '¿Qué desea hacer?',
        cssClass: 'customMensaje1',
        buttons: [
          {
            text: "Tomar Foto",
            cssClass: 'confirmButton',
            handler: () => {
              resolve(true);
            }
          },
          {
            text: "Buscar en Galería",
            cssClass: 'confirmButton',
            handler: () => {
              resolve(false);
            }
          }
        ]
      });

      await alert.present();
    });
  }

  async captureImage(index) {
    let st = this.camera.PictureSourceType.CAMERA;
    await this.seleccionarFuente().then((result: boolean) => {
      if (result) {
        st = this.camera.PictureSourceType.CAMERA;
      } else {
        st = this.camera.PictureSourceType.PHOTOLIBRARY;
      }
    });

    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.DATA_URL,
      mediaType: this.camera.MediaType.PICTURE,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: st,
      allowEdit: true,
      targetWidth: 300,
      targetHeight: 300
    }

    this.camera.getPicture(options).then((imageData) => {

      if(index == 1){//frente
        this.imgSelected = null
        this.imgSelected = 'data:image/jpeg;base64,' + imageData;
        // 'data:image/jpeg;base64'
        this.form.controls.avatar.setValue(this.imgSelected)
        console.log("imagen" , this.imgSelected)
      }
      // this.form.controls['fotoPerfil'].setValue(imageData);
     }, (err) => {
      // Handle error
      console.log("cameraE", err);
     });
  }


  ConfirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

obje(valor){
  this.valor = valor.target.value;
  this.form.controls.objective.setValue(this.valor)
}


async presentLoading() {
  const loading = await this.loadingController.create({
    message: 'Por favor espere...',
    cssClass: 'my-loading',
  });
  await loading.present();
}

}
