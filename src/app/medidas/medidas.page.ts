import {
  Component,
  OnInit
} from '@angular/core';
import {
  NavController, AlertController, LoadingController, ModalController
} from '@ionic/angular';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl
} from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { MensajesService } from '../services/mensajes.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import { ModalMedidasPage } from '../modal-medidas/modal-medidas.page';
import { ApiFitechService } from '../services/api-fitech.service';
declare var window:any;
@Component({
  selector: 'app-medidas',
  templateUrl: './medidas.page.html',
  styleUrls: ['./medidas.page.scss'],
})
export class MedidasPage implements OnInit {
  
  form: FormGroup;
  form_: FormGroup;
  imgSelected2: any;
  imgSelected: any ;
  imgUri: any;
  imgSelected3: any ;

  constructor(private ruta: NavController, private fb: FormBuilder, 
              private service: UsuarioService, private utilities: MensajesService, 
              private apiservice: ApiFitechService,
              public loadingController: LoadingController,private camera: Camera, 
              public modalController: ModalController,
              private webView: WebView, private alertCtrl: AlertController) {
    this.form = this.fb.group({
      min_waist:[null, Validators.required],
      max_waist:[null,Validators.required],
      hip:[null,Validators.required],
      neck:[null,Validators.required],
      right_thigh:[null,Validators.required],
      left_thigh:[null,Validators.required],
      right_arm:[null, Validators.required],
      left_arm:[null,Validators.required],
      right_arm_flexed:[null, Validators.required],
      left_arm_flexed:[null,Validators.required],
      right_calf:[null,Validators.required],
      left_calf:[null,Validators.required],
      torax:[null, Validators.required],
      waist_hip:[null],
      profile_photo:[null,Validators.required], 
      front_photo:[null,Validators.required],   
      back_photo:[null,Validators.required],    
      min_waist_:['Cm', Validators.required],
      max_waist_:['Cm',Validators.required],
      hip_:['Cm',Validators.required],
      neck_:['Cm',Validators.required],
      right_thigh_:['Cm', Validators.required],
      left_thigh_:['Cm',Validators.required],
      right_arm_:['Cm', Validators.required],
      left_arm_:['Cm',Validators.required],
      right_arm_flexed_:['Cm', Validators.required],
      left_arm_flexed_:['Cm',Validators.required],
      right_calf_:['Cm', Validators.required],
      left_calf_:['Cm',Validators.required],
      torax_:['Cm',Validators.required],
      waist_hip_:['Cm',Validators.required],
        // profile_photo_:[null],
        // back_photo_:[null],
        weight:['',  Validators.required],
        stature:['', Validators.required],
    });
  
  }

  ngOnInit() {
    this.getData()
  }


  async getData(){
    this.presentLoading()
    const valor:any = await this.apiservice.obtenerUsuario()
    console.log(valor)
    this.loadingController.dismiss()
      if(valor == false){
      this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger')
      }else{
         console.log(valor['user'])
         this.form.controls.stature.setValue(valor['user'].stature)
         this.form.controls.weight.setValue(valor['user'].weight)
      }
  }

  goTo(url: string) {
    this.ruta.navigateForward(url);
  }

  atras() {
    this.ruta.pop();
  }

  change(controller: string){
    console.log(this.form.controls[controller+'_'].value);
    if(this.form.controls[controller+'_'].value === 'Pulgadas'){
      this.form.controls[controller].setValue(Math.round(this.form.controls[controller].value/2.54));
      console.log(this.form.controls[controller+'_'].value);
      
    }else{
      this.form.controls[controller].setValue(Math.round(this.form.controls[controller].value*2.54));

    }
    //this.convertToCm();
  }
  decimalFormat(e: KeyboardEvent, input:string){  //evita el ingreso de caracteres no numericos
    let telefono : string;
    telefono = this.form.controls[input].value;
 console.log(e.key);
  if(e.key == "Backspace" || e.key == "ArrowLeft" || e.key == "ArrowRight" || e.key == ","){
       return;
   }
   if(e.key == "." && telefono.includes('.')){
    this.phoneFormatView(parseFloat(telefono).toFixed(1), input);
   }
   
   if(e.key == "."){
     this.phoneFormatView(parseFloat(telefono).toFixed(1), input);
   }
   if(telefono.includes('.')){
    this.phoneFormatView(parseFloat(telefono).toFixed(1), input);
   }
}

phoneFormatView(num:any, input:string){  //formatea la vista del número
  var multiplier = Math.pow(10, 1 );
/*     return ; */
/*   console.log()
  ; */

  console.log((Math.round(num * multiplier) / multiplier));
   this.form.controls[input].setValue((Math.round(num * multiplier) / multiplier).toFixed(1));
   
    // this.telefono = format;
}


