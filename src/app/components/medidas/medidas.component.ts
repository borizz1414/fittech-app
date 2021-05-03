import { Component, OnInit } from '@angular/core';
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { LoadingController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-medidas',
  templateUrl: './medidas.component.html',
  styleUrls: ['./medidas.component.scss'],
})
export class MedidasComponent implements OnInit {
  form: FormGroup;  
  formpeso: FormGroup;


  constructor(private service: ApiFitechService, private utilities: MensajesService,
              private usuarioService: UsuarioService,
              private apiService:ApiFitechService,
              private fb: FormBuilder,
              public loadingController: LoadingController,) {

    this.form = this.fb.group({
      weight:[null, Validators.required],
      stature:[null,Validators.required],
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
      profile_photo:[null],
      front_photo:[null],
      back_photo:[null],
    });
     
  }
  



  ngOnInit() {
    this.getData()
  }

  async getData(){
    this.presentLoading()
    const valor:any = await this.service.obtenerUsuario()
    console.log(valor)
    this.loadingController.dismiss()
      if(valor == false){
      this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger')
      }else{

        console.log(valor['measurement_record'])
        console.log(valor['user'].stature)
         this.form.controls.stature.setValue(valor.measurement_record === null ? valor['user'].stature  : valor['measurement_record'].stature)
         this.form.controls.weight.setValue(valor.measurement_record === null ?  valor['user'].weight  : valor['measurement_record'].weight)
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
         this.form.controls.profile_photo.setValue(valor['measurement_record'].profile_photo)
         this.form.controls.front_photo.setValue(valor['measurement_record'].front_photo)
         this.form.controls.back_photo.setValue(valor['measurement_record'].back_photo)
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

    this.presentLoading()
    const data = await this.usuarioService.measurement_record(this.form.value)
    this.loadingController.dismiss()
    console.log(data)
    if(data){
      this.utilities.notificacionUsuario('Medidas actualizado' , "dark")
    }else{
      this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger')
    }

  }

}
