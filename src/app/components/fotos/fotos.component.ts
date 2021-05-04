import { Component, OnInit } from '@angular/core';
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController, ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ModalFotosPage } from 'src/app/modal-fotos/modal-fotos.page';
import { ModalInfoPage } from 'src/app/modal-info/modal-info.page';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss'],
})
export class FotosComponent implements OnInit {
  form: FormGroup;  
  perfil:any;
  frente:any;
  espalda:any;

  constructor(private service: ApiFitechService, private utilities: MensajesService,
              private usuarioService: UsuarioService,
              private apiService:ApiFitechService,
              private fb: FormBuilder,
              private camera: Camera, 
              private alertCtrl: AlertController,
              public modalController: ModalController,
              public loadingController: LoadingController,) {

    this.form = this.fb.group({
      weight:[null ,Validators.required],
      stature:[null,Validators.required],
      min_waist:[null,Validators.required],
      max_waist:[null,Validators.required],
      hip:[null,Validators.required],
      neck:[null,Validators.required],
      right_thigh:[null,Validators.required],
      left_thigh:[null,Validators.required],
      right_arm:[null,Validators.required],
      left_arm:[null,Validators.required],
      right_arm_flexed:[null,Validators.required],
      left_arm_flexed:[null,Validators.required],
      right_calf:[null,Validators.required],
      left_calf:[null,Validators.required],
      torax:[null,Validators.required],
      waist_hip:[null],
      profile_photo:[null,Validators.required],
      front_photo:[null,Validators.required],
      back_photo:[null,Validators.required],
    });
     
  }


  ngOnInit() {
    this.getData()
  }

  async getData(){
    this.presentLoading()
    const valor:any = await this.service.obtenerUsuario()
    if(valor == false){
        this.loadingController.dismiss()
      this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger')
      }else{
      
        console.log(valor['measurement_record'] , "datos traido")
         this.perfil =  valor.measurement_record === null ? null  : 'https://smartbunnypruebas.com/fotos/grasa/' + valor['measurement_record'].profile_photo
         this.espalda = valor.measurement_record === null ? null  :'https://smartbunnypruebas.com/fotos/grasa/' + valor['measurement_record'].back_photo
         this.frente =  valor.measurement_record === null ? null  :'https://smartbunnypruebas.com/fotos/grasa/' + valor['measurement_record'].front_photo
         

         this.form.controls.stature.setValue(valor.measurement_record === null ? null  : valor['measurement_record'].stature)
         this.form.controls.weight.setValue(valor.measurement_record === null ? null  : valor['measurement_record'].weight)
         this.form.controls.min_waist.setValue(valor.measurement_record === null ? null  : valor['measurement_record'].min_waist)
         this.form.controls.max_waist.setValue(valor.measurement_record === null ? null  : valor['measurement_record'].max_waist)
         this.form.controls.hip.setValue(valor.measurement_record === null ? null  : valor['measurement_record'].hip)
         this.form.controls.neck.setValue(valor.measurement_record === null ? null  : valor['measurement_record'].neck)
         this.form.controls.right_thigh.setValue(valor.measurement_record === null ? null  : valor['measurement_record'].right_thigh)
         this.form.controls.left_thigh.setValue(valor.measurement_record === null ? null  : valor['measurement_record'].left_thigh)
         this.form.controls.right_arm.setValue(valor.measurement_record === null ? null  : valor['measurement_record'].right_arm)
         this.form.controls.left_arm.setValue(valor.measurement_record === null ? null  : valor['measurement_record'].left_arm)
         this.form.controls.right_arm_flexed.setValue(valor.measurement_record === null ? null  : valor['measurement_record'].right_arm_flexed)
         this.form.controls.left_arm_flexed.setValue(valor.measurement_record === null ? null  : valor['measurement_record'].left_arm_flexed)
         this.form.controls.right_calf.setValue(valor.measurement_record === null ? null  : valor['measurement_record'].right_calf)
         this.form.controls.left_calf.setValue(valor.measurement_record === null ? null  : valor['measurement_record'].left_calf)
         this.form.controls.torax.setValue(valor.measurement_record === null ? null  : valor['measurement_record'].torax)

         this.form.controls.profile_photo.setValue(null)
         this.form.controls.front_photo.setValue(null)
         this.form.controls.back_photo.setValue(null)

           this.loadingController.dismiss()
      }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Por favor espere...',
      cssClass: 'my-loading',
    });
    await loading.present();
  }

  async update(){

    if(this.form.valid){
      this.presentLoading()
      const data = await this.usuarioService.measurement_record(this.form.value)
      this.loadingController.dismiss()
      console.log(data)
      if(data){
        console.log(this.form.value)
        this.utilities.notificacionUsuario('Fotos actualizado' , "dark")
        this.ngOnInit()
      }else{
        this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger')
      }
    }else{
      console.log(this.form.value)
      if(this.form.controls.front_photo.value == null || this.form.controls.profile_photo.value == null || this.form.controls.back_photo.value == null){
        this.utilities.notificacionUsuario('Todas las imagenes son requeridas', 'danger')
      }else{
        this.utilities.notificacionUsuario('Debes completar las medidas para subir imágenes', 'danger')
      }
    }

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
      quality: 45,
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
        this.frente = null
        this.frente = 'data:image/jpeg;base64,' + imageData;
        // 'data:image/jpeg;base64'
        this.form.controls.front_photo.setValue(imageData)
        console.log("imagen" , imageData)
        console.log("image frente",this.form.controls.front_photo.value)

      }
      if(index == 2){//perfil
        this.perfil = null;
        this.perfil = 'data:image/jpeg;base64,' + imageData;
        this.form.controls.profile_photo.setValue(imageData)
        console.log("imagen" , imageData)
        console.log("image perfil",this.form.controls.profile_photo.value)
      }

      if(index == 3){//espalda
        this.espalda = null;
        this.espalda = 'data:image/jpeg;base64,' + imageData;
        this.form.controls.back_photo.setValue(imageData)
        console.log("imagen" , imageData)
        console.log("image espalda",this.form.controls.back_photo.value)
      }
      // this.form.controls['fotoPerfil'].setValue(imageData);
     }, (err) => {
      // Handle error
      console.log("cameraE", err);
     });
  }

  seleccionarFuente() {
    return new Promise(async resolve => {

      const alert = await this.alertCtrl.create({
        header: 'Seleccionar Imágen',
        cssClass: 'uploadmessage',
        message: '¿Qué desea hacer?',
        buttons: [
          {
            text: "Tomar Foto",
            cssClass: 'btn_alert',
            handler: () => {
              resolve(true);
            }
          },
          {
            text: "Buscar en Galería",
            cssClass: 'btn_alert',
            handler: () => {
              resolve(false);
            }
          }
        ]
      });

      await alert.present();
    });
  }


  async modal(event){
    console.log(event)

    // if(event.includes("1609976752356.jpg") || null){
    //   return
    // }


      const modal = await this.modalController.create({
        component: ModalInfoPage,
        cssClass: 'medida-modal',
        componentProps:{
          imagen: event
        }
      })
    
      await modal.present();
    
  }






}
