import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { NutricionService } from '../services/nutricion.service';
import { MensajesService } from '../services/mensajes.service';
import { ApiFitechService } from '../services/api-fitech.service';
@Component({
  selector: 'app-porcentajegrasa',
  templateUrl: './porcentajegrasa.page.html',
  styleUrls: ['./porcentajegrasa.page.scss'],
})
export class PorcentajegrasaPage implements OnInit {
  @ViewChild('slide' , {static: true} ) slides: IonSlides;
   slideOpts = {
    initialSlide: 0,
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 20,
  }

  contador:number = 1;
  grasa:number
  validar:any
  genero:number
  index: number;
  cambiarborder:number = 1
  constructor( private ruta: NavController,
              private service: NutricionService,
              private utilities: MensajesService,
              private apiService:ApiFitechService,
              public loadingController: LoadingController) { }

  async ngOnInit() {
    const valor = await this.apiService.cargarNombreUsuario()
    this.genero = valor['gender'];
    console.log("genero",this.genero)
  }


  siguiente(){
    this.slides.slideNext()
  }

  atras(){
    this.slides.slidePrev()
  }


  async goTo(url:string){
    // esperar
    this.presentLoading()
    // funcion para detectar grasa
    this.nivelGrasa()
    // respueta del servidor
     this.validar = await this.service.grease(this.grasa) 
     this.loadingController.dismiss()
    //  validacion
       if(this.validar){
        this.ruta.navigateForward(url);
       }else{
        this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger')
       }
  }

  nivelGrasa(){
    if(this.contador === 1){
      this.grasa = 3
    }
    if(this.contador === 2){
      this.grasa = 9
    }
    if(this.contador === 3){
      this.grasa = 13
    }
    if(this.contador === 4){
      this.grasa = 16
    }
    if(this.contador === 5){
      this.grasa = 21
    }
    if(this.contador === 6){
      this.grasa = 26
    }
    if(this.contador === 7){
      this.grasa = 31
    }
    if(this.contador === 8){
      this.grasa = 40
    }
    if(this.contador === 9){
      this.grasa = 45
    }

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Por favor espere...',
      cssClass: 'my-loading',
    });
    await loading.present();
  }

  devolver(){
    this.ruta.pop();
  }

  progressBar(){
    if(this.genero == 1){
      console.log("que recibe el progre",this.contador)
      if((this.contador*100/8)/100 >= 1){
        return 1;
      }else{
        return (this.contador*100/8)/100;
      }
    }else{
      if((this.contador*100/9)/100 >= 1){
        return 1;
      }else{
        return (this.contador*100/9)/100;
      }
    }

  }


  async carrusel(){
    this.index = await this.slides.getActiveIndex();
    console.log(this.index)
    this.cambiarborder = this.index + 1;
    this.contador = this.cambiarborder
    this.progressBar()
  }


}
