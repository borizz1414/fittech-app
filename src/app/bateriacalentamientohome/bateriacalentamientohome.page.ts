import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RutinasService } from '../rutinas.service';
import { NavController, Platform, AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bateriacalentamientohome',
  templateUrl: './bateriacalentamientohome.page.html',
  styleUrls: ['./bateriacalentamientohome.page.scss'],
})
export class BateriacalentamientohomePage  {
  URL = environment.url
  @ViewChild('myVideo', {static: false}) txtVideo: ElementRef;
  rutinas: any = [];
  status = 'rutina';
  secuencia = 1;
  actual = 0;
  total: number;
  video: string;
  video2: string;
  btn: boolean;
  tiemposegundo: NodeJS.Timeout;
  timeLeft: number;
  zero: number;
  mostrar: boolean = true;
  audio: HTMLAudioElement;
  sonido = "../../../assets/sonido/reloj.mp3";
  sonido2 = "../../../assets/sonido/campana.mp3";
  imagen: string;
  data: any = [];
  final: any;
  stages: number;
  ready: boolean;
  pausarApp:any;
  ReanudarAPP:any;
  nombre : any;

  constructor(private service: RutinasService, private navCtrl: NavController,public platform: Platform,
              public alertController: AlertController) {
    // SE SUBCRIBE CUANDO LA RUTINA ES PAUSADA
    this.pausarApp =  this.platform.pause.subscribe(async () => {
      this.pauseTimer()
   });
   // SE SUBCRIBE CUANDO LA RUTINA SE REANUDA
  this.ReanudarAPP =  this.platform.resume.subscribe(async () => {
      this.alerta()
   });

   }

   async ngOnInit() {
    this.data = await this.service.getCalentamiento();
    this.setValues();
    this.startVideo();
  }

  setValues() {

    this.final = this.data['ejercicios Calentamiento'].length;
    this.total = this.data['ejercicios Calentamiento'].length;
  }

  async startVideo() {
    this.ready = false;
    this.setValues();
    this.video = `${this.URL}/videos/${this.data['ejercicios Calentamiento'][this.actual].cod}/${this.data['ejercicios Calentamiento'][this.actual].url}`
    this.mostrar = true;
    this.timeLeft = 30;
    var b = setInterval(() => {
      if (this.txtVideo.nativeElement.readyState === 4) {
        this.txtVideo.nativeElement.play();
        this.ready = true;
        //cronometro
        clearInterval(b);
        this.startTimer();
      }
    }, 1500);
  }

  startTimer() {
    this.btn = true;
    this.zero = null;
    this.tiemposegundo = setInterval(() => {

      if (this.timeLeft <= 10) {
        console.log("activate")
        this.zero = 0
      }

      if (this.timeLeft === 1) {
        this.playSonido(2)
      }
      if (this.timeLeft > 1 && this.timeLeft <= 5) {
        this.playSonido(1)
      }
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 0;
        this.siguiente();
        this.txtVideo.nativeElement.pause()
      }
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.tiemposegundo);
    this.txtVideo.nativeElement.pause()
    this.mostrar = false
  }

  playTimer() {
    this.startTimer()
    this.mostrar = true
    this.txtVideo.nativeElement.play()
  }

  playSonido(valor) {
    this.audio = new Audio();
    if(valor == 1){   
      this.audio.src = this.sonido;
    }else{
      this.audio.src = this.sonido2;
    }
    this.audio.load();
    this.audio.play();
  }



  siguiente() {

    if (this.actual == this.total) {
      this.actual = 0;
      this.secuencia++;
      clearInterval(this.tiemposegundo);
      this.timerDescanse();
      this.status = 'descanso';
      //mandar el timmer de 5segundo
      this.timeLeft = 5;
    } else {
      this.actual++;
      console.log('Actual', this.actual);
      console.log('total', this.total);
      console.log('Rutina', this.data);
      if(this.actual == 4){
        clearInterval(this.tiemposegundo);
        this.tiemposegundo = null
        this.navCtrl.navigateRoot('/bateriacalentamientofinalizar')
      }else if (this.actual == this.total) {
        this.secuencia++;
        this.actual = 0;
        this.setValues();
        clearInterval(this.tiemposegundo);
        this.timerDescanse();
        //mandar el timmer de 5segundo
        this.timeLeft = 5;
        this.status = 'descanso';
      } else{
        clearInterval(this.tiemposegundo);
        this.timerDescanse();
        //mandar el timmer de 5segundo
        this.timeLeft = 5;
        this.status = 'descanso';
      }
    }

  }

  atras() {
    if (this.actual < 1) {
      clearInterval(this.tiemposegundo);
      this.navCtrl.pop();
    } else {
      clearInterval(this.tiemposegundo);
      this.actual = this.actual - 1
      this.timerDescanse();
      //mandar el timmer de 5segundo
      this.timeLeft = 5;
      this.status = 'descanso';
    }
  }

  async timerDescanse() {

    this.zero = null
    // this.imagen = `${this.URL}/imagenes/${this.data['ejercicios Calentamiento'][this.actual].cod}/${this.data['ejercicios Calentamiento'][this.actual].id}.jpg`;
    this.video2 = `${this.URL}/videos/${this.data['ejercicios Calentamiento'][this.actual].cod}/${this.data['ejercicios Calentamiento'][this.actual].url}`;
  
    this.tiemposegundo = setInterval(() => {
      if (this.timeLeft >= 1) {
        this.playSonido(1)
      }
      
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 0;
        this.siguiente_();
      }
    }, 1000)
  }


  atras_() {
    clearInterval(this.tiemposegundo);
    this.status = 'rutina';
    this.startVideo();
  }



  siguiente_() {
    clearInterval(this.tiemposegundo);
    this.status = 'rutina';
    this.startVideo();
  }

    // mensaje de reanudar
    async alerta() {
      const alert = await this.alertController.create({
        header: 'La sesión ha sido pausada',
        cssClass: 'customMensaje1',
        buttons: [
          {
            text: 'Continuar',
            role: 'cancel',
            cssClass: 'cancelButton',
            handler: (blah) => {
              if( this.status == 'descanso'){
                this.timerDescanse()
              }else{
                this.playTimer()
              }
            }
          }, {
            text: 'Finalizar',
            cssClass: 'confirmButton',
            handler: () => {
              // mensaje confirmacion
              this.confirmarSalida()
            }
          }
        ]
  
      });
  
      await alert.present();
    }
    // mensaje de reanudar
    async confirmarSalida() {
      const alert = await this.alertController.create({
        header: 'Si finalizas aquí no contará la sesión ¿seguro quieres finalizar?',
        cssClass: 'customMensaje1',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            cssClass: 'cancelButton',
            handler: (blah) => {
               if( this.status == 'descanso'){
                  this.siguiente_()
               }else{
                 this.playTimer()
               }
            }
          }, {
            text: 'Si',
            cssClass: 'confirmButton',
            handler: () => {
              clearInterval(this.tiemposegundo) 
              this.navCtrl.navigateRoot("tabs/dashboard")
            }
          }
        ]
  
      });
  
      await alert.present();
    }
  
  // cierra la subcripcion
  ionViewWillLeave(){
    console.log("cerrar la supcripcion")
    clearInterval(this.tiemposegundo)
    if(this.audio){
      this.audio.pause();
    }
    this.ReanudarAPP.unsubscribe();
    this.pausarApp.unsubscribe();
  }

  
}