  convertToCm(){
    let objects = Object.keys(this.form.value);
    objects.forEach((elemento, indice, array) =>{
      if(indice < 14){   
        let element = String(elemento+'_');
        console.log(this.form.controls[elemento+'_'].value);
        if(this.form.controls[element].value == 'Pulgadas'){
          this.form.controls[elemento].setValue(Math.round(this.form.controls[elemento].value*2.54));
        }
      }
  });
    console.log(this.form.value);
  }

  async measurement_record(){

    if (!this.forms.valid){
      this.confirmarSalida()
    }else{
      // console.log(this.form.value)
      this.presentLoading()
        this.convertToCm();      
        const data = await this.service.measurement_record(this.form.value)
        console.log(data)
        if(data){
          this.loadingController.dismiss()
          // this.form.reset();
          this.goTo('/lineanutricional')
        }else{
          this.loadingController.dismiss()
          this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger')
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
        this.imgSelected = null
        this.imgSelected = 'data:image/jpeg;base64,' + imageData;
        // 'data:image/jpeg;base64'
        this.form.controls.front_photo.setValue(imageData)
        this.imgUri = imageData;
        console.log("imagen" , imageData)
        console.log("image frente",this.form.controls.front_photo.value)

      }
      if(index == 2){//perfil
        this.imgSelected2 = null;
        this.imgSelected2 = 'data:image/jpeg;base64,' + imageData;
        this.form.controls.profile_photo.setValue(imageData)
        this.imgUri = imageData;
        console.log("imagen" , imageData)
        console.log("image perfil",this.form.controls.profile_photo.value)
      }

      if(index == 3){//espalda
        this.imgSelected3 = null;
        this.imgSelected3 = 'data:image/jpeg;base64,' + imageData;
        this.form.controls.back_photo.setValue(imageData)
        this.imgUri = imageData;
        console.log("imagen" , imageData)
        console.log("image espalda",this.form.controls.back_photo.value)
      }
      // this.form.controls['fotoPerfil'].setValue(imageData);
     }, (err) => {
      // Handle error
      console.log("cameraE", err);
     });
  }

  async alerta() {
    const alert = await this.alertCtrl.create({
      header: 'Si no lo haces ahora, puedes hacerlo luego en el apartado de "medidas" dentro de tu perfil.  No pierdas la posibilidad de comparar tus medidas posteriormente, cada 6 a 8 semanas te vamos a recordar para poder comparar tu progreso y cuantificarlo.',
      cssClass: 'customMensaje1',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'cancelButton',
          handler: (blah) => {
           
          }
        }, {
          text: 'Saltar',
          cssClass: 'confirmButton',
          handler: () => {
            // mensaje confirmacion
           
          }
        }
      ]

    });

    await alert.present();
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

  get forms(){
    return this.form;
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Por favor espere...',
      cssClass:'my-loading'
    });
    await loading.present();
  }


  async modal(event){
    // console.log(event)
  
    const modal = await this.modalController.create({
      component: ModalMedidasPage,
      cssClass: 'medida-modal',
      componentProps:{
        nombre: event
      }
    })
  
    await modal.present();

  }



 

  async confirmarSalida() {
    const alert = await this.alertCtrl.create({
      header: 'Si no lo haces ahora, puedes hacerlo luego en el apartado de "medidas" dentro de tu perfil. No pierdas la posibilidad de comparar tus medidas posteriormente, cada 6 a 8 semanas te vamos a recordar para poder comparar tu progreso y cuantificarlo.',
      cssClass: 'customMensaje1',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'cancelButton',
          handler: (blah) => {
             console.log(blah)
          }
        }, {
          text: 'Si',
          cssClass: 'confirmButton',
          handler: () => {
            this.goTo('/lineanutricional')
          }
        }
      ]

    });

    await alert.present();
  }

  // checkStature(event){
  //   console.log(event);
  //   this.form.controls.stature.setValue(event)
  // }

  // checkPeso(event){
  //   console.log(event);
  //   this.form.controls.weight.setValue(event)
  // }

}